"use strict";

(function () {
    var STYLE_ID = "gds-header-rain-style-v4";

    /* Hindari memasang style berulang kali */
    if (document.getElementById(STYLE_ID)) return;

    var CSS = `
.site-header {
    position: relative !important;
    isolation: isolate;
    overflow: visible !important;

    --gds-green: #00e676;
    --gds-emerald: #008f4c;
    --gds-gold: #dfba4c;

    background-color: #020a06 !important;
    background-image: linear-gradient(
        90deg,
        rgba(0, 230, 118, 0.06),
        rgba(0, 0, 0, 0.12) 50%,
        rgba(223, 186, 76, 0.06)
    ) !important;

    border-bottom: 1px solid rgba(223, 186, 76, 0.35);
}

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

    opacity: 0.72;
    will-change: background-position;
    animation: gdsHeaderRain 12s linear infinite;
}

.site-header::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;

    background-image: radial-gradient(
        circle,
        transparent 0 1.5px,
        rgba(0, 12, 6, 0.42) 2px
    );

    background-size: 7px 7px;
    opacity: 0.42;

    /* Lebih ringan dibanding backdrop-filter */
    box-shadow: inset 0 -12px 20px rgba(0, 0, 0, 0.25);
}

.site-header > .container {
    position: relative !important;
    z-index: 3 !important;
}

.site-header .logo {
    position: relative !important;
    z-index: 4 !important;
    background: transparent !important;
}

.site-header .logo::before,
.site-header .logo::after {
    content: none !important;
    display: none !important;
}

.site-header .logo img,
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

@media (prefers-reduced-motion: reduce) {
    .site-header::before {
        animation: none !important;
    }
}

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
`;

    var styleElement = document.createElement("style");
    styleElement.id = STYLE_ID;
    styleElement.type = "text/css";
    styleElement.textContent = CSS;

    /* Langsung dipasang tanpa menunggu DOMContentLoaded */
    var target =
        document.head ||
        document.getElementsByTagName("head")[0] ||
        document.documentElement;

    target.appendChild(styleElement);
})();
