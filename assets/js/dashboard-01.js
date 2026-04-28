// ══════════════════════════════════════════════════════════════════════
// CLIENT DASHBOARD  —  script chunk #1/1
// Extracted verbatim from aidi_merged.html — do not modify structurally.
// Each chunk was its own <script> tag in the source and must remain so
// (otherwise same-named top-level declarations across chunks collide).
// ══════════════════════════════════════════════════════════════════════
// [merged build] dashboard auto-show-signin removed — handled by unified router

// All page IDs in the app
var ALL_PAGES = [
  'page-signin','page-signup',
  'page-onboard-1','page-onboard-2','page-onboard-3','page-onboard-4',
  'page-onboard-5','page-onboard-6','page-onboard-7',
  'page-dashboard'
];

function showPage(id) {
  ALL_PAGES.forEach(function(pid) {
    var p = document.getElementById(pid);
    if (!p) return;
    p.style.display = 'none';
    p.classList.remove('active');
  });
  var el = document.getElementById(id);
  if (!el) return;

  // Pick the right display value based on page type
  if (el.classList.contains('auth-page')) {
    el.style.display = 'flex';
  } else if (el.classList.contains('onboard-page')) {
    el.style.display = 'flex';
  } else if (id === 'page-dashboard') {
    el.style.display = 'block';
  } else {
    el.style.display = 'block';
  }

  el.classList.add('active');
  try { window.scrollTo(0, 0); } catch(e) {}
  try { document.documentElement.scrollTop = 0; } catch(e) {}
  try { document.body.scrollTop = 0; } catch(e) {}
}

// ── Dashboard Navigation ────────────────────
var DB_SECTIONS = ['dbsec-home','dbsec-portfolio','dbsec-opps','dbsec-ai','dbsec-entities','dbsec-vault','dbsec-tax','dbsec-settings'];

function dbNav(id) {
  // Update desktop sidebar icons
  document.querySelectorAll('.db-nav-icon').forEach(function(n) { n.classList.remove('active'); });
  var icon = document.getElementById('dbnav-' + id);
  if (icon) icon.classList.add('active');

  // Update mobile drawer nav
  document.querySelectorAll('.mobile-nav-item').forEach(function(n) { n.classList.remove('active'); });
  var mitem = document.getElementById('mnav-' + id);
  if (mitem) mitem.classList.add('active');

  // Show correct section
  DB_SECTIONS.forEach(function(s) {
    var el = document.getElementById(s);
    if (el) el.style.display = 'none';
  });
  var sec = document.getElementById('dbsec-' + id);
  if (sec) sec.style.display = 'block';

  // Scroll to top — works on desktop (main area) and mobile (window)
  var main = document.getElementById('dbMain');
  if (main) main.scrollTop = 0;
  try { window.scrollTo(0, 0); } catch(e) {}

  // Draw charts as needed
  if (id === 'home') { setTimeout(function(){ drawDbChart('homeChart','#FFFFFF'); }, 100); }
  if (id === 'portfolio') { setTimeout(function(){ drawDbChart('portChart','#FFFFFF'); }, 100); }
  if (id === 'vault') { setTimeout(function(){ drawVaultCharts(); }, 100); }
}

// Legacy shims (used by onboarding exit etc.)
function setNav(id) { dbNav(id); }
function showSection(s) {
  var map = {'sec-home':'home','sec-portfolio':'portfolio','sec-opps':'opps','sec-ai':'ai','sec-entities':'entities','sec-settings':'settings'};
  if (map[s]) dbNav(map[s]);
}

function handleMagicLink() {
  var email = document.getElementById('signin-email').value.trim();
  var btn = document.querySelector('#page-signin .btn-primary');
  if (!email) {
    var inp = document.getElementById('signin-email');
    inp.style.borderColor = 'var(--red)';
    inp.focus();
    return;
  }
  document.getElementById('signin-email').style.borderColor = '';
  btn.textContent = 'Signing you in…';
  btn.style.opacity = '0.8';
  btn.disabled = true;
  setTimeout(function() {
    showDashboard();
    btn.innerHTML = 'Send magic link';
    btn.style.opacity = '';
    btn.disabled = false;
  }, 900);
}

function startOnboarding() { showPage('page-onboard-1'); }

var selectedType = 'individual';
function selectType(el, type) {
  document.querySelectorAll('.type-card').forEach(function(c) { c.classList.remove('selected'); });
  el.classList.add('selected');
  selectedType = type;
}

function nextOnboardStep() { showPage('page-onboard-2'); }

function selectQual(el, key) {
  var parent = el.parentElement;
  parent.querySelectorAll('.qual-option').forEach(function(o) { o.classList.remove('selected'); });
  el.classList.add('selected');
}

function selectFunding(el) {
  document.querySelectorAll('.funding-opt').forEach(function(o) { o.classList.remove('selected'); });
  el.classList.add('selected');
}

function toggleChip(el) { el.classList.toggle('selected'); }

function updateRisk(slider) {
  var labels = ['','Conservative','Moderate-Conservative','Moderate','Moderate-Aggressive','Aggressive'];
  document.getElementById('risk-label').textContent = labels[slider.value];
}

function simulateUpload(box) {
  box.style.background = 'var(--green-pale)';
  box.style.borderColor = 'var(--green)';
  box.querySelector('.upload-label').textContent = '✓ Document uploaded successfully';
  box.querySelector('.upload-sub').textContent = 'Under review';
}

function simulateLiveness() {
  alert('Onfido liveness check would launch here.');
}

function showDashboard() {
  showPage('page-dashboard');
  setTimeout(function() { dbNav('home'); }, 50);
}

// ── Elia AI ─────────────────────────────────────────────────────────────
var eliaKB = [
  {p:["cash","idle","liquid","t-bill","treasury"],a:"Your T-Bill position is $318K - 17% of net worth. That is above your 10-12% target. Consider laddering into 6-month instruments for better yield, or the private credit fund for a portion if you are comfortable with a modest lock-up."},
  {p:["risk","concentration","tech","equity","stock"],a:"Your equity portfolio is approximately 62% weighted toward U.S. technology. Consider allocating 10-15% to international or value-factor exposure to reduce single-sector concentration."},
  {p:["perform","return","benchmark","ytd","year"],a:"Your portfolio is up 5.4% YTD. The S&P 500 is up approximately 12.1% over the same period. Your lower beta is by design - your profile is set to Moderate risk."},
  {p:["gold","metal","precious","apmex"],a:"You hold 187 oz of allocated gold held in a secure vault. The position is up 7.1% YTD. Gold exposure looks healthy at 11.8% of total portfolio."},
  {p:["silver","xag"],a:"You hold 1,000 oz of allocated silver in a secure vault, up 4.1% YTD. Silver is both a monetary and industrial metal, complementing your gold position well."},
  {p:["hello","hi","hey","morning","evening"],a:"Good day, James. I am here to help you make sense of your portfolio. What would you like to explore today?"},
  {p:["llc","entity","structure","family","tax"],a:"Based on your portfolio size, a family LLC could offer meaningful tax planning benefits. Aidi can help form a Wyoming or Delaware LLC in approximately 72 hours for $1,000. Would you like to explore that?"},
  {p:["bitcoin","btc","eth","crypto","ethereum"],a:"You hold $89,250 in BTC and $38,250 in ETH, held in institutional-grade cold custody. Crypto represents 9% of your portfolio."},
  {p:["allocation","diversif","balance","spread"],a:"Your current allocation is: 45% Equities, 24% Real Estate, 17% Gold, 9% Crypto, 5% Private Markets. You are slightly over-weight in Equities and under-weight in Treasury."},
];
var FALLBACK_AI = "That is a thoughtful question. Could you provide more context, or would you like me to flag this for your advisor?";


function getEliaResponse(text) {
  text = text.toLowerCase();
  for (var i = 0; i < eliaKB.length; i++) {
    if (eliaKB[i].p.some(function(p) { return text.indexOf(p) >= 0; })) return eliaKB[i].a;
  }
  return FALLBACK_AI;
}



