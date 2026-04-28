// ══════════════════════════════════════════════════════════════════════
// V2 LANDING  —  script chunk #4/6
// Extracted verbatim from aidi_merged.html — do not modify structurally.
// Each chunk was its own <script> tag in the source and must remain so
// (otherwise same-named top-level declarations across chunks collide).
// ══════════════════════════════════════════════════════════════════════
// ─── NAV scroll behavior ───
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
});

// ─── Mobile menu ───
function toggleMobMenu() {
  const menu = document.getElementById('mobMenu');
  const backdrop = document.getElementById('mobBackdrop');
  const hamburger = document.getElementById('navHamburger');
  const isOpen = menu.classList.contains('open');
  if (isOpen) { closeMobMenu(); } else {
    menu.classList.add('open');
    backdrop.classList.add('open');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}
function closeMobMenu() {
  document.getElementById('mobMenu').classList.remove('open');
  document.getElementById('mobBackdrop').classList.remove('open');
  document.getElementById('navHamburger').classList.remove('active');
  document.body.style.overflow = '';
}

// ─── Page navigation ───
// ─── Pages with dark hero backgrounds (logo should be white at top) ───
const DARK_HERO_PAGES = [
  'prod-stocks','prod-crypto','prod-gold','prod-ai','prod-treasury',
  'prod-realestate','prod-private','prod-entity','prod-portfolio',
  'cust-professionals','cust-families','cust-founders','cust-diaspora',
  'about','security','regulatory','privacy','terms','pricing','aml','careers','careers','blog'
];

function setNavDark(isDark) {
  const nav = document.getElementById('nav');
  if (isDark) nav.classList.add('on-dark');
  else nav.classList.remove('on-dark');
}

function navigate(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + id);
  if (pg) {
    pg.classList.add('active');
    window.scrollTo({ top: 0 });
    setTimeout(() => setupReveals(), 60);
  }
  setNavDark(DARK_HERO_PAGES.includes(id));
}


function toggleSfaq(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.sfaq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}


