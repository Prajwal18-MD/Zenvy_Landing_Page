const ZENVY_URLS = {
  patient: 'https://zenvy.co.in/user',
  doctorAdmin: 'https://zenvy.co.in/pro/'
};

const featureVideos = {
  doctor: '',
  receptionist: '',
  patient: '',
  appointments: '',
  queue: '',
  consultation: '',
  billing: '',
  inventory: '',
  records: ''
};

const topicContent = {
  appointment: 'ZENVY helps connect appointment scheduling with doctor availability, patient coordination and the broader clinic workflow.',
  queue: 'ZENVY gives clinics a clearer view of patient flow so waiting time, readiness and staff coordination stay connected.',
  billing: 'ZENVY ties billing activity to appointments, consultations and patient records so clinic operations stay aligned.',
  inventory: 'ZENVY helps track medicines, products and usage in context with patient care and clinic operations.',
  records: 'ZENVY keeps patient information connected across consultations, follow-ups and treatment history for better continuity.',
  reception: 'ZENVY supports reception teams with registration, queue coordination and scheduling visibility in one operation hub.',
  consultation: 'ZENVY helps doctors move from patient information to consultation, prescriptions and follow-up without losing context.'
};

const featureMeta = {
  doctor: {
    title: 'ZENVY Doctor Management Demo',
    description: 'A demo experience highlighting doctor workflow, patient context and consultation coordination.'
  },
  receptionist: {
    title: 'ZENVY Receptionist Workflow Demo',
    description: 'A demo experience showing registration, appointments, queue visibility and operational coordination.'
  },
  patient: {
    title: 'ZENVY Patient App Demo',
    description: 'A demo experience dedicated to patient discovery, appointment booking and access to care information.'
  },
  appointments: {
    title: 'ZENVY Appointment Management Demo',
    description: 'A demo experience for clinic scheduling, doctor availability and appointment tracking.'
  },
  queue: {
    title: 'ZENVY Queue Management Demo',
    description: 'A demo experience for coordinating patient flow, waiting status and clinic readiness.'
  },
  consultation: {
    title: 'ZENVY Consultation Demo',
    description: 'A demo experience for review, consultation workflow and patient-facing clinical actions.'
  },
  billing: {
    title: 'ZENVY Billing Demo',
    description: 'A demo experience for bill generation, payment tracking and billing history visibility.'
  },
  inventory: {
    title: 'ZENVY Inventory Demo',
    description: 'A demo experience for stock tracking, medicine visibility and inventory management.'
  },
  records: {
    title: 'ZENVY Patient Records Demo',
    description: 'A demo experience for patient history, digital records and treatment continuity.'
  }
};

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    body: `
      <div class="legal-content">
        <p><strong>Zenvy</strong> is committed to protecting the privacy of patients, doctors, clinic staff, and visitors using our platform. This Privacy Policy covers the data collected through www.zenvy.co.in, the Zenvy mobile app, and related digital services.</p>
        <h3>What information we collect</h3>
        <p>We may collect contact information, demographic details, appointment and service usage data, health-related information, practitioner details, and voluntary submissions received through email, calls, forms, or support interactions. This can include names, phone numbers, email IDs, date of birth, gender, address, consultation history, and other sensitive personal information necessary to deliver clinical services.</p>
        <h3>How we use that information</h3>
        <ul>
          <li>To help patients book appointments, track queues, and access care records.</li>
          <li>To help doctors and clinics manage consultations, billing, follow-ups, and clinic operations.</li>
          <li>To improve platform performance, communication quality, and service reliability.</li>
          <li>To support account management, support requests, and transaction processing.</li>
        </ul>
        <h3>Sharing and disclosure</h3>
        <p>Zenvy may share data with authorized service providers, payment processors, clinic staff, and technology vendors only where required to deliver the platform or as permitted by law. We do not sell or monetize personal health information. We also use reasonable technical and organizational safeguards to protect sensitive data.</p>
        <h3>Security and consent</h3>
        <p>The platform follows privacy and security best practices, including encrypted communication, access controls, and internal data handling policies. By using Zenvy, you consent to the collection and processing of data required for the services you use, and you acknowledge that your information may be retained as needed for legal, operational, or service requirements.</p>
        <h3>Rights and communications</h3>
        <p>Users may request support, account deletion, or data-related assistance through Zenvy support channels. Communications, alerts, reminders, and service updates may be sent via calls, SMS, email, or WhatsApp, subject to applicable consent and preferences.</p>
      </div>
    `
  },
  terms: {
    title: 'Terms & Conditions',
    body: `
      <div class="legal-content">
        <p>These Terms &amp; Conditions form the agreement between you and Zenvy for use of the Zenvy platform and related services, including appointment booking, patient management, queue coordination, doctor access, and clinic operations.</p>
        <h3>Eligibility and account responsibility</h3>
        <p>You must be an eligible adult and agree to provide accurate information when registering or using the platform. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.</p>
        <h3>Patient and caregiver use</h3>
        <ul>
          <li>Zenvy is a platform for discovery, scheduling, and service coordination; it is not a replacement for emergency care or direct doctor-patient relationship creation.</li>
          <li>Patients are responsible for verifying practitioner availability, appointment details, and healthcare information independently.</li>
          <li>Content and health information displayed on the platform are provided on an “as is” basis and may be updated without notice.</li>
        </ul>
        <h3>Practitioner and clinic use</h3>
        <p>Doctors and clinics are responsible for keeping profile information, clinical schedules, and operational data accurate and compliant with applicable Indian laws. Zenvy may review or remove content that violates law, public safety, or platform terms.</p>
        <h3>Content and platform rights</h3>
        <p>Zenvy owns the rights to platform content, branding, software, and system design. Users may access the platform for lawful use only and may not copy, distribute, reverse engineer, or extract proprietary content without permission.</p>
        <h3>Termination, liability, and dispute resolution</h3>
        <p>Zenvy may suspend or terminate access for fraud, misuse, misinformation, or policy violations. To the maximum extent permitted by law, Zenvy limits liability for indirect or consequential damages, and disputes are governed by Indian law, with arbitration in Bengaluru, India.</p>
        <h3>Notifications and updates</h3>
        <p>We may update these terms from time to time. Continued use of the platform after an update indicates acceptance of the revised terms and conditions.</p>
      </div>
    `
  },
  security: {
    title: 'Security Overview',
    body: `
      <div class="legal-content">
        <p>Zenvy is designed to protect patient information and clinic operations through secure access controls, encrypted communication, and role-based permissions.</p>
        <h3>Key security principles</h3>
        <ul>
          <li><strong>Encrypted communication:</strong> Web dashboards, patient links, and system communications use secure HTTPS connections.</li>
          <li><strong>Role-based access:</strong> Doctors, reception staff, and administrators only access the information required for their role.</li>
          <li><strong>Patient privacy:</strong> Clinical records are segmented so only authorized healthcare users can review sensitive patient history.</li>
          <li><strong>Compliance-first operations:</strong> Data handling is designed to support privacy-first healthcare workflows and responsible clinic management.</li>
          <li><strong>Communication control:</strong> SMS and WhatsApp-based notifications include opt-out support so patients can stop receiving alerts when they choose.</li>
        </ul>
        <h3>Data handling</h3>
        <p>Zenvy does not sell or monetize personal health data. Patient demographic and medical information are processed to deliver appointment coordination, queue updates, prescriptions, records, and clinic operations only. Audit trails, secure sessions, and access controls help reduce misuse and strengthen accountability.</p>
        <h3>Support and transparency</h3>
        <p>If you have questions about privacy, patient communication, or platform security, contact the Zenvy support team at privacy@zenvyhealth.com or support@zenvyhealth.com.</p>
      </div>
    `
  }
};

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.ZENVY_GOOGLE_SHEETS = window.ZENVY_GOOGLE_SHEETS || {
  support: 'https://script.google.com/macros/s/AKfycbyC1YXmwDvZDQeqgyzqsKErxADs42bHCJ023B5uMeo/exec',
  onboarding: 'https://script.google.com/macros/s/AKfycbyC1YXmwDvZDQeqgyzqsKErxADs42bHCJ023B5uMeo/exec',
  patient: 'https://script.google.com/macros/s/AKfycbyC1YXmwDvZDQeqgyzqsKErxADs42bHCJ023B5uMeo/exec'
};