// ── Mobile Navigation Drawer ────────────────
function dbToggleMobileNav() {
  var overlay = document.getElementById('mobileNavOverlay');
  var drawer  = document.getElementById('mobileNavDrawer');
  if (!overlay || !drawer) return;
  overlay.classList.toggle('open');
  drawer.classList.toggle('open');
  // Prevent body scroll when drawer open
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

function dbCloseMobileNav() {
  var overlay = document.getElementById('mobileNavOverlay');
  var drawer  = document.getElementById('mobileNavDrawer');
  if (overlay) overlay.classList.remove('open');
  if (drawer)  drawer.classList.remove('open');
  document.body.style.overflow = '';
}

function mobileNavTo(id) {
  // Update active state in drawer
  document.querySelectorAll('.mobile-nav-item').forEach(function(n) {
    n.classList.remove('active');
  });
  var item = document.getElementById('mnav-' + id);
  if (item) item.classList.add('active');

  // Navigate
  dbNav(id);

  // Close drawer
  dbCloseMobileNav();
}

// ── Notification dropdown ──
// Notification dropdown
function dbToggleNotif() {
  var d = document.getElementById('notifDropdown');
  d.classList.toggle('open');
}

var NOTIF_DATA = [
  {
    id: 'kyc',
    icon: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
    iconBg: 'var(--red-pale)', iconClr: 'var(--red)',
    title: 'KYC Verification Required',
    text: 'Your identity verification is incomplete. This may restrict access to certain investment products including private market deals and T-Bill purchases above $50,000.',
    time: '12 minutes ago',
    link: 'Complete verification',
    action: function() { settTab('profile'); dbNav('settings'); },
    unread: true
  },
  {
    id: 'deposit',
    icon: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    iconBg: 'var(--green-pale)', iconClr: 'var(--green)',
    title: 'Deposit Confirmed',
    text: '$5,000.00 has been successfully deposited to your Aidi Cash Wallet. Your new balance is $318,000. Funds are available immediately for investment.',
    time: '2 hours ago',
    link: 'View Cash Wallet',
    action: function() { openWalletTransfer(); },
    unread: true
  },
  {
    id: 'opportunity',
    icon: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>',
    iconBg: 'var(--gold-pale)', iconClr: 'var(--gold)',
    title: 'New Investment Opportunity',
    text: 'Modern Stylish Home at 458 N 7th Street, San Jose is now open for investment. 5% projected cap rate, 4.5% p.a. investor return, minimum $5,000. Only Unit A is open — Units B, C, D are closed.',
    time: '3 hours ago',
    link: 'View deal',
    action: function() { openTransactionPage('unit-a'); },
    unread: true
  },
  {
    id: 'compliance',
    icon: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    iconBg: '#FEF9C3', iconClr: '#A16207',
    title: 'Filing Deadline Approaching',
    text: 'Your Federal Income Tax Return (Form 1040) and LLC Partnership Return (Form 1065) for Adeyemi Capital LLC are both due on April 15, 2026 — 5 days away. The Delaware Annual Report is already overdue.',
    time: '1 day ago',
    link: 'View compliance filings',
    action: function() { dbNav('entities'); },
    unread: true
  },
  {
    id: 'elia',
    icon: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>',
    iconBg: 'var(--blue-pale)', iconClr: 'var(--blue)',
    title: 'Elia Weekly Digest Ready',
    text: 'Your portfolio is up 5.3% year-to-date. Elia has flagged 2 new insights: excess idle cash in T-Bills and a concentration risk in U.S. equities. Your gold position continues to outperform expectations.',
    time: '1 day ago',
    link: 'Open Elia AI',
    action: function() { dbNav('ai'); },
    unread: false
  },
  {
    id: 'vault',
    icon: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    iconBg: '#FEF9C3', iconClr: '#A16207',
    title: 'Vault Storage Fee Due',
    text: 'Your quarterly precious metals storage fee of $231 will be deducted from your Cash Wallet on July 1, 2026. This covers 187 oz gold and 1,000 oz silver held in your Secure Vault.',
    time: '2 days ago',
    link: 'View Vault',
    action: function() { dbNav('vault'); },
    unread: false
  },
  {
    id: 'tbill',
    icon: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    iconBg: '#ECFEFF', iconClr: '#0E7490',
    title: 'T-Bill Auto-Rolled',
    text: 'Your 90-day T-Bill position ($318,000) matured and was automatically rolled into a new 90-day instrument at 5.18% annualised yield. Next maturity: July 10, 2026.',
    time: '2 days ago',
    link: 'View T-Bill',
    action: function() { openTransactionPage('tbill'); },
    unread: false
  },
  {
    id: 'entity',
    icon: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    iconBg: 'var(--green-pale)', iconClr: 'var(--green)',
    title: 'Entity Formation Update',
    text: 'Adeyemi Family Office LLC (Wyoming) formation is progressing. Estimated completion: April 10, 2026. You will receive your Articles of Organization by email once the Secretary of State approves.',
    time: '3 days ago',
    link: 'Track formation',
    action: function() { dbNav('entities'); },
    unread: false
  }
];

function notifClick(id) {
  var item = NOTIF_DATA.find(function(n){ return n.id === id; });
  if (!item) return;
  // Mark this item as read
  var dot = document.getElementById('nu-' + id);
  if (dot) dot.remove();
  var ni = document.getElementById('ni-' + id);
  if (ni) ni.style.opacity = '1';
  item.unread = false;
  _updateNotifBadge();
  // Close dropdown and navigate
  document.getElementById('notifDropdown').classList.remove('open');
  setTimeout(function() { item.action(); }, 180);
}

function openAllNotifs() {
  document.getElementById('notifDropdown').classList.remove('open');
  var bd = document.getElementById('notifPanelBd');
  bd.innerHTML = NOTIF_DATA.map(function(n) {
    var readCls = n.unread ? '' : ' read';
    return '<div class="np-item' + readCls + '" onclick="npClick(\'' + n.id + '\')">' +
      (n.unread ? '<div class="np-item-dot"></div>' : '<div style="width:8px;flex-shrink:0;"></div>') +
      '<div class="np-item-icon" style="background:' + n.iconBg + ';color:' + n.iconClr + ';">' + n.icon + '</div>' +
      '<div class="np-item-body">' +
        '<div class="np-item-title">' + n.title + '</div>' +
        '<div class="np-item-text">' + n.text + '</div>' +
        '<div class="np-item-meta">' +
          '<span class="np-item-time">' + n.time + '</span>' +
          (n.link ? '<span style="color:var(--ink-muted);">&middot;</span><span class="np-item-link">' + n.link + ' &rarr;</span>' : '') +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
  _updateNotifPanelCount();
  document.getElementById('notifPanelOv').classList.add('open');
  document.getElementById('notifPanel').classList.add('open');
}

function npClick(id) {
  var item = NOTIF_DATA.find(function(n){ return n.id === id; });
  if (!item) return;
  item.unread = false;
  _updateNotifBadge();
  closeAllNotifs();
  setTimeout(function() { item.action(); }, 280);
}

function closeAllNotifs() {
  document.getElementById('notifPanelOv').classList.remove('open');
  document.getElementById('notifPanel').classList.remove('open');
}

function markAllRead() {
  // Remove all unread dots from dropdown
  document.querySelectorAll('.notif-item-unread').forEach(function(d){ d.remove(); });
  // Mark all in data
  NOTIF_DATA.forEach(function(n){ n.unread = false; });
  // Hide badge
  _updateNotifBadge();
  // Refresh panel if open
  var panel = document.getElementById('notifPanel');
  if (panel && panel.classList.contains('open')) {
    document.querySelectorAll('.np-item').forEach(function(el){ el.classList.add('read'); });
    document.querySelectorAll('.np-item-dot').forEach(function(el){ el.style.background = 'transparent'; });
    _updateNotifPanelCount();
  }
}

function _updateNotifBadge() {
  var unread = NOTIF_DATA.filter(function(n){ return n.unread; }).length;
  var badge = document.querySelector('.db-notif-badge');
  if (badge) {
    if (unread > 0) { badge.style.display = ''; badge.textContent = unread; }
    else badge.style.display = 'none';
  }
}

function _updateNotifPanelCount() {
  var total = NOTIF_DATA.length;
  var unread = NOTIF_DATA.filter(function(n){ return n.unread; }).length;
  var el = document.getElementById('notifPanelCount');
  if (el) el.textContent = total + ' notification' + (total !== 1 ? 's' : '') + (unread > 0 ? ' \u00b7 ' + unread + ' unread' : ' \u00b7 all read');
}

document.addEventListener('click', function(e) {
  var dd = document.getElementById('notifDropdown');
  var btn = document.getElementById('notifBtn');
  if (dd && btn && !dd.contains(e.target) && !btn.contains(e.target)) {
    dd.classList.remove('open');
  }
});

// Elia chat (new db version)
function dbSendChat() {
  var input = document.getElementById('chatDbInput');
  var text = input.value.trim();
  if (!text) return;
  input.value = '';
  dbAddMsg(text, 'user');
  setTimeout(function(){ dbAddMsg(getEliaResponse(text), 'bot'); }, 700 + Math.random()*400);
}
function refreshNews() {
  var sec = document.getElementById('newsSection');
  if (!sec) return;
  sec.style.opacity = '0.5';
  setTimeout(function(){ sec.style.opacity = '1'; }, 600);
}

function dbSendQuick(btn) {
  var text = btn.textContent.trim();
  dbAddMsg(text, 'user');
  setTimeout(function(){ dbAddMsg(getEliaResponse(text), 'bot'); }, 700 + Math.random()*400);
}
function dbAddMsg(text, role) {
  var msgs = document.getElementById('chatDbMsgs');
  if (!msgs) return;
  var d = document.createElement('div');
  d.className = 'chat-db-msg ' + role;
  var av = role === 'bot' ? '&#10022;' : 'JA';
  d.innerHTML = '<div class="chat-db-msg-av">' + av + '</div><div class="chat-db-bubble">' + text + '</div>';
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}

// Chart drawing for new dashboard
function drawDbChart(canvasId, bgHex) {
  var canvas = document.getElementById(canvasId);
  if (!canvas) return;
  var card = canvas.closest('.perf-card');
  var W = card ? card.offsetWidth-56 : (canvas.parentElement ? canvas.parentElement.offsetWidth : 600);
  var H = parseInt(canvas.getAttribute('height'))||160;
  if (W<80) W=600;
  canvas.width=W; canvas.height=H;
  stopLiveChart(canvasId);
  liveChart(canvasId, [{
    data:        genData(80, 1700000, 0.007, 0.0004),
    color:       '#0C1A2E',
    fillColorFn: makeGradFn(12, 26, 46, 0.08, 0),
    dotColor:    '#C8962E',
    lineWidth:   1.8,
    vol:         0.007,
    trend:       0.0004
  }], {bg:'#FFFFFF', showDot:true, gridLines:true, padX:56});
}


function drawLineChart(canvasId, data, color, fill, bg) {
  var canvas = document.getElementById(canvasId);
  if (!canvas) return;
  var parent = canvas.parentElement;
  var W = parent ? parent.offsetWidth : 400;
  var H = parseInt(canvas.getAttribute('height'))||160;
  if (W<10) W=400;
  canvas.width=W; canvas.height=H;
  var rc = color.replace('rgb(','').replace(')','').split(',');
  var r=parseInt(rc[0]), g=parseInt(rc[1]), b=parseInt(rc[2]);
  var fillFn = fill ? makeGradFn(r,g,b,0.22,0) : null;
  // Infer vol/trend from colour — gold=slower, blue=moderate
  var vol   = (r>150 && g>100 && b<80)  ? 0.006 : 0.008;
  var trend = 0.0004;
  stopLiveChart(canvasId);
  liveChart(canvasId, [{
    data:        data,
    color:       color,
    fillColorFn: fillFn,
    dotColor:    color,
    lineWidth:   2,
    vol:         vol,
    trend:       trend
  }], {bg:bg||'#FFFFFF', showDot:true, gridLines:false});
}

function genData(len, start, vol, trend) {
  var d = [start];
  for (var i = 1; i < len; i++) {
    d.push(Math.max(0, d[i-1] * (1 + trend + (Math.random() - 0.47) * vol)));
  }
  return d;
}

// ── Shared animated chart draw ────────────────────────────────────────────
function animatedDraw(canvas, datasets, opts) {
  // datasets: [{data, color, fillColor}]
  // opts: {bg, progress (0-1), showDot}
  var ctx = canvas.getContext('2d');
  var W = canvas.width, H = canvas.height;
  var bg = opts.bg || '#FFFFFF';
  var prog = opts.progress !== undefined ? opts.progress : 1;
  var showDot = opts.showDot !== false;
  var gridLines = opts.gridLines !== false;
  var zeroLine = opts.zeroLine || false;

  ctx.clearRect(0,0,W,H);
  ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);

  // Collect all values for scale
  var allVals = [];
  datasets.forEach(function(ds){ allVals = allVals.concat(ds.data); });
  var min = Math.min.apply(null,allVals)*0.97;
  var max = Math.max.apply(null,allVals)*1.02;
  var range = max - min || 1;

  var padT = H*0.07, padB = H*0.1;
  function toY(v){ return H - padB - ((v-min)/range)*(H-padT-padB); }
  function toPts(data){
    return data.map(function(v,i){ return {x:(i/(data.length-1))*W, y:toY(v)}; });
  }

  // Grid
  if (gridLines) {
    ctx.save();
    ctx.setLineDash([3,6]); ctx.strokeStyle='rgba(12,26,46,0.05)'; ctx.lineWidth=1;
    [0.25,0.5,0.75].forEach(function(f){
      var y=Math.round(H*f);
      ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke();
    });
    ctx.restore();
  }

  // Zero line
  if (zeroLine) {
    ctx.save();
    ctx.strokeStyle='rgba(12,26,46,0.1)'; ctx.lineWidth=1;
    var zy = toY(0);
    ctx.beginPath(); ctx.moveTo(0,zy); ctx.lineTo(W,zy); ctx.stroke();
    ctx.restore();
  }

  datasets.forEach(function(ds){
    var data = ds.data;
    var pts  = toPts(data);
    var end  = Math.max(1, Math.floor(pts.length * prog));
    var ptsSlice = pts.slice(0, end);
    if (ptsSlice.length < 2) return;

    // Partial last segment
    if (prog < 1 && end < pts.length) {
      var frac = (pts.length * prog) - (end-1);
      var prev = pts[end-1], next = pts[end];
      ptsSlice.push({
        x: prev.x + (next.x - prev.x)*frac,
        y: prev.y + (next.y - prev.y)*frac
      });
    }

    // Fill
    if (ds.fillColor) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(ptsSlice[0].x, H-padB);
      ptsSlice.forEach(function(p){ ctx.lineTo(p.x,p.y); });
      ctx.lineTo(ptsSlice[ptsSlice.length-1].x, H-padB);
      ctx.closePath();
      ctx.fillStyle = ds.fillColor; ctx.fill();
      ctx.restore();
    }

    // Line
    ctx.save();
    ctx.beginPath(); ctx.moveTo(ptsSlice[0].x, ptsSlice[0].y);
    for (var i=1;i<ptsSlice.length;i++){
      var cx=(ptsSlice[i-1].x+ptsSlice[i].x)/2;
      ctx.bezierCurveTo(cx,ptsSlice[i-1].y,cx,ptsSlice[i].y,ptsSlice[i].x,ptsSlice[i].y);
    }
    ctx.strokeStyle=ds.color; ctx.lineWidth=ds.lineWidth||1.8; ctx.stroke();
    ctx.restore();

    // End dot
    if (showDot && prog >= 1) {
      var last=ptsSlice[ptsSlice.length-1];
      ctx.save();
      ctx.beginPath(); ctx.arc(last.x,last.y,4.5,0,Math.PI*2);
      ctx.fillStyle=ds.dotColor||'#C8962E'; ctx.fill();
      ctx.restore();
    }
  });
}

function runAnimation(canvas, datasets, opts, duration) {
  duration = duration || 900;
  var start = null;
  function step(ts){
    if (!start) start=ts;
    var prog = Math.min(1,(ts-start)/duration);
    // ease out cubic
    var eased = 1 - Math.pow(1-prog,3);
    opts.progress = eased;
    animatedDraw(canvas, datasets, opts);
    if (prog<1) requestAnimationFrame(step);
    else { opts.progress=1; animatedDraw(canvas, datasets, opts); }
  }
  requestAnimationFrame(step);
}

function chartFromCanvas(canvasId, datasets, opts, duration) {
  var canvas = document.getElementById(canvasId);
  if (!canvas) return;
  // Size canvas
  var parent = canvas.parentElement;
  var W = parent ? parent.offsetWidth - (opts.padX||0) : 600;
  var H = parseInt(canvas.getAttribute('height'))||160;
  if (W<80) W=600;
  canvas.width=W; canvas.height=H;
  runAnimation(canvas, datasets, opts||{}, duration);
}


// ══════════════════════════════════════════════════════════════
// LIVE STREAMING CHART ENGINE
// Each registered chart ticks every ~600ms with a smooth
// micro-transition, simulating real-time price flow.
// ══════════════════════════════════════════════════════════════

var LIVE_CHARTS = {};
var LIVE_TICK_MS = 600;

function liveChart(canvasId, streams, opts) {
  // Stop any existing live chart on this canvas
  stopLiveChart(canvasId);

  var canvas = document.getElementById(canvasId);
  if (!canvas) return;

  // Size the canvas properly - walk up DOM to find real width
  var H = parseInt(canvas.getAttribute('height')) || 180;
  var W = _getCanvasWidth(canvas, opts);
  canvas.width  = W;
  canvas.height = H;

  var lc = {
    canvasId:     canvasId,
    canvas:       canvas,
    streams:      streams,
    opts:         opts || {},
    tickInterval: null
  };
  LIVE_CHARTS[canvasId] = lc;

  // Entry animation then start ticking
  _liveAnimate(lc, true);
  lc.tickInterval = setInterval(function() { _liveTick(canvasId); }, LIVE_TICK_MS);
}

function _getCanvasWidth(canvas, opts) {
  var padX = (opts && opts.padX) || 0;
  // Walk up the DOM to find a container with real width
  var el = canvas.parentElement;
  while (el) {
    var w = el.offsetWidth;
    if (w > 100) return w - padX;
    el = el.parentElement;
  }
  // Last resort: use window width minus typical margins
  return (opts && opts._fallbackW) || Math.max(300, window.innerWidth - 80 - padX);
}

function _liveTick(canvasId) {
  var lc = LIVE_CHARTS[canvasId];
  if (!lc) return;

  var isMetals = lc.opts && lc.opts._metalsPct;

  // Advance each stream by one point
  lc.streams.forEach(function(s, idx) {
    var vol   = s.vol   || 0.008;
    var trend = s.trend || 0.0002;
    if (isMetals) {
      var startVal = idx === 0 ? lc.opts._goldStart : lc.opts._silverStart;
      var rawLast  = s._rawLast || startVal;
      var rawNext  = Math.max(0, rawLast * (1 + trend + (Math.random() - 0.47) * vol));
      s._rawLast = rawNext;
      s.data.push((rawNext / startVal - 1) * 100);
    } else {
      var last = s.data[s.data.length - 1];
      s.data.push(Math.max(0, last * (1 + trend + (Math.random() - 0.47) * vol)));
    }
    s.data.shift();
  });

  // Only redraw if canvas is currently on screen
  var canvas = lc.canvas;
  var rect   = canvas.getBoundingClientRect();
  if (rect.width > 0 && rect.height > 0) {
    _liveAnimate(lc, false);
  }
}

function _liveAnimate(lc, withEntry) {
  var canvas = lc.canvas;

  // Re-measure width in case container resized
  var W = _getCanvasWidth(canvas, lc.opts);
  if (Math.abs(W - canvas.width) > 4 && W > 100) canvas.width = W;

  var ctx  = canvas.getContext('2d');
  var datasets = lc.streams.map(function(s) {
    return {
      data:      s.data,
      color:     s.color,
      fillColor: s.fillColorFn ? s.fillColorFn(ctx, canvas.height) : (s.fillColor || null),
      dotColor:  s.dotColor  || '#C8962E',
      lineWidth: s.lineWidth || 1.8
    };
  });

  if (withEntry) {
    runAnimation(canvas, datasets, lc.opts, 800);
  } else {
    var o = {}; for (var k in lc.opts) o[k] = lc.opts[k];
    o.progress = 1;
    animatedDraw(canvas, datasets, o);
  }
}

function stopLiveChart(canvasId) {
  var lc = LIVE_CHARTS[canvasId];
  if (!lc) return;
  clearInterval(lc.tickInterval);
  delete LIVE_CHARTS[canvasId];
}


function makeGradFn(r, g, b, alpha0, alpha1) {
  return function(ctx, H) {
    var grad = ctx.createLinearGradient(0,0,0,H);
    grad.addColorStop(0, 'rgba('+r+','+g+','+b+','+alpha0+')');
    grad.addColorStop(1, 'rgba('+r+','+g+','+b+','+alpha1+')');
    return grad;
  };
}



function initCharts() {
  var nwCanvas = document.getElementById('nwChart');
  if (nwCanvas) {
    var nwH = parseInt(nwCanvas.getAttribute('height'))||160;
    var nwW = nwCanvas.parentElement ? nwCanvas.parentElement.offsetWidth : 400;
    if (nwW<10) nwW=400;
    nwCanvas.width=nwW; nwCanvas.height=nwH;
    liveChart('nwChart', [{
      data:    genData(80,2600000,0.006,0.0004),
      color:   'rgb(200,150,46)',
      fillColorFn: makeGradFn(200,150,46,0.25,0),
      dotColor:'#C8962E', lineWidth:2, vol:0.006, trend:0.0004
    }], {bg:'#0C1A2E', showDot:true, gridLines:false});
  }
  var portCanvas = document.getElementById('portfolioChart');
  if (portCanvas) {
    var pH = parseInt(portCanvas.getAttribute('height'))||160;
    var pW = portCanvas.parentElement ? portCanvas.parentElement.offsetWidth : 400;
    if (pW<10) pW=400;
    portCanvas.width=pW; portCanvas.height=pH;
    liveChart('portfolioChart', [{
      data:    genData(80,1700000,0.007,0.0004),
      color:   'rgb(27,79,216)',
      fillColorFn: makeGradFn(27,79,216,0.18,0),
      dotColor:'#C8962E', lineWidth:2, vol:0.007, trend:0.0004
    }], {bg:'#FFFFFF', showDot:true, gridLines:false});
  }
}
function drawApChart() {
  var canvas = document.getElementById('apChart');
  if (!canvas) return;
  var parent = canvas.parentElement;
  var W = parent ? parent.offsetWidth - 56 : 0;
  if (W < 80) {
    // Asset panel uses transform (not display:none), walk up to find width
    var el = parent;
    while (el && el.offsetWidth < 10) el = el.parentElement;
    W = el ? el.offsetWidth - 56 : 460;
    if (W < 80) W = 460;
  }
  var H = parseInt(canvas.getAttribute('height'))||140;
  canvas.width = W; canvas.height = H;
  liveChart('apChart', [{
    data:    genData(80, 100, 0.009, 0.0003),
    color:   '#0C1A2E',
    fillColorFn: makeGradFn(12, 26, 46, 0.08, 0),
    dotColor: '#C8962E', lineWidth: 1.6, vol: 0.009, trend: 0.0003
  }], {bg:'#FFFFFF', showDot:true, gridLines:true, padX:56, _fallbackW: W});
}

function txDrawChart(canvasId) {
  var canvas = document.getElementById(canvasId);
  if (!canvas) return;
  var parent = canvas.closest('.tx-chart-card');
  var W = parent ? parent.offsetWidth - 56 : 0;
  if (W < 100) {
    // Page may still be animating into view — measure via parent chain
    var el = parent || canvas.parentElement;
    while (el && el.offsetWidth < 10) el = el.parentElement;
    W = el ? el.offsetWidth - 56 : 700;
    if (W < 100) W = 700;
  }
  var H = parseInt(canvas.getAttribute('height'))||200;
  canvas.width = W; canvas.height = H;

  var vol=0.009, trend=0.0004;
  if (canvasId.indexOf('btc')>-1)    {vol=0.028; trend=0.0008;}
  if (canvasId.indexOf('gold')>-1)   {vol=0.007; trend=0.0005;}
  if (canvasId.indexOf('silver')>-1) {vol=0.011; trend=0.0003;}
  if (canvasId.indexOf('tbill')>-1)  {vol=0.002; trend=0.0001;}

  liveChart(canvasId, [{
    data:    genData(80, 100, vol, trend),
    color:   '#0C1A2E',
    fillColorFn: makeGradFn(12, 26, 46, 0.08, 0),
    dotColor: '#C8962E', lineWidth: 1.8, vol: vol, trend: trend
  }], {bg:'#FFFFFF', showDot:true, gridLines:true, padX:56, _fallbackW: W});
}

function drawVaultChart(canvasId, data, lineColor) {
  var canvas = document.getElementById(canvasId);
  if (!canvas) return;
  var parent = canvas.closest('.vault-chart-card');
  var W = parent ? parent.offsetWidth-48 : 700;
  var H = parseInt(canvas.getAttribute('height'))||180;
  if (W<100) W=700;
  canvas.width=W; canvas.height=H;
  var rgb = lineColor.replace('rgb(','').replace(')','').split(',');
  var r=parseInt(rgb[0]),g=parseInt(rgb[1]),b=parseInt(rgb[2]);
  var isCrypto = canvasId.indexOf('Crypto')>-1 || canvasId.indexOf('crypto')>-1;
  liveChart(canvasId, [{
    data:    data || genData(80,100,isCrypto?0.02:0.006,isCrypto?0.0008:0.0005),
    color:   lineColor,
    fillColorFn: makeGradFn(r,g,b,0.1,0),
    dotColor:'#C8962E', lineWidth:1.8,
    vol:   isCrypto ? 0.02  : 0.006,
    trend: isCrypto ? 0.0008 : 0.0005
  }], {bg:'#FFFFFF', showDot:true, gridLines:true, padX:48});
}

function drawVaultMetalsChart() {
  var canvas = document.getElementById('vaultMetalsChart');
  if (!canvas) return;
  var parent = canvas.closest('.vault-chart-card');
  var W = parent ? parent.offsetWidth-48 : 700;
  var H = parseInt(canvas.getAttribute('height'))||200;
  if (W<100) W=700;
  canvas.width=W; canvas.height=H;

  // Both streams track % return so they share the same Y axis
  var goldStart  = 548000, silverStart = 28620;
  var goldRaw    = genData(80, goldStart,  0.006, 0.0005);
  var silverRaw  = genData(80, silverStart,0.011, 0.0003);
  var goldPct    = goldRaw.map(function(v)  { return (v/goldStart-1)*100;   });
  var silverPct  = silverRaw.map(function(v){ return (v/silverStart-1)*100; });

  // Store last raw values so ticks can continue from them
  liveChart('vaultMetalsChart', [
    {
      data: goldPct, color:'rgb(200,150,46)',
      fillColorFn: makeGradFn(200,150,46,0.1,0),
      dotColor:'#C8962E', lineWidth:2,
      // Custom tick function — advances raw then converts to pct
      _rawLast: goldRaw[goldRaw.length-1],
      vol:0.006, trend:0.0005
    },
    {
      data: silverPct, color:'rgb(100,116,139)',
      fillColorFn: makeGradFn(100,116,139,0.08,0),
      dotColor:'#64748b', lineWidth:2,
      _rawLast: silverRaw[silverRaw.length-1],
      vol:0.011, trend:0.0003
    }
  ], {bg:'#FFFFFF', showDot:true, gridLines:true, zeroLine:true, padX:48,
      _metalsPct: true,   // flag so tick handler converts correctly
      _goldStart: goldStart, _silverStart: silverStart});
}
function vaultMetalsChartTab(btn) {
  var card = btn.closest('.vault-chart-card');
  if (card) card.querySelectorAll('.perf-time-tab').forEach(function(t){t.classList.remove('active');});
  btn.classList.add('active');
  stopLiveChart('vaultMetalsChart');
  drawVaultMetalsChart();
}
function vaultChartTab(btn, chartId) {
  var card = btn.closest('.vault-chart-card');
  if (card) card.querySelectorAll('.perf-time-tab').forEach(function(t){t.classList.remove('active');});
  btn.classList.add('active');
  stopLiveChart(chartId);
  drawVaultChart(chartId, null, 'rgb(27,79,216)');
}

// Tab clicks
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('port-time-tab')) {
    document.querySelectorAll('.port-time-tab').forEach(function(t) { t.classList.remove('active'); });
    e.target.classList.add('active');
    var portData = genData(80, 1700000 * (0.9 + Math.random() * 0.2), 0.007, 0.0004);
    drawLineChart('portfolioChart', portData, 'rgb(27,79,216)', true, '#FFFFFF');
  }
  if (e.target.classList.contains('nw-time-tab')) {
    document.querySelectorAll('.nw-time-tab').forEach(function(t) { t.classList.remove('active'); });
    e.target.classList.add('active');
    var nwData = genData(80, 2600000 * (0.9 + Math.random() * 0.2), 0.006, 0.0004);
    drawLineChart('nwChart', nwData, 'rgb(200,150,46)', true, '#0C1A2E');
  }
});