function openPortfolioModal(idx) {
  document.querySelectorAll('.pf-modal-item').forEach(el => el.classList.remove('active'));
  const item = document.getElementById('pfm-' + idx);
  if (item) item.classList.add('active');
  document.getElementById('pfModal').classList.add('open');
  document.getElementById('pfBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  // Scroll modal to top
  const scroll = document.querySelector('.pfm-scroll');
  if (scroll) scroll.scrollTop = 0;
}
function closePortfolioModal() {
  document.getElementById('pfModal').classList.remove('open');
  document.getElementById('pfBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function openTeamModal(id) {
  document.querySelectorAll('.tm-modal-item').forEach(el => el.classList.remove('active'));
  const item = document.getElementById(id);
  if (item) item.classList.add('active');
  document.getElementById('tmModal').classList.add('open');
  document.getElementById('tmBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  const scroll = document.querySelector('.tmm-scroll');
  if (scroll) scroll.scrollTop = 0;
}
function closeTeamModal() {
  document.getElementById('tmModal').classList.remove('open');
  document.getElementById('tmBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeTeamModal(); closePortfolioModal(); closePropModal(); closeBlogModal(); }
});



function openPropModal(id) {
  document.querySelectorAll('.prop-modal-item').forEach(el => el.classList.remove('active'));
  const item = document.getElementById('pm-' + id);
  if (item) item.classList.add('active');
  document.getElementById('propModal').classList.add('open');
  document.getElementById('propBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  const scroll = document.querySelector('.prop-modal-scroll');
  if (scroll) scroll.scrollTop = 0;
}
function closePropModal() {
  document.getElementById('propModal').classList.remove('open');
  document.getElementById('propBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function openBlogModal(idx) {
  document.querySelectorAll('.blog-modal-item').forEach(el => el.classList.remove('active'));
  const item = document.getElementById('blog-' + idx);
  if (item) item.classList.add('active');
  document.getElementById('blogModal').classList.add('open');
  document.getElementById('blogBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  const scroll = document.querySelector('.blogm-scroll');
  if (scroll) scroll.scrollTop = 0;
}
function closeBlogModal() {
  document.getElementById('blogModal').classList.remove('open');
  document.getElementById('blogBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── FAQ toggle ───
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ─── Scroll reveals ───
function setupReveals() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  document.querySelectorAll('.page.active .reveal').forEach(el => {
    el.classList.remove('in');
    io.observe(el);
  });
}

// Initial reveals on load
document.addEventListener('DOMContentLoaded', () => {
  setupReveals();
  // Trigger hero reveals immediately
  setTimeout(() => {
    document.querySelectorAll('#page-home .hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), i * 120);
    });
  }, 150);
  calcInvestment();
  calcTax();
});

// ─── Investment calculator ───
let calcFreq = 'monthly';
let calcAssetRate = 0.051;

function setFreq(f, btn) {
  calcFreq = f;
  document.querySelectorAll('#freqSeg .calc-seg-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  calcInvestment();
}

function setAsset(a, el) {
  document.querySelectorAll('.calc-asset-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  calcAssetRate = parseFloat(el.dataset.rate);
  calcInvestment();
}

function toggleCurrency(el) {
  const currencies = ['USD', 'EUR', 'GBP', 'NGN'];
  const cur = el.textContent.replace(' ▾', '');
  const next = currencies[(currencies.indexOf(cur) + 1) % currencies.length];
  el.textContent = next + ' ▾';
}

function calcInvestment() {
  const amount = parseFloat(document.getElementById('calcAmount').value) || 0;
  const years = parseInt(document.getElementById('calcYears').value) || 5;
  document.getElementById('yearsLabel').textContent = years + (years === 1 ? ' year' : ' years');

  const r = calcAssetRate;
  const bankRate = 0.005;
  let total = 0, bankTotal = 0, principal = 0;

  if (calcFreq === 'one-time') {
    total = amount * Math.pow(1 + r, years);
    bankTotal = amount * Math.pow(1 + bankRate, years);
    principal = amount;
  } else if (calcFreq === 'monthly') {
    const mR = r / 12;
    const n = years * 12;
    total = amount * ((Math.pow(1 + mR, n) - 1) / mR) * (1 + mR);
    const bmR = bankRate / 12;
    bankTotal = amount * ((Math.pow(1 + bmR, n) - 1) / bmR) * (1 + bmR);
    principal = amount * n;
  } else {
    const n = years;
    total = amount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const bR = bankRate;
    bankTotal = amount * ((Math.pow(1 + bR, n) - 1) / bR) * (1 + bR);
    principal = amount * n;
  }

  const gain = total - principal;
  const fmt = v => '$' + Math.round(v).toLocaleString();

  const rv = document.getElementById('calcResultValue');
  rv.textContent = fmt(total);
  rv.classList.remove('updated');
  void rv.offsetWidth;
  rv.classList.add('updated');

  document.getElementById('calcResultGainText').textContent = '+' + fmt(gain) + ' earned on Aidi';
  document.getElementById('calcBankValue').textContent = fmt(bankTotal);
  document.getElementById('calcPrincipal').textContent = fmt(principal);
}

function scrollToCalc() {
  document.getElementById('calcSection')?.scrollIntoView({ behavior: 'smooth' });
}

// ─── Tax calculator ───
function calcTax() {
  const income = parseFloat(document.getElementById('ti')?.value) || 0;
  const gains = parseFloat(document.getElementById('tg')?.value) || 0;
  const holding = document.getElementById('th')?.value;
  const stateRate = parseFloat(document.getElementById('ts')?.value) || 0;

  let fedRate;
  if (holding === 'short') {
    if (income < 44725) fedRate = 0.12;
    else if (income < 95375) fedRate = 0.22;
    else if (income < 201050) fedRate = 0.24;
    else fedRate = 0.32;
  } else {
    if (income < 44625) fedRate = 0;
    else if (income < 492300) fedRate = 0.15;
    else fedRate = 0.20;
  }

  const fed = gains * fedRate;
  const state = gains * stateRate;
  const net = gains - fed - state;
  const fmt = v => '$' + Math.round(v).toLocaleString();

  if (document.getElementById('trFed')) {
    document.getElementById('trFed').textContent = fmt(fed);
    document.getElementById('trState').textContent = fmt(state);
    document.getElementById('trNet').textontent = fmt(net);
  }
}
