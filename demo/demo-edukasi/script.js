// ── Sidebar Toggle ──
const sidebar   = document.getElementById('sidebar');
const overlay   = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');
const closeBtn  = document.getElementById('sidebarClose');

function openNav() {
  sidebar.classList.add('open');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);

// Close on ESC
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

// ── Active nav item on scroll ──
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section[id], div.stats-band');

const highlightNav = () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navItems.forEach(item => {
    item.classList.remove('active');
    const href = item.getAttribute('href');
    if (href && href === '#' + current) item.classList.add('active');
  });
  if (!current) navItems[0]?.classList.add('active');
};

window.addEventListener('scroll', highlightNav, { passive: true });

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = window.innerWidth <= 900 ? 60 : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Reveal on scroll ──
const revEls = document.querySelectorAll('.reveal');
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
revEls.forEach(el => revObs.observe(el));

// ── Stagger delays ──
document.querySelectorAll('.courses-grid .course-card, .features-grid .feature-card, .testi-grid .testi-card').forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 0.08 + 's';
});
