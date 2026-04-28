<template>
  <div id="client-app">
    <!-- ═════════════════════════════════════════════════════════════
         ROUTE CONTENT
         The current client page (signin, signup, onboard step, or
         dashboard) renders here.
         ═════════════════════════════════════════════════════════════ -->
    <slot />

    <!-- ═════════════════════════════════════════════════════════════
         SHARED CHROME (from aidi_dashboard.html)
         Preserved verbatim. JS handlers live in /js/dashboard-*.js.
         ═════════════════════════════════════════════════════════════ -->
    <!-- ═══════════════════════════════════════════
      PAGE 1: SIGN IN
    ════════════════════════════════════════════ -->
    <!-- page page-signin mounted by Nuxt router -->

    <!-- ═══════════════════════════════════════════
      PAGE 2: SIGN UP
    ════════════════════════════════════════════ -->
    <!-- page page-signup mounted by Nuxt router -->

    <!-- ═══════════════════════════════════════════
      PAGE 3: ONBOARDING — STEP 1: ACCOUNT TYPE
    ════════════════════════════════════════════ -->
    <!-- page page-onboard-1 mounted by Nuxt router -->

    <!-- STEP 2: PERSONAL INFO -->
    <!-- page page-onboard-2 mounted by Nuxt router -->

    <!-- STEP 3: KYC -->
    <!-- page page-onboard-3 mounted by Nuxt router -->

    <!-- STEP 4: INVESTOR QUALIFICATION -->
    <!-- page page-onboard-4 mounted by Nuxt router -->

    <!-- STEP 5: INVESTMENT PREFERENCES -->
    <!-- page page-onboard-5 mounted by Nuxt router -->

    <!-- STEP 6: FUNDING / READINESS -->
    <!-- page page-onboard-6 mounted by Nuxt router -->

    <!-- STEP 7: SUCCESS -->
    <!-- page page-onboard-7 mounted by Nuxt router -->

    <!-- ═══════════════════════════════════════════
      DASHBOARD SHELL
    ════════════════════════════════════════════ -->
    <!-- page page-dashboard mounted by Nuxt router --><!-- end page-dashboard -->

    <!-- ═══════════════════════════════════════════
      TRANSACTION PAGES (one per asset class)
    ════════════════════════════════════════════ -->

    <!-- Shared confirm modal -->
    <div class="tx-confirm-overlay" id="txConfirmOverlay">
      <div class="tx-confirm-modal">
        <div class="tx-confirm-icon">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="tx-confirm-title">Order submitted</div>
        <div class="tx-confirm-text">Your instruction has been received. Aidi does not execute trades — your order has been routed to your connected partner platform for execution.</div>
        <div class="tx-confirm-detail" id="txConfirmDetail"></div>
        <button class="tx-confirm-close" onclick="closeTxConfirm()">Done</button>
      </div>
    </div>

    <!-- ── SPY / Equities ── -->
    <div class="tx-page" id="txpage-spy">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">S&P 500 ETF (SPY)</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <div class="tx-asset-header">
              <div class="tx-asset-ticker">NYSE ARCA · SPY</div>
              <div class="tx-asset-name">S&P 500 ETF Trust</div>
              <div class="tx-asset-price" style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$583.42</div>
              <div class="tx-price-change" style="color:var(--green)">▲ +4.68 (+0.81%) Today</div>
              <div class="tx-price-after" style="color:var(--ink-muted)">▲ +0.12 (+0.02%) After hours</div>
            </div>
            <div class="tx-chart-card">
              <div class="tx-chart-header">
                <div class="tx-chart-tabs">
                  <button class="tx-chart-tab active" onclick="txTabSwitch(this,'txChart-spy')">1D</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-spy')">1W</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-spy')">1M</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-spy')">3M</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-spy')">YTD</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-spy')">1Y</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-spy')">MAX</button>
                </div>
              </div>
              <canvas id="txChart-spy" height="200" style="width:100%;display:block;"></canvas>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About</div>
              <div class="tx-about-text">The SPDR S&P 500 ETF Trust (SPY) tracks the S&P 500 Index, offering broad exposure to 500 of the largest U.S. publicly traded companies across all 11 GICS sectors. Launched in 1993, it is the world's largest and most liquid ETF with over $537 billion in assets under management.</div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Market Cap</div><div class="v">$537B AUM</div></div>
                <div class="tx-stat-item"><div class="k">Expense Ratio</div><div class="v">0.09%</div></div>
                <div class="tx-stat-item"><div class="k">Dividend Yield</div><div class="v">1.31%</div></div>
                <div class="tx-stat-item"><div class="k">P/E Ratio</div><div class="v">22.4x</div></div>
                <div class="tx-stat-item"><div class="k">52W High</div><div class="v">$610.78</div></div>
                <div class="tx-stat-item"><div class="k">52W Low</div><div class="v">$481.80</div></div>
                <div class="tx-stat-item"><div class="k">Avg. Volume</div><div class="v">83.2M</div></div>
                <div class="tx-stat-item"><div class="k">Beta</div><div class="v">1.00</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title">Buy SPY</div>
          <div class="tx-buying-power"><span class="lbl">Buying power</span><span class="val">$318,000</span></div>
          <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="alpaca" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                <div><div class="tx-wallet-name">Investment Account</div><div class="tx-wallet-sub">Investment account</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$684,200</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>

          <div class="tx-form-row"><span class="tx-form-label">Order type</span><select class="tx-form-select"><option>Market order</option><option>Limit order</option><option>Stop order</option></select></div>
          <div class="tx-form-row"><span class="tx-form-label">Buy in</span><select class="tx-form-select"><option>Shares</option><option>Dollars</option></select></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Shares</div>
            <input class="tx-form-input" type="number" placeholder="0" min="0" id="spyShares" oninput="txCalc('spy',583.42,this.value)">
            <div class="tx-form-input-hint">Market value: $583.42 per share</div>
          </div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Estimated cost</span><span id="spyCost">$0.00</span></div>
          <button class="tx-submit-btn" onclick="txSubmit('SPY','S&P 500 ETF','spyShares',583.42)">Review order</button>
          <div class="tx-disclaimer">Aidi routes instructions to your connected broker. Execution occurs on your chosen platform. Past performance does not guarantee future results.</div>
        </div>
      </div>
    </div>

    <!-- ── AAPL / Equities ── -->
    <div class="tx-page" id="txpage-aapl">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Apple Inc. (AAPL)</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <div class="tx-asset-header">
              <div class="tx-asset-ticker">NASDAQ · AAPL</div>
              <div class="tx-asset-name">Apple Inc.</div>
              <div class="tx-asset-price" style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$214.44</div>
              <div class="tx-price-change" style="color:var(--green)">▲ +2.56 (+1.21%) Today</div>
              <div class="tx-price-after" style="color:var(--ink-muted)">▲ +0.04 (+0.02%) After hours</div>
            </div>
            <div class="tx-chart-card">
              <div class="tx-chart-header">
                <div class="tx-chart-tabs">
                  <button class="tx-chart-tab active" onclick="txTabSwitch(this,'txChart-aapl')">1D</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-aapl')">1W</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-aapl')">1M</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-aapl')">3M</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-aapl')">YTD</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-aapl')">1Y</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-aapl')">MAX</button>
                </div>
              </div>
              <canvas id="txChart-aapl" height="200" style="width:100%;display:block;"></canvas>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About</div>
              <div class="tx-about-text">Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also offers related services including the App Store, Apple Music, iCloud, Apple Pay, and Apple TV+. Apple is headquartered in Cupertino, California, and is the world's most valuable company by market capitalisation.</div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Market Cap</div><div class="v">$3.31T</div></div>
                <div class="tx-stat-item"><div class="k">P/E Ratio</div><div class="v">29.8x</div></div>
                <div class="tx-stat-item"><div class="k">EPS (TTM)</div><div class="v">$6.97</div></div>
                <div class="tx-stat-item"><div class="k">Dividend Yield</div><div class="v">0.44%</div></div>
                <div class="tx-stat-item"><div class="k">Revenue (TTM)</div><div class="v">$391B</div></div>
                <div class="tx-stat-item"><div class="k">52W High</div><div class="v">$260.10</div></div>
                <div class="tx-stat-item"><div class="k">52W Low</div><div class="v">$164.08</div></div>
                <div class="tx-stat-item"><div class="k">Beta</div><div class="v">1.24</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title">Buy AAPL</div>
          <div class="tx-buying-power"><span class="lbl">Buying power</span><span class="val">$318,000</span></div>
          <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="alpaca" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                <div><div class="tx-wallet-name">Investment Account</div><div class="tx-wallet-sub">Investment account</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$684,200</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>

          <div class="tx-form-row"><span class="tx-form-label">Order type</span><select class="tx-form-select"><option>Market order</option><option>Limit order</option><option>Stop order</option></select></div>
          <div class="tx-form-row"><span class="tx-form-label">Buy in</span><select class="tx-form-select"><option>Shares</option><option>Dollars</option></select></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Shares</div>
            <input class="tx-form-input" type="number" placeholder="0" min="0" id="aaplShares" oninput="txCalc('aapl',214.44,this.value)">
            <div class="tx-form-input-hint">Market value: $214.44 per share</div>
          </div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Estimated cost</span><span id="aaplCost">$0.00</span></div>
          <button class="tx-submit-btn" onclick="txSubmit('AAPL','Apple Inc.','aaplShares',214.44)">Review order</button>
          <div class="tx-disclaimer">Aidi routes instructions to your connected broker. Execution occurs on your chosen platform.</div>
        </div>
      </div>
    </div>

    <!-- ── BTC / Crypto ── -->
    <div class="tx-page" id="txpage-btc">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Bitcoin (BTC)</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <div class="tx-asset-header">
              <div class="tx-asset-ticker">Cryptocurrency · Secure Custody</div>
              <div class="tx-asset-name">Bitcoin</div>
              <div class="tx-asset-price" style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$93,407</div>
              <div class="tx-price-change" style="color:var(--green)">▲ +3,120 (+3.45%) Today</div>
            </div>
            <div class="tx-chart-card">
              <div class="tx-chart-header">
                <div class="tx-chart-tabs">
                  <button class="tx-chart-tab active" onclick="txTabSwitch(this,'txChart-btc')">1D</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-btc')">1W</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-btc')">1M</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-btc')">3M</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-btc')">YTD</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-btc')">1Y</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-btc')">MAX</button>
                </div>
              </div>
              <canvas id="txChart-btc" height="200" style="width:100%;display:block;"></canvas>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About</div>
              <div class="tx-about-text">Bitcoin is the world's first and largest decentralised cryptocurrency by market capitalisation. Your Bitcoin is held in institutional-grade cold custody with comprehensive insurance coverage. Aidi provides the intelligence — execution is handled securely on your behalf. Bitcoin is highly volatile and suitable only for investors with appropriate risk tolerance.</div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Market Cap</div><div class="v">$1.85T</div></div>
                <div class="tx-stat-item"><div class="k">24h Volume</div><div class="v">$48.2B</div></div>
                <div class="tx-stat-item"><div class="k">Circulating supply</div><div class="v">19.8M BTC</div></div>
                <div class="tx-stat-item"><div class="k">Max supply</div><div class="v">21M BTC</div></div>
                <div class="tx-stat-item"><div class="k">All-time high</div><div class="v">$108,786</div></div>
                <div class="tx-stat-item"><div class="k">52W Low</div><div class="v">$52,400</div></div>
                <div class="tx-stat-item"><div class="k">Trading</div><div class="v">Investment Account</div></div>
                <div class="tx-stat-item"><div class="k">Insurance</div><div class="v">$250M+</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title">Buy BTC</div>
          <div class="tx-buying-power"><span class="lbl">Buying power</span><span class="val">$318,000</span></div>
          <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="alpaca-crypto" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg></div>
                <div><div class="tx-wallet-name">Crypto Account</div><div class="tx-wallet-sub">Trading wallet</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$127,500</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>

          <div class="tx-form-row"><span class="tx-form-label">Buy in</span><select class="tx-form-select"><option>USD</option><option>BTC</option></select></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Amount (USD)</div>
            <input class="tx-form-input" type="number" placeholder="0.00" min="0" id="btcAmount" oninput="txCalcCrypto(this.value,93407)">
            <div class="tx-form-input-hint" id="btcEquiv">≈ 0.00000 BTC · Market price $93,407</div>
          </div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Estimated cost</span><span id="btcCost">$0.00</span></div>
          <button class="tx-submit-btn" onclick="txSubmitCrypto('BTC','Bitcoin','btcAmount')">Review order</button>
          <div class="tx-disclaimer">Crypto assets are highly volatile. Aidi does not execute trades. Your instruction is routed securely. Assets are held in institutional cold custody.</div>
        </div>
      </div>
    </div>

    <!-- ── Gold ── -->
    <div class="tx-page" id="txpage-gold">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Allocated Gold (IAU)</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <div class="tx-asset-header">
              <div class="tx-asset-ticker">Precious Metals · Secure Vault</div>
              <div class="tx-asset-name">Allocated Gold</div>
              <div class="tx-asset-price" style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$3,142 / oz</div>
              <div class="tx-price-change" style="color:var(--green)">▲ +16.40 (+0.52%) Today</div>
            </div>
            <div class="tx-chart-card">
              <div class="tx-chart-header">
                <div class="tx-chart-tabs">
                  <button class="tx-chart-tab active" onclick="txTabSwitch(this,'txChart-gold')">1D</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-gold')">1W</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-gold')">1M</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-gold')">3M</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-gold')">YTD</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-gold')">1Y</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-gold')">MAX</button>
                </div>
              </div>
              <canvas id="txChart-gold" height="200" style="width:100%;display:block;"></canvas>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About</div>
              <div class="tx-about-text">Your gold allocation consists of physically allocated gold bullion stored in a secure, fully insured vault. Allocated gold means you own specific registered bars — not pooled or leveraged positions. The vault is fully insured and audited. Gold serves as an inflation hedge, currency diversifier, and store of value in your portfolio. Settlement is T+2 for new purchases.</div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Spot price</div><div class="v">$3,142/oz</div></div>
                <div class="tx-stat-item"><div class="k">Purity</div><div class="v">99.99% fine</div></div>
                <div class="tx-stat-item"><div class="k">Storage</div><div class="v">Secure Vault</div></div>
                <div class="tx-stat-item"><div class="k">Insurance</div><div class="v">Fully insured</div></div>
                <div class="tx-stat-item"><div class="k">52W High</div><div class="v">$3,224/oz</div></div>
                <div class="tx-stat-item"><div class="k">52W Low</div><div class="v">$2,104/oz</div></div>
                <div class="tx-stat-item"><div class="k">YTD return</div><div class="v">+7.1%</div></div>
                <div class="tx-stat-item"><div class="k">Settlement</div><div class="v">T+2</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title">Buy Gold</div>
          <div class="tx-buying-power"><span class="lbl">Buying power</span><span class="val">$318,000</span></div>
                <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="column" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
                <div><div class="tx-wallet-name">Cash Wallet</div><div class="tx-wallet-sub">FDIC insured</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$318,000</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>
          <div class="tx-form-row"><span class="tx-form-label">Term</span><select class="tx-form-select"><option>90 days</option><option>6 months</option><option>1 year</option></select></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Investment amount (USD)</div>
            <input class="tx-form-input" type="number" placeholder="1000" min="1000" step="1000" id="tbillAmount" oninput="txCalcTBill(this.value)">
            <div class="tx-form-input-hint">Minimum $1,000 · Increments of $1,000</div>
          </div>
          <div style="padding:10px 0;font-size:.82rem;color:var(--ink-soft);">Projected income: <strong id="tbillIncome">$0.00</strong> over 90 days</div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Total investment</span><span id="tbillCost">$0.00</span></div>
          <button class="tx-submit-btn" onclick="txSubmitTBill()">Review order</button>
          <div class="tx-disclaimer">T-Bills are backed by the US government. Past yields do not guarantee future rates.</div>
        </div>
      </div>
    </div>

    <!-- ── Silver ── -->
    <div class="tx-page" id="txpage-silver">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Allocated Silver (XAG)</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <div class="tx-asset-header">
              <div class="tx-asset-ticker">Precious Metals · Secure Vault</div>
              <div class="tx-asset-name">Allocated Silver</div>
              <div class="tx-asset-price" style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$29.80 / oz</div>
              <div class="tx-price-change" style="color:var(--green)">▲ +0.32 (+1.09%) Today</div>
            </div>
            <div class="tx-chart-card">
              <div class="tx-chart-header">
                <div class="tx-chart-tabs">
                  <button class="tx-chart-tab active" onclick="txTabSwitch(this,'txChart-silver')">1D</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-silver')">1W</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-silver')">1M</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-silver')">3M</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-silver')">YTD</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-silver')">1Y</button>
                  <button class="tx-chart-tab" onclick="txTabSwitch(this,'txChart-silver')">MAX</button>
                </div>
              </div>
              <canvas id="txChart-silver" height="200" style="width:100%;display:block;"></canvas>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About</div>
              <div class="tx-about-text">Your silver position consists of physically allocated silver bullion stored in a secure, fully insured vault. Allocated silver means you own specific registered bars — not pooled or leveraged positions. Silver serves as both an industrial commodity and a monetary metal, offering diversification alongside gold. The vault is fully insured and independently audited. Settlement is T+2 for new purchases.</div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Spot price</div><div class="v">$29.80/oz</div></div>
                <div class="tx-stat-item"><div class="k">Purity</div><div class="v">99.9% fine</div></div>
                <div class="tx-stat-item"><div class="k">Storage</div><div class="v">Secure Vault</div></div>
                <div class="tx-stat-item"><div class="k">Insurance</div><div class="v">Fully insured</div></div>
                <div class="tx-stat-item"><div class="k">52W High</div><div class="v">$34.20/oz</div></div>
                <div class="tx-stat-item"><div class="k">52W Low</div><div class="v">$22.10/oz</div></div>
                <div class="tx-stat-item"><div class="k">YTD return</div><div class="v">+4.1%</div></div>
                <div class="tx-stat-item"><div class="k">Settlement</div><div class="v">T+2</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title">Buy Silver</div>
          <div class="tx-buying-power"><span class="lbl">Buying power</span><span class="val">$318,000</span></div>

          <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="column" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
                <div><div class="tx-wallet-name">Cash Wallet</div><div class="tx-wallet-sub">FDIC insured</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$318,000</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>
          <div class="tx-form-row"><span class="tx-form-label">Buy in</span><select class="tx-form-select"><option>USD</option><option>Troy oz</option></select></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Amount (USD)</div>
            <input class="tx-form-input" type="number" placeholder="0.00" min="0" id="silverAmount" oninput="txCalcSilver(this.value)">
            <div class="tx-form-input-hint" id="silverEquiv">≈ 0.000 troy oz · Spot $29.80/oz</div>
          </div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Estimated cost</span><span id="silverCost">$0.00</span></div>

          <!-- Vault storage charge notice -->
          <div style="background:#F0F4F8;border:1px solid rgba(100,116,139,.25);border-radius:12px;padding:14px 16px;margin-top:14px;display:block;">
            <div style="font-size:.72rem;font-weight:700;color:#475569;letter-spacing:.08em;text-transform:uppercase;margin-bottom:7px;">⚠ Vault Storage Charge</div>
            <div style="font-size:.82rem;color:#3D5170;line-height:1.65;">An annual vault storage fee of <strong style="color:#0C1A2E;">0.15% of allocated value</strong> (billed quarterly). For a $10,000 position this is approximately <strong style="color:#0C1A2E;">$15/quarter</strong>. Storage is fully insured and audited. Fees are deducted automatically from your linked account.</div>
          </div>

          <button class="tx-submit-btn" onclick="txSubmitSilver()" style="margin-top:16px;">Review order</button>
          <div class="tx-disclaimer">Silver purchases are settled T+2. Annual vault storage fee of 0.15% applies. This is an advisory instruction, not a binding trade execution.</div>
        </div>
      </div>
    </div>


    <!-- ── T-Bill ── -->
    <div class="tx-page" id="txpage-tbill">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">90-Day T-Bill</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <div class="tx-asset-header">
              <div class="tx-asset-ticker">US Treasury · Cash Account · AAA</div>
              <div class="tx-asset-name">90-Day Treasury Bill</div>
              <div class="tx-asset-price" style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">5.18% yield</div>
              <div class="tx-price-change" style="color:var(--ink-muted)">Annualised · Auto-roll enabled</div>
            </div>
            <div class="tx-chart-card">
              <div style="padding-bottom:16px;">
                <div style="font-size:.82rem;color:var(--ink-muted);font-weight:400;">Historical yield</div>
              </div>
              <canvas id="txChart-tbill" height="200" style="width:100%;display:block;"></canvas>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About</div>
              <div class="tx-about-text">US Treasury Bills are short-term government debt obligations issued and backed by the US federal government. 90-Day T-Bills mature in 90 days and are automatically rolled over at maturity. They are considered among the safest investments available, with virtually zero credit risk. Interest income is exempt from state and local taxes.</div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Current yield</div><div class="v">5.18%</div></div>
                <div class="tx-stat-item"><div class="k">Term</div><div class="v">90 days</div></div>
                <div class="tx-stat-item"><div class="k">Issuer</div><div class="v">US Treasury</div></div>
                <div class="tx-stat-item"><div class="k">Credit rating</div><div class="v">AAA</div></div>
                <div class="tx-stat-item"><div class="k">Min. investment</div><div class="v">$1,000</div></div>
                <div class="tx-stat-item"><div class="k">Custodian</div><div class="v">Cash Account</div></div>
                <div class="tx-stat-item"><div class="k">Auto-roll</div><div class="v">Enabled</div></div>
                <div class="tx-stat-item"><div class="k">Tax exemption</div><div class="v">State & local</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title">Invest in T-Bills</div>
          <div class="tx-buying-power"><span class="lbl">Buying power</span><span class="val">$318,000</span></div>

          <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="column" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
                <div><div class="tx-wallet-name">Cash Wallet</div><div class="tx-wallet-sub">FDIC insured</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$318,000</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>
          <div style="background:var(--green-pale);border-radius:var(--r);padding:12px 14px;margin-bottom:14px;font-size:.82rem;color:var(--green);font-weight:500;">✓ 5.18% annualised yield · Auto-roll on maturity</div>
          <div class="tx-form-row"><span class="tx-form-label">Term</span><select class="tx-form-select"><option>90 days</option><option>6 months</option><option>1 year</option></select></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Investment amount (USD)</div>
            <input class="tx-form-input" type="number" placeholder="1000" min="1000" step="1000" id="tbillAmount" oninput="txCalcTBill(this.value)">
            <div class="tx-form-input-hint">Minimum $1,000 · Increments of $1,000</div>
          </div>
          <div style="padding:10px 0;font-size:.82rem;color:var(--ink-soft);">Projected income: <strong id="tbillIncome">$0.00</strong> over 90 days</div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Total investment</span><span id="tbillCost">$0.00</span></div>
          <button class="tx-submit-btn" onclick="txSubmitTBill()">Review order</button>
          <div class="tx-disclaimer">T-Bills are backed by the US government. Past yields do not guarantee future rates.</div>
        </div>
      </div>
    </div>


    <!-- ── 60-Day Treasury Bill ── -->
    <div class="tx-page" id="txpage-bridge">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">60-Day T-Bill</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <div class="tx-asset-header">
              <div class="tx-asset-ticker">US Treasury · Cash Account · AAA</div>
              <div class="tx-asset-name">60-Day Treasury Bill</div>
              <div style="display:flex;gap:20px;margin-top:14px;flex-wrap:wrap;">
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--green)">5.25%</div><div style="font-size:.72rem;color:var(--ink-muted)">Annualised yield</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">60 days</div><div style="font-size:.72rem;color:var(--ink-muted)">Term</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">AAA</div><div style="font-size:.72rem;color:var(--ink-muted)">Credit rating</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">Auto-roll</div><div style="font-size:.72rem;color:var(--ink-muted)">At maturity</div></div>
              </div>
              <div style="margin-top:16px;background:var(--green-pale);border:1px solid rgba(26,122,94,.2);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--green);font-weight:500;">5.25% annualised yield · US government backed · State tax exempt</div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About</div>
              <div class="tx-about-text">US Treasury Bills are short-term government debt obligations issued and backed by the US federal government. 60-Day T-Bills offer a slightly higher yield than shorter-term instruments while maintaining maximum liquidity and safety. They mature in 60 days and can be automatically rolled over at maturity. T-Bills are considered among the safest investments available, with virtually zero credit risk. Interest income is exempt from state and local taxes.</div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Current yield</div><div class="v">5.25% ann.</div></div>
                <div class="tx-stat-item"><div class="k">Term</div><div class="v">60 days</div></div>
                <div class="tx-stat-item"><div class="k">Issuer</div><div class="v">US Treasury</div></div>
                <div class="tx-stat-item"><div class="k">Credit rating</div><div class="v">AAA</div></div>
                <div class="tx-stat-item"><div class="k">Min. investment</div><div class="v">$1,000</div></div>
                <div class="tx-stat-item"><div class="k">Custodian</div><div class="v">Cash Account</div></div>
                <div class="tx-stat-item"><div class="k">Auto-roll</div><div class="v">Available</div></div>
                <div class="tx-stat-item"><div class="k">Tax exemption</div><div class="v">State & local</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title">Invest in 60-Day T-Bill</div>
          <div class="tx-buying-power"><span class="lbl">Buying power</span><span class="val">$318,000</span></div>
          <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="column" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
                <div><div class="tx-wallet-name">Cash Wallet</div><div class="tx-wallet-sub">FDIC insured</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$318,000</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>
          <div style="background:var(--green-pale);border-radius:var(--r);padding:12px 14px;margin-bottom:14px;font-size:.82rem;color:var(--green);font-weight:500;">5.25% annualised yield · Auto-roll available at maturity</div>
          <div class="tx-form-row"><span class="tx-form-label">Term</span><span class="tx-form-value">60 days</span></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Investment amount (USD)</div>
            <input class="tx-form-input" type="number" placeholder="1000" min="1000" step="1000" id="bridgeAmount" oninput="txCalcBridge(this.value)">
            <div class="tx-form-input-hint">Minimum $1,000 · Increments of $1,000</div>
          </div>
          <div style="padding:10px 0;font-size:.82rem;color:var(--ink-soft);">Projected income: <strong id="bridgeIncome">$0.00</strong> over 60 days</div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Total investment</span><span id="bridgeCost">$0.00</span></div>
          <button class="tx-submit-btn" onclick="txSubmitBridge()">Review order</button>
          <div class="tx-disclaimer">T-Bills are backed by the US government. Past yields do not guarantee future rates. Interest is exempt from state and local taxes.</div>
        </div>
      </div>
    </div>


    <!-- ── Modern Stylish Home ── -->
    <div class="tx-page" id="txpage-unit-a">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Modern Stylish Home</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <!-- Hero gradient -->
            <div class="tx-hero-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/873bf710-2bdb-47e9-97a8-0e7cc4b142b9.avif) center/cover no-repeat;display:flex;align-items:flex-end;padding:20px;border-radius:var(--r-lg);position:relative;">
              <div style="position:absolute;top:14px;right:14px;background:rgba(26,122,94,.85);backdrop-filter:blur(6px);border-radius:100px;padding:5px 12px;font-size:.72rem;color:white;font-weight:600;letter-spacing:.06em;">✦ Open for investment</div>
              <div style="background:rgba(12,26,46,.6);backdrop-filter:blur(4px);border-radius:var(--r);padding:12px 16px;">
                <div style="font-size:.7rem;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.1em;margin-bottom:3px;">Entire Rental Unit · San Jose, California</div>
                <div style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:white;font-weight:400;">Modern Stylish Home</div>
                <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
                  <span style="color:#F5A623;font-size:.82rem;">★★★★★</span>
                  <span style="color:white;font-size:.78rem;font-weight:600;">4.85</span>
                  <span style="color:rgba(255,255,255,.5);font-size:.72rem;">(13 reviews)</span>
                </div>
              </div>
            </div>
        
            <div class="tx-asset-header" style="margin-top:4px;">
              <div class="tx-asset-ticker">Entire Rental Unit · San Jose, California</div>
              <div class="tx-asset-name">Modern Stylish Home</div>
              <div style="display:flex;gap:20px;margin-top:14px;flex-wrap:wrap;">
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--green)">5%</div><div style="font-size:.72rem;color:var(--ink-muted)">Projected cap rate</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">$160/night</div><div style="font-size:.72rem;color:var(--ink-muted)">Avg nightly rate</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">$4,800/mo</div><div style="font-size:.72rem;color:var(--ink-muted)">Avg monthly rev.</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">4.85 ★</div><div style="font-size:.72rem;color:var(--ink-muted)">13 Airbnb reviews</div></div>
              </div>
              <div style="margin-top:14px;background:#E8F5EF;border:1px solid rgba(26,122,94,.25);border-radius:var(--r);padding:11px 14px;font-size:.8rem;color:#1a7a5e;font-weight:500;">
                ✦ This investment round is now open. Invest from $5,000 and earn 4.5% p.a. — capital + interest returned at end of term.
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About the Unit</div>
              <div class="tx-about-text" style="margin-bottom:16px;">Modern Stylish Home is a fully furnished entire rental unit at 458 N 7th Street, San Jose — in the heart of Japantown/Northside. The space features 1 bedroom with a queen bed, 1 private bathroom, contemporary design, and a fully equipped kitchen. Ideal for business travelers and Silicon Valley visitors. Located minutes from SAP Center, San Jose State University, and major tech campuses including Apple, Cisco, and Adobe. Guests consistently praise the cleanliness, comfort, and seamless check-in experience. Currently rated ★ 4.85 across 13 Airbnb reviews.</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Address:</span> <strong>458 N 7th St, San Jose CA</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Neighbourhood:</span> <strong>Japantown / Northside</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Layout:</span> <strong>1 Bedroom · 1 Queen Bed · 1 Bath</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Type:</span> <strong>Entire Rental Unit</strong></div>
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Property type</div><div class="v">Short-Term Rental</div></div>
                <div class="tx-stat-item"><div class="k">Interest rate</div><div class="v" style="color:var(--green);">4.5% p.a.</div></div>
                <div class="tx-stat-item"><div class="k">Avg nightly rate</div><div class="v">$160/night</div></div>
                <div class="tx-stat-item"><div class="k">Avg occupancy</div><div class="v">88% avg</div></div>
                <div class="tx-stat-item"><div class="k">Airbnb rating</div><div class="v">4.85 / 5.0</div></div>
                <div class="tx-stat-item"><div class="k">Total reviews</div><div class="v">13</div></div>
                <div class="tx-stat-item"><div class="k">Structure</div><div class="v">Investment · SPV</div></div>
                <div class="tx-stat-item"><div class="k">Status</div><div class="v" style="color:var(--green);">✦ Open · $5,000 min</div></div>
              </div>
            </div>
            <div class="tx-map-card">
              <div class="tx-map-header">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Property Location
              </div>
              <iframe class="tx-map-frame"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-121.9100%2C37.3300%2C-121.8700%2C37.3520&amp;layer=mapnik&amp;marker=37.3412%2C-121.8900"
                title="458 N 7th St, San Jose, CA" loading="lazy" referrerpolicy="no-referrer">
              </iframe>
              <div class="tx-map-footer">
                <span class="tx-map-addr">📍 458 N 7th Street, San Jose, CA 95112 · Japantown / Northside</span>
                <a class="tx-map-link" href="https://www.openstreetmap.org/?mlat=37.3412&amp;mlon=-121.8900#map=16/37.3412/-121.8900" target="_blank" rel="noopener">Open in maps ↗</a>
              </div>
            </div>
            <div class="tx-section-card" style="padding:14px 16px;">
              <div class="tx-section-title" style="margin-bottom:10px;">View on Airbnb</div>
              <a href="https://www.airbnb.com/rooms/1418768143163222496" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);font-size:.84rem;font-weight:500;">
                <div style="width:34px;height:34px;border-radius:8px;background:#FFF0F0;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#FF5A5F"><path d="M12 2C8.5 2 5 5.5 5 9.5c0 5.25 7 12.5 7 12.5s7-7.25 7-12.5C19 5.5 15.5 2 12 2zm0 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                </div>
                <div><div>Modern Stylish Home</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">View listing on Airbnb ↗</div></div>
                <span style="margin-left:auto;font-size:.72rem;color:var(--blue);font-weight:500;">Open ↗</span>
              </a>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title">Invest in Modern Stylish Home</div>
          <div class="tx-buying-power"><span class="lbl">Buying power</span><span class="val">$318,000</span></div>
          <div style="background:#E8F5EF;border:1px solid rgba(26,122,94,.2);border-radius:var(--r);padding:10px 14px;margin-bottom:16px;font-size:.78rem;color:#1a7a5e;font-weight:500;">✦ 4.5% p.a. · Entire Rental Unit · ★ 4.85 Airbnb · Capital + interest at maturity</div>
          <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="column" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
                <div><div class="tx-wallet-name">Cash Wallet</div><div class="tx-wallet-sub">FDIC insured</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$318,000</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>

          <div style="padding:14px 0 8px;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Investment amount (USD)</div>
            <input class="tx-form-input" type="number" placeholder="5000" min="5000" step="1000" id="monroeAmount" oninput="txCalcMonroe()">
            <div class="tx-form-input-hint">Minimum $5,000 · Increments of $1,000</div>
          </div>

          <div style="padding:8px 0 14px;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:8px;">Term</div>
            <div style="display:flex;gap:8px;">
              <button id="monroe-term-1" class="monroe-term-btn active" onclick="txMonroeTerm(1)" style="flex:1;padding:9px 0;border-radius:var(--r);border:1.5px solid var(--green);background:var(--green);color:white;font-size:.78rem;font-weight:600;cursor:pointer;font-family:inherit;">1 Year</button>
              <button id="monroe-term-2" class="monroe-term-btn" onclick="txMonroeTerm(2)" style="flex:1;padding:9px 0;border-radius:var(--r);border:1.5px solid var(--cream-dark);background:white;color:var(--ink);font-size:.78rem;font-weight:600;cursor:pointer;font-family:inherit;">2 Years</button>
              <button id="monroe-term-3" class="monroe-term-btn" onclick="txMonroeTerm(3)" style="flex:1;padding:9px 0;border-radius:var(--r);border:1.5px solid var(--cream-dark);background:white;color:var(--ink);font-size:.78rem;font-weight:600;cursor:pointer;font-family:inherit;">3 Years</button>
            </div>
          </div>

          <div style="background:var(--cream);border-radius:var(--r);padding:14px;margin-bottom:14px;">
            <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Maturity breakdown</div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;border-bottom:1px solid rgba(12,26,46,.06);"><span style="color:var(--ink-muted);">Principal lent</span><span id="monroePrincipal" style="font-weight:600;">$0.00</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;border-bottom:1px solid rgba(12,26,46,.06);"><span style="color:var(--ink-muted);">Interest rate</span><span style="font-weight:600;color:var(--green);">4.5% p.a.</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;border-bottom:1px solid rgba(12,26,46,.06);"><span style="color:var(--ink-muted);">Term</span><span id="monroeTermLabel" style="font-weight:600;">1 year</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;border-bottom:1px solid rgba(12,26,46,.06);"><span style="color:var(--ink-muted);">Total interest earned</span><span id="monroeInterest" style="font-weight:600;color:var(--green);">$0.00</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.9rem;padding:8px 0 2px;"><span style="font-weight:600;">Total returned at maturity</span><span id="monroeTotal" style="font-weight:700;color:var(--ink);font-size:1rem;">$0.00</span></div>
          </div>

          <button class="tx-submit-btn" onclick="txSubmitMonroe()">Review investment order</button>
          <div class="tx-disclaimer">Your capital and accrued interest are returned in full at the end of the selected term. Returns are projected and not guaranteed. Facilitated by Aidi via SPV. Min. $5,000.</div>
        </div>
      </div>
    </div>

    <!-- ── Private Room 1 — Cozy Stay ── -->
    <div class="tx-page" id="txpage-unit-b">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Private Room 1 — Cozy Stay</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <!-- Hero gradient -->
            <div class="tx-hero-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/94a99706-bdcf-48a2-94b9-0d5590b1b55c.avif) center/cover no-repeat;display:flex;align-items:flex-end;padding:20px;border-radius:var(--r-lg);position:relative;">
              <div style="position:absolute;top:14px;right:14px;background:rgba(12,26,46,.65);backdrop-filter:blur(6px);border-radius:100px;padding:5px 12px;font-size:.72rem;color:white;font-weight:600;letter-spacing:.06em;">⏸ Investment Closed</div>
              <div style="background:rgba(12,26,46,.6);backdrop-filter:blur(4px);border-radius:var(--r);padding:12px 16px;">
                <div style="font-size:.7rem;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.1em;margin-bottom:3px;">Private Room · San Jose, California</div>
                <div style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:white;font-weight:400;">Private Room 1 — Cozy Stay</div>
                <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
                  <span style="color:#F5A623;font-size:.82rem;">★★★★★</span>
                  <span style="color:white;font-size:.78rem;font-weight:600;">4.9</span>
                  <span style="color:rgba(255,255,255,.5);font-size:.72rem;">(10 reviews)</span>
                </div>
              </div>
            </div>
        
            <div class="tx-asset-header" style="margin-top:4px;">
              <div class="tx-asset-ticker">Private Room · San Jose, California</div>
              <div class="tx-asset-name">Private Room 1 — Cozy Stay</div>
              <div style="display:flex;gap:20px;margin-top:14px;flex-wrap:wrap;">
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--green)">5%</div><div style="font-size:.72rem;color:var(--ink-muted)">Projected cap rate</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">$60/night</div><div style="font-size:.72rem;color:var(--ink-muted)">Avg nightly rate</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">$1,800/mo</div><div style="font-size:.72rem;color:var(--ink-muted)">Avg monthly rev.</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">4.9 ★</div><div style="font-size:.72rem;color:var(--ink-muted)">10 Airbnb reviews</div></div>
              </div>
              <div style="margin-top:14px;background:#FDF6E8;border:1px solid rgba(200,150,46,.25);border-radius:var(--r);padding:11px 14px;font-size:.8rem;color:#8a6520;font-weight:500;">
                ⏸ This investment round is currently closed. Click "Notify me" to be alerted when it opens.
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About the Unit</div>
              <div class="tx-about-text" style="margin-bottom:16px;">Private Room 1 — Cozy Stay is a well-appointed private room at 458 N 7th Street in San Jose's Japantown/Northside neighbourhood. The room features a queen bed, shared bathroom access, and a comfortable, tastefully designed space ideal for solo travelers and business visitors. Guests have access to shared common areas and a fully equipped kitchen. Located minutes from SAP Center, San Jose State University, and major Silicon Valley tech campuses. Rated ★ 4.9 across 10 Airbnb reviews, with guests consistently praising the warmth of the host, cleanliness, and excellent location.</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Address:</span> <strong>458 N 7th St, San Jose CA</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Neighbourhood:</span> <strong>Japantown / Northside</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Room type:</span> <strong>Private Room</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Bed:</span> <strong>1 Queen Bed · Shared Bath</strong></div>
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Property type</div><div class="v">Short-Term Rental</div></div>
                <div class="tx-stat-item"><div class="k">Cap rate</div><div class="v">5%</div></div>
                <div class="tx-stat-item"><div class="k">Avg nightly rate</div><div class="v">$60/night</div></div>
                <div class="tx-stat-item"><div class="k">Avg occupancy</div><div class="v">88% avg</div></div>
                <div class="tx-stat-item"><div class="k">Airbnb rating</div><div class="v">4.9 / 5.0</div></div>
                <div class="tx-stat-item"><div class="k">Total reviews</div><div class="v">10</div></div>
                <div class="tx-stat-item"><div class="k">Structure</div><div class="v">Investment · SPV</div></div>
                <div class="tx-stat-item"><div class="k">Status</div><div class="v" style="color:#8a6520;">⏸ Closed</div></div>
              </div>
            </div>
            <div class="tx-map-card">
              <div class="tx-map-header">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Property Location
              </div>
              <iframe class="tx-map-frame"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-121.9100%2C37.3300%2C-121.8700%2C37.3520&amp;layer=mapnik&amp;marker=37.3412%2C-121.8900"
                title="458 N 7th St, San Jose, CA" loading="lazy" referrerpolicy="no-referrer">
              </iframe>
              <div class="tx-map-footer">
                <span class="tx-map-addr">📍 458 N 7th Street, San Jose, CA 95112 · Japantown / Northside</span>
                <a class="tx-map-link" href="https://www.openstreetmap.org/?mlat=37.3412&amp;mlon=-121.8900#map=16/37.3412/-121.8900" target="_blank" rel="noopener">Open in maps ↗</a>
              </div>
            </div>
            <div class="tx-section-card" style="padding:14px 16px;">
              <div class="tx-section-title" style="margin-bottom:10px;">View on Airbnb</div>
              <a href="https://www.airbnb.com/rooms/1420822398386139572" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);font-size:.84rem;font-weight:500;">
                <div style="width:34px;height:34px;border-radius:8px;background:#FFF0F0;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#FF5A5F"><path d="M12 2C8.5 2 5 5.5 5 9.5c0 5.25 7 12.5 7 12.5s7-7.25 7-12.5C19 5.5 15.5 2 12 2zm0 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                </div>
                <div><div>Private Room 1 — Cozy Stay</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">View listing on Airbnb ↗</div></div>
                <span style="margin-left:auto;font-size:.72rem;color:var(--blue);font-weight:500;">Open ↗</span>
              </a>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title" style="color:#8a6520;">Investment Closed</div>
          <div style="background:#FDF6E8;border:1px solid rgba(200,150,46,.3);border-radius:var(--r-lg);padding:16px;margin-bottom:18px;text-align:center;">
            <div style="font-size:1.6rem;margin-bottom:6px;">⏸</div>
            <div style="font-size:.88rem;font-weight:600;color:#0C1A2E;margin-bottom:4px;">Round Closed</div>
            <div style="font-size:.78rem;color:#8a6520;line-height:1.6;">This investment opportunity is currently closed. We will notify you when a new round opens.</div>
          </div>
                <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="column" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
                <div><div class="tx-wallet-name">Cash Wallet</div><div class="tx-wallet-sub">FDIC insured</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$318,000</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>

          <div style="background:var(--cream);border-radius:var(--r);padding:12px 14px;margin-bottom:14px;">
            <div style="font-size:.72rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Property snapshot</div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;"><span style="color:var(--ink-muted);">Room type</span><span style="font-weight:600;">Private Room · 1 Queen Bed</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;"><span style="color:var(--ink-muted);">Rating</span><span style="font-weight:600;color:#e8a020;">4.9 ★ (10 reviews)</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;"><span style="color:var(--ink-muted);">Avg nightly</span><span style="font-weight:600;">$60/night</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;"><span style="color:var(--ink-muted);">Cap rate</span><span style="font-weight:600;color:var(--green);">5%</span></div>
          </div>
          <button class="tx-submit-btn" style="background:var(--ink);" onclick="txNotifyUnit('unit-b')">Notify me when open</button>
          <button class="tx-submit-btn" style="background:transparent;color:var(--ink);border:1.5px solid var(--cream-dark);margin-top:8px;" onclick="closeTxPage()">Back to opportunities</button>
          <div class="tx-disclaimer">Investment is currently closed. By requesting a notification you will be contacted when the next round opens. No commitment is made at this stage.</div>
        </div>
      </div>
    </div>

    <!-- ── Private Room — Elegant Stay ── -->
    <div class="tx-page" id="txpage-unit-c">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Private Room — Elegant Stay</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <!-- Hero gradient -->
            <div class="tx-hero-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/21d22495-9c19-4cfa-aa18-327be40c558f.avif) center/cover no-repeat;display:flex;align-items:flex-end;padding:20px;border-radius:var(--r-lg);position:relative;">
              <div style="position:absolute;top:14px;right:14px;background:rgba(12,26,46,.65);backdrop-filter:blur(6px);border-radius:100px;padding:5px 12px;font-size:.72rem;color:white;font-weight:600;letter-spacing:.06em;">⏸ Investment Closed</div>
              <div style="background:rgba(12,26,46,.6);backdrop-filter:blur(4px);border-radius:var(--r);padding:12px 16px;">
                <div style="font-size:.7rem;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.1em;margin-bottom:3px;">Private Room · San Jose, California</div>
                <div style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:white;font-weight:400;">Private Room — Elegant Stay</div>
                <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
                  <span style="color:#F5A623;font-size:.82rem;">★★★★★</span>
                  <span style="color:white;font-size:.78rem;font-weight:600;">4.83</span>
                  <span style="color:rgba(255,255,255,.5);font-size:.72rem;">(6 reviews)</span>
                </div>
              </div>
            </div>
        
            <div class="tx-asset-header" style="margin-top:4px;">
              <div class="tx-asset-ticker">Private Room · San Jose, California</div>
              <div class="tx-asset-name">Private Room — Elegant Stay</div>
              <div style="display:flex;gap:20px;margin-top:14px;flex-wrap:wrap;">
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--green)">5%</div><div style="font-size:.72rem;color:var(--ink-muted)">Projected cap rate</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">$60/night</div><div style="font-size:.72rem;color:var(--ink-muted)">Avg nightly rate</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">$1,800/mo</div><div style="font-size:.72rem;color:var(--ink-muted)">Avg monthly rev.</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">4.83 ★</div><div style="font-size:.72rem;color:var(--ink-muted)">6 Airbnb reviews</div></div>
              </div>
              <div style="margin-top:14px;background:#FDF6E8;border:1px solid rgba(200,150,46,.25);border-radius:var(--r);padding:11px 14px;font-size:.8rem;color:#8a6520;font-weight:500;">
                ⏸ This investment round is currently closed. Click "Notify me" to be alerted when it opens.
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About the Unit</div>
              <div class="tx-about-text" style="margin-bottom:16px;">Private Room — Elegant Stay is a beautifully presented private room at 458 N 7th Street, San Jose. The room features a queen bed, an elegantly styled interior, shared bathroom access, and shared kitchen use. Perfect for business travelers and visitors who appreciate a refined, quiet space in the heart of Japantown. Guests have praised the attention to detail, spotless cleanliness, and the welcoming atmosphere. Rated ★ 4.83 across 6 Airbnb reviews.</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Address:</span> <strong>458 N 7th St, San Jose CA</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Neighbourhood:</span> <strong>Japantown / Northside</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Room type:</span> <strong>Private Room</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Bed:</span> <strong>1 Queen Bed · Shared Bath</strong></div>
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Property type</div><div class="v">Short-Term Rental</div></div>
                <div class="tx-stat-item"><div class="k">Cap rate</div><div class="v">5%</div></div>
                <div class="tx-stat-item"><div class="k">Avg nightly rate</div><div class="v">$60/night</div></div>
                <div class="tx-stat-item"><div class="k">Avg occupancy</div><div class="v">88% avg</div></div>
                <div class="tx-stat-item"><div class="k">Airbnb rating</div><div class="v">4.83 / 5.0</div></div>
                <div class="tx-stat-item"><div class="k">Total reviews</div><div class="v">6</div></div>
                <div class="tx-stat-item"><div class="k">Structure</div><div class="v">Investment · SPV</div></div>
                <div class="tx-stat-item"><div class="k">Status</div><div class="v" style="color:#8a6520;">⏸ Closed</div></div>
              </div>
            </div>
            <div class="tx-map-card">
              <div class="tx-map-header">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Property Location
              </div>
              <iframe class="tx-map-frame"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-121.9100%2C37.3300%2C-121.8700%2C37.3520&amp;layer=mapnik&amp;marker=37.3412%2C-121.8900"
                title="458 N 7th St, San Jose, CA" loading="lazy" referrerpolicy="no-referrer">
              </iframe>
              <div class="tx-map-footer">
                <span class="tx-map-addr">📍 458 N 7th Street, San Jose, CA 95112 · Japantown / Northside</span>
                <a class="tx-map-link" href="https://www.openstreetmap.org/?mlat=37.3412&amp;mlon=-121.8900#map=16/37.3412/-121.8900" target="_blank" rel="noopener">Open in maps ↗</a>
              </div>
            </div>
            <div class="tx-section-card" style="padding:14px 16px;">
              <div class="tx-section-title" style="margin-bottom:10px;">View on Airbnb</div>
              <a href="https://www.airbnb.com/rooms/1435197325380944725" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);font-size:.84rem;font-weight:500;">
                <div style="width:34px;height:34px;border-radius:8px;background:#FFF0F0;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#FF5A5F"><path d="M12 2C8.5 2 5 5.5 5 9.5c0 5.25 7 12.5 7 12.5s7-7.25 7-12.5C19 5.5 15.5 2 12 2zm0 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                </div>
                <div><div>Private Room — Elegant Stay</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">View listing on Airbnb ↗</div></div>
                <span style="margin-left:auto;font-size:.72rem;color:var(--blue);font-weight:500;">Open ↗</span>
              </a>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title" style="color:#8a6520;">Investment Closed</div>
          <div style="background:#FDF6E8;border:1px solid rgba(200,150,46,.3);border-radius:var(--r-lg);padding:16px;margin-bottom:18px;text-align:center;">
            <div style="font-size:1.6rem;margin-bottom:6px;">⏸</div>
            <div style="font-size:.88rem;font-weight:600;color:#0C1A2E;margin-bottom:4px;">Round Closed</div>
            <div style="font-size:.78rem;color:#8a6520;line-height:1.6;">This investment opportunity is currently closed. We will notify you when a new round opens.</div>
          </div>
                <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="column" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
                <div><div class="tx-wallet-name">Cash Wallet</div><div class="tx-wallet-sub">FDIC insured</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$318,000</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>

          <div style="background:var(--cream);border-radius:var(--r);padding:12px 14px;margin-bottom:14px;">
            <div style="font-size:.72rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Property snapshot</div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;"><span style="color:var(--ink-muted);">Room type</span><span style="font-weight:600;">Private Room · 1 Queen Bed</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;"><span style="color:var(--ink-muted);">Rating</span><span style="font-weight:600;color:#e8a020;">4.83 ★ (6 reviews)</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;"><span style="color:var(--ink-muted);">Avg nightly</span><span style="font-weight:600;">$60/night</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;"><span style="color:var(--ink-muted);">Cap rate</span><span style="font-weight:600;color:var(--green);">5%</span></div>
          </div>
          <button class="tx-submit-btn" style="background:var(--ink);" onclick="txNotifyUnit('unit-c')">Notify me when open</button>
          <button class="tx-submit-btn" style="background:transparent;color:var(--ink);border:1.5px solid var(--cream-dark);margin-top:8px;" onclick="closeTxPage()">Back to opportunities</button>
          <div class="tx-disclaimer">Investment is currently closed. By requesting a notification you will be contacted when the next round opens. No commitment is made at this stage.</div>
        </div>
      </div>
    </div>

    <!-- ── Private Room 2 — Modern Stay ── -->
    <div class="tx-page" id="txpage-unit-d">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Private Room 2 — Modern Stay</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <!-- Hero gradient -->
            <div class="tx-hero-img" style="background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/044f95c0-ebd0-47b5-bc9f-5591fed2e0f8.avif) center/cover no-repeat;display:flex;align-items:flex-end;padding:20px;border-radius:var(--r-lg);position:relative;">
              <div style="position:absolute;top:14px;right:14px;background:rgba(12,26,46,.65);backdrop-filter:blur(6px);border-radius:100px;padding:5px 12px;font-size:.72rem;color:white;font-weight:600;letter-spacing:.06em;">⏸ Investment Closed</div>
              <div style="background:rgba(12,26,46,.6);backdrop-filter:blur(4px);border-radius:var(--r);padding:12px 16px;">
                <div style="font-size:.7rem;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.1em;margin-bottom:3px;">Private Room · San Jose, California</div>
                <div style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:white;font-weight:400;">Private Room 2 — Modern Stay</div>
                <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
                  <span style="color:#F5A623;font-size:.82rem;">★★★★★</span>
                  <span style="color:white;font-size:.78rem;font-weight:600;">4.9</span>
                  <span style="color:rgba(255,255,255,.5);font-size:.72rem;">(10 reviews)</span>
                </div>
              </div>
            </div>
        
            <div class="tx-asset-header" style="margin-top:4px;">
              <div class="tx-asset-ticker">Private Room · San Jose, California</div>
              <div class="tx-asset-name">Private Room 2 — Modern Stay</div>
              <div style="display:flex;gap:20px;margin-top:14px;flex-wrap:wrap;">
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--green)">5%</div><div style="font-size:.72rem;color:var(--ink-muted)">Projected cap rate</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">$60/night</div><div style="font-size:.72rem;color:var(--ink-muted)">Avg nightly rate</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">$1,800/mo</div><div style="font-size:.72rem;color:var(--ink-muted)">Avg monthly rev.</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">4.9 ★</div><div style="font-size:.72rem;color:var(--ink-muted)">10 Airbnb reviews</div></div>
              </div>
              <div style="margin-top:14px;background:#FDF6E8;border:1px solid rgba(200,150,46,.25);border-radius:var(--r);padding:11px 14px;font-size:.8rem;color:#8a6520;font-weight:500;">
                ⏸ This investment round is currently closed. Click "Notify me" to be alerted when it opens.
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About the Unit</div>
              <div class="tx-about-text" style="margin-bottom:16px;">Private Room 2 — Modern Stay is a contemporary private room at 458 N 7th Street, San Jose, designed with clean modern aesthetics and thoughtful amenities. The room features a queen bed, shared bathroom access, and access to a fully equipped shared kitchen and living spaces. Ideally positioned for tech professionals, contractors, and short-stay visitors in the heart of Silicon Valley. Rated ★ 4.9 across 10 Airbnb reviews, with guests highlighting the modern decor, comfort, and seamless self check-in.</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Address:</span> <strong>458 N 7th St, San Jose CA</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Neighbourhood:</span> <strong>Japantown / Northside</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Room type:</span> <strong>Private Room</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Bed:</span> <strong>1 Queen Bed · Shared Bath</strong></div>
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Property type</div><div class="v">Short-Term Rental</div></div>
                <div class="tx-stat-item"><div class="k">Cap rate</div><div class="v">5%</div></div>
                <div class="tx-stat-item"><div class="k">Avg nightly rate</div><div class="v">$60/night</div></div>
                <div class="tx-stat-item"><div class="k">Avg occupancy</div><div class="v">88% avg</div></div>
                <div class="tx-stat-item"><div class="k">Airbnb rating</div><div class="v">4.9 / 5.0</div></div>
                <div class="tx-stat-item"><div class="k">Total reviews</div><div class="v">10</div></div>
                <div class="tx-stat-item"><div class="k">Structure</div><div class="v">Investment · SPV</div></div>
                <div class="tx-stat-item"><div class="k">Status</div><div class="v" style="color:#8a6520;">⏸ Closed</div></div>
              </div>
            </div>
            <div class="tx-map-card">
              <div class="tx-map-header">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Property Location
              </div>
              <iframe class="tx-map-frame"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-121.9100%2C37.3300%2C-121.8700%2C37.3520&amp;layer=mapnik&amp;marker=37.3412%2C-121.8900"
                title="458 N 7th St, San Jose, CA" loading="lazy" referrerpolicy="no-referrer">
              </iframe>
              <div class="tx-map-footer">
                <span class="tx-map-addr">📍 458 N 7th Street, San Jose, CA 95112 · Japantown / Northside</span>
                <a class="tx-map-link" href="https://www.openstreetmap.org/?mlat=37.3412&amp;mlon=-121.8900#map=16/37.3412/-121.8900" target="_blank" rel="noopener">Open in maps ↗</a>
              </div>
            </div>
            <div class="tx-section-card" style="padding:14px 16px;">
              <div class="tx-section-title" style="margin-bottom:10px;">View on Airbnb</div>
              <a href="https://www.airbnb.com/rooms/1424119770106341445" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);font-size:.84rem;font-weight:500;">
                <div style="width:34px;height:34px;border-radius:8px;background:#FFF0F0;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#FF5A5F"><path d="M12 2C8.5 2 5 5.5 5 9.5c0 5.25 7 12.5 7 12.5s7-7.25 7-12.5C19 5.5 15.5 2 12 2zm0 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                </div>
                <div><div>Private Room 2 — Modern Stay</div><div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;">View listing on Airbnb ↗</div></div>
                <span style="margin-left:auto;font-size:.72rem;color:var(--blue);font-weight:500;">Open ↗</span>
              </a>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title" style="color:#8a6520;">Investment Closed</div>
          <div style="background:#FDF6E8;border:1px solid rgba(200,150,46,.3);border-radius:var(--r-lg);padding:16px;margin-bottom:18px;text-align:center;">
            <div style="font-size:1.6rem;margin-bottom:6px;">⏸</div>
            <div style="font-size:.88rem;font-weight:600;color:#0C1A2E;margin-bottom:4px;">Round Closed</div>
            <div style="font-size:.78rem;color:#8a6520;line-height:1.6;">This investment opportunity is currently closed. We will notify you when a new round opens.</div>
          </div>
                <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="column" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
                <div><div class="tx-wallet-name">Cash Wallet</div><div class="tx-wallet-sub">FDIC insured</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$318,000</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>

          <div style="background:var(--cream);border-radius:var(--r);padding:12px 14px;margin-bottom:14px;">
            <div style="font-size:.72rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;">Property snapshot</div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;"><span style="color:var(--ink-muted);">Room type</span><span style="font-weight:600;">Private Room · 1 Queen Bed</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;"><span style="color:var(--ink-muted);">Rating</span><span style="font-weight:600;color:#e8a020;">4.9 ★ (10 reviews)</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;"><span style="color:var(--ink-muted);">Avg nightly</span><span style="font-weight:600;">$60/night</span></div>
            <div style="display:flex;justify-content:space-between;font-size:.82rem;padding:4px 0;"><span style="color:var(--ink-muted);">Cap rate</span><span style="font-weight:600;color:var(--green);">5%</span></div>
          </div>
          <button class="tx-submit-btn" style="background:var(--ink);" onclick="txNotifyUnit('unit-d')">Notify me when open</button>
          <button class="tx-submit-btn" style="background:transparent;color:var(--ink);border:1.5px solid var(--cream-dark);margin-top:8px;" onclick="closeTxPage()">Back to opportunities</button>
          <div class="tx-disclaimer">Investment is currently closed. By requesting a notification you will be contacted when the next round opens. No commitment is made at this stage.</div>
        </div>
      </div>
    </div>


    <!-- ── Termii ── -->
    <div class="tx-page" id="txpage-termii">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Termii</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <div class="tx-hero-img" style="background:url(https://aidiventures.com/asset/images/termii-ban-new.png) center/cover no-repeat;display:flex;align-items:flex-end;padding:20px;border-radius:var(--r-lg);position:relative;">
              <div style="position:absolute;top:14px;right:14px;background:rgba(26,122,94,.85);backdrop-filter:blur(6px);border-radius:100px;padding:5px 12px;font-size:.72rem;color:white;font-weight:600;letter-spacing:.06em;">✦ Open for investment</div>
              <div style="background:rgba(12,26,46,.6);backdrop-filter:blur(4px);border-radius:var(--r);padding:12px 16px;">
                <div style="font-size:.7rem;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.1em;margin-bottom:3px;">Private Markets · San Jose, CA</div>
                <div style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:white;font-weight:400;">Termii</div>
                <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
                  <span style="color:rgba(255,255,255,.7);font-size:.78rem;">AI Payments Infrastructure</span>
                </div>
              </div>
            </div>
            <div class="tx-asset-header" style="margin-top:4px;">
              <div class="tx-asset-ticker">Private Markets · San Jose, California</div>
              <div class="tx-asset-name">Termii</div>
              <div style="display:flex;gap:20px;margin-top:14px;flex-wrap:wrap;">
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--green)">$5M</div><div style="font-size:.72rem;color:var(--ink-muted)">Annualised revenue</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">$1M</div><div style="font-size:.72rem;color:var(--ink-muted)">Available allocation</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">Private</div><div style="font-size:.72rem;color:var(--ink-muted)">Valuation</div></div>
              </div>
              <div style="margin-top:14px;background:#E8F5EF;border:1px solid rgba(26,122,94,.25);border-radius:var(--r);padding:11px 14px;font-size:.8rem;color:#1a7a5e;font-weight:500;">
                ✦ You have an active allocation in this deal. $1M available for co-investors.
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About Termii</div>
              <div class="tx-about-text" style="margin-bottom:16px;">Termii prevents transactions like logins, payments, checkouts, fraud alerts, and OTPs from failing — using AI. The company sits at the intersection of communications infrastructure and financial services, providing a mission-critical layer for businesses that cannot afford failed authentications. Termii is headquartered in San Jose, CA and serves enterprise clients across fintech, e-commerce, and banking.</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">HQ:</span> <strong>San Jose, California</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Stage:</span> <strong>Growth</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">ARR:</span> <strong>$5M annualised</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Valuation:</span> <strong>Private</strong></div>
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Sector</div><div class="v">AI · Payments · Comms</div></div>
                <div class="tx-stat-item"><div class="k">ARR</div><div class="v">$5M</div></div>
                <div class="tx-stat-item"><div class="k">Allocation</div><div class="v">$1M available</div></div>
                <div class="tx-stat-item"><div class="k">Valuation</div><div class="v">Private</div></div>
                <div class="tx-stat-item"><div class="k">Location</div><div class="v">San Jose, CA</div></div>
                <div class="tx-stat-item"><div class="k">Website</div><div class="v"><a href="https://termii.com" target="_blank" rel="noopener" style="color:var(--blue);">termii.com ↗</a></div></div>
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Investor Resources</div>
              <a href="https://deck.termii.com/pOUU3jsNhA" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;padding:12px 14px;background:var(--cream);border-radius:var(--r);text-decoration:none;color:var(--ink);font-size:.84rem;font-weight:500;">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Company Deck <span style="margin-left:auto;color:var(--blue);">Open ↗</span>
              </a>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title">Invest in Termii</div>
          <div class="tx-buying-power"><span class="lbl">Buying power</span><span class="val">$318,000</span></div>
          <div style="background:#E8F5EF;border:1px solid rgba(26,122,94,.2);border-radius:var(--r);padding:10px 14px;margin-bottom:16px;font-size:.78rem;color:#1a7a5e;font-weight:500;">✦ Private market · $5M ARR · $1M allocation available</div>
          <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="column" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
                <div><div class="tx-wallet-name">Cash Wallet</div><div class="tx-wallet-sub">FDIC insured</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$318,000</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Investment amount (USD)</div>
            <input class="tx-form-input" type="number" placeholder="25000" min="25000" step="5000" id="termiiAmount" oninput="txCalcPrivate('termii')">
            <div class="tx-form-input-hint">Minimum $25,000 · Increments of $5,000</div>
          </div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Total committed</span><span id="termiiCost">$0.00</span></div>
          <button class="tx-submit-btn" onclick="txSubmitPrivate('termii','Termii','San Jose, CA')">Review investment</button>
          <div style="margin-top:12px;"><a href="https://deck.termii.com/pOUU3jsNhA" target="_blank" rel="noopener" style="display:block;text-align:center;font-size:.78rem;color:var(--blue);font-weight:500;">View company deck ↗</a></div>
          <div class="tx-disclaimer">Private market investments are illiquid and high risk. Only suitable for sophisticated investors. Returns are not guaranteed. Facilitated by Aidi via SPV. Min. $25,000.</div>
        </div>
      </div>
    </div>

    <!-- ── Rayda ── -->
    <div class="tx-page" id="txpage-rayda">
      <div class="tx-topbar">
        <button class="tx-back-btn" onclick="closeTxPage()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Rayda</div>
        <div class="tx-topbar-right"></div>
      </div>
      <div class="tx-body">
        <div class="tx-left">
          <div class="tx-left-inner">
            <div class="tx-hero-img" style="background:url(https://aidiventures.com/asset/images/plan_1661112808.jpg) center/cover no-repeat;display:flex;align-items:flex-end;padding:20px;border-radius:var(--r-lg);position:relative;">
              <div style="position:absolute;top:14px;right:14px;background:rgba(26,122,94,.85);backdrop-filter:blur(6px);border-radius:100px;padding:5px 12px;font-size:.72rem;color:white;font-weight:600;letter-spacing:.06em;">✦ Open for investment</div>
              <div style="background:rgba(12,26,46,.6);backdrop-filter:blur(4px);border-radius:var(--r);padding:12px 16px;">
                <div style="font-size:.7rem;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.1em;margin-bottom:3px;">Private Markets · Delaware</div>
                <div style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:white;font-weight:400;">Rayda</div>
                <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
                  <span style="color:rgba(255,255,255,.7);font-size:.78rem;">IT Asset Management</span>
                </div>
              </div>
            </div>
            <div class="tx-asset-header" style="margin-top:4px;">
              <div class="tx-asset-ticker">Private Markets · Delaware</div>
              <div class="tx-asset-name">Rayda</div>
              <div style="display:flex;gap:20px;margin-top:14px;flex-wrap:wrap;">
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--green)">$5.4M</div><div style="font-size:.72rem;color:var(--ink-muted)">Annualised revenue</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">$1M</div><div style="font-size:.72rem;color:var(--ink-muted)">Available allocation</div></div>
                <div><div style="font-size:1.3rem;font-weight:600;color:var(--ink)">Private</div><div style="font-size:.72rem;color:var(--ink-muted)">Valuation</div></div>
              </div>
              <div style="margin-top:14px;background:#E8F5EF;border:1px solid rgba(26,122,94,.25);border-radius:var(--r);padding:11px 14px;font-size:.8rem;color:#1a7a5e;font-weight:500;">
                ✦ You have an active allocation in this deal. $1M available for co-investors.
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">About Rayda</div>
              <div class="tx-about-text" style="margin-bottom:16px;">Rayda enables businesses to acquire, manage, and recycle IT equipment for their remote and distributed teams. As the shift to remote and hybrid work becomes permanent, companies face a growing operational challenge managing devices across geographies. Rayda solves this end-to-end — from procurement and deployment to maintenance and responsible recycling — making it a critical infrastructure layer for the modern distributed workforce.</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">HQ:</span> <strong>Delaware</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Stage:</span> <strong>Growth</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">ARR:</span> <strong>$5.4M annualised</strong></div>
                <div style="font-size:.82rem;"><span style="color:var(--ink-muted);">Valuation:</span> <strong>Private</strong></div>
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Key Statistics</div>
              <div class="tx-stats-grid">
                <div class="tx-stat-item"><div class="k">Sector</div><div class="v">IT Asset Mgmt · SaaS</div></div>
                <div class="tx-stat-item"><div class="k">ARR</div><div class="v">$5.4M</div></div>
                <div class="tx-stat-item"><div class="k">Allocation</div><div class="v">$1M available</div></div>
                <div class="tx-stat-item"><div class="k">Valuation</div><div class="v">Private</div></div>
                <div class="tx-stat-item"><div class="k">Location</div><div class="v">Delaware</div></div>
                <div class="tx-stat-item"><div class="k">Website</div><div class="v"><a href="https://rayda.co" target="_blank" rel="noopener" style="color:var(--blue);">rayda.co ↗</a></div></div>
              </div>
            </div>
            <div class="tx-section-card">
              <div class="tx-section-title">Investor Resources</div>
              <a href="https://show.zohopublic.com/publish/gj1uu6663192a8eee4d0fb513ba5126aa68d4" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;padding:12px 14px;background:var(--cream);border-radius:var(--r);text-decoration:none;color:var(--ink);font-size:.84rem;font-weight:500;">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Company Deck <span style="margin-left:auto;color:var(--blue);">Open ↗</span>
              </a>
            </div>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-form-title">Invest in Rayda</div>
          <div class="tx-buying-power"><span class="lbl">Buying power</span><span class="val">$318,000</span></div>
          <div style="background:#E8F5EF;border:1px solid rgba(26,122,94,.2);border-radius:var(--r);padding:10px 14px;margin-bottom:16px;font-size:.78rem;color:#1a7a5e;font-weight:500;">✦ Private market · $5.4M ARR · $1M allocation available</div>
          <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Debit from wallet</div>
            <div class="tx-wallet-options">
            <label class="tx-wallet-option selected" onclick="txSelectWallet(this)">
              <input type="radio" name="txWallet" value="column" checked>
              <div class="tx-wallet-option-left">
                <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
                <div><div class="tx-wallet-name">Cash Wallet</div><div class="tx-wallet-sub">FDIC insured</div></div>
              </div>
              <div style="display:flex;align-items:center;gap:0;">
                <div class="tx-wallet-balance">$318,000</div>
                <div class="tx-wallet-check"></div>
              </div>
            </label>
            </div>
          </div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Investment amount (USD)</div>
            <input class="tx-form-input" type="number" placeholder="25000" min="25000" step="5000" id="raydaAmount" oninput="txCalcPrivate('rayda')">
            <div class="tx-form-input-hint">Minimum $25,000 · Increments of $5,000</div>
          </div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Total committed</span><span id="raydaCost">$0.00</span></div>
          <button class="tx-submit-btn" onclick="txSubmitPrivate('rayda','Rayda','Delaware')">Review investment</button>
          <div style="margin-top:12px;"><a href="https://show.zohopublic.com/publish/gj1uu6663192a8eee4d0fb513ba5126aa68d4" target="_blank" rel="noopener" style="display:block;text-align:center;font-size:.78rem;color:var(--blue);font-weight:500;">View company deck ↗</a></div>
          <div class="tx-disclaimer">Private market investments are illiquid and high risk. Only suitable for sophisticated investors. Returns are not guaranteed. Facilitated by Aidi via SPV. Min. $25,000.</div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
      JAVASCRIPT
    ════════════════════════════════════════════ -->


    <!-- ══════════════════════════════════════════
      ENTITY MODALS
    ═══════════════════════════════════════════ -->

    <!-- ── Entity Panel CSS ── -->


    <!-- ── Entity Panel Overlay ── -->
    <div class="ent-overlay" id="entOverlay" onclick="closeEntityPanel()"></div>

    <!-- ── Entity Panel ── -->
    <div class="ent-panel" id="entPanel">
      <div class="ent-panel-header">
        <div>
          <div class="ent-panel-title" id="entPanelTitle">Entity Details</div>
          <div class="ent-panel-sub" id="entPanelSub"></div>
        </div>
        <button class="ent-panel-close" onclick="closeEntityPanel()"><svg viewBox="0 0 24 24" width="20" height="20"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="ent-panel-body" id="entPanelBody"></div>
      <div class="ent-panel-actions" id="entPanelActions"></div>
    </div>

    <!-- ── Entity Formation Wizard ── -->
    <div class="ent-wiz-overlay" id="entWizOverlay" onclick="if(event.target===this)closeEntityWizard()">
      <div class="ent-wiz-modal">
        <div class="ent-wiz-header">
          <div class="ent-wiz-title" id="entWizTitle">Form a New Entity</div>
          <button class="ent-wiz-close" onclick="closeEntityWizard()"><svg viewBox="0 0 24 24" width="20" height="20"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
        <div class="ent-wiz-body">
          <div class="ent-wiz-progress" id="entWizProgress"></div>
          <!-- Step 1: Entity type -->
          <div class="ent-wiz-step active" id="entWizStep1">
            <div class="ent-wiz-step-label">Step 1 of 4 — Entity Type</div>
            <div class="ent-wiz-step-title">What type of entity would you like to form?</div>
            <div class="ent-wiz-type-grid">
              <div class="ent-wiz-type-card" id="typeLLC" onclick="entSelectType('LLC')">
                <div class="ent-wiz-type-icon">🏢</div>
                <div class="ent-wiz-type-name">LLC</div>
                <div class="ent-wiz-type-desc">Limited Liability Company. Flexible structure, pass-through taxation, personal liability protection. Ideal for investment holding and small businesses.</div>
              </div>
              <div class="ent-wiz-type-card" id="typeCCorp" onclick="entSelectType('C-Corp')">
                <div class="ent-wiz-type-icon">📈</div>
                <div class="ent-wiz-type-name">C-Corporation</div>
                <div class="ent-wiz-type-desc">Best for raising venture capital, issuing stock, and future IPO paths. Preferred by institutional investors. Delaware is standard.</div>
              </div>
            </div>
            <div style="margin-top:12px;padding:12px 14px;background:var(--cream);border-radius:var(--r);font-size:.78rem;color:var(--ink-muted);">
              <strong style="color:var(--ink);">Not sure?</strong> LLCs are best for holding investments and real estate. C-Corps are standard for startups seeking venture funding.
            </div>
          </div>
          <!-- Step 2: Entity details -->
          <div class="ent-wiz-step" id="entWizStep2">
            <div class="ent-wiz-step-label" id="entWizStep2Label">Step 2 of 4 — Entity Details</div>
            <div class="ent-wiz-step-title" id="entWizStep2Title">Name and register your entity</div>
            <div class="ent-wiz-field">
              <label class="ent-wiz-label">Entity name *</label>
              <input class="ent-wiz-input" type="text" id="entWizName" placeholder="e.g. Adeyemi Ventures LLC">
            </div>
            <div class="ent-wiz-field">
              <label class="ent-wiz-label">State of formation *</label>
              <select class="ent-wiz-select" id="entWizState">
                <option value="">Select state…</option>
                <option value="Delaware" selected>Delaware (recommended)</option>
                <option value="Wyoming">Wyoming</option>
                <option value="Nevada">Nevada</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
                <option value="Texas">Texas</option>
                <option value="Florida">Florida</option>
              </select>
            </div>
            <div class="ent-wiz-field">
              <label class="ent-wiz-label">Purpose / business activity *</label>
              <select class="ent-wiz-select" id="entWizPurpose">
                <option value="">Select purpose…</option>
                <option value="Investment Holding">Investment Holding</option>
                <option value="Real Estate Holdings">Real Estate Holdings</option>
                <option value="Operating Business">Operating Business</option>
                <option value="Family Office">Family Office</option>
                <option value="Technology / SaaS">Technology / SaaS</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="ent-wiz-field">
              <label class="ent-wiz-label">Registered agent email *</label>
              <input class="ent-wiz-input" type="email" id="entWizEmail" placeholder="you@example.com">
            </div>
          </div>
          <!-- Step 3: Ownership -->
          <div class="ent-wiz-step" id="entWizStep3">
            <div class="ent-wiz-step-label">Step 3 of 4 — Ownership</div>
            <div class="ent-wiz-step-title">Who owns this entity?</div>
            <div class="ent-wiz-field">
              <label class="ent-wiz-label">Primary member / shareholder *</label>
              <input class="ent-wiz-input" type="text" id="entWizOwner1" value="James Adeyemi" placeholder="Full legal name">
            </div>
            <div class="ent-wiz-field">
              <label class="ent-wiz-label">Ownership % *</label>
              <input class="ent-wiz-input" type="number" id="entWizOwner1Pct" value="100" min="1" max="100" placeholder="100">
            </div>
            <div class="ent-wiz-field">
              <label class="ent-wiz-label">Additional member (optional)</label>
              <input class="ent-wiz-input" type="text" id="entWizOwner2" placeholder="Full legal name">
            </div>
            <div id="entWizManagerField" style="display:none;">
              <div class="ent-wiz-field">
                <label class="ent-wiz-label">Management structure</label>
                <select class="ent-wiz-select" id="entWizMgmt">
                  <option value="Member-managed">Member-managed</option>
                  <option value="Manager-managed">Manager-managed</option>
                </select>
              </div>
            </div>
          </div>
          <!-- Step 4: Review & pay -->
          <div class="ent-wiz-step" id="entWizStep4">
            <div class="ent-wiz-step-label">Step 4 of 4 — Review & Submit</div>
            <div class="ent-wiz-step-title">Confirm your formation details</div>
            <div id="entWizSummary"></div>
            <div class="ent-wiz-fee-box">
              <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Formation Fee</div>
              <div style="display:flex;justify-content:space-between;font-size:.83rem;padding:4px 0;"><span style="color:var(--ink-muted);">State filing fee</span><span id="entWizStateFee" style="font-weight:600;">$90</span></div>
              <div style="display:flex;justify-content:space-between;font-size:.83rem;padding:4px 0;"><span style="color:var(--ink-muted);">Aidi formation service</span><span style="font-weight:600;">$500</span></div>
              <div style="display:flex;justify-content:space-between;font-size:.83rem;padding:4px 0;"><span style="color:var(--ink-muted);">Registered agent (1yr)</span><span style="font-weight:600;">$150</span></div>
              <div style="display:flex;justify-content:space-between;font-size:.9rem;padding:8px 0 2px;border-top:1px solid var(--cream-mid);margin-top:6px;"><span style="font-weight:600;">Total</span><span id="entWizTotalFee" style="font-weight:700;color:var(--ink);">$740</span></div>
              <div style="font-size:.72rem;color:var(--ink-muted);margin-top:6px;">Debited from your Cash Wallet. Formation typically completes in 3–5 business days.</div>
            </div>
          </div>
        </div>
        <div class="ent-wiz-footer">
          <button class="ent-wiz-footer-btn back" id="entWizBack" onclick="entWizPrev()" style="display:none;">← Back</button>
          <button class="ent-wiz-footer-btn next" id="entWizNext" onclick="entWizNext()">Continue →</button>
        </div>
      </div>
    </div>

    <!-- ── Wallet Transfer Modal ── -->


    <div class="wt-overlay" id="wtOverlay" onclick="closeWalletTransfer()"></div>
    <div class="wt-panel" id="wtPanel">
      <div class="wt-header">
        <div class="wt-header-left">
          <div class="title">Move Money</div>
          <div class="sub">Transfer between your connected wallets</div>
        </div>
        <button class="wt-close" onclick="closeWalletTransfer()"><svg viewBox="0 0 24 24" width="20" height="20"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="wt-body">

        <!-- Live balances strip -->
        <div class="wt-balances">
          <div class="wt-bal-card">
            <div class="wt-bal-label">Cash</div>
            <div class="wt-bal-val">$318,000</div>
            <div class="wt-bal-sub">Cash Wallet</div>
          </div>
          <div class="wt-bal-card">
            <div class="wt-bal-label">Brokerage</div>
            <div class="wt-bal-val">$684,200</div>
            <div class="wt-bal-sub">Brokerage</div>
          </div>
          <div class="wt-bal-card">
            <div class="wt-bal-label">Crypto</div>
            <div class="wt-bal-val">$127,500</div>
            <div class="wt-bal-sub">Crypto Account</div>
          </div>
        </div>

        <!-- Transfer routes -->
        <div class="wt-section-title">Select transfer direction</div>

        <div class="wt-route-card" id="wt-route-1" onclick="wtSelectRoute(1)">
          <div class="wt-route-header">
            <div class="wt-route-icon" style="background:#EFF6FF;color:#1B4FD8;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            <div class="wt-route-name">Cash → Investment Account</div>
          </div>
          <div class="wt-route-desc">Move funds from your Cash Wallet into your Investment Account to buy stocks and ETFs.</div>
          <div class="wt-arrow"><span style="background:#E8F0FE;color:#1B4FD8;padding:2px 8px;border-radius:100px;font-size:.68rem;font-weight:600;">Cash Wallet</span> → <span style="background:#EFF6FF;color:#1B4FD8;padding:2px 8px;border-radius:100px;font-size:.68rem;font-weight:600;">Investment Account</span></div>
        </div>

        <div class="wt-route-card" id="wt-route-2" onclick="wtSelectRoute(2)">
          <div class="wt-route-header">
            <div class="wt-route-icon" style="background:#FFF7ED;color:#EA580C;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            <div class="wt-route-name">Cash → Crypto Account</div>
          </div>
          <div class="wt-route-desc">Move funds from your Cash Wallet into your Crypto Account to buy Bitcoin and other digital assets.</div>
          <div class="wt-arrow"><span style="background:#E8F0FE;color:#1B4FD8;padding:2px 8px;border-radius:100px;font-size:.68rem;font-weight:600;">Cash Wallet</span> → <span style="background:#FFF7ED;color:#EA580C;padding:2px 8px;border-radius:100px;font-size:.68rem;font-weight:600;">Crypto Account</span></div>
        </div>

        <div class="wt-route-card" id="wt-route-3" onclick="wtSelectRoute(3)">
          <div class="wt-route-header">
            <div class="wt-route-icon" style="background:#EFF6FF;color:#1B4FD8;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></div>
            <div class="wt-route-name">Investment Account → Cash</div>
          </div>
          <div class="wt-route-desc">Withdraw funds from your Investment Account back to your Cash Wallet. Settled in 1–2 business days.</div>
          <div class="wt-arrow"><span style="background:#EFF6FF;color:#1B4FD8;padding:2px 8px;border-radius:100px;font-size:.68rem;font-weight:600;">Investment Account</span> → <span style="background:#E8F0FE;color:#1B4FD8;padding:2px 8px;border-radius:100px;font-size:.68rem;font-weight:600;">Cash Wallet</span></div>
        </div>

        <div class="wt-route-card" id="wt-route-4" onclick="wtSelectRoute(4)">
          <div class="wt-route-header">
            <div class="wt-route-icon" style="background:#FFF7ED;color:#EA580C;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></div>
            <div class="wt-route-name">Crypto Account → Cash</div>
          </div>
          <div class="wt-route-desc">Withdraw funds from your Crypto Account back to your Cash Wallet. Settled in 1–3 business days.</div>
          <div class="wt-arrow"><span style="background:#FFF7ED;color:#EA580C;padding:2px 8px;border-radius:100px;font-size:.68rem;font-weight:600;">Crypto Account</span> → <span style="background:#E8F0FE;color:#1B4FD8;padding:2px 8px;border-radius:100px;font-size:.68rem;font-weight:600;">Cash Wallet</span></div>
        </div>

        <!-- Amount form (shown after route selected) -->
        <div class="wt-form" id="wtForm">
          <label class="wt-form-label" id="wtFormLabel">Amount (USD)</label>
          <input class="wt-form-input" type="number" id="wtAmount" placeholder="0.00" min="1" oninput="wtCalc()">
          <div class="wt-form-hint" id="wtFormHint">Available: —</div>
          <div class="wt-summary" id="wtSummary" style="display:none;">
            <div class="wt-summary-row"><span class="k">From</span><span class="v" id="wtSumFrom">—</span></div>
            <div class="wt-summary-row"><span class="k">To</span><span class="v" id="wtSumTo">—</span></div>
            <div class="wt-summary-row"><span class="k">Amount</span><span class="v" id="wtSumAmt">$0.00</span></div>
            <div class="wt-summary-row"><span class="k">Settlement</span><span class="v" id="wtSumSettle">—</span></div>
          </div>
        </div>

      </div>
      <div class="wt-footer">
        <button class="wt-btn secondary" onclick="closeWalletTransfer()">Cancel</button>
        <button class="wt-btn primary" id="wtSubmitBtn" onclick="wtSubmit()" disabled style="opacity:.45;">Review transfer</button>
      </div>
    </div>

    <!-- ── Tax Document Modal ── -->
    <div class="txd-overlay" id="txdOverlay" onclick="if(event.target===this)closeTaxDoc()">
      <div class="txd-modal">
        <div class="txd-header">
          <div><div class="txd-title" id="txdTitle">Tax Document</div><div class="txd-sub" id="txdSub"></div></div>
          <button class="txd-close" onclick="closeTaxDoc()"><svg viewBox="0 0 24 24" width="20" height="20"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
        <div class="txd-body" id="txdBody"></div>
        <div class="txd-footer">
          <button class="txd-btn sec" onclick="closeTaxDoc()">Close</button>
          <button class="txd-btn pri" id="txdDlBtn" onclick="txdDownload()">Download PDF</button>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <!-- Settings Modal -->
    <div class="sm-ov" id="smOv" onclick="if(event.target===this)smClose()">
      <div class="sm-box">
        <div class="sm-hd"><div class="sm-ttl" id="smTtl"></div><button class="sm-x" onclick="smClose()"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
        <div class="sm-bd" id="smBd"></div>
        <div class="sm-ft" id="smFt"></div>
      </div>
    </div>


    <!-- Elia Notification Modal -->
    <div class="en-ov" id="enOv" onclick="if(event.target===this)enClose()">
      <div class="en-box">
        <div class="en-hd">
          <div class="en-hd-left">
            <div class="en-hd-icon" id="enIcon"></div>
            <div><div class="en-ttl" id="enTtl"></div><div class="en-sub" id="enSub"></div></div>
          </div>
          <button class="en-x" onclick="enClose()"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
        <div class="en-bd" id="enBd"></div>
        <div class="en-ft" id="enFt"></div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const CHUNKS = ["/js/dashboard-01.js"]

