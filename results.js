/* Hiring outcomes transcribed from the ten customer creatives supplied by Frederik. */
const gcResults = [
  {id:'roring',name:'Roring',company:'Roring Garten- und Landschaftsbau GmbH',branch:'Garten- & Landschaftsbau',count:1,role:'Landschaftsgärtner',hires:['1 Landschaftsgärtner'],note:'Ein ausgebildeter Gärtner verstärkt den Betrieb.',photo:[535,300,587,470],logo:[713,30,290,230]},
  {id:'diederich',name:'Ingo Diederich',company:'Baumschule & Gartenbau Ingo Diederich',branch:'Baumschule & Gartenbau',count:3,role:'neue Mitarbeiter',hires:['2 Vorarbeiter','1 Facharbeiter im GaLaBau'],note:'Verstärkung auf zwei Ebenen: zwei Vorarbeiter und ein Facharbeiter im Garten- und Landschaftsbau.',size:[1092,1440],photo:[588,350,504,700],logo:[26,580,218,155]},
  {id:'gruenkonzept',name:'GrünKonzept',company:'GrünKonzept · GaLaBau 360°',branch:'Garten- & Landschaftsbau',count:2,role:'Landschaftsgärtner',hires:['2 Landschaftsgärtner'],note:'Zwei Landschaftsgärtner wurden für den Betrieb eingestellt.',photo:[626,420,496,580],logo:[87,786,313,158]},
  {id:'astwerk',name:'Astwerk',company:'Astwerk Niels Beyer GmbH',branch:'Baumpflege',count:2,role:'Facharbeiter',hires:['2 Facharbeiter'],note:'Zwei Facharbeiter verstärken Astwerk Niels Beyer GmbH.',photo:[650,265,472,730],logo:[65,640,390,126]},
  {id:'bernd-gerlach',name:'Bernd Gerlach',company:'Bernd Gerlach Gartengestaltung',branch:'Garten- & Landschaftsbau',count:1,role:'Facharbeiter im GaLaBau',hires:['1 Facharbeiter im GaLaBau'],note:'Ein Facharbeiter für den Garten- und Landschaftsbau wurde eingestellt.',photo:[730,525,392,425],logo:[65,670,168,155]},
  {id:'blumengrossmarkt-koeln',name:'Blumengroßmarkt Köln',company:'Blumengroßmarkt Köln eG',branch:'Blumen- & Pflanzengroßhandel',count:1,role:'LKW-Fahrer',hires:['1 LKW-Fahrer'],note:'Der Blumengroßmarkt Köln hat einen LKW-Fahrer eingestellt.',photo:[0,755,1122,302],logo:[115,576,207,98]},
  {id:'blumenkamp',name:'Blumenkamp',company:'Gartenservice Blumenkamp',branch:'Garten- & Landschaftsbau',count:1,role:'Landschaftsgärtner',hires:['1 Landschaftsgärtner'],note:'Ein Landschaftsgärtner verstärkt Gartenservice Blumenkamp.',photo:[560,430,562,592],logo:[58,713,331,95]},
  {id:'deine-lieblingsgaertner',name:'Deine Lieblingsgärtner',company:'Deine Lieblingsgärtner J.B. GmbH',branch:'Garten- & Landschaftsbau',count:1,role:'Facharbeiter im GaLaBau',hires:['1 Facharbeiter im GaLaBau'],note:'Ein Facharbeiter im Garten- und Landschaftsbau wurde eingestellt.',photo:[75,660,970,380],logo:[176,466,338,151]},
  {id:'goldblume',name:'Goldblume',company:'Goldblume Garten und Landschaftsbau',branch:'Garten- & Landschaftsbau',count:1,role:'Landschaftsgärtner',hires:['1 Landschaftsgärtner'],note:'Ein Landschaftsgärtner verstärkt das Team von Goldblume.',photo:[610,500,512,490],logo:[100,640,282,183]},
  {id:'prager',name:'Prager',company:'Prager Landschaftsbau GmbH',branch:'Garten- & Landschaftsbau',count:1,role:'Facharbeiter im GaLaBau',hires:['1 Facharbeiter im GaLaBau'],note:'Prager Landschaftsbau GmbH hat einen Facharbeiter im Garten- und Landschaftsbau eingestellt.',photo:[623,485,499,520],logo:[64,622,364,109]}
];

