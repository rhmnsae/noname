/* ============================================================
   SCROLL REVEAL
============================================================ */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => revealObserver.observe(el));

/* ============================================================
   NAV SCROLL SHADOW
============================================================ */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ============================================================
   MOBILE SIDEBAR
============================================================ */
const hamburger = document.getElementById('navHamburger');
const sidebar = document.getElementById('mobileSidebar');
const overlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.style.display = 'block';
  hamburger.classList.add('active');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => overlay.classList.add('visible'));
}
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
  hamburger.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => { overlay.style.display = 'none'; }, 300);
}

hamburger.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});
sidebarClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar on link click
document.querySelectorAll('.sidebar-nav a').forEach(link => {
  link.addEventListener('click', closeSidebar);
});

/* ============================================================
   SMOOTH SCROLL for all internal links
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ============================================================
   WA FORM SUBMIT
============================================================ */
function submitWA() {
  const nama    = document.getElementById('waNama').value.trim();
  const phone   = document.getElementById('waPhone').value.trim();
  const tgl     = document.getElementById('waTanggal').value;
  const layanan = document.getElementById('waLayanan').value;
  const catatan = document.getElementById('waCatatan').value.trim();

  if (!nama || !layanan) {
    alert('Harap isi Nama Lengkap dan pilih Layanan terlebih dahulu.');
    return;
  }
  const tglFormatted = tgl ? new Date(tgl).toLocaleDateString('id-ID', {weekday:'long', year:'numeric', month:'long', day:'numeric'}) : 'Belum ditentukan';
  let msg = `Halo Klinik Medika Prima, saya ingin membuat janji konsultasi:\n\n`;
  msg += `Nama: *${nama}*\n`;
  if (phone) msg += `No. HP: *${phone}*\n`;
  msg += `Layanan: *${layanan}*\n`;
  msg += `Tanggal: *${tglFormatted}*\n`;
  if (catatan) msg += `Keluhan: ${catatan}\n`;
  msg += `\nTerima kasih.`;
  window.open(`https://wa.me/628119999777?text=${encodeURIComponent(msg)}`, '_blank');
}

function openWADoctor(doctorName) {
  const msg = `Halo Klinik Medika Prima, saya ingin membuat janji konsultasi dengan *${doctorName}*. Mohon informasi jadwal yang tersedia. Terima kasih.`;
  window.open(`https://wa.me/628119999777?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ============================================================
   SET MIN DATE for date input
============================================================ */
const dateInput = document.getElementById('waTanggal');
if (dateInput) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;
}
