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
 // This static reference never transmits or stores application data.
 // Production integration must submit to the existing application backend and
 // show confirmation only after that backend acknowledges the application.
 form.noValidate=true;
 const fields=[
  {el:$('#applicant-first-name'),error:$('#first-name-error'),validate:el=>el.value.trim()?'':'Bitte gib deinen Vornamen ein.'},
  {el:$('#applicant-last-name'),error:$('#last-name-error'),validate:el=>el.value.trim()?'':'Bitte gib deinen Nachnamen ein.'},
  {el:$('#applicant-email'),error:$('#email-error'),validate:el=>el.value.trim()&&!el.validity.typeMismatch?'':'Bitte gib eine gültige E-Mail-Adresse ein.'},
  {el:$('#applicant-phone'),error:$('#phone-error'),validate:el=>{const value=el.value.trim(),digits=value.replace(/\D/g,'');return /^(?:\+|00)?[\d\s()./\-]+$/.test(value)&&digits.length>=7&&digits.length<=15?'':'Bitte gib eine gültige Telefonnummer mit Vorwahl ein.';}},
  {el:$('#applicant-privacy'),error:$('#privacy-error'),validate:el=>el.checked?'':'Bitte bestätige die AGB und Datenschutzbestimmungen.'}
 ];
 let submitted=false;
 function validateField(field){const message=field.validate(field.el);field.error.textContent=message;field.error.hidden=!message;field.el.setAttribute('aria-invalid',String(Boolean(message)));return !message;}
 fields.forEach(field=>{
  field.el.addEventListener('blur',()=>{if(field.el.type!=='checkbox'&&(submitted||field.el.value))validateField(field);});
  field.el.addEventListener(field.el.type==='checkbox'?'change':'input',()=>{if(submitted||field.el.hasAttribute('aria-invalid'))validateField(field);if(submitted&&fields.every(f=>!f.validate(f.el)))$('#application-errors').hidden=true;});
 });
 form.addEventListener('submit',event=>{
  event.preventDefault();submitted=true;
  const invalid=fields.filter(field=>!validateField(field));
  if(invalid.length){$('#application-errors').textContent='Bitte prüfe die markierten Angaben.';$('#application-errors').hidden=false;invalid[0].el.focus();return;}
  form.hidden=true;$('#application-confirmation').hidden=false;$('#application-confirmation').focus({preventScroll:true});
  $('#bewerben').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
 });
 $('#application-restart').addEventListener('click',()=>{form.reset();submitted=false;fields.forEach(f=>{f.el.removeAttribute('aria-invalid');f.error.hidden=true;f.error.textContent='';});$('#application-errors').hidden=true;$('.jd-message').open=false;$('#application-confirmation').hidden=true;form.hidden=false;$('#applicant-first-name').focus();});
 $('#job-apply-submit').disabled=false;
 const dock=$('.jd-mobile-dock');
 if(dock&&'IntersectionObserver' in window){new IntersectionObserver(entries=>dock.classList.toggle('is-at-application',entries[0].isIntersecting),{threshold:.12}).observe($('#bewerben'));}
 window.addEventListener('pageshow',sync);window.addEventListener('storage',e=>{if(e.key==='gc-design-saved-jobs')sync();});sync();
})();
