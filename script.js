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
  {co:"Danone · Finance AI",role:"Finance AI & Automation (CDD) · suite à mon alternance",when:"2025 — 2026 · 9 mois",where:"Paris, France",
   items:["Portefeuille de cas d'usage IA : identification, qualification et priorisation des opportunités avec les équipes Finance et la communauté Finance AI Champions, selon trois critères : valeur métier, faisabilité technique et passage à l'échelle.","Conception et test de solutions : Microsoft Copilot, agents IA, Python, workflows Power Automate et analytics avancés, de la preuve de concept à la validation, au sein des squads avec l'IT Data & Analytics ; traduction des besoins Finance en spécifications fonctionnelles et techniques.","Mesure de l'impact : définition et suivi des KPI d'adoption et de productivité (taux d'usage de Copilot, temps gagné, utilisateurs actifs) ; reporting régulier à la Direction Digital & AI Acceleration.","Conduite du changement : actions d'adoption auprès des équipes Finance (AI Day, hackathon, formations).","Veille technologique : suivi des nouveautés Copilot et IA générative et diffusion auprès des équipes Finance pour faire émerger de nouveaux cas d'usage."],
   tags:["Copilot","Agents IA","Python","Power Automate","KPI d'adoption"]},
  {co:"Danone · Reporting Factory",role:"Digital Finance Analyst (alternance) · Direction Finance Groupe",when:"2024 — 2025 · 12 mois",where:"Paris, France",
   items:["Dashboards financiers Power BI à l'échelle du Groupe : conception avec les Business Owners Finance et l'IT (KPI, états financiers) de tableaux de bord utilisés par les équipes Finance de Danone dans le monde entier, chaque pays accédant à ses propres chiffres selon ses droits d'accès ; analyse des principaux indicateurs de performance.","Chaîne de reporting de bout en bout : analyse fonctionnelle et technique ERP → Data Lake → ETL → Data Mart → Power BI ; suivi des rafraîchissements et des anomalies de données jusqu'à leur correction, pour garantir la fiabilité des chiffres publiés.","Delivery Agile : sprints sous Asana, tests fonctionnels (UAT), suivi des corrections avec les équipes techniques et mise en production ; rédaction en anglais des Weekly Releases.","Support et gouvernance : support utilisateur global sur les outils de reporting ; respect des règles de sécurité et de gouvernance sur des données financières sensibles.","Animation et formation : conception et déploiement d'un SharePoint Finance (documentation, formations, communication projet) ; amélioration du parcours e-learning Finance Data & Reporting ; point de contact d'une communauté Finance internationale."],
   tags:["Power BI","ETL / Data Mart","Agile","UAT","Gouvernance"]},
  {co:"Wafa Gestion",role:"Analyste Quantitatif · Gestion d'actifs (stage)",when:"2024 · 6 mois",where:"Casablanca, Maroc",
   items:["Allocation et machine learning : modèle Black-Litterman d'allocation tactique d'ETF, alimenté par 8 modèles de classification supervisée (validation croisée) pour quantifier les vues des analystes et prévoir les rendements.","Pipeline de données Python : collecte automatisée de 10 ans de données de marché, contrôle qualité, traitement des valeurs manquantes et création d'une centaine d'indicateurs.","Risque et performance : modèles de volatilité (ARCH), VaR / CVaR ; backtests contre benchmark (Sharpe, perte maximale)."],
   tags:["Python","Machine Learning","Black-Litterman","VaR / CVaR"]},
  {co:"Direction Générale des Impôts",role:"Data Scientist · Détection de la fraude à la TVA (stage)",when:"2023 · 4 mois",where:"Agadir, Maroc",
   items:["Préparation de la donnée : analyse statistique et prétraitement (nettoyage, encodage, rééquilibrage des classes) de grands volumes de déclarations fiscales.","Modélisation : développement et évaluation de modèles de machine learning en Python (Random Forest, XGBoost) pour scorer les dossiers à risque.","Outil pour le terrain : outil Excel/VBA permettant aux contrôleurs fiscaux de prioriser leurs dossiers."],
   tags:["Python","Random Forest","XGBoost","Excel / VBA"]}
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
  {cat:"BI & reporting",title:"Dashboards financiers Power BI à l'échelle du Groupe",short:"Des tableaux de bord utilisés par les équipes Finance de Danone dans le monde entier.",
   long:"Conception avec les Business Owners Finance et l'IT (KPI, états financiers), chaque pays accédant à ses propres chiffres selon ses droits d'accès. Chaîne de reporting de bout en bout ERP → Data Lake → ETL → Data Mart → Power BI, avec suivi des rafraîchissements et des anomalies jusqu'à leur correction.",tags:["Power BI","ETL","Data Mart","KPI"],ctx:"Danone · 2024–2025"},
  {cat:"IA & automatisation",title:"Portefeuille de cas d'usage IA pour la Finance",short:"Copilot, agents IA, Python et Power Automate, de la preuve de concept à la validation.",
   long:"Identification et priorisation des opportunités selon la valeur métier, la faisabilité technique et le passage à l'échelle ; conception et test des solutions avec l'IT Data & Analytics ; suivi des KPI d'adoption et de productivité (taux d'usage de Copilot, temps gagné, utilisateurs actifs).",tags:["Copilot","Agents IA","Power Automate","KPI d'adoption"],ctx:"Danone · 2025–2026"},
  {cat:"Finance quantitative",title:"Allocation d'ETF avec Black-Litterman et Machine Learning",short:"Un modèle d'allocation tactique alimenté par 8 modèles de classification supervisée.",
   long:"Les vues des analystes sont quantifiées par des modèles de classification (validation croisée) pour prévoir les rendements. Pipeline Python sur 10 ans de données de marché, une centaine d'indicateurs, modèles ARCH, VaR / CVaR et backtests contre benchmark (Sharpe, perte maximale).",tags:["Python","Machine Learning","Black-Litterman","Backtest"],ctx:"Wafa Gestion · 2024"},
  {cat:"Data science",title:"Détection de la fraude à la TVA",short:"Scoring des dossiers à risque par machine learning sur de grands volumes de déclarations fiscales.",
   long:"Analyse statistique et prétraitement (nettoyage, encodage, rééquilibrage des classes), modèles Random Forest et XGBoost en Python, et outil Excel/VBA permettant aux contrôleurs fiscaux de prioriser leurs dossiers.",tags:["Python","Random Forest","XGBoost","VBA"],ctx:"DGI · 2023"}
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
