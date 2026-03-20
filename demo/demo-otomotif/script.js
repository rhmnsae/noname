// ── Sidebar toggle ──
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sbOverlay');
const ham = document.getElementById('ham');

function openSidebar(){
  sidebar.classList.add('open');
  overlay.classList.add('open');
  ham.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeSidebar(){
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  ham.classList.remove('open');
  document.body.style.overflow='';
}
ham.addEventListener('click',()=>{
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});
overlay.addEventListener('click',closeSidebar);

// ── Active nav link ──
const links = document.querySelectorAll('.sb-link[href^="#"]');
const sections = ['hero','kendaraan','service','gallery','testi'];
function setActive(){
  const scrollY = window.scrollY+120;
  let current = 'hero';
  sections.forEach(id=>{
    const el = document.getElementById(id);
    if(el && el.offsetTop <= scrollY) current = id;
  });
  links.forEach(l=>{
    l.classList.toggle('active', l.getAttribute('href')==='#'+current);
  });
}
window.addEventListener('scroll',setActive,{passive:true});
setActive();

// ── Smooth scroll from sidebar ──
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t = document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
  });
});

// ── Reveal on scroll ──
const revEls = document.querySelectorAll('.reveal,.reveal-l');
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:0.08});
revEls.forEach(el=>obs.observe(el));
