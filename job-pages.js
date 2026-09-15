// Enhancements only. Job content and page links work without JavaScript.
(()=>{
 const job=gcJobs.find(j=>j.id===Number(document.body.dataset.jobId));
 if(!job)return;
 try{const previous=sessionStorage.getItem('gc-job-list-return');if(previous){const back=new URL(previous);if(back.origin===location.origin&&/\/(?:0[1-5]-[^/]+|index)\.html$/.test(back.pathname)){back.hash='jobs';document.querySelector('[data-listing-back]').href=back.href;}}}catch{}
 let saved=readSavedJobs(), toastTimer;
 const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
 function toast(message){$('.jd-toast').textContent=message;$('.jd-toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('.jd-toast').classList.remove('show'),3500);}
 function sync(){saved=readSavedJobs();$$('[data-save-job]').forEach(b=>{b.setAttribute('aria-pressed',saved.has(job.id));b.setAttribute('aria-label',saved.has(job.id)?'Stelle aus Merkliste entfernen':'Stelle merken');const text=b.querySelector('span');if(text)text.textContent=saved.has(job.id)?'Stelle gemerkt':'Stelle merken';});$$('[data-saved-count]').forEach(el=>el.textContent=saved.size);}
 $$('[data-save-job]').forEach(b=>b.addEventListener('click',()=>{saved=readSavedJobs();saved.has(job.id)?saved.delete(job.id):saved.add(job.id);writeSavedJobs(saved);sync();toast(saved.has(job.id)?'Stelle gemerkt. Du findest sie in deiner Merkliste.':'Stelle aus deiner Merkliste entfernt.');}));
 $$('[data-gallery]').forEach(b=>b.addEventListener('click',()=>{$$('.jd-gallery figure').forEach(el=>el.hidden=el.id!==`gallery-${b.dataset.gallery}`);$$('[data-gallery]').forEach(el=>el.setAttribute('aria-pressed',el===b));}));
 $$('[data-share]').forEach(b=>b.addEventListener('click',async()=>{const url=new URL(location.href);url.hash='';url.search='';try{await navigator.clipboard.writeText(url.href);toast('Link zur Stelle kopiert.');}catch{$('#share-fallback').hidden=false;$('#share-url').value=url.href;$('#share-url').focus();$('#share-url').select();toast('Kopiere den angezeigten Link.');}}));
 const form=$('#job-apply-form');
 form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;form.innerHTML='<div class="jd-form-success" tabindex="-1"><span aria-hidden="true">✓</span><h3>Dein erster Schritt. So einfach kann er sein.</h3><p>Du hast die Beispielbewerbung ausprobiert. Es wurde nichts versendet.</p><a href="05-zusammen-wachsen.html?design=e&ansicht=arbeitnehmer#jobs" class="jd-primary">Weitere Jobs entdecken <span aria-hidden="true">↗</span></a></div>';$('.jd-form-success').focus({preventScroll:true});$('#bewerben').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});$$('.jd-mobile-dock>a').forEach(a=>{a.textContent='Weitere Jobs entdecken ↗';a.href='05-zusammen-wachsen.html?design=e&ansicht=arbeitnehmer#jobs';});});
 $('#job-apply-submit').disabled=false;
 window.addEventListener('pageshow',sync);window.addEventListener('storage',e=>{if(e.key==='gc-design-saved-jobs')sync();});sync();
})();
