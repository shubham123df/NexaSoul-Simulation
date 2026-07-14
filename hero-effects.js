(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const css = `
    .hero-network{position:absolute;inset:0;width:100%;height:62%;z-index:0;pointer-events:none;opacity:.78}
    .cursor-glow{position:absolute;z-index:0;width:420px;height:420px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(98,99,255,.15),rgba(31,202,217,.06) 30%,transparent 67%);transform:translate(-50%,-50%);filter:blur(3px);opacity:0;transition:opacity .35s}
    .hero-badge{position:absolute;z-index:2;display:grid;place-items:center;width:52px;height:52px;border:1px solid #fff;border-radius:50%;background:rgba(255,255,255,.82);box-shadow:0 12px 25px rgba(62,83,162,.16);backdrop-filter:blur(10px);font-size:22px;animation:badgeFloat var(--speed) ease-in-out infinite var(--delay)}
    .hero-badge:nth-of-type(1){left:47%;top:16%}.hero-badge:nth-of-type(2){left:39%;top:30%}.hero-badge:nth-of-type(3){right:33%;top:17%}.hero-badge:nth-of-type(4){right:24%;top:40%}.hero-badge:nth-of-type(5){left:46%;top:48%}
    @keyframes badgeFloat{50%{transform:translateY(-13px) rotate(8deg)}}
    .hero h1{animation:heroText .85s cubic-bezier(.2,.8,.2,1) both}.hero p,.hero .actions,.hero .hero-card,.hero .quick{animation:heroText .8s .15s cubic-bezier(.2,.8,.2,1) both}@keyframes heroText{from{opacity:0;transform:translateY(26px);filter:blur(6px)}to{opacity:1;transform:none;filter:none}}
    .hero-card,.show,.quick div,.qrcard,.level{will-change:transform}.hero-card:before,.show:before,.qrcard:before{content:"";position:absolute;inset:-1px;border-radius:inherit;padding:1px;background:linear-gradient(125deg,rgba(49,92,244,.7),rgba(4,191,213,.05),rgba(159,221,66,.6));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;opacity:.35}
    .path:before{transform-origin:top;transform:scaleY(var(--road-progress,0));transition:transform .12s linear}.level{transition:transform .28s,box-shadow .28s,opacity .5s}.level:not(.visible){opacity:.35}.number-pop{display:inline-block;animation:numberPop .6s ease both}@keyframes numberPop{from{transform:scale(.7);opacity:0}to{transform:scale(1);opacity:1}}
    @media(max-width:800px){.hero-network{height:48%;opacity:.55}.hero-badge{width:40px;height:40px;font-size:17px}.hero-badge:nth-of-type(1){left:48%;top:18%}.hero-badge:nth-of-type(2){left:35%;top:29%}.hero-badge:nth-of-type(3){right:18%;top:21%}.hero-badge:nth-of-type(4){right:9%;top:43%}.hero-badge:nth-of-type(5){left:48%;top:49%}}
  `;
  const style = document.createElement('style'); style.textContent = css; document.head.append(style);

  const canvas = document.createElement('canvas'); canvas.className = 'hero-network'; canvas.setAttribute('aria-hidden','true'); hero.prepend(canvas);
  const ctx = canvas.getContext('2d'); let points = []; let w = 0; let h = 0; let dpr = Math.min(devicePixelRatio || 1, 2);
  function resize(){ const r=hero.getBoundingClientRect(); w=r.width; h=Math.min(r.height*.62,560); canvas.width=w*dpr; canvas.height=h*dpr; canvas.style.height=h+'px'; ctx.setTransform(dpr,0,0,dpr,0,0); const n=Math.max(34,Math.min(86,Math.round(w/22))); points=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18})); }
  function draw(){ctx.clearRect(0,0,w,h); for(let i=0;i<points.length;i++){const p=points[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;for(let j=i+1;j<points.length;j++){const q=points[j],dx=p.x-q.x,dy=p.y-q.y,dist=Math.hypot(dx,dy);if(dist<145){ctx.beginPath();ctx.strokeStyle=`rgba(91,78,255,${.18*(1-dist/145)})`;ctx.lineWidth=1;ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();}}ctx.beginPath();ctx.fillStyle='rgba(79,70,229,.72)';ctx.arc(p.x,p.y,1.6,0,Math.PI*2);ctx.fill();} if(!reduced) requestAnimationFrame(draw);}
  resize(); addEventListener('resize',resize,{passive:true}); draw();

  ['⌘','✦','⚡','◈','◎'].forEach((icon,index)=>{const badge=document.createElement('i');badge.className='hero-badge';badge.textContent=icon;badge.style.setProperty('--speed',`${5+index*.65}s`);badge.style.setProperty('--delay',`${-index*.8}s`);badge.setAttribute('aria-hidden','true');hero.append(badge)});
  const glow=document.createElement('i');glow.className='cursor-glow';hero.append(glow); hero.addEventListener('pointermove',e=>{if(reduced||!matchMedia('(pointer:fine)').matches)return;const r=hero.getBoundingClientRect();glow.style.left=(e.clientX-r.left)+'px';glow.style.top=(e.clientY-r.top)+'px';glow.style.opacity='1'});hero.addEventListener('pointerleave',()=>glow.style.opacity='0');

  if(matchMedia('(pointer:fine)').matches&&!reduced){document.querySelectorAll('.btn,.join').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)*.12,y=(e.clientY-r.top-r.height/2)*.16;el.style.transform=`translate(${x}px,${y}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});document.querySelectorAll('.hero-card,.show,.quick div,.qrcard,.level').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(800px) rotateX(${y*-5}deg) rotateY(${x*6}deg) translateY(-5px)`});el.addEventListener('pointerleave',()=>el.style.transform='')})}

  const path=document.querySelector('.path'); if(path){const update=()=>{const r=path.getBoundingClientRect(),view=innerHeight;const p=Math.max(0,Math.min(1,(view-r.top)/(r.height+view*.18)));path.style.setProperty('--road-progress',p)};addEventListener('scroll',update,{passive:true});update();}
  document.querySelectorAll('.stats b').forEach(el=>{const text=el.textContent,number=parseInt(text);if(!number)return;const suffix=text.replace(/[0-9]/g,'');let done=false;const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!done){done=true;const start=performance.now();function tick(now){const p=Math.min(1,(now-start)/900);el.textContent=Math.round(number*(1-Math.pow(1-p,3)))+suffix;if(p<1)requestAnimationFrame(tick);else el.classList.add('number-pop')}requestAnimationFrame(tick);ob.disconnect()}}),{threshold:.5});ob.observe(el)});
})();
