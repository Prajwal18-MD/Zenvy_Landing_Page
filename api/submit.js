/*
  /api/submit.js

  Serverless handler intended for Vercel deployments.
  Behavior:
    1) If SUPABASE_URL + SUPABASE_SERVICE_ROLE are configured, insert into Supabase table `support_requests`.
    2) Else if APPS_SCRIPT_URL is configured, forward payload to that Apps Script exec URL.
    3) Else write submissions to data/submissions.json (local fallback for testing).

  Security note: keep SUPABASE_SERVICE_ROLE secret in Vercel environment variables.
*/

const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  let payload = {};
  try {
    payload = req.body && Object.keys(req.body).length ? req.body : JSON.parse(req.rawBody || '{}');
  } catch (e) {
    payload = {};
  }

  payload.submittedAt = payload.submittedAt || new Date().toISOString();

  const SUPABASE_URL = process.env.SUPABASE_URL || '';
  const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE || '';
  const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || '';

  try {
    // Supabase path (recommended)
    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE) {
      const table = 'support_requests';
      const row = {
        form_type: payload.formType || payload.form_type || 'support',
        full_name: payload.fullName || payload.full_name || '',
        clinic_name: payload.clinicName || payload.clinic_name || '',
        phone: payload.phone || '',
        email: payload.email || '',
        message: payload.message || '',
        submitted_at: payload.submittedAt
      };

      // Insert via Supabase REST (requires anon/service role key)
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_SERVICE_ROLE,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE}`,
          'Content-Type': 'application/json',
          Prefer: 'return=representation'
        },
        body: JSON.stringify([row])
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`Supabase insert failed: ${resp.status} ${text}`);
      }

      return res.status(200).json({ success: true, stored: 'supabase' });
    }

    // Forward to Apps Script if configured
    if (APPS_SCRIPT_URL) {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      return res.status(200).json({ success: true, stored: 'apps_script' });
    }

    // Local fallback: write to data/submissions.json
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    const filePath = path.join(dataDir, 'submissions.json');

    let all = [];
    if (fs.existsSync(filePath)) {
      try {
        all = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
      } catch (e) {
        all = [];
      }
    }

    all.push(payload);
    fs.writeFileSync(filePath, JSON.stringify(all, null, 2), 'utf8');

    return res.status(200).json({ success: true, stored: 'local', path: `/data/submissions.json` });
  } catch (err) {
    console.error('submit error', err);
    return res.status(500).json({ success: false, error: String(err) });
  }
};
