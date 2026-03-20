// Countdown
function tick(){
  const t=new Date('2025-09-20T13:00:00'),n=new Date();
  const diff=Math.max(0,t-n);
  const d=Math.floor(diff/864e5),h=Math.floor((diff%864e5)/36e5),m=Math.floor((diff%36e5)/6e4),s=Math.floor((diff%6e4)/1e3);
  const p=n=>String(n).padStart(2,'0');
  ['d','h','m','s'].forEach((k,i)=>{
    const v=p([d,h,m,s][i]);
    ['cd-','scd-','mcd-'].forEach(pre=>{
      const el=document.getElementById(pre+k);
      if(el)el.textContent=v;
    });
  });
}
tick();setInterval(tick,1000);

// Mobile sidebar
const topHam=document.getElementById('topHam');
const mobSb=document.getElementById('mobSidebar');
const mobOv=document.getElementById('mobOverlay');
const mobCl=document.getElementById('mobClose');
function openMob(){mobSb.classList.add('open');mobOv.classList.add('open');topHam.classList.add('open');document.body.style.overflow='hidden'}
function closeMob(){mobSb.classList.remove('open');mobOv.classList.remove('open');topHam.classList.remove('open');document.body.style.overflow=''}
topHam.addEventListener('click',()=>mobSb.classList.contains('open')?closeMob():openMob());
mobOv.addEventListener('click',closeMob);
mobCl.addEventListener('click',closeMob);

// Active link
const sbLinks=document.querySelectorAll('.sidebar .sb-link');
const secIds=['lineup','schedule','tickets','gallery','info','contact'];
function upActive(){
  const sy=window.scrollY+140;let cur=secIds[0];
  secIds.forEach(id=>{const el=document.getElementById(id);if(el&&el.offsetTop<=sy)cur=id});
  sbLinks.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+cur));
}
window.addEventListener('scroll',upActive,{passive:true});upActive();

// Schedule tabs
const schedData=[
  [{time:'13.30',stage:'Acoustic',artist:'Naif Acoustic Session',genre:'Indie Pop',hl:false},{time:'15.00',stage:'Jungle',artist:'Danilla Riyadi',genre:'Dream Pop / Folk',hl:false},{time:'16.30',stage:'Electric',artist:'Feast',genre:'Punk Rock',hl:false},{time:'18.00',stage:'Electric',artist:'Reality Club',genre:'Indie Rock / Post-punk',hl:true},{time:'19.30',stage:'Electronic',artist:'Bottlesmoker (Live Set)',genre:'Synth-pop / Electronic',hl:false},{time:'21.00',stage:'Main Stage',artist:'Fourtwnty — Headline Set',genre:'Indie Folk / Alternative',hl:true}],
  [{time:'14.00',stage:'Jungle',artist:'Yura Yunita',genre:'Pop / Soul',hl:false},{time:'15.30',stage:'Acoustic',artist:'Payung Teduh',genre:'Folk / Acoustic',hl:false},{time:'17.00',stage:'Electric',artist:'Barasuara',genre:'Art Rock',hl:true},{time:'19.00',stage:'Electronic',artist:'Duo Maia',genre:'Electronic / Pop',hl:false},{time:'21.00',stage:'Main Stage',artist:'Hindia — Headline Set',genre:'Indie Pop / Bedroom Pop',hl:true}],
  [{time:'13.30',stage:'Acoustic',artist:'Float',genre:'Post-rock / Ambient',hl:false},{time:'15.00',stage:'Jungle',artist:'Mocca',genre:'Indie Pop / Jazz',hl:false},{time:'16.30',stage:'Electric',artist:'Efek Rumah Kaca',genre:'Alternative / Experimental',hl:true},{time:'18.30',stage:'Electronic',artist:'DJ Yasmin',genre:'Electronic / House',hl:false},{time:'20.00',stage:'Main Stage',artist:'Raisa — Penutupan NSF',genre:'Pop / R&B — Orkestra Special',hl:true}]
];
function setDay(el,i){
  document.querySelectorAll('.sched-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  const list=document.getElementById('schedList');
  list.innerHTML=schedData[i].map(r=>`<div class="sched-row"><div class="sched-time">${r.time}</div><div class="sched-stage${r.hl?' highlight':''}">${r.stage}</div><div><div class="sched-artist">${r.artist}</div><div class="sched-genre">${r.genre}</div></div><div>${r.hl?'<div class="sched-hl">Headliner</div>':''}</div></div>`).join('');
  list.querySelectorAll('.sched-row').forEach((el,i)=>{el.style.cssText=`opacity:0;transform:translateY(10px);transition:opacity 0.35s ${i*0.045}s ease,transform 0.35s ${i*0.045}s ease`;setTimeout(()=>{el.style.opacity='1';el.style.transform='none'},10)});
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}});
});

// Reveal
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
