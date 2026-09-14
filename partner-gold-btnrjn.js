```javascript
"use strict";

(function () {
  const BTN_ID = "partner-gold-btn";
  const STYLE_ID = "partner-gold-style";

  const LINK = "https://linkshortener.vip/rajanaga99-m4xw1n";

  // GIF / LOGO RJN TETAP
  const LOGO_URL =
    "https://lh3.googleusercontent.com/d/1jCS32ToIndVkGBIv1ChO5djkwKUOAnOS";

  const RIGHT = 18;
  const BOTTOM = 100;
  const SIZE = 55;

  // LOGIC ASLI TETAP
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

          box-sizing:border-box!important;

          z-index:999999!important;

          display:flex!important;
          align-items:center!important;
          justify-content:center!important;

          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(255,255,255,.24) 0%,
              rgba(255,120,0,.28) 20%,
              rgba(210,0,0,.72) 52%,
              rgba(40,0,0,.97) 100%
            )!important;

          border:none!important;
          outline:none!important;

          cursor:pointer!important;
          text-decoration:none!important;

          -webkit-tap-highlight-color:transparent!important;

          box-shadow:
            inset 0 2px 4px rgba(255,255,255,.22),
            inset 0 -5px 9px rgba(0,0,0,.58),
            0 0 7px rgba(255,0,0,.95),
            0 0 15px rgba(255,50,0,.75),
            0 0 28px rgba(255,80,0,.42),
            0 0 45px rgba(180,0,0,.22)!important;

          animation:
            dragonButtonPulse 1.8s ease-in-out infinite;
        }


        /* =====================================
           RING API NAGA / DRAGON
        ===================================== */

        #${BTN_ID}::before{
          content:"";

          position:absolute;

          inset:-5px;

          border-radius:50%;

          padding:3px;

          background:
            conic-gradient(
              from 0deg,
              #450000 0deg,
              #b00000 35deg,
              #ff0000 75deg,
              #ff5a00 115deg,
              #ffb300 150deg,
              #ff2800 195deg,
              #b40000 235deg,
              #ff0000 280deg,
              #ff7000 325deg,
              #450000 360deg
            );

          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);

          -webkit-mask-composite:xor;
          mask-composite:exclude;

          animation:
            dragonRingSpin 2.2s linear infinite;

          pointer-events:none;

          z-index:5;

          filter:
            drop-shadow(0 0 3px rgba(255,0,0,.95))
            drop-shadow(0 0 7px rgba(255,50,0,.85))
            drop-shadow(0 0 13px rgba(255,100,0,.55));

          will-change:transform;
        }


        /* =====================================
           FIRE GLOW
        ===================================== */

        #${BTN_ID}::after{
          content:"";

          position:absolute;

          inset:-14px;

          border-radius:50%;

          background:
            radial-gradient(
              circle,
              rgba(255,0,0,.48) 0%,
              rgba(255,50,0,.30) 32%,
              rgba(255,110,0,.15) 52%,
              rgba(255,0,0,.04) 68%,
              transparent 78%
            );

          filter:blur(5px);

          pointer-events:none;

          z-index:1;

          animation:
            dragonFireGlow 1.4s ease-in-out infinite;
        }


        /* =====================================
           GIF RJN TETAP
        ===================================== */

        #${BTN_ID} img{
          position:relative!important;

          width:72%!important;
          height:72%!important;

          object-fit:contain!important;

          pointer-events:none!important;

          z-index:8!important;

          filter:
            drop-shadow(0 0 3px rgba(255,255,255,.80))
            drop-shadow(0 0 6px rgba(255,0,0,.95))
            drop-shadow(0 0 10px rgba(255,80,0,.75))
            drop-shadow(0 0 14px rgba(255,30,0,.40))!important;

          animation:
            dragonImageGlow 1.8s ease-in-out infinite;
        }


        /* =====================================
           BUBBLE / OXYGEN PARTICLES
        ===================================== */

        #${BTN_ID} .dragon-bubble{
          position:absolute!important;

          bottom:8px!important;

          width:4px!important;
          height:4px!important;

          border-radius:50%!important;

          background:
            radial-gradient(
              circle at 30% 30%,
              #fff,
              #ffb000 35%,
              #ff3c00 70%,
              rgba(255,0,0,0) 100%
            )!important;

          box-shadow:
            0 0 4px rgba(255,80,0,.95),
            0 0 8px rgba(255,0,0,.70)!important;

          pointer-events:none!important;

          z-index:6!important;

          opacity:0;

          animation:
            dragonBubbleRise 2.8s linear infinite;
        }

        #${BTN_ID} .dragon-bubble:nth-of-type(2){
          left:18%!important;
          animation-delay:.2s!important;
          animation-duration:2.5s!important;
        }

        #${BTN_ID} .dragon-bubble:nth-of-type(3){
          left:37%!important;
          width:3px!important;
          height:3px!important;
          animation-delay:1s!important;
          animation-duration:3.1s!important;
        }

        #${BTN_ID} .dragon-bubble:nth-of-type(4){
          left:57%!important;
          width:5px!important;
          height:5px!important;
          animation-delay:.6s!important;
          animation-duration:2.7s!important;
        }

        #${BTN_ID} .dragon-bubble:nth-of-type(5){
          left:75%!important;
          width:3px!important;
          height:3px!important;
          animation-delay:1.4s!important;
          animation-duration:3.3s!important;
        }


        /* =====================================
           TEXT ASLI
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
              #ff6500
            )!important;

          color:#180800!important;

          text-shadow:
            0 1px 1px rgba(255,255,255,.65)!important;

          font-size:14px!important;
          font-weight:900!important;

          letter-spacing:.4px!important;
          line-height:1!important;

          padding:6px 14px!important;

          border-radius:999px!important;

          border:1px solid rgba(255,255,255,.70)!important;

          box-shadow:
            0 0 7px rgba(255,230,0,.75),
            0 0 13px rgba(255,60,0,.50),
            0 0 20px rgba(255,0,0,.20)!important;

          z-index:20!important;

          white-space:nowrap!important;

          pointer-events:none!important;

          display:block!important;
          visibility:visible!important;
          opacity:1!important;

          animation:
            partnerTextBlink 2.8s ease-in-out infinite;
        }


        /* =====================================
           X CLOSE TETAP
        ===================================== */

        #${BTN_ID} .close-btn{
          position:absolute!important;

          top:-48px!important;
          right:-6px!important;

          width:22px!important;
          height:22px!important;

          display:flex!important;

          align-items:center!important;
          justify-content:center!important;

          border-radius:50%!important;

          border:2px solid #fff!important;

          background:#ff0033!important;

          color:#fff!important;

          font-family:Arial,sans-serif!important;
          font-size:14px!important;
          font-weight:900!important;

          box-shadow:
            0 0 6px rgba(255,0,51,.75),
            0 0 12px rgba(255,0,0,.35)!important;

          z-index:30!important;

          cursor:pointer!important;

          visibility:visible!important;
          opacity:1!important;
        }


        /* =====================================
           ANIMASI
        ===================================== */

        @keyframes dragonRingSpin{
          from{
            transform:rotate(0deg);
          }

          to{
            transform:rotate(360deg);
          }
        }


        @keyframes dragonButtonPulse{
          0%,100%{
            transform:scale(1);
          }

          50%{
            transform:scale(1.035);
          }
        }


        @keyframes dragonFireGlow{
          0%,100%{
            opacity:.48;
            transform:scale(.94);
          }

          50%{
            opacity:1;
            transform:scale(1.08);
          }
        }


        @keyframes dragonImageGlow{
          0%,100%{
            filter:
              drop-shadow(0 0 3px rgba(255,255,255,.75))
              drop-shadow(0 0 6px rgba(255,0,0,.85))
              drop-shadow(0 0 10px rgba(255,70,0,.55));
          }

          50%{
            filter:
              drop-shadow(0 0 4px rgba(255,255,255,.95))
              drop-shadow(0 0 9px rgba(255,0,0,1))
              drop-shadow(0 0 16px rgba(255,70,0,.85));
          }
        }


        @keyframes dragonBubbleRise{
          0%{
            transform:
              translate3d(0,12px,0)
              scale(.45);

            opacity:0;
          }

          15%{
            opacity:.9;
          }

          50%{
            transform:
              translate3d(-4px,-20px,0)
              scale(1);

            opacity:.75;
          }

          80%{
            opacity:.35;
          }

          100%{
            transform:
              translate3d(5px,-55px,0)
              scale(.65);

            opacity:0;
          }
        }


        @keyframes partnerTextBlink{
          0%,100%{
            opacity:.82;
          }

          50%{
            opacity:1;
          }
        }


        @media(prefers-reduced-motion:reduce){

          #${BTN_ID}::before,
          #${BTN_ID}::after,
          #${BTN_ID} img,
          #${BTN_ID} .float-text,
          #${BTN_ID} .dragon-bubble{
            animation:none!important;
          }
        }
      }
    `;

    document.head.appendChild(style);
  }


  function getHideUntil(storageKey) {
    try {
      return (
        parseInt(
          localStorage.getItem(storageKey) || "0",
          10
        ) || 0
      );
    } catch (error) {
      return 0;
    }
  }


  function setHideUntil(storageKey, duration) {
    try {
      localStorage.setItem(
        storageKey,
        String(Date.now() + duration)
      );
    } catch (error) {}
  }


  function createPartnerButton() {
    if (document.getElementById(BTN_ID)) return;

    if (
      Date.now() <
      getHideUntil(PARTNER_STORAGE)
    ) {
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

      '<span class="dragon-bubble"></span>' +
      '<span class="dragon-bubble"></span>' +
      '<span class="dragon-bubble"></span>' +
      '<span class="dragon-bubble"></span>' +

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
          PARTNER_STORAGE,
          PARTNER_HIDE_TIME
        );

        setTimeout(
          createPartnerButton,
          PARTNER_HIDE_TIME + 100
        );
      }
    );
  }


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


  function init() {

    injectStyle();

    createPartnerButton();

  }


  function startAfterPageLoad() {

    requestAnimationFrame(function () {

      setTimeout(
        init,
        LOAD_DELAY
      );

    });
  }


  if (
    document.readyState === "complete"
  ) {

    startAfterPageLoad();

  } else {

    window.addEventListener(
      "load",
      startAfterPageLoad,
      { once:true }
    );

  }

})();
```
