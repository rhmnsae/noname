const sidebar=document.getElementById('sidebar'),sbOverlay=document.getElementById('sbOverlay'),topHam=document.getElementById('topHam');
function openSb(){sidebar.classList.add('open');sbOverlay.classList.add('open');topHam.classList.add('open');document.body.style.overflow='hidden'}
function closeSb(){sidebar.classList.remove('open');sbOverlay.classList.remove('open');topHam.classList.remove('open');document.body.style.overflow=''}
topHam.addEventListener('click',()=>sidebar.classList.contains('open')?closeSb():openSb());
sbOverlay.addEventListener('click',closeSb);
document.querySelectorAll('.sidebar .sb-link').forEach(l=>l.addEventListener('click',()=>{if(window.innerWidth<=1100)closeSb()}));
window.addEventListener('resize',()=>{if(window.innerWidth>1100){sidebar.classList.remove('open');sbOverlay.classList.remove('open');topHam.classList.remove('open');document.body.style.overflow=''}});
const sbLinks=document.querySelectorAll('.sidebar .sb-link');
const sIds=['hero','services','about','gallery','testimonials','cta'];
function upActive(){const sy=window.scrollY+120;let cur=sIds[0];sIds.forEach(id=>{const el=document.getElementById(id);if(el&&el.offsetTop<=sy)cur=id});sbLinks.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+cur))}
window.addEventListener('scroll',upActive,{passive:true});upActive();
function animCounter(el,target,sfx=''){let st=null;const dur=1800;const step=ts=>{if(!st)st=ts;const p=Math.min((ts-st)/dur,1);const e=1-Math.pow(1-p,3);el.textContent=Math.floor(e*target)+sfx;if(p<1)requestAnimationFrame(step);else el.textContent=target+sfx};requestAnimationFrame(step)}
const cObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting&&!e.target.dataset.done){e.target.dataset.done='1';const v=parseInt(e.target.dataset.val);if(!isNaN(v))animCounter(e.target,v,v===98?'%':v===12?' Thn':'+')}})},{threshold:0.5});
document.querySelectorAll('.st-num[data-val]').forEach(el=>cObs.observe(el));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}})});
function submitForm(){const fs=document.querySelectorAll('.finput,.ftextarea');let ok=true;fs.forEach(f=>{if(!f.value.trim()){f.style.borderColor='#dc2626';ok=false}else f.style.borderColor=''});if(ok)alert('Terima kasih! Tim konsultan kami akan menghubungi Anda dalam 2 jam kerja.')}
