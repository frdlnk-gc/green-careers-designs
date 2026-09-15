/* Sector names checked against green-careers.de/api/sectors on 2026-09-15.
   Forstbaumschule explicitly added at Frederik's request. Occupations illustrate
   relevant searches; this is not a count or promise of available candidates. */
const communityGroups=[
 {id:'garten',label:'Garten & Landschaft',hint:'GaLaBau, Grünpflege, Planung'},
 {id:'baumschulen',label:'Baumschulen',hint:'Auch Forstbaumschulen'},
 {id:'kultivierung',label:'Kultivierung',hint:'Gärtnerei, Gemüse, Obst & mehr'},
 {id:'handel',label:'Handel & Logistik',hint:'Gartencenter, Floristik, Großhandel'},
 {id:'landforst',label:'Land & Forst',hint:'Landwirtschaft, Forst, Baumpflege'},
 {id:'bau',label:'Bau & Naturstein',hint:'Hoch-, Tief-, Straßen- & Kanalbau'}
];
const communityRoles={
 landscape:['Landschaftsgärtner','Pflanzarbeiten, Wege und Außenanlagen.','landscape'],
 foreman:['Vorarbeiter im GaLaBau','Kolonnen führen und Baustellen organisieren.','foreman'],
 care:['Gärtnerin in der Grünpflege','Pflanzflächen, Rasen und Hecken pflegen.','gardener'],
 site:['Bauleiter','Projekte, Teams und Abläufe auf der Baustelle koordinieren.','advisor'],
 nursery:['Baumschulgärtner','Gehölze vermehren, kultivieren und für den Verkauf vorbereiten.','landscape'],
 master:['Gärtnermeister','Kulturführung und Teamverantwortung verbinden.','foreman'],
 sales:['Verkaufsgärtner','Kunden zu Pflanzen beraten und den Verkauf betreuen.','advisor'],
 trainee:['Auszubildender Baumschulgärtner','Den Beruf von der Vermehrung bis zur Pflanzenpflege erlernen.','trainee'],
 tractor:['Schlepperfahrer','Schlepper und Anbaugeräte bei Feldarbeiten einsetzen.','arborist'],
 ornamental:['Zierpflanzengärtner','Zierpflanzen kultivieren und ihre Entwicklung begleiten.','landscape'],
 perennial:['Staudengärtner','Stauden vermehren, pflegen und für den Versand vorbereiten.','landscape'],
 vegetable:['Gemüsegärtner','Gemüsekulturen vom Anbau bis zur Ernte betreuen.','landscape'],
 fruit:['Obstgärtner','Obstbestände pflegen und die Ernte begleiten.','landscape'],
 grower:['Gärtner in der Kultivierung','Pflanzen vermehren, Kulturen pflegen und Qualität sichern.','gardener'],
 manager:['Betriebsleiter','Mitarbeiter, Arbeitsabläufe und den Betrieb organisieren.','foreman'],
 florist:['Floristin','Blumen gestalten und Kunden zu floristischen Arbeiten beraten.','gardener'],
 retail:['Verkäufer im Pflanzenhandel','Pflanzen und Zubehör verkaufen und die Warenpräsentation betreuen.','landscape'],
 wholesale:['Kaufmann im Großhandel','Kunden betreuen, Angebote erstellen und Waren disponieren.','advisor'],
 warehouse:['Fachkraft für Lagerlogistik','Waren annehmen, kommissionieren und den Versand organisieren.','landscape'],
 driver:['LKW-Fahrer','Pflanzen, Waren und Material sicher transportieren.','arborist'],
 dispatcher:['Disponent','Lieferungen, Fahrzeuge und Touren koordinieren.','foreman'],
 farmer:['Landwirt','Betriebliche Aufgaben in Pflanzenbau und Landwirtschaft übernehmen.','landscape'],
 mechanic:['Landmaschinenmechaniker','Maschinen warten, Fehler finden und Reparaturen durchführen.','foreman'],
 forest:['Forstwirt','Waldflächen pflegen und bei der Holzernte arbeiten.','arborist'],
 forestry:['Forstmaschinenführer','Maschinen für Holzernte und Rückearbeiten bedienen.','landscape'],
 ranger:['Forstwirtschaftsmeister','Forstarbeiten planen und die Ausführung im Team anleiten.','foreman'],
 tree:['Baumpfleger','Baumpflege und Fällarbeiten mit der passenden Qualifikation ausführen.','arborist'],
 climber:['Baumpfleger mit Seilklettertechnik','Pflegearbeiten mit Seilklettertechnik ausführen.','landscape'],
 controller:['Baumkontrolleur','Bäume kontrollieren und ihren Zustand dokumentieren.','advisor'],
 treeforeman:['Vorarbeiter Baumpflege','Das Team und die Arbeitsabläufe beim Baumpflegeeinsatz koordinieren.','foreman'],
 cemetery:['Friedhofsgärtner','Grabanlagen gestalten, bepflanzen und pflegen.','landscape'],
 greenkeeper:['Greenkeeper','Rasen- und Spielflächen fachgerecht pflegen.','landscape'],
 headgreen:['Head-Greenkeeper','Pflegeeinsätze und das Greenkeeping-Team organisieren.','foreman'],
 architect:['Landschaftsarchitekt','Freiräume entwerfen und ihre Umsetzung planen.','advisor'],
 planner:['Technischer Zeichner','Pläne und technische Zeichnungen für Projekte erstellen.','gardener'],
 project:['Projektleiter','Planung, Termine und Projektbeteiligte koordinieren.','foreman'],
 road:['Straßenbauer','Verkehrsflächen und ihre Unterbauten herstellen.','landscape'],
 civil:['Facharbeiter Tiefbau','Erd- und Tiefbauarbeiten auf der Baustelle ausführen.','landscape'],
 sewer:['Kanalbauer','Entwässerungssysteme herstellen und instand halten.','landscape'],
 mason:['Maurer','Mauerwerk und Bauteile im Hochbau herstellen.','landscape'],
 stone:['Steinmetz','Naturstein bearbeiten und fachgerecht versetzen.','landscape'],
 machine:['Baugeräteführer','Baumaschinen für Erdarbeiten und Materialbewegung bedienen.','arborist'],
 constructionforeman:['Vorarbeiter','Die Kolonne anleiten und die Ausführung organisieren.','foreman']
};
const communitySectors=[
 ['galabau','garten','GaLaBau-Betrieb','Garten- und Landschaftsbau',['landscape','foreman','care','site']],
 ['gruenpflege','garten','Grünpflegebetrieb','Garten- und Landschaftspflege',['care','foreman','landscape','site']],
 ['planung','garten','Landschaftsarchitekturbüro','Landschaftsarchitektur',['architect','planner','project','site']],
 ['friedhof','garten','Friedhofsgärtnerei','Friedhofsgärtnerei',['cemetery','master','care','manager']],
 ['golf','garten','Golfplatz','Golfplatz',['greenkeeper','headgreen','care','mechanic']],
 ['baumschule','baumschulen','Baumschule','Baumschule',['nursery','master','sales','trainee']],
 ['forstbaumschule','baumschulen','Forstbaumschule','Forstbaumschule',['nursery','master','tractor','trainee']],
 ['gaertnerei','kultivierung','Gärtnerei','Gärtnerei',['grower','master','ornamental','manager']],
 ['zierpflanzen','kultivierung','Zierpflanzenbaubetrieb','Zierpflanzenbau',['ornamental','master','grower','manager']],
 ['stauden','kultivierung','Staudengärtnerei','Staudengärtnerei',['perennial','master','grower','manager']],
 ['gemuese','kultivierung','Gemüsebaubetrieb','Gemüsebau',['vegetable','master','tractor','manager']],
 ['obst','kultivierung','Obstbaubetrieb','Obstbau',['fruit','master','tractor','manager']],
 ['gartencenter','handel','Gartencenter','Gartencenter',['sales','retail','florist','manager']],
 ['floristik','handel','Floristikbetrieb','Floristik',['florist','retail','wholesale','manager']],
 ['pflanzengrosshandel','handel','Blumen- & Pflanzengroßhandel','Blumen- & Pflanzengroßhandel',['sales','wholesale','warehouse','driver']],
 ['grosshandel','handel','Großhandelsbetrieb','Großhandel',['wholesale','warehouse','dispatcher','driver']],
 ['logistik','handel','Logistik- & Transportbetrieb','Logistik & Transport',['driver','dispatcher','warehouse','mechanic']],
 ['landwirtschaft','landforst','Landwirtschaftlicher Betrieb','Landwirtschaft',['farmer','tractor','mechanic','manager']],
 ['forst','landforst','Forstbetrieb','Forstbetrieb',['forest','forestry','ranger','mechanic']],
 ['baumpflege','landforst','Baumpflegebetrieb','Baumpflege',['tree','climber','controller','treeforeman']],
 ['strassenbau','bau','Straßenbaubetrieb','Straßenbau',['road','constructionforeman','machine','site']],
 ['tiefbau','bau','Tiefbaubetrieb','Tiefbau',['civil','constructionforeman','machine','site']],
 ['kanalbau','bau','Kanalbaubetrieb','Kanalbau',['sewer','constructionforeman','machine','site']],
 ['hochbau','bau','Hochbaubetrieb','Hochbau',['mason','constructionforeman','machine','site']],
 ['naturstein','bau','Natursteinbetrieb','Natursteinverarbeitung',['stone','constructionforeman','machine','site']]
].map(([id,group,business,label,roles])=>({id,group,business,label,roles}));
const communityPortraits={
 trainee:{image:'results/roring.png',crop:'14% 66%',zoom:'500%'},
 landscape:{image:'network-landscape-v20.jpg',crop:'50% 35%',zoom:'145%'},
 foreman:{image:'team-miteinander-v2.jpg',crop:'39% 26%',zoom:'500%'},
 gardener:{image:'team-miteinander-v2.jpg',crop:'63% -5%',zoom:'500%'},
 arborist:{image:'team-miteinander-v2.jpg',crop:'88% 29%',zoom:'500%'},
 advisor:{image:'network-sales-gardener-v20.jpg',crop:'50% 32%',zoom:'145%'}
};
let communitySectorId='galabau';
let communityMembers=[],communityMatches=[],communityLinks=[];
const communityHub=5;
function setCommunitySector(id){
 const sector=communitySectors.find(s=>s.id===id)||communitySectors[0];communitySectorId=sector.id;
 const points=[[16,35],[84,35],[18,80],[82,80]],usedPortraits=new Set();
 communityMembers=sector.roles.map((key,i)=>{const [label,text,preferredPortrait]=communityRoles[key];const portrait=usedPortraits.has(preferredPortrait)?['advisor','arborist','landscape','foreman','gardener'].find(p=>!usedPortraits.has(p)):preferredPortrait;usedPortraits.add(portrait);return {id:key,kind:'person',x:points[i][0],y:points[i][1],label,...communityPortraits[portrait],title:label,text}});
 communityMembers.push({id:'business',kind:'business',x:50,y:11,label:sector.business,sub:'Ihr Betrieb',title:'Diese Berufe passen zu Ihrem Betrieb.',text:`${sector.roles.map(k=>communityRoles[k][0]).join(', ')}: Beispiele für Ihre Personalsuche im Bereich ${sector.label}.`});
 communityMembers.push({id:'greencareers',kind:'hub',x:50,y:51,label:'Green Careers',title:'Ihr Betrieb. Die passenden Berufe.',text:`Green Careers macht Ihre Stelle im Bereich ${sector.label} sichtbar und bringt Sie mit Interessenten in Kontakt.`});
 communityMatches=sector.roles.map((_,i)=>[i,4]);communityLinks=communityMembers.slice(0,-1).map((_,i)=>[i,communityHub]);
 return sector;
}
function communitySvg(){
 const hub=communityMembers[communityHub];
 return `<svg class="community-lines" viewBox="0 0 1000 800" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="connection-gradient"><stop stop-color="#c6f17b"/><stop offset="1" stop-color="#e1f7bd"/></linearGradient></defs>${communityLinks.map(([a],i)=>{const p=communityMembers[a],x=p.x*10,y=p.y*8,x2=hub.x*10,y2=hub.y*8,bend=(i%2?1:-1)*24;return `<g data-connection="${a}"><path class="community-thread" d="M ${x} ${y} Q ${(x+x2)/2+bend} ${(y+y2)/2-bend} ${x2} ${y2}"/><path class="community-current" pathLength="100" d="M ${x} ${y} Q ${(x+x2)/2+bend} ${(y+y2)/2-bend} ${x2} ${y2}" style="--flow-delay:-${i*.63}s;--flow-direction:${p.kind==='business'?'reverse':'normal'}"/></g>`}).join('')}${[[8,57],[36,22],[94,61],[37,76],[66,71]].map(([x,y],i)=>`<circle class="community-spark" cx="${x*10}" cy="${y*8}" r="${i%3?3:5}" style="--flow-delay:-${i*.4}s"/>`).join('')}</svg>`;
}
function communityNode(m,i){
 const inner=m.kind==='person'?`<span class="member-portrait" role="img" aria-label="Illustratives Porträt: ${m.label}" style="background-image:url('assets/${m.image}');background-position:${m.crop};background-size:${m.zoom}"></span><span class="member-label">${m.label}</span>`:m.kind==='hub'?`<span class="hub-logo"><img src="assets/logo-dark-sm.png" alt="Green Careers" width="99" height="58"></span><span class="hub-caption">Bringt Sie zusammen.</span>`:`<span class="business-symbol">${fi('leaf')}</span><span class="business-identity"><small>${m.sub}</small><strong>${m.label}</strong></span>`;
 return `<button class="community-member ${m.kind}" data-member="${i}" style="--x:${m.x}%;--y:${m.y}%;--bob-delay:-${i*.8}s" aria-pressed="${i===communityHub}" aria-label="${m.label}: Verbindungen entdecken">${inner}<span class="member-ring" aria-hidden="true"></span></button>`;
}
function communitySectorButtons(group){return communitySectors.filter(s=>s.group===group).map(s=>`<button type="button" class="sector-chip" data-network-sector="${s.id}" aria-pressed="${s.id===communitySectorId}" aria-controls="community-map">${s.label}</button>`).join('')}
function communityNetwork(){
 const sector=setCommunitySector(communitySectorId);
 return `<section class="real-network community-section" id="so-gehts" aria-labelledby="community-title"><div class="container community-layout"><div class="community-copy"><div class="eyebrow">GREEN CAREERS VERBINDET</div><h2 id="community-title">Das Netzwerk<br>für <em>Ihren Betrieb.</em></h2><p>Von der Forstbaumschule bis zum Gemüsebau, vom GaLaBau bis zur Landwirtschaft: Finden Sie hier die Berufe für Ihren Betrieb.</p><div class="sector-picker"><p class="sector-picker-title" id="sector-picker-label">In welchem Bereich arbeiten Sie?</p><button type="button" class="sector-picker-toggle" aria-expanded="true" aria-controls="network-groups"><span>Branche wählen</span><span class="sector-toggle-action">Einklappen −</span></button><div class="sector-groups" id="network-groups" role="group" aria-labelledby="sector-picker-label">${communityGroups.map(g=>`<button type="button" class="sector-group" data-network-group="${g.id}" aria-pressed="${g.id===sector.group}" aria-controls="sector-options community-map"><strong>${g.label}</strong><small>${g.hint}</small><span aria-hidden="true">↗</span></button>`).join('')}</div></div><button class="btn" id="network-start" data-price-entry="once">Pakete und Preise ${fi('arrow')}</button></div><div class="community-experience"><div class="sector-options" id="sector-options" role="group" aria-label="Betriebsart auswählen">${communitySectorButtons(sector.group)}</div><p class="network-selection" id="network-selection" aria-live="polite">Ihre Branche: ${sector.label}</p><div class="community-map" id="community-map" aria-label="Green Careers verbindet Ihren Betrieb mit passenden Berufen">${communitySvg()}${communityMembers.map(communityNode).join('')}</div><div class="community-detail" id="community-detail" aria-live="off"><div class="community-detail-top"><span class="connection-avatar-stack" id="connection-avatars"></span><span id="connection-context"></span><span class="connection-mark">${fi('people')}</span></div><h3 id="connection-title"></h3><p id="connection-text"></p></div><div class="community-bottom"><span>Beispielhafte Berufe · Generierte Porträts<br>Beruf antippen und mehr erfahren.</span><button class="motion-toggle" data-motion aria-pressed="false">Ⅱ Animationen pausieren</button></div></div></div></section>`;
}
let communityCleanup=null;
function bindCommunity(){
 if(communityCleanup){communityCleanup();communityCleanup=null}
 const map=document.querySelector('.community-map');if(!map)return;
 const section=map.closest('.community-section');
 let selected=communityHub,visible=false,interacting=false,lastInteraction=0,step=0;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 function selectMember(index,manual=false){
  selected=index;const member=communityMembers[index],neighbors=new Set([index,communityHub]);
  if(index===communityHub)communityMembers.forEach((_,i)=>neighbors.add(i));
  else communityMatches.forEach(([a,b])=>{if(a===index)neighbors.add(b);if(b===index)neighbors.add(a)});
  map.querySelectorAll('[data-member]').forEach(b=>{const n=Number(b.dataset.member);b.setAttribute('aria-pressed',String(n===index));b.classList.toggle('connected',neighbors.has(n));b.classList.toggle('quiet',!neighbors.has(n))});
  map.querySelectorAll('[data-connection]').forEach(g=>g.classList.toggle('connected',neighbors.has(Number(g.dataset.connection))));
  document.querySelector('#community-detail').setAttribute('aria-live',manual?'polite':'off');
  document.querySelector('#connection-context').textContent=index===communityHub?'Green Careers · '+communityMembers[4].label:member.kind==='business'?'Beispiele für Ihre Personalsuche':member.label+' · '+communityMembers[4].label;
  document.querySelector('#connection-title').textContent=member.title;
  document.querySelector('#connection-text').textContent=member.text;
  document.querySelector('#connection-avatars').innerHTML=[...neighbors].filter(n=>n!==communityHub).slice(0,4).map(n=>{const m=communityMembers[n];return m.kind==='person'?`<span style="background-image:url('assets/${m.image}');background-position:${m.crop};background-size:${m.zoom}"></span>`:`<span class="connection-business">${fi('leaf')}</span>`}).join('');
 }
 function changeSector(id,groupChanged=false){
  const sector=setCommunitySector(id);lastInteraction=Date.now();step=0;
  section.querySelectorAll('[data-network-group]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.networkGroup===sector.group)));
  if(groupChanged)document.querySelector('#sector-options').innerHTML=communitySectorButtons(sector.group);
  else section.querySelectorAll('[data-network-sector]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.networkSector===sector.id)));
  document.querySelector('#network-selection').textContent='Ihre Branche: '+sector.label;
  map.innerHTML=communitySvg()+communityMembers.map(communityNode).join('');
  selectMember(communityHub,true);
  if(matchMedia('(max-width:720px)').matches){setPicker(false);if(groupChanged)section.querySelector('.sector-picker-toggle').focus({preventScroll:true})}
 }
 function setPicker(open){const picker=section.querySelector('.sector-picker'),toggle=picker.querySelector('.sector-picker-toggle');picker.classList.toggle('is-collapsed',!open);toggle.setAttribute('aria-expanded',String(open));toggle.firstElementChild.textContent=open?'Branche wählen':communityGroups.find(g=>g.id===communitySectors.find(s=>s.id===communitySectorId).group).label;toggle.lastElementChild.textContent=open?'Einklappen −':'Branche wechseln +'}
 const onClick=e=>{
  const toggle=e.target.closest('.sector-picker-toggle');if(toggle){setPicker(toggle.getAttribute('aria-expanded')!=='true');return}
  const group=e.target.closest('[data-network-group]'),sector=e.target.closest('[data-network-sector]'),member=e.target.closest('[data-member]');
  if(group){if(group.getAttribute('aria-pressed')==='true')return;changeSector(communitySectors.find(s=>s.group===group.dataset.networkGroup).id,true)}
  else if(sector)changeSector(sector.dataset.networkSector);
  else if(member){lastInteraction=Date.now();selectMember(Number(member.dataset.member),true)}
 };
 section.addEventListener('click',onClick);
 const enter=()=>interacting=true,leave=()=>interacting=false;
 map.addEventListener('pointerenter',enter);map.addEventListener('pointerleave',leave);
 const focus=()=>{lastInteraction=Date.now()};section.addEventListener('focusin',focus);
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;map.classList.toggle('community-asleep',!visible)},{threshold:.15});observer.observe(map);
 const sequence=[communityHub,4,0,1,2,3];
 const timer=setInterval(()=>{if(!visible||interacting||document.hidden||motionPaused||reduced.matches||Date.now()-lastInteraction<14000||section.contains(document.activeElement))return;step=(step+1)%sequence.length;selectMember(sequence[step])},6500);
 selectMember(selected);
 communityCleanup=()=>{clearInterval(timer);observer.disconnect();section.removeEventListener('click',onClick);map.removeEventListener('pointerenter',enter);map.removeEventListener('pointerleave',leave);section.removeEventListener('focusin',focus)};
}

