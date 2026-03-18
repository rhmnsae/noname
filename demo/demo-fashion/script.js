/* ─── SIDEBAR TOGGLE ─────────────────────────────── */
const sidebar        = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const hamburger      = document.getElementById('hamburger');

function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('open');
  hamburger.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});
sidebarOverlay.addEventListener('click', closeSidebar);

/* ─── ACTIVE NAV LINK ────────────────────────────── */
const navLinks = document.querySelectorAll('.sidebar-nav a');
const sections = document.querySelectorAll('section[id], div[id]');

function setActiveLink() {
  let current = '';
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top <= 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

/* ─── SMOOTH SCROLL (closes sidebar on mobile) ───── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      closeSidebar();
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  });
});

/* ─── SCROLL REVEAL ──────────────────────────────── */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => revealObserver.observe(el));

/* ─── SCROLL EVENTS ──────────────────────────────── */
window.addEventListener('scroll', () => {
  setActiveLink();
}, { passive: true });

/* ─── NEWSLETTER SUBMIT ──────────────────────────── */
const nlForm = document.querySelector('.newsletter-form');
if (nlForm) {
  const btn   = nlForm.querySelector('.nl-btn');
  const input = nlForm.querySelector('.nl-input');
  btn.addEventListener('click', () => {
    const email = input.value.trim();
    if (!email || !email.includes('@')) {
      input.style.borderBottom = '1px solid #B5193A';
      input.focus();
      return;
    }
    btn.textContent = 'Terdaftar';
    btn.style.background = '#2A6B3C';
    input.value = '';
    input.style.borderBottom = '';
    input.disabled = true;
    btn.disabled = true;
  });
  input.addEventListener('input', () => {
    input.style.borderBottom = '';
  });
}

/* ─── CLOSE SIDEBAR ON RESIZE ────────────────────── */
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeSidebar();
}, { passive: true });
