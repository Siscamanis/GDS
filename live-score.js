/**
 * GADUNSLOT — Modern SBO Live CTA
 * File: gds-live-cta.js
 *
 * Pengaturan opsional sebelum memanggil file:
 *
 * window.GDSLiveCTAConfig = {
 *   interval: 2800,
 *   texts: [
 *     "TONTON LIVE BOLA SEKARANG",
 *     "BIG MATCH SEDANG BERLANGSUNG"
 *   ]
 * };
 */

(function () {
  "use strict";

  /* Mencegah script dipasang dua kali */
  if (window.GDSLiveCTAInstalled) {
    return;
  }

  window.GDSLiveCTAInstalled = true;

  var defaultConfig = {
    interval: 2800,

    texts: [
      "TONTON LIVE BOLA SEKARANG",
      "BIG MATCH SEDANG BERLANGSUNG",
      "JANGAN LEWATKAN PERTANDINGAN",
      "PASANG TIM JAGOANMU",
      "KLIK UNTUK TONTON LIVE"
    ]
  };

  var userConfig = window.GDSLiveCTAConfig || {};

  var config = {
    interval:
      Number(userConfig.interval) > 500
        ? Number(userConfig.interval)
        : defaultConfig.interval,

    texts:
      Array.isArray(userConfig.texts) && userConfig.texts.length
        ? userConfig.texts
        : defaultConfig.texts
  };

  var STYLE_ID = "gds-live-cta-style";
  var BUTTON_SELECTOR =
    "#sbo_widget_container .container-title .live-tv-button";

  var currentButton = null;
  var rotationTimer = null;
  var observer = null;
  var textIndex = 0;

  var css = `
    /* ==========================================
       GADUNSLOT MODERN SBO LIVE CTA
    ========================================== */

    #sbo_widget_container .container-title {
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      width: 100% !important;
      height: 44px !important;
      padding: 2px !important;
      box-sizing: border-box !important;

      overflow: hidden !important;
      border: 0 !important;
      border-radius: 14px !important;

      background:
        linear-gradient(
          120deg,
          #00ff88,
          #ffd700,
          #00d9ff,
          #00ff88
        ) !important;

      background-size: 300% 300% !important;

      box-shadow:
        0 7px 20px rgba(0, 0, 0, 0.38),
        0 0 17px rgba(0, 255, 136, 0.28),
        0 0 12px rgba(255, 215, 0, 0.20) !important;

      animation:
        gdsLiveBorderFlow 5s linear infinite !important;

      isolation: isolate !important;
    }

    /* Background gelap premium */
    #sbo_widget_container .container-title::before {
      content: "" !important;
      position: absolute !important;
      inset: 2px !important;
      z-index: -1 !important;

      border-radius: 12px !important;

      background:
        radial-gradient(
          circle at 15% 0%,
          rgba(0, 255, 136, 0.24),
          transparent 42%
        ),
        radial-gradient(
          circle at 90% 100%,
          rgba(0, 217, 255, 0.20),
          transparent 46%
        ),
        linear-gradient(
          135deg,
          rgba(3, 38, 21, 0.98),
          rgba(2, 13, 10, 0.99) 52%,
          rgba(2, 38, 22, 0.98)
        ) !important;

      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.13),
        inset 0 -1px 0 rgba(255, 215, 0, 0.12) !important;

      pointer-events: none !important;
    }

    /* Cahaya ambient bergerak */
    #sbo_widget_container .container-title::after {
      content: "" !important;
      position: absolute !important;
      z-index: 0 !important;

      top: -30px !important;
      left: -55px !important;

      width: 100px !important;
      height: 100px !important;

      border-radius: 50% !important;
      background: rgba(0, 255, 136, 0.24) !important;

      filter: blur(27px) !important;
      pointer-events: none !important;

      animation:
        gdsLiveGlowMove 4.5s ease-in-out infinite alternate !important;
    }

    /* Sembunyikan judul bawaan */
    #sbo_widget_container .container-title > span {
      display: none !important;
    }

    /* Tombol utama */
    #sbo_widget_container
    .container-title
    .live-tv-button {
      position: absolute !important;
      inset: 2px !important;
      z-index: 3 !important;

      width: auto !important;
      height: auto !important;
      min-width: 0 !important;

      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;

      padding: 0 14px !important;
      box-sizing: border-box !important;

      overflow: hidden !important;
      border: 0 !important;
      border-radius: 12px !important;

      background:
        linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.075),
          rgba(255, 255, 255, 0.015)
        ) !important;

      box-shadow: none !important;

      color: #ffffff !important;
      text-decoration: none !important;
      text-transform: uppercase !important;

      font-family:
        "Segoe UI",
        Arial,
        sans-serif !important;

      font-size: 12.5px !important;
      font-weight: 900 !important;
      line-height: 1 !important;
      letter-spacing: 0.65px !important;

      white-space: nowrap !important;

      text-shadow:
        0 1px 2px rgba(0, 0, 0, 0.90),
        0 0 8px rgba(0, 255, 136, 0.45) !important;

      cursor: pointer !important;

      transition:
        transform 0.2s ease,
        filter 0.2s ease,
        letter-spacing 0.2s ease !important;
    }

    /* Badge LIVE */
    #sbo_widget_container
    .container-title
    .live-tv-button::before {
      content: "● LIVE" !important;
      position: relative !important;
      z-index: 4 !important;

      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;

      min-width: 42px !important;
      height: 20px !important;
      padding: 0 6px !important;
      box-sizing: border-box !important;

      flex: 0 0 auto !important;

      border: 1px solid rgba(255, 255, 255, 0.42) !important;
      border-radius: 6px !important;

      background:
        linear-gradient(
          135deg,
          #ff3153,
          #c80025
        ) !important;

      color: #ffffff !important;

      font-size: 8.5px !important;
      font-weight: 1000 !important;
      line-height: 1 !important;
      letter-spacing: 0.6px !important;

      text-shadow: none !important;

      box-shadow:
        0 0 9px rgba(255, 33, 71, 0.75),
        inset 0 1px 0 rgba(255, 255, 255, 0.38) !important;

      animation:
        gdsLivePulse 1.4s ease-in-out infinite !important;
    }

    /* Efek kaca menyapu */
    #sbo_widget_container
    .container-title
    .live-tv-button::after {
      content: "" !important;
      position: absolute !important;
      z-index: 2 !important;

      top: -60% !important;
      left: -45% !important;

      width: 25% !important;
      height: 220% !important;

      background:
        linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.06),
          rgba(255, 255, 255, 0.72),
          rgba(255, 215, 0, 0.25),
          transparent
        ) !important;

      transform: skewX(-22deg) !important;
      pointer-events: none !important;

      animation:
        gdsLiveMirror 3.2s ease-in-out infinite !important;
    }

    #sbo_widget_container
    .container-title
    .live-tv-button:hover {
      transform: scale(1.015) !important;
      filter: brightness(1.17) !important;
      letter-spacing: 0.85px !important;
    }

    #sbo_widget_container
    .container-title
    .live-tv-button:active {
      transform: scale(0.975) !important;
    }

    #sbo_widget_container
    .container-title
    .live-tv-button.gds-live-fade {
      animation:
        gdsLiveTextFade 0.42s
        cubic-bezier(0.22, 0.8, 0.35, 1) !important;
    }

    @keyframes gdsLiveBorderFlow {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes gdsLiveMirror {
      0% {
        left: -45%;
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      55% {
        opacity: 0.85;
      }

      75%,
      100% {
        left: 135%;
        opacity: 0;
      }
    }

    @keyframes gdsLivePulse {
      0%,
      100% {
        transform: scale(1);

        box-shadow:
          0 0 7px rgba(255, 33, 71, 0.62),
          inset 0 1px 0 rgba(255, 255, 255, 0.35);
      }

      50% {
        transform: scale(1.06);

        box-shadow:
          0 0 14px rgba(255, 33, 71, 0.96),
          inset 0 1px 0 rgba(255, 255, 255, 0.45);
      }
    }

    @keyframes gdsLiveGlowMove {
      from {
        transform: translateX(0) scale(1);
        opacity: 0.65;
      }

      to {
        transform: translateX(280px) scale(1.35);
        opacity: 0.25;
      }
    }

    @keyframes gdsLiveTextFade {
      0% {
        opacity: 0;
        transform: translateY(6px) scale(0.97);
        filter: blur(2px);
      }

      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
      }
    }

    @media (max-width: 480px) {
      #sbo_widget_container .container-title {
        height: 42px !important;
        border-radius: 13px !important;
      }

      #sbo_widget_container
      .container-title
      .live-tv-button {
        gap: 5px !important;
        padding: 0 8px !important;

        font-size: 11px !important;
        letter-spacing: 0.35px !important;
      }

      #sbo_widget_container
      .container-title
      .live-tv-button::before {
        min-width: 38px !important;
        height: 18px !important;
        padding: 0 5px !important;

        font-size: 7.5px !important;
      }
    }

    @media (max-width: 350px) {
      #sbo_widget_container
      .container-title
      .live-tv-button {
        gap: 4px !important;
        padding: 0 5px !important;
        font-size: 10px !important;
        letter-spacing: 0.15px !important;
      }

      #sbo_widget_container
      .container-title
      .live-tv-button::before {
        min-width: 34px !important;
        padding: 0 4px !important;
        font-size: 7px !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #sbo_widget_container .container-title,
      #sbo_widget_container .container-title::after,
      #sbo_widget_container
      .container-title
      .live-tv-button::before,
      #sbo_widget_container
      .container-title
      .live-tv-button::after,
      #sbo_widget_container
      .container-title
      .live-tv-button.gds-live-fade {
        animation: none !important;
      }
    }
  `;

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) {
      return;
    }

    var style = document.createElement("style");

    style.id = STYLE_ID;
    style.type = "text/css";
    style.textContent = css;

    (
      document.head ||
      document.getElementsByTagName("head")[0] ||
      document.documentElement
    ).appendChild(style);
  }

  function setButtonText(button, text) {
    if (!button) {
      return;
    }

    button.classList.remove("gds-live-fade");

    /* Memicu ulang animasi */
    void button.offsetWidth;

    button.textContent = String(text);
    button.classList.add("gds-live-fade");
  }

  function stopRotation() {
    if (rotationTimer) {
      clearInterval(rotationTimer);
      rotationTimer = null;
    }
  }

  function startRotation() {
    stopRotation();

    rotationTimer = window.setInterval(function () {
      if (
        !currentButton ||
        !document.documentElement.contains(currentButton)
      ) {
        stopRotation();
        currentButton = null;
        initLiveCTA();
        return;
      }

      textIndex = (textIndex + 1) % config.texts.length;

      setButtonText(
        currentButton,
        config.texts[textIndex]
      );
    }, config.interval);
  }

  function prepareButton(button) {
    if (!button) {
      return;
    }

    currentButton = button;

    button.title =
      "Tonton pertandingan bola secara langsung";

    button.setAttribute(
      "aria-label",
      "Tonton pertandingan bola secara langsung"
    );

    button.setAttribute(
      "data-gds-live-cta",
      "active"
    );

    setButtonText(
      button,
      config.texts[textIndex]
    );

    startRotation();
  }

  function initLiveCTA() {
    injectStyle();

    var button = document.querySelector(
      BUTTON_SELECTOR
    );

    if (!button) {
      return;
    }

    /*
     * Tidak memulai interval baru jika tombol yang sama
     * masih aktif.
     */
    if (
      currentButton === button &&
      rotationTimer &&
      document.documentElement.contains(button)
    ) {
      return;
    }

    prepareButton(button);
  }

  function startObserver() {
    if (observer || !document.body) {
      return;
    }

    var observerQueued = false;

    observer = new MutationObserver(function () {
      if (observerQueued) {
        return;
      }

      observerQueued = true;

      window.requestAnimationFrame(function () {
        observerQueued = false;
        initLiveCTA();
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function start() {
    injectStyle();
    initLiveCTA();
    startObserver();

    /*
     * Percobaan tambahan apabila widget SBO
     * dimuat lebih lambat.
     */
    window.setTimeout(initLiveCTA, 500);
    window.setTimeout(initLiveCTA, 1500);
    window.setTimeout(initLiveCTA, 3000);
    window.setTimeout(initLiveCTA, 5000);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      start,
      { once: true }
    );
  } else {
    start();
  }

  /*
   * Fungsi publik untuk refresh manual.
   */
  window.GDSLiveCTA = {
    refresh: initLiveCTA,

    stop: function () {
      stopRotation();

      if (observer) {
        observer.disconnect();
        observer = null;
      }
    },

    start: function () {
      start();
    },

    setTexts: function (newTexts) {
      if (
        !Array.isArray(newTexts) ||
        !newTexts.length
      ) {
        return false;
      }

      config.texts = newTexts;
      textIndex = 0;

      if (currentButton) {
        setButtonText(
          currentButton,
          config.texts[0]
        );

        startRotation();
      }

      return true;
    }
  };
})();
