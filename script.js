/* Portfolio Nora Habrich — interactivité */
/* theme */
(function(){
  const root=document.documentElement, btn=document.getElementById('theme');
  let saved=null; try{saved=localStorage.getItem('nh-theme')}catch(e){}
  if(saved) root.dataset.theme=saved;
  const isDark=()=>root.dataset.theme? root.dataset.theme==='dark' : !matchMedia('(prefers-color-scheme: light)').matches;
  const sync=()=>btn.textContent=isDark()?'☀':'☾';
  sync();
  btn.addEventListener('click',()=>{root.dataset.theme=isDark()?'light':'dark';try{localStorage.setItem('nh-theme',root.dataset.theme)}catch(e){}sync();});
})();

/* scroll meter */
(function(){
  const el=document.getElementById('pct');
  const up=()=>{const h=document.documentElement.scrollHeight-innerHeight;el.textContent=h>0?Math.round(scrollY/h*100):0;};
  addEventListener('scroll',up,{passive:true});up();
})();

/* experience */
const XP=[
  {co:"OMEGA NÉGOCE",role:"Responsable Administrative et Financière (RAF)",when:"Oct. 2025 — Juin 2026",where:"Maroc",
   items:["Pilotage d'un contrôle fiscal complet (IS, TVA, IR/salaires, 2022–2025) : préparation des dossiers, réconciliations pluriannuelles et sécurisation de la conformité.","Génération et réconciliation des déclarations de TVA via des flux EDI/XML, fiabilisation des données entre systèmes comptables et fiscaux.","Conformité fiscale et administrative sur plusieurs entités du groupe, en lien avec les enjeux douaniers et de commerce international (import, devises).","Automatisation d'outils de suivi (trésorerie, créances, simulation IS/TVA) sous Excel/VBA pour fiabiliser le reporting financier."],
   tags:["Fiscalité","TVA","EDI / XML","Excel / VBA","Trésorerie"]},
  {co:"Danone",role:"Digital Finance Analyst · stage de fin d'études",when:"Fév. 2025 — Juil. 2025",where:"Paris, France",
   items:["Amélioration des dashboards Power BI dans le cadre du programme Reporting Factory.","Exploration de cas d'usage IA (Microsoft Copilot) pour automatiser des processus métiers et financiers.","Création de vidéos e-learning et formation des utilisateurs Finance.","Animation de la communauté Reporting Factory (Business Owner Day, workshops utilisateurs)."],
   tags:["Power BI","Copilot","Reporting","Formation"]},
  {co:"Wafa Gestion",role:"Analyste en gestion de portefeuille · stage de fin d'études",when:"Fév. 2024 — Juil. 2024",where:"Casablanca, Maroc",
   items:["Optimisation de portefeuille avec le modèle Black-Litterman pour des allocations d'ETF.","Prédiction des vues des investisseurs via des modèles de Machine Learning et des données macroéconomiques."],
   tags:["Python","Machine Learning","Black-Litterman","ETF"]},
  {co:"Bank Al-Maghrib",role:"Stagiaire en conformité bancaire",when:"Août 2023",where:"Maroc",
   items:["Suivi des opérations pour garantir la conformité réglementaire.","Collaboration avec des clients institutionnels sur les exigences légales."],
   tags:["Conformité","Réglementation bancaire"]}
];
(function(){
  const tabs=document.getElementById('tabs'), panel=document.getElementById('panel');
  const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
  function show(i){
    [...tabs.children].forEach((t,j)=>t.setAttribute('aria-selected',j===i));
    const x=XP[i];
    panel.innerHTML=`<div class="meta">${x.when} · ${x.where}</div><h3>${esc(x.role)}</h3><div class="co">${esc(x.co)}</div><ul>${x.items.map(t=>`<li>${esc(t)}</li>`).join('')}</ul><div class="chips">${x.tags.map(t=>`<span class="chip">${esc(t)}</span>`).join('')}</div>`;
  }
  XP.forEach((x,i)=>{const b=document.createElement('button');b.className='tab';b.type='button';b.setAttribute('role','tab');b.innerHTML=`<b>${x.co}</b><span>${x.when}</span>`;b.onclick=()=>show(i);tabs.appendChild(b);});
  show(0);
})();

