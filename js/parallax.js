// Subtle background parallax: as the page scrolls, the fixed background photo
// drifts up by up to --parallax-range, so it seems further away than the menu.
// Off for people who prefer reduced motion.
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const root = document.documentElement;
  const range = parseFloat(getComputedStyle(root).getPropertyValue("--parallax-range")) || 0;
  let ticking = false;

  function update() {
    ticking = false;
    const max = root.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    root.style.setProperty("--parallax", (-progress * range).toFixed(1) + "px");
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
