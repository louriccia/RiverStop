// Wisteria cursor trail: petals and blossoms spill from the mouse, drift down
// and scatter away from the cursor. Ported from the wedding site.
// Mouse-only (no touch), and off for people who prefer reduced motion.
(function () {
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!fine.matches || calm.matches) return;

  const ASSETS = [
    "petal-0", "petal-1", "petal-2", "petal-3", "petal-4", "petal-5",
    "petal-6", "petal-7", "petal-8", "petal-9", "petal-10",
    "petals-0", "petals-1", "petals-2",
    "flower-0", "flower-1", "flower-2", "flower-3", "flower-4", "flower-5",
    "flower-side-0", "flower-side-1"
  ].map(function (name) { return "images/wisteria/" + name + ".webp"; });

  // Preload so the first petals appear instantly
  ASSETS.forEach(function (src) { new Image().src = src; });

  const MAX_PETALS = 90;
  const REPEL_RADIUS = 150;
  const petals = [];
  let mouseX = 0, mouseY = 0;
  let lastX = 0, lastY = 0, lastTime = 0;
  let running = false;

  function Petal(x, y) {
    this.x = x;
    this.y = y;
    this.size = 24 + Math.random() * 22;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.rot = Math.random() * 360;
    this.rotV = (Math.random() - 0.5) * 4;
    this.life = 0;
    this.maxLife = (200 + Math.random() * 60) | 0;

    this.el = document.createElement("img");
    this.el.src = ASSETS[Math.floor(Math.random() * ASSETS.length)];
    this.el.alt = "";
    this.el.className = "cursor-petal";
    this.el.style.width = this.el.style.height = this.size.toFixed(1) + "px";
    document.body.appendChild(this.el);
  }

  // Advances one frame; returns false once the petal has faded out.
  Petal.prototype.update = function () {
    // Repel from the cursor
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const dist = Math.hypot(dx, dy) || 0.001;
    if (dist < REPEL_RADIUS) {
      const f = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * 0.6;
      this.vx += (dx / dist) * f;
      this.vy += (dy / dist) * f;
    }

    // Gravity, plus a glide along the direction the petal is facing
    this.vy += 0.02;
    const rad = (this.rot * Math.PI) / 180;
    this.vx += Math.cos(rad) * 0.022;
    this.vy += Math.sin(rad) * 0.022;

    this.vx *= 0.96;
    this.vy *= 0.96;
    this.x += this.vx;
    this.y += this.vy;
    this.rot += this.rotV;
    this.life++;

    // Fade in, hold, fade out
    const t = this.life / this.maxLife;
    const opacity = t < 0.15 ? (t / 0.15) * 0.9
      : t > 0.65 ? ((1 - t) / 0.35) * 0.9
        : 0.9;

    const half = this.size / 2;
    this.el.style.transform = "translate(" + (this.x - half).toFixed(1) + "px," +
      (this.y - half).toFixed(1) + "px) rotate(" + this.rot.toFixed(1) + "deg)";
    this.el.style.opacity = opacity.toFixed(3);
    return this.life < this.maxLife;
  };

  // Animate only while there are petals on screen
  function loop() {
    for (let i = petals.length - 1; i >= 0; i--) {
      if (!petals[i].update()) {
        petals[i].el.remove();
        petals.splice(i, 1);
      }
    }
    running = petals.length > 0;
    if (running) requestAnimationFrame(loop);
  }

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    const now = Date.now();
    if (Math.hypot(mouseX - lastX, mouseY - lastY) < 5 || now - lastTime < 25) return;
    lastX = mouseX;
    lastY = mouseY;
    lastTime = now;

    if (petals.length < MAX_PETALS) petals.push(new Petal(mouseX, mouseY));
    if (!running) {
      running = true;
      requestAnimationFrame(loop);
    }
  }, { passive: true });
})();