let loaded = false
async function loadChunks() {
  if (loaded || typeof window === 'undefined') return
  loaded = true
  for (const src of CHUNKS) {
    await new Promise((resolve) => {
      const s = document.createElement('script')
      s.src = src
      s.setAttribute('data-aidi-zone', 'client')
      s.onload = () => resolve()
      s.onerror = () => resolve()
      document.body.appendChild(s)
    })
  }
  // Synthetic DOMContentLoaded — see landing.vue for the full rationale.
  try {
    document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: false, cancelable: false }))
  } catch (e) { /* no-op */ }
  document.dispatchEvent(new Event('aidi:client:ready'))
}

// Activate the current route's .page element. The client zone's CSS
// has `.page { display: none; }` as a default, with `.page.active`
// being the visible state. In the original, showPage(id) added .active
// to one element; now that each page is a route, we do the same
// activation on mount and on any route change.
//
// Uses BOTH a synchronous query AND a MutationObserver — the same
// pattern used in internal.vue. The sync query handles the case where
// the page is already in the DOM by the time activate runs; the
// observer handles the lazy-chunk case where Nuxt is still fetching
// the new route's component when nextTick resolves. Without the
// observer the page stays hidden until something else triggers a
// re-render (the "blank until I click" symptom).
function activate(el) {
  if (!el) return
  el.classList.add('active')
  // Pick display value the way the original showPage() did
  if (el.classList.contains('auth-page') || el.classList.contains('onboard-page')) {
    el.style.display = 'flex'
  } else {
    el.style.display = 'block'
  }
}
function activateInElement(root) {
  if (!root || root.nodeType !== 1) return
  if (root.matches && root.matches('.page')) activate(root)
  if (root.querySelectorAll) {
    root.querySelectorAll('.page').forEach(activate)
  }
}
function activateCurrentPage() {
  const app = document.getElementById('client-app')
  if (!app) return
  // Layout itself contains only .tx-page modals (different class), so
  // the only .page elements in this subtree come from the current route.
  app.querySelectorAll('.page').forEach(activate)
}

