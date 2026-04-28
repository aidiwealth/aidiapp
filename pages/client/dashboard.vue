<template>
  <!-- ═════════════════════════════════════════════════════════════════
       Client dashboard
       Source: aidi_dashboard.html
       Layout: client
       DO NOT modify HTML/CSS/JS structurally — handlers are defined in
       the zone's JS bundle (loaded by the layout) and bound by id/class.
       ═════════════════════════════════════════════════════════════════ -->
  <div class="aidi-route-wrapper">
    <div id="page-dashboard" class="page">
    <div class="db-shell">

      <!-- ── Top Navbar ── -->
      <header class="db-topbar">
        <div class="db-topbar-logo" onclick="dbNav('home')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25675.8 23448.1" width="28" height="26" style="display:block;flex-shrink:0;">
      <defs></defs>
      <g>
        <path class="fl0" d="M23266.6 14962.5c7.4,9.7 17.8,11.9 21.6,29.5l466.9 1086.6c251.8,922.3 129.4,1643.7 -247.7,2482.8l-998.8 1178.4c-246.2,185.5 -509.8,353.6 -796.5,463.1 -1150,439 -2154.1,347.4 -3203.2,-293.6l-464 -365.1c-26.8,-151.2 -762.4,-673.1 -882.4,-768.7 -1008.7,-803.6 -2339.6,-1916.5 -3326.1,-2668.3l-2116.4 -1701.8c-863.1,-678 -2253.6,-1912.9 -3191.5,-2383 -545.5,-273.4 -1354.2,-522.4 -1987.2,-571 -265.2,-20.3 -603,-0.7 -876.9,-2.3 -1194,-6.9 -2484.2,562.2 -3398.3,1259.8 -1177.7,898.8 -1773.4,2029.9 -2130.6,3443.9 -315.9,1251 -66.6,3148.9 610.9,4262.5 458.3,753.3 879,1293.4 1602,1834.4 2691.1,2013.6 6325,1431.2 8302.2,-1309 473.8,-656.6 888.8,-1600 970.6,-2453.8 -131.5,-113.5 95,-426.5 -186.2,-776 -161.4,-200.5 -256.7,-312.4 -570.7,-394 -380.7,-98.9 -892.7,104.4 -1023.7,607.4 -31.5,120.8 16,276.6 -40.1,130.8 -74.1,88.8 -95.1,327.9 -118.6,428 -40.3,172.3 -74.9,291.6 -126.8,445.8 -1135.2,3371.5 -5999.1,3615.3 -7403.4,81.1 -1005,-2529.4 699.1,-5139.3 2930.2,-5585.2 1586.9,-317.2 2581.3,157.2 3490,883.1 1705.7,1362.6 3389.2,2698.8 5084.7,4078.8l1885.4 1512.7c113.1,95.5 199.5,170.7 312.2,260.5 1099,875.3 1730.4,1607.4 3173.3,1981.2 1688.2,437.3 3294.9,3.6 4517.5,-905.8l609.3 -536.1c119.3,-118.1 160.5,-190.9 267.2,-305.6 264.9,-284.7 513.3,-672.9 690.4,-1027.8 837.4,-1679 737.9,-3805.9 -272.3,-5480.3l-1580.9 -2428.2c-82.9,-123.7 -143.5,-235.1 -220.9,-351.8 -305,-459.3 -597.9,-917.5 -909.2,-1381.7 -159.7,-238.1 -288.5,-452.6 -450.4,-695l-4741.2 -7247.8c-330,-374.6 -432.1,-510.9 -875.7,-842.4l-711 -434.5c-272,-136.9 -518.7,-232.2 -827.1,-318.3 -998.4,-278.7 -2060.2,-235.3 -2983.8,71.1 -839.4,278.6 -1484.1,764.8 -2066.7,1369.7 -326.2,338.6 -888.1,1282.6 -1151.3,1712.3l-3317.8 5273c-142.9,241.7 -324.3,435.1 -344.3,791 -46.1,819 1120.9,1523.4 1838.3,397.5l1312.8 -2085.3c151.2,-235.8 299.5,-466.4 451.2,-694.2l1334.2 -2102.2c371,-621.2 1148.7,-1925.5 1681,-2328 99.4,-75.2 215.7,-173.4 331.9,-240.8 489.2,-283.6 1029.3,-506.2 1843.4,-444 988.5,75.6 1636.1,577.8 2124.6,1311.7l5185.9 7986.7c81.5,133.7 145,211.7 225.2,347.5 149.5,253.3 300.4,450.8 447.8,697.7l1754.8 2672.5c68.9,65.2 -6,35.2 76.2,40.4z"/>
        <path class="fl1" d="M18044.9 19544.1l464 365.1c1049.1,640.9 2053.2,732.6 3203.2,293.6 286.7,-109.5 550.3,-277.6 796.5,-463.1l998.8 -1178.4c377.2,-839.1 499.6,-1560.5 247.7,-2482.8l-466.9 -1086.6c-3.9,-17.6 -14.2,-19.8 -21.6,-29.5 37.8,239.3 289.8,559.4 441.8,1161.6 277.9,1100.8 51.2,2140.9 -662.1,3008.8 -941.4,1145.5 -2482.5,1652.3 -3969.2,1011.5 -239.7,-103.3 -321.6,-130.4 -523.3,-278.5 -130,-95.5 -381.3,-297.1 -508.9,-321.9z"/>
        <path class="fl1" d="M9800.6 18055c56,145.8 8.6,-9.9 40.1,-130.8 131,-503 643.1,-706.3 1023.7,-607.4 314,81.6 409.3,193.5 570.7,394 281.2,349.5 54.7,662.6 186.2,776 0,-469.5 22,-733 -374.5,-1050.1 -69,-55.2 -228.1,-141.8 -327.9,-168.5 -582,-155.2 -1173.2,337.8 -1118.3,786.7z"/>
      </g>
    </svg>
        </div>
        <div class="db-search">
          <div class="db-search-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
          <input class="db-search-input" type="text" id="dbSearchInput" placeholder="Search assets, opportunities, or ask Elia…" oninput="dbSearchQuery(this.value)" onkeydown="dbSearchKeyNav(event)" onfocus="dbSearchQuery(this.value)" autocomplete="off">
          <div class="db-search-dropdown" id="dbSearchDropdown"></div>
        </div>
        <div class="db-topbar-spacer"></div>
        <button class="db-hamburger" onclick="dbToggleMobileNav()" aria-label="Menu">
          <svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div class="db-topbar-actions">
          <div class="db-notif-btn" onclick="dbToggleNotif()" id="notifBtn">
            <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <div class="db-notif-badge">2</div>
          </div>
          <div class="db-user-btn" id="dbUserBtn" onclick="toggleUserMenu()" style="position:relative;">
            <div class="db-user-avatar">JA</div>
            <div class="db-user-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
            <div class="user-dropdown" id="userDropdown">
              <div class="user-dropdown-header">
                <div class="user-dropdown-avatar">JA</div>
                <div>
                  <div class="user-dropdown-name">James Adeyemi</div>
                  <div class="user-dropdown-email"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2e444f434b5d6e4f4a4b574b4347004d4143">[email&#160;protected]</a></div>
                </div>
              </div>
              <div class="user-dropdown-divider"></div>
              <div class="user-dropdown-item" onclick="dbNav('settings');closeUserMenu()">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                Settings
              </div>
              <div class="user-dropdown-divider"></div>
              <div class="user-dropdown-item danger" onclick="showPage('page-signin');closeUserMenu()">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                Log out
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- ── Body ── -->
      <div class="db-body">

        <!-- ── Icon Sidebar ── -->
        <nav class="db-sidebar">
          <div class="db-nav-icon active" id="dbnav-home" onclick="dbNav('home')" title="Home">
            <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <div class="db-nav-icon" id="dbnav-portfolio" onclick="dbNav('portfolio')" title="Portfolio">
            <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <div class="db-nav-icon" id="dbnav-opps" onclick="dbNav('opps')" title="Opportunities">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <div class="db-nav-icon-badge">4</div>
          </div>
          <div class="db-nav-icon" id="dbnav-ai" onclick="dbNav('ai')" title="Elia AI">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 0 1 10 10c0 3.5-1.8 6.6-4.5 8.5"/><path d="M12 2a10 10 0 0 0-10 10c0 3.5 1.8 6.6 4.5 8.5"/></svg>
          </div>
          <div class="db-nav-icon" id="dbnav-entities" onclick="dbNav('entities')" title="Entities">
            <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <div class="db-nav-icon" id="dbnav-vault" onclick="dbNav('vault')" title="Vault">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="4"/><path d="M12 8v1M12 15v1M8 12h1M15 12h1"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>
          </div>
          <div class="db-sidebar-spacer"></div>
          <div class="db-nav-icon" id="dbnav-tax" onclick="dbNav('tax')" title="Tax Documents">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          <div class="db-nav-icon" id="dbnav-settings" onclick="dbNav('settings')" title="Settings">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </div>
        </nav>

        <!-- ── Main Content ── -->
        <div class="db-main" id="dbMain">

          <!-- HOME -->
          <div id="dbsec-home" class="db-content">

            <!-- Net Worth Card -->
            <div class="nw-card">
              <div class="nw-card-inner">
                <div class="nw-card-label">Net Worth</div>
                <div class="nw-card-name">James Adeyemi · Individual</div>
                <div class="nw-card-value">$2,847,340</div>
                <div class="nw-card-change">▲ $142,890 (5.3%) this year</div>
                <div class="nw-card-stats">
                  <div class="nw-card-stat"><div class="v">$1.24M</div><div class="l">Invested</div></div>
                  <div class="nw-card-stat"><div class="v">$318K</div><div class="l">Cash</div></div>
                  <div class="nw-card-stat"><div class="v">7.8%</div><div class="l">Avg yield</div></div>
                  <div class="nw-card-stat"><div class="v">Accredited</div><div class="l">Investor status</div></div>
                </div>
              </div>
            </div>

            <!-- Performance Chart -->
            <div class="perf-card">
              <div class="perf-card-header">
                <div>
                  <div class="perf-card-title">Total Invested Assets Performance</div>
                  <div class="perf-card-val">$1,847,340</div>
                  <div class="perf-card-chg" style="color:var(--green)">▲ $94,200 (5.4%) this year</div>
                </div>
                <div class="perf-time-tabs">
                  <button class="perf-time-tab active" onclick="switchTab(this,'home')">1D</button>
                  <button class="perf-time-tab" onclick="switchTab(this,'home')">1W</button>
                  <button class="perf-time-tab" onclick="switchTab(this,'home')">1M</button>
                  <button class="perf-time-tab" onclick="switchTab(this,'home')">3M</button>
                  <button class="perf-time-tab" onclick="switchTab(this,'home')">YTD</button>
                  <button class="perf-time-tab" onclick="switchTab(this,'home')">1Y</button>
                  <button class="perf-time-tab" onclick="switchTab(this,'home')">MAX</button>
                </div>
              </div>
              <canvas id="homeChart" height="160" style="width:100%;display:block;"></canvas>
            </div>

            <!-- Stats row -->
            <div class="stats-row">
              <div class="stat-card">
                <div class="stat-card-icon" style="background:var(--blue-pale);color:var(--blue);">
                  <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div class="stat-card-val">$684,200</div>
                <div class="stat-card-lbl">Equities</div>
                <div class="stat-card-chg" style="color:var(--green)">▲ 12.4% YTD</div>
              </div>
              <div class="stat-card">
                <div class="stat-card-icon" style="background:var(--gold-pale);color:var(--gold);">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                </div>
                <div class="stat-card-val">$218,000</div>
                <div class="stat-card-lbl">Gold & Metals</div>
                <div class="stat-card-chg" style="color:var(--green)">▲ 7.1% YTD</div>
              </div>
              <div class="stat-card">
                <div class="stat-card-icon" style="background:var(--green-pale);color:var(--green);">
                  <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                </div>
                <div class="stat-card-val">$340,000</div>
                <div class="stat-card-lbl">Real Estate</div>
                <div class="stat-card-chg" style="color:var(--green)">▲ 4.2% YTD</div>
              </div>
            </div>

            <!-- Elia AI Insights -->
            <div class="asset-row-title">Elia Intelligence</div>
            <div class="ai-cards">
              <div class="ai-card alert" onclick="eliaNotif('allocation')" style="cursor:pointer;">
                <div class="ai-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                <div class="ai-card-body">
                  <div class="ai-card-type">Allocation Alert</div>
                  <div class="ai-card-text">You may be holding excess idle cash. $318K in T-Bills is above your liquidity target — consider laddering into 6-month instruments for improved yield.</div>
                </div>
              </div>
              <div class="ai-card risk" onclick="eliaNotif('risk')" style="cursor:pointer;">
                <div class="ai-card-icon"><svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
                <div class="ai-card-body">
                  <div class="ai-card-type">Risk Signal</div>
                  <div class="ai-card-text">Your equity portfolio is 62% concentrated in U.S. tech. Consider geographic diversification to reduce single-sector risk.</div>
                </div>
              </div>
              <div class="ai-card opp" onclick="eliaNotif('opportunity')" style="cursor:pointer;">
                <div class="ai-card-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
                <div class="ai-card-body">
                  <div class="ai-card-type">Opportunity</div>
                  <div class="ai-card-text">Modern Stylish Home · 458 N 7th St, San Jose · 1 bed · ★ 4.85 · 5% projected cap rate · Min. investment $5,000. Open for investment now.</div>
                </div>
              </div>
            </div>

            <!-- Holdings -->
            <div class="asset-row-title">Your Holdings</div>
            <div class="asset-list">
              <div class="asset-row" onclick="openAssetPanel('spy')" style="cursor:pointer">
                <div class="asset-row-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                <div class="asset-row-info"><div class="asset-row-name">S&P 500 (SPY)</div><div class="asset-row-sub">US Large Cap ETF · Brokerage</div></div>
                <div style="margin-right:16px;"><div class="asset-row-bar"><div class="asset-row-bar-fill" style="width:45%;background:var(--blue);"></div></div></div>
                <div class="asset-row-right"><div class="asset-row-val">$284,000</div><div class="asset-row-chg" style="color:var(--green)">▲ 12.1%</div></div>
              </div>
              <div class="asset-row" onclick="openAssetPanel('gold')" style="cursor:pointer">
                <div class="asset-row-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg></div>
                <div class="asset-row-info"><div class="asset-row-name">Gold (IAU)</div><div class="asset-row-sub">Precious Metals · Secure Vault</div></div>
                <div style="margin-right:16px;"><div class="asset-row-bar"><div class="asset-row-bar-fill" style="width:28%;background:var(--gold);"></div></div></div>
                <div class="asset-row-right"><div class="asset-row-val">$218,000</div><div class="asset-row-chg" style="color:var(--green)">▲ 7.1%</div></div>
              </div>
              <div class="asset-row" onclick="openAssetPanel('btc')" style="cursor:pointer">
                <div class="asset-row-icon" style="background:#FFF7ED;color:#EA580C;"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg></div>
                <div class="asset-row-info"><div class="asset-row-name">Bitcoin (BTC)</div><div class="asset-row-sub">Cryptocurrency · Secure Custody</div></div>
                <div style="margin-right:16px;"><div class="asset-row-bar"><div class="asset-row-bar-fill" style="width:18%;background:#EA580C;"></div></div></div>
                <div class="asset-row-right"><div class="asset-row-val">$89,250</div><div class="asset-row-chg" style="color:var(--green)">▲ 41.2%</div></div>
              </div>
              <div class="asset-row" onclick="openAssetPanel('tbill')" style="cursor:pointer">
                <div class="asset-row-icon" style="background:#ECFEFF;color:#0E7490;"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <div class="asset-row-info"><div class="asset-row-name">T-Bill 90-Day</div><div class="asset-row-sub">US Treasury · Cash Account</div></div>
                <div style="margin-right:16px;"><div class="asset-row-bar"><div class="asset-row-bar-fill" style="width:60%;background:#0E7490;"></div></div></div>
                <div class="asset-row-right"><div class="asset-row-val">$318,000</div><div class="asset-row-chg" style="color:var(--green)">5.18% yield</div></div>
              </div>

            </div>

            <!-- Recent Activity -->
            <div class="activity-card-db">
              <div class="activity-card-db-head">
                <div class="activity-card-db-head-title">Recent Activity</div>
                <a>View all →</a>
              </div>
              <div class="act-row" onclick="openAssetPanel('aapl')" style="cursor:pointer">
                <div class="act-row-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                <div class="act-row-info"><div class="act-row-name">AAPL — 15 shares purchased</div><div class="act-row-date">Today, 9:41 AM · Brokerage</div></div>
                <div class="act-row-amt" style="color:var(--red)">−$3,360</div>
              </div>
              <div class="act-row" onclick="openAssetPanel('tbill')" style="cursor:pointer">
                <div class="act-row-icon" style="background:var(--green-pale);color:var(--green);"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg></div>
                <div class="act-row-info"><div class="act-row-name">T-Bill maturity — auto-rolled</div><div class="act-row-date">Yesterday, 4:00 PM</div></div>
                <div class="act-row-amt" style="color:var(--green)">+$1,290</div>
              </div>
              <div class="act-row" onclick="openAssetPanel('gold')" style="cursor:pointer">
                <div class="act-row-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg></div>
                <div class="act-row-info"><div class="act-row-name">Gold allocation — 3 oz added</div><div class="act-row-date">Apr 7, 2026</div></div>
                <div class="act-row-amt" style="color:var(--red)">−$7,140</div>
              </div>

            </div>


            <!-- ── Market News ── -->
            <div class="asset-row-title" style="margin-top:8px;">Market News</div>
            <div class="activity-card-db" id="newsSection">
              <div class="activity-card-db-head">
                <div class="activity-card-db-head-title">Latest News</div>
                <a onclick="refreshNews()">Refresh</a>
              </div>

              <div class="news-row" style="display:flex;align-items:flex-start;gap:16px;padding:16px 20px;border-bottom:1px solid var(--cream-mid);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''" onclick="openNewsModal('meta')">
                <div style="flex:1;">
                  <div style="font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:5px;">Barron's · 11m ago</div>
                  <div style="font-size:.9rem;font-weight:500;color:var(--ink);line-height:1.4;margin-bottom:8px;">U.S. Court Rules That Meta Isn't a Monopoly</div>
                  <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;font-weight:600;color:var(--ink);">META <span style="color:var(--red);">▼ 0.44%</span></div>
                </div>
                <div style="width:88px;height:64px;border-radius:10px;background:linear-gradient(135deg,#c8d0d8,#5a6a7a);flex-shrink:0;overflow:hidden;"></div>
              </div>

              <div class="news-row" style="display:flex;align-items:flex-start;gap:16px;padding:16px 20px;border-bottom:1px solid var(--cream-mid);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''" onclick="openNewsModal('lmt')">
                <div style="flex:1;">
                  <div style="font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:5px;">Reuters · 17m ago</div>
                  <div style="font-size:.9rem;font-weight:500;color:var(--ink);line-height:1.4;margin-bottom:8px;">Trump to Sell F-35s to Saudi Arabia. Why Lockheed Stock Is Rising.</div>
                  <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;font-weight:600;color:var(--ink);">LMT <span style="color:var(--green);">▲ 0.65%</span></div>
                </div>
                <div style="width:88px;height:64px;border-radius:10px;background:linear-gradient(135deg,#8fa8bc,#2a3a4a);flex-shrink:0;overflow:hidden;"></div>
              </div>

              <div class="news-row" style="display:flex;align-items:flex-start;gap:16px;padding:16px 20px;border-bottom:1px solid var(--cream-mid);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''" onclick="openNewsModal('fed')">
                <div style="flex:1;">
                  <div style="font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:5px;">Financial Times · 23m ago</div>
                  <div style="font-size:.9rem;font-weight:500;color:var(--ink);line-height:1.4;margin-bottom:8px;">Fed Signals Rate Cuts May Come Later Than Expected as Inflation Remains Sticky</div>
                  <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;font-weight:600;color:var(--ink);">S&P 500 <span style="color:var(--red);">▼ 0.25%</span></div>
                </div>
                <div style="width:88px;height:64px;border-radius:10px;background:linear-gradient(135deg,#d4c5b0,#7a6248);flex-shrink:0;overflow:hidden;"></div>
              </div>

              <div class="news-row" style="display:flex;align-items:flex-start;gap:16px;padding:16px 20px;border-bottom:1px solid var(--cream-mid);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''" onclick="openNewsModal('btcnews')">
                <div style="flex:1;">
                  <div style="font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:5px;">Bloomberg · 41m ago</div>
                  <div style="font-size:.9rem;font-weight:500;color:var(--ink);line-height:1.4;margin-bottom:8px;">Bitcoin Surpasses $93,000 as Institutional Demand Drives New Highs</div>
                  <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;font-weight:600;color:var(--ink);">BTC <span style="color:var(--green);">▲ 3.33%</span></div>
                </div>
                <div style="width:88px;height:64px;border-radius:10px;background:linear-gradient(135deg,#e8d5b5,#8a6820);flex-shrink:0;overflow:hidden;"></div>
              </div>

              <div class="news-row" style="display:flex;align-items:flex-start;gap:16px;padding:16px 20px;cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background=''" onclick="openNewsModal('gold')">
                <div style="flex:1;">
                  <div style="font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:5px;">WSJ · 1h ago</div>
                  <div style="font-size:.9rem;font-weight:500;color:var(--ink);line-height:1.4;margin-bottom:8px;">Gold Hits All-Time High Above $3,140 as Investors Seek Safe Haven Amid Tariff Uncertainty</div>
                  <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;font-weight:600;color:var(--ink);">Gold <span style="color:var(--green);">▲ 0.52%</span></div>
                </div>
                <div style="width:88px;height:64px;border-radius:10px;background:linear-gradient(135deg,#c8d5c0,#3a5a32);flex-shrink:0;overflow:hidden;"></div>
              </div>
            </div>


          </div><!-- end home -->


          <!-- PORTFOLIO -->
          <div id="dbsec-portfolio" class="db-content" style="display:none;">
            <div class="page-header"><h1>Portfolio</h1><p>Consolidated view of all holdings and performance.</p></div>
            <div class="perf-card sec-port">
              <div class="perf-card-header">
                <div>
                  <div class="perf-card-title">Total Portfolio Value</div>
                  <div class="perf-card-val">$1,847,340</div>
                  <div class="perf-card-chg" style="color:var(--green)">▲ $94,200 (5.4%) this year</div>
                </div>
                <div class="perf-time-tabs">
                  <button class="perf-time-tab active" onclick="switchTab(this,'port')">1D</button>
                  <button class="perf-time-tab" onclick="switchTab(this,'port')">1W</button>
                  <button class="perf-time-tab" onclick="switchTab(this,'port')">1M</button>
                  <button class="perf-time-tab" onclick="switchTab(this,'port')">3M</button>
                  <button class="perf-time-tab" onclick="switchTab(this,'port')">YTD</button>
                  <button class="perf-time-tab" onclick="switchTab(this,'port')">1Y</button>
                  <button class="perf-time-tab" onclick="switchTab(this,'port')">MAX</button>
                </div>
              </div>
              <canvas id="portChart" height="200" style="width:100%;display:block;"></canvas>
            </div>
            <div class="asset-list" style="margin-top:4px;">
              <div style="padding:14px 20px;border-bottom:1px solid var(--cream-mid);display:flex;gap:8px;flex-wrap:wrap;">
                <span style="font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);align-self:center;flex:1;">All Holdings</span>
                <span class="port-filter-pill active" onclick="portFilter('all',this)" style="padding:4px 12px;border-radius:100px;background:var(--ink);color:white;font-size:.75rem;font-weight:500;cursor:pointer;">All</span>
                <span class="port-filter-pill" onclick="portFilter('equities',this)" style="padding:4px 12px;border-radius:100px;border:1px solid var(--cream-dark);color:var(--ink-soft);font-size:.75rem;font-weight:500;cursor:pointer;">Equities</span>
                <span class="port-filter-pill" onclick="portFilter('realestate',this)" style="padding:4px 12px;border-radius:100px;border:1px solid var(--cream-dark);color:var(--ink-soft);font-size:.75rem;font-weight:500;cursor:pointer;">Real Estate</span>
                <span class="port-filter-pill" onclick="portFilter('crypto',this)" style="padding:4px 12px;border-radius:100px;border:1px solid var(--cream-dark);color:var(--ink-soft);font-size:.75rem;font-weight:500;cursor:pointer;">Crypto</span>
              </div>
              <div class="asset-row" data-cat="equities" onclick="openTransactionPage('spy')" style="cursor:pointer;">
                <div class="asset-row-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                <div class="asset-row-info"><div class="asset-row-name">S&P 500 (SPY)</div><div class="asset-row-sub">US Large Cap ETF · Brokerage · 34 shares</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$284,000</div><div class="asset-row-chg" style="color:var(--green)">▲ 12.1% YTD</div></div>
              </div>
              <div class="asset-row" data-cat="equities" onclick="openTransactionPage('aapl')" style="cursor:pointer;">
                <div class="asset-row-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                <div class="asset-row-info"><div class="asset-row-name">Apple (AAPL)</div><div class="asset-row-sub">Technology · NASDAQ · Brokerage · 15 shares</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$107,220</div><div class="asset-row-chg" style="color:var(--green)">▲ 18.4% YTD</div></div>
              </div>
              <div class="asset-row" data-cat="realestate" onclick="openTransactionPage('gold')" style="cursor:pointer;">
                <div class="asset-row-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg></div>
                <div class="asset-row-info"><div class="asset-row-name">Gold (IAU)</div><div class="asset-row-sub">Precious Metals · Secure Vault · 187 oz</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$218,000</div><div class="asset-row-chg" style="color:var(--green)">▲ 7.1% YTD</div></div>
              </div>
              <div class="asset-row" data-cat="crypto" onclick="openTransactionPage('btc')" style="cursor:pointer;">
                <div class="asset-row-icon" style="background:#FFF7ED;color:#EA580C;"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg></div>
                <div class="asset-row-info"><div class="asset-row-name">Bitcoin (BTC)</div><div class="asset-row-sub">Cryptocurrency · Secure Custody</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$89,250</div><div class="asset-row-chg" style="color:var(--green)">▲ 41.2% YTD</div></div>
              </div>
              <div class="asset-row" data-cat="realestate" onclick="openTransactionPage('tbill')" style="cursor:pointer;">
                <div class="asset-row-icon" style="background:#ECFEFF;color:#0E7490;"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <div class="asset-row-info"><div class="asset-row-name">T-Bill 90-Day</div><div class="asset-row-sub">US Treasury · Cash Account</div></div>
                <div class="asset-row-right"><div class="asset-row-val">$318,000</div><div class="asset-row-chg" style="color:var(--green)">5.18% ann.</div></div>
              </div>

            </div>
          </div>

          <!-- OPPORTUNITIES -->
          <div id="dbsec-opps" class="db-content" style="display:none;">
            <div class="page-header"><h1>Opportunities</h1><p>Curated deals matched to your investor profile.</p></div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">
              <span class="opp-filter-pill active" onclick="oppFilter('all',this)" style="padding:6px 14px;border-radius:100px;background:var(--ink);color:white;font-size:.78rem;font-weight:500;cursor:pointer;">All</span>
              <span class="opp-filter-pill" onclick="oppFilter('realestate',this)" style="padding:6px 14px;border-radius:100px;border:1px solid var(--cream-dark);color:var(--ink-soft);font-size:.78rem;font-weight:500;cursor:pointer;">Real Estate</span>
              <span class="opp-filter-pill" onclick="oppFilter('private',this)" style="padding:6px 14px;border-radius:100px;border:1px solid var(--cream-dark);color:var(--ink-soft);font-size:.78rem;font-weight:500;cursor:pointer;">Private Markets</span>

              <span class="opp-filter-pill" onclick="oppFilter('treasury',this)" style="padding:6px 14px;border-radius:100px;border:1px solid var(--cream-dark);color:var(--ink-soft);font-size:.78rem;font-weight:500;cursor:pointer;">Treasury</span>
            </div>
            <div class="opp-grid-db">
              <div class="opp-card-db" onclick="openTransactionPage('unit-a')" data-cat="realestate" style="cursor:pointer;">
                <div class="opp-card-db-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/873bf710-2bdb-47e9-97a8-0e7cc4b142b9.avif) center/cover no-repeat;position:relative;">
                  <div style="position:absolute;top:10px;right:10px;background:rgba(26,122,94,.88);color:white;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:100px;backdrop-filter:blur(4px);">Open</div>
                  <div style="position:absolute;bottom:10px;left:10px;background:rgba(255,255,255,.92);color:#0C1A2E;font-size:.72rem;font-weight:600;padding:4px 10px;border-radius:100px;display:flex;align-items:center;gap:4px;"><span style="color:#e8a020;">★</span> 4.85 · 13 reviews</div>
                </div>
                <div class="opp-card-db-body">
                  <div class="opp-card-db-cat">Entire Rental Unit · San Jose, California</div>
                  <div class="opp-card-db-name">Modern Stylish Home</div>
                  <div class="opp-card-db-chips"><span class="opp-chip-db green">5% cap rate</span><span class="opp-chip-db">1 Bedroom · 1 Queen Bed · 1 Bath</span></div>
                </div>
                <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">Min. $5,000</span><span class="opp-card-db-footer-link">View deal →</span></div>
              </div>
              <div class="opp-card-db" onclick="openTransactionPage('unit-b')" data-cat="realestate" style="cursor:pointer;opacity:0.88;">
                <div class="opp-card-db-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/94a99706-bdcf-48a2-94b9-0d5590b1b55c.avif) center/cover no-repeat;position:relative;">
                  <div style="position:absolute;top:10px;right:10px;background:rgba(12,26,46,.7);color:white;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:100px;backdrop-filter:blur(4px);">Closed</div>
                  <div style="position:absolute;bottom:10px;left:10px;background:rgba(255,255,255,.92);color:#0C1A2E;font-size:.72rem;font-weight:600;padding:4px 10px;border-radius:100px;display:flex;align-items:center;gap:4px;"><span style="color:#e8a020;">★</span> 4.9 · 10 reviews</div>
                </div>
                <div class="opp-card-db-body">
                  <div class="opp-card-db-cat">Private Room · San Jose, California</div>
                  <div class="opp-card-db-name">Private Room 1 — Cozy Stay</div>
                  <div class="opp-card-db-chips"><span class="opp-chip-db">1 Queen Bed · Shared Bath</span></div>
                  <div class="opp-closed-badge">⏸ Opportunity Closed</div>
              
                </div>
                <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">Min. $1,000</span><span style="font-size:.75rem;color:var(--blue);font-weight:500;">View details →</span></div>
              </div>
              <div class="opp-card-db" onclick="openTransactionPage('unit-c')" data-cat="realestate" style="cursor:pointer;opacity:0.88;">
                <div class="opp-card-db-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/21d22495-9c19-4cfa-aa18-327be40c558f.avif) center/cover no-repeat;position:relative;">
                  <div style="position:absolute;top:10px;right:10px;background:rgba(12,26,46,.7);color:white;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:100px;backdrop-filter:blur(4px);">Closed</div>
                  <div style="position:absolute;bottom:10px;left:10px;background:rgba(255,255,255,.92);color:#0C1A2E;font-size:.72rem;font-weight:600;padding:4px 10px;border-radius:100px;display:flex;align-items:center;gap:4px;"><span style="color:#e8a020;">★</span> 4.83 · 6 reviews</div>
                </div>
                <div class="opp-card-db-body">
                  <div class="opp-card-db-cat">Private Room · San Jose, California</div>
                  <div class="opp-card-db-name">Private Room — Elegant Stay</div>
                  <div class="opp-card-db-chips"><span class="opp-chip-db">1 Queen Bed · Shared Bath</span></div>
                  <div class="opp-closed-badge">⏸ Opportunity Closed</div>
              
                </div>
                <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">Min. $1,000</span><span style="font-size:.75rem;color:var(--blue);font-weight:500;">View details →</span></div>
              </div>
              <div class="opp-card-db" onclick="openTransactionPage('unit-d')" data-cat="realestate" style="cursor:pointer;opacity:0.88;">
                <div class="opp-card-db-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/044f95c0-ebd0-47b5-bc9f-5591fed2e0f8.avif) center/cover no-repeat;position:relative;">
                  <div style="position:absolute;top:10px;right:10px;background:rgba(12,26,46,.7);color:white;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:100px;backdrop-filter:blur(4px);">Closed</div>
                  <div style="position:absolute;bottom:10px;left:10px;background:rgba(255,255,255,.92);color:#0C1A2E;font-size:.72rem;font-weight:600;padding:4px 10px;border-radius:100px;display:flex;align-items:center;gap:4px;"><span style="color:#e8a020;">★</span> 4.9 · 10 reviews</div>
                </div>
                <div class="opp-card-db-body">
                  <div class="opp-card-db-cat">Private Room · San Jose, California</div>
                  <div class="opp-card-db-name">Private Room 2 — Modern Stay</div>
                  <div class="opp-card-db-chips"><span class="opp-chip-db">1 Queen Bed · Shared Bath</span></div>
                  <div class="opp-closed-badge">⏸ Opportunity Closed</div>
              
                </div>
                <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">Min. $1,000</span><span style="font-size:.75rem;color:var(--blue);font-weight:500;">View details →</span></div>
              </div>
              <div class="opp-card-db" onclick="openTransactionPage('bridge')" data-cat="treasury" style="cursor:pointer">
                <div class="opp-card-db-img" style="background:linear-gradient(160deg,#b8c9d8,#4a6f87);"></div>
                <div class="opp-card-db-body">
                  <div class="opp-card-db-cat">Treasury</div>
                  <div class="opp-card-db-name">60-Day Treasury Bill</div>
                  <div class="opp-chip-db green" style="display:inline-block;margin-top:6px;">5.25% ann.</div>
                </div>
                <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">Min. $1,000</span><span class="opp-card-db-footer-link">View deal →</span></div>
              </div>
              <div class="opp-card-db" onclick="openTransactionPage('tbill')" data-cat="treasury" style="cursor:pointer">
                <div class="opp-card-db-img" style="background:linear-gradient(160deg,#e8d5b5,#8a6820);"></div>
                <div class="opp-card-db-body">
                  <div class="opp-card-db-cat">Treasury</div>
                  <div class="opp-card-db-name">90-Day T-Bill Ladder</div>
                  <div class="opp-chip-db green" style="display:inline-block;margin-top:6px;">5.18% ann.</div>
                </div>
                <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">Min. $1,000</span><span class="opp-card-db-footer-link">View deal →</span></div>
              </div>
              <div class="opp-card-db" onclick="openTransactionPage('termii')" data-cat="private" style="cursor:pointer">
                <div class="opp-card-db-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/deals.png) center/cover no-repeat;position:relative;">
                  <div style="position:absolute;top:10px;right:10px;background:rgba(26,122,94,.88);color:white;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:100px;backdrop-filter:blur(4px);">Open</div>
                  <div style="position:absolute;bottom:10px;left:10px;background:rgba(12,26,46,.7);color:white;font-size:.68rem;font-weight:600;padding:3px 10px;border-radius:100px;">Invested</div>
                </div>
                <div class="opp-card-db-body">
                  <div class="opp-card-db-cat">Private Markets · San Jose, CA</div>
                  <div class="opp-card-db-name">Termii</div>
                  <div class="opp-card-db-chips"><span class="opp-chip-db green">$5M ARR</span><span class="opp-chip-db">$1M allocation</span></div>
                </div>
                <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">AI Payments Infrastructure</span><span class="opp-card-db-footer-link">View deal →</span></div>
              </div>
              <div class="opp-card-db" onclick="openTransactionPage('rayda')" data-cat="private" style="cursor:pointer">
                <div class="opp-card-db-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/plan_1661112808.jpg) center/cover no-repeat;position:relative;">
                  <div style="position:absolute;top:10px;right:10px;background:rgba(26,122,94,.88);color:white;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:100px;backdrop-filter:blur(4px);">Open</div>
                  <div style="position:absolute;bottom:10px;left:10px;background:rgba(12,26,46,.7);color:white;font-size:.68rem;font-weight:600;padding:3px 10px;border-radius:100px;">Invested</div>
                </div>
                <div class="opp-card-db-body">
                  <div class="opp-card-db-cat">Private Markets · Delaware</div>
                  <div class="opp-card-db-name">Rayda</div>
                  <div class="opp-card-db-chips"><span class="opp-chip-db green">$5.4M ARR</span><span class="opp-chip-db">$1M allocation</span></div>
                </div>
                <div class="opp-card-db-footer"><span class="opp-card-db-footer-min">IT Asset Management</span><span class="opp-card-db-footer-link">View deal →</span></div>
              </div>
            </div>
          </div>

          <!-- AI ADVISOR -->
          <div id="dbsec-ai" class="db-content" style="display:none;">
            <div class="page-header"><h1>Elia — AI Advisor</h1><p>Your always-on portfolio intelligence layer.</p></div>
            <div class="chat-db">
              <div class="chat-db-head">
                <div class="chat-db-avatar">✦</div>
                <div><div class="chat-db-title">Elia Intelligence</div><div class="chat-db-status">Online · Aidi AI</div></div>
              </div>
              <div class="chat-db-msgs" id="chatDbMsgs">
                <div class="chat-db-msg bot"><div class="chat-db-msg-av">✦</div><div class="chat-db-bubble">Good morning, James. I've reviewed your portfolio. A few things worth attention: your cash position is above your 20% target, and there's a new real estate deal matching your profile. Where would you like to start?</div></div>
                <div class="chat-db-msg user"><div class="chat-db-msg-av">JA</div><div class="chat-db-bubble">Tell me about my cash situation.</div></div>
                <div class="chat-db-msg bot"><div class="chat-db-msg-av">✦</div><div class="chat-db-bubble">Your T-Bill balance is $318K — roughly 17% of net worth. Your target was 10–12%. The excess ~$90K could be redeployed into the 6-month T-Bill ladder for an additional ~$2,340/year in yield. No action required today — this is advisory context only.</div></div>
              </div>
              <div class="chat-db-suggestions">
                <button class="chat-db-chip" onclick="dbSendQuick(this)">What's my biggest risk?</button>
                <button class="chat-db-chip" onclick="dbSendQuick(this)">How am I vs benchmark?</button>
              </div>
              <div class="chat-db-input-area">
                <input class="chat-db-input" id="chatDbInput" type="text" placeholder="Ask Elia anything…" onkeypress="if(event.key==='Enter')dbSendChat()">
                <button class="chat-db-send" onclick="dbSendChat()"><svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
              </div>
            </div>
          </div>

          <!-- ENTITIES -->
          <div id="dbsec-entities" class="db-content" style="display:none;">
            <div class="page-header"><h1>Entities</h1><p>Manage your investment structures and legal entities.</p></div>
            <div class="ent-grid">
              <div class="ent-card-db">
                <div class="ent-card-head">
                  <div class="ent-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                  <span class="ent-badge" style="background:var(--green-pale);color:var(--green);">Verified</span>
                </div>
                <div style="padding:0 18px;"><div class="ent-name">James Adeyemi</div><div class="ent-sub">Individual Account</div></div>
                <div class="ent-body">
                  <div class="ent-meta"><span class="ent-meta-k">Entity type</span><span class="ent-meta-v">Individual</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Investor status</span><span class="ent-meta-v">Accredited</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Tax residency</span><span class="ent-meta-v">United States</span></div>
                </div>
                <div class="ent-footer"><button class="ent-btn primary" onclick="openEntityPanel('individual')">View</button></div>
              </div>
              <div class="ent-card-db">
                <div class="ent-card-head">
                  <div class="ent-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
                  <span class="ent-badge" style="background:var(--blue-pale);color:var(--blue);">Active</span>
                </div>
                <div style="padding:0 18px;"><div class="ent-name">Adeyemi Capital LLC</div><div class="ent-sub">Delaware LLC · 2021</div></div>
                <div class="ent-body">
                  <div class="ent-meta"><span class="ent-meta-k">EIN</span><span class="ent-meta-v">84-XXXXXXX</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Structure</span><span class="ent-meta-v">Member-managed</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Owners on file</span><span class="ent-meta-v">2</span></div>
                </div>
                <div class="ent-footer"><button class="ent-btn primary" onclick="openEntityPanel('capital-llc')">View</button></div>
              </div>
              <div class="ent-card-db">
                <div class="ent-card-head">
                  <div class="ent-icon" style="background:var(--cream);color:var(--ink-soft);"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
                  <span class="ent-badge" style="background:var(--gold-pale);color:#8a6520;">Forming</span>
                </div>
                <div style="padding:0 18px;"><div class="ent-name">Adeyemi Family Office LLC</div><div class="ent-sub">Wyoming · Formation in progress</div></div>
                <div class="ent-body">
                  <div class="ent-meta"><span class="ent-meta-k">Submitted</span><span class="ent-meta-v">Apr 8, 2026</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Est. completion</span><span class="ent-meta-v">Apr 10, 2026</span></div>
                  <div class="ent-meta"><span class="ent-meta-k">Fee paid</span><span class="ent-meta-v">$1,000</span></div>
                </div>
                <div class="ent-footer"><button class="ent-btn" onclick="openEntityTrack('family-llc')">Track status</button><button class="ent-btn primary" onclick="openEntityPanel('family-llc')">Details</button></div>
              </div>
              <div class="ent-add" onclick="openEntityWizard()">
                <div class="ent-add-icon">＋</div>
                <div class="ent-add-title">Add entity</div>
                <div class="ent-add-sub">LLC, Corporation, or new formation</div>
              </div>
            </div>

            <!-- ── Compliance & Filings ── -->
            <div style="margin-top:32px;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
                <div>
                  <div style="font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:400;color:var(--ink);">Compliance &amp; Upcoming Filings</div>
                  <div style="font-size:.75rem;color:var(--ink-muted);margin-top:2px;">Deadlines for your entities and personal obligations</div>
                </div>
                <button onclick="entViewDocs()" style="display:flex;align-items:center;gap:7px;padding:8px 18px;border-radius:100px;border:1.5px solid var(--cream-dark);background:white;font-size:.78rem;font-weight:600;color:var(--ink);cursor:pointer;font-family:inherit;transition:background .15s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='white'">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  View Documents
                </button>
              </div>

              <div style="background:white;border-radius:var(--r-lg);box-shadow:0 1px 6px rgba(12,26,46,.05);overflow:hidden;">
                <!-- Table header -->
                <div style="display:grid;grid-template-columns:2fr 1.4fr 1fr 110px 170px;gap:0;padding:10px 20px;background:var(--cream);border-bottom:1px solid var(--cream-mid);">
                  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Filing / Obligation</div>
                  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Entity / Name</div>
                  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Due Date</div>
                  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);">Status</div>
                  <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);text-align:right;">Action</div>
                </div>

                <!-- Rows -->
                <div id="complianceTable">

                  <!-- Row 1 — Overdue -->
                  <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.4fr 1fr 110px 170px;gap:0;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                    <div>
                      <div style="font-size:.84rem;font-weight:500;color:var(--ink);">Delaware Annual Report</div>
                      <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">State filing · Registered Agent required</div>
                    </div>
                    <div style="font-size:.82rem;color:var(--ink);">Adeyemi Capital LLC</div>
                    <div style="font-size:.82rem;color:#DC2626;font-weight:500;">Mar 31, 2026</div>
                    <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#FEF2F2;color:#DC2626;">Overdue</span></div>
                    <div style="display:flex;gap:6px;justify-content:flex-end;">
                      <button onclick="entFileNow('delaware-annual')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">File Now</button>
                      <button onclick="entAlreadyFiled('delaware-annual')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Already Filed</button>
                    </div>
                  </div>

                  <!-- Row 2 — Due Soon -->
                  <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.4fr 1fr 110px 170px;gap:0;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                    <div>
                      <div style="font-size:.84rem;font-weight:500;color:var(--ink);">Federal Income Tax Return</div>
                      <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">Form 1040 · Tax year 2025</div>
                    </div>
                    <div style="font-size:.82rem;color:var(--ink);">James Adeyemi</div>
                    <div style="font-size:.82rem;color:#D97706;font-weight:500;">Apr 15, 2026</div>
                    <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#FEF9C3;color:#A16207;">Due Soon</span></div>
                    <div style="display:flex;gap:6px;justify-content:flex-end;">
                      <button onclick="entFileNow('federal-1040')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">File Now</button>
                      <button onclick="entAlreadyFiled('federal-1040')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Already Filed</button>
                    </div>
                  </div>

                  <!-- Row 3 — Due Soon -->
                  <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.4fr 1fr 110px 170px;gap:0;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                    <div>
                      <div style="font-size:.84rem;font-weight:500;color:var(--ink);">LLC Partnership Return</div>
                      <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">Form 1065 · Tax year 2025</div>
                    </div>
                    <div style="font-size:.82rem;color:var(--ink);">Adeyemi Capital LLC</div>
                    <div style="font-size:.82rem;color:#D97706;font-weight:500;">Apr 15, 2026</div>
                    <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#FEF9C3;color:#A16207;">Due Soon</span></div>
                    <div style="display:flex;gap:6px;justify-content:flex-end;">
                      <button onclick="entFileNow('llc-1065')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">File Now</button>
                      <button onclick="entAlreadyFiled('llc-1065')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Already Filed</button>
                    </div>
                  </div>

                  <!-- Row 4 — Upcoming -->
                  <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.4fr 1fr 110px 170px;gap:0;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                    <div>
                      <div style="font-size:.84rem;font-weight:500;color:var(--ink);">California State Income Tax</div>
                      <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">Form 540 · Tax year 2025</div>
                    </div>
                    <div style="font-size:.82rem;color:var(--ink);">James Adeyemi</div>
                    <div style="font-size:.82rem;color:var(--ink-soft);">Apr 15, 2026</div>
                    <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#FEF9C3;color:#A16207;">Due Soon</span></div>
                    <div style="display:flex;gap:6px;justify-content:flex-end;">
                      <button onclick="entFileNow('ca-540')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">File Now</button>
                      <button onclick="entAlreadyFiled('ca-540')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Already Filed</button>
                    </div>
                  </div>

                  <!-- Row 5 — Upcoming -->
                  <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.4fr 1fr 110px 170px;gap:0;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                    <div>
                      <div style="font-size:.84rem;font-weight:500;color:var(--ink);">Registered Agent Renewal</div>
                      <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">Delaware · Annual registered agent fee</div>
                    </div>
                    <div style="font-size:.82rem;color:var(--ink);">Adeyemi Capital LLC</div>
                    <div style="font-size:.82rem;color:var(--ink-soft);">Jun 1, 2026</div>
                    <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:var(--blue-pale);color:var(--blue);">Upcoming</span></div>
                    <div style="display:flex;gap:6px;justify-content:flex-end;">
                      <button onclick="entFileNow('agent-renewal')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">Pay Now</button>
                      <button onclick="entAlreadyFiled('agent-renewal')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Already Paid</button>
                    </div>
                  </div>

                  <!-- Row 6 — Upcoming -->
                  <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.4fr 1fr 110px 170px;gap:0;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                    <div>
                      <div style="font-size:.84rem;font-weight:500;color:var(--ink);">BOI Report — Beneficial Ownership</div>
                      <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">FinCEN filing · Federal requirement</div>
                    </div>
                    <div style="font-size:.82rem;color:var(--ink);">Adeyemi Capital LLC</div>
                    <div style="font-size:.82rem;color:var(--ink-soft);">Jul 1, 2026</div>
                    <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:var(--blue-pale);color:var(--blue);">Upcoming</span></div>
                    <div style="display:flex;gap:6px;justify-content:flex-end;">
                      <button onclick="entFileNow('boi-report')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">Pay Now</button>
                      <button onclick="entAlreadyFiled('boi-report')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Already Filed</button>
                    </div>
                  </div>

                  <!-- Row 7 — Upcoming -->
                  <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.4fr 1fr 110px 170px;gap:0;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                    <div>
                      <div style="font-size:.84rem;font-weight:500;color:var(--ink);">Q2 Estimated Tax Payment</div>
                      <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">IRS Form 1040-ES · Federal &amp; CA</div>
                    </div>
                    <div style="font-size:.82rem;color:var(--ink);">James Adeyemi</div>
                    <div style="font-size:.82rem;color:var(--ink-soft);">Jun 15, 2026</div>
                    <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:var(--blue-pale);color:var(--blue);">Upcoming</span></div>
                    <div style="display:flex;gap:6px;justify-content:flex-end;">
                      <button onclick="entFileNow('est-q2')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--ink);color:white;cursor:pointer;font-family:inherit;white-space:nowrap;">Pay Now</button>
                      <button onclick="entAlreadyFiled('est-q2')" style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;color:var(--ink);cursor:pointer;font-family:inherit;white-space:nowrap;">Already Paid</button>
                    </div>
                  </div>

                  <!-- Row 8 — Upcoming -->
                  <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.4fr 1fr 110px 170px;gap:0;padding:14px 20px;border-bottom:1px solid var(--cream);align-items:center;">
                    <div>
                      <div style="font-size:.84rem;font-weight:500;color:var(--ink);">Wyoming Annual Report</div>
                      <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">State filing · Due after formation is complete</div>
                    </div>
                    <div style="font-size:.82rem;color:var(--ink);">Adeyemi Family Office LLC</div>
                    <div style="font-size:.82rem;color:var(--ink-soft);">Jan 1, 2027</div>
                    <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:var(--cream);color:var(--ink-muted);">Scheduled</span></div>
                    <div style="display:flex;gap:6px;justify-content:flex-end;">
                      <button disabled style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--cream-dark);color:var(--ink-muted);cursor:not-allowed;font-family:inherit;white-space:nowrap;">Not Yet Due</button>
                    </div>
                  </div>

                  <!-- Row 9 — Scheduled -->
                  <div class="comp-row" style="display:grid;grid-template-columns:2fr 1.4fr 1fr 110px 170px;gap:0;padding:14px 20px;align-items:center;">
                    <div>
                      <div style="font-size:.84rem;font-weight:500;color:var(--ink);">Federal Income Tax Return</div>
                      <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">Form 1040 · Tax year 2026</div>
                    </div>
                    <div style="font-size:.82rem;color:var(--ink);">James Adeyemi</div>
                    <div style="font-size:.82rem;color:var(--ink-soft);">Apr 15, 2027</div>
                    <div><span style="font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:100px;background:var(--cream);color:var(--ink-muted);">Scheduled</span></div>
                    <div style="display:flex;gap:6px;justify-content:flex-end;">
                      <button disabled style="padding:6px 13px;border-radius:100px;font-size:.73rem;font-weight:600;border:none;background:var(--cream-dark);color:var(--ink-muted);cursor:not-allowed;font-family:inherit;white-space:nowrap;">Not Yet Due</button>
                    </div>
                  </div>

                </div>
              </div>

              <!-- disclaimer note -->
              <p style="font-size:.7rem;color:var(--ink-muted);margin-top:10px;line-height:1.6;">Filing deadlines are indicative only. Aidi does not provide legal or tax advice. Consult your accountant or attorney before filing.</p>
            </div>

          </div>
          <div id="dbsec-tax" class="db-content" style="display:none;">
            <div class="page-header"><h1>Tax Documents</h1><p>Your 2025 tax forms, ready to download from Aidi.</p></div>

            <div style="background:#FEF9C3;border:1px solid rgba(161,98,7,.2);border-radius:var(--r-lg);padding:14px 18px;margin-bottom:24px;display:flex;align-items:center;gap:12px;">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#A16207" stroke-width="1.5" stroke-linecap="round" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <div style="font-size:.8rem;color:#92400E;"><strong>Filing deadline: April 15, 2026.</strong> All 2025 documents were released February 1, 2026. Aidi does not provide tax advice.</div>
            </div>

            <!-- Stocks & ETFs -->
            <div style="margin-bottom:16px;">
              <div style="font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Stocks &amp; ETFs — SPY, AAPL</div>
              <div class="tax-card" onclick="openTaxDoc('1099b-equity')" style="background:white;border-radius:var(--r-lg);box-shadow:0 1px 6px rgba(12,26,46,.05);padding:14px 18px;display:flex;align-items:center;gap:14px;">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--blue)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                <div style="flex:1;"><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Form 1099-B</div><div style="font-size:.73rem;color:var(--ink-muted);margin-top:2px;">Stock &amp; ETF sales · Tax year 2025 · Issued by Aidi</div></div>
                <span style="font-size:.68rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;flex-shrink:0;">Available</span>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--ink-muted)" stroke-width="2" style="flex-shrink:0;"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>

            <!-- Crypto -->
            <div style="margin-bottom:16px;">
              <div style="font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Cryptocurrency — BTC, ETH</div>
              <div class="tax-card" onclick="openTaxDoc('1099da')" style="background:white;border-radius:var(--r-lg);box-shadow:0 1px 6px rgba(12,26,46,.05);padding:14px 18px;display:flex;align-items:center;gap:14px;">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EA580C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                <div style="flex:1;"><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Form 1099-DA</div><div style="font-size:.73rem;color:var(--ink-muted);margin-top:2px;">Digital asset proceeds · Tax year 2025 · Issued by Aidi</div></div>
                <span style="font-size:.68rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;flex-shrink:0;">Available</span>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--ink-muted)" stroke-width="2" style="flex-shrink:0;"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>

            <!-- Gold & Silver -->
            <div style="margin-bottom:16px;">
              <div style="font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Gold &amp; Silver</div>
              <div class="tax-card" onclick="openTaxDoc('1099b-metals')" style="background:white;border-radius:var(--r-lg);box-shadow:0 1px 6px rgba(12,26,46,.05);padding:14px 18px;display:flex;align-items:center;gap:14px;">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#A16207" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                <div style="flex:1;"><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Form 1099-B</div><div style="font-size:.73rem;color:var(--ink-muted);margin-top:2px;">Precious metals sales · Tax year 2025 · Issued by Aidi</div></div>
                <span style="font-size:.68rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;flex-shrink:0;">Available</span>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--ink-muted)" stroke-width="2" style="flex-shrink:0;"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>

            <!-- T-Bills -->
            <div style="margin-bottom:16px;">
              <div style="font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">US Treasury Bills</div>
              <div class="tax-card" onclick="openTaxDoc('1099int-tbill')" style="background:white;border-radius:var(--r-lg);box-shadow:0 1px 6px rgba(12,26,46,.05);padding:14px 18px;display:flex;align-items:center;gap:14px;">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0E7490" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                <div style="flex:1;"><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Form 1099-INT</div><div style="font-size:.73rem;color:var(--ink-muted);margin-top:2px;">T-Bill interest income · Tax year 2025 · Issued by Aidi · State tax exempt</div></div>
                <span style="font-size:.68rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;flex-shrink:0;">Available</span>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--ink-muted)" stroke-width="2" style="flex-shrink:0;"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>

            <!-- Rental Properties -->
            <div style="margin-bottom:16px;">
              <div style="font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Rental Properties — Aidi Haven LLC</div>
              <div style="display:flex;flex-direction:column;gap:8px;">
                <div class="tax-card" onclick="openTaxDoc('k1-rental')" style="background:white;border-radius:var(--r-lg);box-shadow:0 1px 6px rgba(12,26,46,.05);padding:14px 18px;display:flex;align-items:center;gap:14px;">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  <div style="flex:1;"><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Schedule K-1</div><div style="font-size:.73rem;color:var(--ink-muted);margin-top:2px;">Partnership income · Aidi Haven LLC · Tax year 2025</div></div>
                  <span style="font-size:.68rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;flex-shrink:0;">Available</span>
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--ink-muted)" stroke-width="2" style="flex-shrink:0;"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
                <div class="tax-card" onclick="openTaxDoc('1099int-rental')" style="background:white;border-radius:var(--r-lg);box-shadow:0 1px 6px rgba(12,26,46,.05);padding:14px 18px;display:flex;align-items:center;gap:14px;">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  <div style="flex:1;"><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Form 1099-INT</div><div style="font-size:.73rem;color:var(--ink-muted);margin-top:2px;">4.5% interest income · Aidi Haven LLC · Tax year 2025</div></div>
                  <span style="font-size:.68rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;flex-shrink:0;">Available</span>
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--ink-muted)" stroke-width="2" style="flex-shrink:0;"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </div>
            </div>

            <!-- Private Investments -->
            <div style="margin-bottom:24px;">
              <div style="font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Private Investments — Termii, Rayda</div>
              <div class="tax-card" onclick="openTaxDoc('k1-private')" style="background:white;border-radius:var(--r-lg);box-shadow:0 1px 6px rgba(12,26,46,.05);padding:14px 18px;display:flex;align-items:center;gap:14px;">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#16A34A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                <div style="flex:1;"><div style="font-size:.84rem;font-weight:600;color:var(--ink);">Schedule K-1</div><div style="font-size:.73rem;color:var(--ink-muted);margin-top:2px;">SPV partnership income per investment · Tax year 2025 · Expected Mar 15, 2026</div></div>
                <span style="font-size:.68rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#FEF9C3;color:#A16207;flex-shrink:0;">Coming soon</span>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--ink-muted)" stroke-width="2" style="flex-shrink:0;"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>

            <!-- Quick reference -->
            <div style="background:white;border-radius:var(--r-lg);box-shadow:0 1px 6px rgba(12,26,46,.05);padding:16px 20px;margin-bottom:28px;">
              <div style="font-size:.8rem;font-weight:600;color:var(--ink);margin-bottom:10px;">Do I need to report anything?</div>
              <div style="display:grid;gap:6px;font-size:.75rem;">
                <div style="display:flex;gap:8px;"><span style="color:var(--green);font-weight:700;flex-shrink:0;">✓</span><span style="color:var(--ink-muted);">Holding only, didn't sell — <strong style="color:var(--ink);">nothing to report</strong></span></div>
                <div style="display:flex;gap:8px;"><span style="color:#A16207;font-weight:700;flex-shrink:0;">!</span><span style="color:var(--ink-muted);">Sold stocks, ETFs, metals — <strong style="color:var(--ink);">download your 1099-B</strong></span></div>
                <div style="display:flex;gap:8px;"><span style="color:#A16207;font-weight:700;flex-shrink:0;">!</span><span style="color:var(--ink-muted);">Sold or traded crypto — <strong style="color:var(--ink);">download your 1099-DA. Tick the crypto question on Form 1040 every year regardless.</strong></span></div>
                <div style="display:flex;gap:8px;"><span style="color:#A16207;font-weight:700;flex-shrink:0;">!</span><span style="color:var(--ink-muted);">Earning T-Bill or rental interest — <strong style="color:var(--ink);">download your 1099-INT</strong></span></div>
                <div style="display:flex;gap:8px;"><span style="color:#A16207;font-weight:700;flex-shrink:0;">!</span><span style="color:var(--ink-muted);">Invested in rentals or private deals — <strong style="color:var(--ink);">download your K-1 and share with your accountant</strong></span></div>
              </div>
              <div style="margin-top:10px;font-size:.71rem;color:var(--ink-muted);padding-top:8px;border-top:1px solid var(--cream);">Aidi provides your tax documents. Share them with your accountant for filing.</div>
            </div>

          </div>

          <!-- SETTINGS -->

          <!-- VAULT -->
          <div id="dbsec-vault" class="db-content" style="display:none;">
            <div class="page-header">
              <h1>Vault</h1>
              <p>Secure storage for your physical gold, metals, and institutional-grade crypto custody.</p>
            </div>

            <!-- Vault sub-tabs -->
            <div class="vault-tabs">
              <button class="vault-tab active" id="vtab-gold" onclick="switchVaultTab('gold')">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                Gold &amp; Metals
              </button>
              <button class="vault-tab" id="vtab-crypto" onclick="switchVaultTab('crypto')">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="4"/><path d="M12 8v1M12 15v1M8 12h1M15 12h1"/></svg>
                Crypto Vault
              </button>
            </div>

            <!-- ══ GOLD SUB-PANEL ══ -->
            <div class="vault-sub active" id="vsub-gold">
            <div style="font-size:.72rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:14px;">Gold &amp; Metals — Secure Vault</div>

            <!-- Storage fee notice — top of section -->
            <div style="background:#FDF6E8;border:1px solid rgba(200,150,46,.25);border-radius:12px;padding:13px 18px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:32px;height:32px;border-radius:9px;background:rgba(200,150,46,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#C8962E" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                </div>
                <div>
                  <div style="font-size:.8rem;font-weight:600;color:#8a6520;">Vault Storage Fee</div>
                  <div style="font-size:.78rem;color:#8a6520;margin-top:1px;"><strong>0.15% per annum</strong> · Billed quarterly · Next charge: <strong>Jul 1, 2026</strong></div>
                </div>
              </div>
              <div style="display:flex;gap:8px;">
                <button onclick="openTransactionPage('gold')" style="padding:7px 16px;border-radius:100px;border:1.5px solid rgba(200,150,46,.3);background:white;font-size:.75rem;font-weight:500;cursor:pointer;font-family:inherit;color:#8a6520;">Add gold</button>
                <button onclick="openTransactionPage('silver')" style="padding:7px 16px;border-radius:100px;border:1.5px solid rgba(200,150,46,.3);background:white;font-size:.75rem;font-weight:500;cursor:pointer;font-family:inherit;color:#8a6520;">Add silver</button>
                <button onclick="openStorageDetails()" style="padding:7px 16px;border-radius:100px;border:1.5px solid rgba(200,150,46,.3);background:white;font-size:.75rem;font-weight:500;cursor:pointer;font-family:inherit;color:#8a6520;">Storage details</button>
              </div>
            </div>

            <div class="vault-grid">
              <!-- Gold hero card -->
              <div class="vault-hero-card">
                <div class="vault-hero-inner">
                  <div class="vault-hero-badge"><div class="vault-hero-badge-dot"></div>Live · Secure Vault</div>
                  <div class="vault-hero-label">Total Gold Value</div>
                  <div class="vault-hero-val">$588,154</div>
                  <div class="vault-hero-chg">▲ +$16,540 (+2.9%) today</div>
                  <div class="vault-hero-meta">
                    <div class="vault-hero-meta-item"><div class="v">187 oz</div><div class="l">Allocated gold</div></div>
                    <div class="vault-hero-meta-item"><div class="v">$3,142/oz</div><div class="l">Spot price</div></div>
                    <div class="vault-hero-meta-item"><div class="v">99.99%</div><div class="l">Purity</div></div>
                  </div>
                </div>
              </div>

              <!-- Silver hero card -->
              <div class="vault-hero-card" style="background:linear-gradient(135deg,#1e3354 0%,#0C1A2E 100%);">
                <div class="vault-hero-inner">
                  <div class="vault-hero-badge"><div class="vault-hero-badge-dot" style="background:#94a3b8;"></div>Live · Secure Vault</div>
                  <div class="vault-hero-label">Total Silver Value</div>
                  <div class="vault-hero-val">$29,800</div>
                  <div class="vault-hero-chg" style="color:#94a3b8;">▲ +$320 (+1.1%) today</div>
                  <div class="vault-hero-meta">
                    <div class="vault-hero-meta-item"><div class="v">1,000 oz</div><div class="l">Allocated silver</div></div>
                    <div class="vault-hero-meta-item"><div class="v">$29.80/oz</div><div class="l">Spot price</div></div>
                    <div class="vault-hero-meta-item"><div class="v">99.9%</div><div class="l">Purity</div></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Gold chart -->
            <div class="vault-chart-card">
              <div class="vault-chart-header">
                <div>
                  <div class="vault-chart-title">Precious Metals Performance</div>
                  <div class="vault-chart-val">$617,954</div>
                  <div class="vault-chart-chg" style="color:var(--green)">▲ +$40,750 (7.1%) YTD</div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:10px;">
                  <div class="perf-time-tabs">
                    <button class="perf-time-tab active" onclick="vaultMetalsChartTab(this)">1D</button>
                    <button class="perf-time-tab" onclick="vaultMetalsChartTab(this)">1W</button>
                    <button class="perf-time-tab" onclick="vaultMetalsChartTab(this)">1M</button>
                    <button class="perf-time-tab" onclick="vaultMetalsChartTab(this)">3M</button>
                    <button class="perf-time-tab" onclick="vaultMetalsChartTab(this)">YTD</button>
                    <button class="perf-time-tab" onclick="vaultMetalsChartTab(this)">1Y</button>
                  </div>
                  <!-- Legend -->
                  <div style="display:flex;gap:14px;">
                    <div style="display:flex;align-items:center;gap:5px;font-size:.72rem;color:var(--ink-muted);">
                      <div style="width:20px;height:2px;background:#C8962E;border-radius:1px;"></div>Gold
                    </div>
                    <div style="display:flex;align-items:center;gap:5px;font-size:.72rem;color:var(--ink-muted);">
                      <div style="width:20px;height:2px;background:#64748b;border-radius:1px;"></div>Silver
                    </div>
                  </div>
                </div>
              </div>
              <canvas id="vaultMetalsChart" height="200" style="width:100%;display:block;"></canvas>
            </div>

            <!-- Gold holdings table -->
            <div class="vault-holdings-card">
              <div class="vault-holdings-head">
                <div class="vault-holdings-title">Vault Holdings — Precious Metals</div>
                <div style="font-size:.75rem;color:var(--ink-muted);">Fully insured · Audited</div>
              </div>
              <table class="vault-holdings-table">
                <thead><tr>
                  <th>Asset</th><th>Quantity</th><th>Spot Price</th><th>Market Value</th><th>24h Change</th><th>YTD</th>
                </tr></thead>
                <tbody>
                  <tr>
                    <td><div class="vault-asset-cell"><div class="vault-asset-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg></div><div><div class="vault-asset-name">Gold (XAU)</div><div class="vault-asset-sub">99.99% fine · LBMA certified</div></div></div></td>
                    <td>187 troy oz</td><td>$3,142.00</td><td><strong>$588,154</strong></td>
                    <td class="val-positive">▲ +$16,540</td><td class="val-positive">+7.2%</td>
                  </tr>
                  <tr>
                    <td><div class="vault-asset-cell"><div class="vault-asset-icon" style="background:#f0f4f8;color:#64748b;"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg></div><div><div class="vault-asset-name">Silver (XAG)</div><div class="vault-asset-sub">99.9% fine · LBMA certified</div></div></div></td>
                    <td>1,000 troy oz</td><td>$29.80</td><td><strong>$29,800</strong></td>
                    <td class="val-positive">▲ +$320</td><td class="val-positive">+4.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>



            <!-- ══ CRYPTO VAULT ══ -->
            </div><!-- end vsub-gold -->

            <!-- ══ CRYPTO SUB-PANEL ══ -->
            <div class="vault-sub" id="vsub-crypto">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
              <div style="font-size:.72rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-muted);">Crypto — Institutional Vault</div>
              <button onclick="openVaultTransfer()" style="padding:9px 20px;border-radius:100px;background:var(--ink);color:white;border:none;font-size:.8rem;font-weight:500;cursor:pointer;font-family:inherit;display:flex;align-items:center;gap:7px;flex-shrink:0;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="white" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                Transfer to Secure Vault
              </button>
            </div>

            <!-- Crypto hero card -->
            <div class="vault-hero-card crypto-card" style="margin-bottom:20px;">
              <div class="vault-hero-inner">
                <div class="vault-hero-badge"><div class="vault-hero-badge-dot"></div>Live · Secure Vault</div>
                <div class="vault-hero-label">Total Vault Value</div>
                <div class="vault-hero-val">$127,500</div>
                <div class="vault-hero-chg">▲ +$4,240 (+3.4%) today</div>
                <div class="vault-hero-meta">
                  <div class="vault-hero-meta-item"><div class="v">$250M+</div><div class="l">Insurance coverage</div></div>
                  <div class="vault-hero-meta-item"><div class="v">MPC</div><div class="l">Key security</div></div>
                  <div class="vault-hero-meta-item"><div class="v">SOC 2</div><div class="l">Certified</div></div>
                  <div class="vault-hero-meta-item"><div class="v">Brokerage</div><div class="l">Trading via</div></div>
                </div>
              </div>
            </div>

            <!-- Crypto chart -->
            <div class="vault-chart-card">
              <div class="vault-chart-header">
                <div>
                  <div class="vault-chart-title">Crypto Vault Performance</div>
                  <div class="vault-chart-val">$127,500</div>
                  <div class="vault-chart-chg" style="color:var(--green)">▲ +$30,720 (31.8%) YTD</div>
                </div>
                <div class="perf-time-tabs">
                  <button class="perf-time-tab active" onclick="vaultChartTab(this,'vaultCryptoChart')">1D</button>
                  <button class="perf-time-tab" onclick="vaultChartTab(this,'vaultCryptoChart')">1W</button>
                  <button class="perf-time-tab" onclick="vaultChartTab(this,'vaultCryptoChart')">1M</button>
                  <button class="perf-time-tab" onclick="vaultChartTab(this,'vaultCryptoChart')">3M</button>
                  <button class="perf-time-tab" onclick="vaultChartTab(this,'vaultCryptoChart')">YTD</button>
                  <button class="perf-time-tab" onclick="vaultChartTab(this,'vaultCryptoChart')">1Y</button>
                </div>
              </div>
              <canvas id="vaultCryptoChart" height="180" style="width:100%;display:block;"></canvas>
            </div>

            <!-- Crypto holdings table -->
            <div class="vault-holdings-card">
              <div class="vault-holdings-head">
                <div class="vault-holdings-title">Vault Holdings — Crypto</div>
              </div>
              <table class="vault-holdings-table">
                <thead><tr>
                  <th>Asset</th><th>Quantity</th><th>Price</th><th>Vault Value</th><th>24h</th><th>Location</th>
                </tr></thead>
                <tbody>
                  <tr>
                    <td><div class="vault-asset-cell"><div class="vault-asset-icon" style="background:#FFF7ED;color:#EA580C;"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg></div><div><div class="vault-asset-name">Bitcoin (BTC)</div><div class="vault-asset-sub">Held in secure cold custody</div></div></div></td>
                    <td>0.956 BTC</td><td>$93,407</td><td><strong>$89,317</strong></td>
                    <td class="val-negative">▼ -1.8%</td><td><span style="background:var(--green-pale);color:var(--green);padding:2px 8px;border-radius:100px;font-size:.7rem;font-weight:600;">Secure Vault</span></td>
                  </tr>
                  <tr>
                    <td><div class="vault-asset-cell"><div class="vault-asset-icon" style="background:#EEF2FF;color:#6366f1;"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div><div><div class="vault-asset-name">Ethereum (ETH)</div><div class="vault-asset-sub">Held in secure cold custody</div></div></div></td>
                    <td>12.04 ETH</td><td>$3,180</td><td><strong>$38,287</strong></td>
                    <td class="val-positive">▲ +1.8%</td><td><span style="background:var(--green-pale);color:var(--green);padding:2px 8px;border-radius:100px;font-size:.7rem;font-weight:600;">Secure Vault</span></td>
                  </tr>
                  <tr>
                    <td><div class="vault-asset-cell"><div class="vault-asset-icon" style="background:#f0fdf4;color:#16a34a;"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div><div class="vault-asset-name">Solana (SOL)</div><div class="vault-asset-sub">In trading account — not vaulted</div></div></div></td>
                    <td>0 SOL</td><td>$142</td><td><strong>—</strong></td>
                    <td>—</td><td><span style="background:var(--gold-pale);color:#8a6520;padding:2px 8px;border-radius:100px;font-size:.7rem;font-weight:600;">Trading Account</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Security info -->
            <div style="background:var(--ink);border-radius:var(--r-lg);padding:22px 24px;display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:20px;">
              <div><div style="font-size:.65rem;color:rgba(255,255,255,.4);letter-spacing:.1em;text-transform:uppercase;margin-bottom:5px;">Custody</div><div style="font-size:.88rem;font-weight:500;color:white;">Secure Custody</div></div>
              <div><div style="font-size:.65rem;color:rgba(255,255,255,.4);letter-spacing:.1em;text-transform:uppercase;margin-bottom:5px;">Insurance</div><div style="font-size:.88rem;font-weight:500;color:white;">$250M+</div></div>
              <div><div style="font-size:.65rem;color:rgba(255,255,255,.4);letter-spacing:.1em;text-transform:uppercase;margin-bottom:5px;">Key Security</div><div style="font-size:.88rem;font-weight:500;color:white;">MPC / HSM</div></div>
              <div><div style="font-size:.65rem;color:rgba(255,255,255,.4);letter-spacing:.1em;text-transform:uppercase;margin-bottom:5px;">Compliance</div><div style="font-size:.88rem;font-weight:500;color:white;">SOC 2 Type II</div></div>
            </div>

            </div><!-- end vsub-crypto -->

          </div><!-- end vault -->

          <div id="dbsec-settings" class="db-content" style="display:none;">
            <div class="page-header"><h1>Settings</h1><p>Manage your account, security and preferences.</p></div>
            <div class="sett-layout">
              <div>
                <div class="sett-nav-item active" id="snav-profile"       onclick="settTab('profile')"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Profile</div>
                <div class="sett-nav-item"        id="snav-notifications"  onclick="settTab('notifications')"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>Notifications</div>
                <div class="sett-nav-item"        id="snav-security"       onclick="settTab('security')"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Security</div>
                <div class="sett-nav-item"        id="snav-billing"        onclick="settTab('billing')"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>Billing</div>
                <div class="sett-nav-item"        id="snav-linked"         onclick="settTab('linked')"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>Linked Accounts</div>
                <div class="sett-nav-item"        id="snav-preferences"    onclick="settTab('preferences')"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>Preferences</div>
              </div>
              <div>
                <!-- PROFILE -->
                <div id="span-profile">
                  <div class="sett-section"><div class="sett-section-title">Personal Information</div>
                    <div class="sett-row"><div><div class="sett-row-label">Full name</div><div class="sett-row-sub">James Adeyemi</div></div><button class="sett-edit-btn" onclick="sm('name')">Edit</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Email address</div><div class="sett-row-sub"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b8d2d9d5ddcbf8d9dcddc1ddd5d196dbd7d5">[email&#160;protected]</a></div></div><button class="sett-edit-btn" onclick="sm('email')">Edit</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Phone number</div><div class="sett-row-sub">+1 (415) 555-0123</div></div><button class="sett-edit-btn" onclick="sm('phone')">Edit</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Date of birth</div><div class="sett-row-sub">March 14, 1985</div></div><button class="sett-edit-btn" onclick="sm('dob')">Edit</button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Address &amp; Tax Residency</div>
                    <div class="sett-row"><div><div class="sett-row-label">Residential address</div><div class="sett-row-sub">458 N 7th Street, San Jose, CA 95112</div></div><button class="sett-edit-btn" onclick="sm('address')">Edit</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Country of citizenship</div><div class="sett-row-sub">United States</div></div><button class="sett-edit-btn" onclick="sm('citizenship')">Edit</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Tax residency</div><div class="sett-row-sub">United States</div></div><button class="sett-edit-btn" onclick="sm('taxres')">Edit</button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Identity &amp; Verification</div>
                    <div class="sett-row"><div><div class="sett-row-label">KYC status</div><div class="sett-row-sub">Verified &middot; Jan 12, 2025</div></div><span style="font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;">Verified</span></div>
                    <div class="sett-row"><div><div class="sett-row-label">Accreditation</div><div class="sett-row-sub">Accredited Investor &middot; Net worth threshold met</div></div><span style="font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;">Confirmed</span></div>
                    <div class="sett-row"><div><div class="sett-row-label">SSN / Tax ID</div><div class="sett-row-sub">On file &middot; Encrypted</div></div><span style="font-size:.75rem;color:var(--ink-muted);">&bull;&bull;&bull;&bull;&bull;6742</span></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Danger Zone</div>
                    <div class="sett-row"><div><div class="sett-row-label">Close account</div><div class="sett-row-sub">Permanently delete your account and all data</div></div><button class="sett-edit-btn" style="color:#DC2626;border-color:#FCA5A5;" onclick="sm('closeaccount')">Close account</button></div>
                  </div>
                </div>
                <!-- NOTIFICATIONS -->
                <div id="span-notifications" style="display:none;">
                  <div class="sett-section"><div class="sett-section-title">Portfolio &amp; Investments</div>
                    <div class="sett-row"><div><div class="sett-row-label">Portfolio alerts</div><div class="sett-row-sub">Notify me when my portfolio moves more than 2%</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">New opportunities</div><div class="sett-row-sub">Alert me when deals match my investment profile</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Maturity reminders</div><div class="sett-row-sub">Remind me 30 days before T-Bills or loans mature</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Payout notices</div><div class="sett-row-sub">Notify me when income is credited</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Elia AI</div>
                    <div class="sett-row"><div><div class="sett-row-label">Weekly portfolio digest</div><div class="sett-row-sub">Performance summary and insights every Monday</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Rebalancing suggestions</div><div class="sett-row-sub">Nudged when allocation is off-target</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Market news alerts</div><div class="sett-row-sub">Breaking news affecting my holdings</div></div><button class="sett-toggle off" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Account &amp; Transactions</div>
                    <div class="sett-row"><div><div class="sett-row-label">Login from new device</div><div class="sett-row-sub">Email me when a new device signs in</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Large transaction alerts</div><div class="sett-row-sub">Notify me for transactions over $10,000</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Tax documents ready</div><div class="sett-row-sub">Notify me when annual tax forms are available</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Product updates</div><div class="sett-row-sub">New features and announcements from Aidi</div></div><button class="sett-toggle off" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                  </div>
                </div>
                <!-- SECURITY -->
                <div id="span-security" style="display:none;">
                  <div class="sett-section"><div class="sett-section-title">Sign-in Methods</div>
                    <div class="sett-row"><div><div class="sett-row-label">Magic link sign-in</div><div class="sett-row-sub">Sign in via a one-time email link</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Two-factor authentication</div><div class="sett-row-sub">Require a code from your phone on every login</div></div><button class="sett-toggle off" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Biometric login</div><div class="sett-row-sub">Use Face ID or fingerprint on supported devices</div></div><button class="sett-toggle off" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Session &amp; Access</div>
                    <div class="sett-row"><div><div class="sett-row-label">Session timeout</div><div class="sett-row-sub">Auto-logout after 30 minutes of inactivity</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Remember trusted devices</div><div class="sett-row-sub">Skip verification on trusted devices for 30 days</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Active sessions</div><div class="sett-row-sub">2 active sessions &middot; MacBook Pro, iPhone 15</div></div><button class="sett-edit-btn" onclick="sm('sessions')">View all</button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Transaction Security</div>
                    <div class="sett-row"><div><div class="sett-row-label">Confirm withdrawals by email</div><div class="sett-row-sub">Email confirmation required for all withdrawals</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Large transaction PIN</div><div class="sett-row-sub">Require PIN for transactions over $25,000</div></div><button class="sett-toggle off" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Recent Login Activity</div>
                    <div class="sett-row"><div><div class="sett-row-label">MacBook Pro &mdash; Chrome</div><div class="sett-row-sub">San Jose, CA &middot; Today at 1:42 AM</div></div><span style="font-size:.7rem;font-weight:600;padding:2px 8px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;">Current</span></div>
                    <div class="sett-row"><div><div class="sett-row-label">iPhone 15 &mdash; Safari</div><div class="sett-row-sub">San Jose, CA &middot; Yesterday at 9:15 PM</div></div><button class="sett-edit-btn" style="color:#DC2626;border-color:#FCA5A5;" onclick="sm('revoke_iphone')">Revoke</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">iPad Pro &mdash; Safari</div><div class="sett-row-sub">San Francisco, CA &middot; Apr 8 at 3:22 PM</div></div><button class="sett-edit-btn" style="color:#DC2626;border-color:#FCA5A5;" onclick="sm('revoke_ipad')">Revoke</button></div>
                  </div>
                </div>
                <!-- BILLING -->
                <div id="span-billing" style="display:none;">

                  <!-- Billing & Plan header -->
                  <div style="margin-bottom:20px;">
                    <div style="font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:400;color:var(--ink);margin-bottom:4px;">Billing &amp; Plan</div>
                    <div style="font-size:.82rem;color:var(--ink-muted);font-weight:300;">Manage your subscription, view charges, and update payment method.</div>
                  </div>

                  <!-- Plan Cards -->
                  <div class="sett-section" style="padding:20px;">
                    <div style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:16px;">Current Plan</div>
                    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;" id="planCardsGrid">

                      <!-- Starter (Current) -->
                      <div class="billing-plan-card active" onclick="selectPlan('starter')" id="plan-starter" style="border:2px solid var(--ink);border-radius:var(--r-lg);padding:22px 20px;cursor:pointer;transition:all .2s;position:relative;background:var(--white);">
                        <div style="font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Starter</div>
                        <div style="font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:400;color:var(--ink);margin-bottom:2px;">Free</div>
                        <div style="font-size:.75rem;color:var(--ink-muted);margin-bottom:18px;">Forever free</div>
                        <div style="display:flex;flex-direction:column;gap:7px;font-size:.78rem;color:var(--ink-soft);">
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> Up to 5 clients</div>
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> Core portfolio tools</div>
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> Elia chat (standard)</div>
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--red);font-weight:700;">&#10007;</span> Entity requests</div>
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--red);font-weight:700;">&#10007;</span> Tax document mgmt</div>
                        </div>
                      </div>

                      <!-- Growth -->
                      <div class="billing-plan-card" onclick="selectPlan('growth')" id="plan-growth" style="border:2px solid var(--cream-dark);border-radius:var(--r-lg);padding:22px 20px;cursor:pointer;transition:all .2s;position:relative;background:var(--white);">
                        <div style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:var(--ink);color:white;font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:3px 12px;border-radius:100px;">Popular</div>
                        <div style="font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Growth</div>
                        <div style="display:flex;align-items:baseline;gap:2px;margin-bottom:2px;"><span style="font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:400;color:var(--ink);">$29</span></div>
                        <div style="font-size:.75rem;color:var(--ink-muted);margin-bottom:18px;">per month</div>
                        <div style="display:flex;flex-direction:column;gap:7px;font-size:.78rem;color:var(--ink-soft);">
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> Up to 25 clients</div>
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> Entity requests</div>
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> Tax document mgmt</div>
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> Compliance tracker</div>
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> Priority Elia access</div>
                        </div>
                      </div>

                      <!-- Family Office -->
                      <div class="billing-plan-card" onclick="selectPlan('family')" id="plan-family" style="border:2px solid var(--cream-dark);border-radius:var(--r-lg);padding:22px 20px;cursor:pointer;transition:all .2s;position:relative;background:var(--white);">
                        <div style="font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Family Office</div>
                        <div style="display:flex;align-items:baseline;gap:2px;margin-bottom:2px;"><span style="font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:400;color:var(--ink);">$99</span></div>
                        <div style="font-size:.75rem;color:var(--ink-muted);margin-bottom:18px;">per month</div>
                        <div style="display:flex;flex-direction:column;gap:7px;font-size:.78rem;color:var(--ink-soft);">
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> Unlimited clients</div>
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> All Growth features</div>
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> Private Markets / SPV</div>
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> Dedicated account mgr</div>
                          <div style="display:flex;align-items:center;gap:6px;"><span style="color:var(--green);font-weight:700;">&#10003;</span> Custom integrations</div>
                        </div>
                      </div>

                    </div>

                    <!-- Action buttons -->
                    <div style="display:flex;gap:10px;margin-top:20px;">
                      <button onclick="sm('upgrade')" style="padding:11px 28px;border-radius:100px;background:var(--ink);color:white;border:none;font-size:.84rem;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s;" onmouseover="this.style.background='var(--ink-mid)'" onmouseout="this.style.background='var(--ink)'">Upgrade Plan</button>
                      <button onclick="sm('sales')" style="padding:11px 28px;border-radius:100px;background:var(--white);color:var(--ink);border:1.5px solid var(--cream-dark);font-size:.84rem;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='var(--white)'">Talk to Sales</button>
                    </div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Payment Source</div>
                    <div class="sett-row"><div><div class="sett-row-label">All fees deducted from</div><div class="sett-row-sub">Aidi Cash Wallet &mdash; automatically</div></div><button class="sett-edit-btn" onclick="sm('paymethod')">Change</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Cash Wallet balance</div><div class="sett-row-sub">Available for fees and investments</div></div><span style="font-size:.78rem;font-weight:600;color:var(--ink);">$318,000</span></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Billing History</div>
                    <div class="sett-row"><div><div class="sett-row-label">Advisory fee &mdash; Q1 2026</div><div class="sett-row-sub">Jan 1, 2026</div></div><span style="font-size:.78rem;color:var(--ink-muted);">&minus;$1,512</span></div>
                    <div class="sett-row"><div><div class="sett-row-label">Vault storage &mdash; Q1 2026</div><div class="sett-row-sub">Jan 1, 2026 &middot; Precious metals</div></div><span style="font-size:.78rem;color:var(--ink-muted);">&minus;$231</span></div>
                    <div class="sett-row"><div><div class="sett-row-label">Entity formation &mdash; Adeyemi Family Office LLC</div><div class="sett-row-sub">Apr 8, 2026</div></div><span style="font-size:.78rem;color:var(--ink-muted);">&minus;$1,000</span></div>
                    <div style="padding:12px 22px;"><button class="sett-edit-btn" onclick="sm('statement')">Download full statement</button></div>
                  </div>
                </div>
                <!-- LINKED ACCOUNTS -->
                <div id="span-linked" style="display:none;">
                  <div class="sett-section"><div class="sett-section-title">Investment &amp; Trading</div>
                    <div class="sett-row"><div><div class="sett-row-label">Investment Account</div><div class="sett-row-sub">Brokerage &middot; Equities &amp; ETFs</div></div><span style="font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;">Connected</span></div>
                    <div class="sett-row"><div><div class="sett-row-label">Crypto Account</div><div class="sett-row-sub">Digital assets &middot; BTC, ETH</div></div><span style="font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;">Connected</span></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Cash &amp; Banking</div>
                    <div class="sett-row"><div><div class="sett-row-label">Aidi Cash Wallet</div><div class="sett-row-sub">FDIC-insured &middot; $318,000 balance</div></div><span style="font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;">Active</span></div>
                    <div class="sett-row"><div><div class="sett-row-label">Chase Bank</div><div class="sett-row-sub">Checking &middot;&middot;&middot;4821 &middot; For wire transfers</div></div><button class="sett-edit-btn" onclick="sm('managebank')">Manage</button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Add bank account</div><div class="sett-row-sub">Connect another account for deposits or withdrawals</div></div><button class="sett-edit-btn" onclick="sm('addbank')">Connect</button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Vault &amp; Custody</div>
                    <div class="sett-row"><div><div class="sett-row-label">Precious Metals Vault</div><div class="sett-row-sub">187 oz gold &middot; 1,000 oz silver &middot; Insured</div></div><span style="font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;">Connected</span></div>
                    <div class="sett-row"><div><div class="sett-row-label">Cold Crypto Custody</div><div class="sett-row-sub">Multi-sig &middot; 0.95 BTC secured</div></div><span style="font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:100px;background:#ECFDF5;color:#1A7A5E;">Connected</span></div>
                  </div>
                </div>
                <!-- PREFERENCES -->
                <div id="span-preferences" style="display:none;">
                  <div class="sett-section"><div class="sett-section-title">Display &amp; Localisation</div>
                    <div class="sett-row"><div><div class="sett-row-label">Currency display</div><div class="sett-row-sub">Primary currency shown across the platform</div></div><select style="padding:5px 10px;border-radius:8px;border:1.5px solid var(--cream-dark);font-size:.8rem;color:var(--ink);background:white;cursor:pointer;font-family:inherit;"><option selected>USD</option><option>GBP</option><option>NGN</option><option>EUR</option></select></div>
                    <div class="sett-row"><div><div class="sett-row-label">Date format</div><div class="sett-row-sub">How dates appear across the platform</div></div><select style="padding:5px 10px;border-radius:8px;border:1.5px solid var(--cream-dark);font-size:.8rem;color:var(--ink);background:white;cursor:pointer;font-family:inherit;"><option selected>MM/DD/YYYY</option><option>DD/MM/YYYY</option></select></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Elia AI Behaviour</div>
                    <div class="sett-row"><div><div class="sett-row-label">Proactive suggestions</div><div class="sett-row-sub">Elia surfaces ideas based on your portfolio</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Risk-aware recommendations</div><div class="sett-row-sub">Elia factors in your stated risk tolerance</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Include private markets</div><div class="sett-row-sub">Elia includes illiquid positions in analysis</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Investment Defaults</div>
                    <div class="sett-row"><div><div class="sett-row-label">Auto-roll T-Bills on maturity</div><div class="sett-row-sub">Automatically reinvest when T-Bills mature</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Confirm before investing</div><div class="sett-row-sub">Show a review step before any investment is submitted</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                  </div>
                  <div class="sett-section"><div class="sett-section-title">Privacy</div>
                    <div class="sett-row"><div><div class="sett-row-label">Anonymous usage analytics</div><div class="sett-row-sub">Help improve Aidi by sharing anonymous data</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                    <div class="sett-row"><div><div class="sett-row-label">Personalised recommendations</div><div class="sett-row-sub">Allow Aidi to tailor suggestions using your activity</div></div><button class="sett-toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')"><div class="sett-toggle-knob"></div></button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <!-- ── Legal disclaimer ── -->
            <div style="padding:0 28px 32px;max-width:780px;margin:0 auto;width:100%;box-sizing:border-box;">
              <div style="padding-top:20px;font-size:.72rem;color:var(--ink-muted);line-height:1.8;border-top:1px solid var(--cream-mid);">
                <p style="font-weight:600;margin-bottom:8px;">Disclaimer</p>
                <p style="margin-bottom:8px;">Aidi is a technology company that provides access to financial tools, insights, and infrastructure. Aidi and its affiliates are not broker-dealers, custodians, or registered investment advisors.</p>
                <p style="margin-bottom:8px;">Wealth management and advisory services are offered through affiliated entities and in partnership with licensed third parties. In the United States, advisory services are provided by Aidi Ventures LLC and/or Aidi Wealth LLC in partnership with registered investment advisors. In Nigeria, services are delivered through Aidi Technology Limited, subject to applicable local regulations.</p>
                <p style="margin-bottom:8px;">Securities brokerage and related services are provided by third-party partners, including Alpaca Securities LLC (member FINRA/SIPC). Cryptocurrency trading services are offered through Alpaca Crypto LLC, while digital asset custody services are provided by regulated custodians such as BitGo Trust entities. Aidi does not custody client assets.</p>
                <p style="margin-bottom:8px;">Wallet and cash management services are provided through third-party banking partners, including Choice Financial Group and Column N.A., Members FDIC. FDIC deposit insurance protects against the failure of an insured bank and does not protect against investment losses.</p>
                <p style="margin-bottom:8px;">All investments involve risk, including the potential loss of principal. Past performance is not indicative of future results. Cryptocurrency and digital assets are highly speculative and subject to market volatility, regulatory uncertainty, and cybersecurity risks.</p>
                <p style="margin-bottom:8px;">Information presented on this platform is for informational purposes only and should not be construed as investment, legal, or tax advice, or as an offer or solicitation in any jurisdiction where such services are not authorized. Availability of products and services may vary by location and applicable regulations.</p>
                <p style="margin-bottom:8px;">Aidi aggregates data from third-party providers and partners; while we strive for accuracy, we do not guarantee completeness or reliability. Visuals, trademarks, and references are for illustrative purposes only and do not imply endorsement.</p>
                <p>Short-term rental properties made available through this platform are licensed and managed under Aidi Haven LLC. These property investment opportunities are currently only available and operating in San Jose, California. Availability may expand to additional markets in future.</p>
              </div>
            </div>
        
        </div><!-- end db-main -->

        <!-- ── Right Panel ── -->
        <div class="db-right">
          <div class="rp-section">
            <div class="rp-manage-btn" onclick="openWalletTransfer()">
              <span>Manage Accounts</span>
              <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
            <div class="rp-section-title">Balances</div>
            <div class="rp-account-row" onclick="openTopupModal('cash')" style="cursor:pointer;border-radius:10px;padding:10px 4px;transition:background .15s;" onmouseover="this.style.background='#F5F2EC'" onmouseout="this.style.background=''">
              <div><div class="rp-account-label">Cash Balance</div><div class="rp-account-sub">Aidi Cash Wallet</div></div>
              <div style="text-align:right"><div class="rp-account-val">$318,000</div><div class="rp-account-chg" style="color:#1A7A5E">+5.18%</div></div>
            </div>
            <div class="rp-account-row" onclick="openTopupModal('investment')" style="cursor:pointer;border-radius:10px;padding:10px 4px;transition:background .15s;" onmouseover="this.style.background='#F5F2EC'" onmouseout="this.style.background=''">
              <div><div class="rp-account-label">Investment Account</div><div class="rp-account-sub">Investment Account</div></div>
              <div style="text-align:right"><div class="rp-account-val">$684,200</div><div class="rp-account-chg" style="color:#1A7A5E">+12.4%</div></div>
            </div>
            <div class="rp-account-row" onclick="openTopupModal('crypto')" style="cursor:pointer;border-radius:10px;padding:10px 4px;transition:background .15s;" onmouseover="this.style.background='#F5F2EC'" onmouseout="this.style.background=''">
              <div><div class="rp-account-label">Crypto Balance</div><div class="rp-account-sub">Crypto Account</div></div>
              <div style="text-align:right"><div class="rp-account-val">$127,500</div><div class="rp-account-chg" style="color:#1A7A5E">+31.7%</div></div>
            </div>
          </div>

          <div class="rp-section">
            <div class="rp-section-title">Holdings <span style="font-size:.7rem;font-weight:400;color:var(--ink-muted);letter-spacing:0;text-transform:none;">(Stocks, ETFs & Crypto)</span></div>
            <div class="rp-holding-row" onclick="openAssetPanel('spy')" style="cursor:pointer">
              <div><div class="rp-holding-name">SPY</div><div class="rp-holding-shares">34 shares</div></div>
              <div><div class="rp-holding-val">$284,000</div><div class="rp-holding-chg" style="color:var(--green)">▲ 12.1%</div></div>
            </div>
            <div class="rp-holding-row" onclick="openAssetPanel('aapl')" style="cursor:pointer">
              <div><div class="rp-holding-name">AAPL</div><div class="rp-holding-shares">15 shares</div></div>
              <div><div class="rp-holding-val">$107,220</div><div class="rp-holding-chg" style="color:var(--green)">▲ 18.4%</div></div>
            </div>
            <div class="rp-holding-row" onclick="openAssetPanel('btc')" style="cursor:pointer">
              <div><div class="rp-holding-name">BTC</div><div class="rp-holding-shares">0.95 BTC</div></div>
              <div><div class="rp-holding-val">$89,250</div><div class="rp-holding-chg" style="color:var(--green)">▲ 41.2%</div></div>
            </div>
            <div class="rp-holding-row" onclick="openAssetPanel('gold')" style="cursor:pointer">
              <div><div class="rp-holding-name">IAU</div><div class="rp-holding-shares">187 oz allocated</div></div>
              <div><div class="rp-holding-val">$218,000</div><div class="rp-holding-chg" style="color:var(--green)">▲ 7.1%</div></div>
            </div>
          </div>

          <div class="rp-elia-card">
            <div class="rp-elia-header">
              <div class="rp-elia-dot"></div>
              <div class="rp-elia-name">Elia AI · Latest Insight</div>
            </div>
            <div class="rp-elia-insight">Your T-Bill position exceeds your liquidity target by ~$90K. Redeploying into a 6-month ladder could improve annual yield by an estimated $2,340.</div>
            <button class="rp-elia-btn" onclick="dbNav('ai')">Open full AI advisor →</button>
          </div>
        </div>

      </div><!-- end db-body -->

      <!-- ── Ticker Bar ── -->
      <div class="db-ticker">
        <div class="db-ticker-track">
          <div class="db-ticker-item"><span class="db-ticker-item-name">S&P 500</span><span class="db-ticker-item-val">6,521.30</span><span class="db-ticker-item-chg dn">▼ 0.25%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">NASDAQ</span><span class="db-ticker-item-val">20,441.22</span><span class="db-ticker-item-chg dn">▼ 0.38%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Bitcoin</span><span class="db-ticker-item-val">$93,407</span><span class="db-ticker-item-chg up">▲ 3.33%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Gold</span><span class="db-ticker-item-val">$3,142/oz</span><span class="db-ticker-item-chg up">▲ 0.52%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">T-Bill 90D</span><span class="db-ticker-item-val">5.18%</span><span class="db-ticker-item-chg dn">▼ 0.02%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Fed Rate</span><span class="db-ticker-item-val">5.25%</span><span class="db-ticker-item-chg">Unchanged</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">ETH</span><span class="db-ticker-item-val">$3,180</span><span class="db-ticker-item-chg up">▲ 1.82%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">S&P 500</span><span class="db-ticker-item-val">6,521.30</span><span class="db-ticker-item-chg dn">▼ 0.25%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">NASDAQ</span><span class="db-ticker-item-val">20,441.22</span><span class="db-ticker-item-chg dn">▼ 0.38%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Bitcoin</span><span class="db-ticker-item-val">$93,407</span><span class="db-ticker-item-chg up">▲ 3.33%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Gold</span><span class="db-ticker-item-val">$3,142/oz</span><span class="db-ticker-item-chg up">▲ 0.52%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">T-Bill 90D</span><span class="db-ticker-item-val">5.18%</span><span class="db-ticker-item-chg dn">▼ 0.02%</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">Fed Rate</span><span class="db-ticker-item-val">5.25%</span><span class="db-ticker-item-chg">Unchanged</span></div>
          <div class="db-ticker-item"><span class="db-ticker-item-name">ETH</span><span class="db-ticker-item-val">$3,180</span><span class="db-ticker-item-chg up">▲ 1.82%</span></div>
        </div>
      </div>


      <!-- ── Mobile Nav Overlay ── -->
      <div class="mobile-nav-overlay" id="mobileNavOverlay" onclick="dbCloseMobileNav()"></div>

      <!-- ── Mobile Nav Drawer ── -->
      <nav class="mobile-nav-drawer" id="mobileNavDrawer">
        <div class="mobile-nav-header">
          <div class="mobile-nav-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25675.8 23448.1" width="26" height="24" style="display:block;">
      <defs></defs>
      <g>
        <path class="fm0" d="M23266.6 14962.5c7.4,9.7 17.8,11.9 21.6,29.5l466.9 1086.6c251.8,922.3 129.4,1643.7 -247.7,2482.8l-998.8 1178.4c-246.2,185.5 -509.8,353.6 -796.5,463.1 -1150,439 -2154.1,347.4 -3203.2,-293.6l-464 -365.1c-26.8,-151.2 -762.4,-673.1 -882.4,-768.7 -1008.7,-803.6 -2339.6,-1916.5 -3326.1,-2668.3l-2116.4 -1701.8c-863.1,-678 -2253.6,-1912.9 -3191.5,-2383 -545.5,-273.4 -1354.2,-522.4 -1987.2,-571 -265.2,-20.3 -603,-0.7 -876.9,-2.3 -1194,-6.9 -2484.2,562.2 -3398.3,1259.8 -1177.7,898.8 -1773.4,2029.9 -2130.6,3443.9 -315.9,1251 -66.6,3148.9 610.9,4262.5 458.3,753.3 879,1293.4 1602,1834.4 2691.1,2013.6 6325,1431.2 8302.2,-1309 473.8,-656.6 888.8,-1600 970.6,-2453.8 -131.5,-113.5 95,-426.5 -186.2,-776 -161.4,-200.5 -256.7,-312.4 -570.7,-394 -380.7,-98.9 -892.7,104.4 -1023.7,607.4 -31.5,120.8 16,276.6 -40.1,130.8 -74.1,88.8 -95.1,327.9 -118.6,428 -40.3,172.3 -74.9,291.6 -126.8,445.8 -1135.2,3371.5 -5999.1,3615.3 -7403.4,81.1 -1005,-2529.4 699.1,-5139.3 2930.2,-5585.2 1586.9,-317.2 2581.3,157.2 3490,883.1 1705.7,1362.6 3389.2,2698.8 5084.7,4078.8l1885.4 1512.7c113.1,95.5 199.5,170.7 312.2,260.5 1099,875.3 1730.4,1607.4 3173.3,1981.2 1688.2,437.3 3294.9,3.6 4517.5,-905.8l609.3 -536.1c119.3,-118.1 160.5,-190.9 267.2,-305.6 264.9,-284.7 513.3,-672.9 690.4,-1027.8 837.4,-1679 737.9,-3805.9 -272.3,-5480.3l-1580.9 -2428.2c-82.9,-123.7 -143.5,-235.1 -220.9,-351.8 -305,-459.3 -597.9,-917.5 -909.2,-1381.7 -159.7,-238.1 -288.5,-452.6 -450.4,-695l-4741.2 -7247.8c-330,-374.6 -432.1,-510.9 -875.7,-842.4l-711 -434.5c-272,-136.9 -518.7,-232.2 -827.1,-318.3 -998.4,-278.7 -2060.2,-235.3 -2983.8,71.1 -839.4,278.6 -1484.1,764.8 -2066.7,1369.7 -326.2,338.6 -888.1,1282.6 -1151.3,1712.3l-3317.8 5273c-142.9,241.7 -324.3,435.1 -344.3,791 -46.1,819 1120.9,1523.4 1838.3,397.5l1312.8 -2085.3c151.2,-235.8 299.5,-466.4 451.2,-694.2l1334.2 -2102.2c371,-621.2 1148.7,-1925.5 1681,-2328 99.4,-75.2 215.7,-173.4 331.9,-240.8 489.2,-283.6 1029.3,-506.2 1843.4,-444 988.5,75.6 1636.1,577.8 2124.6,1311.7l5185.9 7986.7c81.5,133.7 145,211.7 225.2,347.5 149.5,253.3 300.4,450.8 447.8,697.7l1754.8 2672.5c68.9,65.2 -6,35.2 76.2,40.4z"/>
        <path class="fm1" d="M18044.9 19544.1l464 365.1c1049.1,640.9 2053.2,732.6 3203.2,293.6 286.7,-109.5 550.3,-277.6 796.5,-463.1l998.8 -1178.4c377.2,-839.1 499.6,-1560.5 247.7,-2482.8l-466.9 -1086.6c-3.9,-17.6 -14.2,-19.8 -21.6,-29.5 37.8,239.3 289.8,559.4 441.8,1161.6 277.9,1100.8 51.2,2140.9 -662.1,3008.8 -941.4,1145.5 -2482.5,1652.3 -3969.2,1011.5 -239.7,-103.3 -321.6,-130.4 -523.3,-278.5 -130,-95.5 -381.3,-297.1 -508.9,-321.9z"/>
        <path class="fm1" d="M9800.6 18055c56,145.8 8.6,-9.9 40.1,-130.8 131,-503 643.1,-706.3 1023.7,-607.4 314,81.6 409.3,193.5 570.7,394 281.2,349.5 54.7,662.6 186.2,776 0,-469.5 22,-733 -374.5,-1050.1 -69,-55.2 -228.1,-141.8 -327.9,-168.5 -582,-155.2 -1173.2,337.8 -1118.3,786.7z"/>
      </g>
    </svg>
          </div>
          <button class="mobile-nav-close" onclick="dbCloseMobileNav()">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="mobile-nav-section-label">Overview</div>
        <div class="mobile-nav-item active" id="mnav-home" onclick="mobileNavTo('home')">
          <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Home
        </div>
        <div class="mobile-nav-item" id="mnav-portfolio" onclick="mobileNavTo('portfolio')">
          <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          Portfolio
        </div>
        <div class="mobile-nav-item" id="mnav-opps" onclick="mobileNavTo('opps')">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Opportunities
          <span class="mobile-nav-badge">4</span>
        </div>

        <div class="mobile-nav-section-label">Intelligence</div>
        <div class="mobile-nav-item" id="mnav-ai" onclick="mobileNavTo('ai')">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 0 1 10 10c0 3.5-1.8 6.6-4.5 8.5"/><path d="M12 2a10 10 0 0 0-10 10c0 3.5 1.8 6.6 4.5 8.5"/></svg>
          Elia AI Advisor
        </div>

        <div class="mobile-nav-section-label">Management</div>
        <div class="mobile-nav-item" id="mnav-entities" onclick="mobileNavTo('entities')">
          <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          Entities
        </div>

        <div class="mobile-nav-section-label">Account</div>
        <div class="mobile-nav-item" id="mnav-vault" onclick="mobileNavTo('vault')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="4"/><path d="M12 8v1M12 15v1M8 12h1M15 12h1"/></svg>
          Vault
        </div>

        <div class="mobile-nav-section-label">Account</div>
        <div class="mobile-nav-item" id="mnav-settings" onclick="mobileNavTo('settings')">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          Settings
        </div>

        <div class="mobile-nav-user">
          <div class="mobile-nav-user-avatar">JA</div>
          <div>
            <div class="mobile-nav-user-name">James Adeyemi</div>
            <div class="mobile-nav-user-plan">Private Office</div>
          </div>
        </div>
      </nav>


      <!-- ── Asset Detail Panel ── -->
      <div class="asset-panel-overlay" id="assetPanelOverlay" onclick="closeAssetPanel()"></div>
      <div class="asset-panel" id="assetPanel">
        <div class="ap-header">
          <div class="ap-header-left">
            <div class="ap-ticker" id="apTicker">SPY</div>
            <div class="ap-name" id="apName">S&P 500 ETF</div>
            <div class="ap-sub" id="apSub">US Large Cap · Brokerage</div>
          </div>
          <button class="ap-close" onclick="closeAssetPanel()">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="ap-price-section">
          <div class="ap-price" id="apPrice">$284,000</div>
          <div class="ap-price-change" id="apChange" style="color:var(--green)">▲ $31,240 (12.1%) this year</div>
          <div class="ap-price-meta" id="apMeta">
            <div class="ap-price-meta-item"><div class="v">$8,353</div><div class="l">Per share</div></div>
            <div class="ap-price-meta-item"><div class="v">34</div><div class="l">Shares held</div></div>
            <div class="ap-price-meta-item"><div class="v">+0.8%</div><div class="l">Today</div></div>
            <div class="ap-price-meta-item"><div class="v">Investment Account</div><div class="l">Custodian</div></div>
          </div>
        </div>

        <div class="ap-chart-section">
          <div class="ap-time-tabs">
            <button class="ap-time-tab active" onclick="apSwitchTab(this)">1D</button>
            <button class="ap-time-tab" onclick="apSwitchTab(this)">1W</button>
            <button class="ap-time-tab" onclick="apSwitchTab(this)">1M</button>
            <button class="ap-time-tab" onclick="apSwitchTab(this)">3M</button>
            <button class="ap-time-tab" onclick="apSwitchTab(this)">YTD</button>
            <button class="ap-time-tab" onclick="apSwitchTab(this)">1Y</button>
            <button class="ap-time-tab" onclick="apSwitchTab(this)">MAX</button>
          </div>
          <canvas id="apChart" height="140" style="width:100%;display:block;"></canvas>
        </div>

        <div class="ap-body">
          <div class="ap-section-title">Your Position</div>
          <div class="ap-position" id="apPosition">
            <div class="ap-position-title">Holdings Summary</div>
            <div class="ap-position-row"><span class="ap-position-label">Market value</span><span class="ap-position-value">$284,000</span></div>
            <div class="ap-position-row"><span class="ap-position-label">Total return</span><span class="ap-position-value up">+$31,240 (12.1%)</span></div>
            <div class="ap-position-row"><span class="ap-position-label">Avg. cost basis</span><span class="ap-position-value">$252,760</span></div>
            <div class="ap-position-row"><span class="ap-position-label">Portfolio weight</span><span class="ap-position-value">15.4%</span></div>
          </div>

          <div class="ap-section-title">Key Statistics</div>
          <div class="ap-stats-grid" id="apStats">
            <div class="ap-stat"><div class="k">Market Cap</div><div class="v">$537B</div></div>
            <div class="ap-stat"><div class="k">P/E Ratio</div><div class="v">22.4x</div></div>
            <div class="ap-stat"><div class="k">Dividend yield</div><div class="v">1.31%</div></div>
            <div class="ap-stat"><div class="k">52W High</div><div class="v">$610.78</div></div>
            <div class="ap-stat"><div class="k">52W Low</div><div class="v">$481.80</div></div>
            <div class="ap-stat"><div class="k">Avg. volume</div><div class="v">83.2M</div></div>
            <div class="ap-stat"><div class="k">Beta</div><div class="v">1.00</div></div>
            <div class="ap-stat"><div class="k">Expense ratio</div><div class="v">0.09%</div></div>
          </div>

          <div class="ap-section-title">About</div>
          <div class="ap-about" id="apAbout">The SPDR S&P 500 ETF Trust tracks the S&P 500 Index, providing broad exposure to large-cap U.S. equities across all 11 GICS sectors. It is one of the most liquid and widely-held investment vehicles globally, suitable as a core equity allocation.</div>

          <div class="ap-section-title">Elia AI Insight</div>
          <div class="ap-elia" id="apElia">
            <div class="ap-elia-header"><div class="ap-elia-dot"></div><div class="ap-elia-label">Elia Intelligence</div></div>
            <div class="ap-elia-text" id="apEliaText">Your SPY position represents 15.4% of your portfolio — within your target range. However, combined with your other U.S. equity holdings, your total U.S. large-cap exposure approaches 62%. Consider diversifying into international or factor-based ETFs to reduce concentration risk.</div>
          </div>
        </div>

        <div class="ap-footer">
          <button class="ap-footer-btn secondary" onclick="closeAssetPanel()">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
            Back
          </button>
          <button class="ap-footer-btn primary" id="apViewBrokerBtn" onclick="openTransactionPage(currentAssetId)">
            View in broker →
          </button>
        </div>
      </div>


      <!-- ── News Detail Modal ── -->
      <div class="news-modal-overlay" id="newsModalOverlay" onclick="closeNewsModal()"></div>
      <div class="news-modal" id="newsModal">
        <div class="nm-header">
          <div class="nm-source-row">
            <span class="nm-source-badge" id="nmSource">Barron's</span>
            <span class="nm-dot"></span>
            <span class="nm-time" id="nmTime">11m ago</span>
          </div>
          <button class="nm-close" onclick="closeNewsModal()">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="nm-body">
          <div class="nm-hero-img" id="nmHeroImg"></div>
          <h2 class="nm-headline" id="nmHeadline"></h2>
          <div class="nm-ticker-row">
            <span class="nm-ticker" id="nmTicker"></span>
            <span class="nm-ticker-change" id="nmTickerChange"></span>
          </div>
          <div class="nm-summary-label">Summary</div>
          <div class="nm-summary" id="nmSummary"></div>
          <div class="nm-elia-box">
            <div class="nm-elia-header">
              <div class="nm-elia-dot"></div>
              <div class="nm-elia-label">Elia · Portfolio Relevance</div>
            </div>
            <div class="nm-elia-text" id="nmElia"></div>
          </div>
          <div class="nm-summary-label">Key Facts</div>
          <div class="nm-key-facts" id="nmFacts"></div>
        </div>
        <div class="nm-footer">
          <a class="nm-read-more" id="nmReadMore" href="#" target="_blank" rel="noopener">
            Read full article
            <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 0 1 1h4"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
          <div class="nm-disclaimer">Aidi curates public news for informational purposes only. This is not investment advice.</div>
        </div>
      </div>


      <!-- ── Topup Modal ── -->
      <div class="topup-overlay" id="topupOverlay" onclick="closeTopupModal()"></div>
      <div class="topup-modal" id="topupModal">

        <div class="tum-header">
          <div>
            <div class="tum-title" id="tumTitle">Top Up</div>
            <div class="tum-sub" id="tumSub">Add funds to your account</div>
          </div>
          <button class="tum-close" onclick="closeTopupModal()">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="tum-body">

          <!-- Balance strip -->
          <div class="tum-balance-strip">
            <div>
              <div class="tum-balance-label" id="tumBalLabel">Current Balance</div>
              <div class="tum-balance-val" id="tumBalVal">$318,000</div>
            </div>
            <div class="tum-balance-icon" id="tumBalIcon">
              <svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            </div>
          </div>

          <!-- ══════════════ CASH BALANCE PANELS ══════════════ -->
          <div id="tum-cash-content" style="display:none;">
            <div class="tum-method-tabs">
              <button class="tum-method-tab active" id="cashTab-card" onclick="tumSwitchTab('cash','card')">
                <svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                Card
              </button>
              <button class="tum-method-tab" id="cashTab-wire" onclick="tumSwitchTab('cash','wire')">
                <svg viewBox="0 0 24 24"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Wire Transfer
              </button>
            </div>

            <!-- Card panel -->
            <div class="tum-panel active" id="cashPanel-card">
              <div class="tum-info-box">💳 Funds deposited via card are available instantly. A 1.5% processing fee applies on card deposits.</div>
              <div class="tum-form-group">
                <label class="tum-form-label">Amount (USD)</label>
                <input class="tum-form-input" type="number" placeholder="0.00" min="10" id="cashCardAmount">
              </div>
              <div class="tum-form-group">
                <label class="tum-form-label">Card number</label>
                <input class="tum-form-input" type="text" placeholder="1234 5678 9012 3456" maxlength="19">
              </div>
              <div class="tum-form-row">
                <div class="tum-form-group">
                  <label class="tum-form-label">Expiry</label>
                  <input class="tum-form-input" type="text" placeholder="MM / YY" maxlength="7">
                </div>
                <div class="tum-form-group">
                  <label class="tum-form-label">CVV</label>
                  <input class="tum-form-input" type="text" placeholder="•••" maxlength="4">
                </div>
              </div>
              <div class="tum-form-group">
                <label class="tum-form-label">Cardholder name</label>
                <input class="tum-form-input" type="text" placeholder="James Adeyemi">
              </div>
              <button class="tum-btn-primary" onclick="tumSubmitCard('cash')">Deposit funds</button>
              <div class="tum-success-box" id="cashCardSuccess">✓ Deposit initiated. Funds will appear in your Cash Balance within minutes.</div>
              <div class="tum-disclaimer">Deposits are processed securely. Card payments include a 1.5% fee. Aidi does not store card details.</div>
            </div>

            <!-- Wire panel -->
            <div class="tum-panel" id="cashPanel-wire">
              <div class="tum-info-box">🏦 Wire transfers are free of charge and typically arrive within 1–2 business days. Use the details below to initiate from your bank.</div>
              <div class="tum-wire-box" id="wireDetailsBox">
                <div class="tum-wire-section-head">Beneficiary</div>
                <div class="tum-wire-row"><span class="tum-wire-key">Beneficiary name</span><span class="tum-wire-val">Aidi Ventures LLC</span></div>
                <div class="tum-wire-row"><span class="tum-wire-key">Account number</span><span class="tum-wire-val">692614648178693 <button class="tum-copy-btn" onclick="tumCopy('692614648178693',this)">Copy</button></span></div>
                <div class="tum-wire-row"><span class="tum-wire-key">Account type</span><span class="tum-wire-val">Checking</span></div>
                <div class="tum-wire-row"><span class="tum-wire-key">Beneficiary address</span><span class="tum-wire-val">2880 Zanker Rd, Suite 203, San Jose, CA 95134</span></div>
                <div class="tum-wire-section-head">Receiving Bank</div>
                <div class="tum-wire-row"><span class="tum-wire-key">Bank name</span><span class="tum-wire-val">Aidi Cash Account</span></div>
                <div class="tum-wire-row"><span class="tum-wire-key">ABA routing</span><span class="tum-wire-val">121145433 <button class="tum-copy-btn" onclick="tumCopy('121145433',this)">Copy</button></span></div>
                <div class="tum-wire-row"><span class="tum-wire-key">Bank address</span><span class="tum-wire-val">1 Letterman Drive, Bldg A, Suite A4-700, San Francisco, CA 94129</span></div>
                <div class="tum-wire-section-head">International Wire</div>
                <div class="tum-wire-row"><span class="tum-wire-key">SWIFT / BIC</span><span class="tum-wire-val">CLNOUS66 <button class="tum-copy-btn" onclick="tumCopy('CLNOUS66',this)">Copy</button></span></div>
                <div class="tum-wire-row"><span class="tum-wire-key">IBAN</span><span class="tum-wire-val">Not applicable (US account)</span></div>
                <div class="tum-wire-row"><span class="tum-wire-key">Reference</span><span class="tum-wire-val">AIDI-JA-2026 <button class="tum-copy-btn" onclick="tumCopy('AIDI-JA-2026',this)">Copy</button></span></div>
              </div>
              <button class="tum-btn-secondary" onclick="tumDownloadPDF()">
                <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download wire details as PDF
              </button>
              <div class="tum-disclaimer">Wire transfers are free. Allow 1–2 business days for funds to appear. Include your reference number on all wires. Funds are FDIC-insured.</div>
            </div>
          </div>

          <!-- ══════════════ INVESTMENT ACCOUNT PANEL ══════════════ -->
          <div id="tum-investment-content" style="display:none;">
            <div class="tum-info-box">💼 Investment account top-ups are funded directly from your Cash Balance. Ensure your Cash Balance has sufficient funds before proceeding.</div>
            <div style="background:#F5F2EC;border-radius:12px;padding:16px 18px;margin-bottom:16px;">
              <div style="display:flex;justify-content:space-between;font-size:.82rem;margin-bottom:8px;"><span style="color:#8494A8;">Available cash balance</span><span style="font-weight:700;color:#0C1A2E;">$318,000</span></div>
              <div style="height:4px;background:#E0D9CE;border-radius:2px;"><div style="height:100%;width:46%;background:#0C1A2E;border-radius:2px;"></div></div>
              <div style="font-size:.7rem;color:#8494A8;margin-top:5px;">Used $318K of $690K total</div>
            </div>
            <div class="tum-form-group">
              <label class="tum-form-label">Transfer amount (USD)</label>
              <input class="tum-form-input" type="number" placeholder="0.00" min="100" id="investAmount" oninput="tumCheckInvest(this.value)">
              <div style="font-size:.72rem;color:#8494A8;margin-top:5px;" id="investHint">Funds transfer to your Investment Account</div>
            </div>
            <div class="tum-form-group">
              <label class="tum-form-label">Destination</label>
              <select class="tum-form-input">
                <option>Individual Investment Account</option>
                <option>IRA Investment Account</option>
              </select>
            </div>
            <div class="tum-form-group">
              <label class="tum-form-label">Transfer speed</label>
              <select class="tum-form-input">
                <option>Standard (1–2 business days) — Free</option>
                <option>Express (same day) — $5.00 fee</option>
              </select>
            </div>
            <button class="tum-btn-primary" onclick="tumSubmitInvest()">Transfer funds</button>
            <div class="tum-success-box" id="investSuccess">✓ Transfer initiated. Funds will appear in your Investment Account within 1–2 business days.</div>
            <div class="tum-disclaimer">Transfers are advisory instructions routed to your linked brokerage. Aidi does not hold investment funds directly.</div>
          </div>

          <!-- ══════════════ CRYPTO BALANCE PANEL ══════════════ -->
          <div id="tum-crypto-content" style="display:none;">
            <div class="tum-info-box">🔐 Crypto orders are routed to your Crypto Account and secured in institutional-grade cold custody. Crypto is highly volatile — invest only what you can afford to lose.</div>
            <div style="background:#F5F2EC;border-radius:12px;padding:16px 18px;margin-bottom:16px;">
              <div style="display:flex;justify-content:space-between;font-size:.82rem;margin-bottom:6px;"><span style="color:#8494A8;">Available cash balance</span><span style="font-weight:700;color:#0C1A2E;">$318,000</span></div>
              <div style="display:flex;justify-content:space-between;font-size:.82rem;"><span style="color:#8494A8;">Current crypto balance</span><span style="font-weight:700;color:#0C1A2E;">$127,500</span></div>
            </div>
            <div class="tum-form-group">
              <label class="tum-form-label">Amount to allocate (USD)</label>
              <input class="tum-form-input" type="number" placeholder="0.00" min="100" id="cryptoAmount" oninput="tumCheckCrypto(this.value)">
              <div style="font-size:.72rem;color:#8494A8;margin-top:5px;" id="cryptoHint">Routed to Crypto Account · Secured in cold custody</div>
            </div>
            <div class="tum-form-group">
              <label class="tum-form-label">Asset</label>
              <select class="tum-form-input">
                <option>Bitcoin (BTC) — $93,407</option>
                <option>Ethereum (ETH) — $3,180</option>
                <option>Solana (SOL) — $142</option>
              </select>
            </div>
            <div class="tum-form-group">
              <label class="tum-form-label">Order type</label>
              <select class="tum-form-input">
                <option>Market order (instant)</option>
                <option>Limit order</option>
              </select>
            </div>
            <div style="background:#FDF6E8;border:1px solid rgba(200,150,46,.25);border-radius:10px;padding:12px 14px;margin-bottom:12px;font-size:.8rem;color:#3D5170;line-height:1.6;">
              ⚠ <strong style="color:#C8962E;">Risk notice:</strong> Cryptocurrency prices are highly volatile. The value of your investment may go down as well as up. Aidi provides advisory instructions only — your assets are held in institutional-grade cold custody.
            </div>
            <button class="tum-btn-primary" onclick="tumSubmitCrypto()">Allocate funds</button>
            <div class="tum-success-box" id="cryptoSuccess">✓ Allocation instruction sent. Your order is being processed and assets secured in cold custody. Allow up to 10 minutes for confirmation.</div>
            <div class="tum-disclaimer">Assets held in institutional-grade cold custody. Aidi is advisory only.</div>
          </div>

        </div>
      </div>


      <!-- ── Vault Transfer Modal ── -->
      <div class="vault-transfer-overlay" id="vaultTransferOverlay" onclick="closeVaultTransfer()">
        <div class="vault-transfer-modal" onclick="event.stopPropagation()">
          <div class="vtm-header">
            <div>
              <div class="vtm-title">Transfer to Secure Vault</div>
              <div class="vtm-sub">Move crypto from your trading account into secure cold custody</div>
            </div>
            <button class="vtm-close" onclick="closeVaultTransfer()">
              <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="vtm-body">

            <div class="vtm-warning">⚠ Transfers move assets from your trading account into cold custody. Once vaulted, assets require a 24-hour withdrawal notice to move back to your trading account.</div>

            <!-- Asset selector -->
            <div class="vtm-section">
              <div class="vtm-label">Asset to transfer</div>
              <select class="vtm-input" id="vtmAsset" onchange="vtmUpdateAddress()">
                <option value="btc">Bitcoin (BTC) — Trading balance: 0.956 BTC</option>
                <option value="eth">Ethereum (ETH) — Trading balance: 12.04 ETH</option>
                <option value="sol">Solana (SOL) — Trading balance: 0 SOL</option>
              </select>
            </div>

            <!-- Amount -->
            <div class="vtm-section">
              <div class="vtm-label">Amount</div>
              <input class="vtm-input" type="number" id="vtmAmount" placeholder="0.00" oninput="vtmCalc()">
              <div style="font-size:.72rem;color:var(--ink-muted);margin-top:5px;" id="vtmAmountHint">Enter amount in BTC</div>
            </div>

            <!-- Vault address -->
            <div class="vtm-section">
              <div class="vtm-label">Destination — Secure Vault Address</div>
              <div class="vtm-address-box" id="vtmAddressBox">
                <span id="vtmAddress">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</span>
                <button class="vtm-copy-btn" onclick="vtmCopyAddr()">Copy</button>
              </div>
              <div style="font-size:.72rem;color:var(--ink-muted);margin-top:6px;">✓ Verified secure vault address · Encrypted blockchain transfer</div>
            </div>

            <!-- Transfer path visualisation -->
            <div class="vtm-label" style="margin-bottom:12px;">Transfer path</div>
            <div class="vtm-path-vis">
              <div class="vtm-path-step">
                <div class="vtm-path-icon" style="background:#EEF2FF;color:var(--blue);"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                <div class="vtm-path-label">Trading Account</div>
              </div>
              <div class="vtm-path-arrow">→</div>
              <div class="vtm-path-step">
                <div class="vtm-path-icon" style="background:#F0FDF4;color:var(--green);"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <div class="vtm-path-label">Blockchain</div>
              </div>
              <div class="vtm-path-arrow">→</div>
              <div class="vtm-path-step">
                <div class="vtm-path-icon" style="background:var(--ink);color:var(--gold-light);"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="4"/></svg></div>
                <div class="vtm-path-label">Secure Vault</div>
              </div>
            </div>

            <!-- Fee summary -->
            <div class="vtm-label" style="margin-bottom:8px;">Fee summary</div>
            <div style="background:var(--cream);border-radius:10px;padding:14px 16px;margin-bottom:16px;">
              <div class="vtm-fee-row"><span class="vtm-fee-key">Network fee (est.)</span><span id="vtmNetworkFee">—</span></div>
              <div class="vtm-fee-row"><span class="vtm-fee-key">Custody fee</span><span>None on transfer</span></div>
              <div class="vtm-fee-row"><span class="vtm-fee-key">Transfer amount</span><span id="vtmTransferAmt">—</span></div>
              <div class="vtm-fee-row"><span class="vtm-fee-key" style="font-weight:600;">You receive in vault</span><span id="vtmReceive" style="color:var(--green);">—</span></div>
            </div>

            <button class="vtm-submit" onclick="vtmSubmit()">Confirm transfer to Secure Vault</button>
            <div class="vtm-success" id="vtmSuccess">
              ✓ Transfer initiated. Your assets are being moved to secure cold custody via the blockchain. Confirmation typically takes 10–30 minutes. You will receive a confirmation once secured.
            </div>
            <div style="font-size:.7rem;color:var(--ink-muted);text-align:center;margin-top:12px;line-height:1.6;">
              Aidi does not hold your assets. Transfers are executed on-chain directly to your secure vault. MPC technology ensures no single key ever exposes your funds.
            </div>
          </div>
        </div>
      </div>


      <!-- ── Storage Details Modal ── -->
      <div class="storage-overlay" id="storageOverlay" onclick="closeStorageDetails()"></div>
      <div class="storage-modal" id="storageModal">
        <div class="sm-header">
          <div class="sm-header-left">
            <div class="sm-title">Vault Storage History</div>
            <div class="sm-sub">Precious Metals Vault · Jenks, Oklahoma · Fully allocated &amp; insured</div>
          </div>
          <button class="sm-close" onclick="closeStorageDetails()">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="sm-body">

          <!-- Summary strip -->
          <div class="sm-summary">
            <div class="sm-summary-item"><div class="v">187 oz</div><div class="l">Total allocated</div></div>
            <div class="sm-summary-item"><div class="v">$588,154</div><div class="l">Current value</div></div>
            <div class="sm-summary-item"><div class="v">3 purchases</div><div class="l">Deposits on file</div></div>
          </div>

          <!-- Vault location -->
          <div class="sm-section-label">Vault Location</div>
          <div class="sm-vault-location">
            <div class="sm-vault-location-title">🏛 Precious Metals Secure Vault — Jenks, Oklahoma</div>
            <div class="sm-vault-location-row"><span class="sm-vault-location-key">Facility</span><span class="sm-vault-location-val">Secure Precious Metals Storage</span></div>
            <div class="sm-vault-location-row"><span class="sm-vault-location-key">Address</span><span class="sm-vault-location-val">7655 E 41st St, Tulsa, OK 74145, USA</span></div>
            <div class="sm-vault-location-row"><span class="sm-vault-location-key">Security</span><span class="sm-vault-location-val">24/7 armed guard, biometric access, CCTV</span></div>
            <div class="sm-vault-location-row"><span class="sm-vault-location-key">Insurance</span><span class="sm-vault-location-val">Fully insured via Lloyd's of London</span></div>
            <div class="sm-vault-location-row"><span class="sm-vault-location-key">Audit</span><span class="sm-vault-location-val">Independent audit annually · Last: Jan 2026</span></div>
            <div class="sm-vault-location-row"><span class="sm-vault-location-key">Certification</span><span class="sm-vault-location-val">LBMA Good Delivery · ISO 9001</span></div>
          </div>

          <!-- Purchase history -->
          <div class="sm-section-label">Purchase & Transfer History</div>

          <!-- Purchase 1 -->
          <div class="sm-purchase-card">
            <div class="sm-purchase-header">
              <div>
                <div class="sm-purchase-date">Jan 14, 2026 · 10:42 AM EST</div>
                <div class="sm-purchase-ref">REF: AIDI-AU-2026-001</div>
              </div>
              <span style="background:#ECFDF5;color:#1A7A5E;padding:3px 10px;border-radius:100px;font-size:.68rem;font-weight:700;">Secured</span>
            </div>
            <div class="sm-purchase-amount">100 troy oz · 99.99% fine gold</div>
            <div class="sm-purchase-value">Purchased at $2,614/oz · Total $261,400 · Now worth $314,200</div>
            <div class="sm-timeline">
              <div class="sm-timeline-step">
                <div class="sm-tl-dot done">✓</div>
                <div class="sm-tl-body">
                  <div class="sm-tl-title">Order placed via Aidi</div>
                  <div class="sm-tl-detail">Purchase order placed · Payment debited from Cash Balance</div>
                  <span class="sm-tl-duration">Jan 14, 2026 · 10:42 AM</span>
                </div>
              </div>
              <div class="sm-timeline-step">
                <div class="sm-tl-dot done">✓</div>
                <div class="sm-tl-body">
                  <div class="sm-tl-title">Order confirmed</div>
                  <div class="sm-tl-detail">Specific bars allocated: 4× 25oz LBMA bars (serial nos. on file)</div>
                  <span class="sm-tl-duration">Jan 14, 2026 · 2:15 PM · 3h 33m</span>
                </div>
              </div>
              <div class="sm-timeline-step">
                <div class="sm-tl-dot done">✓</div>
                <div class="sm-tl-body">
                  <div class="sm-tl-title">In transit to Secure Vault</div>
                  <div class="sm-tl-detail">Armoured courier dispatch · Secured transport</div>
                  <span class="sm-tl-duration">Jan 15, 2026 · 9:00 AM · 1 day</span>
                </div>
              </div>
              <div class="sm-timeline-step">
                <div class="sm-tl-dot secured">✓</div>
                <div class="sm-tl-body">
                  <div class="sm-tl-title">Secured at Precious Metals Vault, Jenks OK</div>
                  <div class="sm-tl-detail">Bars verified, weighed, and registered to your allocated account. Certificate of deposit issued.</div>
                  <span class="sm-tl-duration">Jan 16, 2026 · 11:30 AM · 2 days total</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Purchase 2 -->
          <div class="sm-purchase-card">
            <div class="sm-purchase-header">
              <div>
                <div class="sm-purchase-date">Mar 3, 2026 · 2:18 PM EST</div>
                <div class="sm-purchase-ref">REF: AIDI-AU-2026-002</div>
              </div>
              <span style="background:#ECFDF5;color:#1A7A5E;padding:3px 10px;border-radius:100px;font-size:.68rem;font-weight:700;">Secured</span>
            </div>
            <div class="sm-purchase-amount">84 troy oz · 99.99% fine gold</div>
            <div class="sm-purchase-value">Purchased at $2,980/oz · Total $250,320 · Now worth $263,928</div>
            <div class="sm-timeline">
              <div class="sm-timeline-step">
                <div class="sm-tl-dot done">✓</div>
                <div class="sm-tl-body">
                  <div class="sm-tl-title">Order placed via Aidi</div>
                  <div class="sm-tl-detail">Purchase order placed · Payment debited from Cash Balance</div>
                  <span class="sm-tl-duration">Mar 3, 2026 · 2:18 PM</span>
                </div>
              </div>
              <div class="sm-timeline-step">
                <div class="sm-tl-dot done">✓</div>
                <div class="sm-tl-body">
                  <div class="sm-tl-title">Order confirmed</div>
                  <div class="sm-tl-detail">Specific bars allocated: 2× 25oz + 1× 34oz LBMA bars</div>
                  <span class="sm-tl-duration">Mar 3, 2026 · 5:44 PM · 3h 26m</span>
                </div>
              </div>
              <div class="sm-timeline-step">
                <div class="sm-tl-dot done">✓</div>
                <div class="sm-tl-body">
                  <div class="sm-tl-title">In transit to Secure Vault</div>
                  <div class="sm-tl-detail">Armoured transport dispatched</div>
                  <span class="sm-tl-duration">Mar 4, 2026 · 8:30 AM · 1 day</span>
                </div>
              </div>
              <div class="sm-timeline-step">
                <div class="sm-tl-dot secured">✓</div>
                <div class="sm-tl-body">
                  <div class="sm-tl-title">Secured at Precious Metals Vault, Jenks OK</div>
                  <div class="sm-tl-detail">Bars verified, weighed, and added to your allocated account. Updated certificate issued.</div>
                  <span class="sm-tl-duration">Mar 5, 2026 · 10:15 AM · 2 days total</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Purchase 3 - recent -->
          <div class="sm-purchase-card">
            <div class="sm-purchase-header">
              <div>
                <div class="sm-purchase-date">Apr 7, 2026 · 9:22 AM EST</div>
                <div class="sm-purchase-ref">REF: AIDI-AU-2026-003</div>
              </div>
              <span style="background:#ECFDF5;color:#1A7A5E;padding:3px 10px;border-radius:100px;font-size:.68rem;font-weight:700;">Secured</span>
            </div>
            <div class="sm-purchase-amount">3 troy oz · 99.99% fine gold</div>
            <div class="sm-purchase-value">Purchased at $3,080/oz · Total $9,240 · Now worth $9,426</div>
            <div class="sm-timeline">
              <div class="sm-timeline-step">
                <div class="sm-tl-dot done">✓</div>
                <div class="sm-tl-body">
                  <div class="sm-tl-title">Order placed via Aidi</div>
                  <div class="sm-tl-detail">Purchase order placed · Payment debited from Cash Balance</div>
                  <span class="sm-tl-duration">Apr 7, 2026 · 9:22 AM</span>
                </div>
              </div>
              <div class="sm-timeline-step">
                <div class="sm-tl-dot done">✓</div>
                <div class="sm-tl-body">
                  <div class="sm-tl-title">Order confirmed</div>
                  <div class="sm-tl-detail">Allocated: 3× 1oz LBMA coin-bar equivalents</div>
                  <span class="sm-tl-duration">Apr 7, 2026 · 11:58 AM · 2h 36m</span>
                </div>
              </div>
              <div class="sm-timeline-step">
                <div class="sm-tl-dot done">✓</div>
                <div class="sm-tl-body">
                  <div class="sm-tl-title">In transit to Secure Vault</div>
                  <div class="sm-tl-detail">Armoured secured transport</div>
                  <span class="sm-tl-duration">Apr 8, 2026 · 7:45 AM · 1 day</span>
                </div>
              </div>
              <div class="sm-timeline-step">
                <div class="sm-tl-dot secured">✓</div>
                <div class="sm-tl-body">
                  <div class="sm-tl-title">Secured at Precious Metals Vault, Jenks OK</div>
                  <div class="sm-tl-detail">Bars verified and added to allocated account. Certificate updated.</div>
                  <span class="sm-tl-duration">Apr 9, 2026 · 9:00 AM · 2 days total</span>
                </div>
              </div>
            </div>
          </div>

          <div style="font-size:.7rem;color:#8494A8;text-align:center;line-height:1.6;margin-top:8px;padding-top:16px;border-top:1px solid #EDE9E1;">
            All gold is physically allocated — bars are registered specifically to your account, not pooled. Aidi maintains full chain-of-custody records. Bar serial numbers are available on request.
          </div>

        </div>
      </div>


    </div><!-- end db-shell -->

    <!-- Notifications Dropdown -->
    <div class="notif-dropdown" id="notifDropdown">
      <div class="notif-head">
        <div class="notif-head-title">Notifications</div>
        <div class="notif-head-mark" onclick="markAllRead()">Mark all as read</div>
      </div>
      <div class="notif-item" id="ni-kyc" onclick="notifClick('kyc')" style="cursor:pointer;position:relative;">
        <div class="notif-item-icon" style="background:var(--red-pale);color:var(--red);"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
        <div class="notif-item-body">
          <div class="notif-item-title">KYC Verification Required</div>
          <div class="notif-item-text">Complete identity verification to unlock full account features.</div>
          <div class="notif-item-time">12m ago</div>
        </div>
        <div class="notif-item-unread" id="nu-kyc"></div>
      </div>
      <div class="notif-item" id="ni-deposit" onclick="notifClick('deposit')" style="cursor:pointer;position:relative;">
        <div class="notif-item-icon" style="background:var(--green-pale);color:var(--green);"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
        <div class="notif-item-body">
          <div class="notif-item-title">Deposit Confirmed</div>
          <div class="notif-item-text">$5,000 deposited to your Cash Wallet successfully.</div>
          <div class="notif-item-time">2h ago</div>
        </div>
        <div class="notif-item-unread" id="nu-deposit"></div>
      </div>
      <div class="notif-item" id="ni-opportunity" onclick="notifClick('opportunity')" style="cursor:pointer;position:relative;">
        <div class="notif-item-icon" style="background:var(--gold-pale);color:var(--gold);"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg></div>
        <div class="notif-item-body">
          <div class="notif-item-title">New Investment Opportunity</div>
          <div class="notif-item-text">Modern Stylish Home is open — 5% cap rate, min $5,000.</div>
          <div class="notif-item-time">3h ago</div>
        </div>
        <div class="notif-item-unread" id="nu-opportunity"></div>
      </div>
      <div class="notif-item" id="ni-compliance" onclick="notifClick('compliance')" style="cursor:pointer;position:relative;">
        <div class="notif-item-icon" style="background:#FEF9C3;color:#A16207;"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
        <div class="notif-item-body">
          <div class="notif-item-title">Filing Deadline Approaching</div>
          <div class="notif-item-text">Federal 1040 &amp; LLC 1065 due Apr 15 — 5 days away.</div>
          <div class="notif-item-time">1d ago</div>
        </div>
        <div class="notif-item-unread" id="nu-compliance"></div>
      </div>
      <div class="notif-item" id="ni-elia" onclick="notifClick('elia')" style="cursor:pointer;position:relative;">
        <div class="notif-item-icon" style="background:var(--blue-pale);color:var(--blue);"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
        <div class="notif-item-body">
          <div class="notif-item-title">Elia Weekly Digest</div>
          <div class="notif-item-text">Your portfolio is up 5.3% YTD. Elia has 2 new insights.</div>
          <div class="notif-item-time">1d ago</div>
        </div>
      </div>
      <div class="notif-footer"><a onclick="openAllNotifs()">View all notifications</a></div>
    </div>

    <!-- All Notifications Slide Panel -->
    <div class="notif-panel-ov" id="notifPanelOv" onclick="if(event.target===this)closeAllNotifs()"></div>
    <div class="notif-panel" id="notifPanel">
      <div class="notif-panel-hd">
        <div>
          <div style="font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:400;color:var(--ink);">All Notifications</div>
          <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;" id="notifPanelCount">5 notifications · 4 unread</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="markAllRead()" style="padding:6px 14px;border-radius:100px;font-size:.75rem;font-weight:600;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;font-family:inherit;color:var(--ink);">Mark all read</button>
          <button onclick="closeAllNotifs()" style="background:none;border:none;cursor:pointer;color:var(--ink-soft);padding:4px;"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
      </div>
      <div class="notif-panel-bd" id="notifPanelBd"></div>
    </div>

    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'client' })
</script>