/* projects */
const PROJ=[
  {cat:"Finance quantitative",title:"Allocation d'ETF avec Black-Litterman et Machine Learning",short:"Un modèle d'allocation qui combine l'équilibre de marché et des vues d'investisseurs prédites par ML.",
   long:"Chez Wafa Gestion, j'ai optimisé des allocations d'ETF avec le modèle Black-Litterman. Les vues des investisseurs, habituellement saisies à la main, étaient prédites par des modèles de Machine Learning entraînés sur des données macroéconomiques.",tags:["Python","Machine Learning","Black-Litterman","Données macro"],ctx:"Wafa Gestion · 2024"},
  {cat:"BI & reporting",title:"Dashboards Power BI de la Reporting Factory",short:"Amélioration des tableaux de bord financiers utilisés par les équipes Finance de Danone.",
   long:"Dans le programme Reporting Factory, j'ai participé à l'amélioration des dashboards Power BI, formé les utilisateurs Finance par des vidéos e-learning et animé la communauté (Business Owner Day, workshops).",tags:["Power BI","Reporting","E-learning"],ctx:"Danone · 2025"},
  {cat:"BI & reporting",title:"Cas d'usage IA avec Microsoft Copilot",short:"Exploration de l'IA générative pour automatiser des processus métiers et financiers.",
   long:"Identification et test de cas d'usage Copilot pour réduire les tâches manuelles des équipes Finance, en lien avec la Reporting Factory.",tags:["Copilot","IA générative","Automatisation"],ctx:"Danone · 2025"},
  {cat:"Automatisation",title:"Déclarations de TVA en flux EDI/XML",short:"Génération et réconciliation automatisées des déclarations de TVA entre comptabilité et fiscalité.",
   long:"Mise en place de la génération des déclarations de TVA via des flux EDI/XML et réconciliation des données entre les systèmes comptables et fiscaux, pour des déclarations fiables et traçables.",tags:["EDI","XML","TVA","Qualité des données"],ctx:"OMEGA NÉGOCE · 2025–2026"},
  {cat:"Automatisation",title:"Outils de suivi trésorerie, créances et simulation IS/TVA",short:"Des outils Excel/VBA qui fiabilisent le reporting financier au quotidien.",
   long:"Conception d'outils automatisés de suivi de trésorerie et de créances, et d'un simulateur IS/TVA, pour remplacer des calculs manuels et sécuriser le reporting.",tags:["Excel","VBA","Trésorerie","Fiscalité"],ctx:"OMEGA NÉGOCE · 2025–2026"},
  {cat:"Automatisation",title:"Réconciliations pour un contrôle fiscal sur 4 exercices",short:"Préparation des dossiers et réconciliations pluriannuelles (IS, TVA, IR/salaires) de 2022 à 2025.",
   long:"Pilotage complet d'un contrôle fiscal : collecte et structuration des données sur quatre exercices, réconciliations entre sources et sécurisation de la conformité face à l'administration fiscale.",tags:["Réconciliation","IS","TVA","IR"],ctx:"OMEGA NÉGOCE · 2025–2026"}
];
(function(){
  const cats=["Tous",...new Set(PROJ.map(p=>p.cat))];
  const f=document.getElementById('filters'), c=document.getElementById('cards');
  let cur="Tous";
  function render(){
    [...f.children].forEach(b=>b.setAttribute('aria-pressed',b.dataset.c===cur));
    c.innerHTML="";
    PROJ.forEach((p,i)=>{ if(cur!=="Tous"&&p.cat!==cur) return;
      const el=document.createElement('button'); el.type='button'; el.className='card'; el.setAttribute('aria-expanded','false');
      el.innerHTML=`<div class="top"><span>Projet ${String(i+1).padStart(2,'0')} · ${p.cat}</span><span class="plus">+</span></div><h3>${p.title}</h3><p class="short">${p.short}</p><p class="long" hidden>${p.long}</p><div class="chips">${p.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div><div class="more">${p.ctx} · lire la suite ▾</div>`;
      el.onclick=()=>{const o=el.getAttribute('aria-expanded')==='true';el.setAttribute('aria-expanded',!o);el.querySelector('.long').hidden=o;el.querySelector('.plus').textContent=o?'+':'−';el.querySelector('.more').textContent=`${p.ctx} · ${o?'lire la suite ▾':'réduire ▴'}`;};
      c.appendChild(el);
    });
  }
  cats.forEach(k=>{const b=document.createElement('button');b.type='button';b.className='filter';b.dataset.c=k;b.textContent=k;b.onclick=()=>{cur=k;render();};f.appendChild(b);});
  render();
})();

