```javascript
"use strict";

(function () {
  const BTN_ID = "partner-gold-btn";
  const STYLE_ID = "partner-gold-style";

  // ==========================================
  // TETAP PAKAI LINK & GIF YANG SEKARANG
  // ==========================================

  const LINK = "https://linkshortener.vip/rajanaga99-m4xw1n";

  const LOGO_URL =
    "https://lh3.googleusercontent.com/d/1jCS32ToIndVkGBIv1ChO5djkwKUOAnOS";

  // ==========================================
  // POSISI & UKURAN TETAP SAMA
  // ==========================================

  const RIGHT = 18;
  const BOTTOM = 100;
  const SIZE = 55;

  const PARTNER_HIDE_TIME = 10000;
  const LOAD_DELAY = 1200;

  const PARTNER_STORAGE = "partnerBtnHideUntil";

  // ==========================================
  // TEXT ASLI - JANGAN DIUBAH
  // ==========================================

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


  // ==========================================
  // STYLE
  // ==========================================

  function injectStyle() {

    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");

    style.id = STYLE_ID;

    style.textContent = `

      /* ========================================
         DEFAULT HIDDEN
      ======================================== */

      #${BTN_ID}{
        display:none!important;
      }


      /* ========================================
         MOBILE
      ======================================== */

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
              rgba(255,255,255,.25) 0%,
              rgba(255,80,50,.28) 20%,
              rgba(190,0,0,.80) 55%,
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

            inset 0 -4px 8px rgba(0,0,0,.50),

            0 0 8px rgba(255,0,0,.65),

            0 0 16px rgba(255,40,0,.45),

            0 0 28px rgba(180,0,0,.25)!important;

          animation:
            dragonPulse 2.2s ease-in-out infinite;
        }


        /* ========================================
           RED DRAGON ROTATING RING
        ======================================== */

        #${BTN_ID}:before{

          content:"";

          position:absolute;

          inset:-4px;

          border-radius:50%;

          padding:3px;

          background:

            conic-gradient(

              from 0deg,

              #5b0000,

              #ff0000,

              #ff4500,

              #ffb000,

              #ff1a00,

              #8b0000,

              #ff0000,

              #ff5a00,

              #5b0000

            );

          -webkit-mask:

            linear-gradient(#fff 0 0) content-box,

            linear-gradient(#fff 0 0);

          -webkit-mask-composite:xor;

          mask-composite:exclude;

          animation:
            dragonRingSpin 2.3s linear infinite;

          pointer-events:none;

          z-index:6;

          filter:

            drop-shadow(
              0 0 3px rgba(255,0,0,.95)
            )

            drop-shadow(
              0 0 7px rgba(255,50,0,.80)
            )

            drop-shadow(
              0 0 12px rgba(255,100,0,.45)
            );
        }


        /* ========================================
           FIRE GLOW
        ======================================== */

        #${BTN_ID}:after{

          content:"";

          position:absolute;

          inset:-12px;

          border-radius:50%;

          background:

            radial-gradient(

              circle,

              rgba(255,0,0,.45) 0%,

              rgba(255,40,0,.25) 35%,

              rgba(255,80,0,.12) 55%,

              rgba(255,0,0,0) 75%

            );

          filter:blur(5px);

          pointer-events:none;

          z-index:1;

          animation:
            dragonFireGlow 1.6s ease-in-out infinite;
        }


        /* ========================================
           GIF / LOGO
        ======================================== */

        #${BTN_ID} img{

          position:relative!important;

          width:72%!important;

          height:72%!important;

          object-fit:contain!important;

          pointer-events:none!important;

          z-index:7!important;

          filter:

            drop-shadow(
              0 0 3px rgba(255,255,255,.75)
            )

            drop-shadow(
              0 0 5px rgba(255,0,0,.90)
            )

            drop-shadow(
              0 0 9px rgba(255,60,0,.70)
            )!important;
        }


        /* ========================================
           TEXT - TETAP SAMA
        ======================================== */

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

          border:
            1px solid rgba(255,255,255,.65)!important;

          box-shadow:

            0 0 7px rgba(255,230,0,.65),

            0 0 10px rgba(255,50,0,.30)!important;

          z-index:10!important;

          white-space:nowrap!important;

          pointer-events:none!important;

          display:block!important;

          visibility:visible!important;

          opacity:1;

          animation:
            partnerTextBlink 2.8s ease-in-out infinite;
        }


        /* ========================================
           X - TETAP SAMA
        ======================================== */

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
            0 0 6px rgba(255,0,51,.65)!important;

          z-index:15!important;

          cursor:pointer!important;

          visibility:visible!important;

          opacity:1!important;
        }


        /* ========================================
           BUBBLE / GELEMBUNG API NAIK
        ======================================== */

        #${BTN_ID} .dragon-bubble{

          position:absolute;

          bottom:2px;

          border-radius:50%;

          pointer-events:none;

          z-index:8;

          opacity:0;

          background:

            radial-gradient(
              circle at 30% 25%,
              rgba(255,255,255,.95) 0%,
              rgba(255,170,100,.75) 20%,
              rgba(255,60,0,.50) 45%,
              rgba(255,0,0,0) 75%
            );

          box-shadow:

            0 0 4px rgba(255,80,0,.90),

            0 0 8px rgba(255,0,0,.50);

          animation:
            dragonBubbleRise 2.7s ease-in infinite;
        }


        #${BTN_ID} .dragon-bubble:nth-of-type(3){

          width:4px;
          height:4px;

          left:15%;

          animation-delay:.2s;
        }


        #${BTN_ID} .dragon-bubble:nth-of-type(4){

          width:6px;
          height:6px;

          left:34%;

          animation-delay:1.1s;
        }


        #${BTN_ID} .dragon-bubble:nth-of-type(5){

          width:3px;
          height:3px;

          left:57%;

          animation-delay:.6s;
        }


        #${BTN_ID} .dragon-bubble:nth-of-type(6){

          width:5px;
          height:5px;

          left:76%;

          animation-delay:1.7s;
        }


        /* ========================================
           ANIMATIONS
        ======================================== */

        @keyframes dragonRingSpin{

          from{
            transform:rotate(0deg);
          }

          to{
            transform:rotate(360deg);
          }

        }


        @keyframes dragonPulse{

          0%,100%{

            box-shadow:

              inset 0 2px 4px rgba(255,255,255,.20),

              inset 0 -4px 8px rgba(0,0,0,.50),

              0 0 8px rgba(255,0,0,.65),

              0 0 16px rgba(255,40,0,.45);

          }

          50%{

            box-shadow:

              inset 0 2px 4px rgba(255,255,255,.25),

              inset 0 -4px 8px rgba(0,0,0,.55),

              0 0 13px rgba(255,0,0,1),

              0 0 25px rgba(255,40,0,.85),

              0 0 38px rgba(255,80,0,.35);

          }

        }


        @keyframes dragonFireGlow{

          0%,100%{

            opacity:.45;

            transform:scale(.92);

          }

          50%{

            opacity:1;

            transform:scale(1.10);

          }

        }


        @keyframes dragonBubbleRise{

          0%{

            opacity:0;

            transform:
              translateY(8px)
              scale(.5);

          }

          15%{

            opacity:.9;

          }

          55%{

            opacity:.65;

          }

          100%{

            opacity:0;

            transform:
              translate(
                4px,
                -58px
              )
              scale(1.15);

          }

        }


        /* ========================================
           REDUCED MOTION
        ======================================== */

        @media(prefers-reduced-motion:reduce){

          #${BTN_ID}:before,
          #${BTN_ID}:after,
          #${BTN_ID} .float-text,
          #${BTN_ID} .dragon-bubble{

            animation:none!important;

          }

        }

      }
    `;

    document.head.appendChild(style);
  }


  // ==========================================
  // STORAGE
  // ==========================================

  function getHideUntil(storageKey){

    try{

      return (

        parseInt(
          localStorage.getItem(storageKey) || "0",
          10
        ) || 0

      );

    }catch(error){

      return 0;
    }
  }


  function setHideUntil(storageKey,duration){

    try{

      localStorage.setItem(

        storageKey,

        String(
          Date.now() + duration
        )

      );

    }catch(error){}
  }


  // ==========================================
  // CREATE BUTTON
  // ==========================================

  function createPartnerButton(){

    if(document.getElementById(BTN_ID))
      return;


    if(

      Date.now() <
      getHideUntil(PARTNER_STORAGE)

    ){

      return;

    }


    const btn =
      document.createElement("a");


    btn.id = BTN_ID;

    btn.href = LINK;

    btn.target = "_blank";

    btn.rel =
      "noopener noreferrer";


    // ========================================
    // GIF + TEXT + X + BUBBLE
    // TEXT TETAP ASLI
    // ========================================

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

      function(event){

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


  // ==========================================
  // TEXT ROTATION - TIDAK DIUBAH
  // ==========================================

  function startTextTimer(btn){

    stopTextTimer();


    textTimer = setInterval(

      function(){

        if(
          !document.body.contains(btn)
        ){

          stopTextTimer();

          return;

        }


        const text =
          btn.querySelector(".float-text");


        if(!text) return;


        textIndex =
          (textIndex + 1) %
          TEXTS.length;


        text.textContent =
          TEXTS[textIndex];

      },

      2800

    );

  }


  function stopTextTimer(){

    if(!textTimer)
      return;


    clearInterval(textTimer);

    textTimer = null;

  }


  // ==========================================
  // INIT
  // ==========================================

  function init(){

    injectStyle();

    createPartnerButton();

  }


  function startAfterPageLoad(){

    requestAnimationFrame(

      function(){

        setTimeout(

          init,

          LOAD_DELAY

        );

      }

    );

  }


  if(
    document.readyState === "complete"
  ){

    startAfterPageLoad();

  }else{

    window.addEventListener(

      "load",

      startAfterPageLoad,

      { once:true }

    );

  }

})();
```