// ── Asset Detail Panel ──────────────────────────────────────────────────
var ASSET_DATA = {
  spy: {
    ticker: 'SPY', name: 'S&P 500 ETF', sub: 'US Large Cap · Brokerage',
    price: '$284,000', change: '▲ $31,240 (12.1%) this year', changePositive: true,
    meta: [['$8,353','Per share'],['34','Shares held'],['+0.8%','Today'],['Brokerage','Custodian']],
    position: [['Market value','$284,000'],['Total return','+$31,240 (12.1%)'],['Avg. cost basis','$252,760'],['Portfolio weight','15.4%']],
    stats: [['Market Cap','$537B'],['P/E Ratio','22.4x'],['Dividend yield','1.31%'],['52W High','$610.78'],['52W Low','$481.80'],['Avg. volume','83.2M'],['Beta','1.00'],['Expense ratio','0.09%']],
    about: 'The SPDR S&P 500 ETF Trust tracks the S&P 500 Index, providing broad exposure to large-cap U.S. equities across all 11 GICS sectors. It is one of the most liquid and widely-held investment vehicles globally, suitable as a core equity allocation.',
    elia: 'Your SPY position (15.4%) is within target. Combined with other U.S. equity holdings, your total U.S. large-cap exposure approaches 62%. Consider diversifying into international or factor-based ETFs to reduce concentration risk.'
  },
  aapl: {
    ticker: 'AAPL', name: 'Apple Inc.', sub: 'Technology · NASDAQ · Brokerage',
    price: '$107,220', change: '▲ $16,620 (18.4%) this year', changePositive: true,
    meta: [['$7,148','Per share'],['15','Shares held'],['+1.2%','Today'],['Brokerage','Custodian']],
    position: [['Market value','$107,220'],['Total return','+$16,620 (18.4%)'],['Avg. cost basis','$90,600'],['Portfolio weight','5.8%']],
    stats: [['Market Cap','$3.31T'],['P/E Ratio','29.8x'],['Dividend yield','0.44%'],['52W High','$260.10'],['52W Low','$164.08'],['Revenue (TTM)','$391B'],['EPS','$6.97'],['Beta','1.24']],
    about: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories. It also sells related services including the App Store, Apple Music, iCloud, and Apple TV+. Apple is headquartered in Cupertino, California.',
    elia: 'AAPL represents 5.8% of your portfolio and is your second-largest single-stock position. With strong earnings growth and a growing services segment, it remains a quality hold. Watch for concentration if you add more U.S. tech exposure.'
  },
  btc: {
    ticker: 'BTC', name: 'Bitcoin', sub: 'Cryptocurrency · Secure Custody',
    price: '$89,250', change: '▲ $21,600 (31.9%) this year', changePositive: true,
    meta: [['$93,421','Current price'],['0.956 BTC','Amount held'],['-1.8%','Today'],['Brokerage','Trading']],
    position: [['Market value','$89,250'],['Total return','+$21,600 (31.9%)'],['Avg. cost basis','$67,650'],['Portfolio weight','4.8%']],
    stats: [['Market Cap','$1.85T'],['24h Volume','$48.2B'],['Circulating supply','19.8M BTC'],['Max supply','21M BTC'],['All time high','$108,786'],['52W Low','$52,400'],['Trading','Brokerage'],['Vault','Secure Cold Custody']],
    about: 'Bitcoin is the first and largest decentralized cryptocurrency by market capitalization. Your Bitcoin is held in institutional-grade cold custody with comprehensive insurance coverage. Aidi does not execute trades directly.',
    elia: 'Your BTC holding is up 31.9% YTD. At 4.8% portfolio weight, it remains within a healthy range for a Moderate risk profile. Crypto is inherently volatile — no action required, but consider a rebalance if it grows above 8% of your total portfolio.'
  },
  gold: {
    ticker: 'IAU / Gold', name: 'Allocated Gold', sub: 'Precious Metals · Secure Vault',
    price: '$218,000', change: '▲ $14,430 (7.1%) this year', changePositive: true,
    meta: [['$3,142/oz','Spot price'],['187 oz','Allocated'],['▲ 0.5%','Today'],['Secure','Vault']],
    position: [['Market value','$218,000'],['Total return','+$14,430 (7.1%)'],['Avg. cost basis','$203,570'],['Portfolio weight','11.8%']],
    stats: [['Allocation','187 oz'],['Purity','99.99% fine'],['Storage','Secure Vault'],['Insurance','Fully insured'],['52W High','$3,224/oz'],['52W Low','$2,104/oz'],['YTD return','7.1%'],['Type','Physical allocated']],
    about: 'Your gold position consists of 187 oz of fully allocated, physically vaulted gold held in a secure, insured vault. Allocated gold means you own specific bars registered to your account — it is not pooled or leveraged. The vault is fully insured.',
    elia: 'Gold is performing well as an inflation and currency hedge. At 11.8% of your portfolio, it is within the recommended 10–15% range. No rebalancing needed at this time. Gold tends to strengthen further in high-inflation or geopolitical risk environments.'
  },
  tbill: {
    ticker: 'T-Bill', name: '90-Day Treasury Bill', sub: 'US Treasury · Cash Account',
    price: '$318,000', change: '▲ $16,536 (5.2%) annualised', changePositive: true,
    meta: [['5.18%','Current yield'],['90 days','Maturity'],['Auto-roll','Enabled'],['Cash Account','Custodian']],
    position: [['Principal','$318,000'],['Annualised yield','5.18%'],['Projected income','$16,472/yr'],['Portfolio weight','17.2%']],
    stats: [['Yield','5.18% ann.'],['Term','90 days'],['Issuer','US Treasury'],['Rating','AAA'],['Min. investment','$1,000'],['FDIC coverage','Yes — insured'],['Auto-roll','Yes'],['Liquidity','High']],
    about: 'US Treasury Bills are short-term government debt obligations backed by the full faith and credit of the United States. Your 90-day T-Bills are set to auto-roll at maturity. They are considered among the safest instruments available.',
    elia: 'Your T-Bill balance of $318K (17.2%) exceeds your stated 10–12% liquidity target by ~$90K. Redeploying the surplus into a 6-month T-Bill ladder or the private credit fund could improve annual yield by an estimated $2,340 without meaningful added risk.'
  },
  silver: {
    ticker: 'XAG / Silver', name: 'Allocated Silver', sub: 'Precious Metals · Secure Vault',
    price: '$29,800', change: '▲ +$320 (+1.1%) today', changePositive: true,
    meta: [['$29.80/oz','Spot price'],['1,000 oz','Allocated'],['+1.1%','Today'],['Secure','Vault']],
    position: [['Market value','$29,800'],['Total return','+$1,180 (4.1%)'],['Avg. cost basis','$28,620'],['Portfolio weight','1.6%']],
    stats: [['Spot price','$29.80/oz'],['Purity','99.9% fine'],['Storage','Secure Vault'],['Insurance','Fully insured'],['52W High','$34.20/oz'],['52W Low','$22.10/oz'],['YTD return','+4.1%'],['Settlement','T+2']],
    about: 'Your silver position consists of 1,000 troy oz of fully allocated, physically vaulted silver held in a secure, insured vault. Allocated silver means you own specific bars registered to your account. Silver is used as both an industrial commodity and a monetary metal, providing diversification alongside your gold allocation.',
    elia: 'Your silver holding at 1.6% of portfolio is a modest precious metals complement to your gold position. Silver tends to be more volatile than gold but offers higher upside in commodity bull cycles. No action required at current allocation.'
  },
};

function openAssetPanel(id) {
  var data = ASSET_DATA[id];
  if (!data) return;
  currentAssetId = id; // track for "View in broker" button

  // Update header
  document.getElementById('apTicker').textContent = data.ticker;
  document.getElementById('apName').textContent = data.name;
  document.getElementById('apSub').textContent = data.sub;

  // Update price
  document.getElementById('apPrice').textContent = data.price;
  var chgEl = document.getElementById('apChange');
  chgEl.textContent = data.change;
  chgEl.style.color = data.changePositive ? 'var(--green)' : 'var(--red)';

  // Update meta
  var metaEl = document.getElementById('apMeta');
  metaEl.innerHTML = data.meta.map(function(m) {
    return '<div class="ap-price-meta-item"><div class="v">' + m[0] + '</div><div class="l">' + m[1] + '</div></div>';
  }).join('');

  // Update position
  var posEl = document.getElementById('apPosition');
  posEl.innerHTML = '<div class="ap-position-title">Holdings Summary</div>' +
    data.position.map(function(p, i) {
      var cls = (i === 1) ? 'ap-position-value up' : 'ap-position-value';
      return '<div class="ap-position-row"><span class="ap-position-label">' + p[0] + '</span><span class="' + cls + '">' + p[1] + '</span></div>';
    }).join('');

  // Update stats grid
  var statsEl = document.getElementById('apStats');
  statsEl.innerHTML = data.stats.map(function(s) {
    return '<div class="ap-stat"><div class="k">' + s[0] + '</div><div class="v">' + s[1] + '</div></div>';
  }).join('');

  // Update about
  document.getElementById('apAbout').textContent = data.about;

  // Update Elia
  document.getElementById('apEliaText').textContent = data.elia;

  // Draw chart
  setTimeout(function() { drawApChart(); }, 50);

  // Open panel
  document.getElementById('assetPanelOverlay').classList.add('open');
  document.getElementById('assetPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAssetPanel() {
  document.getElementById('assetPanelOverlay').classList.remove('open');
  document.getElementById('assetPanel').classList.remove('open');
  document.body.style.overflow = '';
}

function drawApChart() {
  var canvas = document.getElementById('apChart');
  if (!canvas) return;
  var W = canvas.parentElement ? canvas.parentElement.offsetWidth - 56 : 460;
  var H = parseInt(canvas.getAttribute('height'))||140;
  if (W<80) W=460;
  canvas.width=W; canvas.height=H;
  var data = genData(80,100,0.008,0.0003);
  var ctx = canvas.getContext('2d');
  var grad = ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,'rgba(12,26,46,0.08)');
  grad.addColorStop(1,'rgba(255,255,255,0)');
  runAnimation(canvas,
    [{data:data,color:'#0C1A2E',fillColor:grad,dotColor:'#C8962E',lineWidth:1.6}],
    {bg:'#FFFFFF',showDot:true,gridLines:true},
    800
  );
}


function apSwitchTab(btn) {
  document.querySelectorAll('.ap-time-tab').forEach(function(t){t.classList.remove('active');});
  btn.classList.add('active');
  drawApChart();
}


// ── Transaction Pages ───────────────────────────────────────────────────
var currentAssetId = null;

function openTransactionPage(id) {
  if (!id) return;
  currentAssetId = id;
  // Close asset panel first
  closeAssetPanel();
  // Map asset id to tx page
  var pageMap = { spy:'spy', aapl:'aapl', btc:'btc', gold:'gold', silver:'silver', tbill:'tbill', bridge:'bridge', termii:'termii', rayda:'rayda', 'unit-a':'unit-a', 'unit-b':'unit-b', 'unit-c':'unit-c', 'unit-d':'unit-d' };
  var pageId = 'txpage-' + (pageMap[id] || id);
  var page = document.getElementById(pageId);
  if (!page) return;
  page.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Draw chart after page opens
  setTimeout(function() {
    txDrawChart('txChart-' + (pageMap[id] || id));
  }, 100);
}

function closeTxPage() {
  document.querySelectorAll('.tx-page').forEach(function(p) {
    p.classList.remove('open');
  });
  document.body.style.overflow = '';
}

function closeTxConfirm() {
  document.getElementById('txConfirmOverlay').classList.remove('open');
  closeTxPage();
}

// Chart drawing for tx pages
function txDrawChart(canvasId) {
  var canvas = document.getElementById(canvasId);
  if (!canvas) return;
  var parent = canvas.closest('.tx-chart-card');
  var W = parent ? parent.offsetWidth-56 : 700;
  var H = parseInt(canvas.getAttribute('height'))||200;
  if (W<100) W=700;
  canvas.width=W; canvas.height=H;

  var vol=0.009,trend=0.0004;
  if (canvasId.indexOf('btc')>-1)    {vol=0.028;trend=0.0008;}
  if (canvasId.indexOf('gold')>-1)   {vol=0.007;trend=0.0005;}
  if (canvasId.indexOf('silver')>-1) {vol=0.011;trend=0.0003;}
  if (canvasId.indexOf('tbill')>-1)  {vol=0.002;trend=0.0001;}
  if (canvasId.indexOf('monroe')>-1) {vol=0.003;trend=0.0003;}
  var data = genData(80,100,vol,trend);
  var ctx = canvas.getContext('2d');
  var grad = ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,'rgba(12,26,46,0.08)');
  grad.addColorStop(1,'rgba(255,255,255,0)');
  runAnimation(canvas,
    [{data:data,color:'#0C1A2E',fillColor:grad,dotColor:'#C8962E',lineWidth:1.8}],
    {bg:'#FFFFFF',showDot:true,gridLines:true},
    900
  );
}


function txTabSwitch(btn, chartId) {
  var card = btn.closest('.tx-chart-card');
  if (card) card.querySelectorAll('.tx-chart-tab').forEach(function(t){t.classList.remove('active');});
  btn.classList.add('active');
  txDrawChart(chartId);
}

// Calculators
function txCalc(id, price, qty) {
  var cost = (parseFloat(qty)||0) * price;
  var el = document.getElementById(id + 'Cost');
  if (el) el.textContent = '$' + cost.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function txCalcCrypto(usd, price) {
  var amt = parseFloat(usd)||0;
  var btc = amt / price;
  var el = document.getElementById('btcEquiv');
  if (el) el.textContent = '≈ ' + btc.toFixed(6) + ' BTC · Market price $' + price.toLocaleString();
  var costEl = document.getElementById('btcCost');
  if (costEl) costEl.textContent = '$' + amt.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
}

function txCalcSilver(usd) {
  var amt = parseFloat(usd)||0;
  var oz = amt / 29.80;
  var el = document.getElementById('silverEquiv');
  if (el) el.textContent = '≈ ' + oz.toFixed(3) + ' troy oz · Spot $29.80/oz';
  var costEl = document.getElementById('silverCost');
  if (costEl) costEl.textContent = '$' + amt.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
}

function txSubmitSilver() {
  var amt = parseFloat(document.getElementById('silverAmount').value)||0;
  if (amt <= 0) { document.getElementById('silverAmount').focus(); return; }
  var oz = amt / 29.80;
  var wallet = txGetSelectedWallet('txpage-silver');
  txShowConfirm([
    ['Asset', 'Allocated Silver (XAG)'],
    ['Amount (USD)', '$' + amt.toLocaleString()],
    ['Troy oz', oz.toFixed(3) + ' oz'],
    ['Spot price', '$29.80/oz'],
    ['Debit wallet', wallet],
    ['Storage', 'Secure Vault'],
    ['Settlement', 'T+2']
  ]);
}

function txCalcGold(usd) {
  var amt = parseFloat(usd)||0;
  var oz = amt / 3142;
  var el = document.getElementById('goldEquiv');
  if (el) el.textContent = '≈ ' + oz.toFixed(3) + ' troy oz · Spot $3,142/oz';
  var costEl = document.getElementById('goldCost');
  if (costEl) costEl.textContent = '$' + amt.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
}

function txCalcTBill(usd) {
  var amt = parseFloat(usd)||0;
  var income = amt * 0.0518 * (90/365);
  var incEl = document.getElementById('tbillIncome');
  if (incEl) incEl.textContent = '$' + income.toFixed(2);
  var costEl = document.getElementById('tbillCost');
  if (costEl) costEl.textContent = '$' + amt.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
}

// Submission handlers
var monroeTerm = 1;
function txMonroeTerm(years) {
  monroeTerm = years;
  document.querySelectorAll('.monroe-term-btn').forEach(function(b) {
    b.style.background = 'white';
    b.style.color = 'var(--ink)';
    b.style.borderColor = 'var(--cream-dark)';
  });
  var active = document.getElementById('monroe-term-' + years);
  if (active) { active.style.background = 'var(--green)'; active.style.color = 'white'; active.style.borderColor = 'var(--green)'; }
  txCalcMonroe();
}
function txCalcMonroe() {
  var amt = parseFloat(document.getElementById('monroeAmount').value)||0;
  var rate = 0.045;
  var interest = amt * rate * monroeTerm;
  var total = amt + interest;
  var termLabel = monroeTerm === 1 ? '1 year' : monroeTerm + ' years';
  var fmt = function(n) { return '$' + n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); };
  var el = function(id) { return document.getElementById(id); };
  if (el('monroePrincipal')) el('monroePrincipal').textContent = fmt(amt);
  if (el('monroeInterest'))  el('monroeInterest').textContent  = fmt(interest);
  if (el('monroeTotal'))     el('monroeTotal').textContent     = fmt(total);
  if (el('monroeTermLabel')) el('monroeTermLabel').textContent = termLabel;
}
function txSubmitMonroe() {
  var amt = parseFloat(document.getElementById('monroeAmount').value)||0;
  if (amt < 5000) { document.getElementById('monroeAmount').focus(); return; }
  var rate = 0.045;
  var interest = amt * rate * monroeTerm;
  var total = amt + interest;
  var termLabel = monroeTerm === 1 ? '1 year' : monroeTerm + ' years';
  var maturityDate = new Date();
  maturityDate.setFullYear(maturityDate.getFullYear() + monroeTerm);
  var matStr = maturityDate.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
  var wallet = txGetSelectedWallet('txpage-unit-a');
  var fmt = function(n) { return '$' + n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); };
  txShowConfirm([
    ['Property',          'Modern Stylish Home — San Jose, CA'],
    ['Structure',         'Real estate investment · SPV'],
    ['Principal',         fmt(amt)],
    ['Interest rate',     '4.5% per annum'],
    ['Term',              termLabel],
    ['Total interest',    fmt(interest)],
    ['Total at maturity', fmt(total)],
    ['Maturity date',     matStr],
    ['Debit wallet',      wallet]
  ]);
}
function txShowConfirm(rows) {
  var detail = document.getElementById('txConfirmDetail');
  if (detail) {
    detail.innerHTML = rows.map(function(r) {
      return '<div class="tx-confirm-detail-row"><span class="k">' + r[0] + '</span><span class="v">' + r[1] + '</span></div>';
    }).join('');
  }
  document.getElementById('txConfirmOverlay').classList.add('open');
}

function txSubmit(ticker, name, inputId, price) {
  var qty = parseFloat(document.getElementById(inputId).value)||0;
  if (qty <= 0) { document.getElementById(inputId).focus(); return; }
  var cost = qty * price;
  var pageId = 'txpage-' + ticker.toLowerCase();
  var wallet = txGetSelectedWallet(pageId);
  txShowConfirm([
    ['Asset', name + ' (' + ticker + ')'],
    ['Shares', qty],
    ['Price per share', '$' + price.toLocaleString()],
    ['Estimated cost', '$' + cost.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})],
    ['Order type', 'Market order'],
    ['Debit wallet', wallet],
    ['Routed to', 'Investment Account']
  ]);
}

function txSubmitCrypto(ticker, name, inputId) {
  var amt = parseFloat(document.getElementById(inputId).value)||0;
  if (amt <= 0) { document.getElementById(inputId).focus(); return; }
  var btc = amt / 93407;
  var wallet = txGetSelectedWallet('txpage-btc');
  txShowConfirm([
    ['Asset', name + ' (' + ticker + ')'],
    ['Amount (USD)', '$' + amt.toLocaleString()],
    ['Amount (BTC)', btc.toFixed(6) + ' BTC'],
    ['Market price', '$93,407'],
    ['Debit wallet', wallet],
    ['Trading via', 'Crypto Account'],
    ['Custody', 'Secure Cold Custody']
  ]);
}

function txSubmitGold() {
  var amt = parseFloat(document.getElementById('goldAmount').value)||0;
  if (amt <= 0) { document.getElementById('goldAmount').focus(); return; }
  var oz = amt / 3142;
  var wallet = txGetSelectedWallet('txpage-gold');
  txShowConfirm([
    ['Asset', 'Allocated Gold (IAU)'],
    ['Amount (USD)', '$' + amt.toLocaleString()],
    ['Troy oz', oz.toFixed(3) + ' oz'],
    ['Spot price', '$3,142/oz'],
    ['Debit wallet', wallet],
    ['Storage', 'Secure Vault'],
    ['Settlement', 'T+2']
  ]);
}

function txSubmitTBill() {
  var amt = parseFloat(document.getElementById('tbillAmount').value)||0;
  if (amt < 1000) { document.getElementById('tbillAmount').focus(); return; }
  var income = amt * 0.0518 * (90/365);
  var wallet = txGetSelectedWallet('txpage-tbill');
  txShowConfirm([
    ['Asset', '90-Day Treasury Bill'],
    ['Principal', '$' + amt.toLocaleString()],
    ['Yield', '5.18% annualised'],
    ['Projected income (90d)', '$' + income.toFixed(2)],
    ['Debit wallet', wallet],
    ['Auto-roll', 'Enabled'],
    ['Custodian', 'Cash Account']
  ]);
}