function initLoginCardTargets() {
  const patientCard = document.querySelector('.login-card[data-login-target="patient"]');
  const doctorCard = document.querySelector('.login-card[data-login-target="doctorAdmin"]');

  if (patientCard) {
    patientCard.setAttribute('href', ZENVY_URLS.patient);
  }

  if (doctorCard) {
    doctorCard.setAttribute('href', ZENVY_URLS.doctorAdmin);
  }
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 14);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-menu');
  if (!toggle || !mobileNav) return;

  const setExpanded = (isOpen) => {
    toggle.setAttribute('aria-expanded', String(isOpen));
    mobileNav.classList.toggle('is-open', isOpen);
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!isOpen);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setExpanded(false));
  });
}

function initRevealAnimations() {
  const revealItems = document.querySelectorAll('.reveal');
  if (!revealItems.length) return;

  if (reducedMotion) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initLoginModal() {
  const modal = document.getElementById('loginModal');
  if (!modal) return;

  const triggerButtons = document.querySelectorAll('.login-trigger');
  const closeButton = modal.querySelector('.modal-close');
  const backdrop = modal.querySelector('.modal-backdrop');

  const openModal = () => {
    modal.classList.add('is-visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  triggerButtons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  closeButton.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
      closeModal();
    }
  });
}

