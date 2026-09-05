"use strict";

(function () {
    var STYLE_ID = "gds-header-premium-style-v5";

    /* Mencegah style terpasang lebih dari satu kali */
    if (document.getElementById(STYLE_ID)) return;

    var CSS = `
/* =====================================================
   GADUNSLOT — PREMIUM HEADER EFFECT V5
   Hujan + Mirror Sweep + Logo Glow + Gold Line
===================================================== */

.site-header {
    position: relative !important;
    isolation: isolate;
    overflow: visible !important;

    --gds-green: #00e676;
    --gds-emerald: #008f4c;
    --gds-gold: #dfba4c;
    --gds-gold-light: #ffdc70;

    background-color: #020a06 !important;

    background-image:
        radial-gradient(
            ellipse at 50% 120%,
            rgba(0, 143, 76, 0.14),
            transparent 52%
        ),
        linear-gradient(
            90deg,
            rgba(0, 230, 118, 0.06),
            rgba(0, 0, 0, 0.14) 50%,
            rgba(223, 186, 76, 0.06)
        ) !important;

    border-bottom: 1px solid rgba(223, 186, 76, 0.40);

    box-shadow:
        0 5px 18px rgba(0, 0, 0, 0.42),
        0 1px 7px rgba(223, 186, 76, 0.14);

    animation: gdsHeaderBorderGlow 4s ease-in-out infinite;
}

/* =====================================================
   LAPISAN HUJAN HIJAU DAN EMAS
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
   TEKSTUR HALUS HEADER
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
            rgba(0, 0, 0, 0.16)
        );

    background-size:
        7px 7px,
        100% 100%;

    opacity: 0.42;

    box-shadow:
        inset 0 -12px 20px rgba(0, 0, 0, 0.25),
        inset 0 -1px 0 rgba(223, 186, 76, 0.30);
}

/* =====================================================
   CONTAINER UTAMA
===================================================== */

.site-header > .container {
    position: relative !important;
    z-index: 3 !important;
}

/* =====================================================
   MIRROR SWEEP / KILAU MELINTAS
===================================================== */

.site-header > .container::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -38%;
    width: 18%;
    z-index: 2;
    pointer-events: none;

    background: linear-gradient(
        105deg,
        transparent 0%,
        rgba(255, 255, 255, 0.01) 24%,
        rgba(223, 186, 76, 0.10) 42%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(0, 230, 118, 0.10) 58%,
        transparent 100%
    );

    filter: blur(4px);
    transform: skewX(-18deg);
    will-change: left, opacity;
    animation: gdsMirrorSweep 8s ease-in-out infinite;
}

/* =====================================================
   LOGO DAN LOGO GLOW
===================================================== */

.site-header .logo {
    position: relative !important;
    z-index: 4 !important;
    isolation: isolate;
    background: transparent !important;
}

/* Aura emerald di belakang logo */
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
        rgba(0, 230, 118, 0.20) 0%,
        rgba(0, 143, 76, 0.09) 42%,
        transparent 72%
    );

    filter: blur(12px);
    will-change: opacity, transform;
    animation: gdsLogoGlow 4.5s ease-in-out infinite;
}

/* Nonaktifkan efek bawaan pada bagian belakang logo */
.site-header .logo::after {
    content: none !important;
    display: none !important;
}

.site-header .logo img {
    position: relative !important;
    z-index: 5 !important;

    filter:
        drop-shadow(0 3px 4px rgba(0, 0, 0, 0.48))
        drop-shadow(0 0 5px rgba(0, 230, 118, 0.10));
}

/* =====================================================
   MENU TETAP DI DEPAN
===================================================== */

.site-header .menu-slide,
.site-header .top-menu,
.site-header .top-menu > li,
.site-header .top-menu > li > a {
    position: relative !important;
    z-index: 5 !important;
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
   ANIMASI MIRROR
===================================================== */

@keyframes gdsMirrorSweep {
    0%,
    58% {
        left: -38%;
        opacity: 0;
    }

    66% {
        opacity: 0.80;
    }

    82% {
        opacity: 0.55;
    }

    100% {
        left: 120%;
        opacity: 0;
    }
}

/* =====================================================
   ANIMASI GLOW LOGO
===================================================== */

@keyframes gdsLogoGlow {
    0%,
    100% {
        opacity: 0.42;
        transform: translate(-50%, -50%) scale(0.96);
    }

    50% {
        opacity: 0.76;
        transform: translate(-50%, -50%) scale(1.04);
    }
}

/* =====================================================
   ANIMASI GARIS EMAS
===================================================== */

@keyframes gdsHeaderBorderGlow {
    0%,
    100% {
        border-bottom-color: rgba(223, 186, 76, 0.28);

        box-shadow:
            0 5px 18px rgba(0, 0, 0, 0.42),
            0 1px 7px rgba(223, 186, 76, 0.10);
    }

    50% {
        border-bottom-color: rgba(255, 220, 112, 0.68);

        box-shadow:
            0 5px 18px rgba(0, 0, 0, 0.42),
            0 2px 9px rgba(223, 186, 76, 0.23);
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
    .site-header::after {
        height: 100px !important;
        max-height: 100px !important;
    }

    .site-header .logo {
        transform: translateY(-98px) !important;
    }
}

/* =====================================================
   MOBILE — EFEK LEBIH RINGAN
===================================================== */

@media (max-width: 991px) {
    .site-header::before {
        opacity: 0.55;
        animation-duration: 15s;
    }

    .site-header > .container::before {
        width: 24%;
        animation-duration: 10s;
    }

    .site-header .logo::before {
        opacity: 0.48;
        filter: blur(9px);
    }
}

/* =====================================================
   AKSESIBILITAS
===================================================== */

@media (prefers-reduced-motion: reduce) {
    .site-header,
    .site-header::before,
    .site-header > .container::before,
    .site-header .logo::before {
        animation: none !important;
    }
}
`;

    var styleElement = document.createElement("style");

    styleElement.id = STYLE_ID;
    styleElement.type = "text/css";
    styleElement.textContent = CSS;

    /* Pasang CSS secepat mungkin */
    var target =
        document.head ||
        document.getElementsByTagName("head")[0] ||
        document.documentElement;

    target.appendChild(styleElement);
})();
