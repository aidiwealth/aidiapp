<template>
  <!-- ═════════════════════════════════════════════════════════════════
       WM sign up
       Source: aidi_internal_v3.html
       Layout: internal
       DO NOT modify HTML/CSS/JS structurally — handlers are defined in
       the zone's JS bundle (loaded by the layout) and bound by id/class.
       ═════════════════════════════════════════════════════════════════ -->
  <div class="aidi-route-wrapper">
    <div id="screen-wm-signup" class="int-auth-page">
      <div class="int-auth-left">
        <div class="int-auth-left-logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25675.8 23448.1" width="32" height="30" style="display:block;flex-shrink:0;"><path fill="white" d="M23266.6 14962.5c7.4,9.7 17.8,11.9 21.6,29.5l466.9 1086.6c251.8,922.3 129.4,1643.7 -247.7,2482.8l-998.8 1178.4c-246.2,185.5 -509.8,353.6 -796.5,463.1 -1150,439 -2154.1,347.4 -3203.2,-293.6l-464 -365.1c-26.8,-151.2 -762.4,-673.1 -882.4,-768.7 -1008.7,-803.6 -2339.6,-1916.5 -3326.1,-2668.3l-2116.4 -1701.8c-863.1,-678 -2253.6,-1912.9 -3191.5,-2383 -545.5,-273.4 -1354.2,-522.4 -1987.2,-571 -265.2,-20.3 -603,-0.7 -876.9,-2.3 -1194,-6.9 -2484.2,562.2 -3398.3,1259.8 -1177.7,898.8 -1773.4,2029.9 -2130.6,3443.9 -315.9,1251 -66.6,3148.9 610.9,4262.5 458.3,753.3 879,1293.4 1602,1834.4 2691.1,2013.6 6325,1431.2 8302.2,-1309 473.8,-656.6 888.8,-1600 970.6,-2453.8 -131.5,-113.5 95,-426.5 -186.2,-776 -161.4,-200.5 -256.7,-312.4 -570.7,-394 -380.7,-98.9 -892.7,104.4 -1023.7,607.4 -31.5,120.8 16,276.6 -40.1,130.8 -74.1,88.8 -95.1,327.9 -118.6,428 -40.3,172.3 -74.9,291.6 -126.8,445.8 -1135.2,3371.5 -5999.1,3615.3 -7403.4,81.1 -1005,-2529.4 699.1,-5139.3 2930.2,-5585.2 1586.9,-317.2 2581.3,157.2 3490,883.1 1705.7,1362.6 3389.2,2698.8 5084.7,4078.8l1885.4 1512.7c113.1,95.5 199.5,170.7 312.2,260.5 1099,875.3 1730.4,1607.4 3173.3,1981.2 1688.2,437.3 3294.9,3.6 4517.5,-905.8l609.3 -536.1c119.3,-118.1 160.5,-190.9 267.2,-305.6 264.9,-284.7 513.3,-672.9 690.4,-1027.8 837.4,-1679 737.9,-3805.9 -272.3,-5480.3l-1580.9 -2428.2c-82.9,-123.7 -143.5,-235.1 -220.9,-351.8 -305,-459.3 -597.9,-917.5 -909.2,-1381.7 -159.7,-238.1 -288.5,-452.6 -450.4,-695l-4741.2 -7247.8c-330,-374.6 -432.1,-510.9 -875.7,-842.4l-711 -434.5c-272,-136.9 -518.7,-232.2 -827.1,-318.3 -998.4,-278.7 -2060.2,-235.3 -2983.8,71.1 -839.4,278.6 -1484.1,764.8 -2066.7,1369.7 -326.2,338.6 -888.1,1282.6 -1151.3,1712.3l-3317.8 5273c-142.9,241.7 -324.3,435.1 -344.3,791 -46.1,819 1120.9,1523.4 1838.3,397.5l1312.8 -2085.3c151.2,-235.8 299.5,-466.4 451.2,-694.2l1334.2 -2102.2c371,-621.2 1148.7,-1925.5 1681,-2328 99.4,-75.2 215.7,-173.4 331.9,-240.8 489.2,-283.6 1029.3,-506.2 1843.4,-444 988.5,75.6 1636.1,577.8 2124.6,1311.7l5185.9 7986.7c81.5,133.7 145,211.7 225.2,347.5 149.5,253.3 300.4,450.8 447.8,697.7l1754.8 2672.5c68.9,65.2 -6,35.2 76.2,40.4z"/></svg><span>Aidi</span></div>
        <span class="int-auth-left-badge" style="width:fit-content;">Wealth Manager Portal</span>
        <div class="int-auth-left-content">
          <h2 class="int-auth-left-headline">Setup takes<br><em>under five</em><br>minutes.</h2>
          <p class="int-auth-left-sub">Create your advisor account, complete identity verification, and start managing clients — all in one flow.</p>
          <div class="int-auth-trust-pills">
            <span class="int-auth-trust-pill">Regulatory verification</span>
            <span class="int-auth-trust-pill">KYC via Onfido</span>
            <span class="int-auth-trust-pill">Instant access after review</span>
          </div>
        </div>
        <p style="font-size:.7rem;color:rgba(255,255,255,.2);line-height:1.6;position:relative;z-index:2;">Aidi is an advisory platform. All trades require explicit client authorisation.</p>
      </div>
      <div class="int-auth-right">
        <button class="int-auth-back" onclick="goScreen('screen-wm-signin')"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Back to sign in</button>
        <div class="int-auth-title">Create advisor account</div>
        <div class="int-auth-sub">Apply for Wealth Manager access. Your account will be reviewed within 1 business day.</div>
        <button class="btn-social" onclick="wmStartOnboarding()" style="margin-bottom:10px;">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Sign up with Google
        </button>
        <div class="auth-divider">or</div>
        <div class="form-grid">
          <div class="form-group"><label class="form-label">First name</label><input class="form-input" type="text" placeholder="Sarah"></div>
          <div class="form-group"><label class="form-label">Last name</label><input class="form-input" type="text" placeholder="Mensah"></div>
        </div>
        <div class="form-group"><label class="form-label">Work email address</label><input class="form-input" type="email" placeholder="you@firm.com"></div>
        <div class="form-group"><label class="form-label">Firm / Organisation</label><input class="form-input" type="text" placeholder="e.g. Meridian Private Wealth"></div>
        <button class="btn-primary" onclick="wmStartOnboarding()" style="margin-top:4px;">
          Create account &amp; continue
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
        <p class="auth-switch" style="margin-top:16px;">Already have an account? <a onclick="goScreen('screen-wm-signin')" style="color:var(--blue);cursor:pointer;font-weight:500;">Sign in</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'internal' })
</script>
