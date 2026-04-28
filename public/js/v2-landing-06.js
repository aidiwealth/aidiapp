// ══════════════════════════════════════════════════════════════════════
// V2 LANDING  —  script chunk #6/6
// Extracted verbatim from aidi_merged.html — do not modify structurally.
// Each chunk was its own <script> tag in the source and must remain so
// (otherwise same-named top-level declarations across chunks collide).
// ══════════════════════════════════════════════════════════════════════
// ── Dynamic Widget Charts ──────────────────────────────────────────────────
(function() {
  function lerp(a, b, t) { return a + (b - a) * t; }

  function drawSparkline(canvas, data, color, fill, bgColor) {
    const ctx = canvas.getContext('2d');
    const W = canvas.offsetWidth || 400;
    const H = canvas.offsetHeight || 160;
    canvas.width = W; canvas.height = H;
    ctx.clearRect(0, 0, W, H);

    if (bgColor) { ctx.fillStyle = bgColor; ctx.fillRect(0, 0, W, H); }

    const min = Math.min(...data) * 0.97;
    const max = Math.max(...data) * 1.03;
    const pts = data.map((v, i) => ({
      x: (i / (data.length - 1)) * W,
      y: H - ((v - min) / (max - min)) * H * 0.8 - H * 0.1
    }));

    if (fill) {
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, color.replace(')', ', 0.3)').replace('rgb', 'rgba'));
      grad.addColorStop(1, color.replace(')', ', 0)').replace('rgb', 'rgba'));
      ctx.beginPath();
      ctx.moveTo(pts[0].x, H);
      pts.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.lineTo(pts[pts.length-1].x, H);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
    }

    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) {
      const cp = { x: (pts[i-1].x + pts[i].x) / 2, y: pts[i-1].y };
      ctx.bezierCurveTo(cp.x, cp.y, cp.x, pts[i].y, pts[i].x, pts[i].y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Dot at end
    ctx.beginPath();
    ctx.arc(pts[pts.length-1].x, pts[pts.length-1].y, 4, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function genData(len, start, vol, trend) {
    const d = [start];
    for (let i = 1; i < len; i++) {
      d.push(Math.max(0, d[i-1] * (1 + trend + (Math.random() - 0.48) * vol)));
    }
    return d;
  }

  function animateChart(canvasId, color, fill, bgColor, start, vol, trend) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    let data = genData(60, start, vol, trend);
    let frame = 0;
    function tick() {
      data.shift();
      data.push(Math.max(0, data[data.length-1] * (1 + trend + (Math.random()-0.47)*vol)));
      drawSparkline(canvas, data, color, fill, bgColor);
      frame++;
      setTimeout(tick, 400);
    }
    drawSparkline(canvas, data, color, fill, bgColor);
    setTimeout(tick, 800);
  }

  // Gold & Silver chart
  animateChart('goldChart',  'rgb(200,150,46)',  true, '#0C1A2E', 1900, 0.012, 0.0003);
  animateChart('silverChart','rgb(180,180,200)', true, '#0C1A2E', 24, 0.015, 0.0002);

  // Crypto charts
  animateChart('btcChart',   'rgb(247,147,26)',  true, '#0C1A2E', 67000, 0.025, 0.0004);
  animateChart('ethChart',   'rgb(98,126,234)',  true, '#0C1A2E', 3500, 0.022, 0.0003);

  // Stocks charts
  animateChart('spxChart',   'rgb(27,79,216)',   true, '#F5F2EC', 5200, 0.008, 0.0003);
  animateChart('nasdaqChart','rgb(100,180,100)', true, '#F5F2EC', 18200, 0.010, 0.0003);

  // Treasury chart
  animateChart('tbillChart', 'rgb(27,79,216)',   true, '#0C1A2E', 5.1, 0.003, 0.00005);

  // Portfolio net worth chart
  animateChart('nwChart',    'rgb(200,150,46)',  true, '#0C1A2E', 250000, 0.006, 0.0004);

  // Elia AI pulse
  animateChart('eliaChart',  'rgb(98,200,160)',  true, '#0C1A2E', 100, 0.018, 0.0005);

  // Customer page charts
  animateChart('profPortfolioChart', 'rgb(27,79,216)',   true, '#0C1A2E', 280000, 0.006, 0.0004);
  animateChart('famPortfolioChart',  'rgb(34,197,94)',   true, '#0C1A2E', 140000, 0.005, 0.0003);
  animateChart('foundPortfolioChart','rgb(27,79,216)',   true, '#F5F2EC', 890000, 0.004, 0.0003);
  animateChart('foundEquityChart',   'rgb(200,150,46)', true, '#0C1A2E', 248000, 0.005, 0.0004);
  animateChart('diasPortfolioChart', 'rgb(200,150,46)', true, '#0C1A2E', 96000,  0.006, 0.0004);

})();
