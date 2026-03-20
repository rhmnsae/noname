  /* ---- Loading screen ---- */
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loading').classList.add('hidden');
    }, 1800);
  });

  /* ---- Sidebar toggle (desktop) ---- */
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const main = document.getElementById('main');

  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
  });

  /* ---- Mobile menu ---- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const overlay = document.getElementById('mobile-overlay');

  function openMobileMenu() {
    sidebar.classList.add('expanded');
    overlay.classList.add('active');
    document.body.classList.add('sidebar-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    sidebar.classList.remove('expanded');
    overlay.classList.remove('active');
    document.body.classList.remove('sidebar-open');
    document.body.style.overflow = '';
  }

  mobileToggle.addEventListener('click', openMobileMenu);
  overlay.addEventListener('click', closeMobileMenu);

  /* Close on nav link click */
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ---- Active nav on scroll ---- */
  const sections = document.querySelectorAll('section[id], #hero');
  const navLinks = document.querySelectorAll('.sidebar-nav a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('section[id]').forEach(s => observer.observe(s));

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---- Counter animation ---- */
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

  /* ---- Parallax hero bg ---- */
  const heroBg = document.querySelector('.hero-bg');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight && heroBg) {
      heroBg.style.transform = `scale(1.06) translateY(${y * 0.25}px)`;
    }
  }, { passive: true });

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

