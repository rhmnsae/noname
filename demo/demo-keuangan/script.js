// Sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const ham = document.getElementById('hamburger');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
  ham.classList.toggle('open');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

// Close sidebar on nav link click (mobile)
document.querySelectorAll('.sb-nav-item').forEach(item => {
  item.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) toggleSidebar();
  });
});

// Active nav item
function setActive(el) {
  document.querySelectorAll('.sb-nav-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
}

// Reveal on scroll
const revEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
revEls.forEach(el => obs.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// Update active sidebar item on scroll
const sections = document.querySelectorAll('section[id], div[id]');
const navItems = document.querySelectorAll('.sb-nav-item[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  navItems.forEach(n => {
    n.classList.remove('active');
    if (n.getAttribute('href') === '#' + current) n.classList.add('active');
  });
});
