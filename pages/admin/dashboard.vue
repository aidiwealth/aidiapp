<template>
  <!-- ═════════════════════════════════════════════════════════════════
       Super admin dashboard
       Source: aidi_internal_v3.html
       Layout: internal
       DO NOT modify HTML/CSS/JS structurally — handlers are defined in
       the zone's JS bundle (loaded by the layout) and bound by id/class.
       ═════════════════════════════════════════════════════════════════ -->
  <div class="aidi-route-wrapper">
    <div id="screen-admin" class="screen">
    <div class="db-shell">
      <header class="db-topbar">
        <div class="db-topbar-logo" onclick="saNav('home')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25675.8 23448.1" width="28" height="26" style="display:block;flex-shrink:0;"><path fill="#0c2057" d="M23266.6 14962.5c7.4,9.7 17.8,11.9 21.6,29.5l466.9 1086.6c251.8,922.3 129.4,1643.7 -247.7,2482.8l-998.8 1178.4c-246.2,185.5 -509.8,353.6 -796.5,463.1 -1150,439 -2154.1,347.4 -3203.2,-293.6l-464 -365.1c-26.8,-151.2 -762.4,-673.1 -882.4,-768.7 -1008.7,-803.6 -2339.6,-1916.5 -3326.1,-2668.3l-2116.4 -1701.8c-863.1,-678 -2253.6,-1912.9 -3191.5,-2383 -545.5,-273.4 -1354.2,-522.4 -1987.2,-571 -265.2,-20.3 -603,-0.7 -876.9,-2.3 -1194,-6.9 -2484.2,562.2 -3398.3,1259.8 -1177.7,898.8 -1773.4,2029.9 -2130.6,3443.9 -315.9,1251 -66.6,3148.9 610.9,4262.5 458.3,753.3 879,1293.4 1602,1834.4 2691.1,2013.6 6325,1431.2 8302.2,-1309 473.8,-656.6 888.8,-1600 970.6,-2453.8 -131.5,-113.5 95,-426.5 -186.2,-776 -161.4,-200.5 -256.7,-312.4 -570.7,-394 -380.7,-98.9 -892.7,104.4 -1023.7,607.4 -31.5,120.8 16,276.6 -40.1,130.8 -74.1,88.8 -95.1,327.9 -118.6,428 -40.3,172.3 -74.9,291.6 -126.8,445.8 -1135.2,3371.5 -5999.1,3615.3 -7403.4,81.1 -1005,-2529.4 699.1,-5139.3 2930.2,-5585.2 1586.9,-317.2 2581.3,157.2 3490,883.1 1705.7,1362.6 3389.2,2698.8 5084.7,4078.8l1885.4 1512.7c113.1,95.5 199.5,170.7 312.2,260.5 1099,875.3 1730.4,1607.4 3173.3,1981.2 1688.2,437.3 3294.9,3.6 4517.5,-905.8l609.3 -536.1c119.3,-118.1 160.5,-190.9 267.2,-305.6 264.9,-284.7 513.3,-672.9 690.4,-1027.8 837.4,-1679 737.9,-3805.9 -272.3,-5480.3l-1580.9 -2428.2c-82.9,-123.7 -143.5,-235.1 -220.9,-351.8 -305,-459.3 -597.9,-917.5 -909.2,-1381.7 -159.7,-238.1 -288.5,-452.6 -450.4,-695l-4741.2 -7247.8c-330,-374.6 -432.1,-510.9 -875.7,-842.4l-711 -434.5c-272,-136.9 -518.7,-232.2 -827.1,-318.3 -998.4,-278.7 -2060.2,-235.3 -2983.8,71.1 -839.4,278.6 -1484.1,764.8 -2066.7,1369.7 -326.2,338.6 -888.1,1282.6 -1151.3,1712.3l-3317.8 5273c-142.9,241.7 -324.3,435.1 -344.3,791 -46.1,819 1120.9,1523.4 1838.3,397.5l1312.8 -2085.3c151.2,-235.8 299.5,-466.4 451.2,-694.2l1334.2 -2102.2c371,-621.2 1148.7,-1925.5 1681,-2328 99.4,-75.2 215.7,-173.4 331.9,-240.8 489.2,-283.6 1029.3,-506.2 1843.4,-444 988.5,75.6 1636.1,577.8 2124.6,1311.7l5185.9 7986.7c81.5,133.7 145,211.7 225.2,347.5 149.5,253.3 300.4,450.8 447.8,697.7l1754.8 2672.5c68.9,65.2 -6,35.2 76.2,40.4z"/></svg>
        </div>
        <div class="db-search" id="saSearchWrap"><div class="db-search-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><input class="db-search-input" type="text" id="saSearchInput" placeholder="Search clients, advisors, approvals, deals…" oninput="intSearchQuery(this.value,'sa')" onkeydown="intSearchKeyNav(event,'sa')" onfocus="intSearchQuery(this.value,'sa')" autocomplete="off"><div class="db-search-dropdown" id="saSearchDropdown"></div></div>
        <div class="db-topbar-spacer"></div>
        <button class="db-hamburger" onclick="toggleMobileNav('sa')" aria-label="Menu"><svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
        <div class="db-topbar-actions">
          <span class="role-pill" id="sa-role-pill" style="background:var(--gold-pale);color:var(--gold);">Super Admin</span>
          <div class="db-notif-btn" onclick="toggleNotif('sa-notif')"><svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg><div class="db-notif-badge">8</div></div>
          <div class="db-user-btn" onclick="toggleDrop('sa-udrop')">
            <div class="db-user-avatar" id="sa-av">SA</div>
            <div class="db-user-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
            <div class="user-dropdown" id="sa-udrop">
              <div class="user-dropdown-header"><div class="user-dropdown-avatar" id="sa-drop-av">SA</div><div><div class="user-dropdown-name" id="sa-drop-name">Super Admin</div><div class="user-dropdown-email" id="sa-drop-role">Full Platform Access</div></div></div>
              <div class="user-dropdown-divider"></div>
              <div class="user-dropdown-item" onclick="saNav('settings');toggleDrop('sa-udrop')"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>Settings</div>
              <div class="user-dropdown-divider"></div>
              <div class="user-dropdown-item danger" onclick="goScreen('screen-role')"><svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Log out</div>
            </div>
          </div>
        </div>
      </header>
      <div class="db-body">
        <nav class="db-sidebar" id="sa-sidebar"></nav>
        <div class="db-main">
          <div class="db-section active db-content" id="sa-home">
            <div class="nw-card"><div class="nw-card-inner">
              <div class="nw-card-label">Platform Overview</div>
              <div style="font-size:.8rem;color:rgba(255,255,255,.55);margin-bottom:14px;" id="sa-home-sub">Aidi Internal Platform</div>
              <div class="nw-card-value">$1.84B</div>
              <div class="nw-card-change">Total Platform AUM · All clients · All advisors</div>
              <div class="nw-card-stats">
                <div class="nw-card-stat"><div class="v">149</div><div class="l">Clients</div></div>
                <div class="nw-card-stat"><div class="v">8</div><div class="l">Advisors</div></div>
                <div class="nw-card-stat"><div class="v" style="color:#fbbf24;">23</div><div class="l">Pending Items</div></div>
                <div class="nw-card-stat"><div class="v" style="color:#f87171;">8</div><div class="l">Compliance Alerts</div></div>
              </div>
            </div></div>
            <div class="stats-row stats-row-4">
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div class="stat-card-val">8</div><div class="stat-card-lbl">Trade Instructions</div><div class="stat-card-chg" style="color:var(--gold);">Pending Review</div></div>
              <div class="stat-card"><div class="stat-card-icon" style="background:#F3E8FF;color:#7C3AED;"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/></svg></div><div class="stat-card-val">7</div><div class="stat-card-lbl">Entity Submissions</div><div class="stat-card-chg" style="color:var(--gold);">In Queue</div></div>
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--red-pale);color:var(--red);"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="stat-card-val">3</div><div class="stat-card-lbl">Compliance Urgent</div><div class="stat-card-chg" style="color:var(--red);">Action Required</div></div>
            </div>
            <div class="ai-cards">
              <div class="ai-card risk" onclick="openNoticeModal('sa-compliance')"><div class="ai-card-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div><div class="ai-card-type">Compliance Urgent</div><div class="ai-card-text">3 critical KYC gaps — Ibrahim Hassan (passport expiry), Kwame Boateng (5 missing docs), Emeka Okafor (trust deed outstanding).</div></div></div>
              <div class="ai-card alert" onclick="openNoticeModal('sa-pending')"><div class="ai-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div><div><div class="ai-card-type">23 Items Pending</div><div class="ai-card-text">Trade instructions, gold purchases, entity filings, and WM applications require admin action.</div></div></div>
              <div class="ai-card opp" onclick="openNoticeModal('sa-deal')"><div class="ai-card-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg></div><div><div class="ai-card-type">Deal Closing Soon</div><div class="ai-card-text">Bridge Loan Fund III closes in 14 days. $2.4M of $5M allocation remains. 3 advisors have qualified clients ready.</div></div></div>
            </div>

            <!-- ── Market News ── -->
            <div style="margin-top:28px;margin-bottom:14px;">
              <div style="font-family:'Cormorant Garamond',serif;font-size:1.45rem;font-weight:400;color:var(--ink);margin-bottom:3px;">Market News</div>
              <div style="font-size:.78rem;color:var(--ink-muted);font-weight:300;">Elia Intelligence</div>
            </div>
            <div class="activity-card-db" id="newsSection">
              <div class="activity-card-db-head">
                <div class="activity-card-db-head-title">Latest News</div>
                <a style="cursor:pointer;" onclick="this.textContent='Refreshed ✓';setTimeout(()=>this.textContent='Refresh',2000)">Refresh</a>
              </div>
              <div class="news-row" style="display:flex;align-items:flex-start;gap:16px;padding:16px 20px;border-bottom:1px solid var(--cream-mid);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''" onclick="intOpenNewsModal('meta')">
                <div style="flex:1;">
                  <div style="font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:5px;">Barron's · 11m ago</div>
                  <div style="font-size:.9rem;font-weight:500;color:var(--ink);line-height:1.4;margin-bottom:8px;">U.S. Court Rules That Meta Isn't a Monopoly</div>
                  <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;font-weight:600;color:var(--ink);">META <span style="color:var(--red);">▼ 0.44%</span></div>
                </div>
                <div style="width:88px;height:64px;border-radius:10px;background:linear-gradient(135deg,#c8d0d8,#5a6a7a);flex-shrink:0;"></div>
              </div>
              <div class="news-row" style="display:flex;align-items:flex-start;gap:16px;padding:16px 20px;border-bottom:1px solid var(--cream-mid);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''" onclick="intOpenNewsModal('lmt')">
                <div style="flex:1;">
                  <div style="font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:5px;">Reuters · 17m ago</div>
                  <div style="font-size:.9rem;font-weight:500;color:var(--ink);line-height:1.4;margin-bottom:8px;">Trump to Sell F-35s to Saudi Arabia. Why Lockheed Stock Is Rising.</div>
                  <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;font-weight:600;color:var(--ink);">LMT <span style="color:var(--green);">▲ 0.65%</span></div>
                </div>
                <div style="width:88px;height:64px;border-radius:10px;background:linear-gradient(135deg,#8fa8bc,#2a3a4a);flex-shrink:0;"></div>
              </div>
              <div class="news-row" style="display:flex;align-items:flex-start;gap:16px;padding:16px 20px;border-bottom:1px solid var(--cream-mid);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''" onclick="intOpenNewsModal('fed')">
                <div style="flex:1;">
                  <div style="font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:5px;">Financial Times · 23m ago</div>
                  <div style="font-size:.9rem;font-weight:500;color:var(--ink);line-height:1.4;margin-bottom:8px;">Fed Signals Rate Cuts May Come Later Than Expected as Inflation Remains Sticky</div>
                  <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;font-weight:600;color:var(--ink);">S&amp;P 500 <span style="color:var(--red);">▼ 0.25%</span></div>
                </div>
                <div style="width:88px;height:64px;border-radius:10px;background:linear-gradient(135deg,#d4c5b0,#7a6248);flex-shrink:0;"></div>
              </div>
              <div class="news-row" style="display:flex;align-items:flex-start;gap:16px;padding:16px 20px;border-bottom:1px solid var(--cream-mid);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''" onclick="intOpenNewsModal('btcnews')">
                <div style="flex:1;">
                  <div style="font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:5px;">Bloomberg · 41m ago</div>
                  <div style="font-size:.9rem;font-weight:500;color:var(--ink);line-height:1.4;margin-bottom:8px;">Bitcoin Surpasses $93,000 as Institutional Demand Drives New Highs</div>
                  <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;font-weight:600;color:var(--ink);">BTC <span style="color:var(--green);">▲ 3.33%</span></div>
                </div>
                <div style="width:88px;height:64px;border-radius:10px;background:linear-gradient(135deg,#e8d5b5,#8a6820);flex-shrink:0;"></div>
              </div>
              <div class="news-row" style="display:flex;align-items:flex-start;gap:16px;padding:16px 20px;cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''" onclick="intOpenNewsModal('gold')">
                <div style="flex:1;">
                  <div style="font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:5px;">WSJ · 1h ago</div>
                  <div style="font-size:.9rem;font-weight:500;color:var(--ink);line-height:1.4;margin-bottom:8px;">Gold Hits All-Time High Above $3,140 as Investors Seek Safe Haven Amid Tariff Uncertainty</div>
                  <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;font-weight:600;color:var(--ink);">Gold <span style="color:var(--green);">▲ 0.52%</span></div>
                </div>
                <div style="width:88px;height:64px;border-radius:10px;background:linear-gradient(135deg,#c8d5c0,#3a5a32);flex-shrink:0;"></div>
              </div>
              <div class="news-row" style="display:flex;align-items:flex-start;gap:16px;padding:16px 20px;cursor:pointer;transition:background .15s;border-top:1px solid var(--cream-mid);" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''" onclick="intOpenNewsModal('nvda')">
                <div style="flex:1;">
                  <div style="font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:5px;">CNBC · 1h 22m ago</div>
                  <div style="font-size:.9rem;font-weight:500;color:var(--ink);line-height:1.4;margin-bottom:8px;">NVIDIA Extends Lead in AI Chips as Data Centre Demand Accelerates</div>
                  <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;font-weight:600;color:var(--ink);">NVDA <span style="color:var(--green);">▲ 2.63%</span></div>
                </div>
                <div style="width:88px;height:64px;border-radius:10px;background:linear-gradient(135deg,#d0e8d0,#2a5a3a);flex-shrink:0;"></div>
              </div>
              <div style="padding:10px 16px;font-size:.72rem;color:var(--ink-muted);text-align:center;border-top:1px solid var(--cream-mid);">Aidi curates public news for informational purposes only. This is not investment advice.</div>
            </div>
            <!-- ── Legal disclaimer ── -->
            <div style="padding:0 0 32px;max-width:100%;margin-top:8px;">
              <div style="padding-top:20px;font-size:.72rem;color:var(--ink-muted);line-height:1.8;border-top:1px solid var(--cream-mid);">
                <p style="font-weight:600;margin-bottom:8px;">Platform Disclaimer</p>
                <p style="margin-bottom:8px;">Aidi is a technology company that provides access to financial tools, insights, and infrastructure. Aidi and its affiliates are not broker-dealers, custodians, or registered investment advisors.</p>
                <p style="margin-bottom:8px;">This internal platform is restricted to authorised Aidi personnel only. All actions performed on this platform are audit-logged and subject to internal compliance review. Unauthorised access or misuse of platform capabilities may constitute a violation of applicable law.</p>
                <p style="margin-bottom:8px;">Securities brokerage and related services are provided by third-party partners, including Alpaca Securities LLC (member FINRA/SIPC). Cryptocurrency trading services are offered through Alpaca Crypto LLC. Wallet and cash management services are provided through third-party banking partners, including Choice Financial Group and Column N.A., Members FDIC.</p>
                <p style="margin-bottom:8px;">All investments involve risk, including the potential loss of principal. Past performance is not indicative of future results. Information on this platform is for internal operational use only and does not constitute investment, legal, or tax advice.</p>
                <p>Aidi aggregates data from third-party providers and partners; while we strive for accuracy, we do not guarantee completeness or reliability. This platform is intended for use by licensed, authorised financial professionals only.</p>
              </div>
            </div>
          </div>
                <div class="db-section db-content" id="sa-approvals">
            <div class="page-header" style="margin-bottom:18px;"><h1>Approval Queue</h1><p>Click any item to review details and take action.</p></div>
            <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px;">
              <span onclick="filterAP('all',this)" class="ap-filter active-filter">All (6)</span>
              <span onclick="filterAP('gold',this)" class="ap-filter">Gold &amp; Metals</span>
              <span onclick="filterAP('trade',this)" class="ap-filter">Trades</span>
              <span onclick="filterAP('entity',this)" class="ap-filter">Entities</span>
              <span onclick="filterAP('realestate',this)" class="ap-filter">Real Estate</span>
              <span onclick="filterAP('plan',this)" class="ap-filter">Plans</span>
            </div>
            <div id="ap-list" class="ap-list">

              <!-- Gold purchase -->
              <div class="ap-item ap-clickable" data-type="gold" onclick="saOpenSlide('ap-gold-priya')">
                <div class="ap-icon" style="background:var(--gold-pale);color:var(--gold);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div class="ap-body">
                  <div class="ap-title">Gold Purchase — Priya Sharma <span class="tag tag-gold" style="margin-left:6px;">$25,000</span></div>
                  <div class="ap-meta">WM: Sarah Mensah · Apr 9, 2026 · ~12 troy oz · Citadel Vault, Oklahoma City · T+2</div>
                </div>
                <div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>

              <!-- Private market -->
              <div class="ap-item ap-clickable" data-type="trade" onclick="saOpenSlide('ap-pm-emeka')">
                <div class="ap-icon" style="background:var(--blue-pale);color:var(--blue);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div class="ap-body">
                  <div class="ap-title">Private Markets — Termii — Emeka Okafor <span class="tag tag-blue" style="margin-left:6px;">$50,000</span></div>
                  <div class="ap-meta">WM: Sarah Mensah · Apr 10, 2026 · Accredited investor · Auth confirmed · AI Payments Infrastructure</div>
                </div>
                <div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>

              <!-- Entity LLC -->
              <div class="ap-item ap-clickable" data-type="entity" onclick="saOpenSlide('ap-llc-emeka')">
                <div class="ap-icon" style="background:#F3E8FF;color:#7C3AED;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div class="ap-body">
                  <div class="ap-title">LLC Formation — Emeka Okafor <span class="tag tag-purple" style="margin-left:6px;">Delaware LLC</span></div>
                  <div class="ap-meta">Apr 6, 2026 · Member-managed · Investment Holding · Setup fee: $740</div>
                </div>
                <div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>

              <!-- Real estate -->
              <div class="ap-item ap-clickable" data-type="realestate" onclick="saOpenSlide('ap-re-priya')">
                <div class="ap-icon" style="background:var(--green-pale);color:var(--green);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div class="ap-body">
                  <div class="ap-title">Real Estate Investment — Modern Stylish Home — Priya Sharma <span class="tag tag-green" style="margin-left:6px;">$5,000</span></div>
                  <div class="ap-meta">WM: Sarah Mensah · Apr 9, 2026 · 1 Year · 4.5% p.a. · Aidi Haven · Accredited</div>
                </div>
                <div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>

              <!-- Plan upgrade -->
              <div class="ap-item ap-clickable" data-type="plan" onclick="saOpenSlide('ap-plan-priya')">
                <div class="ap-icon" style="background:var(--blue-pale);color:var(--blue);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div class="ap-body">
                  <div class="ap-title">Plan Upgrade — Priya Sharma <span class="tag tag-green" style="margin-left:6px;">Premium → Elite</span></div>
                  <div class="ap-meta">Apr 9, 2026 · $4,800/yr → $9,600/yr · Payment confirmed · INV-20260409-8821</div>
                </div>
                <div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>

              <!-- Silver purchase -->
              <div class="ap-item ap-clickable" data-type="gold" onclick="saOpenSlide('ap-silver-fatima')">
                <div class="ap-icon" style="background:var(--cream-mid);color:var(--ink-soft);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div class="ap-body">
                  <div class="ap-title">Silver Purchase — Fatima Al-Rashid <span class="tag tag-gold" style="margin-left:6px;">$80,000</span></div>
                  <div class="ap-meta">WM: Sarah Mensah · Apr 7, 2026 · ~2,500 troy oz · Citadel Vault, Oklahoma City · T+2</div>
                </div>
                <div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>

            </div>
          </div>
                            <div class="db-section db-content" id="sa-trade">
            <div class="page-hrow" style="margin-bottom:22px;">
              <div class="page-header"><h1>Trade Centre</h1><p>Manage listings, precious metals, and alternative investment opportunities.</p></div>
          
            </div>

            <!-- ── 3 sub-menu tabs ── -->
            <div style="display:flex;gap:0;background:var(--cream);border-radius:14px;padding:4px;width:fit-content;margin-bottom:22px;" id="saTradeSubBar">
              <button class="sa-sub-tab active" id="saSub-metals" onclick="saSubTab('metals',this)">Precious Metals</button>
              <button class="sa-sub-tab" id="saSub-realestate" onclick="saSubTab('realestate',this)">Real Estate &amp; Airbnb</button>
              <button class="sa-sub-tab" id="saSub-private" onclick="saSubTab('private',this)">Private Markets</button>
            </div>

            <!-- ══════════════════ PRECIOUS METALS ══════════════════ -->
            <div id="saPane-metals">
              <div class="stats-row" style="margin-bottom:18px;">
                <div class="stat-card"><div class="stat-card-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg></div><div class="stat-card-val">$2.4M</div><div class="stat-card-lbl">Gold Custody</div></div>
                <div class="stat-card"><div class="stat-card-icon" style="background:var(--cream-mid);color:var(--ink-soft);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg></div><div class="stat-card-val">$580K</div><div class="stat-card-lbl">Silver Custody</div></div>
                <div class="stat-card"><div class="stat-card-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="stat-card-val">5</div><div class="stat-card-lbl">Pending Approvals</div></div>
              </div>
              <div class="activity-card-db" style="margin-bottom:14px;">
                <div class="activity-card-db-head">
                  <span class="activity-card-db-head-title">Precious Metals Performance</span>
                  <div style="display:flex;gap:6px;">
                    <button class="sa-trade-tab active" id="metalTab-gold" onclick="saMetalTab('gold',this)" style="font-size:.73rem;padding:4px 12px;">Gold</button>
                    <button class="sa-trade-tab" id="metalTab-silver" onclick="saMetalTab('silver',this)" style="font-size:.73rem;padding:4px 12px;">Silver</button>
                    <button class="sa-trade-tab" id="metalTab-both" onclick="saMetalTab('both',this)" style="font-size:.73rem;padding:4px 12px;">Both</button>
                  </div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border-bottom:1px solid var(--cream-mid);">
                  <div style="padding:14px 20px;border-right:1px solid var(--cream-mid);">
                    <div style="font-size:.68rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--gold);margin-bottom:5px;">Gold (XAU/USD)</div>
                    <div style="font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:400;color:var(--ink);">$2,341.50</div>
                    <div style="font-size:.74rem;color:var(--green);margin-top:3px;">▲ +$12.40 (+0.53%) today</div>
                    <div style="font-size:.71rem;color:var(--ink-muted);margin-top:2px;">Per troy oz · Citadel fix</div>
                  </div>
                  <div style="padding:14px 20px;">
                    <div style="font-size:.68rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:5px;">Silver (XAG/USD)</div>
                    <div style="font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:400;color:var(--ink);">$27.84</div>
                    <div style="font-size:.74rem;color:var(--green);margin-top:3px;">▲ +$0.30 (+1.09%) today</div>
                    <div style="font-size:.71rem;color:var(--ink-muted);margin-top:2px;">Per troy oz · Citadel fix</div>
                  </div>
                </div>
                <div style="padding:16px 20px 8px;">
                  <div style="display:flex;gap:14px;margin-bottom:10px;flex-wrap:wrap;align-items:center;">
                    <div style="display:flex;align-items:center;gap:5px;" id="metalLegendGold"><div style="width:10px;height:10px;border-radius:2px;background:#C8962E;flex-shrink:0;"></div><span style="font-size:.73rem;color:var(--ink-muted);">Gold (XAU/USD)</span></div>
                    <div style="display:flex;align-items:center;gap:5px;" id="metalLegendSilver"><div style="width:10px;height:10px;border-radius:2px;background:#8494A8;flex-shrink:0;"></div><span style="font-size:.73rem;color:var(--ink-muted);">Silver (XAG/USD)</span></div>
                    <span style="font-size:.71rem;color:var(--ink-muted);margin-left:auto;">5-year historical · Monthly</span>
                  </div>
                  <canvas id="metalChart" style="width:100%;display:block;" height="200"></canvas>
                </div>
              </div>
              <div class="activity-card-db" id="metalListingsCard">
                <div class="activity-card-db-head">
                  <span class="activity-card-db-head-title">Available Metal Listings</span>
                  <button class="btn-sm btn-ink" onclick="saOpenSlide('metals-listing')">+ Add Metal</button>
                </div>
                <table class="data-table" id="metalListingsTable">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Type / Mint</th>
                      <th>Metal</th>
                      <th>Weight</th>
                      <th>Purity</th>
                      <th>Spot Price</th>
                      <th>Listed Price</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody id="metalListingsBody">
                    <tr id="mlRow-1">
                      <td><strong>PAMP Suisse Lady Fortuna</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">Veriscan® certified · Bar</span></td>
                      <td><span style="font-size:.78rem;font-weight:500;">PAMP Suisse</span><br><span style="font-size:.71rem;color:var(--ink-muted);">Swiss mint</span></td>
                      <td><span class="tag tag-gold">Gold</span></td>
                      <td>1 troy oz</td>
                      <td>99.99%</td>
                      <td>$2,341.50</td>
                      <td style="font-weight:600;color:var(--ink);">$2,378.00</td>
                                        <td><span class="badge badge-active">Active</span></td>
                      <td style="white-space:nowrap;">
                        <button class="btn-sm btn-outline" onclick="saOpenSlide('metal-edit-1')" style="margin-right:4px;">Edit</button>
                        <button class="btn-sm btn-red" onclick="saDeleteMetalListing('mlRow-1','PAMP Suisse Lady Fortuna')">Del</button>
                      </td>
                    </tr>
                    <tr id="mlRow-2">
                      <td><strong>American Gold Eagle</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">US Mint legal tender · Coin</span></td>
                      <td><span style="font-size:.78rem;font-weight:500;">US Mint</span><br><span style="font-size:.71rem;color:var(--ink-muted);">American mint</span></td>
                      <td><span class="tag tag-gold">Gold</span></td>
                      <td>1 troy oz</td>
                      <td>91.67%</td>
                      <td>$2,341.50</td>
                      <td style="font-weight:600;color:var(--ink);">$2,395.00</td>
                                        <td><span class="badge badge-active">Active</span></td>
                      <td style="white-space:nowrap;">
                        <button class="btn-sm btn-outline" onclick="saOpenSlide('metal-edit-2')" style="margin-right:4px;">Edit</button>
                        <button class="btn-sm btn-red" onclick="saDeleteMetalListing('mlRow-2','American Gold Eagle')">Del</button>
                      </td>
                    </tr>
                    <tr id="mlRow-3">
                      <td><strong>Canadian Maple Leaf</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">Royal Canadian Mint · Coin</span></td>
                      <td><span style="font-size:.78rem;font-weight:500;">Royal Canadian Mint</span><br><span style="font-size:.71rem;color:var(--ink-muted);">Canadian mint</span></td>
                      <td><span class="tag tag-gold">Gold</span></td>
                      <td>1 troy oz</td>
                      <td>99.99%</td>
                      <td>$2,341.50</td>
                      <td style="font-weight:600;color:var(--ink);">$2,372.00</td>
                                        <td><span class="badge badge-active">Active</span></td>
                      <td style="white-space:nowrap;">
                        <button class="btn-sm btn-outline" onclick="saOpenSlide('metal-edit-3')" style="margin-right:4px;">Edit</button>
                        <button class="btn-sm btn-red" onclick="saDeleteMetalListing('mlRow-3','Canadian Maple Leaf')">Del</button>
                      </td>
                    </tr>
                    <tr id="mlRow-4">
                      <td><strong>Britannia Gold Coin</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">Royal Mint UK · Legal tender · Coin</span></td>
                      <td><span style="font-size:.78rem;font-weight:500;">The Royal Mint</span><br><span style="font-size:.71rem;color:var(--ink-muted);">British mint</span></td>
                      <td><span class="tag tag-gold">Gold</span></td>
                      <td>1 troy oz</td>
                      <td>99.99%</td>
                      <td>$2,341.50</td>
                      <td style="font-weight:600;color:var(--ink);">$2,368.00</td>
                                        <td><span class="badge badge-active">Active</span></td>
                      <td style="white-space:nowrap;">
                        <button class="btn-sm btn-outline" onclick="saOpenSlide('metal-edit-4')" style="margin-right:4px;">Edit</button>
                        <button class="btn-sm btn-red" onclick="saDeleteMetalListing('mlRow-4','Britannia Gold Coin')">Del</button>
                      </td>
                    </tr>
                    <tr id="mlRow-5">
                      <td><strong>PAMP Suisse Silver Bar</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">Veriscan® certified · Bar</span></td>
                      <td><span style="font-size:.78rem;font-weight:500;">PAMP Suisse</span><br><span style="font-size:.71rem;color:var(--ink-muted);">Swiss mint</span></td>
                      <td><span class="tag" style="background:var(--cream-mid);color:var(--ink-soft);">Silver</span></td>
                      <td>10 troy oz</td>
                      <td>99.99%</td>
                      <td>$27.84/oz</td>
                      <td style="font-weight:600;color:var(--ink);">$295.00</td>
                                        <td><span class="badge badge-active">Active</span></td>
                      <td style="white-space:nowrap;">
                        <button class="btn-sm btn-outline" onclick="saOpenSlide('metal-edit-5')" style="margin-right:4px;">Edit</button>
                        <button class="btn-sm btn-red" onclick="saDeleteMetalListing('mlRow-5','PAMP Suisse Silver Bar')">Del</button>
                      </td>
                    </tr>
                    <tr id="mlRow-6">
                      <td><strong>American Silver Eagle</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">US Mint · Legal tender · Coin</span></td>
                      <td><span style="font-size:.78rem;font-weight:500;">US Mint</span><br><span style="font-size:.71rem;color:var(--ink-muted);">American mint</span></td>
                      <td><span class="tag" style="background:var(--cream-mid);color:var(--ink-soft);">Silver</span></td>
                      <td>1 troy oz</td>
                      <td>99.93%</td>
                      <td>$27.84/oz</td>
                      <td style="font-weight:600;color:var(--ink);">$34.50</td>
                                        <td><span class="badge badge-active">Active</span></td>
                      <td style="white-space:nowrap;">
                        <button class="btn-sm btn-outline" onclick="saOpenSlide('metal-edit-6')" style="margin-right:4px;">Edit</button>
                        <button class="btn-sm btn-red" onclick="saDeleteMetalListing('mlRow-6','American Silver Eagle')">Del</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- ══════════════════ REAL ESTATE ══════════════════ -->
            <div id="saPane-realestate" style="display:none;">
              <div class="activity-card-db">
                <div class="activity-card-db-head">
                  <span class="activity-card-db-head-title">Real Estate &amp; Airbnb Listings</span>
                  <button class="btn-sm btn-ink" onclick="saOpenSlide('re-add')">+ Add Property</button>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:16px;" id="saReGrid">
                  <div class="opp-card-db" id="saRe-unit-a">
                    <div class="opp-card-db-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/873bf710-2bdb-47e9-97a8-0e7cc4b142b9.avif) center/cover no-repeat;position:relative;">
                      <div style="position:absolute;top:10px;right:10px;background:rgba(26,122,94,.88);color:white;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:100px;">Open</div>
                      <div style="position:absolute;bottom:10px;left:10px;background:rgba(255,255,255,.92);color:#0C1A2E;font-size:.72rem;font-weight:600;padding:4px 10px;border-radius:100px;display:flex;align-items:center;gap:4px;"><span style="color:#e8a020;">★</span> 4.85 · 13 reviews</div>
                    </div>
                    <div class="opp-card-db-body">
                      <div class="opp-card-db-cat">Entire Rental Unit · San Jose, California</div>
                      <div class="opp-card-db-name">Modern Stylish Home</div>
                      <div class="opp-card-db-chips"><span class="opp-chip-db green">5% cap rate</span><span class="opp-chip-db">1 Bed · 1 Bath</span><span class="opp-chip-db">Airbnb</span></div>
                    </div>
                    <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">Min. $5,000</span><div style="display:flex;gap:6px;"><button class="btn-sm btn-outline" onclick="saOpenSlide('re-edit-unit-a')" style="font-size:.72rem;padding:4px 10px;">Edit</button><button class="btn-sm btn-red" onclick="saDeleteRE('saRe-unit-a','Modern Stylish Home')" style="font-size:.72rem;padding:4px 10px;">Delete</button></div></div>
                  </div>
                  <div class="opp-card-db" style="opacity:0.82;" id="saRe-unit-b">
                    <div class="opp-card-db-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/94a99706-bdcf-48a2-94b9-0d5590b1b55c.avif) center/cover no-repeat;position:relative;">
                      <div style="position:absolute;top:10px;right:10px;background:rgba(12,26,46,.7);color:white;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:100px;">Closed</div>
                      <div style="position:absolute;bottom:10px;left:10px;background:rgba(255,255,255,.92);color:#0C1A2E;font-size:.72rem;font-weight:600;padding:4px 10px;border-radius:100px;display:flex;align-items:center;gap:4px;"><span style="color:#e8a020;">★</span> 4.9 · 10 reviews</div>
                    </div>
                    <div class="opp-card-db-body"><div class="opp-card-db-cat">Private Room · San Jose, California</div><div class="opp-card-db-name">Private Room 1 — Cozy Stay</div><div class="opp-card-db-chips"><span class="opp-chip-db">1 Queen Bed · Shared Bath</span></div><div style="background:var(--cream-mid);color:var(--ink-muted);font-size:.72rem;font-weight:600;padding:5px 10px;border-radius:100px;display:inline-block;margin-top:8px;">⏸ Closed</div></div>
                    <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">Min. $1,000</span><div style="display:flex;gap:6px;"><button class="btn-sm btn-outline" onclick="saOpenSlide('re-edit-unit-b')" style="font-size:.72rem;padding:4px 10px;">Edit</button><button class="btn-sm btn-red" onclick="saDeleteRE('saRe-unit-b','Private Room 1')" style="font-size:.72rem;padding:4px 10px;">Delete</button></div></div>
                  </div>
                  <div class="opp-card-db" style="opacity:0.82;" id="saRe-unit-c">
                    <div class="opp-card-db-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/21d22495-9c19-4cfa-aa18-327be40c558f.avif) center/cover no-repeat;position:relative;">
                      <div style="position:absolute;top:10px;right:10px;background:rgba(12,26,46,.7);color:white;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:100px;">Closed</div>
                      <div style="position:absolute;bottom:10px;left:10px;background:rgba(255,255,255,.92);color:#0C1A2E;font-size:.72rem;font-weight:600;padding:4px 10px;border-radius:100px;display:flex;align-items:center;gap:4px;"><span style="color:#e8a020;">★</span> 4.83 · 6 reviews</div>
                    </div>
                    <div class="opp-card-db-body"><div class="opp-card-db-cat">Private Room · San Jose, California</div><div class="opp-card-db-name">Private Room — Elegant Stay</div><div class="opp-card-db-chips"><span class="opp-chip-db">1 Queen Bed · Shared Bath</span></div><div style="background:var(--cream-mid);color:var(--ink-muted);font-size:.72rem;font-weight:600;padding:5px 10px;border-radius:100px;display:inline-block;margin-top:8px;">⏸ Closed</div></div>
                    <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">Min. $1,000</span><div style="display:flex;gap:6px;"><button class="btn-sm btn-outline" onclick="saOpenSlide('re-edit-unit-c')" style="font-size:.72rem;padding:4px 10px;">Edit</button><button class="btn-sm btn-red" onclick="saDeleteRE('saRe-unit-c','Private Room — Elegant Stay')" style="font-size:.72rem;padding:4px 10px;">Delete</button></div></div>
                  </div>
                  <div class="opp-card-db" style="opacity:0.82;" id="saRe-unit-d">
                    <div class="opp-card-db-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/9c9f6d96-d7a9-4d44-b200-f343806401f9.avif) center/cover no-repeat;position:relative;">
                      <div style="position:absolute;top:10px;right:10px;background:rgba(12,26,46,.7);color:white;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:100px;">Closed</div>
                      <div style="position:absolute;bottom:10px;left:10px;background:rgba(255,255,255,.92);color:#0C1A2E;font-size:.72rem;font-weight:600;padding:4px 10px;border-radius:100px;display:flex;align-items:center;gap:4px;"><span style="color:#e8a020;">★</span> 4.9 · 10 reviews</div>
                    </div>
                    <div class="opp-card-db-body"><div class="opp-card-db-cat">Private Room · San Jose, California</div><div class="opp-card-db-name">Private Room 2 — Modern Stay</div><div class="opp-card-db-chips"><span class="opp-chip-db">1 Queen Bed · Shared Bath</span></div><div style="background:var(--cream-mid);color:var(--ink-mid);font-size:.72rem;font-weight:600;padding:5px 10px;border-radius:100px;display:inline-block;margin-top:8px;">⏸ Closed</div></div>
                    <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">Min. $1,000</span><div style="display:flex;gap:6px;"><button class="btn-sm btn-outline" onclick="saOpenSlide('re-edit-unit-d')" style="font-size:.72rem;padding:4px 10px;">Edit</button><button class="btn-sm btn-red" onclick="saDeleteRE('saRe-unit-d','Private Room 2')" style="font-size:.72rem;padding:4px 10px;">Delete</button></div></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ══════════════════ PRIVATE MARKETS ══════════════════ -->
            <div id="saPane-private" style="display:none;">
              <div class="activity-card-db">
                <div class="activity-card-db-head">
                  <span class="activity-card-db-head-title">Private Market Opportunities</span>
                  <button class="btn-sm btn-ink" onclick="saOpenSlide('pm-add')">+ Add Deal</button>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:16px;" id="saPmGrid">
                  <div class="opp-card-db" id="saPm-termii">
                    <div class="opp-card-db-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/deals.png) center/cover no-repeat;position:relative;">
                      <div style="position:absolute;top:10px;right:10px;background:rgba(26,122,94,.88);color:white;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:100px;">Open</div>
                      <div style="position:absolute;bottom:10px;left:10px;background:rgba(12,26,46,.7);color:white;font-size:.68rem;font-weight:600;padding:3px 10px;border-radius:100px;">$1M allocation</div>
                    </div>
                    <div class="opp-card-db-body"><div class="opp-card-db-cat">Private Equity · San Jose, CA</div><div class="opp-card-db-name">Termii</div><div class="opp-card-db-chips"><span class="opp-chip-db green">$5M ARR</span><span class="opp-chip-db">AI Payments</span></div></div>
                    <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">Min. $25,000</span><div style="display:flex;gap:6px;"><button class="btn-sm btn-outline" onclick="saOpenSlide('pm-edit-termii')" style="font-size:.72rem;padding:4px 10px;">Edit</button><button class="btn-sm btn-red" onclick="saDeletePM('saPm-termii','Termii')" style="font-size:.72rem;padding:4px 10px;">Delete</button></div></div>
                  </div>
                  <div class="opp-card-db" id="saPm-rayda">
                    <div class="opp-card-db-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/plan_1661112808.jpg) center/cover no-repeat;position:relative;">
                      <div style="position:absolute;top:10px;right:10px;background:rgba(26,122,94,.88);color:white;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:100px;">Open</div>
                      <div style="position:absolute;bottom:10px;left:10px;background:rgba(12,26,46,.7);color:white;font-size:.68rem;font-weight:600;padding:3px 10px;border-radius:100px;">$1M allocation</div>
                    </div>
                    <div class="opp-card-db-body"><div class="opp-card-db-cat">Private Equity · Delaware</div><div class="opp-card-db-name">Rayda</div><div class="opp-card-db-chips"><span class="opp-chip-db green">$5.4M ARR</span><span class="opp-chip-db">IT Asset Mgmt</span></div></div>
                    <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">Min. $25,000</span><div style="display:flex;gap:6px;"><button class="btn-sm btn-outline" onclick="saOpenSlide('pm-edit-rayda')" style="font-size:.72rem;padding:4px 10px;">Edit</button><button class="btn-sm btn-red" onclick="saDeletePM('saPm-rayda','Rayda')" style="font-size:.72rem;padding:4px 10px;">Delete</button></div></div>
                  </div>
                </div>
              </div>
            </div>

          </div>



    <div class="db-section db-content" id="sa-markets">
            <div class="page-hrow">
              <div class="page-header"><h1>Private Markets</h1><p>Manage curated opportunities, deal details, and allocation status.</p></div>
          
            </div>
            <div class="table-card"><table class="data-table">
              <thead><tr><th>Deal</th><th>Category</th><th>Return Target</th><th>Min</th><th>Funded</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                <tr><td><strong>Bridge Loan Fund III</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">Private Credit · RE-secured</span></td><td><span class="tag tag-blue">Private Credit</span></td><td>10.5%</td><td>$25,000</td><td><div style="display:flex;align-items:center;gap:7px;"><div style="width:70px;"><div class="prog-bar"><div class="prog-fill green" style="width:52%"></div></div></div><span style="font-size:.74rem;">52%</span></div></td><td><span class="badge badge-active">Open</span></td><td><button class="btn-sm btn-outline" onclick="openModal('modal-edit-opp')">Edit</button></td></tr>
                <tr><td><strong>90-Day T-Bill Ladder</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">US Treasury</span></td><td><span class="tag tag-gold">Treasury</span></td><td>5.18%</td><td>$1,000</td><td>—</td><td><span class="badge badge-active">Open</span></td><td><button class="btn-sm btn-outline" onclick="openModal('modal-edit-opp')">Edit</button></td></tr>
                <tr><td><strong>Termii</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">Private Markets · AI Payments · Delaware</span></td><td><span class="tag tag-purple">Private Equity</span></td><td>—</td><td>$1,000,000</td><td><div style="display:flex;align-items:center;gap:7px;"><div style="width:70px;"><div class="prog-bar"><div class="prog-fill gold" style="width:78%"></div></div></div><span style="font-size:.74rem;">78%</span></div></td><td><span class="badge badge-active">Open</span></td><td><button class="btn-sm btn-outline" onclick="openModal('modal-edit-opp')">Edit</button></td></tr>
                <tr><td><strong>Rayda</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">Private Markets · IT Asset Mgmt · Delaware</span></td><td><span class="tag tag-purple">Private Equity</span></td><td>—</td><td>$1,000,000</td><td><div style="display:flex;align-items:center;gap:7px;"><div style="width:70px;"><div class="prog-bar"><div class="prog-fill gold" style="width:61%"></div></div></div><span style="font-size:.74rem;">61%</span></div></td><td><span class="badge badge-active">Open</span></td><td><button class="btn-sm btn-outline" onclick="openModal('modal-edit-opp')">Edit</button></td></tr>
                <tr><td><strong>Modern Stylish Home</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">Real Estate · San Jose, CA</span></td><td><span class="tag tag-green">Real Estate</span></td><td>5% cap rate</td><td>$5,000</td><td><div style="display:flex;align-items:center;gap:7px;"><div style="width:70px;"><div class="prog-bar"><div class="prog-fill green" style="width:90%"></div></div></div><span style="font-size:.74rem;">90%</span></div></td><td><span class="badge badge-active">Open</span></td><td><button class="btn-sm btn-outline">Edit</button></td></tr>
              </tbody>
            </table></div>
          </div>
                      <div class="db-section db-content" id="sa-entities">
            <div class="page-header" style="margin-bottom:18px;"><h1>Entity Structuring</h1><p>Click any entity to view formation details, legal status and documents.</p></div>
            <div id="entities-list" class="ap-list">
              <div class="ap-item ap-clickable" data-type="pending" onclick="saOpenSlide('ent-emeka')">
                <div class="ap-icon" style="background:#F3E8FF;color:#7C3AED;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
                <div class="ap-body">
                  <div class="ap-title">Emeka Okafor — Delaware LLC</div>
                  <div class="ap-meta">Okafor Capital Holdings LLC · Member-managed · Filed by Sarah Mensah · Apr 6, 2026</div>
                </div>
                <span class="badge badge-waiting" style="flex-shrink:0;margin-right:4px;">Pending</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="active" onclick="saOpenSlide('ent-fatima')">
                <div class="ap-icon" style="background:var(--green-pale);color:var(--green);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
                <div class="ap-body">
                  <div class="ap-title">Fatima Al-Rashid — Revocable Family Trust</div>
                  <div class="ap-meta">Filed by Sarah Mensah · Approved Mar 30, 2026</div>
                </div>
                <span class="badge badge-active" style="flex-shrink:0;margin-right:4px;">Active</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="onboard" onclick="saOpenSlide('ent-kwame')">
                <div class="ap-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="ap-body">
                  <div class="ap-title">Kwame Boateng — Individual Account</div>
                  <div class="ap-meta">Onboarding · 5 documents pending · Filed by client · Apr 8, 2026</div>
                </div>
                <span class="badge badge-onboard" style="flex-shrink:0;margin-right:4px;">Onboarding</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
            </div>
          </div>
          <div class="db-section db-content" id="sa-gold">
            <div class="page-header"><h1>Gold &amp; Precious Metals</h1><p>Approve and manage all physical commodity purchases and vault holdings.</p></div>
            <div class="stats-row" style="margin-bottom:18px;">
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg></div><div class="stat-card-val">$2.4M</div><div class="stat-card-lbl">Gold Under Custody</div></div>
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--cream-mid);color:var(--ink-soft);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg></div><div class="stat-card-val">$580K</div><div class="stat-card-lbl">Silver Under Custody</div></div>
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="stat-card-val">5</div><div class="stat-card-lbl">Pending Approvals</div></div>
            </div>
            <div class="table-card"><div class="table-card-head"><span class="table-card-title">Purchase Requests</span></div>
              <table class="data-table">
                <thead><tr><th>Client</th><th>Metal</th><th>Amount</th><th>Weight</th><th>Storage</th><th>Settlement</th><th>WM</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  <tr><td><strong>Priya Sharma</strong></td><td>Gold (IAU)</td><td>$25,000</td><td>~12 oz</td><td>Citadel Vault, Oklahoma City</td><td>T+2</td><td>S. Mensah</td><td><span class="badge badge-waiting">Pending</span></td><td><button class="btn-sm btn-green" onclick="showToast('Gold purchase approved ✓')">Approve</button></td></tr>
                  <tr><td><strong>Fatima Al-Rashid</strong></td><td>Silver</td><td>$80,000</td><td>~2,500 oz</td><td>Citadel Vault, Oklahoma City</td><td>T+2</td><td>S. Mensah</td><td><span class="badge badge-waiting">Pending</span></td><td><button class="btn-sm btn-green" onclick="showToast('Silver purchase approved ✓')">Approve</button></td></tr>
                  <tr><td><strong>Ibrahim Hassan</strong></td><td>Gold (IAU)</td><td>$150,000</td><td>~72 oz</td><td>Citadel Vault, Oklahoma City</td><td>T+2</td><td>S. Mensah</td><td><span class="badge badge-waiting">Pending</span></td><td><button class="btn-sm btn-green" onclick="showToast('Gold purchase approved ✓')">Approve</button></td></tr>
                  <tr><td><strong>Emeka Okafor</strong></td><td>Gold (IAU)</td><td>$200,000</td><td>~96 oz</td><td>Citadel Vault, Oklahoma City</td><td>T+2</td><td>S. Mensah</td><td><span class="badge badge-active">Approved</span></td><td><button class="btn-sm btn-outline">Receipt</button></td></tr>
                </tbody>
              </table>
            </div>
          </div>
                            <div class="db-section db-content" id="sa-advisors">
            <div class="page-hrow" style="margin-bottom:18px;">
              <div class="page-header"><h1>Wealth Managers</h1><p>Click any advisor to view full profile, performance and compliance details.</p></div>
              <button class="btn-sm btn-ink" onclick="openModal('modal-sa-new-wm')"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add Advisor</button>
            </div>
            <div id="advisors-list" class="ap-list">
              <div class="ap-item ap-clickable" data-type="active" onclick="saOpenSlide('adv-sarah')">
                <div class="ap-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="ap-body"><div class="ap-title">Sarah Mensah <span style="font-size:.72rem;color:var(--ink-muted);font-weight:400;margin-left:6px;">CFA · 10+ years</span></div><div class="ap-meta">Meridian Private Wealth · 24 clients · AUM $284.7M · FCA licensed</div></div>
                <span class="badge badge-active" style="flex-shrink:0;margin-right:4px;">Active</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="active" onclick="saOpenSlide('adv-james')">
                <div class="ap-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="ap-body"><div class="ap-title">James Osei <span style="font-size:.72rem;color:var(--ink-muted);font-weight:400;margin-left:6px;">CFP · 12 years</span></div><div class="ap-meta">Aidi Direct · 31 clients · AUM $412M · SEC licensed</div></div>
                <span class="badge badge-active" style="flex-shrink:0;margin-right:4px;">Active</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="review" onclick="saOpenSlide('adv-amara')">
                <div class="ap-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="ap-body"><div class="ap-title">Amara Diallo <span style="font-size:.72rem;color:var(--ink-muted);font-weight:400;margin-left:6px;">CAIA · 7 years</span></div><div class="ap-meta">Continental Wealth · 18 clients · AUM $197M · FSCA licence needs renewal</div></div>
                <span class="badge badge-review" style="flex-shrink:0;margin-right:4px;">Review</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="pending" onclick="saOpenSlide('adv-pending')">
                <div class="ap-icon" style="background:var(--cream-mid);color:var(--ink-soft);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="ap-body"><div class="ap-title">Pending Application <span style="font-size:.72rem;color:var(--ink-muted);font-weight:400;margin-left:6px;">New · Submitted today</span></div><div class="ap-meta">Unverified · No clients yet · Awaiting admin review</div></div>
                <span class="badge badge-waiting" style="flex-shrink:0;margin-right:4px;">Pending</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
            </div>
          </div>
                            <div class="db-section db-content" id="sa-clients">
            <div class="page-hrow" style="margin-bottom:14px;">
              <div class="page-header"><h1>All Clients</h1><p>149 clients — WM-managed, self-signup individuals and business accounts.</p></div>
              <button class="btn-sm btn-ink" onclick="openModal('modal-sa-new-client')"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> New Client</button>
            </div>
            <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px;">
              <span class="ap-filter active-filter" onclick="saFilterClients('all',this)">All (149)</span>
              <span class="ap-filter" onclick="saFilterClients('wm',this)">WM-Managed</span>
              <span class="ap-filter" onclick="saFilterClients('self',this)">Self-Signup</span>
              <span class="ap-filter" onclick="saFilterClients('business',this)">Business</span>
            </div>
            <div style="display:flex;gap:8px;margin-bottom:12px;">
              <input type="text" placeholder="Search clients…" oninput="saSearchClients(this.value)" style="border:1px solid var(--cream-dark);padding:7px 14px;border-radius:100px;font-size:.82rem;outline:none;width:220px;flex-shrink:0;">
              <select onchange="saFilterAdvisor(this.value)" style="border:1px solid var(--cream-dark);padding:7px 14px;border-radius:100px;font-size:.82rem;outline:none;color:var(--ink-soft);background:white;"><option value="">All advisors</option><option>Sarah Mensah</option><option>James Osei</option><option>No WM (Self-managed)</option></select>
            </div>
            <div id="clients-list" class="ap-list">
              <div class="ap-item ap-clickable" data-type="wm" onclick="saOpenSlide('cli-emeka')">
                <div class="ap-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="ap-body"><div class="ap-title">Emeka Okafor</div><div class="ap-meta">WM: Sarah Mensah · AUM $18.4M · LLC + Trust · Active</div></div>
                <span class="badge badge-active" style="flex-shrink:0;margin-right:4px;">Active</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="wm" onclick="saOpenSlide('cli-fatima')">
                <div class="ap-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="ap-body"><div class="ap-title">Fatima Al-Rashid</div><div class="ap-meta">WM: Sarah Mensah · AUM $31.2M · Trust + LLC · Active</div></div>
                <span class="badge badge-active" style="flex-shrink:0;margin-right:4px;">Active</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="wm" onclick="saOpenSlide('cli-kwame')">
                <div class="ap-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="ap-body"><div class="ap-title">Kwame Boateng</div><div class="ap-meta">WM: Sarah Mensah · AUM $8.9M · Individual · Onboarding</div></div>
                <span class="badge badge-onboard" style="flex-shrink:0;margin-right:4px;">Onboarding</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="wm" onclick="saOpenSlide('cli-priya')">
                <div class="ap-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="ap-body"><div class="ap-title">Priya Sharma</div><div class="ap-meta">WM: Sarah Mensah · AUM $4.2M · Individual · Active</div></div>
                <span class="badge badge-active" style="flex-shrink:0;margin-right:4px;">Active</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="wm" onclick="saOpenSlide('cli-ibrahim')">
                <div class="ap-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="ap-body"><div class="ap-title">Ibrahim Hassan</div><div class="ap-meta">WM: Sarah Mensah · AUM $12.1M · Individual · Active</div></div>
                <span class="badge badge-active" style="flex-shrink:0;margin-right:4px;">Active</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="self" onclick="saOpenSlide('cli-self-aisha')">
                <div class="ap-icon" style="background:var(--green-pale);color:var(--green);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="ap-body"><div class="ap-title">Aisha Nwosu <span class="tag" style="margin-left:6px;background:var(--green-pale);color:var(--green);font-size:.65rem;">Self-Signup</span></div><div class="ap-meta">No WM · Individual · AUM $320K · Active since Feb 2026</div></div>
                <span class="badge badge-active" style="flex-shrink:0;margin-right:4px;">Active</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="business" onclick="saOpenSlide('cli-biz-tectona')">
                <div class="ap-icon" style="background:#EEF2FF;color:var(--blue);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
                <div class="ap-body"><div class="ap-title">Tectona Capital Ltd <span class="tag tag-blue" style="margin-left:6px;font-size:.65rem;">Business</span></div><div class="ap-meta">WM: James Osei · Corporate · AUM $4.8M · Nigeria registered</div></div>
                <span class="badge badge-active" style="flex-shrink:0;margin-right:4px;">Active</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
            </div>
          </div>
          <div class="db-section db-content" id="sa-plans">
            <div class="page-header"><h1>Plans &amp; Payments</h1><p>Manage client and advisor subscriptions and direct payments to Aidi.</p></div>
            <div class="stats-row" style="margin-bottom:18px;">
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--green-pale);color:var(--green);"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><div class="stat-card-val">$148K</div><div class="stat-card-lbl">MRR</div><div class="stat-card-chg" style="color:var(--green);">▲ 12% MoM</div></div>
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg></div><div class="stat-card-val">147</div><div class="stat-card-lbl">Active Subscriptions</div></div>
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div><div class="stat-card-val">3</div><div class="stat-card-lbl">Pending Plan Changes</div></div>
            </div>
            <div class="table-card"><div class="table-card-head"><span class="table-card-title">Recent Payment Activity</span></div>
              <table class="data-table">
                <thead><tr><th>Client / Advisor</th><th>Plan</th><th>Amount</th><th>Invoice</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  <tr><td><strong>Priya Sharma</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">Upgrade request</span></td><td>Premium → Elite</td><td>$9,600/yr</td><td>INV-2026-8821</td><td style="color:var(--ink-muted);">Apr 9</td><td><span class="badge badge-waiting">Pending Approval</span></td><td><button class="btn-sm btn-green" onclick="showToast('Plan upgrade approved ✓')">Approve</button></td></tr>
                  <tr><td><strong>Fatima Al-Rashid</strong></td><td>Elite</td><td>$9,600/yr</td><td>INV-2026-7741</td><td style="color:var(--ink-muted);">Apr 1</td><td><span class="badge badge-active">Paid</span></td><td><button class="btn-sm btn-outline">Receipt</button></td></tr>
                  <tr><td><strong>LLC Formation — Emeka</strong><br><span style="font-size:.72rem;color:var(--ink-muted);">One-time service</span></td><td>Entity Setup</td><td>$1,000</td><td>INV-2026-7501</td><td style="color:var(--ink-muted);">Apr 6</td><td><span class="badge badge-active">Paid</span></td><td><button class="btn-sm btn-outline">Receipt</button></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="db-section db-content" id="sa-team">
            <div class="page-hrow">
              <div class="page-header"><h1>Team Management</h1><p>Manage Aidi team members and their access levels and responsibilities.</p></div>
              <button class="btn-sm btn-ink" onclick="openModal('modal-add-team')"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add Member</button>
            </div>
            <div class="stats-row" style="margin-bottom:18px;">
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="stat-card-val">2</div><div class="stat-card-lbl">Super Admins</div></div>
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--green-pale);color:var(--green);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/></svg></div><div class="stat-card-val">4</div><div class="stat-card-lbl">Support Team</div></div>
              <div class="stat-card"><div class="stat-card-icon" style="background:#F3E8FF;color:#7C3AED;"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg></div><div class="stat-card-val">3</div><div class="stat-card-lbl">Legal &amp; Tax</div></div>
            </div>
            <div class="table-card"><table class="data-table">
              <thead><tr><th>Name</th><th>Role</th><th>Access</th><th>Last Active</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                <tr><td><strong>Alex Oduola</strong></td><td><span class="role-pill pill-sa">Super Admin</span></td><td>Full platform · All sections</td><td>Today</td><td><span class="badge badge-active">Active</span></td><td><button class="btn-sm btn-outline">Edit</button></td></tr>
                <tr><td><strong>Nina Abebe</strong></td><td><span class="role-pill pill-sa">Super Admin</span></td><td>Full platform · All sections</td><td>Today</td><td><span class="badge badge-active">Active</span></td><td><button class="btn-sm btn-outline">Edit</button></td></tr>
                <tr><td><strong>Lena Park</strong></td><td><span class="role-pill pill-support">Support</span></td><td>Gold, entity, plan approvals · KYC queue</td><td>2h ago</td><td><span class="badge badge-active">Active</span></td><td><div style="display:flex;gap:4px;"><button class="btn-sm btn-outline">Edit</button><button class="btn-sm btn-outline" onclick="previewRole('support','Lena Park')" title="Preview this role's restricted view" style="color:var(--blue);border-color:var(--blue-pale);">Preview Role</button></div></td></tr>
                <tr><td><strong>Marcus Osei</strong></td><td><span class="role-pill pill-support">Support</span></td><td>KYC, onboarding, document requests</td><td>Yesterday</td><td><span class="badge badge-active">Active</span></td><td><div style="display:flex;gap:4px;"><button class="btn-sm btn-outline">Edit</button><button class="btn-sm btn-outline" onclick="previewRole('support','Marcus Osei')" style="color:var(--blue);border-color:var(--blue-pale);">Preview Role</button></div></td></tr>
                <tr><td><strong>Dr. Amara Nwosu</strong></td><td><span class="role-pill pill-legal">Legal</span></td><td>Entity filings, agreements, compliance docs</td><td>Today</td><td><span class="badge badge-active">Active</span></td><td><div style="display:flex;gap:4px;"><button class="btn-sm btn-outline">Edit</button><button class="btn-sm btn-outline" onclick="previewRole('legal','Dr. Amara Nwosu')" style="color:var(--blue);border-color:var(--blue-pale);">Preview Role</button></div></td></tr>
                <tr><td><strong>Chisom Eze</strong></td><td><span class="role-pill pill-tax">Tax</span></td><td>Tax documents, finalization, client upload</td><td>3h ago</td><td><span class="badge badge-active">Active</span></td><td><div style="display:flex;gap:4px;"><button class="btn-sm btn-outline">Edit</button><button class="btn-sm btn-outline" onclick="previewRole('legal','Chisom Eze')" style="color:var(--blue);border-color:var(--blue-pale);">Preview Role</button></div></td></tr>
                <tr><td><strong>Fatou Diarra</strong></td><td><span class="role-pill pill-legal">Legal</span></td><td>Signed agreements, compliance review</td><td>Apr 9</td><td><span class="badge badge-active">Active</span></td><td><div style="display:flex;gap:4px;"><button class="btn-sm btn-outline">Edit</button><button class="btn-sm btn-outline" onclick="previewRole('legal','Fatou Diarra')" style="color:var(--blue);border-color:var(--blue-pale);">Preview Role</button></div></td></tr>
              </tbody>
            </table></div>
          </div>
          <div class="db-section db-content" id="sa-tax">
            <div class="page-hrow">
              <div class="page-header"><h1>Tax Documents</h1><p>Upload, review, and finalize tax documents for all clients and advisors.</p></div>
              <button class="btn-sm btn-ink" onclick="openModal('modal-upload-tax')"><svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> Upload</button>
            </div>
            <div class="table-card" style="margin-bottom:14px;"><div class="table-card-head"><span class="table-card-title">Pending Tax Review</span><span class="table-card-action">Uploaded by WM or system</span></div>
              <table class="data-table">
                <thead><tr><th>Client</th><th>Advisor</th><th>Document</th><th>Tax Year</th><th>Type</th><th>Uploaded</th><th>Actions</th></tr></thead>
                <tbody>
                  <tr><td><strong>Priya Sharma</strong></td><td>S. Mensah</td><td>1099-B</td><td>2025</td><td><span class="tag tag-blue">Equities</span></td><td style="color:var(--ink-muted);">Apr 8</td><td><div style="display:flex;gap:4px;"><button class="btn-sm btn-outline">Review</button><button class="btn-sm btn-green" onclick="showToast('1099-B finalized for Priya ✓')">Finalize</button></div></td></tr>
                  <tr><td><strong>Emeka Okafor</strong></td><td>S. Mensah</td><td>K-1 Schedule</td><td>2025</td><td><span class="tag tag-purple">Partnership</span></td><td style="color:var(--ink-muted);">Apr 5</td><td><div style="display:flex;gap:4px;"><button class="btn-sm btn-outline">Review</button><button class="btn-sm btn-green" onclick="showToast('K-1 finalized for Emeka ✓')">Finalize</button></div></td></tr>
                </tbody>
              </table>
            </div>
            <div class="table-card"><div class="table-card-head"><span class="table-card-title">Finalized Tax Documents</span></div>
              <table class="data-table">
                <thead><tr><th>Client</th><th>Document</th><th>Tax Year</th><th>Finalized By</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  <tr><td><strong>Fatima Al-Rashid</strong></td><td>1099-DIV</td><td>2025</td><td>Chisom Eze (Tax)</td><td style="color:var(--ink-muted);">Mar 28</td><td><span class="badge badge-active">Finalized</span></td><td><button class="btn-sm btn-outline">View</button></td></tr>
                  <tr><td><strong>Ibrahim Hassan</strong></td><td>1099-DA</td><td>2025</td><td>Chisom Eze (Tax)</td><td style="color:var(--ink-muted);">Mar 20</td><td><span class="badge badge-active">Finalized</span></td><td><button class="btn-sm btn-outline">View</button></td></tr>
                </tbody>
              </table>
            </div>
          </div>
                      <div class="db-section db-content" id="sa-legal">
            <div class="page-header" style="margin-bottom:18px;"><h1>Legal &amp; Agreements</h1><p>Click any document to review, approve or download.</p></div>
            <div id="legal-list" class="ap-list">
              <div class="ap-item ap-clickable" data-type="review" onclick="saOpenSlide('leg-emeka-llc')">
                <div class="ap-icon" style="background:#F3E8FF;color:#7C3AED;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                <div class="ap-body">
                  <div class="ap-title">LLC Operating Agreement — Emeka Okafor <span class="tag tag-purple" style="margin-left:6px;">Under Review</span></div>
                  <div class="ap-meta">Reviewed by Dr. Amara Nwosu · Signed Apr 6, 2026 · Entity document</div>
                </div>
                <span class="badge badge-review" style="flex-shrink:0;margin-right:4px;">Under Review</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="active" onclick="saOpenSlide('leg-fatima-trust')">
                <div class="ap-icon" style="background:var(--green-pale);color:var(--green);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                <div class="ap-body">
                  <div class="ap-title">Trust Deed — Fatima Al-Rashid</div>
                  <div class="ap-meta">Revocable Family Trust · Reviewed by Fatou Diarra · Signed Mar 28, 2026</div>
                </div>
                <span class="badge badge-active" style="flex-shrink:0;margin-right:4px;">Approved</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="active" onclick="saOpenSlide('leg-priya-advisory')">
                <div class="ap-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                <div class="ap-body">
                  <div class="ap-title">Investment Advisory Agreement — Priya Sharma</div>
                  <div class="ap-meta">Reviewed by Dr. Amara Nwosu · Signed Jan 12, 2026</div>
                </div>
                <span class="badge badge-active" style="flex-shrink:0;margin-right:4px;">Approved</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="active" onclick="saOpenSlide('leg-ibrahim-data')">
                <div class="ap-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                <div class="ap-body">
                  <div class="ap-title">Cross-Border Data Consent — Ibrahim Hassan</div>
                  <div class="ap-meta">Compliance document · Reviewed by Fatou Diarra · Signed Feb 20, 2026</div>
                </div>
                <span class="badge badge-active" style="flex-shrink:0;margin-right:4px;">Approved</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
            </div>
          </div>
                      <div class="db-section db-content" id="sa-compliance">
            <div class="page-header" style="margin-bottom:18px;"><h1>Compliance Queue</h1><p>Click any issue to view details and take action.</p></div>
            <div id="compliance-list" class="ap-list">
              <div class="ap-item ap-clickable" data-type="kyc" onclick="saOpenSlide('comp-ibrahim')">
                <div class="ap-icon" style="background:var(--red-pale);color:var(--red);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
                <div class="ap-body">
                  <div class="ap-title">Ibrahim Hassan — Passport Expires in 32 Days <span class="tag tag-red" style="margin-left:6px;">High</span></div>
                  <div class="ap-meta">KYC · Assigned to Marcus Osei · Passport expires May 12, 2026</div>
                </div>
                <span class="badge badge-alert" style="flex-shrink:0;margin-right:4px;">High Priority</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="kyc" onclick="saOpenSlide('comp-kwame')">
                <div class="ap-icon" style="background:var(--red-pale);color:var(--red);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
                <div class="ap-body">
                  <div class="ap-title">Kwame Boateng — 5 Onboarding Documents Missing <span class="tag tag-red" style="margin-left:6px;">High</span></div>
                  <div class="ap-meta">KYC · Assigned to Marcus Osei · Onboarding stalled</div>
                </div>
                <span class="badge badge-alert" style="flex-shrink:0;margin-right:4px;">High Priority</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="entity" onclick="saOpenSlide('comp-emeka')">
                <div class="ap-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                <div class="ap-body">
                  <div class="ap-title">Emeka Okafor — Trust Deed Document Outstanding <span class="tag tag-gold" style="margin-left:6px;">Medium</span></div>
                  <div class="ap-meta">Entity · Assigned to Dr. Amara Nwosu · Delaware LLC filing blocked</div>
                </div>
                <span class="badge badge-review" style="flex-shrink:0;margin-right:4px;">Medium</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
              <div class="ap-item ap-clickable" data-type="advisor" onclick="saOpenSlide('comp-amara-wm')">
                <div class="ap-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <div class="ap-body">
                  <div class="ap-title">Amara Diallo (WM) — FSCA Licence Renewal Overdue <span class="tag tag-gold" style="margin-left:6px;">Medium</span></div>
                  <div class="ap-meta">Advisor compliance · Assigned to Lena Park · Active clients at risk</div>
                </div>
                <span class="badge badge-review" style="flex-shrink:0;margin-right:4px;">Medium</span><div class="ap-chevron"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
              </div>
            </div>
          </div>
          <div class="db-section db-content" id="sa-msgs" style="flex-direction:column;height:calc(100vh - 56px - 36px);overflow:hidden;padding-bottom:0;">
            <!-- Fixed header area -->
            <div style="flex-shrink:0;padding-bottom:0;">
              <div class="page-hrow" style="margin-bottom:12px;">
                <div class="page-header"><h1>Messages</h1><p>Direct communication with clients and wealth managers.</p></div>
                <button class="btn-sm btn-ink" onclick="saMsgsNewConv()" style="display:flex;align-items:center;gap:5px;flex-shrink:0;">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  New Message
                </button>
              </div>
              <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:12px;">
                <span class="ap-filter active-filter" onclick="saMsgsFilter('all',this)" id="saMsgFilter-all">All</span>
                <span class="ap-filter" onclick="saMsgsFilter('client',this)" id="saMsgFilter-client">Clients</span>
                <span class="ap-filter" onclick="saMsgsFilter('wm',this)" id="saMsgFilter-wm">Wealth Managers</span>
                <span class="ap-filter" onclick="saMsgsFilter('unread',this)" id="saMsgFilter-unread">Unread</span>
              </div>
            </div>
            <!-- White message box — fills remaining space, does NOT scroll -->
            <div class="activity-card-db" style="display:grid;grid-template-columns:280px 1fr;flex:1;overflow:hidden;min-height:0;">
              <!-- Thread list — only this scrolls -->
              <div style="border-right:1px solid var(--cream-mid);display:flex;flex-direction:column;overflow:hidden;min-height:0;">
                <div style="padding:10px 12px;border-bottom:1px solid var(--cream-mid);flex-shrink:0;">
                  <div style="position:relative;">
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="var(--ink-muted)" stroke-width="2" style="position:absolute;left:8px;top:50%;transform:translateY(-50%);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <input type="text" placeholder="Search messages…" style="width:100%;padding:6px 8px 6px 24px;border-radius:7px;border:1px solid var(--cream-dark);font-size:.75rem;font-family:inherit;outline:none;background:var(--cream);box-sizing:border-box;">
                  </div>
                </div>
                <div id="saMsgThreadList" style="flex:1;overflow-y:auto;min-height:0;"></div>
              </div>
              <!-- Chat pane — fixed structure, only messages scroll -->
              <div style="display:flex;flex-direction:column;overflow:hidden;min-height:0;" id="saMsgChatPane">
                <div id="saMsgChatHeader" style="padding:11px 16px;border-bottom:1px solid var(--cream-mid);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;min-height:52px;">
                  <div style="font-size:.88rem;font-weight:600;color:var(--ink-muted);">Select a conversation</div>
                </div>
                <div id="saMsgChatMsgs" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;min-height:0;"></div>
                <div id="saMsgChatInput" style="padding:10px 14px;border-top:1px solid var(--cream-mid);display:none;flex-direction:column;gap:8px;flex-shrink:0;">
                  <div id="saMsgAttachPreview" style="display:none;flex-wrap:wrap;gap:6px;padding:4px 0;"></div>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <button onclick="document.getElementById('saMsgFileInput').click()" title="Attach file or image" style="width:32px;height:32px;border-radius:8px;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--ink-muted);transition:all .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='white'">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                    </button>
                    <input type="file" id="saMsgFileInput" multiple accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" style="display:none" onchange="saMsgsHandleFiles(this.files)">
                    <input id="saMsgInputBox" type="text" placeholder="Type a message…" style="flex:1;padding:8px 14px;border:1.5px solid var(--cream-dark);border-radius:100px;font-size:.84rem;outline:none;font-family:inherit;transition:border .15s;" onfocus="this.style.borderColor='var(--blue)'" onblur="this.style.borderColor='var(--cream-dark)'" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();saMsgsSend();}">
                    <button onclick="saMsgsSend()" style="width:34px;height:34px;border-radius:50%;background:var(--ink);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;transition:transform .1s;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="white" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="db-section db-content" id="sa-audit">
            <div class="page-header"><h1>Audit Log</h1><p>Complete immutable record of all platform actions.</p></div>
            <div class="table-card"><table class="data-table">
              <thead><tr><th>Timestamp</th><th>Actor</th><th>Role</th><th>Event</th><th>Subject</th></tr></thead>
              <tbody>
                <tr><td style="color:var(--ink-muted);font-size:.77rem;">Apr 10, 09:12</td><td>Sarah Mensah</td><td><span class="tag tag-blue">WM</span></td><td>Trade instruction submitted</td><td>Priya Sharma — $50K SPY BUY</td></tr>
                <tr><td style="color:var(--ink-muted);font-size:.77rem;">Apr 10, 08:44</td><td>System</td><td><span class="tag tag-gold">Auto</span></td><td>KYC expiry alert triggered</td><td>Ibrahim Hassan</td></tr>
                <tr><td style="color:var(--ink-muted);font-size:.77rem;">Apr 9, 17:30</td><td>Sarah Mensah</td><td><span class="tag tag-blue">WM</span></td><td>Client credentials created</td><td>Kwame Boateng</td></tr>
                <tr><td style="color:var(--ink-muted);font-size:.77rem;">Apr 9, 15:02</td><td>Alex Oduola</td><td><span class="tag tag-gold">Admin</span></td><td>Gold purchase approved</td><td>Emeka Okafor — $200K</td></tr>
                <tr><td style="color:var(--ink-muted);font-size:.77rem;">Apr 9, 14:18</td><td>Lena Park</td><td><span class="role-pill pill-support" style="font-size:.66rem;">Support</span></td><td>Plan upgrade approved</td><td>Fatima Al-Rashid</td></tr>
                <tr><td style="color:var(--ink-muted);font-size:.77rem;">Apr 8, 11:02</td><td>Sarah Mensah</td><td><span class="tag tag-blue">WM</span></td><td>Trade instruction submitted</td><td>Emeka Okafor — $250K Bridge Fund</td></tr>
                <tr><td style="color:var(--ink-muted);font-size:.77rem;">Apr 7, 09:30</td><td>Chisom Eze</td><td><span class="role-pill pill-tax" style="font-size:.66rem;">Tax</span></td><td>Tax document finalized</td><td>Fatima Al-Rashid — 1099-DIV 2025</td></tr>
                <tr><td style="color:var(--ink-muted);font-size:.77rem;">Apr 6, 16:20</td><td>Dr. Amara Nwosu</td><td><span class="role-pill pill-legal" style="font-size:.66rem;">Legal</span></td><td>Agreement reviewed</td><td>Emeka Okafor — LLC Operating Agreement</td></tr>
              </tbody>
            </table></div>
          </div>

          <div class="db-section db-content" id="sa-blog">
            <div class="page-hrow">
              <div class="page-header"><h1>Blog</h1><p>Create and manage posts for the Aidi landing page. Published posts are served via the public blog API.</p></div>
              <button class="btn-sm btn-ink" onclick="blogNewPost()" style="display:flex;align-items:center;gap:5px;flex-shrink:0;"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>New Post</button>
            </div>
            <div class="three-col" style="margin-bottom:18px;">
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div><div class="stat-card-val" id="blog-stat-total">4</div><div class="stat-card-lbl">Total Posts</div></div>
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--green-pale);color:var(--green);"><svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/></svg></div><div class="stat-card-val" id="blog-stat-published">2</div><div class="stat-card-lbl">Published</div></div>
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div class="stat-card-val" id="blog-stat-drafts">2</div><div class="stat-card-lbl">Drafts</div></div>
            </div>
            <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:16px;align-items:center;">
              <span class="blog-filter active" onclick="blogFilter('all',this)" style="padding:5px 13px;border-radius:100px;background:var(--ink);color:white;font-size:.77rem;font-weight:500;cursor:pointer;transition:all .15s;">All</span>
              <span class="blog-filter" onclick="blogFilter('published',this)" style="padding:5px 13px;border-radius:100px;border:1px solid var(--cream-dark);color:var(--ink-soft);font-size:.77rem;font-weight:500;cursor:pointer;transition:all .15s;">Published</span>
              <span class="blog-filter" onclick="blogFilter('draft',this)" style="padding:5px 13px;border-radius:100px;border:1px solid var(--cream-dark);color:var(--ink-soft);font-size:.77rem;font-weight:500;cursor:pointer;transition:all .15s;">Drafts</span>
              <span class="blog-filter" onclick="blogFilter('scheduled',this)" style="padding:5px 13px;border-radius:100px;border:1px solid var(--cream-dark);color:var(--ink-soft);font-size:.77rem;font-weight:500;cursor:pointer;transition:all .15s;">Scheduled</span>
              <div style="margin-left:auto;">
                <select id="blogCatFilter" onchange="blogFilterCat(this.value)" style="padding:5px 12px;border-radius:100px;border:1px solid var(--cream-dark);font-size:.77rem;font-family:inherit;background:white;color:var(--ink);cursor:pointer;outline:none;">
                  <option value="all">All categories</option>
                  <option value="company-news">Company News</option>
                  <option value="investing">Investing</option>
                  <option value="wealth-management">Wealth Management</option>
                  <option value="market-insights">Market Insights</option>
                  <option value="product-updates">Product Updates</option>
                  <option value="regulatory">Regulatory</option>
                  <option value="private-markets">Private Markets</option>
                </select>
              </div>
            </div>
            <div id="blogPostList"></div>
            <!-- Blog Editor Modal -->
            <div id="blogEditor" style="display:none;position:fixed;inset:0;z-index:900;background:rgba(12,26,46,.5);backdrop-filter:blur(4px);align-items:flex-start;justify-content:center;padding:24px 16px;overflow-y:auto;" onclick="if(event.target===this)blogCloseEditor()">
              <div style="background:white;border-radius:18px;width:100%;max-width:1100px;box-shadow:0 32px 100px rgba(12,26,46,.25);overflow:hidden;margin:auto;">
                <!-- Modal topbar -->
                <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 24px;border-bottom:1px solid var(--cream-mid);background:white;position:sticky;top:0;z-index:10;">
                  <div style="display:flex;align-items:center;gap:10px;">
                    <button onclick="blogCloseEditor()" style="display:flex;align-items:center;gap:5px;font-size:.82rem;color:var(--ink-muted);background:none;border:none;cursor:pointer;font-family:inherit;padding:0;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--ink-muted)'"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
                    <span style="color:var(--cream-dark);">|</span>
                    <span style="font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-weight:400;color:var(--ink);" id="blogModalLabel">New Post</span>
                    <span style="color:var(--cream-dark);">|</span>
                    <span id="blogEditorStatus" style="font-size:.76rem;font-weight:600;padding:2px 10px;border-radius:100px;background:var(--gold-pale);color:var(--gold);">Draft</span>
                  </div>
                  <div style="display:flex;gap:8px;">
                    <button onclick="blogSaveDraft()" class="btn-sm btn-outline">Save draft</button>
                    <button onclick="blogPublish()" class="btn-sm btn-ink">Publish &#8594;</button>
                  </div>
                </div>
                <!-- Modal body: writing area + meta sidebar -->
                <div style="display:flex;max-height:calc(100vh - 140px);">
                  <!-- Writing area -->
                  <div style="flex:1;padding:32px 40px;min-width:0;overflow-y:auto;">
                    <input id="blogTitle" type="text" placeholder="Post title&#8230;" style="width:100%;font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:400;border:none;outline:none;background:transparent;color:var(--ink);margin-bottom:8px;line-height:1.2;" oninput="blogAutoSave()">
                    <input id="blogExcerpt" type="text" placeholder="Short excerpt shown in listing previews&#8230;" style="width:100%;font-size:.88rem;border:none;outline:none;background:transparent;color:var(--ink-muted);font-weight:300;margin-bottom:20px;font-family:inherit;" oninput="blogAutoSave()">
                    <div style="height:1px;background:var(--cream-mid);margin-bottom:16px;"></div>
                    <!-- Format toolbar -->
                    <div style="display:flex;gap:3px;margin-bottom:14px;flex-wrap:wrap;padding-bottom:12px;border-bottom:1px solid var(--cream-mid);">
                      <button onclick="blogFmt('bold')" title="Bold" style="width:30px;height:28px;border-radius:6px;border:1px solid var(--cream-dark);background:white;cursor:pointer;font-weight:700;font-size:.82rem;font-family:inherit;display:flex;align-items:center;justify-content:center;"><b>B</b></button>
                      <button onclick="blogFmt('italic')" title="Italic" style="width:30px;height:28px;border-radius:6px;border:1px solid var(--cream-dark);background:white;cursor:pointer;font-style:italic;font-size:.82rem;font-family:serif;display:flex;align-items:center;justify-content:center;"><i>I</i></button>
                      <button onclick="blogFmt('h2')" title="Heading 2" style="padding:0 8px;height:28px;border-radius:6px;border:1px solid var(--cream-dark);background:white;cursor:pointer;font-size:.72rem;font-weight:700;font-family:inherit;">H2</button>
                      <button onclick="blogFmt('h3')" title="Heading 3" style="padding:0 8px;height:28px;border-radius:6px;border:1px solid var(--cream-dark);background:white;cursor:pointer;font-size:.72rem;font-weight:600;font-family:inherit;">H3</button>
                      <button onclick="blogFmt('insertUnorderedList')" title="Bullet list" style="width:30px;height:28px;border-radius:6px;border:1px solid var(--cream-dark);background:white;cursor:pointer;font-size:.88rem;display:flex;align-items:center;justify-content:center;">&#8801;</button>
                      <button onclick="blogFmt('insertOrderedList')" title="Numbered list" style="width:30px;height:28px;border-radius:6px;border:1px solid var(--cream-dark);background:white;cursor:pointer;font-size:.78rem;display:flex;align-items:center;justify-content:center;">1.</button>
                      <button onclick="blogFmt('blockquote')" title="Blockquote" style="width:30px;height:28px;border-radius:6px;border:1px solid var(--cream-dark);background:white;cursor:pointer;font-size:1rem;font-family:serif;display:flex;align-items:center;justify-content:center;">&#8220;</button>
                      <button onclick="blogInsLink()" title="Insert link" style="width:30px;height:28px;border-radius:6px;border:1px solid var(--cream-dark);background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></button>
                      <span style="width:1px;background:var(--cream-dark);margin:4px 3px;"></span>
                      <button onclick="blogInsCallout('info')" style="padding:0 8px;height:28px;border-radius:6px;border:1px solid var(--cream-dark);background:var(--blue-pale);cursor:pointer;font-size:.67rem;font-weight:600;color:var(--blue);font-family:inherit;">&#8505; Info</button>
                      <button onclick="blogInsCallout('warning')" style="padding:0 8px;height:28px;border-radius:6px;border:1px solid var(--cream-dark);background:var(--gold-pale);cursor:pointer;font-size:.67rem;font-weight:600;color:var(--gold);font-family:inherit;">&#9888; Note</button>
                    </div>
                    <div id="blogBody" contenteditable="true" oninput="blogAutoSave()" style="min-height:340px;font-size:.92rem;color:var(--ink);line-height:1.85;font-weight:300;outline:none;caret-color:var(--blue);" data-placeholder="Start writing your post&#8230;"></div>
                  </div>
                  <!-- Meta sidebar -->
                  <div style="width:260px;flex-shrink:0;border-left:1px solid var(--cream-mid);padding:24px 20px;overflow-y:auto;background:#fafaf9;">
                    <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:14px;">Post Settings</div>
                    <div class="form-group"><label class="form-label">Category</label>
                      <select id="blogCat" class="form-input" style="font-size:.84rem;" oninput="blogAutoSave()">
                        <option value="company-news">Company News</option>
                        <option value="investing">Investing</option>
                        <option value="wealth-management">Wealth Management</option>
                        <option value="market-insights">Market Insights</option>
                        <option value="product-updates">Product Updates</option>
                        <option value="regulatory">Regulatory</option>
                        <option value="private-markets">Private Markets</option>
                      </select>
                    </div>
                    <div class="form-group"><label class="form-label">Tags <span style="font-weight:300;">(comma-separated)</span></label><input id="blogTags" type="text" class="form-input" placeholder="gold, investing, wealth" style="font-size:.84rem;" oninput="blogAutoSave()"></div>
                    <div class="form-group"><label class="form-label">Author</label><input id="blogAuthor" type="text" class="form-input" value="Aidi Team" style="font-size:.84rem;" oninput="blogAutoSave()"></div>
                    <div class="form-group"><label class="form-label">Schedule publish</label><input id="blogSchedule" type="datetime-local" class="form-input" style="font-size:.82rem;" oninput="blogAutoSave()"></div>
                    <div class="form-group"><label class="form-label">Cover image URL</label>
                      <input id="blogCover" type="text" class="form-input" placeholder="https://&#8230;" style="font-size:.82rem;" oninput="blogAutoSave()">
                      <div id="blogCoverPreview" style="margin-top:6px;border-radius:var(--r);overflow:hidden;display:none;"><img style="width:100%;height:80px;object-fit:cover;display:block;"></div>
                    </div>
                    <div class="form-group"><label class="form-label">SEO slug</label>
                      <div style="display:flex;align-items:center;border:1.5px solid var(--cream-dark);border-radius:var(--r);overflow:hidden;background:white;">
                        <span style="padding:8px 7px;font-size:.71rem;color:var(--ink-muted);background:var(--cream);border-right:1px solid var(--cream-dark);white-space:nowrap;">/blog/</span>
                        <input id="blogSlug" type="text" placeholder="post-slug" style="flex:1;padding:8px 7px;border:none;font-size:.81rem;font-family:inherit;background:white;color:var(--ink);outline:none;min-width:0;">
                      </div>
                    </div>
                    <div style="border-top:1px solid var(--cream-mid);padding-top:12px;margin-top:4px;">
                      <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">API Export</div>
                      <div style="background:var(--cream);border-radius:var(--r);padding:9px 11px;">
                        <div style="font-size:.69rem;color:var(--ink-muted);margin-bottom:5px;">Landing page endpoint:</div>
                        <code id="blogApiUrl" style="font-size:.67rem;color:var(--blue);word-break:break-all;line-height:1.5;">GET /api/blog/posts/{slug}</code>
                      </div>
                      <button onclick="blogCopyApi()" style="width:100%;margin-top:7px;padding:7px;border-radius:var(--r);border:1px solid var(--cream-dark);background:white;font-size:.75rem;font-family:inherit;cursor:pointer;color:var(--ink-soft);">Copy API snippet</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="db-section db-content" id="sa-settings">
            <div class="page-header"><h1>Settings</h1><p>Platform configuration, security and admin preferences.</p></div>
            <div class="s-shell">
              <div class="s-nav">
                <div class="s-nav-hd">Account</div>
                <div class="s-nav-item on" id="ssn-profile"       onclick="sset('profile')"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Profile</div>
                <div class="s-nav-item"    id="ssn-security"      onclick="sset('security')"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Security</div>
                <div class="s-nav-hd" style="margin-top:6px;">Platform</div>
                <div class="s-nav-item"    id="ssn-notifications" onclick="sset('notifications')"><svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>Notifications</div>
                <div class="s-nav-item"    id="ssn-platform"      onclick="sset('platform')"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>Platform Config</div>
                <div class="s-nav-item"    id="ssn-compliance"    onclick="sset('compliance')"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Compliance</div>
                <div class="s-nav-item"    id="ssn-api"           onclick="sset('api')"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>API &amp; Webhooks</div>
                <div class="s-nav-hd" style="margin-top:6px;">Monetisation</div>
                <div class="s-nav-item" id="ssn-pricing" onclick="sset('pricing')"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>Plans &amp; Pricing</div>
              </div>
              <div class="s-body">
                <div class="s-panel on" id="ssp-profile">
                  <div class="s-title">Admin Profile</div><div class="s-sub">Your identity on the Aidi platform. All actions are attributed to this profile in the audit log.</div>
                  <div style="display:flex;align-items:center;gap:16px;padding:18px;background:var(--cream);border-radius:var(--r-lg);margin-bottom:18px;">
                    <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gold-light));color:var(--ink);display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:1.4rem;flex-shrink:0;">SA</div>
                    <div style="flex:1;"><div style="font-weight:600;font-size:.92rem;">Alex Oduola</div><div style="font-size:.78rem;color:var(--ink-muted);">Super Administrator · Full Platform Access</div></div>
                    <span style="background:var(--gold-pale);color:var(--gold);padding:2px 9px;border-radius:100px;font-size:.7rem;font-weight:600;">Super Admin</span>
                  </div>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
                    <div class="form-group" style="margin:0;"><label class="form-label">First name</label><input class="form-input" value="Alex" style="font-size:.86rem;"></div>
                    <div class="form-group" style="margin:0;"><label class="form-label">Last name</label><input class="form-input" value="Oduola" style="font-size:.86rem;"></div>
                  </div>
                  <div class="form-group"><label class="form-label">Admin email</label><input class="form-input" value="alex.oduola@aidi.com" style="font-size:.86rem;"></div>
                  <div class="form-group"><label class="form-label">Role</label><input class="form-input" value="Super Administrator" disabled style="font-size:.86rem;background:var(--cream);color:var(--ink-muted);cursor:not-allowed;"></div>
                  <button class="btn-sm btn-ink" onclick="showToast('Profile saved ✓')">Save changes</button>
                </div>
                <div class="s-panel" id="ssp-security">
                  <div class="s-title">Security</div><div class="s-sub">Admin accounts have elevated security requirements. All logins are audit-logged.</div>
                  <div class="s-card"><div class="s-card-hd">Authentication</div>
                    <div class="s-row"><div><div class="s-row-lbl">Magic link (passwordless)</div><div class="s-row-desc">Primary login — email link to <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="41202d24396f2e25342e2d2001202825286f222e2c">[email&#160;protected]</a></div></div><span style="background:var(--green-pale);color:var(--green);padding:2px 8px;border-radius:100px;font-size:.7rem;font-weight:600;">Active</span></div>
                    <div class="s-row"><div><div class="s-row-lbl">TOTP authenticator</div><div class="s-row-desc">Required for all admin accounts — cannot be disabled</div></div><span style="background:var(--green-pale);color:var(--green);padding:2px 8px;border-radius:100px;font-size:.7rem;font-weight:600;">Enforced</span></div>
                    <div class="s-row"><div><div class="s-row-lbl">IP allowlist</div><div class="s-row-desc">Restrict admin access to approved IP ranges</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                  </div>
                  <div class="s-card"><div class="s-card-hd">Session Policy</div>
                    <div class="s-row"><div><div class="s-row-lbl">Auto-logout after inactivity</div><div class="s-row-desc">Session expires after 30 minutes</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                    <div class="s-row"><div><div class="s-row-lbl">Single active session</div><div class="s-row-desc">Prevent concurrent admin logins</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                  </div>
                </div>
                <div class="s-panel" id="ssp-notifications">
                  <div class="s-title">Admin Notifications</div><div class="s-sub">Alerts for platform events requiring admin attention.</div>
                  <div class="s-card"><div class="s-card-hd">Approval Queue</div>
                    <div class="s-row"><div><div class="s-row-lbl">New trade instruction pending</div><div class="s-row-desc">Gold, silver and alternative asset instructions</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                    <div class="s-row"><div><div class="s-row-lbl">New WM application</div><div class="s-row-desc">Advisor registration awaiting review</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                    <div class="s-row"><div><div class="s-row-lbl">Entity filing submitted</div><div class="s-row-desc">LLC and trust formations pending review</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                  </div>
                  <div class="s-card"><div class="s-card-hd">Compliance &amp; Security</div>
                    <div class="s-row"><div><div class="s-row-lbl">KYC failure alert</div><div class="s-row-desc">When Onfido flags a client identity check</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                    <div class="s-row"><div><div class="s-row-lbl">AML flag raised</div><div class="s-row-desc">When a transaction triggers an AML rule</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                  </div>
                  <button class="btn-sm btn-ink" onclick="showToast('Preferences saved ✓')">Save preferences</button>
                </div>
                <div class="s-panel" id="ssp-platform">
                  <div class="s-title">Platform Configuration</div><div class="s-sub">Global settings affecting all clients and advisors.</div>
                  <div class="s-card"><div class="s-card-hd">Onboarding</div>
                    <div class="s-row"><div><div class="s-row-lbl">New WM registrations open</div><div class="s-row-desc">Allow wealth managers to apply for access</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                    <div class="s-row"><div><div class="s-row-lbl">Client self-signup</div><div class="s-row-desc">Clients can create accounts without WM invite</div></div><label class="s-tog"><input type="checkbox"><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                    <div class="s-row"><div><div class="s-row-lbl">Auto-approve low-risk KYC</div><div class="s-row-desc">Skip manual review for Onfido score &gt; 95</div></div><label class="s-tog"><input type="checkbox"><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                  </div>
                  <div class="s-card"><div class="s-card-hd">Maintenance</div>
                    <div class="s-row"><div><div class="s-row-lbl">Maintenance mode</div><div class="s-row-desc">Show maintenance page to all non-admin users</div></div><label class="s-tog"><input type="checkbox"><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                    <div class="s-row"><div><div class="s-row-lbl">Read-only mode</div><div class="s-row-desc">Disable all write operations platform-wide</div></div><label class="s-tog"><input type="checkbox"><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                  </div>
                </div>
                <div class="s-panel" id="ssp-compliance">
                  <div class="s-title">Compliance Rules</div><div class="s-sub">Configure automated compliance checks and AML thresholds.</div>
                  <div class="s-card"><div class="s-card-hd">AML Monitoring</div>
                    <div class="s-row"><div><div class="s-row-lbl">Transaction monitoring</div><div class="s-row-desc">Flag transactions above $10,000 for review</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                    <div class="s-row"><div><div class="s-row-lbl">Sanctions screening</div><div class="s-row-desc">Real-time check against OFAC, UN, EU lists</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                    <div class="s-row"><div><div class="s-row-lbl">PEP screening</div><div class="s-row-desc">Politically exposed persons — enhanced due diligence</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                  </div>
                  <div class="s-card"><div class="s-card-hd">KYC Policy</div>
                    <div class="s-row"><div><div class="s-row-lbl">Suspend trading on KYC expiry</div><div class="s-row-desc">Auto-pause trading if documents lapse</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                    <div class="s-row"><div><div class="s-row-lbl">Document expiry warning</div><div class="s-row-desc">Alert advisor 30 days before expiry</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                  </div>
                </div>
                <div class="s-panel" id="ssp-api">
                  <div class="s-title">API &amp; Webhooks</div><div class="s-sub">Manage API keys for landing page and external integrations.</div>
                  <div class="s-card"><div class="s-card-hd">Public API Keys</div>
                    <div class="s-row"><div><div class="s-row-lbl">Blog API key</div><div class="s-row-desc">Read-only key for landing page blog feed</div></div><div style="display:flex;align-items:center;gap:6px;"><code style="font-size:.74rem;background:var(--cream-mid);padding:3px 8px;border-radius:5px;">pk_live_••••••4f2a</code><button class="btn-sm btn-outline" style="font-size:.72rem;" onclick="showToast('Copied ✓')">Copy</button></div></div>
                    <div class="s-row"><div><div class="s-row-lbl">Markets data key</div><div class="s-row-desc">Read-only key for opportunity listings</div></div><div style="display:flex;align-items:center;gap:6px;"><code style="font-size:.74rem;background:var(--cream-mid);padding:3px 8px;border-radius:5px;">pk_live_••••••9c1b</code><button class="btn-sm btn-outline" style="font-size:.72rem;" onclick="showToast('Copied ✓')">Copy</button></div></div>
                  </div>
                  <div class="s-card"><div class="s-card-hd">Webhooks</div>
                    <div class="s-row"><div><div class="s-row-lbl">Blog post published</div><div class="s-row-desc">POST to landing page CMS on publish</div></div><label class="s-tog"><input type="checkbox" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                    <div class="s-row"><div><div class="s-row-lbl">New KYC verified</div><div class="s-row-desc">Webhook to CRM on successful onboarding</div></div><label class="s-tog"><input type="checkbox"><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label></div>
                    <div class="form-group" style="margin-top:10px;"><label class="form-label">Webhook endpoint URL</label><input class="form-input" placeholder="https://yoursite.com/api/aidi-webhook" style="font-size:.84rem;"></div>
                    <button class="btn-sm btn-ink" onclick="showToast('Webhook saved ✓')" style="margin-top:4px;">Save endpoint</button>
                  </div>
                </div>
                <div class="s-panel" id="ssp-pricing">
                  <div class="s-title">Plans &amp; Pricing</div>
                  <div class="s-sub">Set subscription plans and fee schedules for clients and wealth managers.</div>

                  <!-- Toggle audience -->
                  <div style="display:flex;gap:0;background:var(--cream);border-radius:100px;padding:3px;width:fit-content;margin-bottom:20px;">
                    <button id="saAudClients" onclick="saAudience('clients')" style="padding:6px 18px;border-radius:100px;font-size:.79rem;font-weight:600;border:none;cursor:pointer;font-family:inherit;background:var(--ink);color:white;transition:all .18s;">Clients</button>
                    <button id="saAudWM" onclick="saAudience('wm')" style="padding:6px 18px;border-radius:100px;font-size:.79rem;font-weight:600;border:none;cursor:pointer;font-family:inherit;background:transparent;color:var(--ink-soft);transition:all .18s;">Wealth Managers</button>
                  </div>

                  <!-- Subscription plans editor -->
                  <div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Subscription Plans</div>
                  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:22px;" id="saPlanGrid">

                    <div style="border:1.5px solid var(--cream-dark);border-radius:var(--r-lg);padding:16px;">
                      <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Starter</div>
                      <div class="sm-fld" style="margin-bottom:10px;"><label class="sm-lbl">Monthly price</label>
                        <div style="position:relative;"><span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--ink-muted);font-size:.84rem;">$</span><input class="sm-inp" style="padding-left:24px;" value="0" type="number" min="0" id="saP-starter-price"></div>
                      </div>
                      <div class="sm-fld" style="margin-bottom:10px;"><label class="sm-lbl">Client / WM limit</label><input class="sm-inp" placeholder="e.g. 5 clients" id="saP-starter-limit" value="5"></div>
                      <div class="sm-fld" style="margin-bottom:0;"><label class="sm-lbl">Feature notes</label><input class="sm-inp" placeholder="e.g. Core tools, Elia standard" id="saP-starter-notes" value="Core tools, Elia standard"></div>
                    </div>

                    <div style="border:1.5px solid var(--ink);border-radius:var(--r-lg);padding:16px;background:var(--cream);">
                      <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Growth <span style="background:var(--blue);color:white;font-size:.6rem;padding:1px 6px;border-radius:100px;margin-left:4px;">POPULAR</span></div>
                      <div class="sm-fld" style="margin-bottom:10px;"><label class="sm-lbl">Monthly price</label>
                        <div style="position:relative;"><span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--ink-muted);font-size:.84rem;">$</span><input class="sm-inp" style="padding-left:24px;" value="29" type="number" min="0" id="saP-growth-price"></div>
                      </div>
                      <div class="sm-fld" style="margin-bottom:10px;"><label class="sm-lbl">Client / WM limit</label><input class="sm-inp" id="saP-growth-limit" value="25"></div>
                      <div class="sm-fld" style="margin-bottom:0;"><label class="sm-lbl">Feature notes</label><input class="sm-inp" id="saP-growth-notes" value="All Starter + entities, tax docs, compliance"></div>
                    </div>

                    <div style="border:1.5px solid var(--cream-dark);border-radius:var(--r-lg);padding:16px;">
                      <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Family Office</div>
                      <div class="sm-fld" style="margin-bottom:10px;"><label class="sm-lbl">Monthly price</label>
                        <div style="position:relative;"><span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--ink-muted);font-size:.84rem;">$</span><input class="sm-inp" style="padding-left:24px;" value="99" type="number" min="0" id="saP-family-price"></div>
                      </div>
                      <div class="sm-fld" style="margin-bottom:10px;"><label class="sm-lbl">Client / WM limit</label><input class="sm-inp" id="saP-family-limit" value="Unlimited"></div>
                      <div class="sm-fld" style="margin-bottom:0;"><label class="sm-lbl">Feature notes</label><input class="sm-inp" id="saP-family-notes" value="All Growth + SPV, dedicated account mgr"></div>
                    </div>

                  </div>

                  <!-- Fee items editor -->
                  <div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Fee Items</div>
                  <div style="background:white;border-radius:var(--r-lg);border:1px solid var(--cream-mid);overflow:hidden;margin-bottom:16px;" id="saFeeGrid">

                    <div class="billing-fee-row sa-fee-editable">
                      <div><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Yield Fee &mdash; All Assets (excl. Gold)</div><div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">Quarterly from card on file &middot; Stocks, ETFs, Crypto, Treasury, Real Estate, Private Markets</div></div>
                      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                        <input class="sm-inp" id="saFee-yield" value="1%" style="width:70px;text-align:center;padding:5px 8px;">
                        <button onclick="showToast('Yield fee updated')" style="padding:5px 12px;border-radius:100px;font-size:.72rem;font-weight:600;background:var(--ink);color:white;border:none;cursor:pointer;font-family:inherit;">Save</button>
                      </div>
                    </div>

                    <div class="billing-fee-row sa-fee-editable">
                      <div><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Airbnb &amp; Rental Income Fee</div><div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">Quarterly from card on file &middot; Aidi Haven portfolio only</div></div>
                      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                        <input class="sm-inp" id="saFee-rental" value="1%" style="width:70px;text-align:center;padding:5px 8px;">
                        <button onclick="showToast('Rental fee updated')" style="padding:5px 12px;border-radius:100px;font-size:.72rem;font-weight:600;background:var(--ink);color:white;border:none;cursor:pointer;font-family:inherit;">Save</button>
                      </div>
                    </div>

                    <div class="billing-fee-row sa-fee-editable">
                      <div><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Gold &amp; Metals Liquidation Fee</div><div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">Charged at liquidation only &mdash; not on holding</div></div>
                      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                        <input class="sm-inp" id="saFee-gold" value="1%" style="width:70px;text-align:center;padding:5px 8px;">
                        <button onclick="showToast('Gold fee updated')" style="padding:5px 12px;border-radius:100px;font-size:.72rem;font-weight:600;background:var(--ink);color:white;border:none;cursor:pointer;font-family:inherit;">Save</button>
                      </div>
                    </div>

                    <div class="billing-fee-row sa-fee-editable">
                      <div><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Elia AI Decision Outcomes</div><div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">Per formal report, evaluation, or structured recommendation</div></div>
                      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                        <div style="position:relative;"><span style="position:absolute;left:8px;top:50%;transform:translateY(-50%);color:var(--ink-muted);font-size:.83rem;">$</span><input class="sm-inp" id="saFee-elia" value="0.90" style="width:70px;text-align:center;padding:5px 8px 5px 18px;"></div>
                        <button onclick="showToast('Elia fee updated')" style="padding:5px 12px;border-radius:100px;font-size:.72rem;font-weight:600;background:var(--ink);color:white;border:none;cursor:pointer;font-family:inherit;">Save</button>
                      </div>
                    </div>

                    <div class="billing-fee-row sa-fee-editable">
                      <div><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Entity Structuring &mdash; Initial Setup</div><div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">LLC, trust, EIN, agent, operating agreement</div></div>
                      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                        <div style="position:relative;"><span style="position:absolute;left:8px;top:50%;transform:translateY(-50%);color:var(--ink-muted);font-size:.83rem;">$</span><input class="sm-inp" id="saFee-entity-setup" value="1000" style="width:80px;text-align:center;padding:5px 8px 5px 18px;" type="number"></div>
                        <button onclick="showToast('Entity setup fee updated')" style="padding:5px 12px;border-radius:100px;font-size:.72rem;font-weight:600;background:var(--ink);color:white;border:none;cursor:pointer;font-family:inherit;">Save</button>
                      </div>
                    </div>

                    <div class="billing-fee-row sa-fee-editable">
                      <div><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Entity Structuring &mdash; Annual Filings</div><div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">Per entity per year</div></div>
                      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                        <div style="position:relative;"><span style="position:absolute;left:8px;top:50%;transform:translateY(-50%);color:var(--ink-muted);font-size:.83rem;">$</span><input class="sm-inp" id="saFee-entity-annual" value="1000" style="width:80px;text-align:center;padding:5px 8px 5px 18px;" type="number"></div>
                        <button onclick="showToast('Annual filing fee updated')" style="padding:5px 12px;border-radius:100px;font-size:.72rem;font-weight:600;background:var(--ink);color:white;border:none;cursor:pointer;font-family:inherit;">Save</button>
                      </div>
                    </div>

                    <div class="billing-fee-row sa-fee-editable" style="border-bottom:none;">
                      <div><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Private Markets &mdash; SPV</div><div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">Carried interest on profits + annual management fee</div></div>
                      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                        <input class="sm-inp" id="saFee-spv-carry" value="20%" style="width:60px;text-align:center;padding:5px 8px;" placeholder="Carry">
                        <input class="sm-inp" id="saFee-spv-mgmt" value="2%" style="width:60px;text-align:center;padding:5px 8px;" placeholder="Mgmt">
                        <button onclick="showToast('SPV fees updated')" style="padding:5px 12px;border-radius:100px;font-size:.72rem;font-weight:600;background:var(--ink);color:white;border:none;cursor:pointer;font-family:inherit;">Save</button>
                      </div>
                    </div>

                  </div>

                  <div style="display:flex;gap:8px;justify-content:flex-end;">
                    <button onclick="showToast('All pricing changes published to platform ✓')" style="padding:9px 22px;border-radius:100px;font-size:.82rem;font-weight:600;background:var(--ink);color:white;border:none;cursor:pointer;font-family:inherit;" onmouseover="this.style.background='#1e3354'" onmouseout="this.style.background='var(--ink)'">Publish All Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="db-right">
          <div class="rp-section"><div class="rp-section-title">Quick Actions</div>
            <button class="btn-sm btn-ink" style="width:100%;justify-content:center;margin-bottom:7px;" onclick="saNav('approvals')">View Approval Queue (23)</button>
        
            <button class="btn-sm btn-outline" style="width:100%;justify-content:center;" onclick="openModal('modal-add-team')">Add Team Member</button>
          </div>
          <div class="rp-section"><div class="rp-section-title">Recent Approvals</div>
            <div class="act-row" style="padding:6px 0;"><div class="act-row-icon" style="background:var(--green-pale);color:var(--green);"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div class="act-row-info"><div class="act-row-name" style="font-size:.79rem;">Gold — Emeka Okafor</div><div class="act-row-date">Approved · Apr 9</div></div></div>
            <div class="act-row" style="padding:6px 0;border:none;"><div class="act-row-icon" style="background:var(--green-pale);color:var(--green);"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div class="act-row-info"><div class="act-row-name" style="font-size:.79rem;">T-Bill — Ibrahim Hassan</div><div class="act-row-date">Approved · Apr 6</div></div></div>
          </div>
          <div class="rp-section"><div class="rp-section-title">Team Online</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="display:flex;align-items:center;gap:7px;"><div style="width:25px;height:25px;border-radius:50%;background:var(--blue);color:white;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:700;flex-shrink:0;">LP</div><div style="flex:1;"><div style="font-size:.79rem;font-weight:500;">Lena Park</div><div style="font-size:.69rem;color:var(--ink-muted);">Support · Online</div></div><div style="width:6px;height:6px;border-radius:50%;background:var(--green);"></div></div>
              <div style="display:flex;align-items:center;gap:7px;"><div style="width:25px;height:25px;border-radius:50%;background:#7C3AED;color:white;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:700;flex-shrink:0;">CE</div><div style="flex:1;"><div style="font-size:.79rem;font-weight:500;">Chisom Eze</div><div style="font-size:.69rem;color:var(--ink-muted);">Tax · Online</div></div><div style="width:6px;height:6px;border-radius:50%;background:var(--green);"></div></div>
              <div style="display:flex;align-items:center;gap:7px;"><div style="width:25px;height:25px;border-radius:50%;background:var(--ink);color:white;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:700;flex-shrink:0;">AN</div><div style="flex:1;"><div style="font-size:.79rem;font-weight:500;">Dr. Amara Nwosu</div><div style="font-size:.69rem;color:var(--ink-muted);">Legal · Away</div></div><div style="width:6px;height:6px;border-radius:50%;background:var(--gold);"></div></div>
            </div>
          </div>
        </div>
      </div>
      <!-- ── Live Asset Ticker ── -->
      <div class="db-ticker">
        <div class="db-ticker-track">
          <div class="db-ticker-item"><span class="db-ticker-item-name">S&amp;P 500</span><span class="db-ticker-item-val">6,521.30</span><span class="db-ticker-item-chg dn">▼ 0.25%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">NASDAQ</span><span class="db-ticker-item-val">20,441.22</span><span class="db-ticker-item-chg dn">▼ 0.38%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">AAPL</span><span class="db-ticker-item-val">$214.44</span><span class="db-ticker-item-chg up">▲ 1.21%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">NVDA</span><span class="db-ticker-item-val">$875.39</span><span class="db-ticker-item-chg up">▲ 2.63%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Bitcoin</span><span class="db-ticker-item-val">$93,407</span><span class="db-ticker-item-chg up">▲ 3.33%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Ethereum</span><span class="db-ticker-item-val">$3,142</span><span class="db-ticker-item-chg up">▲ 1.82%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Gold</span><span class="db-ticker-item-val">$3,142/oz</span><span class="db-ticker-item-chg up">▲ 0.52%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Silver</span><span class="db-ticker-item-val">$29.80/oz</span><span class="db-ticker-item-chg up">▲ 1.09%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">T-Bill 90D</span><span class="db-ticker-item-val">5.18%</span><span class="db-ticker-item-chg dn">▼ 0.02%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Fed Rate</span><span class="db-ticker-item-val">5.25%</span><span class="db-ticker-item-chg">· Unchanged</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">DXY</span><span class="db-ticker-item-val">104.22</span><span class="db-ticker-item-chg dn">▼ 0.14%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">VIX</span><span class="db-ticker-item-val">16.4</span><span class="db-ticker-item-chg dn">▼ 1.8%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">S&amp;P 500</span><span class="db-ticker-item-val">6,521.30</span><span class="db-ticker-item-chg dn">▼ 0.25%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">NASDAQ</span><span class="db-ticker-item-val">20,441.22</span><span class="db-ticker-item-chg dn">▼ 0.38%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">AAPL</span><span class="db-ticker-item-val">$214.44</span><span class="db-ticker-item-chg up">▲ 1.21%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">NVDA</span><span class="db-ticker-item-val">$875.39</span><span class="db-ticker-item-chg up">▲ 2.63%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Bitcoin</span><span class="db-ticker-item-val">$93,407</span><span class="db-ticker-item-chg up">▲ 3.33%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Ethereum</span><span class="db-ticker-item-val">$3,142</span><span class="db-ticker-item-chg up">▲ 1.82%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Gold</span><span class="db-ticker-item-val">$3,142/oz</span><span class="db-ticker-item-chg up">▲ 0.52%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Silver</span><span class="db-ticker-item-val">$29.80/oz</span><span class="db-ticker-item-chg up">▲ 1.09%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">T-Bill 90D</span><span class="db-ticker-item-val">5.18%</span><span class="db-ticker-item-chg dn">▼ 0.02%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Fed Rate</span><span class="db-ticker-item-val">5.25%</span><span class="db-ticker-item-chg">· Unchanged</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">DXY</span><span class="db-ticker-item-val">104.22</span><span class="db-ticker-item-chg dn">▼ 0.14%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">VIX</span><span class="db-ticker-item-val">16.4</span><span class="db-ticker-item-chg dn">▼ 1.8%</span></div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'internal' })
</script>
