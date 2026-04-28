<template>
  <div id="internal-app">
    <!-- ═════════════════════════════════════════════════════════════
         ROUTE CONTENT
         The current screen (role gateway, WM signin, WM dashboard,
         admin signin, admin dashboard, etc.) renders here.
         ═════════════════════════════════════════════════════════════ -->
    <slot />

    <!-- ═════════════════════════════════════════════════════════════
         SHARED CHROME (from aidi_internal_v3.html)
         Modals, overlays, and drawers that sit alongside every page
         in this zone. Preserved verbatim from the original merged file.
         Their event handlers live in the scripts under /js/internal-*.js,
         loaded once by this layout below.
         ═════════════════════════════════════════════════════════════ -->
    <!-- ROLE GATEWAY -->
    <!-- page screen-role mounted by Nuxt router -->

    <!-- WM AUTH SCREENS -->
    <!-- page screen-wm-signin mounted by Nuxt router -->

    <!-- WM SIGN UP -->
    <!-- page screen-wm-signup mounted by Nuxt router -->

    <!-- SA AUTH SCREEN (magic link only) -->
    <!-- page screen-sa-signin mounted by Nuxt router -->

    <!-- WM ONBOARD -->
    <!-- page wm-onboard-1 mounted by Nuxt router -->
    <!-- page wm-onboard-2 mounted by Nuxt router -->
    <!-- page wm-onboard-3 mounted by Nuxt router -->
    <!-- page wm-onboard-4 mounted by Nuxt router -->
    <!-- page wm-onboard-5 mounted by Nuxt router -->
    <!-- page wm-onboard-6 mounted by Nuxt router -->
    <!-- page wm-onboard-7 mounted by Nuxt router -->
    <!-- page wm-onboard-success mounted by Nuxt router -->
    <!-- WM DASHBOARD -->
    <!-- page screen-wm mounted by Nuxt router -->

    <!-- SA DASHBOARD -->
    <!-- page screen-admin mounted by Nuxt router -->

    <!-- CLIENT WORKSPACE -->
    <!-- CLIENT WORKSPACE OVERLAY -->
    <div id="cw-ov" onclick="if(event.target===this)closeCW()">
      <div id="cw-modal">

        <!-- Modal header -->
        <div style="display:flex;align-items:center;padding:16px 20px 14px;border-bottom:1px solid var(--cream-mid);gap:14px;flex-shrink:0;background:white;">
          <div id="cw-av" style="width:42px;height:42px;border-radius:50%;background:var(--ink);color:white;display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:500;flex-shrink:0;">EO</div>
          <div style="flex:1;min-width:0;">
            <div style="font-weight:700;font-size:1rem;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" id="cw-name">Emeka Okafor</div>
            <div style="font-size:.76rem;color:var(--ink-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" id="cw-sub">$18.4M AUM · Individual + LLC + Trust</div>
          </div>
          <div style="display:flex;gap:7px;align-items:center;flex-shrink:0;">
            <button class="btn-sm btn-outline" onclick="currentWMTxClient=currentCW;closeCW();wmNav('trade')"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> Trade</button>
            <button onclick="closeCW()" style="width:30px;height:30px;border-radius:50%;border:none;background:var(--cream-mid);cursor:pointer;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='var(--cream-dark)'" onmouseout="this.style.background='var(--cream-mid)'"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
          </div>
        </div>

        <!-- Tab bar -->
        <div style="display:flex;border-bottom:1px solid var(--cream-mid);background:white;flex-shrink:0;overflow-x:auto;">
          <div class="cw-tab-item active" id="cwt-overview" onclick="cwTab('overview')" style="padding:10px 16px;white-space:nowrap;border-bottom:2px solid transparent;margin-bottom:-1px;"><svg viewBox="0 0 24 24" width="13" height="13" style="margin-right:5px;vertical-align:-1px;"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>Overview</div>
          <div class="cw-tab-item" id="cwt-portfolio" onclick="cwTab('portfolio')" style="padding:10px 16px;white-space:nowrap;border-bottom:2px solid transparent;margin-bottom:-1px;"><svg viewBox="0 0 24 24" width="13" height="13" style="margin-right:5px;vertical-align:-1px;"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>Portfolio</div>
          <div class="cw-tab-item" id="cwt-docs" onclick="cwTab('docs')" style="padding:10px 16px;white-space:nowrap;border-bottom:2px solid transparent;margin-bottom:-1px;"><svg viewBox="0 0 24 24" width="13" height="13" style="margin-right:5px;vertical-align:-1px;"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>Documents</div>
          <div class="cw-tab-item adv-only" id="cwt-ai" onclick="cwTab('ai')" style="padding:10px 16px;white-space:nowrap;border-bottom:2px solid transparent;margin-bottom:-1px;"><svg viewBox="0 0 24 24" width="13" height="13" style="margin-right:5px;vertical-align:-1px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>AI Insights</div>
          <div class="cw-tab-item adv-only" id="cwt-creds" onclick="cwTab('creds')" style="padding:10px 16px;white-space:nowrap;border-bottom:2px solid transparent;margin-bottom:-1px;"><svg viewBox="0 0 24 24" width="13" height="13" style="margin-right:5px;vertical-align:-1px;"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Credentials</div>
        </div>

        <!-- Tab content -->
        <div style="flex:1;overflow-y:auto;">

          <!-- OVERVIEW -->
          <div class="cw-tab-view active" id="cwv-overview" style="padding:22px 24px;">
            <div class="nw-card" style="margin-bottom:14px;"><div class="nw-card-inner"><div class="nw-card-label">Total Portfolio Value</div><div class="nw-card-value" id="cw-portval">$18.4M</div><div class="nw-card-change" id="cw-portchg">▲ +$780K (4.2%) YTD</div><div class="nw-card-stats"><div class="nw-card-stat"><div class="v" id="cw-entities">3</div><div class="l">Entities</div></div><div class="nw-card-stat"><div class="v" id="cw-cash">$1.2M</div><div class="l">Cash</div></div><div class="nw-card-stat"><div class="v" id="cw-risk" style="color:#f87171;">High</div><div class="l">Risk Level</div></div></div></div></div>
            <div class="stat-card"><span class="section-label">Onboarding Progress</span>
                <div style="display:flex;flex-direction:column;gap:9px;">
                  <div><div style="display:flex;justify-content:space-between;font-size:.81rem;margin-bottom:3px;"><span>Identity</span><span class="tag tag-green">Complete</span></div><div class="prog-bar"><div class="prog-fill green" style="width:100%"></div></div></div>
                  <div><div style="display:flex;justify-content:space-between;font-size:.81rem;margin-bottom:3px;"><span>Documents</span><span style="font-size:.75rem;color:var(--red);" id="cw-doc-status">3 missing</span></div><div class="prog-bar"><div class="prog-fill gold" style="width:60%"></div></div></div>
                  <div><div style="display:flex;justify-content:space-between;font-size:.81rem;margin-bottom:3px;"><span>KYC/AML</span><span class="tag tag-gold">In Review</span></div><div class="prog-bar"><div class="prog-fill" style="width:80%"></div></div></div>
                </div>
              </div>
          </div>

          <!-- PORTFOLIO -->
          <div class="cw-tab-view" id="cwv-portfolio" style="padding:22px 24px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;"><h2 style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:400;">Portfolio</h2><button class="btn-sm btn-ink" onclick="currentWMTxClient=currentCW;closeCW();wmNav('trade')"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> New Trade</button></div>
            <div class="asset-list">
              <div class="asset-row"><div class="asset-row-icon" style="background:var(--blue-pale);color:var(--blue);">S</div><div class="asset-row-info"><div class="asset-row-name">S&amp;P 500 (SPY)</div><div class="asset-row-sub">US Equities · 34 shares</div></div><div class="asset-row-right"><div class="asset-row-val">$284,000</div><div class="asset-row-chg" style="color:var(--green);">▲ 12.1% YTD</div></div><button class="btn-sm btn-outline" style="margin-left:9px;" onclick="openWMTxPage('spy',currentCW)">Trade</button></div>
              <div class="asset-row"><div class="asset-row-icon" style="background:var(--blue-pale);color:var(--blue);">A</div><div class="asset-row-info"><div class="asset-row-name">Apple (AAPL)</div><div class="asset-row-sub">Technology · 15 shares</div></div><div class="asset-row-right"><div class="asset-row-val">$107,220</div><div class="asset-row-chg" style="color:var(--green);">▲ 18.4% YTD</div></div><button class="btn-sm btn-outline" style="margin-left:9px;" onclick="openWMTxPage('aapl',currentCW)">Trade</button></div>
              <div class="asset-row"><div class="asset-row-icon" style="background:var(--gold-pale);color:var(--gold);">G</div><div class="asset-row-info"><div class="asset-row-name">Gold (IAU)</div><div class="asset-row-sub">Precious Metals · 187 oz allocated vault</div></div><div class="asset-row-right"><div class="asset-row-val">$218,000</div><div class="asset-row-chg" style="color:var(--green);">▲ 7.1% YTD</div></div><button class="btn-sm btn-outline" style="margin-left:9px;" onclick="openWMTxPage('gold',currentCW)">Trade</button></div>
              <div class="asset-row"><div class="asset-row-icon" style="background:#FFF7ED;color:#EA580C;">&#8383;</div><div class="asset-row-info"><div class="asset-row-name">Bitcoin (BTC)</div><div class="asset-row-sub">Crypto · Secure Custody</div></div><div class="asset-row-right"><div class="asset-row-val">$89,250</div><div class="asset-row-chg" style="color:var(--green);">▲ 41.2% YTD</div></div><button class="btn-sm btn-outline" style="margin-left:9px;" onclick="openWMTxPage('btc',currentCW)">Trade</button></div>
              <div class="asset-row"><div class="asset-row-icon" style="background:#ECFEFF;color:#0E7490;">T</div><div class="asset-row-info"><div class="asset-row-name">T-Bill 90-Day</div><div class="asset-row-sub">US Treasury · Cash Account</div></div><div class="asset-row-right"><div class="asset-row-val">$318,000</div><div class="asset-row-chg" style="color:var(--green);">5.18% ann.</div></div><button class="btn-sm btn-outline" style="margin-left:9px;" onclick="openWMTxPage('tbill',currentCW)">Trade</button></div>
            </div>
          </div>

          <!-- OPPORTUNITIES -->

          <!-- DOCUMENTS -->
          <div class="cw-tab-view" id="cwv-docs" style="padding:22px 24px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;"><h2 style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:400;">Documents</h2><button class="btn-sm btn-outline" onclick="showToast('Document request sent ✓')">Request Document</button></div>
            <div class="table-card"><table class="data-table">
              <thead><tr><th>Document</th><th>Category</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                <tr><td><strong>Passport</strong></td><td>Identity</td><td>Jan 12, 2026</td><td><span class="badge badge-active">Verified</span></td><td><button class="btn-sm btn-outline" onclick="openDocViewer('passport')">View</button></td></tr>
                <tr><td><strong>Proof of Address</strong></td><td>Identity</td><td>Jan 12, 2026</td><td><span class="badge badge-active">Verified</span></td><td><button class="btn-sm btn-outline" onclick="openDocViewer('proof-address')">View</button></td></tr>
                <tr><td><strong>Trust Deed</strong></td><td>Entity</td><td>&#8212;</td><td><span class="badge badge-alert">Missing</span></td><td><button class="btn-sm btn-outline" onclick="showToast('Request sent ✓')">Request</button></td></tr>
                <tr><td><strong>LLC Operating Agreement</strong></td><td>Entity</td><td>Apr 6, 2026</td><td><span class="badge badge-review">Under Review</span></td><td><button class="btn-sm btn-outline" onclick="openDocViewer('llc-agreement')">View</button></td></tr>
                <tr><td><strong>1099-B (2025)</strong></td><td>Tax</td><td>Apr 5, 2026</td><td><span class="badge badge-review">Under Review</span></td><td><button class="btn-sm btn-outline" onclick="openDocViewer('1099-b')">View</button></td></tr>
              </tbody>
            </table></div>
          </div>

          <!-- MESSAGES -->


          <!-- AI INSIGHTS -->
          <div class="cw-tab-view" id="cwv-ai" style="padding:22px 24px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <h2 style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:400;">AI Insights</h2>
              <span style="font-size:.72rem;background:var(--blue-pale);color:var(--blue);padding:3px 10px;border-radius:100px;font-weight:600;">Elia &#10022;</span>
            </div>
            <p style="font-size:.78rem;color:var(--ink-muted);margin-bottom:18px;font-style:italic;">For advisor review only &#8212; not financial advice</p>

            <!-- Risk section -->
            <div style="margin-bottom:18px;">
              <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Risk Alerts</div>
              <div style="display:flex;flex-direction:column;gap:10px;">
                <div style="display:flex;gap:12px;align-items:flex-start;background:var(--red-pale);border-radius:12px;padding:13px 15px;border-left:3px solid #EF4444;">
                  <div style="width:32px;height:32px;border-radius:8px;background:rgba(239,68,68,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#EF4444" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg></div>
                  <div style="flex:1;"><div style="font-size:.78rem;font-weight:700;color:#991B1B;margin-bottom:3px;">Concentration Risk &#8212; US Tech 71%</div><div style="font-size:.78rem;color:#7F1D1D;line-height:1.55;">Portfolio is overweight US technology. Elevated drawdown risk given sector volatility. Consider geographic diversification or private credit rebalancing in the next advisory cycle.</div><div style="margin-top:8px;"><button class="btn-sm btn-outline" style="font-size:.72rem;border-color:rgba(239,68,68,.3);color:#991B1B;" onclick="currentWMTxClient=currentCW;closeCW();wmNav('trade')">Start rebalancing &#8594;</button></div></div>
                </div>
                <div style="display:flex;gap:12px;align-items:flex-start;background:#FFFBEB;border-radius:12px;padding:13px 15px;border-left:3px solid var(--gold);">
                  <div style="width:32px;height:32px;border-radius:8px;background:var(--gold-pale);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="var(--gold)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                  <div style="flex:1;"><div style="font-size:.78rem;font-weight:700;color:#92400E;margin-bottom:3px;">Entity Document Gap</div><div style="font-size:.78rem;color:#78350F;line-height:1.55;">Trust deed is outstanding. Required for full entity structuring and tax-optimised distributions. Legal team notified on Apr 8.</div><div style="margin-top:8px;"><button class="btn-sm btn-outline" style="font-size:.72rem;border-color:rgba(200,150,46,.3);color:#92400E;" onclick="cwTab('docs')">View documents &#8594;</button></div></div>
                </div>
              </div>
            </div>

            <!-- Opportunity section -->
            <div style="margin-bottom:18px;">
              <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Matched Opportunities</div>
              <div style="display:flex;flex-direction:column;gap:10px;">
                <div style="display:flex;gap:12px;align-items:flex-start;background:var(--blue-pale);border-radius:12px;padding:13px 15px;border-left:3px solid var(--blue);">
                  <div style="width:32px;height:32px;border-radius:8px;background:rgba(27,79,216,.12);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="var(--blue)" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
                  <div style="flex:1;"><div style="font-size:.78rem;font-weight:700;color:var(--blue);margin-bottom:3px;">Bridge Loan Fund III &#8212; Strong Match</div><div style="font-size:.78rem;color:#1e40af;line-height:1.55;">Matches accreditation status, private credit allocation target (currently 0%), and min investment threshold ($25K). 10.5% target return. Deadline Apr 24.</div><div style="margin-top:8px;"><button class="btn-sm btn-outline" style="font-size:.72rem;border-color:rgba(27,79,216,.3);color:var(--blue);" onclick="cwTab('opps')">View opportunity &#8594;</button></div></div>
                </div>
              </div>
            </div>

            <!-- Next best actions -->
            <div>
              <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Suggested Next Actions</div>
              <div style="background:var(--cream);border-radius:12px;overflow:hidden;">
                <div style="display:flex;align-items:center;gap:10px;padding:11px 14px;border-bottom:1px solid var(--cream-mid);"><div style="width:6px;height:6px;border-radius:50%;background:#EF4444;flex-shrink:0;"></div><div style="flex:1;font-size:.81rem;color:var(--ink);">Schedule rebalancing call &#8212; discuss tech concentration</div><span style="font-size:.7rem;background:rgba(239,68,68,.1);color:#991B1B;padding:2px 7px;border-radius:100px;font-weight:600;flex-shrink:0;">Urgent</span></div>
                <div style="display:flex;align-items:center;gap:10px;padding:11px 14px;border-bottom:1px solid var(--cream-mid);"><div style="width:6px;height:6px;border-radius:50%;background:var(--gold);flex-shrink:0;"></div><div style="flex:1;font-size:.81rem;color:var(--ink);">Request trust deed from client or legal team</div><span style="font-size:.7rem;background:var(--gold-pale);color:var(--gold);padding:2px 7px;border-radius:100px;font-weight:600;flex-shrink:0;">This week</span></div>
                <div style="display:flex;align-items:center;gap:10px;padding:11px 14px;"><div style="width:6px;height:6px;border-radius:50%;background:var(--blue);flex-shrink:0;"></div><div style="flex:1;font-size:.81rem;color:var(--ink);">Present Bridge Fund III allocation proposal</div><span style="font-size:.7rem;background:var(--blue-pale);color:var(--blue);padding:2px 7px;border-radius:100px;font-weight:600;flex-shrink:0;">Before Apr 24</span></div>
              </div>
            </div>
          </div>

          <!-- CREDENTIALS -->
          <div class="cw-tab-view" id="cwv-creds" style="padding:22px 24px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
              <h2 style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:400;">Credentials</h2>
              <div style="display:flex;gap:7px;">
                <button class="btn-sm btn-outline" onclick="showToast('Reset link sent ✓')">Send Reset Link</button>
                <button class="btn-sm btn-ink" onclick="openModal('modal-creds',currentCW)">Change Credentials</button>
              </div>
            </div>

            <!-- Account info card -->
            <div style="background:var(--cream);border-radius:14px;padding:20px;margin-bottom:14px;">
              <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:14px;">Account Details</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                <div><div style="font-size:.68rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:5px;">Username</div><div style="font-size:.9rem;font-weight:600;font-family:monospace;color:var(--ink);" id="cw-username">emeka.okafor</div></div>
                <div><div style="font-size:.68rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:5px;">Email</div><div style="font-size:.87rem;color:var(--ink);" id="cw-email"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2a4f474f414b6a45414b4c455804494547">[email&#160;protected]</a></div></div>
                <div><div style="font-size:.68rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:5px;">Account Status</div><span class="badge badge-active">Active</span></div>
                <div><div style="font-size:.68rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:5px;">Last Login</div><div style="font-size:.86rem;color:var(--ink);">Apr 10, 2026 &#8212; 07:44 AM</div></div>
              </div>
            </div>

            <!-- Security card -->
            <div style="background:var(--cream);border-radius:14px;padding:20px;margin-bottom:14px;">
              <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:14px;">Security</div>
              <div style="display:flex;flex-direction:column;gap:0;">
                <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--cream-mid);">
                  <div><div style="font-size:.84rem;font-weight:500;color:var(--ink);">Two-Factor Authentication</div><div style="font-size:.74rem;color:var(--ink-muted);margin-top:1px;">Authenticator app (TOTP)</div></div>
                  <span style="background:var(--green-pale);color:var(--green);padding:2px 9px;border-radius:100px;font-size:.72rem;font-weight:600;">Enabled</span>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--cream-mid);">
                  <div><div style="font-size:.84rem;font-weight:500;color:var(--ink);">Password</div><div style="font-size:.74rem;color:var(--ink-muted);margin-top:1px;">Last changed Mar 28, 2026</div></div>
                  <button class="btn-sm btn-outline" style="font-size:.73rem;" onclick="showToast('Temp password sent ✓')">Send Temp Password</button>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;">
                  <div><div style="font-size:.84rem;font-weight:500;color:var(--ink);">2FA Reset</div><div style="font-size:.74rem;color:var(--ink-muted);margin-top:1px;">Generates a new TOTP seed for the client</div></div>
                  <button class="btn-sm btn-outline" style="font-size:.73rem;" onclick="showToast('2FA reset link sent ✓')">Reset 2FA</button>
                </div>
              </div>
            </div>

            <!-- Danger zone -->
            <div style="border:1px solid rgba(192,57,43,.18);border-radius:14px;padding:18px;">
              <div style="font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--red);margin-bottom:12px;">Danger Zone</div>
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div><div style="font-size:.84rem;font-weight:500;color:var(--ink);">Suspend Account</div><div style="font-size:.74rem;color:var(--ink-muted);margin-top:1px;">Immediately blocks client login and trading</div></div>
                <button class="btn-sm btn-red" onclick="showToast('Account suspended')">Suspend Account</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- TRADE PAGES -->
    <!-- TX Confirm overlay (shared) -->
    <div class="tx-confirm-overlay" id="wmTxConfirmOverlay">
      <div class="tx-confirm-modal">
        <div class="tx-confirm-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
        <div class="tx-confirm-title" id="wmTxConfirmTitle">Order submitted</div>
        <div class="tx-confirm-text" id="wmTxConfirmText">Instruction executed by Aidi on behalf of the client.</div>
        <div class="tx-confirm-detail" id="wmTxConfirmDetail"></div>
        <button class="tx-confirm-close" onclick="document.getElementById('wmTxConfirmOverlay').classList.remove('open')">Done</button>
      </div>
    </div>

    <!-- SPY -->
    <div class="tx-page" id="wm-txpage-spy">
      <div class="tx-topbar-wm">
        <button class="tx-back-btn" onclick="closeWMTx()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">S&P 500 ETF (SPY)</div>
        <div id="wm-tx-client-spy" class="tx-client-badge">No client selected</div>
      </div>
      <div class="tx-body">
        <div class="tx-left"><div class="tx-left-inner">
          <div class="tx-asset-header">
            <div class="tx-asset-ticker">NYSE ARCA · SPY · Aidi</div>
            <div class="tx-asset-name">S&P 500 ETF Trust</div>
            <div style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$583.42</div>
            <div class="tx-price-change" style="color:var(--green)">▲ +4.68 (+0.81%) Today</div>
            <div class="tx-price-after">▲ +0.12 (+0.02%) After hours</div>
          </div>
          <div class="tx-chart-card">
            <div class="tx-chart-tabs" style="margin-bottom:16px;">
              <button class="tx-chart-tab active" onclick="wmTxTab(this,'wmChart-spy')">1D</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-spy')">1W</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-spy')">1M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-spy')">3M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-spy')">YTD</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-spy')">1Y</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-spy')">MAX</button>
            </div>
            <canvas id="wmChart-spy" height="200" style="width:100%;display:block;"></canvas>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">About</div>
            <div class="tx-about-text">The SPDR S&P 500 ETF Trust (SPY) tracks the S&P 500 Index, offering broad exposure to 500 of the largest U.S. publicly traded companies across all 11 GICS sectors. Launched in 1993, it is the world's largest and most liquid ETF with over $537 billion in assets under management. Executed via Aidi.</div>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">Key Statistics</div>
            <div class="tx-stats-grid">
              <div class="tx-stat-item"><div class="k">AUM</div><div class="v">$537B</div></div>
              <div class="tx-stat-item"><div class="k">Expense Ratio</div><div class="v">0.09%</div></div>
              <div class="tx-stat-item"><div class="k">Dividend Yield</div><div class="v">1.31%</div></div>
              <div class="tx-stat-item"><div class="k">P/E Ratio</div><div class="v">22.4x</div></div>
              <div class="tx-stat-item"><div class="k">52W High</div><div class="v">$610.78</div></div>
              <div class="tx-stat-item"><div class="k">52W Low</div><div class="v">$481.80</div></div>
              <div class="tx-stat-item"><div class="k">Avg Volume</div><div class="v">83.2M</div></div>
              <div class="tx-stat-item"><div class="k">Beta</div><div class="v">1.00</div></div>
            </div>
          </div>
        </div></div>
        <div class="tx-right">
          <div class="tx-form-title">Trade SPY on behalf of client</div>
                <div class="tx-client-selector" style="background:var(--cream);border-radius:var(--r);padding:10px 14px;margin-bottom:14px;border:1.5px solid var(--cream-dark);">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:7px;">Trading on behalf of</div>
            <select class="tx-form-select" style="width:100%;border-radius:var(--r);padding:9px 12px;font-size:.87rem;" id="txClientSel-spy" onchange="wmTxClientChange('spy',this.value)">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor — $18.4M</option>
              <option value="fatima">Fatima Al-Rashid — $31.2M</option>
              <option value="kwame">Kwame Boateng — $8.9M</option>
              <option value="priya">Priya Sharma — $4.2M</option>
              <option value="ibrahim">Ibrahim Hassan — $12.1M</option>
            </select>
          </div>
    <div class="tx-buying-power"><span class="lbl">Client buying power</span><span class="val" id="wm-bp-spy">$318,000</span></div>
          <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Execution via</div>
            <div class="tx-wallet-options">
              <label class="tx-wallet-option selected">
                <input type="radio" name="wmWalletSpy" checked>
                <div class="tx-wallet-option-left">
                  <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                  <div><div class="tx-wallet-name">Aidi</div><div class="tx-wallet-sub">Investment account · Equities</div></div>
                </div>
                <div style="display:flex;align-items:center;gap:0;"><div class="tx-wallet-balance" id="wm-wb-spy">$684,200</div><div class="tx-wallet-check"></div></div>
              </label>
            </div>
          </div>
          <div class="tx-form-row"><span class="tx-form-label">Order type</span><select class="tx-form-select"><option>Market order</option><option>Limit order</option><option>Stop order</option></select></div>
          <div class="tx-form-row"><span class="tx-form-label">Direction</span><select class="tx-form-select"><option>Buy</option><option>Sell</option></select></div>
          <div class="tx-form-row"><span class="tx-form-label">Buy in</span><select class="tx-form-select"><option>Shares</option><option>Dollars</option></select></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Shares</div>
            <input class="tx-form-input" type="number" placeholder="0" min="0" id="wmSpyShares" oninput="wmTxCalc('spy',583.42,this.value,'wmSpyCost')">
            <div class="tx-form-input-hint">Market value: $583.42 per share</div>
          </div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Estimated total</span><span id="wmSpyCost">$0.00</span></div>
          <div class="tx-form-row"><span class="tx-form-label">Auth reference</span><input class="tx-form-input" placeholder="Email ref, call log, signed form…" style="font-size:.82rem;padding:7px 12px;margin-top:0;"></div>
          <button class="tx-submit-btn" onclick="wmTxSubmit('SPY','S&P 500 ETF','wmSpyShares',583.42,'alpaca')">Review &amp; submit</button>
          <div class="tx-disclaimer">Executed by Aidi on behalf of client. Auth reference required. Routed directly — no admin approval needed for equities.</div>
        </div>
      </div>
    </div>

    <!-- AAPL -->
    <div class="tx-page" id="wm-txpage-aapl">
      <div class="tx-topbar-wm">
        <button class="tx-back-btn" onclick="closeWMTx()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Apple Inc. (AAPL)</div>
        <div id="wm-tx-client-aapl" class="tx-client-badge">No client selected</div>
      </div>
      <div class="tx-body">
        <div class="tx-left"><div class="tx-left-inner">
          <div class="tx-asset-header">
            <div class="tx-asset-ticker">NASDAQ · AAPL · Aidi</div>
            <div class="tx-asset-name">Apple Inc.</div>
            <div style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$214.44</div>
            <div class="tx-price-change" style="color:var(--green)">▲ +2.56 (+1.21%) Today</div>
            <div class="tx-price-after">▲ +0.04 (+0.02%) After hours</div>
          </div>
          <div class="tx-chart-card">
            <div class="tx-chart-tabs" style="margin-bottom:16px;">
              <button class="tx-chart-tab active" onclick="wmTxTab(this,'wmChart-aapl')">1D</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-aapl')">1W</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-aapl')">1M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-aapl')">3M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-aapl')">YTD</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-aapl')">1Y</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-aapl')">MAX</button>
            </div>
            <canvas id="wmChart-aapl" height="200" style="width:100%;display:block;"></canvas>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">About</div>
            <div class="tx-about-text">Apple Inc. designs, manufactures and markets smartphones, personal computers, tablets, wearables and accessories worldwide. Services include the App Store, Apple Music, iCloud, Apple Pay and Apple TV+. Headquartered in Cupertino, California. Executed via Aidi.</div>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">Key Statistics</div>
            <div class="tx-stats-grid">
              <div class="tx-stat-item"><div class="k">Market Cap</div><div class="v">$3.31T</div></div>
              <div class="tx-stat-item"><div class="k">P/E Ratio</div><div class="v">29.8x</div></div>
              <div class="tx-stat-item"><div class="k">EPS (TTM)</div><div class="v">$6.97</div></div>
              <div class="tx-stat-item"><div class="k">Dividend Yield</div><div class="v">0.44%</div></div>
              <div class="tx-stat-item"><div class="k">52W High</div><div class="v">$260.10</div></div>
              <div class="tx-stat-item"><div class="k">52W Low</div><div class="v">$164.08</div></div>
              <div class="tx-stat-item"><div class="k">Revenue (TTM)</div><div class="v">$391B</div></div>
              <div class="tx-stat-item"><div class="k">Beta</div><div class="v">1.24</div></div>
            </div>
          </div>
        </div></div>
        <div class="tx-right">
          <div class="tx-form-title">Trade AAPL on behalf of client</div>
                <div class="tx-client-selector" style="background:var(--cream);border-radius:var(--r);padding:10px 14px;margin-bottom:14px;border:1.5px solid var(--cream-dark);">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:7px;">Trading on behalf of</div>
            <select class="tx-form-select" style="width:100%;border-radius:var(--r);padding:9px 12px;font-size:.87rem;" id="txClientSel-aapl" onchange="wmTxClientChange('aapl',this.value)">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor — $18.4M</option>
              <option value="fatima">Fatima Al-Rashid — $31.2M</option>
              <option value="kwame">Kwame Boateng — $8.9M</option>
              <option value="priya">Priya Sharma — $4.2M</option>
              <option value="ibrahim">Ibrahim Hassan — $12.1M</option>
            </select>
          </div>
    <div class="tx-buying-power"><span class="lbl">Client buying power</span><span class="val" id="wm-bp-aapl">$318,000</span></div>
          <div class="tx-wallet-selector">
            <div class="tx-wallet-label">Execution via</div>
            <div class="tx-wallet-options">
              <label class="tx-wallet-option selected">
                <input type="radio" name="wmWalletAapl" checked>
                <div class="tx-wallet-option-left">
                  <div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                  <div><div class="tx-wallet-name">Aidi</div><div class="tx-wallet-sub">Investment account · Equities</div></div>
                </div>
                <div style="display:flex;align-items:center;gap:0;"><div class="tx-wallet-balance" id="wm-wb-aapl">$684,200</div><div class="tx-wallet-check"></div></div>
              </label>
            </div>
          </div>
          <div class="tx-form-row"><span class="tx-form-label">Order type</span><select class="tx-form-select"><option>Market order</option><option>Limit order</option><option>Stop order</option></select></div>
          <div class="tx-form-row"><span class="tx-form-label">Direction</span><select class="tx-form-select"><option>Buy</option><option>Sell</option></select></div>
          <div class="tx-form-row"><span class="tx-form-label">Buy in</span><select class="tx-form-select"><option>Shares</option><option>Dollars</option></select></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Shares</div>
            <input class="tx-form-input" type="number" placeholder="0" min="0" id="wmAaplShares" oninput="wmTxCalc('aapl',214.44,this.value,'wmAaplCost')">
            <div class="tx-form-input-hint">Market value: $214.44 per share</div>
          </div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Estimated total</span><span id="wmAaplCost">$0.00</span></div>
          <div class="tx-form-row"><span class="tx-form-label">Auth reference</span><input class="tx-form-input" placeholder="Email ref, call log, signed form…" style="font-size:.82rem;padding:7px 12px;margin-top:0;"></div>
          <button class="tx-submit-btn" onclick="wmTxSubmit('AAPL','Apple Inc.','wmAaplShares',214.44,'alpaca')">Review &amp; submit</button>
          <div class="tx-disclaimer">Executed by Aidi on behalf of client. Auth reference required. Routed directly — no admin approval needed for equities.</div>
        </div>
      </div>
    </div>

    <!-- NVDA -->
    <div class="tx-page" id="wm-txpage-nvda">
      <div class="tx-topbar-wm">
        <button class="tx-back-btn" onclick="closeWMTx()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">NVIDIA Corp. (NVDA)</div>
        <div id="wm-tx-client-nvda" class="tx-client-badge">No client selected</div>
      </div>
      <div class="tx-body">
        <div class="tx-left"><div class="tx-left-inner">
          <div class="tx-asset-header">
            <div class="tx-asset-ticker">NASDAQ · NVDA · Aidi</div>
            <div class="tx-asset-name">NVIDIA Corporation</div>
            <div style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$875.39</div>
            <div class="tx-price-change" style="color:var(--green)">▲ +22.41 (+2.63%) Today</div>
          </div>
          <div class="tx-chart-card">
            <div class="tx-chart-tabs" style="margin-bottom:16px;">
              <button class="tx-chart-tab active" onclick="wmTxTab(this,'wmChart-nvda')">1D</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-nvda')">1W</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-nvda')">1M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-nvda')">3M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-nvda')">YTD</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-nvda')">1Y</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-nvda')">MAX</button>
            </div>
            <canvas id="wmChart-nvda" height="200" style="width:100%;display:block;"></canvas>
          </div>
          <div class="tx-section-card"><div class="tx-section-title">About</div><div class="tx-about-text">NVIDIA designs and sells GPUs, system-on-chip units, and software for gaming, data centres, autonomous vehicles, and AI. It is the dominant supplier of AI training hardware globally. Executed via Aidi.</div></div>
          <div class="tx-section-card"><div class="tx-section-title">Key Statistics</div><div class="tx-stats-grid">
            <div class="tx-stat-item"><div class="k">Market Cap</div><div class="v">$2.16T</div></div>
            <div class="tx-stat-item"><div class="k">P/E Ratio</div><div class="v">68.4x</div></div>
            <div class="tx-stat-item"><div class="k">EPS (TTM)</div><div class="v">$12.96</div></div>
            <div class="tx-stat-item"><div class="k">Revenue (TTM)</div><div class="v">$96.3B</div></div>
            <div class="tx-stat-item"><div class="k">52W High</div><div class="v">$974.00</div></div>
            <div class="tx-stat-item"><div class="k">52W Low</div><div class="v">$461.86</div></div>
            <div class="tx-stat-item"><div class="k">Beta</div><div class="v">1.72</div></div>
            <div class="tx-stat-item"><div class="k">Sector</div><div class="v">Semiconductors</div></div>
          </div></div>
        </div></div>
        <div class="tx-right">
          <div class="tx-form-title">Trade NVDA on behalf of client</div>
                <div class="tx-client-selector" style="background:var(--cream);border-radius:var(--r);padding:10px 14px;margin-bottom:14px;border:1.5px solid var(--cream-dark);">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:7px;">Trading on behalf of</div>
            <select class="tx-form-select" style="width:100%;border-radius:var(--r);padding:9px 12px;font-size:.87rem;" id="txClientSel-nvda" onchange="wmTxClientChange('nvda',this.value)">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor — $18.4M</option>
              <option value="fatima">Fatima Al-Rashid — $31.2M</option>
              <option value="kwame">Kwame Boateng — $8.9M</option>
              <option value="priya">Priya Sharma — $4.2M</option>
              <option value="ibrahim">Ibrahim Hassan — $12.1M</option>
            </select>
          </div>
    <div class="tx-buying-power"><span class="lbl">Client buying power</span><span class="val" id="wm-bp-nvda">$318,000</span></div>
          <div class="tx-wallet-selector"><div class="tx-wallet-label">Execution via</div><div class="tx-wallet-options"><label class="tx-wallet-option selected"><input type="radio" name="wmWalletNvda" checked><div class="tx-wallet-option-left"><div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div><div class="tx-wallet-name">Aidi</div><div class="tx-wallet-sub">Investment account · Equities</div></div></div><div style="display:flex;align-items:center;gap:0;"><div class="tx-wallet-balance" id="wm-wb-nvda">$684,200</div><div class="tx-wallet-check"></div></div></label></div></div>
          <div class="tx-form-row"><span class="tx-form-label">Order type</span><select class="tx-form-select"><option>Market order</option><option>Limit order</option><option>Stop order</option></select></div>
          <div class="tx-form-row"><span class="tx-form-label">Direction</span><select class="tx-form-select"><option>Buy</option><option>Sell</option></select></div>
          <div style="padding:14px 0;"><div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Shares</div><input class="tx-form-input" type="number" placeholder="0" min="0" id="wmNvdaShares" oninput="wmTxCalc('nvda',875.39,this.value,'wmNvdaCost')"><div class="tx-form-input-hint">Market value: $875.39 per share</div></div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Estimated total</span><span id="wmNvdaCost">$0.00</span></div>
          <div class="tx-form-row"><span class="tx-form-label">Auth reference</span><input class="tx-form-input" placeholder="Email ref, call log…" style="font-size:.82rem;padding:7px 12px;margin-top:0;"></div>
          <button class="tx-submit-btn" onclick="wmTxSubmit('NVDA','NVIDIA Corp.','wmNvdaShares',875.39,'alpaca')">Review &amp; submit</button>
          <div class="tx-disclaimer">Executed via Aidi. Routed directly — no admin approval needed for equities.</div>
        </div>
      </div>
    </div>

    <!-- BTC -->
    <div class="tx-page" id="wm-txpage-btc">
      <div class="tx-topbar-wm">
        <button class="tx-back-btn" onclick="closeWMTx()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Bitcoin (BTC)</div>
        <div id="wm-tx-client-btc" class="tx-client-badge">No client selected</div>
      </div>
      <div class="tx-body">
        <div class="tx-left"><div class="tx-left-inner">
          <div class="tx-asset-header">
            <div class="tx-asset-ticker">Cryptocurrency · Aidi</div>
            <div class="tx-asset-name">Bitcoin</div>
            <div style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$93,407</div>
            <div class="tx-price-change" style="color:var(--green)">▲ +3,120 (+3.45%) Today</div>
          </div>
          <div class="tx-chart-card">
            <div class="tx-chart-tabs" style="margin-bottom:16px;">
              <button class="tx-chart-tab active" onclick="wmTxTab(this,'wmChart-btc')">1D</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-btc')">1W</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-btc')">1M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-btc')">3M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-btc')">YTD</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-btc')">1Y</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-btc')">MAX</button>
            </div>
            <canvas id="wmChart-btc" height="200" style="width:100%;display:block;"></canvas>
          </div>
          <div class="tx-section-card"><div class="tx-section-title">About</div><div class="tx-about-text">Bitcoin is the world's first and largest decentralised cryptocurrency by market capitalisation. Executed by Aidi on behalf of client. Assets held in institutional-grade custody with comprehensive insurance. Highly volatile — suitable only for clients with appropriate risk tolerance and written authorisation.</div></div>
          <div class="tx-section-card"><div class="tx-section-title">Key Statistics</div><div class="tx-stats-grid">
            <div class="tx-stat-item"><div class="k">Market Cap</div><div class="v">$1.85T</div></div>
            <div class="tx-stat-item"><div class="k">24h Volume</div><div class="v">$48.2B</div></div>
            <div class="tx-stat-item"><div class="k">Circulating</div><div class="v">19.8M BTC</div></div>
            <div class="tx-stat-item"><div class="k">All-time high</div><div class="v">$108,786</div></div>
            <div class="tx-stat-item"><div class="k">52W Low</div><div class="v">$52,400</div></div>
            <div class="tx-stat-item"><div class="k">Custody</div><div class="v">Aidi</div></div>
            <div class="tx-stat-item"><div class="k">Insurance</div><div class="v">$250M+</div></div>
            <div class="tx-stat-item"><div class="k">Settlement</div><div class="v">Instant</div></div>
          </div></div>
        </div></div>
        <div class="tx-right">
          <div class="tx-form-title">Trade BTC on behalf of client</div>
                <div class="tx-client-selector" style="background:var(--cream);border-radius:var(--r);padding:10px 14px;margin-bottom:14px;border:1.5px solid var(--cream-dark);">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:7px;">Trading on behalf of</div>
            <select class="tx-form-select" style="width:100%;border-radius:var(--r);padding:9px 12px;font-size:.87rem;" id="txClientSel-btc" onchange="wmTxClientChange('btc',this.value)">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor — $18.4M</option>
              <option value="fatima">Fatima Al-Rashid — $31.2M</option>
              <option value="kwame">Kwame Boateng — $8.9M</option>
              <option value="priya">Priya Sharma — $4.2M</option>
              <option value="ibrahim">Ibrahim Hassan — $12.1M</option>
            </select>
          </div>
    <div class="tx-buying-power"><span class="lbl">Client buying power</span><span class="val" id="wm-bp-btc">$127,500</span></div>
          <div class="tx-wallet-selector"><div class="tx-wallet-label">Execution via</div><div class="tx-wallet-options"><label class="tx-wallet-option selected"><input type="radio" name="wmWalletBtc" checked><div class="tx-wallet-option-left"><div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg></div><div><div class="tx-wallet-name">Aidi</div><div class="tx-wallet-sub">Crypto account · Digital assets</div></div></div><div style="display:flex;align-items:center;gap:0;"><div class="tx-wallet-balance" id="wm-wb-btc">$127,500</div><div class="tx-wallet-check"></div></div></label></div></div>
          <div class="tx-form-row"><span class="tx-form-label">Direction</span><select class="tx-form-select"><option>Buy</option><option>Sell</option></select></div>
          <div class="tx-form-row"><span class="tx-form-label">Buy in</span><select class="tx-form-select"><option>USD</option><option>BTC</option></select></div>
          <div style="padding:14px 0;"><div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Amount (USD)</div><input class="tx-form-input" type="number" placeholder="0.00" min="0" id="wmBtcAmount" oninput="wmTxCalcCrypto(this.value,93407,'wmBtcEquiv','wmBtcCost')"><div class="tx-form-input-hint" id="wmBtcEquiv">≈ 0.00000 BTC · Market price $93,407</div></div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Estimated total</span><span id="wmBtcCost">$0.00</span></div>
          <div class="tx-form-row"><span class="tx-form-label">Auth reference</span><input class="tx-form-input" placeholder="Written client authorisation ref…" style="font-size:.82rem;padding:7px 12px;margin-top:0;"></div>
          <button class="tx-submit-btn" onclick="wmTxSubmitCrypto('BTC','Bitcoin','wmBtcAmount','alpaca-crypto')">Review &amp; submit</button>
          <div class="tx-disclaimer">Crypto is highly volatile. Executed via Aidi. Client written authorisation required. Routed directly — no admin approval needed.</div>
        </div>
      </div>
    </div>

    <!-- ETH -->
    <div class="tx-page" id="wm-txpage-eth">
      <div class="tx-topbar-wm">
        <button class="tx-back-btn" onclick="closeWMTx()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Ethereum (ETH)</div>
        <div id="wm-tx-client-eth" class="tx-client-badge">No client selected</div>
      </div>
      <div class="tx-body">
        <div class="tx-left"><div class="tx-left-inner">
          <div class="tx-asset-header">
            <div class="tx-asset-ticker">Cryptocurrency · Aidi</div>
            <div class="tx-asset-name">Ethereum</div>
            <div style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$3,142</div>
            <div class="tx-price-change" style="color:var(--green)">▲ +89.40 (+2.93%) Today</div>
          </div>
          <div class="tx-chart-card">
            <div class="tx-chart-tabs" style="margin-bottom:16px;">
              <button class="tx-chart-tab active" onclick="wmTxTab(this,'wmChart-eth')">1D</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-eth')">1W</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-eth')">1M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-eth')">3M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-eth')">YTD</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-eth')">1Y</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-eth')">MAX</button>
            </div>
            <canvas id="wmChart-eth" height="200" style="width:100%;display:block;"></canvas>
          </div>
          <div class="tx-section-card"><div class="tx-section-title">About</div><div class="tx-about-text">Ethereum is the world's second-largest cryptocurrency and the leading smart contract platform. Executed by Aidi on behalf of client. Institutional-grade custody. Highly volatile — client written authorisation required.</div></div>
          <div class="tx-section-card"><div class="tx-section-title">Key Statistics</div><div class="tx-stats-grid">
            <div class="tx-stat-item"><div class="k">Market Cap</div><div class="v">$378B</div></div>
            <div class="tx-stat-item"><div class="k">24h Volume</div><div class="v">$18.4B</div></div>
            <div class="tx-stat-item"><div class="k">All-time high</div><div class="v">$4,891</div></div>
            <div class="tx-stat-item"><div class="k">52W Low</div><div class="v">$1,520</div></div>
            <div class="tx-stat-item"><div class="k">Staking yield</div><div class="v">~4.2%</div></div>
            <div class="tx-stat-item"><div class="k">Custody</div><div class="v">Aidi</div></div>
          </div></div>
        </div></div>
        <div class="tx-right">
          <div class="tx-form-title">Trade ETH on behalf of client</div>
                <div class="tx-client-selector" style="background:var(--cream);border-radius:var(--r);padding:10px 14px;margin-bottom:14px;border:1.5px solid var(--cream-dark);">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:7px;">Trading on behalf of</div>
            <select class="tx-form-select" style="width:100%;border-radius:var(--r);padding:9px 12px;font-size:.87rem;" id="txClientSel-eth" onchange="wmTxClientChange('eth',this.value)">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor — $18.4M</option>
              <option value="fatima">Fatima Al-Rashid — $31.2M</option>
              <option value="kwame">Kwame Boateng — $8.9M</option>
              <option value="priya">Priya Sharma — $4.2M</option>
              <option value="ibrahim">Ibrahim Hassan — $12.1M</option>
            </select>
          </div>
    <div class="tx-buying-power"><span class="lbl">Client buying power</span><span class="val" id="wm-bp-eth">$127,500</span></div>
          <div class="tx-wallet-selector"><div class="tx-wallet-label">Execution via</div><div class="tx-wallet-options"><label class="tx-wallet-option selected"><input type="radio" name="wmWalletEth" checked><div class="tx-wallet-option-left"><div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg></div><div><div class="tx-wallet-name">Aidi</div><div class="tx-wallet-sub">Crypto account · Digital assets</div></div></div><div style="display:flex;align-items:center;gap:0;"><div class="tx-wallet-balance" id="wm-wb-eth">$127,500</div><div class="tx-wallet-check"></div></div></label></div></div>
          <div class="tx-form-row"><span class="tx-form-label">Direction</span><select class="tx-form-select"><option>Buy</option><option>Sell</option></select></div>
          <div class="tx-form-row"><span class="tx-form-label">Buy in</span><select class="tx-form-select"><option>USD</option><option>ETH</option></select></div>
          <div style="padding:14px 0;"><div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Amount (USD)</div><input class="tx-form-input" type="number" placeholder="0.00" min="0" id="wmEthAmount" oninput="wmTxCalcCrypto(this.value,3142,'wmEthEquiv','wmEthCost')"><div class="tx-form-input-hint" id="wmEthEquiv">≈ 0.00000 ETH · Market price $3,142</div></div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Estimated total</span><span id="wmEthCost">$0.00</span></div>
          <div class="tx-form-row"><span class="tx-form-label">Auth reference</span><input class="tx-form-input" placeholder="Written client authorisation ref…" style="font-size:.82rem;padding:7px 12px;margin-top:0;"></div>
          <button class="tx-submit-btn" onclick="wmTxSubmitCrypto('ETH','Ethereum','wmEthAmount','alpaca-crypto')">Review &amp; submit</button>
          <div class="tx-disclaimer">Crypto is highly volatile. Executed via Aidi. Client written authorisation required. Routed directly — no admin approval needed.</div>
        </div>
      </div>
    </div>

    <!-- T-BILL -->
    <div class="tx-page" id="wm-txpage-tbill">
      <div class="tx-topbar-wm">
        <button class="tx-back-btn" onclick="closeWMTx()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">90-Day T-Bill</div>
        <div id="wm-tx-client-tbill" class="tx-client-badge">No client selected</div>
      </div>
      <div class="tx-body">
        <div class="tx-left"><div class="tx-left-inner">
          <div class="tx-asset-header">
            <div class="tx-asset-ticker">US Treasury · Cash Account · AAA · Aidi</div>
            <div class="tx-asset-name">90-Day Treasury Bill</div>
            <div style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">5.18% yield</div>
            <div class="tx-price-change" style="color:var(--ink-muted)">Annualised · Auto-roll enabled</div>
          </div>
          <div class="tx-chart-card">
            <div style="font-size:.82rem;color:var(--ink-muted);margin-bottom:12px;">Historical yield</div>
            <canvas id="wmChart-tbill" height="200" style="width:100%;display:block;"></canvas>
          </div>
          <div class="tx-section-card"><div class="tx-section-title">About</div><div class="tx-about-text">US Treasury Bills are short-term government debt obligations backed by the US federal government. 90-Day T-Bills mature in 90 days and automatically roll over. Virtually zero credit risk. State and local tax exempt. Executed by Aidi on behalf of client.</div></div>
          <div class="tx-section-card"><div class="tx-section-title">Key Statistics</div><div class="tx-stats-grid">
            <div class="tx-stat-item"><div class="k">Current yield</div><div class="v">5.18%</div></div>
            <div class="tx-stat-item"><div class="k">Term</div><div class="v">90 days</div></div>
            <div class="tx-stat-item"><div class="k">Issuer</div><div class="v">US Treasury</div></div>
            <div class="tx-stat-item"><div class="k">Credit rating</div><div class="v">AAA</div></div>
            <div class="tx-stat-item"><div class="k">Min. investment</div><div class="v">$1,000</div></div>
            <div class="tx-stat-item"><div class="k">Auto-roll</div><div class="v">Enabled</div></div>
            <div class="tx-stat-item"><div class="k">Tax</div><div class="v">State exempt</div></div>
            <div class="tx-stat-item"><div class="k">Execution</div><div class="v">Aidi</div></div>
          </div></div>
        </div></div>
        <div class="tx-right">
          <div class="tx-form-title">Invest in T-Bills for client</div>
                <div class="tx-client-selector" style="background:var(--cream);border-radius:var(--r);padding:10px 14px;margin-bottom:14px;border:1.5px solid var(--cream-dark);">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:7px;">Trading on behalf of</div>
            <select class="tx-form-select" style="width:100%;border-radius:var(--r);padding:9px 12px;font-size:.87rem;" id="txClientSel-tbill" onchange="wmTxClientChange('tbill',this.value)">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor — $18.4M</option>
              <option value="fatima">Fatima Al-Rashid — $31.2M</option>
              <option value="kwame">Kwame Boateng — $8.9M</option>
              <option value="priya">Priya Sharma — $4.2M</option>
              <option value="ibrahim">Ibrahim Hassan — $12.1M</option>
            </select>
          </div>
    <div class="tx-buying-power"><span class="lbl">Client buying power</span><span class="val" id="wm-bp-tbill">$318,000</span></div>
          <div class="tx-wallet-selector"><div class="tx-wallet-label">Execution via</div><div class="tx-wallet-options"><label class="tx-wallet-option selected"><input type="radio" name="wmWalletTbill" checked><div class="tx-wallet-option-left"><div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div><div><div class="tx-wallet-name">Aidi</div><div class="tx-wallet-sub">Cash account · US Treasury</div></div></div><div style="display:flex;align-items:center;gap:0;"><div class="tx-wallet-balance" id="wm-wb-tbill">$318,000</div><div class="tx-wallet-check"></div></div></label></div></div>
          <div style="background:var(--green-pale);border-radius:var(--r);padding:10px 12px;margin-bottom:12px;font-size:.8rem;color:var(--green);font-weight:500;">✓ 5.18% annualised yield · Auto-roll on maturity</div>
          <div class="tx-form-row"><span class="tx-form-label">Term</span><select class="tx-form-select"><option>90 days</option><option>6 months</option><option>1 year</option></select></div>
          <div style="padding:14px 0;"><div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Investment amount (USD)</div><input class="tx-form-input" type="number" placeholder="1000" min="1000" step="1000" id="wmTbillAmount" oninput="wmTxCalcTBill(this.value)"><div class="tx-form-input-hint">Minimum $1,000 · Increments of $1,000</div></div>
          <div style="padding:8px 0;font-size:.82rem;color:var(--ink-soft);">Projected income: <strong id="wmTbillIncome">$0.00</strong> over 90 days</div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Total investment</span><span id="wmTbillCost">$0.00</span></div>
          <div class="tx-form-row"><span class="tx-form-label">Auth reference</span><input class="tx-form-input" placeholder="Client authorisation ref…" style="font-size:.82rem;padding:7px 12px;margin-top:0;"></div>
          <button class="tx-submit-btn" onclick="wmTxSubmitTBill()">Review &amp; submit</button>
          <div class="tx-disclaimer">T-Bills are backed by the US government. Executed via Aidi. Routed directly — no admin approval needed.</div>
        </div>
      </div>
    </div>

    <!-- GOLD — routes to admin approval -->
    <div class="tx-page" id="wm-txpage-gold">
      <div class="tx-topbar-wm">
        <button class="tx-back-btn" onclick="closeWMTx()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Allocated Gold (IAU)</div>
        <div id="wm-tx-client-gold" class="tx-client-badge">No client selected</div>
      </div>
      <div class="tx-body">
        <div class="tx-left"><div class="tx-left-inner">
          <div class="tx-asset-header">
            <div class="tx-asset-ticker">Precious Metals · Secure Vault · Admin Approved</div>
            <div class="tx-asset-name">Allocated Gold</div>
            <div style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$3,142 / oz</div>
            <div class="tx-price-change" style="color:var(--green)">▲ +16.40 (+0.52%) Today</div>
          </div>
          <div class="tx-chart-card">
            <div class="tx-chart-tabs" style="margin-bottom:16px;">
              <button class="tx-chart-tab active" onclick="wmTxTab(this,'wmChart-gold')">1D</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-gold')">1W</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-gold')">1M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-gold')">3M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-gold')">YTD</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-gold')">1Y</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-gold')">MAX</button>
            </div>
            <canvas id="wmChart-gold" height="200" style="width:100%;display:block;"></canvas>
          </div>
          <div class="tx-section-card"><div class="tx-section-title">About</div><div class="tx-about-text">Physically allocated gold bullion stored in a secure, fully insured vault. Clients own specific registered bars — not pooled or leveraged positions. Vault is fully insured and audited. Settlement is T+2. Gold purchases require Aidi Super Admin approval before execution.</div></div>
          <div class="tx-section-card"><div class="tx-section-title">Key Statistics</div><div class="tx-stats-grid">
            <div class="tx-stat-item"><div class="k">Spot price</div><div class="v">$3,142/oz</div></div>
            <div class="tx-stat-item"><div class="k">Purity</div><div class="v">99.99% fine</div></div>
            <div class="tx-stat-item"><div class="k">Storage</div><div class="v">Secure Vault</div></div>
            <div class="tx-stat-item"><div class="k">Insurance</div><div class="v">Fully insured</div></div>
            <div class="tx-stat-item"><div class="k">52W High</div><div class="v">$3,224/oz</div></div>
            <div class="tx-stat-item"><div class="k">52W Low</div><div class="v">$2,104/oz</div></div>
            <div class="tx-stat-item"><div class="k">YTD return</div><div class="v">+7.1%</div></div>
            <div class="tx-stat-item"><div class="k">Settlement</div><div class="v">T+2 after approval</div></div>
          </div></div>
        </div></div>
        <div class="tx-right">
          <div class="tx-form-title">Gold purchase request</div>
          <div class="tx-admin-notice"><strong>⚠ Requires Admin Approval</strong>Gold and silver purchases are reviewed and approved by the Aidi team before execution. Typically processed within 1 business day.</div>
                <div class="tx-client-selector" style="background:var(--cream);border-radius:var(--r);padding:10px 14px;margin-bottom:14px;border:1.5px solid var(--cream-dark);">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:7px;">Trading on behalf of</div>
            <select class="tx-form-select" style="width:100%;border-radius:var(--r);padding:9px 12px;font-size:.87rem;" id="txClientSel-gold" onchange="wmTxClientChange('gold',this.value)">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor — $18.4M</option>
              <option value="fatima">Fatima Al-Rashid — $31.2M</option>
              <option value="kwame">Kwame Boateng — $8.9M</option>
              <option value="priya">Priya Sharma — $4.2M</option>
              <option value="ibrahim">Ibrahim Hassan — $12.1M</option>
            </select>
          </div>
    <div class="tx-buying-power"><span class="lbl">Client cash available</span><span class="val" id="wm-bp-gold">$318,000</span></div>
          <div class="tx-wallet-selector"><div class="tx-wallet-label">Settlement from</div><div class="tx-wallet-options"><label class="tx-wallet-option selected"><input type="radio" name="wmWalletGold" checked><div class="tx-wallet-option-left"><div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div><div><div class="tx-wallet-name">Cash Wallet</div><div class="tx-wallet-sub">FDIC insured · Client account</div></div></div><div style="display:flex;align-items:center;gap:0;"><div class="tx-wallet-balance" id="wm-wb-gold">$318,000</div><div class="tx-wallet-check"></div></div></label></div></div>
          <div class="tx-form-row"><span class="tx-form-label">Vault location</span><select class="tx-form-select"><option>London</option><option>Zurich</option><option>Singapore</option><option>New York</option></select></div>
          <div style="padding:14px 0;"><div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Purchase amount (USD)</div><input class="tx-form-input" type="number" placeholder="10000" min="1000" id="wmGoldAmount" oninput="wmTxCalcGold(this.value)"><div class="tx-form-input-hint" id="wmGoldEquiv">≈ 0.000 oz · Spot $3,142/oz</div></div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Total including 0.15% fee</span><span id="wmGoldCost">$0.00</span></div>
          <div class="tx-form-row"><span class="tx-form-label">Auth reference</span><input class="tx-form-input" placeholder="Client authorisation ref…" style="font-size:.82rem;padding:7px 12px;margin-top:0;"></div>
          <button class="tx-submit-btn admin-route" onclick="wmTxSubmitAdminRoute('Gold Purchase','wmGoldAmount')">Submit for admin approval</button>
          <div class="tx-disclaimer">Gold purchases require Aidi Super Admin approval. Annual vault storage fee of 0.15% applies. Settlement T+2 after approval.</div>
        </div>
      </div>
    </div>

    <!-- SILVER — routes to admin approval -->
    <div class="tx-page" id="wm-txpage-silver">
      <div class="tx-topbar-wm">
        <button class="tx-back-btn" onclick="closeWMTx()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Allocated Silver (XAG)</div>
        <div id="wm-tx-client-silver" class="tx-client-badge">No client selected</div>
      </div>
      <div class="tx-body">
        <div class="tx-left"><div class="tx-left-inner">
          <div class="tx-asset-header">
            <div class="tx-asset-ticker">Precious Metals · Secure Vault · Admin Approved</div>
            <div class="tx-asset-name">Allocated Silver</div>
            <div style="font-size:2rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$29.80 / oz</div>
            <div class="tx-price-change" style="color:var(--green)">▲ +0.32 (+1.09%) Today</div>
          </div>
          <div class="tx-chart-card">
            <div class="tx-chart-tabs" style="margin-bottom:16px;">
              <button class="tx-chart-tab active" onclick="wmTxTab(this,'wmChart-silver')">1D</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-silver')">1W</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-silver')">1M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-silver')">3M</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-silver')">YTD</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-silver')">1Y</button>
              <button class="tx-chart-tab" onclick="wmTxTab(this,'wmChart-silver')">MAX</button>
            </div>
            <canvas id="wmChart-silver" height="200" style="width:100%;display:block;"></canvas>
          </div>
          <div class="tx-section-card"><div class="tx-section-title">About</div><div class="tx-about-text">Physically allocated silver bullion stored in a fully insured vault. Clients own specific registered bars. Settlement T+2. Silver purchases require Aidi Super Admin approval before execution.</div></div>
          <div class="tx-section-card"><div class="tx-section-title">Key Statistics</div><div class="tx-stats-grid">
            <div class="tx-stat-item"><div class="k">Spot price</div><div class="v">$29.80/oz</div></div>
            <div class="tx-stat-item"><div class="k">Purity</div><div class="v">99.9% fine</div></div>
            <div class="tx-stat-item"><div class="k">Storage</div><div class="v">Secure Vault</div></div>
            <div class="tx-stat-item"><div class="k">Insurance</div><div class="v">Fully insured</div></div>
            <div class="tx-stat-item"><div class="k">52W High</div><div class="v">$34.20/oz</div></div>
            <div class="tx-stat-item"><div class="k">52W Low</div><div class="v">$22.10/oz</div></div>
            <div class="tx-stat-item"><div class="k">YTD return</div><div class="v">+4.1%</div></div>
            <div class="tx-stat-item"><div class="k">Settlement</div><div class="v">T+2 after approval</div></div>
          </div></div>
        </div></div>
        <div class="tx-right">
          <div class="tx-form-title">Silver purchase request</div>
          <div class="tx-admin-notice"><strong>⚠ Requires Admin Approval</strong>Silver purchases are reviewed and approved by the Aidi team before execution. Typically processed within 1 business day.</div>
                <div class="tx-client-selector" style="background:var(--cream);border-radius:var(--r);padding:10px 14px;margin-bottom:14px;border:1.5px solid var(--cream-dark);">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:7px;">Trading on behalf of</div>
            <select class="tx-form-select" style="width:100%;border-radius:var(--r);padding:9px 12px;font-size:.87rem;" id="txClientSel-silver" onchange="wmTxClientChange('silver',this.value)">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor — $18.4M</option>
              <option value="fatima">Fatima Al-Rashid — $31.2M</option>
              <option value="kwame">Kwame Boateng — $8.9M</option>
              <option value="priya">Priya Sharma — $4.2M</option>
              <option value="ibrahim">Ibrahim Hassan — $12.1M</option>
            </select>
          </div>
    <div class="tx-buying-power"><span class="lbl">Client cash available</span><span class="val" id="wm-bp-silver">$318,000</span></div>
          <div class="tx-wallet-selector"><div class="tx-wallet-label">Settlement from</div><div class="tx-wallet-options"><label class="tx-wallet-option selected"><input type="radio" name="wmWalletSilver" checked><div class="tx-wallet-option-left"><div class="tx-wallet-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div><div><div class="tx-wallet-name">Cash Wallet</div><div class="tx-wallet-sub">FDIC insured · Client account</div></div></div><div style="display:flex;align-items:center;gap:0;"><div class="tx-wallet-balance" id="wm-wb-silver">$318,000</div><div class="tx-wallet-check"></div></div></label></div></div>
          <div class="tx-form-row"><span class="tx-form-label">Vault location</span><select class="tx-form-select"><option>London</option><option>Zurich</option><option>Singapore</option></select></div>
          <div style="padding:14px 0;"><div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Purchase amount (USD)</div><input class="tx-form-input" type="number" placeholder="5000" min="1000" id="wmSilverAmount" oninput="wmTxCalcSilver(this.value)"><div class="tx-form-input-hint" id="wmSilverEquiv">≈ 0.000 troy oz · Spot $29.80/oz</div></div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Total including 0.15% fee</span><span id="wmSilverCost">$0.00</span></div>
          <div class="tx-form-row"><span class="tx-form-label">Auth reference</span><input class="tx-form-input" placeholder="Client authorisation ref…" style="font-size:.82rem;padding:7px 12px;margin-top:0;"></div>
          <button class="tx-submit-btn admin-route" onclick="wmTxSubmitAdminRoute('Silver Purchase','wmSilverAmount','silver')">Submit for admin approval</button>
          <div class="tx-disclaimer">Silver purchases require Aidi Super Admin approval. Annual vault storage fee of 0.15% applies. Settlement T+2 after approval.</div>
        </div>
      </div>
    </div>

    <!-- PRIVATE MARKET TX PAGES -->

    <!-- BRIDGE LOAN FUND III -->
    <div class="tx-page" id="wm-txpage-bridge">
      <div class="tx-topbar-wm">
        <button class="tx-back-btn" onclick="closeWMTx()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Bridge Loan Fund III</div>
        <div id="wm-tx-client-bridge" class="tx-client-badge">Select client below</div>
      </div>
      <div class="tx-body">
        <div class="tx-left"><div class="tx-left-inner">
          <div class="tx-asset-header">
            <div class="tx-asset-ticker">Private Credit · RE-secured · Admin Approved</div>
            <div class="tx-asset-name">Bridge Loan Fund III</div>
            <div style="font-size:1.6rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">10.5% target annual return</div>
            <div class="tx-price-change" style="color:var(--green)">Quarterly distributions · Auto-reinvest option</div>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">About</div>
            <div class="tx-about-text">Bridge Loan Fund III provides short-term real estate bridge financing to commercial property owners. The fund lends against completed, income-producing properties at conservative LTV ratios of 65–70%. Loans are typically 6–18 months in duration. The fund targets a 10.5% net annual return paid quarterly, with principal returned at loan maturity. Structured as a Delaware LP. Managed by Aidi Capital Partners.</div>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">Deal Terms</div>
            <div class="tx-stats-grid">
              <div class="tx-stat-item"><div class="k">Target return</div><div class="v">10.5% net p.a.</div></div>
              <div class="tx-stat-item"><div class="k">Distributions</div><div class="v">Quarterly</div></div>
              <div class="tx-stat-item"><div class="k">Minimum</div><div class="v">$25,000</div></div>
              <div class="tx-stat-item"><div class="k">Structure</div><div class="v">Delaware LP</div></div>
              <div class="tx-stat-item"><div class="k">Term</div><div class="v">24 months</div></div>
              <div class="tx-stat-item"><div class="k">LTV</div><div class="v">65–70%</div></div>
              <div class="tx-stat-item"><div class="k">Closes</div><div class="v">Apr 24, 2026</div></div>
              <div class="tx-stat-item"><div class="k">Funded</div><div class="v">52% ($2.6M)</div></div>
            </div>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">Funding Progress</div>
            <div style="display:flex;justify-content:space-between;font-size:.8rem;color:var(--ink-muted);margin-bottom:6px;"><span>$2.6M raised of $5M target</span><span>52%</span></div>
            <div class="tx-funded-bar"><div class="tx-funded-fill" style="width:52%;background:var(--blue);"></div></div>
            <div style="font-size:.78rem;color:var(--ink-muted);margin-top:8px;">$2.4M remaining · Closes Apr 24, 2026</div>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">Eligibility</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div style="display:flex;align-items:center;gap:8px;font-size:.84rem;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Accredited investors only</div>
              <div style="display:flex;align-items:center;gap:8px;font-size:.84rem;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Minimum $25,000 investment</div>
              <div style="display:flex;align-items:center;gap:8px;font-size:.84rem;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Client KYC must be complete</div>
              <div style="display:flex;align-items:center;gap:8px;font-size:.84rem;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Written client authorisation required</div>
            </div>
          </div>
        </div></div>
        <div class="tx-right">
          <div class="tx-form-title">Allocation request</div>
          <div class="tx-admin-notice"><strong>⚠ Requires Admin Approval</strong>Private market allocations are reviewed by the Aidi team before execution. Typically approved within 1 business day.</div>
          <div class="tx-client-selector" style="background:var(--cream);border-radius:var(--r);padding:10px 14px;margin-bottom:14px;border:1.5px solid var(--cream-dark);">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:7px;">Allocating on behalf of</div>
            <select class="tx-form-select" style="width:100%;border-radius:var(--r);padding:9px 12px;font-size:.87rem;" id="txClientSel-bridge" onchange="wmTxClientChange('bridge',this.value)">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor — $18.4M</option>
              <option value="fatima">Fatima Al-Rashid — $31.2M</option>
              <option value="kwame">Kwame Boateng — $8.9M</option>
              <option value="priya">Priya Sharma — $4.2M</option>
              <option value="ibrahim">Ibrahim Hassan — $12.1M</option>
            </select>
          </div>
          <div class="tx-buying-power"><span class="lbl">Client cash available</span><span class="val" id="wm-bp-bridge">—</span></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Allocation amount (USD)</div>
            <input class="tx-form-input" type="number" placeholder="25000" min="25000" step="1000" id="wmBridgeAmount" oninput="wmPMCalc(this.value,'wmBridgeCost',0)">
            <div class="tx-form-input-hint">Minimum $25,000</div>
          </div>
          <div style="padding:8px 0;font-size:.82rem;color:var(--ink-soft);">Projected annual income: <strong id="wmBridgeIncome">$0.00</strong></div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Total allocation</span><span id="wmBridgeCost">$0.00</span></div>
          <div class="tx-form-row"><span class="tx-form-label">Auth reference</span><input class="tx-form-input" placeholder="Client authorisation ref…" style="font-size:.82rem;padding:7px 12px;margin-top:0;"></div>
          <button class="tx-submit-btn admin-route" onclick="wmTxSubmitAdminRoute('Bridge Loan Fund III Allocation','wmBridgeAmount','bridge')">Submit for admin approval</button>
          <div class="tx-disclaimer">Private market allocations require Aidi Super Admin approval. Client must be an accredited investor. Illiquid for the 24-month term.</div>
        </div>
      </div>
    </div>

    <!-- TERMII -->
    <div class="tx-page" id="wm-txpage-termii">
      <div class="tx-topbar-wm">
        <button class="tx-back-btn" onclick="closeWMTx()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Termii — AI Payments Infrastructure</div>
        <div id="wm-tx-client-termii" class="tx-client-badge">Select client below</div>
      </div>
      <div class="tx-body">
        <div class="tx-left"><div class="tx-left-inner">
          <div class="tx-asset-header">
            <div class="tx-asset-ticker">Private Equity · Delaware C-Corp · Admin Approved</div>
            <div class="tx-asset-name">Termii</div>
            <div style="font-size:1.6rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$5M ARR · Series B</div>
            <div class="tx-price-change" style="color:var(--green)">AI-native · Communications infrastructure</div>
          </div>
          <div style="height:160px;background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/deals.png) center/cover;border-radius:var(--r-lg);margin-bottom:20px;"></div>
          <div class="tx-section-card">
            <div class="tx-section-title">About</div>
            <div class="tx-about-text">Termii prevents transactions like logins, payments, checkouts, fraud alerts, and OTPs from failing — using AI. The company sits at the intersection of communications infrastructure and financial services, providing a mission-critical layer for businesses that cannot afford failed authentications. Termii is headquartered in San Jose, CA and serves enterprise clients across fintech, e-commerce, and banking.</div>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">Investment Terms</div>
            <div class="tx-stats-grid">
              <div class="tx-stat-item"><div class="k">Stage</div><div class="v">Series B</div></div>
              <div class="tx-stat-item"><div class="k">ARR</div><div class="v">$5M</div></div>
              <div class="tx-stat-item"><div class="k">Structure</div><div class="v">Delaware C-Corp</div></div>
              <div class="tx-stat-item"><div class="k">Instrument</div><div class="v">Preferred equity</div></div>
              <div class="tx-stat-item"><div class="k">Minimum</div><div class="v">$1,000,000</div></div>
              <div class="tx-stat-item"><div class="k">Funded</div><div class="v">78% ($3.9M)</div></div>
              <div class="tx-stat-item"><div class="k">Liquidity</div><div class="v">Illiquid (5–7yr)</div></div>
              <div class="tx-stat-item"><div class="k">Accreditation</div><div class="v">Required</div></div>
            </div>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">Funding Progress</div>
            <div style="display:flex;justify-content:space-between;font-size:.8rem;color:var(--ink-muted);margin-bottom:6px;"><span>$3.9M raised of $5M target</span><span>78%</span></div>
            <div class="tx-funded-bar"><div class="tx-funded-fill" style="width:78%;background:var(--gold);"></div></div>
            <div style="font-size:.78rem;color:var(--red);margin-top:8px;font-weight:500;">Only $1.1M remaining · Closing soon</div>
          </div>
        </div></div>
        <div class="tx-right">
          <div class="tx-form-title">Allocation request</div>
          <div class="tx-admin-notice"><strong>⚠ Requires Admin Approval</strong>Private equity allocations are reviewed by the Aidi team. Typically approved within 1–2 business days.</div>
          <div class="tx-client-selector" style="background:var(--cream);border-radius:var(--r);padding:10px 14px;margin-bottom:14px;border:1.5px solid var(--cream-dark);">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:7px;">Allocating on behalf of</div>
            <select class="tx-form-select" style="width:100%;border-radius:var(--r);padding:9px 12px;font-size:.87rem;" id="txClientSel-termii" onchange="wmTxClientChange('termii',this.value)">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor — $18.4M</option>
              <option value="fatima">Fatima Al-Rashid — $31.2M</option>
              <option value="kwame">Kwame Boateng — $8.9M</option>
              <option value="priya">Priya Sharma — $4.2M</option>
              <option value="ibrahim">Ibrahim Hassan — $12.1M</option>
            </select>
          </div>
          <div class="tx-buying-power"><span class="lbl">Client cash available</span><span class="val" id="wm-bp-termii">—</span></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Allocation amount (USD)</div>
            <input class="tx-form-input" type="number" placeholder="1000000" min="1000000" step="100000" id="wmTermiiAmount" oninput="wmPMCalc(this.value,'wmTermiiCost',0)">
            <div class="tx-form-input-hint">Minimum $1,000,000 · Preferred equity</div>
          </div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Total allocation</span><span id="wmTermiiCost">$0.00</span></div>
          <div class="tx-form-row"><span class="tx-form-label">Auth reference</span><input class="tx-form-input" placeholder="Client authorisation ref…" style="font-size:.82rem;padding:7px 12px;margin-top:0;"></div>
          <button class="tx-submit-btn admin-route" onclick="wmTxSubmitAdminRoute('Termii Equity Allocation','wmTermiiAmount','termii')">Submit for admin approval</button>
          <div class="tx-disclaimer">Private equity allocations require Aidi Admin approval. Illiquid investment — 5 to 7 year time horizon. Accredited investors only.</div>
        </div>
      </div>
    </div>

    <!-- RAYDA -->
    <div class="tx-page" id="wm-txpage-rayda">
      <div class="tx-topbar-wm">
        <button class="tx-back-btn" onclick="closeWMTx()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Rayda — IT Asset Management</div>
        <div id="wm-tx-client-rayda" class="tx-client-badge">Select client below</div>
      </div>
      <div class="tx-body">
        <div class="tx-left"><div class="tx-left-inner">
          <div class="tx-asset-header">
            <div class="tx-asset-ticker">Private Equity · Delaware C-Corp · Admin Approved</div>
            <div class="tx-asset-name">Rayda</div>
            <div style="font-size:1.6rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">$5.4M ARR · Series B</div>
            <div class="tx-price-change" style="color:var(--green)">B2B SaaS · Enterprise IT asset lifecycle</div>
          </div>
          <div style="height:160px;background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/plan_1661112808.jpg) center/cover;border-radius:var(--r-lg);margin-bottom:20px;"></div>
          <div class="tx-section-card">
            <div class="tx-section-title">About</div>
            <div class="tx-about-text">Rayda is an enterprise IT asset management platform that automates procurement, deployment, tracking, and disposal of IT assets across an organisation. It serves large enterprises and scales with the complexity of their operations. The platform reduces IT asset costs by an average of 22% for its clients through optimised lifecycle management and real-time visibility.</div>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">Investment Terms</div>
            <div class="tx-stats-grid">
              <div class="tx-stat-item"><div class="k">Stage</div><div class="v">Series B</div></div>
              <div class="tx-stat-item"><div class="k">ARR</div><div class="v">$5.4M</div></div>
              <div class="tx-stat-item"><div class="k">Structure</div><div class="v">Delaware C-Corp</div></div>
              <div class="tx-stat-item"><div class="k">Instrument</div><div class="v">Preferred equity</div></div>
              <div class="tx-stat-item"><div class="k">Minimum</div><div class="v">$1,000,000</div></div>
              <div class="tx-stat-item"><div class="k">Funded</div><div class="v">61% ($3.05M)</div></div>
              <div class="tx-stat-item"><div class="k">Liquidity</div><div class="v">Illiquid (5–7yr)</div></div>
              <div class="tx-stat-item"><div class="k">Accreditation</div><div class="v">Required</div></div>
            </div>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">Funding Progress</div>
            <div style="display:flex;justify-content:space-between;font-size:.8rem;color:var(--ink-muted);margin-bottom:6px;"><span>$3.05M raised of $5M target</span><span>61%</span></div>
            <div class="tx-funded-bar"><div class="tx-funded-fill" style="width:61%;background:var(--gold);"></div></div>
            <div style="font-size:.78rem;color:var(--ink-muted);margin-top:8px;">$1.95M remaining</div>
          </div>
        </div></div>
        <div class="tx-right">
          <div class="tx-form-title">Allocation request</div>
          <div class="tx-admin-notice"><strong>⚠ Requires Admin Approval</strong>Private equity allocations are reviewed by the Aidi team. Typically approved within 1–2 business days.</div>
          <div class="tx-client-selector" style="background:var(--cream);border-radius:var(--r);padding:10px 14px;margin-bottom:14px;border:1.5px solid var(--cream-dark);">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:7px;">Allocating on behalf of</div>
            <select class="tx-form-select" style="width:100%;border-radius:var(--r);padding:9px 12px;font-size:.87rem;" id="txClientSel-rayda" onchange="wmTxClientChange('rayda',this.value)">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor — $18.4M</option>
              <option value="fatima">Fatima Al-Rashid — $31.2M</option>
              <option value="kwame">Kwame Boateng — $8.9M</option>
              <option value="priya">Priya Sharma — $4.2M</option>
              <option value="ibrahim">Ibrahim Hassan — $12.1M</option>
            </select>
          </div>
          <div class="tx-buying-power"><span class="lbl">Client cash available</span><span class="val" id="wm-bp-rayda">—</span></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Allocation amount (USD)</div>
            <input class="tx-form-input" type="number" placeholder="1000000" min="1000000" step="100000" id="wmRaydaAmount" oninput="wmPMCalc(this.value,'wmRaydaCost',0)">
            <div class="tx-form-input-hint">Minimum $1,000,000 · Preferred equity</div>
          </div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Total allocation</span><span id="wmRaydaCost">$0.00</span></div>
          <div class="tx-form-row"><span class="tx-form-label">Auth reference</span><input class="tx-form-input" placeholder="Client authorisation ref…" style="font-size:.82rem;padding:7px 12px;margin-top:0;"></div>
          <button class="tx-submit-btn admin-route" onclick="wmTxSubmitAdminRoute('Rayda Equity Allocation','wmRaydaAmount','rayda')">Submit for admin approval</button>
          <div class="tx-disclaimer">Private equity allocations require Aidi Admin approval. Illiquid investment — 5 to 7 year time horizon. Accredited investors only.</div>
        </div>
      </div>
    </div>

    <!-- REAL ESTATE — Unit A -->
    <div class="tx-page" id="wm-txpage-unit-a">
      <div class="tx-topbar-wm">
        <button class="tx-back-btn" onclick="closeWMTx()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back</button>
        <div class="tx-topbar-title">Modern Stylish Home</div>
        <div id="wm-tx-client-unit-a" class="tx-client-badge">Select client below</div>
      </div>
      <div class="tx-body">
        <div class="tx-left"><div class="tx-left-inner">
          <div class="tx-asset-header">
            <div class="tx-asset-ticker">Real Estate · San Jose, CA · Admin Approved</div>
            <div class="tx-asset-name">Modern Stylish Home</div>
            <div style="font-size:1.6rem;font-family:'Cormorant Garamond',serif;font-weight:400;color:var(--ink);margin-top:8px;">5% cap rate · $2,800/mo</div>
            <div class="tx-price-change" style="color:var(--green)">Residential · Fractional ownership available</div>
          </div>
          <div style="height:220px;background:url(https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/873bf710-2bdb-47e9-97a8-0e7cc4b142b9.avif) center/cover;border-radius:var(--r-lg);margin-bottom:20px;"></div>
          <div class="tx-section-card">
            <div class="tx-section-title">About</div>
            <div class="tx-about-text">A modern, fully furnished residential property in San Jose, California. 3 bedrooms, 2 bathrooms, 1,480 sqft. Currently generating $2,800/month in rental income. Professionally managed by Aidi Property Services. Fractional ownership allows investment from $5,000 with proportional rental income distributed monthly.</div>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">Property Details</div>
            <div class="tx-stats-grid">
              <div class="tx-stat-item"><div class="k">Cap rate</div><div class="v">5.0%</div></div>
              <div class="tx-stat-item"><div class="k">Monthly rent</div><div class="v">$2,800</div></div>
              <div class="tx-stat-item"><div class="k">Property value</div><div class="v">$672,000</div></div>
              <div class="tx-stat-item"><div class="k">Bedrooms</div><div class="v">3 bed / 2 bath</div></div>
              <div class="tx-stat-item"><div class="k">Size</div><div class="v">1,480 sqft</div></div>
              <div class="tx-stat-item"><div class="k">Minimum</div><div class="v">$5,000</div></div>
              <div class="tx-stat-item"><div class="k">Funded</div><div class="v">90% ($604K)</div></div>
              <div class="tx-stat-item"><div class="k">Remaining</div><div class="v">$67,200</div></div>
            </div>
          </div>
          <div class="tx-section-card">
            <div class="tx-section-title">Funding Progress</div>
            <div style="display:flex;justify-content:space-between;font-size:.8rem;color:var(--ink-muted);margin-bottom:6px;"><span>$604,800 raised of $672,000</span><span>90%</span></div>
            <div class="tx-funded-bar"><div class="tx-funded-fill" style="width:90%;background:var(--green);"></div></div>
            <div style="font-size:.78rem;color:var(--red);margin-top:8px;font-weight:500;">Only $67,200 remaining · Filling fast</div>
          </div>
        </div></div>
        <div class="tx-right">
          <div class="tx-form-title">Allocation request</div>
          <div class="tx-admin-notice"><strong>⚠ Requires Admin Approval</strong>Real estate allocations are reviewed by the Aidi team before execution. Typically processed within 1 business day.</div>
          <div class="tx-client-selector" style="background:var(--cream);border-radius:var(--r);padding:10px 14px;margin-bottom:14px;border:1.5px solid var(--cream-dark);">
            <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:7px;">Allocating on behalf of</div>
            <select class="tx-form-select" style="width:100%;border-radius:var(--r);padding:9px 12px;font-size:.87rem;" id="txClientSel-unit-a" onchange="wmTxClientChange('unit-a',this.value)">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor — $18.4M</option>
              <option value="fatima">Fatima Al-Rashid — $31.2M</option>
              <option value="kwame">Kwame Boateng — $8.9M</option>
              <option value="priya">Priya Sharma — $4.2M</option>
              <option value="ibrahim">Ibrahim Hassan — $12.1M</option>
            </select>
          </div>
          <div class="tx-buying-power"><span class="lbl">Client cash available</span><span class="val" id="wm-bp-unit-a">—</span></div>
          <div style="padding:14px 0;">
            <div style="font-size:.82rem;font-weight:500;color:var(--ink-soft);margin-bottom:6px;">Investment amount (USD)</div>
            <input class="tx-form-input" type="number" placeholder="5000" min="5000" step="1000" id="wmUnitAAmount" oninput="wmPMCalc(this.value,'wmUnitACost',0.05)">
            <div class="tx-form-input-hint">Minimum $5,000 · Proportional ownership</div>
          </div>
          <div style="padding:8px 0;font-size:.82rem;color:var(--ink-soft);">Est. monthly income: <strong id="wmUnitAIncome">$0.00</strong></div>
          <div class="tx-form-total"><span style="color:var(--ink-muted)">Total investment</span><span id="wmUnitACost">$0.00</span></div>
          <div class="tx-form-row"><span class="tx-form-label">Auth reference</span><input class="tx-form-input" placeholder="Client authorisation ref…" style="font-size:.82rem;padding:7px 12px;margin-top:0;"></div>
          <button class="tx-submit-btn admin-route" onclick="wmTxSubmitAdminRoute('Real Estate Allocation — Modern Stylish Home','wmUnitAAmount','unit-a')">Submit for admin approval</button>
          <div class="tx-disclaimer">Real estate allocations require Aidi Admin approval. Monthly rental distributions are proportional to ownership stake.</div>
        </div>
      </div>
    </div>

    <!-- MODALS -->
    <!-- MODALS -->
    <!-- Add Client — 3-step (Individual + Corporate) -->
    <div class="modal-ov" id="modal-new-client" onclick="if(event.target===this)closeAddClient()">
      <div class="modal-box" style="max-width:540px;">
        <div class="modal-head" style="flex-direction:column;align-items:flex-start;gap:14px;padding-bottom:14px;">
          <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
            <span class="modal-title" id="addClientTitle">Add New Client</span>
            <button class="modal-x" onclick="closeAddClient()"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
          </div>
          <div style="display:flex;align-items:center;width:100%;">
            <div style="display:flex;align-items:center;gap:6px;">
              <div id="acDot1" style="width:22px;height:22px;border-radius:50%;background:var(--ink);color:white;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700;flex-shrink:0;">1</div>
              <span id="acLbl1" style="font-size:.76rem;font-weight:600;color:var(--ink);white-space:nowrap;">Client Details</span>
            </div>
            <div style="flex:1;height:1px;background:var(--cream-dark);margin:0 8px;"></div>
            <div style="display:flex;align-items:center;gap:6px;">
              <div id="acDot2" style="width:22px;height:22px;border-radius:50%;background:var(--cream-dark);color:var(--ink-muted);display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700;flex-shrink:0;">2</div>
              <span id="acLbl2" style="font-size:.76rem;font-weight:400;color:var(--ink-muted);white-space:nowrap;">Documents</span>
            </div>
            <div style="flex:1;height:1px;background:var(--cream-dark);margin:0 8px;"></div>
            <div style="display:flex;align-items:center;gap:6px;">
              <div id="acDot3" style="width:22px;height:22px;border-radius:50%;background:var(--cream-dark);color:var(--ink-muted);display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700;flex-shrink:0;">3</div>
              <span id="acLbl3" style="font-size:.76rem;font-weight:400;color:var(--ink-muted);white-space:nowrap;">Credentials</span>
            </div>
          </div>
        </div>

        <!-- STEP 1 -->
        <div class="modal-body" id="acStep1">
          <div class="form-group">
            <label class="form-label">Client Type</label>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
              <div id="acCardInd" onclick="acSelectType('individual')" style="padding:12px 14px;border-radius:10px;border:2px solid var(--ink);background:var(--cream);cursor:pointer;transition:all .15s;">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px;">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink)" stroke-width="1.5" id="acIconInd"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span style="font-size:.84rem;font-weight:700;color:var(--ink);" id="acTxtInd">Individual</span>
                </div>
                <div style="font-size:.71rem;color:var(--ink-muted);">Personal · KYC required</div>
              </div>
              <div id="acCardCorp" onclick="acSelectType('corporate')" style="padding:12px 14px;border-radius:10px;border:2px solid var(--cream-dark);background:white;cursor:pointer;transition:all .15s;">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px;">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink-soft)" stroke-width="1.5" id="acIconCorp"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  <span style="font-size:.84rem;font-weight:700;color:var(--ink-soft);" id="acTxtCorp">Corporate</span>
                </div>
                <div style="font-size:.71rem;color:var(--ink-muted);">LLC / Trust / Corp · Entity docs</div>
              </div>
            </div>
          </div>

          <!-- Individual fields -->
          <div id="acFldInd">
            <div class="form-row-2">
              <div class="form-group"><label class="form-label">First Name <span style="color:var(--red);">*</span></label><input class="form-input" id="ac-fname" placeholder="e.g. James"></div>
              <div class="form-group"><label class="form-label">Last Name <span style="color:var(--red);">*</span></label><input class="form-input" id="ac-lname" placeholder="e.g. Adeyemi"></div>
            </div>
            <div class="form-group"><label class="form-label">Email Address <span style="color:var(--red);">*</span></label><input class="form-input" id="ac-email" type="email" placeholder="james@example.com"></div>
            <div class="form-row-2">
              <div class="form-group"><label class="form-label">Phone</label><input class="form-input" id="ac-phone" placeholder="+1 (555) 000-0000"></div>
              <div class="form-group"><label class="form-label">Nationality</label><input class="form-input" id="ac-nationality" placeholder="e.g. Nigerian"></div>
            </div>
            <div class="form-row-2">
              <div class="form-group"><label class="form-label">Estimated AUM</label><input class="form-input" id="ac-aum" placeholder="e.g. $5,000,000"></div>
              <div class="form-group"><label class="form-label">Investor Type</label><select class="form-select" id="ac-inv-type"><option value="">Select type</option><option>Accredited Investor</option><option>Qualified Purchaser</option><option>Non-Accredited</option></select></div>
            </div>
            <div class="form-group"><label class="form-label">Source</label><select class="form-select" id="ac-source"><option value="">Select source</option><option>Direct Referral</option><option>Existing Client</option><option>Corporate Partner</option><option>Inbound</option></select></div>
          </div>

          <!-- Corporate fields -->
          <div id="acFldCorp" style="display:none;">
            <div class="form-group"><label class="form-label">Legal Entity Name <span style="color:var(--red);">*</span></label><input class="form-input" id="ac-entity-name" placeholder="e.g. Okafor Capital Holdings LLC"></div>
            <div class="form-row-2">
              <div class="form-group"><label class="form-label">Entity Type <span style="color:var(--red);">*</span></label>
                <select class="form-select" id="ac-entity-type">
                  <option value="">Select type</option>
                  <option>LLC</option><option>Corporation (C-Corp)</option><option>Corporation (S-Corp)</option>
                  <option>Trust</option><option>Partnership</option><option>Foundation</option><option>Non-Profit</option>
                </select>
              </div>
              <div class="form-group"><label class="form-label">Jurisdiction <span style="color:var(--red);">*</span></label>
                <select class="form-select" id="ac-jurisdiction">
                  <option value="">Select jurisdiction</option>
                  <optgroup label="United States"><option value="Alabama, USA">Alabama, USA</option><option value="Alaska, USA">Alaska, USA</option><option value="Arizona, USA">Arizona, USA</option><option value="Arkansas, USA">Arkansas, USA</option><option value="California, USA">California, USA</option><option value="Colorado, USA">Colorado, USA</option><option value="Connecticut, USA">Connecticut, USA</option><option value="Delaware, USA">Delaware, USA</option><option value="Florida, USA">Florida, USA</option><option value="Georgia, USA">Georgia, USA</option><option value="Hawaii, USA">Hawaii, USA</option><option value="Idaho, USA">Idaho, USA</option><option value="Illinois, USA">Illinois, USA</option><option value="Indiana, USA">Indiana, USA</option><option value="Iowa, USA">Iowa, USA</option><option value="Kansas, USA">Kansas, USA</option><option value="Kentucky, USA">Kentucky, USA</option><option value="Louisiana, USA">Louisiana, USA</option><option value="Maine, USA">Maine, USA</option><option value="Maryland, USA">Maryland, USA</option><option value="Massachusetts, USA">Massachusetts, USA</option><option value="Michigan, USA">Michigan, USA</option><option value="Minnesota, USA">Minnesota, USA</option><option value="Mississippi, USA">Mississippi, USA</option><option value="Missouri, USA">Missouri, USA</option><option value="Montana, USA">Montana, USA</option><option value="Nebraska, USA">Nebraska, USA</option><option value="Nevada, USA">Nevada, USA</option><option value="New Hampshire, USA">New Hampshire, USA</option><option value="New Jersey, USA">New Jersey, USA</option><option value="New Mexico, USA">New Mexico, USA</option><option value="New York, USA">New York, USA</option><option value="North Carolina, USA">North Carolina, USA</option><option value="North Dakota, USA">North Dakota, USA</option><option value="Ohio, USA">Ohio, USA</option><option value="Oklahoma, USA">Oklahoma, USA</option><option value="Oregon, USA">Oregon, USA</option><option value="Pennsylvania, USA">Pennsylvania, USA</option><option value="Rhode Island, USA">Rhode Island, USA</option><option value="South Carolina, USA">South Carolina, USA</option><option value="South Dakota, USA">South Dakota, USA</option><option value="Tennessee, USA">Tennessee, USA</option><option value="Texas, USA">Texas, USA</option><option value="Utah, USA">Utah, USA</option><option value="Vermont, USA">Vermont, USA</option><option value="Virginia, USA">Virginia, USA</option><option value="Washington, USA">Washington, USA</option><option value="West Virginia, USA">West Virginia, USA</option><option value="Wisconsin, USA">Wisconsin, USA</option><option value="Wyoming, USA">Wyoming, USA</option></optgroup>
                  <optgroup label="International"><option value="Nigeria">Nigeria</option></optgroup>
                </select>
              </div>
            </div>
            <div class="form-row-2">
              <div class="form-group"><label class="form-label">EIN / Tax ID</label><input class="form-input" id="ac-ein" placeholder="e.g. 47-1234567"></div>
              <div class="form-group"><label class="form-label">Date of Incorporation</label><input class="form-input" type="date" id="ac-inc-date"></div>
            </div>
            <div class="form-group"><label class="form-label">Primary Contact Name <span style="color:var(--red);">*</span></label><input class="form-input" id="ac-contact-name" placeholder="e.g. Emeka Okafor — Managing Member"></div>
            <div class="form-row-2">
              <div class="form-group"><label class="form-label">Contact Email <span style="color:var(--red);">*</span></label><input class="form-input" id="ac-contact-email" type="email" placeholder="contact@company.com"></div>
              <div class="form-group"><label class="form-label">Contact Phone</label><input class="form-input" id="ac-contact-phone" placeholder="+1 (555) 000-0000"></div>
            </div>
            <div class="form-row-2">
              <div class="form-group"><label class="form-label">Estimated AUM</label><input class="form-input" id="ac-corp-aum" placeholder="e.g. $10,000,000"></div>
              <div class="form-group"><label class="form-label">Source</label><select class="form-select" id="ac-corp-source"><option value="">Select source</option><option>Direct Referral</option><option>Existing Client</option><option>Corporate Partner</option><option>Inbound</option></select></div>
            </div>
          </div>
        </div>
        <div class="modal-foot" id="acFoot1">
          <button class="btn-sm btn-outline" onclick="closeAddClient()">Cancel</button>
          <button class="btn-sm btn-ink" onclick="acGoStep2()">Next: Documents <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:4px;"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
        </div>

        <!-- STEP 2: Documents -->
        <div class="modal-body" id="acStep2" style="display:none;">
          <!-- Individual docs -->
          <div id="acDocsInd">
            <div style="background:var(--blue-pale);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--blue);margin-bottom:14px;">&#x2139; Upload KYC documents now or skip and upload later from Client Documents.</div>
            <div class="form-group"><label class="form-label">Passport / Government ID <span style="color:var(--red);">*</span></label>
              <div class="upload-box" id="acUpl1" onclick="document.getElementById('acF1').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></div>
                <div class="upload-label" id="acF1Lbl">Upload passport or government-issued photo ID</div>
                <div class="upload-sub">JPG, PNG or PDF &middot; Max 10MB</div>
                <input type="file" id="acF1" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="acFilePick('acF1','acF1Lbl','acUpl1')">
              </div>
            </div>
            <div class="form-group"><label class="form-label">Proof of Address <span style="font-weight:300;">(within 90 days)</span></label>
              <div class="upload-box" id="acUpl2" onclick="document.getElementById('acF2').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                <div class="upload-label" id="acF2Lbl">Utility bill or bank statement</div>
                <div class="upload-sub">JPG, PNG or PDF &middot; Max 10MB</div>
                <input type="file" id="acF2" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="acFilePick('acF2','acF2Lbl','acUpl2')">
              </div>
            </div>
            <div class="form-group"><label class="form-label">Source of Funds Declaration <span style="font-weight:300;">(optional)</span></label>
              <div class="upload-box" id="acUpl3" onclick="document.getElementById('acF3').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg></div>
                <div class="upload-label" id="acF3Lbl">Declaration of source of wealth or funds</div>
                <div class="upload-sub">PDF preferred &middot; Max 10MB</div>
                <input type="file" id="acF3" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="acFilePick('acF3','acF3Lbl','acUpl3')">
              </div>
            </div>
          </div>
          <!-- Corporate docs -->
          <div id="acDocsCorp" style="display:none;">
            <div style="background:var(--gold-pale);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:#92400E;margin-bottom:14px;border-left:3px solid var(--gold);">&#9888; Corporate clients require entity documents and beneficial ownership disclosure. Items marked <span style="color:var(--red);">*</span> are mandatory for account activation.</div>
            <div class="form-group"><label class="form-label">Certificate of Incorporation / Formation <span style="color:var(--red);">*</span></label>
              <div class="upload-box" id="acUpl4" onclick="document.getElementById('acF4').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
                <div class="upload-label" id="acF4Lbl">State-issued certificate of formation or incorporation</div>
                <div class="upload-sub">PDF preferred &middot; Max 10MB</div>
                <input type="file" id="acF4" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="acFilePick('acF4','acF4Lbl','acUpl4')">
              </div>
            </div>
            <div class="form-group"><label class="form-label">Operating Agreement / By-Laws <span style="color:var(--red);">*</span></label>
              <div class="upload-box" id="acUpl5" onclick="document.getElementById('acF5').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                <div class="upload-label" id="acF5Lbl">LLC operating agreement or corporate by-laws</div>
                <div class="upload-sub">PDF preferred &middot; Max 10MB</div>
                <input type="file" id="acF5" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="acFilePick('acF5','acF5Lbl','acUpl5')">
              </div>
            </div>
            <div class="form-group"><label class="form-label">Beneficial Ownership Form <span style="color:var(--red);">*</span></label>
              <div class="upload-box" id="acUpl6" onclick="document.getElementById('acF6').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                <div class="upload-label" id="acF6Lbl">List all beneficial owners with 25%+ ownership interest</div>
                <div class="upload-sub">PDF preferred &middot; Max 10MB</div>
                <input type="file" id="acF6" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="acFilePick('acF6','acF6Lbl','acUpl6')">
              </div>
            </div>
            <div class="form-group"><label class="form-label">Passport / ID of Authorised Signatory <span style="color:var(--red);">*</span></label>
              <div class="upload-box" id="acUpl7" onclick="document.getElementById('acF7').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="upload-label" id="acF7Lbl">Government ID for the primary authorised signatory</div>
                <div class="upload-sub">JPG, PNG or PDF &middot; Max 10MB</div>
                <input type="file" id="acF7" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="acFilePick('acF7','acF7Lbl','acUpl7')">
              </div>
            </div>
            <div class="form-group"><label class="form-label">EIN Verification Letter (IRS SS-4) <span style="font-weight:300;">(optional)</span></label>
              <div class="upload-box" id="acUpl8" onclick="document.getElementById('acF8').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
                <div class="upload-label" id="acF8Lbl">IRS EIN assignment letter or equivalent</div>
                <div class="upload-sub">PDF preferred &middot; Max 10MB</div>
                <input type="file" id="acF8" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="acFilePick('acF8','acF8Lbl','acUpl8')">
              </div>
            </div>
            <div class="form-group"><label class="form-label">Source of Funds / AML Declaration <span style="font-weight:300;">(optional)</span></label>
              <div class="upload-box" id="acUpl9" onclick="document.getElementById('acF9').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg></div>
                <div class="upload-label" id="acF9Lbl">AML questionnaire or source of funds declaration</div>
                <div class="upload-sub">PDF preferred &middot; Max 10MB</div>
                <input type="file" id="acF9" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="acFilePick('acF9','acF9Lbl','acUpl9')">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-foot" id="acFoot2" style="display:none;">
          <button class="btn-sm btn-outline" onclick="acGoStep1()"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:4px;"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Back</button>
          <button class="btn-sm btn-ink" onclick="acGoStep3()">Next: Credentials <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:4px;"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
        </div>

        <!-- STEP 3: Credentials -->
        <div class="modal-body" id="acStep3" style="display:none;">
          <div style="background:var(--cream);border-radius:var(--r);padding:11px 14px;margin-bottom:16px;display:flex;align-items:center;gap:10px;">
            <div id="ac-av" style="width:32px;height:32px;border-radius:50%;background:var(--ink);color:white;display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:700;flex-shrink:0;">JA</div>
            <div style="flex:1;min-width:0;"><div style="font-size:.86rem;font-weight:600;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" id="ac-display-name">James Adeyemi</div><div style="font-size:.74rem;color:var(--ink-muted);" id="ac-display-email"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="7f151e121a0c3f1a071e120f131a511c1012">[email&#160;protected]</a></div></div>
            <span id="ac-type-badge" style="font-size:.69rem;font-weight:600;padding:2px 9px;border-radius:100px;background:var(--blue-pale);color:var(--blue);flex-shrink:0;">Individual</span>
          </div>
          <div class="form-group"><label class="form-label">Username</label><input class="form-input" id="ac-un" placeholder="e.g. james.adeyemi"></div>
          <div class="form-group"><label class="form-label">Password</label>
            <div class="pw-wrap"><input class="form-input" type="password" id="ac-pw" placeholder="Minimum 12 characters"><span class="pw-toggle" onclick="togglePw('ac-pw',this)"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span></div>
            <button class="gen-pw-btn" onclick="genPw('ac-pw')">&#9889; Generate strong password</button>
          </div>
          <div class="form-group"><label class="form-label">Credential delivery</label>
            <div style="display:flex;flex-direction:column;gap:7px;">
              <label style="display:flex;align-items:center;gap:9px;cursor:pointer;font-size:.84rem;"><input type="radio" name="ac-action" value="set" checked> Set credentials immediately</label>
              <label style="display:flex;align-items:center;gap:9px;cursor:pointer;font-size:.84rem;"><input type="radio" name="ac-action" value="email"> Email credentials to client</label>
              <label style="display:flex;align-items:center;gap:9px;cursor:pointer;font-size:.84rem;"><input type="radio" name="ac-action" value="temp"> Set as temporary &mdash; force change on login</label>
            </div>
          </div>
          <div class="form-group"><label class="form-label">Two-Factor Authentication</label>
            <div class="type-cards">
              <div class="type-card selected" onclick="selectOne(this)"><div class="type-card-title">Authenticator</div><div class="type-card-desc">Google Auth / Authy</div></div>
              <div class="type-card" onclick="selectOne(this)"><div class="type-card-title">SMS Code</div><div class="type-card-desc">Text message OTP</div></div>
              <div class="type-card" onclick="selectOne(this)"><div class="type-card-title">Email Code</div><div class="type-card-desc">One-time email code</div></div>
            </div>
          </div>
        </div>
        <div class="modal-foot" id="acFoot3" style="display:none;">
          <button class="btn-sm btn-outline" onclick="acGoStep2()"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:4px;"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Back</button>
          <button class="btn-sm btn-ink" onclick="addClientSubmit()">Create Client &amp; Save Credentials</button>
        </div>
      </div>
    </div>

    <!-- Credentials-only modal (for existing clients) -->
    <div class="modal-ov" id="modal-creds" onclick="if(event.target===this)closeModal('modal-creds')">
      <div class="modal-box"><div class="modal-head"><span class="modal-title">Platform Credentials</span><button class="modal-x" onclick="closeModal('modal-creds')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
      <div class="modal-body">
        <div style="background:var(--cream);border-radius:var(--r);padding:12px;margin-bottom:16px;font-size:.8rem;color:var(--ink-soft);" id="creds-client-info">Setting credentials for: <strong id="creds-for">—</strong></div>
        <div class="form-group"><label class="form-label">Username</label><input class="form-input" id="cred-un" placeholder="e.g. james.adeyemi"></div>
        <div class="form-group"><label class="form-label">Password</label>
          <div class="pw-wrap"><input class="form-input" type="password" id="cred-pw" placeholder="Minimum 12 characters"><span class="pw-toggle" onclick="togglePw('cred-pw',this)"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span></div>
          <button class="gen-pw-btn" onclick="genPw('cred-pw')">&#9889; Generate strong password</button>
        </div>
        <div class="form-group"><label class="form-label">Action</label>
          <div style="display:flex;flex-direction:column;gap:7px;">
            <label style="display:flex;align-items:center;gap:9px;cursor:pointer;font-size:.84rem;"><input type="radio" name="cred-action" value="set" checked> Set credentials immediately</label>
            <label style="display:flex;align-items:center;gap:9px;cursor:pointer;font-size:.84rem;"><input type="radio" name="cred-action" value="email"> Email credentials to client</label>
            <label style="display:flex;align-items:center;gap:9px;cursor:pointer;font-size:.84rem;"><input type="radio" name="cred-action" value="temp"> Set as temporary — force change on login</label>
          </div>
        </div>
        <div class="form-group"><label class="form-label">Two-Factor Authentication</label>
          <div class="type-cards">
            <div class="type-card selected" onclick="selectOne(this)"><div class="type-card-title">Authenticator</div><div class="type-card-desc">Google Auth / Authy</div></div>
            <div class="type-card" onclick="selectOne(this)"><div class="type-card-title">SMS Code</div><div class="type-card-desc">Text message OTP</div></div>
            <div class="type-card" onclick="selectOne(this)"><div class="type-card-title">Email Code</div><div class="type-card-desc">One-time email code</div></div>
          </div>
        </div>
      </div>
      <div class="modal-foot"><button class="btn-sm btn-outline" onclick="closeModal('modal-creds')">Cancel</button><button class="btn-sm btn-ink" onclick="showToast('Credentials saved ✓');closeModal('modal-creds')">Save Credentials</button></div>
      </div>
    </div>

    <!-- Tax Upload Modal -->
    <div class="sm-ov" id="taxUploadModal" onclick="if(event.target===this)taxCloseUpload()">
      <div class="sm-box" style="width:540px;max-width:95vw;">
        <div class="sm-hd">
          <div class="sm-ttl">Upload Tax Document</div>
          <button class="sm-x" onclick="taxCloseUpload()"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
        <div class="sm-bd">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
            <div class="sm-fld" style="margin:0;"><label class="sm-lbl">Client <span style="color:var(--red);">*</span></label>
              <select class="sm-sel" id="taxUpClient">
                <option value="">Select client&hellip;</option>
                <option>Emeka Okafor</option><option>Fatima Al-Rashid</option>
                <option>Kwame Boateng</option><option>Priya Sharma</option><option>Ibrahim Hassan</option>
              </select>
            </div>
            <div class="sm-fld" style="margin:0;"><label class="sm-lbl">Tax Year <span style="color:var(--red);">*</span></label>
              <select class="sm-sel" id="taxUpYear">
                <option value="2025">2025</option><option value="2024">2024</option>
                <option value="2023">2023</option><option value="2022">2022</option>
              </select>
            </div>
          </div>
          <div class="sm-fld"><label class="sm-lbl">Document Type <span style="color:var(--red);">*</span></label>
            <select class="sm-sel" id="taxUpType" onchange="taxUpTypeChange(this.value)">
              <option value="">Select type&hellip;</option>
              <optgroup label="Income & Gains">
                <option value="1099-B">1099-B &mdash; Capital Gains / Brokerage</option>
                <option value="1099-DIV">1099-DIV &mdash; Dividends &amp; Distributions</option>
                <option value="1099-INT">1099-INT &mdash; Interest Income</option>
                <option value="1099-DA">1099-DA &mdash; Digital Assets / Crypto</option>
                <option value="1099-MISC">1099-MISC &mdash; Miscellaneous Income</option>
                <option value="W-2">W-2 &mdash; Wages &amp; Salaries</option>
              </optgroup>
              <optgroup label="Business / Partnership">
                <option value="K-1">K-1 Schedule &mdash; Partnership / S-Corp</option>
                <option value="1065">Form 1065 &mdash; Partnership Return</option>
                <option value="1120-S">Form 1120-S &mdash; S-Corporation Return</option>
              </optgroup>
              <optgroup label="Returns">
                <option value="1040">Form 1040 &mdash; Individual Return</option>
                <option value="1040-Summary">1040 Summary Sheet</option>
              </optgroup>
              <optgroup label="International">
                <option value="FBAR">FBAR &mdash; Foreign Bank Account Report</option>
                <option value="Form-8938">Form 8938 &mdash; Foreign Financial Assets</option>
                <option value="FATCA">FATCA Disclosure</option>
              </optgroup>
              <optgroup label="Nigeria">
                <option value="FIRS-Annual">FIRS Annual Tax Return</option>
                <option value="WHT">Withholding Tax Certificate</option>
                <option value="VAT-Return">VAT Return</option>
              </optgroup>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="sm-fld" id="taxUpDescField" style="display:none;"><label class="sm-lbl">Document name <span style="color:var(--red);">*</span></label><input class="sm-inp" id="taxUpDesc" placeholder="e.g. 2025 Annual Tax Summary"></div>
          <!-- Drag-drop upload zone -->
          <div class="sm-fld">
            <label class="sm-lbl">File <span style="color:var(--red);">*</span></label>
            <div id="taxUpZone" style="border:2px dashed var(--cream-dark);border-radius:var(--r);padding:24px;text-align:center;cursor:pointer;background:var(--cream);transition:all .15s;"
              onclick="document.getElementById('taxUpFile').click()"
              ondragover="event.preventDefault();this.style.borderColor='var(--blue)';this.style.background='var(--blue-pale)'"
              ondragleave="this.style.borderColor='var(--cream-dark)';this.style.background='var(--cream)'"
              ondrop="taxHandleDrop(event)">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--ink-muted)" stroke-width="1.5" style="margin:0 auto 8px;display:block;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              <div id="taxUpZoneLabel" style="font-size:.83rem;font-weight:500;color:var(--ink-soft);">Click to upload or drag &amp; drop</div>
              <div style="font-size:.72rem;color:var(--ink-muted);margin-top:3px;">PDF, Excel, CSV &middot; Max 10MB</div>
              <input type="file" id="taxUpFile" style="display:none" accept=".pdf,.xlsx,.csv,.doc,.docx" onchange="taxHandleFile(this)">
            </div>
          </div>
          <div class="sm-fld"><label class="sm-lbl">Notes for Tax Team (optional)</label>
            <textarea class="sm-inp" id="taxUpNotes" rows="2" placeholder="Any context, corrections, or instructions for the Tax Team&hellip;" style="resize:none;"></textarea>
          </div>
          <div class="sm-fld" style="margin-bottom:0;">
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.8rem;color:var(--ink);">
              <input type="checkbox" id="taxUpLinkDocs" checked style="width:14px;height:14px;accent-color:var(--ink);">
              Also save to client&rsquo;s Document page after finalisation
            </label>
          </div>
        </div>
        <div class="sm-ft">
          <button class="sm-btn sec" onclick="taxCloseUpload()">Cancel</button>
          <button class="sm-btn pri" onclick="taxSubmitUpload()">Upload &amp; Send to Tax Team</button>
        </div>
      </div>
    </div>

    <!-- Tax View/Edit Modal -->
    <div class="sm-ov" id="taxViewModal" onclick="if(event.target===this)taxCloseView()">
      <div class="sm-box" style="width:520px;max-width:95vw;">
        <div class="sm-hd">
          <div class="sm-ttl" id="taxViewTitle">Tax Document</div>
          <button class="sm-x" onclick="taxCloseView()"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
        <div class="sm-bd" id="taxViewBody"></div>
        <div class="sm-ft" id="taxViewFoot"></div>
      </div>
    </div>

    <div class="modal-ov" id="modal-add-opp" onclick="if(event.target===this)closeModal('modal-add-opp')">
      <div class="modal-box wide"><div class="modal-head"><span class="modal-title">Add Opportunity</span><button class="modal-x" onclick="closeModal('modal-add-opp')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
      <div class="modal-body">
        <div class="form-group"><label class="form-label">Deal Name</label><input class="form-input" placeholder="e.g. Bridge Loan Fund IV"></div>
        <div class="form-row-2">
          <div class="form-group"><label class="form-label">Category</label><select class="form-select"><option>Select…</option><option>Private Credit</option><option>Private Equity</option><option>Real Estate</option><option>Treasury</option><option>Commodities</option><option>Crypto</option><option>Equities</option></select></div>
          <div class="form-group"><label class="form-label">Status</label><select class="form-select"><option>Open</option><option>Coming Soon</option><option>Closed</option><option>Full</option></select></div>
        </div>
        <div class="form-group"><label class="form-label">Description</label><textarea class="form-input" rows="3" placeholder="Overview of the deal, investment thesis, structure…" style="resize:none;"></textarea></div>
        <div class="form-row-2">
          <div class="form-group"><label class="form-label">Target Return</label><input class="form-input" placeholder="e.g. 10.5% p.a."></div>
          <div class="form-group"><label class="form-label">Minimum Investment</label><input class="form-input" placeholder="e.g. $25,000"></div>
        </div>
        <div class="form-row-2">
          <div class="form-group"><label class="form-label">Total Raise Target</label><input class="form-input" placeholder="e.g. $5,000,000"></div>
          <div class="form-group"><label class="form-label">Closing Date</label><input class="form-input" type="date"></div>
        </div>
        <div class="form-group"><label class="form-label">Cover Image URL (optional)</label><input class="form-input" placeholder="https://…"></div>
        <div class="form-group"><label class="form-label">Eligible Investor Types</label>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;">
            <label style="display:flex;align-items:center;gap:6px;font-size:.82rem;cursor:pointer;"><input type="checkbox" checked> Accredited</label>
            <label style="display:flex;align-items:center;gap:6px;font-size:.82rem;cursor:pointer;"><input type="checkbox"> Qualified Purchaser</label>
            <label style="display:flex;align-items:center;gap:6px;font-size:.82rem;cursor:pointer;"><input type="checkbox"> Non-Accredited</label>
          </div>
        </div>
      </div>
      <div class="modal-foot"><button class="btn-sm btn-outline" onclick="closeModal('modal-add-opp')">Cancel</button><button class="btn-sm btn-ink" onclick="showToast('Opportunity added ✓');closeModal('modal-add-opp')">Publish Opportunity</button></div>
      </div>
    </div>

    <div class="modal-ov" id="modal-edit-opp" onclick="if(event.target===this)closeModal('modal-edit-opp')">
      <div class="modal-box wide"><div class="modal-head"><span class="modal-title">Edit Opportunity</span><button class="modal-x" onclick="closeModal('modal-edit-opp')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
      <div class="modal-body">
        <div class="form-group"><label class="form-label">Deal Name</label><input class="form-input" value="Bridge Loan Fund III"></div>
        <div class="form-row-2">
          <div class="form-group"><label class="form-label">Category</label><select class="form-select"><option selected>Private Credit</option><option>Private Equity</option><option>Real Estate</option><option>Treasury</option></select></div>
          <div class="form-group"><label class="form-label">Status</label><select class="form-select"><option selected>Open</option><option>Coming Soon</option><option>Closed</option><option>Full</option></select></div>
        </div>
        <div class="form-group"><label class="form-label">Description</label><textarea class="form-input" rows="3" style="resize:none;">Senior secured real estate bridge loans. Target 10.5% net annual return. Quarterly distributions.</textarea></div>
        <div class="form-row-2">
          <div class="form-group"><label class="form-label">Target Return</label><input class="form-input" value="10.5% p.a."></div>
          <div class="form-group"><label class="form-label">Minimum Investment</label><input class="form-input" value="$25,000"></div>
        </div>
        <div class="form-row-2">
          <div class="form-group"><label class="form-label">Total Raise</label><input class="form-input" value="$5,000,000"></div>
          <div class="form-group"><label class="form-label">Closing Date</label><input class="form-input" type="date" value="2026-04-24"></div>
        </div>
      </div>
      <div class="modal-foot"><button class="btn-sm btn-outline" onclick="closeModal('modal-edit-opp')">Cancel</button><button class="btn-sm btn-ink" onclick="showToast('Opportunity updated ✓');closeModal('modal-edit-opp')">Save Changes</button></div>
      </div>
    </div>

    <div class="modal-ov" id="modal-entity-detail" onclick="if(event.target===this)closeModal('modal-entity-detail')">
      <div class="modal-box wide"><div class="modal-head"><span class="modal-title">Entity Review — Emeka Okafor</span><button class="modal-x" onclick="closeModal('modal-entity-detail')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
          <div style="background:var(--cream);border-radius:var(--r);padding:12px;"><div style="font-size:.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:4px;">Entity Name</div><div style="font-size:.88rem;font-weight:500;">Adeyemi Capital LLC</div></div>
          <div style="background:var(--cream);border-radius:var(--r);padding:12px;"><div style="font-size:.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:4px;">Type</div><div style="font-size:.88rem;font-weight:500;">Delaware LLC · Member-managed</div></div>
          <div style="background:var(--cream);border-radius:var(--r);padding:12px;"><div style="font-size:.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:4px;">Members</div><div style="font-size:.88rem;font-weight:500;">2 (Emeka Okafor + Spouse)</div></div>
          <div style="background:var(--cream);border-radius:var(--r);padding:12px;"><div style="font-size:.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:4px;">Setup Fee</div><div style="font-size:.88rem;font-weight:500;">$1,000 — Paid ✓</div></div>
        </div>
        <div style="font-size:.74rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:9px;">Document Checklist</div>
        <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:16px;">
          <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:var(--green-pale);border-radius:var(--r);font-size:.83rem;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Articles of Incorporation — Filed</div>
          <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:var(--green-pale);border-radius:var(--r);font-size:.83rem;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>EIN Application — Completed</div>
          <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:var(--gold-pale);border-radius:var(--r);font-size:.83rem;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--gold)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>Operating Agreement — Under Legal Review</div>
          <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:var(--red-pale);border-radius:var(--r);font-size:.83rem;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--red)" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Trust Deed — Missing, requested Apr 6</div>
          <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:var(--green-pale);border-radius:var(--r);font-size:.83rem;"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>KYC/AML — Verified</div>
        </div>
        <div class="form-group"><label class="form-label">Legal Team Notes</label><textarea class="form-input" rows="2" style="resize:none;" placeholder="Add review notes…"></textarea></div>
      </div>
      <div class="modal-foot"><button class="btn-sm btn-outline" onclick="closeModal('modal-entity-detail')">Close</button><button class="btn-sm btn-red" onclick="showToast('Entity denied');closeModal('modal-entity-detail')">Deny</button><button class="btn-sm btn-green" onclick="showToast('Entity approved ✓');closeModal('modal-entity-detail')">Approve Entity</button></div>
      </div>
    </div>

    <div class="modal-ov" id="modal-add-advisor" onclick="if(event.target===this)closeModal('modal-add-advisor')">
      <div class="modal-box"><div class="modal-head"><span class="modal-title">Add Wealth Manager</span><button class="modal-x" onclick="closeModal('modal-add-advisor')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
      <div class="modal-body">
        <div class="form-row-2"><div class="form-group"><label class="form-label">First Name</label><input class="form-input" placeholder="e.g. James"></div><div class="form-group"><label class="form-label">Last Name</label><input class="form-input" placeholder="e.g. Osei"></div></div>
        <div class="form-group"><label class="form-label">Email Address</label><input class="form-input" type="email" placeholder="james@firm.com"></div>
        <div class="form-group"><label class="form-label">Firm / Organization</label><input class="form-input" placeholder="e.g. Aidi Direct"></div>
        <div class="form-row-2">
          <div class="form-group"><label class="form-label">Regulatory Licence</label><input class="form-input" placeholder="e.g. FCA FRN-123456"></div>
          <div class="form-group"><label class="form-label">Designation</label><input class="form-input" placeholder="e.g. CFA, CFP"></div>
        </div>
        <div class="form-group"><label class="form-label">Initial Access Level</label><select class="form-select"><option>Pending Review — No Trading</option><option>Limited — View Only</option><option>Full — Trading Enabled</option></select></div>
      </div>
      <div class="modal-foot"><button class="btn-sm btn-outline" onclick="closeModal('modal-add-advisor')">Cancel</button><button class="btn-sm btn-ink" onclick="showToast('Advisor added ✓');closeModal('modal-add-advisor')">Add Advisor</button></div>
      </div>
    </div>

    <div class="modal-ov" id="modal-add-team" onclick="if(event.target===this)closeModal('modal-add-team')">
      <div class="modal-box"><div class="modal-head"><span class="modal-title">Add Team Member</span><button class="modal-x" onclick="closeModal('modal-add-team')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
      <div class="modal-body">
        <div class="form-row-2"><div class="form-group"><label class="form-label">First Name</label><input class="form-input" placeholder="e.g. Lena"></div><div class="form-group"><label class="form-label">Last Name</label><input class="form-input" placeholder="e.g. Park"></div></div>
        <div class="form-group"><label class="form-label">Email Address</label><input class="form-input" type="email" placeholder="lena@aidi.com"></div>
        <div class="form-group"><label class="form-label">Role</label>
          <select class="form-select" id="team-role-sel" onchange="updateTeamPermissions(this.value)">
            <option value="">Select role…</option>
            <option value="sa">Super Admin — Full platform access</option>
            <option value="support">Support Team — Approvals: gold, entity, plans · KYC</option>
            <option value="legal">Legal Team — Entity filings, agreements, compliance docs</option>
            <option value="tax">Tax Team — Tax documents, finalization, client upload</option>
          </select>
          <div class="form-hint">Support, Legal, and Tax team members log in via the Super Admin portal with access restricted to their role's sections only.</div>
        </div>
        <div id="team-perms-preview" style="background:var(--cream);border-radius:var(--r);padding:12px;font-size:.8rem;color:var(--ink-soft);display:none;"></div>
      </div>
      <div class="modal-foot"><button class="btn-sm btn-outline" onclick="closeModal('modal-add-team')">Cancel</button><button class="btn-sm btn-ink" onclick="showToast('Team member invited ✓');closeModal('modal-add-team')">Send Invite</button></div>
      </div>
    </div>

    <!-- NOTIFICATIONS -->
    <!-- NOTIFICATIONS -->
    <div class="notif-dd" id="wm-notif">
      <div class="notif-head"><span class="notif-head-title">Notifications</span><span class="notif-head-mark" onclick="wmMarkAllRead()">Mark all read</span></div>
      <div class="notif-item" id="wm-ni-1" onclick="wmNotifClick('opps',this)"><div class="notif-dot" id="wm-nd-1"></div><div><div class="notif-item-title">Bridge Fund III — Allocation Pending</div><div class="notif-item-text">Emeka Okafor's $250K allocation awaiting admin approval.</div><div class="notif-item-time">2 hours ago</div></div></div>
      <div class="notif-item" id="wm-ni-2" onclick="wmNotifClick('clients',this)"><div class="notif-dot" id="wm-nd-2"></div><div><div class="notif-item-title">KYC Expiry — Ibrahim Hassan</div><div class="notif-item-text">Passport expires in 32 days. Trading will pause at expiry.</div><div class="notif-item-time">Today, 08:44</div></div></div>
      <div class="notif-item" id="wm-ni-3" onclick="wmNotifClick('tasks',this)"><div class="notif-dot" id="wm-nd-3"></div><div><div class="notif-item-title">Task Overdue — Fatima Al-Rashid</div><div class="notif-item-text">Annual review 14 days overdue. Please schedule.</div><div class="notif-item-time">Yesterday</div></div></div>
      <div class="notif-item" id="wm-ni-4" onclick="wmNotifClick('trade',this)"><div class="notif-dot read" id="wm-nd-4"></div><div><div class="notif-item-title">Trade Executed — Priya Sharma</div><div class="notif-item-text">$50,000 SPY BUY instruction executed successfully.</div><div class="notif-item-time">Apr 9, 2026</div></div></div>
    </div>

    <div class="notif-dd" id="sa-notif">
      <div class="notif-head"><span class="notif-head-title">Notifications</span><span class="notif-head-mark" onclick="saMarkAllRead()">Mark all read</span></div>
      <div class="notif-item" id="sa-ni-1" onclick="saNotifClick('approvals',this)"><div class="notif-dot" id="sa-nd-1"></div><div><div class="notif-item-title">5 New Approval Requests</div><div class="notif-item-text">Gold purchase, trade instructions, and entity filing added to queue.</div><div class="notif-item-time">2 hours ago</div></div></div>
      <div class="notif-item" id="sa-ni-2" onclick="saNotifClick('clients',this)"><div class="notif-dot" id="sa-nd-2"></div><div><div class="notif-item-title">Compliance Alert — Ibrahim Hassan</div><div class="notif-item-text">KYC document expires in 32 days. Action required.</div><div class="notif-item-time">Today, 08:44</div></div></div>
      <div class="notif-item" id="sa-ni-3" onclick="saNotifClick('advisors',this)"><div class="notif-dot" id="sa-nd-3"></div><div><div class="notif-item-title">New WM Application</div><div class="notif-item-text">Pending wealth manager application awaiting review.</div><div class="notif-item-time">Today, 07:11</div></div></div>
      <div class="notif-item" id="sa-ni-4" onclick="saNotifClick('trade',this)"><div class="notif-dot" id="sa-nd-4"></div><div><div class="notif-item-title">Bridge Fund III — Closing Soon</div><div class="notif-item-text">$2.4M of $5M target remains. 14 days to close.</div><div class="notif-item-time">Yesterday</div></div></div>
      <div class="notif-item" id="sa-ni-5" onclick="saNotifClick('tax',this)"><div class="notif-dot read" id="sa-nd-5"></div><div><div class="notif-item-title">Tax Doc Finalized</div><div class="notif-item-text">Chisom Eze finalized 1099-DIV for Fatima Al-Rashid.</div><div class="notif-item-time">Apr 7, 2026</div></div></div>
    </div>

    <!-- TOAST -->
    <div class="toast" id="toast"></div>

    <!-- JAVASCRIPT -->
    <!-- JAVASCRIPT -->



    <!-- Internal news slide modal -->
    <div class="int-news-overlay" id="intNewsOverlay" onclick="intCloseNewsModal()"></div>
    <div class="int-news-modal" id="intNewsModal">
      <div class="nm-header">
        <div class="nm-source-row">
          <span class="nm-source-badge" id="intNmSource">Source</span>
          <span class="nm-dot"></span>
          <span class="nm-time" id="intNmTime"></span>
        </div>
        <button class="nm-close" onclick="intCloseNewsModal()">
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="nm-body">
        <div class="nm-hero-img" id="intNmHeroImg"></div>
        <h2 class="nm-headline" id="intNmHeadline"></h2>
        <div class="nm-ticker-row">
          <span class="nm-ticker" id="intNmTicker"></span>
          <span class="nm-ticker-change" id="intNmTickerChange"></span>
        </div>
        <div class="nm-summary-label">Summary</div>
        <div class="nm-summary" id="intNmSummary"></div>
        <div class="nm-elia-box">
          <div class="nm-elia-header">
            <div class="nm-elia-dot"></div>
            <div class="nm-elia-label">Elia &middot; Advisor Intelligence</div>
          </div>
          <div class="nm-elia-text" id="intNmElia"></div>
        </div>
        <div class="nm-summary-label">Key Facts</div>
        <div class="nm-key-facts" id="intNmFacts"></div>
      </div>
      <div class="nm-footer">
        <a class="nm-read-more" id="intNmReadMore" href="#" target="_blank" rel="noopener">
          Read full article
          <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 0 1 1h4"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
        <div class="nm-disclaimer">Aidi curates public news for informational purposes only. This is not investment advice.</div>
      </div>
    </div>

    <!-- Notice popup modal -->
    <div class="notice-overlay" id="noticeOverlay" onclick="if(event.target===this)closeNoticeModal()">
      <div class="notice-modal">
        <div class="notice-modal-head">
          <div class="notice-modal-title">
            <div class="notice-modal-icon" id="noticeIcon"></div>
            <span class="notice-modal-label" id="noticeTitle"></span>
          </div>
          <button class="notice-modal-close" onclick="closeNoticeModal()"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
        <div class="notice-modal-body" id="noticeBody"></div>
        <div class="notice-modal-foot" id="noticeFoot"></div>
      </div>
    </div>

    <!-- Upload Document modal -->
    <div class="modal-ov" id="modal-upload-doc" onclick="if(event.target===this)closeModal('modal-upload-doc')">
      <div class="modal-box" style="max-width:500px;">
        <div class="modal-head">
          <span class="modal-title">Upload Document</span>
          <button class="modal-x" onclick="closeModal('modal-upload-doc')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
        <div class="modal-body">

          <!-- Client selector -->
          <div class="form-group">
            <label class="form-label">Client <span style="color:var(--red);">*</span></label>
            <select class="form-select" id="docUploadClient">
              <option value="">Select client…</option>
              <option value="emeka">Emeka Okafor</option>
              <option value="fatima">Fatima Al-Rashid</option>
              <option value="kwame">Kwame Boateng</option>
              <option value="priya">Priya Sharma</option>
              <option value="ibrahim">Ibrahim Hassan</option>
            </select>
          </div>

          <!-- Document category -->
          <div class="form-group">
            <label class="form-label">Document Category <span style="color:var(--red);">*</span></label>
            <select class="form-select" id="docUploadCategory" onchange="docUploadCatChange(this.value)">
              <option value="">Select category…</option>
              <optgroup label="Identity &amp; KYC">
                <option value="passport">Passport / Government ID</option>
                <option value="address">Proof of Address</option>
                <option value="selfie">Identity Selfie / Liveness Check</option>
                <option value="source-of-funds">Source of Funds Declaration</option>
              </optgroup>
              <optgroup label="Entity &amp; Legal">
                <option value="trust-deed">Trust Deed</option>
                <option value="llc-agreement">LLC Operating Agreement</option>
                <option value="incorporation">Certificate of Incorporation</option>
                <option value="beneficial-owner">Beneficial Ownership Form</option>
              </optgroup>
              <optgroup label="Tax">
                <option value="1099-b">1099-B</option>
                <option value="1099-div">1099-DIV</option>
                <option value="w9">W-9 Form</option>
                <option value="tax-return">Tax Return</option>
              </optgroup>
              <optgroup label="Compliance &amp; Reviews">
                <option value="annual-review">Annual Review Form</option>
                <option value="suitability">Suitability Assessment</option>
                <option value="aml-form">AML / PEP Declaration</option>
              </optgroup>
              <optgroup label="Investment">
                <option value="allocation-auth">Allocation Authorisation</option>
                <option value="client-agreement">Client Agreement</option>
                <option value="risk-disclosure">Risk Disclosure Acknowledgement</option>
              </optgroup>
              <optgroup label="Other">
                <option value="other">Other / Miscellaneous</option>
              </optgroup>
            </select>
          </div>

          <!-- Document name (auto-fills, editable) -->
          <div class="form-group">
            <label class="form-label">Document Name <span style="color:var(--red);">*</span></label>
            <input class="form-input" type="text" id="docUploadName" placeholder="e.g. Passport — Kwame Boateng">
          </div>

          <!-- Upload box -->
          <div class="form-group">
            <label class="form-label">File <span style="color:var(--red);">*</span></label>
            <div id="docDropZone" onclick="document.getElementById('docFileInput').click()"
              style="border:2px dashed var(--cream-dark);border-radius:10px;padding:24px;text-align:center;cursor:pointer;transition:all .18s;background:var(--cream);"
              ondragover="event.preventDefault();this.style.borderColor='var(--blue)';this.style.background='var(--blue-pale)'"
              ondragleave="this.style.borderColor='var(--cream-dark)';this.style.background='var(--cream)'"
              ondrop="docHandleDrop(event)">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--ink-muted)" stroke-width="1.5" style="margin-bottom:8px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              <div id="docDropLabel" style="font-size:.84rem;font-weight:500;color:var(--ink-soft);">Click to browse or drag &amp; drop</div>
              <div style="font-size:.73rem;color:var(--ink-muted);margin-top:4px;">PDF, JPG, PNG · Max 20MB</div>
              <input type="file" id="docFileInput" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="docHandleFile(this)">
            </div>
          </div>

          <!-- Notes -->
          <div class="form-group">
            <label class="form-label">Notes <span style="font-weight:300;">(optional)</span></label>
            <textarea class="form-input" id="docUploadNotes" rows="2" placeholder="e.g. Renewed passport — expires Jan 2031" style="resize:none;"></textarea>
          </div>

          <!-- Notify client toggle -->
          <div style="display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:var(--cream);border-radius:var(--r);margin-top:4px;">
            <div>
              <div style="font-size:.84rem;font-weight:500;color:var(--ink);">Notify client on upload</div>
              <div style="font-size:.74rem;color:var(--ink-muted);margin-top:1px;">Send an email confirmation to the client</div>
            </div>
            <label class="s-tog"><input type="checkbox" id="docNotifyClient" checked><div class="s-tog-track"></div><div class="s-tog-thumb"></div></label>
          </div>

        </div>
        <div class="modal-foot">
          <button class="btn-sm btn-outline" onclick="closeModal('modal-upload-doc')">Cancel</button>
          <button class="btn-sm btn-ink" onclick="docUploadSubmit()">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            Upload Document
          </button>
        </div>
      </div>
    </div>

    <!-- Document viewer modal -->
    <div class="modal-ov" id="modal-doc-viewer" onclick="if(event.target===this)closeDocViewer()" style="z-index:850;">
      <div class="modal-box" style="max-width:680px;max-height:88vh;display:flex;flex-direction:column;">
        <div class="modal-head" style="flex-shrink:0;">
          <div style="display:flex;flex-direction:column;gap:3px;">
            <span class="modal-title" id="dvTitle">Document</span>
            <span style="font-size:.75rem;color:var(--ink-muted);" id="dvMeta"></span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <a id="dvDownload" href="#" download style="display:flex;align-items:center;gap:5px;font-size:.78rem;font-weight:500;color:var(--blue);text-decoration:none;padding:6px 10px;border-radius:7px;border:1px solid rgba(27,79,216,.2);background:var(--blue-pale);">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download
            </a>
            <button class="modal-x" onclick="closeDocViewer()"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
          </div>
        </div>
        <!-- Document preview area -->
        <div id="dvBody" style="flex:1;overflow-y:auto;background:#f3f2f0;display:flex;flex-direction:column;align-items:center;padding:24px;gap:0;min-height:0;">
        </div>
        <!-- Footer strip -->
        <div style="padding:12px 20px;border-top:1px solid var(--cream-mid);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;background:white;">
          <div style="font-size:.75rem;color:var(--ink-muted);" id="dvFootNote"></div>
          <div style="display:flex;gap:8px;">
            <button class="btn-sm btn-outline" onclick="closeDocViewer()">Close</button>
            <button class="btn-sm btn-ink" onclick="showToast('Shared with Aidi team ✓');closeDocViewer()">Share with Aidi</button>
          </div>
        </div>
      </div>
    </div>


    <!-- WM Entity Overlay -->
    <div class="wm-ent-overlay" id="wmEntOverlay" onclick="wmEntClosePanel()"></div>

    <!-- WM Entity Detail Panel -->
    <div class="wm-ent-panel" id="wmEntPanel">
      <div class="wm-ent-panel-hd">
        <div><div class="wm-ent-panel-title" id="wmEntPanelTitle">Entity Details</div><div class="wm-ent-panel-sub" id="wmEntPanelSub"></div></div>
        <button class="wm-ent-panel-close" onclick="wmEntClosePanel()"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="wm-ent-panel-body" id="wmEntPanelBody"></div>
      <div class="wm-ent-panel-actions" id="wmEntPanelActions"></div>
    </div>

    <!-- WM Entity Formation Wizard -->
    <div class="wm-wiz-overlay" id="wmWizOverlay" onclick="if(event.target===this)wmWizClose()">
      <div class="wm-wiz-modal">
        <div class="wm-wiz-header">
          <div class="wm-wiz-title" id="wmWizTitle">Submit Entity Request</div>
          <button class="wm-wiz-close" onclick="wmWizClose()"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
        <div class="wm-wiz-body">
          <div class="wm-wiz-progress" id="wmWizProgress"></div>
          <div class="wm-wiz-step active" id="wmWizStep1">
            <div class="wm-wiz-step-label">Step 1 of 4 &mdash; Client &amp; Entity Type</div>
            <div class="wm-wiz-step-title">Which client and what type of entity?</div>
            <div class="wm-wiz-field"><label class="wm-wiz-label">Client <span style="color:var(--red);">*</span></label>
              <select class="wm-wiz-select" id="wmWizClient"><option value="">Select client&hellip;</option><option value="Emeka Okafor">Emeka Okafor</option><option value="Fatima Al-Rashid">Fatima Al-Rashid</option><option value="Kwame Boateng">Kwame Boateng</option><option value="Priya Sharma">Priya Sharma</option><option value="Ibrahim Hassan">Ibrahim Hassan</option></select>
            </div>
            <div class="wm-wiz-type-grid" style="margin-top:14px;">
              <div class="wm-wiz-type-card" id="wmWizTypeLLC" onclick="wmWizSelectType('LLC')"><div class="wm-wiz-type-icon">&#127970;</div><div class="wm-wiz-type-name">LLC</div><div class="wm-wiz-type-desc">Flexible structure, pass-through taxation, personal liability protection. Ideal for investment holding.</div></div>
              <div class="wm-wiz-type-card" id="wmWizTypeCCorp" onclick="wmWizSelectType('C-Corp')"><div class="wm-wiz-type-icon">&#128200;</div><div class="wm-wiz-type-name">C-Corporation</div><div class="wm-wiz-type-desc">Best for raising capital and issuing stock. Delaware C-Corps are the standard for institutional clients.</div></div>
            </div>
            <div style="margin-top:12px;padding:12px 14px;background:var(--cream);border-radius:var(--r);font-size:.78rem;color:var(--ink-muted);"><strong style="color:var(--ink);">Note:</strong> This request is submitted to Aidi admin on behalf of your client. Admin reviews within 1 business day.</div>
          </div>
          <div class="wm-wiz-step" id="wmWizStep2">
            <div class="wm-wiz-step-label" id="wmWizStep2Label">Step 2 of 4 &mdash; Entity Details</div>
            <div class="wm-wiz-step-title" id="wmWizStep2Title">Name and register the entity</div>
            <div class="wm-wiz-field"><label class="wm-wiz-label">Entity name <span style="color:var(--red);">*</span></label><input class="wm-wiz-input" type="text" id="wmWizName" placeholder="e.g. Okafor Capital Holdings LLC"></div>
            <div class="wm-wiz-field"><label class="wm-wiz-label">State / Jurisdiction <span style="color:var(--red);">*</span></label>
              <select class="wm-wiz-select" id="wmWizState"><option value="">Select&hellip;</option><optgroup label="United States">
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware  (recommended)</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </optgroup><optgroup label="International"><option value="Nigeria">Nigeria</option></optgroup></select>
            </div>
            <div class="wm-wiz-field"><label class="wm-wiz-label">Purpose / business activity <span style="color:var(--red);">*</span></label>
              <select class="wm-wiz-select" id="wmWizPurpose"><option value="">Select purpose&hellip;</option><option value="Investment Holding">Investment Holding</option><option value="Real Estate Holdings">Real Estate Holdings</option><option value="Family Office">Family Office</option><option value="Operating Business">Operating Business</option><option value="Estate Planning">Estate Planning</option><option value="Charitable / Philanthropic">Charitable / Philanthropic</option><option value="Other">Other</option></select>
            </div>
            <div class="wm-wiz-field" id="wmWizMgmtField" style="display:none;"><label class="wm-wiz-label">Management structure</label><select class="wm-wiz-select" id="wmWizMgmt"><option value="Member-managed">Member-managed</option><option value="Manager-managed">Manager-managed</option></select></div>
            <div class="wm-wiz-field"><label class="wm-wiz-label">Contact email for filings <span style="color:var(--red);">*</span></label><input class="wm-wiz-input" type="email" id="wmWizEmail" placeholder="client@example.com"></div>
          </div>
          <div class="wm-wiz-step" id="wmWizStep3">
            <div class="wm-wiz-step-label">Step 3 of 4 &mdash; Ownership</div>
            <div class="wm-wiz-step-title">Who owns this entity?</div>
            <div class="wm-wiz-field"><label class="wm-wiz-label">Primary member / beneficial owner <span style="color:var(--red);">*</span></label><input class="wm-wiz-input" type="text" id="wmWizOwner1" placeholder="Full legal name"></div>
            <div class="wm-wiz-row">
              <div class="wm-wiz-field"><label class="wm-wiz-label">Ownership % <span style="color:var(--red);">*</span></label><input class="wm-wiz-input" type="number" id="wmWizOwner1Pct" value="100" min="1" max="100"></div>
              <div class="wm-wiz-field"><label class="wm-wiz-label">Nationality</label><input class="wm-wiz-input" type="text" id="wmWizOwner1Nat" placeholder="e.g. Nigerian"></div>
            </div>
            <div class="wm-wiz-field"><label class="wm-wiz-label">Additional member / owner (optional)</label><input class="wm-wiz-input" type="text" id="wmWizOwner2" placeholder="Full legal name"></div>
            <div class="wm-wiz-field"><label class="wm-wiz-label">Notes for Aidi Admin (optional)</label><textarea class="wm-wiz-input" id="wmWizNotes" rows="2" placeholder="Special instructions, cross-border considerations, urgency..." style="resize:none;"></textarea></div>
          </div>
          <div class="wm-wiz-step" id="wmWizStep4">
            <div class="wm-wiz-step-label">Step 4 of 4 &mdash; Review &amp; Submit</div>
            <div class="wm-wiz-step-title">Confirm and submit to Aidi admin</div>
            <div id="wmWizSummary"></div>
            <div class="wm-wiz-fee-box">
              <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:10px;">Formation Fee (billed to client)</div>
              <div style="display:flex;justify-content:space-between;font-size:.83rem;padding:4px 0;"><span style="color:var(--ink-muted);">State filing fee</span><span id="wmWizStateFee" style="font-weight:600;">$90</span></div>
              <div style="display:flex;justify-content:space-between;font-size:.83rem;padding:4px 0;"><span style="color:var(--ink-muted);">Aidi formation service</span><span style="font-weight:600;">$500</span></div>
              <div style="display:flex;justify-content:space-between;font-size:.83rem;padding:4px 0;"><span style="color:var(--ink-muted);">Registered agent (1yr)</span><span style="font-weight:600;">$150</span></div>
              <div style="display:flex;justify-content:space-between;font-size:.9rem;padding:8px 0 2px;border-top:1px solid var(--cream-mid);margin-top:6px;"><span style="font-weight:600;">Total</span><span id="wmWizTotalFee" style="font-weight:700;color:var(--ink);">$740</span></div>
              <div style="font-size:.72rem;color:var(--ink-muted);margin-top:6px;">Submitted to Aidi admin for review. Typical formation: 3-5 business days.</div>
            </div>
            <div style="margin-top:14px;padding:11px 14px;background:var(--blue-pale);border-radius:var(--r);font-size:.78rem;color:var(--blue);">&#x2139; Admin will confirm required documents and begin processing on approval.</div>
          </div>
        </div>
        <div class="wm-wiz-footer">
          <button class="wm-wiz-footer-btn back" id="wmWizBack" onclick="wmWizPrev()" style="display:none;">&larr; Back</button>
          <button class="wm-wiz-footer-btn next" id="wmWizNext" onclick="wmWizNext()">Continue &rarr;</button>
        </div>
      </div>
    </div>

    <!-- WM Compliance Filing Modal -->
    <div class="sm-ov" id="wmSmOv" onclick="if(event.target===this)wmSmClose()">
      <div class="sm-box">
        <div class="sm-hd"><div class="sm-ttl" id="wmSmTtl"></div><button class="sm-x" onclick="wmSmClose()"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
        <div class="sm-bd" id="wmSmBd"></div>
        <div class="sm-ft" id="wmSmFt"></div>
      </div>
    </div>

    <!-- WM Mobile Nav Overlay -->
    <div class="mobile-nav-overlay" id="wmMobOverlay" onclick="closeMobileNav('wm')"></div>
    <nav class="mobile-nav-drawer" id="wmMobDrawer">
      <div class="mob-nav-hd">
        <div class="mob-nav-logo"><div class="mob-nav-logo-dot"></div>Aidi</div>
        <button class="mob-nav-close" onclick="closeMobileNav('wm')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="mob-nav-section">Dashboard</div>
      <button class="mob-nav-item active" id="wm-mob-home" onclick="wmMobNav('home')"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Dashboard</button>
      <button class="mob-nav-item" id="wm-mob-clients" onclick="wmMobNav('clients')"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>Clients<span class="mob-nav-badge">24</span></button>
      <button class="mob-nav-item" id="wm-mob-trade" onclick="wmMobNav('trade')"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>Trade Centre</button>
      <div class="mob-nav-section">Management</div>
      <button class="mob-nav-item" id="wm-mob-docs" onclick="wmMobNav('docs')"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>Documents</button>
      <button class="mob-nav-item" id="wm-mob-msgs" onclick="wmMobNav('msgs')"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Messages</button>
      <button class="mob-nav-item" id="wm-mob-entities" onclick="wmMobNav('entities')"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>Entities</button>
      <button class="mob-nav-item" id="wm-mob-tax" onclick="wmMobNav('tax')"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>Tax Docs</button>
      <button class="mob-nav-item" id="wm-mob-tasks" onclick="wmMobNav('tasks')"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>Calendar</button>
      <div class="mob-nav-section">Intelligence</div>
      <button class="mob-nav-item" id="wm-mob-ai" onclick="wmMobNav('ai')"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>AI Insights</button>
      <div class="mob-nav-section">Account</div>
      <button class="mob-nav-item" id="wm-mob-settings" onclick="wmMobNav('settings')"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>Settings</button>
      <button class="mob-nav-item" onclick="goScreen('screen-role')" style="color:rgba(255,100,100,.5);"><svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Log out</button>
      <div class="mob-nav-user">
        <div class="mob-nav-av">SM</div>
        <div><div class="mob-nav-name">Sarah Mensah</div><div class="mob-nav-role">Wealth Manager</div></div>
      </div>
    </nav>

    <!-- SA Mobile Nav Overlay -->
    <div class="mobile-nav-overlay" id="saMobOverlay" onclick="closeMobileNav('sa')"></div>
    <nav class="mobile-nav-drawer" id="saMobDrawer">
      <div class="mob-nav-hd">
        <div class="mob-nav-logo"><div class="mob-nav-logo-dot"></div>Aidi</div>
        <button class="mob-nav-close" onclick="closeMobileNav('sa')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="mob-nav-section">Overview</div>
      <button class="mob-nav-item active" id="sa-mob-home" onclick="saMobNav('home')"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Dashboard</button>
      <button class="mob-nav-item" id="sa-mob-approvals" onclick="saMobNav('approvals')"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Approvals<span class="mob-nav-badge">8</span></button>
      <div class="mob-nav-section">Platform</div>
      <button class="mob-nav-item" id="sa-mob-trade" onclick="saMobNav('trade')"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>Trade Centre</button>
      <button class="mob-nav-item" id="sa-mob-entities" onclick="saMobNav('entities')"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>Entities</button>
      <button class="mob-nav-item" id="sa-mob-advisors" onclick="saMobNav('advisors')"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Advisors</button>
      <button class="mob-nav-item" id="sa-mob-clients" onclick="saMobNav('clients')"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>Clients</button>
      <button class="mob-nav-item" id="sa-mob-tax" onclick="saMobNav('tax')"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>Tax</button>
      <button class="mob-nav-item" id="sa-mob-compliance" onclick="saMobNav('compliance')"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Compliance</button>
      <button class="mob-nav-item" id="sa-mob-blog" onclick="saMobNav('blog')"><svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>Blog</button>
      <div class="mob-nav-section">Account</div>
      <button class="mob-nav-item" id="sa-mob-settings" onclick="saMobNav('settings')"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>Settings</button>
      <button class="mob-nav-item" onclick="goScreen('screen-role')" style="color:rgba(255,100,100,.5);"><svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Log out</button>
      <div class="mob-nav-user">
        <div class="mob-nav-av" style="background:var(--gold);">AD</div>
        <div><div class="mob-nav-name">Aidi Admin</div><div class="mob-nav-role">Super Admin</div></div>
      </div>
    </nav>

    <!-- Order Detail Modal -->
    <div class="sm-ov" id="orderModal" onclick="if(event.target===this)closeOrderModal()">
      <div class="sm-box" style="width:520px;max-width:95vw;">
        <div class="sm-hd">
          <div>
            <div class="sm-ttl" id="orderModalTitle">Order Details</div>
            <div style="font-size:.72rem;color:var(--ink-muted);margin-top:2px;" id="orderModalRef"></div>
          </div>
          <button class="sm-x" onclick="closeOrderModal()"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
        <div class="sm-bd" id="orderModalBody"></div>
        <div class="sm-ft" id="orderModalFoot"></div>
      </div>
    </div>

    <!-- SA Add Opportunity full overlay -->
    <div id="saAddOppOverlay" style="display:none;position:fixed;inset:0;background:white;z-index:850;overflow-y:auto;">
      <div style="max-width:700px;margin:0 auto;padding:32px 24px 80px;">

        <!-- Header -->
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:28px;">
          <button onclick="saCloseAddOpp()" style="width:32px;height:32px;border-radius:8px;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='white'">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div>
            <div id="saOppPageTitle" style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:400;color:var(--ink);">Add New Opportunity</div>
            <div style="font-size:.76rem;color:var(--ink-muted);margin-top:2px;">Select a category to begin</div>
          </div>
        </div>

        <!-- Category cards -->
        <div id="saOppCatSection">
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;" id="saOppCatGrid">
            <div class="sa-opp-cat-card" id="saOppCat-private" onclick="saSelectOppCat('private')">
              <div style="font-size:1.6rem;margin-bottom:8px;">📈</div>
              <div style="font-size:.85rem;font-weight:600;color:var(--ink);">Private Markets</div>
              <div style="font-size:.72rem;color:var(--ink-muted);margin-top:4px;line-height:1.4;">PE, Venture, SPV, Private Credit</div>
            </div>
            <div class="sa-opp-cat-card" id="saOppCat-realestate" onclick="saSelectOppCat('realestate')">
              <div style="font-size:1.6rem;margin-bottom:8px;">🏠</div>
              <div style="font-size:.85rem;font-weight:600;color:var(--ink);">Real Estate &amp; Airbnb</div>
              <div style="font-size:.72rem;color:var(--ink-muted);margin-top:4px;line-height:1.4;">Residential, Commercial, Short-term rental</div>
            </div>
            <div class="sa-opp-cat-card" id="saOppCat-gold" onclick="saSelectOppCat('gold')">
              <div style="font-size:1.6rem;margin-bottom:8px;">🥇</div>
              <div style="font-size:.85rem;font-weight:600;color:var(--ink);">Gold &amp; Silver</div>
              <div style="font-size:.72rem;color:var(--ink-muted);margin-top:4px;line-height:1.4;">Physical, ETF, Vault-backed</div>
            </div>



          </div>
        </div>

        <!-- ── PRIVATE MARKETS FORM ── -->
        <div id="saForm-private" style="display:none;">
          <div style="border-top:1px solid var(--cream-mid);margin:24px 0 20px;"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
            <div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Fund / Deal Name <span style="color:var(--red);">*</span></label><input class="sm-inp" id="pm-name" placeholder="e.g. Bridge Loan Fund IV"></div>
            <div class="sm-fld"><label class="sm-lbl">Deal Type <span style="color:var(--red);">*</span></label>
              <select class="sm-sel" id="pm-type">
                <option value="">Select type&hellip;</option>
                <option>Private Credit</option><option>Private Equity</option><option>Venture Capital</option>
                <option>SPV — Special Purpose Vehicle</option><option>Real Estate Debt</option><option>Infrastructure</option>
              </select>
            </div>
            <div class="sm-fld"><label class="sm-lbl">Target Return</label><input class="sm-inp" id="pm-return" placeholder="e.g. 10.5% net IRR"></div>
            <div class="sm-fld"><label class="sm-lbl">Minimum Investment <span style="color:var(--red);">*</span></label><input class="sm-inp" id="pm-min" placeholder="e.g. $25,000"></div>
            <div class="sm-fld"><label class="sm-lbl">Total Raise / Fund Size</label><input class="sm-inp" id="pm-size" placeholder="e.g. $50,000,000"></div>
            <div class="sm-fld"><label class="sm-lbl">Investment Term</label><input class="sm-inp" id="pm-term" placeholder="e.g. 18 months"></div>
            <div class="sm-fld"><label class="sm-lbl">Closing Date</label><input class="sm-inp" type="date" id="pm-close"></div>
            <div class="sm-fld"><label class="sm-lbl">Carry / Management Fee</label><input class="sm-inp" id="pm-fees" placeholder="e.g. 20% carry, 2% mgmt"></div>
            <div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description <span style="color:var(--red);">*</span></label><textarea class="sm-inp" id="pm-desc" rows="3" style="resize:none;" placeholder="Overview of the deal, investment thesis, use of proceeds..."></textarea></div>
            <div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Key Highlights (comma-separated)</label><input class="sm-inp" id="pm-highlights" placeholder="e.g. RE-secured, Senior debt, Quarterly distributions"></div>
            <div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel" id="pm-accred"><option value="yes">Yes — Accredited only</option><option value="no">No — Open to all</option></select></div>
            <div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="pm-vis"><option value="all">All clients &amp; WMs</option><option value="wm">WMs only</option><option value="matched">Matched clients (Elia)</option></select></div>
            <div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Investment Memo / Deck</label>
              <div class="sa-doc-upload" onclick="document.getElementById('pm-doc').click()">📄 Click to attach PDF or presentation<input type="file" id="pm-doc" style="display:none" accept=".pdf,.pptx,.doc,.docx" onchange="showToast('Memo attached ✓')"></div>
            </div>
          </div>
        </div>

        <!-- ── REAL ESTATE FORM ── -->
        <div id="saForm-realestate" style="display:none;">
          <div style="border-top:1px solid var(--cream-mid);margin:24px 0 20px;"></div>
          <div class="sm-fld">
            <label class="sm-lbl">Property Images <span style="color:var(--red);">*</span></label>
            <div id="re-img-zone"
              style="border:2px dashed var(--cream-dark);border-radius:var(--r-lg);padding:36px;text-align:center;cursor:pointer;background:var(--cream);transition:all .18s;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:160px;"
              ondragover="event.preventDefault();saImgDragOver(this)"
              ondragleave="saImgDragLeave(this)"
              ondrop="saImgDrop(event,'re')"
              onclick="document.getElementById('re-img-input').click()">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--ink-muted)" stroke-width="1.3" style="margin-bottom:10px;"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <div style="font-size:.87rem;font-weight:500;color:var(--ink-soft);">Drag &amp; drop property photos here</div>
              <div style="font-size:.75rem;color:var(--ink-muted);margin-top:5px;">or click to browse &mdash; JPG, PNG, WebP &middot; Max 5MB each &middot; Up to 8 images</div>
              <input type="file" id="re-img-input" multiple accept=".jpg,.jpeg,.png,.webp" style="display:none" onchange="saImgHandle(this.files,'re')">
            </div>
            <div id="re-img-preview" style="display:none;margin-top:12px;grid-template-columns:repeat(4,1fr);gap:8px;"></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
            <div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Property Name / Listing Title <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-name" placeholder="e.g. Modern Stylish Home — San Jose, CA"></div>
            <div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Full Address <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-address" placeholder="e.g. 458 N 7th Street, San Jose, CA 95112"></div>
            <div class="sm-fld"><label class="sm-lbl">Property Type <span style="color:var(--red);">*</span></label>
              <select class="sm-sel" id="re-type">
                <option value="">Select&hellip;</option>
                <option>Residential — Single Family</option><option>Residential — Multi-Family</option>
                <option>Short-term Rental (Airbnb)</option><option>Commercial</option><option>Mixed Use</option>
              </select>
            </div>
            <div class="sm-fld"><label class="sm-lbl">Airbnb / Haven listed?</label><select class="sm-sel" id="re-airbnb"><option value="yes">Yes — on Aidi Haven</option><option value="no">No</option></select></div>
            <div class="sm-fld"><label class="sm-lbl">Bedrooms / Bathrooms</label><input class="sm-inp" id="re-beds" placeholder="e.g. 4 bed / 3 bath"></div>
            <div class="sm-fld"><label class="sm-lbl">Square Footage</label><input class="sm-inp" id="re-sqft" placeholder="e.g. 2,400 sqft"></div>
            <div class="sm-fld"><label class="sm-lbl">Purchase / Listing Price <span style="color:var(--red);">*</span></label><input class="sm-inp" id="re-price" placeholder="e.g. $1,200,000"></div>
            <div class="sm-fld"><label class="sm-lbl">Minimum Investment</label><input class="sm-inp" id="re-min" placeholder="e.g. $5,000"></div>
            <div class="sm-fld"><label class="sm-lbl">Target Cap Rate / Return</label><input class="sm-inp" id="re-return" placeholder="e.g. 5% cap rate"></div>
            <div class="sm-fld"><label class="sm-lbl">Est. Monthly Rental</label><input class="sm-inp" id="re-rent" placeholder="e.g. $4,200 / month"></div>
            <div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description <span style="color:var(--red);">*</span></label><textarea class="sm-inp" id="re-desc" rows="3" style="resize:none;" placeholder="Property overview, neighbourhood, investment thesis, rental history..."></textarea></div>
            <div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Key Highlights</label><input class="sm-inp" id="re-highlights" placeholder="e.g. Corner lot, Recently renovated, Airbnb avg $280/night"></div>
            <div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel" id="re-accred"><option value="no">No — Open to all</option><option value="yes">Yes — Accredited only</option></select></div>
            <div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="re-vis"><option value="all">All clients &amp; WMs</option><option value="wm">WMs only</option><option value="matched">Matched clients (Elia)</option></select></div>
          </div>
        </div>

        <!-- ── GOLD & SILVER FORM ── -->
        <div id="saForm-gold" style="display:none;">
          <div style="border-top:1px solid var(--cream-mid);margin:24px 0 20px;"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
            <div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Listing Name <span style="color:var(--red);">*</span></label><input class="sm-inp" id="gld-name" placeholder="e.g. Physical Gold — Citadel Vault, Oklahoma City Allocation"></div>
            <div class="sm-fld"><label class="sm-lbl">Metal <span style="color:var(--red);">*</span></label>
              <select class="sm-sel" id="gld-metal">
                <option value="">Select&hellip;</option>
                <option>Gold (Physical)</option><option>Gold ETF (IAU / GLD)</option>
                <option>Silver (Physical)</option><option>Silver ETF</option>
                <option>Platinum</option><option>Palladium</option>
              </select>
            </div>
            <div class="sm-fld"><label class="sm-lbl">Custody / Storage</label>
              <select class="sm-sel" id="gld-vault">
                <option>Citadel Vault, Oklahoma City</option><option>Citadel Vault, Oklahoma City</option>
                <option>Citadel Vault, Oklahoma City</option><option>Citadel Vault, Oklahoma City</option><option>Client-held</option>
              </select>
            </div>
            <div class="sm-fld"><label class="sm-lbl">Minimum Investment <span style="color:var(--red);">*</span></label><input class="sm-inp" id="gld-min" placeholder="e.g. $5,000"></div>
            <div class="sm-fld"><label class="sm-lbl">Settlement</label><input class="sm-inp" id="gld-settle" placeholder="e.g. T+2"></div>
            <div class="sm-fld"><label class="sm-lbl">Annual Storage Fee</label><input class="sm-inp" id="gld-fee" placeholder="e.g. 0.15% per annum"></div>
            <div class="sm-fld"><label class="sm-lbl">Current Spot Price (live)</label><input class="sm-inp" id="gld-spot" placeholder="e.g. $2,341.50 / oz"></div>
            <div class="sm-fld"><label class="sm-lbl">Liquidation Fee</label><input class="sm-inp" id="gld-liq" placeholder="e.g. 1% of yield on sale"></div>
            <div class="sm-fld" style="grid-column:1/-1;"><label class="sm-lbl">Description</label><textarea class="sm-inp" id="gld-desc" rows="2" style="resize:none;" placeholder="Additional context — vault insurance, allocation terms, etc."></textarea></div>
            <div class="sm-fld"><label class="sm-lbl">Accreditation required?</label><select class="sm-sel" id="gld-accred"><option value="no">No — Open to all</option><option value="yes">Yes — Accredited only</option></select></div>
            <div class="sm-fld"><label class="sm-lbl">Visibility</label><select class="sm-sel" id="gld-vis"><option value="all">All clients &amp; WMs</option><option value="wm">WMs only</option></select></div>
          </div>
        </div>







        <!-- Submit footer (shown once a form is visible) -->
        <div id="saOppSubmitBar" style="display:none;margin-top:28px;padding-top:20px;border-top:1px solid var(--cream-mid);display:none;justify-content:flex-end;gap:10px;">
          <button onclick="saCloseAddOpp()" style="padding:10px 24px;border-radius:100px;font-size:.83rem;font-weight:600;background:white;color:var(--ink);border:1.5px solid var(--cream-dark);cursor:pointer;font-family:inherit;" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='white'">Cancel</button>
          <button onclick="saSubmitOpp()" style="padding:10px 28px;border-radius:100px;font-size:.83rem;font-weight:600;background:var(--ink);color:white;border:none;cursor:pointer;font-family:inherit;" onmouseover="this.style.background='#1e3354'" onmouseout="this.style.background='var(--ink)'">Publish Opportunity</button>
        </div>

      </div>
    </div>

    <!-- SA Slide-right panel -->
    <div class="sa-slide-overlay" id="saSlideOverlay" onclick="saCloseSlide()"></div>
    <div class="sa-slide-panel" id="saSlidePanel">
      <div class="sa-slide-hd">
        <div>
          <div class="sa-slide-ttl" id="saSlideTitle">Details</div>
          <div class="sa-slide-sub" id="saSlideSubtitle"></div>
        </div>
        <button class="sa-slide-close" onclick="saCloseSlide()"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="sa-slide-body" id="saSlideBody"></div>
      <div class="sa-slide-ft" id="saSlideFooter"></div></div>

    <!-- SA New Client Modal -->
    <div class="modal-ov" id="modal-sa-new-client" onclick="if(event.target===this)closeModal('modal-sa-new-client')">
      <div class="modal-box" style="max-width:560px;">
        <div class="modal-head" style="flex-direction:column;align-items:flex-start;gap:14px;padding-bottom:14px;">
          <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
            <span class="modal-title" id="saNcTitle">Create New Client</span>
            <button class="modal-x" onclick="closeModal('modal-sa-new-client')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
          </div>
          <!-- Progress dots -->
          <div style="display:flex;align-items:center;width:100%;">
            <div style="display:flex;align-items:center;gap:6px;"><div id="saNcDot1" style="width:22px;height:22px;border-radius:50%;background:var(--ink);color:white;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700;">1</div><span style="font-size:.76rem;font-weight:600;color:var(--ink);white-space:nowrap;">Account Type</span></div>
            <div style="flex:1;height:1px;background:var(--cream-dark);margin:0 8px;"></div>
            <div style="display:flex;align-items:center;gap:6px;"><div id="saNcDot2" style="width:22px;height:22px;border-radius:50%;background:var(--cream-dark);color:var(--ink-muted);display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700;">2</div><span id="saNcLbl2" style="font-size:.76rem;font-weight:400;color:var(--ink-muted);white-space:nowrap;">Details</span></div>
            <div style="flex:1;height:1px;background:var(--cream-dark);margin:0 8px;"></div>
            <div style="display:flex;align-items:center;gap:6px;"><div id="saNcDot3" style="width:22px;height:22px;border-radius:50%;background:var(--cream-dark);color:var(--ink-muted);display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700;">3</div><span id="saNcLbl3" style="font-size:.76rem;font-weight:400;color:var(--ink-muted);white-space:nowrap;">Documents</span></div>
            <div style="flex:1;height:1px;background:var(--cream-dark);margin:0 8px;"></div>
            <div style="display:flex;align-items:center;gap:6px;"><div id="saNcDot4" style="width:22px;height:22px;border-radius:50%;background:var(--cream-dark);color:var(--ink-muted);display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700;">4</div><span id="saNcLbl4" style="font-size:.76rem;font-weight:400;color:var(--ink-muted);white-space:nowrap;">Access & WM</span></div>
          </div>
        </div>

        <!-- STEP 1 — Choose type -->
        <div class="modal-body" id="saNcStep1">
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label" style="margin-bottom:10px;">What type of account are you creating?</label>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div id="saNcCardInd" onclick="saNcType('individual')" style="padding:20px 16px;border-radius:12px;border:2px solid var(--ink);background:var(--cream);cursor:pointer;text-align:center;transition:all .15s;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--ink)" stroke-width="1.4" style="margin-bottom:10px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <div style="font-size:.9rem;font-weight:700;color:var(--ink);">Individual</div>
                <div style="font-size:.75rem;color:var(--ink-muted);margin-top:4px;line-height:1.4;">Personal account for a single investor. Can be WM-managed or self-directed.</div>
              </div>
              <div id="saNcCardBiz" onclick="saNcType('business')" style="padding:20px 16px;border-radius:12px;border:2px solid var(--cream-dark);background:white;cursor:pointer;text-align:center;transition:all .15s;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--ink-soft)" stroke-width="1.4" id="saNcBizIcon" style="margin-bottom:10px;"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <div style="font-size:.9rem;font-weight:700;color:var(--ink-soft);" id="saNcBizLabel">Business</div>
                <div style="font-size:.75rem;color:var(--ink-muted);margin-top:4px;line-height:1.4;">Corporate investment account for a registered company or entity.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-foot" id="saNcFoot1">
          <button class="btn-sm btn-outline" onclick="closeModal('modal-sa-new-client')">Cancel</button>
          <button class="btn-sm btn-ink" onclick="saNcNext(1)">Continue →</button>
        </div>

        <!-- STEP 2 — Individual details -->
        <div class="modal-body" id="saNcStep2Ind" style="display:none;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div class="form-group"><label class="form-label">First Name *</label><input class="form-input" id="saNcFirstName" placeholder="e.g. Priya"></div>
            <div class="form-group"><label class="form-label">Last Name *</label><input class="form-input" id="saNcLastName" placeholder="e.g. Sharma"></div>
          </div>
          <div class="form-group"><label class="form-label">Email Address *</label><input class="form-input" type="email" id="saNcEmail" placeholder="client@example.com"></div>
          <div class="form-group"><label class="form-label">Phone Number</label><input class="form-input" type="tel" id="saNcPhone" placeholder="+1 415 555 0100"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div class="form-group"><label class="form-label">Nationality</label><input class="form-input" id="saNcNat" placeholder="e.g. Nigerian"></div>
            <div class="form-group"><label class="form-label">Date of Birth</label><input class="form-input" type="date" id="saNcDob"></div>
          </div>
          <div class="form-group"><label class="form-label">Residential Address</label><input class="form-input" id="saNcAddr" placeholder="Full residential address"></div>
        </div>
        <div class="modal-foot" id="saNcFoot2Ind" style="display:none;">
          <button class="btn-sm btn-outline" onclick="saNcBack(2)">← Back</button>
          <button class="btn-sm btn-ink" onclick="saNcNext(2)">Continue →</button>
        </div>

        <!-- STEP 2 — Business details -->
        <div class="modal-body" id="saNcStep2Biz" style="display:none;">
          <div class="form-group"><label class="form-label">Company Name *</label><input class="form-input" id="saNcBizName" placeholder="e.g. Tectona Capital Ltd"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div class="form-group"><label class="form-label">Registration Number</label><input class="form-input" id="saNcRegNo" placeholder="e.g. RC-8847291"></div>
            <div class="form-group"><label class="form-label">Jurisdiction</label><input class="form-input" id="saNcJuris" placeholder="e.g. Nigeria / Delaware"></div>
          </div>
          <div class="form-group"><label class="form-label">Primary Contact Email *</label><input class="form-input" type="email" id="saNcBizEmail" placeholder="contact@company.com"></div>
          <div class="form-group"><label class="form-label">Primary Contact Phone</label><input class="form-input" type="tel" id="saNcBizPhone" placeholder="+234 801 000 0000"></div>
          <div class="form-group"><label class="form-label">Director / Beneficial Owner *</label><input class="form-input" id="saNcDirector" placeholder="Full legal name + ownership %"></div>
          <div class="form-group"><label class="form-label">Business Address</label><input class="form-input" id="saNcBizAddr" placeholder="Registered company address"></div>
        </div>
        <div class="modal-foot" id="saNcFoot2Biz" style="display:none;">
          <button class="btn-sm btn-outline" onclick="saNcBack(2)">← Back</button>
          <button class="btn-sm btn-ink" onclick="saNcNext(2)">Continue →</button>
        </div>

        <!-- STEP 3 — Documents -->
        <div class="modal-body" id="saNcStep3" style="display:none;">
          <div style="background:var(--blue-pale);border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:var(--blue);margin-bottom:14px;">ℹ Upload KYC documents now or skip and request later.</div>
          <!-- Individual docs -->
          <div id="saNcDocsInd">
            <div class="form-group"><label class="form-label">Passport / Government ID</label>
              <div class="upload-box" onclick="document.getElementById('saNcF1').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></div>
                <div class="upload-label" id="saNcF1Lbl">Upload passport or government-issued photo ID</div>
                <div class="upload-sub">JPG, PNG or PDF · Max 10MB</div>
                <input type="file" id="saNcF1" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="document.getElementById('saNcF1Lbl').textContent='✓ '+this.files[0].name">
              </div>
            </div>
            <div class="form-group"><label class="form-label">Proof of Address <span style="font-weight:300;">(within 90 days)</span></label>
              <div class="upload-box" onclick="document.getElementById('saNcF2').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                <div class="upload-label" id="saNcF2Lbl">Utility bill or bank statement</div>
                <div class="upload-sub">JPG, PNG or PDF · Max 10MB</div>
                <input type="file" id="saNcF2" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="document.getElementById('saNcF2Lbl').textContent='✓ '+this.files[0].name">
              </div>
            </div>
            <div class="form-group"><label class="form-label">Source of Funds Declaration</label>
              <div class="upload-box" onclick="document.getElementById('saNcF3').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
                <div class="upload-label" id="saNcF3Lbl">Employment letter, bank statement or declaration</div>
                <div class="upload-sub">PDF · Max 10MB</div>
                <input type="file" id="saNcF3" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="document.getElementById('saNcF3Lbl').textContent='✓ '+this.files[0].name">
              </div>
            </div>
          </div>
          <!-- Business docs -->
          <div id="saNcDocsBiz" style="display:none;">
            <div class="form-group"><label class="form-label">Certificate of Incorporation *</label>
              <div class="upload-box" onclick="document.getElementById('saNcBF1').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
                <div class="upload-label" id="saNcBF1Lbl">Company registration certificate / CAC cert</div>
                <div class="upload-sub">PDF · Max 20MB</div>
                <input type="file" id="saNcBF1" accept=".pdf" style="display:none" onchange="document.getElementById('saNcBF1Lbl').textContent='✓ '+this.files[0].name">
              </div>
            </div>
            <div class="form-group"><label class="form-label">Director / Beneficial Owner ID *</label>
              <div class="upload-box" onclick="document.getElementById('saNcBF2').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div class="upload-label" id="saNcBF2Lbl">Passport or government ID of primary director</div>
                <div class="upload-sub">JPG, PNG or PDF · Max 10MB</div>
                <input type="file" id="saNcBF2" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="document.getElementById('saNcBF2Lbl').textContent='✓ '+this.files[0].name">
              </div>
            </div>
            <div class="form-group"><label class="form-label">Proof of Business Address</label>
              <div class="upload-box" onclick="document.getElementById('saNcBF3').click()" style="cursor:pointer;">
                <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                <div class="upload-label" id="saNcBF3Lbl">Utility bill or bank letter (within 90 days)</div>
                <div class="upload-sub">PDF or JPG · Max 10MB</div>
                <input type="file" id="saNcBF3" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="document.getElementById('saNcBF3Lbl').textContent='✓ '+this.files[0].name">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-foot" id="saNcFoot3" style="display:none;">
          <button class="btn-sm btn-outline" onclick="saNcBack(3)">← Back</button>
          <button class="btn-sm btn-outline" onclick="saNcNext(3)" style="margin-left:auto;">Skip for now</button>
          <button class="btn-sm btn-ink" onclick="saNcNext(3)">Continue →</button>
        </div>

        <!-- STEP 4 — Access & WM -->
        <div class="modal-body" id="saNcStep4" style="display:none;">
          <div class="form-group"><label class="form-label">Assign to Wealth Manager</label>
            <select class="form-select" id="saNcWM">
              <option value="">No WM — client manages account independently</option>
              <option>Sarah Mensah (Meridian Private Wealth)</option>
              <option>James Osei (Aidi Direct)</option>
              <option>Amara Diallo (Continental Wealth)</option>
            </select>
            <div style="font-size:.75rem;color:var(--ink-muted);margin-top:5px;">A wealth manager can be assigned or changed at any time from the client profile.</div>
          </div>
          <div class="form-group"><label class="form-label">Subscription Plan</label>
            <select class="form-select" id="saNcPlan">
              <option>Starter (Free)</option>
              <option>Growth ($29/mo)</option>
              <option>Premium ($79/mo)</option>
              <option>Family Office ($99/mo)</option>
            </select>
          </div>
          <div class="form-group"><label class="form-label">Temporary Password</label>
            <input class="form-input" type="password" id="saNcPass" placeholder="Min 8 characters">
            <div style="font-size:.75rem;color:var(--ink-muted);margin-top:5px;">Leave blank to send a magic sign-in link instead. Client will be prompted to set their own password.</div>
          </div>
          <div class="form-group"><label class="form-label">Internal Notes <span style="font-weight:300;">(optional)</span></label>
            <textarea class="form-input" rows="2" style="resize:none;" placeholder="Referral source, special instructions, priority flag…"></textarea>
          </div>
        </div>
        <div class="modal-foot" id="saNcFoot4" style="display:none;">
          <button class="btn-sm btn-outline" onclick="saNcBack(4)">← Back</button>
          <button class="btn-sm btn-ink" onclick="saNcSubmit()">Create Client Account</button>
        </div>
      </div>
    </div>

    <!-- SA New WM Modal -->
    <div class="modal-ov" id="modal-sa-new-wm" onclick="if(event.target===this)closeModal('modal-sa-new-wm')">
      <div class="modal-box" style="max-width:520px;">
        <div class="modal-head">
          <span class="modal-title">Add Wealth Manager</span>
          <button class="modal-x" onclick="closeModal('modal-sa-new-wm')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
        <div class="modal-body">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div class="form-group"><label class="form-label">First Name *</label><input class="form-input" placeholder="e.g. James"></div>
            <div class="form-group"><label class="form-label">Last Name *</label><input class="form-input" placeholder="e.g. Okonkwo"></div>
          </div>
          <div class="form-group"><label class="form-label">Email Address *</label><input class="form-input" type="email" placeholder="wm@firm.com"></div>
          <div class="form-group"><label class="form-label">Firm / Company</label><input class="form-input" placeholder="e.g. Meridian Private Wealth"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div class="form-group"><label class="form-label">Designation</label><input class="form-input" placeholder="e.g. CFA, CFP"></div>
            <div class="form-group"><label class="form-label">Years Experience</label><input class="form-input" type="number" placeholder="e.g. 10"></div>
          </div>
          <div class="form-group"><label class="form-label">Regulatory Licence *</label>
            <select class="form-select"><option>FCA (UK)</option><option>SEC (USA)</option><option>FSCA (South Africa)</option><option>CBN (Nigeria)</option><option>CMA (Kenya)</option><option>Other</option></select>
          </div>
          <div class="form-group"><label class="form-label">Licence Number</label><input class="form-input" placeholder="e.g. FCA-2019-04821"></div>
          <div class="form-group"><label class="form-label">Licence Certificate</label>
            <div class="upload-box" onclick="document.getElementById('saWmLicFile').click()" style="cursor:pointer;padding:18px;">
              <div class="upload-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></div>
              <div class="upload-label">Upload licence certificate</div>
              <div class="upload-sub">PDF · Max 10MB</div>
              <input type="file" id="saWmLicFile" accept=".pdf" style="display:none" onchange="this.previousElementSibling.previousElementSibling.textContent='✓ '+this.files[0].name">
            </div>
          </div>
          <div class="form-group"><label class="form-label">Assign Existing Clients (optional)</label>
            <select class="form-select" multiple style="height:80px;"><option>Emeka Okafor</option><option>Fatima Al-Rashid</option><option>Priya Sharma</option><option>Ibrahim Hassan</option></select>
          </div>
        </div>
        <div class="modal-foot"><button class="btn-sm btn-outline" onclick="closeModal('modal-sa-new-wm')">Cancel</button><button class="btn-sm btn-ink" onclick="closeModal('modal-sa-new-wm');showToast('Wealth Manager onboarded ✓')">Create WM Account</button></div>
      </div>
    </div>

    <!-- SA Client Profile Overlay -->
    <div id="saClientProfileOv" style="display:none;position:fixed;inset:0;background:rgba(12,26,46,.45);backdrop-filter:blur(4px);z-index:790;overflow-y:auto;padding:40px 20px;" onclick="if(event.target===this)saCloseClientProfile()">
      <div style="background:white;border-radius:18px;max-width:860px;margin:0 auto;box-shadow:0 24px 80px rgba(12,26,46,.18);display:flex;flex-direction:column;overflow:hidden;">
        <!-- Modal header with tabs -->
        <div style="border-bottom:1px solid var(--cream-mid);padding:0 28px;background:white;flex-shrink:0;">
          <div style="display:flex;align-items:center;gap:12px;padding:18px 0 0;">
            <div style="flex:1;">
              <div id="saClientProfileName" style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:400;color:var(--ink);"></div>
              <div id="saClientProfileSub" style="font-size:.75rem;color:var(--ink-muted);margin-top:1px;"></div>
            </div>
            <button class="btn-sm btn-ink" id="saProfileMsgBtn" onclick="saProfileToggleCompose()">Message</button>
            <button onclick="saCloseClientProfile()" style="width:32px;height:32px;border-radius:8px;border:1.5px solid var(--cream-dark);background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div style="display:flex;margin-top:10px;overflow-x:auto;gap:0;">
            <div class="cw-tab-item active" id="sacp-t-overview" onclick="saCpTab('overview')" style="padding:10px 16px;white-space:nowrap;border-bottom:2px solid var(--ink);margin-bottom:-1px;font-size:.83rem;font-weight:600;cursor:pointer;">Overview</div>
            <div class="cw-tab-item" id="sacp-t-docs" onclick="saCpTab('docs')" style="padding:10px 16px;white-space:nowrap;border-bottom:2px solid transparent;margin-bottom:-1px;font-size:.83rem;cursor:pointer;">Documents</div>
            <div class="cw-tab-item" id="sacp-t-txns" onclick="saCpTab('txns')" style="padding:10px 16px;white-space:nowrap;border-bottom:2px solid transparent;margin-bottom:-1px;font-size:.83rem;cursor:pointer;">Transactions</div>
            <div class="cw-tab-item" id="sacp-t-compliance" onclick="saCpTab('compliance')" style="padding:10px 16px;white-space:nowrap;border-bottom:2px solid transparent;margin-bottom:-1px;font-size:.83rem;cursor:pointer;">Compliance</div>
            <div class="cw-tab-item" id="sacp-t-msgs" onclick="saCpTab('msgs')" style="padding:10px 16px;white-space:nowrap;border-bottom:2px solid transparent;margin-bottom:-1px;font-size:.83rem;cursor:pointer;">Messages</div>
          </div>
        </div>
        <!-- Compose box (hidden by default) -->
        <div id="saProfileComposeBox" style="display:none;border-top:1px solid var(--cream-mid);padding:14px 28px;background:var(--cream);flex-shrink:0;">
          <div style="font-size:.78rem;font-weight:600;color:var(--ink);margin-bottom:8px;" id="saProfileComposeTo">Message to client</div>
          <textarea id="saProfileComposeText" rows="3" placeholder="Type your message…" style="width:100%;padding:10px 14px;border:1.5px solid var(--cream-dark);border-radius:var(--r);font-size:.84rem;font-family:inherit;outline:none;resize:none;box-sizing:border-box;transition:border .15s;" onfocus="this.style.borderColor='var(--blue)'" onblur="this.style.borderColor='var(--cream-dark)'" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();saProfileSendMsg();}"></textarea>
          <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;">
            <button class="btn-sm btn-outline" onclick="saProfileToggleCompose()">Cancel</button>
            <button class="btn-sm btn-ink" onclick="saProfileSendMsg()">Send Message</button>
          </div>
        </div>
        <!-- Tab content -->
        <div id="saClientProfileBody" style="padding:28px;overflow-y:auto;max-height:calc(100vh - 220px);"></div>
      </div>
    </div>


    <!-- SA New Message Picker Modal -->
    <div class="modal-ov" id="modal-sa-new-msg" onclick="if(event.target===this)closeModal('modal-sa-new-msg')">
      <div class="modal-box" style="max-width:460px;">
        <div class="modal-head">
          <span class="modal-title">New Message</span>
          <button class="modal-x" onclick="closeModal('modal-sa-new-msg')"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Send to</label>
            <div style="position:relative;">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="var(--ink-muted)" stroke-width="2" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);pointer-events:none;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" id="saNmSearch" placeholder="Search clients or wealth managers…" oninput="saNmFilter(this.value)" style="width:100%;padding:9px 12px 9px 32px;border:1.5px solid var(--cream-dark);border-radius:var(--r);font-size:.84rem;outline:none;font-family:inherit;box-sizing:border-box;transition:border .15s;" onfocus="this.style.borderColor='var(--blue)'" onblur="this.style.borderColor='var(--cream-dark)'">
            </div>
          </div>
          <!-- Recipient list -->
          <div id="saNmList" style="max-height:320px;overflow-y:auto;border:1.5px solid var(--cream-dark);border-radius:var(--r);margin-top:-8px;"></div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const CHUNKS = ["/js/internal-01.js"]

