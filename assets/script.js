const header=document.querySelector('.site-header');const toggle=document.querySelector('.menu-toggle');const links=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>24),{passive:true});
toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Accessible portrait zoom and font-size controls
const portraitFrame=document.getElementById('portraitFrame');
let portraitZoom=1;
const applyZoom=()=>{if(portraitFrame)portraitFrame.style.transform=`scale(${portraitZoom})`;};
document.getElementById('zoomIn')?.addEventListener('click',()=>{portraitZoom=Math.min(1.22,portraitZoom+.05);applyZoom()});
document.getElementById('zoomOut')?.addEventListener('click',()=>{portraitZoom=Math.max(.88,portraitZoom-.05);applyZoom()});
document.getElementById('fontUp')?.addEventListener('click',()=>{document.body.classList.remove('font-small');document.body.classList.add('font-large')});
document.getElementById('fontDown')?.addEventListener('click',()=>{document.body.classList.remove('font-large');document.body.classList.add('font-small')});