function resultArtwork(item,kind){
  const size=item.size||[1122,1402],crop=item[kind],clip=`result-${item.id}-${kind}-crop`;
  // Display the relevant part of the supplied artwork without modifying the original file.
  return `<svg class="result-${kind}" viewBox="${crop.join(' ')}" preserveAspectRatio="xMidYMid ${kind==='photo'?'slice':'meet'}" ${kind==='logo'?'aria-hidden="true"':`role="img" aria-label="Bildmotiv aus der Erfolgsmeldung für ${item.name}"`}><defs><clipPath id="${clip}"><rect x="${crop[0]}" y="${crop[1]}" width="${crop[2]}" height="${crop[3]}"/></clipPath></defs><image data-result-image="assets/results/${item.id}.png" x="0" y="0" width="${size[0]}" height="${size[1]}" clip-path="url(#${clip})"></image></svg>`;
}
function resultsSection(){
  const total=gcResults.reduce((n,r)=>n+r.count,0);
  return `<section class="section results-section" id="ergebnisse" aria-labelledby="results-title"><div class="container">
    <div class="results-heading"><div><div class="eyebrow">ERGEBNISSE AUS UNSEREM NETZWERK</div><h2 id="results-title">Aus Verbindungen<br><em>wird Verstärkung.</em></h2></div><div class="results-tally"><strong>${total}</strong><span>Einstellungen<br>in diesen <b>${gcResults.length} Kundenbeispielen</b></span></div></div>
    <div class="results-carousel" role="region" aria-roledescription="Karussell" aria-label="Erfolgsmeldungen unserer Kunden">
      <div class="results-toolbar"><label class="result-choice"><span>Kundenfall auswählen</span><select id="result-customer">${gcResults.map((r,i)=>`<option value="${i}">${r.name}</option>`).join('')}</select></label><div class="result-controls"><span class="result-position"><strong id="result-number">01</strong> / ${gcResults.length}</span><button type="button" id="result-prev" aria-label="Vorheriges Ergebnis" aria-controls="results-track">${fi('arrow')}</button><button type="button" id="result-next" aria-label="Nächstes Ergebnis" aria-controls="results-track">${fi('arrow')}</button></div></div>
      <div class="results-track" id="results-track" tabindex="0" aria-label="Kundenfälle durchblättern. Mit den Pfeiltasten oder durch Wischen.">${gcResults.map((r,i)=>`<article class="result-slide" role="group" aria-roledescription="Folie" aria-label="${i+1} von ${gcResults.length}: ${r.name}" ${i?'inert aria-hidden="true"':''}>
        <div class="result-visual">${resultArtwork(r,'photo')}<span class="result-photo-tag">${fi('check')} Erfolgreich eingestellt</span></div>
        <div class="result-copy"><div class="result-company"><span class="result-logo-frame">${resultArtwork(r,'logo')}</span><div><span>${r.branch}</span><h3>${r.name}</h3></div></div>
          <div class="result-outcome"><strong>${r.count}</strong><p>${r.role}<span>eingestellt.</span></p></div>
          <details class="result-details"><summary><span><span class="result-closed-label">Ergebnis im Detail</span><span class="result-open-label">Details einklappen</span></span><span class="result-plus" aria-hidden="true"></span></summary><div class="result-detail-body"><p class="result-full-company">${r.company}</p><ul>${r.hires.map(h=>`<li>${fi('check')} ${h}</li>`).join('')}</ul><p>${r.note}</p><a href="assets/results/${r.id}.png" target="_blank" rel="noopener">Erfolgsmeldung ansehen ${fi('up')}</a></div></details>
        </div></article>`).join('')}</div>
      <p class="sr-only" id="result-announcement" aria-live="polite" aria-atomic="true"></p>
      <div class="results-bottom"><p><span class="results-swipe">Wischen oder mit den Pfeilen weiterblättern.</span><span class="results-desktop-hint">Zehn Betriebe. Unterschiedliche Aufgaben. Neue Kollegen.</span></p><a class="btn" href="#preise">Pakete und Preise ${fi('arrow')}</a></div>
    </div></div></section>`;
}

