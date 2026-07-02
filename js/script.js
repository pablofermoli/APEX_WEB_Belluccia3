/* =========================================================
   APEX SIM RACING ACADEMY — SCRIPT
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Navbar: solid background after scroll ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile menu toggle ---------- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  const closeMenu = () => {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ---------- Scroll cue button ---------- */
  const scrollCue = document.getElementById('scrollCue');
  if (scrollCue) {
    scrollCue.addEventListener('click', () => {
      const target = document.getElementById('academia');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ---------- FAQ accordion ---------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__q');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      faqItems.forEach(i => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  /* ---------- Scroll reveal (Intersection Observer) ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    });

    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

});
