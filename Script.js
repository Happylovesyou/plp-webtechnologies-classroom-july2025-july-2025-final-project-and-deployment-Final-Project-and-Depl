// js/script.js
// Controls hamburger menu, slider, and contact form validation

document.addEventListener('DOMContentLoaded', function () {
  // 1) Set dynamic year in footers
  const yearEls = [document.getElementById('year'), document.getElementById('year-2'), document.getElementById('year-3')];
  const now = new Date().getFullYear();
  yearEls.forEach(el => { if (el) el.textContent = now; });

  // 2) Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      // toggle aria-expanded for accessibility
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
    });
  }

  // 3) Simple image slider (Home page)
  const slides = Array.from(document.querySelectorAll('#hero-slider .slide'));
  let current = 0;
  const nextBtn = document.getElementById('next-slide');
  const prevBtn = document.getElementById('prev-slide');

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
  }

  if (slides.length) {
    showSlide(current);
    // auto-advance every 4.5 seconds
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 4500);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { current = (current + 1) % slides.length; showSlide(current); });
  if (prevBtn) prevBtn.addEventListener('click', () => { current = (current - 1 + slides.length) % slides.length; showSlide(current); });

  // 4) Contact form validation
  const form = document.getElementById('contact-form');
  if (form) {
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const messageEl = document.getElementById('message');
    const successEl = document.getElementById('form-success');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let ok = true;

      // clear previous errors
      document.getElementById('error-name').textContent = '';
      document.getElementById('error-email').textContent = '';
      document.getElementById('error-message').textContent = '';
      successEl.textContent = '';

      // name validation
      if (!nameEl.value.trim() || nameEl.value.trim().length < 2) {
        document.getElementById('error-name').textContent = 'Please enter your name (min 2 characters).';
        ok = false;
      }

      // email validation (simple regex)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailEl.value.trim())) {
        document.getElementById('error-email').textContent = 'Please enter a valid email address.';
        ok = false;
      }

      // message validation
      if (!messageEl.value.trim() || messageEl.value.trim().length < 10) {
        document.getElementById('error-message').textContent = 'Please enter a message (min 10 characters).';
        ok = false;
      }

      if (!ok) return;

      // If valid: show a friendly success message.
      // NOTE: This site does not include a server backend. To receive messages in real life:
      // - integrate Netlify Forms, Formspree, EmailJS, or a backend API endpoint.
      successEl.textContent = 'Thanks — your message looks good! (This demo does not send emails.)';
      form.reset();
    });
  }
});
