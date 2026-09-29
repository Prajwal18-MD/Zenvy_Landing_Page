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
  const buttons = document.querySelectorAll('.support-action');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const message = button.dataset.message || 'Support contact coming soon';
      const supportCard = button.closest('.support-card');
      if (!supportCard) return;

      const existing = supportCard.querySelector('.support-status');
      if (existing) {
        existing.textContent = message;
        return;
      }

      const status = document.createElement('p');
      status.className = 'support-status';
      status.textContent = message;
      supportCard.appendChild(status);
    });
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
});