function txCalcPrivate(id) {
  var amt = parseFloat(document.getElementById(id + 'Amount').value)||0;
  var costEl = document.getElementById(id + 'Cost');
  if (costEl) costEl.textContent = '$' + amt.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
}
function txSubmitPrivate(id, name, location) {
  var amt = parseFloat(document.getElementById(id + 'Amount').value)||0;
  if (amt < 25000) { document.getElementById(id + 'Amount').focus(); return; }
  var wallet = txGetSelectedWallet('txpage-' + id);
  txShowConfirm([
    ['Company',    name + ' · ' + location],
    ['Structure',  'Private market · SPV'],
    ['Amount',     '$' + amt.toLocaleString()],
    ['Stage',      'Growth'],
    ['Valuation',  'Private'],
    ['Debit wallet', wallet]
  ]);
}


// ── Search Dropdown ────────────────────────────────────────────────────────
var SEARCH_DATA = [
  // ── Holdings / Assets ──────────────────────────────────────────────────
  { type:'asset', id:'spy',    icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'S&P 500 (SPY)', sub:'US Large Cap ETF · Brokerage · 34 shares',
    val:'$284,000', chg:'▲ 12.1%', chgUp:true,
    tags:['spy','s&p','s&p 500','etf','stocks','equities','index','large cap'],
    action: function(){ openAssetPanel('spy'); } },
  { type:'asset', id:'aapl',   icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Apple (AAPL)', sub:'Technology · NASDAQ · 15 shares',
    val:'$107,220', chg:'▲ 18.4%', chgUp:true,
    tags:['aapl','apple','nasdaq','tech','technology','stocks','equities'],
    action: function(){ openAssetPanel('aapl'); } },
  { type:'asset', id:'btc',    icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="15" y2="14"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Bitcoin (BTC)', sub:'Cryptocurrency · Secure Custody',
    val:'$89,250', chg:'▲ 41.2%', chgUp:true,
    tags:['btc','bitcoin','crypto','cryptocurrency','digital asset'],
    action: function(){ openAssetPanel('btc'); } },
  { type:'asset', id:'gold',   icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 6.5 19 17.5 12 22 5 17.5 5 6.5"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Allocated Gold (IAU)', sub:'Precious Metals · Secure Vault · 187 oz',
    val:'$218,000', chg:'▲ 7.1%', chgUp:true,
    tags:['gold','iau','precious metals','metals','bullion'],
    action: function(){ openAssetPanel('gold'); } },
  { type:'asset', id:'silver', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 6.5 19 17.5 12 22 5 17.5 5 6.5"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Allocated Silver (XAG)', sub:'Precious Metals · Secure Vault · 1,000 oz',
    val:'$29,800', chg:'▲ 4.1%', chgUp:true,
    tags:['silver','xag','precious metals','metals'],
    action: function(){ openAssetPanel('silver'); } },
  { type:'asset', id:'tbill',  icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'T-Bill 90-Day', sub:'US Treasury · Cash Account · Auto-roll',
    val:'$318,000', chg:'5.18% ann.', chgUp:true,
    tags:['tbill','t-bill','treasury','government','bills','cash','fixed income'],
    action: function(){ openAssetPanel('tbill'); } },
  // ── Opportunities ──────────────────────────────────────────────────────
  { type:'opp', id:'unit-a',   icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Modern Stylish Home', sub:'Entire Rental Unit · San Jose, CA · ✦ Open',
    val:'4.5% p.a.', chg:'Min $5,000', chgUp:true,
    tags:['airbnb','rental','real estate','san jose','property','modern','stylish','unit a'],
    action: function(){ openTransactionPage('unit-a'); } },
  { type:'opp', id:'unit-b',   icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Private Room 1 — Cozy Stay', sub:'Private Room · San Jose, CA · Closed',
    val:'—', chg:'Min $1,000', chgUp:false,
    tags:['airbnb','rental','real estate','private room','cozy','unit b'],
    action: function(){ openTransactionPage('unit-b'); } },
  { type:'opp', id:'unit-c',   icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Private Room — Elegant Stay', sub:'Private Room · San Jose, CA · Closed',
    val:'—', chg:'Min $1,000', chgUp:false,
    tags:['airbnb','rental','real estate','private room','elegant','unit c'],
    action: function(){ openTransactionPage('unit-c'); } },
  { type:'opp', id:'unit-d',   icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Private Room 2 — Modern Stay', sub:'Private Room · San Jose, CA · Closed',
    val:'—', chg:'Min $1,000', chgUp:false,
    tags:['airbnb','rental','real estate','private room','modern','unit d'],
    action: function(){ openTransactionPage('unit-d'); } },
  { type:'opp', id:'bridge',   icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'60-Day Treasury Bill', sub:'US Treasury · 5.25% annualised yield',
    val:'5.25%', chg:'Min $1,000', chgUp:true,
    tags:['tbill','t-bill','treasury','60 day','60-day','bills','government','fixed income','cash'],
    action: function(){ openTransactionPage('bridge'); } },
  { type:'opp', id:'termii',   icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Termii', sub:'Private Markets · AI Payments · San Jose, CA',
    val:'$5M ARR', chg:'Min $25,000', chgUp:true,
    tags:['termii','startup','private','ai','payments','otp','fintech','venture'],
    action: function(){ openTransactionPage('termii'); } },
  { type:'opp', id:'rayda',    icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Rayda', sub:'Private Markets · IT Asset Management · Delaware',
    val:'$5.4M ARR', chg:'Min $25,000', chgUp:true,
    tags:['rayda','startup','private','it','equipment','saas','b2b','venture'],
    action: function(){ openTransactionPage('rayda'); } },
  // ── News / Info ────────────────────────────────────────────────────────
  { type:'news', id:'n1', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Fed Signals Rate Cuts May Come Later', sub:"Barron's · S&P 500 ▼ 0.25%",
    val:'', chg:'', chgUp:false,
    tags:['fed','federal reserve','rates','interest','rate cut','macro','inflation','spy','bonds'],
    action: function(){ openNewsModal('meta'); } },
  { type:'news', id:'n2', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Bitcoin Surpasses $93,000 on Institutional Demand', sub:'Bloomberg · BTC ▲ 3.33%',
    val:'', chg:'', chgUp:true,
    tags:['bitcoin','btc','crypto','institutional','$93000','news'],
    action: function(){ openNewsModal('btc'); } },
  { type:'news', id:'n3', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Gold Hits All-Time High Above $3,140', sub:'WSJ · Gold ▲ 0.52%',
    val:'', chg:'', chgUp:true,
    tags:['gold','all time high','ath','safe haven','tariff','inflation','metals'],
    action: function(){ openNewsModal('gold'); } },
  // ── Pages / Navigation ─────────────────────────────────────────────────
  { type:'page', id:'portfolio', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Portfolio', sub:'View all holdings and performance',
    val:'', chg:'', chgUp:false,
    tags:['portfolio','holdings','performance','positions','returns'],
    action: function(){ dbNav('portfolio'); } },
  { type:'page', id:'opps', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Opportunities', sub:'Curated deals and investments',
    val:'', chg:'', chgUp:false,
    tags:['opportunities','deals','invest','new deals'],
    action: function(){ dbNav('opps'); } },
  { type:'page', id:'vault', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Vault', sub:'Precious metals and crypto custody',
    val:'', chg:'', chgUp:false,
    tags:['vault','custody','secure','gold','silver','crypto','cold storage'],
    action: function(){ dbNav('vault'); } },
  { type:'page', id:'entities', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Entities', sub:'Manage your LLCs and investment structures',
    val:'', chg:'', chgUp:false,
    tags:['entities','llc','company','formation','legal','structure'],
    action: function(){ dbNav('entities'); } },
  { type:'page', id:'tax', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)',
    name:'Tax Documents', sub:'1099s, K-1s, filing deadlines and reporting guidance',
    val:'', chg:'', chgUp:false,
    tags:['tax','1099','k-1','schedule','filing','irs','deadline','documents','forms','k1','1099-b','1099-int','1099-da'],
    action: function(){ dbNav('tax'); } },
];

var dbSearchFocusIdx = -1;

function dbSearchQuery(val) {
  var q = val.trim().toLowerCase();
  var dd = document.getElementById('dbSearchDropdown');
  if (!q) { dd.classList.remove('open'); dd.innerHTML=''; dbSearchFocusIdx=-1; return; }

  var results = SEARCH_DATA.filter(function(d) {
    return d.tags.some(function(t){ return t.indexOf(q) > -1; }) ||
           d.name.toLowerCase().indexOf(q) > -1 ||
           d.sub.toLowerCase().indexOf(q) > -1;
  }).slice(0, 12);

  if (!results.length) {
    dd.innerHTML = '<div class="db-search-empty">No results for "'+val+'"</div>';
    dd.classList.add('open'); return;
  }

  // Group by type
  var groups = { asset:[], opp:[], news:[], page:[] };
  var labels = { asset:'Your Assets', opp:'Opportunities', news:'Market News', page:'Pages' };
  results.forEach(function(r){ groups[r.type].push(r); });

  var html = '';
  ['asset','opp','news','page'].forEach(function(type) {
    if (!groups[type].length) return;
    html += '<div class="db-search-section-label">'+labels[type]+'</div>';
    groups[type].forEach(function(r, i) {
      html += '<div class="db-search-item" data-search-id="'+r.id+'" onclick="dbSearchSelect(\''+r.id+'\')">';
      html += '<div class="db-search-item-icon" style="background:'+r.iconBg+';color:'+r.iconColor+';">'+r.icon+'</div>';
      html += '<div style="flex:1;min-width:0;">';
      html += '<div class="db-search-item-name">'+r.name+'</div>';
      html += '<div class="db-search-item-sub">'+r.sub+'</div>';
      html += '</div>';
      if (r.val || r.chg) {
        html += '<div class="db-search-item-right">';
        if (r.val) html += '<div class="db-search-item-val">'+r.val+'</div>';
        if (r.chg) html += '<div class="db-search-item-chg" style="color:'+(r.chgUp?'var(--green)':'var(--ink-muted)')+';">'+r.chg+'</div>';
        html += '</div>';
      }
      html += '</div>';
    });
    html += '<div class="db-search-divider"></div>';
  });

  dd.innerHTML = html;
  dd.classList.add('open');
  dbSearchFocusIdx = -1;
}

function dbSearchSelect(id) {
  var item = SEARCH_DATA.find(function(d){ return d.id === id; });
  if (item) {
    item.action();
    document.getElementById('dbSearchDropdown').classList.remove('open');
    document.getElementById('dbSearchInput').value = '';
    dbSearchFocusIdx = -1;
  }
}

function dbSearchKeyNav(e) {
  var dd = document.getElementById('dbSearchDropdown');
  var items = dd.querySelectorAll('.db-search-item');
  if (!items.length) return;
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    dbSearchFocusIdx = Math.min(dbSearchFocusIdx + 1, items.length - 1);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    dbSearchFocusIdx = Math.max(dbSearchFocusIdx - 1, 0);
  } else if (e.key === 'Enter' && dbSearchFocusIdx > -1) {
    e.preventDefault();
    var id = items[dbSearchFocusIdx].dataset.searchId;
    if (id) dbSearchSelect(id);
    return;
  } else if (e.key === 'Escape') {
    dd.classList.remove('open');
    document.getElementById('dbSearchInput').blur();
    return;
  }
  items.forEach(function(el, i){ el.classList.toggle('focused', i === dbSearchFocusIdx); });
  if (dbSearchFocusIdx > -1) items[dbSearchFocusIdx].scrollIntoView({ block:'nearest' });
}

// Close dropdown on outside click
document.addEventListener('click', function(e) {
  var wrap = document.querySelector('.db-search');
  if (wrap && !wrap.contains(e.target)) {
    var dd = document.getElementById('dbSearchDropdown');
    if (dd) dd.classList.remove('open');
  }
});


var ENT_DATA = {
  'individual': {
    title: 'James Adeyemi', sub: 'Individual Account · Accredited Investor',
    badge: { text: 'Verified', bg: 'var(--green-pale)', color: 'var(--green)' },
    sections: [
      { title: 'Account Information', rows: [['Entity type','Individual'],['Investor status','Accredited Investor'],['Tax residency','United States'],['SSN / TIN','•••-••-XXXX'],['Date of birth','On file'],['Citizenship','US Citizen']] },
      { title: 'KYC & Verification', rows: [['Identity verification','✓ Verified — Apr 2024'],['Accreditation','✓ Income-based — $250K+/yr'],['AML check','✓ Cleared'],['Last reviewed','Jan 2026']] },
      { title: 'Contact & Address', rows: [['Email','james@adeyemi.com'],['Phone','+1 (415) 555-0123'],['Address','6203 San Ignacio Ave, San Jose, CA']] }
    ],
    docs: [{ name:'Government-Issued ID', date:'Verified Apr 2024' },{ name:'Accreditation Letter', date:'Issued Jan 2025' },{ name:'W-9 Tax Form', date:'Filed Jan 2026' },{ name:'Investor Agreement', date:'Signed Mar 2024' }],
    actions: [{ label:'Edit profile', style:'secondary', fn:'closeEntityPanel' },{ label:'Download documents', style:'primary', fn:'closeEntityPanel' }]
  },
  'capital-llc': {
    title: 'Adeyemi Capital LLC', sub: 'Delaware LLC · EIN: 84-XXXXXXX · Formed 2021',
    badge: { text: 'Active', bg: 'var(--blue-pale)', color: 'var(--blue)' },
    sections: [
      { title: 'Entity Information', rows: [['Entity type','LLC'],['State','Delaware'],['Formed','2021'],['EIN','84-XXXXXXX'],['Structure','Member-managed'],['Registered agent','Aidi Legal Services']] },
      { title: 'Ownership', rows: [['Primary member','James Adeyemi — 70%'],['Secondary member','Aisha Adeyemi — 30%'],['Owners on file','2']] },
      { title: 'Compliance', rows: [['Annual report','✓ Filed — Jan 2026'],['Franchise tax','✓ Paid — $300'],['Operating agreement','✓ On file'],['Bank account','Cash Account — Active'],['Last reviewed','Jan 2026']] }
    ],
    docs: [{ name:'Certificate of Formation', date:'Delaware · 2021' },{ name:'Operating Agreement', date:'Signed 2021' },{ name:'EIN Assignment Letter', date:'IRS · 2021' },{ name:'Annual Report 2025', date:'Filed Jan 2026' },{ name:'Franchise Tax Receipt', date:'Paid Jan 2026' },{ name:'Bank Account Resolution', date:'Cash Account · 2022' }],
    actions: [{ label:'Edit entity', style:'secondary', fn:'closeEntityPanel' },{ label:'View documents', style:'primary', fn:'closeEntityPanel' }]
  },
  'family-llc': {
    title: 'Adeyemi Family Office LLC', sub: 'Wyoming LLC · Formation in progress',
    badge: { text: 'Forming', bg: 'var(--gold-pale)', color: '#8a6520' },
    sections: [
      { title: 'Formation Details', rows: [['Entity type','LLC'],['State','Wyoming'],['Purpose','Family Office'],['Filed','Apr 8, 2026'],['Est. completion','Apr 10, 2026'],['Filing reference','AIDI-WY-2026-004']] },
      { title: 'Fee Summary', rows: [['State filing fee','$100 — Paid'],['Aidi service fee','$500 — Paid'],['Registered agent','$150 — Paid'],['Total paid','$750']] }
    ],
    docs: [{ name:'Formation Receipt', date:'Apr 8, 2026' },{ name:'Draft Articles of Organization', date:'Pending state filing' }],
    track: [
      { label:'Formation submitted', desc:'Articles of Organization submitted to Wyoming Secretary of State.', date:'Apr 8, 2026 · 2:14 PM', status:'done' },
      { label:'Under state review', desc:'Wyoming SOS office is reviewing the filing. Typical turnaround is 1–3 business days.', date:'Apr 8, 2026 · 4:00 PM', status:'active' },
      { label:'Certificate issued', desc:'Wyoming issues Certificate of Organization upon approval.', date:'Est. Apr 10, 2026', status:'pending' },
      { label:'EIN obtained', desc:'Aidi files SS-4 with IRS to obtain Employer Identification Number.', date:'Est. Apr 11, 2026', status:'pending' },
      { label:'Documents delivered', desc:'Formation package — Certificate, Operating Agreement, EIN — delivered to your Aidi account.', date:'Est. Apr 12, 2026', status:'pending' }
    ],
    actions: [{ label:'Contact support', style:'secondary', fn:'closeEntityPanel' },{ label:'View receipt', style:'primary', fn:'closeEntityPanel' }]
  }
};

function openEntityPanel(id) {
  var d = ENT_DATA[id]; if (!d) return;
  document.getElementById('entPanelTitle').textContent = d.title;
  document.getElementById('entPanelSub').textContent = d.sub;
  var body = '<div style="margin-bottom:16px;"><span class="ent-panel-badge" style="background:' + d.badge.bg + ';color:' + d.badge.color + ';">' + d.badge.text + '</span></div>';
  if (d.track) {
    body += '<div class="ent-panel-section"><div class="ent-panel-section-title">Formation Status</div>';
    d.track.forEach(function(s) {
      var icon = s.status==='done'?'✓':s.status==='active'?'●':'○';
      body += '<div class="ent-track-step"><div class="ent-track-dot '+s.status+'">'+icon+'</div><div class="ent-track-body"><div class="title">'+s.label+'</div><div class="desc">'+s.desc+'</div><div class="date">'+s.date+'</div></div></div>';
    });
    body += '</div>';
  }
  d.sections.forEach(function(sec) {
    body += '<div class="ent-panel-section"><div class="ent-panel-section-title">'+sec.title+'</div>';
    sec.rows.forEach(function(r) { body += '<div class="ent-panel-row"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>'; });
    body += '</div>';
  });
  if (d.docs) {
    body += '<div class="ent-panel-section"><div class="ent-panel-section-title">Documents</div>';
    d.docs.forEach(function(doc) {
      body += '<div class="ent-panel-doc-row"><div class="ent-panel-doc-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="ent-panel-doc-name">'+doc.name+'</div><div class="ent-panel-doc-date">'+doc.date+'</div></div><svg style="margin-left:auto;color:var(--blue);" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></div>';
    });
    body += '</div>';
  }
  document.getElementById('entPanelBody').innerHTML = body;
  var actions = '';
  d.actions.forEach(function(a) { actions += '<button class="ent-panel-btn '+a.style+'" onclick="'+a.fn+'()">'+a.label+'</button>'; });
  document.getElementById('entPanelActions').innerHTML = actions;
  document.getElementById('entOverlay').classList.add('open');
  document.getElementById('entPanel').classList.add('open');
}
function openEntityDocs(id) { openEntityPanel(id); }
function openEntityTrack(id) { openEntityPanel(id); }
function closeEntityPanel() {
  document.getElementById('entOverlay').classList.remove('open');
  document.getElementById('entPanel').classList.remove('open');
}

// ── Entity Formation Wizard ────────────────────────────────────────────────
var entWizCurrentStep = 1;
var entWizSelectedType = '';
var STATE_FEES = { Delaware:90, Wyoming:100, Nevada:75, California:70, 'New York':200, Texas:300, Florida:125 };

