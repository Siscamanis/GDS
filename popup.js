"use strict";

(function () {
  const IMG = [
    "http://plcl.me/images/kJb4W.png",
    "http://plcl.me/images/RCDaF.png",
    "http://plcl.me/images/4bMCR.png"
  ];

  /* ==============================
     SETTING GADUNSLOT
  ============================== */

  const DELAY_KEY = "gds_popup_delay_1h";
  const SLIDER_INTERVAL = 7000;

  const STYLE_ID = "gds-popup-style";
  const POPUP_ID = "gds-popup";
  const OVERLAY_ID = "gds-popup-overlay";

  let popupCreated = false;
  let currentIndex = 0;
  let sliderTimer = null;
  let changingSlide = false;

  /* ==============================
     CEK HALAMAN
  ============================== */

  function isAllowedPage() {
    const path = location.pathname
      .replace(/\/+$/, "")
      .toLowerCase();

    return (
      path === "" ||
      path === "/" ||
      path.includes("home")
    );
  }

  function canShowPopup() {
    if (!isAllowedPage()) return false;

    const lastClosed = Number(
      localStorage.getItem(DELAY_KEY) || 0
    );

    return !(
      lastClosed &&
      Date.now() - lastClosed < 3600000
    );
  }

  /* ==============================
     PRELOAD GAMBAR
  ============================== */

  function preloadImages() {
    return Promise.all(
      IMG.map(function (url) {
        return new Promise(function (resolve) {
          const img = new Image();

          img.onload = resolve;
          img.onerror = resolve;
          img.src = url;

          if (img.complete) {
            resolve();
          }
        });
      })
    );
  }

  /* ==============================
     CSS GADUNSLOT
  ============================== */

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;

    style.textContent = `

      @keyframes gdsFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes gdsFadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }

      @keyframes gdsSlideIn {
        from {
          transform: translateY(25px) scale(.97);
          opacity: 0;
        }

        to {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
      }

      @keyframes gdsPopupPullUp {
        from {
          transform: translateY(0);
          opacity: 1;
        }

        to {
          transform: translateY(-110vh);
          opacity: 0;
        }
      }

      @keyframes gdsShine {
        0% {
          left: -50%;
        }

        100% {
          left: 130%;
        }
      }

      /* ==============================
         OVERLAY
      ============================== */

      #${OVERLAY_ID} {
        position: fixed;
        inset: 0;

        z-index: 2147483646;

        background:
          radial-gradient(
            circle at center,
            rgba(6, 70, 30, .15),
            transparent 45%
          ),
          linear-gradient(
            180deg,
            rgba(0,0,0,.45),
            rgba(0,0,0,.88)
          );

        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);

        animation:
          gdsFadeIn .35s ease forwards;
      }

      #${OVERLAY_ID}.fade-out {
        animation:
          gdsFadeOut .35s ease forwards;
      }

      /* ==============================
         POPUP
      ============================== */

      #${POPUP_ID} {
        position: fixed;
        inset: 0;

        z-index: 2147483647;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 9px;

        padding: 12px;

        box-sizing: border-box;

        background: transparent;

        overflow-y: auto;
      }

      #${POPUP_ID}.pull-up {
        animation:
          gdsPopupPullUp .72s
          cubic-bezier(.55,.05,.25,1)
          forwards;

        pointer-events: none;
      }

      #gds-popup-box {
        position: relative;

        animation:
          gdsSlideIn .45s ease forwards;

        background: transparent;

        border: none;

        box-shadow: none;
      }

      /* ==============================
         CLOSE
      ============================== */

      #gds-close {
        position: absolute;

        top: -13px;
        right: -13px;

        width: 34px;
        height: 34px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        cursor: pointer;

        z-index: 9999;

        color: #ffffff;

        font-size: 17px;
        font-weight: 900;

        border:
          1px solid #f1d878;

        background:
          linear-gradient(
            145deg,
            #19a84f,
            #075f29 55%,
            #032511
          );

        box-shadow:
          0 0 10px rgba(28,255,109,.35),
          0 0 18px rgba(218,185,75,.30),
          0 5px 15px rgba(0,0,0,.55);

        transition:
          transform .2s ease,
          filter .2s ease;
      }

      #gds-close:hover {
        transform: scale(1.08);
        filter: brightness(1.15);
      }

      /* ==============================
         IMAGE STAGE
      ============================== */

      #gds-image-stage {
        position: relative;

        display: grid;
        place-items: center;

        max-width: 92vw;
        max-height: 58vh;

        overflow: hidden;

        background: transparent;
      }

      #gds-popup-img,
      #gds-popup-img-next {
        grid-area: 1 / 1;

        display: block;

        max-width: 92vw;
        max-height: 58vh;

        width: auto;
        height: auto;

        object-fit: contain;

        border: none;

        border-radius: 0;

        background: transparent;

        box-shadow: none;

        will-change:
          transform,
          opacity;
      }

      #gds-popup-img {
        position: relative;

        z-index: 1;

        opacity: 1;

        transform:
          translateX(0);
      }

      #gds-popup-img-next {
        position: relative;

        z-index: 2;

        opacity: 0;

        transform:
          translateX(100%);

        pointer-events: none;
      }

      #gds-popup-img-next.slide-rtl {
        opacity: 1;

        transform:
          translateX(0);

        transition:
          transform .7s
          cubic-bezier(.22,.8,.28,1),
          opacity .3s ease;
      }

      #gds-popup-img.slide-old-left {
        opacity: .25;

        transform:
          translateX(-18%);

        transition:
          transform .7s
          cubic-bezier(.22,.8,.28,1),
          opacity .55s ease;
      }

      /* ==============================
         NAVIGATION
      ============================== */

      .gds-nav {
        position: absolute;

        top: 50%;

        transform:
          translateY(-50%);

        width: 31px;
        height: 31px;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0;

        border-radius: 50%;

        border:
          1px solid #e5c85e;

        background:
          linear-gradient(
            180deg,
            #159947,
            #075e29 55%,
            #032511
          );

        color: #ffffff;

        font-size: 24px;
        font-weight: 900;

        cursor: pointer;

        z-index: 9998;

        box-shadow:
          0 0 12px rgba(25,220,91,.35),
          0 0 18px rgba(214,184,79,.25);

        transition:
          transform .2s ease,
          filter .2s ease;
      }

      .gds-nav:hover {
        filter: brightness(1.15);
      }

      #gds-prev {
        left: 8px;
      }

      #gds-next {
        right: 8px;
      }

      /* ==============================
         DOT SLIDER
      ============================== */

      #gds-dots {
        position: absolute;

        left: 50%;
        bottom: 10px;

        transform:
          translateX(-50%);

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 7px;

        z-index: 9998;

        padding:
          5px 8px;

        border-radius: 20px;

        background:
          rgba(0,0,0,.35);

        backdrop-filter:
          blur(5px);
      }

      .gds-dot {
        width: 8px;
        height: 8px;

        min-width: 8px;

        padding: 0;

        border: none;

        border-radius: 50%;

        background:
          rgba(255,255,255,.55);

        cursor: pointer;

        transition:
          transform .2s ease,
          background .2s ease;
      }

      .gds-dot.active {
        background:
          #e1c45a;

        transform:
          scale(1.35);

        box-shadow:
          0 0 10px
          rgba(225,196,90,.9);
      }

      /* ==============================
         TITLE
      ============================== */

      #gds-title {
        font-size: 15px;

        font-weight: 900;

        color:
          #f5df8b;

        letter-spacing:
          1.8px;

        text-align: center;

        text-shadow:
          0 0 8px
          rgba(214,184,79,.75),
          0 0 20px
          rgba(21,153,71,.35);
      }

    
      /* ==============================
         BUTTON
      ============================== */

      .gds-btn-row {
        width: 310px;

        display: flex;

        flex-wrap: wrap;

        gap: 8px;

        align-items: center;
        justify-content: center;

        margin-top: 2px;
      }

      .gds-btn,
      .gds-ok {
        position: relative;

        overflow: hidden;

        cursor: pointer;

        text-align: center;

        font-weight: 900;

        color: #ffffff !important;

        box-sizing: border-box;

        transition:
          transform .18s ease,
          filter .18s ease;
      }

      .gds-btn {
        width: 148px;

        padding:
          12px 0;

        border-radius:
          14px;

        font-size:
          12px;

        white-space:
          nowrap;

        text-decoration:
          none;

        letter-spacing:
          .4px;

        background:
          linear-gradient(
            180deg,
            #1db85a 0%,
            #0b7c36 35%,
            #05491f 72%,
            #02250f 100%
          );

        border:
          1px solid
          #dfc45d;

        box-shadow:
          0 0 10px
          rgba(23,200,82,.38),

          0 0 20px
          rgba(214,184,79,.18),

          0 8px 20px
          rgba(0,0,0,.55),

          inset 0 1px 0
          rgba(255,255,255,.22);
      }

      .gds-ok {
        width: 120px;

        padding:
          11px 0;

        border-radius:
          14px;

        font-size:
          13px;

        background:
          linear-gradient(
            180deg,
            #e4c95e 0%,
            #b28c24 40%,
            #765711 75%,
            #352504 100%
          );

        border:
          1px solid
          #fff0a3;

        box-shadow:
          0 0 12px
          rgba(214,184,79,.55),

          0 8px 20px
          rgba(0,0,0,.5),

          inset 0 1px 0
          rgba(255,255,255,.28);
      }

      .gds-btn:hover,
      .gds-ok:hover {
        transform:
          translateY(-1px)
          scale(1.035);

        filter:
          brightness(1.12);
      }

      .gds-btn:active,
      .gds-ok:active {
        transform:
          scale(.96);
      }

      /* GLITTER BUTTON */

      .gds-btn::before,
      .gds-ok::before {
        content: "";

        position: absolute;

        top: 0;
        left: -50%;

        width: 28%;
        height: 100%;

        background:
          linear-gradient(
            120deg,
            rgba(255,255,255,0),
            rgba(255,242,181,.9),
            rgba(255,255,255,0)
          );

        transform:
          skewX(-25deg);

        animation:
          gdsShine 1.8s
          linear infinite;
      }

      /* ==============================
         MOBILE
      ============================== */

      @media (max-width: 768px) {

        #${POPUP_ID} {
          gap: 8px;

          padding:
            10px;
        }

        #gds-image-stage,
        #gds-popup-img,
        #gds-popup-img-next {
          max-width:
            94vw;

          max-height:
            55vh;
        }

        .gds-gif-box {
          width:
            78px;
        }

        .gds-btn-row {
          width:
            min(310px, 94vw);

          gap:
            7px;
        }

        .gds-btn {
          width:
            146px;

          padding:
            11px 0;

          font-size:
            11px;
        }

        .gds-ok {
          width:
            115px;

          padding:
            10px 0;
        }

        #gds-title {
          font-size:
            13px;

          letter-spacing:
            1.2px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* ==============================
     BUAT POPUP
  ============================== */

  async function createPopup() {

    if (
      popupCreated ||
      !canShowPopup() ||
      !document.body
    ) {
      return;
    }

    popupCreated = true;

    injectStyle();

    await preloadImages();

    /* cek ulang setelah preload */

    if (
      document.getElementById(POPUP_ID)
    ) {
      popupCreated = false;
      return;
    }

    const overlay =
      document.createElement("div");

    overlay.id =
      OVERLAY_ID;

    const popup =
      document.createElement("div");

    popup.id =
      POPUP_ID;

    popup.innerHTML = `

      <div id="gds-popup-box">

        <div
          id="gds-close"
          title="Tutup"
          role="button"
          aria-label="Tutup popup"
        >
          ✕
        </div>

        <button
          type="button"
          class="gds-nav"
          id="gds-prev"
          aria-label="Banner sebelumnya"
        >
          ‹
        </button>

        <div id="gds-image-stage">

          <img
            id="gds-popup-img"
            src="${IMG[0]}"
            alt="GADUNSLOT Banner 1"
          >

          <img
            id="gds-popup-img-next"
            src=""
            alt=""
            aria-hidden="true"
          >

        </div>

        <button
          type="button"
          class="gds-nav"
          id="gds-next"
          aria-label="Banner berikutnya"
        >
          ›
        </button>

        <div id="gds-dots"></div>

      </div>


      <div id="gds-title">
        GADUNSLOT • DIRGAHAYU INDONESIA
      </div>


      <div class="gds-gif-row">

        <div class="gds-gif-box">
          <img
            src="https://www.image2url.com/r2/default/gifs/1786256128549-3e23d647-4d73-47b1-b49b-3c85daf40fc3.gif"
            alt="GADUNSLOT GIF"
          >
        </div>

      </div>


      <div class="gds-btn-row">

        <a
          class="gds-btn"
          href="https://linkshortener.vip/gadunslot-livechat"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎁 CLAIM BONUS
        </a>

        <a
          class="gds-btn"
          href="../mobile/sport"
        >
          ⚽ SPORTSBOOK
        </a>

        <button
          type="button"
          class="gds-ok"
          id="gds-ok"
        >
          OK
        </button>

      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(popup);


    const sliderImage =
      document.getElementById(
        "gds-popup-img"
      );

    const nextSliderImage =
      document.getElementById(
        "gds-popup-img-next"
      );

    const dotsContainer =
      document.getElementById(
        "gds-dots"
      );


    /* ==============================
       DOT SLIDER
    ============================== */

    function renderDots() {

      dotsContainer.innerHTML = "";

      IMG.forEach(
        function (_, imageIndex) {

          const dot =
            document.createElement(
              "button"
            );

          dot.type =
            "button";

          dot.className =
            "gds-dot" +
            (
              imageIndex === currentIndex
                ? " active"
                : ""
            );

          dot.setAttribute(
            "aria-label",
            "Tampilkan banner " +
              (imageIndex + 1)
          );

          dot.addEventListener(
            "click",
            function () {

              changeSlide(
                imageIndex
              );

              resetSliderTimer();
            }
          );

          dotsContainer.appendChild(
            dot
          );
        }
      );
    }


    /* ==============================
       GANTI SLIDE
    ============================== */

    function changeSlide(newIndex) {

      if (
        changingSlide ||
        newIndex < 0 ||
        newIndex >= IMG.length ||
        newIndex === currentIndex
      ) {
        return;
      }

      changingSlide = true;

      nextSliderImage.classList.remove(
        "slide-rtl"
      );

      sliderImage.classList.remove(
        "slide-old-left"
      );

      nextSliderImage.src =
        IMG[newIndex];

      nextSliderImage.alt =
        "GADUNSLOT Banner " +
        (newIndex + 1);

      nextSliderImage.style.transition =
        "none";

      nextSliderImage.style.opacity =
        "0";

      nextSliderImage.style.transform =
        "translateX(100%)";

      void nextSliderImage.offsetWidth;

      nextSliderImage.style.transition =
        "";

      nextSliderImage.style.opacity =
        "";

      nextSliderImage.style.transform =
        "";

      sliderImage.classList.add(
        "slide-old-left"
      );

      nextSliderImage.classList.add(
        "slide-rtl"
      );

      let finished = false;

      function finishSlide() {

        if (finished) return;

        finished = true;

        nextSliderImage.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );

        currentIndex =
          newIndex;

        sliderImage.src =
          IMG[currentIndex];

        sliderImage.alt =
          "GADUNSLOT Banner " +
          (currentIndex + 1);

        sliderImage.classList.remove(
          "slide-old-left"
        );

        sliderImage.style.transition =
          "none";

        sliderImage.style.opacity =
          "1";

        sliderImage.style.transform =
          "translateX(0)";

        requestAnimationFrame(
          function () {

            requestAnimationFrame(
              function () {

                nextSliderImage.style.transition =
                  "none";

                nextSliderImage.classList.remove(
                  "slide-rtl"
                );

                nextSliderImage.style.opacity =
                  "0";

                nextSliderImage.style.transform =
                  "translateX(100%)";

                nextSliderImage.src =
                  "";

                nextSliderImage.alt =
                  "";

                requestAnimationFrame(
                  function () {

                    sliderImage.style.transition =
                      "";

                    sliderImage.style.opacity =
                      "";

                    sliderImage.style.transform =
                      "";

                    nextSliderImage.style.transition =
                      "";

                    nextSliderImage.style.opacity =
                      "";

                    nextSliderImage.style.transform =
                      "";

                    changingSlide =
                      false;
                  }
                );
              }
            );
          }
        );

        renderDots();
      }


      function handleTransitionEnd(
        event
      ) {

        if (
          event.target ===
            nextSliderImage &&
          event.propertyName ===
            "transform"
        ) {
          finishSlide();
        }
      }

      nextSliderImage.addEventListener(
        "transitionend",
        handleTransitionEnd
      );

      window.setTimeout(
        finishSlide,
        900
      );
    }


    function nextSlide() {

      const nextIndex =
        (
          currentIndex + 1
        ) % IMG.length;

      changeSlide(
        nextIndex
      );
    }


    function previousSlide() {

      const previousIndex =
        (
          currentIndex -
          1 +
          IMG.length
        ) % IMG.length;

      changeSlide(
        previousIndex
      );
    }


    function startSliderTimer() {

      clearInterval(
        sliderTimer
      );

      if (IMG.length <= 1) {
        return;
      }

      sliderTimer =
        setInterval(
          function () {

            nextSlide();

          },
          SLIDER_INTERVAL
        );
    }


    function resetSliderTimer() {
      startSliderTimer();
    }


    /* ==============================
       TUTUP POPUP
    ============================== */

    function closePopup() {

      clearInterval(
        sliderTimer
      );

      popup.classList.add(
        "pull-up"
      );

      overlay.classList.add(
        "fade-out"
      );

      try {

        localStorage.setItem(
          DELAY_KEY,
          String(Date.now())
        );

      } catch (error) {
        /* abaikan jika localStorage diblokir */
      }

      setTimeout(
        function () {

          popup.remove();
          overlay.remove();

          popupCreated =
            false;

        },
        760
      );
    }


    /* ==============================
       EVENT
    ============================== */

    document
      .getElementById("gds-prev")
      .addEventListener(
        "click",
        function () {

          previousSlide();
          resetSliderTimer();

        }
      );


    document
      .getElementById("gds-next")
      .addEventListener(
        "click",
        function () {

          nextSlide();
          resetSliderTimer();

        }
      );


    document
      .getElementById("gds-close")
      .addEventListener(
        "click",
        closePopup
      );


    document
      .getElementById("gds-ok")
      .addEventListener(
        "click",
        closePopup
      );


    /* klik background = tutup */

    overlay.addEventListener(
      "click",
      closePopup
    );


    /* ==============================
       START
    ============================== */

    renderDots();

    if (IMG.length > 1) {
      startSliderTimer();
    }
  }


  /* ==============================
     INITIALIZE
  ============================== */

  function initPopup() {

    if (!document.body) {
      return;
    }

    createPopup();
  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initPopup,
      {
        once: true
      }
    );

  } else {

    initPopup();

  }


  /* ==============================
     SUPPORT WEBSITE SPA
  ============================== */

  let lastPath =
    location.pathname;


  const observer =
    new MutationObserver(
      function () {

        if (
          location.pathname !==
          lastPath
        ) {

          lastPath =
            location.pathname;

          window.setTimeout(
            function () {

              if (
                !document.getElementById(
                  POPUP_ID
                )
              ) {

                createPopup();

              }

            },
            300
          );
        }
      }
    );


  observer.observe(
    document.documentElement,
    {
      childList: true,
      subtree: true
    }
  );

})();
