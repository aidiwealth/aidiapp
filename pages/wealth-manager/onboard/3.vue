<template>
  <!-- ═════════════════════════════════════════════════════════════════
       WM onboarding step 3
       Source: aidi_internal_v3.html
       Layout: internal
       DO NOT modify HTML/CSS/JS structurally — handlers are defined in
       the zone's JS bundle (loaded by the layout) and bound by id/class.
       ═════════════════════════════════════════════════════════════════ -->
  <div class="aidi-route-wrapper">
    <div id="wm-onboard-3" class="screen">
    <div class="onboard-page">
      <div class="onboard-nav">
        <div class="onboard-logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25675.8 23448.1" width="26" height="24" style="display:block;"><path fill="#0c2057" d="M23266.6 14962.5c7.4,9.7 17.8,11.9 21.6,29.5l466.9 1086.6c251.8,922.3 129.4,1643.7 -247.7,2482.8l-998.8 1178.4c-246.2,185.5 -509.8,353.6 -796.5,463.1 -1150,439 -2154.1,347.4 -3203.2,-293.6l-464 -365.1c-26.8,-151.2 -762.4,-673.1 -882.4,-768.7 -1008.7,-803.6 -2339.6,-1916.5 -3326.1,-2668.3l-2116.4 -1701.8c-863.1,-678 -2253.6,-1912.9 -3191.5,-2383 -545.5,-273.4 -1354.2,-522.4 -1987.2,-571 -265.2,-20.3 -603,-0.7 -876.9,-2.3 -1194,-6.9 -2484.2,562.2 -3398.3,1259.8 -1177.7,898.8 -1773.4,2029.9 -2130.6,3443.9 -315.9,1251 -66.6,3148.9 610.9,4262.5 458.3,753.3 879,1293.4 1602,1834.4 2691.1,2013.6 6325,1431.2 8302.2,-1309 473.8,-656.6 888.8,-1600 970.6,-2453.8 -131.5,-113.5 95,-426.5 -186.2,-776 -161.4,-200.5 -256.7,-312.4 -570.7,-394 -380.7,-98.9 -892.7,104.4 -1023.7,607.4 -31.5,120.8 16,276.6 -40.1,130.8 -74.1,88.8 -95.1,327.9 -118.6,428 -40.3,172.3 -74.9,291.6 -126.8,445.8 -1135.2,3371.5 -5999.1,3615.3 -7403.4,81.1 -1005,-2529.4 699.1,-5139.3 2930.2,-5585.2 1586.9,-317.2 2581.3,157.2 3490,883.1 1705.7,1362.6 3389.2,2698.8 5084.7,4078.8l1885.4 1512.7c113.1,95.5 199.5,170.7 312.2,260.5 1099,875.3 1730.4,1607.4 3173.3,1981.2 1688.2,437.3 3294.9,3.6 4517.5,-905.8l609.3 -536.1c119.3,-118.1 160.5,-190.9 267.2,-305.6 264.9,-284.7 513.3,-672.9 690.4,-1027.8 837.4,-1679 737.9,-3805.9 -272.3,-5480.3l-1580.9 -2428.2c-82.9,-123.7 -143.5,-235.1 -220.9,-351.8 -305,-459.3 -597.9,-917.5 -909.2,-1381.7 -159.7,-238.1 -288.5,-452.6 -450.4,-695l-4741.2 -7247.8c-330,-374.6 -432.1,-510.9 -875.7,-842.4l-711 -434.5c-272,-136.9 -518.7,-232.2 -827.1,-318.3 -998.4,-278.7 -2060.2,-235.3 -2983.8,71.1 -839.4,278.6 -1484.1,764.8 -2066.7,1369.7 -326.2,338.6 -888.1,1282.6 -1151.3,1712.3l-3317.8 5273c-142.9,241.7 -324.3,435.1 -344.3,791 -46.1,819 1120.9,1523.4 1838.3,397.5l1312.8 -2085.3c151.2,-235.8 299.5,-466.4 451.2,-694.2l1334.2 -2102.2c371,-621.2 1148.7,-1925.5 1681,-2328 99.4,-75.2 215.7,-173.4 331.9,-240.8 489.2,-283.6 1029.3,-506.2 1843.4,-444 988.5,75.6 1636.1,577.8 2124.6,1311.7l5185.9 7986.7c81.5,133.7 145,211.7 225.2,347.5 149.5,253.3 300.4,450.8 447.8,697.7l1754.8 2672.5c68.9,65.2 -6,35.2 76.2,40.4z"/></svg> Aidi</div>
        <span class="onboard-exit" onclick="goScreen('screen-role')">✕ Exit setup</span>
      </div>
      <div class="progress-bar">
        <div class="progress-steps"><div class="progress-step done"></div><div class="progress-step done"></div><div class="progress-step active"></div><div class="progress-step"></div><div class="progress-step"></div><div class="progress-step"></div><div class="progress-step"></div></div>
        <div class="progress-label">Step 3 of 7 — Specialisation</div>
      </div>
      <div class="onboard-card">
        <div class="onboard-step-label">Your Specialisation</div>
        <h2 class="onboard-title">What type of clients do you serve?</h2>
        <p class="onboard-sub">Aidi uses this to tailor deal flow, AI insights, and compliance workflows to your specific book of business.</p>
        <div class="form-label" style="margin-bottom:12px;">Client segments (select all that apply)</div>
        <div class="type-cards">
          <div class="type-card selected" onclick="this.classList.toggle('selected')"><div class="type-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="type-card-title">HNWI</div><div class="type-card-desc">$1M – $30M net worth</div></div>
          <div class="type-card selected" onclick="this.classList.toggle('selected')"><div class="type-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div class="type-card-title">UHNWI</div><div class="type-card-desc">$30M+ net worth</div></div>
          <div class="type-card" onclick="this.classList.toggle('selected')"><div class="type-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div class="type-card-title">Diaspora</div><div class="type-card-desc">Cross-border clients</div></div>
          <div class="type-card" onclick="this.classList.toggle('selected')"><div class="type-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div><div class="type-card-title">Family Office</div><div class="type-card-desc">Multi-generational wealth</div></div>
          <div class="type-card" onclick="this.classList.toggle('selected')"><div class="type-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><div class="type-card-title">Founders</div><div class="type-card-desc">Entrepreneurs &amp; exits</div></div>
          <div class="type-card" onclick="this.classList.toggle('selected')"><div class="type-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div><div class="type-card-title">Professionals</div><div class="type-card-desc">Doctors, lawyers, executives</div></div>
        </div>
        <div style="margin-top:20px;">
          <div class="form-label" style="margin-bottom:12px;">Asset classes you advise on</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <span class="asset-chip selected" onclick="this.classList.toggle('selected')">Equities</span>
            <span class="asset-chip selected" onclick="this.classList.toggle('selected')">Real Estate</span>
            <span class="asset-chip selected" onclick="this.classList.toggle('selected')">Private Credit</span>
            <span class="asset-chip" onclick="this.classList.toggle('selected')">Private Equity</span>
            <span class="asset-chip" onclick="this.classList.toggle('selected')">Crypto</span>
            <span class="asset-chip selected" onclick="this.classList.toggle('selected')">Gold &amp; Metals</span>
            <span class="asset-chip" onclick="this.classList.toggle('selected')">T-Bills &amp; Treasury</span>
          </div>
        </div>
      <div class="onboard-footer">
        <button class="btn-back" onclick="wizGo(2)">← Back</button>
        <button class="btn-next" style="background:var(--ink);" onclick="wizGo(4)">Continue <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'internal' })
</script>
