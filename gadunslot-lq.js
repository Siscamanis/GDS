(function () {
  "use strict";

  if (window.__GADUN_AURORA__) return;
  window.__GADUN_AURORA__ = true;

  const isLowDevice =
    navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;

  const reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (isLowDevice || reduceMotion) return;

  const css = `
#gdsAurora {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
  background: transparent !important;
  opacity: .75;
  contain: strict;
}
.gds-blob {
  position: absolute;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  filter: blur(45px);
  opacity: 0;
  will-change: transform, opacity;
  mix-blend-mode: screen;
}
.gds-b1 {
  background: radial-gradient(circle, rgba(115,82,255,.9), rgba(115,82,255,0) 70%);
}
.gds-b2 {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(0,255,145,.55), rgba(0,255,145,0) 70%);
}
.gds-b3 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(255,211,82,.45), rgba(255,211,82,0) 70%);
}

@media (max-width: 768px) {
  #gdsAurora { opacity: .55; }
  .gds-blob {
    width: 170px;
    height: 170px;
    filter: blur(38px);
  }
  .gds-b2 {
    width: 135px;
    height: 135px;
  }
  .gds-b3 {
    width: 110px;
    height: 110px;
  }
}
`;

  const style = document.createElement("style");
  style.id = "gdsAuroraStyle";
  style.textContent = css;
  document.head.appendChild(style);

  const wrap = document.createElement("div");
  wrap.id = "gdsAurora";
  wrap.innerHTML = `
    <div class="gds-blob gds-b1"></div>
    <div class="gds-blob gds-b2"></div>
    <div class="gds-blob gds-b3"></div>
  `;
  document.body.appendChild(wrap);

  const blobs = wrap.querySelectorAll(".gds-blob");

  let tx = innerWidth / 2;
  let ty = innerHeight / 2;
  let x = tx;
  let y = ty;
  let active = false;
  let raf = null;
  let hideTimer = null;

  function show() {
    active = true;
    blobs.forEach((b) => (b.style.opacity = "1"));

    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      active = false;
      blobs.forEach((b) => (b.style.opacity = "0"));
    }, 1800);

    if (!raf) raf = requestAnimationFrame(loop);
  }

  function move(clientX, clientY) {
    tx = clientX;
    ty = clientY;
    show();
  }

  function loop() {
    x += (tx - x) * 0.13;
    y += (ty - y) * 0.13;

    blobs[0].style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    blobs[1].style.transform = `translate3d(${x - 45}px, ${y + 35}px, 0) translate(-50%, -50%)`;
    blobs[2].style.transform = `translate3d(${x + 55}px, ${y - 40}px, 0) translate(-50%, -50%)`;

    if (active) {
      raf = requestAnimationFrame(loop);
    } else {
      cancelAnimationFrame(raf);
      raf = null;
    }
  }

  window.addEventListener("mousemove", function (e) {
    move(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener("touchmove", function (e) {
    if (!e.touches || !e.touches[0]) return;
    move(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

})();