let mo = null
function startObserver() {
  if (mo || typeof MutationObserver === 'undefined') return
  const app = document.getElementById('client-app')
  if (!app) return
  mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes && m.addedNodes.forEach(activateInElement)
    }
  })
  mo.observe(app, { childList: true, subtree: true })
}

// Some client pages need their per-page JS init to run when the page
// first appears in the DOM. The dashboard's home chart (#homeChart) is
// drawn by dbNav('home') in dashboard-01.js. The original showDashboard
// flow called showPage('page-dashboard') AND dbNav('home') back-to-back;
// in Nuxt the click navigates straight to /client/dashboard via the
// router plugin's early stub, so dbNav('home') never runs and the chart
// stays blank until the user clicks another nav item then returns.
// We re-run dbNav('home') here once the dashboard DOM is mounted —
// idempotent guard prevents repeated runs from the MutationObserver.
let dashInited = false
function initPageForRoute() {
  const w = window
  const path = route.fullPath
  if (path.startsWith('/client/dashboard')) {
    if (dashInited) return
    const tryInit = (tries) => {
      if (typeof w.dbNav === 'function' && document.getElementById('homeChart')) {
        try { w.dbNav('home'); dashInited = true } catch (e) { /* noop */ }
        return
      }
      if (tries > 30) return
      setTimeout(() => tryInit(tries + 1), 50)
    }
    tryInit(0)
  } else {
    dashInited = false
  }
}