function initVideoModal() {
  const modal = document.getElementById('videoModal');
  if (!modal) return;

  const player = document.getElementById('videoPlayer');
  const modalTitle = document.getElementById('videoModalTitle');
  const featureTitle = document.getElementById('videoFeatureTitle');
  const description = document.getElementById('videoFeatureDescription');
  const closeButton = modal.querySelector('.modal-close');
  const backdrop = modal.querySelector('.modal-backdrop');

  const closeModal = () => {
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    player.innerHTML = `
      <div class="video-placeholder" aria-live="polite">
        <div class="play-indicator">▶</div>
        <h3 id="videoModalTitle">ZENVY Product Demo</h3>
        <p>Demo video coming soon</p>
      </div>
    `;
  };

  document.querySelectorAll('.watch-demo').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.videoKey;
      const metadata = featureMeta[key];
      const video = featureVideos[key];

      modal.classList.add('is-visible');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      if (!metadata) return;
      featureTitle.textContent = metadata.title;
      modalTitle.textContent = metadata.title;
      description.textContent = metadata.description;

      if (video) {
        player.innerHTML = `<iframe src="${video}" title="${metadata.title}" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        player.querySelector('iframe').style.width = '100%';
        player.querySelector('iframe').style.height = '100%';
        player.querySelector('iframe').style.minHeight = '360px';
        return;
      }

      player.innerHTML = `
        <div class="video-placeholder" aria-live="polite">
          <div class="play-indicator">▶</div>
          <h3>${metadata.title}</h3>
          <p>Demo video coming soon</p>
        </div>
      `;
    });
  });

  closeButton.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
      closeModal();
    }
  });
}

function initFaq() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const button = item.querySelector('.faq-question');
    if (!button) return;

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach((faqItem) => {
        faqItem.classList.remove('is-open');
        const faqButton = faqItem.querySelector('.faq-question');
        if (faqButton) {
          faqButton.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isOpen) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initTopicSelector() {
  const pills = document.querySelectorAll('.topic-pill');
  const panel = document.getElementById('topic-panel');
  if (!pills.length || !panel) return;

  const updatePanel = (topic) => {
    const content = topicContent[topic] || topicContent.appointment;
    panel.innerHTML = `<p>${content}</p>`;
  };

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((item) => item.classList.remove('is-active'));
      pill.classList.add('is-active');
      updatePanel(pill.dataset.topic);
    });
  });
}

function initSupportButtons() {
  // Direct support actions to WhatsApp with a prefilled message.
  // Uses the clinic WhatsApp number: +91 6361218556
  const WHATSAPP_NUMBER = '916361218556'; // country code +91 + number
  const buttons = document.querySelectorAll('.support-action');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const preset = button.dataset.message || '';
      const targetId = button.dataset.formTarget || '';

      let prefix = 'Hello Zenvy,';
      if (targetId === 'onboardingForm') prefix = 'Hello Zenvy, I would like onboarding for my clinic.';
      if (targetId === 'patientSupportForm') prefix = 'Hello Zenvy, I need patient support.';
      if (targetId === 'supportForm') prefix = 'Hello Zenvy, I need support.';

      const text = `${prefix} ${preset}`.trim();
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

      // Open WhatsApp in a new tab/window — mobile will open WhatsApp app if available.
      window.open(waUrl, '_blank');
    });
  });
}

function initSupportForms() {
  const forms = document.querySelectorAll('.request-form');

  forms.forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const status = form.querySelector('.form-status');
      const formKind = form.dataset.formKind || 'support';
      const rawEndpoint = form.dataset.googleSheetUrl || window.ZENVY_GOOGLE_SHEETS?.[formKind] || '';
      const configuredEndpoint = typeof rawEndpoint === 'string' && rawEndpoint.trim() && !rawEndpoint.toUpperCase().includes('PASTE_') ? rawEndpoint.trim() : '';
      const formPayload = Object.fromEntries(new FormData(form).entries());
      formPayload.formType = formKind;
      formPayload.submittedAt = new Date().toISOString();

      // Primary attempt: serverless endpoint on the same site (recommended for Vercel)
      try {
        const r = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formPayload)
        });

        if (r.ok) {
          const json = await r.json().catch(() => ({}));
          if (status) status.textContent = json && json.success ? 'Request submitted successfully.' : 'Request submitted (no confirmation).';
          form.reset();
          return;
        }
      } catch (err) {
        // continue to fallback options
        console.warn('Primary submit failed:', err);
      }

      // Fallback 1: direct Apps Script / third-party endpoint if configured
      if (configuredEndpoint) {
        try {
          await fetch(configuredEndpoint, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formPayload)
          });
          if (status) status.textContent = 'Request sent successfully to configured endpoint.';
          form.reset();
          return;
        } catch (error) {
          console.warn('Configured endpoint failed', error);
        }
      }

      // Fallback 2: localStorage (safe fallback when no backend available)
      try {
        const savedEntries = JSON.parse(localStorage.getItem('zenvySupportForms') || '[]');
        savedEntries.push(formPayload);
        localStorage.setItem('zenvySupportForms', JSON.stringify(savedEntries));
        if (status) status.textContent = 'Request saved locally. Configure an endpoint to forward these later.';
        form.reset();
        return;
      } catch (error) {
        console.warn('Could not save form data locally.', error);
        if (status) status.textContent = 'Submission failed. Please try again later.';
      }
    });
  });
}

function initLegalModals() {
  const modal = document.getElementById('legalModal');
  if (!modal) return;

  const title = document.getElementById('legalModalTitle');
  const body = document.getElementById('legalModalBody');
  const closeButton = modal.querySelector('.modal-close');
  const backdrop = modal.querySelector('.modal-backdrop');

  const openModal = (type) => {
    const content = legalContent[type];
    if (!content || !title || !body) return;

    title.textContent = content.title;
    body.innerHTML = content.body;
    modal.classList.add('is-visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.legal-trigger').forEach((button) => {
    button.addEventListener('click', () => openModal(button.dataset.legalType || 'privacy'));
  });

  closeButton.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLoginCardTargets();
  initHeaderScroll();
  initMobileMenu();
  initRevealAnimations();
  initLoginModal();
  initVideoModal();
  initFaq();
  initTopicSelector();
  initSupportButtons();
  initSupportForms();
  initLegalModals();
});
