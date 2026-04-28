<template>
  <!-- ═════════════════════════════════════════════════════════════════
       WM onboarding complete
       Source: aidi_internal_v3.html
       Layout: internal
       DO NOT modify HTML/CSS/JS structurally — handlers are defined in
       the zone's JS bundle (loaded by the layout) and bound by id/class.
       ═════════════════════════════════════════════════════════════════ -->
  <div class="aidi-route-wrapper">
    <div id="wm-onboard-success" class="screen">
    <div class="onboard-page" style="justify-content:center;">
      <div style="text-align:center;max-width:560px;padding:40px 24px;">
        <div style="width:72px;height:72px;background:var(--ink);border-radius:50%;margin:0 auto 28px;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg></div>
        <h2 style="font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:400;letter-spacing:-.01em;margin-bottom:12px;">Your account is registered.</h2>
        <p style="font-size:.95rem;color:var(--ink-muted);line-height:1.75;font-weight:300;margin-bottom:36px;">Your identity is under review and will be confirmed within 1 business day. In the meantime, explore your dashboard and get familiar with the platform.</p>
        <div style="background:var(--white);border-radius:var(--r-lg);padding:24px;box-shadow:var(--sh);text-align:left;margin-bottom:28px;">
          <div style="font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:16px;">Pending items</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="display:flex;align-items:center;gap:10px;font-size:.87rem;"><span style="width:20px;height:20px;border-radius:50%;background:var(--gold-pale);border:1.5px solid var(--gold);display:flex;align-items:center;justify-content:center;font-size:.6rem;color:var(--gold);flex-shrink:0;">!</span>Identity verification in review</div>
            <div style="display:flex;align-items:center;gap:10px;font-size:.87rem;color:var(--ink-muted);"><span style="width:20px;height:20px;border-radius:50%;background:var(--cream);border:1.5px solid var(--cream-dark);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;">○</span>Admin approval for trading access</div>
            <div style="display:flex;align-items:center;gap:10px;font-size:.87rem;color:var(--ink-muted);"><span style="width:20px;height:20px;border-radius:50%;background:var(--cream);border:1.5px solid var(--cream-dark);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;">○</span>Add your first client</div>
          </div>
        </div>
        <button class="btn-next" style="margin:0 auto;" onclick="goScreen('screen-wm')">Enter your dashboard <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'internal' })
</script>