onMounted(async () => {
  await nextTick()
  startObserver()
  activateCurrentPage()
  initPageForRoute()
  loadChunks().then(() => {
    initPageForRoute()
  })
})

// Map a client route path to the expected DOM element id of its .page
// wrapper. Returning null means "any .page is fine" (signin/signup/onboard
// pages all live in their own routes and there's only one .page in the
// layout subtree at a time, so a generic match is correct for those).
function expectedPageIdForPath(path) {
  if (!path) return null
  if (path.startsWith('/client/dashboard')) return 'page-dashboard'
  if (path.startsWith('/client/signin'))    return 'page-signin'
  if (path.startsWith('/client/signup'))    return 'page-signup'
  if (path.startsWith('/client/onboard/'))  return 'page-onboard-' + path.slice('/client/onboard/'.length).split(/[/?#]/)[0]
  return null
}

// Robust route-change activation. After the URL changes, the new page
// component may take a moment to mount (lazy chunk fetch, Suspense
// resolution, etc). A single nextTick is not enough on slower networks
// or first-hit lazy loads — symptom is "blank dashboard until refresh
// or back-and-forward". We poll across animation frames until the
// expected page id appears in the DOM, with a hard cap to avoid
// running forever.
function activateUntilFound(expectedId, deadline) {
  const app = document.getElementById('client-app')
  if (!app) return
  if (expectedId) {
    const target = document.getElementById(expectedId)
    if (target) {
      activate(target)
      // Re-run page-specific init now that the target exists
      initPageForRoute()
      return
    }
  } else {
    const pages = app.querySelectorAll('.page')
    if (pages.length > 0) {
      pages.forEach(activate)
      return
    }
  }
  if (Date.now() < deadline) {
    requestAnimationFrame(() => activateUntilFound(expectedId, deadline))
  }
}

// Re-activate on every route change so client-side nav works.
watch(() => route.fullPath, async (newPath) => {
  await nextTick()
  activateCurrentPage()
  initPageForRoute()
  // Also poll for up to 3s in case the page is still being mounted by
  // an async lazy-loaded route component. Targets the EXPECTED page id
  // for the new route, so we don't stop at a stale previous .page.
  activateUntilFound(expectedPageIdForPath(newPath), Date.now() + 3000)
})

onBeforeUnmount(() => {
  if (mo) { mo.disconnect(); mo = null }
})
</script>