/* copy */
document.querySelectorAll('.copy').forEach(b=>b.addEventListener('click',()=>{
  const done=()=>{b.textContent='copié';setTimeout(()=>b.textContent='copier',1500)};
  try{navigator.clipboard.writeText(b.dataset.copy).then(done,()=>{const s=getSelection(),r=document.createRange();r.selectNodeContents(b.previousElementSibling.querySelector('.v'));s.removeAllRanges();s.addRange(r);});}catch(e){}
}));

/* 2048 */
(function(){
  const boardEl=document.getElementById('board'), sEl=document.getElementById('score'), bEl=document.getElementById('best'), st=document.getElementById('gstatus');
  let g, score, best=0; try{best=+localStorage.getItem('nh-2048')||0}catch(e){}
  const cells=[]; for(let i=0;i<16;i++){const d=document.createElement('div');d.className='cell';boardEl.appendChild(d);cells.push(d);}
  function color(v){ if(!v) return ['var(--surface-2)','var(--fg)'];
    const k=Math.log2(v); const pct=Math.min(100,k*9); return [`color-mix(in srgb,var(--accent) ${pct}%,var(--surface-2))`, k>=6?'var(--accent-ink)':'var(--fg)']; }
  function draw(){ g.forEach((v,i)=>{const [bg,fg]=color(v);cells[i].textContent=v||'';cells[i].style.background=bg;cells[i].style.color=fg;}); sEl.textContent=score; bEl.textContent=best; }
  function add(){ const e=g.map((v,i)=>v?-1:i).filter(i=>i>=0); if(!e.length) return; g[e[Math.random()*e.length|0]]=Math.random()<.9?2:4; }
  function reset(){ g=Array(16).fill(0); score=0; add(); add(); draw(); st.textContent='> clique sur le plateau puis utilise les flèches, ou glisse au doigt.'; }
  function line(idx){ let a=idx.map(i=>g[i]).filter(Boolean), out=[];
    for(let i=0;i<a.length;i++){ if(a[i]===a[i+1]){out.push(a[i]*2);score+=a[i]*2;i++;} else out.push(a[i]); }
    while(out.length<4) out.push(0); let ch=false; idx.forEach((i,j)=>{if(g[i]!==out[j]) ch=true; g[i]=out[j];}); return ch; }
  function move(d){ let ch=false;
    for(let r=0;r<4;r++){ let idx=[0,1,2,3].map(c=> d==='left'||d==='right'? r*4+c : c*4+r); if(d==='right'||d==='down') idx.reverse(); if(line(idx)) ch=true; }
    if(ch){ add(); if(score>best){best=score;try{localStorage.setItem('nh-2048',best)}catch(e){}} draw();
      if(g.includes(2048)) st.textContent='> 2048 atteint. Bravo !';
      else if(!canMove()) st.textContent='> Plus aucun coup possible. Recommence ▸'; } }
  function canMove(){ if(g.includes(0)) return true; for(let i=0;i<16;i++){ if(i%4<3&&g[i]===g[i+1]) return true; if(i<12&&g[i]===g[i+4]) return true;} return false; }
  const keys={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right'};
  boardEl.addEventListener('keydown',e=>{ if(keys[e.key]){e.preventDefault();move(keys[e.key]);} });
  document.querySelectorAll('.pad button').forEach(b=>b.onclick=()=>move(b.dataset.d));
  document.getElementById('restart').onclick=reset;
  let sx,sy; boardEl.addEventListener('pointerdown',e=>{sx=e.clientX;sy=e.clientY;boardEl.focus();});
  boardEl.addEventListener('pointerup',e=>{ if(sx==null) return; const dx=e.clientX-sx, dy=e.clientY-sy; sx=null;
    if(Math.max(Math.abs(dx),Math.abs(dy))<24) return; move(Math.abs(dx)>Math.abs(dy)?(dx>0?'right':'left'):(dy>0?'down':'up')); });
  reset();
})();
