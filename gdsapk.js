/**
 * ============================================================
 * GADUNSLOT — MINI APP HEADER REPLACER V2
 * ============================================================
 * Mobile First
 * Replace APK Default
 * No Delay
 * No Tracker
 * No Analytics
 * No External Competitor Link
 * ============================================================
 */

(function () {
  "use strict";

  var CONFIG = {
    brand: "GADUNSLOT",

    logo:
      "https://lh3.googleusercontent.com/d/13TskwJwScDxKXjdrb-k9ThYRWUBhMK0B",

    miniApp:
      "https://slot.gadunslot-miniapp.xyz/",

    dismissKey:
      "gds_miniapp_dismiss_today",

    mobileWidth:
      1024
  };


  /* ==========================================================
     PRE-HIDE
     Jalankan SEKETIKA script dibaca.
     APK asli tidak sempat kelihatan.
  ========================================================== */

  (function injectPreHide() {

    if (
      document.getElementById(
        "gds-miniapp-prehide"
      )
    ) {
      return;
    }

    var style =
      document.createElement("style");

    style.id =
      "gds-miniapp-prehide";

    style.textContent = `

      @media (max-width:${CONFIG.mobileWidth}px) {

        #download_apk_notification:not(
          [data-gds-miniapp="1"]
        ) {
          display:none !important;
        }

      }

    `;

    (
      document.head ||
      document.documentElement
    ).appendChild(style);

  })();


  /* ==========================================================
     DEVICE
  ========================================================== */

  function isMobile() {

    return window.matchMedia(
      "(max-width:" +
      CONFIG.mobileWidth +
      "px)"
    ).matches;

  }


  function isStandalone() {

    return (

      window.navigator.standalone === true ||

      window.matchMedia(
        "(display-mode:standalone)"
      ).matches ||

      window.matchMedia(
        "(display-mode:fullscreen)"
      ).matches

    );

  }


  /* ==========================================================
     DISMISS
  ========================================================== */

  function dismissedToday() {

    try {

      var saved =
        localStorage.getItem(
          CONFIG.dismissKey
        );

      if (!saved) {
        return false;
      }

      return (
        new Date(
          Number(saved)
        ).toDateString() ===
        new Date().toDateString()
      );

    }

    catch (e) {

      return false;

    }

  }


  function saveDismiss() {

    try {

      localStorage.setItem(
        CONFIG.dismissKey,
        String(Date.now())
      );

    }

    catch (e) {}

  }


  /* ==========================================================
     HILANGKAN SPACE BAWAAN WEBSITE
  ========================================================== */

  function clearOriginalLayoutSpace() {

    if (!document.body) {
      return;
    }

    /*
     * INI BAGIAN PENTING.
     *
     * Website asli menggunakan class ini
     * untuk menyediakan space notification.
     *
     * Kalau hanya display:none,
     * space bisa tetap tertinggal.
     */

    document.body.classList.remove(
      "has-apk-download-notification"
    );

  }


  function collapseNotification(el) {

    if (!el) {
      return;
    }

    el.style.setProperty(
      "display",
      "none",
      "important"
    );

    el.style.setProperty(
      "height",
      "0",
      "important"
    );

    el.style.setProperty(
      "min-height",
      "0",
      "important"
    );

    el.style.setProperty(
      "max-height",
      "0",
      "important"
    );

    el.style.setProperty(
      "padding",
      "0",
      "important"
    );

    el.style.setProperty(
      "margin",
      "0",
      "important"
    );

    el.style.setProperty(
      "border",
      "0",
      "important"
    );

    el.style.setProperty(
      "overflow",
      "hidden",
      "important"
    );

    clearOriginalLayoutSpace();

  }


  /* ==========================================================
     STYLE
  ========================================================== */

  function injectMainStyle() {

    if (
      document.getElementById(
        "gds-miniapp-main-style"
      )
    ) {
      return;
    }


    var style =
      document.createElement("style");


    style.id =
      "gds-miniapp-main-style";


    style.textContent = `

/* ==========================================================
   ROOT — MENGGUNAKAN CONTAINER APK ASLI
========================================================== */

#download_apk_notification[
  data-gds-miniapp="1"
] {

  display:flex !important;

  align-items:center !important;

  position:relative !important;

  width:100% !important;

  min-height:60px !important;

  height:auto !important;

  max-height:none !important;

  margin:0 !important;

  padding:
    calc(
      7px +
      env(
        safe-area-inset-top,
        0px
      )
    )
    10px
    7px
    !important;

  border:0 !important;

  overflow:hidden !important;

  border-radius:0 !important;

  box-sizing:border-box !important;

  font-family:
    Arial,
    Helvetica,
    sans-serif
    !important;

  background:
    linear-gradient(
      110deg,
      #020f07 0%,
      #07371a 48%,
      #041f0e 100%
    )
    !important;

  box-shadow:
    0 4px 14px
    rgba(0,0,0,.30)
    !important;

  z-index:999999 !important;

}


/* GLOW */

#download_apk_notification[
  data-gds-miniapp="1"
]::before {

  content:"";

  position:absolute;

  width:150px;

  height:100px;

  left:-30px;

  top:-45px;

  border-radius:50%;

  background:
    rgba(
      31,
      255,
      103,
      .14
    );

  filter:
    blur(30px);

  pointer-events:none;

}


/* ==========================================================
   INNER
========================================================== */

#gdsMiniAppHeader {

  position:relative;

  z-index:2;

  width:100%;

  display:flex;

  align-items:center;

  gap:9px;

}


/* ==========================================================
   LOGO
========================================================== */

.gds-mini-logo {

  width:47px;

  height:47px;

  flex:
    0 0 47px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:11px;

  overflow:hidden;

  background:
    #06180b;

  box-shadow:

    0 3px 10px
    rgba(
      0,
      0,
      0,
      .35
    ),

    inset
    0 0 0 1px
    rgba(
      255,
      255,
      255,
      .08
    );

}


.gds-mini-logo img {

  width:100%;

  height:100%;

  display:block;

  object-fit:contain;

}


/* ==========================================================
   COPY
========================================================== */

.gds-mini-copy {

  min-width:0;

  flex:1;

}


.gds-mini-title {

  display:block;

  margin:0 0 3px !important;

  padding:0 !important;

  font-size:13.5px !important;

  font-weight:800 !important;

  line-height:1.15 !important;

  color:#fff !important;

  white-space:nowrap;

}


.gds-mini-title strong {

  color:#77ff9d;

}


.gds-mini-desc {

  display:block;

  margin:0 !important;

  padding:0 !important;

  font-size:10px !important;

  line-height:1.25 !important;

  font-weight:400 !important;

  color:
    rgba(
      255,
      255,
      255,
      .72
    )
    !important;

  overflow:hidden;

  text-overflow:ellipsis;

  white-space:nowrap;

}


/* ==========================================================
   ACTIONS
========================================================== */

.gds-mini-actions {

  display:flex;

  align-items:center;

  flex-shrink:0;

  gap:6px;

}


/* ==========================================================
   RGB ROTATE
========================================================== */

.gds-mini-rgb {

  position:relative;

  padding:2px;

  overflow:hidden;

  border-radius:10px;

  isolation:isolate;

}


.gds-mini-rgb::before {

  content:"";

  position:absolute;

  width:220%;

  height:400%;

  top:50%;

  left:50%;

  background:

    conic-gradient(

      #00ff66,

      #eaff00,

      #ffd900,

      #ff6a00,

      #ff006a,

      #bb00ff,

      #006eff,

      #00eaff,

      #00ff66

    );

  transform:
    translate(
      -50%,
      -50%
    )
    rotate(0deg);

  animation:
    gdsRGBSpin
    1.6s
    linear
    infinite;

  z-index:-2;

}


.gds-mini-rgb::after {

  content:"";

  position:absolute;

  inset:2px;

  border-radius:8px;

  background:
    #076b31;

  z-index:-1;

}


@keyframes gdsRGBSpin {

  from {

    transform:
      translate(
        -50%,
        -50%
      )
      rotate(0deg);

  }

  to {

    transform:
      translate(
        -50%,
        -50%
      )
      rotate(360deg);

  }

}


/* ==========================================================
   INSTALL
========================================================== */

.gds-mini-install {

  display:flex !important;

  align-items:center !important;

  justify-content:center !important;

  gap:4px;

  height:33px;

  min-width:75px;

  margin:0 !important;

  padding:
    0 9px !important;

  border:0 !important;

  border-radius:8px !important;

  background:

    linear-gradient(
      180deg,
      #19b853,
      #08752f
    )
    !important;

  color:#fff !important;

  text-decoration:none !important;

  font-size:10px !important;

  line-height:1 !important;

  font-weight:800 !important;

  box-shadow:

    inset
    0 1px 0
    rgba(
      255,
      255,
      255,
      .24
    );

  cursor:pointer;

  -webkit-tap-highlight-color:
    transparent;

}


.gds-mini-install:active {

  transform:
    scale(.95);

}


.gds-mini-install svg {

  width:14px;

  height:14px;

}


/* ==========================================================
   CLOSE
========================================================== */

.gds-mini-close {

  width:27px;

  height:27px;

  flex:
    0 0 27px;

  display:flex;

  align-items:center;

  justify-content:center;

  margin:0 !important;

  padding:0 !important;

  border:0 !important;

  border-radius:50%;

  background:
    rgba(
      255,
      255,
      255,
      .07
    );

  color:
    rgba(
      255,
      255,
      255,
      .75
    );

  font-size:19px;

  line-height:1;

  cursor:pointer;

}


/* ==========================================================
   SMALL PHONE
========================================================== */

@media(max-width:375px) {

  #download_apk_notification[
    data-gds-miniapp="1"
  ] {

    padding:
      6px 7px
      !important;

  }


  .gds-mini-logo {

    width:42px;

    height:42px;

    flex-basis:42px;

  }


  .gds-mini-title {

    font-size:
      12px !important;

  }


  .gds-mini-desc {

    max-width:110px;

    font-size:
      9px !important;

  }


  .gds-mini-install {

    height:31px;

    min-width:67px;

    padding:
      0 7px
      !important;

    font-size:
      9px !important;

  }

}


/* ==========================================================
   DESKTOP
========================================================== */

@media(min-width:1025px) {

  #download_apk_notification[
    data-gds-miniapp="1"
  ] {

    display:none !important;

  }

}

    `;


    (
      document.head ||
      document.documentElement
    ).appendChild(style);

  }


  /* ==========================================================
     REPLACE
  ========================================================== */

  function replaceDefaultApp() {

    if (!isMobile()) {
      return false;
    }


    var el =
      document.getElementById(
        "download_apk_notification"
      );


    if (!el) {
      return false;
    }


    /*
     * Kalau sudah install PWA:
     * sembunyikan notification total.
     */

    if (isStandalone()) {

      collapseNotification(el);

      return true;

    }


    /*
     * Kalau member sudah close hari ini:
     * tetap sembunyikan dan PASTIKAN
     * tidak ada blank space.
     */

    if (dismissedToday()) {

      collapseNotification(el);

      return true;

    }


    /*
     * Kalau sudah berhasil replace,
     * tidak perlu replace ulang.
     */

    if (
      el.getAttribute(
        "data-gds-miniapp"
      ) === "1"
    ) {

      return true;

    }


    injectMainStyle();


    /*
     * PERTAHANKAN CLASS APK BAWAAN.
     *
     * Jangan className = ...
     *
     * Dengan cara ini struktur header
     * tetap mengikuti sistem website.
     */

    el.classList.add(
      "gds-miniapp-replaced"
    );


    el.setAttribute(
      "data-gds-miniapp",
      "1"
    );


    /*
     * Bersihkan kemungkinan style
     * dari proses hide sebelumnya.
     */

    el.style.removeProperty(
      "display"
    );

    el.style.removeProperty(
      "height"
    );

    el.style.removeProperty(
      "min-height"
    );

    el.style.removeProperty(
      "max-height"
    );

    el.style.removeProperty(
      "padding"
    );

    el.style.removeProperty(
      "margin"
    );

    el.style.removeProperty(
      "overflow"
    );


    /*
     * TIMPA APK DEFAULT
     */

    el.innerHTML = `

<div id="gdsMiniAppHeader">


  <div class="gds-mini-logo">

    <img

      src="${CONFIG.logo}"

      alt="GADUNSLOT"

      width="47"

      height="47"

    >

  </div>


  <div class="gds-mini-copy">


    <span class="gds-mini-title">

      Install

      <strong>
        GADUNSLOT
      </strong>

    </span>


    <span class="gds-mini-desc">

      Akses cepat dari layar utama HP

    </span>


    <!--
      Dipertahankan ID-nya supaya
      kompatibel dengan struktur default.
    -->

    <span

      id="dont_show_again_today"

      style="display:none"

    >

      Jangan tampilkan lagi hari ini

    </span>


  </div>


  <div class="gds-mini-actions">


    <div class="gds-mini-rgb">


      <a

        href="${CONFIG.miniApp}"

        class="
          download-btn
          gds-mini-install
        "

        target="_blank"

        rel="noopener noreferrer"

        aria-label="
          Install GADUNSLOT Mini App
        "

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

          <path
            d="M12 3v12"
          ></path>

          <path
            d="M7 11l5 5 5-5"
          ></path>

          <path
            d="M4 21h16"
          ></path>

        </svg>


        INSTALL


      </a>


    </div>


    <!--
      ID CLOSE BAWAAN DIPERTAHANKAN
    -->

    <span

      id="
        close_download_apk_notification
      "

      class="
        btn-close
        float-end
        gds-mini-close
      "

      role="button"

      aria-label="Tutup"

    >

      ×

    </span>


  </div>


</div>

    `;


    /*
     * CLOSE CUSTOM
     *
     * Ini menjamin space ikut hilang
     * walaupun handler website asli
     * tidak bekerja.
     */

    var close =
      el.querySelector(
        "#close_download_apk_notification"
      );


    if (close) {

      close.addEventListener(

        "click",

        function (event) {

          event.preventDefault();

          event.stopPropagation();


          saveDismiss();


          collapseNotification(
            el
          );

        },

        true

      );

    }


    return true;

  }


  /* ==========================================================
     WATCH DOM TANPA DELAY
  ========================================================== */

  function watchImmediately() {

    /*
     * Kalau element sudah ada,
     * langsung replace sekarang.
     */

    replaceDefaultApp();


    /*
     * Kalau HTML website belum sampai
     * ke banner APK, MutationObserver
     * menangkap saat elemen masuk DOM.
     *
     * Tidak ada setTimeout.
     */

    var observer =
      new MutationObserver(
        function () {

          var el =
            document.getElementById(
              "download_apk_notification"
            );


          if (!el) {
            return;
          }


          /*
           * Kalau close hari ini,
           * cegah website membuka lagi.
           */

          if (
            dismissedToday() ||
            isStandalone()
          ) {

            collapseNotification(
              el
            );

            return;

          }


          /*
           * Jika website render ulang APK,
           * timpa lagi langsung.
           */

          if (
            el.getAttribute(
              "data-gds-miniapp"
            ) !== "1"
          ) {

            replaceDefaultApp();

          }

        }
      );


    observer.observe(

      document.documentElement,

      {
        childList:true,
        subtree:true,
        attributes:true,
        attributeFilter:[
          "class"
        ]
      }

    );

  }


  /*
   * LANGSUNG jalan.
   *
   * Tidak:
   * - DOMContentLoaded delay
   * - window.load
   * - setTimeout
   */

  watchImmediately();


  /*
   * Backup untuk halaman
   * yang kembali dari cache browser.
   */

  window.addEventListener(
    "pageshow",
    replaceDefaultApp
  );

})();
