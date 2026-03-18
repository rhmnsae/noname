// ─── Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.08 });
reveals.forEach(el => revealObs.observe(el));

// ─── Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ─── Drawer / Sidebar
const hamburger = document.getElementById('hamburger');
const drawer    = document.getElementById('drawer');
const overlay   = document.getElementById('drawerOverlay');
const closeBtn  = document.getElementById('drawerClose');

function openDrawer() {
  drawer.classList.add('open');
  overlay.classList.add('open');
  overlay.style.display = 'block';
  hamburger.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    if (!drawer.classList.contains('open')) overlay.style.display = 'none';
  }, 380);
}

hamburger.addEventListener('click', () => {
  drawer.classList.contains('open') ? closeDrawer() : openDrawer();
});
closeBtn.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);

// Close when any hash link inside drawer is clicked
drawer.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', closeDrawer);
});

// ─── Smooth scroll for all hash links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
