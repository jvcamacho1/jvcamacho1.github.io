/*
 * Campo de glifos do fundo: a ideia do site em movimento.
 *
 * No topo da página os glifos são um mar de dados soltos. Conforme a página
 * rola, cada um vai para a sua célula e o mar vira uma grade organizada.
 * Perto do cursor a ordem aparece antes: os glifos se alinham e viram valores.
 *
 * Sem dependências. Para de desenhar quando nada muda, e respeita
 * prefers-reduced-motion (sem deriva; só responde à rolagem e ao cursor).
 */
(function () {
  const cv = document.getElementById("field");
  if (!cv || !cv.getContext) return;
  const ctx = cv.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const CHAOS = "01{}[]<>/\\#%&?!*+=~^:;|$@".split("");
  const TIDY = "0123456789ABCDEF".split("");
  const pick = (a) => a[(Math.random() * a.length) | 0];

  const LENS = 170;       // raio, em px, da ordem em volta do cursor
  const GRID_ALPHA = 0.3; // opacidade da grade depois de organizada
  const MAX_PARTS = 2200;

  let W = 0, H = 0, parts = [], queued = false;
  let mx = 0, my = 0, lensOn = false;
  let cMuted = "#999", cAccent = "#fa0";
  const t0 = performance.now();

  function readColors() {
    const cs = getComputedStyle(document.documentElement);
    cMuted = cs.getPropertyValue("--field").trim() || cMuted;
    cAccent = cs.getPropertyValue("--accent").trim() || cAccent;
  }

  function build() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let g = W < 700 ? 26 : 32;
    while ((W / g) * (H / g) > MAX_PARTS) g += 2;
    const cols = Math.ceil(W / g) + 1, rows = Math.ceil(H / g) + 1;
    const ox = (W - (cols - 1) * g) / 2, oy = (H - (rows - 1) * g) / 2;

    parts = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const spray = Math.random() < 0.1; // respingos acima do mar
        const u = Math.random();
        parts.push({
          gx: ox + c * g, gy: oy + r * g,
          hx: Math.random() * (W + 80) - 40,
          hy: spray ? H * (0.1 + Math.random() * 0.45) : H * (1.06 - 0.6 * u * u),
          a1: 10 + Math.random() * 40, a2: 8 + Math.random() * 24,
          w1: 0.2 + Math.random() * 0.6, w2: 0.2 + Math.random() * 0.7,
          p1: Math.random() * 6.28, p2: Math.random() * 6.28,
          alpha: spray ? 0.1 + Math.random() * 0.16 : 0.16 + Math.random() * 0.5,
          ch: pick(CHAOS), tidy: pick(TIDY), next: Math.random() * 2,
          stag: (c / cols) * 0.55 + Math.random() * 0.45,
          mark: Math.random() < 0.035, l: 0,
        });
      }
    }
  }

  function frame(now) {
    queued = false;
    const t = reduce ? 0 : (now - t0) / 1000;
    const p = Math.min(1, window.scrollY / (H * 0.75));
    let moving = p < 1 && !reduce;

    ctx.clearRect(0, 0, W, H);
    ctx.font = '12px "JetBrains Mono", ui-monospace, "Cascadia Code", Consolas, monospace';
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    let accentOn = null;

    for (let i = 0; i < parts.length; i++) {
      const q = parts[i];

      // Ordem pela rolagem (varre da esquerda para a direita) e pelo cursor.
      let so = p * 1.7 - q.stag * 0.7;
      so = so < 0 ? 0 : so > 1 ? 1 : so;
      let lt = 0;
      if (lensOn) {
        const dx = q.gx - mx, dy = q.gy - my, d2 = dx * dx + dy * dy;
        if (d2 < LENS * LENS) { const d = 1 - Math.sqrt(d2) / LENS; lt = d * d * (3 - 2 * d); }
      }
      if (Math.abs(lt - q.l) > 0.003) { q.l += (lt - q.l) * 0.12; moving = true; } else q.l = lt;

      const o = so > q.l ? so : q.l;
      const e = o * o * (3 - 2 * o);
      let x = q.gx, y = q.gy;
      if (e < 1) {
        const cx = q.hx + Math.sin(t * q.w1 + q.p1) * q.a1;
        const cy = q.hy + Math.cos(t * q.w2 + q.p2) * q.a2 + Math.sin(q.hx * 0.008 + t * 0.7) * 16;
        x = cx + (q.gx - cx) * e; y = cy + (q.gy - cy) * e;
        if (!reduce && t > q.next) { q.ch = pick(CHAOS); q.next = t + 0.15 + Math.random() * 1.8; }
      }
      if (y < -16 || y > H + 16) continue;

      const tidy = e > 0.7, lit = q.l > 0.25;
      const accent = lit || (tidy && q.mark);
      let a = q.alpha + ((q.mark ? 0.75 : GRID_ALPHA) - q.alpha) * e;
      a += (0.7 - a) * q.l;
      if (accent !== accentOn) { ctx.fillStyle = accent ? cAccent : cMuted; accentOn = accent; }
      ctx.globalAlpha = a;
      ctx.fillText(lit ? q.tidy : tidy ? (q.mark ? "+" : "·") : q.ch, x, y);
    }
    ctx.globalAlpha = 1;
    if (moving) kick();
  }

  function kick() { if (!queued) { queued = true; requestAnimationFrame(frame); } }

  window.addEventListener("scroll", kick, { passive: true });
  window.addEventListener("pointermove", (ev) => { mx = ev.clientX; my = ev.clientY; lensOn = true; kick(); }, { passive: true });
  const lensOff = () => { lensOn = false; kick(); };
  document.documentElement.addEventListener("pointerleave", lensOff);
  window.addEventListener("pointerup", (ev) => { if (ev.pointerType !== "mouse") lensOff(); }, { passive: true });
  window.addEventListener("pointercancel", lensOff, { passive: true });

  let rz;
  window.addEventListener("resize", () => {
    clearTimeout(rz);
    rz = setTimeout(() => { if (window.innerWidth !== W || Math.abs(window.innerHeight - H) > 120) { build(); kick(); } }, 150);
  });
  new MutationObserver(() => { readColors(); kick(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  readColors(); build(); kick();
})();