function openEntityWizard() {
  entWizCurrentStep = 1; entWizSelectedType = '';
  document.querySelectorAll('.ent-wiz-type-card').forEach(function(c){c.classList.remove('selected');});
  ['entWizName','entWizEmail','entWizOwner2'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
  var o1p=document.getElementById('entWizOwner1Pct'); if(o1p) o1p.value='100';
  var st=document.getElementById('entWizState'); if(st) st.value='Delaware';
  var pu=document.getElementById('entWizPurpose'); if(pu) pu.value='';
  document.getElementById('entWizManagerField').style.display='none';
  entWizRenderProgress(); entWizShowStep(1);
  document.getElementById('entWizOverlay').classList.add('open');
}
function closeEntityWizard() { document.getElementById('entWizOverlay').classList.remove('open'); }
function entSelectType(type) {
  entWizSelectedType = type;
  document.querySelectorAll('.ent-wiz-type-card').forEach(function(c){c.classList.remove('selected');});
  var id = 'type'+type.replace('-',''); var el=document.getElementById(id); if(el) el.classList.add('selected');
  document.getElementById('entWizManagerField').style.display = type==='LLC'?'block':'none';
  document.getElementById('entWizStep2Label').textContent = 'Step 2 of 4 — '+type+' Details';
  document.getElementById('entWizStep2Title').textContent = 'Name and register your '+type;
  document.getElementById('entWizName').placeholder = type==='LLC'?'e.g. Adeyemi Ventures LLC':'e.g. Adeyemi Corp Inc.';
}
function entWizRenderProgress() {
  var html='';
  for(var i=1;i<=4;i++) html+='<div class="ent-wiz-progress-dot'+(i<=entWizCurrentStep?' done':'')+'"></div>';
  document.getElementById('entWizProgress').innerHTML=html;
}
function entWizShowStep(step) {
  for(var i=1;i<=4;i++){var el=document.getElementById('entWizStep'+i);if(el)el.classList.toggle('active',i===step);}
  document.getElementById('entWizBack').style.display = step>1?'block':'none';
  document.getElementById('entWizNext').textContent = step===4?'Submit formation →':'Continue →';
  document.getElementById('entWizTitle').textContent = step===4?'Review & Submit':'Form a New Entity';
}
function entWizNext() {
  if(entWizCurrentStep===1 && !entWizSelectedType){alert('Please select an entity type.');return;}
  if(entWizCurrentStep===2){
    if(!document.getElementById('entWizName').value.trim()){alert('Please enter an entity name.');return;}
    if(!document.getElementById('entWizState').value){alert('Please select a state.');return;}
    if(!document.getElementById('entWizPurpose').value){alert('Please select a purpose.');return;}
    if(!document.getElementById('entWizEmail').value.trim()){alert('Please enter an email.');return;}
  }
  if(entWizCurrentStep===4){
    closeEntityWizard();
    txShowConfirm([
      ['Entity name',document.getElementById('entWizName').value],
      ['Type',entWizSelectedType],
      ['State',document.getElementById('entWizState').value],
      ['Purpose',document.getElementById('entWizPurpose').value],
      ['Primary member',document.getElementById('entWizOwner1').value],
      ['Total fee',document.getElementById('entWizTotalFee').textContent],
      ['Est. completion','3–5 business days'],
      ['Debit wallet','Cash Wallet']
    ]);
    return;
  }
  if(entWizCurrentStep===3){entWizBuildSummary();}
  entWizCurrentStep++;
  entWizRenderProgress(); entWizShowStep(entWizCurrentStep);
}
function entWizPrev() {
  if(entWizCurrentStep>1){entWizCurrentStep--;entWizRenderProgress();entWizShowStep(entWizCurrentStep);}
}
function entWizBuildSummary() {
  var state=document.getElementById('entWizState').value||'Delaware';
  var sf=STATE_FEES[state]||90; var total=sf+500+150;
  document.getElementById('entWizStateFee').textContent='$'+sf;
  document.getElementById('entWizTotalFee').textContent='$'+total.toLocaleString();
  var rows=[['Entity type',entWizSelectedType],['Entity name',document.getElementById('entWizName').value],['State',state],['Purpose',document.getElementById('entWizPurpose').value],['Email',document.getElementById('entWizEmail').value],['Primary member',document.getElementById('entWizOwner1').value+' — '+document.getElementById('entWizOwner1Pct').value+'%']];
  var o2=document.getElementById('entWizOwner2').value; if(o2) rows.push(['Additional member',o2]);
  var html=''; rows.forEach(function(r){html+='<div class="ent-wiz-summary-row"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>';});
  document.getElementById('entWizSummary').innerHTML=html;
}

// ── Wallet Transfer Modal ─────────────────────────────────────────────────
var wtSelectedRoute = 0;
var WT_ROUTES = {
  1: { name:'Cash → Investment Account', from:'Cash Wallet', to:'Investment Account', available:318000, settle:'1–2 business days', hint:'Available in cash wallet: $318,000' },
  2: { name:'Cash → Crypto Account',    from:'Cash Wallet', to:'Crypto Account', available:318000, settle:'1–2 business days', hint:'Available in cash wallet: $318,000' },
  3: { name:'Investment Account → Cash', from:'Investment Account', to:'Cash Wallet', available:684200, settle:'1–2 business days', hint:'Available in investment account: $684,200' },
  4: { name:'Crypto Account → Cash',    from:'Crypto Account', to:'Cash Wallet', available:127500, settle:'1–3 business days', hint:'Available in crypto account: $127,500' },
};
function openWalletTransfer() {
  wtSelectedRoute = 0;
  document.querySelectorAll('.wt-route-card').forEach(function(c){c.classList.remove('selected');});
  document.getElementById('wtForm').classList.remove('visible');
  document.getElementById('wtSummary').style.display = 'none';
  document.getElementById('wtAmount').value = '';
  document.getElementById('wtSubmitBtn').disabled = true;
  document.getElementById('wtSubmitBtn').style.opacity = '.45';
  document.getElementById('wtOverlay').classList.add('open');
  document.getElementById('wtPanel').classList.add('open');
}
function closeWalletTransfer() {
  document.getElementById('wtOverlay').classList.remove('open');
  document.getElementById('wtPanel').classList.remove('open');
}
function wtSelectRoute(n) {
  wtSelectedRoute = n;
  document.querySelectorAll('.wt-route-card').forEach(function(c){c.classList.remove('selected');});
  document.getElementById('wt-route-'+n).classList.add('selected');
  var r = WT_ROUTES[n];
  document.getElementById('wtFormHint').textContent = r.hint;
  document.getElementById('wtAmount').value = '';
  document.getElementById('wtSummary').style.display = 'none';
  document.getElementById('wtSubmitBtn').disabled = true;
  document.getElementById('wtSubmitBtn').style.opacity = '.45';
  document.getElementById('wtForm').classList.add('visible');
  document.getElementById('wtAmount').focus();
}
function wtCalc() {
  var amt = parseFloat(document.getElementById('wtAmount').value)||0;
  var r = WT_ROUTES[wtSelectedRoute];
  if (!r || amt <= 0) {
    document.getElementById('wtSummary').style.display = 'none';
    document.getElementById('wtSubmitBtn').disabled = true;
    document.getElementById('wtSubmitBtn').style.opacity = '.45';
    return;
  }
  var fmt = function(n){return '$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});};
  document.getElementById('wtSumFrom').textContent    = r.from;
  document.getElementById('wtSumTo').textContent      = r.to;
  document.getElementById('wtSumAmt').textContent     = fmt(amt);
  document.getElementById('wtSumSettle').textContent  = r.settle;
  document.getElementById('wtSummary').style.display  = 'block';
  var ok = amt > 0 && amt <= r.available;
  document.getElementById('wtSubmitBtn').disabled     = !ok;
  document.getElementById('wtSubmitBtn').style.opacity = ok ? '1' : '.45';
  if (amt > r.available) {
    document.getElementById('wtFormHint').textContent = '⚠ Amount exceeds available balance.';
    document.getElementById('wtFormHint').style.color = '#DC2626';
  } else {
    document.getElementById('wtFormHint').textContent = WT_ROUTES[wtSelectedRoute].hint;
    document.getElementById('wtFormHint').style.color = '';
  }
}
function wtSubmit() {
  var amt = parseFloat(document.getElementById('wtAmount').value)||0;
  var r = WT_ROUTES[wtSelectedRoute];
  if (!r || amt <= 0 || amt > r.available) return;
  var fmt = function(n){return '$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});};
  closeWalletTransfer();
  txShowConfirm([
    ['Transfer',    r.name],
    ['From',        r.from],
    ['To',          r.to],
    ['Amount',      fmt(amt)],
    ['Settlement',  r.settle],
    ['Reference',   'AIDI-TRF-' + Date.now().toString().slice(-6)]
  ]);
}

// ── Opportunity & Portfolio Filters ─────────────────────────────────────
function oppFilter(cat, pill) {
  document.querySelectorAll('.opp-filter-pill').forEach(function(p) {
    p.style.background = '';
    p.style.color = 'var(--ink-soft)';
    p.style.border = '1px solid var(--cream-dark)';
  });
  pill.style.background = 'var(--ink)';
  pill.style.color = 'white';
  pill.style.border = '1px solid var(--ink)';
  document.querySelectorAll('.opp-grid-db .opp-card-db').forEach(function(card) {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
}
function portFilter(cat, pill) {
  document.querySelectorAll('.port-filter-pill').forEach(function(p) {
    p.style.background = '';
    p.style.color = 'var(--ink-soft)';
    p.style.border = '1px solid var(--cream-dark)';
  });
  pill.style.background = 'var(--ink)';
  pill.style.color = 'white';
  pill.style.border = '1px solid var(--ink)';
  document.querySelectorAll('.asset-list .asset-row[data-cat]').forEach(function(row) {
    row.style.display = (cat === 'all' || row.dataset.cat === cat) ? '' : 'none';
  });
}

var NEWS_DATA = {
  meta: {
    source: "Barron's", time: "11m ago",
    headline: "U.S. Court Rules That Meta Isn't a Monopoly",
    ticker: "META", change: "▼ 0.44%", changeUp: false,
    img: "linear-gradient(135deg,#c8d0d8,#5a6a7a)",
    summary: "A federal judge has ruled that Meta Platforms does not constitute an illegal monopoly in the social media market, dismissing a key antitrust complaint brought by the Federal Trade Commission. The court found insufficient evidence to support claims that Meta maintained monopoly power through anti-competitive acquisitions of Instagram and WhatsApp. The ruling is a significant legal victory for the company, though the FTC has indicated it may appeal the decision. Meta shares fell modestly as investors digested the implications for future regulatory scrutiny.",
    elia: "META represents 0% of your current portfolio. This ruling reduces near-term regulatory risk for large-cap tech. If you hold indirect exposure through SPY or other broad ETFs, this decision is broadly positive for the technology weighting in those funds.",
    facts: [["Court","US Federal District Court"],["Ruling","Dismisses FTC monopoly case"],["Companies","Meta, Instagram, WhatsApp"],["Implication","Reduced breakup risk"],["Appeal likely","Yes, FTC signalled"],["Sector impact","Broad tech positive"]],
    url: "https://www.barrons.com"
  },
  lmt: {
    source: "Reuters", time: "17m ago",
    headline: "Trump to Sell F-35s to Saudi Arabia. Why Lockheed Stock Is Rising.",
    ticker: "LMT", change: "▲ 0.65%", changeUp: true,
    img: "linear-gradient(135deg,#8fa8bc,#2a3a4a)",
    summary: "The Trump administration has approved the sale of F-35 stealth fighter jets to Saudi Arabia in a multi-billion dollar defence deal, marking a significant shift in US arms policy toward the Gulf state. The deal, valued at approximately $20 billion, includes aircraft, weapons systems, and a decade-long maintenance contract. Lockheed Martin shares rose on the news as analysts upgraded revenue forecasts for the company's aeronautics division. The announcement comes amid broader US efforts to strengthen Gulf alliances in response to regional security concerns.",
    elia: "LMT is not currently in your portfolio. Defence sector exposure can serve as a hedge against geopolitical risk. Given your current allocation, this news has limited direct impact — however it reinforces the case for a modest defence sector position as part of a geopolitical risk strategy.",
    facts: [["Deal value","~$20B"],["Aircraft","F-35 stealth jets"],["Buyer","Saudi Arabia"],["Contract","Aircraft + maintenance"],["Duration","10+ years"],["Sector","Aerospace & Defence"]],
    url: "https://www.reuters.com"
  },
  fed: {
    source: "Financial Times", time: "23m ago",
    headline: "Fed Signals Rate Cuts May Come Later Than Expected as Inflation Remains Sticky",
    ticker: "S&P 500", change: "▼ 0.25%", changeUp: false,
    img: "linear-gradient(135deg,#d4c5b0,#7a6248)",
    summary: "Federal Reserve officials signalled at their latest meeting that interest rate cuts are unlikely to begin before the third quarter of 2025, citing persistently elevated core inflation and a resilient labour market. Minutes from the March FOMC meeting revealed that several policymakers expressed concern about cutting rates prematurely, warning that doing so could reignite inflationary pressures. Markets had previously priced in multiple rate cuts beginning in June. Yields on 2-year Treasuries rose sharply following the release, while equity indices fell broadly on the news.",
    elia: "This is directly relevant to your T-Bill position. Your $318K in 90-day T-Bills is benefiting from elevated rates — a delayed rate cut cycle means your 5.18% yield may persist longer than expected. This strengthens the case for holding your current T-Bill allocation or extending duration to 6-month instruments.",
    facts: [["FOMC stance","Rates on hold"],["Next cut expectation","Q3 2025 or later"],["Core inflation","Still above 3%"],["Labour market","Resilient"],["2Y Treasury yield","Rose ~12bps"],["Impact on T-Bills","Positive — yields stay higher"]],
    url: "https://www.ft.com"
  },
  btcnews: {
    source: "Bloomberg", time: "41m ago",
    headline: "Bitcoin Surpasses $93,000 as Institutional Demand Drives New Highs",
    ticker: "BTC", change: "▲ 3.33%", changeUp: true,
    img: "linear-gradient(135deg,#e8d5b5,#8a6820)",
    summary: "Bitcoin crossed $93,000 for the first time this week, driven by sustained institutional buying from asset managers and corporate treasury teams. BlackRock's spot Bitcoin ETF recorded its largest single-day inflow since launch, with over $1.2 billion entering the fund. Analysts point to growing adoption of Bitcoin as a treasury reserve asset, with several S&P 500 companies announcing allocations in Q1. On-chain data shows long-term holders continuing to accumulate, while exchange balances remain near multi-year lows — a historically bullish signal.",
    elia: "You hold 0.956 BTC valued at ~$89,250 — currently up 31.9% YTD. Today's price move adds approximately $2,970 to your position. Your crypto allocation at 4.8% remains within a healthy range for your Moderate risk profile. No action required, but consider setting a rebalance trigger if BTC grows above 8% of total portfolio.",
    facts: [["BTC price","$93,407"],["24h change","▲ +3.33%"],["BlackRock ETF inflow","$1.2B"],["On-chain","Low exchange balances"],["Long-term holders","Accumulating"],["Your position","0.956 BTC · $89,250"]],
    url: "https://www.bloomberg.com"
  },
  gold: {
    source: "WSJ", time: "1h ago",
    headline: "Gold Hits All-Time High Above $3,140 as Investors Seek Safe Haven Amid Tariff Uncertainty",
    ticker: "Gold", change: "▲ 0.52%", changeUp: true,
    img: "linear-gradient(135deg,#c8d5c0,#3a5a32)",
    summary: "Gold prices surged to a new all-time high above $3,140 per troy ounce on Wednesday, as investors rushed to safe-haven assets amid escalating tariff tensions between the United States and China. The precious metal has now gained over 15% year-to-date, outperforming all major asset classes. Central bank buying — particularly from China, India, and Turkey — continues to underpin demand. Analysts at Goldman Sachs raised their year-end gold price target to $3,400/oz, citing structural demand shifts and currency debasement concerns as long-term tailwinds.",
    elia: "Your 187 oz gold allocation is directly benefiting from today's move. At $3,142/oz, your position is worth approximately $587,554 at spot — up ~0.52% today. Your gold exposure at 11.8% of portfolio is well-positioned. Goldman's $3,400 target would add ~$48K to your position at current holdings. No action required.",
    facts: [["Spot price","$3,142/oz"],["YTD return","+15.2%"],["Goldman target","$3,400/oz"],["Central bank buying","Record pace"],["Your holding","187 oz · ~$587K"],["Key driver","Tariff uncertainty + CB demand"]],
    url: "https://www.wsj.com"
  }
};

function openNewsModal(id) {
  var d = NEWS_DATA[id];
  if (!d) return;

  document.getElementById('nmSource').textContent = d.source;
  document.getElementById('nmTime').textContent = d.time;
  document.getElementById('nmHeadline').textContent = d.headline;
  document.getElementById('nmTicker').textContent = d.ticker;
  var chg = document.getElementById('nmTickerChange');
  chg.textContent = d.change;
  chg.style.color = d.changeUp ? '#1A7A5E' : '#C0392B';
  document.getElementById('nmHeroImg').style.background = d.img;
  document.getElementById('nmSummary').textContent = d.summary;
  document.getElementById('nmElia').textContent = d.elia;

  var factsEl = document.getElementById('nmFacts');
  factsEl.innerHTML = d.facts.map(function(f) {
    return '<div class="nm-fact"><div class="k">' + f[0] + '</div><div class="v">' + f[1] + '</div></div>';
  }).join('');

  document.getElementById('nmReadMore').href = d.url;

  document.getElementById('newsModalOverlay').classList.add('open');
  document.getElementById('newsModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeNewsModal() {
  document.getElementById('newsModalOverlay').classList.remove('open');
  document.getElementById('newsModal').classList.remove('open');
  document.body.style.overflow = '';
}


// ── Topup Modal ──────────────────────────────────────────────────────────
var TOPUP_CONFIG = {
  cash:       { title:'Top Up Cash Balance',       sub:'Aidi Cash Wallet',          balLabel:'Cash Balance',       balVal:'$318,000', icon:'card' },
  investment: { title:'Fund Investment Account',   sub:'Investment Account',               balLabel:'Investment Account', balVal:'$684,200', icon:'invest' },
  crypto:     { title:'Allocate to Crypto',        sub:'Crypto Account',  balLabel:'Crypto Balance',     balVal:'$127,500', icon:'crypto' }
};

function openTopupModal(type) {
  var cfg = TOPUP_CONFIG[type];
  if (!cfg) return;

  // Set header
  document.getElementById('tumTitle').textContent = cfg.title;
  document.getElementById('tumSub').textContent   = cfg.sub;

  // Set balance strip
  document.getElementById('tumBalLabel').textContent = cfg.balLabel;
  document.getElementById('tumBalVal').textContent   = cfg.balVal;

  // Set icon based on type
  var icons = {
    card:    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
    invest:  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    crypto:  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>'
  };
  document.getElementById('tumBalIcon').innerHTML = icons[cfg.icon] || icons.card;

  // Show correct content panel
  ['tum-cash-content','tum-investment-content','tum-crypto-content'].forEach(function(id) {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById('tum-' + type + '-content').style.display = 'block';

  // Reset success messages
  ['cashCardSuccess','investSuccess','cryptoSuccess'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  // Open modal
  document.getElementById('topupOverlay').classList.add('open');
  document.getElementById('topupModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeTopupModal() {
  document.getElementById('topupOverlay').classList.remove('open');
  document.getElementById('topupModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Switch tabs inside cash modal
function tumSwitchTab(type, tab) {
  // Update tab buttons
  document.querySelectorAll('[id^="cashTab-"]').forEach(function(t) { t.classList.remove('active'); });
  var activeTab = document.getElementById('cashTab-' + tab);
  if (activeTab) activeTab.classList.add('active');
  // Show correct panel
  document.querySelectorAll('[id^="cashPanel-"]').forEach(function(p) { p.classList.remove('active'); });
  var activePanel = document.getElementById('cashPanel-' + tab);
  if (activePanel) activePanel.classList.add('active');
}

// Copy to clipboard helper
function tumCopy(text, btn) {
  try {
    navigator.clipboard.writeText(text).then(function() {
      var orig = btn.textContent;
      btn.textContent = 'Copied!';
      btn.style.background = '#0C1A2E';
      btn.style.color = 'white';
      setTimeout(function() {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.color = '';
      }, 1800);
    });
  } catch(e) {
    btn.textContent = 'Copied!';
    setTimeout(function() { btn.textContent = 'Copy'; }, 1800);
  }
}

// Download wire details as PDF (print-to-PDF via window.print)
function tumDownloadPDF() {
  var styleClose = '<' + '/style>';
  var headClose  = '<' + '/head>';
  var win = window.open('', '_blank');
  win.document.write([
    '<!DOCTYPE html><html><head>',
    '<title>Aidi Wire Transfer Details</title>',
    '<style>',
    'body{font-family:Georgia,serif;max-width:600px;margin:40px auto;color:#0C1A2E;line-height:1.7;}',
    'h1{font-size:1.6rem;font-weight:400;margin-bottom:4px;}',
    '.sub{color:#8494A8;font-size:.85rem;margin-bottom:28px;}',
    '.section-head{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#1B4FD8;margin:18px 0 8px;}',
    '.row{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #EDE9E1;font-size:.88rem;}',
    '.k{color:#8494A8;}.v{font-weight:600;}',
    '.footer{margin-top:32px;font-size:.72rem;color:#8494A8;border-top:1px solid #EDE9E1;padding-top:16px;}',
    '@media print{body{margin:20px;}}',
    styleClose,
    headClose,
    '<body>',
    '<h1>Aidi — Wire Transfer Details</h1>',
    '<div class="sub">For deposits to your Aidi Cash Balance</div>',
    '<div class="section-head">Beneficiary</div>',
    '<div class="row"><span class="k">Name</span><span class="v">Aidi Ventures LLC</span></div>',
    '<div class="row"><span class="k">Account number</span><span class="v">692614648178693</span></div>',
    '<div class="row"><span class="k">Account type</span><span class="v">Checking</span></div>',
    '<div class="row"><span class="k">Address</span><span class="v">2880 Zanker Rd, Suite 203, San Jose, CA 95134</span></div>',
    '<div class="section-head">Receiving Bank</div>',
    '<div class="row"><span class="k">Bank name</span><span class="v">Aidi Cash Account</span></div>',
    '<div class="row"><span class="k">ABA routing</span><span class="v">121145433</span></div>',
    '<div class="row"><span class="k">Bank address</span><span class="v">1 Letterman Drive, Bldg A, Suite A4-700, San Francisco, CA 94129</span></div>',
    '<div class="section-head">International Wire</div>',
    '<div class="row"><span class="k">SWIFT / BIC</span><span class="v">CLNOUS66</span></div>',
    '<div class="row"><span class="k">Reference</span><span class="v">AIDI-JA-2026</span></div>',
    '<div class="footer">Aidi is not a broker-dealer. Deposits are FDIC insured. Generated: ' + new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'}) + '</div>',
    '<' + '/body><' + '/html>'
  ].join(''));
  win.document.close();
  setTimeout(function() { win.print(); }, 400);
}


function tumSubmitCard(type) {
  var amt = parseFloat(document.getElementById('cashCardAmount').value)||0;
  if (amt < 10) { document.getElementById('cashCardAmount').focus(); return; }
  var fee = (amt * 0.015).toFixed(2);
  var total = (amt + parseFloat(fee)).toFixed(2);
  document.getElementById('cashCardSuccess').style.display = 'block';
  document.getElementById('cashCardSuccess').textContent = '✓ Deposit of $' + amt.toLocaleString() + ' initiated (fee: $' + fee + ' · total: $' + total + '). Funds arrive within minutes.';
}

function tumCheckInvest(val) {
  var amt = parseFloat(val)||0;
  var hint = document.getElementById('investHint');
  if (amt > 318000) {
    hint.textContent = '⚠ Insufficient cash balance. Available: $318,000';
    hint.style.color = '#C0392B';
  } else {
    hint.textContent = 'Funded from Cash Balance → Investment Account';
    hint.style.color = '#8494A8';
  }
}

function tumSubmitInvest() {
  var amt = parseFloat(document.getElementById('investAmount').value)||0;
  if (amt < 100) { document.getElementById('investAmount').focus(); return; }
  if (amt > 318000) { document.getElementById('investAmount').focus(); return; }
  var el = document.getElementById('investSuccess');
  el.style.display = 'block';
  el.textContent = '✓ Transfer of $' + amt.toLocaleString() + ' initiated from Cash Balance to Investment Account. Arrives in 1–2 business days.';
}

function tumCheckCrypto(val) {
  var amt = parseFloat(val)||0;
  var hint = document.getElementById('cryptoHint');
  if (amt > 318000) {
    hint.textContent = '⚠ Insufficient cash balance. Available: $318,000';
    hint.style.color = '#C0392B';
  } else {
    hint.textContent = 'Routed to Crypto Account · Secured in cold custody';
    hint.style.color = '#8494A8';
  }
}

function tumSubmitCrypto() {
  var amt = parseFloat(document.getElementById('cryptoAmount').value)||0;
  if (amt < 100) { document.getElementById('cryptoAmount').focus(); return; }
  if (amt > 318000) { document.getElementById('cryptoAmount').focus(); return; }
  var el = document.getElementById('cryptoSuccess');
  el.style.display = 'block';
  el.textContent = '✓ Allocation of $' + amt.toLocaleString() + ' routed to your Crypto Account. Assets secured in cold custody. Allow up to 10 minutes.';
}


// ── Vault Page ───────────────────────────────────────────────────────────
function switchVaultTab(tab) {
  // Update tab buttons
  document.querySelectorAll('.vault-tab').forEach(function(t) { t.classList.remove('active'); });
  var activeBtn = document.getElementById('vtab-' + tab);
  if (activeBtn) activeBtn.classList.add('active');

  // Show correct sub-panel
  document.querySelectorAll('.vault-sub').forEach(function(s) { s.classList.remove('active'); });
  var activeSub = document.getElementById('vsub-' + tab);
  if (activeSub) activeSub.classList.add('active');

  // Draw the relevant chart
  setTimeout(function() {
    if (tab === 'gold') {
      var goldData = genData(80, 548000, 0.006, 0.0005);
      drawVaultChart('vaultGoldChart', goldData, 'rgb(200,150,46)');
    } else {
      var cryptoData = genData(80, 96780, 0.02, 0.0008);
      drawVaultChart('vaultCryptoChart', cryptoData, 'rgb(27,79,216)');
    }
  }, 60);
}

function drawVaultCharts() {
  var activeTab = document.querySelector('.vault-tab.active');
  var tab = activeTab ? (activeTab.id === 'vtab-crypto' ? 'crypto' : 'gold') : 'gold';
  if (tab === 'gold') {
    drawVaultMetalsChart();
  } else {
    var cryptoData = genData(80, 96780, 0.02, 0.0008);
    drawVaultChart('vaultCryptoChart', cryptoData, 'rgb(27,79,216)');
  }
}



// ── Vault Transfer Modal ──────────────────────────────────────────────────
var VAULT_ADDRESSES = {
  btc: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
  eth: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  sol: 'DYw8jCTfwHNRJhhmFcbXvVDTqWMEVFBX6ZKUmG5CNSKH'
};
var VAULT_FEES = { btc: 0.00012, eth: 0.002, sol: 0.000025 };
var VAULT_PRICES = { btc: 93407, eth: 3180, sol: 142 };

function openVaultTransfer() {
  document.getElementById('vaultTransferOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  vtmUpdateAddress();
}

function closeVaultTransfer() {
  document.getElementById('vaultTransferOverlay').classList.remove('open');
  document.body.style.overflow = '';
  // Reset
  document.getElementById('vtmAmount').value = '';
  document.getElementById('vtmSuccess').style.display = 'none';
  document.getElementById('vtmNetworkFee').textContent = '—';
  document.getElementById('vtmTransferAmt').textContent = '—';
  document.getElementById('vtmReceive').textContent = '—';
}

function vtmUpdateAddress() {
  var asset = document.getElementById('vtmAsset').value;
  document.getElementById('vtmAddress').textContent = VAULT_ADDRESSES[asset];
  var hints = { btc:'Enter amount in BTC', eth:'Enter amount in ETH', sol:'Enter amount in SOL' };
  document.getElementById('vtmAmountHint').textContent = hints[asset];
  document.getElementById('vtmAmount').value = '';
  document.getElementById('vtmNetworkFee').textContent = '—';
  document.getElementById('vtmTransferAmt').textContent = '—';
  document.getElementById('vtmReceive').textContent = '—';
}

function vtmCopyAddr() {
  var addr = document.getElementById('vtmAddress').textContent;
  try { navigator.clipboard.writeText(addr); } catch(e) {}
  var btn = document.querySelector('.vtm-copy-btn');
  if (btn) { btn.textContent='Copied!'; setTimeout(function(){ btn.textContent='Copy'; }, 1800); }
}

function vtmCalc() {
  var asset = document.getElementById('vtmAsset').value;
  var amt = parseFloat(document.getElementById('vtmAmount').value)||0;
  if (!amt) {
    document.getElementById('vtmNetworkFee').textContent = '—';
    document.getElementById('vtmTransferAmt').textContent = '—';
    document.getElementById('vtmReceive').textContent = '—';
    return;
  }
  var fee = VAULT_FEES[asset];
  var price = VAULT_PRICES[asset];
  var netAmt = Math.max(0, amt - fee);
  var usdVal = (amt * price).toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2});
  var feeUSD = (fee * price).toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2});
  var recUSD = (netAmt * price).toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2});
  document.getElementById('vtmNetworkFee').textContent = fee + ' ' + asset.toUpperCase() + ' (' + feeUSD + ')';
  document.getElementById('vtmTransferAmt').textContent = amt + ' ' + asset.toUpperCase() + ' (' + usdVal + ')';
  document.getElementById('vtmReceive').textContent = netAmt.toFixed(6) + ' ' + asset.toUpperCase() + ' (' + recUSD + ')';
}

function vtmSubmit() {
  var asset = document.getElementById('vtmAsset').value;
  var amt = parseFloat(document.getElementById('vtmAmount').value)||0;
  if (amt <= 0) { document.getElementById('vtmAmount').focus(); return; }
  var success = document.getElementById('vtmSuccess');
  success.style.display = 'block';
  success.scrollIntoView({ behavior:'smooth', block:'nearest' });
}


// ── Storage Details Modal ────────────────────────────────────────────────
function openStorageDetails() {
  document.getElementById('storageOverlay').classList.add('open');
  document.getElementById('storageModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeStorageDetails() {
  document.getElementById('storageOverlay').classList.remove('open');
  document.getElementById('storageModal').classList.remove('open');
  document.body.style.overflow = '';
}


function addChatMsg(text, role) {
  var msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  var d = document.createElement('div');
  d.className = 'chat-msg ' + role;
  var avatar = role === 'bot' ? '&#10022;' : 'JA';
  d.innerHTML = '<div class="chat-msg-avatar">' + avatar + '</div><div class="chat-bubble">' + text + '</div>';
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}

function sendChat() {
  var input = document.getElementById('chatInput');
  var text = input.value.trim();
  if (!text) return;
  input.value = '';
  addChatMsg(text, 'user');
  setTimeout(function() { addChatMsg(getEliaResponse(text), 'bot'); }, 700 + Math.random() * 400);
}

function sendQuick(btn) {
  var text = btn.textContent.trim();
  addChatMsg(text, 'user');
  setTimeout(function() { addChatMsg(getEliaResponse(text), 'bot'); }, 700 + Math.random() * 400);
}

function switchTab(btn, chartId) {
  var parent = btn.closest('.perf-card') || btn.parentElement.parentElement;
  parent.querySelectorAll('.perf-time-tab').forEach(function(t){ t.classList.remove('active'); });
  btn.classList.add('active');
  var canvasId = chartId === 'home' ? 'homeChart' : 'portChart';
  drawDbChart(canvasId, '#FFFFFF');
}

function toggleSwitch(el) {
  el.classList.toggle('on');
  el.classList.toggle('off');
}


// ── Wallet selector on transaction pages ─────────────────────────────────
function txSelectWallet(labelEl) {
  // Deselect all in same group
  var group = labelEl.closest('.tx-wallet-options');
  if (!group) return;
  group.querySelectorAll('.tx-wallet-option').forEach(function(opt) {
    opt.classList.remove('selected');
    var radio = opt.querySelector('input[type="radio"]');
    if (radio) radio.checked = false;
  });
  // Select clicked
  labelEl.classList.add('selected');
  var radio = labelEl.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;
}

function txGetSelectedWallet(pageId) {
  var page = document.getElementById(pageId);
  if (!page) return 'Cash Wallet';
  var checked = page.querySelector('.tx-wallet-option.selected');
  if (!checked) return 'Cash Wallet';
  return checked.querySelector('.tx-wallet-name').textContent.trim();
}


function txCalcBridge(usd) {
  var amt = parseFloat(usd)||0;
  var income = amt * 0.0525 * (60/365);
  var incEl = document.getElementById('bridgeIncome');
  if (incEl) incEl.textContent = '$' + income.toFixed(2);
  var costEl = document.getElementById('bridgeCost');
  if (costEl) costEl.textContent = '$' + amt.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
}

function txSubmitBridge() {
  var amt = parseFloat(document.getElementById('bridgeAmount').value)||0;
  if (amt < 1000) { document.getElementById('bridgeAmount').focus(); return; }
  var income = amt * 0.0525 * (60/365);
  var wallet = txGetSelectedWallet('txpage-bridge');
  txShowConfirm([
    ['Asset', '60-Day Treasury Bill'],
    ['Principal', '$' + amt.toLocaleString()],
    ['Yield', '5.25% annualised'],
    ['Projected income (60d)', '$' + income.toFixed(2)],
    ['Debit wallet', wallet],
    ['Auto-roll', 'Available'],
    ['Custodian', 'Cash Account']
  ]);
}


function txNotifyUnit(unitId) {
  var names = {
    'unit-a': 'Modern Stylish Home',
    'unit-b': 'Private Room 1 — Cozy Stay',
    'unit-c': 'Private Room — Elegant Stay',
    'unit-d': 'Private Room 2 — Modern Stay'
  };
  var name = names[unitId] || 'this property';
  txShowConfirm([
    ['Property', name],
    ['Action', 'Notification request'],
    ['Status', 'Closed — reopening soon'],
    ['Your email', 'james@adeyemi.com'],
    ['Note', 'You will be notified when this round opens']
  ]);
}

// ── User Menu ─────────────────────────────────────────────────────────────
function toggleUserMenu() {
  var dd = document.getElementById('userDropdown');
  dd.classList.toggle('open');
}
function closeUserMenu() {
  var dd = document.getElementById('userDropdown');
  if (dd) dd.classList.remove('open');
}
document.addEventListener('click', function(e) {
  var btn = document.getElementById('dbUserBtn');
  if (btn && !btn.contains(e.target)) closeUserMenu();
});


// ── Settings Tab Navigation ───────────────────────────────────────────────
var SETT_TABS = ['profile','notifications','security','billing','linked','preferences'];
function settNav(tab) {
  SETT_TABS.forEach(function(t) {
    var nav = document.getElementById('sett-nav-' + t);
    var panel = document.getElementById('sett-panel-' + t);
    if (nav) nav.classList.toggle('active', t === tab);
    if (panel) panel.style.display = t === tab ? 'block' : 'none';
  });
}

var TXD={
  '1099b-equity':{title:'Form 1099-B',sub:'Stocks & ETFs · Tax year 2025 · Issued by Aidi',pending:false,
    steps:[{t:'Your form is ready',d:'Aidi has prepared your 1099-B for all stock and ETF sales in your Aidi account during 2025.'},{t:'Download and share',d:"Click Download below. Pass it to your accountant — they'll complete Schedule D on your return."}],
    note:'Only needed if you sold shares. Held without selling? No action required.'},
  '1099da':{title:'Form 1099-DA',sub:'Cryptocurrency · Tax year 2025 · Issued by Aidi',pending:false,
    steps:[{t:'Your form is ready',d:'Aidi has prepared your 1099-DA covering all crypto sales and exchanges through your Aidi account in 2025.'},{t:'Download and share',d:"Click Download below. Your accountant reports gains or losses on Schedule D."}],
    note:"Even if you didn't sell, you must answer the digital assets question on Form 1040 every year."},
  '1099b-metals':{title:'Form 1099-B',sub:'Gold & Silver · Tax year 2025 · Issued by Aidi',pending:false,
    steps:[{t:'Your form is ready',d:'Aidi has prepared your 1099-B for any gold or silver sold through your Aidi account in 2025.'},{t:'Download and share',d:"Click Download below. Long-term gains on physical metals may be taxed at up to 28%."}],
    note:"Only needed if you sold metals. No sales? Nothing to report."},
  '1099int-tbill':{title:'Form 1099-INT',sub:'T-Bill Interest · Tax year 2025 · Issued by Aidi',pending:false,
    steps:[{t:'Your form is ready',d:'Aidi has prepared your 1099-INT showing all T-Bill interest earned in your Aidi account during 2025.'},{t:'Download and share',d:"Click Download below. Report this on Schedule B on your federal return only — T-Bill interest is California state-tax exempt."}],
    note:'T-Bill interest is federally taxable but exempt from California state tax.'},
  'k1-rental':{title:'Schedule K-1',sub:'Aidi Haven LLC · Rental Properties · Tax year 2025',pending:false,
    steps:[{t:'Your K-1 is ready',d:'Aidi Haven LLC has prepared your K-1 showing your share of rental income and expenses for 2025.'},{t:'Download and share',d:"Click Download below. Pass to your accountant — they add it to Schedule E. Aidi Haven LLC handles the partnership filing."}],
    note:'Your invested principal is returned tax-free. Only the income on the K-1 is reportable.'},
  '1099int-rental':{title:'Form 1099-INT',sub:'Aidi Haven LLC · Rental Interest · Tax year 2025',pending:false,
    steps:[{t:'Your form is ready',d:'Aidi Haven LLC has prepared your 1099-INT showing the 4.5% annual interest paid to you in 2025.'},{t:'Download and share',d:"Click Download below. Your accountant adds this to Schedule B as ordinary income."}],
    note:'Only the interest is taxable. Your original capital is returned tax-free at maturity.'},
  'k1-private':{title:'Schedule K-1',sub:'Private Investments · Tax year 2025 · Expected Mar 15, 2026',pending:true,
    steps:[{t:'Being prepared now',d:'Aidi Ventures LLC is preparing one K-1 per private investment (Termii, Rayda). These arrive slightly later than other forms.'},{t:"We'll notify you",d:"You'll receive an email and an in-app notification as soon as each K-1 is available — expected by March 15, 2026."}],
    note:"If your K-1 arrives after April 15, file a tax extension (Form 4868). We'll remind you."},
};
function openTaxDoc(id){
  var d=TXD[id];if(!d)return;
  document.getElementById('txdTitle').textContent=d.title;
  document.getElementById('txdSub').textContent=d.sub;
  var btn=document.getElementById('txdDlBtn');
  btn.textContent=d.pending?'Notify me when ready':'Download PDF';
  btn.disabled=false;btn.style.opacity='1';
  var html='';
  html+=d.pending?'<div style="margin-bottom:12px;"><span style="font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#FEF9C3;color:#A16207;">⏳ Coming soon — expected Mar 15, 2026</span></div>':'<div style="margin-bottom:12px;"><span style="font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;">✓ Available to download</span></div>';
  html+='<div style="font-size:.78rem;font-weight:600;color:var(--ink);margin-bottom:8px;">Steps</div>';
  d.steps.forEach(function(s,i){html+='<div class="txd-step"><div class="txd-num">'+(i+1)+'</div><div><div class="txd-step-title">'+s.t+'</div><div class="txd-step-desc">'+s.d+'</div></div></div>';});
  html+='<div class="txd-note"><strong style="color:var(--ink);">Note: </strong>'+d.note+'</div>';
  document.getElementById('txdBody').innerHTML=html;
  document.getElementById('txdOverlay').classList.add('open');
}
function closeTaxDoc(){document.getElementById('txdOverlay').classList.remove('open');}
function txdDownload(){
  var btn=document.getElementById('txdDlBtn');
  if(btn.textContent==='Notify me when ready'){btn.textContent="✓ We'll notify you";btn.disabled=true;btn.style.opacity='.7';setTimeout(closeTaxDoc,1200);return;}
  btn.textContent='⬇ Downloading…';btn.disabled=true;
  setTimeout(function(){btn.textContent='✓ Downloaded';setTimeout(closeTaxDoc,900);},1200);
}


// Settings tab switching
function settTab(t){['profile','notifications','security','billing','linked','preferences'].forEach(function(x){var n=document.getElementById('snav-'+x),p=document.getElementById('span-'+x);if(n)n.classList.toggle('active',x===t);if(p)p.style.display=x===t?'block':'none';});}
// Settings modal data
var SMD={
  name:{t:'Edit full name',pri:'Save changes',b:'<div class="sm-fld"><label class="sm-lbl">First name</label><input class="sm-inp" value="James"></div><div class="sm-fld"><label class="sm-lbl">Last name</label><input class="sm-inp" value="Adeyemi"></div><p class="sm-hint">Must match your government-issued ID.</p>'},
  email:{t:'Update email',pri:'Send verification link',b:'<div class="sm-fld"><label class="sm-lbl">New email</label><input class="sm-inp" type="email" value="james@adeyemi.com"></div><div class="sm-fld"><label class="sm-lbl">Confirm email</label><input class="sm-inp" type="email" placeholder="Re-enter email"></div><p class="sm-hint">A verification link will be sent. Current email stays active until confirmed.</p>'},
  phone:{t:'Update phone number',pri:'Save changes',b:'<div class="sm-fld"><label class="sm-lbl">Phone number</label><input class="sm-inp" type="tel" value="+1 (415) 555-0123"></div><p class="sm-hint">Include your country code. Used for alerts and 2FA.</p>'},
  dob:{t:'Date of birth',pri:'Submit for review',b:'<div class="sm-fld"><label class="sm-lbl">Date of birth</label><input class="sm-inp" type="date" value="1985-03-14"></div><p class="sm-hint">Changes require re-verification with Aidi compliance.</p>'},
  address:{t:'Residential address',pri:'Save changes',b:'<div class="sm-fld"><label class="sm-lbl">Street</label><input class="sm-inp" value="458 N 7th Street"></div><div class="sm-fld"><label class="sm-lbl">City</label><input class="sm-inp" value="San Jose"></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div class="sm-fld"><label class="sm-lbl">State</label><input class="sm-inp" value="CA"></div><div class="sm-fld"><label class="sm-lbl">ZIP</label><input class="sm-inp" value="95112"></div></div><div class="sm-fld" style="margin-top:12px"><label class="sm-lbl">Country</label><select class="sm-sel"><option selected>United States</option><option>United Kingdom</option><option>Nigeria</option></select></div><p class="sm-hint">Address changes may require proof of address.</p>'},
  citizenship:{t:'Country of citizenship',pri:'Submit for review',b:'<div class="sm-fld"><label class="sm-lbl">Country</label><select class="sm-sel"><option selected>United States</option><option>United Kingdom</option><option>Nigeria</option><option>Canada</option></select></div><p class="sm-hint">Changes may affect available products and require compliance review.</p>'},
  taxres:{t:'Tax residency',pri:'Save changes',b:'<div class="sm-fld"><label class="sm-lbl">Primary tax residency</label><select class="sm-sel"><option selected>United States</option><option>United Kingdom</option><option>Nigeria</option></select></div><div class="sm-fld"><label class="sm-lbl">Secondary (if applicable)</label><select class="sm-sel"><option selected>None</option><option>United Kingdom</option><option>Nigeria</option></select></div><p class="sm-hint">Consult a tax advisor if you have multi-jurisdiction obligations.</p>'},
  closeaccount:{t:'Close account',pri:'Close my account',priRed:true,b:'<div class="sm-warn"><strong>This cannot be undone.</strong> Closing will liquidate investments, cancel LLC formations, and delete all data within 30 days. Funds return to your bank within 5\u20137 business days.</div><div class="sm-fld"><label class="sm-lbl">Type DELETE to confirm</label><input class="sm-inp" placeholder="DELETE"></div>'},
  sessions:{t:'Active sessions',sec:'Close',b:'<div class="sm-row"><div class="k">MacBook Pro \u2014 Chrome<br><span style="font-size:.72rem;color:var(--ink-muted)">San Jose, CA \u00b7 Today 1:42 AM</span></div><span style="font-size:.72rem;font-weight:600;color:#1A7A5E">Current</span></div><div class="sm-row"><div class="k">iPhone 15 \u2014 Safari<br><span style="font-size:.72rem;color:var(--ink-muted)">San Jose, CA \u00b7 Yesterday 9:15 PM</span></div><button onclick="sm(\'revoke_iphone\')" style="padding:5px 12px;border-radius:100px;font-size:.72rem;border:1px solid #FCA5A5;background:white;cursor:pointer;color:#DC2626">Revoke</button></div><div class="sm-row"><div class="k">iPad Pro \u2014 Safari<br><span style="font-size:.72rem;color:var(--ink-muted)">San Francisco \u00b7 Apr 8 3:22 PM</span></div><button onclick="sm(\'revoke_ipad\')" style="padding:5px 12px;border-radius:100px;font-size:.72rem;border:1px solid #FCA5A5;background:white;cursor:pointer;color:#DC2626">Revoke</button></div>'},
  revoke_iphone:{t:'Revoke iPhone 15 session',pri:'Revoke session',priRed:true,b:'<p style="font-size:.84rem;color:var(--ink-muted);line-height:1.7;margin-bottom:14px">This will immediately sign out iPhone 15 (San Jose, CA).</p><div class="sm-warn">If you do not recognise this session, revoke it and enable two-factor authentication.</div>'},
  revoke_ipad:{t:'Revoke iPad Pro session',pri:'Revoke session',priRed:true,b:'<p style="font-size:.84rem;color:var(--ink-muted);line-height:1.7;margin-bottom:14px">This will immediately sign out iPad Pro (San Francisco, CA).</p><div class="sm-warn">If you do not recognise this session, revoke it and enable two-factor authentication.</div>'},
  paymethod:{t:'Change payment source',pri:'Save changes',b:'<div class="sm-fld"><label class="sm-lbl">Payment source</label><select class="sm-sel"><option selected>Aidi Cash Wallet \u2014 $318,000</option><option>Chase Bank \u00b7\u00b7\u00b74821</option></select></div><div class="sm-row"><div class="k">Advisory fee (est.)</div><div class="v">$6,047 / yr</div></div><div class="sm-row"><div class="k">Vault storage (est.)</div><div class="v">$927 / yr</div></div><div class="sm-row"><div class="k">Next charge</div><div class="v">Jul 1, 2026</div></div>'},
  statement:{t:'Download billing statement',pri:'Download PDF',b:'<div class="sm-fld"><label class="sm-lbl">Period</label><select class="sm-sel"><option selected>2025 Full Year</option><option>Q1 2026 (Jan\u2013Mar)</option><option>Q4 2025 (Oct\u2013Dec)</option></select></div><div class="sm-fld"><label class="sm-lbl">Format</label><select class="sm-sel"><option selected>PDF</option><option>CSV</option></select></div><div class="sm-row"><div class="k">Total fees 2025</div><div class="v">$7,372</div></div><div class="sm-row"><div class="k">Advisory fees</div><div class="v">$6,047</div></div><div class="sm-row"><div class="k">Vault storage</div><div class="v">$925</div></div>'},
  managebank:{t:'Manage linked bank',pri:'Remove account',priRed:true,b:'<div class="sm-row"><div class="k">Bank</div><div class="v">Chase Bank</div></div><div class="sm-row"><div class="k">Account type</div><div class="v">Checking</div></div><div class="sm-row"><div class="k">Account</div><div class="v">\u00b7\u00b7\u00b74821</div></div><div class="sm-row"><div class="k">Status</div><div class="v" style="color:#1A7A5E">Verified</div></div><p class="sm-hint" style="margin-top:12px">To update, remove this account and connect a new one.</p>'},
  addbank:{t:'Connect bank account',pri:'Connect account',b:'<div class="sm-fld"><label class="sm-lbl">Bank name</label><input class="sm-inp" placeholder="e.g. Chase, Bank of America"></div><div class="sm-fld"><label class="sm-lbl">Account number</label><input class="sm-inp" placeholder="Your account number"></div><div class="sm-fld"><label class="sm-lbl">Routing number</label><input class="sm-inp" placeholder="9-digit routing number"></div><div class="sm-fld"><label class="sm-lbl">Account type</label><select class="sm-sel"><option selected>Checking</option><option>Savings</option></select></div><p class="sm-hint">A small verification deposit will confirm your account.</p>'},
  upgrade:{t:'Upgrade Plan',pri:'Confirm Upgrade',b:'<div class="sm-fld"><label class="sm-lbl">Select plan</label><select class="sm-sel" id="smUpgradePlan"><option value="growth">Growth \u2014 $29/month</option><option value="family">Family Office \u2014 $99/month</option></select></div><div class="sm-fld"><label class="sm-lbl">Payment method</label><select class="sm-sel"><option selected>Aidi Cash Wallet \u2014 $318,000</option><option>Chase Bank \u00b7\u00b7\u00b74821</option></select></div><div class="sm-row"><div class="k">Billing cycle</div><div class="v">Monthly</div></div><div class="sm-row"><div class="k">First charge</div><div class="v">Today</div></div><p class="sm-hint">You can cancel or change plans at any time. Charges are prorated.</p>'},
  sales:{t:'Talk to Sales',pri:'Send Request',b:'<p style="font-size:.84rem;color:var(--ink-muted);line-height:1.7;margin-bottom:16px;">Interested in a custom plan or have questions about enterprise features? Our team will reach out within 24 hours.</p><div class="sm-fld"><label class="sm-lbl">Your name</label><input class="sm-inp" value="James Adeyemi"></div><div class="sm-fld"><label class="sm-lbl">Email</label><input class="sm-inp" value="james@adeyemi.com"></div><div class="sm-fld"><label class="sm-lbl">Message (optional)</label><textarea class="sm-inp" rows="3" placeholder="Tell us about your needs\u2026" style="resize:vertical;"></textarea></div>'}
};
function sm(id){var d=SMD[id];if(!d)return;document.getElementById('smTtl').textContent=d.t;document.getElementById('smBd').innerHTML=d.b;var f='';if(d.sec){f='<button class="sm-btn sec" style="max-width:120px;margin-left:auto" onclick="smClose()">'+d.sec+'</button>';}else{f+='<button class="sm-btn sec" onclick="smClose()">Cancel</button>';if(d.pri){var c=d.priRed?'sm-btn red':'sm-btn pri';f+='<button class="'+c+'" onclick="smSave(\''+id+'\')">'+d.pri+'</button>';}}document.getElementById('smFt').innerHTML=f;document.getElementById('smOv').classList.add('open');}
function smClose(){document.getElementById('smOv').classList.remove('open');}
function smSave(id){var m=id==='statement'?'Your statement is downloading.':id==='closeaccount'?'Request received. Our team will contact you within 24 hours.':id.indexOf('revoke')===0?'Session revoked.':'Changes saved.';document.getElementById('smBd').innerHTML='<div class="sm-ok">\u2713 '+m+'</div>';document.getElementById('smFt').innerHTML='';setTimeout(smClose,1400);}

function selectPlan(plan) {
  document.querySelectorAll('.billing-plan-card').forEach(function(c) {
    c.classList.remove('active');
    c.style.borderColor = 'var(--cream-dark)';
  });
  var el = document.getElementById('plan-' + plan);
  if (el) { el.classList.add('active'); el.style.borderColor = 'var(--ink)'; }
}


// ── Entity Compliance Actions ─────────────────────────────────────────────

// ── Shared upload-field helper ─────────────────────────────────────────
function _uploadField(label, hint) {
  return '<div class="sm-fld">' +
    '<label class="sm-lbl">' + label + '</label>' +
    '<div style="border:1.5px dashed var(--cream-dark);border-radius:var(--r);padding:18px;text-align:center;cursor:pointer;background:var(--cream);transition:border .15s;" ' +
      'onclick="this.querySelector(\'input\').click()" ' +
      'ondragover="event.preventDefault();this.style.borderColor=\'var(--blue)\'" ' +
      'ondragleave="this.style.borderColor=\'var(--cream-dark)\'">' +
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--ink-muted)" stroke-width="1.5" stroke-linecap="round" style="margin:0 auto 6px;display:block;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>' +
      '<div style="font-size:.78rem;color:var(--ink-muted);">Click to upload or drag &amp; drop</div>' +
      '<div style="font-size:.7rem;color:var(--ink-muted);margin-top:3px;">' + hint + '</div>' +
      '<input type="file" style="display:none" accept=".pdf,.xlsx,.csv,.doc,.docx">' +
    '</div>' +
  '</div>';
}

// ── Filing transaction page builder ─────────────────────────────────────
function _filingPage(id) {
  var configs = {
    'delaware-annual': {
      title: 'Delaware Annual Report — Adeyemi Capital LLC',
      badge: 'Delaware Division of Corporations',
      badgeColor: '#1B4FD8',
      intro: 'Submit your 2025 Delaware Annual Report. All fields below are required by the Delaware Division of Corporations.',
      fields: [
        { type:'upload', label:'Consolidated P&L for the Year', hint:'PDF, Excel or CSV · Tax year 2025' },
        { type:'upload', label:'Balance Sheet for the Year',    hint:'PDF, Excel or CSV · As of Dec 31, 2025' },
        { type:'section', label:'Founders / Partner Ownership Distribution' },
        { type:'text',   label:'Partner 1 — Full legal name',  placeholder:'e.g. James Adeyemi' },
        { type:'text',   label:'Partner 1 — Ownership %',      placeholder:'e.g. 75%' },
        { type:'text',   label:'Partner 2 — Full legal name',  placeholder:'e.g. Co-founder name' },
        { type:'text',   label:'Partner 2 — Ownership %',      placeholder:'e.g. 25%' },
        { type:'section', label:'Registered Address' },
        { type:'text',   label:'Street address',  placeholder:'458 N 7th Street' },
        { type:'row2',   label1:'City', placeholder1:'San Jose', label2:'State', placeholder2:'CA' },
        { type:'row2',   label1:'ZIP',  placeholder1:'95112',    label2:'Country', placeholder2:'United States' },
      ]
    },
    'federal-1040': {
      title: 'Federal Income Tax Return — James Adeyemi',
      badge: 'IRS e-File · Form 1040',
      badgeColor: '#1B4FD8',
      intro: 'Prepare your 2025 federal tax return (Form 1040). Upload the documents below so your accountant or Aidi can compile and submit your return.',
      fields: [
        { type:'upload', label:'Consolidated P&L for the Year',        hint:'PDF, Excel or CSV · Tax year 2025' },
        { type:'upload', label:'Balance Sheet for the Year',            hint:'PDF, Excel or CSV · As of Dec 31, 2025' },
        { type:'upload', label:'Previous Year Tax Return (2024)',       hint:'PDF only · IRS Form 1040' },
        { type:'upload', label:'Tax Forms from Investments',            hint:'1099-B, 1099-DA, 1099-INT, K-1 etc.' },
        { type:'section', label:'Company / Business Information' },
        { type:'text',   label:'Most recent company address',           placeholder:'458 N 7th Street, San Jose, CA 95112' },
        { type:'currency', label:'Software development costs (if any)', placeholder:'e.g. 45000' },
        { type:'currency', label:'Payments to foreign shareholders owning ≥25%', placeholder:'e.g. 0' },
      ]
    },
    'llc-1065': {
      title: 'LLC Partnership Return — Adeyemi Capital LLC',
      badge: 'IRS e-File · Form 1065',
      badgeColor: '#1B4FD8',
      intro: 'File your 2025 U.S. Return of Partnership Income (Form 1065). Required for multi-member LLCs. This generates K-1s for each member.',
      fields: [
        { type:'upload', label:'Consolidated P&L for the Year',         hint:'PDF, Excel or CSV · Tax year 2025' },
        { type:'upload', label:'Balance Sheet for the Year',             hint:'PDF, Excel or CSV · As of Dec 31, 2025' },
        { type:'upload', label:'Previous Year Tax Return (Form 1065)',   hint:'PDF only' },
        { type:'upload', label:'Tax Forms from Investments',             hint:'1099-B, 1099-DA, 1099-INT, K-1 etc.' },
        { type:'section', label:'Partnership Details' },
        { type:'text',   label:'Most recent company address',            placeholder:'458 N 7th Street, San Jose, CA 95112' },
        { type:'currency', label:'Software development costs (if any)',  placeholder:'e.g. 45000' },
        { type:'currency', label:'Payments to foreign shareholders owning ≥25%', placeholder:'e.g. 0' },
      ]
    },
    'ca-540': {
      title: 'California State Income Tax — James Adeyemi',
      badge: 'California FTB · Form 540',
      badgeColor: '#1B4FD8',
      intro: 'File your 2025 California state income tax return (Form 540). California does not conform to all federal tax rules — additional reconciliation may be required.',
      fields: [
        { type:'upload', label:'Consolidated P&L for the Year',         hint:'PDF, Excel or CSV · Tax year 2025' },
        { type:'upload', label:'Balance Sheet for the Year',             hint:'PDF, Excel or CSV · As of Dec 31, 2025' },
        { type:'upload', label:'Previous Year Tax Return (Form 540)',    hint:'PDF only' },
        { type:'upload', label:'Tax Forms from Investments',             hint:'1099-B, 1099-DA, 1099-INT, K-1 etc.' },
        { type:'section', label:'Additional Information' },
        { type:'text',   label:'Most recent company address',            placeholder:'458 N 7th Street, San Jose, CA 95112' },
        { type:'currency', label:'Software development costs (if any)',  placeholder:'e.g. 45000' },
        { type:'currency', label:'Payments to foreign shareholders owning ≥25%', placeholder:'e.g. 0' },
      ]
    }
  };

  var cfg = configs[id];
  if (!cfg) return;

  // Build fields HTML
  var fieldsHtml = cfg.fields.map(function(f) {
    if (f.type === 'upload')   return _uploadField(f.label, f.hint);
    if (f.type === 'section')  return '<div style="margin:20px 0 10px;padding-top:16px;border-top:1px solid var(--cream-mid);font-size:.73rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">' + f.label + '</div>';
    if (f.type === 'currency') return '<div class="sm-fld"><label class="sm-lbl">' + f.label + '</label><div style="position:relative;"><span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--ink-muted);font-size:.85rem;">$</span><input class="sm-inp" style="padding-left:26px;" placeholder="' + f.placeholder + '" type="number" min="0"></div></div>';
    if (f.type === 'row2')     return '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div class="sm-fld"><label class="sm-lbl">' + f.label1 + '</label><input class="sm-inp" placeholder="' + f.placeholder1 + '"></div><div class="sm-fld"><label class="sm-lbl">' + f.label2 + '</label><input class="sm-inp" placeholder="' + f.placeholder2 + '"></div></div>';
    return '<div class="sm-fld"><label class="sm-lbl">' + f.label + '</label><input class="sm-inp" placeholder="' + f.placeholder + '"></div>';
  }).join('');

  var body =
    '<div style="display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:100px;background:var(--blue-pale);margin-bottom:14px;">' +
      '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="' + cfg.badgeColor + '" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
      '<span style="font-size:.71rem;font-weight:600;color:' + cfg.badgeColor + ';">' + cfg.badge + '</span>' +
    '</div>' +
    '<p style="font-size:.82rem;color:var(--ink-muted);line-height:1.65;margin-bottom:18px;">' + cfg.intro + '</p>' +
    fieldsHtml +
    '<p style="font-size:.71rem;color:var(--ink-muted);margin-top:14px;line-height:1.5;">Aidi does not file on your behalf. Submitting here packages your documents for review before forwarding to the relevant authority.</p>';

  _smOv(cfg.title, body, 'Submit Filing', false, function() {
    _smOv(
      'Filing Submitted',
      '<div class="sm-ok" style="margin-bottom:14px;">\u2713 Your documents have been received and are being reviewed.</div>' +
      '<div class="sm-row"><div class="k">Status</div><div class="v" style="color:#1A7A5E;">Under review</div></div>' +
      '<div class="sm-row"><div class="k">Est. processing</div><div class="v">2\u20133 business days</div></div>' +
      '<div class="sm-row"><div class="k">Confirmation</div><div class="v">Sent to james@adeyemi.com</div></div>' +
      '<p style="font-size:.73rem;color:var(--ink-muted);margin-top:14px;line-height:1.5;">You will be notified by email once the filing is complete.</p>',
      null, true, null
    );
    entMarkRow(id, 'filed');
  });
}

// ── Wallet-debit + progress flow ──────────────────────────────────────────
function _walletDebit(id, label, amount, steps) {
  _smOv(
    'Confirm Payment',
    '<div class="sm-row"><div class="k">Service</div><div class="v">' + label + '</div></div>' +
    '<div class="sm-row"><div class="k">Amount</div><div class="v" style="font-weight:600;">' + amount + '</div></div>' +
    '<div class="sm-row"><div class="k">Debited from</div><div class="v">Aidi Cash Wallet</div></div>' +
    '<div class="sm-row" style="margin-bottom:14px;"><div class="k">Cash Wallet balance after</div><div class="v">$' + _afterBalance(amount) + '</div></div>' +
    '<p style="font-size:.78rem;color:var(--ink-muted);line-height:1.6;">Your Cash Wallet will be debited immediately upon confirmation. Filing will begin within 1 business day.</p>',
    'Confirm & Pay',
    false,
    function() { _showProgress(id, label, steps); }
  );
}

function _afterBalance(amount) {
  var num = parseFloat(amount.replace(/[^0-9.]/g,''));
  var bal = 318000 - num;
  return bal.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function _showProgress(id, label, steps) {
  var stepsHtml = steps.map(function(s, i) {
    var done = i === 0;
    var active = i === 1;
    var clr = done ? '#1A7A5E' : active ? 'var(--blue)' : 'var(--ink-muted)';
    var bg  = done ? '#ECFDF5' : active ? 'var(--blue-pale)' : 'var(--cream)';
    var icon = done
      ? '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#1A7A5E" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>'
      : active
      ? '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--blue)" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
      : '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--ink-muted)" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/></svg>';
    return '<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:var(--r);background:' + bg + ';margin-bottom:6px;">' +
      icon +
      '<div style="font-size:.8rem;font-weight:' + (done||active?'600':'400') + ';color:' + clr + ';">' + s + '</div>' +
    '</div>';
  }).join('');

  _smOv(
    'Filing Started',
    '<div class="sm-ok" style="margin-bottom:16px;">\u2713 Payment confirmed. Cash Wallet debited. Filing is now in progress.</div>' +
    '<div style="font-size:.73rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Progress</div>' +
    stepsHtml +
    '<p style="font-size:.72rem;color:var(--ink-muted);margin-top:14px;line-height:1.5;">You will receive an email confirmation at james@adeyemi.com when each step is complete.</p>',
    null, true, null
  );
  entMarkRow(id, 'filed');
}

// ── Public CTA handlers ────────────────────────────────────────────────────
function entFileNow(id) {
  // Filing transaction page (items 1–4)
  var filingIds = ['delaware-annual','federal-1040','llc-1065','ca-540'];
  if (filingIds.indexOf(id) !== -1) {
    _filingPage(id);
    return;
  }
  // Wallet-debit flow (items 5–7)
  if (id === 'agent-renewal') {
    _walletDebit(id, 'Registered Agent Renewal — Adeyemi Capital LLC', '$149.00', [
      'Payment received',
      'Agent renewal submitted to Delaware',
      'Confirmation certificate issued',
      'Updated on your entity record'
    ]);
  } else if (id === 'boi-report') {
    _walletDebit(id, 'BOI Beneficial Ownership Report — Adeyemi Capital LLC', '$49.00', [
      'Payment received',
      'BOI report submitted to FinCEN',
      'FinCEN acknowledgement received',
      'Record updated on your entity file'
    ]);
  } else if (id === 'est-q2') {
    _walletDebit(id, 'Q2 2026 Estimated Tax Payment — James Adeyemi', '$8,500.00', [
      'Payment confirmed & wallet debited',
      'IRS Direct Pay submission initiated',
      'CA FTB Web Pay submission initiated',
      'Payment confirmations emailed to you'
    ]);
  }
}

function entAlreadyFiled(id) {
  var labels = {
    'delaware-annual': 'Delaware Annual Report \u2014 Adeyemi Capital LLC',
    'federal-1040':    'Federal Tax Return (1040) \u2014 James Adeyemi',
    'llc-1065':        'LLC Partnership Return (1065) \u2014 Adeyemi Capital LLC',
    'ca-540':          'California State Tax (Form 540) \u2014 James Adeyemi',
    'agent-renewal':   'Registered Agent Renewal \u2014 Adeyemi Capital LLC',
    'boi-report':      'BOI Report \u2014 Adeyemi Capital LLC',
    'est-q2':          'Q2 Estimated Tax Payment \u2014 James Adeyemi'
  };
  var label = labels[id] || id;
  _smOv(
    'Already Filed / Paid',
    '<p style="font-size:.84rem;color:var(--ink-muted);line-height:1.7;margin-bottom:16px;">Confirm that <strong>' + label + '</strong> has already been filed or paid outside of Aidi.</p>' +
    '<div class="sm-fld"><label class="sm-lbl">Date filed / paid</label><input class="sm-inp" type="date"></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Confirmation / reference number</label><input class="sm-inp" placeholder="e.g. DE-2026-XXXXX"></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Filed / paid by</label><select class="sm-sel"><option selected>Myself</option><option>My accountant</option><option>My attorney</option><option>Aidi</option></select></div>' +
    '<p class="sm-hint">For your records only. Aidi does not verify this with any government agency.</p>',
    'Mark as Filed',
    false,
    function() { entMarkRow(id, 'filed'); }
  );
}

function entViewDocs() {
  var docs = [
    ['Delaware Certificate of Formation',   'Adeyemi Capital LLC \u00b7 2021',              true],
    ['Operating Agreement',                  'Adeyemi Capital LLC \u00b7 Signed Apr 2021',  true],
    ['EIN Confirmation Letter',              'Adeyemi Capital LLC \u00b7 IRS',              true],
    ['BOI Initial Report',                   'Adeyemi Capital LLC \u00b7 FinCEN \u00b7 2024',true],
    ['Annual Report Receipt 2025',           'Adeyemi Capital LLC \u00b7 Delaware',         true],
    ['Registered Agent Agreement',           'Adeyemi Capital LLC \u00b7 Active',           true],
    ['Wyoming Articles of Organization',     'Adeyemi Family Office LLC \u00b7 Pending',    false],
  ];
  var html = docs.map(function(r) {
    return '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--cream);border-radius:var(--r);margin-bottom:6px;gap:10px;">' +
      '<div style="display:flex;align-items:center;gap:10px;">' +
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-soft)" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
        '<div><div style="font-size:.81rem;font-weight:500;color:var(--ink);">' + r[0] + '</div>' +
        '<div style="font-size:.7rem;color:var(--ink-muted);margin-top:1px;">' + r[1] + '</div></div>' +
      '</div>' +
      (r[2]
        ? '<button onclick="smClose()" style="padding:5px 13px;border-radius:100px;font-size:.72rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;color:var(--ink);font-family:inherit;flex-shrink:0;">Download</button>'
        : '<span style="font-size:.69rem;font-weight:600;padding:3px 9px;border-radius:100px;background:#FEF9C3;color:#A16207;flex-shrink:0;">Pending</span>') +
      '</div>';
  }).join('');
  _smOv('Compliance Documents', '<p style="font-size:.82rem;color:var(--ink-muted);line-height:1.6;margin-bottom:14px;">Formation documents and compliance records on file with Aidi.</p>' + html, null, true, null);
}

function entMarkRow(id, state) {
  var rows = document.querySelectorAll('#complianceTable .comp-row');
  rows.forEach(function(row) {
    if (row.innerHTML.indexOf("'" + id + "'") !== -1 || row.innerHTML.indexOf('"' + id + '"') !== -1) {
      var badge = row.querySelector('span[style*="border-radius:100px"]');
      if (badge) { badge.textContent = '\u2713 Filed'; badge.style.background = '#ECFDF5'; badge.style.color = '#1A7A5E'; }
      var actions = row.lastElementChild;
      if (actions) actions.innerHTML = '<span style="font-size:.78rem;font-weight:600;color:#1A7A5E;">\u2713 Marked as filed</span>';
    }
  });
}

function _smOv(title, body, priLabel, secOnly, onPri) {
  document.getElementById('smTtl').textContent = title;
  document.getElementById('smBd').innerHTML = body;
  var f = '';
  if (secOnly) {
    f = '<button class="sm-btn sec" style="max-width:120px;margin-left:auto;" onclick="smClose()">Close</button>';
  } else {
    f += '<button class="sm-btn sec" onclick="smClose()">Cancel</button>';
    if (priLabel) f += '<button class="sm-btn pri" id="_smOvBtn">' + priLabel + '</button>';
  }
  document.getElementById('smFt').innerHTML = f;
  if (onPri && !secOnly) {
    var btn = document.getElementById('_smOvBtn');
    if (btn) btn.onclick = function() { smClose(); setTimeout(onPri, 180); };
  }
  document.getElementById('smOv').classList.add('open');
}


// ── Elia Intelligence Notification Modals ─────────────────────────────────
var ELIA_DATA = {
  allocation: {
    type:    'alert',
    label:   'Allocation Alert',
    title:   'Excess Idle Cash Detected',
    sub:     'Elia AI · Generated today at 9:42 AM',
    iconBg:  'var(--gold-pale)',
    iconClr: 'var(--gold)',
    iconSvg: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
    stats: [
      { v:'$318,000', l:'Current T-Bill position' },
      { v:'$228,000', l:'Recommended liquidity target' },
      { v:'~$90,000', l:'Excess above target' },
      { v:'+$2,340',  l:'Est. additional yield / yr' },
    ],
    summary: 'Your T-Bill position currently stands at $318,000 — approximately $90,000 above your stated liquidity target of $228,000. While T-Bills are low-risk, holding excess cash at a 90-day tenor means you are leaving meaningful yield on the table.',
    points: [
      { clr:'var(--gold)',  text:'Laddering $90K across 3-month, 6-month, and 12-month T-Bills could improve annualised yield from 5.18% to an estimated 5.44%.' },
      { clr:'var(--gold)',  text:'A 6-month T-Bill ladder locks in current rates before any potential Fed rate cuts in Q3 2026.' },
      { clr:'var(--blue)',  text:'Alternatively, Elia suggests reviewing the 60-Day T-Bill (5.25% annualised yield) as a short-duration option with slightly higher yield than your current 90-day position.' },
      { clr:'var(--green)', text:'No immediate action is required — your current position is secure. This is an optimisation opportunity only.' },
    ],
    pri: { label:'Review Opportunities', action:'opps' },
    sec: { label:'Ask Elia About This', action:'ai' }
  },

  risk: {
    type:    'risk',
    label:   'Risk Signal',
    title:   'Portfolio Concentration Risk',
    sub:     'Elia AI · Generated today at 8:15 AM',
    iconBg:  'var(--red-pale)',
    iconClr: 'var(--red)',
    iconSvg: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    stats: [
      { v:'62%',      l:'US equity concentration' },
      { v:'$391,220', l:'SPY + AAPL combined' },
      { v:'2 assets', l:'Equity holdings' },
      { v:'Medium',   l:'Overall risk rating' },
    ],
    summary: 'Your equity portfolio is 62% concentrated in U.S. large-cap technology stocks (SPY and AAPL). While both are high-quality assets, this concentration exposes your portfolio to sector-specific and macro risk — particularly if U.S. tech valuations compress or the Federal Reserve tightens policy further.',
    points: [
      { clr:'var(--red)',   text:'SPY and AAPL together account for $391,220 of your $631,470 total invested equity — a 62% sector concentration.' },
      { clr:'var(--red)',   text:'A 20% correction in U.S. tech (similar to 2022) would reduce your portfolio by approximately $78,244.' },
      { clr:'var(--blue)',  text:'Elia suggests introducing geographic diversification — European equities (e.g. VXUS) or emerging market exposure could reduce beta to U.S. tech cycles.' },
      { clr:'var(--green)', text:'Your gold and BTC holdings provide partial inflation and macro hedging, but do not offset equity-specific tech risk directly.' },
      { clr:'var(--blue)',  text:'A rebalancing target of 45% US equities, 15% international equities, with the remainder across alternatives and fixed income, would reduce portfolio volatility by an estimated 12%.' },
    ],
    pri: { label:'Review Portfolio', action:'portfolio' },
    sec: { label:'Ask Elia About This', action:'ai' }
  },

  opportunity: {
    type:    'opp',
    label:   'Opportunity',
    title:   'Modern Stylish Home',
    sub:     'Elia AI · 458 N 7th Street, San Jose, CA · Open for investment',
    iconBg:  'var(--green-pale)',
    iconClr: 'var(--green)',
    iconSvg: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>',
    stats: [
      { v:'5%',      l:'Projected cap rate' },
      { v:'$5,000',  l:'Minimum investment' },
      { v:'4.5% p.a.', l:'Annual investor return' },
      { v:'★ 4.85',  l:'13 Airbnb reviews' },
    ],
    summary: 'Modern Stylish Home is a fully furnished entire rental unit at 458 N 7th Street, San Jose — in the heart of Japantown/Northside. The space features 1 bedroom with a queen bed, 1 private bathroom, contemporary design, and a fully equipped kitchen. Currently open for fractional investment at a minimum of $5,000.',
    points: [
      { clr:'var(--green)', text:'5% projected cap rate. Investors receive 4.5% p.a. distributed quarterly from rental cash flows.' },
      { clr:'var(--green)', text:'The property is actively tenanted and generating revenue on Airbnb. No void period or lease-up risk — income starts immediately after investment.' },
      { clr:'var(--blue)',  text:'Ideal for business travellers and Silicon Valley visitors. Located minutes from SAP Center, San Jose State University, Apple, Cisco, and Adobe campuses.' },
      { clr:'var(--blue)',  text:'1 bedroom · 1 queen bed · 1 private bathroom · fully equipped kitchen · contemporary furnishings. Guests consistently praise cleanliness, comfort, and seamless check-in.' },
      { clr:'var(--gold)',  text:'Unit A is the only unit currently open for investment at 458 N 7th Street. Units B, C, and D are closed. This is a time-limited opportunity.' },
      { clr:'var(--blue)',  text:'Adding $5,000–$10,000 here gives your portfolio its first direct residential real estate exposure, improving alternative asset diversification without affecting your liquidity ratio.' },
    ],
    pri: { label:'Invest Now', action:'unit-a' },
    sec: { label:'Ask Elia About This', action:'ai' }
  }
};

function eliaNotif(id) {
  var d = ELIA_DATA[id]; if (!d) return;
  document.getElementById('enTtl').textContent = d.title;
  document.getElementById('enSub').textContent = d.sub;
  var icon = document.getElementById('enIcon');
  icon.style.background = d.iconBg;
  icon.style.color = d.iconClr;
  icon.innerHTML = d.iconSvg;

  var statsHtml = '<div class="en-stat-grid">' +
    d.stats.map(function(s) {
      return '<div class="en-stat"><div class="en-stat-v">' + s.v + '</div><div class="en-stat-l">' + s.l + '</div></div>';
    }).join('') + '</div>';

  var pointsHtml = d.points.map(function(p) {
    return '<div class="en-point"><div class="en-point-dot" style="background:' + p.clr + ';"></div><div>' + p.text + '</div></div>';
  }).join('');

  document.getElementById('enBd').innerHTML =
    '<div style="display:inline-flex;align-items:center;gap:6px;padding:3px 11px;border-radius:100px;background:' + d.iconBg + ';margin-bottom:14px;">' +
      '<span style="font-size:.69rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:' + d.iconClr + ';">' + d.label + '</span>' +
    '</div>' +
    '<p style="font-size:.85rem;color:var(--ink-soft);line-height:1.7;margin-bottom:18px;">' + d.summary + '</p>' +
    statsHtml +
    '<div class="en-divider">Elia\'s Analysis</div>' +
    pointsHtml;

  var ft =
    '<button class="en-btn sec" onclick="enClose();setTimeout(function(){dbNav(\'' + d.sec.action + '\')},180)">' + d.sec.label + '</button>' +
    '<button class="en-btn ' + (d.type === 'opp' ? 'grn' : 'pri') + '" onclick="enClose();setTimeout(function(){' +
      (d.pri.action.startsWith('txpage') || d.pri.action === 'unit-a'
        ? 'openTransactionPage(\'' + d.pri.action + '\')'
        : 'dbNav(\'' + d.pri.action + '\')') +
    '},180)">' + d.pri.label + '</button>';

  document.getElementById('enFt').innerHTML = ft;
  document.getElementById('enOv').classList.add('open');
}
function enClose() { document.getElementById('enOv').classList.remove('open'); }
