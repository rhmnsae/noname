/* =====================================================
   Arya Wirawan — Portfolio Script
   ===================================================== */

(function () {

  /* ---- Sidebar ---- */
  const hamburger = document.getElementById('hamburger');
  const sidebar   = document.getElementById('sidebar');
  const backdrop  = document.getElementById('backdrop');
  const sbClose   = document.getElementById('sbClose');

  function openSidebar () {
    sidebar.classList.add('open');
    backdrop.classList.add('open');
    hamburger.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar () {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
    hamburger.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openSidebar);
  if (sbClose)   sbClose.addEventListener('click', closeSidebar);
  if (backdrop)  backdrop.addEventListener('click', closeSidebar);

  /* close via data-sb-close links */
  document.querySelectorAll('[data-sb-close]').forEach(el => {
    el.addEventListener('click', closeSidebar);
  });

  /* close on Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSidebar();
  });


  /* ---- Scroll Reveal ---- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => revealObs.observe(el));
  }


  /* ---- Smooth Scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* ---- Navbar: shrink on scroll ---- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 60) {
        navbar.style.boxShadow = '0 2px 24px rgba(26,23,20,.08)';
      } else {
        navbar.style.boxShadow = 'none';
      }
      lastY = y;
    }, { passive: true });
  }


  /* ---- Skill bars: animate when visible ---- */
  const fills = document.querySelectorAll('.skill-fill');
  if (fills.length) {
    const skillObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const target = e.target;
          const width = target.style.width;
          target.style.width = '0';
          requestAnimationFrame(() => {
            setTimeout(() => { target.style.width = width; }, 100);
          });
          skillObs.unobserve(target);
        }
      });
    }, { threshold: 0.3 });
    fills.forEach(el => skillObs.observe(el));
  }

})();
