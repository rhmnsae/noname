/* ---- Sidebar toggle ---- */
const sidebar = document.getElementById('sidebar');
const hamBtn = document.getElementById('hamBtn');
const overlay = document.getElementById('overlay');

function openSidebar() {
  sidebar.classList.add('open');
  hamBtn.classList.add('open');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  hamBtn.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

hamBtn.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});

overlay.addEventListener('click', closeSidebar);

/* ---- Active nav link on scroll ---- */
const sections = document.querySelectorAll('section[id], div[id="gallery"]');
const navLinks = document.querySelectorAll('.sidebar-nav a');

function setActiveLink() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY + window.innerHeight * 0.35 >= sec.offsetTop) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

/* ---- Scroll reveal ---- */
const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

window.addEventListener('scroll', setActiveLink, { passive: true });

/* ---- Close sidebar on nav link click (mobile) ---- */
navLinks.forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth < 900) closeSidebar();
  });
});
