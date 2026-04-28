// ══════════════════════════════════════════════════════════════════════
// INTERNAL (role / WM / SA)  —  script chunk #1/1
// Extracted verbatim from aidi_merged.html — do not modify structurally.
// Each chunk was its own <script> tag in the source and must remain so
// (otherwise same-named top-level declarations across chunks collide).
// ══════════════════════════════════════════════════════════════════════
// ── Client data ──
const clients = {
  emeka:  { name:'Emeka Okafor',     initials:'EO', color:'var(--blue)',    aum:'$18.4M', sub:'$18.4M AUM · Individual + LLC + Trust', portval:'$18.4M', portchg:'▲ +$780K (4.2%) YTD', entities:'3', cash:'$1.2M', risk:'High', riskColor:'#f87171', username:'emeka.okafor', email:'emeka@example.com', docStatus:'3 missing' },
  fatima: { name:'Fatima Al-Rashid', initials:'FA', color:'var(--green)',   aum:'$31.2M', sub:'$31.2M AUM · LLC · Trust · Individual',  portval:'$31.2M', portchg:'▲ +$2.4M (7.8%) YTD', entities:'2', cash:'$2.1M', risk:'Medium', riskColor:'var(--gold)', username:'fatima.alrashid', email:'fatima@example.com', docStatus:'Complete' },
  kwame:  { name:'Kwame Boateng',    initials:'KB', color:'var(--gold)',    aum:'$8.9M',  sub:'$8.9M AUM · Individual · Onboarding',    portval:'$8.9M',  portchg:'—',                  entities:'1', cash:'$8.9M', risk:'Low',    riskColor:'var(--green)', username:'kwame.boateng',  email:'kwame@example.com',  docStatus:'5 missing' },
  priya:  { name:'Priya Sharma',     initials:'PS', color:'#7C3AED',       aum:'$4.2M',  sub:'$4.2M AUM · Individual · Active',         portval:'$4.2M',  portchg:'▲ +$260K (6.1%) YTD', entities:'1', cash:'$320K', risk:'Low', riskColor:'var(--green)', username:'priya.sharma', email:'priya@example.com', docStatus:'Complete' },
  ibrahim:{ name:'Ibrahim Hassan',   initials:'IH', color:'#0E7490',       aum:'$12.1M', sub:'$12.1M AUM · Individual · Cross-border',  portval:'$12.1M', portchg:'▲ +$660K (5.5%) YTD', entities:'1', cash:'$1.8M', risk:'Medium', riskColor:'var(--gold)', username:'ibrahim.hassan', email:'ibrahim@example.com', docStatus:'Passport expiring' }
};

let currentCW = null;
let currentScreen = 'screen-role';

// ── Screen navigation ──
function goScreen(id) {
  // Hide all screens and all auth pages
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.int-auth-page').forEach(p => { p.style.display = 'none'; });
  const el = document.getElementById(id);
  if (!el) return;
  // Auth pages need display:flex; regular screens use the .active class
  if (el.classList.contains('int-auth-page')) {
    el.style.display = 'flex';
  } else {
    el.classList.add('active');
  }
  currentScreen = id;
  closeAllDropdowns();
}

// ── WM Onboard ──
function goWMOnboard() {
  // Hide any visible auth pages
  document.querySelectorAll('.int-auth-page').forEach(p => { p.style.display = 'none'; });
  // Show first step of new wizard
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('[id^="wm-onboard-"]').forEach(s => s.classList.remove('active'));
  const first = document.getElementById('wm-onboard-1');
  if (first) first.classList.add('active');
}

// ── Wizard ──
function wizGo(n) {
  // Hide all wm-onboard screens
  document.querySelectorAll('[id^="wm-onboard-"]').forEach(s => s.classList.remove('active'));
  const step = document.getElementById('wm-onboard-' + n);
  if (step) step.classList.add('active');
}
function wizComplete() {
  document.querySelectorAll('[id^="wm-onboard-"]').forEach(s => s.classList.remove('active'));
  const s = document.getElementById('wm-onboard-success');
  if (s) s.classList.add('active');
}

// ── SA role setup ──
const saRoles = {
  full:    { pill:'Super Admin', pillStyle:'background:var(--gold-pale);color:var(--gold)', av:'SA', avStyle:'linear-gradient(135deg,var(--ink) 0%,#2a4a70 100%)', name:'Super Admin', roleLabel:'Full Platform Access', homeSub:'Aidi Internal — Super Admin', nav:['home','approvals','trade','entities','advisors','clients','plans','team','tax','legal','compliance','msgs','audit','blog','settings'] },
  support: { pill:'Aidi Support', pillStyle:'background:var(--green-pale);color:var(--green)', av:'SP', avStyle:'linear-gradient(135deg,var(--ink) 0%,#2a4a70 100%)', name:'Aidi Support', roleLabel:'Gold · Entity · Plan Approvals', homeSub:'Aidi Internal — Support Team', nav:['home','approvals','trade','compliance','msgs'] },
  legal:   { pill:'Aidi Legal / Tax', pillStyle:'background:#F3E8FF;color:#7C3AED', av:'LG', avStyle:'linear-gradient(135deg,var(--ink) 0%,#2a4a70 100%)', name:'Aidi Legal / Tax', roleLabel:'Entity Filings · Tax · Agreements', homeSub:'Aidi Internal — Legal & Tax', nav:['home','entities','tax','legal','compliance','msgs','audit'] }
};

const saNavDefs = {
  home:       { icon:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>', title:'Dashboard' },
  approvals:  { icon:'<svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>', title:'Approvals', badge:'23' },
  trade:      { icon:'<svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/><line x1="4" y1="4" x2="20" y2="4"/></svg>', title:'Trade Centre' },
  entities:   { icon:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>', title:'Entities' },
  advisors:   { icon:'<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', title:'Advisors' },
  clients:    { icon:'<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', title:'All Clients' },
  plans:      { icon:'<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>', title:'Plans & Payments' },
  team:       { icon:'<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', title:'Team', spacerBefore:true },
  tax:        { icon:'<svg viewBox="0 0 24 24" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>', title:'Tax Docs', spacerBefore:true },
  legal:      { icon:'<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>', title:'Legal' },
  compliance: { icon:'<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>', title:'Compliance' },
  audit:      { icon:'<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="16" y1="13" x2="8" y2="13"/></svg>', title:'Audit Log' },
  blog:       { icon:'<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>', title:'Blog' },
  msgs:       { icon:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>', title:'Messages', spacerBefore:true },
  settings:   { icon:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>', title:'Settings', spacerBefore:false }
};

function goSA(role) {
  document.querySelectorAll('.int-auth-page').forEach(p => { p.style.display = 'none'; });
  goScreen('screen-admin');
  const r = saRoles[role];
  // role pill
  const pill = document.getElementById('sa-role-pill');
  pill.textContent = r.pill;
  pill.style.cssText = r.pillStyle + ';padding:3px 10px;border-radius:100px;font-size:.68rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;';
  // avatar
  const av = document.getElementById('sa-av');
  av.textContent = r.av;
  av.style.background = r.avStyle;
  document.getElementById('sa-drop-av').textContent = r.av;
  document.getElementById('sa-drop-av').style.background = r.avStyle;
  document.getElementById('sa-drop-name').textContent = r.name;
  document.getElementById('sa-drop-role').textContent = r.roleLabel;
  document.getElementById('sa-home-sub').textContent = r.homeSub;
  // build sidebar
  const sidebar = document.getElementById('sa-sidebar');
  sidebar.innerHTML = '';
  let spacerAdded = false;
  r.nav.forEach((key, i) => {
    const def = saNavDefs[key];
    if (def.spacerBefore && !spacerAdded) {
      sidebar.innerHTML += '<div class="db-sidebar-spacer"></div>';
      spacerAdded = true;
    }
    const badge = def.badge ? `<div class="db-nav-icon-badge red">${def.badge}</div>` : '';
    sidebar.innerHTML += `<div class="db-nav-icon${i===0?' active':''}" id="sa-nav-${key}" onclick="saNav('${key}')" title="${def.title}">${def.icon}${badge}</div>`;
  });
  if (!spacerAdded) sidebar.innerHTML += '<div class="db-sidebar-spacer"></div>';
  saNav('home');
}

// ── WM nav ──
function wmNav(sec) {
  document.querySelectorAll('#screen-wm .db-nav-icon').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('#screen-wm .db-section').forEach(el => { el.classList.remove('active'); if (el.id === 'wm-ai') el.style.display = 'none'; });
  var dbMain = document.querySelector('#screen-wm .db-main');
  if (dbMain) dbMain.style.overflow = sec === 'ai' ? 'hidden' : '';

  const navEl = document.getElementById('wm-nav-' + sec);
  const secEl = document.getElementById('wm-' + sec);
  if (navEl) navEl.classList.add('active');
  if (secEl) {
    secEl.classList.add('active');
    if (sec === 'ai') { secEl.style.display = 'flex'; eliaInit(); }
  }
  if (sec === 'tasks') requestAnimationFrame(function(){ calInit(); });
  if (sec === 'msgs') requestAnimationFrame(function(){ msgsInit(); });
  if (sec === 'tax') requestAnimationFrame(function(){ taxInit(); });
  if (sec === 'settings') wset('profile');
}

function wset(panel) {
  var tabs = ['profile','security','notifications','integrations','appearance','billing'];
  document.querySelectorAll('#wm-settings .sett-nav-item').forEach(function(el){ el.classList.remove('active'); });
  tabs.forEach(function(t){ var p = document.getElementById('wm-span-' + t); if (p) p.style.display = 'none'; });
  var ni = document.getElementById('wm-snav-' + panel);
  var sp = document.getElementById('wm-span-' + panel);
  if (ni) ni.classList.add('active');
  if (sp) sp.style.display = 'block';
}

// ── SA nav ──
function saNav(sec) {
  document.querySelectorAll('#sa-sidebar .db-nav-icon').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('#screen-admin .db-section').forEach(el => el.classList.remove('active'));
  const navEl = document.getElementById('sa-nav-' + sec);
  const secEl = document.getElementById('sa-' + sec);
  if (navEl) navEl.classList.add('active');
  if (secEl) secEl.classList.add('active');
  // Lock outer scroll on msgs page so only inner panes scroll
  var dbMain = document.querySelector('#screen-admin .db-main');
  if (dbMain) dbMain.style.overflowY = sec === 'msgs' ? 'hidden' : 'auto';
  if (sec === 'msgs') { setTimeout(saMsgsInit, 50); }
  if (sec === 'trade') {
    // Draw precious metals chart immediately since Metals is the default active tab
    setTimeout(drawMetalChart, 80);
  }
  if (sec === 'blog') {
    var ed = document.getElementById('blogEditor');
    var li = document.getElementById('blogPostList');
    if (ed) ed.style.display = 'none';
    if (li) li.style.display = 'block';
    requestAnimationFrame(function() { if (typeof blogRenderList === 'function') blogRenderList(); });
  }
  if (sec === 'settings') sset('profile');
}

function sset(panel) {
  document.querySelectorAll('#sa-settings .s-nav-item').forEach(function(el){ el.classList.remove('on'); });
  document.querySelectorAll('#sa-settings .s-panel').forEach(function(el){ el.classList.remove('on'); });
  var ni = document.getElementById('ssn-' + panel);
  var sp = document.getElementById('ssp-' + panel);
  if (ni) ni.classList.add('on');
  if (sp) sp.classList.add('on');
}

// ── Client workspace ──
function openCW(clientId) {
  currentCW = clientId;
  const c = clients[clientId] || {};
  const _g = function(id) { return document.getElementById(id); };
  const _s = function(id, val) { var el = _g(id); if (el) el.textContent = val; };
  var av = _g('cw-av');
  if (av) { av.textContent = c.initials || clientId.toUpperCase().slice(0,2); av.style.background = c.color || 'var(--ink)'; }
  _s('cw-name',       c.name || clientId);
  _s('cw-sub',        c.sub || '');
  _s('cw-portval',    c.portval || '—');
  _s('cw-portchg',    c.portchg || '—');
  _s('cw-entities',   c.entities || '1');
  _s('cw-cash',       c.cash || '—');
  var riskEl = _g('cw-risk');
  if (riskEl) { riskEl.textContent = c.risk || '—'; riskEl.style.color = c.riskColor || 'var(--ink)'; }
  _s('cw-doc-status', c.docStatus || '—');
  _s('cw-av-msg',     c.initials || '');
  _s('cw-username',   c.username || '—');
  _s('cw-email',      c.email || '—');
  _s('trade-client-label', 'Client: ' + (c.name || clientId));
  currentWMTxClient = clientId;
  cwTab('overview');
  document.getElementById('cw-ov').classList.add('open');
  document.body.style.overflow = 'hidden';
  closeAllDropdowns();
}

function closeCW() {
  document.getElementById('cw-ov').classList.remove('open');
  document.body.style.overflow = '';
  currentCW = null;
}

function cwTab(tab) {
  document.querySelectorAll('#cw-modal .cw-tab-item').forEach(function(el) {
    el.classList.remove('active');
    el.style.borderBottomColor = 'transparent';
    el.style.color = 'var(--ink-soft)';
    el.style.fontWeight = '400';
  });
  document.querySelectorAll('.cw-tab-view').forEach(el => el.classList.remove('active'));
  var ti = document.getElementById('cwt-' + tab);
  var tv = document.getElementById('cwv-' + tab);
  if (ti) {
    ti.classList.add('active');
    ti.style.borderBottomColor = 'var(--ink)';
    ti.style.color = 'var(--ink)';
    ti.style.fontWeight = '600';
  }
  if (tv) tv.classList.add('active');
}

function setCWMode(mode) {
  const ov = document.getElementById('cw-ov');
  const advBtn = document.getElementById('vt-adv');
  const cliBtn = document.getElementById('vt-cli');
  if (mode === 'advisor') {
    ov.classList.remove('client-mode');
    advBtn.style.background = 'white'; advBtn.style.boxShadow = '0 1px 3px rgba(12,26,46,.08)'; advBtn.style.color = 'var(--ink)';
    cliBtn.style.background = 'transparent'; cliBtn.style.boxShadow = 'none'; cliBtn.style.color = 'var(--ink-soft)';
  } else {
    ov.classList.add('client-mode');
    cliBtn.style.background = 'white'; cliBtn.style.boxShadow = '0 1px 3px rgba(12,26,46,.08)'; cliBtn.style.color = 'var(--ink)';
    advBtn.style.background = 'transparent'; advBtn.style.boxShadow = 'none'; advBtn.style.color = 'var(--ink-soft)';
  }
}

function openClientNewTab(clientId) {
  // [merged build] In the single-file merge, there is no aidi_dashboard.html
  // to link to. Open the current page in a new tab with a hash that tells
  // the router to jump directly to the client sign-in flow.
  try {
    var u = new URL(window.location.href);
    u.hash = 'client-signin';
    window.open(u.toString(), '_blank');
  } catch(e) {
    window.open(window.location.pathname + '#client-signin', '_blank');
  }
}

// ── Trade panel (legacy aliases — now using full tx-pages) ──
function openTradePanel(clientId, type, deal) {
  if (clientId) currentWMTxClient = clientId;
  wmNav('trade');
}
function closeTradePanel() { closeWMTx(); }

// ── Modals ──
function openModal(id, clientId) {
  if (id === 'modal-creds' && clientId && clients[clientId]) {
    const c = clients[clientId];
    document.getElementById('creds-for').textContent = c.name;
    document.getElementById('cred-un').value = c.username;
  } else if (id === 'modal-creds') {
    document.getElementById('creds-for').textContent = 'new client';
    document.getElementById('cred-un').value = '';
  }
  document.getElementById(id).classList.add('open');
  closeAllDropdowns();
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ── Approvals ──
function filterAP_old(type, el) {
  document.querySelectorAll('.ap-filter').forEach(f => {
    f.style.background = 'transparent'; f.style.color = 'var(--ink-soft)'; f.style.border = '1px solid var(--cream-dark)';
  });
  el.style.background = 'var(--ink)'; el.style.color = 'white'; el.style.border = '1px solid var(--ink)';
  document.querySelectorAll('#ap-list .ap-item').forEach(item => {
    item.style.display = (type === 'all' || item.dataset.type === type) ? 'flex' : 'none';
  });
}

function approveAP(btn, msg) {
  const item = btn.closest('.ap-item');
  item.style.opacity = '0'; item.style.transform = 'translateX(20px)'; item.style.transition = 'all .3s';
  setTimeout(() => item.remove(), 300);
  showToast('Approved — ' + msg + ' ✓');
}

function denyAP(btn) {
  const item = btn.closest('.ap-item');
  item.style.opacity = '0'; item.style.transform = 'translateX(-20px)'; item.style.transition = 'all .3s';
  setTimeout(() => item.remove(), 300);
  showToast('Request denied');
}

// ── Team permissions preview ──
function updateTeamPermissions(role) {
  const preview = document.getElementById('team-perms-preview');
  const perms = {
    sa:      '✓ Full platform access — all sections, all clients, all approvals, team management\n✓ Can add or remove team members\n✓ Can preview any role\'s restricted view',
    support: '✓ Approval queue — gold & metals, entity submissions, plan upgrades\n✓ KYC document queue and onboarding items\n✓ Compliance queue (view only)\n✗ No private markets, legal docs, tax, trade instructions, or team management',
    legal:   '✓ Entity filings, structuring requests, operating agreements\n✓ Signed agreements and compliance document review\n✓ Legal review queue and entity approval\n✓ Compliance queue and audit log\n✗ No gold approvals, trade instructions, plans, or team management',
    tax:     '✓ Tax document upload for any client\n✓ Review and finalize tax documents submitted by wealth managers\n✓ Full tax document queue across all clients\n✗ No trading, entity filings, gold approvals, or team management'
  };
  if (role && perms[role]) {
    preview.style.display = 'block';
    preview.style.whiteSpace = 'pre-line';
    preview.textContent = perms[role];
  } else {
    preview.style.display = 'none';
  }
}

// ── Notifications ──
function toggleNotif(id) {
  const el = document.getElementById(id);
  const isOpen = el.classList.contains('open');
  closeAllDropdowns();
  if (!isOpen) el.classList.add('open');
}

function wmNotifClick(section, item) {
  // Mark this item as read
  const dot = item.querySelector('.notif-dot');
  if (dot) dot.classList.add('read');
  // Update badge count
  wmUpdateNotifBadge();
  // Close panel and navigate
  closeAllDropdowns();
  wmNav(section);
}

function wmMarkAllRead() {
  document.querySelectorAll('#wm-notif .notif-dot').forEach(function(d) {
    d.classList.add('read');
  });
  wmUpdateNotifBadge();
  // Briefly show feedback then close
  const mark = document.querySelector('#wm-notif .notif-head-mark');
  if (mark) { mark.textContent = '✓ All read'; mark.style.color = 'var(--green)'; }
  setTimeout(function() {
    closeAllDropdowns();
    const mark2 = document.querySelector('#wm-notif .notif-head-mark');
    if (mark2) { mark2.textContent = 'Mark all read'; mark2.style.color = 'var(--blue)'; }
  }, 800);
}

function wmUpdateNotifBadge() {
  const unread = document.querySelectorAll('#wm-notif .notif-dot:not(.read)').length;
  const badge = document.querySelector('#wm-notif ~ * .db-notif-badge, .db-notif-badge');
  // Find the WM notif badge specifically
  const wmBadge = document.querySelector('#screen-wm .db-notif-badge');
  if (wmBadge) wmBadge.textContent = unread > 0 ? unread : '';
  if (wmBadge) wmBadge.style.display = unread > 0 ? '' : 'none';
}

function saNotifClick(section, item) {
  const dot = item.querySelector('.notif-dot');
  if (dot) dot.classList.add('read');
  saUpdateNotifBadge();
  closeAllDropdowns();
  saNav(section);
}

function saMarkAllRead() {
  document.querySelectorAll('#sa-notif .notif-dot').forEach(function(d) {
    d.classList.add('read');
  });
  saUpdateNotifBadge();
  const mark = document.querySelector('#sa-notif .notif-head-mark');
  if (mark) { mark.textContent = '✓ All read'; mark.style.color = 'var(--green)'; }
  setTimeout(function() {
    closeAllDropdowns();
    const mark2 = document.querySelector('#sa-notif .notif-head-mark');
    if (mark2) { mark2.textContent = 'Mark all read'; mark2.style.color = 'var(--blue)'; }
  }, 800);
}

function saUpdateNotifBadge() {
  const unread = document.querySelectorAll('#sa-notif .notif-dot:not(.read)').length;
  const saBadge = document.querySelector('#screen-admin .db-notif-badge');
  if (saBadge) saBadge.textContent = unread > 0 ? unread : '';
  if (saBadge) saBadge.style.display = unread > 0 ? '' : 'none';
}

// ── User dropdowns ──
function toggleDrop(id) {
  const el = document.getElementById(id);
  const isOpen = el.classList.contains('open');
  closeAllDropdowns();
  if (!isOpen) el.classList.add('open');
}

function closeAllDropdowns() {
  document.querySelectorAll('.user-dropdown, .notif-dd').forEach(d => d.classList.remove('open'));
}

// ── Close dropdowns on outside click ──
document.addEventListener('click', function(e) {
  if (!e.target.closest('.db-user-btn') && !e.target.closest('.db-notif-btn') && !e.target.closest('.notif-dd')) {
    closeAllDropdowns();
  }
});

// ── Credential utilities ──
function genPw(inputId) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&';
  let pw = '';
  for (let i = 0; i < 16; i++) pw += chars[Math.floor(Math.random() * chars.length)];
  const el = document.getElementById(inputId);
  el.value = pw;
  el.type = 'text';
  showToast('Strong password generated');
  setTimeout(() => { el.type = 'password'; }, 2500);
}

function togglePw(inputId, btn) {
  const el = document.getElementById(inputId);
  el.type = el.type === 'password' ? 'text' : 'password';
}

function selectOne(el) {
  const siblings = el.parentElement.querySelectorAll('.type-card');
  siblings.forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
}

// ── Toast ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── Role preview (SA previewing a team member's restricted view) ──
let _saPreviewActive = false;

function previewRole(role, memberName) {
  _saPreviewActive = true;
  const r = saRoles[role];
  // Update pill and avatar to show whose view we're previewing
  const pill = document.getElementById('sa-role-pill');
  pill.textContent = r.pill;
  pill.style.cssText = r.pillStyle + ';padding:3px 10px;border-radius:100px;font-size:.68rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;';
  const av = document.getElementById('sa-av');
  const initials = memberName.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
  av.textContent = initials;
  av.style.background = r.avStyle;
  document.getElementById('sa-drop-name').textContent = memberName;
  document.getElementById('sa-drop-role').textContent = r.roleLabel + ' (Preview)';
  // Rebuild sidebar with restricted nav
  const sidebar = document.getElementById('sa-sidebar');
  sidebar.innerHTML = '';
  let spacerAdded = false;
  r.nav.forEach((key, i) => {
    const def = saNavDefs[key];
    if (def.spacerBefore && !spacerAdded) { sidebar.innerHTML += '<div class="db-sidebar-spacer"></div>'; spacerAdded = true; }
    const badge = def.badge ? `<div class="db-nav-icon-badge red">${def.badge}</div>` : '';
    sidebar.innerHTML += `<div class="db-nav-icon${i===0?' active':''}" id="sa-nav-${key}" onclick="saNav('${key}')" title="${def.title}">${def.icon}${badge}</div>`;
  });
  if (!spacerAdded) sidebar.innerHTML += '<div class="db-sidebar-spacer"></div>';
  // Show preview banner
  showPreviewBanner(memberName, role);
  saNav(r.nav[0]);
}

function showPreviewBanner(name, role) {
  let banner = document.getElementById('sa-preview-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'sa-preview-banner';
    banner.style.cssText = 'position:fixed;top:56px;left:56px;right:0;z-index:199;background:var(--ink);color:white;padding:8px 20px;display:flex;align-items:center;justify-content:space-between;font-size:.8rem;';
    document.getElementById('screen-admin').querySelector('.db-body').style.paddingTop = '37px';
    document.getElementById('screen-admin').querySelector('.db-body').style.position = 'relative';
    banner.innerHTML = `<span>👁 Previewing <strong>${name}</strong>'s restricted view — they can only see the sections shown in the sidebar</span><button onclick="exitPreviewRole()" style="padding:5px 14px;border-radius:100px;background:white;color:var(--ink);border:none;font-size:.76rem;font-weight:600;cursor:pointer;">← Exit Preview</button>`;
    document.getElementById('screen-admin').appendChild(banner);
  } else {
    banner.style.display = 'flex';
    banner.querySelector('span').innerHTML = `👁 Previewing <strong>${name}</strong>'s restricted view — they can only see the sections shown in the sidebar`;
  }
}

function exitPreviewRole() {
  _saPreviewActive = false;
  const banner = document.getElementById('sa-preview-banner');
  if (banner) banner.style.display = 'none';
  // Restore full super admin view
  goSA('full');
  saNav('team');
}

// ── Role preview (SA previewing a team member's restricted view) ──
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeAllDropdowns();
    closeWMTx();
    document.querySelectorAll('.modal-ov.open').forEach(m => m.classList.remove('open'));
    closeCW();
    document.getElementById('wmTxConfirmOverlay').classList.remove('open');
  }
});

// ── Internal Auth Functions ──
function wmHandleMagicLink() {
  // Navigate immediately to the WM dashboard. The original code had a
  // 1200ms simulated magic-link delay and called goScreen + wmNav while
  // still on the signin route — neither is needed in Nuxt where each
  // screen is its own route. layouts/internal.vue activates the screen
  // on mount; wmNav('home') is the default WM nav state already.
  document.querySelectorAll('.int-auth-page').forEach(function(p) { p.style.display = 'none'; });
  goScreen('screen-wm');
  wmNav('home');
}

function wmStartOnboarding() {
  // New user → hide all auth pages then go to wizard
  document.querySelectorAll('.int-auth-page').forEach(p => { p.style.display = 'none'; });
  goWMOnboard();
}

function saHandleMagicLink() {
  // Navigate immediately to the SA dashboard. The original 1200ms
  // simulated magic-link delay is removed. We can't call goSA('full')
  // here because the dashboard DOM doesn't exist yet on the signin
  // route — it would throw on the next line trying to write to a null
  // sa-role-pill, breaking Vue's Suspense and leaving a blank page.
  // layouts/internal.vue's initScreenForRoute() runs goSA('full')
  // automatically once the dashboard mounts, so the sidebar / role
  // pill / avatar all get populated correctly.
  document.querySelectorAll('.int-auth-page').forEach(function(p) { p.style.display = 'none'; });
  goScreen('screen-admin');
}

// ── Internal Platform Search ──
var INT_SEARCH_DATA = {
  wm: [
    // Clients
    { type:'client', id:'emeka',   name:'Emeka Okafor',     sub:'HNWI · $18.4M AUM · 5 positions',         icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', iconBg:'var(--blue-pale)', iconColor:'var(--blue)',    tags:['emeka','okafor','client','hnwi','aum'],     action:function(){ openCW('emeka'); } },
    { type:'client', id:'fatima',  name:'Fatima Al-Rashid', sub:'HNWI · $31.2M AUM · 6 positions',         icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', iconBg:'var(--green-pale)', iconColor:'var(--green)', tags:['fatima','rashid','client','hnwi','aum'],    action:function(){ openCW('fatima'); } },
    { type:'client', id:'kwame',   name:'Kwame Boateng',    sub:'HNWI · $8.9M AUM · 4 positions',          icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', iconBg:'var(--gold-pale)',  iconColor:'var(--gold)',  tags:['kwame','boateng','client','aum'],           action:function(){ openCW('kwame'); } },
    { type:'client', id:'priya',   name:'Priya Sharma',     sub:'HNWI · $4.2M AUM · 3 positions',          icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', iconBg:'#F3E8FF',            iconColor:'#7C3AED',      tags:['priya','sharma','client','aum'],            action:function(){ openCW('priya'); } },
    { type:'client', id:'ibrahim', name:'Ibrahim Hassan',   sub:'HNWI · $12.1M AUM · 5 positions',         icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', iconBg:'#ECFEFF',            iconColor:'#0E7490',      tags:['ibrahim','hassan','client','aum'],          action:function(){ openCW('ibrahim'); } },
    // Assets / Trade
    { type:'trade', id:'wm-spy',   name:'S&P 500 ETF (SPY)',        sub:'NYSE ARCA · $583.42 · Aidi',  icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['spy','s&p','500','etf','equities','trade'],  action:function(){ wmNav('trade'); openWMTxPage('spy'); } },
    { type:'trade', id:'wm-aapl',  name:'Apple Inc. (AAPL)',         sub:'NASDAQ · $214.44 · Aidi',    icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['aapl','apple','nasdaq','equities','trade'],  action:function(){ wmNav('trade'); openWMTxPage('aapl'); } },
    { type:'trade', id:'wm-nvda',  name:'NVIDIA Corp. (NVDA)',       sub:'NASDAQ · $875.39 · Aidi',    icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['nvda','nvidia','nasdaq','equities','trade'],  action:function(){ wmNav('trade'); openWMTxPage('nvda'); } },
    { type:'trade', id:'wm-btc',   name:'Bitcoin (BTC)',             sub:'Crypto · $93,407 · Aidi',        icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/></svg>', iconBg:'#FFF7ED', iconColor:'#EA580C', tags:['btc','bitcoin','crypto','trade'],           action:function(){ wmNav('trade'); openWMTxPage('btc'); } },
    { type:'trade', id:'wm-gold',  name:'Allocated Gold',            sub:'Precious Metals · $3,142/oz · Admin route', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 6.5 19 17.5 12 22 5 17.5 5 6.5"/></svg>', iconBg:'var(--gold-pale)', iconColor:'var(--gold)', tags:['gold','vault','precious','metals'],         action:function(){ wmNav('trade'); openWMTxPage('gold'); } },
    { type:'trade', id:'wm-tbill', name:'90-Day T-Bill',             sub:'US Treasury · 5.18% · Aidi', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['tbill','treasury','t-bill','fixed income'],  action:function(){ wmNav('trade'); openWMTxPage('tbill'); } },
    // Opportunities
    { type:'opp', id:'wm-bridge',  name:'Bridge Loan Fund III',      sub:'Private Credit · 10.5% target · Min $25K',  icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>', iconBg:'var(--blue-pale)', iconColor:'var(--blue)', tags:['bridge','loan','fund','credit','private'],  action:function(){ wmNav('opps'); openWMTxPage('bridge'); } },
    { type:'opp', id:'wm-termii', name:'Termii — AI Payments',      sub:'Private Equity · Series B · $5M ARR',      icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>', iconBg:'var(--blue-pale)', iconColor:'var(--blue)', tags:['termii','private','equity','ai','payments'], action:function(){ wmNav('opps'); openWMTxPage('termii'); } },
    { type:'opp', id:'wm-rayda',  name:'Rayda — IT Asset Mgmt',     sub:'Private Equity · Series B · $5.4M ARR',    icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>', iconBg:'var(--blue-pale)', iconColor:'var(--blue)', tags:['rayda','it','asset','private','equity'],     action:function(){ wmNav('opps'); openWMTxPage('rayda'); } },
    { type:'opp', id:'wm-unita',  name:'Modern Stylish Home',       sub:'Real Estate · San Jose, CA · 5% cap rate', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>', iconBg:'var(--green-pale)', iconColor:'var(--green)', tags:['unit','real estate','property','san jose'],  action:function(){ wmNav('opps'); openWMTxPage('unit-a'); } },
    // Pages
    { type:'page', id:'wm-home',     name:'Dashboard Home',   sub:'AUM overview, priority clients, AI insights',  icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',                                      iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['home','dashboard','aum','overview'],          action:function(){ wmNav('home'); } },
    { type:'page', id:'wm-clients',  name:'Clients',          sub:'All clients, KYC status, portfolios',          icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>',            iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['clients','kyc','portfolio','all'],            action:function(){ wmNav('clients'); } },
    { type:'page', id:'wm-orders',   name:'Order History',    sub:'All submitted trade instructions',             icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',                                        iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['orders','history','instructions','trades'],   action:function(){ wmNav('orders'); } },
    { type:'page', id:'wm-tasks',    name:'Tasks',            sub:'Pending actions and client follow-ups',        icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['tasks','actions','follow','pending'],         action:function(){ wmNav('tasks'); } },
    { type:'page', id:'wm-ai',       name:'AI Insights',      sub:'Portfolio analysis and recommendations',       icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',        iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['ai','insights','analysis','intelligence'],   action:function(){ wmNav('ai'); } },
  ],
  sa: [
    // Clients
    { type:'client', id:'sa-emeka',   name:'Emeka Okafor',     sub:'Client · $18.4M AUM · WM: Sarah Mensah',     icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', iconBg:'var(--blue-pale)',  iconColor:'var(--blue)',  tags:['emeka','okafor','client','aum'],   action:function(){ saNav('clients'); } },
    { type:'client', id:'sa-fatima',  name:'Fatima Al-Rashid', sub:'Client · $31.2M AUM · WM: Sarah Mensah',     icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', iconBg:'var(--green-pale)', iconColor:'var(--green)', tags:['fatima','rashid','client','aum'],  action:function(){ saNav('clients'); } },
    // Approvals
    { type:'approval', id:'sa-gold-apr',   name:'Gold Purchase — Priya Sharma',     sub:'Pending · $25,000 · WM: Sarah Mensah', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 6.5 19 17.5 12 22 5 17.5 5 6.5"/></svg>', iconBg:'var(--gold-pale)', iconColor:'var(--gold)', tags:['gold','purchase','approval','pending'],        action:function(){ saNav('approvals'); } },
    { type:'approval', id:'sa-bridge-apr', name:'Bridge Fund III — Emeka Okafor',   sub:'Pending · $250,000 · Private Credit',  icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>', iconBg:'var(--blue-pale)', iconColor:'var(--blue)', tags:['bridge','fund','approval','pending','emeka'], action:function(){ saNav('approvals'); } },
    { type:'approval', id:'sa-wm-apr',     name:'WM Application — David Osei',      sub:'Pending · Licence review',             icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['wm','advisor','application','approval'],      action:function(){ saNav('approvals'); } },
    // Markets
    { type:'market', id:'sa-termii',  name:'Termii — AI Payments',  sub:'Private Equity · Open · 78% funded',  icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>', iconBg:'var(--blue-pale)', iconColor:'var(--blue)', tags:['termii','private','equity','deal'],  action:function(){ saNav('trade'); } },
    { type:'market', id:'sa-bridge',  name:'Bridge Loan Fund III',  sub:'Private Credit · Open · 52% funded',  icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>', iconBg:'var(--blue-pale)', iconColor:'var(--blue)', tags:['bridge','fund','private','credit'], action:function(){ saNav('trade'); } },
    // Advisors
    { type:'advisor', id:'sa-advisor-s', name:'Sarah Mensah',  sub:'Senior Wealth Manager · 5 clients · Active', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>', iconBg:'var(--green-pale)', iconColor:'var(--green)', tags:['sarah','mensah','advisor','wm'], action:function(){ saNav('advisors'); } },
    // Pages
    { type:'page', id:'sa-home',       name:'Dashboard Home',   sub:'Platform AUM, alerts, pending approvals',   icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',                                      iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['home','dashboard','aum','platform'],       action:function(){ saNav('home'); } },
    { type:'page', id:'sa-approvals',  name:'Approval Queue',   sub:'Pending trades, gold, entity, WM approvals', icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['approvals','queue','pending','review'],    action:function(){ saNav('approvals'); } },
    { type:'page', id:'sa-compliance', name:'Compliance',       sub:'KYC queue, AML review, regulatory status',   icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',                                      iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['compliance','kyc','aml','regulatory'],    action:function(){ saNav('compliance'); } },
    { type:'page', id:'sa-audit',      name:'Audit Log',        sub:'Immutable record of all platform actions',   icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['audit','log','history','actions'],        action:function(){ saNav('audit'); } },
    { type:'page', id:'sa-team',       name:'Team Management',  sub:'Roles, permissions and preview mode',        icon:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', iconBg:'var(--cream)', iconColor:'var(--ink-soft)', tags:['team','roles','permissions','staff'],    action:function(){ saNav('team'); } },
  ]
};

var intSearchFocusIdx = { wm: -1, sa: -1 };

var INT_SEARCH_LABELS = {
  client: 'Clients', trade: 'Trade', opp: 'Opportunities',
  approval: 'Pending Approvals', market: 'Private Markets',
  advisor: 'Advisors', page: 'Pages', news: 'Market News'
};

function intSearchQuery(val, role) {
  var q = val.trim().toLowerCase();
  var ddId = role === 'wm' ? 'wmSearchDropdown' : 'saSearchDropdown';
  var dd = document.getElementById(ddId);
  if (!dd) return;
  if (!q) { dd.classList.remove('open'); dd.innerHTML = ''; intSearchFocusIdx[role] = -1; return; }

  var data = INT_SEARCH_DATA[role] || [];
  var results = data.filter(function(d) {
    return d.tags.some(function(t){ return t.indexOf(q) > -1; }) ||
           d.name.toLowerCase().indexOf(q) > -1 ||
           d.sub.toLowerCase().indexOf(q) > -1;
  }).slice(0, 12);

  if (!results.length) {
    dd.innerHTML = '<div class="db-search-empty">No results for "' + val + '"</div>';
    dd.classList.add('open'); return;
  }

  // Group by type
  var groups = {};
  results.forEach(function(r){
    if (!groups[r.type]) groups[r.type] = [];
    groups[r.type].push(r);
  });

  var typeOrder = role === 'wm'
    ? ['client','trade','opp','page']
    : ['client','approval','market','advisor','page'];

  var html = '';
  typeOrder.forEach(function(type) {
    if (!groups[type] || !groups[type].length) return;
    html += '<div class="db-search-section-label">' + (INT_SEARCH_LABELS[type] || type) + '</div>';
    groups[type].forEach(function(r) {
      html += '<div class="db-search-item" data-search-id="' + r.id + '" data-role="' + role + '" onclick="intSearchSelect(\'' + r.id + '\',\'' + role + '\')">';
      html += '<div class="db-search-item-icon" style="background:' + r.iconBg + ';color:' + r.iconColor + ';">' + r.icon + '</div>';
      html += '<div style="flex:1;min-width:0;">';
      html += '<div class="db-search-item-name">' + r.name + '</div>';
      html += '<div class="db-search-item-sub">' + r.sub + '</div>';
      html += '</div></div>';
    });
    html += '<div class="db-search-divider"></div>';
  });

  dd.innerHTML = html;
  dd.classList.add('open');
  intSearchFocusIdx[role] = -1;
}

function intSearchSelect(id, role) {
  var data = INT_SEARCH_DATA[role] || [];
  var item = data.find(function(d){ return d.id === id; });
  if (item) {
    item.action();
    var ddId = role === 'wm' ? 'wmSearchDropdown' : 'saSearchDropdown';
    var inpId = role === 'wm' ? 'wmSearchInput' : 'saSearchInput';
    var dd = document.getElementById(ddId);
    var inp = document.getElementById(inpId);
    if (dd) dd.classList.remove('open');
    if (inp) inp.value = '';
    intSearchFocusIdx[role] = -1;
  }
}

function intSearchKeyNav(e, role) {
  var ddId = role === 'wm' ? 'wmSearchDropdown' : 'saSearchDropdown';
  var inpId = role === 'wm' ? 'wmSearchInput' : 'saSearchInput';
  var dd = document.getElementById(ddId);
  if (!dd) return;
  var items = dd.querySelectorAll('.db-search-item');
  if (!items.length) return;
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    intSearchFocusIdx[role] = Math.min(intSearchFocusIdx[role] + 1, items.length - 1);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    intSearchFocusIdx[role] = Math.max(intSearchFocusIdx[role] - 1, 0);
  } else if (e.key === 'Enter' && intSearchFocusIdx[role] > -1) {
    e.preventDefault();
    var id = items[intSearchFocusIdx[role]].dataset.searchId;
    if (id) intSearchSelect(id, role);
    return;
  } else if (e.key === 'Escape') {
    dd.classList.remove('open');
    var inp = document.getElementById(inpId);
    if (inp) inp.blur();
    return;
  }
  items.forEach(function(el, i){ el.classList.toggle('focused', i === intSearchFocusIdx[role]); });
  if (intSearchFocusIdx[role] > -1) items[intSearchFocusIdx[role]].scrollIntoView({ block:'nearest' });
}

// Close dropdowns on outside click
document.addEventListener('click', function(e) {
  ['wmSearchWrap','saSearchWrap'].forEach(function(wrapId) {
    var wrap = document.getElementById(wrapId);
    var role = wrapId === 'wmSearchWrap' ? 'wm' : 'sa';
    var ddId = role === 'wm' ? 'wmSearchDropdown' : 'saSearchDropdown';
    var dd = document.getElementById(ddId);
    if (wrap && !wrap.contains(e.target) && dd) dd.classList.remove('open');
  });
});

// ── WM Transaction Pages ──
let currentWMTxClient = null;

function openWMTxPage(assetId, clientId) {
  if (clientId) currentWMTxClient = clientId;
  closeCW();
  // Update client badge
  const badge = document.getElementById('wm-tx-client-' + assetId);
  if (badge) {
    if (currentWMTxClient && clients[currentWMTxClient]) {
      badge.textContent = clients[currentWMTxClient].name;
      badge.style.background = 'var(--blue-pale)';
      badge.style.color = 'var(--blue)';
    } else {
      badge.textContent = 'Select client in form';
      badge.style.background = 'var(--gold-pale)';
      badge.style.color = 'var(--gold)';
    }
  }
  // Update buying power
  const bpEl = document.getElementById('wm-bp-' + assetId);
  if (bpEl && currentWMTxClient && clients[currentWMTxClient]) {
    const cashVal = clients[currentWMTxClient].cash || '$318,000';
    bpEl.textContent = cashVal;
    // Keep wallet balance in sync with buying power
    const wbEl = document.getElementById('wm-wb-' + assetId);
    if (wbEl) wbEl.textContent = cashVal;
  }
  // Sync the in-page client selector dropdown
  const sel = document.getElementById('txClientSel-' + assetId);
  if (sel && currentWMTxClient) {
    sel.value = currentWMTxClient;
    // Trigger a silent update of buying power without changing currentWMTxClient
    const c = clients[currentWMTxClient];
    const bpEl = document.getElementById('wm-bp-' + assetId);
    if (bpEl && c) {
      const cashVal2 = c.cash || '$318,000';
      bpEl.textContent = cashVal2;
      const wbEl2 = document.getElementById('wm-wb-' + assetId);
      if (wbEl2) wbEl2.textContent = cashVal2;
    }
  }
  
  document.getElementById('wm-txpage-' + assetId).classList.add('open');
  setTimeout(() => drawWMChart(assetId), 80);
  closeAllDropdowns();
}

function closeWMTx() {
  document.querySelectorAll('.tx-page').forEach(p => p.classList.remove('open'));
}

function wmTxTab(btn, chartId) {
  btn.closest('.tx-chart-tabs').querySelectorAll('.tx-chart-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  drawWMChart(chartId.replace('wmChart-', ''));
}

function wmTxCalc(asset, price, shares, costId) {
  const total = (parseFloat(shares) || 0) * price;
  const el = document.getElementById(costId);
  if (el) el.textContent = '$' + total.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function wmTxCalcCrypto(usd, price, equivId, costId) {
  const amount = parseFloat(usd) || 0;
  const equiv = amount / price;
  const equivEl = document.getElementById(equivId);
  const costEl = document.getElementById(costId);
  const ticker = equivId.includes('Btc') || equivId.includes('btc') ? 'BTC' : 'ETH';
  if (equivEl) equivEl.textContent = `≈ ${equiv.toFixed(5)} ${ticker} · Market price $${price.toLocaleString()}`;
  if (costEl) costEl.textContent = '$' + amount.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function wmTxCalcTBill(val) {
  const amount = parseFloat(val) || 0;
  const income = amount * 0.0518 * (90/365);
  const incomeEl = document.getElementById('wmTbillIncome');
  const costEl = document.getElementById('wmTbillCost');
  if (incomeEl) incomeEl.textContent = '$' + income.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
  if (costEl) costEl.textContent = '$' + amount.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function wmTxCalcGold(val) {
  const amount = parseFloat(val) || 0;
  const oz = amount / 3142;
  const fee = amount * 0.0015;
  const equivEl = document.getElementById('wmGoldEquiv');
  const costEl = document.getElementById('wmGoldCost');
  if (equivEl) equivEl.textContent = `≈ ${oz.toFixed(3)} oz · Spot $3,142/oz`;
  if (costEl) costEl.textContent = '$' + (amount + fee).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function wmTxCalcSilver(val) {
  const amount = parseFloat(val) || 0;
  const oz = amount / 29.80;
  const fee = amount * 0.0015;
  const equivEl = document.getElementById('wmSilverEquiv');
  const costEl = document.getElementById('wmSilverCost');
  if (equivEl) equivEl.textContent = `≈ ${oz.toFixed(3)} troy oz · Spot $29.80/oz`;
  if (costEl) costEl.textContent = '$' + (amount + fee).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function wmTxSubmit(ticker, name, inputId, price, broker) {
  const shares = parseFloat(document.getElementById(inputId)?.value) || 0;
  if (!shares) { showToast('Please enter a quantity'); return; }
  const clientName = currentWMTxClient && clients[currentWMTxClient] ? clients[currentWMTxClient].name : 'No client selected';
  const total = shares * price;
  const brokerLabel = 'Aidi';
  showWMTxConfirm(
    'Order submitted',
    `Instruction routed to ${brokerLabel} on behalf of ${clientName}. Executes at next market open.`,
    [
      { k: 'Client', v: clientName },
      { k: 'Asset', v: `${ticker} — ${name}` },
      { k: 'Quantity', v: shares + ' shares' },
      { k: 'Estimated total', v: '$' + total.toLocaleString('en-US', {minimumFractionDigits:2}) },
      { k: 'Execution via', v: brokerLabel },
      { k: 'Admin approval', v: 'Not required · Direct execution' }
    ]
  );
  closeWMTx();
}

function wmTxSubmitCrypto(ticker, name, inputId, broker) {
  const amount = parseFloat(document.getElementById(inputId)?.value) || 0;
  if (!amount) { showToast('Please enter an amount'); return; }
  const clientName = currentWMTxClient && clients[currentWMTxClient] ? clients[currentWMTxClient].name : 'No client selected';
  showWMTxConfirm(
    'Crypto order submitted',
    `Instruction executed by Aidi on behalf of ${clientName}.`,
    [
      { k: 'Client', v: clientName },
      { k: 'Asset', v: `${ticker} — ${name}` },
      { k: 'Amount', v: '$' + amount.toLocaleString('en-US', {minimumFractionDigits:2}) },
      { k: 'Execution via', v: 'Aidi' },
      { k: 'Admin approval', v: 'Not required · Direct execution' }
    ]
  );
  closeWMTx();
}

function wmTxSubmitTBill() {
  const amount = parseFloat(document.getElementById('wmTbillAmount')?.value) || 0;
  if (!amount) { showToast('Please enter an amount'); return; }
  const clientName = currentWMTxClient && clients[currentWMTxClient] ? clients[currentWMTxClient].name : 'No client selected';
  const income = amount * 0.0518 * (90/365);
  showWMTxConfirm(
    'T-Bill order submitted',
    `Instruction executed by Aidi on behalf of ${clientName}.`,
    [
      { k: 'Client', v: clientName },
      { k: 'Asset', v: '90-Day Treasury Bill' },
      { k: 'Investment', v: '$' + amount.toLocaleString('en-US', {minimumFractionDigits:2}) },
      { k: 'Projected income', v: '$' + income.toFixed(2) + ' over 90 days' },
      { k: 'Execution via', v: 'Aidi' },
      { k: 'Admin approval', v: 'Not required · Direct execution' }
    ]
  );
  closeWMTx();
}

function wmTxSubmitAdminRoute(type, inputId, asset) {
  const amount = parseFloat(document.getElementById(inputId)?.value) || 0;
  if (!amount) { showToast('Please enter an amount'); return; }
  const clientName = currentWMTxClient && clients[currentWMTxClient] ? clients[currentWMTxClient].name : 'No client selected';
  showWMTxConfirm(
    'Submitted for admin approval',
    `Your ${type.toLowerCase()} request has been sent to the Aidi team for review. You'll be notified once approved — typically within 1 business day.`,
    [
      { k: 'Client', v: clientName },
      { k: 'Request type', v: type },
      { k: 'Amount', v: '$' + amount.toLocaleString('en-US', {minimumFractionDigits:2}) },
      { k: 'Status', v: 'Pending Aidi Admin Approval' },
      { k: 'SLA', v: '1 business day' }
    ]
  );
  closeWMTx();
}

function _wmGetBuyingPower() {
  // Read from whichever wm-bp-* element is currently visible in an open tx-page
  var openPage = document.querySelector('.tx-page.open');
  if (!openPage) return null;
  var bpEl = openPage.querySelector('[id^="wm-bp-"]');
  if (!bpEl) return null;
  var raw = bpEl.textContent.replace(/[^0-9.KMBkm]/g, '');
  // Parse shorthand like $320K, $1.2M
  var text = bpEl.textContent.trim();
  var num = 0;
  var m = text.match(/\$?([0-9.]+)\s*([KMB]?)/i);
  if (m) {
    num = parseFloat(m[1]);
    if (m[2].toUpperCase() === 'K') num *= 1000;
    else if (m[2].toUpperCase() === 'M') num *= 1000000;
    else if (m[2].toUpperCase() === 'B') num *= 1000000000;
  }
  return { text: bpEl.textContent.trim(), num: num };
}

function _wmFormatCurrency(n) {
  if (n >= 1000000) return '$' + (n/1000000).toFixed(2).replace(/\.?0+$/, '') + 'M';
  if (n >= 1000) return '$' + Math.round(n).toLocaleString('en-US');
  return '$' + n.toFixed(2);
}

function showWMTxConfirm(title, text, rows) {
  const titleEl = document.getElementById('wmTxConfirmTitle');
  const textEl = document.getElementById('wmTxConfirmText');
  const detailEl = document.getElementById('wmTxConfirmDetail');
  if (titleEl) titleEl.textContent = title;
  if (textEl) textEl.textContent = text;

  // Inject wallet debit rows based on buying power
  var bp = _wmGetBuyingPower();
  var augmented = rows.slice();
  if (bp && bp.num > 0) {
    // Find the transaction amount row (Estimated total / Amount / Investment)
    var amtRow = rows.find(function(r) {
      return r.k === 'Estimated total' || r.k === 'Amount' || r.k === 'Investment';
    });
    var txAmt = 0;
    if (amtRow) {
      var amtMatch = amtRow.v.replace(/,/g,'').match(/([0-9]+\.?[0-9]*)/);
      if (amtMatch) txAmt = parseFloat(amtMatch[1]);
    }
    var balAfter = bp.num - txAmt;
    // Insert wallet debit rows before the last row
    var walletRows = [
      { k: 'Debited from', v: 'Client cash wallet (' + bp.text + ')' },
      { k: 'Balance after', v: balAfter >= 0 ? _wmFormatCurrency(balAfter) : 'Insufficient funds' }
    ];
    // Insert before the last row (Admin approval / Status / etc.)
    augmented.splice(augmented.length - 1, 0, ...walletRows);
  }

  if (detailEl) detailEl.innerHTML = augmented.map(r =>
    `<div class="tx-confirm-detail-row"><span class="k">${r.k}</span><span class="v">${r.v}</span></div>`
  ).join('');
  const confirmIcon = document.querySelector('#wmTxConfirmOverlay .tx-confirm-icon');
  if (confirmIcon && title.includes('admin')) {
    confirmIcon.style.background = 'var(--blue)';
  } else if (confirmIcon) {
    confirmIcon.style.background = 'var(--ink)';
  }
  document.getElementById('wmTxConfirmOverlay').classList.add('open');
}

function drawWMChart(assetId) {
  const canvas = document.getElementById('wmChart-' + assetId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const W = canvas.offsetWidth || 560;
  canvas.width = W; canvas.height = 200;
  const upAssets = ['spy','aapl','nvda','btc','eth','tbill'];
  const isUp = upAssets.includes(assetId);
  const color = isUp ? '#1A7A5E' : '#C0392B';
  const pts = 60;
  const seed = assetId.charCodeAt(0) + (assetId.charCodeAt(1) || 0);
  const data = Array.from({length: pts}, (_, i) => {
    const trend = isUp ? i * 1.1 : -i * 0.6;
    const noise = Math.sin(i * 0.7 + seed) * 8 + Math.cos(i * 1.3 + seed) * 5;
    return 80 + trend + noise;
  });
  const min = Math.min(...data) - 5;
  const max = Math.max(...data) + 5;
  const scaleY = v => 185 - ((v - min) / (max - min)) * 165 + 5;
  const scaleX = i => (i / (pts - 1)) * (W - 4) + 2;
  ctx.clearRect(0, 0, W, 200);
  // Gradient fill
  const grad = ctx.createLinearGradient(0, 0, 0, 200);
  grad.addColorStop(0, color + '28');
  grad.addColorStop(1, 'rgba(245,242,236,0)');
  ctx.beginPath();
  ctx.moveTo(scaleX(0), scaleY(data[0]));
  for (let i = 1; i < pts; i++) {
    const cp1x = scaleX(i - 0.5);
    const cp1y = scaleY(data[i-1]);
    ctx.quadraticCurveTo(cp1x, cp1y, scaleX(i), scaleY(data[i]));
  }
  ctx.lineTo(scaleX(pts-1), 200);
  ctx.lineTo(scaleX(0), 200);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();
  // Line
  ctx.beginPath();
  ctx.moveTo(scaleX(0), scaleY(data[0]));
  for (let i = 1; i < pts; i++) {
    const cp1x = scaleX(i - 0.5);
    const cp1y = scaleY(data[i-1]);
    ctx.quadraticCurveTo(cp1x, cp1y, scaleX(i), scaleY(data[i]));
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  ctx.stroke();
}

// ── Client change on tx-page ──
function wmTxClientChange(assetId, clientId) {
  currentWMTxClient = clientId || null;
  const c = clients[clientId];
  
  // Update badge in topbar
  const badge = document.getElementById('wm-tx-client-' + assetId);
  if (badge) {
    if (c) {
      badge.textContent = c.initials || clientId.toUpperCase().slice(0,2);
      badge.style.background = c.color || 'var(--ink)';
    } else {
      badge.textContent = '—';
      badge.style.background = 'var(--ink-muted)';
    }
  }
  const bpEl = document.getElementById('wm-bp-' + assetId);
  if (bpEl) {
    const cashVal3 = c ? (c.cash || '$318,000') : '—';
    bpEl.textContent = cashVal3;
    const wbEl3 = document.getElementById('wm-wb-' + assetId);
    if (wbEl3) wbEl3.textContent = cashVal3;
  }
  
  // Pre-select this client in all other tx-page selectors so it persists across pages
  document.querySelectorAll('[id^="txClientSel-"]').forEach(sel => {
    sel.value = clientId || '';
  });
}

// ── Private market / real estate calc ──
function wmPMCalc(val, costId, capRate) {
  const amount = parseFloat(val) || 0;
  const costEl = document.getElementById(costId);
  if (costEl) costEl.textContent = '$' + amount.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
  // Bridge income
  const bridgeIncomeEl = document.getElementById('wmBridgeIncome');
  if (bridgeIncomeEl && costId === 'wmBridgeCost') {
    bridgeIncomeEl.textContent = '$' + (amount * 0.105).toLocaleString('en-US', {minimumFractionDigits:2});
  }
  // Real estate monthly income
  const unitAIncomeEl = document.getElementById('wmUnitAIncome');
  if (unitAIncomeEl && costId === 'wmUnitACost' && capRate > 0) {
    const monthly = (amount * capRate) / 12;
    unitAIncomeEl.textContent = '$' + monthly.toLocaleString('en-US', {minimumFractionDigits:2});
  }
}

// On openWMTxPage, sync client selector to currentWMTxClient
const _baseOpenWMTxPage = openWMTxPage;

// ═══════════════════════════════════════════════════
// TASK CALENDAR — Wealth Manager
// ═══════════════════════════════════════════════════
var _cv   = 'month';
var _cCur = new Date(2026, 3, 10);
var _cPopId = null;
var _cTasks = [
  { id:'t1', title:'Review Emeka Okafor tech concentration',       date:'2026-04-10', time:'09:00', pri:'urgent', cat:'review',     src:'system', done:false, notes:'US tech at 71%. Suggest reducing NVDA/AAPL, add international ETF.' },
  { id:'t2', title:'Schedule Fatima Al-Rashid annual review',      date:'2026-03-27', time:'',      pri:'urgent', cat:'client',     src:'system', done:false, notes:'' },
  { id:'t3', title:'Upload Kwame Boateng entity documents',        date:'2026-04-15', time:'',      pri:'normal', cat:'compliance', src:'system', done:false, notes:'' },
  { id:'t4', title:'Chase Ibrahim Hassan — authorise Rayda',       date:'2026-04-12', time:'14:00', pri:'normal', cat:'trade',      src:'system', done:false, notes:'$100K instruction pending since Apr 1.' },
  { id:'t5', title:'Remind Kwame Boateng — passport outstanding',  date:'2026-04-11', time:'',      pri:'normal', cat:'compliance', src:'system', done:false, notes:'' },
  { id:'t6', title:'Q2 portfolio reviews — all five clients',      date:'2026-04-20', time:'10:00', pri:'normal', cat:'review',     src:'manual', done:false, notes:'' },
  { id:'t7', title:'Submit Bridge Fund III allocations',           date:'2026-04-18', time:'09:30', pri:'normal', cat:'trade',      src:'manual', done:false, notes:'Deadline: Apr 24. Fatima, Priya, Ibrahim eligible.' },
  { id:'t8', title:'Team sync — WM onboarding pipeline',          date:'2026-04-14', time:'11:00', pri:'low',    cat:'admin',      src:'manual', done:false, notes:'' },
];
var _cPri = {
  urgent:{ bg:'#FEE2E2', fg:'#991B1B', dot:'#EF4444' },
  normal:{ bg:'#EFF6FF', fg:'#1E40AF', dot:'#3B82F6' },
  low:   { bg:'#F8FAFC', fg:'#475569', dot:'#94A3B8' }
};
var _DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var _MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function _ds(y,m,d){ return y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0'); }
function _tod(){ var t=new Date(); return _ds(t.getFullYear(),t.getMonth(),t.getDate()); }
function _onDate(ds){ return _cTasks.filter(function(t){ return t.date===ds&&!t.done; }); }

function calInit() { calSetView(_cv); }

function calSetView(v) {
  _cv = v;
  ['Month','Week','Day'].forEach(function(x){
    var b = document.getElementById('calBtn'+x); if(!b) return;
    var on = x.toLowerCase()===v;
    b.style.background = on?'white':'transparent';
    b.style.color      = on?'var(--ink)':'var(--ink-soft)';
    b.style.fontWeight = on?'600':'500';
    b.style.boxShadow  = on?'0 1px 3px rgba(12,26,46,.1)':'none';
  });
  calDraw();
}
function calGoToday(){ _cCur=new Date(); calDraw(); }
function calNav(d){
  if(_cv==='month') _cCur.setMonth(_cCur.getMonth()+d);
  else if(_cv==='week') _cCur.setDate(_cCur.getDate()+d*7);
  else _cCur.setDate(_cCur.getDate()+d);
  calDraw();
}
function calDraw(){
  var g=document.getElementById('calGrid'), h=document.getElementById('calHeading');
  if(!g||!h) return;
  if(_cv==='month') _cMonth(g,h);
  else if(_cv==='week') _cWeek(g,h);
  else _cDay(g,h);
}

/* ── MONTH ── */
function _cMonth(g,h){
  var y=_cCur.getFullYear(),m=_cCur.getMonth(),tod=_tod();
  h.textContent=_MONTHS[m]+' '+y;
  var fd=new Date(y,m,1).getDay(), dim=new Date(y,m+1,0).getDate(), pd=new Date(y,m,0).getDate();
  var s='<div style="display:grid;grid-template-columns:repeat(7,minmax(0,1fr));">';
  _DAYS.forEach(function(d){ s+='<div style="padding:8px 4px 6px;text-align:center;font-size:.67rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);background:#fafaf8;border-bottom:2px solid var(--cream-mid);">'+d+'</div>'; });
  for(var i=0;i<fd;i++) s+=_mCell(_ds(y,m-1,pd-fd+i+1),pd-fd+i+1,true,tod);
  for(var d=1;d<=dim;d++) s+=_mCell(_ds(y,m,d),d,false,tod);
  var rem=(fd+dim)%7; if(rem>0) for(var t=1;t<=7-rem;t++) s+=_mCell(_ds(y,m+1,t),t,true,tod);
  g.innerHTML=s+'</div>';
}
function _mCell(ds,num,faded,tod){
  var ts=_onDate(ds), isT=ds===tod;
  var bg=faded?'#f9f8f7':'white';
  var dn='<div style="display:inline-flex;width:24px;height:24px;align-items:center;justify-content:center;border-radius:50%;font-size:.77rem;font-weight:'+(isT?'700':'500')+';'+(isT?'background:var(--ink);color:white;':'color:'+(faded?'#b0aca4':'var(--ink)')+';')+'margin-bottom:2px;">'+num+'</div>';
  var pills='';
  ts.slice(0,3).forEach(function(t){
    var pc=_cPri[t.pri]||_cPri.normal;
    var lbl=t.title.length>24?t.title.slice(0,24)+'…':t.title;
    pills+='<div onclick="event.stopPropagation();calShowPop(event,\''+t.id+'\')" style="background:'+pc.bg+';color:'+pc.fg+';border-left:2px solid '+pc.dot+';font-size:.64rem;font-weight:500;padding:2px 4px 2px 5px;border-radius:0 3px 3px 0;margin-bottom:2px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+lbl+'</div>';
  });
  if(ts.length>3) pills+='<div style="font-size:.61rem;color:var(--ink-muted);padding-left:3px;">+'+(ts.length-3)+' more</div>';
  return '<div onclick="calOpenNewOnDate(\''+ds+'\')" onmouseover="this.style.background=\'#f2f1ef\'" onmouseout="this.style.background=\''+bg+'\'" style="min-height:86px;padding:6px 5px 4px 5px;border-bottom:1px solid var(--cream-mid);border-right:1px solid var(--cream-mid);background:'+bg+';cursor:pointer;overflow:hidden;">'+dn+pills+'</div>';
}

/* ── WEEK ── */
function _cWeek(g,h){
  var c=_cCur, sun=new Date(c); sun.setDate(c.getDate()-c.getDay());
  var sat=new Date(sun); sat.setDate(sun.getDate()+6);
  var sm=_MONTHS[sun.getMonth()],em=_MONTHS[sat.getMonth()];
  h.textContent=(sm===em?sm:sm.slice(0,3)+'/'+em.slice(0,3))+' '+sun.getDate()+'–'+sat.getDate()+', '+sat.getFullYear();
  var tod=_tod(); var HRS=[]; for(var h2=7;h2<=20;h2++) HRS.push(h2);
  // All-day row
  var ad='<div style="display:flex;border-bottom:2px solid var(--cream-mid);">';
  ad+='<div style="width:54px;flex-shrink:0;border-right:1px solid var(--cream-mid);padding:4px 6px;font-size:.61rem;color:var(--ink-muted);display:flex;align-items:center;justify-content:flex-end;">all day</div>';
  for(var i=0;i<7;i++){
    var dd=new Date(sun); dd.setDate(sun.getDate()+i);
    var ds=_ds(dd.getFullYear(),dd.getMonth(),dd.getDate());
    var adT=_onDate(ds).filter(function(t){return !t.time;});
    ad+='<div style="flex:1;min-width:0;border-right:1px solid var(--cream-mid);padding:3px;min-height:24px;">';
    adT.forEach(function(t){ var pc=_cPri[t.pri]||_cPri.normal; ad+='<div onclick="calShowPop(event,\''+t.id+'\')" style="background:'+pc.bg+';color:'+pc.fg+';font-size:.62rem;padding:2px 4px;border-radius:3px;margin-bottom:1px;cursor:pointer;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">'+t.title+'</div>'; });
    ad+='</div>';
  }
  ad+='</div>';
  // Day headers
  var dh='<div style="display:flex;position:sticky;top:0;z-index:5;background:white;">';
  dh+='<div style="width:54px;flex-shrink:0;border-right:1px solid var(--cream-mid);border-bottom:1px solid var(--cream-mid);background:#fafaf8;"></div>';
  for(var i=0;i<7;i++){
    var dd=new Date(sun); dd.setDate(sun.getDate()+i);
    var ds=_ds(dd.getFullYear(),dd.getMonth(),dd.getDate()); var isT=ds===tod;
    var cnt=_onDate(ds).length;
    dh+='<div style="flex:1;text-align:center;padding:6px 2px 5px;border-right:1px solid var(--cream-mid);border-bottom:1px solid var(--cream-mid);background:'+(isT?'var(--blue-pale)':'#fafaf8')+';">';
    dh+='<div style="font-size:.67rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:'+(isT?'var(--blue)':'var(--ink-muted)')+';">'+_DAYS[dd.getDay()]+'</div>';
    dh+='<div style="font-size:1.05rem;font-weight:'+(isT?'700':'400')+';color:'+(isT?'var(--blue)':'var(--ink)')+';">'+dd.getDate()+'</div>';
    if(cnt) dh+='<div style="font-size:.59rem;color:var(--blue);">'+cnt+' task'+(cnt>1?'s':'')+'</div>';
    dh+='</div>';
  }
  dh+='</div>';
  // Hour cols
  var body='<div style="display:flex;">';
  body+='<div style="width:54px;flex-shrink:0;border-right:1px solid var(--cream-mid);">';
  HRS.forEach(function(hr){ body+='<div style="height:50px;border-bottom:1px solid var(--cream-mid);padding:3px 6px;font-size:.62rem;color:var(--ink-muted);text-align:right;">'+(hr<12?hr+' am':hr===12?'12 pm':(hr-12)+' pm')+'</div>'; });
  body+='</div>';
  for(var i=0;i<7;i++){
    var dd=new Date(sun); dd.setDate(sun.getDate()+i);
    var ds=_ds(dd.getFullYear(),dd.getMonth(),dd.getDate()); var isT=ds===tod;
    body+='<div style="flex:1;min-width:0;border-right:1px solid var(--cream-mid);">';
    HRS.forEach(function(hr){
      var ht=_onDate(ds).filter(function(t){return t.time&&parseInt(t.time.split(':')[0])===hr;});
      var slot='<div onclick="calOpenNewOnDate(\''+ds+'\')" onmouseover="this.style.background=\'#f5f3ef\'" onmouseout="this.style.background=\''+(isT?'#EFF6FF':'white')+'\';" style="height:50px;border-bottom:1px solid var(--cream-mid);padding:2px;cursor:pointer;background:'+(isT?'#EFF6FF':'white')+';overflow:hidden;">';
      ht.forEach(function(t){ var pc=_cPri[t.pri]||_cPri.normal; slot+='<div onclick="event.stopPropagation();calShowPop(event,\''+t.id+'\')" style="background:'+pc.bg+';color:'+pc.fg+';border-left:2px solid '+pc.dot+';font-size:.62rem;font-weight:500;padding:2px 3px;border-radius:0 3px 3px 0;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+t.title+'</div>'; });
      slot+='</div>'; body+=slot;
    });
    body+='</div>';
  }
  body+='</div>';
  g.innerHTML='<div style="overflow:auto;max-height:560px;">'+ad+dh+body+'</div>';
}

/* ── DAY ── */
function _cDay(g,h){
  var c=_cCur, ds=_ds(c.getFullYear(),c.getMonth(),c.getDate()), isT=ds===_tod();
  h.textContent=_DAYS[c.getDay()]+', '+_MONTHS[c.getMonth()]+' '+c.getDate()+', '+c.getFullYear();
  var ts=_onDate(ds), HRS=[]; for(var hr=7;hr<=21;hr++) HRS.push(hr);
  var now=new Date().getHours(), out='<div style="overflow:auto;max-height:560px;">';
  var adT=ts.filter(function(t){return !t.time;});
  if(adT.length){
    out+='<div style="background:var(--cream);padding:10px 16px;border-bottom:2px solid var(--cream-mid);">';
    out+='<div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-muted);margin-bottom:6px;">All day</div><div style="display:flex;flex-wrap:wrap;gap:5px;">';
    adT.forEach(function(t){ var pc=_cPri[t.pri]||_cPri.normal; out+='<div onclick="calShowPop(event,\''+t.id+'\')" style="background:'+pc.bg+';color:'+pc.fg+';border-left:3px solid '+pc.dot+';font-size:.79rem;font-weight:500;padding:5px 9px 5px 8px;border-radius:0 6px 6px 0;cursor:pointer;">'+t.title+'</div>'; });
    out+='</div></div>';
  }
  HRS.forEach(function(hr){
    var ht=ts.filter(function(t){return t.time&&parseInt(t.time.split(':')[0])===hr;});
    var lbl=hr<12?hr+':00 AM':hr===12?'12:00 PM':(hr-12)+':00 PM'; var isN=isT&&hr===now;
    out+='<div style="display:flex;border-bottom:1px solid var(--cream-mid);min-height:54px;'+(isN?'background:#EFF6FF;':'')+'">';
    out+='<div style="width:74px;flex-shrink:0;padding:8px 10px;font-size:.7rem;color:'+(isN?'var(--blue)':'var(--ink-muted)')+';text-align:right;border-right:1px solid var(--cream-mid);font-weight:'+(isN?'600':'400')+';padding-top:10px;white-space:nowrap;">'+lbl+'</div>';
    out+='<div onclick="calOpenNewOnDate(\''+ds+'\')" onmouseover="this.style.background=\'#f5f3ef\'" onmouseout="this.style.background=\''+(isN?'#EFF6FF':'transparent')+'\';" style="flex:1;padding:5px 10px;cursor:pointer;">';
    ht.forEach(function(t){ var pc=_cPri[t.pri]||_cPri.normal; var src=t.src==='manual'?'<span style="font-size:.61rem;background:var(--blue-pale);color:var(--blue);padding:1px 5px;border-radius:100px;margin-left:6px;">manual</span>':''; out+='<div onclick="event.stopPropagation();calShowPop(event,\''+t.id+'\')" style="background:'+pc.bg+';color:'+pc.fg+';border-left:3px solid '+pc.dot+';font-size:.81rem;font-weight:500;padding:5px 9px 5px 8px;border-radius:0 7px 7px 0;margin-bottom:3px;cursor:pointer;display:flex;align-items:center;"><span style="font-size:.73rem;opacity:.65;margin-right:8px;flex-shrink:0;">'+t.time+'</span>'+t.title+src+'</div>'; });
    out+='</div></div>';
  });
  g.innerHTML=out+'</div>';
}

/* ── Popover ── */
function calShowPop(e,id){
  e.stopPropagation();
  var t=_cTasks.find(function(x){return x.id===id;}); if(!t) return;
  _cPopId=id;
  var pc=_cPri[t.pri]||_cPri.normal;
  var el=function(i){return document.getElementById(i);};
  el('calPopDot').style.background=pc.dot;
  el('calPopTitle').textContent=t.title;
  var catL={client:'Client',trade:'Trade',review:'Review',compliance:'Compliance',admin:'Admin',personal:'Personal'}[t.cat]||t.cat;
  var srcB=t.src==='manual'?'<b style="background:var(--blue-pale);color:var(--blue);padding:1px 6px;border-radius:100px;font-size:.67rem;margin-left:4px;">manual</b>':'<b style="background:var(--cream-mid);padding:1px 6px;border-radius:100px;font-size:.67rem;margin-left:4px;">system</b>';
  el('calPopMeta').innerHTML='<span style="font-weight:600;color:'+pc.fg+';text-transform:capitalize;">'+t.pri+'</span> · '+catL+(t.time?' · '+t.time:'')+' · '+t.date+srcB;
  var ne=el('calPopNotes'); if(t.notes){ne.textContent=t.notes;ne.style.display='block';}else ne.style.display='none';
  var pop=el('calPop'); pop.style.display='block';
  var x=Math.min(e.clientX+14,window.innerWidth-282), y=Math.min(e.clientY+14,window.innerHeight-180);
  pop.style.left=x+'px'; pop.style.top=y+'px';
}
function calDone(){ var t=_cTasks.find(function(x){return x.id===_cPopId;}); if(t)t.done=true; document.getElementById('calPop').style.display='none'; showToast('Task complete ✓'); calDraw(); }
function calDelPop(){ _cTasks=_cTasks.filter(function(x){return x.id!==_cPopId;}); document.getElementById('calPop').style.display='none'; showToast('Task deleted'); calDraw(); }
function calEditPop(){ document.getElementById('calPop').style.display='none'; var t=_cTasks.find(function(x){return x.id===_cPopId;}); if(t) _calModal(t); }

/* ── Modal ── */
function calOpenNew(){ var d=new Date(); _calModal(null,_ds(d.getFullYear(),d.getMonth(),d.getDate())); }
function calOpenNewOnDate(ds){ _calModal(null,ds); }
function _calModal(task,def){
  var el=function(i){return document.getElementById(i);};
  el('calModalHd').textContent=task?'Edit Task':'Add Task';
  el('calFTitle').value=task?task.title:'';
  el('calFDate').value=task?task.date:(def||'');
  el('calFTime').value=task?(task.time||''):'';
  el('calFCat').value=task?(task.cat||'client'):'client';
  el('calFNotes').value=task?(task.notes||''):'';
  el('calFId').value=task?task.id:'';
  var r=document.querySelector('input[name="calFPri"][value="'+(task?task.pri:'normal')+'"]'); if(r)r.checked=true;
  el('calModal').style.display='flex';
  setTimeout(function(){el('calFTitle').focus();},60);
}
function calCloseModal(){ document.getElementById('calModal').style.display='none'; }
function calSaveTask(){
  var el=function(i){return document.getElementById(i);};
  var title=el('calFTitle').value.trim(); if(!title){showToast('Please add a title');return;}
  var date=el('calFDate').value; if(!date){showToast('Please pick a date');return;}
  var time=el('calFTime').value, cat=el('calFCat').value, notes=el('calFNotes').value.trim();
  var pr=document.querySelector('input[name="calFPri"]:checked'); var pri=pr?pr.value:'normal';
  var eid=el('calFId').value;
  if(eid){ var t=_cTasks.find(function(x){return x.id===eid;}); if(t){t.title=title;t.date=date;t.time=time;t.cat=cat;t.notes=notes;t.pri=pri;} showToast('Task updated ✓'); }
  else{ _cTasks.push({id:'t'+Date.now(),title:title,date:date,time:time,pri:pri,cat:cat,src:'manual',done:false,notes:notes}); var p=date.split('-'); _cCur=new Date(+p[0],+p[1]-1,+p[2]); showToast('Task added ✓'); }
  calCloseModal(); calDraw();
}
// ═══════════════════════════════════════════════════════
// BLOG MANAGER — Super Admin
// ═══════════════════════════════════════════════════════
var blogPosts = [
  { id:'bp-1', status:'published', title:'Why Allocated Gold Belongs in Every Wealth Portfolio',
    excerpt:'As inflation weighs on real returns, allocated physical gold offers a proven hedge.',
    category:'investing', author:'Aidi Team', tags:'gold, investing, hedge, inflation',
    slug:'allocated-gold-wealth-portfolio', cover:'',
    body:'<p>Gold has served as a store of value for millennia. But for modern investors, the question is no longer whether to hold gold &#8212; it&#39;s how to hold it correctly.</p><h2>Why Allocated, Not Paper</h2><p>Allocated gold means you own specific, registered bullion bars stored in a secure vault, segregated from the custodian&#39;s own assets.</p>',
    created:'Apr 8, 2026', updated:'Apr 9, 2026', schedule:'', views:1240 },
  { id:'bp-2', status:'published', title:'How Aidi Connects Wealth Managers to Execution in Under 60 Seconds',
    excerpt:'Our direct integration means advisors can submit trade instructions without leaving the platform.',
    category:'product-updates', author:'Aidi Team', tags:'product, alpaca, trading',
    slug:'aidi-alpaca-execution', cover:'',
    body:'<p>Speed matters in advisory. When a client calls with an urgent rebalancing request, every minute of friction costs trust.</p><h2>Direct Broker Integration</h2><p>Aidi connects directly to our execution infrastructure, enabling wealth managers to submit equity, ETF, crypto, and T-bill instructions on behalf of clients.</p>',
    created:'Apr 5, 2026', updated:'Apr 5, 2026', schedule:'', views:880 },
  { id:'bp-3', status:'draft', title:'Understanding the SEC&#39;s New Private Market Rules for Accredited Investors',
    excerpt:'Recent SEC rulemaking widens access to private equity for a broader pool of investors.',
    category:'regulatory', author:'Aidi Legal Team', tags:'SEC, regulatory, private markets',
    slug:'sec-private-market-rules', cover:'', body:'<p>Draft &#8212; in progress.</p>',
    created:'Apr 10, 2026', updated:'Apr 10, 2026', schedule:'', views:0 },
  { id:'bp-4', status:'draft', title:'Diaspora Wealth: Building Cross-Border Portfolios',
    excerpt:'A growing cohort of African-diaspora professionals are investing across US and African markets.',
    category:'wealth-management', author:'Aidi Team', tags:'diaspora, wealth, cross-border',
    slug:'diaspora-wealth-cross-border', cover:'', body:'<p>Draft &#8212; in progress.</p>',
    created:'Apr 9, 2026', updated:'Apr 9, 2026', schedule:'', views:0 }
];

var blogCurrentId  = null;
var blogFilterState    = 'all';
var blogFilterCatState = 'all';
var blogAutoSaveTimer  = null;

var BLOG_CAT_LABELS = {
  'company-news':'Company News','investing':'Investing','wealth-management':'Wealth Management',
  'market-insights':'Market Insights','product-updates':'Product Updates',
  'regulatory':'Regulatory','private-markets':'Private Markets'
};
var BLOG_STATUS = {
  published:{ bg:'var(--green-pale)', fg:'var(--green)',  label:'Published' },
  draft:    { bg:'var(--gold-pale)',  fg:'var(--gold)',   label:'Draft'     },
  scheduled:{ bg:'var(--blue-pale)', fg:'var(--blue)',   label:'Scheduled' }
};

function blogRenderList() {
  var list = document.getElementById('blogPostList');
  if (!list) return;
  var filtered = blogPosts.filter(function(p) {
    return (blogFilterState === 'all' || p.status === blogFilterState) &&
           (blogFilterCatState === 'all' || p.category === blogFilterCatState);
  });
  var el = function(id) { return document.getElementById(id); };
  if (el('blog-stat-total'))     el('blog-stat-total').textContent     = blogPosts.length;
  if (el('blog-stat-published')) el('blog-stat-published').textContent = blogPosts.filter(function(p){ return p.status==='published'; }).length;
  if (el('blog-stat-drafts'))    el('blog-stat-drafts').textContent    = blogPosts.filter(function(p){ return p.status==='draft'; }).length;
  if (!filtered.length) { list.innerHTML = '<div style="text-align:center;padding:40px;color:var(--ink-muted);font-size:.88rem;">No posts match this filter.</div>'; return; }
  var rows = filtered.map(function(p) {
    var sc = BLOG_STATUS[p.status] || BLOG_STATUS.draft;
    var cat = BLOG_CAT_LABELS[p.category] || p.category;
    return '<tr>' +
      '<td><div style="font-weight:600;font-size:.86rem;color:var(--ink);margin-bottom:2px;">' + p.title + '</div><div style="font-size:.72rem;color:var(--ink-muted);">/blog/' + p.slug + '</div></td>' +
      '<td><span style="font-size:.74rem;padding:2px 9px;border-radius:100px;background:var(--cream-mid);color:var(--ink-soft);">' + cat + '</span></td>' +
      '<td style="font-size:.84rem;">' + p.author + '</td>' +
      '<td><span style="font-size:.74rem;font-weight:600;padding:2px 9px;border-radius:100px;background:' + sc.bg + ';color:' + sc.fg + ';">' + sc.label + '</span></td>' +
      '<td style="color:var(--ink-muted);font-size:.8rem;">' + p.updated + '</td>' +
      '<td style="font-size:.82rem;">' + (p.views||0).toLocaleString() + '</td>' +
      '<td><div style="display:flex;gap:4px;"><button class="btn-sm btn-outline" onclick="blogEditPost(\'' + p.id + '\')">Edit</button><button class="btn-sm btn-outline" style="color:var(--red);border-color:rgba(192,57,43,.2);" onclick="blogDeletePost(\'' + p.id + '\')">Delete</button></div></td>' +
      '</tr>';
  }).join('');
  list.innerHTML = '<div class="table-card"><table class="data-table"><thead><tr><th style="width:38%;">Title</th><th>Category</th><th>Author</th><th>Status</th><th>Updated</th><th>Views</th><th></th></tr></thead><tbody>' + rows + '</tbody></table></div>';
}

function blogFilter(status, el) {
  blogFilterState = status;
  document.querySelectorAll('.blog-filter').forEach(function(f) { f.style.background='white'; f.style.color='var(--ink-soft)'; f.style.borderColor='var(--cream-dark)'; });
  el.style.background='var(--ink)'; el.style.color='white'; el.style.borderColor='var(--ink)';
  blogRenderList();
}
function blogFilterCat(val) { blogFilterCatState = val; blogRenderList(); }

function blogNewPost() {
  blogCurrentId = 'bp-' + Date.now();
  blogPosts.unshift({ id:blogCurrentId, status:'draft', title:'', excerpt:'', category:'company-news', author:'Aidi Team', tags:'', slug:'', cover:'', body:'', created:blogTodayStr(), updated:blogTodayStr(), schedule:'', views:0 });
  blogOpenEditor(blogCurrentId); blogRenderList();
}
function blogEditPost(id) { blogCurrentId = id; blogOpenEditor(id); }

function blogOpenEditor(id) {
  var p = blogPosts.find(function(x){ return x.id===id; }); if (!p) return;
  var el = function(i){ return document.getElementById(i); };
  el('blogEditor').style.display = 'flex';
  var lbl = el('blogModalLabel');
  if (lbl) lbl.textContent = p.title ? 'Edit Post' : 'New Post';
  el('blogTitle').value    = p.title;
  el('blogExcerpt').value  = p.excerpt;
  el('blogBody').innerHTML = p.body || '';
  el('blogCat').value      = p.category || 'company-news';
  el('blogTags').value     = p.tags  || '';
  el('blogAuthor').value   = p.author || 'Aidi Team';
  el('blogSchedule').value = p.schedule || '';
  el('blogCover').value    = p.cover || '';
  el('blogSlug').value     = p.slug  || '';
  blogUpdateStatus(p.status); blogUpdateApiUrl(); blogUpdateCoverPreview(p.cover);
  if (!p.title) setTimeout(function(){ el('blogTitle').focus(); }, 60);
}
function blogCloseEditor() {
  document.getElementById('blogEditor').style.display = 'none';
  blogRenderList();
}
function blogUpdateStatus(status) {
  var el = document.getElementById('blogEditorStatus'); if (!el) return;
  var sc = BLOG_STATUS[status] || BLOG_STATUS.draft;
  el.textContent = sc.label; el.style.background = sc.bg; el.style.color = sc.fg;
}
function blogCollect() {
  var p = blogPosts.find(function(x){ return x.id===blogCurrentId; }); if (!p) return null;
  var el = function(i){ return document.getElementById(i); };
  p.title    = el('blogTitle').value.trim();
  p.excerpt  = el('blogExcerpt').value.trim();
  p.body     = el('blogBody').innerHTML;
  p.category = el('blogCat').value;
  p.tags     = el('blogTags').value;
  p.author   = el('blogAuthor').value;
  p.schedule = el('blogSchedule').value;
  p.cover    = el('blogCover').value;
  var slugEl = el('blogSlug');
  if (!slugEl.value && p.title) slugEl.value = p.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  p.slug = slugEl.value; p.updated = blogTodayStr(); blogUpdateApiUrl(); return p;
}
function blogSaveDraft() {
  var p = blogCollect(); if (!p) return;
  p.status = 'draft'; blogUpdateStatus('draft'); showToast('Draft saved \u2713'); blogRenderList();
}
function blogPublish() {
  var p = blogCollect(); if (!p) return;
  if (!p.title) { showToast('Please add a title before publishing'); return; }
  if (!p.slug) { p.slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); document.getElementById('blogSlug').value = p.slug; }
  if (p.schedule) { p.status='scheduled'; blogUpdateStatus('scheduled'); showToast('Scheduled for ' + p.schedule.split('T')[0] + ' \u2713'); }
  else { p.status='published'; blogUpdateStatus('published'); showToast('Post published \u2713 \u2014 API endpoint active'); }
  blogRenderList();
}
function blogDeletePost(id) { blogPosts = blogPosts.filter(function(p){ return p.id !== id; }); showToast('Post deleted'); blogRenderList(); }
function blogAutoSave() {
  clearTimeout(blogAutoSaveTimer);
  blogAutoSaveTimer = setTimeout(function(){ blogCollect(); }, 1500);
  var titleEl = document.getElementById('blogTitle'), slugEl = document.getElementById('blogSlug');
  if (titleEl && slugEl && !slugEl.dataset.manualEdit) slugEl.value = titleEl.value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  var coverEl = document.getElementById('blogCover');
  blogUpdateCoverPreview(coverEl ? coverEl.value : ''); blogUpdateApiUrl();
}
function blogUpdateCoverPreview(url) {
  var prev = document.getElementById('blogCoverPreview'); if (!prev) return;
  if (url && url.startsWith('http')) { prev.style.display='block'; prev.querySelector('img').src=url; } else prev.style.display='none';
}
function blogUpdateApiUrl() {
  var slugEl = document.getElementById('blogSlug'), apiEl = document.getElementById('blogApiUrl');
  if (apiEl) apiEl.textContent = 'GET /api/blog/posts/' + (slugEl ? slugEl.value||'{slug}' : '{slug}');
}
function blogFmt(cmd) {
  document.getElementById('blogBody').focus();
  if (cmd==='h2') document.execCommand('formatBlock',false,'h2');
  else if (cmd==='h3') document.execCommand('formatBlock',false,'h3');
  else if (cmd==='blockquote') document.execCommand('formatBlock',false,'blockquote');
  else document.execCommand(cmd,false,null);
}
function blogInsLink() { var url=prompt('Enter URL:'); if(url){document.getElementById('blogBody').focus();document.execCommand('createLink',false,url);} }
function blogInsCallout(type) {
  document.getElementById('blogBody').focus();
  var s=type==='warning'?'background:var(--gold-pale);border-left:3px solid var(--gold);padding:11px 14px;border-radius:0 7px 7px 0;margin:12px 0;font-size:.87rem;color:#8a6520;':'background:var(--blue-pale);border-left:3px solid var(--blue);padding:11px 14px;border-radius:0 7px 7px 0;margin:12px 0;font-size:.87rem;color:var(--blue);';
  document.execCommand('insertHTML',false,'<div style="'+s+'">'+(type==='warning'?'\u26a0 ':'\u2139 ')+'Write callout here\u2026</div><br>');
}
function blogCopyApi() {
  var slug=(document.getElementById('blogSlug')||{}).value||'{slug}';
  var snip="fetch('https://api.aidi.com/v1/blog/posts/"+slug+"')\n  .then(r => r.json())\n  .then(post => console.log(post));";
  if(navigator.clipboard) navigator.clipboard.writeText(snip).then(function(){showToast('API snippet copied \u2713');});
  else showToast('GET /api/blog/posts/' + slug);
}
function blogTodayStr() { return new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}); }
(function(){
  var s=document.createElement('style');
  s.textContent='#blogBody:empty::before{content:attr(data-placeholder);color:var(--ink-muted);pointer-events:none;}'+
    '#blogBody h2{font-family:"Cormorant Garamond",serif;font-size:1.45rem;font-weight:400;margin:18px 0 7px;}'+
    '#blogBody h3{font-family:"Cormorant Garamond",serif;font-size:1.15rem;font-weight:400;margin:14px 0 5px;}'+
    '#blogBody blockquote{border-left:3px solid var(--cream-dark);padding:7px 14px;margin:10px 0;color:var(--ink-soft);font-style:italic;}'+
    '#blogBody a{color:var(--blue);}#blogBody ul,#blogBody ol{padding-left:20px;margin:7px 0;}';
  document.head.appendChild(s);
})();

document.addEventListener('click',function(e){ var p=document.getElementById('calPop'); if(p&&p.style.display!=='none'&&!p.contains(e.target))p.style.display='none'; });

function wmGoogleSignIn() {
  // Existing advisor via Google SSO → go straight to dashboard
  document.querySelectorAll('.int-auth-page').forEach(p => { p.style.display = 'none'; });
  goScreen('screen-wm');
  wmNav('home');
}


// ── Internal news modal ──────────────────────────────────────────────
var INT_NEWS_DATA = {
  meta: {
    source:"Barron's", time:"11m ago",
    headline:"U.S. Court Rules That Meta Isn\u2019t a Monopoly",
    ticker:"META", change:"\u25bc 0.44%", changeUp:false,
    img:"linear-gradient(135deg,#c8d0d8,#5a6a7a)",
    summary:"A federal judge has ruled that Meta Platforms does not constitute an illegal monopoly in the social media market, dismissing a key antitrust complaint brought by the FTC. The court found insufficient evidence to support claims that Meta maintained monopoly power through anti-competitive acquisitions of Instagram and WhatsApp. The ruling is a significant legal victory for the company, though the FTC has indicated it may appeal. Meta shares fell modestly as investors digested the implications for future regulatory scrutiny.",
    elia:"This ruling reduces near-term regulatory risk for large-cap tech. Clients with indirect SPY or broad ETF exposure benefit positively \u2014 tech weighting in index funds is insulated from break-up risk for now. No immediate portfolio action required.",
    facts:[["Court","US Federal District Court"],["Ruling","Dismisses FTC monopoly case"],["Companies","Meta, Instagram, WhatsApp"],["Implication","Reduced breakup risk"],["Appeal likely","Yes \u2014 FTC signalled"],["Sector impact","Broad tech positive"]],
    url:"https://www.barrons.com"
  },
  lmt: {
    source:"Reuters", time:"17m ago",
    headline:"Trump to Sell F-35s to Saudi Arabia. Why Lockheed Stock Is Rising.",
    ticker:"LMT", change:"\u25b2 0.65%", changeUp:true,
    img:"linear-gradient(135deg,#8fa8bc,#2a3a4a)",
    summary:"The Trump administration has approved the sale of F-35 stealth fighter jets to Saudi Arabia in a multi-billion dollar defence deal. The deal, valued at approximately $20 billion, includes aircraft, weapons systems, and a decade-long maintenance contract. Lockheed Martin shares rose on the news as analysts upgraded revenue forecasts for the aeronautics division.",
    elia:"LMT is not a standard holding in client portfolios on the platform, but this deal reinforces the case for a modest aerospace & defence sector allocation as a geopolitical risk hedge. Worth discussing with clients who have higher risk tolerance or ESG flexibility.",
    facts:[["Deal value","~$20B"],["Aircraft","F-35 stealth jets"],["Buyer","Saudi Arabia"],["Contract","Aircraft + maintenance"],["Duration","10+ years"],["Sector","Aerospace & Defence"]],
    url:"https://www.reuters.com"
  },
  fed: {
    source:"Financial Times", time:"23m ago",
    headline:"Fed Signals Rate Cuts May Come Later Than Expected as Inflation Remains Sticky",
    ticker:"S&P 500", change:"\u25bc 0.25%", changeUp:false,
    img:"linear-gradient(135deg,#d4c5b0,#7a6248)",
    summary:"Federal Reserve officials signalled that rate cuts are unlikely before Q3 2025, citing persistently elevated core inflation and a resilient labour market. FOMC minutes revealed concern about cutting prematurely. Markets had priced in multiple cuts from June. Yields on 2-year Treasuries rose sharply, while equity indices fell broadly.",
    elia:"Directly relevant to T-Bill positions. Clients holding 90-day T-Bills at 5.18% benefit from a delayed cut cycle \u2014 their yield persists longer than expected. Reinforce the T-Bill case in upcoming advisory meetings and consider recommending duration extension to 6-month instruments.",
    facts:[["FOMC stance","Rates on hold"],["Next cut","Q3 2025 or later"],["Core inflation","Still above 3%"],["Labour market","Resilient"],["2Y Treasury","Rose ~12bps"],["T-Bill impact","Positive \u2014 yields stay higher"]],
    url:"https://www.ft.com"
  },
  btcnews: {
    source:"Bloomberg", time:"41m ago",
    headline:"Bitcoin Surpasses $93,000 as Institutional Demand Drives New Highs",
    ticker:"BTC", change:"\u25b2 3.33%", changeUp:true,
    img:"linear-gradient(135deg,#e8d5b5,#8a6820)",
    summary:"Bitcoin crossed $93,000 for the first time this week, driven by sustained institutional buying from asset managers and corporate treasury teams. BlackRock\u2019s spot Bitcoin ETF recorded its largest single-day inflow since launch at over $1.2 billion. Analysts point to growing adoption as a treasury reserve asset, with S&P 500 companies announcing Q1 allocations.",
    elia:"Clients with BTC exposure are up ~3.33% today. For clients without crypto exposure, this rally strengthens the case for a small strategic allocation (1\u20135%). Review crypto eligibility and risk tolerance before the next advisory cycle.",
    facts:[["BTC price","$93,407"],["24h change","\u25b2 +3.33%"],["BlackRock inflow","$1.2B"],["On-chain signal","Low exchange balances"],["Holders","Accumulating"],["Sector","Digital Assets"]],
    url:"https://www.bloomberg.com"
  },
  gold: {
    source:"WSJ", time:"1h ago",
    headline:"Gold Hits All-Time High Above $3,140 as Investors Seek Safe Haven Amid Tariff Uncertainty",
    ticker:"Gold", change:"\u25b2 0.52%", changeUp:true,
    img:"linear-gradient(135deg,#c8d5c0,#3a5a32)",
    summary:"Gold surged to a new all-time high above $3,140/oz as investors rushed to safe-haven assets amid escalating tariff tensions between the US and China. The metal has gained over 15% YTD, outperforming all major asset classes. Central bank buying from China, India, and Turkey continues to underpin demand. Goldman Sachs raised their year-end target to $3,400/oz.",
    elia:"Clients with allocated gold holdings are directly benefiting. At $3,142/oz, gold is up 0.52% today. Goldman\u2019s $3,400 target represents further upside. For clients without gold exposure, this is a strong entry case given macro tailwinds.",
    facts:[["Spot price","$3,142/oz"],["YTD return","+15.2%"],["Goldman target","$3,400/oz"],["Central bank buying","Record pace"],["Key driver","Tariff uncertainty"],["Platform asset","Allocated vault gold"]],
    url:"https://www.wsj.com"
  },
  nvda: {
    source:"CNBC", time:"1h 22m ago",
    headline:"NVIDIA Extends Lead in AI Chips as Data Centre Demand Accelerates",
    ticker:"NVDA", change:"\u25b2 2.63%", changeUp:true,
    img:"linear-gradient(135deg,#d0e8d0,#2a5a3a)",
    summary:"NVIDIA reported a surge in data centre GPU orders, driven by hyperscaler AI infrastructure buildouts from Microsoft, Google, and Amazon. The Blackwell architecture chips now account for the majority of new data centre contracts. Analysts raised NVDA price targets broadly, with consensus above $1,000. The stock extended its YTD gain to over 32%.",
    elia:"Clients with NVDA exposure are up 2.63% today. For portfolios with high US tech concentration, this rally further amplifies existing concentration risk. Consider whether clients approaching 70% US tech weighting should rebalance into diversified or private credit positions.",
    facts:[["NVDA price","$875.39"],["YTD gain","+32%"],["Key driver","AI data centre demand"],["Architecture","Blackwell GPUs"],["Consensus target",">$1,000"],["Risk note","Adds to tech concentration"]],
    url:"https://www.cnbc.com"
  }
};

function intOpenNewsModal(id) {
  var d = INT_NEWS_DATA[id];
  if (!d) return;
  var el = function(i) { return document.getElementById(i); };
  el('intNmSource').textContent    = d.source;
  el('intNmTime').textContent      = d.time;
  el('intNmHeadline').textContent  = d.headline;
  el('intNmTicker').textContent    = d.ticker;
  var chg = el('intNmTickerChange');
  chg.textContent = d.change;
  chg.style.color = d.changeUp ? '#1A7A5E' : '#C0392B';
  el('intNmHeroImg').style.background = d.img;
  el('intNmSummary').textContent   = d.summary;
  el('intNmElia').textContent      = d.elia;
  el('intNmFacts').innerHTML = d.facts.map(function(f) {
    return '<div class="nm-fact"><div class="k">' + f[0] + '</div><div class="v">' + f[1] + '</div></div>';
  }).join('');
  el('intNmReadMore').href = d.url;
  el('intNewsOverlay').classList.add('open');
  el('intNewsModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function intCloseNewsModal() {
  document.getElementById('intNewsOverlay').classList.remove('open');
  document.getElementById('intNewsModal').classList.remove('open');
  document.body.style.overflow = '';
}


// ── Notice popup modal ────────────────────────────────────────────
var NOTICE_DATA = {
  'wm-concentration': {
    title: 'Concentration Risk',
    icon: '<svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>',
    iconBg: 'var(--red-pale)', iconColor: 'var(--red)',
    body: `<p style="font-size:.84rem;color:var(--ink-soft);line-height:1.65;margin-bottom:16px;">Emeka Okafor's portfolio has 71% allocated to US technology stocks, significantly above the recommended maximum of 40% for his risk profile. This creates elevated drawdown exposure.</p>
<div style="margin-bottom:14px;">
  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Affected Client</div>
  <div class="notice-row" style="background:var(--red-pale);">
    <div class="notice-row-dot" style="background:var(--red);margin-top:5px;"></div>
    <div class="notice-row-info">
      <div class="notice-row-label">Emeka Okafor</div>
      <div class="notice-row-sub">US Tech concentration: 71% &mdash; Recommended max: 40%<br>Holdings: AAPL, NVDA, SPY (tech-heavy weighting)<br>Portfolio value: $18.4M &mdash; Risk level: High</div>
    </div>
  </div>
</div>
<div>
  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Recommended Actions</div>
  <div class="notice-row" style="background:var(--cream);">
    <div class="notice-row-dot" style="background:var(--blue);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Schedule rebalancing call</div><div class="notice-row-sub">Discuss reducing NVDA/AAPL weighting and adding geographic diversification</div></div>
  </div>
  <div class="notice-row" style="background:var(--cream);">
    <div class="notice-row-dot" style="background:var(--blue);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Consider private credit allocation</div><div class="notice-row-sub">Bridge Loan Fund III at 10.5% target return reduces tech correlation</div></div>
  </div>
</div>`,
    foot: '<button class="btn-sm btn-ink" onclick="closeNoticeModal();openCW(\'emeka\')" style="flex:1;justify-content:center;">Open Client Profile</button><button class="btn-sm btn-outline" onclick="closeNoticeModal();wmNav(\'trade\')" style="flex:1;justify-content:center;">Go to Trade Centre</button>'
  },
  'wm-review': {
    title: 'Annual Review Due',
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>',
    iconBg: 'var(--gold-pale)', iconColor: 'var(--gold)',
    body: `<p style="font-size:.84rem;color:var(--ink-soft);line-height:1.65;margin-bottom:16px;">Fatima Al-Rashid's mandatory annual portfolio review is 14 days overdue. Regulatory requirements mandate annual advisory reviews for all managed accounts.</p>
<div style="margin-bottom:14px;">
  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Review Details</div>
  <div class="notice-row" style="background:var(--gold-pale);">
    <div class="notice-row-dot" style="background:var(--gold);margin-top:5px;"></div>
    <div class="notice-row-info">
      <div class="notice-row-label">Fatima Al-Rashid</div>
      <div class="notice-row-sub">Portfolio value: $31.2M &mdash; Last review: Mar 27, 2025<br>Review due: Mar 27, 2026 &mdash; Now 14 days overdue<br>Account type: Individual + Trust</div>
    </div>
  </div>
</div>
<div>
  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Required Steps</div>
  <div class="notice-row" style="background:var(--cream);">
    <div class="notice-row-dot" style="background:var(--gold);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Schedule review meeting</div><div class="notice-row-sub">Contact client to arrange annual review call or in-person meeting</div></div>
  </div>
  <div class="notice-row" style="background:var(--cream);">
    <div class="notice-row-dot" style="background:var(--gold);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Complete review documentation</div><div class="notice-row-sub">Update investment objectives, risk tolerance, and suitability assessment</div></div>
  </div>
</div>`,
    foot: '<button class="btn-sm btn-ink" onclick="closeNoticeModal();openCW(\'fatima\')" style="flex:1;justify-content:center;">Open Client Profile</button><button class="btn-sm btn-outline" onclick="closeNoticeModal();wmNav(\'msgs\')" style="flex:1;justify-content:center;">Send Message</button>'
  },
  'wm-opportunity': {
    title: 'Opportunity Match',
    icon: '<svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    iconBg: 'var(--blue-pale)', iconColor: 'var(--blue)',
    body: `<p style="font-size:.84rem;color:var(--ink-soft);line-height:1.65;margin-bottom:16px;">Bridge Loan Fund III matches 3 clients based on accreditation status, risk profile, and minimum investment threshold. The fund closes in 14 days.</p>
<div style="margin-bottom:14px;">
  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Fund Overview</div>
  <div class="notice-row" style="background:var(--blue-pale);">
    <div class="notice-row-dot" style="background:var(--blue);margin-top:5px;"></div>
    <div class="notice-row-info">
      <div class="notice-row-label">Bridge Loan Fund III &mdash; Private Credit</div>
      <div class="notice-row-sub">Target return: 10.5% &mdash; Minimum investment: $25,000<br>Closing date: Apr 24, 2026 &mdash; $2.4M allocation remaining<br>Risk: Moderate &mdash; Accredited investors only</div>
    </div>
  </div>
</div>
<div>
  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Matched Clients</div>
  <div class="notice-row" style="background:var(--cream);">
    <div class="notice-row-dot" style="background:var(--green);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Fatima Al-Rashid</div><div class="notice-row-sub">$31.2M AUM &mdash; Accredited &mdash; Private credit allocation: 0%</div></div>
  </div>
  <div class="notice-row" style="background:var(--cream);">
    <div class="notice-row-dot" style="background:var(--green);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Priya Sharma</div><div class="notice-row-sub">$4.2M AUM &mdash; Accredited &mdash; Private credit allocation: 0%</div></div>
  </div>
  <div class="notice-row" style="background:var(--cream);">
    <div class="notice-row-dot" style="background:var(--green);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Ibrahim Hassan</div><div class="notice-row-sub">$12.1M AUM &mdash; Accredited &mdash; Private credit allocation: 0%</div></div>
  </div>
</div>`,
    foot: '<button class="btn-sm btn-ink" onclick="closeNoticeModal();wmNav(\'opps\')" style="flex:1;justify-content:center;">View Opportunity</button><button class="btn-sm btn-outline" onclick="closeNoticeModal();wmNav(\'trade\')" style="flex:1;justify-content:center;">Submit Allocation</button>'
  },
  'wm-kyc': {
    title: 'KYC Expiry Warning',
    icon: '<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    iconBg: 'var(--red-pale)', iconColor: 'var(--red)',
    body: `<p style="font-size:.84rem;color:var(--ink-soft);line-height:1.65;margin-bottom:16px;">Ibrahim Hassan's passport expires in 32 days. Trading will automatically pause at expiry if updated documents are not received. Urgent client contact required.</p>
<div style="margin-bottom:14px;">
  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">KYC Status</div>
  <div class="notice-row" style="background:var(--red-pale);">
    <div class="notice-row-dot" style="background:var(--red);margin-top:5px;"></div>
    <div class="notice-row-info">
      <div class="notice-row-label">Ibrahim Hassan</div>
      <div class="notice-row-sub">Document: Passport (primary identity)<br>Current expiry: May 12, 2026 &mdash; 32 days remaining<br>Status: Active &mdash; Will auto-suspend on expiry<br>Portfolio value: $12.1M &mdash; Active trades: 2 pending</div>
    </div>
  </div>
</div>
<div>
  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Required Actions</div>
  <div class="notice-row" style="background:var(--cream);">
    <div class="notice-row-dot" style="background:var(--red);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Contact client immediately</div><div class="notice-row-sub">Request renewed passport copy or alternative government-issued ID</div></div>
  </div>
  <div class="notice-row" style="background:var(--cream);">
    <div class="notice-row-dot" style="background:var(--gold);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Upload to document vault</div><div class="notice-row-sub">Upload via the Documents tab &mdash; triggers Onfido re-verification automatically</div></div>
  </div>
</div>`,
    foot: '<button class="btn-sm btn-ink" onclick="closeNoticeModal();openCW(\'ibrahim\')" style="flex:1;justify-content:center;">Open Client Profile</button><button class="btn-sm btn-outline" onclick="closeNoticeModal();wmNav(\'msgs\')" style="flex:1;justify-content:center;">Message Client</button>'
  },
  'sa-compliance': {
    title: 'Compliance Urgent',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    iconBg: 'var(--red-pale)', iconColor: 'var(--red)',
    body: `<p style="font-size:.84rem;color:var(--ink-soft);line-height:1.65;margin-bottom:16px;">3 clients have critical KYC compliance gaps requiring immediate resolution. Trading restrictions will activate automatically if not addressed.</p>
<div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Critical Issues</div>
<div class="notice-row" style="background:var(--red-pale);margin-bottom:8px;">
  <div class="notice-row-dot" style="background:var(--red);margin-top:5px;"></div>
  <div class="notice-row-info">
    <div class="notice-row-label">Ibrahim Hassan &mdash; Passport Expiry</div>
    <div class="notice-row-sub">Passport expires May 12, 2026 &mdash; 32 days remaining<br>Auto-suspension triggers on expiry &mdash; 2 active trade instructions pending<br>Assigned WM: Sarah Mensah &mdash; Contact initiated: No</div>
  </div>
</div>
<div class="notice-row" style="background:var(--red-pale);margin-bottom:8px;">
  <div class="notice-row-dot" style="background:var(--red);margin-top:5px;"></div>
  <div class="notice-row-info">
    <div class="notice-row-label">Kwame Boateng &mdash; 5 Missing Documents</div>
    <div class="notice-row-sub">Missing: Passport, proof of address, entity agreement, bank statement, source of funds declaration<br>Onboarding blocked &mdash; Account inactive &mdash; Portfolio: $8.9M pending<br>Assigned WM: Sarah Mensah &mdash; Last chased: Apr 8, 2026</div>
  </div>
</div>
<div class="notice-row" style="background:var(--gold-pale);margin-bottom:0;">
  <div class="notice-row-dot" style="background:var(--gold);margin-top:5px;"></div>
  <div class="notice-row-info">
    <div class="notice-row-label">Emeka Okafor &mdash; Trust Deed Outstanding</div>
    <div class="notice-row-sub">Trust deed required for full entity structuring and tax-optimised distributions<br>LLC operating agreement under review &mdash; Trust inactive until resolved<br>Legal team notified Apr 8, 2026 &mdash; Status: Awaiting client</div>
  </div>
</div>`,
    foot: '<button class="btn-sm btn-ink" onclick="closeNoticeModal();saNav(\'compliance\')" style="flex:1;justify-content:center;">Go to Compliance Queue</button><button class="btn-sm btn-outline" onclick="closeNoticeModal();saNav(\'approvals\')" style="flex:1;justify-content:center;">View Approvals</button>'
  },
  'sa-pending': {
    title: '23 Items Pending',
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>',
    iconBg: 'var(--gold-pale)', iconColor: 'var(--gold)',
    body: `<p style="font-size:.84rem;color:var(--ink-soft);line-height:1.65;margin-bottom:16px;">23 items across all categories are awaiting admin action. Several are time-sensitive with client-facing deadlines.</p>
<div style="margin-bottom:14px;">
  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Breakdown by Category</div>
  <div class="notice-row" style="background:var(--cream);margin-bottom:6px;">
    <div class="notice-row-dot" style="background:var(--blue);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Trade Instructions &mdash; 8 pending</div><div class="notice-row-sub">Equities, T-Bills and crypto instructions awaiting admin review before routing to Aidi</div></div>
    <div style="font-size:1rem;font-weight:700;color:var(--blue);flex-shrink:0;">8</div>
  </div>
  <div class="notice-row" style="background:var(--cream);margin-bottom:6px;">
    <div class="notice-row-dot" style="background:var(--gold);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Gold Purchases &mdash; 5 pending</div><div class="notice-row-sub">All physical gold allocations require Super Admin sign-off before vault instruction</div></div>
    <div style="font-size:1rem;font-weight:700;color:var(--gold);flex-shrink:0;">5</div>
  </div>
  <div class="notice-row" style="background:var(--cream);margin-bottom:6px;">
    <div class="notice-row-dot" style="background:var(--ink-soft);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Entity Filings &mdash; 4 pending</div><div class="notice-row-sub">LLC formations and trust structuring submissions awaiting legal review</div></div>
    <div style="font-size:1rem;font-weight:700;color:var(--ink-soft);flex-shrink:0;">4</div>
  </div>
  <div class="notice-row" style="background:var(--cream);margin-bottom:6px;">
    <div class="notice-row-dot" style="background:var(--green);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">WM Applications &mdash; 4 pending</div><div class="notice-row-sub">New wealth manager access applications awaiting identity verification and approval</div></div>
    <div style="font-size:1rem;font-weight:700;color:var(--green);flex-shrink:0;">4</div>
  </div>
  <div class="notice-row" style="background:var(--cream);">
    <div class="notice-row-dot" style="background:var(--ink-muted);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Other &mdash; 2 pending</div><div class="notice-row-sub">Plan upgrades and miscellaneous admin items</div></div>
    <div style="font-size:1rem;font-weight:700;color:var(--ink-muted);flex-shrink:0;">2</div>
  </div>
</div>`,
    foot: '<button class="btn-sm btn-ink" onclick="closeNoticeModal();saNav(\'approvals\')" style="flex:1;justify-content:center;">Go to Approvals Queue</button>'
  },
  'sa-deal': {
    title: 'Deal Closing Soon',
    icon: '<svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    iconBg: 'var(--blue-pale)', iconColor: 'var(--blue)',
    body: `<p style="font-size:.84rem;color:var(--ink-soft);line-height:1.65;margin-bottom:16px;">Bridge Loan Fund III closes in 14 days on April 24, 2026. $2.4M of the $5M platform allocation remains. 3 advisors have qualified clients ready to allocate.</p>
<div style="margin-bottom:14px;">
  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Fund Status</div>
  <div class="notice-row" style="background:var(--blue-pale);">
    <div class="notice-row-dot" style="background:var(--blue);margin-top:5px;"></div>
    <div class="notice-row-info">
      <div class="notice-row-label">Bridge Loan Fund III &mdash; Private Credit</div>
      <div class="notice-row-sub">Target return: 10.5% &mdash; Minimum: $25,000 per client<br>Platform allocation: $5M total &mdash; $2.6M allocated &mdash; $2.4M remaining<br>Closing date: April 24, 2026 &mdash; 14 days remaining</div>
    </div>
  </div>
</div>
<div>
  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Advisors with Qualified Clients</div>
  <div class="notice-row" style="background:var(--cream);margin-bottom:6px;">
    <div class="notice-row-dot" style="background:var(--blue);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Sarah Mensah &mdash; Meridian Private Wealth</div><div class="notice-row-sub">3 eligible clients: Fatima Al-Rashid, Priya Sharma, Ibrahim Hassan &mdash; Combined capacity: $300K+</div></div>
  </div>
  <div class="notice-row" style="background:var(--cream);">
    <div class="notice-row-dot" style="background:var(--blue);margin-top:5px;"></div>
    <div class="notice-row-info"><div class="notice-row-label">Pending advisor allocations</div><div class="notice-row-sub">2 additional advisors have indicated client interest pending suitability review</div></div>
  </div>
</div>`,
    foot: '<button class="btn-sm btn-ink" onclick="closeNoticeModal();saNav(\'markets\')" style="flex:1;justify-content:center;">View Private Markets</button><button class="btn-sm btn-outline" onclick="closeNoticeModal();saNav(\'advisors\')" style="flex:1;justify-content:center;">Contact Advisors</button>'
  }
};

function openNoticeModal(id) {
  var d = NOTICE_DATA[id];
  if (!d) return;
  var icon  = document.getElementById('noticeIcon');
  var title = document.getElementById('noticeTitle');
  var body  = document.getElementById('noticeBody');
  var foot  = document.getElementById('noticeFoot');
  icon.innerHTML = d.icon;
  icon.style.background = d.iconBg;
  icon.style.color = d.iconColor;
  title.textContent = d.title;
  body.innerHTML = d.body;
  foot.innerHTML = d.foot;
  document.getElementById('noticeOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeNoticeModal() {
  document.getElementById('noticeOverlay').classList.remove('open');
  document.body.style.overflow = '';
}


// ── Add Client (3-step: Individual + Corporate) ──────────────────────
var _acType = 'individual';

function acDot(n, on) {
  var d = document.getElementById('acDot' + n), l = document.getElementById('acLbl' + n);
  d.style.background = on ? 'var(--ink)' : 'var(--cream-dark)';
  d.style.color      = on ? 'white' : 'var(--ink-muted)';
  l.style.color      = on ? 'var(--ink)' : 'var(--ink-muted)';
  l.style.fontWeight = on ? '600' : '400';
}

function acSelectType(type) {
  _acType = type;
  var isInd = type === 'individual';
  // Cards
  var ci = document.getElementById('acCardInd'), cc = document.getElementById('acCardCorp');
  ci.style.border = isInd ? '2px solid var(--ink)' : '2px solid var(--cream-dark)';
  ci.style.background = isInd ? 'var(--cream)' : 'white';
  document.getElementById('acTxtInd').style.color  = isInd ? 'var(--ink)' : 'var(--ink-soft)';
  document.getElementById('acIconInd').style.stroke = isInd ? 'var(--ink)' : 'var(--ink-soft)';
  cc.style.border = !isInd ? '2px solid var(--ink)' : '2px solid var(--cream-dark)';
  cc.style.background = !isInd ? 'var(--cream)' : 'white';
  document.getElementById('acTxtCorp').style.color  = !isInd ? 'var(--ink)' : 'var(--ink-soft)';
  document.getElementById('acIconCorp').style.stroke = !isInd ? 'var(--ink)' : 'var(--ink-soft)';
  // Fields
  document.getElementById('acFldInd').style.display  = isInd  ? 'block' : 'none';
  document.getElementById('acFldCorp').style.display = !isInd ? 'block' : 'none';
}

function openAddClient() {
  _acType = 'individual';
  ['acStep1','acFoot1'].forEach(function(i){var e=document.getElementById(i);if(e)e.style.display='';});
  ['acStep2','acFoot2','acStep3','acFoot3'].forEach(function(i){var e=document.getElementById(i);if(e)e.style.display='none';});
  acDot(1,true); acDot(2,false); acDot(3,false);
  document.getElementById('addClientTitle').textContent = 'Add New Client';
  acSelectType('individual');
  openModal('modal-new-client');
}

function closeAddClient() { closeModal('modal-new-client'); }

function acGoStep2() {
  if (_acType === 'individual') {
    if (!document.getElementById('ac-fname').value.trim()) { showToast('Please enter first name'); return; }
    if (!document.getElementById('ac-email').value.trim()) { showToast('Please enter email address'); return; }
  } else {
    if (!document.getElementById('ac-entity-name').value.trim())  { showToast('Please enter entity name'); return; }
    if (!document.getElementById('ac-entity-type').value)         { showToast('Please select entity type'); return; }
    if (!document.getElementById('ac-jurisdiction').value)        { showToast('Please select jurisdiction'); return; }
    if (!document.getElementById('ac-contact-email').value.trim()){ showToast('Please enter contact email'); return; }
  }
  document.getElementById('acStep1').style.display = 'none';
  document.getElementById('acFoot1').style.display = 'none';
  document.getElementById('acStep2').style.display = 'block';
  document.getElementById('acFoot2').style.display = 'flex';
  document.getElementById('acDocsInd').style.display  = _acType === 'individual' ? 'block' : 'none';
  document.getElementById('acDocsCorp').style.display = _acType === 'corporate'  ? 'block' : 'none';
  document.getElementById('addClientTitle').textContent = _acType === 'corporate' ? 'Upload Entity Documents' : 'Upload KYC Documents';
  acDot(1,false); acDot(2,true); acDot(3,false);
}

function acGoStep1() {
  document.getElementById('acStep2').style.display = 'none';
  document.getElementById('acFoot2').style.display = 'none';
  document.getElementById('acStep1').style.display = 'block';
  document.getElementById('acFoot1').style.display = 'flex';
  document.getElementById('addClientTitle').textContent = 'Add New Client';
  acDot(1,true); acDot(2,false); acDot(3,false);
}

function acGoStep3() {
  var name, email, initials, badge;
  if (_acType === 'individual') {
    var fn = (document.getElementById('ac-fname').value||'').trim();
    var ln = (document.getElementById('ac-lname').value||'').trim();
    name    = (fn + ' ' + ln).trim() || 'New Client';
    email   = document.getElementById('ac-email').value.trim() || '—';
    initials = ((fn[0]||'')+(ln[0]||'')).toUpperCase()||'NC';
    badge = 'Individual';
  } else {
    name    = document.getElementById('ac-entity-name').value.trim() || 'New Entity';
    email   = document.getElementById('ac-contact-email').value.trim() || '—';
    initials = name.split(' ').map(function(w){return w[0]||'';}).slice(0,2).join('').toUpperCase()||'CO';
    badge = document.getElementById('ac-entity-type').value || 'Corporate';
  }
  var dn = document.getElementById('ac-display-name');
  var de = document.getElementById('ac-display-email');
  var av = document.getElementById('ac-av');
  var tb = document.getElementById('ac-type-badge');
  if (dn) dn.textContent = name;
  if (de) de.textContent = email;
  if (av) av.textContent = initials;
  if (tb) { tb.textContent = badge; tb.style.background = _acType==='corporate'?'var(--gold-pale)':'var(--blue-pale)'; tb.style.color = _acType==='corporate'?'var(--gold)':'var(--blue)'; }
  var un = document.getElementById('ac-un');
  if (un && !un.value) un.value = name.toLowerCase().replace(/[^a-z0-9 ]/g,'').trim().replace(/\s+/g,'.').slice(0,24);
  document.getElementById('acStep2').style.display = 'none';
  document.getElementById('acFoot2').style.display = 'none';
  document.getElementById('acStep3').style.display = 'block';
  document.getElementById('acFoot3').style.display = 'flex';
  document.getElementById('addClientTitle').textContent = 'Set Platform Credentials';
  acDot(1,false); acDot(2,false); acDot(3,true);
}

function acFilePick(inputId, lblId, zoneId) {
  var file = document.getElementById(inputId).files[0];
  if (!file) return;
  var size = file.size > 1048576 ? (file.size/1048576).toFixed(1)+'MB' : Math.round(file.size/1024)+'KB';
  var lbl = document.getElementById(lblId);
  lbl.textContent = '\u2713 ' + file.name + ' (' + size + ')';
  lbl.style.color = 'var(--green)';
  var zone = document.getElementById(zoneId);
  zone.style.background = 'var(--green-pale)';
  zone.style.borderColor = 'var(--green)';
}

function addClientSubmit() {
  var type = _acType === 'corporate' ? 'Corporate client' : 'Client';
  showToast(type + ' created & credentials saved \u2713');
  closeAddClient();
  var un = document.getElementById('ac-un');
  var pw = document.getElementById('ac-pw');
  if (un) un.value = '';
  if (pw) pw.value = '';
}

// Aliases
function addClientNextStep() { acGoStep2(); }
function addClientPrevStep() { acGoStep1(); }


// ── Calendar Export & Sync ──────────────────────────────────────────
function calToggleExport(e) {
  e.stopPropagation();
  var menu = document.getElementById('calExportMenu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}
document.addEventListener('click', function(e) {
  var menu = document.getElementById('calExportMenu');
  var btn  = document.getElementById('calExportBtn');
  if (menu && btn && !btn.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = 'none';
  }
});

function _icalDate(dateStr, timeStr) {
  // dateStr: "2026-04-10", timeStr: "09:00" or ""
  var d = dateStr.replace(/-/g, '');
  if (!timeStr) return 'VALUE=DATE:' + d;
  var t = timeStr.replace(':', '') + '00';
  return d + 'T' + t + '00';
}

function _icalEscape(str) {
  return (str || '').replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

function calExportIcal() {
  document.getElementById('calExportMenu').style.display = 'none';
  var tasks = _cTasks.filter(function(t) { return !t.done; });
  if (!tasks.length) { showToast('No tasks to export'); return; }

  var lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Aidi Wealth Platform//Tasks//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Aidi Tasks',
    'X-WR-TIMEZONE:UTC'
  ];

  tasks.forEach(function(t) {
    var uid  = 'aidi-task-' + t.id + '@aidi.com';
    var now  = new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'') + 'Z';
    var dtstart = _icalDate(t.date, t.time);
    var hasTime = !!t.time;

    // End time: 1 hour after start for timed events, same day+1 for all-day
    var dtend;
    if (hasTime) {
      var parts = t.time.split(':');
      var endH = String((parseInt(parts[0]) + 1) % 24).padStart(2, '0');
      dtend = t.date.replace(/-/g,'') + 'T' + endH + parts[1] + '00';
    } else {
      // All-day: DTEND is next day
      var d = new Date(t.date + 'T00:00:00');
      d.setDate(d.getDate() + 1);
      dtend = 'VALUE=DATE:' + d.toISOString().slice(0,10).replace(/-/g,'');
    }

    var priMap = { urgent: '1', normal: '5', low: '9' };
    var catMap = { client:'CLIENT', trade:'TRADE', review:'REVIEW', compliance:'COMPLIANCE', admin:'ADMIN', personal:'PERSONAL' };

    lines.push('BEGIN:VEVENT');
    lines.push('UID:' + uid);
    lines.push('DTSTAMP:' + now);
    if (hasTime) {
      lines.push('DTSTART:' + dtstart);
      lines.push('DTEND:'   + dtend);
    } else {
      lines.push('DTSTART;' + dtstart);
      lines.push('DTEND;'   + dtend);
    }
    lines.push('SUMMARY:' + _icalEscape(t.title));
    if (t.notes) lines.push('DESCRIPTION:' + _icalEscape(t.notes));
    lines.push('PRIORITY:' + (priMap[t.pri] || '5'));
    lines.push('CATEGORIES:' + (catMap[t.cat] || 'TASK'));
    if (t.pri === 'urgent') lines.push('X-APPLE-CALENDAR-COLOR:#EF4444');
    lines.push('END:VEVENT');
  });

  lines.push('END:VCALENDAR');

  var content = lines.join('\r\n');
  var blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href     = url;
  a.download = 'aidi-tasks.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Calendar file downloaded (\u2713 .ics)');
}

function calSyncGmail() {
  document.getElementById('calExportMenu').style.display = 'none';
  // Open the first upcoming task in Google Calendar "Add Event" — 
  // For a full sync, we direct to Google Calendar with a pre-filled event
  // based on the next upcoming task
  var tasks = _cTasks.filter(function(t) { return !t.done; })
    .sort(function(a,b) { return a.date > b.date ? 1 : -1; });
  
  if (!tasks.length) { showToast('No tasks to sync'); return; }

  // Build a Google Calendar URL for the next task
  var t = tasks[0];
  var d = t.date.replace(/-/g,'');
  var dates;
  if (t.time) {
    var parts = t.time.split(':');
    var endH = String((parseInt(parts[0]) + 1) % 24).padStart(2,'0');
    dates = d + 'T' + parts[0] + parts[1] + '00' + '/' + d + 'T' + endH + parts[1] + '00';
  } else {
    var nd = new Date(t.date + 'T00:00:00'); nd.setDate(nd.getDate()+1);
    dates = d + '/' + nd.toISOString().slice(0,10).replace(/-/g,'');
  }

  var params = new URLSearchParams({
    action: 'TEMPLATE',
    text:   t.title,
    dates:  dates,
    details: (t.notes || '') + (t.notes ? '\n\n' : '') + 'Category: ' + t.cat + '\nPriority: ' + t.pri + '\nSource: Aidi Wealth Platform'
  });

  window.open('https://calendar.google.com/calendar/render?' + params.toString(), '_blank');
  showToast('Opening Google Calendar\u2026');
}

function calCopyGcalLink() {
  document.getElementById('calExportMenu').style.display = 'none';
  var link = 'https://calendar.google.com/calendar/r';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(link).then(function() {
      showToast('Google Calendar link copied \u2713');
    });
  } else {
    showToast('Google Calendar: calendar.google.com/calendar/r');
  }
}


// ── Document Upload modal ────────────────────────────────────────────
var DOC_CAT_NAMES = {
  'passport':'Passport / Government ID','address':'Proof of Address',
  'selfie':'Identity Selfie','source-of-funds':'Source of Funds Declaration',
  'trust-deed':'Trust Deed','llc-agreement':'LLC Operating Agreement',
  'incorporation':'Certificate of Incorporation','beneficial-owner':'Beneficial Ownership Form',
  '1099-b':'1099-B','1099-div':'1099-DIV','w9':'W-9 Form','tax-return':'Tax Return',
  'annual-review':'Annual Review Form','suitability':'Suitability Assessment',
  'aml-form':'AML / PEP Declaration','allocation-auth':'Allocation Authorisation',
  'client-agreement':'Client Agreement','risk-disclosure':'Risk Disclosure Acknowledgement',
  'other':'Document'
};
var DOC_CLIENT_NAMES = {
  'emeka':'Emeka Okafor','fatima':'Fatima Al-Rashid',
  'kwame':'Kwame Boateng','priya':'Priya Sharma','ibrahim':'Ibrahim Hassan'
};

function docUploadCatChange(val) {
  var nameEl = document.getElementById('docUploadName');
  var clientEl = document.getElementById('docUploadClient');
  var cat = DOC_CAT_NAMES[val] || '';
  var client = DOC_CLIENT_NAMES[clientEl.value] || '';
  if (cat) nameEl.value = client ? cat + ' — ' + client : cat;
}

function docHandleFile(input) {
  if (input.files && input.files[0]) {
    var f = input.files[0];
    var label = document.getElementById('docDropLabel');
    label.textContent = '✓ ' + f.name + ' (' + (f.size > 1048576 ? (f.size/1048576).toFixed(1)+'MB' : Math.round(f.size/1024)+'KB') + ')';
    label.style.color = 'var(--green)';
    var zone = document.getElementById('docDropZone');
    zone.style.borderColor = 'var(--green)';
    zone.style.background = 'var(--green-pale)';
  }
}

function docHandleDrop(e) {
  e.preventDefault();
  var zone = document.getElementById('docDropZone');
  zone.style.borderColor = 'var(--cream-dark)';
  zone.style.background = 'var(--cream)';
  var files = e.dataTransfer.files;
  if (files && files[0]) {
    var input = document.getElementById('docFileInput');
    // Can't set files directly on input, but we can simulate the visual
    var f = files[0];
    var label = document.getElementById('docDropLabel');
    label.textContent = '✓ ' + f.name + ' (' + (f.size > 1048576 ? (f.size/1048576).toFixed(1)+'MB' : Math.round(f.size/1024)+'KB') + ')';
    label.style.color = 'var(--green)';
    zone.style.borderColor = 'var(--green)';
    zone.style.background = 'var(--green-pale)';
  }
}

function docUploadSubmit() {
  var client   = document.getElementById('docUploadClient').value;
  var category = document.getElementById('docUploadCategory').value;
  var name     = document.getElementById('docUploadName').value.trim();
  var fileEl   = document.getElementById('docFileInput');
  var hasFile  = fileEl.files && fileEl.files[0];
  var dropLbl  = document.getElementById('docDropLabel').textContent;
  var hasDropped = dropLbl.startsWith('✓');

  if (!client)   { showToast('Please select a client'); return; }
  if (!category) { showToast('Please select a document category'); return; }
  if (!name)     { showToast('Please enter a document name'); return; }
  if (!hasFile && !hasDropped) { showToast('Please attach a file'); return; }

  var clientName = DOC_CLIENT_NAMES[client] || client;
  var notify = document.getElementById('docNotifyClient').checked;

  showToast('Document uploaded ✓' + (notify ? ' — client notified' : ''));
  closeModal('modal-upload-doc');

  // Reset form
  document.getElementById('docUploadClient').value = '';
  document.getElementById('docUploadCategory').value = '';
  document.getElementById('docUploadName').value = '';
  document.getElementById('docUploadNotes').value = '';
  document.getElementById('docFileInput').value = '';
  var lbl = document.getElementById('docDropLabel');
  lbl.textContent = 'Click to browse or drag & drop';
  lbl.style.color = 'var(--ink-soft)';
  var zone = document.getElementById('docDropZone');
  zone.style.borderColor = 'var(--cream-dark)';
  zone.style.background = 'var(--cream)';
}


// ── Document Viewer ──────────────────────────────────────────────────
var DOC_VIEWER_DATA = {
  'passport': {
    title: 'Passport — Emeka Okafor',
    meta: 'Identity · Verified · Uploaded Jan 12, 2026 · PDF',
    type: 'pdf',
    note: 'Verified by Onfido · Valid until Mar 2031',
    pages: [
      {
        label: 'Page 1 of 2 — Data Page',
        content: `<div style="background:white;width:100%;max-width:480px;border-radius:10px;box-shadow:0 2px 16px rgba(12,26,46,.12);overflow:hidden;font-family:'Instrument Sans','Inter',sans-serif;">
          <div style="background:linear-gradient(135deg,#1B3A6B,#0C1A2E);padding:18px 22px;display:flex;align-items:center;justify-content:space-between;">
            <div style="color:white;"><div style="font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;opacity:.6;margin-bottom:2px;">United States of America</div><div style="font-size:1.1rem;font-weight:700;letter-spacing:.05em;">PASSPORT</div></div>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
          </div>
          <div style="display:flex;gap:16px;padding:18px 22px;border-bottom:1px solid #f0ede8;">
            <div style="width:72px;height:90px;border-radius:6px;background:linear-gradient(160deg,#c8d0d8,#8090a0);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:1.8rem;">👤</div>
            <div style="flex:1;">
              <div style="font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:3px;">Surname</div>
              <div style="font-size:.95rem;font-weight:700;color:#0C1A2E;margin-bottom:10px;">OKAFOR</div>
              <div style="font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:3px;">Given Names</div>
              <div style="font-size:.9rem;font-weight:600;color:#0C1A2E;margin-bottom:10px;">EMEKA CHUKWUEMEKA</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                <div><div style="font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:2px;">Nationality</div><div style="font-size:.8rem;font-weight:600;">NIGERIAN</div></div>
                <div><div style="font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:2px;">Date of Birth</div><div style="font-size:.8rem;font-weight:600;">14 MAR 1981</div></div>
                <div><div style="font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:2px;">Passport No.</div><div style="font-size:.8rem;font-weight:600;font-family:monospace;">A09284731</div></div>
                <div><div style="font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:2px;">Expiry Date</div><div style="font-size:.8rem;font-weight:600;color:#1A7A5E;">03 MAR 2031</div></div>
              </div>
            </div>
          </div>
          <div style="padding:10px 22px;background:#fafaf8;">
            <div style="font-size:.58rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:4px;">Machine Readable Zone</div>
            <div style="font-family:monospace;font-size:.65rem;color:#3D5170;letter-spacing:.06em;line-height:1.8;">P&lt;NGAOKAFOR&lt;&lt;EMEKA&lt;CHUKWUEMEKA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br>A09284731&lt;4NGA8103142M3103036&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;72</div>
          </div>
          <div style="padding:8px 22px;display:flex;align-items:center;gap:6px;">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#1A7A5E" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span style="font-size:.72rem;color:#1A7A5E;font-weight:600;">Verified by Onfido · KYC Approved · Jan 12, 2026</span>
          </div>
        </div>`
      }
    ]
  },
  'proof-address': {
    title: 'Proof of Address — Emeka Okafor',
    meta: 'Identity · Verified · Uploaded Jan 12, 2026 · PDF',
    type: 'pdf',
    note: 'Bank statement accepted as proof · Within 90-day window at time of upload',
    pages: [
      {
        label: 'Page 1 of 1 — Bank Statement',
        content: `<div style="background:white;width:100%;max-width:480px;border-radius:10px;box-shadow:0 2px 16px rgba(12,26,46,.12);overflow:hidden;font-family:'Instrument Sans','Inter',sans-serif;">
          <div style="background:#0C1A2E;padding:14px 22px;display:flex;align-items:center;justify-content:space-between;">
            <div style="color:white;font-size:.88rem;font-weight:700;letter-spacing:.03em;">FIRST BANK OF NIGERIA</div>
            <div style="color:rgba(255,255,255,.5);font-size:.68rem;">Statement of Account</div>
          </div>
          <div style="padding:18px 22px;border-bottom:1px solid #f0ede8;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div><div style="font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:3px;">Account Holder</div><div style="font-size:.88rem;font-weight:600;color:#0C1A2E;">Emeka C. Okafor</div></div>
              <div><div style="font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:3px;">Statement Date</div><div style="font-size:.88rem;font-weight:600;">Dec 31, 2025</div></div>
              <div style="grid-column:1/-1;"><div style="font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:3px;">Address on File</div><div style="font-size:.85rem;color:#0C1A2E;line-height:1.5;">14 Victoria Island Boulevard<br>Lagos, Nigeria 106104</div></div>
            </div>
          </div>
          <div style="padding:14px 22px;">
            <div style="font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:8px;">Recent Transactions</div>
            <div style="display:flex;flex-direction:column;gap:0;">
              <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f5f2ec;font-size:.78rem;"><span style="color:#3D5170;">Dec 28 — Wire Transfer</span><span style="font-weight:600;color:#1A7A5E;">+₦4,200,000</span></div>
              <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f5f2ec;font-size:.78rem;"><span style="color:#3D5170;">Dec 22 — Aidi Investment Platform</span><span style="font-weight:600;color:#C0392B;">-₦1,800,000</span></div>
              <div style="display:flex;justify-content:space-between;padding:7px 0;font-size:.78rem;"><span style="color:#3D5170;">Dec 15 — Salary Credit</span><span style="font-weight:600;color:#1A7A5E;">+₦9,500,000</span></div>
            </div>
          </div>
          <div style="padding:8px 22px;background:#f8f6f2;display:flex;align-items:center;gap:6px;">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#1A7A5E" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span style="font-size:.72rem;color:#1A7A5E;font-weight:600;">Address verified · KYC Approved · Jan 12, 2026</span>
          </div>
        </div>`
      }
    ]
  },
  'llc-agreement': {
    title: 'LLC Operating Agreement — Emeka Okafor',
    meta: 'Entity · Under Review · Uploaded Apr 6, 2026 · PDF',
    type: 'pdf',
    note: 'Under review by Aidi Legal Team · Expected completion Apr 13, 2026',
    pages: [
      {
        label: 'Page 1 of 8 — Cover & Parties',
        content: `<div style="background:white;width:100%;max-width:480px;border-radius:10px;box-shadow:0 2px 16px rgba(12,26,46,.12);padding:32px 36px;font-family:'Cormorant Garamond',Georgia,serif;">
          <div style="text-align:center;margin-bottom:28px;padding-bottom:20px;border-bottom:2px solid #0C1A2E;">
            <div style="font-size:.68rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#8494A8;margin-bottom:8px;">State of Delaware</div>
            <h2 style="font-size:1.5rem;font-weight:400;color:#0C1A2E;margin:0 0 6px;">Operating Agreement</h2>
            <div style="font-size:1rem;color:#3D5170;margin-bottom:4px;">Okafor Capital Holdings LLC</div>
            <div style="font-size:.78rem;color:#8494A8;">A Delaware Limited Liability Company</div>
          </div>
          <div style="margin-bottom:20px;">
            <div style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:6px;">Effective Date</div>
            <div style="font-size:.9rem;color:#0C1A2E;">April 6, 2026</div>
          </div>
          <div style="margin-bottom:20px;">
            <div style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:8px;">Members</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div style="padding:10px 14px;background:#f8f6f2;border-radius:7px;border-left:3px solid #0C1A2E;">
                <div style="font-size:.86rem;font-weight:600;color:#0C1A2E;">Emeka Chukwuemeka Okafor</div>
                <div style="font-size:.74rem;color:#8494A8;margin-top:2px;">Managing Member · 70% Interest</div>
              </div>
              <div style="padding:10px 14px;background:#f8f6f2;border-radius:7px;border-left:3px solid #C8962E;">
                <div style="font-size:.86rem;font-weight:600;color:#0C1A2E;">Aidi Ventures LLC (Nominee)</div>
                <div style="font-size:.74rem;color:#8494A8;margin-top:2px;">Non-Managing Member · 30% Interest</div>
              </div>
            </div>
          </div>
          <div style="font-size:.78rem;color:#8494A8;line-height:1.7;border-top:1px solid #f0ede8;padding-top:14px;">
            This Operating Agreement governs the management, operations, and distribution of profits of the above-named limited liability company. Members agree to be bound by the terms herein in accordance with Delaware Code Title 6, Chapter 18.
          </div>
          <div style="margin-top:16px;padding:8px 12px;background:#EFF6FF;border-radius:7px;display:flex;align-items:center;gap:7px;">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#1B4FD8" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            <span style="font-size:.72rem;color:#1B4FD8;font-weight:600;">Under review by Aidi Legal Team · Est. completion Apr 13, 2026</span>
          </div>
        </div>`
      }
    ]
  },
  '1099-b': {
    title: '1099-B (2025) — Emeka Okafor',
    meta: 'Tax · Under Review · Uploaded Apr 5, 2026 · PDF',
    type: 'pdf',
    note: 'Under review by Aidi Tax Team · 2025 tax year',
    pages: [
      {
        label: 'Page 1 of 2 — Proceeds from Broker Transactions',
        content: `<div style="background:white;width:100%;max-width:480px;border-radius:10px;box-shadow:0 2px 16px rgba(12,26,46,.12);padding:24px 28px;font-family:'Instrument Sans','Inter',sans-serif;">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:18px;padding-bottom:14px;border-bottom:2px solid #0C1A2E;">
            <div><div style="font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#8494A8;margin-bottom:3px;">Tax Year 2025</div><div style="font-size:1.2rem;font-weight:700;color:#0C1A2E;">Form 1099-B</div><div style="font-size:.78rem;color:#3D5170;margin-top:2px;">Proceeds From Broker &amp; Barter Exchange Transactions</div></div>
            <div style="text-align:right;font-size:.72rem;color:#8494A8;"><div style="font-weight:600;color:#0C1A2E;">Alpaca Securities LLC</div><div>Member FINRA/SIPC</div><div style="margin-top:3px;">EIN: 47-3765283</div></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">
            <div style="padding:10px 12px;background:#f8f6f2;border-radius:7px;"><div style="font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:3px;">Recipient Name</div><div style="font-size:.84rem;font-weight:600;color:#0C1A2E;">Emeka C. Okafor</div></div>
            <div style="padding:10px 12px;background:#f8f6f2;border-radius:7px;"><div style="font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:3px;">Tax ID (SSN)</div><div style="font-size:.84rem;font-weight:600;font-family:monospace;">XXX-XX-7412</div></div>
          </div>
          <div style="margin-bottom:14px;">
            <div style="font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:8px;">Summary of Transactions</div>
            <table style="width:100%;border-collapse:collapse;font-size:.78rem;">
              <thead><tr style="background:#f3f1ed;"><th style="padding:7px 10px;text-align:left;font-weight:600;color:#3D5170;font-size:.68rem;letter-spacing:.04em;">Security</th><th style="padding:7px 10px;text-align:right;font-weight:600;color:#3D5170;font-size:.68rem;">Proceeds</th><th style="padding:7px 10px;text-align:right;font-weight:600;color:#3D5170;font-size:.68rem;">Cost Basis</th><th style="padding:7px 10px;text-align:right;font-weight:600;color:#3D5170;font-size:.68rem;">Gain/Loss</th></tr></thead>
              <tbody>
                <tr style="border-bottom:1px solid #f0ede8;"><td style="padding:7px 10px;color:#0C1A2E;">SPY ETF</td><td style="padding:7px 10px;text-align:right;">$284,000</td><td style="padding:7px 10px;text-align:right;">$253,000</td><td style="padding:7px 10px;text-align:right;color:#1A7A5E;font-weight:600;">+$31,000</td></tr>
                <tr style="border-bottom:1px solid #f0ede8;"><td style="padding:7px 10px;color:#0C1A2E;">AAPL</td><td style="padding:7px 10px;text-align:right;">$107,220</td><td style="padding:7px 10px;text-align:right;">$90,500</td><td style="padding:7px 10px;text-align:right;color:#1A7A5E;font-weight:600;">+$16,720</td></tr>
                <tr><td style="padding:7px 10px;color:#0C1A2E;font-weight:600;">Total</td><td style="padding:7px 10px;text-align:right;font-weight:600;">$391,220</td><td style="padding:7px 10px;text-align:right;font-weight:600;">$343,500</td><td style="padding:7px 10px;text-align:right;font-weight:700;color:#1A7A5E;">+$47,720</td></tr>
              </tbody>
            </table>
          </div>
          <div style="padding:8px 12px;background:#EFF6FF;border-radius:7px;display:flex;align-items:center;gap:7px;">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#1B4FD8" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            <span style="font-size:.72rem;color:#1B4FD8;font-weight:600;">Under review by Aidi Tax Team</span>
          </div>
        </div>`
      }
    ]
  },
  'annual-review': {
    title: 'Annual Review Form — Fatima Al-Rashid',
    meta: 'Compliance · Pending · Due Mar 27, 2026 · PDF',
    type: 'pdf',
    note: 'Annual review overdue by 14 days — please complete and sign',
    pages: [
      {
        label: 'Page 1 of 2 — Investment Objectives',
        content: `<div style="background:white;width:100%;max-width:480px;border-radius:10px;box-shadow:0 2px 16px rgba(12,26,46,.12);padding:28px 32px;font-family:'Instrument Sans','Inter',sans-serif;">
          <div style="text-align:center;margin-bottom:22px;padding-bottom:16px;border-bottom:2px solid #0C1A2E;">
            <div style="font-size:.65rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#8494A8;margin-bottom:6px;">Aidi Wealth Management</div>
            <h3 style="font-size:1.1rem;font-weight:600;color:#0C1A2E;margin:0 0 4px;">Annual Client Review Form</h3>
            <div style="font-size:.78rem;color:#8494A8;">Review Period: Mar 2025 — Mar 2026</div>
          </div>
          <div style="margin-bottom:16px;"><div style="font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:6px;">Client Information</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
              <div style="padding:9px 12px;background:#f8f6f2;border-radius:7px;"><div style="font-size:.6rem;color:#8494A8;margin-bottom:2px;">Full Name</div><div style="font-size:.84rem;font-weight:600;">Fatima Al-Rashid</div></div>
              <div style="padding:9px 12px;background:#f8f6f2;border-radius:7px;"><div style="font-size:.6rem;color:#8494A8;margin-bottom:2px;">Advisor</div><div style="font-size:.84rem;font-weight:600;">Sarah Mensah</div></div>
            </div>
          </div>
          <div style="margin-bottom:16px;"><div style="font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:8px;">Investment Objectives (to be updated)</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid #E0D9CE;border-radius:7px;cursor:pointer;font-size:.82rem;"><input type="checkbox" checked disabled style="accent-color:#0C1A2E;"> Capital Preservation</label>
              <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid #E0D9CE;border-radius:7px;cursor:pointer;font-size:.82rem;"><input type="checkbox" checked disabled style="accent-color:#0C1A2E;"> Long-term Growth</label>
              <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid #E0D9CE;border-radius:7px;cursor:pointer;font-size:.82rem;"><input type="checkbox" disabled> Income Generation</label>
              <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid #E0D9CE;border-radius:7px;cursor:pointer;font-size:.82rem;"><input type="checkbox" checked disabled style="accent-color:#0C1A2E;"> Diversification</label>
            </div>
          </div>
          <div style="padding:8px 12px;background:#FEF3C7;border-radius:7px;display:flex;align-items:center;gap:7px;border-left:3px solid #C8962E;">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#C8962E" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
            <span style="font-size:.72rem;color:#92400E;font-weight:600;">Review overdue 14 days — client signature required</span>
          </div>
        </div>`
      }
    ]
  }
};

function openDocViewer(docId) {
  var d = DOC_VIEWER_DATA[docId];
  if (!d) { showToast('Document preview not available'); return; }

  document.getElementById('dvTitle').textContent = d.title;
  document.getElementById('dvMeta').textContent  = d.meta;
  document.getElementById('dvFootNote').textContent = d.note;

  var body = document.getElementById('dvBody');
  body.innerHTML = '';

  d.pages.forEach(function(page, i) {
    // Page label
    var lbl = document.createElement('div');
    lbl.style.cssText = 'font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8494A8;margin-bottom:10px;margin-top:' + (i > 0 ? '20px' : '0');
    lbl.textContent = page.label;
    body.appendChild(lbl);

    // Page content
    var wrap = document.createElement('div');
    wrap.style.cssText = 'width:100%;max-width:540px;';
    wrap.innerHTML = page.content;
    body.appendChild(wrap);
  });

  openModal('modal-doc-viewer');
}

function closeDocViewer() {
  closeModal('modal-doc-viewer');
}


// ── Client Documents filter ───────────────────────────────────────────
function docsFilter(status, btn) {
  // Update button styles
  document.querySelectorAll('#wm-docs .page-hrow ~ div button[id^="docTab-"]').forEach(function(b) {
    b.style.background = 'white';
    b.style.color = 'var(--ink-soft)';
    b.style.border = '1px solid var(--cream-dark)';
  });
  // Also query by id prefix
  ['all','uploaded','verified','pending','missing'].forEach(function(t) {
    var el = document.getElementById('docTab-' + t);
    if (el) { el.style.background = 'white'; el.style.color = 'var(--ink-soft)'; el.style.border = '1px solid var(--cream-dark)'; }
  });
  if (btn) { btn.style.background = 'var(--ink)'; btn.style.color = 'white'; btn.style.border = '1px solid var(--ink)'; }

  // Filter rows
  var rows = document.querySelectorAll('#docsTable tbody tr');
  rows.forEach(function(row) {
    var rowStatus = row.getAttribute('data-status');
    if (status === 'all') {
      row.style.display = '';
    } else if (status === 'uploaded') {
      // "uploaded" tab shows WM-uploaded docs (verified + under review)
      row.style.display = (rowStatus === 'uploaded' || rowStatus === 'verified') ? '' : 'none';
    } else {
      row.style.display = (rowStatus === status) ? '' : 'none';
    }
  });
}


// ═══════════════════════════════════════════════════════════
// ELIA CHAT ENGINE
// ═══════════════════════════════════════════════════════════
var _eliaInited = false;
function eliaInit() {
  if (_eliaInited) return;
  _eliaInited = true;
  eliaRenderThreadList();
  eliaShowInsights();
}
var eliaThreads = [
  { id: 'insights', title: 'Portfolio Insights', ts: 'Just now', msgs: [] }
];
var eliaActiveThread = null;
var eliaIsTyping = false;

// Elia knowledge base — context-aware responses
var ELIA_KB = [
  { k: ['emeka','okafor','concentration','tech','rebalance','71'],
    r: "Emeka Okafor's portfolio holds 71% in US technology — primarily SPY, AAPL, and NVDA. This significantly exceeds the recommended 35-40% sector ceiling for his risk profile.\n\n**Recommended rebalancing approach:**\n1. Reduce NVDA (highest volatility, $875 target already stretched)\n2. Shift 15-20% into Bridge Loan Fund III for private credit diversification\n3. Consider adding an international equity ETF (e.g. VEA or EEM) for geographic spread\n4. Review gold allocation — currently at 11.8%, within healthy range\n\nI can draft a rebalancing proposal letter for Emeka if you'd like." },
  { k: ['ibrahim','hassan','passport','expiry','kyc','expiring'],
    r: "Ibrahim Hassan's passport expires on **May 12, 2026** — 32 days from now. Here's the priority action plan:\n\n1. **Contact client today** — call or message requesting a renewed passport copy or alternative government-issued ID\n2. **Upload to document vault** once received — this will automatically trigger Onfido re-verification\n3. **Flag to Aidi admin** if no response within 5 days — trading will auto-suspend at expiry\n\nNote: Ibrahim has 2 pending trade instructions. If his KYC lapses, those instructions will be blocked. I'd recommend prioritising this over other tasks today." },
  { k: ['bridge','loan','fund','iii','fatima','priya','ibrahim','opportunity','allocat'],
    r: "Bridge Loan Fund III is a strong match for 3 of your clients:\n\n**Fatima Al-Rashid** — $31.2M AUM, 0% private credit, accredited, high capacity\n**Priya Sharma** — $4.2M AUM, 0% private credit, accredited, above $25K minimum\n**Ibrahim Hassan** — $12.1M AUM, accredited (pending KYC renewal)\n\nThe fund offers a 10.5% target return on RE-secured bridge loans with quarterly distributions. Deadline: **April 24, 2026** — 13 days away.\n\nSuggested next steps:\n- Call Fatima and Priya this week\n- Hold Ibrahim allocation pending his passport renewal\n- Submit allocation instructions via Trade Centre once authorised" },
  { k: ['urgent','attention','summary','overview','book','all client'],
    r: "Here's a summary of clients requiring immediate attention:\n\n🔴 **Urgent — Emeka Okafor**: Tech concentration at 71%. Rebalancing proposal needed before next market downturn.\n\n🔴 **Urgent — Ibrahim Hassan**: Passport expires May 12. Contact today — trading will auto-pause at expiry.\n\n🟡 **This week — Fatima Al-Rashid**: Annual review 14 days overdue. Schedule call and complete documentation.\n\n🟡 **This week — Kwame Boateng**: 4 documents missing. KYC incomplete — account inactive until resolved.\n\n🔵 **Before Apr 24 — Fatima, Priya**: Present Bridge Loan Fund III. $2.4M allocation still available.\n\nWould you like me to draft action emails or schedule reminders for any of these?" },
  { k: ['risk','profile','book','overall','portfolio'],
    r: "Your book of business risk summary across 5 clients ($74.8M AUM):\n\n**Portfolio composition:**\n- US Equities: 52% (overweight)\n- Crypto: 6% (within range)\n- Gold & Metals: 9%\n- Fixed Income / T-Bills: 14%\n- Private Credit: 3%\n- Cash: 16%\n\n**Risk level distribution:**\n- High: Emeka Okafor (1 client)\n- Medium: Fatima, Ibrahim, Priya (3 clients)\n- Low: Kwame Boateng (1 client — inactive)\n\n**Key risks:**\n- Sector concentration in US tech (Emeka)\n- KYC compliance gaps (Ibrahim, Kwame)\n- Insufficient private credit diversification across all clients\n\nOverall book risk: **Medium-High**. Primary concern is Emeka's concentration." },
  { k: ['draft','proposal','letter','rebalanc','emeka'],
    r: "Here's a draft rebalancing proposal for Emeka:\n\n---\n**PORTFOLIO REBALANCING PROPOSAL**\n*Prepared for: Emeka Okafor | Date: April 2026*\n\nDear Emeka,\n\nFollowing our recent portfolio review, I'd like to recommend a rebalancing to better align your holdings with your long-term wealth objectives and risk parameters.\n\n**Current allocation concern:** Your US technology exposure currently stands at 71%, compared to our recommended ceiling of 40% for your Moderate-High risk profile.\n\n**Proposed adjustments:**\n- Reduce AAPL/NVDA positions by ~$800K\n- Allocate $500K to Bridge Loan Fund III (10.5% target, private credit)\n- Allocate $300K to international equity ETF\n\n**Expected outcome:** Reduce sector concentration from 71% → 48%, improve diversification, maintain growth trajectory.\n\nPlease let me know your availability to discuss.\n\nWarm regards,\nSarah Mensah\n---\n\nWould you like me to adjust the tone or figures?" },
  { k: ['kwame','boateng','document','missing','onboard'],
    r: "Kwame Boateng's account is currently inactive due to incomplete KYC. Here's what's outstanding:\n\n**Missing documents (4 of 8 required):**\n1. Passport / Government ID\n2. Proof of Address (within 90 days)\n3. Source of Funds Declaration\n4. Bank Statement (3 months)\n\n**Status:** Account created Jan 2026, KYC incomplete. No trades permitted until all documents verified.\n\n**Recommended actions:**\n- Send a consolidated document request email listing all 4 items\n- Set a 7-day follow-up reminder\n- If no response in 14 days, flag to Aidi compliance team\n\nWould you like me to draft the document request message?" }
];

function eliaFindResponse(msg) {
  var lower = msg.toLowerCase();
  var best = null; var bestScore = 0;
  ELIA_KB.forEach(function(entry) {
    var score = 0;
    entry.k.forEach(function(kw) { if (lower.indexOf(kw) !== -1) score++; });
    if (score > bestScore) { bestScore = score; best = entry; }
  });
  if (best && bestScore > 0) return best.r;
  return "I don't have specific data on that in your current book, but I can help you think through it. Could you give me more context — which client or asset are you referring to? I can pull relevant portfolio details and provide a more targeted analysis.";
}

function eliaRenderMarkdown(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p style="margin:8px 0 0;">')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p style="margin:0;">')
    .replace(/$/, '</p>');
}

function eliaRenderThreadList(filter) {
  var list = document.getElementById('eliaThreadList');
  if (!list) return;
  var threads = filter ? eliaThreads.filter(function(t) {
    return t.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  }) : eliaThreads;

  if (threads.length === 0) {
    list.innerHTML = '<div style="padding:16px 14px;font-size:.76rem;color:var(--ink-muted);text-align:center;">No conversations yet</div>';
    return;
  }

  list.innerHTML = threads.map(function(t) {
    var isActive = eliaActiveThread && eliaActiveThread.id === t.id;
    return '<div class="elia-thread-row' + (isActive ? ' active' : '') + '" onclick="eliaOpenThread(\'' + t.id + '\')">' +
      '<div class="elia-thread-info">' +
        '<div class="elia-thread-title">' + t.title + '</div>' +
        '<div class="elia-thread-ts">' + t.ts + '</div>' +
      '</div>' +
      '<button class="elia-del-btn" onclick="event.stopPropagation();eliaDeleteThread(\'' + t.id + '\')" title="Delete">' +
        '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>' +
      '</button>' +
    '</div>';
  }).join('');
}

function eliaDeleteThread(id) {
  var idx = eliaThreads.findIndex(function(t) { return t.id === id; });
  if (idx === -1) return;
  eliaThreads.splice(idx, 1);
  // If deleting the active thread, go back to insights
  if (eliaActiveThread && eliaActiveThread.id === id) {
    eliaActiveThread = null;
    eliaShowInsights();
  } else {
    eliaRenderThreadList();
  }
}

function eliaSearchThreads(val) { eliaRenderThreadList(val); }

function eliaShowInsights() {
  eliaActiveThread = null;
  document.getElementById('eliaInsightsView').style.display = 'flex';
  document.getElementById('eliaChatView').style.display = 'none';
  // Update insights button style
  var ib = document.getElementById('eliaInsightsBtn');
  ib.style.background = 'var(--ink)';
  var ibSvg = ib.querySelector('svg'), ibSpan = ib.querySelector('span');
  if (ibSvg) ibSvg.style.stroke = 'white';
  if (ibSpan) ibSpan.style.color = 'white';
  eliaRenderThreadList();
}

function eliaOpenThread(id) {
  var thread = eliaThreads.find(function(t) { return t.id === id; });
  if (!thread) return;
  eliaActiveThread = thread;
  document.getElementById('eliaInsightsView').style.display = 'none';
  document.getElementById('eliaChatView').style.display = 'flex';
  document.getElementById('eliaChatTitle').textContent = thread.title;
  var ib2 = document.getElementById('eliaInsightsBtn');
  if (ib2) { ib2.style.background = 'transparent'; ib2.querySelector('svg').style.stroke = 'var(--ink-soft)'; ib2.querySelector('span').style.color = 'var(--ink-soft)'; }
  eliaRenderMessages();
  eliaRenderThreadList();
}

function eliaRenderMessages() {
  var container = document.getElementById('eliaMsgs');
  if (!container || !eliaActiveThread) return;
  container.innerHTML = '';

  if (eliaActiveThread.msgs.length === 0) {
    container.innerHTML = '<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:40px 20px;text-align:center;"><div style="width:44px;height:44px;border-radius:50%;background:var(--cream);display:flex;align-items:center;justify-content:center;margin-bottom:4px;"><svg viewBox=\'0 0 24 24\' width=\'20\' height=\'20\' fill=\'none\' stroke=\'var(--ink-muted)\' stroke-width=\'1.5\'><polygon points=\'12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\'/></svg></div><div style=\'font-size:.92rem;font-weight:600;color:var(--ink);\'>How can I help?</div><div style=\'font-size:.8rem;color:var(--ink-muted);max-width:280px;\'>Ask me about your clients, portfolio risks, opportunities, or compliance issues.</div></div>';
    return;
  }

  eliaActiveThread.msgs.forEach(function(msg) {
    var div = document.createElement('div');
    div.className = 'elia-msg';
    if (msg.role === 'user') {
      div.style.cssText = 'display:flex;justify-content:flex-end;';
      div.innerHTML = '<div style="max-width:72%;background:var(--ink);color:white;padding:10px 14px;border-radius:14px 14px 2px 14px;font-size:.87rem;line-height:1.55;">' + msg.text.replace(/\n/g,'<br>') + '</div>';
    } else {
      div.style.cssText = 'display:flex;gap:8px;align-items:flex-start;';
      div.innerHTML = '<div style="width:28px;height:28px;border-radius:50%;background:var(--ink);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>' +
        '<div style="max-width:80%;"><div style="background:var(--cream);padding:10px 14px;border-radius:2px 14px 14px 14px;font-size:.87rem;color:var(--ink);line-height:1.6;">' + eliaRenderMarkdown(msg.text) + '</div>' +
        '<div style="font-size:.66rem;color:var(--ink-muted);margin-top:4px;padding-left:2px;">' + msg.ts + ' &middot; Elia</div></div>';
    }
    container.appendChild(div);
  });
  container.scrollTop = container.scrollHeight;
}

function eliaNewThread() {
  var id = 'thread-' + Date.now();
  var thread = { id: id, title: 'New conversation', ts: 'Just now', msgs: [] };
  eliaThreads.unshift(thread);
  eliaOpenThread(id);
}

function eliaAskAbout(prompt) {
  // Start a new thread with this prompt pre-filled
  eliaNewThread();
  var input = document.getElementById('eliaInput');
  if (input) { input.value = prompt; input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 120) + 'px'; }
  eliaSend();
}

function eliaSend() {
  var input = document.getElementById('eliaInput');
  var text = (input.value || '').trim();
  if (!text || eliaIsTyping) return;
  if (!eliaActiveThread) { eliaNewThread(); }

  var now = new Date().toLocaleTimeString('en-US', {hour:'numeric',minute:'2-digit'});

  // Add user message
  eliaActiveThread.msgs.push({ role:'user', text:text, ts:now });

  // Update thread title from first message
  if (eliaActiveThread.title === 'New conversation') {
    eliaActiveThread.title = text.length > 36 ? text.slice(0,36)+'…' : text;
  }
  eliaActiveThread.ts = 'Just now';

  input.value = '';
  input.style.height = 'auto';
  eliaRenderMessages();
  eliaRenderThreadList();

  // Show typing
  eliaIsTyping = true;
  document.getElementById('eliaTyping').style.display = 'block';
  var msgs = document.getElementById('eliaMsgs');
  msgs.scrollTop = msgs.scrollHeight;

  // Simulate response
  var delay = 900 + Math.random() * 800;
  var userMsg = text;
  setTimeout(function() {
    document.getElementById('eliaTyping').style.display = 'none';
    eliaIsTyping = false;
    var response = eliaFindResponse(userMsg);
    var ts2 = new Date().toLocaleTimeString('en-US', {hour:'numeric',minute:'2-digit'});
    eliaActiveThread.msgs.push({ role:'elia', text:response, ts:ts2 });
    eliaRenderMessages();
    eliaRenderThreadList();
  }, delay);
}


// ── Messages ──────────────────────────────────────────────────────────
var MSG_CLIENTS = {
  emeka:   { name:'Emeka Okafor',    initials:'EO', sub:'Individual · $18.4M AUM',  color:'var(--blue)' },
  fatima:  { name:'Fatima Al-Rashid',initials:'FA', sub:'Individual · $31.2M AUM',  color:'#7C3AED' },
  kwame:   { name:'Kwame Boateng',   initials:'KB', sub:'Individual · $8.9M AUM',   color:'var(--green)' },
  priya:   { name:'Priya Sharma',    initials:'PS', sub:'Individual · $4.2M AUM',   color:'#0891B2' },
  ibrahim: { name:'Ibrahim Hassan',  initials:'IH', sub:'Cross-border · $12.1M AUM',color:'var(--gold)' }
};

var msgConvs = [
  { id:'emeka', unread:true, lastMsg:'Re: portfolio rebalancing…', ts:'2h ago', msgs:[
    { from:'client', text:"Hi Sarah, I'd like to discuss the rebalancing proposal you mentioned. Are you available for a call this week?" },
    { from:'wm',     text:"Of course! Reviewing your tech concentration now — will send a detailed proposal by Friday." },
    { from:'client', text:"That works. Also, is the Bridge Loan Fund III still available? I heard it closes soon." },
    { from:'wm',     text:"Yes, closes Apr 24. I think it's a great fit for you — I'll include an allocation recommendation in the proposal." }
  ]},
  { id:'fatima', unread:false, lastMsg:'Thanks for the report…', ts:'Yesterday', msgs:[
    { from:'wm',     text:"Hi Fatima, I've completed your annual portfolio review. Everything looks strong — 9.8% YTD return." },
    { from:'client', text:"Thanks for the report, Sarah. I'm happy with the performance. Should we discuss the private credit allocation?" },
    { from:'wm',     text:"Absolutely — your current 0% in private credit is an opportunity. Let's schedule a call next week." }
  ]},
  { id:'ibrahim', unread:true, lastMsg:'Passport renewal update', ts:'3h ago', msgs:[
    { from:'wm',     text:"Hi Ibrahim, just a reminder — your passport expires on May 12. We'll need an updated copy to keep your account active." },
    { from:'client', text:"Thanks for the heads up. I've applied for renewal — should have the new one within two weeks." },
    { from:'wm',     text:"Perfect, please send it over as soon as you receive it so we can update your KYC records." }
  ]},
  { id:'priya', unread:false, lastMsg:'New trade instruction', ts:'Mon', msgs:[
    { from:'client', text:"Hi Sarah, I'd like to increase my SPY position by $50,000. Can you process that?" },
    { from:'wm',     text:"On it. I'll submit the instruction now via Aidi — you'll receive a confirmation email shortly." },
    { from:'client', text:"Thank you! Also, do you have any thoughts on diversifying into gold?" },
    { from:'wm',     text:"Gold is up 15% YTD and I think a 5-8% allocation makes sense for your profile. I'll put together a recommendation." }
  ]}
];

var msgActiveId = 'emeka';

function msgRenderThreadList() {
  var list = document.getElementById('msgThreadList');
  if (!list) return;
  list.innerHTML = msgConvs.map(function(c) {
    var cl = MSG_CLIENTS[c.id];
    var isActive = c.id === msgActiveId;
    return '<div onclick="msgOpenConv(\'' + c.id + '\')" style="display:flex;align-items:center;gap:9px;padding:10px 12px;cursor:pointer;border-bottom:1px solid var(--cream-mid);background:' + (isActive ? 'var(--cream)' : 'white') + ';border-left:3px solid ' + (isActive ? 'var(--gold)' : 'transparent') + ';transition:background .12s;" onmouseover="if(this.dataset.id!==msgActiveId)this.style.background=\'var(--cream)\'" onmouseout="if(\'' + c.id + '\'!==msgActiveId)this.style.background=\'white\'">' +
      '<div style="width:34px;height:34px;border-radius:50%;background:' + cl.color + ';color:white;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700;flex-shrink:0;position:relative;">' + cl.initials +
        (c.unread ? '<div style="width:8px;height:8px;border-radius:50%;background:var(--blue);border:2px solid white;position:absolute;top:0;right:0;"></div>' : '') +
      '</div>' +
      '<div style="flex:1;min-width:0;">' +
        '<div style="font-size:.82rem;font-weight:' + (c.unread ? '700' : '500') + ';color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + cl.name + '</div>' +
        '<div style="font-size:.72rem;color:var(--ink-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px;">' + c.lastMsg + '</div>' +
      '</div>' +
      '<div style="font-size:.66rem;color:var(--ink-muted);flex-shrink:0;">' + c.ts + '</div>' +
    '</div>';
  }).join('');
}

function msgRenderMessages() {
  var conv = msgConvs.find(function(c) { return c.id === msgActiveId; });
  if (!conv) return;
  var cl = MSG_CLIENTS[conv.id];
  var container = document.getElementById('msgMessages');
  if (!container) return;
  container.innerHTML = conv.msgs.map(function(m) {
    var isWM = m.from === 'wm';
    var bbg = isWM ? 'var(--blue)' : 'var(--cream)';
    var bc  = isWM ? 'white' : 'var(--ink)';
    var br  = isWM ? '12px 2px 12px 12px' : '2px 12px 12px 12px';
    var av = '<div style="width:26px;height:26px;border-radius:50%;background:' + (isWM?'var(--ink)':cl.color) + ';color:white;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:700;flex-shrink:0;align-self:flex-end;">' + (isWM?'SM':cl.initials) + '</div>';
    var bubble = m.text ? '<div style="background:'+bbg+';color:'+bc+';padding:9px 13px;border-radius:'+br+';font-size:.83rem;max-width:300px;line-height:1.5;">' + m.text + '</div>' : '';
    var atts = '';
    if (m.attachments) {
      atts = m.attachments.map(function(a) {
        if (a.type==='img' && a.dataUrl) {
          return '<div style="border-radius:10px;overflow:hidden;max-width:180px;margin-top:2px;"><img src="' + a.dataUrl + '" style="width:100%;display:block;border-radius:10px;"></div>';
        }
        var docBg = isWM ? 'rgba(255,255,255,.18)' : 'rgba(12,26,46,.06)';
        return '<div class="msg-att-doc" style="display:flex;align-items:center;gap:7px;background:' + docBg + ';border-radius:9px;padding:8px 11px;margin-top:2px;cursor:pointer;">' +
          '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="' + bc + '" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
          '<div style="flex:1;min-width:0;"><div style="font-size:.77rem;font-weight:600;color:' + bc + ';white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + a.name + '</div>' +
          '<div style="font-size:.67rem;color:' + bc + ';opacity:.7;">' + a.size + ' &middot; <span style="text-decoration:underline;">View in Documents</span></div></div></div>';
      }).join('');
    }
    return '<div style="display:flex;gap:7px;align-items:flex-end;' + (isWM?'flex-direction:row-reverse;':'') + '">' + av + '<div style="display:flex;flex-direction:column;gap:3px;align-items:' + (isWM?'flex-end':'flex-start') + ';">' + bubble + atts + '</div></div>';
  }).join('');
  container.scrollTop = container.scrollHeight;
  // Wire doc attachment clicks
  container.querySelectorAll('.msg-att-doc').forEach(function(el) {
    el.addEventListener('click', function() { wmNav('docs'); });
  });
}
function msgUpdateHeader() {
  var conv = msgConvs.find(function(c) { return c.id === msgActiveId; });
  if (!conv) return;
  var cl = MSG_CLIENTS[conv.id];
  var av = document.getElementById('msgChatAv');
  var nm = document.getElementById('msgChatName');
  var sb = document.getElementById('msgChatSub');
  if (av) { av.textContent = cl.initials; av.style.background = cl.color; }
  if (nm) nm.textContent = cl.name;
  if (sb) sb.textContent = cl.sub;
}

function msgOpenConv(id) {
  msgActiveId = id;
  var conv = msgConvs.find(function(c) { return c.id === id; });
  if (conv) conv.unread = false;
  msgRenderThreadList();
  msgRenderMessages();
  msgUpdateHeader();
  var input = document.getElementById('msgInput');
  if (input) input.focus();
}

function msgCloseConv() {
  var idx = msgConvs.findIndex(function(c) { return c.id === msgActiveId; });
  if (idx === -1) return;
  msgConvs.splice(idx, 1);
  if (msgConvs.length > 0) {
    msgActiveId = msgConvs[0].id;
    msgRenderThreadList();
    msgRenderMessages();
    msgUpdateHeader();
  } else {
    msgActiveId = null;
    msgRenderThreadList();
    var container = document.getElementById('msgMessages');
    if (container) container.innerHTML = '<div style="flex:1;display:flex;align-items:center;justify-content:center;color:var(--ink-muted);font-size:.84rem;">No conversations</div>';
    var hdr = document.getElementById('msgChatName');
    if (hdr) hdr.textContent = '—';
  }
}

function msgSend() {
  var input = document.getElementById('msgInput');
  var text = (input.value || '').trim();
  if (!text && (!window._msgPending || _msgPending.length === 0)) return;
  if (!msgActiveId) return;
  var conv = msgConvs.find(function(c) { return c.id === msgActiveId; });
  if (!conv) return;
  var msg = { from:'wm', text:text };
  if (window._msgPending && _msgPending.length > 0) {
    msg.attachments = _msgPending.slice();
    _msgPending = [];
    msgUpdateAttachStrip();
    showToast('Saved to Client Documents ✓');
  }
  conv.msgs.push(msg);
  conv.lastMsg = msg.attachments ? ('\uD83D\uDCCE ' + (text || msg.attachments[0].name)) : (text.length > 38 ? text.slice(0,38)+'...' : text);
  conv.ts = 'Just now';
  input.value = '';
  msgRenderMessages();
  msgRenderThreadList();
}

function msgsNewConv() {
  document.getElementById('msgNewModal').style.display = 'flex';
}

function msgsCloseNew() {
  document.getElementById('msgNewModal').style.display = 'none';
  document.getElementById('msgNewClient').value = '';
  document.getElementById('msgNewText').value = '';
}

function msgsStartConv() {
  var clientId = document.getElementById('msgNewClient').value;
  var text = (document.getElementById('msgNewText').value || '').trim();
  if (!clientId) { showToast('Please select a client'); return; }
  if (!text) { showToast('Please enter a message'); return; }
  // Check if conv already exists
  var existing = msgConvs.find(function(c) { return c.id === clientId; });
  if (existing) {
    existing.msgs.push({ from:'wm', text:text });
    existing.lastMsg = text.length > 38 ? text.slice(0,38)+'…' : text;
    existing.ts = 'Just now';
  } else {
    msgConvs.unshift({ id:clientId, unread:false, lastMsg:text.length>38?text.slice(0,38)+'…':text, ts:'Just now', msgs:[{ from:'wm', text:text }] });
  }
  msgsCloseNew();
  msgOpenConv(clientId);
}

function msgOpenClient() {
  if (msgActiveId) openCW(msgActiveId);
}

// Init messages on nav
function msgsInit() {
  msgRenderThreadList();
  if (msgActiveId) {
    msgRenderMessages();
    msgUpdateHeader();
  }
}


// ── Message attachment helpers ────────────────────────────────────────
var _msgPending = [];
function msgHandleFiles(inp) {
  Array.from(inp.files||[]).forEach(function(f){
    var isImg=/\.(jpg|jpeg|png|gif|webp)$/i.test(f.name);
    var sz=f.size>1048576?(f.size/1048576).toFixed(1)+'MB':Math.round(f.size/1024)+'KB';
    var a={name:f.name,size:sz,type:isImg?'img':'doc',dataUrl:''};
    if(isImg){var r=new FileReader();r.onload=function(e){a.dataUrl=e.target.result;msgUpdateAttachStrip();};r.readAsDataURL(f);}
    _msgPending.push(a);
  });
  inp.value='';
  msgUpdateAttachStrip();
}
function msgUpdateAttachStrip(){
  var s=document.getElementById('msgAttachPreview');
  if(!s)return;
  if(_msgPending.length===0){s.style.display='none';return;}
  s.style.display='flex';
  s.innerHTML=_msgPending.map(function(a,i){
    return '<div style="display:flex;align-items:center;gap:5px;background:white;border:1.5px solid var(--cream-dark);border-radius:7px;padding:4px 8px 4px 6px;font-size:.74rem;color:var(--ink);">' +
      '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.5">'+(a.type==='img'?'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>')+'</svg>' +
      '<span style="max-width:90px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+a.name+'</span>' +
      '<button onclick="_msgPending.splice('+i+',1);msgUpdateAttachStrip()" style="border:none;background:none;cursor:pointer;color:var(--ink-muted);font-size:.9rem;padding:0 0 0 2px;">&times;</button>' +
    '</div>';
  }).join('');
}




// -- WM Entities & Compliance --
var WM_ENT_DATA = {
  'okafor-llc': {
    title:'Okafor Capital LLC', sub:'Delaware LLC · Emeka Okafor · EIN: 47-XXXXXXX',
    badge:{text:'Active',bg:'var(--blue-pale)',color:'var(--blue)'},
    sections:[
      {title:'Entity Information',rows:[['Entity type','LLC'],['State','Delaware'],['Formed','2022'],['EIN','47-XXXXXXX'],['Structure','Member-managed'],['Registered agent','Aidi Legal Services']]},
      {title:'Client',rows:[['Client','Emeka Okafor'],['Investor status','Accredited'],['Assigned WM','Sarah Mensah']]},
      {title:'Compliance',rows:[['Annual report','Due Mar 31, 2026'],['Operating agreement','On file'],['Last reviewed','Jan 2026']]}
    ],
    docs:[{name:'Certificate of Formation',date:'Delaware 2022'},{name:'Operating Agreement',date:'Signed 2022'},{name:'EIN Assignment Letter',date:'IRS 2022'},{name:'Annual Report 2025',date:'Filed Jan 2026'}],
    actions:[{label:'Open client profile',style:'secondary',fn:'wmEntClosePanel'},{label:'View documents',style:'primary',fn:'wmEntClosePanel'}]
  },
  'okafor-trust': {
    title:'Okafor Family Trust', sub:'Revocable Trust · Formation in progress',
    badge:{text:'In Review',bg:'var(--gold-pale)',color:'#8a6520'},
    sections:[
      {title:'Formation Details',rows:[['Type','Revocable Trust'],['Client','Emeka Okafor'],['Submitted','Apr 6, 2026'],['Est. completion','Apr 13, 2026'],['Reference','AIDI-TR-2026-002']]},
      {title:'Fee Summary',rows:[['Aidi formation service','$500 - Paid'],['Legal review','$250 - Paid'],['Total paid','$750']]}
    ],
    docs:[{name:'Formation Receipt',date:'Apr 6, 2026'},{name:'Draft Trust Deed',date:'Pending review'}],
    track:[
      {label:'Request submitted',desc:'Trust formation request submitted to Aidi admin team.',date:'Apr 6, 2026 11:22 AM',status:'done'},
      {label:'Legal review',desc:'Aidi legal team reviewing trust deed structure and beneficiary arrangements.',date:'Apr 7, 2026 9:00 AM',status:'active'},
      {label:'Client signature required',desc:'Trust deed requires signature from the settlor.',date:'Est. Apr 10, 2026',status:'pending'},
      {label:'Admin approval',desc:'Aidi admin reviews and approves final documents.',date:'Est. Apr 11, 2026',status:'pending'},
      {label:'Formation complete',desc:'Signed deed and formation documents delivered to client account.',date:'Est. Apr 13, 2026',status:'pending'}
    ],
    actions:[{label:'Chase client',style:'secondary',fn:'wmEntClosePanel'},{label:'Contact admin',style:'primary',fn:'wmEntClosePanel'}]
  },
  'fatima-ind': {
    title:'Fatima Al-Rashid', sub:'Individual Account · Accredited Investor · UAE',
    badge:{text:'Verified',bg:'var(--green-pale)',color:'var(--green)'},
    sections:[
      {title:'Account Information',rows:[['Entity type','Individual'],['Investor status','Accredited'],['Tax residency','UAE'],['Citizenship','Saudi Arabia'],['Date of birth','On file']]},
      {title:'KYC & Verification',rows:[['Identity','Verified Feb 2026'],['Accreditation','Income-based'],['AML check','Cleared'],['Last reviewed','Feb 2026']]},
      {title:'Assigned WM',rows:[['Wealth Manager','Sarah Mensah'],['Firm','Meridian Private Wealth'],['Since','Jan 2026']]}
    ],
    docs:[{name:'Passport',date:'Verified Feb 2026'},{name:'Proof of Address',date:'Verified Feb 2026'},{name:'Investor Agreement',date:'Signed Jan 2026'}],
    actions:[{label:'Open profile',style:'secondary',fn:'wmEntClosePanel'},{label:'View documents',style:'primary',fn:'wmEntClosePanel'}]
  },
  'ibrahim-llc': {
    title:'Hassan Holdings LLC', sub:'Wyoming LLC · Awaiting documents',
    badge:{text:'Pending Docs',bg:'var(--cream-mid)',color:'var(--ink-muted)'},
    sections:[
      {title:'Formation Details',rows:[['Entity type','LLC'],['State','Wyoming'],['Client','Ibrahim Hassan'],['Submitted','Mar 28, 2026'],['Blocking issue','Passport required']]},
      {title:'What is needed',rows:[['Passport / ID','Missing - request updated copy'],['Source of funds','Pending client submission'],['Operating agreement','Draft on file']]}
    ],
    docs:[{name:'Formation Receipt',date:'Mar 28, 2026'},{name:'Draft Articles',date:'Pending state filing'}],
    track:[
      {label:'Request submitted',desc:'LLC formation request submitted to Aidi admin.',date:'Mar 28, 2026',status:'done'},
      {label:'Document check',desc:'Admin flagged passport as expired. Waiting on updated identity document from client.',date:'Apr 1, 2026',status:'active'},
      {label:'State filing',desc:'Articles of Organization filed once documents cleared.',date:'Pending',status:'pending'},
      {label:'Formation complete',desc:'Certificate, EIN, and formation documents delivered.',date:'Pending',status:'pending'}
    ],
    actions:[{label:'Upload docs',style:'secondary',fn:'wmNavDocs'},{label:'Contact admin',style:'primary',fn:'wmEntClosePanel'}]
  }
};

function wmNavDocs() { wmEntClosePanel(); wmNav('docs'); }

function wmEntPanelOpen(id) {
  var d = WM_ENT_DATA[id]; if (!d) return;
  document.getElementById('wmEntPanelTitle').textContent = d.title;
  document.getElementById('wmEntPanelSub').textContent = d.sub;
  var body = '<div style="margin-bottom:16px;"><span class="wm-ent-badge" style="background:'+d.badge.bg+';color:'+d.badge.color+';">'+d.badge.text+'</span></div>';
  if (d.track) {
    body += '<div class="wm-ent-section"><div class="wm-ent-section-title">Formation Status</div>';
    d.track.forEach(function(s){
      var icon = s.status==='done'?'\u2713':s.status==='active'?'\u25cf':'\u25cb';
      body += '<div class="wm-ent-track-step"><div class="wm-ent-track-dot '+s.status+'">'+icon+'</div><div class="wm-ent-track-body"><div class="title">'+s.label+'</div><div class="desc">'+s.desc+'</div><div class="date">'+s.date+'</div></div></div>';
    });
    body += '</div>';
  }
  d.sections.forEach(function(sec){
    body += '<div class="wm-ent-section"><div class="wm-ent-section-title">'+sec.title+'</div>';
    sec.rows.forEach(function(r){ body += '<div class="wm-ent-row"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>'; });
    body += '</div>';
  });
  if (d.docs) {
    body += '<div class="wm-ent-section"><div class="wm-ent-section-title">Documents</div>';
    d.docs.forEach(function(doc){
      body += '<div class="wm-ent-doc-row"><div class="wm-ent-doc-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="wm-ent-doc-name">'+doc.name+'</div><div class="wm-ent-doc-date">'+doc.date+'</div></div><svg style="margin-left:auto;color:var(--blue);" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></div>';
    });
    body += '</div>';
  }
  document.getElementById('wmEntPanelBody').innerHTML = body;
  var acts = '';
  d.actions.forEach(function(a){ acts += '<button class="wm-ent-btn '+a.style+'" onclick="'+a.fn+'()">'+a.label+'</button>'; });
  document.getElementById('wmEntPanelActions').innerHTML = acts;
  document.getElementById('wmEntOverlay').classList.add('open');
  document.getElementById('wmEntPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function wmEntClosePanel() {
  document.getElementById('wmEntOverlay').classList.remove('open');
  document.getElementById('wmEntPanel').classList.remove('open');
  document.body.style.overflow = '';
}

// -- Formation Wizard --
var _wmWizStep = 1;
var _wmWizType = '';
var WM_STATE_FEES = {Alabama:50,Alaska:250,Arizona:50,Arkansas:50,California:70,Colorado:50,Connecticut:120,Delaware:90,Florida:125,Georgia:100,Hawaii:50,Idaho:100,Illinois:150,Indiana:95,Iowa:50,Kansas:160,Kentucky:40,Louisiana:75,Maine:175,Maryland:100,Massachusetts:265,Michigan:50,Minnesota:135,Mississippi:50,Missouri:105,Montana:70,Nebraska:105,Nevada:75,'New Hampshire':100,'New Jersey':125,'New Mexico':50,'New York':200,'North Carolina':125,'North Dakota':135,Ohio:99,Oklahoma:100,Oregon:100,Pennsylvania:125,'Rhode Island':150,'South Carolina':110,'South Dakota':150,Tennessee:300,Texas:300,Utah:70,Vermont:75,Virginia:100,Washington:180,'West Virginia':130,Wisconsin:130,Wyoming:100,Nigeria:0};

function wmWizOpen() {
  _wmWizStep = 1; _wmWizType = '';
  document.querySelectorAll('.wm-wiz-type-card').forEach(function(c){c.classList.remove('selected');});
  ['wmWizClient','wmWizName','wmWizEmail','wmWizOwner1','wmWizOwner2','wmWizNotes','wmWizOwner1Nat'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
  var o1p=document.getElementById('wmWizOwner1Pct'); if(o1p)o1p.value='100';
  var st=document.getElementById('wmWizState'); if(st)st.value='';
  var pu=document.getElementById('wmWizPurpose'); if(pu)pu.value='';
  document.getElementById('wmWizMgmtField').style.display='none';
  wmWizRenderProgress(); wmWizShowStep(1);
  document.getElementById('wmWizOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function wmWizClose() {
  document.getElementById('wmWizOverlay').classList.remove('open');
  document.body.style.overflow='';
}

function wmWizSelectType(type) {
  _wmWizType = type;
  document.querySelectorAll('.wm-wiz-type-card').forEach(function(c){c.classList.remove('selected');});
  var map={LLC:'wmWizTypeLLC','C-Corp':'wmWizTypeCCorp'};
  var el=document.getElementById(map[type]); if(el)el.classList.add('selected');
  document.getElementById('wmWizMgmtField').style.display=type==='LLC'?'block':'none';
  document.getElementById('wmWizStep2Label').textContent='Step 2 of 4 \u2014 '+type+' Details';
  document.getElementById('wmWizStep2Title').textContent='Name and register the '+type;
}

function wmWizRenderProgress() {
  var h=''; for(var i=1;i<=4;i++) h+='<div class="wm-wiz-dot'+(i<=_wmWizStep?' done':'')+'"></div>';
  document.getElementById('wmWizProgress').innerHTML=h;
}

function wmWizShowStep(step) {
  for(var i=1;i<=4;i++){var el=document.getElementById('wmWizStep'+i);if(el)el.classList.toggle('active',i===step);}
  document.getElementById('wmWizBack').style.display=step>1?'block':'none';
  document.getElementById('wmWizNext').textContent=step===4?'Submit to Admin \u2192':'Continue \u2192';
  document.getElementById('wmWizTitle').textContent=step===4?'Review & Submit':'Submit Entity Request';
}

function wmWizNext() {
  if(_wmWizStep===1){
    if(!document.getElementById('wmWizClient').value){showToast('Please select a client');return;}
    if(!_wmWizType){showToast('Please select an entity type');return;}
  }
  if(_wmWizStep===2){
    if(!document.getElementById('wmWizName').value.trim()){showToast('Please enter an entity name');return;}
    if(!document.getElementById('wmWizState').value){showToast('Please select a state');return;}
    if(!document.getElementById('wmWizPurpose').value){showToast('Please select a purpose');return;}
    if(!document.getElementById('wmWizEmail').value.trim()){showToast('Please enter a contact email');return;}
  }
  if(_wmWizStep===3){
    if(!document.getElementById('wmWizOwner1').value.trim()){showToast('Please enter the primary owner');return;}
    wmWizBuildSummary();
  }
  if(_wmWizStep===4){wmWizClose();showToast('Entity request submitted to Aidi admin \u2713');return;}
  _wmWizStep++; wmWizRenderProgress(); wmWizShowStep(_wmWizStep);
}

function wmWizPrev() {
  if(_wmWizStep>1){_wmWizStep--;wmWizRenderProgress();wmWizShowStep(_wmWizStep);}
}

function wmWizBuildSummary() {
  var state=document.getElementById('wmWizState').value||'Delaware';
  var sf=WM_STATE_FEES[state]; if(sf===undefined)sf=90;
  var total=sf+500+150;
  document.getElementById('wmWizStateFee').textContent=sf>0?'$'+sf:'Varies';
  document.getElementById('wmWizTotalFee').textContent='$'+total.toLocaleString();
  var rows=[
    ['Client',document.getElementById('wmWizClient').value],
    ['Entity type',_wmWizType],
    ['Entity name',document.getElementById('wmWizName').value],
    ['Jurisdiction',state],
    ['Purpose',document.getElementById('wmWizPurpose').value],
    ['Contact email',document.getElementById('wmWizEmail').value],
    ['Primary owner',document.getElementById('wmWizOwner1').value+' \u2014 '+document.getElementById('wmWizOwner1Pct').value+'%']
  ];
  var o2=document.getElementById('wmWizOwner2').value; if(o2)rows.push(['Additional owner',o2]);
  var notes=document.getElementById('wmWizNotes').value; if(notes)rows.push(['Admin notes',notes]);
  var h=''; rows.forEach(function(r){h+='<div class="wm-wiz-summary-row"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>';});
  document.getElementById('wmWizSummary').innerHTML=h;
}


// -- WM Compliance filing actions --
function wmSmClose() { document.getElementById('wmSmOv').classList.remove('open'); }

function _wmSmOv(title, body, priLabel, secOnly, onPri) {
  document.getElementById('wmSmTtl').textContent = title;
  document.getElementById('wmSmBd').innerHTML = body;
  var f = secOnly
    ? '<button class="sm-btn sec" style="max-width:120px;margin-left:auto;" onclick="wmSmClose()">Close</button>'
    : '<button class="sm-btn sec" onclick="wmSmClose()">Cancel</button>' + (priLabel ? '<button class="sm-btn pri" id="_wmSmBtn">' + priLabel + '</button>' : '');
  document.getElementById('wmSmFt').innerHTML = f;
  if (onPri && !secOnly) {
    var btn = document.getElementById('_wmSmBtn');
    if (btn) btn.onclick = function() { wmSmClose(); setTimeout(onPri, 180); };
  }
  document.getElementById('wmSmOv').classList.add('open');
}

function _wmUploadField(label, hint) {
  return '<div class="sm-fld"><label class="sm-lbl">' + label + '</label>' +
    '<div style="border:1.5px dashed var(--cream-dark);border-radius:var(--r);padding:18px;text-align:center;cursor:pointer;background:var(--cream);" onclick="this.querySelector(\'input\').click()">' +
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--ink-muted)" stroke-width="1.5" style="margin:0 auto 6px;display:block;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>' +
      '<div style="font-size:.78rem;color:var(--ink-muted);">Click to upload or drag & drop</div>' +
      '<div style="font-size:.7rem;color:var(--ink-muted);margin-top:3px;">' + hint + '</div>' +
      '<input type="file" style="display:none" accept=".pdf,.xlsx,.csv,.doc,.docx">' +
    '</div></div>';
}

function _wmShowProgress(id, label, steps) {
  var stepsHtml = steps.map(function(s, i) {
    var done = i===0, active = i===1;
    var clr = done?'#1A7A5E':active?'var(--blue)':'var(--ink-muted)';
    var bg  = done?'#ECFDF5':active?'var(--blue-pale)':'var(--cream)';
    var icon = done
      ? '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#1A7A5E" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
      : active
      ? '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--blue)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
      : '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--ink-muted)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg>';
    return '<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:var(--r);background:' + bg + ';margin-bottom:6px;">' +
      icon + '<div style="font-size:.8rem;font-weight:' + (done||active?'600':'400') + ';color:' + clr + ';">' + s + '</div></div>';
  }).join('');
  _wmSmOv('Filing Submitted to Admin',
    '<div class="sm-ok" style="margin-bottom:16px;">\u2713 Documents received. Forwarded to Aidi admin for processing.</div>' +
    '<div style="font-size:.73rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Progress</div>' +
    stepsHtml +
    '<p style="font-size:.72rem;color:var(--ink-muted);margin-top:14px;line-height:1.5;">You and your client will be notified by email at each stage.</p>',
    null, true, null);
  wmEntMarkRow(id);
}

var WM_FILING_CONFIGS = {
  'delaware-annual': {
    title:'Delaware Annual Report \u2014 Okafor Capital LLC',
    badge:'Delaware Division of Corporations', badgeColor:'#1B4FD8', client:'Emeka Okafor',
    intro:'Submit the 2025 Delaware Annual Report on behalf of Okafor Capital LLC. Upload the required documents and Aidi admin will compile and file.',
    fields:[
      {type:'upload',  label:'Consolidated P&L for the Year',   hint:'PDF, Excel or CSV \u00b7 Tax year 2025'},
      {type:'upload',  label:'Balance Sheet for the Year',       hint:'PDF, Excel or CSV \u00b7 As of Dec 31, 2025'},
      {type:'section', label:'Ownership Distribution'},
      {type:'text',    label:'Primary member \u2014 Full legal name', placeholder:'e.g. Emeka Okafor'},
      {type:'text',    label:'Ownership %',                     placeholder:'e.g. 100%'},
      {type:'section', label:'Registered Address'},
      {type:'text',    label:'Street address',                  placeholder:'e.g. 123 Main Street'},
      {type:'row2',    label1:'City', placeholder1:'Wilmington', label2:'State', placeholder2:'DE'}
    ]
  },
  'okafor-trust-deed': {
    title:'Trust Deed \u2014 Okafor Family Trust',
    badge:'Legal Document \u00b7 Required', badgeColor:'#7C3AED', client:'Emeka Okafor',
    intro:'Upload the executed trust deed for the Okafor Family Trust. Required to complete entity structuring and unlock tax-optimised distributions.',
    fields:[
      {type:'upload', label:'Signed Trust Deed',                hint:'PDF only \u00b7 Original signed document'},
      {type:'upload', label:'Certificate of Trust (if issued)', hint:'PDF only'},
      {type:'text',   label:'Trustee full legal name',          placeholder:'e.g. Emeka Okafor'},
      {type:'text',   label:'Attorney / preparer name',         placeholder:'e.g. Law firm or attorney name'}
    ]
  },
  'emeka-1040': {
    title:'Federal Tax Return 1040 \u2014 Emeka Okafor',
    badge:'IRS e-File \u00b7 Form 1040', badgeColor:'#1B4FD8', client:'Emeka Okafor',
    intro:'Prepare and submit the 2025 federal tax return for Emeka Okafor. Upload documents below and Aidi admin will forward to the accountant.',
    fields:[
      {type:'upload',   label:'Consolidated P&L for the Year',     hint:'PDF, Excel or CSV \u00b7 Tax year 2025'},
      {type:'upload',   label:'Balance Sheet for the Year',         hint:'PDF, Excel or CSV \u00b7 As of Dec 31, 2025'},
      {type:'upload',   label:'Prior Year Tax Return (2024)',       hint:'PDF only'},
      {type:'upload',   label:'Investment Tax Forms',               hint:'1099-B, 1099-DA, 1099-INT, K-1 etc.'},
      {type:'section',  label:'Additional Details'},
      {type:'text',     label:'Client current address',             placeholder:'Full residential address'},
      {type:'currency', label:'Business / investment income',       placeholder:'e.g. 250000'}
    ]
  },
  'okafor-1065': {
    title:'LLC Partnership Return 1065 \u2014 Okafor Capital LLC',
    badge:'IRS e-File \u00b7 Form 1065', badgeColor:'#1B4FD8', client:'Emeka Okafor',
    intro:'File the 2025 U.S. Return of Partnership Income for Okafor Capital LLC. Required for multi-member LLCs. Generates K-1s for each member.',
    fields:[
      {type:'upload',   label:'Consolidated P&L for the Year',     hint:'PDF, Excel or CSV \u00b7 Tax year 2025'},
      {type:'upload',   label:'Balance Sheet for the Year',         hint:'PDF, Excel or CSV \u00b7 As of Dec 31, 2025'},
      {type:'upload',   label:'Prior Year Return (Form 1065)',      hint:'PDF only'},
      {type:'upload',   label:'Investment Tax Forms',               hint:'1099-B, K-1 etc.'},
      {type:'section',  label:'Partnership Details'},
      {type:'text',     label:'Registered address of LLC',          placeholder:'e.g. 123 Main St, Wilmington, DE'},
      {type:'currency', label:'Total partnership income',           placeholder:'e.g. 250000'}
    ]
  },
  'agent-renewal': {
    title:'Registered Agent Renewal \u2014 Okafor Capital LLC',
    badge:'Delaware \u00b7 Annual Fee', badgeColor:'#1B4FD8', client:'Emeka Okafor',
    intro:'Renew the registered agent for Okafor Capital LLC in Delaware. A fee of $149 applies and will be charged to the client account via Aidi.',
    fields:[
      {type:'section', label:'Renewal Details'},
      {type:'text',    label:'Entity name',           placeholder:'Okafor Capital LLC'},
      {type:'text',    label:'State of registration', placeholder:'Delaware'},
      {type:'text',    label:'Current agent name',    placeholder:'Aidi Legal Services'}
    ]
  },
  'boi-hassan': {
    title:'BOI Report \u2014 Hassan Holdings LLC',
    badge:'FinCEN \u00b7 Federal Filing', badgeColor:'#1B4FD8', client:'Ibrahim Hassan',
    intro:'File the Beneficial Ownership Information report with FinCEN for Hassan Holdings LLC, required under the Corporate Transparency Act.',
    fields:[
      {type:'upload', label:'Passport / Government ID \u2014 Ibrahim Hassan', hint:'PDF or image \u00b7 Must be valid and unexpired'},
      {type:'text',   label:'Date of birth',          placeholder:'DD/MM/YYYY'},
      {type:'text',   label:'Residential address',    placeholder:'Full address'},
      {type:'text',   label:'Ownership %',            placeholder:'e.g. 100%'}
    ]
  }
};

function wmEntFile(id) {
  var cfg = WM_FILING_CONFIGS[id];
  if (!cfg) { showToast('Opening filing\u2026'); return; }
  var fieldsHtml = cfg.fields.map(function(f) {
    if (f.type==='upload')   return _wmUploadField(f.label, f.hint);
    if (f.type==='section')  return '<div style="margin:20px 0 10px;padding-top:16px;border-top:1px solid var(--cream-mid);font-size:.73rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">' + f.label + '</div>';
    if (f.type==='currency') return '<div class="sm-fld"><label class="sm-lbl">' + f.label + '</label><div style="position:relative;"><span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--ink-muted);font-size:.85rem;">$</span><input class="sm-inp" style="padding-left:26px;" placeholder="' + f.placeholder + '" type="number" min="0"></div></div>';
    if (f.type==='row2')     return '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div class="sm-fld"><label class="sm-lbl">' + f.label1 + '</label><input class="sm-inp" placeholder="' + f.placeholder1 + '"></div><div class="sm-fld"><label class="sm-lbl">' + f.label2 + '</label><input class="sm-inp" placeholder="' + f.placeholder2 + '"></div></div>';
    return '<div class="sm-fld"><label class="sm-lbl">' + f.label + '</label><input class="sm-inp" placeholder="' + f.placeholder + '"></div>';
  }).join('');
  var body =
    '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px;">' +
      '<span style="font-size:.71rem;font-weight:600;padding:3px 10px;border-radius:100px;background:var(--blue-pale);color:' + cfg.badgeColor + ';">' + cfg.badge + '</span>' +
      '<span style="font-size:.71rem;color:var(--ink-muted);">Client: <strong style="color:var(--ink);">' + cfg.client + '</strong></span>' +
    '</div>' +
    '<p style="font-size:.82rem;color:var(--ink-muted);line-height:1.65;margin-bottom:18px;">' + cfg.intro + '</p>' +
    fieldsHtml +
    '<p style="font-size:.71rem;color:var(--ink-muted);margin-top:14px;line-height:1.5;">Submitting packages your documents and forwards to Aidi admin for review and filing. You and the client will be notified at each stage.</p>';
  _wmSmOv(cfg.title, body, 'Submit to Aidi Admin', false, function() {
    _wmShowProgress(id, cfg.title, [
      'Documents received by Aidi admin',
      'Admin review in progress',
      'Filing submitted to relevant authority',
      'Confirmation issued and client notified'
    ]);
  });
}

function wmEntAlreadyFiled(id) {
  var labels = {
    'delaware-annual':   'Delaware Annual Report \u2014 Okafor Capital LLC',
    'okafor-trust-deed': 'Trust Deed \u2014 Okafor Family Trust',
    'emeka-1040':        'Federal Tax Return (1040) \u2014 Emeka Okafor',
    'okafor-1065':       'LLC Partnership Return (1065) \u2014 Okafor Capital LLC',
    'agent-renewal':     'Registered Agent Renewal \u2014 Okafor Capital LLC',
    'boi-hassan':        'BOI Report \u2014 Hassan Holdings LLC'
  };
  var label = labels[id] || id;
  _wmSmOv('Already Filed / Paid',
    '<p style="font-size:.84rem;color:var(--ink-muted);line-height:1.7;margin-bottom:16px;">Confirm that <strong>' + label + '</strong> has already been filed or paid outside of Aidi.</p>' +
    '<div class="sm-fld"><label class="sm-lbl">Date filed / paid</label><input class="sm-inp" type="date"></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Confirmation / reference number</label><input class="sm-inp" placeholder="e.g. DE-2026-XXXXX"></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Filed / paid by</label><select class="sm-sel"><option>Client directly</option><option>Client\'s accountant</option><option>Client\'s attorney</option><option>Aidi admin</option><option>Myself (WM)</option></select></div>' +
    '<p class="sm-hint">For your records only. Aidi does not verify this with any government agency.</p>',
    'Mark as Filed', false,
    function() { wmEntMarkRow(id); }
  );
}

function wmEntMarkRow(id) {
  document.querySelectorAll('#wm-entities .comp-row').forEach(function(row) {
    if (row.innerHTML.indexOf("'" + id + "'") !== -1 || row.innerHTML.indexOf('"' + id + '"') !== -1) {
      var badge = row.querySelector('span[style*="border-radius:100px"]');
      if (badge) { badge.textContent='\u2713 Filed'; badge.style.background='#ECFDF5'; badge.style.color='#1A7A5E'; }
      var actions = row.lastElementChild;
      if (actions) actions.innerHTML='<span style="font-size:.78rem;font-weight:600;color:#1A7A5E;">\u2713 Submitted to admin</span>';
    }
  });
}


// ── Tax Documents ─────────────────────────────────────────────────────
var _taxDocs = [
  { id:'td1', client:'Priya Sharma',      doc:'1099-B',       type:'Equities',    typeTag:'blue',   year:'2025', uploaded:'Apr 8',  status:'review',    notes:'Brokerage statement from Aidi platform. Please verify cost basis.', file:'1099-B_Priya_2025.pdf' },
  { id:'td2', client:'Emeka Okafor',      doc:'K-1 Schedule', type:'Partnership', typeTag:'purple', year:'2025', uploaded:'Apr 5',  status:'review',    notes:'K-1 from Okafor Capital LLC for FY 2025.',                  file:'K1_Emeka_2025.pdf' },
  { id:'td3', client:'Fatima Al-Rashid',  doc:'1099-DIV',     type:'Dividends',   typeTag:'gold',   year:'2025', uploaded:'Mar 28', status:'finalized', notes:'',                                                          file:'1099-DIV_Fatima_2025.pdf' },
  { id:'td4', client:'Ibrahim Hassan',    doc:'1099-DA',      type:'Crypto',      typeTag:'red',    year:'2025', uploaded:'Mar 20', status:'finalized', notes:'Includes BTC and ETH disposal events.',                     file:'1099-DA_Ibrahim_2025.pdf' },
  { id:'td5', client:'Kwame Boateng',     doc:'1040 Summary', type:'Return',      typeTag:'blue',   year:'2025', uploaded:'\u2014',  status:'pending',   notes:'',                                                          file:'' }
];
var _taxFilter = 'all';

function taxRenderRows() {
  var rows = _taxFilter === 'all' ? _taxDocs : _taxDocs.filter(function(d){ return d.status === _taxFilter; });
  document.getElementById('taxDocCount').textContent = rows.length + ' document' + (rows.length !== 1 ? 's' : '');
  var tagColors = { blue:'var(--blue-pale);color:var(--blue)', purple:'rgba(124,58,237,.1);color:#7C3AED', gold:'var(--gold-pale);color:var(--gold)', red:'var(--red-pale);color:var(--red)' };
  var statusMap = {
    review:    '<span style="font-size:.69rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#FEF9C3;color:#A16207;">Under Review</span>',
    finalized: '<span style="font-size:.69rem;font-weight:600;padding:3px 10px;border-radius:100px;background:var(--green-pale);color:var(--green);">Finalised</span>',
    pending:   '<span style="font-size:.69rem;font-weight:600;padding:3px 10px;border-radius:100px;background:var(--cream-mid);color:var(--ink-muted);">Pending Upload</span>'
  };
  document.getElementById('taxDocRows').innerHTML = rows.length === 0
    ? '<div style="padding:28px;text-align:center;font-size:.83rem;color:var(--ink-muted);">No documents in this category</div>'
    : rows.map(function(d) {
        var tg = tagColors[d.typeTag] || tagColors.blue;
        return '<div class="comp-row" style="display:grid;grid-template-columns:1.4fr 1.2fr .7fr 1fr .7fr 110px 160px;padding:12px 18px;border-bottom:1px solid var(--cream);align-items:center;">' +
          '<div style="font-size:.84rem;font-weight:600;color:var(--ink);">' + d.client + '</div>' +
          '<div style="display:flex;align-items:center;gap:7px;">' +
            (d.file ? '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--ink-muted)" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' : '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--red)" stroke-width="1.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>') +
            '<span style="font-size:.83rem;color:var(--ink);">' + d.doc + '</span>' +
          '</div>' +
          '<div style="font-size:.82rem;color:var(--ink-soft);">' + d.year + '</div>' +
          '<div><span style="font-size:.69rem;font-weight:600;padding:3px 10px;border-radius:100px;background:' + tg + ';">' + d.type + '</span></div>' +
          '<div style="font-size:.79rem;color:var(--ink-muted);">' + d.uploaded + '</div>' +
          '<div>' + (statusMap[d.status] || '') + '</div>' +
          '<div style="display:flex;gap:5px;justify-content:flex-end;">' +
            (d.file
              ? '<button onclick="taxViewDoc(\'' + d.id + '\')" style="padding:4px 10px;border-radius:100px;font-size:.72rem;font-weight:500;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;font-family:inherit;" onmouseover="this.style.background=\'var(--cream)\'" onmouseout="this.style.background=\'white\'">View</button>'
              : '<button onclick="taxOpenUpload()" style="padding:4px 10px;border-radius:100px;font-size:.72rem;font-weight:500;border:1.5px solid var(--blue);background:var(--blue-pale);color:var(--blue);cursor:pointer;font-family:inherit;">Upload</button>') +
            '<button onclick="taxEditDoc(\'' + d.id + '\')" style="padding:4px 10px;border-radius:100px;font-size:.72rem;font-weight:500;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;font-family:inherit;" onmouseover="this.style.background=\'var(--cream)\'" onmouseout="this.style.background=\'white\'">Edit</button>' +
          '</div>' +
        '</div>';
      }).join('');
}

function taxFilter(f, btn) {
  _taxFilter = f;
  document.querySelectorAll('[id^="tax-filter-"]').forEach(function(b) {
    b.style.background = 'white'; b.style.color = 'var(--ink)'; b.style.borderColor = 'var(--cream-dark)';
  });
  btn.style.background = 'var(--ink)'; btn.style.color = 'white'; btn.style.borderColor = 'var(--ink)';
  taxRenderRows();
}

// ── Upload flow ───────────────────────────────────────────────────────
function taxOpenUpload() {
  ['taxUpClient','taxUpType','taxUpNotes','taxUpDesc'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
  document.getElementById('taxUpFile').value = '';
  document.getElementById('taxUpZoneLabel').textContent = 'Click to upload or drag & drop';
  document.getElementById('taxUpZone').style.borderColor = 'var(--cream-dark)';
  document.getElementById('taxUpZone').style.background = 'var(--cream)';
  document.getElementById('taxUpDescField').style.display = 'none';
  document.getElementById('taxUpYear').value = '2025';
  document.getElementById('taxUpLinkDocs').checked = true;
  document.getElementById('taxUploadModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function taxCloseUpload() {
  document.getElementById('taxUploadModal').classList.remove('open');
  document.body.style.overflow = '';
}

function taxUpTypeChange(val) {
  document.getElementById('taxUpDescField').style.display = val === 'Other' ? 'block' : 'none';
}

function taxHandleFile(input) {
  if (input.files && input.files[0]) {
    var name = input.files[0].name;
    document.getElementById('taxUpZoneLabel').textContent = '\u2713 ' + name;
    document.getElementById('taxUpZone').style.borderColor = 'var(--green)';
    document.getElementById('taxUpZone').style.background = 'var(--green-pale)';
  }
}

function taxHandleDrop(event) {
  event.preventDefault();
  document.getElementById('taxUpZone').style.borderColor = 'var(--cream-dark)';
  document.getElementById('taxUpZone').style.background = 'var(--cream)';
  var files = event.dataTransfer.files;
  if (files && files[0]) {
    document.getElementById('taxUpZoneLabel').textContent = '\u2713 ' + files[0].name;
    document.getElementById('taxUpZone').style.borderColor = 'var(--green)';
    document.getElementById('taxUpZone').style.background = 'var(--green-pale)';
  }
}

function taxSubmitUpload() {
  var client = document.getElementById('taxUpClient').value;
  var type   = document.getElementById('taxUpType').value;
  var year   = document.getElementById('taxUpYear').value;
  var file   = document.getElementById('taxUpFile');
  var zoneLabel = document.getElementById('taxUpZoneLabel').textContent;
  if (!client) { showToast('Please select a client'); return; }
  if (!type)   { showToast('Please select a document type'); return; }
  if (type === 'Other' && !document.getElementById('taxUpDesc').value.trim()) { showToast('Please enter a document name'); return; }
  if (!file.files || !file.files[0]) { showToast('Please attach a file'); return; }
  var docName = type === 'Other' ? document.getElementById('taxUpDesc').value.trim() : type;
  var fileName = file.files[0].name;
  var typeTag = type.indexOf('1099-B') !== -1 ? 'blue' : type.indexOf('K-1') !== -1 || type.indexOf('1065') !== -1 ? 'purple' : type.indexOf('1099-DIV') !== -1 ? 'gold' : type.indexOf('DA') !== -1 || type.indexOf('Crypto') !== -1 ? 'red' : 'blue';
  var typeLabel = type.indexOf('DIV') !== -1 ? 'Dividends' : type.indexOf('1099-B') !== -1 ? 'Equities' : type.indexOf('DA') !== -1 ? 'Crypto' : type.indexOf('K-1') !== -1 ? 'Partnership' : type.indexOf('1040') !== -1 ? 'Return' : type.indexOf('Nigeria') !== -1 || type.indexOf('FIRS') !== -1 || type.indexOf('WHT') !== -1 ? 'Nigeria' : 'Income';
  var today = new Date(); var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var dateStr = months[today.getMonth()] + ' ' + today.getDate();
  var notes = document.getElementById('taxUpNotes').value;
  var linkDocs = document.getElementById('taxUpLinkDocs').checked;
  var newId = 'td' + Date.now();
  _taxDocs.unshift({ id:newId, client:client, doc:docName, type:typeLabel, typeTag:typeTag, year:year, uploaded:dateStr, status:'review', notes:notes, file:fileName });
  taxCloseUpload();
  taxRenderRows();
  var msg = 'Tax document uploaded \u2713 ' + (linkDocs ? '\u00b7 Linked to Documents page' : '');
  showToast(msg);
}

// ── View flow ─────────────────────────────────────────────────────────
function taxViewDoc(id) {
  var d = _taxDocs.find(function(x){ return x.id === id; });
  if (!d) return;
  var statusLabels = { review:'Under Review', finalized:'Finalised', pending:'Pending Upload' };
  var statusColors = { review:'#A16207', finalized:'var(--green)', pending:'var(--ink-muted)' };
  var statusBg     = { review:'#FEF9C3', finalized:'var(--green-pale)', pending:'var(--cream-mid)' };
  var body =
    '<div style="margin-bottom:16px;">' +
      '<span style="font-size:.7rem;font-weight:700;padding:3px 11px;border-radius:100px;background:' + (statusBg[d.status]||'var(--cream)') + ';color:' + (statusColors[d.status]||'var(--ink)') + ';">' + (statusLabels[d.status]||d.status) + '</span>' +
    '</div>' +
    // Document preview card
    '<div style="background:var(--cream);border-radius:var(--r-lg);padding:18px 20px;margin-bottom:18px;display:flex;align-items:center;gap:14px;">' +
      '<div style="width:44px;height:54px;background:white;border-radius:6px;border:1px solid var(--cream-dark);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 2px 8px rgba(12,26,46,.08);">' +
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--blue)" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
      '</div>' +
      '<div>' +
        '<div style="font-size:.88rem;font-weight:600;color:var(--ink);">' + d.file + '</div>' +
        '<div style="font-size:.74rem;color:var(--ink-muted);margin-top:3px;">' + d.doc + ' &middot; Tax year ' + d.year + ' &middot; Uploaded ' + d.uploaded + '</div>' +
      '</div>' +
      '<button onclick="showToast(\'Downloading\u2026\')" style="margin-left:auto;padding:5px 12px;border-radius:100px;font-size:.72rem;font-weight:500;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;font-family:inherit;white-space:nowrap;flex-shrink:0;" onmouseover="this.style.background=\'var(--cream)\'" onmouseout="this.style.background=\'white\'">Download</button>' +
    '</div>' +
    // Details
    '<div style="margin-bottom:16px;">' +
      '<div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Document Details</div>' +
      '<div style="background:white;border-radius:var(--r);border:1px solid var(--cream-mid);padding:0 14px;">' +
      '<div class="sm-row"><div class="k">Client</div><div class="v">' + d.client + '</div></div>' +
      '<div class="sm-row"><div class="k">Document type</div><div class="v">' + d.doc + '</div></div>' +
      '<div class="sm-row"><div class="k">Tax year</div><div class="v">' + d.year + '</div></div>' +
      '<div class="sm-row"><div class="k">Category</div><div class="v">' + d.type + '</div></div>' +
      '<div class="sm-row"><div class="k">Uploaded</div><div class="v">' + d.uploaded + '</div></div>' +
    '</div></div>' +
    (d.notes ? '<div style="margin-bottom:14px;"><div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Notes</div><div style="font-size:.82rem;color:var(--ink-soft);background:var(--cream);border-radius:var(--r);padding:11px 14px;line-height:1.6;">' + d.notes + '</div></div>' : '') +
    (d.status === 'finalized' ? '<div style="background:var(--green-pale);border-radius:var(--r);padding:10px 14px;font-size:.78rem;color:var(--green);"><strong>Finalised \u2713</strong> &mdash; This document is visible to the client on their Documents page.</div>' : '') +
    (d.status === 'review' ? '<div style="background:#FEF9C3;border-radius:var(--r);padding:10px 14px;font-size:.78rem;color:#92400E;">Under review by Aidi Tax Team. You will be notified when finalised.</div>' : '');

  document.getElementById('taxViewTitle').textContent = d.doc + ' \u2014 ' + d.client;
  document.getElementById('taxViewBody').innerHTML = body;
  document.getElementById('taxViewFoot').innerHTML =
    '<button class="sm-btn sec" onclick="taxCloseView()">Close</button>' +
    '<button class="sm-btn pri" onclick="taxCloseView();taxEditDoc(\'' + d.id + '\')">Edit</button>';
  document.getElementById('taxViewModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function taxCloseView() {
  document.getElementById('taxViewModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Edit flow ─────────────────────────────────────────────────────────
function taxEditDoc(id) {
  var d = _taxDocs.find(function(x){ return x.id === id; });
  if (!d) return;
  var statusOpts = ['review','finalized','pending'].map(function(s){
    var labels = {review:'Under Review',finalized:'Finalised',pending:'Pending Upload'};
    return '<option value="' + s + '"' + (d.status===s?' selected':'') + '>' + labels[s] + '</option>';
  }).join('');
  var body =
    '<div class="sm-fld"><label class="sm-lbl">Client</label><input class="sm-inp" id="taxEdClient" value="' + d.client + '" readonly style="background:var(--cream);cursor:not-allowed;"></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">' +
      '<div class="sm-fld"><label class="sm-lbl">Document Type</label><input class="sm-inp" id="taxEdDoc" value="' + d.doc + '"></div>' +
      '<div class="sm-fld"><label class="sm-lbl">Tax Year</label><select class="sm-sel" id="taxEdYear"><option value="2025"' + (d.year==='2025'?' selected':'') + '>2025</option><option value="2024"' + (d.year==='2024'?' selected':'') + '>2024</option><option value="2023"' + (d.year==='2023'?' selected':'') + '>2023</option></select></div>' +
    '</div>' +
    '<div class="sm-fld"><label class="sm-lbl">Status</label><select class="sm-sel" id="taxEdStatus">' + statusOpts + '</select></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Notes</label><textarea class="sm-inp" id="taxEdNotes" rows="3" style="resize:none;">' + (d.notes||'') + '</textarea></div>' +
    '<div class="sm-fld" style="margin-bottom:0;"><label class="sm-lbl">Replace file (optional)</label>' +
      '<div style="border:1.5px dashed var(--cream-dark);border-radius:var(--r);padding:14px;text-align:center;cursor:pointer;background:var(--cream);font-size:.79rem;color:var(--ink-muted);" onclick="document.getElementById(\'taxEdFile\').click()">' +
        (d.file ? '\uD83D\uDCC4 Current: ' + d.file + ' &mdash; click to replace' : 'Click to upload file') +
        '<input type="file" id="taxEdFile" style="display:none" accept=".pdf,.xlsx,.csv,.doc,.docx">' +
      '</div>' +
    '</div>';

  document.getElementById('taxViewTitle').textContent = 'Edit \u2014 ' + d.doc + ' (' + d.client + ')';
  document.getElementById('taxViewBody').innerHTML = body;
  document.getElementById('taxViewFoot').innerHTML =
    '<button class="sm-btn sec" onclick="taxCloseView()">Cancel</button>' +
    '<button class="sm-btn pri" onclick="taxSaveEdit(\'' + d.id + '\')">Save Changes</button>';
  document.getElementById('taxViewModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function taxSaveEdit(id) {
  var d = _taxDocs.find(function(x){ return x.id === id; });
  if (!d) return;
  d.doc    = document.getElementById('taxEdDoc').value.trim() || d.doc;
  d.year   = document.getElementById('taxEdYear').value;
  d.status = document.getElementById('taxEdStatus').value;
  d.notes  = document.getElementById('taxEdNotes').value;
  var newFile = document.getElementById('taxEdFile');
  if (newFile && newFile.files && newFile.files[0]) d.file = newFile.files[0].name;
  taxCloseView();
  taxRenderRows();
  showToast('Document updated \u2713');
}

// Init tax on nav
function taxInit() { taxRenderRows(); }


// ── WM Billing ────────────────────────────────────────────────────────
var _wmPlan = 'starter';
function wmSelectPlan(plan) {
  _wmPlan = plan;
  document.querySelectorAll('.billing-plan-card').forEach(function(c) {
    c.classList.remove('selected');
    c.style.borderColor = 'var(--cream-dark)';
    c.style.background = 'white';
  });
  var el = document.getElementById('wm-plan-' + plan);
  if (el) { el.classList.add('selected'); el.style.borderColor = 'var(--ink)'; el.style.background = 'white'; }
}
function wmUpgradePlan() {
  var names = {starter:'Starter (Free)', growth:'Growth ($29/mo)', family:'Family Office ($99/mo)'};
  _wmSmOv('Upgrade Plan',
    '<p style="font-size:.84rem;color:var(--ink-muted);line-height:1.7;margin-bottom:16px;">You have selected: <strong style="color:var(--ink);">' + (names[_wmPlan]||_wmPlan) + '</strong></p>' +
    '<div style="background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;">' +
    '<div class="sm-row"><div class="k">Current plan</div><div class="v">Starter (Free)</div></div>' +
    '<div class="sm-row"><div class="k">New plan</div><div class="v">' + (names[_wmPlan]||_wmPlan) + '</div></div>' +
    '<div class="sm-row"><div class="k">Billing cycle</div><div class="v">Monthly &middot; Card on file</div></div>' +
    '<div class="sm-row"><div class="k">Payment method</div><div class="v">Mastercard &bull;&bull;&bull;&bull; 4782</div></div>' +
    '</div>' +
    '<p style="font-size:.75rem;color:var(--ink-muted);line-height:1.5;">Your plan will upgrade immediately. First charge applies on the next billing date. Cancel anytime from Settings.</p>',
    'Confirm Upgrade', false, function() { showToast('Plan upgraded \u2713 Welcome to ' + (names[_wmPlan]||_wmPlan)); }
  );
}
function wmUpdateCard() {
  _wmSmOv('Update Payment Card',
    '<div class="sm-fld"><label class="sm-lbl">Card number</label><input class="sm-inp" placeholder="1234 5678 9012 3456"></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">' +
      '<div class="sm-fld"><label class="sm-lbl">Expiry (MM/YY)</label><input class="sm-inp" placeholder="09/27"></div>' +
      '<div class="sm-fld"><label class="sm-lbl">CVV</label><input class="sm-inp" placeholder="\u2022\u2022\u2022" type="password"></div>' +
    '</div>' +
    '<div class="sm-fld"><label class="sm-lbl">Cardholder name</label><input class="sm-inp" placeholder="Full name on card"></div>' +
    '<p class="sm-hint">Your card details are encrypted and stored securely. Aidi does not store raw card numbers.</p>',
    'Save Card', false, function() { showToast('Payment card updated \u2713'); }
  );
}
function wmAddCard() {
  _wmSmOv('Add New Card',
    '<div class="sm-fld"><label class="sm-lbl">Card number</label><input class="sm-inp" placeholder="1234 5678 9012 3456"></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">' +
      '<div class="sm-fld"><label class="sm-lbl">Expiry (MM/YY)</label><input class="sm-inp" placeholder="09/27"></div>' +
      '<div class="sm-fld"><label class="sm-lbl">CVV</label><input class="sm-inp" placeholder="\u2022\u2022\u2022" type="password"></div>' +
    '</div>' +
    '<div class="sm-fld"><label class="sm-lbl">Cardholder name</label><input class="sm-inp" placeholder="Full name on card"></div>' +
    '<div class="sm-fld" style="margin-bottom:0;"><label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.8rem;color:var(--ink);"><input type="checkbox" style="accent-color:var(--ink);"> Set as default payment method</label></div>',
    'Add Card', false, function() { showToast('New card added \u2713'); }
  );
}

// ── SA Pricing audience toggle ────────────────────────────────────────
var _saAudience = 'clients';
function saAudience(aud) {
  _saAudience = aud;
  var btnC = document.getElementById('saAudClients');
  var btnW = document.getElementById('saAudWM');
  if (aud === 'clients') {
    btnC.style.background = 'var(--ink)'; btnC.style.color = 'white';
    btnW.style.background = 'transparent'; btnW.style.color = 'var(--ink-soft)';
    document.getElementById('saPlanGrid').querySelectorAll('input[id^="saP-starter-limit"]').forEach(function(e){e.value='5 clients';});
  } else {
    btnW.style.background = 'var(--ink)'; btnW.style.color = 'white';
    btnC.style.background = 'transparent'; btnC.style.color = 'var(--ink-soft)';
    document.getElementById('saPlanGrid').querySelectorAll('input[id^="saP-starter-limit"]').forEach(function(e){e.value='5 WMs';});
  }
}


// ── Mobile navigation ─────────────────────────────────────────────────
function toggleMobileNav(role) {
  var overlay = document.getElementById(role + 'MobOverlay');
  var drawer  = document.getElementById(role + 'MobDrawer');
  if (!overlay || !drawer) return;
  var isOpen = drawer.classList.contains('open');
  overlay.classList.toggle('open', !isOpen);
  drawer.classList.toggle('open', !isOpen);
  document.body.style.overflow = !isOpen ? 'hidden' : '';
}

function closeMobileNav(role) {
  var overlay = document.getElementById(role + 'MobOverlay');
  var drawer  = document.getElementById(role + 'MobDrawer');
  if (overlay) overlay.classList.remove('open');
  if (drawer)  drawer.classList.remove('open');
  document.body.style.overflow = '';
}

function wmMobNav(sec) {
  // Update active state
  document.querySelectorAll('#wmMobDrawer .mob-nav-item').forEach(function(n) { n.classList.remove('active'); });
  var el = document.getElementById('wm-mob-' + sec);
  if (el) el.classList.add('active');
  closeMobileNav('wm');
  wmNav(sec);
}

function saMobNav(sec) {
  document.querySelectorAll('#saMobDrawer .mob-nav-item').forEach(function(n) { n.classList.remove('active'); });
  var el = document.getElementById('sa-mob-' + sec);
  if (el) el.classList.add('active');
  closeMobileNav('sa');
  saNav(sec);
}

// Sync mobile nav active state with desktop nav
(function() {
  var origWmNav = wmNav;
  wmNav = function(sec) {
    origWmNav(sec);
    document.querySelectorAll('#wmMobDrawer .mob-nav-item').forEach(function(n) { n.classList.remove('active'); });
    var el = document.getElementById('wm-mob-' + sec);
    if (el) el.classList.add('active');
  };
  var origSaNav = saNav;
  saNav = function(sec) {
    origSaNav(sec);
    document.querySelectorAll('#saMobDrawer .mob-nav-item').forEach(function(n) { n.classList.remove('active'); });
    var el = document.getElementById('sa-mob-' + sec);
    if (el) el.classList.add('active');
  };
})();


// ── Order History ─────────────────────────────────────────────────────
var ORDER_DATA = {
  'ord-1': {
    ref: 'ORD-2026-0409-001',
    title: 'BUY \u2014 S&P 500 ETF (SPY)',
    status: 'executed', statusLabel: 'Executed',
    statusBg: 'var(--green-pale)', statusColor: 'var(--green)',
    client: 'Priya Sharma', clientId: 'priya',
    asset: 'S&P 500 ETF (SPY)', assetType: 'Equity ETF',
    direction: 'BUY', dirColor: 'var(--green)',
    amount: '$50,000', price: '$583.42 per share',
    shares: '85.7 shares', date: 'Apr 9, 2026',
    time: '09:42 AM EST', execution: 'Market open',
    broker: 'Aidi', account: 'Investment Account',
    auth: 'Client authorised \u00b7 Apr 8, 2026',
    authBy: 'Priya Sharma (digital signature)',
    wm: 'Sarah Mensah', wmNote: 'Routine rebalancing into core equity.',
    timeline: [
      { label: 'Instruction submitted', desc: 'WM submitted buy instruction via Aidi platform.', date: 'Apr 8, 2026 \u00b7 4:52 PM', status: 'done' },
      { label: 'Client authorisation received', desc: 'Priya Sharma authorised the instruction digitally.', date: 'Apr 8, 2026 \u00b7 5:14 PM', status: 'done' },
      { label: 'Routed to Aidi', desc: 'Instruction queued for next market open.', date: 'Apr 9, 2026 \u00b7 6:00 AM', status: 'done' },
      { label: 'Order executed', desc: '85.7 shares of SPY purchased at $583.42. Settlement T+2.', date: 'Apr 9, 2026 \u00b7 9:42 AM', status: 'done' },
      { label: 'Settlement', desc: 'Funds settled to investment account.', date: 'Apr 11, 2026', status: 'done' }
    ]
  },
  'ord-2': {
    ref: 'ORD-2026-0408-002',
    title: 'ALLOCATE \u2014 Bridge Loan Fund III',
    status: 'pending', statusLabel: 'Pending Aidi Approval',
    statusBg: '#FEF9C3', statusColor: '#A16207',
    client: 'Emeka Okafor', clientId: 'emeka',
    asset: 'Bridge Loan Fund III', assetType: 'Private Credit',
    direction: 'ALLOCATE', dirColor: 'var(--blue)',
    amount: '$250,000', price: 'NAV \u00b7 $1.00 per unit',
    shares: '250,000 units', date: 'Apr 8, 2026',
    time: '2:17 PM EST', execution: 'Requires Aidi admin approval',
    broker: 'Aidi (Private Markets)', account: 'Investment Account',
    auth: 'Client authorised \u00b7 Apr 8, 2026',
    authBy: 'Emeka Okafor (digital signature)',
    wm: 'Sarah Mensah', wmNote: 'Client targeting 0\u219210% private credit allocation. Fund closes Apr 24.',
    timeline: [
      { label: 'Instruction submitted', desc: 'WM submitted allocation request to Aidi admin.', date: 'Apr 8, 2026 \u00b7 2:17 PM', status: 'done' },
      { label: 'Client authorisation received', desc: 'Emeka Okafor authorised the allocation digitally.', date: 'Apr 8, 2026 \u00b7 3:04 PM', status: 'done' },
      { label: 'Aidi admin review', desc: 'Allocation under review by Aidi Private Markets team. Typical turnaround 1 business day.', date: 'In progress', status: 'active' },
      { label: 'Fund confirmation', desc: 'Bridge Loan Fund III to confirm unit allocation.', date: 'Pending', status: 'pending' },
      { label: 'Settlement', desc: 'Funds transferred and units issued to client account.', date: 'Pending', status: 'pending' }
    ]
  },
  'ord-3': {
    ref: 'ORD-2026-0407-003',
    title: 'REBALANCE \u2014 Gold (IAU)',
    status: 'executed', statusLabel: 'Executed',
    statusBg: 'var(--green-pale)', statusColor: 'var(--green)',
    client: 'Fatima Al-Rashid', clientId: 'fatima',
    asset: 'Gold (iShares IAU)', assetType: 'Precious Metals ETF',
    direction: 'REBALANCE', dirColor: 'var(--gold)',
    amount: '$180,000', price: '$42.18 per share',
    shares: '4,268 shares', date: 'Apr 7, 2026',
    time: '10:08 AM EST', execution: 'Market open',
    broker: 'Aidi', account: 'Investment Account',
    auth: 'Client authorised \u00b7 Apr 6, 2026',
    authBy: 'Fatima Al-Rashid (digital signature)',
    wm: 'Sarah Mensah', wmNote: 'Rebalancing gold allocation from 8% to 12% of portfolio per client IPS update.',
    timeline: [
      { label: 'Instruction submitted', desc: 'WM submitted rebalance instruction via Aidi.', date: 'Apr 6, 2026 \u00b7 3:30 PM', status: 'done' },
      { label: 'Client authorisation received', desc: 'Fatima Al-Rashid authorised the rebalance digitally.', date: 'Apr 6, 2026 \u00b7 4:00 PM', status: 'done' },
      { label: 'Routed to Aidi', desc: 'Instruction queued for next market open.', date: 'Apr 7, 2026 \u00b7 6:00 AM', status: 'done' },
      { label: 'Order executed', desc: '4,268 shares of IAU purchased at $42.18. Settlement T+2.', date: 'Apr 7, 2026 \u00b7 10:08 AM', status: 'done' },
      { label: 'Settlement', desc: 'Funds settled. Gold allocation updated to 11.9% of portfolio.', date: 'Apr 9, 2026', status: 'done' }
    ]
  },
  'ord-4': {
    ref: 'ORD-2026-0406-004',
    title: 'BUY \u2014 90-Day T-Bill',
    status: 'executed', statusLabel: 'Executed',
    statusBg: 'var(--green-pale)', statusColor: 'var(--green)',
    client: 'Ibrahim Hassan', clientId: 'ibrahim',
    asset: '90-Day US Treasury Bill', assetType: 'Government Fixed Income',
    direction: 'BUY', dirColor: 'var(--green)',
    amount: '$400,000', price: '5.18% annualised yield',
    shares: '$400,000 face value', date: 'Apr 6, 2026',
    time: '11:23 AM EST', execution: 'Same-day auction',
    broker: 'Aidi', account: 'Cash Account',
    auth: 'Client authorised \u00b7 Apr 5, 2026',
    authBy: 'Ibrahim Hassan (digital signature)',
    wm: 'Sarah Mensah', wmNote: 'Deploying idle cash into T-Bills while awaiting passport renewal to re-enable full trading.',
    timeline: [
      { label: 'Instruction submitted', desc: 'WM submitted T-Bill purchase instruction.', date: 'Apr 5, 2026 \u00b7 2:00 PM', status: 'done' },
      { label: 'Client authorisation received', desc: 'Ibrahim Hassan authorised digitally.', date: 'Apr 5, 2026 \u00b7 2:44 PM', status: 'done' },
      { label: 'Routed to Aidi', desc: 'Instruction submitted to Treasury auction.', date: 'Apr 6, 2026 \u00b7 9:00 AM', status: 'done' },
      { label: 'T-Bill purchased', desc: '$400,000 face value T-Bill purchased at 5.18% yield. Matures Jul 5, 2026.', date: 'Apr 6, 2026 \u00b7 11:23 AM', status: 'done' },
      { label: 'Maturity', desc: 'T-Bill auto-rolls unless instruction to redeem is submitted.', date: 'Jul 5, 2026', status: 'pending' }
    ]
  },
  'ord-5': {
    ref: 'ORD-2026-0401-005',
    title: 'ALLOCATE \u2014 Rayda (Private Equity)',
    status: 'awaiting', statusLabel: 'Awaiting Client Authorisation',
    statusBg: 'var(--cream-mid)', statusColor: 'var(--ink-muted)',
    client: 'Ibrahim Hassan', clientId: 'ibrahim',
    asset: 'Rayda (Private Equity)', assetType: 'Private Equity',
    direction: 'ALLOCATE', dirColor: 'var(--blue)',
    amount: '$100,000', price: 'NAV \u00b7 $100 per unit',
    shares: '1,000 units', date: 'Apr 1, 2026',
    time: '3:45 PM EST', execution: 'Requires client auth + Aidi approval',
    broker: 'Aidi (Private Markets)', account: 'Investment Account',
    auth: 'Pending \u2014 client has not yet authorised',
    authBy: '\u2014',
    wm: 'Sarah Mensah', wmNote: 'Client expressed interest in Rayda during Apr 1 call. Instruction submitted pending formal authorisation.',
    timeline: [
      { label: 'Instruction submitted', desc: 'WM submitted allocation request via Aidi.', date: 'Apr 1, 2026 \u00b7 3:45 PM', status: 'done' },
      { label: 'Client authorisation', desc: 'Awaiting Ibrahim Hassan to digitally authorise the instruction. Reminder sent Apr 3.', date: 'Pending', status: 'active' },
      { label: 'Aidi admin review', desc: 'Pending client authorisation before admin review begins.', date: 'Pending', status: 'pending' },
      { label: 'Fund confirmation', desc: 'Rayda to confirm unit allocation upon approval.', date: 'Pending', status: 'pending' },
      { label: 'Settlement', desc: 'Funds transferred and units issued to client account.', date: 'Pending', status: 'pending' }
    ]
  }
};

function openOrderModal(id) {
  var d = ORDER_DATA[id];
  if (!d) return;

  document.getElementById('orderModalTitle').textContent = d.title;
  document.getElementById('orderModalRef').textContent = 'Ref: ' + d.ref;

  // Build body
  var body = '';

  // Status badge
  body += '<div style="margin-bottom:16px;">' +
    '<span style="font-size:.72rem;font-weight:700;padding:4px 12px;border-radius:100px;background:' + d.statusBg + ';color:' + d.statusColor + ';">' + d.statusLabel + '</span>' +
  '</div>';

  // Key summary card
  body += '<div style="background:var(--cream);border-radius:var(--r-lg);padding:16px 18px;margin-bottom:18px;display:flex;flex-wrap:wrap;gap:14px 24px;">' +
    '<div><div style="font-size:.67rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:3px;">Amount</div><div style="font-size:1.3rem;font-family:\'Cormorant Garamond\',serif;font-weight:400;color:var(--ink);">' + d.amount + '</div></div>' +
    '<div><div style="font-size:.67rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:3px;">Direction</div><div style="font-size:.88rem;font-weight:700;color:' + d.dirColor + ';">' + d.direction + '</div></div>' +
    '<div><div style="font-size:.67rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:3px;">Date</div><div style="font-size:.84rem;font-weight:500;color:var(--ink);">' + d.date + '</div></div>' +
  '</div>';

  // Order details
  body += '<div style="margin-bottom:18px;"><div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Order Details</div>';
  body += '<div style="background:white;border-radius:var(--r);border:1px solid var(--cream-mid);padding:0 14px;">';
  var rows = [
    ['Client', d.client],
    ['Asset', d.asset],
    ['Asset type', d.assetType],
    ['Price / rate', d.price],
    ['Units / shares', d.shares],
    ['Execution time', d.time],
    ['Execution route', d.execution],
    ['Account', d.account],
    ['Broker', d.broker]
  ];
  rows.forEach(function(r) {
    body += '<div class="sm-row"><div class="k">' + r[0] + '</div><div class="v">' + r[1] + '</div></div>';
  });
  body += '</div></div>';

  // Authorisation
  body += '<div style="margin-bottom:18px;"><div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Authorisation</div>';
  body += '<div style="background:white;border-radius:var(--r);border:1px solid var(--cream-mid);padding:0 14px;">';
  body += '<div class="sm-row"><div class="k">Status</div><div class="v">' + d.auth + '</div></div>';
  body += '<div class="sm-row"><div class="k">Authorised by</div><div class="v">' + d.authBy + '</div></div>';
  body += '<div class="sm-row"><div class="k">Submitted by</div><div class="v">' + d.wm + ' (Wealth Manager)</div></div>';
  body += '</div></div>';

  // WM note
  if (d.wmNote) {
    body += '<div style="margin-bottom:18px;"><div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">WM Note</div>';
    body += '<div style="background:var(--cream);border-radius:var(--r);padding:11px 14px;font-size:.82rem;color:var(--ink-soft);line-height:1.6;">' + d.wmNote + '</div></div>';
  }

  // Timeline
  body += '<div><div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Timeline</div>';
  body += d.timeline.map(function(t) {
    var dot = t.status === 'done'
      ? '<div style="width:26px;height:26px;border-radius:50%;background:var(--green);color:white;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;flex-shrink:0;margin-top:2px;">\u2713</div>'
      : t.status === 'active'
      ? '<div style="width:26px;height:26px;border-radius:50%;background:var(--gold);color:white;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700;flex-shrink:0;margin-top:2px;">\u25cf</div>'
      : '<div style="width:26px;height:26px;border-radius:50%;background:var(--cream);border:1.5px solid var(--cream-dark);color:var(--ink-muted);display:flex;align-items:center;justify-content:center;font-size:.65rem;flex-shrink:0;margin-top:2px;">\u25cb</div>';
    var titleColor = t.status === 'done' ? 'var(--ink)' : t.status === 'active' ? 'var(--gold)' : 'var(--ink-muted)';
    return '<div style="display:flex;gap:12px;margin-bottom:16px;">' + dot +
      '<div><div style="font-size:.83rem;font-weight:600;color:' + titleColor + ';">' + t.label + '</div>' +
      '<div style="font-size:.76rem;color:var(--ink-muted);margin-top:3px;line-height:1.5;">' + t.desc + '</div>' +
      '<div style="font-size:.7rem;color:var(--ink-muted);margin-top:4px;">' + t.date + '</div>' +
      '</div></div>';
  }).join('');
  body += '</div>';

  document.getElementById('orderModalBody').innerHTML = body;

  // Footer
  var foot = '<button class="sm-btn sec" onclick="closeOrderModal()">Close</button>';
  if (d.status === 'awaiting') {
    foot += '<button class="sm-btn pri" onclick="closeOrderModal();showToast(\'Reminder sent to client \u2713\')">Send Reminder</button>';
  } else if (d.status === 'pending') {
    foot += '<button class="sm-btn pri" onclick="closeOrderModal();wmNav(\'clients\')">View Client</button>';
  } else {
    foot += '<button class="sm-btn pri" onclick="closeOrderModal();openCW(\'' + d.clientId + '\')">Open Client Profile</button>';
  }
  document.getElementById('orderModalFoot').innerHTML = foot;

  document.getElementById('orderModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
  document.getElementById('orderModal').classList.remove('open');
  document.body.style.overflow = '';
}


// ── SA Trade Centre ───────────────────────────────────────────────────
function saTradeTab(tab, btn) {
  document.querySelectorAll('.sa-trade-tab').forEach(function(b){b.classList.remove('active');});
  if (btn) btn.classList.add('active');
  var req = document.getElementById('sa-trade-requests');
  var opp = document.getElementById('sa-trade-opps');
  var gld = document.getElementById('sa-trade-gold');
  if (req) req.style.display = tab==='requests'?'block':'none';
  if (opp) opp.style.display = tab==='opps'?'block':'none';
  if (gld) gld.style.display = tab==='gold'?'block':'none';
}

// ── Add Opportunity overlay ───────────────────────────────────────────
var _saOppCat = '';
var _saOppImages = [];

function saAddOppContextual() {
  // Read the active Trade Centre sub-tab and open the correct slide
  var activeTab = document.querySelector('#saTradeSubBar .sa-sub-tab.active');
  var tab = activeTab ? activeTab.id.replace('saSub-','') : 'private';
  if (tab === 'realestate') { saOpenSlide('re-add'); }
  else if (tab === 'private') { saOpenSlide('pm-add'); }
  else {
    // Metals tab — no add form needed from header, default to private markets
    saOpenSlide('pm-add');
  }
}

function saOpenAddOpp() {
  _saOppCat = ''; _saImgMap = {};
  document.querySelectorAll('.sa-opp-cat-card').forEach(function(c){c.classList.remove('selected');});
  ['private','realestate','gold'].forEach(function(f){
    var fe = document.getElementById('saForm-'+f); if (fe) fe.style.display='none';
  });
  var bar = document.getElementById('saOppSubmitBar'); if (bar) bar.style.display='none';
  var t = document.getElementById('saOppPageTitle'); if (t) t.textContent='Add New Opportunity';
  var rp = document.getElementById('re-img-preview'); if (rp) { rp.style.display='none'; rp.innerHTML=''; }
  ['saOppName','saOppReturn','saOppMin','saOppCapacity','saOppDesc','saOppHighlights','saOppAddress','saOppBeds','saOppSqft','saOppRent'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
  var ov = document.getElementById('saAddOppOverlay'); if (ov) ov.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function saCloseAddOpp() {
  var ov2 = document.getElementById('saAddOppOverlay'); if (ov2) ov2.style.display = 'none';
  document.body.style.overflow = '';
}

function saSelectOppCat(cat) {
  _saOppCat = cat;
  document.querySelectorAll('.sa-opp-cat-card').forEach(function(c){c.classList.remove('selected');});
  var el = document.getElementById('saOppCat-' + cat); if (el) el.classList.add('selected');

  // Hide all forms
  ['private','realestate','gold'].forEach(function(f){
    var fe = document.getElementById('saForm-' + f); if (fe) fe.style.display = 'none';
  });
  // Show selected form
  var form = document.getElementById('saForm-' + cat);
  if (form) form.style.display = 'block';

  // Show submit bar
  var bar = document.getElementById('saOppSubmitBar'); if (bar) bar.style.display = 'flex';

  // Update page title
  var titles = {private:'Add Private Markets Opportunity',realestate:'Add Real Estate Listing',gold:'Add Gold & Silver Listing'};
  var t = document.getElementById('saOppPageTitle'); if (t) t.textContent = titles[cat] || 'Add Opportunity';

  // Scroll to form
  form.scrollIntoView({behavior:'smooth', block:'start'});
}

// Shared image handlers for real estate
var _saImgMap = {};
function saImgHandle(files, prefix) {
  if (!_saImgMap[prefix]) _saImgMap[prefix] = [];
  Array.from(files).forEach(function(f) {
    if (_saImgMap[prefix].length >= 8) return;
    var r = new FileReader();
    r.onload = function(e) { _saImgMap[prefix].push({name:f.name,url:e.target.result}); saImgRender(prefix); };
    r.readAsDataURL(f);
  });
  document.getElementById(prefix+'-img-input').value = '';
}
function saImgRender(prefix) {
  var grid = document.getElementById(prefix+'-img-preview'); if (!grid) return;
  var imgs = _saImgMap[prefix] || [];
  if (!imgs.length) { grid.style.display='none'; return; }
  grid.style.display = 'grid';
  grid.innerHTML = imgs.map(function(img,i){
    var pfx = prefix;
    return '<div style="position:relative;border-radius:var(--r);overflow:hidden;aspect-ratio:4/3;">' +
      '<img src="' + img.url + '" style="width:100%;height:100%;object-fit:cover;display:block;">' +
      '<button data-p="' + pfx + '" data-i="' + i + '" onclick="var p=this.dataset.p;var ix=parseInt(this.dataset.i);_saImgMap[p].splice(ix,1);saImgRender(p);" ' +
        'style="position:absolute;top:4px;right:4px;width:20px;height:20px;border-radius:50%;background:rgba(12,26,46,.7);color:white;border:none;cursor:pointer;font-size:.75rem;line-height:1;">&times;</button>' +
    '</div>';
  }).join('');
}
function saImgDragOver(zone) { zone.style.borderColor='var(--blue)'; zone.style.background='var(--blue-pale)'; }
function saImgDragLeave(zone) { zone.style.borderColor='var(--cream-dark)'; zone.style.background='var(--cream)'; }
function saImgDrop(event, prefix) {
  event.preventDefault();
  var zone = event.currentTarget; saImgDragLeave(zone);
  saImgHandle(event.dataTransfer.files, prefix);
}


function saSubmitOpp() {
  // Get name from whichever form is active
  var nameMap = {private:'pm-name',realestate:'re-name',gold:'gld-name'};
  var minMap  = {private:'pm-min', realestate:'re-min', gold:'gld-min'};
  var retMap  = {private:'pm-return',realestate:'re-return',gold:''};
  if (!_saOppCat) { showToast('Please select a category'); return; }
  var nameId = nameMap[_saOppCat];
  var name = nameId && document.getElementById(nameId) ? document.getElementById(nameId).value.trim() : '';
  if (!name) { showToast('Please enter a name for this opportunity'); return; }
  var minId = minMap[_saOppCat];
  var min = minId && document.getElementById(minId) ? document.getElementById(minId).value.trim() : '';
  if (!min) { showToast('Please enter a minimum investment'); return; }
  var retId = retMap[_saOppCat];
  var ret = retId && document.getElementById(retId) ? document.getElementById(retId).value.trim() : '—';

  var catLabels = {private:'Private Markets',realestate:'Real Estate',gold:'Gold & Metals'};
  var tagClass  = {private:'tag-purple',realestate:'tag-green',gold:'tag-gold'};
  var cat = catLabels[_saOppCat]||_saOppCat;
  var tag = tagClass[_saOppCat]||'tag-blue';

  var table = document.getElementById('saOppTable');
  if (table) {
    var newRow = '<tr><td><strong>'+name+'</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">'+cat+'</span></td>' +
      '<td><span class="tag '+tag+'">'+cat+'</span></td>' +
      '<td>'+(ret||'—')+'</td><td>'+min+'</td><td>—</td>' +
      '<td><span class="badge badge-active">Open</span></td>' +
      '<td><button class="btn-sm btn-outline" onclick="saEditOpp(this,this.dataset.n)" data-n="' + name.replace(/"/g,'&quot;') + '">Edit</button></td></tr>';
    var lastRow = document.getElementById('saOppNewRow');
    if (lastRow) lastRow.insertAdjacentHTML('beforebegin', newRow);
  }
  saCloseAddOpp();
  var oppTabs = document.querySelectorAll('.sa-trade-tab');
  var oppTab = oppTabs[1]||null;
  if (oppTab) saTradeTab('opps', oppTab);
  showToast('Opportunity published ✓');
}

function saEditOpp(btn, name) {
  showToast('Editing: ' + name + '\u2026');
}

function saOpenAddOpp2() { saOpenAddOpp(); }



// ── SA Trade Centre Sub-tabs ──────────────────────────────────────────
function saSubTab(tab, btn) {
  document.querySelectorAll('#saTradeSubBar .sa-sub-tab').forEach(function(b){b.classList.remove('active');});
  if (btn) btn.classList.add('active');
  ['metals','realestate','private'].forEach(function(p){
    var el = document.getElementById('saPane-'+p); if(el) el.style.display = p===tab?'block':'none';
  });
  if (tab === 'metals') setTimeout(function(){ drawMetalChart(); }, 80);
}

function saMetalTab(metal, btn) {
  document.querySelectorAll('[id^="metalTab-"]').forEach(function(b){b.classList.remove('active');});
  if (btn) btn.classList.add('active');
  var lg = document.getElementById('metalLegendGold');
  var ls = document.getElementById('metalLegendSilver');
  if (lg) lg.style.display = metal==='silver'?'none':'flex';
  if (ls) ls.style.display = metal==='gold'?'none':'flex';
  drawMetalChart(metal);
}

function drawMetalChart(metal) {
  var canvas = document.getElementById('metalChart'); if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var W = canvas.parentElement.offsetWidth - 32 || 600;
  canvas.width = W; canvas.height = 200; ctx.clearRect(0,0,W,200);
  var goldPts = [], silverPts = [];
  for (var i = 0; i < 60; i++) {
    var t = i/59;
    goldPts.push(1400 + t*950 + Math.sin(i*0.5)*40 + Math.cos(i*1.1)*25);
    silverPts.push(14 + t*14 + Math.sin(i*0.7+1)*1.8 + Math.cos(i*1.3+2)*1.2);
  }
  function drawLine(pts, color) {
    var minV = Math.min.apply(null,pts)-20, maxV = Math.max.apply(null,pts)+20;
    ctx.beginPath();
    pts.forEach(function(v,i){
      var x=(i/(pts.length-1))*(W-4)+2, y=190-((v-minV)/(maxV-minV))*170+5;
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    });
    ctx.strokeStyle=color; ctx.lineWidth=2; ctx.stroke();
    var ex=(W-4)+2;
    ctx.lineTo(ex,195); ctx.lineTo(2,195); ctx.closePath();
    ctx.fillStyle=color.replace('1)','.08)'); ctx.fill();
  }
  if (!metal||metal==='gold'||metal==='both') drawLine(goldPts,'rgba(200,150,46,1)');
  if (metal==='silver'||metal==='both') drawLine(silverPts,'rgba(132,148,168,1)');
  ctx.fillStyle='#8494A8'; ctx.font='10px Instrument Sans,sans-serif';
  ['2020','2021','2022','2023','2024','2025'].forEach(function(m,i){ ctx.fillText(m,(i/5)*(W-30)+4,198); });
}

// ── Slide image helpers ──────────────────────────────────────────────
var _slideImgs = {};
function saSlideImgHandle(files, prefix) {
  if (!_slideImgs[prefix]) _slideImgs[prefix] = [];
  Array.from(files).forEach(function(f) {
    if (_slideImgs[prefix].length >= 8) return;
    var r = new FileReader();
    r.onload = function(e) { _slideImgs[prefix].push({url:e.target.result,name:f.name}); saSlideImgRender(prefix); };
    r.readAsDataURL(f);
  });
  var el = document.getElementById(prefix+'-file'); if(el) el.value='';
}
function saSlideImgRender(prefix) {
  var grid = document.getElementById(prefix+'-img-preview'); if(!grid) return;
  var imgs = _slideImgs[prefix]||[];
  if (!imgs.length) { grid.style.display='none'; return; }
  grid.style.display='grid';
  grid.innerHTML = imgs.map(function(img,i){
    return '<div style="position:relative;border-radius:var(--r);overflow:hidden;aspect-ratio:4/3;">' +
      '<img src="'+img.url+'" style="width:100%;height:100%;object-fit:cover;display:block;">' +
      '<button data-p="'+prefix+'" data-i="'+i+'" onclick="var p=this.dataset.p;_slideImgs[p].splice(parseInt(this.dataset.i),1);saSlideImgRender(p);" ' +
        'style="position:absolute;top:3px;right:3px;width:18px;height:18px;border-radius:50%;background:rgba(12,26,46,.75);color:white;border:none;cursor:pointer;font-size:.7rem;line-height:1;">&times;</button>' +
    '</div>';
  }).join('');
}
function saImgDragOver(zone) { zone.style.borderColor='var(--blue)';zone.style.background='var(--blue-pale)'; }
function saImgDragLeave(zone) { zone.style.borderColor='var(--cream-dark)';zone.style.background='var(--cream)'; }
function saSlideImgDrop(event, prefix) {
  event.preventDefault(); saImgDragLeave(event.currentTarget); saSlideImgHandle(event.dataTransfer.files, prefix);
}
function saSlideDeckDrop(event, inputId) {
  event.preventDefault();
  var zone = event.currentTarget;
  saImgDragLeave(zone);
  var f = event.dataTransfer.files[0];
  if (f) { zone.innerHTML='<div style="font-size:.82rem;font-weight:500;color:var(--green);">✓ '+f.name+'</div>'; }
}

// ── Image form builder ───────────────────────────────────────────────
function reImgFormHtml(prefix, existingUrl) {
  var hasImg = !!existingUrl;
  return '<div class="sm-fld"><label class="sm-lbl">Deal / Listing Image</label>' +
    '<div id="'+prefix+'-img-zone" style="border:2px dashed var(--cream-dark);border-radius:var(--r-lg);padding:28px;text-align:center;cursor:pointer;background:var(--cream);transition:all .15s;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:130px;" ondragover="event.preventDefault();saImgDragOver(this)" ondragleave="saImgDragLeave(this)" ondrop="saSlideImgDrop(event,\''+prefix+'\')" onclick="document.getElementById(\''+prefix+'-file\').click()">' +
    (hasImg?'<img src="'+existingUrl+'" style="width:100%;height:90px;object-fit:cover;border-radius:10px;margin-bottom:8px;">':'<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="var(--ink-muted)" stroke-width="1.3" style="margin-bottom:8px;"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>') +
    '<div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);">'+(hasImg?'Replace — drag &amp; drop or click to add more':'Drag &amp; drop cover image or click to upload')+'</div>' +
    '<div style="font-size:.73rem;color:var(--ink-muted);margin-top:3px;">JPG, PNG, WebP · Max 5MB · Up to 8 images</div>' +
    '<input type="file" id="'+prefix+'-file" multiple accept=".jpg,.jpeg,.png,.webp" style="display:none" onchange="saSlideImgHandle(this.files,\''+prefix+'\')">' +
    '</div>' +
    '<div id="'+prefix+'-img-preview" style="display:none;margin-top:10px;grid-template-columns:repeat(4,1fr);gap:6px;"></div>' +
    '</div>';
}

function pmDeckHtml(prefix) {
  return '<div class="sm-fld"><label class="sm-lbl">Investor Deck / Pitch Document</label>' +
    '<div id="'+prefix+'-deck-zone" style="border:2px dashed var(--cream-dark);border-radius:var(--r);padding:18px;text-align:center;cursor:pointer;background:var(--cream);transition:all .15s;" ondragover="event.preventDefault();saImgDragOver(this)" ondragleave="saImgDragLeave(this)" ondrop="saSlideDeckDrop(event,\''+prefix+'-deck-zone\')" onclick="document.getElementById(\''+prefix+'-deck\').click()">' +
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--ink-muted)" stroke-width="1.3" style="margin-bottom:6px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
    '<div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);">Drag &amp; drop deck or click to upload</div>' +
    '<div style="font-size:.73rem;color:var(--ink-muted);margin-top:3px;">PDF, PPTX, DOCX</div>' +
    '<input type="file" id="'+prefix+'-deck" style="display:none" accept=".pdf,.pptx,.ppt,.doc,.docx" onchange="this.previousElementSibling.previousElementSibling.textContent=\'✓ \'+this.files[0].name;showToast(\'Deck attached ✓\')">' +
    '</div></div>';
}

function rowCard(rows) {
  return '<div style="background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;">' +
    rows.map(function(r){ return '<div class="sm-row"><div class="k">'+r[0]+'</div><div class="v">'+r[1]+'</div></div>'; }).join('') + '</div>';
}

// ── Slide data ───────────────────────────────────────────────────────
var _saSlideData = {
// Metals
  'metals-add': { title:'Add Metal Purchase', sub:'Log a new purchase request', body:function(){
    return '<div class="sm-fld"><label class="sm-lbl">Client *</label><select class="sm-sel"><option>Priya Sharma</option><option>Emeka Okafor</option><option>Fatima Al-Rashid</option><option>Ibrahim Hassan</option></select></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Metal *</label><select class="sm-sel"><option>Gold (Physical)</option><option>Silver (Physical)</option><option>Gold ETF (IAU)</option><option>Platinum</option></select></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div class="sm-fld"><label class="sm-lbl">Amount (USD)</label><input class="sm-inp" placeholder="$25,000"></div><div class="sm-fld"><label class="sm-lbl">Settlement</label><input class="sm-inp" value="T+2"></div></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Vault / Storage</label><select class="sm-sel"><option>Citadel Vault, Oklahoma City</option><option>Citadel Vault, Oklahoma City</option><option>Citadel Vault, Oklahoma City</option><option>Citadel Vault, Oklahoma City</option></select></div>' +
    '<div class="sm-fld"><label class="sm-lbl">WM</label><select class="sm-sel"><option>Sarah Mensah</option><option>David Nwosu</option></select></div>';
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Cancel</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Purchase request added \u2713\')">Add Request</button>'; }},
  'metals-listing': { title:'Add Metal', sub:'Gold & Silver · Bar or Coin', body:function(){
    return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Product Name <span style="color:var(--red);">*</span></label><input class="sm-inp" id="ml-name" placeholder="e.g. PAMP Suisse Lady Fortuna 1oz Gold Bar"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Metal <span style="color:var(--red);">*</span></label><select class="sm-sel" id="ml-metal"><option value="">Select…</option><option>Gold</option><option>Silver</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Product Type <span style="color:var(--red);">*</span></label><select class="sm-sel" id="ml-type"><option value="">Select…</option><option>Bar</option><option>Coin</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Mint / Manufacturer <span style="color:var(--red);">*</span></label><select class="sm-sel" id="ml-mint"><option value="">Select…</option><option>PAMP Suisse (Swiss)</option><option>US Mint (American)</option><option>Royal Canadian Mint</option><option>The Royal Mint UK (Britannia)</option><option>Perth Mint (Australian)</option><option>South African Mint (Krugerrand)</option><option>Austrian Mint (Philharmonic)</option><option>Valcambi (Swiss)</option><option>Other</option></select></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Weight &amp; Purity</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Weight <span style="color:var(--red);">*</span></label><input class="sm-inp" id="ml-weight" placeholder="e.g. 1 troy oz / 100g / 10 oz"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Purity / Fineness <span style="color:var(--red);">*</span></label><select class="sm-sel" id="ml-purity"><option value="">Select…</option><option>99.99% (24 carat / .9999 fine)</option><option>99.9% (.999 fine)</option><option>99.5% (.995 fine)</option><option>91.67% (22 carat / American Eagle)</option><option>90% (junk silver / pre-1965)</option><option>Other</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Certification / Assay</label><input class="sm-inp" id="ml-cert" placeholder="e.g. Veriscan®, LBMA accredited, NGC graded"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Year / Vintage</label><input class="sm-inp" id="ml-year" placeholder="e.g. 2024 or Varied"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Pricing</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Spot Price (live) <span style="color:var(--red);">*</span></label><input class="sm-inp" id="ml-spot" placeholder="e.g. $2,341.50 / troy oz"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Listed / Offer Price <span style="color:var(--red);">*</span></label><input class="sm-inp" id="ml-price" placeholder="e.g. $2,378.00"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Premium over spot</label><input class="sm-inp" id="ml-premium" placeholder="e.g. 1.6%"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Purchase</label><input class="sm-inp" id="ml-min" placeholder="e.g. 1 unit / $5,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Annual Storage Fee</label><input class="sm-inp" id="ml-storagefee" placeholder="e.g. 0.15% per annum"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Liquidation Fee</label><input class="sm-inp" id="ml-liqfee" placeholder="e.g. 1% of yield on sale"></div>` +
    `</div>` +

    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Visibility &amp; Access</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel" id="ml-accred"><option>No — open to all clients</option><option>Yes — accredited investors only</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="ml-vis"><option>All clients &amp; WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description / Notes</label><textarea class="sm-inp" id="ml-desc" rows="2" style="resize:none;" placeholder="Additional details — vault location, insurance, delivery options..."></textarea></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status</label><select class="sm-sel" id="ml-status"><option>Active</option><option>Inactive</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Publish Listing','saCloseSlide();saAddMetalRow()'); }},

  'metal-edit-1': { title:'Edit — PAMP Suisse Lady Fortuna', sub:'Gold · Bar · PAMP Suisse', body:function(){
    return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Product Name <span style="color:var(--red);">*</span></label><input class="sm-inp" value="PAMP Suisse Lady Fortuna"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Metal <span style="color:var(--red);">*</span></label><select class="sm-sel"><option value="">Select…</option><option selected>Gold</option><option>Silver</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Product Type <span style="color:var(--red);">*</span></label><select class="sm-sel"><option value="">Select…</option><option selected>Bar</option><option>Coin</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Mint / Manufacturer <span style="color:var(--red);">*</span></label><select class="sm-sel"><option selected>PAMP Suisse (Swiss)</option><option>US Mint (American)</option><option>Royal Canadian Mint</option><option>The Royal Mint UK (Britannia)</option><option>Perth Mint (Australian)</option><option>South African Mint (Krugerrand)</option><option>Austrian Mint (Philharmonic)</option><option>Valcambi (Swiss)</option><option>Other</option></select></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Weight &amp; Purity</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Weight <span style="color:var(--red);">*</span></label><input class="sm-inp" value="1 troy oz"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Purity / Fineness <span style="color:var(--red);">*</span></label><select class="sm-sel"><option selected>99.99% (24 carat / .9999 fine)</option><option>99.9% (.999 fine)</option><option>99.5% (.995 fine)</option><option>91.67% (22 carat / American Eagle)</option><option>90% (junk silver / pre-1965)</option><option>Other</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Certification / Assay</label><input class="sm-inp" value="Veriscan® certified"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Year / Vintage</label><input class="sm-inp" value="2024"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Pricing</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Spot Price (live) <span style="color:var(--red);">*</span></label><input class="sm-inp" value="$2,341.50"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Listed / Offer Price <span style="color:var(--red);">*</span></label><input class="sm-inp" value="$2,378.00"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Premium over spot</label><input class="sm-inp" value="1.6%"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Purchase</label><input class="sm-inp" value="1 unit / $2,378"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Annual Storage Fee</label><input class="sm-inp" value="0.15% per annum"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Liquidation Fee</label><input class="sm-inp" value="1% of yield on sale"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Visibility &amp; Access</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel"><option>No — open to all clients</option><option>Yes — accredited investors only</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel"><option>All clients &amp; WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description / Notes</label><textarea class="sm-inp" rows="2" style="resize:none;" placeholder="Additional details..."></textarea></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status</label><select class="sm-sel"><option selected>Active</option><option>Inactive</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes','saCloseSlide();showToast(\'Changes saved ✓\')'); }},
  'metal-edit-2': { title:'Edit — American Gold Eagle', sub:'Gold · Coin · US Mint', body:function(){
    return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Product Name <span style="color:var(--red);">*</span></label><input class="sm-inp" value="American Gold Eagle"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Metal <span style="color:var(--red);">*</span></label><select class="sm-sel"><option value="">Select…</option><option selected>Gold</option><option>Silver</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Product Type <span style="color:var(--red);">*</span></label><select class="sm-sel"><option value="">Select…</option><option>Bar</option><option selected>Coin</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Mint / Manufacturer <span style="color:var(--red);">*</span></label><select class="sm-sel"><option>PAMP Suisse (Swiss)</option><option selected>US Mint (American)</option><option>Royal Canadian Mint</option><option>The Royal Mint UK (Britannia)</option><option>Perth Mint (Australian)</option><option>South African Mint (Krugerrand)</option><option>Austrian Mint (Philharmonic)</option><option>Valcambi (Swiss)</option><option>Other</option></select></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Weight &amp; Purity</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Weight <span style="color:var(--red);">*</span></label><input class="sm-inp" value="1 troy oz"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Purity / Fineness <span style="color:var(--red);">*</span></label><select class="sm-sel"><option>99.99% (24 carat / .9999 fine)</option><option>99.9% (.999 fine)</option><option>99.5% (.995 fine)</option><option selected>91.67% (22 carat / American Eagle)</option><option>90% (junk silver / pre-1965)</option><option>Other</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Certification / Assay</label><input class="sm-inp" value="US Mint legal tender"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Year / Vintage</label><input class="sm-inp" value="2024"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Pricing</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Spot Price (live) <span style="color:var(--red);">*</span></label><input class="sm-inp" value="$2,341.50"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Listed / Offer Price <span style="color:var(--red);">*</span></label><input class="sm-inp" value="$2,395.00"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Premium over spot</label><input class="sm-inp" value="2.3%"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Purchase</label><input class="sm-inp" value="1 unit / $2,395"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Annual Storage Fee</label><input class="sm-inp" value="0.15% per annum"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Liquidation Fee</label><input class="sm-inp" value="1% of yield on sale"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Visibility &amp; Access</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel"><option>No — open to all clients</option><option>Yes — accredited investors only</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel"><option>All clients &amp; WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description / Notes</label><textarea class="sm-inp" rows="2" style="resize:none;" placeholder="Additional details..."></textarea></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status</label><select class="sm-sel"><option selected>Active</option><option>Inactive</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes','saCloseSlide();showToast(\'Changes saved ✓\')'); }},
  'metal-edit-3': { title:'Edit — Canadian Maple Leaf', sub:'Gold · Coin · Royal Canadian Mint', body:function(){
    return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Product Name <span style="color:var(--red);">*</span></label><input class="sm-inp" value="Canadian Maple Leaf"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Metal <span style="color:var(--red);">*</span></label><select class="sm-sel"><option value="">Select…</option><option selected>Gold</option><option>Silver</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Product Type <span style="color:var(--red);">*</span></label><select class="sm-sel"><option value="">Select…</option><option>Bar</option><option selected>Coin</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Mint / Manufacturer <span style="color:var(--red);">*</span></label><select class="sm-sel"><option>PAMP Suisse (Swiss)</option><option>US Mint (American)</option><option selected>Royal Canadian Mint</option><option>The Royal Mint UK (Britannia)</option><option>Perth Mint (Australian)</option><option>South African Mint (Krugerrand)</option><option>Austrian Mint (Philharmonic)</option><option>Valcambi (Swiss)</option><option>Other</option></select></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Weight &amp; Purity</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Weight <span style="color:var(--red);">*</span></label><input class="sm-inp" value="1 troy oz"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Purity / Fineness <span style="color:var(--red);">*</span></label><select class="sm-sel"><option selected>99.99% (24 carat / .9999 fine)</option><option>99.9% (.999 fine)</option><option>99.5% (.995 fine)</option><option>91.67% (22 carat / American Eagle)</option><option>90% (junk silver / pre-1965)</option><option>Other</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Certification / Assay</label><input class="sm-inp" value="Royal Canadian Mint assay"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Year / Vintage</label><input class="sm-inp" value="2024"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Pricing</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Spot Price (live) <span style="color:var(--red);">*</span></label><input class="sm-inp" value="$2,341.50"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Listed / Offer Price <span style="color:var(--red);">*</span></label><input class="sm-inp" value="$2,372.00"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Premium over spot</label><input class="sm-inp" value="1.3%"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Purchase</label><input class="sm-inp" value="1 unit / $2,372"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Annual Storage Fee</label><input class="sm-inp" value="0.15% per annum"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Liquidation Fee</label><input class="sm-inp" value="1% of yield on sale"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Visibility &amp; Access</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel"><option>No — open to all clients</option><option>Yes — accredited investors only</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel"><option>All clients &amp; WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description / Notes</label><textarea class="sm-inp" rows="2" style="resize:none;" placeholder="Additional details..."></textarea></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status</label><select class="sm-sel"><option selected>Active</option><option>Inactive</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes','saCloseSlide();showToast(\'Changes saved ✓\')'); }},
  'metal-edit-4': { title:'Edit — Britannia Gold Coin', sub:'Gold · Coin · The Royal Mint UK', body:function(){
    return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Product Name <span style="color:var(--red);">*</span></label><input class="sm-inp" value="Britannia Gold Coin"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Metal <span style="color:var(--red);">*</span></label><select class="sm-sel"><option value="">Select…</option><option selected>Gold</option><option>Silver</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Product Type <span style="color:var(--red);">*</span></label><select class="sm-sel"><option value="">Select…</option><option>Bar</option><option selected>Coin</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Mint / Manufacturer <span style="color:var(--red);">*</span></label><select class="sm-sel"><option>PAMP Suisse (Swiss)</option><option>US Mint (American)</option><option>Royal Canadian Mint</option><option selected>The Royal Mint UK (Britannia)</option><option>Perth Mint (Australian)</option><option>South African Mint (Krugerrand)</option><option>Austrian Mint (Philharmonic)</option><option>Valcambi (Swiss)</option><option>Other</option></select></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Weight &amp; Purity</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Weight <span style="color:var(--red);">*</span></label><input class="sm-inp" value="1 troy oz"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Purity / Fineness <span style="color:var(--red);">*</span></label><select class="sm-sel"><option selected>99.99% (24 carat / .9999 fine)</option><option>99.9% (.999 fine)</option><option>99.5% (.995 fine)</option><option>91.67% (22 carat / American Eagle)</option><option>90% (junk silver / pre-1965)</option><option>Other</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Certification / Assay</label><input class="sm-inp" value="The Royal Mint UK"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Year / Vintage</label><input class="sm-inp" value="2024"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Pricing</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Spot Price (live) <span style="color:var(--red);">*</span></label><input class="sm-inp" value="$2,341.50"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Listed / Offer Price <span style="color:var(--red);">*</span></label><input class="sm-inp" value="$2,368.00"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Premium over spot</label><input class="sm-inp" value="1.1%"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Purchase</label><input class="sm-inp" value="1 unit / $2,368"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Annual Storage Fee</label><input class="sm-inp" value="0.15% per annum"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Liquidation Fee</label><input class="sm-inp" value="1% of yield on sale"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Visibility &amp; Access</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel"><option>No — open to all clients</option><option>Yes — accredited investors only</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel"><option>All clients &amp; WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description / Notes</label><textarea class="sm-inp" rows="2" style="resize:none;" placeholder="Additional details..."></textarea></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status</label><select class="sm-sel"><option selected>Active</option><option>Inactive</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes','saCloseSlide();showToast(\'Changes saved ✓\')'); }},
  'metal-edit-5': { title:'Edit — PAMP Suisse Silver Bar', sub:'Silver · Bar · PAMP Suisse', body:function(){
    return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Product Name <span style="color:var(--red);">*</span></label><input class="sm-inp" value="PAMP Suisse Silver Bar"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Metal <span style="color:var(--red);">*</span></label><select class="sm-sel"><option value="">Select…</option><option>Gold</option><option selected>Silver</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Product Type <span style="color:var(--red);">*</span></label><select class="sm-sel"><option value="">Select…</option><option selected>Bar</option><option>Coin</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Mint / Manufacturer <span style="color:var(--red);">*</span></label><select class="sm-sel"><option selected>PAMP Suisse (Swiss)</option><option>US Mint (American)</option><option>Royal Canadian Mint</option><option>The Royal Mint UK (Britannia)</option><option>Perth Mint (Australian)</option><option>South African Mint (Krugerrand)</option><option>Austrian Mint (Philharmonic)</option><option>Valcambi (Swiss)</option><option>Other</option></select></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Weight &amp; Purity</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Weight <span style="color:var(--red);">*</span></label><input class="sm-inp" value="10 troy oz"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Purity / Fineness <span style="color:var(--red);">*</span></label><select class="sm-sel"><option selected>99.99% (24 carat / .9999 fine)</option><option>99.9% (.999 fine)</option><option>99.5% (.995 fine)</option><option>91.67% (22 carat / American Eagle)</option><option>90% (junk silver / pre-1965)</option><option>Other</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Certification / Assay</label><input class="sm-inp" value="Veriscan® certified"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Year / Vintage</label><input class="sm-inp" value="2024"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Pricing</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Spot Price (live) <span style="color:var(--red);">*</span></label><input class="sm-inp" value="$27.84/oz"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Listed / Offer Price <span style="color:var(--red);">*</span></label><input class="sm-inp" value="$295.00"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Premium over spot</label><input class="sm-inp" value="5.9%"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Purchase</label><input class="sm-inp" value="1 unit / $295"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Annual Storage Fee</label><input class="sm-inp" value="0.15% per annum"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Liquidation Fee</label><input class="sm-inp" value="1% of yield on sale"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Visibility &amp; Access</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel"><option>No — open to all clients</option><option>Yes — accredited investors only</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel"><option>All clients &amp; WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description / Notes</label><textarea class="sm-inp" rows="2" style="resize:none;" placeholder="Additional details..."></textarea></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status</label><select class="sm-sel"><option selected>Active</option><option>Inactive</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes','saCloseSlide();showToast(\'Changes saved ✓\')'); }},
  'metal-edit-6': { title:'Edit — American Silver Eagle', sub:'Silver · Coin · US Mint', body:function(){
    return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Product Name <span style="color:var(--red);">*</span></label><input class="sm-inp" value="American Silver Eagle"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Metal <span style="color:var(--red);">*</span></label><select class="sm-sel"><option value="">Select…</option><option>Gold</option><option selected>Silver</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Product Type <span style="color:var(--red);">*</span></label><select class="sm-sel"><option value="">Select…</option><option>Bar</option><option selected>Coin</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Mint / Manufacturer <span style="color:var(--red);">*</span></label><select class="sm-sel"><option>PAMP Suisse (Swiss)</option><option selected>US Mint (American)</option><option>Royal Canadian Mint</option><option>The Royal Mint UK (Britannia)</option><option>Perth Mint (Australian)</option><option>South African Mint (Krugerrand)</option><option>Austrian Mint (Philharmonic)</option><option>Valcambi (Swiss)</option><option>Other</option></select></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Weight &amp; Purity</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Weight <span style="color:var(--red);">*</span></label><input class="sm-inp" value="1 troy oz"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Purity / Fineness <span style="color:var(--red);">*</span></label><select class="sm-sel"><option>99.99% (24 carat / .9999 fine)</option><option selected>99.9% (.999 fine)</option><option>99.5% (.995 fine)</option><option>91.67% (22 carat / American Eagle)</option><option>90% (junk silver / pre-1965)</option><option>Other</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Certification / Assay</label><input class="sm-inp" value="US Mint legal tender"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Year / Vintage</label><input class="sm-inp" value="2024"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Pricing</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Spot Price (live) <span style="color:var(--red);">*</span></label><input class="sm-inp" value="$27.84/oz"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Listed / Offer Price <span style="color:var(--red);">*</span></label><input class="sm-inp" value="$34.50"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Premium over spot</label><input class="sm-inp" value="23.9%"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Purchase</label><input class="sm-inp" value="1 unit / $34.50"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Annual Storage Fee</label><input class="sm-inp" value="0.15% per annum"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Liquidation Fee</label><input class="sm-inp" value="1% of yield on sale"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div>` +
    `<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Visibility &amp; Access</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel"><option>No — open to all clients</option><option>Yes — accredited investors only</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel"><option>All clients &amp; WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description / Notes</label><textarea class="sm-inp" rows="2" style="resize:none;" placeholder="Additional details..."></textarea></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status</label><select class="sm-sel"><option selected>Active</option><option>Inactive</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes','saCloseSlide();showToast(\'Changes saved ✓\')'); }},
  'metal-priya': { title:'Gold — Priya Sharma', sub:'$25,000 · Citadel Vault, Oklahoma City', body:function(){ return rowCard([['Client','Priya Sharma'],['Metal','Gold (Physical)'],['Amount','$25,000'],['Weight','~12 troy oz'],['Purity','99.99% fine'],['Vault','London, UK'],['Settlement','T+2'],['Status','Pending Approval']]); }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Approved \u2713\')">Approve</button>'; }},
  'metal-fatima': { title:'Silver — Fatima Al-Rashid', sub:'$80,000 · Citadel Vault, Oklahoma City', body:function(){ return rowCard([['Client','Fatima Al-Rashid'],['Metal','Silver (Physical)'],['Amount','$80,000'],['Weight','~2,500 oz'],['Vault','Zurich, Switzerland'],['Settlement','T+2'],['Status','Pending Approval']]); }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Approved \u2713\')">Approve</button>'; }},
  'metal-ibrahim': { title:'Gold — Ibrahim Hassan', sub:'$150,000 · Citadel Vault, Oklahoma City', body:function(){ return rowCard([['Client','Ibrahim Hassan'],['Metal','Gold (Physical)'],['Amount','$150,000'],['Weight','~72 oz'],['Vault','London, UK'],['Settlement','T+2'],['Status','Pending Approval']]); }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Approved \u2713\')">Approve</button>'; }},
  'metal-emeka': { title:'Gold — Emeka Okafor', sub:'$200,000 · Citadel Vault, Oklahoma City · Approved', body:function(){ return rowCard([['Client','Emeka Okafor'],['Metal','Gold (Physical)'],['Amount','$200,000'],['Weight','~96 oz'],['Vault','Singapore'],['Settlement','T+2'],['Status','Approved \u2713']])+
    '<div style="background:var(--green-pale);color:var(--green);border-radius:var(--r);padding:10px 14px;font-size:.8rem;">Purchase approved and vault instruction issued.</div>';
  }, foot:function(){ return '<button class="sm-btn pri" onclick="saCloseSlide()">Close</button>'; }},

  // RE — add new





  // PM — add new deal
  // PM — add new deal
  'pm-add': { title:'Add Private Market Deal', sub:'PE, VC, Private Credit · Upload images & deck', body:function(){
    _slideImgs['pm-new'] = []; return reImgFormHtml('pm-new','') +
    pmDeckHtml('pm-new') +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Deal Details</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Fund / Deal Name <span style="color:var(--red);">*</span></label><input class="sm-inp" id="pm-name" placeholder="e.g. Bridge Loan Fund IV"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Deal Type <span style="color:var(--red);">*</span></label><select class="sm-sel" id="pm-type"><option>Private Equity</option><option>Private Credit</option><option>Venture Capital</option><option>SPV — Special Purpose Vehicle</option><option>Real Estate Debt</option><option>Infrastructure</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Sector / Industry</label><input class="sm-inp" id="pm-sector" placeholder="e.g. Fintech, AI, Real Estate"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">HQ / Location</label><input class="sm-inp" id="pm-hq" placeholder="e.g. San Jose, California"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Stage</label><select class="sm-sel" id="pm-stage"><option>Seed</option><option>Growth</option><option>Late Stage</option><option>Mature</option><option>N/A</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Website</label><input class="sm-inp" id="pm-website" type="url" placeholder="https://company.com"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">About the Deal</div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description &amp; Investment Thesis</label><textarea class="sm-inp" id="pm-about" rows="4" style="resize:none;"></textarea></div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Key Statistics</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">ARR / Annualised Revenue</label><input class="sm-inp" id="pm-arr" placeholder="e.g. $5M annualised"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Valuation</label><input class="sm-inp" id="pm-val" placeholder="e.g. $50M or Private"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Available Allocation</label><input class="sm-inp" id="pm-allocation" placeholder="e.g. $1,000,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Deck URL (public link)</label><input class="sm-inp" id="pm-deckurl" placeholder="https://deck.company.com/..."></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Investment Figures</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Investment <span style="color:var(--red);">*</span></label><input class="sm-inp" id="pm-min" placeholder="e.g. $25,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Total Raise / Fund Size</label><input class="sm-inp" id="pm-size" placeholder="e.g. $50,000,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Target Return / IRR</label><input class="sm-inp" id="pm-return" placeholder="e.g. 10.5% net IRR"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Investment Term</label><input class="sm-inp" id="pm-term" placeholder="e.g. 18 months"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Closing Date</label><input class="sm-inp" id="pm-close" type="date"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Carry / Management Fee</label><input class="sm-inp" id="pm-fees" placeholder="e.g. 20% carry, 2% mgmt"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Highlights &amp; Visibility</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Key Highlights</label><input class="sm-inp" id="pm-highlights" placeholder="e.g. RE-secured, Senior debt, Quarterly distributions"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel" id="pm-accred"><option selected>Yes — Accredited only</option><option>No — Open to all</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="pm-vis"><option selected>All clients &amp; WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status <span style="color:var(--red);">*</span></label><select class="sm-sel" id="pm-status"><option selected>Open</option><option>Closed</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Publish Deal',"saCloseSlide();showToast('Deal published \u2713')"); }},

  'pm-edit-termii': { title:'Edit — Termii', sub:'Private Equity · San Jose, CA', body:function(){
    _slideImgs['pm-termii'] = []; return reImgFormHtml('pm-termii','https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/deals.png') +
    pmDeckHtml('pm-termii') +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Deal Details</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Fund / Deal Name <span style="color:var(--red);">*</span></label><input class="sm-inp" id="pm-name" value="Termii" placeholder="e.g. Bridge Loan Fund IV"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Deal Type <span style="color:var(--red);">*</span></label><select class="sm-sel" id="pm-type"><option selected>Private Equity</option><option>Private Credit</option><option>Venture Capital</option><option>SPV — Special Purpose Vehicle</option><option>Real Estate Debt</option><option>Infrastructure</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Sector / Industry</label><input class="sm-inp" id="pm-sector" value="AI · Payments · Communications" placeholder="e.g. Fintech, AI, Real Estate"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">HQ / Location</label><input class="sm-inp" id="pm-hq" value="San Jose, California" placeholder="e.g. San Jose, California"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Stage</label><select class="sm-sel" id="pm-stage"><option>Seed</option><option selected>Growth</option><option>Late Stage</option><option>Mature</option><option>N/A</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Website</label><input class="sm-inp" id="pm-website" type="url" value="https://termii.com" placeholder="https://company.com"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">About the Deal</div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description &amp; Investment Thesis</label><textarea class="sm-inp" id="pm-about" rows="4" style="resize:none;">Termii prevents transactions like logins, payments, checkouts, fraud alerts, and OTPs from failing — using AI. The company sits at the intersection of communications infrastructure and financial services, providing a mission-critical layer for businesses that cannot afford failed authentications. Termii is headquartered in San Jose, CA and serves enterprise clients across fintech, e-commerce, and banking.</textarea></div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Key Statistics</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">ARR / Annualised Revenue</label><input class="sm-inp" id="pm-arr" value="$5M annualised" placeholder="e.g. $5M annualised"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Valuation</label><input class="sm-inp" id="pm-val" value="Private" placeholder="e.g. $50M or Private"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Available Allocation</label><input class="sm-inp" id="pm-allocation" value="$1,000,000" placeholder="e.g. $1,000,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Deck URL (public link)</label><input class="sm-inp" id="pm-deckurl" value="https://deck.termii.com/pOUU3jsNhA" placeholder="https://deck.company.com/..."></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Investment Figures</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Investment <span style="color:var(--red);">*</span></label><input class="sm-inp" id="pm-min" value="$25,000" placeholder="e.g. $25,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Total Raise / Fund Size</label><input class="sm-inp" id="pm-size" value="$1,000,000" placeholder="e.g. $50,000,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Target Return / IRR</label><input class="sm-inp" id="pm-return" placeholder="e.g. 10.5% net IRR"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Investment Term</label><input class="sm-inp" id="pm-term" placeholder="e.g. 18 months"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Closing Date</label><input class="sm-inp" id="pm-close" type="date"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Carry / Management Fee</label><input class="sm-inp" id="pm-fees" placeholder="e.g. 20% carry, 2% mgmt"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Highlights &amp; Visibility</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Key Highlights</label><input class="sm-inp" id="pm-highlights" value="$5M ARR, AI-powered, Mission-critical infrastructure" placeholder="e.g. RE-secured, Senior debt, Quarterly distributions"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel" id="pm-accred"><option selected>Yes — Accredited only</option><option>No — Open to all</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="pm-vis"><option selected>All clients &amp; WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status <span style="color:var(--red);">*</span></label><select class="sm-sel" id="pm-status"><option selected>Open</option><option>Closed</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes',"saCloseSlide();showToast('Changes saved \u2713')"); }},
  'pm-edit-rayda': { title:'Edit — Rayda', sub:'Private Equity · Delaware', body:function(){
    _slideImgs['pm-rayda'] = []; return reImgFormHtml('pm-rayda','https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/plan_1661112808.jpg') +
    pmDeckHtml('pm-rayda') +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Deal Details</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Fund / Deal Name <span style="color:var(--red);">*</span></label><input class="sm-inp" id="pm-name" value="Rayda" placeholder="e.g. Bridge Loan Fund IV"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Deal Type <span style="color:var(--red);">*</span></label><select class="sm-sel" id="pm-type"><option selected>Private Equity</option><option>Private Credit</option><option>Venture Capital</option><option>SPV — Special Purpose Vehicle</option><option>Real Estate Debt</option><option>Infrastructure</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Sector / Industry</label><input class="sm-inp" id="pm-sector" value="IT Asset Management · SaaS" placeholder="e.g. Fintech, AI, Real Estate"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">HQ / Location</label><input class="sm-inp" id="pm-hq" value="Delaware, USA" placeholder="e.g. San Jose, California"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Stage</label><select class="sm-sel" id="pm-stage"><option>Seed</option><option selected>Growth</option><option>Late Stage</option><option>Mature</option><option>N/A</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Website</label><input class="sm-inp" id="pm-website" type="url" placeholder="https://company.com"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">About the Deal</div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description &amp; Investment Thesis</label><textarea class="sm-inp" id="pm-about" rows="4" style="resize:none;">Rayda is an IT asset management platform that helps businesses track, manage, and optimise their technology assets across the full lifecycle. Based in Delaware and operating globally, Rayda serves enterprise clients seeking to reduce IT spend and improve asset utilisation.</textarea></div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Key Statistics</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">ARR / Annualised Revenue</label><input class="sm-inp" id="pm-arr" value="$5.4M annualised" placeholder="e.g. $5M annualised"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Valuation</label><input class="sm-inp" id="pm-val" value="Private" placeholder="e.g. $50M or Private"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Available Allocation</label><input class="sm-inp" id="pm-allocation" value="$1,000,000" placeholder="e.g. $1,000,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Deck URL (public link)</label><input class="sm-inp" id="pm-deckurl" placeholder="https://deck.company.com/..."></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Investment Figures</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Investment <span style="color:var(--red);">*</span></label><input class="sm-inp" id="pm-min" value="$25,000" placeholder="e.g. $25,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Total Raise / Fund Size</label><input class="sm-inp" id="pm-size" value="$1,000,000" placeholder="e.g. $50,000,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Target Return / IRR</label><input class="sm-inp" id="pm-return" placeholder="e.g. 10.5% net IRR"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Investment Term</label><input class="sm-inp" id="pm-term" placeholder="e.g. 18 months"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Closing Date</label><input class="sm-inp" id="pm-close" type="date"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Carry / Management Fee</label><input class="sm-inp" id="pm-fees" placeholder="e.g. 20% carry, 2% mgmt"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Highlights &amp; Visibility</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Key Highlights</label><input class="sm-inp" id="pm-highlights" value="$5.4M ARR, Enterprise SaaS, Global operations" placeholder="e.g. RE-secured, Senior debt, Quarterly distributions"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel" id="pm-accred"><option selected>Yes — Accredited only</option><option>No — Open to all</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="pm-vis"><option selected>All clients &amp; WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status <span style="color:var(--red);">*</span></label><select class="sm-sel" id="pm-status"><option selected>Open</option><option>Closed</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes',"saCloseSlide();showToast('Changes saved \u2713')"); }},
  'pm-edit-bridge': { title:'Edit — Bridge Loan Fund III', sub:'Private Credit · RE-secured', body:function(){
    _slideImgs['pm-bridge'] = []; return reImgFormHtml('pm-bridge','') +
    pmDeckHtml('pm-bridge') +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Deal Details</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Fund / Deal Name <span style="color:var(--red);">*</span></label><input class="sm-inp" id="pm-name" value="Bridge Loan Fund III" placeholder="e.g. Bridge Loan Fund IV"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Deal Type <span style="color:var(--red);">*</span></label><select class="sm-sel" id="pm-type"><option>Private Equity</option><option selected>Private Credit</option><option>Venture Capital</option><option>SPV — Special Purpose Vehicle</option><option>Real Estate Debt</option><option>Infrastructure</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Sector / Industry</label><input class="sm-inp" id="pm-sector" value="Real Estate · Lending" placeholder="e.g. Fintech, AI, Real Estate"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">HQ / Location</label><input class="sm-inp" id="pm-hq" value="United States" placeholder="e.g. San Jose, California"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Stage</label><select class="sm-sel" id="pm-stage"><option>Seed</option><option>Growth</option><option>Late Stage</option><option selected>Mature</option><option>N/A</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Website</label><input class="sm-inp" id="pm-website" type="url" placeholder="https://company.com"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">About the Deal</div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description &amp; Investment Thesis</label><textarea class="sm-inp" id="pm-about" rows="4" style="resize:none;">Bridge Loan Fund III provides short-term senior-secured bridge loans against real estate collateral. The fund targets 10.5% net IRR with quarterly distributions and an 18-month term. All loans are first-lien secured against US real estate with LTV ratios below 70%.</textarea></div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Key Statistics</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">ARR / Annualised Revenue</label><input class="sm-inp" id="pm-arr" placeholder="e.g. $5M annualised"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Valuation</label><input class="sm-inp" id="pm-val" value="N/A" placeholder="e.g. $50M or Private"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Available Allocation</label><input class="sm-inp" id="pm-allocation" placeholder="e.g. $1,000,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Deck URL (public link)</label><input class="sm-inp" id="pm-deckurl" placeholder="https://deck.company.com/..."></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Investment Figures</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Investment <span style="color:var(--red);">*</span></label><input class="sm-inp" id="pm-min" value="$25,000" placeholder="e.g. $25,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Total Raise / Fund Size</label><input class="sm-inp" id="pm-size" value="$5,000,000" placeholder="e.g. $50,000,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Target Return / IRR</label><input class="sm-inp" id="pm-return" value="10.5% net IRR" placeholder="e.g. 10.5% net IRR"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Investment Term</label><input class="sm-inp" id="pm-term" value="18 months" placeholder="e.g. 18 months"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Closing Date</label><input class="sm-inp" id="pm-close" type="date" value="2026-04-24"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Carry / Management Fee</label><input class="sm-inp" id="pm-fees" value="2% mgmt, 20% carry above 8% hurdle" placeholder="e.g. 20% carry, 2% mgmt"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Highlights &amp; Visibility</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Key Highlights</label><input class="sm-inp" id="pm-highlights" value="RE-secured, Senior debt, First-lien, Quarterly distributions" placeholder="e.g. RE-secured, Senior debt, Quarterly distributions"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel" id="pm-accred"><option selected>Yes — Accredited only</option><option>No — Open to all</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="pm-vis"><option selected>All clients &amp; WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status <span style="color:var(--red);">*</span></label><select class="sm-sel" id="pm-status"><option selected>Open</option><option>Closed</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes',"saCloseSlide();showToast('Changes saved \u2713')"); }},

'client-request': { title:'New Client Request', sub:'Log a client instruction manually', body:function(){
    return '<div class="sm-fld"><label class="sm-lbl">Client</label><select class="sm-sel"><option>Priya Sharma</option><option>Emeka Okafor</option><option>Fatima Al-Rashid</option><option>Ibrahim Hassan</option></select></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Request type</label><select class="sm-sel"><option>Trade Instruction</option><option>Gold Purchase</option><option>Silver Purchase</option><option>Private Market Allocation</option><option>KYC Review</option></select></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Amount</label><input class="sm-inp" placeholder="e.g. $25,000"></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Notes</label><textarea class="sm-inp" rows="3" style="resize:none;" placeholder="Additional context..."></textarea></div>';
  }, foot: function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Cancel</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Request logged ✓\')">Log Request</button>'; }},
  'wm-request': { title:'New WM Request', sub:'Submit a WM-level instruction or note', body:function(){
    return '<div class="sm-fld"><label class="sm-lbl">Wealth Manager</label><select class="sm-sel"><option>Sarah Mensah</option><option>David Nwosu</option></select></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Request type</label><select class="sm-sel"><option>Trade Batch</option><option>Plan Upgrade</option><option>Compliance Flag</option><option>Access Issue</option></select></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Notes</label><textarea class="sm-inp" rows="3" style="resize:none;"></textarea></div>';
  }, foot: function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Cancel</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'WM request logged ✓\')">Submit</button>'; }},
  'order-spy': { title:'SPY BUY — Priya Sharma', sub:'Trade instruction · Apr 9, 2026', body:function(){
    return '<div style="background:var(--green-pale);border-radius:var(--r);padding:4px 12px;display:inline-block;font-size:.73rem;font-weight:700;color:var(--green);margin-bottom:16px;">Pending Approval</div>' +
    rowCard([['Client','Priya Sharma'],['Asset','S&P 500 ETF (SPY)'],['Direction','BUY'],['Quantity','85.7 shares'],['Estimated total','$50,000'],['Authorisation','Client authorised ✓'],['Submitted by','Sarah Mensah (WM)'],['Date','Apr 9, 2026 · 09:42 AM']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'SPY BUY approved ✓\')">Approve</button>'; }},
  'order-gold-priya': { title:'Gold Purchase — Priya Sharma', sub:'Commodity purchase · $25,000', body:function(){
    return '<div style="background:var(--gold-pale);border-radius:var(--r);padding:4px 12px;display:inline-block;font-size:.73rem;font-weight:700;color:var(--gold);margin-bottom:16px;">Pending Approval</div>' +
    rowCard([['Client','Priya Sharma'],['Metal','Gold (Physical)'],['Amount','$25,000'],['Weight','~12 troy oz'],['Purity','99.99% fine'],['Storage','Citadel Vault, Oklahoma City'],['Settlement','T+2'],['WM','Sarah Mensah']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Gold purchase approved ✓\')">Approve</button>'; }},
  'order-silver-fatima': { title:'Silver Purchase — Fatima Al-Rashid', sub:'Commodity purchase · $80,000', body:function(){
    return rowCard([['Client','Fatima Al-Rashid'],['Metal','Silver (Physical)'],['Amount','$80,000'],['Weight','~2,500 troy oz'],['Storage','Citadel Vault, Oklahoma City'],['Settlement','T+2'],['WM','Sarah Mensah']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Silver purchase approved ✓\')">Approve</button>'; }},
  'kyc-ibrahim': { title:'KYC Review — Ibrahim Hassan', sub:'Compliance · Passport expiring', body:function(){
    return '<div style="background:var(--red-pale);color:var(--red);border-radius:var(--r);padding:10px 14px;font-size:.8rem;margin-bottom:14px;">⚠ Passport expires May 12, 2026. Trading will pause at expiry if not renewed.</div>' +
    rowCard([['Client','Ibrahim Hassan'],['Issue','Passport expiry'],['Expiry date','May 12, 2026'],['Days remaining','31 days'],['Last reminder','Apr 3, 2026'],['WM','Sarah Mensah']]) +
    '<div class="sm-fld" style="margin-top:14px;"><label class="sm-lbl">Admin note</label><textarea class="sm-inp" rows="2" style="resize:none;" placeholder="Add a note..."></textarea></div>';
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Reminder sent ✓\')">Send Reminder</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'KYC cleared ✓\')">Mark Cleared</button>'; }},
  'order-bridge': { title:'Bridge Loan Fund III — Emeka Okafor', sub:'Private Credit allocation · $250,000', body:function(){
    return rowCard([['Client','Emeka Okafor'],['Fund','Bridge Loan Fund III'],['Type','Private Credit'],['Amount','$250,000'],['Target return','10.5% net IRR'],['Deadline','Apr 24, 2026'],['Authorisation','Client authorised ✓'],['WM','Sarah Mensah']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Allocation approved ✓\')">Approve</button>'; }},
  'metals-add': { title:'Add Metal Purchase', sub:'Log a new gold or silver purchase request', body:function(){
    return '<div class="sm-fld"><label class="sm-lbl">Client</label><select class="sm-sel"><option>Priya Sharma</option><option>Emeka Okafor</option><option>Fatima Al-Rashid</option><option>Ibrahim Hassan</option></select></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Metal</label><select class="sm-sel"><option>Gold (Physical)</option><option>Silver (Physical)</option><option>Gold ETF (IAU)</option><option>Platinum</option></select></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Amount (USD)</label><input class="sm-inp" placeholder="e.g. $25,000"></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Vault / Storage</label><select class="sm-sel"><option>Citadel Vault, Oklahoma City</option><option>Citadel Vault, Oklahoma City</option><option>Citadel Vault, Oklahoma City</option><option>Citadel Vault, Oklahoma City</option></select></div>' +
    '<div class="sm-fld"><label class="sm-lbl">Settlement</label><input class="sm-inp" value="T+2"></div>';
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Cancel</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Purchase request added ✓\')">Add Request</button>'; }},
  'metal-priya': { title:'Gold — Priya Sharma', sub:'$25,000 · Citadel Vault, Oklahoma City', body:function(){
    return rowCard([['Client','Priya Sharma'],['Metal','Gold (Physical)'],['Amount','$25,000'],['Weight','~12 troy oz'],['Purity','99.99% fine'],['Vault','London, UK'],['Settlement','T+2'],['Annual storage','0.15% p.a.'],['Status','Pending Approval']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Approved ✓\')">Approve</button>'; }},
  'metal-fatima': { title:'Silver — Fatima Al-Rashid', sub:'$80,000 · Citadel Vault, Oklahoma City', body:function(){
    return rowCard([['Client','Fatima Al-Rashid'],['Metal','Silver (Physical)'],['Amount','$80,000'],['Weight','~2,500 oz'],['Vault','Zurich, Switzerland'],['Settlement','T+2'],['Status','Pending Approval']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Approved ✓\')">Approve</button>'; }},
  'metal-ibrahim': { title:'Gold — Ibrahim Hassan', sub:'$150,000 · Citadel Vault, Oklahoma City', body:function(){
    return rowCard([['Client','Ibrahim Hassan'],['Metal','Gold (Physical)'],['Amount','$150,000'],['Weight','~72 oz'],['Vault','London, UK'],['Settlement','T+2'],['Status','Pending Approval']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Approved ✓\')">Approve</button>'; }},
  'metal-emeka': { title:'Gold — Emeka Okafor', sub:'$200,000 · Citadel Vault, Oklahoma City', body:function(){
    return rowCard([['Client','Emeka Okafor'],['Metal','Gold (Physical)'],['Amount','$200,000'],['Weight','~96 oz'],['Vault','Singapore'],['Settlement','T+2'],['Status','Approved ✓']]) +
    '<div style="background:var(--green-pale);color:var(--green);border-radius:var(--r);padding:10px 14px;font-size:.8rem;margin-top:12px;">Purchase approved and vault instruction issued.</div>';
  }, foot:function(){ return '<button class="sm-btn pri" onclick="saCloseSlide()">Close</button>'; }},
  'wm-app-james': { title:'WM Application — James Okonkwo', sub:'New wealth manager onboarding', body:function(){
    return rowCard([['Name','James Okonkwo'],['Regulation','FCA-registered'],['Experience','8 years'],['Specialisation','HNW · Cross-border'],['Clients (est.)','12'],['Applied','Apr 10, 2026']]) +
    '<div class="sm-fld" style="margin-top:14px;"><label class="sm-lbl">Admin note</label><textarea class="sm-inp" rows="2" style="resize:none;"></textarea></div>';
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Application approved ✓\')">Approve</button>'; }},
  'wm-trade-sarah': { title:'Trade Batch — Sarah Mensah', sub:'8 orders · Apr 11, 2026', body:function(){
    return rowCard([['WM','Sarah Mensah'],['Orders','8 instructions'],['Asset types','Equities, T-Bills, Gold'],['Total value','~$875,000'],['All client-authorised','Yes'],['Submitted','Apr 11, 2026']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'All 8 orders approved ✓\')">Approve All</button>'; }},
  'wm-plan-upgrade': { title:'Plan Upgrade — David Nwosu', sub:'Starter → Growth ($29/mo)', body:function(){
    return rowCard([['WM','David Nwosu'],['Current plan','Starter (Free)'],['Requested plan','Growth ($29/mo)'],['Billing','Monthly · Card on file'],['Requested','Apr 9, 2026']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Deny</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Plan upgraded ✓\')">Approve Upgrade</button>'; }},
  're-add': { title:'Add Property Listing', sub:'Real Estate · Airbnb · Furnished Finder', body:function(){
    _slideImgs['re-new'] = []; return reImgFormHtml('re-new','') +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Property Details</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Listing Title <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-name" placeholder="e.g. Modern Stylish Home"></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Full Address <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-address" placeholder="e.g. 458 N 7th Street, San Jose, CA 95112"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Neighbourhood</label><input class="sm-inp" id="re-neighbourhood" placeholder="e.g. Japantown / Northside"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Property Type <span style="color:var(--red);">*</span></label><select class="sm-sel" id="re-proptype"><option>Entire Rental Unit</option><option>Private Room</option><option>Multi-Family</option><option>Commercial</option><option>Mixed Use</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Unit / Listing Type</label><input class="sm-inp" id="re-unittype" placeholder="e.g. Entire Rental Unit"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Furnished Status</label><select class="sm-sel" id="re-furnished"><option selected>Fully Furnished</option><option>Semi-Furnished</option><option>Unfurnished</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Layout (beds · baths)</label><input class="sm-inp" id="re-beds" placeholder="e.g. 1 Bedroom · 1 Queen Bed · 1 Bath"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Square Footage</label><input class="sm-inp" id="re-sqft" placeholder="e.g. 650 sqft"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">About the Unit</div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description</label><textarea class="sm-inp" id="re-about" rows="4" style="resize:none;"></textarea></div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Rental Platform &amp; Performance</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Listed on platform</label><select class="sm-sel" id="re-platform"><option selected>Airbnb</option><option>Furnished Finder</option><option>Both (Airbnb + Furnished Finder)</option><option>Direct / Off-platform</option><option>Not listed</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Airbnb Rating (out of 5)</label><input class="sm-inp" id="re-rating" placeholder="e.g. 4.85"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">No. of Reviews</label><input class="sm-inp" id="re-reviews" placeholder="e.g. 13"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Avg Nightly Rate</label><input class="sm-inp" id="re-nightly" placeholder="e.g. $160/night"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Avg Monthly Revenue</label><input class="sm-inp" id="re-monthly" placeholder="e.g. $4,800/mo"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Projected Cap Rate</label><input class="sm-inp" id="re-caprate" placeholder="e.g. 5%"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Investment Figures</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Listing / Property Price</label><input class="sm-inp" id="re-listprice" placeholder="e.g. $850,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Investment <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-min" placeholder="e.g. $5,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Interest Rate (p.a.)</label><input class="sm-inp" id="re-rate" placeholder="e.g. 4.5%"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Investment Term</label><select class="sm-sel" id="re-term"><option selected>1 Year</option><option>2 Years</option><option>3 Years</option><option>Open-ended</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Total Raise / Capacity</label><input class="sm-inp" id="re-capacity" placeholder="e.g. $500,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Maturity Structure</label><input class="sm-inp" id="re-maturity" value="Capital + interest returned at end of term"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Visibility &amp; Status</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation</label><select class="sm-sel" id="re-accred"><option selected>No — Open to all</option><option>Yes — Accredited only</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="re-vis"><option selected>All clients & WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Key Highlights</label><input class="sm-inp" id="re-highlights" placeholder="e.g. Corner lot, Recently renovated"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status <span style="color:var(--red);">*</span></label><select class="sm-sel" id="re-status"><option selected>Open</option><option>Closed</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Publish Listing',"saCloseSlide();showToast('Property listed \u2713')"); }},
  're-edit-unit-a': { title:'Edit — Modern Stylish Home', sub:'Entire Rental Unit · San Jose, CA', body:function(){
    _slideImgs['re-a'] = []; return reImgFormHtml('re-a','https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/873bf710-2bdb-47e9-97a8-0e7cc4b142b9.avif') +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Property Details</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Listing Title <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-name" value="Modern Stylish Home" placeholder="e.g. Modern Stylish Home"></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Full Address <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-address" value="458 N 7th Street, San Jose, CA 95112" placeholder="e.g. 458 N 7th Street, San Jose, CA 95112"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Neighbourhood</label><input class="sm-inp" id="re-neighbourhood" value="Japantown / Northside" placeholder="e.g. Japantown / Northside"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Property Type <span style="color:var(--red);">*</span></label><select class="sm-sel" id="re-proptype"><option selected>Entire Rental Unit</option><option>Private Room</option><option>Multi-Family</option><option>Commercial</option><option>Mixed Use</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Unit / Listing Type</label><input class="sm-inp" id="re-unittype" value="Entire Rental Unit" placeholder="e.g. Entire Rental Unit"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Furnished Status</label><select class="sm-sel" id="re-furnished"><option selected>Fully Furnished</option><option>Semi-Furnished</option><option>Unfurnished</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Layout (beds · baths)</label><input class="sm-inp" id="re-beds" value="1 Bedroom · 1 Queen Bed · 1 Bath" placeholder="e.g. 1 Bedroom · 1 Queen Bed · 1 Bath"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Square Footage</label><input class="sm-inp" id="re-sqft" value="650 sqft" placeholder="e.g. 650 sqft"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">About the Unit</div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description</label><textarea class="sm-inp" id="re-about" rows="4" style="resize:none;">Modern Stylish Home is a fully furnished entire rental unit at 458 N 7th Street, San Jose — in the heart of Japantown/Northside. The space features 1 bedroom with a queen bed, 1 private bathroom, contemporary design, and a fully equipped kitchen. Ideal for business travelers and Silicon Valley visitors. Located minutes from SAP Center, San Jose State University, and major tech campuses including Apple, Cisco, and Adobe.</textarea></div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Rental Platform &amp; Performance</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Listed on platform</label><select class="sm-sel" id="re-platform"><option selected>Airbnb</option><option>Furnished Finder</option><option>Both (Airbnb + Furnished Finder)</option><option>Direct / Off-platform</option><option>Not listed</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Airbnb Rating (out of 5)</label><input class="sm-inp" id="re-rating" value="4.85" placeholder="e.g. 4.85"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">No. of Reviews</label><input class="sm-inp" id="re-reviews" value="13" placeholder="e.g. 13"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Avg Nightly Rate</label><input class="sm-inp" id="re-nightly" value="$160/night" placeholder="e.g. $160/night"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Avg Monthly Revenue</label><input class="sm-inp" id="re-monthly" value="$4,800/mo" placeholder="e.g. $4,800/mo"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Projected Cap Rate</label><input class="sm-inp" id="re-caprate" value="5%" placeholder="e.g. 5%"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Investment Figures</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Listing / Property Price</label><input class="sm-inp" id="re-listprice" value="$850,000" placeholder="e.g. $850,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Investment <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-min" value="$5,000" placeholder="e.g. $5,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Interest Rate (p.a.)</label><input class="sm-inp" id="re-rate" value="4.5%" placeholder="e.g. 4.5%"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Investment Term</label><select class="sm-sel" id="re-term"><option selected>1 Year</option><option>2 Years</option><option>3 Years</option><option>Open-ended</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Total Raise / Capacity</label><input class="sm-inp" id="re-capacity" value="$500,000" placeholder="e.g. $500,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Maturity Structure</label><input class="sm-inp" id="re-maturity" value="Capital + interest returned at end of term"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Visibility &amp; Status</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation</label><select class="sm-sel" id="re-accred"><option selected>No — Open to all</option><option>Yes — Accredited only</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="re-vis"><option selected>All clients & WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Key Highlights</label><input class="sm-inp" id="re-highlights" value="Corner unit, Fully furnished, 4.85 ★ Airbnb, SAP Center 5 min" placeholder="e.g. Corner lot, Recently renovated"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status <span style="color:var(--red);">*</span></label><select class="sm-sel" id="re-status"><option selected>Open</option><option>Closed</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes',"saCloseSlide();showToast('Changes saved \u2713')"); }},
  're-edit-unit-b': { title:'Edit — Private Room 1 — Cozy Stay', sub:'Private Room · San Jose, CA', body:function(){
    _slideImgs['re-b'] = []; return reImgFormHtml('re-b','https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/94a99706-bdcf-48a2-94b9-0d5590b1b55c.avif') +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Property Details</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Listing Title <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-name" value="Private Room 1 — Cozy Stay" placeholder="e.g. Modern Stylish Home"></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Full Address <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-address" value="458 N 7th Street, San Jose, CA 95112" placeholder="e.g. 458 N 7th Street, San Jose, CA 95112"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Neighbourhood</label><input class="sm-inp" id="re-neighbourhood" value="Japantown / Northside" placeholder="e.g. Japantown / Northside"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Property Type <span style="color:var(--red);">*</span></label><select class="sm-sel" id="re-proptype"><option>Entire Rental Unit</option><option selected>Private Room</option><option>Multi-Family</option><option>Commercial</option><option>Mixed Use</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Unit / Listing Type</label><input class="sm-inp" id="re-unittype" value="Private Room" placeholder="e.g. Entire Rental Unit"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Furnished Status</label><select class="sm-sel" id="re-furnished"><option selected>Fully Furnished</option><option>Semi-Furnished</option><option>Unfurnished</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Layout (beds · baths)</label><input class="sm-inp" id="re-beds" value="1 Queen Bed · Shared Bath" placeholder="e.g. 1 Bedroom · 1 Queen Bed · 1 Bath"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Square Footage</label><input class="sm-inp" id="re-sqft" placeholder="e.g. 650 sqft"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">About the Unit</div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description</label><textarea class="sm-inp" id="re-about" rows="4" style="resize:none;">A cozy private room in the heart of San Jose. Shared bathroom. Ideal for solo travelers visiting Silicon Valley.</textarea></div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Rental Platform &amp; Performance</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Listed on platform</label><select class="sm-sel" id="re-platform"><option selected>Airbnb</option><option>Furnished Finder</option><option>Both (Airbnb + Furnished Finder)</option><option>Direct / Off-platform</option><option>Not listed</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Airbnb Rating (out of 5)</label><input class="sm-inp" id="re-rating" value="4.9" placeholder="e.g. 4.85"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">No. of Reviews</label><input class="sm-inp" id="re-reviews" value="10" placeholder="e.g. 13"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Avg Nightly Rate</label><input class="sm-inp" id="re-nightly" placeholder="e.g. $160/night"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Avg Monthly Revenue</label><input class="sm-inp" id="re-monthly" placeholder="e.g. $4,800/mo"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Projected Cap Rate</label><input class="sm-inp" id="re-caprate" placeholder="e.g. 5%"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Investment Figures</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Listing / Property Price</label><input class="sm-inp" id="re-listprice" placeholder="e.g. $850,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Investment <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-min" value="$1,000" placeholder="e.g. $5,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Interest Rate (p.a.)</label><input class="sm-inp" id="re-rate" placeholder="e.g. 4.5%"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Investment Term</label><select class="sm-sel" id="re-term"><option selected>1 Year</option><option>2 Years</option><option>3 Years</option><option>Open-ended</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Total Raise / Capacity</label><input class="sm-inp" id="re-capacity" placeholder="e.g. $500,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Maturity Structure</label><input class="sm-inp" id="re-maturity" value="Capital + interest returned at end of term"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Visibility &amp; Status</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation</label><select class="sm-sel" id="re-accred"><option selected>No — Open to all</option><option>Yes — Accredited only</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="re-vis"><option selected>All clients & WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Key Highlights</label><input class="sm-inp" id="re-highlights" placeholder="e.g. Corner lot, Recently renovated"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status <span style="color:var(--red);">*</span></label><select class="sm-sel" id="re-status"><option>Open</option><option selected>Closed</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes',"saCloseSlide();showToast('Changes saved \u2713')"); }},
  're-edit-unit-c': { title:'Edit — Private Room — Elegant Stay', sub:'Private Room · San Jose, CA', body:function(){
    _slideImgs['re-c'] = []; return reImgFormHtml('re-c','https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/21d22495-9c19-4cfa-aa18-327be40c558f.avif') +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Property Details</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Listing Title <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-name" value="Private Room — Elegant Stay" placeholder="e.g. Modern Stylish Home"></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Full Address <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-address" value="458 N 7th Street, San Jose, CA 95112" placeholder="e.g. 458 N 7th Street, San Jose, CA 95112"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Neighbourhood</label><input class="sm-inp" id="re-neighbourhood" value="Japantown / Northside" placeholder="e.g. Japantown / Northside"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Property Type <span style="color:var(--red);">*</span></label><select class="sm-sel" id="re-proptype"><option>Entire Rental Unit</option><option selected>Private Room</option><option>Multi-Family</option><option>Commercial</option><option>Mixed Use</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Unit / Listing Type</label><input class="sm-inp" id="re-unittype" value="Private Room" placeholder="e.g. Entire Rental Unit"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Furnished Status</label><select class="sm-sel" id="re-furnished"><option selected>Fully Furnished</option><option>Semi-Furnished</option><option>Unfurnished</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Layout (beds · baths)</label><input class="sm-inp" id="re-beds" value="1 Queen Bed · Shared Bath" placeholder="e.g. 1 Bedroom · 1 Queen Bed · 1 Bath"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Square Footage</label><input class="sm-inp" id="re-sqft" placeholder="e.g. 650 sqft"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">About the Unit</div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description</label><textarea class="sm-inp" id="re-about" rows="4" style="resize:none;">An elegant private room in a shared San Jose residence. Comfortable furnishings, shared bathroom. Great for short stays near downtown.</textarea></div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Rental Platform &amp; Performance</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Listed on platform</label><select class="sm-sel" id="re-platform"><option selected>Airbnb</option><option>Furnished Finder</option><option>Both (Airbnb + Furnished Finder)</option><option>Direct / Off-platform</option><option>Not listed</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Airbnb Rating (out of 5)</label><input class="sm-inp" id="re-rating" value="4.83" placeholder="e.g. 4.85"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">No. of Reviews</label><input class="sm-inp" id="re-reviews" value="6" placeholder="e.g. 13"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Avg Nightly Rate</label><input class="sm-inp" id="re-nightly" placeholder="e.g. $160/night"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Avg Monthly Revenue</label><input class="sm-inp" id="re-monthly" placeholder="e.g. $4,800/mo"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Projected Cap Rate</label><input class="sm-inp" id="re-caprate" placeholder="e.g. 5%"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Investment Figures</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Listing / Property Price</label><input class="sm-inp" id="re-listprice" placeholder="e.g. $850,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Investment <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-min" value="$1,000" placeholder="e.g. $5,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Interest Rate (p.a.)</label><input class="sm-inp" id="re-rate" placeholder="e.g. 4.5%"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Investment Term</label><select class="sm-sel" id="re-term"><option selected>1 Year</option><option>2 Years</option><option>3 Years</option><option>Open-ended</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Total Raise / Capacity</label><input class="sm-inp" id="re-capacity" placeholder="e.g. $500,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Maturity Structure</label><input class="sm-inp" id="re-maturity" value="Capital + interest returned at end of term"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Visibility &amp; Status</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation</label><select class="sm-sel" id="re-accred"><option selected>No — Open to all</option><option>Yes — Accredited only</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="re-vis"><option selected>All clients & WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Key Highlights</label><input class="sm-inp" id="re-highlights" placeholder="e.g. Corner lot, Recently renovated"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status <span style="color:var(--red);">*</span></label><select class="sm-sel" id="re-status"><option>Open</option><option selected>Closed</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes',"saCloseSlide();showToast('Changes saved \u2713')"); }},
  're-edit-unit-d': { title:'Edit — Private Room 2 — Modern Stay', sub:'Private Room · San Jose, CA', body:function(){
    _slideImgs['re-d'] = []; return reImgFormHtml('re-d','https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/9c9f6d96-d7a9-4d44-b200-f343806401f9.avif') +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Property Details</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Listing Title <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-name" value="Private Room 2 — Modern Stay" placeholder="e.g. Modern Stylish Home"></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Full Address <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-address" value="458 N 7th Street, San Jose, CA 95112" placeholder="e.g. 458 N 7th Street, San Jose, CA 95112"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Neighbourhood</label><input class="sm-inp" id="re-neighbourhood" value="Japantown / Northside" placeholder="e.g. Japantown / Northside"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Property Type <span style="color:var(--red);">*</span></label><select class="sm-sel" id="re-proptype"><option>Entire Rental Unit</option><option selected>Private Room</option><option>Multi-Family</option><option>Commercial</option><option>Mixed Use</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Unit / Listing Type</label><input class="sm-inp" id="re-unittype" value="Private Room" placeholder="e.g. Entire Rental Unit"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Furnished Status</label><select class="sm-sel" id="re-furnished"><option selected>Fully Furnished</option><option>Semi-Furnished</option><option>Unfurnished</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Layout (beds · baths)</label><input class="sm-inp" id="re-beds" value="1 Queen Bed · Shared Bath" placeholder="e.g. 1 Bedroom · 1 Queen Bed · 1 Bath"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Square Footage</label><input class="sm-inp" id="re-sqft" placeholder="e.g. 650 sqft"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">About the Unit</div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description</label><textarea class="sm-inp" id="re-about" rows="4" style="resize:none;">A modern private room in San Jose with contemporary decor and a queen bed. Shared bathroom. Close to Silicon Valley employers.</textarea></div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Rental Platform &amp; Performance</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Listed on platform</label><select class="sm-sel" id="re-platform"><option selected>Airbnb</option><option>Furnished Finder</option><option>Both (Airbnb + Furnished Finder)</option><option>Direct / Off-platform</option><option>Not listed</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Airbnb Rating (out of 5)</label><input class="sm-inp" id="re-rating" value="4.9" placeholder="e.g. 4.85"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">No. of Reviews</label><input class="sm-inp" id="re-reviews" value="10" placeholder="e.g. 13"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Avg Nightly Rate</label><input class="sm-inp" id="re-nightly" placeholder="e.g. $160/night"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Avg Monthly Revenue</label><input class="sm-inp" id="re-monthly" placeholder="e.g. $4,800/mo"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Projected Cap Rate</label><input class="sm-inp" id="re-caprate" placeholder="e.g. 5%"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Investment Figures</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Listing / Property Price</label><input class="sm-inp" id="re-listprice" placeholder="e.g. $850,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Minimum Investment <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-min" value="$1,000" placeholder="e.g. $5,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Interest Rate (p.a.)</label><input class="sm-inp" id="re-rate" placeholder="e.g. 4.5%"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Investment Term</label><select class="sm-sel" id="re-term"><option selected>1 Year</option><option>2 Years</option><option>3 Years</option><option>Open-ended</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Total Raise / Capacity</label><input class="sm-inp" id="re-capacity" placeholder="e.g. $500,000"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Maturity Structure</label><input class="sm-inp" id="re-maturity" value="Capital + interest returned at end of term"></div>` +
    `</div>` +
    `<div style="border-top:1px solid var(--cream-mid);margin:14px 0 14px;"></div><div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Visibility &amp; Status</div>` +
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">` +
    `<div class="sm-fld"><label class="sm-lbl">Accreditation</label><select class="sm-sel" id="re-accred"><option selected>No — Open to all</option><option>Yes — Accredited only</option></select></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="re-vis"><option selected>All clients & WMs</option><option>WMs only</option><option>Matched clients (Elia)</option></select></div>` +
    `<div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Key Highlights</label><input class="sm-inp" id="re-highlights" placeholder="e.g. Corner lot, Recently renovated"></div>` +
    `<div class="sm-fld"><label class="sm-lbl">Status <span style="color:var(--red);">*</span></label><select class="sm-sel" id="re-status"><option>Open</option><option selected>Closed</option><option>Coming Soon</option></select></div>` +
    `</div>`;
  }, foot:function(){ return saSlideFooter('Cancel','Save Changes',"saCloseSlide();showToast('Changes saved \u2713')"); }},

  // ── Approval Queue slides ────────────────────────────────────────
  'ap-gold-priya': { title:'Gold Purchase Review', sub:'Priya Sharma · $25,000 · Pending', body:function(){
    return rowCard([['Client','Priya Sharma'],['Wealth Manager','Sarah Mensah'],['Submitted','Apr 9, 2026 · 09:42 AM'],['Auth','WM instruction + Client email consent']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Purchase Details</div>' +
    rowCard([['Metal','Gold (Physical)'],['Quantity','~12 troy oz'],['Purity','99.99% fine (.9999)'],['Vault','Citadel Vault, Oklahoma City'],['Settlement','T+2'],['Annual storage fee','0.15% per annum'],['Spot price','$2,341.50 / troy oz']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Financial Summary</div>' +
    rowCard([['Purchase amount','$25,000'],['Client wallet balance','$318,000'],['Balance after debit','$293,000']]);
  }, foot:function(){ return saApprovalFooter('ap-gold-priya','Priya Sharma','$25,000'); }},

  'ap-pm-emeka': { title:'Private Market Investment — Termii', sub:'Emeka Okafor · AI Payments Infrastructure · $50,000', body:function(){
    return '<div style="background:var(--blue-pale);border:1px solid rgba(27,79,216,.18);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--blue);margin-bottom:12px;">⏳ Awaiting admin approval · Submitted Apr 10, 2026</div>' +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Client & WM</div>' +
    rowCard([['Client','Emeka Okafor'],['Wealth Manager','Sarah Mensah'],['Accreditation','Verified accredited investor ✓'],['Submitted','Apr 10, 2026'],['Auth reference','Email Apr 10, 2026 — confirmed']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">About Termii</div>' +
    '<div style="font-size:.82rem;color:var(--ink-soft);line-height:1.6;margin-bottom:12px;">Termii prevents transactions like logins, payments, checkouts, fraud alerts, and OTPs from failing — using AI. The company sits at the intersection of communications infrastructure and financial services, providing a mission-critical layer for businesses that cannot afford failed authentications. Headquartered in San Jose, CA.</div>' +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Investment Details</div>' +
    rowCard([['Company','Termii'],['Sector','AI · Payments · Communications Infrastructure'],['HQ','San Jose, California'],['Stage','Growth'],['ARR','$5M annualised'],['Valuation','Private'],['Available allocation','$1,000,000'],['Deal type','Private Equity · SPV via Aidi']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Financial Summary</div>' +
    rowCard([['Investment amount','$50,000'],['Min. investment','$25,000'],['Client wallet balance','$318,000'],['Balance after debit','$268,000'],['Deck','deck.termii.com/pOUU3jsNhA']]);
  }, foot:function(){ return saApprovalFooter('ap-pm-emeka','Emeka Okafor','$50,000'); }},


  'ap-llc-emeka': { title:'LLC Formation Review', sub:'Emeka Okafor · Delaware LLC · $740', body:function(){
    return '<div style="background:#F3E8FF;border:1px solid rgba(124,58,237,.18);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#7C3AED;margin-bottom:12px;">Legal documentation required before formation can proceed.</div>' +
    rowCard([['Client','Emeka Okafor'],['Wealth Manager','Sarah Mensah'],['Submitted','Apr 6, 2026']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Entity Details</div>' +
    rowCard([['Proposed name','Okafor Capital Holdings LLC'],['Jurisdiction','Delaware, USA'],['Management','Member-managed'],['Purpose','Investment Holding'],['Primary owner','Emeka Okafor · 100%']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Formation Fees</div>' +
    rowCard([['State filing fee','$90'],['Aidi formation service','$500'],['Registered agent (1yr)','$150'],['Total billed to client','$740'],['Est. time','3–5 business days']]);
  }, foot:function(){ return saApprovalFooter('ap-llc-emeka','Emeka Okafor','$740'); }},

  'ap-re-priya': { title:'Real Estate Investment Review', sub:'Priya Sharma · Modern Stylish Home · $5,000', body:function(){
    return rowCard([['Client','Priya Sharma'],['Wealth Manager','Sarah Mensah'],['Submitted','Apr 9, 2026'],['Accreditation','Open to all investors']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Property Details</div>' +
    rowCard([['Property','Modern Stylish Home'],['Address','458 N 7th Street, San Jose, CA 95112'],['Type','Entire Rental Unit · Airbnb / Aidi Haven'],['Layout','1 Bedroom · 1 Queen Bed · 1 Bath'],['Rating','★ 4.85 · 13 reviews']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Investment Terms</div>' +
    rowCard([['Amount','$5,000'],['Interest rate','4.5% p.a.'],['Term','1 Year'],['Maturity','Capital + interest at end of term'],['Avg nightly rate','$160/night'],['Avg monthly revenue','$4,800/mo'],['Client wallet balance','$318,000'],['Balance after debit','$313,000']]);
  }, foot:function(){ return saApprovalFooter('ap-re-priya','Priya Sharma','$5,000'); }},

  'ap-plan-priya': { title:'Plan Upgrade — Auto-Approved', sub:'Priya Sharma · Premium → Elite', body:function(){
    return '<div style="background:var(--green-pale);border:1px solid rgba(26,122,94,.2);border-radius:var(--r);padding:12px 14px;font-size:.82rem;color:var(--green);margin-bottom:12px;font-weight:500;">✦ Plan upgrades are automatically approved on payment. This item is for your records only.</div>' +
    rowCard([['Client','Priya Sharma'],['Previous plan','Premium ($4,800/yr)'],['New plan','Elite ($9,600/yr)'],['Effective','Apr 9, 2026'],['Payment','Confirmed via Stripe ✓'],['Invoice','INV-20260409-8821'],['Amount charged','$9,600/yr']]) +
    '<div style="background:var(--cream);border-radius:var(--r);padding:10px 14px;font-size:.78rem;color:var(--ink-muted);">No action required. Client has been automatically upgraded and notified by email.</div>';
  }, foot:function(){
    return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Marked as reviewed ✓\')">Mark Reviewed</button>';
  }},

  'ap-silver-fatima': { title:'Silver Purchase Review', sub:'Fatima Al-Rashid · $80,000 · Pending', body:function(){
    return rowCard([['Client','Fatima Al-Rashid'],['Wealth Manager','Sarah Mensah'],['Submitted','Apr 7, 2026'],['Auth','WM instruction + Client email consent']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Purchase Details</div>' +
    rowCard([['Metal','Silver (Physical)'],['Quantity','~2,500 troy oz'],['Purity','99.99% fine (.9999)'],['Vault','Citadel Vault, Oklahoma City'],['Settlement','T+2'],['Annual storage fee','0.15% per annum'],['Spot price','$27.84 / troy oz']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Financial Summary</div>' +
    rowCard([['Purchase amount','$80,000'],['Client wallet balance','$412,000'],['Balance after debit','$332,000']]);
  }, foot:function(){ return saApprovalFooter('ap-silver-fatima','Fatima Al-Rashid','$80,000'); }},


  // ── Advisor slides ──────────────────────────────────────────────
  'adv-sarah': { title:'Sarah Mensah', sub:'Meridian Private Wealth · CFA · FCA Licensed', body:function(){
    return rowCard([['Full name','Sarah Mensah, CFA'],['Firm','Meridian Private Wealth'],['Experience','10+ years'],['Licence','FCA (Financial Conduct Authority) ✓'],['Licence no.','FCA-2019-SM4841'],['Status','Active']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Portfolio</div>' +
    rowCard([['Total clients','24 active clients'],['AUM','$284.7M'],['Avg client AUM','$11.9M'],['Specialisation','HNW · Cross-border · Real estate'],['Joined Aidi','Feb 2022']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Profile viewed ✓\')">View Full Profile</button>'; }},

  'adv-james': { title:'James Osei', sub:'Aidi Direct · CFP · SEC Licensed', body:function(){
    return rowCard([['Full name','James Osei, CFP'],['Firm','Aidi Direct'],['Experience','12 years'],['Licence','SEC Registered Investment Advisor ✓'],['Licence no.','SEC-IA-2018-JO7723'],['Status','Active']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Portfolio</div>' +
    rowCard([['Total clients','31 active clients'],['AUM','$412M'],['Avg client AUM','$13.3M'],['Specialisation','US equities · Private markets · T-Bills'],['Joined Aidi','Mar 2021']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Profile viewed ✓\')">View Full Profile</button>'; }},

  'adv-amara': { title:'Amara Diallo', sub:'Continental Wealth · CAIA · FSCA ⚠ Renewal Due', body:function(){
    return '<div style="background:var(--gold-pale);border:1px solid rgba(200,150,46,.25);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#8a6520;margin-bottom:12px;">⚠ FSCA licence renewal is overdue. Advisor activity may need to be paused until renewed.</div>' +
    rowCard([['Full name','Amara Diallo, CAIA'],['Firm','Continental Wealth'],['Experience','7 years'],['Licence','FSCA ⚠ — Renewal overdue'],['Status','Under Review']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Portfolio</div>' +
    rowCard([['Total clients','18 active clients'],['AUM','$197M'],['Action required','Provide updated FSCA certificate']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Notice sent ✓\')">Send Notice</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Status updated ✓\')">Mark Compliant</button>'; }},

  'adv-pending': { title:'New WM Application', sub:'Pending · Submitted today · Unverified', body:function(){
    return '<div style="background:var(--cream-mid);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--ink-soft);margin-bottom:12px;">New application submitted today. Licence and background check pending.</div>' +
    rowCard([['Application date','Today'],['Firm','—'],['Licence submitted','Not yet uploaded'],['Clients','0'],['Status','Pending Review']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Required Actions</div>' +
    '<div style="font-size:.82rem;color:var(--ink-soft);line-height:1.7;padding:10px 14px;background:var(--cream);border-radius:var(--r);">1. Verify licence with regulator<br>2. Run background check<br>3. Confirm firm details<br>4. Approve or deny application</div>';
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Application denied\')">Deny</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Advisor approved ✓\')">Approve</button>'; }},

  // ── Entity slides ──────────────────────────────────────────────
  'ent-emeka-llc': { title:'Delaware LLC — Emeka Okafor', sub:'Pending formation · Legal review in progress', body:function(){
    return '<div style="background:#F3E8FF;border:1px solid rgba(124,58,237,.18);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#7C3AED;margin-bottom:12px;">Legal review in progress. Formation can proceed once documentation is verified.</div>' +
    rowCard([['Client','Emeka Okafor'],['WM','Sarah Mensah'],['Entity type','LLC (Limited Liability Company)'],['Proposed name','Okafor Capital Holdings LLC'],['Jurisdiction','Delaware, USA'],['Management','Member-managed'],['Purpose','Investment Holding'],['Submitted','Apr 6, 2026']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Formation Fees</div>' +
    rowCard([['State filing','$90'],['Aidi service','$500'],['Registered agent','$150'],['Total','$740']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Returned for review\')">Request Docs</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Entity approved ✓\')">Approve Formation</button>'; }},

  'ent-fatima-trust': { title:'Revocable Family Trust — Fatima Al-Rashid', sub:'Active · Legal reviewed ✓', body:function(){
    return '<div style="background:var(--green-pale);border:1px solid rgba(26,122,94,.2);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--green);margin-bottom:12px;">✓ Trust deed reviewed and approved. Entity is active.</div>' +
    rowCard([['Client','Fatima Al-Rashid'],['WM','Sarah Mensah'],['Entity type','Revocable Family Trust'],['Jurisdiction','California, USA'],['Purpose','Estate Planning / Wealth Transfer'],['Filed','Mar 28, 2026'],['Legal review','Fatou Diarra — Approved ✓'],['Status','Active']]);
  }, foot:function(){ return '<button class="sm-btn pri" onclick="saCloseSlide()">Close</button>'; }},

  'ent-kwame': { title:'Kwame Boateng — Individual', sub:'Onboarding · No entity structure', body:function(){
    return '<div style="background:var(--gold-pale);border:1px solid rgba(200,150,46,.2);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#8a6520;margin-bottom:12px;">KYC documents missing. Account partially restricted until onboarding is complete.</div>' +
    rowCard([['Client','Kwame Boateng'],['WM','Sarah Mensah'],['Entity','Individual (no structure)'],['Submitted','Apr 8, 2026'],['KYC status','5 documents missing'],['Account status','Partially restricted']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Missing Documents</div>' +
    '<div style="font-size:.82rem;color:var(--ink-soft);line-height:1.8;padding:10px 14px;background:var(--cream);border-radius:var(--r);">• Passport / Government ID<br>• Proof of Address<br>• Source of Funds Declaration<br>• Risk Profile Form<br>• Suitability Assessment</div>';
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Reminder sent ✓\')">Send Reminder</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Escalated ✓\')">Escalate</button>'; }},

  // ── Client slides ──────────────────────────────────────────────
  'cli-emeka': { title:'Emeka Okafor', sub:'High risk · KYC Alert · Sarah Mensah', body:function(){
    return '<div style="background:var(--red-pale);border:1px solid rgba(192,57,43,.15);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--red);margin-bottom:12px;">⚠ KYC alert — review required before processing new transactions.</div>' +
    rowCard([['Client','Emeka Okafor'],['Wealth Manager','Sarah Mensah'],['AUM','$18.4M'],['Entities','LLC + Trust'],['Risk profile','High'],['KYC status','Alert — review required'],['Account status','Active (restricted)']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Recent Activity</div>' +
    rowCard([['Last trade','Apr 8, 2026 — Bridge Loan Fund III $250K'],['Pending','LLC formation in progress'],['Next review','Annual review due Jun 2026']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Flag raised ✓\')">Flag Account</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'KYC cleared ✓\')">Clear KYC</button>'; }},

  'cli-fatima': { title:'Fatima Al-Rashid', sub:'$31.2M AUM · Review Due · Sarah Mensah', body:function(){
    return rowCard([['Client','Fatima Al-Rashid'],['Wealth Manager','Sarah Mensah'],['AUM','$31.2M'],['Entities','Trust + LLC'],['KYC','Clean ✓'],['Account status','Active'],['Annual review','Due — upcoming']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Holdings</div>' +
    rowCard([['Gold (Physical)','$80,000 — Citadel Vault'],['Family Trust','Active — Revocable'],['Risk profile','Medium']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Review scheduled ✓\')">Schedule Review</button>'; }},

  'cli-kwame': { title:'Kwame Boateng', sub:'Onboarding · 5 docs missing · Sarah Mensah', body:function(){
    return '<div style="background:var(--gold-pale);border:1px solid rgba(200,150,46,.2);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#8a6520;margin-bottom:12px;">5 required documents not yet submitted. Account restricted to read-only.</div>' +
    rowCard([['Client','Kwame Boateng'],['Wealth Manager','Sarah Mensah'],['AUM','$8.9M'],['Entity','Individual'],['KYC status','5 documents missing'],['Account','Partially restricted']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Missing Items</div>' +
    '<div style="font-size:.82rem;color:var(--ink-soft);line-height:1.8;padding:10px 14px;background:var(--cream);border-radius:var(--r);">• Passport / Government ID<br>• Proof of Address<br>• Source of Funds Declaration<br>• Risk Profile Form<br>• Suitability Assessment</div>';
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Reminder sent ✓\')">Send Reminder</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'KYC cleared ✓\')">Mark KYC Complete</button>'; }},

  'cli-priya': { title:'Priya Sharma', sub:'Active · Clean KYC · Sarah Mensah', body:function(){
    return rowCard([['Client','Priya Sharma'],['Wealth Manager','Sarah Mensah'],['AUM','$4.2M'],['Entity','Individual'],['KYC','Clean ✓'],['Account','Active'],['Plan','Elite ($9,600/yr)']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Recent Activity</div>' +
    rowCard([['Gold purchase','$25,000 — Apr 9, 2026 — Pending'],['RE investment','Modern Stylish Home — $5,000 — Apr 9'],['Plan upgrade','Premium → Elite — Apr 9, 2026']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide()">Close</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'View navigated\')">View Full Profile</button>'; }},

  'cli-ibrahim': { title:'Ibrahim Hassan', sub:'$12.1M AUM · Passport Expiring · Sarah Mensah', body:function(){
    return '<div style="background:var(--gold-pale);border:1px solid rgba(200,150,46,.2);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#8a6520;margin-bottom:12px;">⚠ Passport expires May 12, 2026 — 32 days remaining. Trading will be paused at expiry if not renewed.</div>' +
    rowCard([['Client','Ibrahim Hassan'],['Wealth Manager','Sarah Mensah'],['AUM','$12.1M'],['Entity','Individual'],['KYC','Passport expiring'],['Account','Active (warning)']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Action Required</div>' +
    rowCard([['Passport expiry','May 12, 2026'],['Days remaining','32 days'],['Last reminder','Apr 3, 2026'],['Assigned to','Marcus Osei']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Reminder sent ✓\')">Send Reminder</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'KYC cleared ✓\')">Mark KYC Updated</button>'; }},

  // ── Legal slides ──────────────────────────────────────────────
  'legal-emeka-llc': { title:'LLC Operating Agreement — Emeka Okafor', sub:'Under Review · Entity · Apr 6, 2026', body:function(){
    return '<div style="background:#F3E8FF;border:1px solid rgba(124,58,237,.18);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#7C3AED;margin-bottom:12px;">Document is under legal review. Approve to proceed with entity formation.</div>' +
    rowCard([['Client','Emeka Okafor'],['Document','LLC Operating Agreement'],['Type','Entity'],['Submitted','Apr 6, 2026'],['Reviewed by','Dr. Amara Nwosu'],['Status','Under Review']]) +
    '<div style="background:var(--cream);border-radius:var(--r);padding:12px 14px;font-size:.8rem;color:var(--ink-soft);">Document covers: member rights, management structure, profit distribution, dissolution terms, and transfer restrictions for Okafor Capital Holdings LLC.</div>';
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Returned for revision\')">Request Revision</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Agreement approved ✓\')">Approve</button>'; }},

  'legal-fatima-trust': { title:'Trust Deed — Fatima Al-Rashid', sub:'Approved · Trust · Mar 28, 2026', body:function(){
    return rowCard([['Client','Fatima Al-Rashid'],['Document','Trust Deed — Revocable Family Trust'],['Type','Trust'],['Signed','Mar 28, 2026'],['Reviewed by','Fatou Diarra'],['Status','Approved ✓']]);
  }, foot:function(){ return '<button class="sm-btn pri" onclick="saCloseSlide()">Close</button>'; }},

  'legal-priya-advisory': { title:'Investment Advisory Agreement — Priya Sharma', sub:'Approved · Advisory · Jan 12, 2026', body:function(){
    return rowCard([['Client','Priya Sharma'],['Document','Investment Advisory Agreement'],['Type','Advisory'],['Signed','Jan 12, 2026'],['Reviewed by','Dr. Amara Nwosu'],['Status','Approved ✓'],['Renewal','Jan 12, 2027']]);
  }, foot:function(){ return '<button class="sm-btn pri" onclick="saCloseSlide()">Close</button>'; }},

  'legal-ibrahim-consent': { title:'Cross-Border Data Consent — Ibrahim Hassan', sub:'Approved · Compliance · Feb 20, 2026', body:function(){
    return rowCard([['Client','Ibrahim Hassan'],['Document','Cross-Border Data Consent'],['Type','Compliance'],['Signed','Feb 20, 2026'],['Reviewed by','Fatou Diarra'],['Status','Approved ✓'],['Jurisdiction','UK / UAE / Nigeria']]);
  }, foot:function(){ return '<button class="sm-btn pri" onclick="saCloseSlide()">Close</button>'; }},

  // ── Compliance slides ─────────────────────────────────────────
  'comp-ibrahim-passport': { title:'Passport Expiring — Ibrahim Hassan', sub:'KYC · High Priority · 32 days remaining', body:function(){
    return '<div style="background:var(--red-pale);border:1px solid rgba(192,57,43,.15);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--red);margin-bottom:12px;">High priority — passport expires May 12, 2026. Trading will pause at expiry.</div>' +
    rowCard([['Client','Ibrahim Hassan'],['Issue','Passport / ID expiry'],['Expiry date','May 12, 2026'],['Days remaining','32 days'],['Last reminder sent','Apr 3, 2026'],['Assigned to','Marcus Osei'],['Category','KYC']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Reminder sent ✓\')">Send Reminder</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Cleared ✓\')">Mark Resolved</button>'; }},

  'comp-kwame-docs': { title:'Missing Documents — Kwame Boateng', sub:'KYC · High Priority · 5 documents', body:function(){
    return '<div style="background:var(--red-pale);border:1px solid rgba(192,57,43,.15);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--red);margin-bottom:12px;">Account partially restricted. 5 required KYC documents have not been submitted.</div>' +
    rowCard([['Client','Kwame Boateng'],['Issue','Missing onboarding documents'],['Category','KYC'],['Priority','High'],['Account','Partially restricted'],['Assigned to','Marcus Osei']]) +
    '<div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;">Missing Documents</div>' +
    '<div style="font-size:.82rem;color:var(--ink-soft);line-height:1.8;padding:10px 14px;background:var(--cream);border-radius:var(--r);">• Passport / Government ID<br>• Proof of Address<br>• Source of Funds Declaration<br>• Risk Profile Form<br>• Suitability Assessment</div>';
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Reminder sent ✓\')">Send Reminder</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Resolved ✓\')">Mark Resolved</button>'; }},

  'comp-emeka-trust': { title:'Trust Deed Outstanding — Emeka Okafor', sub:'Entity · Medium Priority', body:function(){
    return rowCard([['Client','Emeka Okafor'],['Issue','Trust deed document not submitted'],['Category','Entity'],['Priority','Medium'],['Assigned to','Dr. Amara Nwosu'],['Linked entity','Okafor Capital Holdings LLC — pending formation']]) +
    '<div style="font-size:.82rem;color:var(--ink-soft);padding:10px 14px;background:var(--cream);border-radius:var(--r);">Trust deed is required to complete the entity structuring review before LLC formation can be finalised.</div>';
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Chased ✓\')">Chase Client</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Resolved ✓\')">Mark Resolved</button>'; }},

  'comp-amara-fsca': { title:'FSCA Licence Overdue — Amara Diallo (WM)', sub:'Advisor · Medium Priority', body:function(){
    return '<div style="background:var(--gold-pale);border:1px solid rgba(200,150,46,.2);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#8a6520;margin-bottom:12px;">⚠ FSCA licence renewal is overdue. Advisor may not be able to act as a regulated adviser until resolved.</div>' +
    rowCard([['Advisor','Amara Diallo, CAIA'],['Firm','Continental Wealth'],['Issue','FSCA licence renewal overdue'],['Category','Advisor Compliance'],['Priority','Medium'],['Assigned to','Lena Park'],['Clients affected','18 active clients']]);
  }, foot:function(){ return '<button class="sm-btn sec" onclick="saCloseSlide();showToast(\'Notice sent ✓\')">Send Notice</button><button class="sm-btn pri" onclick="saCloseSlide();showToast(\'Resolved ✓\')">Mark Resolved</button>'; }},

  // ── Entities, Legal & Compliance slides
  'ent-emeka': { title:'Delaware LLC — Emeka Okafor', sub:'Okafor Capital Holdings LLC · Pending', body:function(){ return '<div style=\"background:#F3E8FF;border:1px solid rgba(124,58,237,.18);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#7C3AED;margin-bottom:12px;\">Legal documentation required before formation can proceed.</div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Entity Details</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Entity name</div><div class=\"v\">Okafor Capital Holdings LLC</div></div><div class=\"sm-row\"><div class=\"k\">Type</div><div class=\"v\">LLC</div></div><div class=\"sm-row\"><div class=\"k\">Jurisdiction</div><div class=\"v\">Delaware, USA</div></div><div class=\"sm-row\"><div class=\"k\">Management</div><div class=\"v\">Member-managed</div></div><div class=\"sm-row\"><div class=\"k\">Purpose</div><div class=\"v\">Investment Holding</div></div><div class=\"sm-row\"><div class=\"k\">Primary owner</div><div class=\"v\">Emeka Okafor · 100%</div></div><div class=\"sm-row\"><div class=\"k\">Filed by</div><div class=\"v\">Sarah Mensah (WM)</div></div><div class=\"sm-row\"><div class=\"k\">Submitted</div><div class=\"v\">Apr 6, 2026</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Formation Fees</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">State filing fee</div><div class=\"v\">$90</div></div><div class=\"sm-row\"><div class=\"k\">Aidi formation service</div><div class=\"v\">$500</div></div><div class=\"sm-row\"><div class=\"k\">Registered agent (1yr)</div><div class=\"v\">$150</div></div><div class=\"sm-row\"><div class=\"k\">Total</div><div class=\"v\">$740</div></div><div class=\"sm-row\"><div class=\"k\">Est. time</div><div class=\"v\">3–5 business days</div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide();showToast(\'Formation denied\')\" style=\"background:white;color:var(--red);border-color:var(--red);\">Deny</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();showToast(\'LLC formation approved ✓\')\">Approve Formation</button>'; }},
  'ent-fatima': { title:'Family Trust — Fatima Al-Rashid', sub:'Revocable Family Trust · Active', body:function(){ return '<div style=\"background:var(--green-pale);border:1px solid rgba(26,122,94,.2);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--green);margin-bottom:12px;\">✓ Trust is active. All documentation reviewed and approved.</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Entity name</div><div class=\"v\">Al-Rashid Family Trust</div></div><div class=\"sm-row\"><div class=\"k\">Type</div><div class=\"v\">Revocable Family Trust</div></div><div class=\"sm-row\"><div class=\"k\">Jurisdiction</div><div class=\"v\">California, USA</div></div><div class=\"sm-row\"><div class=\"k\">Trustee</div><div class=\"v\">Fatima Al-Rashid</div></div><div class=\"sm-row\"><div class=\"k\">Beneficiaries</div><div class=\"v\">2 named</div></div><div class=\"sm-row\"><div class=\"k\">Filed by</div><div class=\"v\">Sarah Mensah (WM)</div></div><div class=\"sm-row\"><div class=\"k\">Submitted</div><div class=\"v\">Mar 28, 2026</div></div><div class=\"sm-row\"><div class=\"k\">Legal review</div><div class=\"v\">Approved by Fatou Diarra</div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide()\">Close</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();showToast(\'Downloaded ✓\')\">Download Trust Deed</button>'; }},
  'leg-emeka-llc': { title:'LLC Operating Agreement — Emeka Okafor', sub:'Entity document · Under Review', body:function(){ return '<div style=\"background:#F3E8FF;border:1px solid rgba(124,58,237,.18);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#7C3AED;margin-bottom:12px;\">Under legal review by Dr. Amara Nwosu. Approval required to proceed with LLC formation.</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Document</div><div class=\"v\">LLC Operating Agreement</div></div><div class=\"sm-row\"><div class=\"k\">Client</div><div class=\"v\">Emeka Okafor</div></div><div class=\"sm-row\"><div class=\"k\">Entity</div><div class=\"v\">Okafor Capital Holdings LLC</div></div><div class=\"sm-row\"><div class=\"k\">Signed</div><div class=\"v\">Apr 6, 2026</div></div><div class=\"sm-row\"><div class=\"k\">Reviewer</div><div class=\"v\">Dr. Amara Nwosu</div></div><div class=\"sm-row\"><div class=\"k\">Type</div><div class=\"v\">Entity · Delaware LLC</div></div><div class=\"sm-row\"><div class=\"k\">Status</div><div class=\"v\">Under Review</div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide();showToast(\'Rejected\')\" style=\"background:white;color:var(--red);border-color:var(--red);\">Reject</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();showToast(\'Agreement approved ✓\')\">Approve Document</button>'; }},
  'leg-fatima-trust': { title:'Trust Deed — Fatima Al-Rashid', sub:'Revocable Family Trust · Approved', body:function(){ return '<div style=\"background:var(--green-pale);border:1px solid rgba(26,122,94,.2);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--green);margin-bottom:12px;\">✓ Approved and filed. All parties notified.</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Document</div><div class=\"v\">Trust Deed — Revocable Family Trust</div></div><div class=\"sm-row\"><div class=\"k\">Client</div><div class=\"v\">Fatima Al-Rashid</div></div><div class=\"sm-row\"><div class=\"k\">Signed</div><div class=\"v\">Mar 28, 2026</div></div><div class=\"sm-row\"><div class=\"k\">Reviewed by</div><div class=\"v\">Fatou Diarra</div></div><div class=\"sm-row\"><div class=\"k\">Approved</div><div class=\"v\">Mar 30, 2026</div></div><div class=\"sm-row\"><div class=\"k\">Status</div><div class=\"v\">Approved ✓</div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide()\">Close</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();showToast(\'Downloaded ✓\')\">Download PDF</button>'; }},
  'leg-priya-advisory': { title:'Investment Advisory Agreement — Priya Sharma', sub:'Advisory · Approved', body:function(){ return '<div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Document</div><div class=\"v\">Investment Advisory Agreement</div></div><div class=\"sm-row\"><div class=\"k\">Client</div><div class=\"v\">Priya Sharma</div></div><div class=\"sm-row\"><div class=\"k\">Signed</div><div class=\"v\">Jan 12, 2026</div></div><div class=\"sm-row\"><div class=\"k\">Reviewed by</div><div class=\"v\">Dr. Amara Nwosu</div></div><div class=\"sm-row\"><div class=\"k\">Status</div><div class=\"v\">Approved ✓</div></div><div class=\"sm-row\"><div class=\"k\">Renewal due</div><div class=\"v\">Jan 12, 2027</div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide()\">Close</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();showToast(\'Downloaded ✓\')\">Download PDF</button>'; }},
  'leg-ibrahim-data': { title:'Cross-Border Data Consent — Ibrahim Hassan', sub:'Compliance · Approved', body:function(){ return '<div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Document</div><div class=\"v\">Cross-Border Data Consent</div></div><div class=\"sm-row\"><div class=\"k\">Client</div><div class=\"v\">Ibrahim Hassan</div></div><div class=\"sm-row\"><div class=\"k\">Signed</div><div class=\"v\">Feb 20, 2026</div></div><div class=\"sm-row\"><div class=\"k\">Reviewed by</div><div class=\"v\">Fatou Diarra</div></div><div class=\"sm-row\"><div class=\"k\">Status</div><div class=\"v\">Approved ✓</div></div><div class=\"sm-row\"><div class=\"k\">Jurisdiction</div><div class=\"v\">UAE / USA cross-border</div></div><div class=\"sm-row\"><div class=\"k\">Renewal</div><div class=\"v\">Not required</div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide()\">Close</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();showToast(\'Downloaded ✓\')\">Download PDF</button>'; }},
  'comp-ibrahim': { title:'Passport Expiry — Ibrahim Hassan', sub:'KYC · High Priority · 31 days remaining', body:function(){ return '<div style=\"background:var(--red-pale);border:1px solid rgba(192,57,43,.15);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--red);margin-bottom:12px;\">⚠ Passport expires May 12, 2026. Trading will pause at expiry. Last reminder Apr 3.</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Client</div><div class=\"v\">Ibrahim Hassan</div></div><div class=\"sm-row\"><div class=\"k\">Issue</div><div class=\"v\">Passport expiring</div></div><div class=\"sm-row\"><div class=\"k\">Expiry date</div><div class=\"v\">May 12, 2026</div></div><div class=\"sm-row\"><div class=\"k\">Days remaining</div><div class=\"v\">31 days</div></div><div class=\"sm-row\"><div class=\"k\">Assigned to</div><div class=\"v\">Marcus Osei</div></div><div class=\"sm-row\"><div class=\"k\">Priority</div><div class=\"v\">High</div></div><div class=\"sm-row\"><div class=\"k\">Last reminder</div><div class=\"v\">Apr 3, 2026</div></div><div class=\"sm-row\"><div class=\"k\">WM</div><div class=\"v\">Sarah Mensah</div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide();showToast(\'Reminder sent ✓\')\">Send Reminder</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();showToast(\'KYC cleared ✓\')\">Mark KYC Cleared</button>'; }},
  'comp-kwame': { title:'Missing Documents — Kwame Boateng', sub:'KYC · High Priority · Onboarding stalled', body:function(){ return '<div style=\"background:var(--red-pale);border:1px solid rgba(192,57,43,.15);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--red);margin-bottom:12px;\">⚠ 5 documents missing. Account restricted.</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Client</div><div class=\"v\">Kwame Boateng</div></div><div class=\"sm-row\"><div class=\"k\">Assigned to</div><div class=\"v\">Marcus Osei</div></div><div class=\"sm-row\"><div class=\"k\">Priority</div><div class=\"v\">High</div></div><div class=\"sm-row\"><div class=\"k\">Submitted</div><div class=\"v\">Apr 8, 2026</div></div><div class=\"sm-row\"><div class=\"k\">WM</div><div class=\"v\">Sarah Mensah</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Outstanding Documents</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Passport / ID</div><div class=\"v\">❌ Not uploaded</div></div><div class=\"sm-row\"><div class=\"k\">Proof of address</div><div class=\"v\">❌ Not uploaded</div></div><div class=\"sm-row\"><div class=\"k\">Source of funds</div><div class=\"v\">❌ Not uploaded</div></div><div class=\"sm-row\"><div class=\"k\">Suitability assessment</div><div class=\"v\">❌ Incomplete</div></div><div class=\"sm-row\"><div class=\"k\">Risk disclosure</div><div class=\"v\">❌ Not signed</div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide()\">Close</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();showToast(\'Reminder sent ✓\')\">Send Document Reminder</button>'; }},
  'comp-emeka': { title:'Trust Deed Outstanding — Emeka Okafor', sub:'Entity · Medium Priority · LLC filing blocked', body:function(){ return '<div style=\"background:var(--gold-pale);border:1px solid rgba(200,150,46,.25);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#8a6520;margin-bottom:12px;\">⚠ Trust deed not yet received. Delaware LLC formation is on hold.</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Client</div><div class=\"v\">Emeka Okafor</div></div><div class=\"sm-row\"><div class=\"k\">Issue</div><div class=\"v\">Trust deed outstanding</div></div><div class=\"sm-row\"><div class=\"k\">Entity</div><div class=\"v\">Okafor Capital Holdings LLC</div></div><div class=\"sm-row\"><div class=\"k\">Assigned to</div><div class=\"v\">Dr. Amara Nwosu</div></div><div class=\"sm-row\"><div class=\"k\">Priority</div><div class=\"v\">Medium</div></div><div class=\"sm-row\"><div class=\"k\">Filed</div><div class=\"v\">Apr 6, 2026</div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide()\">Close</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();showToast(\'Escalated ✓\')\">Escalate to Legal</button>'; }},
  'comp-amara-wm': { title:'FSCA Licence Overdue — Amara Diallo', sub:'Advisor compliance · Medium Priority', body:function(){ return '<div style=\"background:var(--gold-pale);border:1px solid rgba(200,150,46,.25);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#8a6520;margin-bottom:12px;\">⚠ FSCA licence renewal overdue. Active clients may be at risk.</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Advisor</div><div class=\"v\">Amara Diallo</div></div><div class=\"sm-row\"><div class=\"k\">Firm</div><div class=\"v\">Continental Wealth</div></div><div class=\"sm-row\"><div class=\"k\">Licence type</div><div class=\"v\">FSCA</div></div><div class=\"sm-row\"><div class=\"k\">Due date</div><div class=\"v\">Mar 31, 2026</div></div><div class=\"sm-row\"><div class=\"k\">Days overdue</div><div class=\"v\">12 days</div></div><div class=\"sm-row\"><div class=\"k\">Active clients</div><div class=\"v\">18</div></div><div class=\"sm-row\"><div class=\"k\">Assigned to</div><div class=\"v\">Lena Park</div></div><div class=\"sm-row\"><div class=\"k\">Priority</div><div class=\"v\">Medium</div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide();showToast(\'Advisor suspended ✓\')\" style=\"background:white;color:var(--red);border-color:var(--red);\">Suspend Advisor</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();showToast(\'Renewal notice sent ✓\')\">Send Renewal Notice</button>'; }},

  // ── New client types
  'cli-self-aisha': { title:'Aisha Nwosu', sub:'Individual · Self-Signup · No WM · AUM $320K', body:function(){ return '<div style=\"background:var(--green-pale);border:1px solid rgba(26,122,94,.2);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--green);margin-bottom:12px;\">Self-signup client — no wealth manager assigned. Manages investments independently via the Aidi app.</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Full name</div><div class=\"v\">Aisha Nwosu</div></div><div class=\"sm-row\"><div class=\"k\">Account type</div><div class=\"v\">Individual — Self-Signup</div></div><div class=\"sm-row\"><div class=\"k\">Wealth manager</div><div class=\"v\">None (self-managed)</div></div><div class=\"sm-row\"><div class=\"k\">Joined</div><div class=\"v\">Feb 14, 2026</div></div><div class=\"sm-row\"><div class=\"k\">KYC status</div><div class=\"v\">Clean ✓</div></div><div class=\"sm-row\"><div class=\"k\">Plan</div><div class=\"v\">Growth ($29/mo)</div></div><div class=\"sm-row\"><div class=\"k\">Account status</div><div class=\"v\">Active</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Portfolio</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Total AUM</div><div class=\"v\">$320,000</div></div><div class=\"sm-row\"><div class=\"k\">US Equities</div><div class=\"v\">$180,000 · 56%</div></div><div class=\"sm-row\"><div class=\"k\">Gold (Physical)</div><div class=\"v\">$64,000 · 20%</div></div><div class=\"sm-row\"><div class=\"k\">Cash</div><div class=\"v\">$76,000 · 24%</div></div><div class=\"sm-row\"><div class=\"k\">Risk level</div><div class=\"v\">Medium</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Self-Signup Details</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Onboarding</div><div class=\"v\">Completed via Aidi app</div></div><div class=\"sm-row\"><div class=\"k\">KYC verification</div><div class=\"v\">Verified — passport + address</div></div><div class=\"sm-row\"><div class=\"k\">Source of funds</div><div class=\"v\">Employment income — declared</div></div><div class=\"sm-row\"><div class=\"k\">Suitability</div><div class=\"v\">Self-assessed · Medium risk</div></div><div class=\"sm-row\"><div class=\"k\">Notifications</div><div class=\"v\">Email + in-app</div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide()\">Close</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();showToast(\'Assign WM sent ✓\')\">Assign Wealth Manager</button>'; }},
  'cli-biz-tectona': { title:'Tectona Capital Ltd', sub:'Business · Corporate · James Osei · AUM $4.8M', body:function(){ return '<div style=\"background:#EEF2FF;border:1px solid rgba(27,79,216,.18);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--blue);margin-bottom:12px;\">Business / corporate account — WM-managed. Investments held in company name. Enhanced KYC applies.</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Entity name</div><div class=\"v\">Tectona Capital Ltd</div></div><div class=\"sm-row\"><div class=\"k\">Account type</div><div class=\"v\">Business — Corporate Investment</div></div><div class=\"sm-row\"><div class=\"k\">Registration</div><div class=\"v\">RC-8847291 · Nigeria (CAC)</div></div><div class=\"sm-row\"><div class=\"k\">Jurisdiction</div><div class=\"v\">Nigeria / Delaware (holding)</div></div><div class=\"sm-row\"><div class=\"k\">Wealth manager</div><div class=\"v\">James Osei</div></div><div class=\"sm-row\"><div class=\"k\">Plan</div><div class=\"v\">Family Office ($99/mo)</div></div><div class=\"sm-row\"><div class=\"k\">Account status</div><div class=\"v\">Active</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Corporate Details</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Directors</div><div class=\"v\">Chukwudi Eze (CEO), Ngozi Eze</div></div><div class=\"sm-row\"><div class=\"k\">Beneficial owner</div><div class=\"v\">Chukwudi Eze · >25% ownership declared</div></div><div class=\"sm-row\"><div class=\"k\">Purpose</div><div class=\"v\">Investment holding · Private equity</div></div><div class=\"sm-row\"><div class=\"k\">AML status</div><div class=\"v\">Enhanced due diligence completed ✓</div></div><div class=\"sm-row\"><div class=\"k\">Tax residency</div><div class=\"v\">Nigeria · FIRS registered</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Portfolio</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Total AUM</div><div class=\"v\">$4,800,000</div></div><div class=\"sm-row\"><div class=\"k\">Private Markets</div><div class=\"v\">$2.4M · 50%</div></div><div class=\"sm-row\"><div class=\"k\">US Equities</div><div class=\"v\">$1.44M · 30%</div></div><div class=\"sm-row\"><div class=\"k\">Gold (Physical)</div><div class=\"v\">$480K · 10%</div></div><div class=\"sm-row\"><div class=\"k\">Cash</div><div class=\"v\">$480K · 10%</div></div><div class=\"sm-row\"><div class=\"k\">Risk level</div><div class=\"v\">High</div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide()\">Close</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();showToast(\'Account reviewed ✓\')\">View Full Account</button>'; }},

  // ── Updated Client slides
  'cli-emeka': { title:'Emeka Okafor', sub:'Individual · WM-managed · AUM $18.4M', body:function(){ return '<div style=\"background:var(--gold-pale);border:1px solid rgba(200,150,46,.25);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#8a6520;margin-bottom:12px;\">⚠ Passport approaching expiry · Trust deed outstanding</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Full name</div><div class=\"v\">Emeka Okafor</div></div><div class=\"sm-row\"><div class=\"k\">Type</div><div class=\"v\">Individual · WM-managed</div></div><div class=\"sm-row\"><div class=\"k\">Adviser</div><div class=\"v\">Sarah Mensah</div></div><div class=\"sm-row\"><div class=\"k\">AUM</div><div class=\"v\">$18.4M</div></div><div class=\"sm-row\"><div class=\"k\">Entities</div><div class=\"v\">Delaware LLC + Trust</div></div><div class=\"sm-row\"><div class=\"k\">Plan</div><div class=\"v\">Family Office</div></div><div class=\"sm-row\"><div class=\"k\">Joined</div><div class=\"v\">Mar 2024</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Documents</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Passport / ID</div><div class=\"v\" style=\"color:#8a6520;\">Expires May 2026 ⚠</div></div><div class=\"sm-row\"><div class=\"k\">Proof of address</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Source of funds</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Trust deed</div><div class=\"v\" style=\"color:var(--red);\">Outstanding ❌</div></div><div class=\"sm-row\"><div class=\"k\">Suitability</div><div class=\"v\" style=\"color:var(--green);\">Completed ✓</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Recent Transactions</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Apr 10</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">Termii — Private Equity Allocation</div><div style=\"font-size:.77rem;color:var(--gold);margin-top:1px;\">$50,000 · Pending approval</div></div></div><div class=\"sm-row\"><div class=\"k\">Mar 12</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">Gold Purchase — Physical</div><div style=\"font-size:.77rem;color:var(--green);margin-top:1px;\">$150,000 · Approved</div></div></div><div class=\"sm-row\"><div class=\"k\">Feb 5</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">SPY BUY — US Equities</div><div style=\"font-size:.77rem;color:var(--green);margin-top:1px;\">$80,000 · Executed</div></div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide()\">Close</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();saOpenClientProfile(\'emeka\')\">View Full Profile</button>'; }},
  'cli-fatima': { title:'Fatima Al-Rashid', sub:'Individual · WM-managed · AUM $31.2M', body:function(){ return '<div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Full name</div><div class=\"v\">Fatima Al-Rashid</div></div><div class=\"sm-row\"><div class=\"k\">Type</div><div class=\"v\">Individual · WM-managed</div></div><div class=\"sm-row\"><div class=\"k\">Adviser</div><div class=\"v\">Sarah Mensah</div></div><div class=\"sm-row\"><div class=\"k\">AUM</div><div class=\"v\">$31.2M</div></div><div class=\"sm-row\"><div class=\"k\">Entities</div><div class=\"v\">Revocable Trust + LLC</div></div><div class=\"sm-row\"><div class=\"k\">Plan</div><div class=\"v\">Family Office</div></div><div class=\"sm-row\"><div class=\"k\">Joined</div><div class=\"v\">Jan 2023</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Documents</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Passport / ID</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Proof of address</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Source of funds</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Trust deed</div><div class=\"v\" style=\"color:var(--green);\">Approved ✓</div></div><div class=\"sm-row\"><div class=\"k\">Annual review</div><div class=\"v\" style=\"color:#8a6520;\">Due Apr 30, 2026 ⚠</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Recent Transactions</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Apr 7</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">Silver Purchase — Physical</div><div style=\"font-size:.77rem;color:var(--gold);margin-top:1px;\">$80,000 · Pending approval</div></div></div><div class=\"sm-row\"><div class=\"k\">Mar 1</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">Gold (IAU) — Vault allocation</div><div style=\"font-size:.77rem;color:var(--green);margin-top:1px;\">$200,000 · Completed</div></div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide()\">Close</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();saOpenClientProfile(\'fatima\')\">View Full Profile</button>'; }},
  'cli-kwame': { title:'Kwame Boateng', sub:'Individual · WM-managed · Onboarding', body:function(){ return '<div style=\"background:var(--gold-pale);border:1px solid rgba(200,150,46,.25);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#8a6520;margin-bottom:12px;\">⚠ Onboarding incomplete — 5 documents outstanding</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Full name</div><div class=\"v\">Kwame Boateng</div></div><div class=\"sm-row\"><div class=\"k\">Type</div><div class=\"v\">Individual · WM-managed</div></div><div class=\"sm-row\"><div class=\"k\">Adviser</div><div class=\"v\">Sarah Mensah</div></div><div class=\"sm-row\"><div class=\"k\">AUM</div><div class=\"v\">$8.9M</div></div><div class=\"sm-row\"><div class=\"k\">Status</div><div class=\"v\">Onboarding · Restricted</div></div><div class=\"sm-row\"><div class=\"k\">Plan</div><div class=\"v\">Growth</div></div><div class=\"sm-row\"><div class=\"k\">Joined</div><div class=\"v\">Apr 2026</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Documents</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Passport / ID</div><div class=\"v\" style=\"color:var(--red);\">Not uploaded ❌</div></div><div class=\"sm-row\"><div class=\"k\">Proof of address</div><div class=\"v\" style=\"color:var(--red);\">Not uploaded ❌</div></div><div class=\"sm-row\"><div class=\"k\">Source of funds</div><div class=\"v\" style=\"color:var(--red);\">Not uploaded ❌</div></div><div class=\"sm-row\"><div class=\"k\">Suitability assessment</div><div class=\"v\" style=\"color:var(--red);\">Incomplete ❌</div></div><div class=\"sm-row\"><div class=\"k\">Risk disclosure</div><div class=\"v\" style=\"color:var(--red);\">Not signed ❌</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Transactions</div><div style=\"background:var(--cream);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--ink-muted);\">No transactions yet — account restricted pending KYC.</div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide();showToast(\'Reminder sent ✓\')\">Send Doc Reminder</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();saOpenClientProfile(\'kwame\')\">View Full Profile</button>'; }},
  'cli-priya': { title:'Priya Sharma', sub:'Individual · WM-managed · AUM $4.2M', body:function(){ return '<div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Full name</div><div class=\"v\">Priya Sharma</div></div><div class=\"sm-row\"><div class=\"k\">Type</div><div class=\"v\">Individual · WM-managed</div></div><div class=\"sm-row\"><div class=\"k\">Adviser</div><div class=\"v\">Sarah Mensah</div></div><div class=\"sm-row\"><div class=\"k\">AUM</div><div class=\"v\">$4.2M</div></div><div class=\"sm-row\"><div class=\"k\">Plan</div><div class=\"v\">Elite</div></div><div class=\"sm-row\"><div class=\"k\">KYC</div><div class=\"v\">Clean ✓</div></div><div class=\"sm-row\"><div class=\"k\">Joined</div><div class=\"v\">Nov 2024</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Documents</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Passport / ID</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Proof of address</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Source of funds</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Suitability</div><div class=\"v\" style=\"color:var(--green);\">Completed ✓</div></div><div class=\"sm-row\"><div class=\"k\">Advisory agreement</div><div class=\"v\" style=\"color:var(--green);\">Signed Jan 12, 2026 ✓</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Recent Transactions</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Apr 9</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">Modern Stylish Home — RE investment</div><div style=\"font-size:.77rem;color:var(--gold);margin-top:1px;\">$5,000 · Pending approval</div></div></div><div class=\"sm-row\"><div class=\"k\">Apr 9</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">Gold Purchase — Physical</div><div style=\"font-size:.77rem;color:var(--gold);margin-top:1px;\">$25,000 · Pending approval</div></div></div><div class=\"sm-row\"><div class=\"k\">Apr 9</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">Plan Upgrade — Elite</div><div style=\"font-size:.77rem;color:var(--green);margin-top:1px;\">$9,600/yr · Auto-approved</div></div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide()\">Close</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();saOpenClientProfile(\'priya\')\">View Full Profile</button>'; }},
  'cli-ibrahim': { title:'Ibrahim Hassan', sub:'Individual · WM-managed · AUM $12.1M', body:function(){ return '<div style=\"background:var(--gold-pale);border:1px solid rgba(200,150,46,.25);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#8a6520;margin-bottom:12px;\">⚠ Passport expires May 12, 2026 — 31 days remaining</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Full name</div><div class=\"v\">Ibrahim Hassan</div></div><div class=\"sm-row\"><div class=\"k\">Type</div><div class=\"v\">Individual · WM-managed</div></div><div class=\"sm-row\"><div class=\"k\">Adviser</div><div class=\"v\">Sarah Mensah</div></div><div class=\"sm-row\"><div class=\"k\">AUM</div><div class=\"v\">$12.1M</div></div><div class=\"sm-row\"><div class=\"k\">Plan</div><div class=\"v\">Growth</div></div><div class=\"sm-row\"><div class=\"k\">KYC</div><div class=\"v\">Passport expiring</div></div><div class=\"sm-row\"><div class=\"k\">Joined</div><div class=\"v\">Jun 2024</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Documents</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Passport / ID</div><div class=\"v\" style=\"color:#8a6520;\">Expires May 12, 2026 ⚠</div></div><div class=\"sm-row\"><div class=\"k\">Proof of address</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Source of funds</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Cross-border consent</div><div class=\"v\" style=\"color:var(--green);\">Approved ✓</div></div><div class=\"sm-row\"><div class=\"k\">Suitability</div><div class=\"v\" style=\"color:var(--green);\">Completed ✓</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Recent Transactions</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Apr 6</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">90-Day T-Bill — US Treasury</div><div style=\"font-size:.77rem;color:var(--gold);margin-top:1px;\">$400,000 · Awaiting approval</div></div></div><div class=\"sm-row\"><div class=\"k\">Mar 20</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">Gold Purchase — Physical</div><div style=\"font-size:.77rem;color:var(--green);margin-top:1px;\">$150,000 · Completed</div></div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide();showToast(\'Reminder sent ✓\')\">Send KYC Reminder</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();saOpenClientProfile(\'ibrahim\')\">View Full Profile</button>'; }},
  'cli-self-aisha': { title:'Aisha Nwosu', sub:'Individual · Self-Signup · No WM · AUM $320K', body:function(){ return '<div style=\"background:var(--green-pale);border:1px solid rgba(26,122,94,.2);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--green);margin-bottom:12px;\">Self-signup client — manages investments independently via the Aidi app.</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Full name</div><div class=\"v\">Aisha Nwosu</div></div><div class=\"sm-row\"><div class=\"k\">Type</div><div class=\"v\">Individual · Self-Signup</div></div><div class=\"sm-row\"><div class=\"k\">Wealth manager</div><div class=\"v\">None (self-managed)</div></div><div class=\"sm-row\"><div class=\"k\">AUM</div><div class=\"v\">$320,000</div></div><div class=\"sm-row\"><div class=\"k\">Plan</div><div class=\"v\">Growth ($29/mo)</div></div><div class=\"sm-row\"><div class=\"k\">KYC</div><div class=\"v\">Clean ✓</div></div><div class=\"sm-row\"><div class=\"k\">Joined</div><div class=\"v\">Feb 2026</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Documents</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Passport / ID</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Proof of address</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Source of funds</div><div class=\"v\" style=\"color:var(--green);\">Declared ✓</div></div><div class=\"sm-row\"><div class=\"k\">Suitability</div><div class=\"v\" style=\"color:var(--green);\">Self-assessed ✓</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Recent Transactions</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Apr 8</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">Gold (IAU) — Physical purchase</div><div style=\"font-size:.77rem;color:var(--green);margin-top:1px;\">$40,000 · Completed</div></div></div><div class=\"sm-row\"><div class=\"k\">Mar 15</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">SPY — US Equities BUY</div><div style=\"font-size:.77rem;color:var(--green);margin-top:1px;\">$180,000 · Executed</div></div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide();showToast(\'WM assigned ✓\')\">Assign WM</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();saOpenClientProfile(\'aisha\')\">View Full Profile</button>'; }},
  'cli-biz-tectona': { title:'Tectona Capital Ltd', sub:'Business · Corporate · James Osei · AUM $4.8M', body:function(){ return '<div style=\"background:#EEF2FF;border:1px solid rgba(27,79,216,.18);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--blue);margin-bottom:12px;\">Business / corporate account — Enhanced KYC applies. WM-managed.</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Entity name</div><div class=\"v\">Tectona Capital Ltd</div></div><div class=\"sm-row\"><div class=\"k\">Type</div><div class=\"v\">Business · Corporate Investment</div></div><div class=\"sm-row\"><div class=\"k\">Registration</div><div class=\"v\">RC-8847291 · Nigeria (CAC)</div></div><div class=\"sm-row\"><div class=\"k\">Wealth manager</div><div class=\"v\">James Osei</div></div><div class=\"sm-row\"><div class=\"k\">AUM</div><div class=\"v\">$4,800,000</div></div><div class=\"sm-row\"><div class=\"k\">Plan</div><div class=\"v\">Family Office ($99/mo)</div></div><div class=\"sm-row\"><div class=\"k\">Joined</div><div class=\"v\">Jan 2025</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Corporate KYC</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Certificate of incorporation</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Beneficial owner declaration</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">Director ID (Chukwudi Eze)</div><div class=\"v\" style=\"color:var(--green);\">Verified ✓</div></div><div class=\"sm-row\"><div class=\"k\">AML / Enhanced DD</div><div class=\"v\" style=\"color:var(--green);\">Completed ✓</div></div><div class=\"sm-row\"><div class=\"k\">Tax residency form</div><div class=\"v\" style=\"color:var(--green);\">FIRS registered ✓</div></div></div><div style=\"font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:12px 0 8px;\">Recent Transactions</div><div style=\"background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;\"><div class=\"sm-row\"><div class=\"k\">Apr 5</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">Termii — Private Equity</div><div style=\"font-size:.77rem;color:var(--green);margin-top:1px;\">$500,000 · Completed</div></div></div><div class=\"sm-row\"><div class=\"k\">Mar 10</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">Rayda — Private Equity co-invest</div><div style=\"font-size:.77rem;color:var(--green);margin-top:1px;\">$300,000 · Completed</div></div></div><div class=\"sm-row\"><div class=\"k\">Feb 20</div><div class=\"v\"><div style=\"font-size:.82rem;font-weight:500;\">Gold (Physical) — Vault allocation</div><div style=\"font-size:.77rem;color:var(--green);margin-top:1px;\">$480,000 · Completed</div></div></div></div>'; }, foot:function(){ return '<button class=\"sm-btn sec\" onclick=\"saCloseSlide()\">Close</button><button class=\"sm-btn pri\" onclick=\"saCloseSlide();saOpenClientProfile(\'tectona\')\">View Full Profile</button>'; }},

};



function saSlideFooter(cancelLabel, submitLabel, submitAction) {
  cancelLabel = cancelLabel || 'Cancel';
  return '<button class="sm-btn sec" onclick="saCloseSlide()">' + cancelLabel + '</button>' +
    '<button class="sm-btn pri" onclick="' + submitAction + '">' + submitLabel + '</button>';
}

function saOpenSlide(key) {
  var d = _saSlideData[key]; if (!d) { showToast('Details coming soon'); return; }
  var t=document.getElementById('saSlideTitle');
  var st=document.getElementById('saSlideSubtitle');
  var body=document.getElementById('saSlideBody');
  var foot=document.getElementById('saSlideFooter');
  if(t) t.textContent = d.title;
  if(st) st.textContent = d.sub||'';
  if(body) body.innerHTML = typeof d.body==='function'?d.body():d.body;
  if(foot) foot.innerHTML = typeof d.foot==='function'?d.foot():(d.foot||'<button class="sm-btn pri" onclick="saCloseSlide()">Close</button>');
  var ov=document.getElementById('saSlideOverlay');
  var panel=document.getElementById('saSlidePanel');
  if(ov) ov.classList.add('open');
  if(panel) panel.classList.add('open');
  document.body.style.overflow='hidden';
}

function saCloseSlide() {
  var ov=document.getElementById('saSlideOverlay');
  var panel=document.getElementById('saSlidePanel');
  if(ov) ov.classList.remove('open');
  if(panel) panel.classList.remove('open');
  document.body.style.overflow='';
}

function saDeleteRE(cardId, name) {
  if (!confirm('Delete listing "'+name+'"? This cannot be undone.')) return;
  var el=document.getElementById(cardId);
  if(el){el.style.transition='opacity .3s';el.style.opacity='0';setTimeout(function(){el.remove();},300);}
  showToast(name+' removed \u2713');
}
function saDeletePM(cardId, name) {
  if (!confirm('Delete "'+name+'"? This cannot be undone.')) return;
  var el=document.getElementById(cardId);
  if(el){el.style.transition='opacity .3s';el.style.opacity='0';setTimeout(function(){el.remove();},300);}
  showToast(name+' removed \u2713');
}
function pmDeckHtml(prefix) {
  return '<div class="sm-fld"><label class="sm-lbl">Investor Deck / Pitch Document</label>' +
    '<div id="'+prefix+'-deck-zone" style="border:2px dashed var(--cream-dark);border-radius:var(--r);padding:18px;text-align:center;cursor:pointer;background:var(--cream);transition:all .15s;" ondragover="event.preventDefault();saImgDragOver(this)" ondragleave="saImgDragLeave(this)" ondrop="saSlideDeckDrop(event,\''+prefix+'-deck-zone\')" onclick="document.getElementById(\''+prefix+'-deck\').click()">' +
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--ink-muted)" stroke-width="1.3" style="margin-bottom:6px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
    '<div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);">Drag &amp; drop deck or click to upload</div>' +
    '<div style="font-size:.73rem;color:var(--ink-muted);margin-top:3px;">PDF, PPTX, DOCX</div>' +
    '<input type="file" id="'+prefix+'-deck" style="display:none" accept=".pdf,.pptx,.ppt,.doc,.docx" onchange="this.closest(\'[id$=-deck-zone]\').innerHTML=\'<div style=&quot;font-size:.82rem;font-weight:500;color:var(--green);padding:8px;&quot;>\\u2713 \'+this.files[0].name+\'</div>\';">' +
    '</div></div>';
}

// ── SA Slide panel ───────────────────────────────────────────────────


function rowCard(rows) {
  return '<div style="background:var(--cream);border-radius:var(--r);padding:0 14px;margin-bottom:14px;">' +
    rows.map(function(r){ return '<div class="sm-row"><div class="k">'+r[0]+'</div><div class="v">'+r[1]+'</div></div>'; }).join('') +
  '</div>';
}

function editReCard(name, address, type, min, caprate, airbnb) {
  return '<div class="sm-fld"><label class="sm-lbl">Property Name</label><input class="sm-inp" value="'+name+'"></div>' +
  '<div class="sm-fld"><label class="sm-lbl">Address</label><input class="sm-inp" value="'+address+'"></div>' +
  '<div class="sm-fld"><label class="sm-lbl">Type</label><select class="sm-sel"><option'+(type==='Entire Unit'?' selected':'')+'>Entire Unit</option><option'+(type==='Private Room'?' selected':'')+'>Private Room</option></select></div>' +
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">' +
  '<div class="sm-fld"><label class="sm-lbl">Min. Investment</label><input class="sm-inp" value="'+min+'"></div>' +
  '<div class="sm-fld"><label class="sm-lbl">Cap Rate</label><input class="sm-inp" value="'+caprate+'"></div></div>' +
  '<div class="sm-fld"><label class="sm-lbl">Airbnb / Haven</label><select class="sm-sel"><option'+(airbnb==='Yes'?' selected':'')+'>Yes — Aidi Haven</option><option>No</option></select></div>' +
  '<div class="sm-fld"><label class="sm-lbl">Status</label><select class="sm-sel"><option>Open</option><option selected>Closed</option></select></div>';
}

function editPMCard(name, type, min, ret, desc, status) {
  return '<div class="sm-fld"><label class="sm-lbl">Deal Name</label><input class="sm-inp" value="'+name+'"></div>' +
  '<div class="sm-fld"><label class="sm-lbl">Type</label><input class="sm-inp" value="'+type+'"></div>' +
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">' +
  '<div class="sm-fld"><label class="sm-lbl">Min. Investment</label><input class="sm-inp" value="'+min+'"></div>' +
  '<div class="sm-fld"><label class="sm-lbl">Target Return</label><input class="sm-inp" value="'+ret+'"></div></div>' +
  '<div class="sm-fld"><label class="sm-lbl">Description</label><textarea class="sm-inp" rows="3" style="resize:none;">'+desc+'</textarea></div>' +
  '<div class="sm-fld"><label class="sm-lbl">Status</label><select class="sm-sel"><option'+(status==='Open'?' selected':'')+'>Open</option><option>Closed</option><option>Coming Soon</option></select></div>';
}

function saOpenSlide(key) {
  var d = _saSlideData[key];
  if (!d) { showToast('Details coming soon'); return; }
  var t = document.getElementById('saSlideTitle');
  var st = document.getElementById('saSlideSubtitle');
  var body = document.getElementById('saSlideBody');
  var foot = document.getElementById('saSlideFooter');
  if (t) t.textContent = d.title;
  if (st) st.textContent = d.sub || '';
  if (body) body.innerHTML = typeof d.body === 'function' ? d.body() : d.body;
  if (foot) foot.innerHTML = typeof d.foot === 'function' ? d.foot() : (d.foot||'<button class="sm-btn pri" onclick="saCloseSlide()">Close</button>');
  var ov = document.getElementById('saSlideOverlay');
  var panel = document.getElementById('saSlidePanel');
  if (ov) ov.classList.add('open');
  if (panel) panel.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function saCloseSlide() {
  var ov = document.getElementById('saSlideOverlay');
  var panel = document.getElementById('saSlidePanel');
  if (ov) ov.classList.remove('open');
  if (panel) panel.classList.remove('open');
  document.body.style.overflow = '';
}

// AP filter for trade centre
function filterAP2(type, btn, listId) {
  var list = document.getElementById(listId);
  if (!list) return;
  // Update pill
  var bar = btn.parentElement;
  bar.querySelectorAll('.ap-filter').forEach(function(p){ p.classList.remove('active-filter'); });
  btn.classList.add('active-filter');
  list.querySelectorAll('.ap-item').forEach(function(item){
    item.style.display = (type==='all' || item.dataset.type===type) ? '' : 'none';
  });
}

// Delete handlers
function saDeleteRE(cardId, name) {
  if (!confirm('Delete listing "'+name+'"? This cannot be undone.')) return;
  var el = document.getElementById(cardId);
  if (el) { el.style.transition='opacity .3s'; el.style.opacity='0'; setTimeout(function(){ el.remove(); }, 300); }
  showToast(name+' removed ✓');
}
function saDeletePM(cardId, name) {
  if (!confirm('Delete "'+name+'"? This cannot be undone.')) return;
  var el = document.getElementById(cardId);
  if (el) { el.style.transition='opacity .3s'; el.style.opacity='0'; setTimeout(function(){ el.remove(); }, 300); }
  showToast(name+' removed ✓');
}


function saAddMetalRow() {
  var name    = document.getElementById('ml-name')    ? document.getElementById('ml-name').value.trim()    : '';
  var metal   = document.getElementById('ml-metal')   ? document.getElementById('ml-metal').value           : '';
  var ptype   = document.getElementById('ml-type')    ? document.getElementById('ml-type').value            : '';
  var mint    = document.getElementById('ml-mint')    ? document.getElementById('ml-mint').value            : '';
  var weight  = document.getElementById('ml-weight')  ? document.getElementById('ml-weight').value.trim()  : '';
  var purity  = document.getElementById('ml-purity')  ? document.getElementById('ml-purity').value          : '';
  var spot    = document.getElementById('ml-spot')    ? document.getElementById('ml-spot').value.trim()    : '\u2014';
  var price   = document.getElementById('ml-price')   ? document.getElementById('ml-price').value.trim()   : '\u2014';
  var vault   = document.getElementById('ml-vault')   ? document.getElementById('ml-vault').value          : '';
  if (!name || !metal) { showToast('Please fill required fields'); return; }
  var tbody = document.getElementById('metalListingsBody');
  if (!tbody) return;
  var id = 'mlRow-' + Date.now();
  var metalTag = metal === 'Gold' ? '<span class="tag tag-gold">Gold</span>' :
                 metal === 'Silver' ? '<span class="tag" style="background:var(--cream-mid);color:var(--ink-soft);">Silver</span>' :
                 '<span class="tag tag-blue">'+metal+'</span>';
  var mintShort = mint.split('(')[0].trim();
  var purityShort = purity.split('(')[0].trim();
  var row = '<tr id="'+id+'">' +
    '<td><strong>'+name+'</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">'+ptype+'</span></td>' +
    '<td><span style="font-size:.78rem;font-weight:500;">'+mintShort+'</span></td>' +
    '<td>'+metalTag+'</td>' +
    '<td>'+weight+'</td>' +
    '<td>'+purityShort+'</td>' +
    '<td>'+spot+'</td>' +
    '<td style="font-weight:600;color:var(--ink);">'+price+'</td>' +
    '<td><span class="badge badge-active">Active</span></td>' +
    '<td style="white-space:nowrap;"><button class="btn-sm btn-outline" onclick="showToast(\'Edit coming soon\')" style="margin-right:4px;">Edit</button><button class="btn-sm btn-red" onclick="saDeleteMetalListing(\''+id+'\',\''+name+'\')">Del</button></td>' +
  '</tr>';
  tbody.insertAdjacentHTML('beforeend', row);
  showToast(name + ' listing added \u2713');
}

function saDeleteMetalListing(rowId, name) {
  if (!confirm('Remove "' + name + '" from the listings? This cannot be undone.')) return;
  var row = document.getElementById(rowId);
  if (row) {
    row.style.transition = 'opacity .3s';
    row.style.opacity = '0';
    setTimeout(function() { row.remove(); }, 300);
  }
  showToast(name + ' removed \u2713');
}


function saApprovalFooter(key, client, amount) {
  return '<button class="sm-btn sec" onclick="saApprovalAction(\'deny\',\''+key+'\',\''+client+'\',\''+amount+'\')">Deny</button>' +
         '<button class="sm-btn pri" onclick="saApprovalAction(\'approve\',\''+key+'\',\''+client+'\',\''+amount+'\')">Approve</button>';
}

function saApprovalAction(action, key, client, amount) {
  saCloseSlide();
  if (action === 'approve') {
    // Find and fade the ap-item
    var items = document.querySelectorAll('#ap-list .ap-item');
    items.forEach(function(item) {
      if (item.getAttribute('onclick') && item.getAttribute('onclick').indexOf(key) !== -1) {
        item.style.transition = 'opacity .4s';
        item.style.opacity = '0';
        setTimeout(function(){ item.remove(); }, 400);
      }
    });
    // Show approval notice
    setTimeout(function(){
      var notice = document.createElement('div');
      notice.style.cssText = 'position:fixed;bottom:28px;right:28px;background:var(--ink);color:white;border-radius:14px;padding:16px 22px;z-index:2000;box-shadow:0 8px 32px rgba(12,26,46,.2);animation:fadeUp .3s ease;max-width:360px;';
      notice.innerHTML = '<div style="font-size:.82rem;font-weight:600;margin-bottom:6px;">✓ Approved — ' + client + '</div>' +
        '<div style="font-size:.77rem;color:rgba(255,255,255,.7);line-height:1.5;">Wallet debited <strong style="color:var(--gold);">' + amount + '</strong>. Client notified by email. Transaction logged.</div>';
      document.body.appendChild(notice);
      setTimeout(function(){ notice.style.transition='opacity .4s'; notice.style.opacity='0'; setTimeout(function(){ notice.remove(); }, 400); }, 4000);
    }, 100);
  } else {
    // Deny flow
    var reason = prompt('Reason for denial (optional):');
    var items = document.querySelectorAll('#ap-list .ap-item');
    items.forEach(function(item) {
      if (item.getAttribute('onclick') && item.getAttribute('onclick').indexOf(key) !== -1) {
        item.style.transition = 'opacity .4s'; item.style.opacity = '0';
        setTimeout(function(){ item.remove(); }, 400);
      }
    });
    setTimeout(function(){
      var notice = document.createElement('div');
      notice.style.cssText = 'position:fixed;bottom:28px;right:28px;background:#991B1B;color:white;border-radius:14px;padding:16px 22px;z-index:2000;box-shadow:0 8px 32px rgba(12,26,46,.2);animation:fadeUp .3s ease;max-width:360px;';
      notice.innerHTML = '<div style="font-size:.82rem;font-weight:600;margin-bottom:6px;">✗ Denied — ' + client + '</div>' +
        '<div style="font-size:.77rem;color:rgba(255,255,255,.75);line-height:1.5;">' + (reason ? reason : 'Request denied. ') + ' Client notified.</div>';
      document.body.appendChild(notice);
      setTimeout(function(){ notice.style.transition='opacity .4s'; notice.style.opacity='0'; setTimeout(function(){ notice.remove(); }, 400); }, 4000);
    }, 100);
  }
}


function filterAP(type, btn) {
  document.querySelectorAll('#sa-approvals .ap-filter').forEach(function(f){ f.classList.remove('active-filter'); });
  if (btn) btn.classList.add('active-filter');
  var items = document.querySelectorAll('#ap-list .ap-item');
  items.forEach(function(item){
    item.style.display = (type === 'all' || item.dataset.type === type) ? '' : 'none';
  });
}


function filterClientsType(type, btn) {
  document.querySelectorAll('#sa-clients .ap-filter').forEach(function(f){ f.classList.remove('active-filter'); });
  if (btn) btn.classList.add('active-filter');
  document.querySelectorAll('#clients-list .ap-item').forEach(function(item){
    item.style.display = (type === 'all' || item.dataset.type === type) ? '' : 'none';
  });
}


// SA New Client modal steps
var _saNcType = 'individual';
function saNcType(t) {
  _saNcType = t;
  var cards = { individual: 'saNcCardInd', business: 'saNcCardBiz' };
  Object.keys(cards).forEach(function(k) {
    var el = document.getElementById(cards[k]);
    if (!el) return;
    var icon = el.querySelector('svg');
    var lbl  = el.querySelector('div[id]') || el.querySelector('div:nth-child(2)');
    if (k === t) {
      el.style.borderColor = 'var(--ink)';
      el.style.background  = 'var(--cream)';
      if (icon) icon.setAttribute('stroke', 'var(--ink)');
    } else {
      el.style.borderColor = 'var(--cream-dark)';
      el.style.background  = 'white';
      if (icon) icon.setAttribute('stroke', 'var(--ink-soft)');
    }
  });
}
function saNcActivateDot(n) {
  for (var i = 1; i <= 4; i++) {
    var dot = document.getElementById('saNcDot' + i);
    if (dot) {
      dot.style.background = i <= n ? 'var(--ink)' : 'var(--cream-dark)';
      dot.style.color      = i <= n ? 'white'      : 'var(--ink-muted)';
    }
  }
}
function saNcShowStep(step) {
  var allSteps = ['saNcStep1','saNcStep2Ind','saNcStep2Biz','saNcStep3','saNcStep4'];
  var allFoots = ['saNcFoot1','saNcFoot2Ind','saNcFoot2Biz','saNcFoot3','saNcFoot4'];
  allSteps.concat(allFoots).forEach(function(id){
    var el = document.getElementById(id); if (el) el.style.display = 'none';
  });
  if (step === 1) {
    document.getElementById('saNcStep1').style.display = '';
    document.getElementById('saNcFoot1').style.display = '';
    saNcActivateDot(1);
  } else if (step === 2) {
    var stepId = _saNcType === 'business' ? 'saNcStep2Biz' : 'saNcStep2Ind';
    var footId = _saNcType === 'business' ? 'saNcFoot2Biz' : 'saNcFoot2Ind';
    document.getElementById(stepId).style.display = '';
    document.getElementById(footId).style.display = '';
    saNcActivateDot(2);
  } else if (step === 3) {
    document.getElementById('saNcStep3').style.display = '';
    document.getElementById('saNcFoot3').style.display = '';
    // Show correct doc set
    var dInd = document.getElementById('saNcDocsInd');
    var dBiz = document.getElementById('saNcDocsBiz');
    if (dInd) dInd.style.display = _saNcType === 'individual' ? '' : 'none';
    if (dBiz) dBiz.style.display = _saNcType === 'business'   ? '' : 'none';
    saNcActivateDot(3);
  } else if (step === 4) {
    document.getElementById('saNcStep4').style.display = '';
    document.getElementById('saNcFoot4').style.display = '';
    saNcActivateDot(4);
  }
}
function saNcNext(step) { saNcShowStep(step + 1); }
function saNcBack(step) { saNcShowStep(step - 1); }
function saNcSubmit() {
  closeModal('modal-sa-new-client');
  showToast('Client account created ✓');
  // Reset for next use
  setTimeout(function(){ saNcShowStep(1); saNcType('individual'); }, 300);
}

function saFilterClients(type, btn) {
  document.querySelectorAll('#sa-clients .ap-filter').forEach(function(f){ f.classList.remove('active-filter'); });
  if(btn) btn.classList.add('active-filter');
  document.querySelectorAll('#clients-list .ap-item').forEach(function(item){
    item.style.display = (type==='all' || item.dataset.type===type) ? '' : 'none';
  });
}
function saSearchClients(q) {
  q = q.toLowerCase();
  document.querySelectorAll('#clients-list .ap-item').forEach(function(item){
    item.style.display = item.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}
function saFilterAdvisor(val) {
  document.querySelectorAll('#clients-list .ap-item').forEach(function(item){
    item.style.display = (!val || item.textContent.includes(val)) ? '' : 'none';
  });
}

// SA Client Profile
var _saCliProfiles = {
  'emeka': { name:'Emeka Okafor', sub:'Individual · WM-managed · Sarah Mensah · AUM $18.4M' },
  'fatima': { name:'Fatima Al-Rashid', sub:'Individual · WM-managed · Sarah Mensah · AUM $31.2M' },
  'kwame': { name:'Kwame Boateng', sub:'Individual · WM-managed · Sarah Mensah · Onboarding' },
  'priya': { name:'Priya Sharma', sub:'Individual · WM-managed · Sarah Mensah · AUM $4.2M' },
  'ibrahim': { name:'Ibrahim Hassan', sub:'Individual · WM-managed · Sarah Mensah · AUM $12.1M' },
  'aisha': { name:'Aisha Nwosu', sub:'Individual · Self-Signup · No WM · AUM $320K' },
  'tectona': { name:'Tectona Capital Ltd', sub:'Business · Corporate · James Osei · AUM $4.8M' }
};
function saOpenClientProfile(key) {
  var d = _saCliProfiles[key]; if(!d) return;
  document.getElementById('saClientProfileName').textContent = d.name;
  document.getElementById('saClientProfileSub').textContent  = d.sub;
  saCpTab('overview', key);
  document.getElementById('saClientProfileOv').style.display = 'block';
  document.body.style.overflow = 'hidden';
}
function saCloseClientProfile() {
  document.getElementById('saClientProfileOv').style.display = 'none';
  document.body.style.overflow = '';
}
function saCpTab(tab, key) {
  ['overview','docs','txns','compliance','msgs'].forEach(function(t){
    var el = document.getElementById('sacp-t-'+t);
    if(el){ el.style.borderBottomColor = t===tab?'var(--ink)':'transparent'; el.style.fontWeight=t===tab?'600':'400'; }
  });
  var body = document.getElementById('saClientProfileBody');
  if(!body) return;
  if(tab==='overview') {
    body.innerHTML = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">' +
      '<div class="stat-card"><div class="stat-card-val">$4.2M</div><div class="stat-card-lbl">Total AUM</div></div>' +
      '<div class="stat-card"><div class="stat-card-val">+12.4%</div><div class="stat-card-lbl">YTD Return</div></div>' +
      '<div class="stat-card"><div class="stat-card-val">3</div><div class="stat-card-lbl">Active Investments</div></div>' +
      '<div class="stat-card"><div class="stat-card-val">Elite</div><div class="stat-card-lbl">Plan</div></div>' +
      '</div>' +
      '<div class="activity-card-db" style="margin-bottom:16px;"><div class="activity-card-db-head"><span class="activity-card-db-head-title">Portfolio Breakdown</span></div>' +
      '<div style="padding:14px 20px;">' +
      [['US Equities','$1.89M','45%','var(--blue)'],['Gold (Physical)','$504K','12%','var(--gold)'],['Real Estate','$630K','15%','var(--green)'],['Cash','$1.17M','28%','var(--ink-muted)']].map(function(r){
        return '<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--cream);"><div style="width:10px;height:10px;border-radius:50%;background:'+r[3]+';flex-shrink:0;"></div><div style="flex:1;font-size:.84rem;">'+r[0]+'</div><div style="font-size:.84rem;font-weight:600;">'+r[1]+'</div><div style="font-size:.78rem;color:var(--ink-muted);width:36px;text-align:right;">'+r[2]+'</div></div>';
      }).join('') +
      '</div></div>';
  } else if(tab==='docs') {
    body.innerHTML = '<div class="activity-card-db"><div class="activity-card-db-head"><span class="activity-card-db-head-title">KYC & Compliance Documents</span><button class="btn-sm btn-ink" onclick="openModal(\'modal-upload-doc\')">+ Upload Doc</button></div>' +
      [['Passport / Government ID','Jan 12, 2026','Verified ✓','badge-active'],
       ['Proof of Address','Jan 12, 2026','Verified ✓','badge-active'],
       ['Source of Funds Declaration','Jan 15, 2026','Verified ✓','badge-active'],
       ['Suitability Assessment','Jan 20, 2026','Completed ✓','badge-active'],
       ['Investment Advisory Agreement','Jan 12, 2026','Signed ✓','badge-active']].map(function(d){
        return '<div class="ap-item" style="cursor:default;"><div class="ap-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div class="ap-body"><div class="ap-title">'+d[0]+'</div><div class="ap-meta">Uploaded '+d[1]+'</div></div><span class="badge '+d[3]+'">'+d[2]+'</span></div>';
      }).join('') + '</div>';
  } else if(tab==='txns') {
    body.innerHTML = '<div class="activity-card-db"><div class="activity-card-db-head"><span class="activity-card-db-head-title">Transaction History</span></div>' +
      [['Apr 9, 2026','Real Estate — Modern Stylish Home','$5,000','Pending','badge-waiting'],
       ['Apr 9, 2026','Gold Purchase — Physical','$25,000','Pending','badge-waiting'],
       ['Apr 9, 2026','Plan Upgrade to Elite','$9,600/yr','Approved','badge-active'],
       ['Mar 5, 2026','SPY BUY — US Equities','$80,000','Executed','badge-active'],
       ['Feb 12, 2026','Gold (IAU) — 3oz added','$9,426','Completed','badge-active']].map(function(t){
        return '<div class="ap-item" style="cursor:default;"><div class="ap-body"><div class="ap-title">'+t[1]+' <span style="font-weight:600;margin-left:6px;">'+t[2]+'</span></div><div class="ap-meta">'+t[0]+'</div></div><span class="badge '+t[4]+'">'+t[3]+'</span></div>';
      }).join('') + '</div>';
  } else if(tab==='compliance') {
    body.innerHTML = '<div class="activity-card-db"><div class="activity-card-db-head"><span class="activity-card-db-head-title">Compliance Status</span></div>' +
      '<div style="padding:14px 20px;">' +
      [['KYC Status','Clean ✓','var(--green)'],['Annual Review','Due Jan 12, 2027','var(--ink)'],['Risk Profile','Medium','var(--ink)'],['Accreditation','Standard — open access','var(--ink)'],['PEP / Sanctions','Clear ✓','var(--green)'],['Last Review','Jan 2026','var(--ink)']].map(function(r){
        return '<div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--cream);font-size:.83rem;"><span style="color:var(--ink-muted);">'+r[0]+'</span><span style="font-weight:500;color:'+r[2]+';">'+r[1]+'</span></div>';
      }).join('') + '</div></div>';
  } else if(tab==='msgs') {
    body.innerHTML = '<div class="activity-card-db"><div class="activity-card-db-head"><span class="activity-card-db-head-title">Message History</span><button class="btn-sm btn-ink" onclick="showToast(\'Message window opened\')">New Message</button></div>' +
      '<div style="padding:14px 20px;display:flex;flex-direction:column;gap:10px;">' +
      '<div style="background:var(--cream);border-radius:10px;padding:10px 14px;max-width:80%;"><div style="font-size:.72rem;color:var(--ink-muted);margin-bottom:3px;">Priya Sharma · Apr 9</div><div style="font-size:.83rem;">Hi, I wanted to confirm my gold purchase order. Can you let me know when it\'s approved?</div></div>' +
      '<div style="background:var(--ink);border-radius:10px;padding:10px 14px;max-width:80%;align-self:flex-end;"><div style="font-size:.72rem;color:rgba(255,255,255,.5);margin-bottom:3px;">Admin · Apr 9</div><div style="font-size:.83rem;color:white;">Your gold purchase of $25,000 is currently pending admin approval. You\'ll be notified once it\'s confirmed.</div></div>' +
      '</div></div>';
  }
}

// SA Messages
var _saMsgThreads = [
  { id:'t1', name:'Priya Sharma', type:'client', last:'Can you confirm my gold order?', time:'Apr 9', unread:2 },
  { id:'t2', name:'Sarah Mensah', type:'wm', last:'Batch trade submission for 8 clients', time:'Apr 11', unread:0 },
  { id:'t3', name:'Emeka Okafor', type:'client', last:'Update on Termii allocation', time:'Apr 10', unread:1 },
  { id:'t4', name:'James Osei', type:'wm', last:'New client onboarded — Tectona Capital', time:'Apr 5', unread:0 },
  { id:'t5', name:'Ibrahim Hassan', type:'client', last:'Passport renewal — sent via email', time:'Apr 3', unread:0 }
];
var _saMsgActive = null;
var _saMsgConvs = {
  't1': [
    { from:'Priya Sharma', dir:'in', text:'Hi, I wanted to confirm my gold purchase order. Can you let me know when it\'s approved?', time:'Apr 9, 10:14' },
    { from:'Admin', dir:'out', text:'Your gold purchase of $25,000 is currently pending admin approval. You\'ll be notified once confirmed.', time:'Apr 9, 10:22' },
    { from:'Priya Sharma', dir:'in', text:'Thank you! Also, is my real estate investment going through as well?', time:'Apr 9, 10:25' }
  ],
  't2': [
    { from:'Sarah Mensah', dir:'in', text:'Batch trade submission for 8 clients ready. All client-authorised. Please review when possible.', time:'Apr 11, 09:42' },
    { from:'Admin', dir:'out', text:'Received. Reviewing now — will approve or flag within 30 minutes.', time:'Apr 11, 09:55' }
  ],
  't3': [
    { from:'Emeka Okafor', dir:'in', text:'Hi, any update on the Termii allocation? We submitted last week.', time:'Apr 10, 14:30' }
  ],
  't4': [
    { from:'James Osei', dir:'in', text:'Just onboarded a new corporate client — Tectona Capital Ltd. Documents uploaded.', time:'Apr 5, 11:00' },
    { from:'Admin', dir:'out', text:'Great, we\'ve received the docs. Enhanced KYC review started.', time:'Apr 5, 11:20' }
  ],
  't5': [
    { from:'Ibrahim Hassan', dir:'in', text:'I\'ve submitted my passport renewal via email. Please confirm receipt.', time:'Apr 3, 09:15' },
    { from:'Admin', dir:'out', text:'Received your passport renewal document. KYC will be updated within 2 business days.', time:'Apr 3, 09:45' }
  ]
};

function saMsgsInit() {
  var list = document.getElementById('saMsgThreadList');
  if(!list || list.innerHTML.trim()) return;
  list.innerHTML = _saMsgThreads.map(function(t){
    var typeTag = t.type==='wm' ? '<span style="font-size:.63rem;background:#EEF2FF;color:var(--blue);padding:1px 6px;border-radius:4px;margin-left:4px;">WM</span>' : '';
    var unreadDot = t.unread ? '<div style="width:8px;height:8px;border-radius:50%;background:var(--blue);flex-shrink:0;"></div>' : '';
    return '<div onclick="saMsgsOpen(\''+t.id+'\')" id="saMsgThread-'+t.id+'" style="padding:12px 14px;border-bottom:1px solid var(--cream-mid);cursor:pointer;display:flex;align-items:flex-start;gap:10px;transition:background .13s;" onmouseover="this.style.background=\'var(--cream)\'" onmouseout="this.style.background=(\''+t.id+'\'===_saMsgActive?\'var(--cream-mid)\':\'\')">'+
      '<div style="width:34px;height:34px;border-radius:50%;background:var(--ink);color:white;display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:700;flex-shrink:0;">'+t.name.charAt(0)+'</div>'+
      '<div style="flex:1;min-width:0;">'+
        '<div style="display:flex;align-items:center;justify-content:space-between;"><span style="font-size:.83rem;font-weight:600;">'+t.name+typeTag+'</span><span style="font-size:.72rem;color:var(--ink-muted);">'+t.time+'</span></div>'+
        '<div style="font-size:.76rem;color:var(--ink-muted);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+t.last+'</div>'+
      '</div>'+unreadDot+
    '</div>';
  }).join('');
}

function saMsgsOpen(id) {
  _saMsgActive = id;
  var thread = _saMsgThreads.find(function(t){ return t.id===id; });
  if(!thread) return;
  // Mark as read
  thread.unread = 0;
  var dot = document.querySelector('#saMsgThread-'+id+' div[style*="border-radius:50%;background:var(--blue)"]');
  if(dot) dot.remove();
  // Header
  var hdr = document.getElementById('saMsgChatHeader');
  if(hdr) hdr.innerHTML = '<div style="font-size:.88rem;font-weight:600;color:var(--ink);">'+thread.name+'</div><div style="font-size:.74rem;color:var(--ink-muted);">'+(thread.type==='wm'?'Wealth Manager':'Client')+'</div>';
  // Messages
  var msgs = document.getElementById('saMsgChatMsgs');
  var convs = _saMsgConvs[id] || [];
  if(msgs) msgs.innerHTML = convs.map(function(m){
    var isOut = m.dir==='out';
    var content = m.html ? m.html : ('<div style="max-width:72%;padding:9px 13px;border-radius:'+(isOut?'14px 4px 14px 14px':'4px 14px 14px 14px')+';font-size:.83rem;line-height:1.5;background:'+(isOut?'var(--ink)':'var(--cream)')+';color:'+(isOut?'white':'var(--ink)')+';">'+m.text+'</div>');
    return '<div style="display:flex;flex-direction:column;align-items:'+(isOut?'flex-end':'flex-start')+';gap:2px;">'
      +'<div style="font-size:.7rem;color:var(--ink-muted);">'+m.from+' · '+m.time+'</div>'
      +content
      +'</div>';
  }).join('');
  var inp = document.getElementById('saMsgChatInput');
  if(inp) inp.style.display = 'flex';
}

function saMsgsNewConv() {
  // Populate recipient list then open modal
  var recipients = [
    { id:'t1', name:'Priya Sharma',   type:'client', sub:'Individual · WM-managed' },
    { id:'t2', name:'Sarah Mensah',   type:'wm',     sub:'CFA · Meridian Private Wealth' },
    { id:'t3', name:'Emeka Okafor',   type:'client', sub:'Individual · WM-managed' },
    { id:'t4', name:'James Osei',     type:'wm',     sub:'CFP · Aidi Direct' },
    { id:'t5', name:'Ibrahim Hassan', type:'client', sub:'Individual · WM-managed' },
    { id:'t6', name:'Fatima Al-Rashid', type:'client', sub:'Individual · WM-managed' },
    { id:'t7', name:'Kwame Boateng',  type:'client', sub:'Onboarding · WM-managed' },
    { id:'t8', name:'Aisha Nwosu',    type:'client', sub:'Individual · Self-Signup' },
    { id:'t9', name:'Amara Diallo',   type:'wm',     sub:'CAIA · Continental Wealth' },
  ];
  window._saNmRecipients = recipients;
  saNmRender(recipients);
  document.getElementById('saNmSearch').value = '';
  openModal('modal-sa-new-msg');
  setTimeout(function(){
    var s = document.getElementById('saNmSearch');
    if (s) s.focus();
  }, 150);
}

function saNmRender(list) {
  var container = document.getElementById('saNmList');
  if (!container) return;
  if (!list.length) {
    container.innerHTML = '<div style="padding:20px;text-align:center;font-size:.82rem;color:var(--ink-muted);">No results</div>';
    return;
  }
  container.innerHTML = list.map(function(r) {
    var typeTag = r.type === 'wm'
      ? '<span style="font-size:.65rem;background:#EEF2FF;color:var(--blue);padding:1px 6px;border-radius:4px;margin-left:5px;font-weight:600;">WM</span>'
      : '<span style="font-size:.65rem;background:var(--cream-mid);color:var(--ink-soft);padding:1px 6px;border-radius:4px;margin-left:5px;">Client</span>';
    var av = r.name.split(' ').map(function(w){return w[0];}).join('').slice(0,2).toUpperCase();
    var avBg = r.type === 'wm' ? 'var(--blue)' : 'var(--ink)';
    return '<div onclick="saNmSelect(\'' + r.id + '\',\'' + r.name.replace(/'/g,"\\'") + '\',\'' + r.type + '\')" style="display:flex;align-items:center;gap:10px;padding:11px 14px;cursor:pointer;border-bottom:1px solid var(--cream-mid);transition:background .13s;" onmouseover="this.style.background=\'var(--cream)\'" onmouseout="this.style.background=\'\'">'
      + '<div style="width:34px;height:34px;border-radius:50%;background:' + avBg + ';color:white;display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:700;flex-shrink:0;">' + av + '</div>'
      + '<div style="flex:1;min-width:0;">'
      +   '<div style="font-size:.84rem;font-weight:600;">' + r.name + typeTag + '</div>'
      +   '<div style="font-size:.74rem;color:var(--ink-muted);margin-top:1px;">' + r.sub + '</div>'
      + '</div>'
      + '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>'
      + '</div>';
  }).join('');
}

function saNmFilter(q) {
  var list = (window._saNmRecipients || []).filter(function(r){
    return r.name.toLowerCase().includes(q.toLowerCase()) || r.sub.toLowerCase().includes(q.toLowerCase());
  });
  saNmRender(list);
}

function saNmSelect(threadId, name, type) {
  var modalEl = document.getElementById('modal-sa-new-msg');
  if (modalEl) modalEl.classList.remove('open');
  // Check if thread already exists
  var existing = _saMsgThreads.find(function(t){ return t.id === threadId; });
  if (!existing) {
    _saMsgThreads.unshift({ id:threadId, name:name, type:type, last:'', time:'Now', unread:0 });
    _saMsgConvs[threadId] = [];
    // Re-init thread list
    document.getElementById('saMsgThreadList').innerHTML = '';
    saMsgsInit();
  }
  setTimeout(function(){ saMsgsOpen(threadId); }, 100);
}

var _saMsgAttachments = [];

function saMsgsHandleFiles(files) {
  if (!files || !files.length) return;
  Array.from(files).forEach(function(file) {
    var id = 'att-' + Date.now() + '-' + Math.random().toString(36).slice(2,6);
    _saMsgAttachments.push({ id:id, file:file, name:file.name, size:file.size, type:file.type });
    saMsgsRenderAttachPreview();
  });
}

function saMsgsRenderAttachPreview() {
  var strip = document.getElementById('saMsgAttachPreview');
  if (!strip) return;
  if (!_saMsgAttachments.length) { strip.style.display='none'; strip.innerHTML=''; return; }
  strip.style.display = 'flex';
  strip.innerHTML = _saMsgAttachments.map(function(a) {
    var isImg = a.type.startsWith('image/');
    var icon = isImg
      ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'
      : '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
    var shortName = a.name.length > 18 ? a.name.slice(0,15)+'…' : a.name;
    return '<div id="prev-' + a.id + '" style="display:flex;align-items:center;gap:5px;padding:4px 8px;background:var(--cream);border:1px solid var(--cream-dark);border-radius:7px;font-size:.74rem;max-width:160px;">'
      + icon
      + '<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;">' + shortName + '</span>'
      + '<button onclick="saMsgsRemoveAttach(\'' + a.id + '\')" style="width:14px;height:14px;border:none;background:none;cursor:pointer;color:var(--ink-muted);padding:0;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
      + '<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      + '</button></div>';
  }).join('');
}

function saMsgsRemoveAttach(id) {
  _saMsgAttachments = _saMsgAttachments.filter(function(a){ return a.id !== id; });
  saMsgsRenderAttachPreview();
}

function saMsgsSend() {
  var box = document.getElementById('saMsgInputBox');
  var hasText = box && box.value.trim();
  var hasFiles = _saMsgAttachments.length > 0;
  if (!_saMsgActive || (!hasText && !hasFiles)) return;

  if (!_saMsgConvs[_saMsgActive]) _saMsgConvs[_saMsgActive] = [];

  // Add file messages first
  var thread = _saMsgThreads.find(function(t){ return t.id === _saMsgActive; });
  _saMsgAttachments.forEach(function(a) {
    var isImg = a.type.startsWith('image/');
    var fileHtml = '<div style="display:flex;align-items:center;gap:7px;padding:6px 10px;background:rgba(255,255,255,.12);border-radius:7px;font-size:.78rem;margin-top:4px;">'
      + (isImg ? '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' : '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>')
      + '<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + a.name + '</span>'
      + '<span style="opacity:.6;font-size:.7rem;">' + (a.size > 1024*1024 ? (a.size/1024/1024).toFixed(1)+'MB' : Math.round(a.size/1024)+'KB') + '</span>'
      + '</div>';
    _saMsgConvs[_saMsgActive].push({ from:'Admin', dir:'out', html:fileHtml, text:'📎 ' + a.name, time:'Now' });
    // Notify: file added to documents
    if (thread) showToast(a.name + ' sent & saved to ' + thread.name + '\'s documents ✓');
  });
  _saMsgAttachments = [];
  saMsgsRenderAttachPreview();

  // Add text message
  if (hasText) {
    _saMsgConvs[_saMsgActive].push({ from:'Admin', dir:'out', text:box.value.trim(), time:'Now' });
    box.value = '';
  }

  saMsgsOpen(_saMsgActive);
  // Scroll to bottom
  var msgsEl = document.getElementById('saMsgChatMsgs');
  if (msgsEl) setTimeout(function(){ msgsEl.scrollTop = msgsEl.scrollHeight; }, 50);
}


function saMsgsFilter(type, btn) {
  document.querySelectorAll('#sa-msgs .ap-filter').forEach(function(f){ f.classList.remove('active-filter'); });
  if(btn) btn.classList.add('active-filter');
  document.querySelectorAll('#saMsgThreadList > div').forEach(function(item){
    var isWm = item.innerHTML.includes('WM</span>');
    var hasUnread = item.innerHTML.includes('background:var(--blue)');
    if(type==='all') item.style.display='';
    else if(type==='wm') item.style.display=isWm?'':'none';
    else if(type==='client') item.style.display=(!isWm)?'':'none';
    else if(type==='unread') item.style.display=hasUnread?'':'none';
  });
}


function saProfileToggleCompose() {
  var box = document.getElementById('saProfileComposeBox');
  var btn = document.getElementById('saProfileMsgBtn');
  if (!box) return;
  var isOpen = box.style.display !== 'none';
  box.style.display = isOpen ? 'none' : 'block';
  if (btn) btn.textContent = isOpen ? 'Message' : 'Cancel';
  if (!isOpen) {
    var ta = document.getElementById('saProfileComposeText');
    var name = document.getElementById('saClientProfileName');
    var lbl = document.getElementById('saProfileComposeTo');
    if (lbl && name) lbl.textContent = 'Message to ' + name.textContent;
    if (ta) { ta.value = ''; setTimeout(function(){ ta.focus(); }, 50); }
  }
}

function saProfileSendMsg() {
  var ta = document.getElementById('saProfileComposeText');
  if (!ta || !ta.value.trim()) return;
  showToast('Message sent \u2713');
  ta.value = '';
  saProfileToggleCompose();
}