let loaded = false
async function loadChunks() {
  if (loaded || typeof window === 'undefined') return
  loaded = true
  for (const src of CHUNKS) {
    await new Promise((resolve) => {
      const s = document.createElement('script')
      s.src = src
      s.setAttribute('data-aidi-zone', 'internal')
      s.onload = () => resolve()
      s.onerror = () => resolve()
      document.body.appendChild(s)
    })
  }
  // Synthetic DOMContentLoaded — see landing.vue for the full rationale.
  // Internal's bundle does not currently define a DOMContentLoaded handler,
  // but dispatching is harmless and future-proofs against changes.
  try {
    document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: false, cancelable: false }))
  } catch (e) { /* no-op */ }
  document.dispatchEvent(new Event('aidi:internal:ready'))
}

// Activate the current route's .screen / .int-auth-page element.
// Internal's CSS hides .screen by default; the original goScreen(id)
// added .active to one element. Now that each screen is a route,
// we activate on mount and on every route change.
//
// We use BOTH a synchronous query AND a MutationObserver because:
//   - Sync query catches the case where the new route's DOM is already
//     present when this fires (cached chunk, fast machine).
//   - Observer catches the lazy-chunk case: when navigating between
//     routes within the same layout, Nuxt asynchronously fetches the
//     new page chunk. `nextTick()` resolves before that chunk has
//     mounted its component, so a sync query finds nothing or finds
//     the OLD wrapper. Without the observer, the new screen would
//     stay hidden until something else triggered a re-render (the
//     "blank until I click" symptom users see).
function activateScreen(el) {
  if (!el) return
  if (el.classList.contains('int-auth-page')) {
    el.style.display = 'flex'
  } else {
    el.classList.add('active')
  }
}
function activateInElement(root) {
  if (!root || root.nodeType !== 1) return
  // Activate the root itself if it qualifies
  if (root.matches && (root.matches('.screen') || root.matches('.int-auth-page') || root.matches('[id^="wm-onboard-"]'))) {
    activateScreen(root)
  }
  // …and any matching descendants (e.g. .aidi-route-wrapper > .screen)
  if (root.querySelectorAll) {
    root.querySelectorAll('.screen, .int-auth-page, [id^="wm-onboard-"]').forEach(activateScreen)
  }
}
function activateCurrentScreen() {
  const app = document.getElementById('internal-app')
  if (!app) return
  // Walk every wrapper currently inside #internal-app. Simple descendant
  // queries are robust against any extra Vue wrapping.
  app.querySelectorAll('.screen, .int-auth-page, [id^="wm-onboard-"]').forEach(activateScreen)
}

