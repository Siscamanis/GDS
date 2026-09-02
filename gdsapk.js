/**
 * GADUNSLOT — Mini App Mobile Notification
 * Pure JavaScript Injector
 */

(function () {
  "use strict";

  /* ==============================
     CONFIG GADUNSLOT
  ============================== */

  var GDS_CONFIG = {
    image:
      "https://lh3.googleusercontent.com/d/13TskwJwScDxKXjdrb-k9ThYRWUBhMK0B",

    miniApp:
      "https://slot.gadunslot-miniapp.xyz/",

    dismissKey:
      "gds_miniapp_dismiss",

    mobileMaxWidth: 1024
  };


  /* ==============================
     CEK MOBILE
  ============================== */

  function isMobile() {
    return window.matchMedia(
      "(max-width:" + GDS_CONFIG.mobileMaxWidth + "px)"
    ).matches;
  }


  /* ==============================
     CEK PWA SUDAH TERPASANG
  ============================== */

  function isStandalone() {
    return (
      window.navigator.standalone === true ||
      window.matchMedia("(display-mode: standalone)").matches ||
      window.matchMedia("(display-mode: fullscreen)").matches
    );
  }


  /* ==============================
     CEK CLOSE HARI INI
  ============================== */

  function dismissedToday() {
    try {
      var saved =
        localStorage.getItem(GDS_CONFIG.dismissKey);

      if (!saved) return false;

      var savedDate =
        new Date(Number(saved));

      var now =
        new Date();

      return (
        savedDate.toDateString() ===
        now.toDateString()
      );

    } catch (e) {
      return false;
    }
  }


  /* ==============================
     SIMPAN CLOSE
  ============================== */

  function saveDismiss() {
    try {
      localStorage.setItem(
        GDS_CONFIG.dismissKey,
        String(Date.now())
      );
    } catch (e) {}
  }


  /* ==============================
     CSS
  ============================== */

  function injectStyle() {

    if (
      document.getElementById(
        "gds-miniapp-style"
      )
    ) {
      return;
    }


    var style =
      document.createElement("style");

    style.id =
      "gds-miniapp-style";


    style.textContent = `

      #gdsMiniAppNotif,
      #gdsMiniAppNotif * {
        box-sizing: border-box;
      }


      #gdsMiniAppNotif {

        position: relative;

        width: 100%;

        display: none;

        z-index: 2147483647;

        padding:
          calc(8px + env(safe-area-inset-top, 0px))
          10px
          8px;

        background:
          linear-gradient(
            135deg,
            rgba(2,22,10,.99),
            rgba(4,48,21,.99)
          );

        border-bottom:
          1px solid rgba(255,255,255,.08);

        box-shadow:
          0 5px 20px rgba(0,0,0,.35);

        font-family:
          Arial,
          Helvetica,
          sans-serif;

        overflow: hidden;
      }


      #gdsMiniAppNotif.gds-show {
        display: block;
      }


      .gds-mini-inner {

        display: flex;

        align-items: center;

        gap: 9px;

        width: 100%;

        position: relative;
      }


      /* LOGO */

      .gds-mini-logo {

        width: 48px;
        height: 48px;

        flex:
          0 0 48px;

        border-radius:
          11px;

        overflow: hidden;

        display: flex;

        justify-content: center;

        align-items: center;

        background:
          #071b0d;

        box-shadow:
          0 3px 10px rgba(0,0,0,.35);
      }


      .gds-mini-logo img {

        width: 100%;

        height: 100%;

        object-fit: contain;

        display: block;
      }


      /* TEXT */

      .gds-mini-text {

        flex: 1;

        min-width: 0;
      }


      .gds-mini-title {

        margin: 0 0 3px;

        color: #fff;

        font-size: 14px;

        font-weight: 800;

        line-height: 1.15;
      }


      .gds-mini-title span {

        color: #76ff9c;
      }


      .gds-mini-sub {

        margin: 0;

        color:
          rgba(255,255,255,.72);

        font-size: 11px;

        line-height: 1.2;

        white-space: nowrap;

        overflow: hidden;

        text-overflow: ellipsis;
      }


      /* ACTIONS */

      .gds-mini-actions {

        display: flex;

        align-items: center;

        gap: 7px;

        flex-shrink: 0;
      }


      /* RGB BORDER */

      .gds-rgb-border {

        position: relative;

        padding: 2px;

        overflow: hidden;

        border-radius: 10px;

        isolation: isolate;
      }


      .gds-rgb-border::before {

        content: "";

        position: absolute;

        width: 180%;

        height: 350%;

        left: 50%;

        top: 50%;

        background:
          conic-gradient(
            #00ff66,
            #ffff00,
            #ff6600,
            #ff0066,
            #cc00ff,
            #0088ff,
            #00ffff,
            #00ff66
          );

        transform:
          translate(-50%,-50%);

        animation:
          gdsRGBRotate
          1.7s
          linear
          infinite;

        z-index: -2;
      }


      .gds-rgb-border::after {

        content: "";

        position: absolute;

        inset: 2px;

        border-radius: 8px;

        background:
          #063417;

        z-index: -1;
      }


      @keyframes gdsRGBRotate {

        from {
          transform:
            translate(-50%,-50%)
            rotate(0deg);
        }

        to {
          transform:
            translate(-50%,-50%)
            rotate(360deg);
        }

      }


      /* INSTALL */

      .gds-mini-install {

        height: 34px;

        padding: 0 12px;

        display: flex;

        align-items: center;

        justify-content: center;

        gap: 4px;

        border-radius: 8px;

        text-decoration: none !important;

        color: white !important;

        background:
          linear-gradient(
            180deg,
            #18ae50,
            #08762f
          );

        font-size: 11px;

        font-weight: 800;

        box-shadow:
          inset
          0 1px 0
          rgba(255,255,255,.25);

        transition:
          transform .15s ease;
      }


      .gds-mini-install:active {

        transform:
          scale(.94);
      }


      .gds-mini-install svg {

        width: 15px;

        height: 15px;
      }


      /* CLOSE */

      .gds-mini-close {

        border: 0;

        width: 28px;

        height: 28px;

        flex:
          0 0 28px;

        border-radius: 50%;

        background:
          rgba(255,255,255,.07);

        color:
          rgba(255,255,255,.75);

        font-size: 20px;

        display: flex;

        justify-content: center;

        align-items: center;

        cursor: pointer;

        padding: 0;
      }


      .gds-mini-close:active {

        background:
          rgba(255,255,255,.18);

        color: white;
      }


      /* SMALL PHONE */

      @media(max-width:360px) {

        .gds-mini-logo {

          width: 43px;

          height: 43px;

          flex-basis: 43px;
        }


        .gds-mini-title {

          font-size: 12px;
        }


        .gds-mini-sub {

          font-size: 10px;

          max-width: 120px;
        }


        .gds-mini-install {

          height: 32px;

          padding: 0 9px;

          font-size: 10px;
        }

      }

    `;


    (
      document.head ||
      document.documentElement
    ).appendChild(style);
  }


  /* ==============================
     HTML
  ============================== */

  function createNotification() {

    if (
      document.getElementById(
        "gdsMiniAppNotif"
      )
    ) {
      return;
    }


    var notification =
      document.createElement("div");


    notification.id =
      "gdsMiniAppNotif";


    notification.innerHTML = `

      <div class="gds-mini-inner">


        <div class="gds-mini-logo">

          <img
            src="${GDS_CONFIG.image}"
            alt="GADUNSLOT"
            width="48"
            height="48"
          >

        </div>


        <div class="gds-mini-text">

          <p class="gds-mini-title">

            Install

            <span>
              GADUNSLOT
            </span>

          </p>


          <p class="gds-mini-sub">

            Akses cepat langsung dari layar utama HP

          </p>

        </div>


        <div class="gds-mini-actions">


          <div class="gds-rgb-border">


            <a

              href="${GDS_CONFIG.miniApp}"

              class="gds-mini-install"

              target="_blank"

              rel="noopener noreferrer"

            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >

                <path d="M12 3v12"></path>

                <path d="M7 11l5 5 5-5"></path>

                <path d="M4 21h16"></path>

              </svg>

              INSTALL

            </a>


          </div>


          <button
            type="button"
            class="gds-mini-close"
            aria-label="Tutup"
          >
            ×
          </button>


        </div>


      </div>

    `;


    /*
      POSISI:
      dipasang paling atas BODY
      agar mengikuti model
      notification bar mobile
    */

    if (document.body.firstChild) {

      document.body.insertBefore(
        notification,
        document.body.firstChild
      );

    } else {

      document.body.appendChild(
        notification
      );

    }


    var closeButton =
      notification.querySelector(
        ".gds-mini-close"
      );


    closeButton.addEventListener(
      "click",
      function () {

        saveDismiss();

        notification.classList.remove(
          "gds-show"
        );

      }
    );


    setTimeout(
      function () {

        notification.classList.add(
          "gds-show"
        );

      },
      250
    );

  }


  /* ==============================
     INIT
  ============================== */

  function initGadunMiniApp() {

    /*
      MOBILE SAJA
    */

    if (!isMobile()) {
      return;
    }


    /*
      Jika dibuka dari PWA,
      jangan munculkan install bar.
    */

    if (isStandalone()) {
      return;
    }


    /*
      Sudah di-close hari ini
    */

    if (dismissedToday()) {
      return;
    }


    injectStyle();

    createNotification();

  }


  /* ==============================
     BOOT
  ============================== */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initGadunMiniApp
    );

  } else {

    initGadunMiniApp();

  }

})();