function employerFilm(){return `<div class="employer-film" id="film"><div class="film-player"><video id="gc-employer-film" controls playsinline preload="none" poster="https://www.green-careers.de/images/erklaervideo-thumbnail.png" aria-label="Green Careers – das Karrierenetzwerk für Arbeitgeber"><source src="https://www.green-careers.de/videos/erklaervideo.mp4" type="video/mp4">Ihr Browser kann das Video nicht abspielen. <a href="https://www.green-careers.de/videos/erklaervideo.mp4">Video öffnen</a></video><button class="film-play" id="film-play" aria-label="Green-Careers-Video abspielen"><span>▶</span><strong>Green Careers kennenlernen</strong></button></div><div class="film-copy"><span class="eyebrow">GREEN CAREERS IM FILM</span><h3>So funktioniert<br><em>Green Careers.</em></h3><p>Sehen Sie, wie Green Careers Betriebe und Bewerber aus der grünen Branche zusammenbringt.</p><button class="film-text-play" id="film-text-play">Film ansehen · 2 Min. ${fi('arrow')}</button><span class="film-signature">MITARBEITERSUCHE FÜR GRÜNE BETRIEBE</span></div></div>`}
function bindEmployerFilm(){const v=document.querySelector('#gc-employer-film');if(!v)return;const play=()=>{v.play().catch(()=>{document.querySelector('#film-play').hidden=false})};document.querySelector('#film-play').onclick=play;document.querySelector('#film-text-play').onclick=()=>{v.scrollIntoView({behavior:'smooth',block:'center'});play()};v.addEventListener('play',()=>document.querySelector('#film-play').hidden=true);v.addEventListener('ended',()=>document.querySelector('#film-play').hidden=false)}
