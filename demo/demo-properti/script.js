// Sidebar active link
const sbLinks = document.querySelectorAll('.sidebar .sb-link');
const secIds = ['hero','properti','why','gallery','testi','kontak'];
function updateActive(){
  const sy = window.scrollY + 100;
  let cur = secIds[0];
  secIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= sy) cur = id;
  });
  sbLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
}
window.addEventListener('scroll', updateActive, {passive:true});
updateActive();

// Mobile hamburger — toggle sidebar on mobile (reuse desktop sidebar)
const topHam = document.getElementById('topHam');
const sidebar = document.getElementById('sidebar');
const sbOverlay = document.getElementById('sbOverlay');

function openSidebar(){
  sidebar.style.display = 'flex';
  setTimeout(() => sidebar.classList.add('open'), 1);
  sbOverlay.classList.add('open');
  topHam.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSidebar(){
  sidebar.classList.remove('open');
  setTimeout(() => { if(!sidebar.classList.contains('open')) sidebar.style.display = ''; }, 400);
  sbOverlay.classList.remove('open');
  topHam.classList.remove('open');
  document.body.style.overflow = '';
}
topHam.addEventListener('click', () => {
  if (window.innerWidth <= 960) {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  }
});
sbOverlay.addEventListener('click', closeSidebar);

// On mobile, sidebar needs position fixed & show
function handleResize(){
  if (window.innerWidth > 960) {
    sidebar.style.display = '';
    sidebar.classList.remove('open');
    sbOverlay.classList.remove('open');
    document.body.style.overflow = '';
  } else {
    if (!sidebar.classList.contains('open')) {
      sidebar.style.display = 'none';
    }
  }
}
window.addEventListener('resize', handleResize);
handleResize();

// All sidebar links close sidebar on mobile
document.querySelectorAll('.sidebar a, .sidebar .sb-link').forEach(a => {
  a.addEventListener('click', () => { if (window.innerWidth <= 960) closeSidebar(); });
});

// Filter tabs
function setTab(btn, cat) {
  document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.p-card').forEach(card => {
    card.style.display = (cat === 'semua' || card.getAttribute('data-cat') === cat) ? '' : 'none';
  });
}

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// Form submit handler
function handleSubmit(){
  const inputs = document.querySelectorAll('.form-input, .form-textarea');
  let valid = true;
  inputs.forEach(i => { if (!i.value.trim()) { i.style.borderColor = '#e53e3e'; valid = false; } else { i.style.borderColor = ''; } });
  if (valid) alert('Pesan Anda telah dikirim. Tim kami akan menghubungi Anda segera.');
}