let cleanupResults=()=>{};
function bindResults(){
  cleanupResults();
  const track=document.getElementById('results-track');
  if(!track)return;
  const cards=[...track.children],select=document.getElementById('result-customer');
  let active=0,frame,resizeFrame,lastWidth=track.clientWidth;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const step=()=>cards[1].offsetLeft-cards[0].offsetLeft;
  const loadImage=i=>cards[i]?.querySelectorAll('image[data-result-image]').forEach(image=>{
    if(!image.hasAttribute('href'))image.setAttribute('href',image.dataset.resultImage);
  });
  const fit=()=>{const height=Math.ceil(cards[active].getBoundingClientRect().height);if(height&&track.style.height!==height+'px')track.style.height=height+'px';};
  const update=()=>{
    frame=undefined;
    const index=Math.max(0,Math.min(cards.length-1,Math.round(track.scrollLeft/step())));
    const changed=index!==active;
    active=index;
    cards.forEach((card,i)=>{card.inert=i!==active;card.setAttribute('aria-hidden',String(i!==active));if(changed&&i!==active)card.querySelector('details').open=false;});
    select.value=String(active);
    document.getElementById('result-number').textContent=String(active+1).padStart(2,'0');
    if(changed){const r=gcResults[active];document.getElementById('result-announcement').textContent=`Ergebnis ${active+1} von ${cards.length}. ${r.name}: ${r.count} ${r.role} eingestellt.`;loadImage(active);loadImage((active+1)%cards.length);}
    fit();
  };
  const go=index=>{
    const next=(index+cards.length)%cards.length;
    loadImage(next);
    // Clear the last customer's details before moving, keeping the compact layout stable.
    cards[active].querySelector('details').open=false;
    const wraps=index<0||index>=cards.length;
    track.scrollTo({left:next*step(),behavior:reduced.matches||wraps||Math.abs(next-active)>1?'instant':'smooth'});
  };
  const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update);};
  const onKey=e=>{if(e.target!==track||!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();go(e.key==='Home'?0:e.key==='End'?cards.length-1:active+(e.key==='ArrowRight'?1:-1));};
  document.getElementById('result-prev').onclick=()=>go(active-1);
  document.getElementById('result-next').onclick=()=>go(active+1);
  select.onchange=()=>go(Number(select.value));
  track.addEventListener('scroll',onScroll,{passive:true});
  track.addEventListener('keydown',onKey);
  const onToggle=()=>fit();
  cards.forEach(card=>card.querySelector('details').addEventListener('toggle',onToggle));
  const resize=new ResizeObserver(()=>{
    if(resizeFrame)cancelAnimationFrame(resizeFrame);
    resizeFrame=requestAnimationFrame(()=>{
      const width=track.clientWidth;
      if(width!==lastWidth){lastWidth=width;track.scrollTo({left:active*step(),behavior:'instant'});}
      fit();
    });
  });
  resize.observe(track);cards.forEach(card=>resize.observe(card));
  const loader=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){loadImage(active);loadImage((active+1)%cards.length);loader.disconnect();}},{rootMargin:'450px'});
  loader.observe(track);
  update();
  cleanupResults=()=>{resize.disconnect();loader.disconnect();cancelAnimationFrame(frame);cancelAnimationFrame(resizeFrame);track.removeEventListener('scroll',onScroll);track.removeEventListener('keydown',onKey);cards.forEach(card=>card.querySelector('details').removeEventListener('toggle',onToggle));};
}