let mo = null
let saInited = false
function startObserver() {
  if (mo || typeof MutationObserver === 'undefined') return
  const app = document.getElementById('internal-app')
  if (!app) return
  mo = new MutationObserver((mutations) => {
    // Only trigger init when a route-level wrapper actually appears.
    // We must NOT re-fire on every descendant mutation (e.g., goSA
    // populating the sidebar) — that would create an infinite loop
    // because initScreenForRoute() calls goSA() which mutates the
    // sidebar which fires the observer again.
    let routeWrapperAdded = false
    for (const m of mutations) {
      if (!m.addedNodes) continue
      m.addedNodes.forEach((n) => {
        activateInElement(n)
        if (n.nodeType === 1 && (
          (n.matches && (n.matches('.screen') || n.matches('.int-auth-page') || n.matches('[id^="wm-onboard-"]'))) ||
          (n.querySelector && n.querySelector('.screen, .int-auth-page, [id^="wm-onboard-"]'))
        )) {
          routeWrapperAdded = true
        }
      })
    }
    if (routeWrapperAdded) initScreenForRoute()
  })
  mo.observe(app, { childList: true, subtree: true })
}

// Some internal pages need their per-screen JS init to run when the
// screen first appears in the DOM. In the original monolithic HTML
// every screen coexisted; clicking "Sign In" called e.g. goSA('full')
// which both showed the screen AND populated dynamic content (sidebar
// icons, role pill, avatar, home subtitle). In Nuxt the click happens
// on /admin/signin where the dashboard isn't mounted yet, so the DOM
// queries inside goSA() find nothing and the call aborts before
// reaching the sidebar build. We re-run the appropriate init on
// arrival at the dashboard route — same flow the JS bundle expects,
// just triggered after the route's DOM has been mounted instead of
// before it.
function initScreenForRoute() {
  const w = window
  const path = route.fullPath
  if (path.startsWith('/admin/dashboard')) {
    // Build SA sidebar + role data ONCE per visit. Idempotent guard
    // prevents the MutationObserver → goSA → sidebar mutation → 
    // observer → goSA infinite loop. Resets on route change so
    // re-entering the dashboard rebuilds correctly.
    if (saInited) return
    const tryInit = (tries) => {
      if (typeof w.goSA === 'function' && document.getElementById('sa-sidebar')) {
        try { w.goSA('full'); saInited = true } catch (e) { /* noop */ }
        return
      }
      if (tries > 30) return
      setTimeout(() => tryInit(tries + 1), 50)
    }
    tryInit(0)
  } else {
    // Reset so future visits re-init
    saInited = false
  }
}

