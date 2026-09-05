"use strict";

(function () {
    var STYLE_ID = "gds-header-rain-style-v3";

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
            1.4px 1.4px at 110px 54px,
            var(--gds-gold) 100%,
            transparent 150%
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
        ),
        radial-gradient(
            1.2px 1.2px at 145px 49px,
            var(--gds-green) 100%,
            transparent 150%
        );

    background-size:
        160px 135px,
        160px 135px,
        160px 135px,
        180px 155px,
        180px 155px,
        180px 155px,
        200px 145px,
        200px 145px,
        200px 145px;

    opacity: 0.75;
    filter: brightness(1.2);
    animation: gdsHeaderRain 16s linear infinite;
}

.site-header::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;

    background-image: radial-gradient(
        circle at 50% 50%,
        transparent 0,
        transparent 1.5px,
        rgba(0, 12, 6, 0.58) 2px
    );

    background-size: 7px 7px;
    opacity: 0.48;

    backdrop-filter: blur(4px) brightness(1.25);
    -webkit-backdrop-filter: blur(4px) brightness(1.25);
}

.site-header > .container {
    position: relative !important;
    z-index: 3 !important;
}

.site-header .logo {
    position: relative !important;
    z-index: 4 !important;
    background-image: none !important;
    background-color: transparent !important;
}

.site-header .logo::before,
.site-header .logo::after {
    content: none !important;
    display: none !important;
}

.site-header .logo img {
    position: relative !important;
    z-index: 5 !important;
}

.site-header .menu-slide,
.site-header .top-menu,
.site-header .top-menu > li,
.site-header .top-menu > li > a {
    position: relative;
    z-index: 5;
}

.site-header .game-list {
    z-index: 9999 !important;
}

@keyframes gdsHeaderRain {
    from {
        background-position:
            0 -300px,
            0 -300px,
            0 -300px,
            25px -450px,
            25px -450px,
            25px -450px,
            60px -380px,
            60px -380px,
            60px -380px;
    }

    to {
        background-position:
            0 900px,
            0 900px,
            0 900px,
            25px 1100px,
            25px 1100px,
            25px 1100px,
            60px 1000px,
            60px 1000px,
            60px 1000px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .site-header::before {
        animation: none !important;
    }
}

@media (min-width: 992px) {
    .site-header {
        height: 110px !important;
        min-height: 110px !important;
        max-height: 110px !important;
    }

    .site-header::before,
    .site-header::after {
        height: 110px !important;
        max-height: 110px !important;
    }

    .site-header .logo {
        transform: translateY(-98px) !important;
    }
}
`;

    function installHeaderStyle() {
        var styleElement = document.getElementById(STYLE_ID);

        if (!styleElement) {
            styleElement = document.createElement("style");
            styleElement.id = STYLE_ID;
            styleElement.type = "text/css";

            var target =
                document.head ||
                document.getElementsByTagName("head")[0] ||
                document.documentElement;

            target.appendChild(styleElement);
        }

        /* Memperbarui style yang sama, tidak membuat duplikat */
        if (styleElement.textContent !== CSS) {
            styleElement.textContent = CSS;
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            installHeaderStyle,
            { once: true }
        );
    } else {
        installHeaderStyle();
    }
})();
