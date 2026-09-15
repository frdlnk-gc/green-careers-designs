/* Progressive disclosure for small screens; every section stays expanded on desktop. */
const gcMobile = matchMedia('(max-width: 720px)');
const mobileFoldState = new Map();
let mobileJobsExpanded = false;

function mobileFold(container, key, label, kind = '', content = [...container.childNodes]) {
  if (container.querySelector(':scope > .mobile-fold')) return;
  const fold = document.createElement('details');
  fold.className = 'mobile-fold ' + kind;
  fold.dataset.mobileFold = key;
  const summary = document.createElement('summary');
  summary.innerHTML = `<span class="fold-label">${label}</span><span class="fold-sign" aria-hidden="true"></span>`;
  const body = document.createElement('div');
  body.className = 'fold-content';
  content.forEach(node => body.append(node));
  fold.append(summary, body);
  container.append(fold);
  fold.open = !gcMobile.matches || (mobileFoldState.get(key) ?? false);
  fold.addEventListener('toggle', () => {
    if (gcMobile.matches) mobileFoldState.set(key, fold.open);
  });
}

function bindMobilePricing() {
  if (theme !== 'e') return;
  document.querySelectorAll('.pricing-card').forEach(card => {
    const features = card.querySelector('.package-features');
    if (!features || card.querySelector('.package-fold')) return;
    const key = 'package-' + card.dataset.priceCard;
    mobileFold(card, key, '<span class="fold-closed">Alle Leistungen ansehen</span><span class="fold-open">Leistungen einklappen</span>', 'package-fold', [features]);
  });
}

function bindMobileJobs() {
  document.getElementById('mobile-more-jobs')?.remove();
  const list = document.getElementById('job-list');
  if (theme !== 'e' || !list) return;
  const cards = [...list.querySelectorAll('.fusion-job')];
  const isPreview = cards.length > 2 && filter === 'Alle' && !query && !place && !onlySaved;
  list.classList.toggle('mobile-job-preview', isPreview);
  list.classList.toggle('mobile-jobs-expanded', mobileJobsExpanded || showAll);
  if (!isPreview) return;
  const button = document.createElement('button');
  button.id = 'mobile-more-jobs';
  button.className = 'mobile-more-jobs';
  button.setAttribute('aria-controls', 'job-list');
  const update = () => {
    const expanded = mobileJobsExpanded || showAll;
    list.classList.toggle('mobile-jobs-expanded', expanded);
    button.setAttribute('aria-expanded', String(expanded));
    button.innerHTML = `<span><strong>${expanded ? 'Weniger Stellen anzeigen' : `${cards.length - 2} weitere Jobs entdecken`}</strong><small>${expanded ? 'Zur kompakten Übersicht' : `2 von ${cards.length} Beispielstellen · Alle Branchen ansehen`}</small></span><span class="fold-sign" aria-hidden="true"></span>`;
  };
  button.onclick = () => {
    mobileJobsExpanded = !(mobileJobsExpanded || showAll);
    showAll = false;
    update();
    if (mobileJobsExpanded) {
      // Continue at the next job instead of jumping past the newly revealed cards.
      const next = cards[2].querySelector('.job-title');
      next.focus({preventScroll: true});
      cards[2].scrollIntoView({block: 'start', behavior: 'instant'});
    } else {
      button.scrollIntoView({block: 'center', behavior: 'instant'});
    }
  };
  update();
  list.after(button);
}

function bindMobileLayout() {
  if (theme !== 'e') return;
  document.querySelectorAll('.refined-offers .offer').forEach((card, i) => {
    const title = card.querySelector('h3');
    const icon = card.querySelector('.offer-symbol');
    if (!title || card.querySelector('.offer-fold')) return;
    mobileFold(card, 'offer-' + i,
      `<span class="fold-offer-icon" aria-hidden="true">${icon.innerHTML}</span><span><strong>${title.innerHTML}</strong><small><span class="fold-closed">Mehr erfahren</span><span class="fold-open">Weniger anzeigen</span></small></span>`, 'offer-fold');
  });
  bindMobilePricing();
  document.querySelectorAll('.footer-navigation nav').forEach((nav, i) => {
    const heading = nav.querySelector('h3');
    if (heading) mobileFold(nav, 'footer-' + i, heading.textContent, 'footer-fold', [...nav.children].filter(el => el !== heading));
  });
  const professions = document.querySelector('.footer-professions');
  if (professions) mobileFold(professions, 'professions', 'Berufsfelder entdecken', 'footer-fold');
  document.querySelectorAll('.answer-card').forEach((fold, i) => {
    if (gcMobile.matches) fold.open = false;
    // The existing, clearly labelled FAQ already provides native disclosure.
  });
}

gcMobile.addEventListener('change', () => {
  document.querySelectorAll('.mobile-fold').forEach(fold => {
    fold.open = !gcMobile.matches || (mobileFoldState.get(fold.dataset.mobileFold) ?? false);
  });
});
