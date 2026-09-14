```javascript
"use strict";

(function () {
  const BTN_ID = "partner-gold-btn";
  const STYLE_ID = "partner-gold-style";

  const LINK = "https://linkshortener.vip/rajanaga99-m4xw1n";

  // GIF / LOGO RJN TETAP
  const LOGO_URL =
    "https://lh3.googleusercontent.com/d/1jCS32ToIndVkGBIv1ChO5djkwKUOAnOS";

  // POSISI TOMBOL
  const RIGHT = 18;
  const BOTTOM = 140;
  const SIZE = 55;

  // LOGIC ASLI TETAP
  const PARTNER_HIDE_TIME = 10000;
  const LOAD_DELAY = 1200;

  const PARTNER_STORAGE = "partnerBtnHideUntil";

  // TEXT ASLI — JANGAN DIUBAH
  const TEXTS = [
    "SEKTE💲",
    "SLOT🎰",
    "NAGA🔥",
    "SKATER📈",
    "KONEK🤑",
    "DEPO5RB💸",
    "MAXWIN🀄",
    "JPTERUS🔥",
    "WDCAIR💰",
    "SCATTER🀄",
    "GACOR✅️",
    "CUAN🚬"
  ];

  let textIndex = 0;
  let textTimer = null;


  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;

    style.textContent = `
      /* =========================================
         DEFAULT
      ========================================= */

      #${BTN_ID} {
        display: none !important;
      }


      /* =========================================
         MOBILE ONLY
      ========================================= */

      @media (max-width: 768px) {

        #${BTN_ID} {
          position: fixed !important;

          width: ${SIZE}px !important;
          height: ${SIZE}px !important;

          right: ${RIGHT}px !important;
          bottom: ${BOTTOM}px !important;

          border-radius: 50% !important;

          overflow: visible !important;

          box-sizing: border-box !important;

          display: flex !important;

          align-items: center !important;
          justify-content: center !important;

          background:
            radial-gradient(
              circle at 32% 25%,
              rgba(255,255,255,.25) 0%,
              rgba(255,120,30,.28) 20%,
              rgba(210,0,0,.78) 55%,
              rgba(35,0,0,.98) 100%
            ) !important;

          border: none !important;
          outline: none !important;

          z-index: 999999 !important;

          cursor: pointer !important;

          text-decoration: none !important;

          -webkit-tap-highlight-color: transparent !important;

          box-shadow:
            inset 0 2px 4px rgba(255,255,255,.22),
            inset 0 -5px 9px rgba(0,0,0,.60),
            0 0 7px rgba(255,0,0,.95),
            0 0 15px rgba(255,45,0,.70),
            0 0 28px rgba(255,70,0,.38) !important;

          animation:
            rjnDragonPulse 1.8s ease-in-out infinite;
        }


        #${BTN_ID}:focus,
        #${BTN_ID}:active,
        #${BTN_ID}:visited {
          outline: none !important;
          text-decoration: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }


        /* =========================================
           RING MERAH / API BERPUTAR
        ========================================= */

        #${BTN_ID}::before {
          content: "";

          position: absolute;

          inset: -5px;

          border-radius: 50%;

          padding: 3px;

          background:
            conic-gradient(
              from 0deg,
              #650000,
              #ff0000,
              #ff3b00,
              #ff9d00,
              #ff1600,
              #8b0000,
              #ff0000,
              #ff6500,
              #650000
            );

          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);

          -webkit-mask-composite: xor;
          mask-composite: exclude;

          animation:
            rjnDragonRing 2.2s linear infinite;

          pointer-events: none;

          z-index: 5;

          filter:
            drop-shadow(0 0 3px rgba(255,0,0,.95))
            drop-shadow(0 0 7px rgba(255,50,0,.85))
            drop-shadow(0 0 12px rgba(255,100,0,.50));
        }


        /* =========================================
           FIRE GLOW
        ========================================= */

        #${BTN_ID}::after {
          content: "";

          position: absolute;

          inset: -13px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255,0,0,.45) 0%,
              rgba(255,55,0,.26) 35%,
              rgba(255,100,0,.12) 55%,
              rgba(255,0,0,0) 76%
            );

          filter: blur(5px);

          pointer-events: none;

          z-index: 1;

          animation:
            rjnFireGlow 1.5s ease-in-out infinite;
        }


        /* =========================================
           GIF RJN — TETAP
        ========================================= */

        #${BTN_ID} img {
          position: relative !important;

          width: 72% !important;
          height: 72% !important;

          object-fit: contain !important;

          pointer-events: none !important;

          z-index: 8 !important;

          filter:
            drop-shadow(0 0 4px rgba(255,255,255,.80))
            drop-shadow(0 0 6px rgba(255,0,0,.95))
            drop-shadow(0 0 10px rgba(255,70,0,.70)) !important;
        }


        /* =========================================
           BUBBLE / OXYGEN
        ========================================= */

        #${BTN_ID} .rjn-bubble {
          position: absolute !important;

          bottom: 7px !important;

          border-radius: 50% !important;

          pointer-events: none !important;

          z-index: 6 !important;

          opacity: 0;

          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(255,255,255,.95) 0%,
              rgba(255,190,100,.85) 22%,
              rgba(255,70,0,.65) 55%,
              rgba(255,0,0,0) 78%
            ) !important;

          box-shadow:
            0 0 4px rgba(255,90,0,.90),
            0 0 8px rgba(255,0,0,.55) !important;

          animation:
            rjnBubbleRise 2.7s ease-out infinite;
        }


        #${BTN_ID} .rjn-bubble-1 {
          width: 4px !important;
          height: 4px !important;
          left: 15% !important;
          animation-delay: .1s !important;
        }


        #${BTN_ID} .rjn-bubble-2 {
          width: 3px !important;
          height: 3px !important;
          left: 34% !important;
          animation-delay: .9s !important;
        }


        #${BTN_ID} .rjn-bubble-3 {
          width: 5px !important;
          height: 5px !important;
          left: 57% !important;
          animation-delay: .45s !important;
        }


        #${BTN_ID} .rjn-bubble-4 {
          width: 3px !important;
          height: 3px !important;
          left: 76% !important;
          animation-delay: 1.3s !important;
        }


        /* =========================================
           TEXT ASLI
        ========================================= */

        #${BTN_ID} .float-text {
          position: absolute !important;

          top: -34px !important;

          left: 50% !important;

          transform: translateX(-50%) !important;

          background:
            linear-gradient(
              135deg,
              #fff200,
              #ffb300,
              #ff6500
            ) !important;

          color: #180800 !important;

          text-shadow:
            0 1px 1px rgba(255,255,255,.65) !important;

          font-size: 14px !important;

          font-weight: 900 !important;

          letter-spacing: .4px !important;

          line-height: 1 !important;

          padding: 6px 14px !important;

          border-radius: 999px !important;

          border: 1px solid rgba(255,255,255,.70) !important;

          box-shadow:
            0 0 7px rgba(255,230,0,.70),
            0 0 12px rgba(255,60,0,.45) !important;

          z-index: 20 !important;

          white-space: nowrap !important;

          pointer-events: none !important;

          display: block !important;

          visibility: visible !important;

          opacity: 1 !important;

          animation:
            rjnTextBlink 2.8s ease-in-out infinite;
        }


        /* =========================================
           X CLOSE
        ========================================= */

        #${BTN_ID} .close-btn {
          position: absolute !important;

          top: -48px !important;

          right: -6px !important;

          width: 22px !important;
          height: 22px !important;

          display: flex !important;

          align-items: center !important;
          justify-content: center !important;

          border-radius: 50% !important;

          border: 2px solid #fff !important;

          background: #ff0033 !important;

          color: #fff !important;

          font-family: Arial, sans-serif !important;

          font-size: 14px !important;

          font-weight: 900 !important;

          box-shadow:
            0 0 6px rgba(255,0,51,.80),
            0 0 12px rgba(255,0,0,.35) !important;

          z-index: 30 !important;

          cursor: pointer !important;

          visibility: visible !important;

          opacity: 1 !important;

          -webkit-tap-highlight-color: transparent !important;
        }


        /* =========================================
           ANIMASI RING
        ========================================= */

        @keyframes rjnDragonRing {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }


        /* =========================================
           ANIMASI BUTTON
        ========================================= */

        @keyframes rjnDragonPulse {
          0%, 100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.035);
          }
        }


        /* =========================================
           ANIMASI FIRE
        ========================================= */

        @keyframes rjnFireGlow {
          0%, 100% {
            opacity: .45;
            transform: scale(.94);
          }

          50% {
            opacity: .95;
            transform: scale(1.08);
          }
        }


        /* =========================================
           ANIMASI BUBBLE
        ========================================= */

        @keyframes rjnBubbleRise {

          0% {
            opacity: 0;

            transform:
              translate3d(0, 5px, 0)
              scale(.45);
          }

          15% {
            opacity: .90;
          }

          45% {
            opacity: .75;

            transform:
              translate3d(-3px, -20px, 0)
              scale(1);
          }

          75% {
            opacity: .40;
          }

          100% {
            opacity: 0;

            transform:
              translate3d(5px, -58px, 0)
              scale(.65);
          }
        }


        /* =========================================
           TEXT BLINK
        ========================================= */

        @keyframes rjnTextBlink {

          0%, 100% {
            opacity: .82;
          }

          50% {
            opacity: 1;
          }
        }


        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {

          #${BTN_ID},
          #${BTN_ID}::before,
          #${BTN_ID}::after,
          #${BTN_ID} img,
          #${BTN_ID} .float-text,
          #${BTN_ID} .rjn-bubble {
            animation: none !important;
          }
        }
      }
    `;

    document.head.appendChild(style);
  }


  /* =========================================
     STORAGE
  ========================================= */

  function getHideUntil() {
    try {
      return (
        parseInt(
          localStorage.getItem(PARTNER_STORAGE) || "0",
          10
        ) || 0
      );
    } catch (error) {
      return 0;
    }
  }


  function setHideUntil(duration) {
    try {
      localStorage.setItem(
        PARTNER_STORAGE,
        String(Date.now() + duration)
      );
    } catch (error) {}
  }


  /* =========================================
     CREATE RJN BUTTON
  ========================================= */

  function createPartnerButton() {

    if (document.getElementById(BTN_ID)) return;


    if (Date.now() < getHideUntil()) {
      return;
    }


    const btn = document.createElement("a");

    btn.id = BTN_ID;

    btn.href = LINK;

    btn.target = "_blank";

    btn.rel = "noopener noreferrer";


    btn.innerHTML =
      '<span class="float-text">' +
      TEXTS[0] +
      '</span>' +

      '<span class="close-btn">✕</span>' +

      '<span class="rjn-bubble rjn-bubble-1"></span>' +
      '<span class="rjn-bubble rjn-bubble-2"></span>' +
      '<span class="rjn-bubble rjn-bubble-3"></span>' +
      '<span class="rjn-bubble rjn-bubble-4"></span>' +

      '<img src="' +
      LOGO_URL +
      '" alt="">';


    document.body.appendChild(btn);


    startTextTimer(btn);


    const closeBtn =
      btn.querySelector(".close-btn");


    closeBtn.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        event.stopPropagation();

        stopTextTimer();

        btn.remove();


        setHideUntil(
          PARTNER_HIDE_TIME
        );


        setTimeout(
          createPartnerButton,
          PARTNER_HIDE_TIME + 100
        );
      }
    );
  }


  /* =========================================
     TEXT ROTATION — ASLI
  ========================================= */

  function startTextTimer(btn) {

    stopTextTimer();


    textTimer = setInterval(
      function () {

        if (!document.body.contains(btn)) {

          stopTextTimer();

          return;
        }


        const text =
          btn.querySelector(".float-text");


        if (!text) return;


        textIndex =
          (textIndex + 1) % TEXTS.length;


        text.textContent =
          TEXTS[textIndex];

      },
      2800
    );
  }


  function stopTextTimer() {

    if (!textTimer) return;

    clearInterval(textTimer);

    textTimer = null;
  }


  /* =========================================
     INIT
  ========================================= */

  function init() {

    injectStyle();

    createPartnerButton();

  }


  /* =========================================
     LOAD
  ========================================= */

  function startAfterPageLoad() {

    requestAnimationFrame(
      function () {

        setTimeout(
          init,
          LOAD_DELAY
        );

      }
    );
  }


  if (
    document.readyState === "complete"
  ) {

    startAfterPageLoad();

  } else {

    window.addEventListener(
      "load",
      startAfterPageLoad,
      { once: true }
    );

  }

})();
```
