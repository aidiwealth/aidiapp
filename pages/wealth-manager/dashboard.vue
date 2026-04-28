<template>
  <!-- ═════════════════════════════════════════════════════════════════
       WM dashboard
       Source: aidi_internal_v3.html
       Layout: internal
       DO NOT modify HTML/CSS/JS structurally — handlers are defined in
       the zone's JS bundle (loaded by the layout) and bound by id/class.
       ═════════════════════════════════════════════════════════════════ -->
  <div class="aidi-route-wrapper">
    <div id="screen-wm" class="screen">
    <div class="db-shell">
      <header class="db-topbar">
        <div class="db-topbar-logo" onclick="wmNav('home')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25675.8 23448.1" width="28" height="26" style="display:block;flex-shrink:0;"><path fill="#0c2057" d="M23266.6 14962.5c7.4,9.7 17.8,11.9 21.6,29.5l466.9 1086.6c251.8,922.3 129.4,1643.7 -247.7,2482.8l-998.8 1178.4c-246.2,185.5 -509.8,353.6 -796.5,463.1 -1150,439 -2154.1,347.4 -3203.2,-293.6l-464 -365.1c-26.8,-151.2 -762.4,-673.1 -882.4,-768.7 -1008.7,-803.6 -2339.6,-1916.5 -3326.1,-2668.3l-2116.4 -1701.8c-863.1,-678 -2253.6,-1912.9 -3191.5,-2383 -545.5,-273.4 -1354.2,-522.4 -1987.2,-571 -265.2,-20.3 -603,-0.7 -876.9,-2.3 -1194,-6.9 -2484.2,562.2 -3398.3,1259.8 -1177.7,898.8 -1773.4,2029.9 -2130.6,3443.9 -315.9,1251 -66.6,3148.9 610.9,4262.5 458.3,753.3 879,1293.4 1602,1834.4 2691.1,2013.6 6325,1431.2 8302.2,-1309 473.8,-656.6 888.8,-1600 970.6,-2453.8 -131.5,-113.5 95,-426.5 -186.2,-776 -161.4,-200.5 -256.7,-312.4 -570.7,-394 -380.7,-98.9 -892.7,104.4 -1023.7,607.4 -31.5,120.8 16,276.6 -40.1,130.8 -74.1,88.8 -95.1,327.9 -118.6,428 -40.3,172.3 -74.9,291.6 -126.8,445.8 -1135.2,3371.5 -5999.1,3615.3 -7403.4,81.1 -1005,-2529.4 699.1,-5139.3 2930.2,-5585.2 1586.9,-317.2 2581.3,157.2 3490,883.1 1705.7,1362.6 3389.2,2698.8 5084.7,4078.8l1885.4 1512.7c113.1,95.5 199.5,170.7 312.2,260.5 1099,875.3 1730.4,1607.4 3173.3,1981.2 1688.2,437.3 3294.9,3.6 4517.5,-905.8l609.3 -536.1c119.3,-118.1 160.5,-190.9 267.2,-305.6 264.9,-284.7 513.3,-672.9 690.4,-1027.8 837.4,-1679 737.9,-3805.9 -272.3,-5480.3l-1580.9 -2428.2c-82.9,-123.7 -143.5,-235.1 -220.9,-351.8 -305,-459.3 -597.9,-917.5 -909.2,-1381.7 -159.7,-238.1 -288.5,-452.6 -450.4,-695l-4741.2 -7247.8c-330,-374.6 -432.1,-510.9 -875.7,-842.4l-711 -434.5c-272,-136.9 -518.7,-232.2 -827.1,-318.3 -998.4,-278.7 -2060.2,-235.3 -2983.8,71.1 -839.4,278.6 -1484.1,764.8 -2066.7,1369.7 -326.2,338.6 -888.1,1282.6 -1151.3,1712.3l-3317.8 5273c-142.9,241.7 -324.3,435.1 -344.3,791 -46.1,819 1120.9,1523.4 1838.3,397.5l1312.8 -2085.3c151.2,-235.8 299.5,-466.4 451.2,-694.2l1334.2 -2102.2c371,-621.2 1148.7,-1925.5 1681,-2328 99.4,-75.2 215.7,-173.4 331.9,-240.8 489.2,-283.6 1029.3,-506.2 1843.4,-444 988.5,75.6 1636.1,577.8 2124.6,1311.7l5185.9 7986.7c81.5,133.7 145,211.7 225.2,347.5 149.5,253.3 300.4,450.8 447.8,697.7l1754.8 2672.5c68.9,65.2 -6,35.2 76.2,40.4z"/></svg>
        </div>
        <div class="db-search" id="wmSearchWrap"><div class="db-search-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><input class="db-search-input" type="text" id="wmSearchInput" placeholder="Search clients, assets, trades, opportunities…" oninput="intSearchQuery(this.value,'wm')" onkeydown="intSearchKeyNav(event,'wm')" onfocus="intSearchQuery(this.value,'wm')" autocomplete="off"><div class="db-search-dropdown" id="wmSearchDropdown"></div></div>
        <div class="db-topbar-spacer"></div>
        <button class="db-hamburger" onclick="toggleMobileNav('wm')" aria-label="Menu"><svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
        <div class="db-topbar-actions">
          <span class="role-pill pill-wm">Wealth Manager</span>
          <div class="db-notif-btn" onclick="toggleNotif('wm-notif')"><svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg><div class="db-notif-badge">4</div></div>
          <div class="db-user-btn" onclick="toggleDrop('wm-udrop')">
            <div class="db-user-avatar">SM</div>
            <div class="db-user-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
            <div class="user-dropdown" id="wm-udrop">
              <div class="user-dropdown-header"><div class="user-dropdown-avatar">SM</div><div><div class="user-dropdown-name">Sarah Mensah</div><div class="user-dropdown-email"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="384b594a595078555d4a515c5159564f5d59544c50165b5755">[email&#160;protected]</a></div></div></div>
              <div class="user-dropdown-divider"></div>
              <div class="user-dropdown-item" onclick="wmNav('settings');toggleDrop('wm-udrop')"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>Settings</div>
              <div class="user-dropdown-divider"></div>
              <div class="user-dropdown-item danger" onclick="goScreen('screen-role')"><svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Log out</div>
            </div>
          </div>
        </div>
      </header>
      <div class="db-body">
        <nav class="db-sidebar">
          <div class="db-nav-icon active" id="wm-nav-home" onclick="wmNav('home')" title="Dashboard"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
          <div class="db-nav-icon" id="wm-nav-clients" onclick="wmNav('clients')" title="Clients"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><div class="db-nav-icon-badge">24</div></div>
          <div class="db-nav-icon" id="wm-nav-trade" onclick="wmNav('trade')" title="Trade Centre"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
          <div class="db-nav-icon" id="wm-nav-orders" onclick="wmNav('orders')" title="Orders"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg><div class="db-nav-icon-badge">3</div></div>
          <div class="db-nav-icon" id="wm-nav-tasks" onclick="wmNav('tasks')" title="Tasks"><svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg><div class="db-nav-icon-badge red">7</div></div>
          <div class="db-nav-icon" id="wm-nav-docs" onclick="wmNav('docs')" title="Client Documents"><svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></div>
          <div class="db-nav-icon" id="wm-nav-msgs" onclick="wmNav('msgs')" title="Messages"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><div class="db-nav-icon-badge">2</div></div>
          <div class="db-sidebar-spacer"></div>
          <div class="db-nav-icon" id="wm-nav-tax" onclick="wmNav('tax')" title="Tax Documents"><svg viewBox="0 0 24 24" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
          <div class="db-nav-icon" id="wm-nav-ai" onclick="wmNav('ai')" title="AI Insights"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
          <div class="db-nav-icon" id="wm-nav-entities" onclick="wmNav('entities')" title="Entities &amp; Compliance"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
          <div class="db-nav-icon" id="wm-nav-settings" onclick="wmNav('settings')" title="Settings"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
        </nav>
        <div class="db-main">
          <div class="db-section active db-content" id="wm-home">
            <div class="nw-card"><div class="nw-card-inner">
              <div class="nw-card-label">Total AUM Under Management</div>
              <div style="font-size:.8rem;color:rgba(255,255,255,.55);margin-bottom:14px;">Sarah Mensah · Wealth Manager · 24 Active Clients</div>
              <div class="nw-card-value">$284.7M</div>
              <div class="nw-card-change">▲ $3.2M this month · +1.1%</div>
              <div class="nw-card-stats">
                <div class="nw-card-stat"><div class="v">$8.4M</div><div class="l">Net Inflows</div></div>
                <div class="nw-card-stat"><div class="v">+9.2%</div><div class="l">Avg. Return</div></div>
                <div class="nw-card-stat"><div class="v" style="color:#f87171;">4</div><div class="l">Risk Alerts</div></div>
                <div class="nw-card-stat"><div class="v">6</div><div class="l">Reviews Due</div></div>
              </div>
            </div></div>
            <div class="stats-row stats-row-5 hidden-xs">
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/></svg></div><div class="stat-card-val">7</div><div class="stat-card-lbl">Open Tasks</div></div>
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--cream-mid);color:var(--ink-soft);"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg></div><div class="stat-card-val">11</div><div class="stat-card-lbl">Missing Docs</div></div>
              <div class="stat-card"><div class="stat-card-icon" style="background:var(--green-pale);color:var(--green);"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="stat-card-val">3</div><div class="stat-card-lbl">Onboarding</div></div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 290px;gap:13px;">
              <div>
                <div class="asset-list">
                  <div class="asset-list-head"><span class="asset-list-title">Priority Clients</span><span class="asset-list-action" onclick="wmNav('clients')">View all →</span></div>
                  <div class="asset-row" onclick="openCW('emeka')">
                    <div class="asset-row-icon" style="background:var(--blue-pale);color:var(--blue);">EO</div>
                    <div class="asset-row-info"><div class="asset-row-name">Emeka Okafor</div><div class="asset-row-sub">Individual · LLC · Trust · Risk: High</div></div>
                    <div class="asset-row-right"><div class="asset-row-val">$18.4M</div><div class="asset-row-chg" style="color:var(--red);">⚠ Alert</div></div>
                    <div style="display:flex;gap:4px;margin-left:8px;" onclick="event.stopPropagation()">
                      <button class="btn-sm btn-blue" onclick="openCW('emeka')">Open</button>
                      <button class="btn-sm btn-outline" onclick="openClientNewTab('emeka')" title="New tab">↗</button>
                      <button class="btn-sm btn-outline" onclick="currentWMTxClient='emeka';wmNav('trade')"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></button>
                    </div>
                  </div>
                  <div class="asset-row" onclick="openCW('fatima')">
                    <div class="asset-row-icon" style="background:var(--green-pale);color:var(--green);">FA</div>
                    <div class="asset-row-info"><div class="asset-row-name">Fatima Al-Rashid</div><div class="asset-row-sub">LLC · Trust · Individual · Review overdue</div></div>
                    <div class="asset-row-right"><div class="asset-row-val">$31.2M</div><div class="asset-row-chg" style="color:var(--gold);">Review Due</div></div>
                    <div style="display:flex;gap:4px;margin-left:8px;" onclick="event.stopPropagation()">
                      <button class="btn-sm btn-blue" onclick="openCW('fatima')">Open</button>
                      <button class="btn-sm btn-outline" onclick="openClientNewTab('fatima')">↗</button>
                      <button class="btn-sm btn-outline" onclick="currentWMTxClient='fatima';wmNav('trade')"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></button>
                    </div>
                  </div>
                  <div class="asset-row" onclick="openCW('priya')">
                    <div class="asset-row-icon" style="background:#F3E8FF;color:#7C3AED;">PS</div>
                    <div class="asset-row-info"><div class="asset-row-name">Priya Sharma</div><div class="asset-row-sub">Individual · Active · All docs complete</div></div>
                    <div class="asset-row-right"><div class="asset-row-val">$4.2M</div><div class="asset-row-chg" style="color:var(--green);">▲ 6.1% YTD</div></div>
                    <div style="display:flex;gap:4px;margin-left:8px;" onclick="event.stopPropagation()">
                      <button class="btn-sm btn-blue" onclick="openCW('priya')">Open</button>
                      <button class="btn-sm btn-outline" onclick="openClientNewTab('priya')">↗</button>
                      <button class="btn-sm btn-outline" onclick="currentWMTxClient='priya';wmNav('trade')"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></button>
                    </div>
                  </div>
                  <div class="asset-row" onclick="openCW('ibrahim')">
                    <div class="asset-row-icon" style="background:#ECFEFF;color:#0E7490;">IH</div>
                    <div class="asset-row-info"><div class="asset-row-name">Ibrahim Hassan</div><div class="asset-row-sub">Diaspora · Cross-border · Passport 32 days</div></div>
                    <div class="asset-row-right"><div class="asset-row-val">$12.1M</div><div class="asset-row-chg" style="color:var(--gold);">KYC Expiring</div></div>
                    <div style="display:flex;gap:4px;margin-left:8px;" onclick="event.stopPropagation()">
                      <button class="btn-sm btn-blue" onclick="openCW('ibrahim')">Open</button>
                      <button class="btn-sm btn-outline" onclick="openClientNewTab('ibrahim')">↗</button>
                      <button class="btn-sm btn-outline" onclick="currentWMTxClient='ibrahim';wmNav('trade')"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="ai-cards">
                  <div class="ai-card risk" onclick="openNoticeModal('wm-concentration')"><div class="ai-card-icon"><svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg></div><div><div class="ai-card-type">Concentration Risk</div><div class="ai-card-text">Emeka Okafor — 71% US tech. Review allocation urgently.</div></div></div>
                  <div class="ai-card alert" onclick="openNoticeModal('wm-review')"><div class="ai-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div><div><div class="ai-card-type">Review Due</div><div class="ai-card-text">Fatima Al-Rashid — annual review 14 days overdue.</div></div></div>
                  <div class="ai-card opp" onclick="openNoticeModal('wm-opportunity')"><div class="ai-card-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg></div><div><div class="ai-card-type">Opportunity</div><div class="ai-card-text">Bridge Loan Fund III matches 3 client profiles.</div></div></div>
                  <div class="ai-card risk" onclick="openNoticeModal('wm-kyc')"><div class="ai-card-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div><div class="ai-card-type">KYC Expiry</div><div class="ai-card-text">Ibrahim Hassan — passport expires in 32 days.</div></div></div>
                </div>
              </div>
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
                <p style="font-weight:600;margin-bottom:8px;">Disclaimer</p>
                <p style="margin-bottom:8px;">Aidi is a technology company that provides access to financial tools, insights, and infrastructure. Aidi and its affiliates are not broker-dealers, custodians, or registered investment advisors.</p>
                <p style="margin-bottom:8px;">Wealth management and advisory services are offered through affiliated entities and in partnership with licensed third parties. In the United States, advisory services are provided by Aidi Ventures LLC and/or Aidi Wealth LLC in partnership with registered investment advisors. In Nigeria, services are delivered through Aidi Technology Limited, subject to applicable local regulations.</p>
                <p style="margin-bottom:8px;">Securities brokerage and related services are provided by third-party partners, including Alpaca Securities LLC (member FINRA/SIPC). Cryptocurrency trading services are offered through Alpaca Crypto LLC. Aidi does not custody client assets. All trade instructions submitted through this platform require explicit client authorisation and are subject to regulatory compliance obligations.</p>
                <p style="margin-bottom:8px;">All investments involve risk, including the potential loss of principal. Past performance is not indicative of future results. Cryptocurrency and digital assets are highly speculative and subject to market volatility, regulatory uncertainty, and cybersecurity risks.</p>
                <p>Information presented on this platform is for informational purposes only and should not be construed as investment, legal, or tax advice. Availability of products and services may vary by location and applicable regulations. Aidi aggregates data from third-party providers; while we strive for accuracy, we do not guarantee completeness or reliability.</p>
              </div>
            </div>
          </div>
          <div class="db-section db-content" id="wm-clients">
            <div class="page-hrow">
              <div class="page-header"><h1>Clients</h1><p>24 clients across all statuses</p></div>
              <div style="display:flex;gap:7px;">
                <button class="btn-sm btn-ink" onclick="openAddClient()"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add Client</button>
              </div>
            </div>
            <div class="asset-list">
              <div class="asset-list-head">
                <input type="text" placeholder="Search clients…" style="border:1px solid var(--cream-dark);padding:6px 12px;border-radius:100px;font-size:.82rem;outline:none;width:200px;">
                <select style="border:1px solid var(--cream-dark);padding:6px 12px;border-radius:100px;font-size:.82rem;outline:none;color:var(--ink-soft);"><option>All statuses</option><option>Active</option><option>Onboarding</option><option>Review Due</option><option>Alert</option></select>
              </div>
              <div class="asset-row" onclick="openCW('emeka')">
                <div class="asset-row-icon" style="background:var(--blue-pale);color:var(--blue);">EO</div>
                <div class="asset-row-info"><div class="asset-row-name">Emeka Okafor</div><div class="asset-row-sub">Individual · LLC · Trust · 2 entities · Risk: High</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$18.4M</div><div class="asset-row-chg" style="color:var(--green);">▲ 4.2% YTD</div></div>
                <span class="badge badge-alert" style="margin:0 8px;flex-shrink:0;">Alert</span>
                <div style="display:flex;gap:4px;" onclick="event.stopPropagation()">
                  <button class="btn-sm btn-blue" onclick="openCW('emeka')">Open</button>
                  <button class="btn-sm btn-outline" onclick="openClientNewTab('emeka')">↗ Tab</button>
                  <button class="btn-sm btn-outline" onclick="openModal('modal-creds','emeka')"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></button>
                  <button class="btn-sm btn-outline" onclick="currentWMTxClient='emeka';wmNav('trade')"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></button>
                </div>
              </div>
              <div class="asset-row" onclick="openCW('fatima')">
                <div class="asset-row-icon" style="background:var(--green-pale);color:var(--green);">FA</div>
                <div class="asset-row-info"><div class="asset-row-name">Fatima Al-Rashid</div><div class="asset-row-sub">LLC · Trust · Individual · Review overdue</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$31.2M</div><div class="asset-row-chg" style="color:var(--green);">▲ 7.8% YTD</div></div>
                <span class="badge badge-review" style="margin:0 8px;flex-shrink:0;">Review Due</span>
                <div style="display:flex;gap:4px;" onclick="event.stopPropagation()">
                  <button class="btn-sm btn-blue" onclick="openCW('fatima')">Open</button>
                  <button class="btn-sm btn-outline" onclick="openClientNewTab('fatima')">↗ Tab</button>
                  <button class="btn-sm btn-outline" onclick="openModal('modal-creds','fatima')"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></button>
                  <button class="btn-sm btn-outline" onclick="currentWMTxClient='fatima';wmNav('trade')"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></button>
                </div>
              </div>
              <div class="asset-row" onclick="openCW('kwame')">
                <div class="asset-row-icon" style="background:var(--gold-pale);color:var(--gold);">KB</div>
                <div class="asset-row-info"><div class="asset-row-name">Kwame Boateng</div><div class="asset-row-sub">Individual · Onboarding · 5 docs missing</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$8.9M</div><div class="asset-row-chg" style="color:var(--ink-muted);">Pending verification</div></div>
                <span class="badge badge-onboard" style="margin:0 8px;flex-shrink:0;">Onboarding</span>
                <div style="display:flex;gap:4px;" onclick="event.stopPropagation()">
                  <button class="btn-sm btn-blue" onclick="openCW('kwame')">Open</button>
                  <button class="btn-sm btn-outline" onclick="openClientNewTab('kwame')">↗ Tab</button>
                  <button class="btn-sm btn-outline" onclick="openModal('modal-creds','kwame')"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></button>
                  <button class="btn-sm btn-outline" style="opacity:.4;cursor:not-allowed;"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></button>
                </div>
              </div>
              <div class="asset-row" onclick="openCW('priya')">
                <div class="asset-row-icon" style="background:#F3E8FF;color:#7C3AED;">PS</div>
                <div class="asset-row-info"><div class="asset-row-name">Priya Sharma</div><div class="asset-row-sub">Individual · Active · All documents complete</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$4.2M</div><div class="asset-row-chg" style="color:var(--green);">▲ 6.1% YTD</div></div>
                <span class="badge badge-active" style="margin:0 8px;flex-shrink:0;">Active</span>
                <div style="display:flex;gap:4px;" onclick="event.stopPropagation()">
                  <button class="btn-sm btn-blue" onclick="openCW('priya')">Open</button>
                  <button class="btn-sm btn-outline" onclick="openClientNewTab('priya')">↗ Tab</button>
                  <button class="btn-sm btn-outline" onclick="openModal('modal-creds','priya')"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></button>
                  <button class="btn-sm btn-outline" onclick="currentWMTxClient='priya';wmNav('trade')"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></button>
                </div>
              </div>
              <div class="asset-row" onclick="openCW('ibrahim')">
                <div class="asset-row-icon" style="background:#ECFEFF;color:#0E7490;">IH</div>
                <div class="asset-row-info"><div class="asset-row-name">Ibrahim Hassan</div><div class="asset-row-sub">Individual · Cross-border · Passport 32 days</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$12.1M</div><div class="asset-row-chg" style="color:var(--green);">▲ 5.5% YTD</div></div>
                <span class="badge badge-active" style="margin:0 8px;flex-shrink:0;">Active</span>
                <div style="display:flex;gap:4px;" onclick="event.stopPropagation()">
                  <button class="btn-sm btn-blue" onclick="openCW('ibrahim')">Open</button>
                  <button class="btn-sm btn-outline" onclick="openClientNewTab('ibrahim')">↗ Tab</button>
                  <button class="btn-sm btn-outline" onclick="openModal('modal-creds','ibrahim')"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></button>
                  <button class="btn-sm btn-outline" onclick="currentWMTxClient='ibrahim';wmNav('trade')"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></button>
                </div>
              </div>
            </div>
          </div>
          <div class="db-section db-content" id="wm-trade">
            <div class="page-header"><h1>Trade Centre</h1><p>Select an asset to open the full trading page. Equities and crypto execute via Aidi. Gold, silver, real estate, and private markets route to Aidi admin for approval.</p></div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:24px;">
              <!-- Direct execution -->
              <div style="background:var(--green-pale);border:1px solid rgba(26,122,94,.15);border-radius:12px;padding:14px 16px;">
                <div style="font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--green);margin-bottom:10px;opacity:.75;">Direct Execution</div>
                <div style="display:flex;flex-direction:column;gap:7px;">
                  <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:18px;height:18px;border-radius:50%;background:var(--green);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                    <div><div style="font-size:.82rem;font-weight:600;color:var(--ink);">Equities</div><div style="font-size:.71rem;color:var(--ink-muted);">Aidi · Instant routing</div></div>
                  </div>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:18px;height:18px;border-radius:50%;background:var(--green);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                    <div><div style="font-size:.82rem;font-weight:600;color:var(--ink);">Crypto</div><div style="font-size:.71rem;color:var(--ink-muted);">Aidi · Instant routing</div></div>
                  </div>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:18px;height:18px;border-radius:50%;background:var(--blue);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                    <div><div style="font-size:.82rem;font-weight:600;color:var(--ink);">T-Bills</div><div style="font-size:.71rem;color:var(--ink-muted);">Aidi · Instant routing</div></div>
                  </div>
                </div>
              </div>
              <!-- Admin approval required -->
              <div style="background:var(--gold-pale);border:1px solid rgba(200,150,46,.2);border-radius:12px;padding:14px 16px;">
                <div style="font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;opacity:.85;">Requires Admin Approval</div>
                <div style="display:flex;flex-direction:column;gap:7px;">
                  <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:18px;height:18px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="white" stroke-width="2.5"><path d="M12 9v4"/><circle cx="12" cy="16" r=".5" fill="white"/></svg></div>
                    <div><div style="font-size:.82rem;font-weight:600;color:var(--ink);">Gold &amp; Silver</div><div style="font-size:.71rem;color:var(--ink-muted);">Aidi vault · Admin sign-off required</div></div>
                  </div>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:18px;height:18px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="white" stroke-width="2.5"><path d="M12 9v4"/><circle cx="12" cy="16" r=".5" fill="white"/></svg></div>
                    <div><div style="font-size:.82rem;font-weight:600;color:var(--ink);">Real Estate</div><div style="font-size:.71rem;color:var(--ink-muted);">Property allocation · Admin sign-off required</div></div>
                  </div>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:18px;height:18px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="white" stroke-width="2.5"><path d="M12 9v4"/><circle cx="12" cy="16" r=".5" fill="white"/></svg></div>
                    <div><div style="font-size:.82rem;font-weight:600;color:var(--ink);">Private Markets</div><div style="font-size:.71rem;color:var(--ink-muted);">PE, credit, alternatives · Admin sign-off required</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Equities &amp; Fixed Income · Aidi</div>
            <div class="asset-list" style="margin-bottom:18px;">
              <div class="asset-row" onclick="openWMTxPage('spy')">
                <div class="asset-row-icon" style="background:var(--blue-pale);color:var(--blue);font-weight:700;font-size:.72rem;">S</div>
                <div class="asset-row-info"><div class="asset-row-name">S&amp;P 500 ETF (SPY)</div><div class="asset-row-sub">US Equities · NYSE ARCA · Market order / Limit · Direct execution</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$583.42</div><div class="asset-row-chg" style="color:var(--green);">▲ +0.81% Today</div></div>
                <span class="badge badge-active" style="margin:0 8px;flex-shrink:0;">Direct</span>
              </div>
              <div class="asset-row" onclick="openWMTxPage('aapl')">
                <div class="asset-row-icon" style="background:var(--blue-pale);color:var(--blue);font-weight:700;font-size:.72rem;">A</div>
                <div class="asset-row-info"><div class="asset-row-name">Apple Inc. (AAPL)</div><div class="asset-row-sub">Technology · NASDAQ · Market order / Limit · Direct execution</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$214.44</div><div class="asset-row-chg" style="color:var(--green);">▲ +1.21% Today</div></div>
                <span class="badge badge-active" style="margin:0 8px;flex-shrink:0;">Direct</span>
              </div>
              <div class="asset-row" onclick="openWMTxPage('nvda')">
                <div class="asset-row-icon" style="background:var(--green-pale);color:var(--green);font-weight:700;font-size:.72rem;">N</div>
                <div class="asset-row-info"><div class="asset-row-name">NVIDIA Corp. (NVDA)</div><div class="asset-row-sub">Semiconductors · NASDAQ · Market order / Limit · Direct execution</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$875.39</div><div class="asset-row-chg" style="color:var(--green);">▲ +2.63% Today</div></div>
                <span class="badge badge-active" style="margin:0 8px;flex-shrink:0;">Direct</span>
              </div>
              <div class="asset-row" onclick="openWMTxPage('tbill')">
                <div class="asset-row-icon" style="background:#ECFEFF;color:#0E7490;font-weight:700;font-size:.72rem;">T</div>
                <div class="asset-row-info"><div class="asset-row-name">90-Day Treasury Bill</div><div class="asset-row-sub">US Treasury · AAA · Cash account · Auto-roll · Direct execution</div></div>
                <div class="asset-row-right"><div class="asset-row-val">5.18% yield</div><div class="asset-row-chg" style="color:var(--green);">Annualised</div></div>
                <span class="badge badge-active" style="margin:0 8px;flex-shrink:0;">Direct</span>
              </div>
            </div>
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Crypto · Aidi</div>
            <div class="asset-list" style="margin-bottom:18px;">
              <div class="asset-row" onclick="openWMTxPage('btc')">
                <div class="asset-row-icon" style="background:#FFF7ED;color:#EA580C;font-weight:700;font-size:.72rem;">₿</div>
                <div class="asset-row-info"><div class="asset-row-name">Bitcoin (BTC)</div><div class="asset-row-sub">Cryptocurrency · Aidi · Institutional custody · Direct execution</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$93,407</div><div class="asset-row-chg" style="color:var(--green);">▲ +3.45% Today</div></div>
                <span class="badge badge-active" style="margin:0 8px;flex-shrink:0;">Direct</span>
              </div>
              <div class="asset-row" onclick="openWMTxPage('eth')">
                <div class="asset-row-icon" style="background:#EDE9FE;color:#7C3AED;font-weight:700;font-size:.72rem;">E</div>
                <div class="asset-row-info"><div class="asset-row-name">Ethereum (ETH)</div><div class="asset-row-sub">Cryptocurrency · Aidi · Institutional custody · Direct execution</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$3,142</div><div class="asset-row-chg" style="color:var(--green);">▲ +2.93% Today</div></div>
                <span class="badge badge-active" style="margin:0 8px;flex-shrink:0;">Direct</span>
              </div>
            </div>
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Precious Metals &amp; Alternatives · Admin Approval Required</div>
            <div class="asset-list">
              <div class="asset-row" onclick="openWMTxPage('gold')">
                <div class="asset-row-icon" style="background:var(--gold-pale);color:var(--gold);font-weight:700;font-size:.72rem;">G</div>
                <div class="asset-row-info"><div class="asset-row-name">Allocated Gold (IAU)</div><div class="asset-row-sub">Precious Metals · Secure vault · T+2 settlement · Aidi admin approved</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$3,142/oz</div><div class="asset-row-chg" style="color:var(--green);">▲ +0.52% Today</div></div>
                <span class="badge badge-review" style="margin:0 8px;flex-shrink:0;">Admin</span>
              </div>
              <div class="asset-row" onclick="openWMTxPage('silver')">
                <div class="asset-row-icon" style="background:var(--cream-mid);color:var(--ink-soft);font-weight:700;font-size:.72rem;">Ag</div>
                <div class="asset-row-info"><div class="asset-row-name">Allocated Silver (XAG)</div><div class="asset-row-sub">Precious Metals · Secure vault · T+2 settlement · Aidi admin approved</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$29.80/oz</div><div class="asset-row-chg" style="color:var(--green);">▲ +1.09% Today</div></div>
                <span class="badge badge-review" style="margin:0 8px;flex-shrink:0;">Admin</span>
              </div>
              <div class="asset-row" onclick="wmNav('opps')">
                <div class="asset-row-icon" style="background:#F3E8FF;color:#7C3AED;font-weight:700;font-size:.72rem;">RE</div>
                <div class="asset-row-info"><div class="asset-row-name">Real Estate &amp; Private Markets</div><div class="asset-row-sub">View all opportunities → Select deal → Submit allocation request · Aidi admin approved</div></div>
                <div class="asset-row-right"><div class="asset-row-val">View deals</div><div class="asset-row-chg" style="color:var(--ink-muted);">Multiple assets</div></div>
                <span class="badge badge-review" style="margin:0 8px;flex-shrink:0;">Admin</span>
              </div>
            </div>
            <div class="activity-card-db" style="margin-top:18px;">
              <div class="activity-card-db-head"><span class="activity-card-db-head-title">Recent Instructions</span><a onclick="wmNav('orders')">View all →</a></div>
              <div class="act-row"><div class="act-row-icon" style="background:var(--green-pale);color:var(--green);"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg></div><div class="act-row-info"><div class="act-row-name">Priya Sharma — S&amp;P 500 (SPY) · BUY</div><div class="act-row-date">Apr 9, 2026 · Executed via Aidi</div></div><div class="act-row-amt" style="color:var(--green);">$50,000</div></div>
              <div class="act-row"><div class="act-row-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg></div><div class="act-row-info"><div class="act-row-name">Emeka Okafor — Bridge Loan Fund III · ALLOCATE</div><div class="act-row-date">Apr 8, 2026 · Pending Aidi Admin Approval</div></div><div class="act-row-amt" style="color:var(--gold);">$250,000</div></div>
              <div class="act-row"><div class="act-row-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg></div><div class="act-row-info"><div class="act-row-name">Fatima Al-Rashid — Gold (IAU) · BUY</div><div class="act-row-date">Apr 7, 2026 · Admin Approved · Executed</div></div><div class="act-row-amt">$180,000</div></div>
            </div>
          </div>
          <div class="db-section db-content" id="wm-opps">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:18px;">
              <button onclick="wmNav('trade')" style="display:flex;align-items:center;gap:6px;font-size:.82rem;color:var(--ink-soft);background:var(--cream);border:1.5px solid var(--cream-dark);border-radius:100px;padding:7px 14px;cursor:pointer;font-family:inherit;transition:all .15s;" onmouseover="this.style.background='var(--cream-dark)'" onmouseout="this.style.background='var(--cream)'"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg> Back to Trade Centre</button>
              <div style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:400;color:var(--ink);">Opportunities</div>
            </div>
            <div style="background:var(--blue-pale);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--blue);margin-bottom:18px;">&#x2139; Opportunities are curated and managed by the Aidi team. As a wealth manager, you submit allocation requests on behalf of clients — the Aidi admin team approves and executes.</div>
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Real Estate</div>
            <div class="asset-list" style="margin-bottom:18px;">
              <div class="asset-row" onclick="openWMTxPage('unit-a')">
                <div style="width:52px;height:40px;border-radius:8px;background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/873bf710-2bdb-47e9-97a8-0e7cc4b142b9.avif) center/cover;flex-shrink:0;"></div>
                <div class="asset-row-info"><div class="asset-row-name">Modern Stylish Home</div><div class="asset-row-sub">San Jose, CA · Residential · Admin approved allocation</div></div>
                <div class="asset-row-right"><div class="asset-row-val">5% cap rate</div><div class="asset-row-chg" style="color:var(--green);">Min $5,000</div></div>
                <span class="badge badge-active" style="margin:0 10px;flex-shrink:0;">Open</span>
                <span class="badge badge-review" style="flex-shrink:0;">Admin</span>
              </div>
            </div>
                    <div style="font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Private Equity</div>
            <div class="asset-list" style="margin-bottom:18px;">
              <div class="asset-row" onclick="openWMTxPage('termii')">
                <div style="width:52px;height:40px;border-radius:8px;background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/deals.png) center/cover;flex-shrink:0;"></div>
                <div class="asset-row-info"><div class="asset-row-name">Termii — AI Payments Infrastructure</div><div class="asset-row-sub">Private Equity · $5M ARR · Delaware C-Corp · Admin approved allocation</div></div>
                <div class="asset-row-right"><div class="asset-row-val">Private</div><div class="asset-row-chg" style="color:var(--ink-muted);">Min $1,000,000</div></div>
                <span class="badge badge-active" style="margin:0 10px;flex-shrink:0;">Open</span>
                <span class="badge badge-review" style="flex-shrink:0;">Admin</span>
              </div>
              <div class="asset-row" onclick="openWMTxPage('rayda')">
                <div style="width:52px;height:40px;border-radius:8px;background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/plan_1661112808.jpg) center/cover;flex-shrink:0;"></div>
                <div class="asset-row-info"><div class="asset-row-name">Rayda — IT Asset Management</div><div class="asset-row-sub">Private Equity · $5.4M ARR · Delaware C-Corp · Admin approved allocation</div></div>
                <div class="asset-row-right"><div class="asset-row-val">Private</div><div class="asset-row-chg" style="color:var(--ink-muted);">Min $1,000,000</div></div>
                <span class="badge badge-active" style="margin:0 10px;flex-shrink:0;">Open</span>
                <span class="badge badge-review" style="flex-shrink:0;">Admin</span>
              </div>
            </div>
          </div>
          <div class="db-section db-content" id="wm-orders">
            <div class="page-header"><h1>Order History</h1><p>All advisory instructions submitted on behalf of clients. Click any order to view full details.</p></div>
            <div class="table-card">
              <table class="data-table" id="ordersTable">
                <thead><tr><th>Date</th><th>Client</th><th>Asset</th><th>Type</th><th>Amount</th><th>Auth</th><th>Status</th><th></th></tr></thead>
                <tbody>
                  <tr class="order-row" onclick="openOrderModal('ord-1')" style="cursor:pointer;">
                    <td style="color:var(--ink-muted);">Apr 9, 2026</td>
                    <td><strong>Priya Sharma</strong></td>
                    <td>S&amp;P 500 ETF (SPY)</td>
                    <td><span class="tag tag-green">BUY</span></td>
                    <td style="font-weight:600;">$50,000</td>
                    <td><span class="tag tag-green">&#10003; Authorised</span></td>
                    <td><span class="badge badge-active">Executed</span></td>
                    <td style="color:var(--ink-muted);font-size:.8rem;">&#8250;</td>
                  </tr>
                  <tr class="order-row" onclick="openOrderModal('ord-2')" style="cursor:pointer;">
                    <td style="color:var(--ink-muted);">Apr 8, 2026</td>
                    <td><strong>Emeka Okafor</strong></td>
                    <td>Bridge Loan Fund III</td>
                    <td><span class="tag tag-blue">ALLOCATE</span></td>
                    <td style="font-weight:600;">$250,000</td>
                    <td><span class="tag tag-green">&#10003; Authorised</span></td>
                    <td><span class="badge badge-review">Pending Approval</span></td>
                    <td style="color:var(--ink-muted);font-size:.8rem;">&#8250;</td>
                  </tr>
                  <tr class="order-row" onclick="openOrderModal('ord-3')" style="cursor:pointer;">
                    <td style="color:var(--ink-muted);">Apr 7, 2026</td>
                    <td><strong>Fatima Al-Rashid</strong></td>
                    <td>Gold (IAU)</td>
                    <td><span class="tag tag-gold">REBALANCE</span></td>
                    <td style="font-weight:600;">$180,000</td>
                    <td><span class="tag tag-green">&#10003; Authorised</span></td>
                    <td><span class="badge badge-active">Executed</span></td>
                    <td style="color:var(--ink-muted);font-size:.8rem;">&#8250;</td>
                  </tr>
                  <tr class="order-row" onclick="openOrderModal('ord-4')" style="cursor:pointer;">
                    <td style="color:var(--ink-muted);">Apr 6, 2026</td>
                    <td><strong>Ibrahim Hassan</strong></td>
                    <td>90-Day T-Bill</td>
                    <td><span class="tag tag-green">BUY</span></td>
                    <td style="font-weight:600;">$400,000</td>
                    <td><span class="tag tag-green">&#10003; Authorised</span></td>
                    <td><span class="badge badge-active">Executed</span></td>
                    <td style="color:var(--ink-muted);font-size:.8rem;">&#8250;</td>
                  </tr>
                  <tr class="order-row" onclick="openOrderModal('ord-5')" style="cursor:pointer;">
                    <td style="color:var(--ink-muted);">Apr 1, 2026</td>
                    <td><strong>Ibrahim Hassan</strong></td>
                    <td>Rayda (Private Equity)</td>
                    <td><span class="tag tag-blue">ALLOCATE</span></td>
                    <td style="font-weight:600;">$100,000</td>
                    <td><span class="badge badge-waiting">Pending Auth</span></td>
                    <td><span class="badge badge-pending">Awaiting</span></td>
                    <td style="color:var(--ink-muted);font-size:.8rem;">&#8250;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="db-section db-content" id="wm-tasks" style="padding-bottom:0;">
            <!-- Toolbar -->
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
              <div>
                <h1 style="font-family:'Cormorant Garamond',serif;font-size:1.75rem;font-weight:400;color:var(--ink);margin:0 0 2px;">Tasks</h1>
                <p style="font-size:.83rem;color:var(--ink-muted);margin:0;">Schedule, client follow-ups and advisor reminders</p>
              </div>
              <div style="display:flex;align-items:center;gap:7px;flex-wrap:wrap;">
                <div style="display:flex;background:var(--cream-mid);border-radius:8px;padding:3px;">
                  <button id="calBtnMonth" onclick="calSetView('month')" style="padding:5px 13px;border-radius:6px;font-size:.77rem;font-weight:600;cursor:pointer;border:none;font-family:inherit;background:white;box-shadow:0 1px 3px rgba(12,26,46,.1);color:var(--ink);">Month</button>
                  <button id="calBtnWeek"  onclick="calSetView('week')"  style="padding:5px 13px;border-radius:6px;font-size:.77rem;font-weight:500;cursor:pointer;border:none;font-family:inherit;background:transparent;color:var(--ink-soft);">Week</button>
                  <button id="calBtnDay"   onclick="calSetView('day')"   style="padding:5px 13px;border-radius:6px;font-size:.77rem;font-weight:500;cursor:pointer;border:none;font-family:inherit;background:transparent;color:var(--ink-soft);">Day</button>
                </div>
                <button onclick="calNav(-1)" style="width:32px;height:32px;border-radius:8px;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg></button>
                <button onclick="calGoToday()" style="padding:5px 12px;border-radius:8px;border:1.5px solid var(--cream-dark);background:white;font-size:.77rem;font-weight:500;cursor:pointer;font-family:inherit;color:var(--ink);">Today</button>
                <button onclick="calNav(1)"  style="width:32px;height:32px;border-radius:8px;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg></button>
                <span id="calHeading" style="font-size:.88rem;font-weight:600;color:var(--ink);min-width:148px;text-align:center;"></span>
                <button class="btn-sm btn-ink" onclick="calOpenNew()" style="display:flex;align-items:center;gap:5px;">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Add Task
                </button>
                <!-- Export / Sync dropdown -->
                <div style="position:relative;">
                  <button id="calExportBtn" onclick="calToggleExport(event)" style="display:flex;align-items:center;gap:5px;padding:7px 12px;border-radius:8px;border:1.5px solid var(--cream-dark);background:white;font-size:.77rem;font-weight:500;cursor:pointer;font-family:inherit;color:var(--ink);">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Export / Sync
                    <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  <div id="calExportMenu" style="display:none;position:absolute;top:calc(100% + 6px);right:0;background:white;border:1.5px solid var(--cream-dark);border-radius:10px;box-shadow:0 8px 24px rgba(12,26,46,.12);min-width:220px;z-index:200;overflow:hidden;">
                    <div style="padding:8px 12px 5px;font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Download</div>
                    <button onclick="calExportIcal()" style="display:flex;align-items:center;gap:10px;width:100%;padding:10px 14px;border:none;background:none;cursor:pointer;font-family:inherit;font-size:.83rem;color:var(--ink);text-align:left;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='none'">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      <div><div style="font-weight:600;">Download .ics file</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:1px;">Works with Apple Calendar, Outlook &amp; more</div></div>
                    </button>
                    <div style="height:1px;background:var(--cream-mid);margin:2px 0;"></div>
                    <div style="padding:8px 12px 5px;font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Sync to Calendar</div>
                    <button onclick="calSyncGmail()" style="display:flex;align-items:center;gap:10px;width:100%;padding:10px 14px;border:none;background:none;cursor:pointer;font-family:inherit;font-size:.83rem;color:var(--ink);text-align:left;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='none'">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="none"><rect width="24" height="24" fill="none"/><path d="M21.805 10.023H12v4.05h5.618c-.242 1.302-0.97 2.405-2.069 3.147v2.614h3.35C20.649 17.954 21.805 14.265 21.805 10.023z" fill="#4285F4"/><path d="M12 22c3.24 0 5.956-1.074 7.94-2.917l-3.351-2.614c-.929.623-2.117.99-3.589.99-2.76 0-5.097-1.864-5.93-4.37H2.623v2.696C4.594 19.853 8.036 22 12 22z" fill="#34A853"/><path d="M6.07 13.09A5.97 5.97 0 0 1 5.76 12c0-.38.065-.75.17-1.09V8.214H2.623A9.997 9.997 0 0 0 2 12c0 1.614.387 3.14 1.07 4.5l3.157-2.454-.158-.956z" fill="#FBBC05"/><path d="M12 6.545c1.554 0 2.948.534 4.045 1.583l3.034-3.034C17.95 3.39 15.235 2 12 2 8.036 2 4.594 4.147 2.623 7.5l3.447 2.68C6.903 7.65 9.24 6.545 12 6.545z" fill="#EA4335"/></svg>
                      <div><div style="font-weight:600;">Add to Google Calendar</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:1px;">Opens Google Calendar in a new tab</div></div>
                    </button>
                    <button onclick="calCopyGcalLink()" style="display:flex;align-items:center;gap:10px;width:100%;padding:10px 14px 12px;border:none;background:none;cursor:pointer;font-family:inherit;font-size:.83rem;color:var(--ink);text-align:left;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='none'">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                      <div><div style="font-weight:600;">Copy calendar link</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:1px;">Subscribe via URL in any calendar app</div></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="calGrid" style="background:white;border-radius:14px;box-shadow:0 1px 8px rgba(12,26,46,.07);overflow:hidden;"></div>

            <!-- Add/Edit modal -->
            <div id="calModal" style="display:none;position:fixed;inset:0;z-index:820;background:rgba(12,26,46,.45);align-items:center;justify-content:center;" onclick="if(event.target===this)calCloseModal()">
              <div style="background:white;border-radius:18px;padding:28px;width:460px;max-width:95vw;box-shadow:0 24px 80px rgba(12,26,46,.22);" onclick="event.stopPropagation()">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
                  <span id="calModalHd" style="font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:400;color:var(--ink);">Add Task</span>
                  <button onclick="calCloseModal()" style="width:28px;height:28px;border-radius:50%;border:none;background:var(--cream-mid);cursor:pointer;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
                </div>
                <div class="form-group" style="margin-bottom:12px;"><label class="form-label">Task title</label><input id="calFTitle" class="form-input" type="text" placeholder="e.g. Review Emeka portfolio"></div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
                  <div class="form-group" style="margin:0;"><label class="form-label">Date</label><input id="calFDate" class="form-input" type="date"></div>
                  <div class="form-group" style="margin:0;"><label class="form-label">Time <span style="font-weight:300;">(optional)</span></label><input id="calFTime" class="form-input" type="time"></div>
                </div>
                <div class="form-group" style="margin-bottom:12px;"><label class="form-label">Priority</label>
                  <div style="display:flex;gap:12px;margin-top:4px;">
                    <label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:.84rem;font-weight:500;color:var(--red);"><input type="radio" name="calFPri" value="urgent" style="accent-color:var(--red);">Urgent</label>
                    <label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:.84rem;font-weight:500;color:var(--blue);"><input type="radio" name="calFPri" value="normal" checked style="accent-color:var(--blue);">Normal</label>
                    <label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:.84rem;font-weight:500;color:var(--ink-muted);"><input type="radio" name="calFPri" value="low" style="accent-color:#94A3B8;">Low</label>
                  </div>
                </div>
                <div class="form-group" style="margin-bottom:12px;"><label class="form-label">Category</label>
                  <select id="calFCat" class="form-input" style="font-size:.86rem;">
                    <option value="client">Client Action</option><option value="trade">Trade / Instruction</option>
                    <option value="review">Portfolio Review</option><option value="compliance">Compliance</option>
                    <option value="admin">Admin</option><option value="personal">Personal</option>
                  </select>
                </div>
                <div class="form-group" style="margin-bottom:16px;"><label class="form-label">Notes <span style="font-weight:300;">(optional)</span></label><textarea id="calFNotes" class="form-input" rows="2" style="resize:none;"></textarea></div>
                <input type="hidden" id="calFId">
                <div style="display:flex;gap:8px;">
                  <button onclick="calCloseModal()" class="btn-sm btn-outline" style="flex:1;justify-content:center;padding:9px;">Cancel</button>
                  <button onclick="calSaveTask()"   class="btn-sm btn-ink"    style="flex:2;justify-content:center;padding:9px;">Save task</button>
                </div>
              </div>
            </div>

            <!-- Task popover -->
            <div id="calPop" style="display:none;position:fixed;z-index:830;background:white;border-radius:12px;box-shadow:0 8px 36px rgba(12,26,46,.18);padding:14px 16px;width:268px;">
              <div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:8px;">
                <div id="calPopDot" style="width:8px;height:8px;border-radius:50%;margin-top:5px;flex-shrink:0;background:var(--blue);"></div>
                <div id="calPopTitle" style="flex:1;font-size:.86rem;font-weight:600;color:var(--ink);line-height:1.35;"></div>
                <button onclick="document.getElementById('calPop').style.display='none'" style="flex-shrink:0;background:none;border:none;cursor:pointer;color:var(--ink-muted);"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
              </div>
              <div id="calPopMeta" style="font-size:.73rem;color:var(--ink-muted);margin-bottom:10px;padding-left:16px;"></div>
              <div id="calPopNotes" style="display:none;font-size:.78rem;color:var(--ink-soft);background:var(--cream);border-radius:6px;padding:7px 10px;margin-bottom:10px;line-height:1.5;"></div>
              <div style="display:flex;gap:5px;padding-left:16px;">
                <button onclick="calDone()"    class="btn-sm btn-outline" style="flex:1;justify-content:center;font-size:.73rem;">&#10003; Done</button>
                <button onclick="calEditPop()" class="btn-sm btn-outline" style="flex:1;justify-content:center;font-size:.73rem;">Edit</button>
                <button onclick="calDelPop()"  class="btn-sm btn-outline" style="flex:1;justify-content:center;font-size:.73rem;color:var(--red);">Delete</button>
              </div>
            </div>
          </div>
          <div class="db-section db-content" id="wm-docs">
            <!-- Header -->
            <div class="page-hrow" style="margin-bottom:16px;">
              <div class="page-header"><h1>Client Documents</h1><p>All documents across your clients — uploaded, verified, pending and missing.</p></div>
              <button class="btn-sm btn-ink" onclick="openModal('modal-upload-doc')" style="display:flex;align-items:center;gap:5px;flex-shrink:0;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                Upload Document
              </button>
            </div>

            <!-- Filter tabs -->
            <div style="display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap;">
              <button id="docTab-all"     onclick="docsFilter('all',this)"     style="padding:5px 14px;border-radius:100px;border:none;background:var(--ink);color:white;font-size:.77rem;font-weight:600;cursor:pointer;font-family:inherit;transition:all .15s;">All</button>
              <button id="docTab-uploaded" onclick="docsFilter('uploaded',this)" style="padding:5px 14px;border-radius:100px;border:1px solid var(--cream-dark);background:white;color:var(--ink-soft);font-size:.77rem;font-weight:500;cursor:pointer;font-family:inherit;transition:all .15s;">Uploaded</button>
              <button id="docTab-verified" onclick="docsFilter('verified',this)" style="padding:5px 14px;border-radius:100px;border:1px solid var(--cream-dark);background:white;color:var(--ink-soft);font-size:.77rem;font-weight:500;cursor:pointer;font-family:inherit;transition:all .15s;">Verified</button>
              <button id="docTab-pending"  onclick="docsFilter('pending',this)"  style="padding:5px 14px;border-radius:100px;border:1px solid var(--cream-dark);background:white;color:var(--ink-soft);font-size:.77rem;font-weight:500;cursor:pointer;font-family:inherit;transition:all .15s;">Pending</button>
              <button id="docTab-missing"  onclick="docsFilter('missing',this)"  style="padding:5px 14px;border-radius:100px;border:1px solid var(--cream-dark);background:white;color:var(--ink-soft);font-size:.77rem;font-weight:500;cursor:pointer;font-family:inherit;transition:all .15s;">Missing</button>
            </div>

            <!-- Documents table -->
            <div class="table-card" id="docsTableWrap"><table class="data-table" id="docsTable">
              <thead><tr><th>Client</th><th>Document</th><th>Category</th><th>Uploaded by</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                <!-- Uploaded by WM — Verified -->
                <tr data-status="verified"><td><strong>Emeka Okafor</strong></td><td>Passport</td><td>Identity</td><td><span style="font-size:.74rem;background:var(--blue-pale);color:var(--blue);padding:1px 7px;border-radius:100px;font-weight:600;">WM</span></td><td>Jan 12, 2026</td><td><span class="badge badge-active">Verified</span></td><td><button class="btn-sm btn-outline" onclick="openDocViewer('passport')">View</button></td></tr>
                <tr data-status="verified"><td><strong>Emeka Okafor</strong></td><td>Proof of Address</td><td>Identity</td><td><span style="font-size:.74rem;background:var(--blue-pale);color:var(--blue);padding:1px 7px;border-radius:100px;font-weight:600;">WM</span></td><td>Jan 12, 2026</td><td><span class="badge badge-active">Verified</span></td><td><button class="btn-sm btn-outline" onclick="openDocViewer('proof-address')">View</button></td></tr>
                <tr data-status="verified"><td><strong>Fatima Al-Rashid</strong></td><td>Passport</td><td>Identity</td><td><span style="font-size:.74rem;background:var(--blue-pale);color:var(--blue);padding:1px 7px;border-radius:100px;font-weight:600;">WM</span></td><td>Feb 3, 2026</td><td><span class="badge badge-active">Verified</span></td><td><button class="btn-sm btn-outline" onclick="openDocViewer('passport')">View</button></td></tr>
                <tr data-status="verified"><td><strong>Fatima Al-Rashid</strong></td><td>Proof of Address</td><td>Identity</td><td><span style="font-size:.74rem;background:var(--blue-pale);color:var(--blue);padding:1px 7px;border-radius:100px;font-weight:600;">WM</span></td><td>Feb 3, 2026</td><td><span class="badge badge-active">Verified</span></td><td><button class="btn-sm btn-outline" onclick="openDocViewer('proof-address')">View</button></td></tr>
                <tr data-status="verified"><td><strong>Ibrahim Hassan</strong></td><td>Passport</td><td>Identity</td><td><span style="font-size:.74rem;background:var(--blue-pale);color:var(--blue);padding:1px 7px;border-radius:100px;font-weight:600;">WM</span></td><td>Mar 1, 2026</td><td><span class="badge badge-active">Verified</span></td><td><button class="btn-sm btn-outline" onclick="openDocViewer('passport')">View</button></td></tr>
                <tr data-status="verified"><td><strong>Priya Sharma</strong></td><td>Passport</td><td>Identity</td><td><span style="font-size:.74rem;background:var(--blue-pale);color:var(--blue);padding:1px 7px;border-radius:100px;font-weight:600;">WM</span></td><td>Jan 28, 2026</td><td><span class="badge badge-active">Verified</span></td><td><button class="btn-sm btn-outline" onclick="openDocViewer('passport')">View</button></td></tr>
                <!-- Uploaded by WM — Under review / pending -->
                <tr data-status="uploaded"><td><strong>Emeka Okafor</strong></td><td>LLC Operating Agreement</td><td>Entity</td><td><span style="font-size:.74rem;background:var(--blue-pale);color:var(--blue);padding:1px 7px;border-radius:100px;font-weight:600;">WM</span></td><td>Apr 6, 2026</td><td><span class="badge badge-review">Under Review</span></td><td><button class="btn-sm btn-outline" onclick="openDocViewer('llc-agreement')">View</button></td></tr>
                <tr data-status="uploaded"><td><strong>Emeka Okafor</strong></td><td>1099-B (2025)</td><td>Tax</td><td><span style="font-size:.74rem;background:var(--blue-pale);color:var(--blue);padding:1px 7px;border-radius:100px;font-weight:600;">WM</span></td><td>Apr 5, 2026</td><td><span class="badge badge-review">Under Review</span></td><td><button class="btn-sm btn-outline" onclick="openDocViewer('1099-b')">View</button></td></tr>
                <tr data-status="uploaded"><td><strong>Ibrahim Hassan</strong></td><td>Source of Funds Declaration</td><td>KYC</td><td><span style="font-size:.74rem;background:var(--blue-pale);color:var(--blue);padding:1px 7px;border-radius:100px;font-weight:600;">WM</span></td><td>Mar 10, 2026</td><td><span class="badge badge-active">Verified</span></td><td><button class="btn-sm btn-outline" onclick="showToast('Viewing document…')">View</button></td></tr>
                <!-- Pending / awaiting client -->
                <tr data-status="pending"><td><strong>Fatima Al-Rashid</strong></td><td>Annual Review Form</td><td>Compliance</td><td><span style="font-size:.74rem;background:var(--cream-mid);color:var(--ink-soft);padding:1px 7px;border-radius:100px;font-weight:600;">Client</span></td><td>Due Mar 27</td><td><span class="badge badge-review">Pending</span></td><td><div style="display:flex;gap:4px;"><button class="btn-sm btn-outline" onclick="openDocViewer('annual-review')">View</button><button class="btn-sm btn-outline" onclick="showToast('Reminder sent ✓')">Remind</button></div></td></tr>
                <tr data-status="pending"><td><strong>Ibrahim Hassan</strong></td><td>Updated Passport</td><td>KYC</td><td><span style="font-size:.74rem;background:var(--cream-mid);color:var(--ink-soft);padding:1px 7px;border-radius:100px;font-weight:600;">Client</span></td><td>Expiring 32d</td><td><span class="badge badge-review">Expiring Soon</span></td><td><div style="display:flex;gap:4px;"><button class="btn-sm btn-outline" onclick="openDocViewer('passport')">View</button><button class="btn-sm btn-outline" onclick="showToast('Request sent ✓')">Request</button></div></td></tr>
                <!-- Missing -->
                <tr data-status="missing"><td><strong>Kwame Boateng</strong></td><td>Passport</td><td>Identity</td><td>—</td><td>—</td><td><span class="badge badge-alert">Missing</span></td><td><button class="btn-sm btn-outline" onclick="showToast('Request sent ✓')">Request</button></td></tr>
                <tr data-status="missing"><td><strong>Kwame Boateng</strong></td><td>Proof of Address</td><td>Identity</td><td>—</td><td>—</td><td><span class="badge badge-alert">Missing</span></td><td><button class="btn-sm btn-outline" onclick="showToast('Request sent ✓')">Request</button></td></tr>
                <tr data-status="missing"><td><strong>Emeka Okafor</strong></td><td>Trust Deed</td><td>Entity</td><td>—</td><td>—</td><td><span class="badge badge-alert">Missing</span></td><td><button class="btn-sm btn-outline" onclick="showToast('Request sent ✓')">Request</button></td></tr>
                <tr data-status="missing"><td><strong>Kwame Boateng</strong></td><td>Source of Funds Declaration</td><td>KYC</td><td>—</td><td>—</td><td><span class="badge badge-alert">Missing</span></td><td><button class="btn-sm btn-outline" onclick="showToast('Request sent ✓')">Request</button></td></tr>
              </tbody>
            </table></div>
          </div>
          <div class="db-section db-content" id="wm-msgs">
            <div class="page-hrow" style="margin-bottom:16px;">
              <div class="page-header"><h1>Messages</h1><p>Direct communication with clients.</p></div>
              <button class="btn-sm btn-ink" onclick="msgsNewConv()" style="display:flex;align-items:center;gap:5px;flex-shrink:0;">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                New Message
              </button>
            </div>

            <div class="activity-card-db" style="display:grid;grid-template-columns:260px 1fr;height:560px;overflow:hidden;">

              <!-- Conversation list -->
              <div style="border-right:1px solid var(--cream-mid);display:flex;flex-direction:column;overflow:hidden;">
                <!-- Search -->
                <div style="padding:10px 12px;border-bottom:1px solid var(--cream-mid);flex-shrink:0;">
                  <div style="position:relative;">
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="var(--ink-muted)" stroke-width="2" style="position:absolute;left:8px;top:50%;transform:translateY(-50%);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <input type="text" placeholder="Search messages…" style="width:100%;padding:6px 8px 6px 24px;border-radius:7px;border:1px solid var(--cream-dark);font-size:.75rem;font-family:inherit;outline:none;background:var(--cream);box-sizing:border-box;">
                  </div>
                </div>
                <!-- Threads -->
                <div id="msgThreadList" style="flex:1;overflow-y:auto;"></div>
              </div>

              <!-- Chat pane -->
              <div style="display:flex;flex-direction:column;overflow:hidden;" id="msgChatPane">
                <!-- Chat header -->
                <div id="msgChatHeader" style="padding:11px 16px;border-bottom:1px solid var(--cream-mid);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
                  <div style="display:flex;align-items:center;gap:9px;">
                    <div id="msgChatAv" style="width:30px;height:30px;border-radius:50%;background:var(--blue);color:white;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700;flex-shrink:0;">EO</div>
                    <div>
                      <div id="msgChatName" style="font-weight:600;font-size:.87rem;color:var(--ink);">Emeka Okafor</div>
                      <div id="msgChatSub" style="font-size:.71rem;color:var(--ink-muted);">Individual &middot; $18.4M AUM</div>
                    </div>
                  </div>
                  <div style="display:flex;gap:6px;align-items:center;">
                    <button onclick="msgOpenClient()" style="font-size:.74rem;color:var(--blue);background:var(--blue-pale);border:none;border-radius:7px;padding:5px 10px;cursor:pointer;font-family:inherit;font-weight:500;" onmouseover="this.style.background='#dbeafe'" onmouseout="this.style.background='var(--blue-pale)'">Open Profile</button>
                    <button onclick="msgCloseConv()" title="Close conversation" style="width:28px;height:28px;border-radius:7px;border:1px solid var(--cream-dark);background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='var(--cream-mid)'" onmouseout="this.style.background='white'">
                      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                  </div>
                </div>
                <!-- Messages -->
                <div id="msgMessages" style="flex:1;padding:14px 16px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;min-height:0;"></div>
                <!-- Input -->
                <div style="padding:8px 12px;border-top:1px solid var(--cream-mid);flex-shrink:0;">
                  <div id="msgAttachPreview" style="display:none;flex-wrap:wrap;gap:6px;padding-bottom:8px;"></div>
                  <div style="display:flex;align-items:center;gap:5px;background:var(--cream);border:1.5px solid var(--cream-dark);border-radius:12px;padding:5px 8px 5px 10px;">
                    <label title="Attach document" style="cursor:pointer;width:26px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--ink-muted);" onmouseover="this.style.background='var(--cream-dark)'" onmouseout="this.style.background='transparent'">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                      <input type="file" id="msgFileInput" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" style="display:none" onchange="msgHandleFiles(this)">
                    </label>
                    <label title="Attach image" style="cursor:pointer;width:26px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--ink-muted);" onmouseover="this.style.background='var(--cream-dark)'" onmouseout="this.style.background='transparent'">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                      <input type="file" id="msgImageInput" multiple accept=".jpg,.jpeg,.png,.gif,.webp" style="display:none" onchange="msgHandleFiles(this)">
                    </label>
                    <input type="text" id="msgInput" placeholder="Type a message..." style="flex:1;border:none;background:transparent;font-size:.83rem;outline:none;font-family:inherit;padding:4px 2px;" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();msgSend();}">
                    <button onclick="msgSend()" style="width:30px;height:30px;border-radius:8px;background:var(--ink);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;" onmouseover="this.style.background='#1e3354'" onmouseout="this.style.background='var(--ink)'">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="white" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                  </div>
                  <div style="font-size:.63rem;color:var(--ink-muted);margin-top:4px;padding-left:2px;">Attachments are saved to the client's document page</div>
                </div>
              </div>

            </div>

            <!-- New Message modal -->
            <div id="msgNewModal" style="display:none;position:fixed;inset:0;background:rgba(12,26,46,.4);z-index:700;backdrop-filter:blur(3px);align-items:center;justify-content:center;">
              <div style="background:white;border-radius:16px;padding:24px;width:100%;max-width:400px;box-shadow:0 20px 60px rgba(12,26,46,.2);">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
                  <span style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:400;color:var(--ink);">New Message</span>
                  <button onclick="msgsCloseNew()" style="width:28px;height:28px;border-radius:50%;border:none;background:var(--cream-mid);cursor:pointer;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
                </div>
                <div class="form-group"><label class="form-label">Select Client</label>
                  <select class="form-select" id="msgNewClient">
                    <option value="">Choose client…</option>
                    <option value="emeka">Emeka Okafor</option>
                    <option value="fatima">Fatima Al-Rashid</option>
                    <option value="kwame">Kwame Boateng</option>
                    <option value="priya">Priya Sharma</option>
                    <option value="ibrahim">Ibrahim Hassan</option>
                  </select>
                </div>
                <div class="form-group"><label class="form-label">Message</label>
                  <textarea class="form-input" id="msgNewText" rows="3" placeholder="Type your message…" style="resize:none;"></textarea>
                </div>
                <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:4px;">
                  <button class="btn-sm btn-outline" onclick="msgsCloseNew()">Cancel</button>
                  <button class="btn-sm btn-ink" onclick="msgsStartConv()">Start Conversation</button>
                </div>
              </div>
            </div>

          </div>
          <div class="db-section db-content" id="wm-tax">

            <!-- Header row -->
            <div class="page-hrow" style="margin-bottom:16px;">
              <div class="page-header"><h1>Tax Documents</h1><p>Manage, upload and review tax documents for all clients. Reviewed by Aidi Tax Team before finalisation.</p></div>
              <button class="btn-sm btn-ink" onclick="taxOpenUpload()" style="display:flex;align-items:center;gap:5px;flex-shrink:0;">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Upload Tax Doc
              </button>
            </div>

            <!-- Info banner -->
            <div style="background:var(--blue-pale);border-radius:var(--r);padding:11px 14px;font-size:.8rem;color:var(--blue);margin-bottom:18px;display:flex;align-items:center;gap:8px;">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Documents uploaded here are sent to the Aidi Tax Team for review before being finalised and made visible to clients. Finalised documents are also linked to the Client Documents page.
            </div>

            <!-- Filter tabs -->
            <div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap;">
              <button id="tax-filter-all" onclick="taxFilter('all',this)" style="padding:5px 14px;border-radius:100px;font-size:.77rem;font-weight:600;border:1.5px solid var(--ink);background:var(--ink);color:white;cursor:pointer;font-family:inherit;transition:all .15s;">All</button>
              <button id="tax-filter-review" onclick="taxFilter('review',this)" style="padding:5px 14px;border-radius:100px;font-size:.77rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;transition:all .15s;">Under Review</button>
              <button id="tax-filter-finalized" onclick="taxFilter('finalized',this)" style="padding:5px 14px;border-radius:100px;font-size:.77rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;transition:all .15s;">Finalised</button>
              <button id="tax-filter-pending" onclick="taxFilter('pending',this)" style="padding:5px 14px;border-radius:100px;font-size:.77rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;transition:all .15s;">Pending Upload</button>
            </div>

            <!-- Documents table -->
            <div class="activity-card-db">
              <div class="activity-card-db-head">
                <span class="activity-card-db-head-title">Client Tax Documents</span>
                <span style="font-size:.72rem;color:var(--ink-muted);" id="taxDocCount">5 documents</span>
              </div>
              <!-- Table header -->
              <div style="display:grid;grid-template-columns:1.4fr 1.2fr .7fr 1fr .7fr 110px 160px;padding:9px 18px;background:var(--cream);border-bottom:1px solid var(--cream-mid);">
                <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Client</div>
                <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Document</div>
                <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Tax Year</div>
                <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Type</div>
                <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Uploaded</div>
                <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Status</div>
                <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);text-align:right;">Actions</div>
              </div>
              <div id="taxDocRows"></div>
            </div>

          </div>
          <div class="db-section" id="wm-ai" style="display:none;flex-direction:row;height:calc(100vh - 56px - 36px);overflow:hidden;">

      <!-- Thread sidebar -->
      <div id="eliaSidebar" style="width:240px;flex-shrink:0;background:var(--cream);border-right:1px solid var(--cream-mid);display:flex;flex-direction:column;overflow:hidden;">
        <!-- Sidebar header -->
        <div style="padding:14px 14px 10px;border-bottom:1px solid var(--cream-mid);flex-shrink:0;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
            <div style="display:flex;align-items:center;gap:6px;">
              <div style="width:22px;height:22px;border-radius:50%;background:var(--ink);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
              <span style="font-size:.82rem;font-weight:700;color:var(--ink);">Elia</span>
            </div>
            <button onclick="eliaNewThread()" title="New conversation" style="width:26px;height:26px;border-radius:7px;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='var(--cream-dark)'" onmouseout="this.style.background='white'">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          </div>
          <!-- Search threads -->
          <div style="position:relative;">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="var(--ink-muted)" stroke-width="2" style="position:absolute;left:8px;top:50%;transform:translateY(-50%);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Search threads…" oninput="eliaSearchThreads(this.value)" style="width:100%;padding:6px 8px 6px 26px;border-radius:7px;border:1.5px solid var(--cream-dark);background:white;font-size:.75rem;font-family:inherit;outline:none;box-sizing:border-box;">
          </div>
        </div>
        <!-- Insights shortcut -->
        <div id="eliaInsightsBtn" onclick="eliaShowInsights()" style="display:flex;align-items:center;gap:8px;padding:9px 14px;cursor:pointer;border-bottom:1px solid var(--cream-mid);background:var(--ink);transition:background .15s;">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="white" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span style="font-size:.8rem;font-weight:600;color:white;">Portfolio Insights</span>
        </div>
        <!-- Thread list -->
        <div id="eliaThreadList" style="flex:1;overflow-y:auto;padding:6px 0;">
        </div>
        <!-- Disclaimer -->
        <div style="padding:10px 12px;font-size:.65rem;color:var(--ink-muted);line-height:1.5;border-top:1px solid var(--cream-mid);flex-shrink:0;">
          For advisor review only &mdash; not financial advice.
        </div>
      </div>

      <!-- Main pane -->
      <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0;background:white;">

        <!-- Insights view (default) -->
        <div id="eliaInsightsView" style="display:flex;flex-direction:column;flex:1;min-height:0;overflow-y:auto;padding:24px 28px 40px;background:var(--cream);">

          <!-- Page title -->
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
            <div style="width:30px;height:30px;border-radius:50%;background:var(--ink);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div>
              <div style="font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-weight:400;color:var(--ink);line-height:1;">AI Insights</div>
              <div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">Portfolio intelligence across your book &middot; Updated just now</div>
            </div>
            <span style="margin-left:auto;font-size:.71rem;background:var(--blue-pale);color:var(--blue);padding:3px 10px;border-radius:100px;font-weight:600;white-space:nowrap;">For advisor use only</span>
          </div>

          <!-- Single merged card -->
          <div style="background:white;border-radius:var(--r-lg);box-shadow:0 1px 6px rgba(12,26,46,.05);overflow:hidden;">

            <!-- Risk Alerts section -->
            <div style="padding:14px 20px 10px;border-bottom:1px solid var(--cream-mid);display:flex;align-items:center;justify-content:space-between;">
              <span style="font-size:.84rem;font-weight:600;color:var(--ink);">Risk Alerts</span>
              <a onclick="eliaAskAbout('Give me a summary of all clients needing urgent attention')" style="font-size:.74rem;color:var(--blue);cursor:pointer;font-weight:500;">Ask Elia &rarr;</a>
            </div>

            <div onclick="eliaAskAbout('Emeka Okafor concentration risk — how should I rebalance?')" style="display:flex;gap:14px;align-items:flex-start;padding:16px 20px;border-bottom:1px solid var(--cream-mid);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''">
              <div style="width:32px;height:32px;border-radius:9px;background:var(--red-pale);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--red)" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
              </div>
              <div style="flex:1;min-width:0;">
                <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--red);margin-bottom:4px;">Concentration Risk &mdash; Emeka Okafor</div>
                <div style="font-size:.86rem;color:var(--ink-soft);line-height:1.6;">US tech concentration exceeds 71%. Elevated drawdown risk. Consider geographic diversification or private credit rebalancing in next advisory cycle.</div>
              </div>
            </div>

            <div onclick="eliaAskAbout('What should I do about Ibrahim Hassan passport expiry?')" style="display:flex;gap:14px;align-items:flex-start;padding:16px 20px;border-bottom:1px solid var(--cream-mid);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''">
              <div style="width:32px;height:32px;border-radius:9px;background:var(--gold-pale);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--gold)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <div style="flex:1;min-width:0;">
                <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--gold);margin-bottom:4px;">Action Required &mdash; Ibrahim Hassan</div>
                <div style="font-size:.86rem;color:var(--ink-soft);line-height:1.6;">Passport expires in 32 days. Trading will pause at expiry. Contact client immediately for updated identity document.</div>
              </div>
            </div>

            <!-- Matched Opportunities section -->
            <div style="padding:14px 20px 10px;border-bottom:1px solid var(--cream-mid);display:flex;align-items:center;justify-content:space-between;background:var(--cream);">
              <span style="font-size:.84rem;font-weight:600;color:var(--ink);">Matched Opportunities</span>
              <a onclick="eliaAskAbout('How should I present Bridge Loan Fund III to my clients?')" style="font-size:.74rem;color:var(--blue);cursor:pointer;font-weight:500;">Ask Elia &rarr;</a>
            </div>

            <div onclick="eliaAskAbout('How should I present Bridge Loan Fund III to my clients?')" style="display:flex;gap:14px;align-items:flex-start;padding:16px 20px;border-bottom:1px solid var(--cream-mid);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''">
              <div style="width:32px;height:32px;border-radius:9px;background:var(--green-pale);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--green)" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <div style="flex:1;min-width:0;">
                <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--green);margin-bottom:4px;">Bridge Loan Fund III &mdash; 3 Clients Matched</div>
                <div style="font-size:.86rem;color:var(--ink-soft);line-height:1.6;">Fatima, Priya, and Ibrahim match on accreditation, private credit allocation target (0%), and $25K minimum. Deadline Apr 24.</div>
              </div>
            </div>

            <div onclick="eliaAskAbout('Which clients should I prioritise for the T-Bill ladder?')" style="display:flex;gap:14px;align-items:flex-start;padding:16px 20px;border-bottom:1px solid var(--cream-mid);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''">
              <div style="width:32px;height:32px;border-radius:9px;background:var(--green-pale);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--green)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div style="flex:1;min-width:0;">
                <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--green);margin-bottom:4px;">T-Bill Ladder &mdash; 2 Clients Eligible</div>
                <div style="font-size:.86rem;color:var(--ink-soft);line-height:1.6;">Emeka and Fatima have undeployed cash above $100K. 90-day T-Bills at 5.18% offer low-risk yield. Both within accreditation threshold.</div>
              </div>
            </div>

          </div><!-- end merged card -->

        </div>

        <!-- Chat view -->
        <div id="eliaChatView" style="display:none;flex-direction:column;flex:1;min-height:0;">
          <!-- Chat header -->
          <div style="padding:14px 20px;border-bottom:1px solid var(--cream-mid);display:flex;align-items:center;gap:10px;flex-shrink:0;background:white;">
            <div style="width:28px;height:28px;border-radius:50%;background:var(--ink);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
            <div style="flex:1;"><div style="font-size:.88rem;font-weight:600;color:var(--ink);" id="eliaChatTitle">Elia</div><div style="font-size:.71rem;color:var(--ink-muted);">AI Wealth Advisor &middot; For advisor use only</div></div>
            <button onclick="eliaNewThread()" style="display:flex;align-items:center;gap:5px;font-size:.75rem;font-weight:500;color:var(--ink-soft);background:var(--cream);border:1.5px solid var(--cream-dark);border-radius:7px;padding:5px 10px;cursor:pointer;font-family:inherit;" onmouseover="this.style.background='var(--cream-dark)'" onmouseout="this.style.background='var(--cream)'">
              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>New
            </button>
          </div>
          <!-- Messages -->
          <div id="eliaMsgs" style="flex:1;min-height:0;overflow-y:auto;padding:20px 24px;display:flex;flex-direction:column;gap:16px;"></div>
          <!-- Typing indicator -->
          <div id="eliaTyping" style="display:none;padding:0 24px 8px;"><div style="display:flex;align-items:center;gap:8px;"><div style="width:26px;height:26px;border-radius:50%;background:var(--ink);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div><div style="background:var(--cream);padding:10px 14px;border-radius:0 14px 14px 14px;display:flex;gap:4px;align-items:center;"><span style="width:6px;height:6px;border-radius:50%;background:var(--ink-muted);animation:eliaPulse 1.2s ease-in-out infinite;"></span><span style="width:6px;height:6px;border-radius:50%;background:var(--ink-muted);animation:eliaPulse 1.2s ease-in-out .2s infinite;"></span><span style="width:6px;height:6px;border-radius:50%;background:var(--ink-muted);animation:eliaPulse 1.2s ease-in-out .4s infinite;"></span></div></div></div>
          <!-- Input -->
          <div style="padding:12px 16px;border-top:1px solid var(--cream-mid);background:white;flex-shrink:0;">
            <div style="display:flex;gap:8px;align-items:flex-end;background:var(--cream);border:1.5px solid var(--cream-dark);border-radius:14px;padding:8px 10px;transition:border-color .15s;" onfocusin="this.style.borderColor='var(--ink)'" onfocusout="this.style.borderColor='var(--cream-dark)'">
              <textarea id="eliaInput" placeholder="Ask Elia about your portfolio, clients, risks…" rows="1" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();eliaSend();}" oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,120)+'px'" style="flex:1;border:none;background:transparent;font-family:inherit;font-size:.87rem;color:var(--ink);resize:none;outline:none;line-height:1.5;max-height:120px;overflow-y:auto;"></textarea>
              <button onclick="eliaSend()" id="eliaSendBtn" style="width:32px;height:32px;border-radius:9px;background:var(--ink);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s;" onmouseover="this.style.background='#1e3354'" onmouseout="this.style.background='var(--ink)'">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <div style="font-size:.65rem;color:var(--ink-muted);text-align:center;margin-top:6px;">Elia uses your client data for contextual responses &middot; Not financial advice</div>
          </div>
        </div>

      </div>
    </div>

          <div class="db-section db-content" id="wm-entities">
            <div class="page-hrow" style="margin-bottom:20px;">
              <div class="page-header"><h1>Entities &amp; Compliance</h1><p>Manage client entity structures, submit formation requests, and track compliance filings.</p></div>
              <button class="btn-sm btn-ink" onclick="wmWizOpen()" style="display:flex;align-items:center;gap:5px;flex-shrink:0;">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Submit Entity Request
              </button>
            </div>

            <!-- Entity cards grid -->
            <div class="ent-grid">

              <!-- Emeka — LLC Active -->
              <div class="ent-card-db">
                <div class="ent-card-head">
                  <div class="ent-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
                  <span class="ent-badge" style="background:var(--blue-pale);color:var(--blue);">Active</span>
                </div>
                <div style="padding:0 18px;"><div class="ent-name">Okafor Capital LLC</div><div class="ent-sub">Delaware LLC &middot; 2022</div></div>
                <div class="ent-body">
                  <div class="ent-meta"><span class="ent-meta-k">Client</span><span class="ent-meta-v">Emeka Okafor</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">EIN</span><span class="ent-meta-v">47-XXXXXXX</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Structure</span><span class="ent-meta-v">Member-managed</span></div>
                </div>
                <div class="ent-footer"><button class="ent-btn primary" onclick="wmEntPanelOpen('okafor-llc')">View</button></div>
              </div>

              <!-- Emeka — Trust in review -->
              <div class="ent-card-db">
                <div class="ent-card-head">
                  <div class="ent-icon" style="background:var(--cream);color:var(--ink-soft);"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                  <span class="ent-badge" style="background:var(--gold-pale);color:#8a6520;">In Review</span>
                </div>
                <div style="padding:0 18px;"><div class="ent-name">Okafor Family Trust</div><div class="ent-sub">Revocable Trust &middot; Formation in progress</div></div>
                <div class="ent-body">
                  <div class="ent-meta"><span class="ent-meta-k">Client</span><span class="ent-meta-v">Emeka Okafor</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Submitted</span><span class="ent-meta-v">Apr 6, 2026</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Est. completion</span><span class="ent-meta-v">Apr 13, 2026</span></div>
                </div>
                <div class="ent-footer"><button class="ent-btn" onclick="wmEntPanelOpen('okafor-trust')">Track</button><button class="ent-btn primary" onclick="wmEntPanelOpen('okafor-trust')">Details</button></div>
              </div>

              <!-- Fatima — Individual verified -->
              <div class="ent-card-db">
                <div class="ent-card-head">
                  <div class="ent-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                  <span class="ent-badge" style="background:var(--green-pale);color:var(--green);">Verified</span>
                </div>
                <div style="padding:0 18px;"><div class="ent-name">Fatima Al-Rashid</div><div class="ent-sub">Individual Account</div></div>
                <div class="ent-body">
                  <div class="ent-meta"><span class="ent-meta-k">Client</span><span class="ent-meta-v">Fatima Al-Rashid</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Investor status</span><span class="ent-meta-v">Accredited</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Tax residency</span><span class="ent-meta-v">UAE</span></div>
                </div>
                <div class="ent-footer"><button class="ent-btn primary" onclick="wmEntPanelOpen('fatima-ind')">View</button></div>
              </div>

              <!-- Ibrahim — Cross-border LLC pending -->
              <div class="ent-card-db">
                <div class="ent-card-head">
                  <div class="ent-icon" style="background:var(--cream);color:var(--ink-muted);"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
                  <span class="ent-badge" style="background:var(--cream-mid);color:var(--ink-muted);">Pending Docs</span>
                </div>
                <div style="padding:0 18px;"><div class="ent-name">Hassan Holdings LLC</div><div class="ent-sub">Wyoming LLC &middot; Awaiting documents</div></div>
                <div class="ent-body">
                  <div class="ent-meta"><span class="ent-meta-k">Client</span><span class="ent-meta-v">Ibrahim Hassan</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Submitted</span><span class="ent-meta-v">Mar 28, 2026</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Blocking</span><span class="ent-meta-v" style="color:var(--red);">Passport required</span></div>
                </div>
                <div class="ent-footer"><button class="ent-btn" onclick="wmNav('docs')" title="Upload documents">Upload Docs</button><button class="ent-btn primary" onclick="wmEntPanelOpen('ibrahim-llc')">View</button></div>
              </div>

              <!-- Add new -->
              <div class="ent-add" onclick="wmWizOpen()">
                <div class="ent-add-icon">＋</div>
                <div class="ent-add-title">Submit entity request</div>
                <div class="ent-add-sub">LLC or C-Corporation</div>
              </div>

            </div>

            <!-- Compliance & Filings -->
            <div style="margin-bottom:32px;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
                <div>
                  <div style="font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:400;color:var(--ink);">Compliance &amp; Upcoming Filings</div>
                  <div style="font-size:.75rem;color:var(--ink-muted);margin-top:2px;">Deadlines across all client entities</div>
                </div>
                <button onclick="wmNav('docs')" style="display:flex;align-items:center;gap:7px;padding:8px 18px;border-radius:100px;border:1.5px solid var(--cream-dark);background:white;font-size:.78rem;font-weight:600;color:var(--ink);cursor:pointer;font-family:inherit;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='white'">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  View Documents
                </button>
              </div>

              <div style="background:white;border-radius:var(--r-lg);box-shadow:0 1px 6px rgba(12,26,46,.05);overflow:hidden;">
                <div style="display:grid;grid-template-columns:2fr 1.5fr 1fr 110px 180px;padding:10px 20px;background:var(--cream);border-bottom:1px solid var(--cream-mid);">
                  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Filing / Obligation</div>
                  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Client / Entity</div>
                  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Due Date</div>
                  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Status</div>
                  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);text-align:right;">Action</div>
                </div>

                <!-- Overdue rows -->
                <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.5fr 1fr 110px 180px;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                  <div><div style="font-size:.84rem;font-weight:500;color:var(--ink);">Delaware Annual Report</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">State filing &middot; Registered Agent required</div></div>
                  <div style="font-size:.82rem;color:var(--ink);">Okafor Capital LLC</div>
                  <div style="font-size:.82rem;color:#DC2626;font-weight:500;">Mar 31, 2026</div>
                  <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#FEF2F2;color:#DC2626;">Overdue</span></div>
                  <div style="display:flex;gap:6px;justify-content:flex-end;">
                    <button onclick="wmEntFile('delaware-annual')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">File Now</button>
                    <button onclick="wmEntAlreadyFiled(this.closest('.comp-row').innerHTML.match(/wmEntFile\('([^']+)'/)[1])" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Already Filed</button>
                  </div>
                </div>

                <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.5fr 1fr 110px 180px;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                  <div><div style="font-size:.84rem;font-weight:500;color:var(--ink);">Trust Deed — Outstanding</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">Required for full entity structuring</div></div>
                  <div style="font-size:.82rem;color:var(--ink);">Okafor Family Trust</div>
                  <div style="font-size:.82rem;color:#DC2626;font-weight:500;">Apr 6, 2026</div>
                  <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#FEF2F2;color:#DC2626;">Overdue</span></div>
                  <div style="display:flex;gap:6px;justify-content:flex-end;">
                    <button onclick="wmNav('docs')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">Upload Docs</button>
                    <button onclick="wmEntAlreadyFiled('okafor-trust-deed')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Chase Client</button>
                  </div>
                </div>

                <!-- Due soon -->
                <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.5fr 1fr 110px 180px;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                  <div><div style="font-size:.84rem;font-weight:500;color:var(--ink);">Federal Income Tax &mdash; 1040</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">Tax year 2025</div></div>
                  <div style="font-size:.82rem;color:var(--ink);">Emeka Okafor</div>
                  <div style="font-size:.82rem;color:#D97706;font-weight:500;">Apr 15, 2026</div>
                  <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#FEF9C3;color:#A16207;">Due Soon</span></div>
                  <div style="display:flex;gap:6px;justify-content:flex-end;">
                    <button onclick="wmEntFile('emeka-1040')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">File Now</button>
                    <button onclick="wmEntAlreadyFiled(this.closest('.comp-row').innerHTML.match(/wmEntFile\('([^']+)'/)[1])" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Already Filed</button>
                  </div>
                </div>

                <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.5fr 1fr 110px 180px;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                  <div><div style="font-size:.84rem;font-weight:500;color:var(--ink);">LLC Partnership Return &mdash; 1065</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">Tax year 2025</div></div>
                  <div style="font-size:.82rem;color:var(--ink);">Okafor Capital LLC</div>
                  <div style="font-size:.82rem;color:#D97706;font-weight:500;">Apr 15, 2026</div>
                  <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#FEF9C3;color:#A16207;">Due Soon</span></div>
                  <div style="display:flex;gap:6px;justify-content:flex-end;">
                    <button onclick="wmEntFile('okafor-1065')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">File Now</button>
                    <button onclick="wmEntAlreadyFiled(this.closest('.comp-row').innerHTML.match(/wmEntFile\('([^']+)'/)[1])" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Already Filed</button>
                  </div>
                </div>

                <!-- Upcoming -->
                <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.5fr 1fr 110px 180px;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                  <div><div style="font-size:.84rem;font-weight:500;color:var(--ink);">Registered Agent Renewal</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">Delaware &middot; Annual registered agent fee</div></div>
                  <div style="font-size:.82rem;color:var(--ink);">Okafor Capital LLC</div>
                  <div style="font-size:.82rem;color:var(--ink-soft);">Jun 1, 2026</div>
                  <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:var(--blue-pale);color:var(--blue);">Upcoming</span></div>
                  <div style="display:flex;gap:6px;justify-content:flex-end;">
                    <button onclick="wmEntFile('agent-renewal')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">Pay Now</button>
                    <button onclick="wmEntAlreadyFiled('agent-renewal')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Already Paid</button>
                  </div>
                </div>

                <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.5fr 1fr 110px 180px;padding:14px 20px;align-items:center;">
                  <div><div style="font-size:.84rem;font-weight:500;color:var(--ink);">BOI Report &mdash; Beneficial Ownership</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">FinCEN filing &middot; Federal requirement</div></div>
                  <div style="font-size:.82rem;color:var(--ink);">Hassan Holdings LLC</div>
                  <div style="font-size:.82rem;color:var(--ink-soft);">Jul 1, 2026</div>
                  <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:var(--blue-pale);color:var(--blue);">Upcoming</span></div>
                  <div style="display:flex;gap:6px;justify-content:flex-end;">
                    <button onclick="wmEntFile('boi-hassan')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">File Now</button>
                    <button onclick="wmEntAlreadyFiled(this.closest('.comp-row').innerHTML.match(/wmEntFile\('([^']+)'/)[1])" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Already Filed</button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="db-section db-content" id="wm-settings">
            <div class="page-header"><h1>Settings</h1><p>Manage your account, notifications and preferences.</p></div>
            <div class="sett-layout">
              <div>
                <div class="sett-nav-item active" id="wm-snav-profile" onclick="wset('profile')"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Profile</div>
                <div class="sett-nav-item" id="wm-snav-security" onclick="wset('security')"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Security</div>
                <div class="sett-nav-item" id="wm-snav-notifications" onclick="wset('notifications')"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>Notifications</div>
                <div class="sett-nav-item" id="wm-snav-integrations" onclick="wset('integrations')"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>Integrations</div>
                <div class="sett-nav-item" id="wm-snav-appearance" onclick="wset('appearance')"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>Appearance</div>
                <div class="sett-nav-item" id="wm-snav-billing" onclick="wset('billing')"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>Billing &amp; Plan</div>
              </div>
              <div>
                <!-- Profile panel -->
                <div id="wm-span-profile">
                  <div class="sett-section"><div class="sett-section-title">Profile</div>
                    <div style="display:flex;align-items:center;gap:16px;padding:18px;border-bottom:1px solid var(--cream-mid);">
                      <div style="width:56px;height:56px;border-radius:50%;background:var(--blue);color:white;display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:1.4rem;flex-shrink:0;">SM</div>
                      <div style="flex:1;"><div style="font-weight:600;font-size:.92rem;">Sarah Mensah</div><div style="font-size:.78rem;color:var(--ink-muted);">Senior Wealth Manager · Meridian Private Wealth</div></div>
                      <button class="sett-edit-btn" onclick="showToast('Upload coming soon')">Change photo</button>
                    </div>
                    <div class="sett-row"><div><div class="sett-row-label">Full name</div><div class="sett-row-sub">Sarah Mensah</div></div><button class="sett-edit-btn" onclick="showToast('Edit coming soon')">Edit</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Work email</div><div class="sett-row-sub">sarah.mensah@meridianpw.com</div></div><button class="sett-edit-btn" onclick="showToast('Edit coming soon')">Edit</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Direct phone</div><div class="sett-row-sub">+1 (415) 555-0198</div></div><button class="sett-edit-btn" onclick="showToast('Edit coming soon')">Edit</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Job title</div><div class="sett-row-sub">Senior Wealth Manager</div></div><button class="sett-edit-btn" onclick="showToast('Edit coming soon')">Edit</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Firm</div><div class="sett-row-sub">Meridian Private Wealth</div></div><button class="sett-edit-btn" onclick="showToast('Edit coming soon')">Edit</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Regulatory licence</div><div class="sett-row-sub">Not set</div></div><button class="sett-edit-btn" onclick="showToast('Edit coming soon')">Edit</button></div>
                  </div>
                </div>

                <!-- Security panel -->
                <div id="wm-span-security" style="display:none;">
                  <div class="sett-section"><div class="sett-section-title">Password</div>
                    <div class="sett-row"><div><div class="sett-row-label">Password</div><div class="sett-row-sub">Last changed 3 months ago</div></div><button class="sett-edit-btn" onclick="showToast('Password updated ✓')">Update password</button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Two-Factor Authentication</div>
                    <div class="sett-row"><div><div class="sett-row-label">Authenticator app (TOTP)</div><div class="sett-row-sub">Google Authenticator or Authy</div></div><span style="background:var(--green-pale);color:var(--green);padding:2px 9px;border-radius:100px;font-size:.7rem;font-weight:600;">Enabled</span></div>
                    <div class="sett-row"><div><div class="sett-row-label">SMS backup</div><div class="sett-row-sub">Fallback to +1 (415) ···0198</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Active Sessions</div>
                    <div class="sett-row"><div><div class="sett-row-label">MacBook Pro &mdash; Chrome</div><div class="sett-row-sub">San Francisco, CA &middot; Now</div></div><span style="font-size:.7rem;font-weight:600;padding:2px 8px;border-radius:100px;background:var(--green-pale);color:var(--green);">Current</span></div>
                    <div class="sett-row"><div><div class="sett-row-label">iPhone 16 &mdash; Safari</div><div class="sett-row-sub">San Francisco, CA &middot; 2h ago</div></div><button class="sett-edit-btn" style="color:var(--red);border-color:#FCA5A5;" onclick="showToast('Session revoked')">Revoke</button></div>
                  </div>
                </div>

                <!-- Notifications panel -->
                <div id="wm-span-notifications" style="display:none;">
                  <div class="sett-section"><div class="sett-section-title">Client Alerts</div>
                    <div class="sett-row"><div><div class="sett-row-label">Trade instruction approved</div><div class="sett-row-sub">When admin approves a pending instruction</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">KYC expiry warning</div><div class="sett-row-sub">30 days before a client document expires</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Client message received</div><div class="sett-row-sub">New message in Aidi messaging</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">New opportunity available</div><div class="sett-row-sub">When a new private market deal opens</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Delivery</div>
                    <div class="sett-row"><div><div class="sett-row-label">Email</div><div class="sett-row-sub">sarah.mensah@meridianpw.com</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Push notifications</div><div class="sett-row-sub">Browser and mobile</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">SMS (urgent only)</div><div class="sett-row-sub">+1 (415) 555-0198</div></div><button class="sett-toggle off" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                  </div>
                </div>

                <!-- Integrations panel -->
                <div id="wm-span-integrations" style="display:none;">
                  <div class="sett-section"><div class="sett-section-title">Execution Partners</div>
                    <div class="sett-row"><div style="display:flex;align-items:center;gap:10px;flex:1;"><div style="width:32px;height:32px;border-radius:7px;background:#ECFDF5;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--green)" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div><div class="sett-row-label">Aidi</div><div class="sett-row-sub">Equities, ETFs, T-Bills &middot; FINRA/SIPC</div></div></div><span style="background:var(--green-pale);color:var(--green);padding:2px 8px;border-radius:100px;font-size:.7rem;font-weight:600;flex-shrink:0;">Connected</span></div>
                    <div class="sett-row"><div style="display:flex;align-items:center;gap:10px;flex:1;"><div style="width:32px;height:32px;border-radius:7px;background:#FFF7ED;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#EA580C" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/></svg></div><div><div class="sett-row-label">Aidi</div><div class="sett-row-sub">Bitcoin, Ethereum and digital assets</div></div></div><span style="background:var(--green-pale);color:var(--green);padding:2px 8px;border-radius:100px;font-size:.7rem;font-weight:600;flex-shrink:0;">Connected</span></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Productivity</div>
                    <div class="sett-row"><div style="display:flex;align-items:center;gap:10px;flex:1;"><div style="width:32px;height:32px;border-radius:7px;background:var(--cream);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-soft)" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div><div><div class="sett-row-label">Google Calendar</div><div class="sett-row-sub">Sync tasks and client meetings</div></div></div><button class="sett-edit-btn" onclick="showToast('Google Calendar connected ✓')">Connect</button></div>
                    <div class="sett-row"><div style="display:flex;align-items:center;gap:10px;flex:1;"><div style="width:32px;height:32px;border-radius:7px;background:var(--cream);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-soft)" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div><div class="sett-row-label">Slack</div><div class="sett-row-sub">Receive alerts in your workspace</div></div></div><button class="sett-edit-btn" onclick="showToast('Slack connected ✓')">Connect</button></div>
                  </div>
                </div>

                <!-- Appearance panel -->
                <div id="wm-span-appearance" style="display:none;">
                  <div class="sett-section"><div class="sett-section-title">Theme</div>
                    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:18px 22px;">
                      <div onclick="showToast('Light theme active')" style="border:2px solid var(--ink);border-radius:9px;padding:11px;cursor:pointer;text-align:center;"><div style="height:32px;background:linear-gradient(135deg,#F5F2EC,white);border-radius:5px;margin-bottom:7px;border:1px solid var(--cream-mid);"></div><div style="font-size:.76rem;font-weight:600;">Light</div><div style="font-size:.66rem;color:var(--ink-muted);">Current</div></div>
                      <div onclick="showToast('Dark theme — coming soon')" style="border:1.5px solid var(--cream-dark);border-radius:9px;padding:11px;cursor:pointer;text-align:center;opacity:.5;"><div style="height:32px;background:linear-gradient(135deg,#0C1A2E,#1a2e4a);border-radius:5px;margin-bottom:7px;"></div><div style="font-size:.76rem;font-weight:600;">Dark</div><div style="font-size:.66rem;color:var(--ink-muted);">Soon</div></div>
                      <div onclick="showToast('System theme — coming soon')" style="border:1.5px solid var(--cream-dark);border-radius:9px;padding:11px;cursor:pointer;text-align:center;opacity:.5;"><div style="height:32px;background:linear-gradient(135deg,#F5F2EC 50%,#0C1A2E 50%);border-radius:5px;margin-bottom:7px;"></div><div style="font-size:.76rem;font-weight:600;">System</div><div style="font-size:.66rem;color:var(--ink-muted);">Soon</div></div>
                    </div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Display</div>
                    <div class="sett-row"><div><div class="sett-row-label">Show live asset ticker</div><div class="sett-row-sub">Scrolling market prices at bottom</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">AI insights on home</div><div class="sett-row-sub">Show Elia recommendations on dashboard</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Default Currency</div>
                    <div style="padding:14px 22px;">
                      <select class="form-input" style="font-size:.86rem;max-width:200px;"><option>USD — US Dollar ($)</option><option>GBP — British Pound (£)</option><option>EUR — Euro (€)</option><option>NGN — Nigerian Naira (₦)</option></select>
                    </div>
                  </div>
                </div>

                <!-- Billing panel -->
                <div id="wm-span-billing" style="display:none;">
                  <!-- Current plan -->
                  <div style="margin-bottom:22px;">
                    <div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Current Plan</div>
                    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">

                      <div id="wm-plan-starter" class="billing-plan-card selected" onclick="wmSelectPlan('starter')" style="border:2px solid var(--ink);border-radius:var(--r-lg);padding:16px;cursor:pointer;transition:all .18s;background:#fff;">
                        <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:6px;">Starter</div>
                        <div style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:400;color:var(--ink);line-height:1;">Free</div>
                        <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">Forever free</div>
                        <div style="margin-top:10px;display:flex;flex-direction:column;gap:4px;">
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; Up to 5 clients</div>
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; Core portfolio tools</div>
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; Elia chat (standard)</div>
                          <div style="font-size:.74rem;color:var(--ink-muted);">&#10007; Entity requests</div>
                          <div style="font-size:.74rem;color:var(--ink-muted);">&#10007; Tax document mgmt</div>
                        </div>
                      </div>

                      <div id="wm-plan-growth" class="billing-plan-card" onclick="wmSelectPlan('growth')" style="border:2px solid var(--cream-dark);border-radius:var(--r-lg);padding:16px;cursor:pointer;transition:all .18s;position:relative;">
                        <div style="position:absolute;top:-10px;right:12px;font-size:.64rem;font-weight:700;background:var(--blue);color:white;padding:2px 9px;border-radius:100px;letter-spacing:.05em;">POPULAR</div>
                        <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:6px;">Growth</div>
                        <div style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:400;color:var(--ink);line-height:1;">$29</div>
                        <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">per month</div>
                        <div style="margin-top:10px;display:flex;flex-direction:column;gap:4px;">
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; Up to 25 clients</div>
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; Entity requests</div>
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; Tax document mgmt</div>
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; Compliance tracker</div>
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; Priority Elia access</div>
                        </div>
                      </div>

                      <div id="wm-plan-family" class="billing-plan-card" onclick="wmSelectPlan('family')" style="border:2px solid var(--cream-dark);border-radius:var(--r-lg);padding:16px;cursor:pointer;transition:all .18s;">
                        <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:6px;">Family Office</div>
                        <div style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:400;color:var(--ink);line-height:1;">$49</div>
                        <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">per month</div>
                        <div style="margin-top:10px;display:flex;flex-direction:column;gap:4px;">
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; Unlimited clients</div>
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; All Growth features</div>
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; Private Markets / SPV</div>
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; Dedicated account mgr</div>
                          <div style="font-size:.74rem;color:var(--ink-soft);">&#10003; Custom integrations</div>
                        </div>
                      </div>

                    </div>
                    <div style="margin-top:10px;display:flex;gap:8px;">
                      <button onclick="wmUpgradePlan()" style="padding:8px 20px;border-radius:100px;font-size:.8rem;font-weight:600;background:var(--ink);color:white;border:none;cursor:pointer;font-family:inherit;" onmouseover="this.style.background='#1e3354'" onmouseout="this.style.background='var(--ink)'">Upgrade Plan</button>
                      <button onclick="showToast('Plan change request sent to Aidi admin')" style="padding:8px 20px;border-radius:100px;font-size:.8rem;font-weight:600;background:white;color:var(--ink);border:1.5px solid var(--cream-dark);cursor:pointer;font-family:inherit;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='white'">Talk to Sales</button>
                    </div>
                  </div>

                  <!-- Fee schedule -->
                  <div style="margin-bottom:22px;">
                    <div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Fee Schedule</div>
                    <div style="background:white;border-radius:var(--r-lg);border:1px solid var(--cream-mid);overflow:hidden;">

                      <div class="billing-fee-row">
                        <div style="display:flex;align-items:center;gap:10px;">
                          <div style="width:32px;height:32px;border-radius:8px;background:var(--blue-pale);color:var(--blue);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                          <div>
                            <div style="font-size:.85rem;font-weight:600;color:var(--ink);">Yield Fee &mdash; All Assets (excl. Gold)</div>
                            <div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">Stocks &amp; ETFs, Crypto, Treasury &amp; Cash, Real Estate, Private Markets</div>
                          </div>
                        </div>
                        <div style="text-align:right;flex-shrink:0;">
                          <div style="font-size:.88rem;font-weight:700;color:var(--ink);">1% annual yield</div>
                          <div style="font-size:.71rem;color:var(--ink-muted);">Charged quarterly &middot; Card on file</div>
                        </div>
                      </div>

                      <div class="billing-fee-row">
                        <div style="display:flex;align-items:center;gap:10px;">
                          <div style="width:32px;height:32px;border-radius:8px;background:var(--green-pale);color:var(--green);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
                          <div>
                            <div style="font-size:.85rem;font-weight:600;color:var(--ink);">Airbnb &amp; Rental Income Fee</div>
                            <div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">Aidi Haven portfolio &mdash; properties currently on market</div>
                          </div>
                        </div>
                        <div style="text-align:right;flex-shrink:0;">
                          <div style="font-size:.88rem;font-weight:700;color:var(--ink);">1% annual rental yield</div>
                          <div style="font-size:.71rem;color:var(--ink-muted);">Charged quarterly &middot; Card on file</div>
                        </div>
                      </div>

                      <div class="billing-fee-row">
                        <div style="display:flex;align-items:center;gap:10px;">
                          <div style="width:32px;height:32px;border-radius:8px;background:var(--gold-pale);color:var(--gold);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                          <div>
                            <div style="font-size:.85rem;font-weight:600;color:var(--ink);">Gold &amp; Metals Liquidation Fee</div>
                            <div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">Applies only at point of liquidation &mdash; not on holding</div>
                          </div>
                        </div>
                        <div style="text-align:right;flex-shrink:0;">
                          <div style="font-size:.88rem;font-weight:700;color:var(--ink);">1% of yield on sale</div>
                          <div style="font-size:.71rem;color:var(--ink-muted);">Charged at liquidation</div>
                        </div>
                      </div>

                      <div class="billing-fee-row">
                        <div style="display:flex;align-items:center;gap:10px;">
                          <div style="width:32px;height:32px;border-radius:8px;background:rgba(124,58,237,.1);color:#7C3AED;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                          <div>
                            <div style="font-size:.85rem;font-weight:600;color:var(--ink);">Elia AI Decision Outcomes</div>
                            <div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">Formal reports, portfolio evaluations, tax scenario analysis, structured recommendations</div>
                          </div>
                        </div>
                        <div style="text-align:right;flex-shrink:0;">
                          <div style="font-size:.88rem;font-weight:700;color:var(--ink);">$0.90 per outcome</div>
                          <div style="font-size:.71rem;color:var(--ink-muted);">Per formal report, evaluation, or recommendation</div>
                        </div>
                      </div>

                      <div class="billing-fee-row">
                        <div style="display:flex;align-items:center;gap:10px;">
                          <div style="width:32px;height:32px;border-radius:8px;background:var(--cream);color:var(--ink-soft);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
                          <div>
                            <div style="font-size:.85rem;font-weight:600;color:var(--ink);">Entity Structuring</div>
                            <div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">LLC, trust, EIN, registered agent, operating agreement &middot; + $1,000/yr per entity for annual filings</div>
                          </div>
                        </div>
                        <div style="text-align:right;flex-shrink:0;">
                          <div style="font-size:.88rem;font-weight:700;color:var(--ink);">$1,000 initial setup</div>
                          <div style="font-size:.71rem;color:var(--ink-muted);">+ $1,000/yr per entity for annual filings</div>
                        </div>
                      </div>

                      <div class="billing-fee-row" style="border-bottom:none;">
                        <div style="display:flex;align-items:center;gap:10px;">
                          <div style="width:32px;height:32px;border-radius:8px;background:var(--red-pale);color:var(--red);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 7 13.5 15.5 8.5 10.5 1 18"/><polyline points="16 7 22 7 22 13"/></svg></div>
                          <div>
                            <div style="font-size:.85rem;font-weight:600;color:var(--ink);">Private Markets &mdash; SPV</div>
                            <div style="font-size:.74rem;color:var(--ink-muted);margin-top:2px;">Special Purpose Vehicles for private market investments &middot; SPV structures only</div>
                          </div>
                        </div>
                        <div style="text-align:right;flex-shrink:0;">
                          <div style="font-size:.88rem;font-weight:700;color:var(--ink);">20% carry + 2% mgmt</div>
                          <div style="font-size:.71rem;color:var(--ink-muted);">Industry-standard fund terms</div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <!-- Payment method -->
                  <div style="margin-bottom:22px;">
                    <div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Payment Method</div>
                    <div style="background:white;border-radius:var(--r-lg);border:1px solid var(--cream-mid);padding:16px 18px;">
                      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
                        <div style="display:flex;align-items:center;gap:12px;">
                          <div style="width:44px;height:28px;border-radius:6px;background:var(--ink);display:flex;align-items:center;justify-content:center;">
                            <svg viewBox="0 0 38 24" width="28" height="18" fill="none"><rect width="38" height="24" rx="4" fill="#1a1f36"/><circle cx="15" cy="12" r="7" fill="#eb001b" opacity=".9"/><circle cx="23" cy="12" r="7" fill="#f79e1b" opacity=".9"/><path d="M19 6.8a7 7 0 0 1 0 10.4A7 7 0 0 1 19 6.8z" fill="#ff5f00"/></svg>
                          </div>
                          <div>
                            <div style="font-size:.84rem;font-weight:600;color:var(--ink);">Mastercard &bull;&bull;&bull;&bull; 4782</div>
                            <div style="font-size:.72rem;color:var(--ink-muted);">Expires 09/2027 &middot; Default card</div>
                          </div>
                        </div>
                        <div style="display:flex;gap:6px;">
                          <button onclick="wmUpdateCard()" style="padding:6px 14px;border-radius:100px;font-size:.75rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;font-family:inherit;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='white'">Update card</button>
                          <button onclick="wmAddCard()" style="padding:6px 14px;border-radius:100px;font-size:.75rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;font-family:inherit;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='white'">Add card</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Billing history -->
                  <div>
                    <div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:12px;">Billing History</div>
                    <div style="background:white;border-radius:var(--r-lg);border:1px solid var(--cream-mid);overflow:hidden;">
                      <div style="display:grid;grid-template-columns:1fr 1fr 100px 80px;padding:8px 16px;background:var(--cream);border-bottom:1px solid var(--cream-mid);">
                        <div style="font-size:.65rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);">Description</div>
                        <div style="font-size:.65rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);">Date</div>
                        <div style="font-size:.65rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);">Amount</div>
                        <div style="font-size:.65rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);text-align:right;">Receipt</div>
                      </div>
                      <div style="display:grid;grid-template-columns:1fr 1fr 100px 80px;padding:11px 16px;border-bottom:1px solid var(--cream);align-items:center;">
                        <div style="font-size:.83rem;color:var(--ink);">Starter Plan &mdash; Monthly</div>
                        <div style="font-size:.8rem;color:var(--ink-muted);">Apr 1, 2026</div>
                        <div style="font-size:.83rem;font-weight:600;color:var(--ink);">$0.00</div>
                        <div style="text-align:right;"><button onclick="showToast('Receipt downloaded')" style="font-size:.72rem;color:var(--blue);background:none;border:none;cursor:pointer;font-family:inherit;text-decoration:underline;">Download</button></div>
                      </div>
                      <div style="display:grid;grid-template-columns:1fr 1fr 100px 80px;padding:11px 16px;border-bottom:1px solid var(--cream);align-items:center;">
                        <div style="font-size:.83rem;color:var(--ink);">Yield Fee &mdash; Q1 2026</div>
                        <div style="font-size:.8rem;color:var(--ink-muted);">Mar 31, 2026</div>
                        <div style="font-size:.83rem;font-weight:600;color:var(--ink);">$187.40</div>
                        <div style="text-align:right;"><button onclick="showToast('Receipt downloaded')" style="font-size:.72rem;color:var(--blue);background:none;border:none;cursor:pointer;font-family:inherit;text-decoration:underline;">Download</button></div>
                      </div>
                      <div style="display:grid;grid-template-columns:1fr 1fr 100px 80px;padding:11px 16px;align-items:center;">
                        <div style="font-size:.83rem;color:var(--ink);">Elia AI Outcomes &mdash; Mar</div>
                        <div style="font-size:.8rem;color:var(--ink-muted);">Mar 31, 2026</div>
                        <div style="font-size:.83rem;font-weight:600;color:var(--ink);">$8.10</div>
                        <div style="text-align:right;"><button onclick="showToast('Receipt downloaded')" style="font-size:.72rem;color:var(--blue);background:none;border:none;cursor:pointer;font-family:inherit;text-decoration:underline;">Download</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="db-right">
          <div class="rp-section"><div class="rp-section-title">Quick Actions</div>
            <button class="btn-sm btn-ink" style="width:100%;justify-content:center;margin-bottom:7px;" onclick="wmNav('trade')">New Trade Instruction</button>
            <button class="btn-sm btn-outline" style="width:100%;justify-content:center;" onclick="openAddClient()">Add Client</button>
          </div>
          <div class="rp-section"><div class="rp-section-title">Pending at Aidi</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div onclick="wmNav('trade')" style="display:flex;align-items:center;gap:8px;padding:7px 6px;border-bottom:1px solid var(--cream-mid);cursor:pointer;border-radius:var(--r);transition:background .15s;" onmouseover="this.style.background='var(--cream-mid)'" onmouseout="this.style.background=''">
                <div style="width:28px;height:28px;border-radius:8px;background:var(--gold-pale);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--gold)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg></div>
                <div style="flex:1;min-width:0;"><div style="font-size:.8rem;font-weight:500;">Gold Purchase — Priya</div><div style="font-size:.7rem;color:var(--ink-muted);">$25,000 · Under review</div></div>
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
              <div onclick="wmNav('entities')" style="display:flex;align-items:center;gap:8px;padding:7px 6px;cursor:pointer;border-radius:var(--r);transition:background .15s;" onmouseover="this.style.background='var(--cream-mid)'" onmouseout="this.style.background=''">
                <div style="width:28px;height:28px;border-radius:8px;background:var(--blue-pale);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--blue)" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
                <div style="flex:1;min-width:0;"><div style="font-size:.8rem;font-weight:500;">LLC Formation — Emeka</div><div style="font-size:.7rem;color:var(--ink-muted);">Entity submission · In review</div></div>
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="var(--ink-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
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
