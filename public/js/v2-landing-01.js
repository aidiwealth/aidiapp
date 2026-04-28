// ══════════════════════════════════════════════════════════════════════
// V2 LANDING  —  script chunk #1/6
// Extracted verbatim from aidi_merged.html — do not modify structurally.
// Each chunk was its own <script> tag in the source and must remain so
// (otherwise same-named top-level declarations across chunks collide).
// ══════════════════════════════════════════════════════════════════════
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://app.cal.com"});

  Cal.ns["30min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#0c2057"},"dark":{"cal-brand":"#f5f2ec"}},"hideEventTypeDetails":false,"layout":"month_view"});
