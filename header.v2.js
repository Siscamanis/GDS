"use strict";

(function () {
    var STYLE_ID = "gds-header-premium-v7";
    var MIRROR_CLASS = "gds-premium-mirror";

    /*
     * Hapus versi style lama agar tidak bentrok.
     */
    [
        "gds-header-rain-style-v3",
        "gds-header-rain-style-v4",
        "gds-header-premium-style-v5",
        "gds-mirror-fix-v6"
    ].forEach(function (id) {
        var oldStyle = document.getElementById(id);

        if (oldStyle) {
            oldStyle.remove();
        }
    });

    if (document.getElementById(STYLE_ID)) return;

    var CSS = `
/* =====================================================
   GADUNSLOT — PREMIUM HEADER V7
   Rain + Mirror Sweep + Logo Glow + Gold Border
===================================================== */

.site-header {
    position: relative !important;
    isolation: isolate !important;
    overflow: visible !important;

    --gds-green: #00e676;
    --gds-emerald: #008f4c;
    --gds-gold: #dfba4c;
    --gds-gold-light: #ffdc70;

    background-color: #020a06 !important;

    background-image:
        radial-gradient(
            ellipse at 50% 120%,
            rgba(0, 143, 76, 0.15),
            transparent 52%
        ),
        linear-gradient(
            90deg,
            rgba(0, 230, 118, 0.07),
            rgba(0, 0, 0, 0.15) 50%,
            rgba(223, 186, 76, 0.07)
        ) !important;

    border-bottom: 1px solid rgba(223, 186, 76, 0.42);

    box-shadow:
        0 5px 18px rgba(0, 0, 0, 0.44),
        0 1px 7px rgba(223, 186, 76, 0.14);

    animation: gdsHeaderBorderGlow 4s ease-in-out infinite;
}

/* =====================================================
   HUJAN HIJAU DAN EMAS
===================================================== */

.site-header::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;

    background-image:
        radial-gradient(
            2px 48px at 0 80px,
            var(--gds-green),
            transparent 75%
        ),
        radial-gradient(
            2px 48px at 160px 80px,
            var(--gds-green),
            transparent 75%
        ),
        radial-gradient(
            1.4px 1.4px at 80px 55px,
            var(--gds-gold) 100%,
            transparent 150%
        ),
        radial-gradient(
            2px 58px at 20px 25px,
            var(--gds-emerald),
            transparent 75%
        ),
        radial-gradient(
            2px 58px at 200px 25px,
            var(--gds-emerald),
            transparent 75%
        ),
        radial-gradient(
            1.5px 42px at 45px 70px,
            var(--gds-gold),
            transparent 75%
        ),
        radial-gradient(
            1.5px 42px at 245px 70px,
            var(--gds-gold),
            transparent 75%
        );

    background-size:
        160px 135px,
        160px 135px,
        160px 135px,
        180px 155px,
        180px 155px,
        200px 145px,
        200px 145px;

    opacity: 0.68;
    filter: brightness(1.08);
    will-change: background-position;
    animation: gdsHeaderRain 12s linear infinite;
}

/* =====================================================
   TEKSTUR GELAP PREMIUM
===================================================== */

.site-header::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;

    background-image:
        radial-gradient(
            circle,
            transparent 0 1.5px,
            rgba(0, 12, 6, 0.42) 2px
        ),
        linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.025),
            transparent 40%,
            rgba(0, 0, 0, 0.18)
        );

    background-size:
        7px 7px,
        100% 100%;

    opacity: 0.42;

    box-shadow:
        inset 0 -12px 20px rgba(0, 0, 0, 0.25),
        inset 0 -1px 0 rgba(223, 186, 76, 0.32);
}

/* =====================================================
   ELEMEN MIRROR KHUSUS
===================================================== */

.site-header .gds-premium-mirror {
    position: absolute !important;
    inset: 0 !important;
    z-index: 2 !important;
    display: block !important;
    overflow: hidden !important;
    pointer-events: none !important;
    opacity: 1 !important;
    visibility: visible !important;
}

/* Cahaya mirror utama */
.site-header .gds-premium-mirror::before {
    content: "";
    position: absolute;
    top: -30%;
    bottom: -30%;
    left: -34%;
    width: 22%;

    background: linear-gradient(
        105deg,
        transparent 0%,
        rgba(255, 255, 255, 0.02) 20%,
        rgba(223, 186, 76, 0.18) 38%,
        rgba(255, 255, 255, 0.62) 50%,
        rgba(0, 230, 118, 0.20) 62%,
        transparent 100%
    );

    filter:
        blur(3px)
        drop-shadow(0 0 8px rgba(223, 186, 76, 0.28));

    transform: translateX(0) skewX(-18deg);
    will-change: transform, opacity;

    animation: gdsPremiumMirrorMove 6.5s ease-in-out infinite;
}

/* Kilau putih tipis */
.site-header .gds-premium-mirror::after {
    content: "";
    position: absolute;
    top: -20%;
    bottom: -20%;
    left: -20%;
    width: 5%;

    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.52),
        transparent
    );

    filter: blur(2px);
    transform: translateX(0) skewX(-18deg);
    will-change: transform, opacity;

    animation: gdsPremiumMirrorLine 6.5s ease-in-out infinite;
}

/* =====================================================
   KONTEN HEADER
===================================================== */

.site-header > .container {
    position: relative !important;
    z-index: 4 !important;
}

.site-header > *:not(.gds-premium-mirror) {
    position: relative !important;
    z-index: 4 !important;
}

/* =====================================================
   LOGO DAN GLOW
===================================================== */

.site-header .logo {
    position: relative !important;
    z-index: 5 !important;
    isolation: isolate;
    background: transparent !important;
}

/* Cahaya emerald di belakang logo */
.site-header .logo::before {
    content: "" !important;
    display: block !important;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 135%;
    height: 90%;
    z-index: -1;
    pointer-events: none;

    border-radius: 50%;

    background: radial-gradient(
        ellipse,
        rgba(0, 230, 118, 0.21) 0%,
        rgba(0, 143, 76, 0.10) 42%,
        transparent 72%
    );

    filter: blur(12px);
    will-change: opacity, transform;
    animation: gdsLogoGlow 4.5s ease-in-out infinite;
}

.site-header .logo::after {
    content: none !important;
    display: none !important;
}

.site-header .logo img {
    position: relative !important;
    z-index: 6 !important;

    filter:
        drop-shadow(0 3px 4px rgba(0, 0, 0, 0.48))
        drop-shadow(0 0 5px rgba(0, 230, 118, 0.12));
}

/* =====================================================
   MENU
===================================================== */

.site-header .menu-slide,
.site-header .top-menu,
.site-header .top-menu > li,
.site-header .top-menu > li > a {
    position: relative !important;
    z-index: 6 !important;
}

.site-header .game-list {
    z-index: 9999 !important;
}

/* =====================================================
   ANIMASI HUJAN
===================================================== */

@keyframes gdsHeaderRain {
    from {
        background-position:
            0 -270px,
            0 -270px,
            0 -270px,
            25px -350px,
            25px -350px,
            60px -320px,
            60px -320px;
    }

    to {
        background-position:
            0 810px,
            0 810px,
            0 810px,
            25px 930px,
            25px 930px,
            60px 870px,
            60px 870px;
    }
}

/* =====================================================
   ANIMASI MIRROR UTAMA
===================================================== */

@keyframes gdsPremiumMirrorMove {
    0%,
    12% {
        transform: translateX(0) skewX(-18deg);
        opacity: 0;
    }

    18% {
        opacity: 0.92;
    }

    55% {
        opacity: 0.72;
    }

    68%,
    100% {
        transform: translateX(720%) skewX(-18deg);
        opacity: 0;
    }
}

/* =====================================================
   ANIMASI GARIS MIRROR
===================================================== */

@keyframes gdsPremiumMirrorLine {
    0%,
    12% {
        transform: translateX(0) skewX(-18deg);
        opacity: 0;
    }

    20% {
        opacity: 0.86;
    }

    68%,
    100% {
        transform: translateX(2800%) skewX(-18deg);
        opacity: 0;
    }
}

/* =====================================================
   ANIMASI LOGO
===================================================== */

@keyframes gdsLogoGlow {
    0%,
    100% {
        opacity: 0.42;
        transform: translate(-50%, -50%) scale(0.96);
    }

    50% {
        opacity: 0.78;
        transform: translate(-50%, -50%) scale(1.04);
    }
}

/* =====================================================
   ANIMASI GARIS EMAS
===================================================== */

@keyframes gdsHeaderBorderGlow {
    0%,
    100% {
        border-bottom-color: rgba(223, 186, 76, 0.30);

        box-shadow:
            0 5px 18px rgba(0, 0, 0, 0.44),
            0 1px 7px rgba(223, 186, 76, 0.10);
    }

    50% {
        border-bottom-color: rgba(255, 220, 112, 0.70);

        box-shadow:
            0 5px 18px rgba(0, 0, 0, 0.44),
            0 2px 10px rgba(223, 186, 76, 0.25);
    }
}

/* =====================================================
   DESKTOP
===================================================== */

@media (min-width: 992px) {
    .site-header {
        height: 100px !important;
        min-height: 100px !important;
        max-height: 100px !important;
    }

    .site-header::before,
    .site-header::after,
    .site-header .gds-premium-mirror {
        height: 100px !important;
        max-height: 100px !important;
    }

    .site-header .logo {
        transform: translateY(-98px) !important;
    }
}

/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 991px) {
    .site-header::before {
        opacity: 0.56;
        animation-duration: 15s;
    }

    .site-header .gds-premium-mirror::before {
        width: 28%;
        animation-duration: 8.5s;
    }

    .site-header .gds-premium-mirror::after {
        width: 7%;
        animation-duration: 8.5s;
    }

    .site-header .logo::before {
        filter: blur(9px);
    }
}

/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {
    .site-header,
    .site-header::before,
    .site-header .gds-premium-mirror::before,
    .site-header .gds-premium-mirror::after,
    .site-header .logo::before {
        animation: none !important;
    }
}
`;

    function installStyle() {
        if (document.getElementById(STYLE_ID)) return;

        var styleElement = document.createElement("style");

        styleElement.id = STYLE_ID;
        styleElement.type = "text/css";
        styleElement.textContent = CSS;

        var target =
            document.head ||
            document.getElementsByTagName("head")[0] ||
            document.documentElement;

        target.appendChild(styleElement);
    }

    function installMirror() {
        var header = document.querySelector(".site-header");

        if (!header) return false;

        var oldMirrors = header.querySelectorAll(
            ".gds-premium-mirror"
        );

        if (oldMirrors.length > 1) {
            for (var i = 1; i < oldMirrors.length; i++) {
                oldMirrors[i].remove();
            }
        }

        if (!header.querySelector("." + MIRROR_CLASS)) {
            var mirrorElement = document.createElement("div");

            mirrorElement.className = MIRROR_CLASS;
            mirrorElement.setAttribute("aria-hidden", "true");

            header.insertBefore(
                mirrorElement,
                header.firstChild
            );
        }

        return true;
    }

    installStyle();

    /* Pasang mirror langsung jika header sudah tersedia */
    if (installMirror()) return;

    /*
     * Jika template website membuat header setelah JS dijalankan,
     * MutationObserver akan menunggu sampai header tersedia.
     */
    var observer = new MutationObserver(function () {
        if (installMirror()) {
            observer.disconnect();
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    /* Hentikan observer setelah 20 detik */
    setTimeout(function () {
        observer.disconnect();
    }, 20000);
})();
