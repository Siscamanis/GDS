/**
 * ============================================================
 * GADUNSLOT Miniapp
 */

(function () {
  "use strict";

  /* ==========================================================
     CONFIG
  ========================================================== */

  var GDS_CONFIG = {

    logo:
      "https://lh3.googleusercontent.com/d/13TskwJwScDxKXjdrb-k9ThYRWUBhMK0B",

    miniApp:
      "https://slot.gadunslot-miniapp.xyz/",

    dismissKey:
      "gds_miniapp_header_dismiss",

    mobileWidth:
      1024

  };


  /* ==========================================================
     MOBILE CHECK
  ========================================================== */

  function gdsIsMobile() {

    return window.matchMedia(
      "(max-width:" +
      GDS_CONFIG.mobileWidth +
      "px)"
    ).matches;

  }


  /* ==========================================================
     STANDALONE CHECK
  ========================================================== */

  function gdsIsStandalone() {

    return (

      window.navigator.standalone === true ||

      window.matchMedia(
        "(display-mode: standalone)"
      ).matches ||

      window.matchMedia(
        "(display-mode: fullscreen)"
      ).matches

    );

  }


  /* ==========================================================
     CLOSE TODAY CHECK
  ========================================================== */

  function gdsDismissedToday() {

    try {

      var saved =
        localStorage.getItem(
          GDS_CONFIG.dismissKey
        );


      if (!saved) {
        return false;
      }


      var savedDate =
        new Date(
          Number(saved)
        );


      var today =
        new Date();


      return (
        savedDate.toDateString() ===
        today.toDateString()
      );

    }

    catch (err) {

      return false;

    }

  }


  /* ==========================================================
     SAVE CLOSE
  ========================================================== */

  function gdsSaveDismiss() {

    try {

      localStorage.setItem(
        GDS_CONFIG.dismissKey,
        String(Date.now())
      );

    }

    catch (err) {}

  }


  /* ==========================================================
     CSS
  ========================================================== */

  function gdsInjectStyle() {

    if (
      document.getElementById(
        "gds-miniapp-header-style"
      )
    ) {
      return;
    }


    var style =
      document.createElement("style");


    style.id =
      "gds-miniapp-header-style";


    style.textContent = `

/* ============================================================
   GADUNSLOT MINI APP HEADER
============================================================ */

#download_apk_notification[data-gds-miniapp="1"] {

  position: relative !important;

  display: flex !important;

  align-items: center !important;

  width: 100% !important;

  min-height: 62px !important;

  margin: 0 !important;

  padding:
    calc(7px + env(safe-area-inset-top, 0px))
    10px
    7px !important;

  border: 0 !important;

  border-radius: 0 !important;

  background:
    linear-gradient(
      110deg,
      #03170b 0%,
      #073619 48%,
      #062811 100%
    ) !important;

  box-shadow:
    0 4px 14px
    rgba(0,0,0,.32) !important;

  overflow: hidden !important;

  z-index: 99999 !important;

  font-family:
    Arial,
    Helvetica,
    sans-serif !important;

}


/* LIGHT EFFECT */

#download_apk_notification[data-gds-miniapp="1"]::before {

  content: "";

  position: absolute;

  width: 150px;

  height: 90px;

  left: -30px;

  top: -35px;

  border-radius: 50%;

  background:
    rgba(39,255,105,.13);

  filter:
    blur(30px);

  pointer-events: none;

}


/* ============================================================
   WRAPPER
============================================================ */

#gdsMiniAppHeader {

  position: relative;

  display: flex;

  align-items: center;

  width: 100%;

  gap: 9px;

  z-index: 2;

}


/* ============================================================
   LOGO
============================================================ */

.gds-header-logo {

  width: 48px;

  height: 48px;

  flex:
    0 0 48px;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: hidden;

  border-radius: 11px;

  background:
    linear-gradient(
      145deg,
      #104e24,
      #041b0c
    );

  box-shadow:
    0 3px 10px
    rgba(0,0,0,.35),
    inset 0 0 0 1px
    rgba(255,255,255,.09);

}


.gds-header-logo img {

  display: block;

  width: 100%;

  height: 100%;

  object-fit: contain;

}


/* ============================================================
   TEXT
============================================================ */

.gds-header-copy {

  flex: 1;

  min-width: 0;

}


.gds-header-title {

  display: block;

  margin: 0 0 3px !important;

  padding: 0 !important;

  color: #ffffff !important;

  font-size: 14px !important;

  font-weight: 800 !important;

  line-height: 1.15 !important;

  white-space: nowrap;

}


.gds-header-title strong {

  color:
    #78ff9d !important;

}


.gds-header-sub {

  display: block;

  margin: 0 !important;

  padding: 0 !important;

  color:
    rgba(255,255,255,.70) !important;

  font-size: 10.5px !important;

  font-weight: 400 !important;

  line-height: 1.25 !important;

  overflow: hidden;

  white-space: nowrap;

  text-overflow: ellipsis;

}


/* ============================================================
   ACTION
============================================================ */

.gds-header-actions {

  display: flex;

  align-items: center;

  gap: 6px;

  flex-shrink: 0;

}


/* ============================================================
   RGB FRAME
============================================================ */

.gds-install-rgb {

  position: relative;

  padding: 2px;

  border-radius: 10px;

  overflow: hidden;

  isolation: isolate;

  box-shadow:
    0 0 9px
    rgba(0,255,100,.18);

}


.gds-install-rgb::before {

  content: "";

  position: absolute;

  width: 200%;

  height: 400%;

  top: 50%;

  left: 50%;

  background:

    conic-gradient(

      from 0deg,

      #00ff59,

      #cfff00,

      #ffe600,

      #ff7600,

      #ff0059,

      #c000ff,

      #006cff,

      #00eaff,

      #00ff59

    );

  transform:
    translate(-50%,-50%)
    rotate(0deg);

  animation:
    gdsHeaderRgb
    1.6s
    linear
    infinite;

  z-index: -2;

}


.gds-install-rgb::after {

  content: "";

  position: absolute;

  inset: 2px;

  border-radius: 8px;

  background:
    #07572a;

  z-index: -1;

}


@keyframes gdsHeaderRgb {

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


/* ============================================================
   INSTALL BUTTON
============================================================ */

.gds-header-install {

  position: relative;

  z-index: 5;

  display: flex !important;

  align-items: center !important;

  justify-content: center !important;

  gap: 4px;

  height: 34px;

  min-width: 77px;

  padding:
    0 10px !important;

  margin: 0 !important;

  border: 0 !important;

  border-radius:
    8px !important;

  background:
    linear-gradient(
      180deg,
      #1ab655,
      #08772f
    ) !important;

  box-shadow:
    inset
    0 1px 0
    rgba(255,255,255,.25);

  color:
    #ffffff !important;

  text-decoration:
    none !important;

  font-size:
    10.5px !important;

  line-height:
    1 !important;

  font-weight:
    800 !important;

  cursor: pointer;

  -webkit-tap-highlight-color:
    transparent;

  transition:
    transform .13s ease;

}


.gds-header-install:active {

  transform:
    scale(.94);

}


.gds-header-install svg {

  width: 14px;

  height: 14px;

  flex-shrink: 0;

}


/* ============================================================
   CLOSE
============================================================ */

.gds-header-close {

  appearance: none;

  -webkit-appearance: none;

  width: 27px;

  height: 27px;

  flex:
    0 0 27px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin: 0 !important;

  padding: 0 !important;

  border:
    0 !important;

  border-radius:
    50%;

  background:
    rgba(255,255,255,.07);

  color:
    rgba(255,255,255,.72);

  font-size:
    19px;

  line-height:
    1;

  cursor: pointer;

  -webkit-tap-highlight-color:
    transparent;

}


.gds-header-close:active {

  background:
    rgba(255,255,255,.16);

  color:
    #ffffff;

}


/* ============================================================
   SMALL MOBILE
============================================================ */

@media(max-width: 375px) {

  #download_apk_notification[data-gds-miniapp="1"] {

    padding:
      6px 7px !important;

  }


  .gds-header-logo {

    width: 43px;

    height: 43px;

    flex-basis:
      43px;

  }


  .gds-header-title {

    font-size:
      12px !important;

  }


  .gds-header-sub {

    max-width:
      120px;

    font-size:
      9.5px !important;

  }


  .gds-header-install {

    height:
      31px;

    min-width:
      67px;

    padding:
      0 7px !important;

    font-size:
      9.5px !important;

  }


}


/* ============================================================
   DESKTOP SAFETY
============================================================ */

@media(min-width: 1025px) {

  #download_apk_notification[data-gds-miniapp="1"] {

    display:
      none !important;

  }

}

    `;


    (
      document.head ||
      document.documentElement
    ).appendChild(style);

  }


  /* ==========================================================
     REPLACE ORIGINAL APK
  ========================================================== */

  function gdsReplaceOriginalApp() {

    /*
     * Element bawaan website:
     *
     * #download_apk_notification
     *
     * Kita TIDAK membuat element baru.
     * Kita mengganti isi element bawaan.
     */

    var original =
      document.getElementById(
        "download_apk_notification"
      );


    if (!original) {

      return false;

    }


    /*
     * Jika sudah diubah,
     * jangan buat ulang.
     */

    if (
      original.getAttribute(
        "data-gds-miniapp"
      ) === "1"
    ) {

      return true;

    }


    /*
     * MOBILE ONLY
     */

    if (!gdsIsMobile()) {

      return false;

    }


    /*
     * Kalau sudah dibuka sebagai PWA,
     * sembunyikan aplikasi bawaan juga.
     */

    if (gdsIsStandalone()) {

      original.style.setProperty(
        "display",
        "none",
        "important"
      );

      return true;

    }


    /*
     * Jika ditutup hari ini,
     * sembunyikan APK default.
     */

    if (gdsDismissedToday()) {

      original.style.setProperty(
        "display",
        "none",
        "important"
      );

      return true;

    }


    /*
     * Tandai sebagai GDS
     */

    original.setAttribute(
      "data-gds-miniapp",
      "1"
    );


    /*
     * HAPUS CLASS BAWAAN
     * supaya CSS APK lama tidak ikut campur.
     */

    original.className =
      "gds-miniapp-replaced";


    /*
     * TIMPA HTML APK BAWAAN
     */

    original.innerHTML = `

<div id="gdsMiniAppHeader">


  <div class="gds-header-logo">

    <img

      src="${GDS_CONFIG.logo}"

      alt="GADUNSLOT"

      width="48"

      height="48"

    >

  </div>


  <div class="gds-header-copy">


    <span class="gds-header-title">

      Install

      <strong>
        GADUNSLOT
      </strong>

    </span>


    <span class="gds-header-sub">

      Akses cepat langsung dari layar utama HP

    </span>


  </div>


  <div class="gds-header-actions">


    <div class="gds-install-rgb">


      <a

        href="${GDS_CONFIG.miniApp}"

        class="gds-header-install"

        target="_blank"

        rel="noopener noreferrer"

        aria-label="Install GADUNSLOT Mini App"

      >


        <svg

          viewBox="0 0 24 24"

          fill="none"

          stroke="currentColor"

          stroke-width="2.4"

          stroke-linecap="round"

          stroke-linejoin="round"

          aria-hidden="true"

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

      class="gds-header-close"

      aria-label="Tutup"

    >

      ×

    </button>


  </div>


</div>

    `;


    /*
     * FORCE DISPLAY
     */

    original.style.removeProperty(
      "display"
    );


    /*
     * CLOSE BUTTON
     */

    var closeBtn =
      original.querySelector(
        ".gds-header-close"
      );


    if (closeBtn) {

      closeBtn.addEventListener(
        "click",
        function (event) {

          event.preventDefault();

          event.stopPropagation();


          gdsSaveDismiss();


          original.style.setProperty(
            "display",
            "none",
            "important"
          );

        }
      );

    }


    return true;

  }


  /* ==========================================================
     INIT
  ========================================================== */

  function gdsInit() {

    if (!gdsIsMobile()) {

      return;

    }


    gdsInjectStyle();


    /*
     * Coba langsung.
     */

    gdsReplaceOriginalApp();


    /*
     * Website bisa React / AJAX / hydration.
     *
     * Kalau website membuat ulang
     * APK default, script GDS akan
     * timpa lagi.
     */

    var observer =
      new MutationObserver(
        function () {

          var apk =
            document.getElementById(
              "download_apk_notification"
            );


          if (
            apk &&
            apk.getAttribute(
              "data-gds-miniapp"
            ) !== "1"
          ) {

            gdsReplaceOriginalApp();

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

  }


  /* ==========================================================
     BOOT
  ========================================================== */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      gdsInit
    );

  }

  else {

    gdsInit();

  }

})();