onMounted(async () => {
  // Start observing FIRST, so async route mounts trigger activation
  // even if loadChunks() takes a while. The observer is idempotent.
  await nextTick()
  startObserver()
  activateCurrentScreen()
  initScreenForRoute()
  // Load the zone JS bundle in the background; activation already
  // happened via the synchronous query + observer. Once chunks load,
  // scripts will pick up the now-visible DOM.
  loadChunks().then(() => {
    // After chunks are in, retry the screen-specific init in case it
    // was waiting on a function that just became available.
    initScreenForRoute()
  })
})

// Map an internal route path to the expected DOM element id of its
// screen/auth-page/wizard-step wrapper. Used by the polling activator
// below to avoid stopping on a stale previous wrapper.
function expectedScreenIdForPath(path) {
  if (!path) return null
  if (path === '/login')                           return 'screen-role'
  if (path.startsWith('/wealth-manager/dashboard'))return 'screen-wm'
  if (path.startsWith('/admin/dashboard'))         return 'screen-admin'
  if (path.startsWith('/wealth-manager/signin'))   return 'screen-wm-signin'
  if (path.startsWith('/wealth-manager/signup'))   return 'screen-wm-signup'
  if (path.startsWith('/admin/signin'))            return 'screen-sa-signin'
  if (path.startsWith('/wealth-manager/onboard/success')) return 'wm-onboard-success'
  if (path.startsWith('/wealth-manager/onboard/')) {
    return 'wm-onboard-' + path.slice('/wealth-manager/onboard/'.length).split(/[/?#]/)[0]
  }
  return null
}

// Robust route-change activation. The new screen's component may take
// a moment to mount (lazy chunk fetch, Suspense resolution, etc).
// A single nextTick isn't enough on slower networks or first-hit lazy
// loads — symptom is "blank dashboard until refresh or back-and-forward".
// We poll across animation frames until the expected element appears,
// with a hard cap to avoid running forever.
function activateUntilFound(expectedId, deadline) {
  const app = document.getElementById('internal-app')
  if (!app) return
  if (expectedId) {
    const target = document.getElementById(expectedId)
    if (target) {
      activateScreen(target)
      // Re-run route-specific init now that the target exists.
      initScreenForRoute()
      return
    }
  } else {
    const els = app.querySelectorAll('.screen, .int-auth-page, [id^="wm-onboard-"]')
    if (els.length > 0) {
      els.forEach(activateScreen)
      return
    }
  }
  if (Date.now() < deadline) {
    requestAnimationFrame(() => activateUntilFound(expectedId, deadline))
  }
}

watch(() => route.fullPath, async (newPath) => {
  await nextTick()
  activateCurrentScreen()
  initScreenForRoute()
  // Also poll for up to 3s in case the screen is still being mounted
  // by an async lazy-loaded route component.
  activateUntilFound(expectedScreenIdForPath(newPath), Date.now() + 3000)
})

onBeforeUnmount(() => {
  if (mo) { mo.disconnect(); mo = null }
})
</script>
