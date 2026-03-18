// Countdown timer
function updateCountdown() {
  const target = new Date('2025-09-20T17:00:00');
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) return;
  const days = Math.floor(diff / 864e5);
  const hours = Math.floor((diff % 864e5) / 36e5);
  const mins = Math.floor((diff % 36e5) / 6e4);
  const secs = Math.floor((diff % 6e4) / 1e3);
  ['days','hours','mins','secs'].forEach((k, i) => {
    const el = document.getElementById('cd-' + k);
    if (el) el.textContent = String([days, hours, mins, secs][i]).padStart(2, '0');
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Nav hamburger
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    if (!open) {
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '64px';
      navLinks.style.left = '0'; navLinks.style.right = '0';
      navLinks.style.background = '#09090b';
      navLinks.style.padding = '16px 20px 20px';
      navLinks.style.borderBottom = '1px solid #27272a';
    }
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const el = document.querySelector(a.getAttribute('href'));
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
  });
});
