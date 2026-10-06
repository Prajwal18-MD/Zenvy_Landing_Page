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
        <p>STRATOSYS TECH PRIVATE LIMITED, (“we,” “us,” or “Stratasys Tech”), along with its affiliates, is the developer and operator of the internet platform www.zenvy.co.in (“Website”) and associated services, including the mobile application ‘Zenvy’ and other software (collectively referred to as the “Services”). This Privacy Policy outlines the methods through which Zenvy collects, uses, shares, and protects personal information related to users, including practitioners, end-users, and visitors accessing the Website or Services. By utilizing the Services, you signify your agreement with this Privacy Policy as well as the Terms of Use accessible via [insert link(Terms and Condition)]. If you do not accept these terms, please discontinue the use of the Services immediately.</p>
        <p>By providing your information or using the Services, you agree to the data practices described in this Privacy Policy. If you are using the Services on behalf of another individual (e.g., a minor) or an organization (e.g., an employer), you acknowledge your authorization to accept this Privacy Policy and consent to data collection, use, and disclosure on their behalf.</p>
        <p>This Privacy Policy is applicable exclusively to Zenvy’s operations within India, and users in other regions are not covered. Zenvy reserves the right to modify or update this Privacy Policy as necessary, and continued use of the Services confirms your acceptance of any revised terms. We remain steadfast in our commitment to privacy by implementing robust measures to safeguard your personal information and ensure responsible data handling.</p>

        <h3>1. WHY IS THIS PRIVACY POLICY?</h3>
        <p>This Privacy Policy is published in compliance with:</p>
        <p>Section 43A of the Information Technology Act, 2000: Requires entities to implement reasonable security measures for the protection and management of sensitive personal data.</p>
        <p>Regulation 4 of the SPI Rules, 2011: Defines sensitive personal data and specifies the procedures and practices required for its secure handling.</p>
        <p>Regulation 3(1) of the Intermediary Guidelines, 2021 (amended in 2023): Imposes obligations on intermediaries to comply with privacy policies, terms of service, and other requirements to safeguard user data.</p>
        <p>Digital Personal Data Protection Act, 2023 (DPDPA): Establishes a comprehensive framework for digital data processing, highlighting individual rights and the responsibilities of entities handling such data.</p>

        <h3>2. COLLECTION OF PERSONAL INFORMATION</h3>
        <p>To deliver Services effectively, Zenvy may request specific information that identifies you or could identify you. This information is voluntarily provided when accessing the Services or communicating with Zenvy through emails, calls, or other correspondence. By using the Services, you consent to this collection of data. The types of information collected include:</p>
        <ul>
          <li>Contact Information: Email, address and phone number.</li>
          <li>Demographic Details: Gender, date of birth, age, weight, height and postal code.</li>
          <li>Service Usage Data: Details about how you interact with the Services and appointment history.</li>
          <li>Voluntary Submissions: Information shared through emails, letters, or other correspondence, including images or documents.</li>
          <li>Practitioner-Shared Data: Information provided by Practitioners regarding services or treatments received.</li>
        </ul>
        <p>This data may be classified as Personal Information or Sensitive Personal Data or Information under the SPI Rules:</p>
        <ol>
          <li>Personal Information: Refers to data that identifies or can identify a natural person, either alone or in combination with other available information.</li>
          <li>Sensitive Personal Data or Information: Includes passwords, financial details, health records, biometric data, sexual orientation, visitor registration details, call data records, or any other data protected under applicable laws.</li>
        </ol>
        <p>Zenvy may collect and use publicly available information without seeking further consent. This includes any data already in the public domain.</p>

        <h3>3. PRIVACY STATEMENTS</h3>
        <h3>3.1 ALL USERS NOTE: This section applies to all users of the Services.</h3>
        <p>Acceptance of Terms: Using Zenvy’s Services indicates acceptance of the Privacy Policy and Terms of Use. Users who disagree must stop using the Services immediately.</p>
        <p>Data Collection Scope: Zenvy may collect personal details (such as name, contact info, and demographic data) and sensitive data (e.g., health records) as outlined in the Privacy Policy for purposes like service delivery, analytics, and communication.</p>
        <p>Usage of Data:</p>
        <ul>
          <li>To provide Services like appointment booking and communication with Practitioners.</li>
          <li>For research, analytics, and aggregated data sharing (non-personally identifiable).</li>
          <li>Enhancing user experience through improved communication and feedback mechanisms.</li>
          <li>Debugging issues and supporting pending transactions.</li>
        </ul>
        <p>Additional Uses: User data may also be utilized for:</p>
        <ul>
          <li>Identification and publishing on the website.</li>
          <li>Offering new products or services.</li>
          <li>Payment processing with secure third-party platforms.</li>
        </ul>
        <p>Consent to Communication: By accessing the Services or verifying contact details, Users consent to communications (via call, SMS, email) from Zenvy and its representatives, even if their number is registered with DND/NCPR.</p>
        <p>Third-Party Sharing: Necessary data may be shared with third-party providers, affiliates, or agents to facilitate Services.</p>
        <p>Explicit Consent for Sensitive Data: Users affirm acceptance of the Privacy Policy and consent to the collection, use, and disclosure of sensitive data per applicable laws (SPI Rules and DPDPA, 2023).</p>
        <p>Content Liability Disclaimer: Zenvy does not endorse or guarantee the accuracy of content shared through its Services and disclaims liability for any related damages or reliance.</p>
        <p>Account Management:</p>
        <ul>
          <li>Users can request account cancellation via support@zenvy.co.in. Zenvy retains data only as required by law or for anonymized analytics.</li>
          <li>Opt-out options for non-essential communications are available via email.</li>
        </ul>
        <p>Financial Transactions: Payment details (e.g., credit card or bank info) are encrypted and securely processed through authorized third parties. Users can choose not to save payment details.</p>
        <p>Automatic Data Collection: Standard data (e.g., IP address, browser type, cookies) is collected for trend analysis and service improvements. Anonymized data may be shared for business purposes.</p>
        <p>Third-Party Websites: Zenvy disclaims responsibility for third-party websites or links accessed via its platform and encourages Users to review external privacy policies.</p>
        <p>Cookies: Temporary cookies are used for technical purposes. Users can disable cookies via browser settings, but certain features may be affected.</p>
        <p>No-Spam Policy: User email addresses will not be shared, rented, or sold without explicit consent.</p>
        <p>Privacy and Security: Zenvy enforces strong security measures to safeguard personal data but is not liable for breaches caused by third parties, government actions, or unauthorized access to user devices.</p>
        <p>Telemedicine Compliance: Zenvy’s telemedicine services adhere to relevant legal and medical guidelines. Non-compliance can be reported to governing bodies for further action.</p>

        <h3>3.2 PRACTITIONERS NOTE: This section applies to all Practitioners.</h3>
        <p>Data Collection for Registration: Practitioners provide certain personal and sensitive information during registration to use Zenvy’s Services effectively.</p>
        <p>Agreement to Privacy Policy: Practitioners must read and accept the Privacy Policy before submitting any information. Those who disagree are advised to stop using Zenvy and its Website immediately.</p>
        <p>Use of Practitioner Data: Practitioner data is utilized for:</p>
        <ul>
          <li>Publishing profiles on the Website.</li>
          <li>Communicating about new products or services (in compliance with the DNC Registry).</li>
          <li>Collecting product feedback.</li>
          <li>Analysing usage patterns to improve product design.</li>
          <li>Aggregating anonymized practice data for research, statistics, and business intelligence.</li>
        </ul>
        <p>Automatic Practitioner Listings: Zenvy lists Practitioners’ profiles automatically for doctors or clinics added to its platform. Information comes either from Practitioners directly or public domain sources. Practitioners are encouraged to verify and update details regularly to maintain accuracy.</p>
        <p>Onboarding with Clinics: Practitioners can request to join clinics through Zenvy or be invited by clinics. While Zenvy facilitates these actions, it doesn’t hold responsibility for agreements or relationships formed between clinics and Practitioners.</p>
        <p>Unregistered Practitioners: Information of unregistered Practitioners may also be listed, provided consent for collection and processing is obtained. Zenvy strives for accuracy but doesn’t guarantee completeness of details displayed for unregistered Practitioners.</p>
        <p>QR Codes for Practitioners: Registered Practitioners receive unique QR codes, allowing patients to access their profile and book appointments seamlessly. Practitioners must ensure their information is accurate and can request changes or disable the QR code through Zenvy’s support.</p>

        <h3>3.3 CLINIC MANAGEMENT</h3>
        <p>Note: This section applies to all Clinics and Healthcare Institutions using Zenvy.</p>
        <ul>
          <li>Registration and Data Collection: Clinics must provide certain personal and sensitive information during the registration and account creation process to effectively use Zenvy’s services. Additionally, Clinics registering walk-in patients may collect data such as names, contact details, appointment details, and health-related information for managing records and providing better services.</li>
          <li>Agreement to Privacy Policy: Clinics are required to read and accept the Privacy Policy before submitting any information. Those who disagree must discontinue use of the platform immediately. By submitting data related to walk-in patients, Clinics ensure that the patients have been informed of and have agreed to the data collection, as required by applicable law.</li>
          <li>Use of Clinic Data: Data provided by Clinics is collected and used for purposes such as:
            <ul>
              <li>Displaying clinic details on the platform for appointment booking.</li>
              <li>Communicating updates, new features, or enhancements.</li>
              <li>Managing walk-in patient data to facilitate service delivery and maintain accurate health records.</li>
              <li>Gathering feedback to improve Zenvy’s offerings.</li>
              <li>Analysing appointment patterns and operational data for improved recommendations.</li>
              <li>Using anonymized clinic data (e.g., patient footfall, revenue analytics) for research, business intelligence, and statistical purposes.</li>
            </ul>
          </li>
          <li>Walk-In Patients:
            <ul>
              <li>Data Collected: Information such as name, contact details, and health records is collected during registration.</li>
              <li>Purpose: This data is used for appointment scheduling, record keeping, and clinical services.</li>
              <li>Consent: Clinics are responsible for informing walk-in patients about data collection practices and ensuring their consent.</li>
              <li>Retention: Data collected for walk-in patients is retained per the terms outlined in this Privacy Policy.</li>
            </ul>
          </li>
          <li>Automatic Listings: Clinic details are automatically listed on the platform upon registration. Information may come from clinics themselves or public domain records. Clinics are encouraged to routinely verify and update their details to ensure accuracy. Zenvy takes reasonable steps to verify listed data but is not liable for any inaccuracies.</li>
          <li>Unregistered Clinics: Zenvy may display information for clinics that have not actively registered, provided consent has been obtained. However, Zenvy does not take responsibility for errors or incomplete details associated with such listings.</li>
        </ul>

        <h3>3.3 END-USERS NOTE: This section applies to all End-Users.</h3>
        <ul>
          <li>Information Collection: End-Users provide personal and sensitive data during registration, application creation, or service use, which is required for effective delivery of services.</li>
          <li>Privacy Policy Agreement: End-Users must read and accept the Privacy Policy before submitting any data. Those who disagree are advised to stop using Zenvy and its services.</li>
          <li>Data Modification and Deletion: If information is inadvertently submitted without agreement to the Privacy Policy, End-Users can delete or modify it via the Website or request assistance at privacypolicy@zenvy.co.in.</li>
          <li>Use of End-User Data:
            <ul>
              <li>Data helps identify and describe End-Users.</li>
              <li>Non-personally identifiable data is used for research, product improvement, analytics, and business intelligence.</li>
              <li>Anonymized demographic and health information may be shared with third parties for commercial purposes.</li>
            </ul>
          </li>
          <li>Communication Preferences: Zenvy contacts End-Users via email, phone, or text messages. Preferences can be adjusted by logging into their accounts.</li>
          <li>Surveys and Contests: Optional surveys and contests may collect demographic and contact details to improve services. Responses are anonymized.</li>
          <li>“Verified by Zenvy” Badge Services: Data related to treatment, including medical records, is shared with Zenvy to ensure effective service delivery.</li>
          <li>Data Retention: Zenvy retains communication records and call logs for service administration, customer support, and research purposes.</li>
          <li>Data Confidentiality: Zenvy enforces strict confidentiality measures for sensitive data. Employees and third-party processors comply with industry standards and legal requirements.</li>
          <li>Corporate Restructuring: End-User data may be transferred during mergers, acquisitions, or asset sales, and will remain subject to this Privacy Policy.</li>
          <li>Third-Party Data Sharing: Contractors and service providers assisting Zenvy may receive data strictly for service purposes, such as payment processing.</li>
          <li>Doctor QR Codes: End-Users can scan QR codes to access a doctor’s profile and book appointments. Data from QR code scans is only stored if an appointment is booked or services are engaged.</li>
        </ul>

        <h3>3.4 CASUAL VISITORS NOTE: This section applies to all casual visitors of the Website.</h3>
        <p>Data Handling: No sensitive data is automatically collected from casual visitors browsing the Website.</p>
        <p>Agreement to Privacy Policy: Casual visitors must read and accept the Privacy Policy. If they disagree, they are advised to leave the Website.</p>
        <p>Cookie Management: Closing the browser typically removes temporary cookies, but visitors are encouraged to use the “clear cookies” option for complete removal.</p>
        <p>Upgrade to User Status: Casual visitors who submit personal data via email, post, or registration are treated as Users, and all Privacy Policy provisions apply.</p>

        <h3>4. CONFIDENTIALITY AND SECURITY</h3>
        <p>Data Storage: Zenvy stores user information electronically on its systems and those of its employees, with occasional conversion to physical form. Comprehensive security measures—managerial, technical, operational, and physical—are implemented to protect data both online and offline, tailored to the nature of the data and business operations.</p>
        <p>Password Protection: Administrators at Zenvy cannot access user passwords. Users must safeguard their passwords, devices, and accounts, and log off the Website after use. Zenvy is not responsible for unauthorized access or account misuse. Users should report unauthorized access immediately via support@zenvy.co.in and will be held accountable for any losses resulting from such misuse.</p>
        <p>Restricted Access: User information is accessible only to Zenvy’s employees, agents, partners, and authorized third parties on a need-to-know basis, all of whom are bound by strict confidentiality obligations.</p>
        <p>Practitioner Support: Zenvy assists Practitioners in managing user information by retaining and providing access to records when requested or required by appropriate authorities.</p>
        <p>End-User Support: Zenvy helps End-Users access their own information and may share relevant data with their respective Practitioners.</p>
        <p>Liability Limitations: Although Zenvy makes efforts to secure personal data, it is not responsible for breaches or loss caused by factors beyond its control, such as hacking, unauthorized access, government actions, data storage failures, encryption problems, or poor-quality internet services.</p>
        <p>Public Information: Zenvy may collect, use, and disclose publicly available data without needing user consent. This includes information already accessible in the public domain.</p>

        <h3>5. App Permissions</h3>
        <ul>
          <li>Location: Enables access to location-specific product availability and services.</li>
          <li>Camera &amp; Media: Allows uploading of prescriptions and relevant documents.</li>
          <li>SMS &amp; Bluetooth: Supports OTP verification and facilitates video consultations.</li>
          <li>Wi-Fi &amp; Audio: Enhances functionality and optimizes the overall user experience.</li>
        </ul>

        <h3>6. CHANGE TO PRIVACY POLICY</h3>
        <p>Zenvy reserves the right to modify or update this Privacy Policy at any time, with or without prior notice. In case of significant changes to how Zenvy manages Users’ personal information or updates to the Privacy Policy, a notice will be displayed on the Website or sent to Users via email. This will allow Users to review the changes before continuing to use the Services. If you disagree with the changes and wish to stop using the Services, you can contact support@zenvy.co.in to deactivate your account. Unless explicitly stated otherwise, the latest version of the Privacy Policy applies to all information Zenvy holds about you and your account. By accessing the Website or using the Services after changes are notified, you indicate your acceptance of the revised terms.</p>

        <h3>7. CHILDREN'S AND MINOR'S PRIVACY</h3>
        <p>Zenvy advises parents and guardians to actively monitor and supervise minors' online activities when accessing the Website or Services. To create a safe online environment, the use of parental control tools provided by software or online services is recommended, ensuring that minors do not share personally identifiable information such as their name or address without parental consent. Although Zenvy’s Website and Services are not designed for minors, the platform respects their privacy if they inadvertently access it. For telemedicine consultations, minors are permitted to consult Practitioners, but such interactions must be overseen by a verified adult.</p>

        <h3>8. CONSENT TO THIS POLICY</h3>
        <p>By using Zenvy’s Website or Services, you acknowledge that this Privacy Policy is an integral part of the Terms of Use. As a User, you:</p>
        <ol>
          <li>Agree to the terms outlined in this Privacy Policy.</li>
          <li>Consent to Zenvy’s collection, use, processing, and disclosure of your Personal Information as described.</li>
        </ol>
        <p>Your access to the Website and use of the Services is governed by this Privacy Policy and the Terms of Use.</p>

        <h3>9. ADDRESS FOR PRIVACY QUESTIONS</h3>
        <p>If you have questions about this Privacy Policy or Zenvy’s information collection, use, and disclosure practices, you can contact the Data Protection Officer appointed by Zenvy under applicable regulations. Zenvy will use reasonable efforts to promptly address your requests, questions, or concerns.</p>
        <p>For grievances regarding data usage, you can contact at Email: privacypolicy@zenvy.co.in, Phone Number: 6361218556.</p>

        <h3>Data Collection Based on Service Type</h3>
        <ol>
          <li>End-Users Registering for an Account:
            <p>Information Required: Name, mobile number, email address, and other details provided during registration.</p>
            <p>Purpose: Enables services like appointment booking and storing health related information.</p>
            <p>Additional Data: Call records for telephony services are stored with consent, as per the Privacy Policy.</p>
          </li>
          <li>Guest Users:
            <p>Information Required: Minimal data, such as a mobile number, to book appointments.</p>
            <p>Additional Data: Call records for telephony services are stored with consent, as per the Privacy Policy.</p>
          </li>
          <li>Practitioners Registering for an Account:
            <p>Information Required: Name, mobile number, email address, and other registration details.</p>
            <p>Approval Process: Practitioner accounts require admin approval before listing on the platform to ensure compliance and accuracy.</p>
            <p>Notifications: Service-related communications (e.g., appointment confirmations) are facilitated post-approval.</p>
          </li>
          <li>Practitioners Using Specific Products:
            <p>Information Required: Name, mobile number, email address, and digital signature for prescriptions or clinical notes.</p>
            <p>Purpose: Supports seamless functionality for Zenvy products and services.</p>
          </li>
          <li>Users of Consult Services:
            <p>Information Required: Name, mobile number, email address, and any additional information during registration.</p>
            <p>Purpose: Enables smooth interaction between Practitioners and End-Users on the Consult platform.</p>
          </li>
          <li>End-Users Accessing "Verified by Zenvy" Services:
            <p>Data Shared: Treatment-related information, including medical records, is securely shared with Zenvy to ensure efficient service delivery under the "Verified by Zenvy" framework.</p>
          </li>
        </ol>
      </div>
    `
  },
  terms: {
    title: 'Terms & Conditions',
    body: `
      <div class="legal-content">
        <p>Zenvy Terms &amp; Conditions
