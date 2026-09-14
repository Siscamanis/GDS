```javascript
"use strict";

(function () {
  const BTN_ID = "partner-gold-btn";
  const STYLE_ID = "partner-gold-style";

  const LINK = "https://linkshortener.vip/rajanaga99-m4xw1n";

  const LOGO_URL =
    "https://lh3.googleusercontent.com/d/1jCS32ToIndVkGBIv1ChO5djkwKUOAnOS";

  const RIGHT = 18;
  const BOTTOM = 100;
  const SIZE = 55;

  const PARTNER_HIDE_TIME = 10000;
  const LOAD_DELAY = 1200;

  const PARTNER_STORAGE = "partnerBtnHideUntil";

  // TEXT ASLI — TIDAK DIUBAH
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

      #${BTN_ID} {
        display:none!important;
      }


      @media(max-width:768px){

        #${BTN_ID}{
          position:fixed!important;

          width:${SIZE}px!important;
          height:${SIZE}px!important;

          right:${RIGHT}px!important;
          bottom:${BOTTOM}px!important;

          border-radius:50%!important;

          overflow:visible!important;

          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(255,255,255,.24) 0%,
              rgba(255,80,30,.25) 22%,
              rgba(180,0,0,.82) 58%,
              rgba(35,0,0,.96) 100%
            )!important;

          border:none!important;
          outline:none!important;

          box-sizing:border-box!important;

          z-index:999999!important;

          cursor:pointer!important;

          display:flex!important;
          align-items:center!important;
          justify-content:center!important;

          text-decoration:none!important;

          -webkit-tap-highlight-color:transparent!important;

          box-shadow:
            inset 0 2px 4px rgba(255,255,255,.20),
            inset 0 -4px 8px rgba(0,0,0,.48),
            0 0 8px rgba(255,0,0,.75),
            0 0 16px rgba(255,40,0,.50),
            0 0 28px rgba(180,0,0,.30)!important;

          animation:
            dragonPulse 2s ease-in-out infinite;
        }


        /* =====================================
           RING MERAH BERPUTAR
        ===================================== */

        #${BTN_ID}::before{
          content:"";

          position:absolute;

          inset:-4px;

          border-radius:50%;

          padding:3px;

          background:
            conic-gradient(
              from 0deg,
              #650000,
              #ff0000,
              #ff4500,
              #ffb000,
              #ff1800,
              #8b0000,
              #ff0000,
              #ff5a00,
              #650000
            );

          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);

          -webkit-mask-composite:xor;
          mask-composite:exclude;

          animation:
            dragonRing 2.4s linear infinite;

          pointer-events:none;

          z-index:3;

          filter:
            drop-shadow(0 0 3px rgba(255,0,0,.95))
            drop-shadow(0 0 7px rgba(255,50,0,.75))
            drop-shadow(0 0 12px rgba(255,90,0,.40));
        }


        /* =====================================
           GLOW API NAGA
        ===================================== */

        #${BTN_ID}::after{
          content:"";

          position:absolute;

          inset:-11px;

          border-radius:50%;

          background:
            radial-gradient(
              circle,
              rgba(255,0,0,.42) 0%,
              rgba(255,50,0,.22) 38%,
              rgba(255,90,0,.10) 58%,
              rgba(255,0,0,0) 76%
            );

          filter:blur(5px);

          pointer-events:none;

          z-index:1;

          animation:
            dragonGlow 1.7s ease-in-out infinite;
        }


        /* =====================================
           GIF TETAP
        ===================================== */

        #${BTN_ID} img{
          position:relative!important;

          width:72%!important;
          height:72%!important;

          object-fit:contain!important;

          pointer-events:none!important;

          z-index:7!important;

          filter:
            drop-shadow(0 0 4px rgba(255,255,255,.75))
            drop-shadow(0 0 6px rgba(255,0,0,.90))
            drop-shadow(0 0 10px rgba(255,60,0,.65))!important;
        }


        /* =====================================
           TEXT ASLI — STYLE TETAP MIRIP LAMA
        ===================================== */

        #${BTN_ID} .float-text{
          position:absolute!important;

          top:-34px!important;
          left:50%!important;

          transform:translateX(-50%)!important;

          background:
            linear-gradient(
              135deg,
              #fff200,
              #ffb300,
              #ff7a00
            )!important;

          color:#101800!important;

          text-shadow:
            0 1px 1px rgba(255,255,255,.65)!important;

          font-size:14px!important;
          font-weight:900!important;

          letter-spacing:.4px!important;
          line-height:1!important;

          padding:6px 14px!important;

          border-radius:999px!important;

          border:1px solid rgba(255,255,255,.65)!important;

          box-shadow:
            0 0 7px rgba(255,230,0,.65),
            0 0 12px rgba(255,50,0,.30)!important;

          z-index:10!important;

          white-space:nowrap!important;

          pointer-events:none!important;

          display:block!important;

          visibility:visible!important;

          opacity:1;

          animation:
            partnerTextBlink 2.8s ease-in-out infinite;
        }


        /* =====================================
           X TETAP
```