Welcome to Zenvy. We believe healthcare should feel personal, simple, and accessible to everyone. These Terms &amp; Conditions (“Terms”) and our Privacy Policy (together, the “Agreement”) form a binding contract between you (“You,” “User”) and Stratosys Tech Private Limited (“Zenvy,” “we,” “us,” or “our”). They govern your use of our digital healthcare Platform at www.zenvy.co.in and the Zenvy mobile app.</p>
        <p>By accessing or using the Platform—whether browsing content, registering an account, or engaging services—you agree to this Agreement and to applicable Indian laws, including the Indian Contract Act, 1872; the Information Technology Act, 2000; the SPI Rules; and the IG Rules. If you don’t agree, please exit the Platform.</p>

        <h3>1. Who You Are &amp; Why You’re Here</h3>
        <ul>
          <li>Practitioners — Healthcare professionals or institutions listing services on Zenvy.</li>
          <li>Patients &amp; Caregivers — Individuals using Zenvy to find, book, or manage healthcare.</li>
          <li>Visitors — Anyone browsing without registering.</li>
        </ul>

        <h3>2. Using Zenvy</h3>
        <ul>
          <li>You must be at least 18 years old and legally able to contract.</li>
          <li>Provide accurate information when you register and keep your login credentials confidential.</li>
          <li>We may suspend or terminate your access for fraud, misuse, or breach of these Terms.</li>
        </ul>

        <h3>3. For Patients &amp; Caregivers</h3>
        <h4>3.1 Your Zenvy Account &amp; Privacy</h4>
        <ul>
          <li>We collect only the personal and sensitive data necessary to run and improve Zenvy.</li>
          <li>You control your data—see our Privacy Policy for details on what we collect, why, and how long we keep it.</li>
          <li>You’re responsible for all activity under your login. Report any unauthorized access immediately.</li>
          <li>We may suspend or delete your account if you provide false or misleading information.</li>
        </ul>
        <h4>3.2 Your Zenvy Matchmaker</h4>
        <ul>
          <li>Our Search Match Model orders Practitioner profiles by factors like location, past bookings, profile completeness, and feedback.</li>
          <li>This is not an endorsement or “top doctor” badge—just algorithmic matching.</li>
          <li>We tweak the Model regularly; positions can shift without notice.</li>
          <li>Zenvy disclaims all liability for ranking changes.</li>
        </ul>
        <h4>3.3 Information Accuracy &amp; Our Disclaimers</h4>
        <ul>
          <li>We gather and display Practitioner details (specialization, fees, availability) but do not guarantee completeness or timeliness—please verify critical info directly.</li>
          <li>All Platform content is provided “as is” and “as available.” We disclaim all warranties (express or implied), including merchantability or fitness for a particular purpose.</li>
        </ul>
        <h4>3.4 Booking Appointments &amp; Call Support</h4>
        <ul>
          <li>You can schedule appointments via Zenvy. Confirmation, cancellations, and no-shows follow our Booking &amp; No-Show Policy.</li>
          <li>Optional call support—strictly for administrative purposes—may record calls with your consent for quality.</li>
          <li>Zenvy is not liable for Practitioner cancellations, no-shows, or scheduling changes.</li>
        </ul>
        <h4>3.5 No Doctor-Patient Relationship &amp; Emergencies</h4>
        <ul>
          <li>Content on Zenvy is informational only. It does not create a doctor-patient relationship with Zenvy or its personnel.</li>
          <li>We do not offer clinical advice or emergency services. In emergencies, please dial local emergency numbers immediately.</li>
        </ul>
        <h4>3.6 Zenvy Content Hub</h4>
        <ul>
          <li>Practitioners may share original wellness content (articles, videos, infographics).</li>
          <li>You may view and, where allowed, comment. All uploads must respect third-party IP rights.</li>
          <li>Zenvy may remove content that violates law or these Terms.</li>
          <li>By posting, you grant Zenvy a worldwide, perpetual, royalty-free license to use your content.</li>
        </ul>
        <h4>3.7 Shared Stories &amp; Copyright</h4>
        <ul>
          <li>Zenvy owns all Platform materials (text, graphics, code). You’re granted a limited, non-exclusive license to access them for personal, non-commercial purposes.</li>
          <li>Copying, distributing, or extracting any part of the Platform without permission is prohibited.</li>
        </ul>
        <h4>3.8 Patient Reviews</h4>
        <ul>
          <li>Reviews reflect individual opinions. Zenvy is merely an intermediary under the IT Act, disclaims liability for review content, and may moderate unlawful or inappropriate reviews.</li>
          <li>By posting, you grant Zenvy a perpetual, royalty-free license to display your review.</li>
        </ul>
        <h4>3.9 Managing Your Health Records</h4>
        <ul>
          <li>We enable storage of user-created and practitioner-generated health records.</li>
          <li>Records are “as is”; accuracy is the Practitioner’s responsibility.</li>
          <li>You control your data but should back up critical documents independently.</li>
          <li>We use industry-standard security but cannot guarantee against credential compromise.</li>
        </ul>

        <h3>4. For Practitioners</h3>
        <h4>4.1 Your Profile, Listings &amp; Control</h4>
        <ul>
          <li>You must verify and keep your profile details accurate.</li>
          <li>Zenvy may edit, remove, or relocate your profile at its discretion.</li>
          <li>We’re not liable for Practitioner rankings or publications outside Zenvy.</li>
        </ul>
        <h4>4.2 Editing &amp; Content Rights</h4>
        <ul>
          <li>Submit profile updates via our dashboard. We may review, approve, or adjust changes.</li>
          <li>All uploaded content must comply with IP and ethical standards.</li>
          <li>By uploading, you warrant you own or have licensed the content and it doesn’t infringe third-party rights.</li>
        </ul>
        <h4>4.3 Review Display &amp; Responses</h4>
        <ul>
          <li>Patient reviews are intermediary content. We may remove unlawful or defamatory reviews.</li>
          <li>You may post public responses; we reserve the right to moderate replies.</li>
        </ul>
        <h4>4.4 Independent Services</h4>
        <ul>
          <li>Each Zenvy feature (booking, records, reviews) has its own rules. Obligations and liabilities do not carry over between features unless explicitly stated.</li>
        </ul>
        <h4>4.5 Booking Feedback &amp; Responsibilities</h4>
        <ul>
          <li>Appointment workflows follow Patient Clause 3.4.</li>
          <li>Zenvy is not liable for user feedback about your services.</li>
          <li>We may publish, mask, or remove feedback per these Terms and applicable law.</li>
        </ul>
        <h4>4.6 Your Professional Promise</h4>
        <ul>
          <li>You warrant valid registration, licensing, and compliance with Indian medical laws and ethics.</li>
          <li>You’ll maintain professional standards and legal obligations for every service.</li>
        </ul>
        <h4>4.7 Featuring You in Our Story</h4>
        <ul>
          <li>With your approval, Zenvy may feature you in case studies, marketing materials, or testimonials.</li>
          <li>You can review and request reasonable modifications before publication.</li>
        </ul>

        <h3>5. Keeping Content Safe &amp; Fair</h3>
        <ul>
          <li>You may not post content that is illegal, defamatory, infringing, harmful to minors, or a threat to public order.</li>
          <li>Automated tools, hacking attempts, or reverse engineering are prohibited.</li>
          <li>Zenvy may remove non-compliant content, suspend offending accounts, and cooperate with authorities.</li>
          <li>You’re responsible for your uploads; Zenvy disclaims liability for IP infringements.</li>
        </ul>

        <h3>6. When We Hit Pause (Termination)</h3>
        <h4>6.1 Suspension &amp; Termination</h4>
        <p>We may suspend or terminate your access, with or without notice, if you:</p>
        <ul>
          <li>Breach any part of these Terms or our Privacy Policy</li>
          <li>Provide false information or engage in fraud</li>
          <li>Pose legal, security, or reputational risks to Zenvy or others</li>
        </ul>
        <h4>6.2 After Termination</h4>
        <ul>
          <li>You lose access to all data, messages, and materials on the Platform.</li>
          <li>Practitioners must keep independent backups of any records needed for compliance.</li>
        </ul>

        <h3>7. Our Liability Cap</h3>
        <p>To the maximum extent allowed by law:</p>
        <ul>
          <li>Zenvy and its affiliates aren’t liable for indirect, incidental, consequential, or exemplary damages arising from the Platform or Services.</li>
          <li>Our total liability is capped at the fees you paid in the 12 months before a claim:</li>
          <li>Practitioners: subscription fees (₹1,180 per month)</li>
          <li>Patients: platform fees (₹10 per booking)</li>
        </ul>
        <p>This clause survives account termination.</p>

        <h3>8. How Long We Keep Your Info (Retention &amp; Removal)</h3>
        <ul>
          <li>We retain your data as needed to operate, comply with law, and improve services.</li>
          <li>Server logs and audit trails are kept for security and administrative purposes.</li>
          <li>On account deletion, we remove your personal data from active systems within 30 days, except where law requires otherwise. Anonymized or aggregated data may be retained.</li>
        </ul>

        <h3>9. Laws &amp; Disputes</h3>
        <h4>9.1 Governing Law</h4>
        <p>These Terms are governed by the laws of India.</p>
        <h4>9.2 Arbitration</h4>
        <ul>
          <li>All disputes shall be finally settled by arbitration under the Arbitration and Conciliation Act, 1996.</li>
          <li>A sole arbitrator appointed by Zenvy will conduct proceedings in Bengaluru, India, in English.</li>
          <li>The award is final and binding.</li>
        </ul>
        <h4>9.3 Courts’ Jurisdiction</h4>
        <p>Subject to arbitration, the courts in Bengaluru, India, have exclusive jurisdiction over unresolved disputes.</p>

        <h3>10. Reaching Us &amp; Interim Grievance</h3>
        <ul>
          <li>General Support: contact@zenvy.co.in or https://zenvy.co.in/contact</li>
          <li>Interim Grievance: Until we appoint a Grievance Officer, direct compliance concerns to support@zenvy.co.in. We’ll acknowledge within 48 hours and resolve per regulatory timelines.</li>
        </ul>

        <h3>11. Effect of Invalid Terms (Severability)</h3>
        <p>If any part of these Terms is held unenforceable, that part will be severed, and the remainder stays in effect. We’ll replace the invalid term with one that best reflects our original intent.</p>

        <h3>12. No Implied Waiver</h3>
        <p>Any waiver of rights under these Terms must be in writing and signed by Zenvy. A one-time waiver does not apply to future breaches.</p>

        <h3>13. No Affiliation</h3>
        <p>Zenvy is an independent platform and is not affiliated with, endorsed by, or associated with any other healthcare platform.</p>

        <h3>14. Terms Updates &amp; Notifications</h3>
        <ul>
          <li>Zenvy reserves the right to update these Terms at any time.</li>
          <li>Users will be notified of changes via app notifications or email.</li>
          <li>Continued use of the Platform after updates constitutes acceptance of the revised Terms.</li>
        </ul>

        <h3>15. Third-Party Services</h3>
        <ul>
          <li>Zenvy may integrate with third-party services (labs, pharmacies, payment gateways).</li>
          <li>We disclaim liability for third-party actions or data sharing beyond agreed boundaries.</li>
        </ul>
        <p>Thank you for choosing Zenvy. We’re dedicated to making healthcare easier, more transparent, and truly yours.</p>

        <h3>Subscriber Terms and Conditions</h3>
        <p>For Healthcare Providers, Clinics, and Practitioners Using Zenvy Doc</p>
        <p>Stratosys Tech Private Limited (“Zenvy”, “we”, or “our”, including our affiliates) is the developer, publisher, and maintainer of the website www.zenvy.co.in and all associated digital solutions. This includes the practice and clinic management platform known as “Zenvy Doc”, which is accessible via web browsers and native mobile applications (collectively referred to herein as the “Services”). Use of our Services requires a subscription fee, and your access to and use of the Services are subject to the terms and conditions set forth below.</p>

        <h4>1. Your Agreement with Zenvy</h4>
        <h5>1.1 Acceptance; Modifications to Terms</h5>
        <ul>
          <li>By accessing and using Zenvy Doc, you confirm that you have read, understood, and agree to be bound by these Subscriber Terms and Conditions (the “Agreement”).</li>
          <li>We reserve the unilateral right to modify, update, or amend these Terms at any time without prior notice. Your continued use of the Services following any such revision constitutes your acceptance of the updated Agreement.</li>
        </ul>
        <h5>1.2 Binding Contract; Supplementary Policies</h5>
        <ul>
          <li>This Agreement, together with any additional terms, disclaimers, privacy policies, or service-specific guidelines published on our website or within our Services, forms a legally binding contract between you and Zenvy.</li>
          <li>In addition, by clicking “I Agree” or otherwise using the Services, you agree to any and all terms referenced herein.</li>
        </ul>
        <h5>1.3 Discretion Over Service Access</h5>
        <ul>
          <li>Your ability to access and use the Subscription Services is solely at the discretion of Zenvy, and we reserve the right to suspend or restrict your access without liability at any time.</li>
        </ul>

        <h4>2. Who is Zenvy?</h4>
        <h5>2.1 Corporate Identity</h5>
        <ul>
          <li>Zenvy Technologies Private Limited is the author, publisher, and owner of Zenvy Doc, including all its versions, editions, add-ons, and ancillary services.</li>
        </ul>
        <h5>2.2 Purpose and Functionality</h5>
        <ul>
          <li>The Services are designed for use by clinics and healthcare establishments to streamline practice management. These tools facilitate appointment scheduling, patient record management, billing, prescription generation, inventory control, reporting, and other operational tasks.</li>
        </ul>
        <h5>2.3 Intended Users</h5>
        <ul>
          <li>Healthcare providers (“Practitioners”), including their designated associates who manage clinical operations.</li>
          <li>Clinic administrators and staff who handle day-to-day management such as scheduling, document processing, and billing.</li>
        </ul>
        <p>Collectively, every individual or entity that accesses the Services is referred to herein as a “User.”</p>

        <h4>3. Terms of Use</h4>
        <h5>3.1 Acceptance of Terms</h5>
        <ul>
          <li>By using the Subscription Services, you confirm that you have read, understood, and agreed to these Terms.</li>
          <li>If you disagree with any part of these Terms, you must immediately discontinue use of the Services.</li>
          <li>Your ongoing use of the Services constitutes your unequivocal acceptance of this Agreement.</li>
        </ul>
        <h5>3.2 Eligibility</h5>
        <ul>
          <li>You must be 18 years of age or older to register for and use Zenvy Doc.</li>
          <li>By registering or using our Services, you represent and warrant that you meet all eligibility requirements and have the full legal capacity to enter into this Agreement.</li>
        </ul>
        <h5>3.3 Compliance with Indian Law</h5>
        <p>This Agreement is subject to and governed by Indian laws, including but not limited to:</p>
        <ul>
          <li>The Indian Contract Act, 1872;</li>
          <li>The Information Technology Act, 2000;</li>
          <li>The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011; and</li>
          <li>The Information Technology (Intermediaries Guidelines) Rules, 2011.</li>
        </ul>
        <p>In any dispute arising out of or related to these Terms, the relevant Indian laws shall be determinative.</p>
        <h5>3.4 Mandatory Acceptance</h5>
        <ul>
          <li>Use of the Subscription Services is conditioned on your express acceptance of every provision in this Agreement. If you do not agree with any part, you must cease using the Services immediately.</li>
        </ul>
        <h5>3.5 Authorized Use of Content</h5>
        <ul>
          <li>You are granted permission to access and view Zenvy Doc content solely for purposes related to clinical operations and communications.</li>
          <li>All content (including text, graphics, images, logos, icons, software code, design, and data) is the exclusive property of Zenvy and is protected under applicable copyright, trademark, and intellectual property laws.</li>
          <li>You may not modify, reproduce, distribute, or use any of the content for any commercial or personal gain without prior written consent from Zenvy.</li>
        </ul>
        <h5>3.6 Login Credentials; Security</h5>
        <ul>
          <li>Each User is responsible for maintaining the confidentiality of their login information.</li>
          <li>Sharing, duplicating, or allowing others to use your login credentials is strictly prohibited. Any activity conducted under your account is your sole responsibility.</li>
        </ul>
        <h5>3.7 Authorized Users &amp; Responsibility</h5>
        <ul>
          <li>If you access the Subscription Services on behalf of a subscribing Clinic – as an employee, consultant, intern, or associate – this Agreement forms a three-way contract among you, your Clinic, and Zenvy. Both your Clinic and Zenvy reserve the right to take legal action if you violate any term herein.</li>
        </ul>
        <h5>3.8 Non-Transferability of Access</h5>
        <ul>
          <li>Your rights to use the Subscription Services are personal and non-transferable. You must not transfer, share, lease, or sublicense your access to any third party.</li>
        </ul>
        <h5>3.9 Applicability on Multiple Platforms</h5>
        <ul>
          <li>These Terms apply regardless of whether you access Zenvy Doc via the website (www.zenvy.com) or through native mobile applications (for iOS, Android, Windows, etc.). Additional mobile-specific terms may also apply.</li>
        </ul>
        <h5>3.10 Accuracy of Registration Information</h5>
        <ul>
          <li>All data provided during registration must be accurate, correct, complete, and current.</li>
          <li>You may be required to supply supporting documents (for example, to verify a telephone number registered in your name).</li>
        </ul>
        <h5>3.11 Lawful Use of Subscription Services</h5>
        <ul>
          <li>You agree not to use the Subscription Services for any unauthorized or unlawful purposes, including impersonating any person or entity, forging communications, or violating any applicable law.</li>
        </ul>
        <h5>3.12 Compliance with Laws &amp; Regulations</h5>
        <ul>
          <li>In using the Subscription Services, you agree to abide by all relevant laws, regulations, export requirements, and guidelines in your jurisdiction and internationally.</li>
        </ul>
        <h5>3.13 Access Restrictions</h5>
        <ul>
          <li>You must only access the Subscription Services through the official channels provided by Zenvy. Any other method is strictly prohibited unless expressly authorized by a separate agreement with Zenvy.</li>
        </ul>
        <h5>3.14 Interference Prohibition</h5>
        <ul>
          <li>You agree not to interfere with, disrupt, or compromise the integrity, performance, or security of the Subscription Services or the networks to which they connect.</li>
        </ul>
        <h5>3.15 Unauthorized Reproduction or Resale</h5>
        <ul>
          <li>You are prohibited from reproducing, duplicating, copying, transferring, licensing, renting, selling, trading, or otherwise reselling any part of the Software or the Subscription Services.</li>
        </ul>
        <h5>3.16 Responsibility for Breach</h5>
        <ul>
          <li>You acknowledge that any breach of these Terms is solely your responsibility, and you agree to bear full legal and financial liability for any damages or losses incurred as a result.</li>
        </ul>
        <h5>3.17 Indemnification</h5>
        <ul>
          <li>You agree to indemnify, defend, and hold harmless Zenvy, its affiliates, and their officers, directors, employees, and agents from any claims, losses, liabilities, or expenses (including reasonable attorney fees) that arise from your violation of these Terms or infringement of any third-party rights.</li>
        </ul>
        <h5>3.18 Disclaimer of Warranties</h5>
        <ul>
          <li>Zenvy Doc and the Subscription Services are provided on an “as-is” and “as available” basis without any warranties, express or implied.</li>
          <li>In particular, we disclaim any implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</li>
        </ul>
        <h5>3.19 No Unsolicited Communications</h5>
        <ul>
          <li>You agree that you will not use the Subscription Services to send unsolicited messages (spam) or communications that violate any telemarketing or spam regulations.</li>
        </ul>
        <h5>3.20 Government Regulation Compliance</h5>
        <ul>
          <li>Zenvy reserves the right to alter or remove parts of the Subscription Services if required by changes in government policy, regulations, or local laws.</li>
        </ul>
        <h5>3.21 Confidentiality of Login Credentials</h5>
        <ul>
          <li>You must keep all passwords and login details confidential, and you agree to immediately notify Zenvy of any unauthorized access or suspected breach of your account security.</li>
        </ul>
        <h5>3.22 Limited Rights to the Services</h5>
        <ul>
          <li>Your subscription strictly grants you the right to use the specific Subscription Services for which you have registered. It does not automatically grant access to other platforms, features, or benefits beyond those covered by your chosen service plan.</li>
        </ul>

        <h4>4. Use of the Subscription Services</h4>
        <h5>4.1 Software as a Service (SaaS) Model</h5>
        <ul>
          <li>Provision and Licensing: Zenvy Doc is offered as a cloud-hosted, web-based, and mobile-accessible Software as a Service (SaaS) platform. When you download or use the software, you receive a non-transferable license to access and use the Subscription Services.</li>
          <li>Ownership and Intellectual Property: All intellectual property rights in the software and related materials remain with Zenvy (or its licensors). No title or ownership is transferred to you.</li>
          <li>Operational Scope: While Zenvy Doc provides a robust suite of operational tools for clinics, we are not involved in the direct management of patient care or clinical data.</li>
          <li>Compliance and Data Storage: You must use the software only in accordance with this Agreement and all applicable laws. Information you provide may be stored, used, or republished by Zenvy or its affiliates even after your subscription terminates.</li>
        </ul>
        <h5>4.2 Free Trial</h5>
        <ul>
          <li>Trial Period Offer: Zenvy may, at its discretion, offer a free trial period for the Subscription Services.</li>
          <li>Conditions of Use: During the trial, you are bound by these Terms and all applicable legal requirements.</li>
          <li>Data and Customization Loss: Any data you enter or customizations you make during the trial will be permanently erased once the trial period expires unless you choose to upgrade to a paid plan.</li>
          <li>Warranty Disclaimer: No warranties or guarantees are made during the free trial period.</li>
        </ul>
        <h5>4.3 Service Modifications &amp; Customizations</h5>
        <ul>
          <li>As-Is Provision: Zenvy Doc is provided “as-is”, and we reserve the right to change, remove, or add features at any time without obligation.</li>
          <li>Customization Requests: While we may consider customization requests, these are not included in the standard subscription fee and must be negotiated separately.</li>
        </ul>
        <h5>4.4 Restrictions on Access</h5>
        <ul>
          <li>Competitor Limitation: Any entity that is in direct competition with Zenvy must secure prior written consent before accessing the Services.</li>
          <li>Disallowed Uses: The Services must not be used for monitoring system performance, benchmarking competitors, or any other activity aimed at gathering data for competitive analysis.</li>
        </ul>
        <h5>4.5 Service Availability &amp; Support</h5>
        <ul>
          <li>Basic Support: Basic support for the Subscription Services is provided at no extra charge; enhanced support options may be purchased separately.</li>
          <li>Working Hours: On business days, customer support is available from 9:00 AM to 6:00 PM.</li>
          <li>Response Times and Off-Hours: Outside these hours, response times may be delayed; however, all queries will be answered within 24 hours.</li>
          <li>Uptime Commitment: We will use commercially reasonable efforts to ensure that the platform is available 24/7 except during scheduled maintenance (with at least an 8-hour advanced notice, typically planned during off-peak periods such as Friday evenings to Monday early morning) or events beyond our control (e.g., natural disasters, government directives, or network failures).</li>
        </ul>
        <h5>4.6 No Guarantee of Uninterrupted Service</h5>
        <ul>
          <li>Disclaimer of Continuous Operation: Despite best efforts, there may be disruptions or delays in the operation of the Subscription Services due to factors beyond our control (such as local network issues, ISP malfunctions, power outages, etc.).</li>
          <li>Liability Exclusion: Zenvy shall not be held liable for any interruptions, delays, or losses arising from such events.</li>
        </ul>
        <h5>4.7 Service Unavailability and Subscription Extensions</h5>
        <ul>
          <li>Remedy for Downtime: In the event that the Software becomes unavailable due to defaults on Zenvy’s part or is rendered inoperable, we may extend your subscription period by the number of days during which the Services were unavailable.</li>
          <li>Third-Party Responsibility: You acknowledge that interruptions caused by intermediary services (such as internet connectivity issues or telephony disruptions) are not the responsibility of Zenvy.</li>
        </ul>
        <h5>4.8 Service Limitations</h5>
        <ul>
          <li>Usage Limits: Your chosen subscription plan specifies the limitations applicable to your use of the Services. These may include, but are not limited to: disk storage quotas; limits on API calls or SMS messages; maximum numbers of appointments, user accounts, or subscription validity durations.</li>
          <li>Real-Time Monitoring: The system is designed to provide real-time information so that you can monitor your compliance with these limitations.</li>
        </ul>
        <h5>4.9 User’s Liability for Clinical Interactions</h5>
        <ul>
          <li>Direct Responsibility: Any interactions with patients (or their representatives) that occur through the platform are the sole responsibility of the clinic or practitioner using the Services.</li>
          <li>Data Accuracy Disclaimer: Zenvy disclaims any responsibility for the accuracy, completeness, or veracity of patient data or third-party information provided via the platform.</li>
          <li>Emergency Use Limitation: The Services are not intended for handling emergency healthcare situations such as urgent appointments or critical procedures.</li>
        </ul>
        <h5>4.10 Suspension of Access</h5>
        <ul>
          <li>Right to Suspend: Zenvy reserves the right to suspend your access to the Subscription Services at its sole discretion, particularly if there are complaints or indications that you may be in breach of these Terms.</li>
          <li>Temporary Suspension: Such suspensions may be temporary while investigations are conducted.</li>
        </ul>
        <h5>4.11 Use of Anonymized Information</h5>
        <ul>
          <li>Data Usage for Improvement: Information gathered from your usage of the Services may be aggregated and anonymized for purposes such as system improvement, analytics, research, and development.</li>
          <li>Rectification Tools: You will have access to tools for correcting or updating any personal data that is used in anonymized analytics.</li>
        </ul>
        <h5>4.12 Types of Information Utilized</h5>
        <ul>
          <li>Data Categories: Zenvy reserves the right to collect and use various types of data stored in the software, including clinic information, practitioner information, patient demographics, and anonymized health and history data.</li>
        </ul>
        <h5>4.13 Automatic Listing of Provider Information</h5>
        <ul>
          <li>Listing Process: Information provided by clinics regarding healthcare providers (or doctors) is automatically displayed on the platform whenever End-Users search for Providers or Clinics.</li>
          <li>Persistence of Listings: Such listings may continue to appear even if the clinic updates its information, discontinues its subscription, or terminates its relationship with Zenvy.</li>
          <li>Sensitive Data Exclusion: At no time will personally sensitive information be displayed.</li>
          <li>Ranking and Modifications: No ranking algorithm is applied; listings are shown alongside any other providers regardless of their contractual status with Zenvy. Changes can be made using the online platform or by contacting support at support@zenvy.co.in.</li>
        </ul>
        <h5>4.14 Appointment Request Process</h5>
        <ul>
          <li>Online Appointment Booking: The Subscription Services facilitate online appointment requests for all listed Providers.</li>
          <li>Notification Mechanisms: Zenvy will use telephone and email notifications to inform clinics of appointment requests.</li>
          <li>Disclaimer on Delivery: However, technical or operational delays (such as delayed email responses or telephonic issues) may cause some appointment requests not to reach the intended recipient in a timely fashion. Zenvy shall not be liable for such delays.</li>
        </ul>
        <h5>4.15 Appointment Confirmation and Cancellations</h5>
        <ul>
          <li>Confirmation Efforts: While every effort is made to confirm appointment requests promptly, Zenvy does not guarantee that every request will be confirmed.</li>
          <li>Cancellation or Unavailability: Zenvy is not responsible if a confirmed appointment is later cancelled by an End-User, or if the Provider becomes unavailable at the time of the appointment.</li>
        </ul>
        <h5>4.16 Additional Limitations and Specific Terms</h5>
        <ul>
          <li>Service-Specific Conditions: Certain ancillary or specialized Subscription Services may have additional terms, restrictions, or conditions (collectively “Specific Terms”).</li>
          <li>Contingent Acceptance: Your access to these services is dependent upon accepting and complying with these Specific Terms.</li>
        </ul>
        <h5>4.17 Service Functionality and Upgrades</h5>
        <ul>
          <li>Right to Modify Features: Zenvy reserves the right to introduce new features, remove existing functionalities, or modify current capabilities at its discretion.</li>
          <li>Automatic Upgrades: Users will receive notifications when a major update is released. Zenvy may automatically upgrade all users to the latest version of the Services.</li>
        </ul>
        <h5>4.18 Zenvy Doc App Terms of Use</h5>
        <ul>
          <li>Cloud and Mobile Accessibility: The Zenvy Doc App is cloud-hosted and available on Android, iOS, and via the web.</li>
          <li>Employee and Agent Use: Clinics must ensure that all employees, agents, or reception staff using the app adhere to these Terms.</li>
          <li>Core App Functions: The app facilitates appointment booking, sending of appointment reminders, recording of clinical notes, generation of prescriptions, and billing operations.</li>
          <li>Patient Stories and Recommendations: Testimonials or recommendations collected through the app may be displayed on the Website. However, Zenvy is not responsible for their content.</li>
          <li>Operational Changes: Zenvy may modify app functionalities (for example, the instant booking feature) based on the volume of appointments or other criteria, with prior notice provided.</li>
          <li>Usage Purpose and Security: The app is intended exclusively for managing patient interactions. Misuse, impersonation, or unauthorized communications are prohibited. Users agree to indemnify Zenvy for any breaches affecting security.</li>
          <li>Data Accuracy: It is the responsibility of healthcare providers to ensure that all information provided or communicated through the app is correct.</li>
          <li>Alerts and Account Access: The app will deliver alerts regarding follow-up visits, and users can access detailed appointment information through their online account.</li>
        </ul>

        <h4>5. Collection, Use, Storage, and Transfer of Personal Information</h4>
        <h5>5.1 Definitions</h5>
        <ul>
          <li>“Personal information” and “sensitive personal data” are defined under the applicable legal standards (including the SPI Rules). Full definitions are available in our Privacy Policy at www.zenvy.com/privacy.</li>
        </ul>
        <h5>5.2 Privacy Policy Overview</h5>
        <ul>
          <li>Our Privacy Policy details the categories of information we collect, the purposes for which the information is collected, and how we store, use, and disclose your information.</li>
        </ul>
        <h5>5.3 User Responsibilities and Awareness</h5>
        <ul>
          <li>Users are strongly encouraged to read our Privacy Policy to understand what information is collected, how it is used, and the rights available to you regarding your data.</li>
        </ul>
        <h5>5.4 Consent for Data Storage</h5>
        <ul>
          <li>Clinics and Users must obtain explicit consent from End-Users (patients) before their personal or sensitive information is uploaded or stored in Zenvy Doc.</li>
        </ul>
        <h5>5.5 Authenticity and Accuracy of Data</h5>
        <ul>
          <li>Zenvy does not guarantee the accuracy or authenticity of the data provided by Users or third parties. You are responsible for ensuring that the data you provide is correct.</li>
        </ul>
        <h5>5.6 Data Retention and Submission to Authorities</h5>
        <ul>
          <li>Information provided during registration, as well as your browsing or usage history, may be retained by Zenvy.</li>
          <li>If required by law, such data may also be submitted to relevant authorities in accordance with our Privacy Policy.</li>
        </ul>
        <h5>5.7 Security of Login Credentials</h5>
        <ul>
          <li>It is your responsibility to maintain the confidentiality of your login details.</li>
          <li>Any unauthorized use of your account must be reported to Zenvy immediately.</li>
        </ul>
        <h5>5.8 Obligation to Provide Accurate Data</h5>
        <ul>
          <li>Should any data be found to be false, outdated, or incomplete, Zenvy reserves the right to suspend or terminate your access to the Services.</li>
        </ul>
        <h5>5.9 Use of Data for Support</h5>
        <ul>
          <li>Anonymized information gathered from the Services may be used for debugging, customer support, and improving the system functionality.</li>
        </ul>
        <h5>5.10 Retention Beyond Subscription</h5>
        <ul>
          <li>Data you provide may be retained even after your subscription ends, in accordance with the guidelines outlined in our Privacy Policy.</li>
        </ul>

        <h4>6. Covenants</h4>
        <h5>6.1 Prohibited Content</h5>
        <ul>
          <li>You must not post or share content that does not belong to you, is harmful, harassing, defamatory, obscene, pornographic, infringing, contains viruses, or threatens national security or public order.</li>
        </ul>
        <h5>6.2 Prohibited Activities</h5>
        <ul>
          <li>You are strictly prohibited from trying to breach the security or integrity of the Subscription Services, transmitting false information, using automated methods to collect data, or circumventing security protocols.</li>
        </ul>
        <h5>6.3 Content Removal Rights</h5>
        <ul>
          <li>Zenvy reserves the right to remove any content that violates these Terms.</li>
          <li>Deleted content and its records may be kept for up to 90 days for legal or investigative purposes.</li>
        </ul>
        <h5>6.4 Termination for Non-Compliance</h5>
        <ul>
          <li>Persistent or severe violations of these Terms or any applicable laws may result in the immediate termination of your account without prior notice.</li>
        </ul>
        <h5>6.5 Data Transfers</h5>
        <ul>
          <li>Zenvy may share or transfer your data to our affiliates or third parties, provided they adhere to data protection standards as outlined in our Privacy Policy.</li>
        </ul>
        <h5>6.6 Respect for Intellectual Property</h5>
        <ul>
          <li>We respect the intellectual property rights of others, and Zenvy is not liable for any claims arising from user-generated infringements.</li>
        </ul>

        <h4>7. Liability</h4>
        <h5>7.1 User Consent and Data Disclosures</h5>
        <ul>
          <li>Zenvy shall not be held liable for losses or damages arising from information disclosed by you or with your consent.</li>
        </ul>
        <h5>7.2 Statutory Disclosure Obligations</h5>
        <ul>
          <li>Zenvy will comply with statutory requests for information under applicable regulations and assumes no liability for such disclosures.</li>
        </ul>
        <h5>7.3 Warranty Disclaimer</h5>
        <ul>
          <li>The Services are provided without any warranties. We do not guarantee that the Services will always be uninterrupted, error-free, or meet a particular standard of performance.</li>
        </ul>
        <h5>7.4 Responsibility for Patient Data</h5>
        <ul>
          <li>Clinics and Healthcare Providers are solely responsible for the security, management, and integrity of their patient data. Zenvy is not liable for issues arising from your data management practices.</li>
        </ul>
        <h5>7.5 Third-Party Links and Services</h5>
        <ul>
          <li>Zenvy is not responsible for third-party services or content accessible through the platform.</li>
        </ul>
        <h5>7.6 Security and Technical Issues</h5>
        <ul>
          <li>A failure on the part of third-party vendors, or technical malfunctions (including malware or power outages), shall not render Zenvy liable for resultant damages.</li>
        </ul>
        <h5>7.7 User-Generated Content</h5>
        <ul>
          <li>Content created or shared by users does not necessarily reflect the views of Zenvy, and we assume no responsibility for such material.</li>
        </ul>
        <h5>7.8 Limitation of Liability</h5>
        <ul>
          <li>In any legal claim, Zenvy’s total liability shall not exceed ₹1000.</li>
        </ul>
        <h5>7.9 Service Interruptions</h5>
        <ul>
          <li>Zenvy is not liable for any losses or damages arising from service interruptions, appointment cancellations, or rescheduling issues.</li>
        </ul>
        <h5>7.10 Provider Listings</h5>
        <ul>
          <li>The determination of provider listings and their order are based on internal criteria and user feedback. Zenvy is not liable for any negative impacts arising from such automated processes.</li>
        </ul>
        <h5>7.11 Feedback and Communications</h5>
        <ul>
          <li>While we may solicit and use feedback from Users, Zenvy is not responsible for any issues that arise from communications with or responses by Users.</li>
        </ul>
        <h5>7.12 Third-Party Vendor Actions</h5>
        <ul>
          <li>Zenvy is not responsible for any failures or errors incurred by third-party vendors that support ancillary services such as payment processing.</li>
        </ul>

        <h4>8. Indemnity</h4>
        <p>You agree to indemnify, defend, and hold harmless Zenvy, its affiliates, and their respective officers, directors, employees, and agents from any and all claims, liabilities, damages, costs, or expenses (including reasonable attorney fees) arising from:</p>
        <ul>
          <li>Your use of Zenvy Doc;</li>
          <li>Any breach of these Terms;</li>
          <li>Any violation of any intellectual property or other rights by you or any party using your account.</li>
        </ul>
        <p>In the event of any such claim, Zenvy will notify you promptly, and you agree to cooperate with us in your defense, at your own expense.</p>

        <h4>9. Spamming</h4>
        <ul>
          <li>Zenvy enforces a strict zero-tolerance policy toward spamming.</li>
          <li>You agree not to use the Services to send unsolicited bulk messages or communications with commercial content.</li>
          <li>Definition: Spam is defined as an indiscriminate, unsolicited transmission of messages.</li>
          <li>Penalties: Should you engage in spamming, you will be liable to pay a penalty of ₹3000 per unauthorized message, with the fee payable within 30 days of the transmission.</li>
        </ul>

        <h4>10. Term, Termination, and Disputes</h4>
        <h5>10.1 Duration of Agreement</h5>
        <ul>
          <li>This Agreement remains in full force and effect for as long as you access and use Zenvy Doc.</li>
        </ul>
        <h5>10.2 Termination by the User</h5>
        <ul>
          <li>You may terminate your subscription at any time by providing a 30-day written notice to support@zenvy.co.in.</li>
          <li>During this notice period, all outstanding dues must be settled.</li>
          <li>Zenvy will review any ongoing services or pending subscription fees before processing your termination.</li>
        </ul>
        <h5>10.3 Termination by Zenvy</h5>
        <ul>
          <li>Zenvy reserves the right to terminate, suspend, or restrict your access to the Services if you breach any of the provisions of this Agreement, if we are unable to verify your details, or if your actions expose us to legal liability.</li>
        </ul>
        <h5>10.4 Post-Termination Restrictions</h5>
        <ul>
          <li>Once your account is suspended, terminated, or otherwise deactivated, you are not permitted to re-register under the same or any other account unless explicitly authorized.</li>
          <li>Upon termination, you will lose access to all stored data, messages, and files. It is your responsibility to maintain backups of your information prior to termination.</li>
          <li>Zenvy retains the right to continue using or publicly displaying any data you made available prior to termination.</li>
        </ul>
        <h5>10.5 Data Return Policy</h5>
        <ul>
          <li>If termination is due to non-payment, you may request that a copy of your data be made available for download (in CSV format or another agreed format) within 30 days of the termination effective date.</li>
          <li>After this period, Zenvy bears no obligation to preserve your data, and it may be deleted unless prevented by law.</li>
        </ul>
        <h5>10.6 Legal Remedies and Immediate Account Deletion</h5>
        <ul>
          <li>In the event of any breach, Zenvy may, at its discretion, delete your content and terminate your account immediately, with or without notice.</li>
        </ul>
        <h5>10.7 Governing Law and Jurisdiction</h5>
        <ul>
          <li>This Agreement is governed by the laws of India, and all disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, India.</li>
        </ul>
        <h5>10.8 Survival of Obligations</h5>
        <ul>
          <li>Even after termination of the Agreement, certain provisions—such as those covering indemnity, liability, intellectual property rights, and dispute resolution—will continue to remain in effect.</li>
        </ul>
        <h5>10.9 Amendments</h5>
        <ul>
          <li>Any amendments or updates to these Terms will replace previous versions. Your continued use of the Services following any notification of changes shall be deemed acceptance of the updated Terms.</li>
        </ul>

        <h4>11. Theft of Subscription Services</h4>
        <ul>
          <li>If you suspect that your account has been accessed without authorization or that fraudulent activity is taking place, you must immediately notify Zenvy by emailing support@zenvy.co.in.</li>
          <li>In your notice, provide your account details and a detailed description of the suspected theft or misuse.</li>
          <li>Failure to report such issues promptly may result in the termination of your Subscription Services and may incur additional charges.</li>
          <li>You will be held responsible for all unauthorized activity on your account, and Zenvy is under no obligation to extend your subscription period or waive fees due to fraudulent use.</li>
        </ul>

        <h4>12. Misuse of Subscription Services</h4>
        <ul>
          <li>Zenvy reserves the right to suspend, restrict, or terminate your access to the Subscription Services if you engage in misuse.</li>
          <li>Misuse includes creating multiple accounts or false profiles, violating intellectual property rights, breaching any term of this Agreement, or behavior deemed contrary to the proper purpose of the Services.</li>
          <li>Users who are repeat offenders may have their accounts terminated permanently without further notice.</li>
        </ul>

        <h4>13. Severability and Waiver</h4>
        <ul>
          <li>If any provision of this Agreement is determined to be invalid or unenforceable by a court of law, that provision shall be removed, but the remaining provisions will continue in full force and effect.</li>
          <li>A failure by Zenvy to enforce any provision of these Terms shall not be construed as a waiver of the future enforcement of that or any other provision.</li>
        </ul>

        <h4>14: Payment Processing &amp; Wallet System</h4>
        <ul>
          <li>Doctor’s Wallet: All payments received for consultations, appointments, or other services are initially credited to the doctor’s secure wallet within the Zenvy Doc system.</li>
          <li>Payout Request &amp; Processing: When a doctor initiates a payout request from their wallet, the requested funds will be transferred to their verified bank account within 24 hours.</li>
          <li>Bank Account Verification: Doctors must verify and periodically update their bank account details in the Zenvy Doc dashboard. Any modifications to bank details will require additional verification measures to prevent fraud.</li>
          <li>Handling Technical Payment Failures: In the event a payment fails due to network issues, gateway errors, or technical disruptions, the system will automatically attempt to reprocess the transaction. If the payment is not completed on the initial attempt, Zenvy will complete the payment within 10 working days from the failure date.</li>
          <li>Refunds: In cases of cancellations, duplicate transactions, or disputed payments, refunds will be processed in accordance with the platform’s refund policy and within the agreed timeframe.</li>
          <li>Fraud Detection &amp; Compliance: All transactions are continuously monitored for suspicious activity and are processed in compliance with applicable security standards (e.g., PCI DSS).</li>
        </ul>

        <h4>15: Doctor No-Show &amp; Failure to Cancel Policy</h4>
        <ul>
          <li>Failure to Cancel on Time (No-Show): If a doctor does not cancel a scheduled appointment at least 24 hours in advance and a patient arrives to find the doctor unavailable, the incident is recorded as a “no-show” for the doctor.</li>
          <li>Disciplinary Procedure: First occurrence = formal written warning; second occurrence = final warning; third occurrence = account suspended for 4 months.</li>
          <li>Notification Process: In any cancellation situation arising from failure to cancel on time, affected patients will be notified via standard channels and provided with instructions to reschedule or apply for a refund, as applicable.</li>
          <li>Responsibility for Clinic Non-Acceptance of Bookings: If a clinic fails to accept, process, or confirm a booking request within 24 hours from receipt, such inaction shall be considered a breach of the clinic’s operational responsibilities. In these cases, the doctor is entitled to cancel the corresponding appointment(s) after providing the affected patient(s) with a minimum of 24 hours' notice. Cancellations triggered by the clinic’s non-acceptance will not count toward the doctor's “no-show” record. Repeated failures by the clinic may subject the clinic to further review and remedial actions by Zenvy.</li>
          <li>Reinstatement Conditions: Following a temporary suspension due to repeated no-show incidents, the doctor’s account may be reinstated only after a performance review and a commitment to strictly adhere to the established cancellation protocols.</li>
        </ul>

        <h4>16. Contact Information</h4>
        <h5>16.1 Customer Support</h5>
        <ul>
          <li>For any issues, questions, or complaints regarding Zenvy Doc, please contact our customer support team at support@zenvy.com.</li>
        </ul>
        <h5>16.2 General Inquiries</h5>
        <ul>
          <li>For general inquiries about our Services or this Agreement, you may reach Zenvy by emailing support@zenvy.co.in or visiting our contact page at www.zenvy.co.in/contact.</li>
        </ul>

        <h3>Terms and Conditions for Online Medical Teleconsultation Services</h3>
        <p>Provided by Stratosys Tech Private Limited (“STPL”)</p>
        <p>STPL offers online teleconsultation services under two distinct brands:</p>
        <ul>
          <li>Zenvy: the mobile and web application used by patients and other End-Users to access our teleconsultation services.</li>
          <li>Zenvy Doc: the dedicated application used by medical practitioners (doctors) to deliver teleconsultations and manage appointments.</li>
        </ul>
        <p>By accessing either Zenvy or Zenvy Doc, you are agreeing to be legally bound by these Terms and our Privacy Policy (available at [insert Privacy Policy URL]). These documents constitute the entire agreement (“Agreement”) between you and STPL regarding your use of our Services. In cases where you are a Practitioner, additional provider-specific terms may also apply.</p>

        <h4>1. Scope and Applicability</h4>
        <h5>1.1 For End-Users (Patients)</h5>
        <ul>
          <li>Who This Applies To: These Terms apply to any individual, their representatives, or affiliated parties (“User” or “End-User”) who access and use the Zenvy application to search for Practitioners and schedule online teleconsultations.</li>
          <li>Service Description: Zenvy facilitates the delivery of teleconsultation services via licensed medical Practitioners. The nature and scope of these services may be updated by STPL at our sole discretion; the current agreement in force at the time of access will apply.</li>
        </ul>
        <h5>1.2 For Practitioners (Doctors)</h5>
        <ul>
          <li>Who This Applies To: The Zenvy Doc application is exclusively used by licensed medical Practitioners (“Practitioner”, “Doctor”) who provide teleconsultation services through our platform.</li>
          <li>Provider Agreement: In addition to these Terms, Practitioners are subject to a separate provider agreement that governs the delivery of teleconsultations, appointment scheduling, data handling, and other operational matters on Zenvy Doc. Please ensure you read that agreement carefully before using Zenvy Doc.</li>
        </ul>

        <h4>2. Acceptance and Modifications</h4>
        <ul>
          <li>Acceptance of Terms: Before accessing either Zenvy or Zenvy Doc, you must read and agree to these Terms along with our Privacy Policy. Your continued use of the respective application signifies your acceptance of any modifications or updates.</li>
          <li>Right to Modify: STPL reserves the right to amend or discontinue any portion of the Services or these Terms at any time without prior notice. It is the user’s responsibility to review the updated Terms periodically. Continued usage implies acceptance of the changes.</li>
        </ul>

        <h4>3. Governing Law and Legal Compliance</h4>
        <ul>
          <li>Applicable Laws: This Agreement is governed by Indian law, including, but not limited to: The Indian Contract Act, 1872; The Information Technology Act, 2000; The Telemedicine Guidelines issued under the auspices of the Indian Medical Council (Professional Conduct, Etiquette, and Ethics Regulations, 2002).</li>
          <li>Dispute Resolution: Any disputes arising from or related to these Terms or your use of the Services will be resolved in accordance with the above laws.</li>
        </ul>

        <h4>4. User Responsibilities</h4>
        <h5>4.1 For End-Users on Zenvy</h5>
        <ul>
          <li>Accurate Information: You agree to provide accurate personal and healthcare-related information when registering or scheduling teleconsultations.</li>
          <li>Appropriate Use: Use of the Zenvy app is for accessing teleconsultation services only. Misusing the application or its services (e.g., by providing false information) may result in suspension of your account.</li>
          <li>Consent to Data Handling: By using the app, you explicitly consent to the collection, storage, and use of your personal data as detailed in our Privacy Policy.</li>
        </ul>
        <h5>4.2 For Practitioners on Zenvy Doc</h5>
        <ul>
          <li>Professional Responsibility: You agree to provide teleconsultation services in accordance with applicable medical guidelines and ethical standards.</li>
          <li>Account Security: It is your responsibility to maintain the confidentiality of your login credentials for Zenvy Doc.</li>
          <li>Adherence to Provider Guidelines: Practitioners must follow the operational protocols and cancellation policies detailed in your provider agreement to ensure minimal disruption to patient care.</li>
        </ul>

        <h4>5. Service Evolution</h4>
        <ul>
          <li>Dynamic Services: STPL continually enhances our Services. Whether you are an End-User accessing Zenvy or a Practitioner using Zenvy Doc, you acknowledge that functionalities, user interfaces, and service offerings may change over time.</li>
          <li>Notification of Material Changes: Any significant changes to the Services will be communicated through appropriate channels. Your continued use of the Services after such changes will be deemed acceptance of the revised terms.</li>
        </ul>

        <h4>6. General Disclaimers and Limitations</h4>
        <ul>
          <li>As-Is Basis: The Services are provided “as is” and “as available” without warranties of any kind, either express or implied.</li>
          <li>Limitation of Liability: STPL’s total liability for any damages arising from the use of the Services shall be limited as provided under Indian law.</li>
          <li>Disclaimer for Third-Party Content: Any content or resources accessible through the Platforms that are provided by third parties are not under STPL’s control, and we shall not be liable for inaccuracies or omissions in these materials.</li>
        </ul>

        <h4>7. Online Medical Consultation Feature – Terms for Users</h4>
        <h5>7.1 Definition</h5>
        <p>Online Medical Consultation Feature: This feature is offered by Stratosys Tech Private Limited (“STPL”) to enable Users—namely patients and their representatives—to receive remote medical consultations via our Platform (accessible through the Website and mobile applications). Through this feature, Users can communicate with our registered medical practitioners. STPL may automatically assign a Practitioner using its proprietary algorithm, which considers factors such as the time and date of the consultation request, the nature of the health concern, and other relevant criteria. Alternatively, Users may search for and select a Practitioner manually. The entire set of functionalities described in this section is collectively referred to as the “Online Medical Consultation Feature.”</p>
        <h5>7.2 Terms for Users</h5>
        <ul>
          <li>Assignment of Practitioners: STPL designates Practitioners based on a systematic algorithm that identifies the most relevant doctor according to the consultation details provided. In certain cases, Users have the flexibility to select a Practitioner from available search options on the Website or mobile app.</li>
          <li>Prescription and Advice Limitations: Any prescription or medical advice rendered during a Consult is provided based on the information shared during the online consultation. Users acknowledge that such recommendations may differ from those determined after an in-person examination. Consequently, Users should not consider the online prescription as definitive and must consult their regular medical practitioner before altering any ongoing treatments or medication regimens.</li>
          <li>Nature of the Consultation: Users expressly understand that during an online consultation, Practitioners do not conduct a physical examination. As a result, certain vital clinical details that are typically ascertained through direct physical assessment may be unavailable. Users accept and assume full responsibility for any risks arising from this limitation. The Consult service is not intended to replace emergency medical care or situations that require a physical examination.</li>
          <li>Applicability of Medical Advice: The medical advice provided through Consult is based on general clinical practices prevalent in India and is provided to the best of the Practitioner’s knowledge. Users should note that such guidance is not tailored for conditions specific to regions outside India, regardless of the location from which the consultation is accessed.</li>
          <li>Access to Health Records and Prescriptions: During and after a consultation, the Practitioner may upload prescriptions and/or other health records to the User’s account on the Platform for future reference. Users outside India acknowledge that issuing a prescription is at the sole discretion of the Practitioner and may not be provided in every instance.</li>
          <li>Quality Audit and Data Handling: The User agrees that STPL may periodically audit the consultation records—including communications, text, images, audio, or video materials exchanged between the User and the Practitioner—for purposes such as quality control, treatment improvement, and enhancement of User experience. Such data, which may include sensitive personal information, will be handled in accordance with our Privacy Policy.</li>
          <li>Communication Guidelines: Users shall confine their queries and communications with Practitioners to matters directly relevant to a specific disease, medicine, or medical condition. All interactions, including the sharing of images or videos (only if absolutely necessary for diagnostic purposes), must occur through the Platform. Users are advised not to use external communication channels to interact with Practitioners. Users must provide any additional documents or reports requested by the Practitioner in a timely manner.</li>
          <li>Single-User Consultation Limitation: Each paid consultation is intended for a single User only. In instances where multiple consultations are attempted under one paid session, the Practitioner is not obligated to address all such requests within that transaction.</li>
          <li>Restrictions on Drug Prescriptions: Users are prohibited from attempting to influence Practitioners to prescribe medications that do not comply with the Telemedicine Guidelines. This includes, but is not limited to, medications related to Medical Termination of Pregnancy (MTP), as well as drugs classified as sedatives, hypnotics, opioids, Schedule X substances, or fourth-generation antibiotics. If treatment necessitates restricted medications, Users must seek a direct, in-person consultation with a Practitioner to verify the need and to obtain the appropriate prescription.</li>
          <li>Accuracy of Information and Legal Use: Users warrant that all information provided during the Consult is accurate and complete. The Platform must not be used to engage in any activities deemed illegal. The transaction between the User and the Practitioner via the Platform is governed by Indian law, and any disputes will be subject to the jurisdiction stipulated in our overall Terms and Conditions.</li>
          <li>Payment and Support for Consultations: Payments for each consultation must be made through the designated online payment gateway provided on the Platform. If there are any issues regarding the payment not being credited correctly, Users are advised to reach out to our support team via the online chat support feature available at support@zenvy.co.in.</li>
          <li>Indemnification: The User agrees to indemnify and hold STPL, along with its affiliates, subsidiaries, officers, directors, employees, and agents, harmless against any and all claims, losses, damages, or expenses (including legal fees) that arise from the User’s use of the Consult service, any breach of the terms laid out herein, or any violation of applicable laws, rules, or regulations.</li>
        </ul>

        <h4>8. Refund Policy for Users</h4>
        <p>These refund terms apply to Users of the Consult service on our patient-facing application, Zenvy. By using our teleconsultation services, you agree to the following refund policy:</p>
        <ul>
          <li>Refund for Practitioner Misconduct: If an investigation confirms that a Practitioner has acted in contravention of any applicable laws or regulations, STPL will issue a full refund to the affected User, subject to the results of a thorough review.</li>
          <li>Abusive Behaviour by Users: If a consultation is cancelled due to the User’s use of abusive language or other unruly behaviour, no refund shall be granted, and STPL reserves the right to take legal action depending on the severity of the incident.</li>
          <li>Inappropriate Personal Queries: Users must limit their questions to those directly related to specific diseases, medicines, or medical conditions. Should a User raise unrelated or overly personal queries, STPL reserves the right to terminate the consultation immediately without offering any refund.</li>
          <li>Delayed or Inadequate Practitioner Response: If a Practitioner does not respond within ten (10) minutes from the scheduled commencement of a paid consultation, or if the Practitioner remains unresponsive for more than fifteen (15) minutes during an active consultation, the User may request a refund. In such cases, STPL will review the consultation details and, upon confirmation, issue a full refund.</li>
          <li>Consultation Summary Prescription: If a Practitioner fails to provide a consultation summary or prescription at the end of the consultation, the User is entitled to request a refund. However, if a summary prescription is provided, no refund will be issued.</li>
          <li>Premature Termination of Consultation: If a Practitioner abruptly or unreasonably shortens a consultation, the User may request a refund. STPL will conduct an investigation and, if the consultation is found to be inadequate, provide a full refund.</li>
          <li>Repetitive Cancellation Requests: STPL reserves the right to permanently block Users from accessing future services if multiple cancellation or refund requests are received for reasons that do not conform with this policy.</li>
          <li>Time Limit for Filing Refund Requests: Users have a window of three (3) days from the date of the consultation to flag any issues and request a refund. Refund requests submitted after this period will not be considered.</li>
          <li>Refund Request Procedure: Users may request a refund by contacting our online chat support at support@zenvy.co.in.</li>
          <li>Refund Processing and Timeline: Once a refund request is approved at STPL’s sole discretion after a detailed review, the refund will be processed and credited back to the User within seven (7) working days from the date of approval.</li>
          <li>Review of Consultation Concerns: Should a User raise any concerns regarding the inappropriateness or inadequacy of a consultation, the matter will be subject to a comprehensive review under STPL’s internal policies. Any decision on refunds or other remedial measures will be based on this detailed analysis.</li>
          <li>Final Discretion: All decisions regarding refunds and settlements under this policy are made at the sole and absolute discretion of STPL. Such decisions are final and binding.</li>
        </ul>

        <h4>9. Express Disclaimers</h4>
        <ul>
          <li>General Disclaimer: The Consult service is intended solely for general informational purposes and to facilitate online medical consultations. It is not meant for use in emergencies or serious medical conditions requiring immediate in-person assessment. If a Practitioner determines that a physical examination is necessary and advises an in-person consultation, it is the sole responsibility of the User to book an appointment with a qualified healthcare provider, whether that is the Practitioner listed on our Platform or another provider. STPL shall not be liable for any adverse outcomes or deterioration of the User’s condition resulting from failure to follow this advice.</li>
          <li>Substitution Disclaimer: Consult is provided merely to assist Users in obtaining timely medical advice remotely and is not a substitute for a comprehensive, face-to-face evaluation by a licensed medical professional.</li>
        </ul>

        <h4>10. Termination</h4>
        <ul>
          <li>STPL reserves the right to suspend, restrict, or terminate the Services provided through the Platform and under this Agreement at any time and for any reason, with or without prior notice.</li>
          <li>In addition, STPL may exercise any other available legal remedies.</li>
        </ul>

        <h4>11. Limitation of Liability</h4>
        <ul>
          <li>In no event, including in cases of negligence, shall STPL or any of its directors, officers, employees, agents, service providers, affiliates, or group companies be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages arising from, or in any way related to, your use of or inability to use the Platform—including any content, materials, or functions provided therein—even if advised of the possibility of such damages.</li>
          <li>Without limiting the foregoing, the Protected Entities shall not be liable for any content posted, transmitted, or exchanged by or on behalf of any User or other party via the Platform, or any unauthorized access to or alteration of your transmissions or data.</li>
        </ul>

        <h4>12. Severability</h4>
        <ul>
          <li>If any provision of this Agreement is held to be invalid, unenforceable, or otherwise contrary to applicable law by a court of competent jurisdiction or arbitral tribunal, that provision shall be adjusted or removed to the minimum extent necessary so as not to affect the enforceability of the remainder of this Agreement.</li>
          <li>The remaining provisions will continue in full force and effect, and the Agreement will be interpreted as if the invalid or unenforceable provision were excluded.</li>
        </ul>

        <h4>13. Waiver</h4>
        <ul>
          <li>No waiver of any term, condition, or breach of this Agreement by STPL shall be deemed to be a waiver of any subsequent breach or any other term, condition, or breach.</li>
          <li>Any waiver or consent by STPL must be in writing and signed by an authorized representative. Failure by STPL to enforce any provision of these Terms shall not be construed as a waiver of its right to enforce that or any other provision in the future.</li>
        </ul>

        <h4>14. Applicable Law and Dispute Settlement</h4>
        <ul>
          <li>Governing Law: This Agreement, including all contractual obligations between STPL and the User, shall be governed by and construed in accordance with the laws of India.</li>
          <li>Jurisdiction: Any disputes arising out of or in relation to this Agreement, the User’s use of the Platform, or any related information shall be exclusively subject to the jurisdiction of the courts located in Bengaluru, India.</li>
        </ul>
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
  const WHATSAPP_NUMBER = '916361218556';
  const buttons = document.querySelectorAll('.support-action');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const preset = button.dataset.message || 'Hello Zenvy, I need help.';
      const text = `${preset}`.trim();
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
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
  initLegalModals();
});
