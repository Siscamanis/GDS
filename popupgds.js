(function () {
  "use strict";

  function mountGadunslotPopup() {
    if (!document.body || document.getElementById("custom-popup")) return;

    var container = document.createElement("div");
    container.innerHTML = `<div
  id="custom-popup"
  class="pxp-popup"
  role="dialog"
  aria-modal="true"
  aria-labelledby="pxp-popup-title"
  aria-describedby="pxp-popup-description"
  aria-hidden="true"
  style="display:none;"
>
  <style>
    #custom-popup,
    #custom-popup * {
      box-sizing: border-box;
    }

    #custom-popup {
      --pxp-champagne: #dfffea;
      --pxp-gold: #39d27e;
      --pxp-gold-deep: #08733a;
      --pxp-white: #ffffff;
      --pxp-muted: rgba(255,255,255,.58);
      --pxp-panel: rgba(2,18,8,.95);
      --pxp-panel-soft: rgba(5,38,17,.91);
      --pxp-border: rgba(100,235,158,.32);

      position: fixed;
      inset: 0;
      z-index: 2147483647;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding:
        max(10px, env(safe-area-inset-top))
        max(10px, env(safe-area-inset-right))
        max(10px, env(safe-area-inset-bottom))
        max(10px, env(safe-area-inset-left));
      overflow: auto;
      overscroll-behavior: contain;
      background: transparent;
      opacity: 0;
      visibility: hidden;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, Helvetica, sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      transition: opacity .22s ease, visibility .22s ease;
    }

    #custom-popup.pxp-is-open {
      opacity: 1;
      visibility: visible;
    }

    #custom-popup.pxp-is-closing {
      opacity: 0 !important;
      pointer-events: none !important;
    }

    #custom-popup.pxp-is-closed,
    #custom-popup[hidden] {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }

    #custom-popup .pxp-shell {
      position: relative;
      isolation: isolate;
      width: min(92vw, 920px);
      max-height: calc(100vh - 40px);
      max-height: calc(100dvh - 40px);
      overflow-x: hidden;
      overflow-y: auto;
      border: 1px solid var(--pxp-border);
      border-radius: 27px;
      background:
        radial-gradient(circle at 82% 2%, rgba(219,184,91,.16), transparent 31%),
        radial-gradient(circle at 4% 96%, rgba(21,133,68,.19), transparent 35%),
        linear-gradient(145deg, var(--pxp-panel-soft), var(--pxp-panel));
      box-shadow:
        0 42px 115px rgba(0,0,0,.54),
        0 15px 42px rgba(0,0,0,.28),
        inset 0 1px 0 rgba(255,255,255,.075),
        inset 0 -1px 0 rgba(255,255,255,.02);
      backdrop-filter: blur(15px) saturate(120%);
      -webkit-backdrop-filter: blur(15px) saturate(120%);
      scrollbar-width: thin;
      scrollbar-color: rgba(216,183,102,.5) transparent;
      transform: translateY(22px) scale(.97);
      opacity: 0;
      transition: transform .48s cubic-bezier(.18,.82,.22,1), opacity .36s ease;
    }

    #custom-popup.pxp-is-open .pxp-shell {
      transform: translateY(0) scale(1);
      opacity: 1;
    }

    #custom-popup .pxp-shell::-webkit-scrollbar { width: 5px; }
    #custom-popup .pxp-shell::-webkit-scrollbar-track { background: transparent; }
    #custom-popup .pxp-shell::-webkit-scrollbar-thumb {
      border-radius: 999px;
      background: rgba(216,183,102,.48);
    }

    #custom-popup .pxp-shell::before {
      content: "";
      position: absolute;
      top: 0;
      left: 8%;
      z-index: 30;
      width: 84%;
      height: 1px;
      pointer-events: none;
      background: linear-gradient(90deg, transparent, rgba(245,227,170,.22), rgba(245,227,170,.96), rgba(245,227,170,.22), transparent);
      background-size: 220% 100%;
      animation: pxpTopLight 10s linear infinite;
    }

    #custom-popup .pxp-shell::after {
      content: "";
      position: absolute;
      top: -170px;
      right: -135px;
      z-index: -1;
      width: 410px;
      height: 410px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle, rgba(218,184,91,.13), rgba(218,184,91,.025) 42%, transparent 70%);
      animation: pxpAura 11s ease-in-out infinite alternate;
    }

    #custom-popup .pxp-corner {
      position: absolute;
      z-index: 35;
      width: 42px;
      height: 42px;
      pointer-events: none;
      opacity: .72;
    }

    #custom-popup .pxp-corner::before,
    #custom-popup .pxp-corner::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(90deg, rgba(246,226,165,.84), rgba(184,135,43,.09));
    }

    #custom-popup .pxp-corner::before { width: 42px; height: 1px; }
    #custom-popup .pxp-corner::after { width: 1px; height: 42px; }
    #custom-popup .pxp-corner--tl { top: 11px; left: 11px; }
    #custom-popup .pxp-corner--br { right: 11px; bottom: 11px; transform: rotate(180deg); }

    #custom-popup .pxp-header {
      position: sticky;
      top: 0;
      z-index: 50;
      min-height: 58px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 10px 13px 9px 17px;
      background: linear-gradient(180deg, rgba(2,18,8,.99) 0%, rgba(3,28,12,.94) 68%, rgba(3,28,12,.4) 89%, transparent 100%);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    #custom-popup .pxp-official {
      min-width: 0;
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 8px 13px;
      border: 1px solid rgba(229,196,106,.27);
      border-radius: 999px;
      background: rgba(255,255,255,.035);
      color: var(--pxp-champagne);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.05), 0 7px 18px rgba(0,0,0,.14);
      font-size: 9px;
      font-weight: 900;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    #custom-popup .pxp-status-dot {
      position: relative;
      flex: 0 0 8px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--pxp-gold);
      box-shadow: 0 0 10px rgba(216,183,102,.75), 0 0 22px rgba(216,183,102,.24);
    }

    #custom-popup .pxp-status-dot::after {
      content: "";
      position: absolute;
      inset: -5px;
      border: 1px solid rgba(216,183,102,.46);
      border-radius: 50%;
      animation: pxpPulse 2.8s ease-out infinite;
    }

    /* Tombol close dibuat besar, kontras, dan ramah sentuhan. */
    #custom-popup #close-popup {
      flex: 0 0 auto;
      min-width: 106px;
      min-height: 44px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      padding: 5px 6px 5px 14px;
      border: 1px solid rgba(246,223,157,.42);
      border-radius: 999px;
      outline: none;
      background: linear-gradient(145deg, rgba(255,255,255,.085), rgba(255,255,255,.025));
      color: #ffffff;
      box-shadow: 0 10px 25px rgba(0,0,0,.23), inset 0 1px 0 rgba(255,255,255,.075);
      cursor: pointer;
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
      transition: transform .2s ease, border-color .2s ease, background .2s ease, box-shadow .2s ease, color .2s ease;
    }

    #custom-popup #close-popup:hover {
      color: #120d04;
      border-color: rgba(255,235,176,.95);
      background: linear-gradient(135deg, var(--pxp-champagne), var(--pxp-gold));
      box-shadow: 0 13px 31px rgba(180,128,27,.28), inset 0 1px 0 rgba(255,255,255,.55);
      transform: translateY(-1px);
    }

    #custom-popup #close-popup:active { transform: scale(.96); }

    #custom-popup #close-popup:focus-visible {
      outline: 3px solid rgba(245,227,170,.34);
      outline-offset: 3px;
    }

    #custom-popup .pxp-close-label {
      font-size: 9px;
      font-weight: 950;
      letter-spacing: 1.2px;
      text-transform: uppercase;
    }

    #custom-popup .pxp-close-icon {
      flex: 0 0 34px;
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(216,183,102,.13);
      box-shadow: inset 0 0 0 1px rgba(239,210,133,.28);
      transition: transform .25s ease, background .2s ease;
    }

    #custom-popup #close-popup:hover .pxp-close-icon {
      background: rgba(18,13,4,.12);
      transform: rotate(90deg);
    }

    #custom-popup .pxp-close-icon svg {
      width: 26px;
      height: 26px;
      overflow: visible;
    }

    #custom-popup .pxp-close-icon .pxp-close-ring {
      fill: none;
      stroke: currentColor;
      stroke-width: 1.25;
      opacity: .75;
    }

    #custom-popup .pxp-close-icon .pxp-close-x {
      fill: none;
      stroke: currentColor;
      stroke-width: 2.3;
      stroke-linecap: round;
    }

    #custom-popup .pxp-close-icon .pxp-close-accent {
      fill: none;
      stroke: var(--pxp-gold);
      stroke-width: 1.5;
      stroke-linecap: round;
    }

    #custom-popup #close-popup:hover .pxp-close-accent { stroke: #120d04; }

    #custom-popup .pxp-layout {
      display: grid;
      grid-template-columns: minmax(0,.91fr) minmax(0,1.09fr);
      align-items: start;
      width: 100%;
    }

    #custom-popup .pxp-visual-column {
      min-width: 0;
      padding: 1px 8px 18px 16px;
    }

    #custom-popup .pxp-content-column {
      min-width: 0;
      padding: 2px 16px 18px 12px;
    }

    #custom-popup .pxp-photo-frame {
      position: relative;
      padding: 2px;
      overflow: hidden;
      border-radius: 26px;
      background: linear-gradient(135deg, rgba(255,232,164,.86), rgba(173,122,35,.15) 31%, rgba(255,255,255,.055) 58%, rgba(221,185,89,.56));
      box-shadow: 0 22px 55px rgba(0,0,0,.36), 0 6px 18px rgba(0,0,0,.19), 0 0 0 1px rgba(255,255,255,.025);
    }

    #custom-popup .pxp-photo-stage {
      position: relative;
      isolation: isolate;
      width: 100%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      border-radius: 24px;
      background: #03160a;
    }

    #custom-popup .pxp-photo-backdrop {
      position: absolute;
      inset: -7%;
      z-index: 0;
      width: 114%;
      height: 114%;
      display: block;
      object-fit: cover;
      object-position: center;
      opacity: .35;
      filter: blur(23px) saturate(115%);
      transform: scale(1.06);
      pointer-events: none;
    }

    #custom-popup .pxp-photo-shade {
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      background: radial-gradient(circle at center, transparent 52%, rgba(4,4,7,.26) 100%), linear-gradient(180deg, rgba(4,4,7,.025), rgba(4,4,7,.13));
    }

    /* Foto depan 1254x1254 selalu penuh dan tidak dipotong. */
    #custom-popup .pxp-main-photo {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
      object-position: center;
      border: 0;
      background: transparent;
    }

    /* Visual mandiri GADUNSLOT. Ganti blok ini dengan <img> bila sudah ada banner. */
    #custom-popup .pxp-brand-backdrop {
      background:
        radial-gradient(circle at 50% 42%, rgba(223,190,95,.42), transparent 23%),
        radial-gradient(circle at 50% 54%, rgba(18,137,67,.74), transparent 51%),
        linear-gradient(145deg, #031208, #0b4b23 54%, #021107);
    }

    #custom-popup .pxp-main-photo.pxp-brand-art {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 9px;
      padding: 38px 22px;
      background:
        radial-gradient(circle at 50% 34%, rgba(238,207,116,.17), transparent 28%),
        linear-gradient(145deg, rgba(5,31,14,.62), rgba(8,73,31,.78) 54%, rgba(2,20,8,.92));
      color: #fff;
      text-align: center;
    }

    #custom-popup .pxp-brand-emblem {
      width: clamp(82px, 12vw, 126px);
      height: clamp(82px, 12vw, 126px);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(244,219,151,.56);
      border-radius: 31%;
      background: linear-gradient(145deg, #f1dc8a, #bd842a 56%, #68420f);
      color: #082713;
      box-shadow: 0 20px 50px rgba(0,0,0,.38), 0 0 35px rgba(218,183,102,.2), inset 0 1px 0 rgba(255,255,255,.55);
      font-size: clamp(42px, 6vw, 68px);
      font-weight: 1000;
      line-height: 1;
    }

    #custom-popup .pxp-brand-art strong {
      color: #f4e4b2;
      font-size: clamp(27px, 4vw, 45px);
      font-weight: 1000;
      letter-spacing: 2.5px;
      line-height: 1;
      text-shadow: 0 4px 18px rgba(0,0,0,.42);
    }

    #custom-popup .pxp-brand-art small {
      color: rgba(255,255,255,.66);
      font-size: clamp(8px, 1.1vw, 11px);
      font-weight: 900;
      letter-spacing: 2.1px;
    }

    #custom-popup .pxp-photo-sheen {
      position: absolute;
      top: -20%;
      left: -48%;
      z-index: 4;
      width: 22%;
      height: 140%;
      pointer-events: none;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.08), rgba(255,255,255,.16), rgba(255,255,255,.06), transparent);
      filter: blur(1px);
      transform: skewX(-18deg);
      animation: pxpPhotoSheen 11s ease-in-out 1.8s infinite;
    }

    #custom-popup .pxp-photo-badge {
      position: absolute;
      left: 14px;
      bottom: 14px;
      z-index: 7;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 7px 10px;
      border: 1px solid rgba(238,209,128,.31);
      border-radius: 999px;
      background: rgba(7,7,10,.6);
      color: var(--pxp-champagne);
      box-shadow: 0 9px 25px rgba(0,0,0,.26), inset 0 1px 0 rgba(255,255,255,.05);
      backdrop-filter: blur(9px);
      -webkit-backdrop-filter: blur(9px);
      font-size: 8px;
      font-weight: 900;
      letter-spacing: 1.1px;
      text-transform: uppercase;
    }

    #custom-popup .pxp-photo-badge svg { width: 13px; height: 13px; }

    #custom-popup .pxp-media-section { margin-top: 11px; }

    #custom-popup .pxp-section-label,
    #custom-popup .pxp-group-label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
      color: rgba(255,255,255,.55);
      font-size: 7px;
      font-weight: 900;
      letter-spacing: 1.25px;
      text-transform: uppercase;
    }

    #custom-popup .pxp-section-label::after,
    #custom-popup .pxp-group-label::after {
      content: "";
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, rgba(216,183,102,.32), transparent);
    }

    #custom-popup .pxp-media-grid {
      display: grid;
      grid-template-columns: repeat(3,minmax(0,1fr));
      gap: 8px;
    }

    #custom-popup .pxp-media-card {
      position: relative;
      min-width: 0;
      padding: 4px;
      overflow: hidden;
      border: 1px solid rgba(226,194,105,.2);
      border-radius: 16px;
      background: linear-gradient(145deg, rgba(255,255,255,.064), rgba(255,255,255,.018));
      box-shadow: 0 9px 22px rgba(0,0,0,.19), inset 0 1px 0 rgba(255,255,255,.04);
      transition: transform .23s ease, border-color .23s ease, box-shadow .23s ease;
    }

    #custom-popup .pxp-media-card:hover {
      border-color: rgba(240,211,131,.56);
      box-shadow: 0 14px 31px rgba(0,0,0,.27), 0 0 0 1px rgba(240,211,131,.06);
      transform: translateY(-4px);
    }

    #custom-popup .pxp-media-box {
      position: relative;
      width: 100%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      border-radius: 12px;
      background: rgba(255,255,255,.02);
    }

    #custom-popup .pxp-media-image {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
      object-position: center;
      border-radius: 12px;
    }

    #custom-popup .pxp-media-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding-bottom: 25px;
      background:
        radial-gradient(circle at 50% 18%, rgba(238,204,108,.18), transparent 34%),
        linear-gradient(145deg, #062712, #0a5427 58%, #03180b);
      color: #f3dfaa;
      text-align: center;
    }

    #custom-popup .pxp-media-placeholder span {
      color: rgba(255,255,255,.42);
      font-size: 9px;
      font-weight: 900;
      letter-spacing: 1px;
    }

    #custom-popup .pxp-media-placeholder strong {
      font-size: clamp(10px, 1.4vw, 14px);
      font-weight: 1000;
      letter-spacing: 1px;
    }

    #custom-popup .pxp-media-caption {
      position: absolute;
      left: 7px;
      right: 7px;
      bottom: 7px;
      min-height: 21px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 5px;
      border: 1px solid rgba(255,255,255,.09);
      border-radius: 8px;
      background: rgba(6,6,9,.68);
      color: rgba(255,255,255,.78);
      backdrop-filter: blur(7px);
      -webkit-backdrop-filter: blur(7px);
      font-size: 6px;
      font-weight: 900;
      letter-spacing: .62px;
      text-align: center;
      text-transform: uppercase;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    #custom-popup .pxp-brand-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 15px;
    }

    #custom-popup .pxp-monogram {
      position: relative;
      flex: 0 0 50px;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border: 1px solid rgba(239,208,125,.39);
      border-radius: 17px;
      background: radial-gradient(circle at 30% 25%, rgba(255,239,191,.25), transparent 46%), linear-gradient(145deg, rgba(221,184,83,.18), rgba(255,255,255,.025));
      color: var(--pxp-champagne);
      box-shadow: 0 11px 28px rgba(0,0,0,.24), inset 0 1px 0 rgba(255,255,255,.09), 0 0 26px rgba(216,183,102,.05);
      font-size: 16px;
      font-weight: 950;
      letter-spacing: .45px;
    }

    #custom-popup .pxp-monogram::after {
      content: "";
      position: absolute;
      top: -40%;
      left: -75%;
      width: 35%;
      height: 180%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.28), transparent);
      transform: skewX(-19deg);
      animation: pxpMonogramSheen 8s ease-in-out infinite;
    }

    #custom-popup .pxp-brand-copy { min-width: 0; flex: 1; }
    #custom-popup .pxp-brand-kicker {
      margin-bottom: 3px;
      color: var(--pxp-gold);
      font-size: 8px;
      font-weight: 900;
      letter-spacing: 1.65px;
      text-transform: uppercase;
    }

    #custom-popup .pxp-brand-name {
      max-width: 100%;
      overflow: hidden;
      color: #ffffff;
      font-size: 17px;
      font-weight: 900;
      line-height: 1.22;
      letter-spacing: -.25px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    #custom-popup .pxp-verified {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 6px 8px;
      border: 1px solid rgba(230,198,109,.25);
      border-radius: 999px;
      background: rgba(216,183,102,.075);
      color: var(--pxp-champagne);
      font-size: 7px;
      font-weight: 900;
      letter-spacing: .62px;
      text-transform: uppercase;
    }

    #custom-popup .pxp-verified svg { width: 12px; height: 12px; }

    #custom-popup .pxp-intro { margin-bottom: 15px; }
    #custom-popup .pxp-eyebrow {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 7px;
      color: rgba(216,183,102,.91);
      font-size: 8px;
      font-weight: 900;
      letter-spacing: 1.75px;
      text-transform: uppercase;
    }

    #custom-popup .pxp-eyebrow::before {
      content: "";
      width: 23px;
      height: 1px;
      background: linear-gradient(90deg, var(--pxp-gold), transparent);
    }

    #custom-popup .pxp-title {
      margin: 0 0 8px;
      color: #ffffff;
      font-size: clamp(21px,2.55vw,28px);
      font-weight: 900;
      line-height: 1.15;
      letter-spacing: -.78px;
    }

    #custom-popup .pxp-description {
      max-width: 520px;
      margin: 0;
      color: var(--pxp-muted);
      font-size: 11px;
      font-weight: 500;
      line-height: 1.65;
    }

    #custom-popup .pxp-search-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 7px;
      color: rgba(255,255,255,.66);
      font-size: 9px;
      font-weight: 800;
    }

    #custom-popup .pxp-search-label span:first-child {
      display: inline-flex;
      align-items: center;
      gap: 7px;
    }

    #custom-popup .pxp-search-label svg { width: 13px; height: 13px; color: var(--pxp-gold); }
    #custom-popup .pxp-search-secure {
      color: rgba(216,183,102,.74);
      font-size: 7px;
      font-weight: 900;
      letter-spacing: .85px;
      text-transform: uppercase;
    }

    #custom-popup .pxp-google {
      position: relative;
      width: 100%;
      min-height: 62px;
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
      padding: 9px 10px;
      overflow: hidden;
      border: 1px solid rgba(246,222,155,.72);
      border-radius: 18px;
      background: linear-gradient(135deg, #f5e2a7 0%, #d7b65f 49%, #aa7b2b 100%);
      color: #130e05;
      text-decoration: none;
      box-shadow: 0 16px 36px rgba(172,123,27,.22), inset 0 1px 0 rgba(255,255,255,.59), inset 0 -1px 0 rgba(99,65,8,.11);
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
      transition: transform .22s ease, box-shadow .22s ease, filter .22s ease;
    }

    #custom-popup .pxp-google::after {
      content: "";
      position: absolute;
      top: -45%;
      left: -35%;
      width: 16%;
      height: 190%;
      pointer-events: none;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.48), transparent);
      transform: skewX(-21deg);
      transition: left .75s ease;
    }

    #custom-popup .pxp-google:hover {
      filter: brightness(1.035);
      box-shadow: 0 20px 43px rgba(172,123,27,.29), inset 0 1px 0 rgba(255,255,255,.67);
      transform: translateY(-2px);
    }

    #custom-popup .pxp-google:hover::after { left: 122%; }
    #custom-popup .pxp-google:active { transform: scale(.985); }

    #custom-popup .pxp-google-icon {
      flex: 0 0 42px;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(47,31,3,.08);
      border-radius: 13px;
      background: rgba(255,255,255,.8);
      color: #171106;
      box-shadow: 0 7px 17px rgba(64,42,4,.13), inset 0 1px 0 rgba(255,255,255,.65);
      font-size: 19px;
      font-weight: 950;
    }

    #custom-popup .pxp-google-copy { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 2px; }
    #custom-popup .pxp-google-caption {
      color: rgba(19,14,5,.59);
      font-size: 7px;
      font-weight: 900;
      letter-spacing: 1.25px;
      text-transform: uppercase;
    }

    #custom-popup .pxp-google-keyword {
      max-width: 100%;
      overflow: hidden;
      color: #130e05;
      font-size: 14px;
      font-weight: 950;
      letter-spacing: .18px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    #custom-popup .pxp-google-arrow {
      flex: 0 0 34px;
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(19,14,5,.105);
      color: #130e05;
      font-size: 17px;
      font-weight: 900;
      animation: pxpArrow 3.2s ease-in-out infinite;
    }

    #custom-popup .pxp-group { margin-top: 12px; }
    #custom-popup .pxp-group-index { color: var(--pxp-gold); }

    #custom-popup .pxp-action-grid {
      display: grid;
      grid-template-columns: repeat(2,minmax(0,1fr));
      gap: 8px;
    }

    #custom-popup .pxp-action {
      position: relative;
      min-width: 0;
      min-height: 61px;
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 9px;
      overflow: hidden;
      border: 1px solid rgba(226,194,105,.19);
      border-radius: 16px;
      background: linear-gradient(145deg, rgba(255,255,255,.062), rgba(255,255,255,.017));
      color: #ffffff;
      text-decoration: none;
      box-shadow: 0 9px 22px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.038);
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
      transition: transform .22s ease, border-color .22s ease, background .22s ease, box-shadow .22s ease;
    }

    #custom-popup .pxp-action::before {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: linear-gradient(120deg, rgba(226,190,94,.15), transparent 55%);
      opacity: 0;
      transform: translateX(-20px);
      transition: opacity .24s ease, transform .32s ease;
    }

    #custom-popup .pxp-action:hover {
      border-color: rgba(244,217,141,.61);
      background: linear-gradient(145deg, rgba(222,185,88,.125), rgba(255,255,255,.024));
      box-shadow: 0 14px 30px rgba(0,0,0,.23), inset 0 1px 0 rgba(255,255,255,.06), 0 0 20px rgba(216,183,102,.035);
      transform: translateY(-3px);
    }

    #custom-popup .pxp-action:hover::before { opacity: 1; transform: translateX(0); }
    #custom-popup .pxp-action:active { transform: scale(.975); }

    #custom-popup .pxp-action-icon {
      position: relative;
      z-index: 2;
      flex: 0 0 38px;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(232,200,112,.25);
      border-radius: 12px;
      background: rgba(216,183,102,.09);
      color: #edcf7c;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.045), 0 7px 16px rgba(0,0,0,.12);
      transition: transform .23s ease, background .23s ease, border-color .23s ease;
    }

    #custom-popup .pxp-action-icon svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.7;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    #custom-popup .pxp-action:hover .pxp-action-icon {
      border-color: rgba(240,212,134,.48);
      background: rgba(216,183,102,.16);
      transform: rotate(-3deg) scale(1.045);
    }

    #custom-popup .pxp-action-copy { position: relative; z-index: 2; min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 3px; }
    #custom-popup .pxp-action-title {
      max-width: 100%;
      overflow: hidden;
      color: #ffffff;
      font-size: 10px;
      font-weight: 900;
      line-height: 1.25;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    #custom-popup .pxp-action-subtitle {
      max-width: 100%;
      overflow: hidden;
      color: rgba(255,255,255,.42);
      font-size: 7px;
      font-weight: 600;
      line-height: 1.3;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    #custom-popup .pxp-action-arrow {
      position: relative;
      z-index: 2;
      flex: 0 0 auto;
      color: var(--pxp-gold);
      font-size: 18px;
      font-weight: 300;
      transition: transform .22s ease, color .22s ease;
    }

    #custom-popup .pxp-action:hover .pxp-action-arrow { color: var(--pxp-champagne); transform: translateX(3px); }

    #custom-popup .pxp-trust {
      display: grid;
      grid-template-columns: repeat(3,minmax(0,1fr));
      gap: 4px;
      margin-top: 16px;
      padding: 10px 6px 0;
      border-top: 1px solid rgba(226,194,105,.12);
    }

    #custom-popup .pxp-trust-item {
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      color: rgba(255,255,255,.34);
      font-size: 6px;
      font-weight: 900;
      letter-spacing: .62px;
      text-align: center;
      text-transform: uppercase;
      white-space: nowrap;
    }

    #custom-popup .pxp-trust-item svg {
      flex: 0 0 11px;
      width: 11px;
      height: 11px;
      color: rgba(216,183,102,.76);
      fill: none;
      stroke: currentColor;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* =========================================================
       TEMA HIJAU METALLIC GADUNSLOT
       Kilau silver-mint, hijau emerald, dan bayangan hijau gelap.
       ========================================================= */
    #custom-popup .pxp-shell {
      border-color: rgba(108,239,163,.34);
      background:
        radial-gradient(circle at 84% 1%, rgba(109,255,171,.2), transparent 31%),
        radial-gradient(circle at 3% 97%, rgba(11,116,55,.28), transparent 36%),
        linear-gradient(145deg, rgba(4,49,24,.95), rgba(1,15,7,.97) 48%, rgba(2,29,14,.96));
      box-shadow:
        0 42px 115px rgba(0,0,0,.58),
        0 15px 42px rgba(0,0,0,.31),
        0 0 34px rgba(42,211,117,.08),
        inset 0 1px 0 rgba(226,255,237,.13),
        inset 0 -1px 0 rgba(53,201,112,.08);
      scrollbar-color: rgba(57,210,126,.55) transparent;
    }

    #custom-popup .pxp-shell::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #76efaa, #13834a);
    }

    #custom-popup .pxp-shell::before {
      background: linear-gradient(90deg, transparent, rgba(171,255,205,.28), rgba(231,255,240,.98), rgba(48,215,124,.5), transparent);
    }

    #custom-popup .pxp-shell::after {
      background: radial-gradient(circle, rgba(66,227,136,.19), rgba(18,129,67,.055) 43%, transparent 70%);
    }

    #custom-popup .pxp-corner::before,
    #custom-popup .pxp-corner::after {
      background: linear-gradient(90deg, rgba(205,255,224,.9), rgba(31,159,84,.1));
    }

    #custom-popup .pxp-header {
      background: linear-gradient(180deg, rgba(1,20,9,.995) 0%, rgba(3,43,20,.95) 68%, rgba(3,43,20,.42) 89%, transparent 100%);
    }

    #custom-popup .pxp-official {
      border-color: rgba(94,226,149,.33);
      background: linear-gradient(145deg, rgba(139,255,185,.09), rgba(255,255,255,.02));
      color: #dfffea;
    }

    #custom-popup .pxp-status-dot {
      background: #55e594;
      box-shadow: 0 0 10px rgba(64,225,137,.9), 0 0 23px rgba(40,201,113,.34);
    }

    #custom-popup .pxp-status-dot::after {
      border-color: rgba(88,235,151,.58);
    }

    #custom-popup #close-popup {
      border-color: rgba(137,241,178,.4);
      background: linear-gradient(145deg, rgba(112,240,163,.11), rgba(255,255,255,.025));
    }

    #custom-popup #close-popup:hover {
      border-color: rgba(221,255,234,.96);
      background: linear-gradient(125deg, #dfffea 0%, #56e596 34%, #0c8a48 67%, #bdfbd4 100%);
      color: #021208;
      box-shadow: 0 13px 31px rgba(21,167,85,.31), inset 0 1px 0 rgba(255,255,255,.64);
    }

    #custom-popup #close-popup:focus-visible {
      outline-color: rgba(115,239,165,.38);
    }

    #custom-popup .pxp-close-icon {
      background: rgba(54,211,121,.14);
      box-shadow: inset 0 0 0 1px rgba(146,246,186,.3);
    }

    #custom-popup .pxp-photo-frame {
      background: linear-gradient(135deg, #dcffea, #37d27d 21%, #07592c 45%, rgba(255,255,255,.12) 61%, #50e08f 82%, #0b7039);
      box-shadow: 0 22px 55px rgba(0,0,0,.4), 0 6px 18px rgba(0,0,0,.22), 0 0 28px rgba(39,200,108,.12);
    }

    #custom-popup .pxp-brand-backdrop {
      background:
        radial-gradient(circle at 50% 41%, rgba(181,255,211,.43), transparent 23%),
        radial-gradient(circle at 50% 54%, rgba(29,196,103,.79), transparent 51%),
        linear-gradient(145deg, #021107, #0a5b2c 54%, #010d05);
    }

    #custom-popup .pxp-main-photo.pxp-brand-art {
      background:
        radial-gradient(circle at 50% 34%, rgba(208,255,226,.2), transparent 29%),
        linear-gradient(145deg, rgba(2,31,13,.66), rgba(7,91,42,.82) 53%, rgba(1,18,7,.94));
    }

    #custom-popup .pxp-brand-emblem {
      border-color: rgba(217,255,231,.67);
      background: linear-gradient(135deg, #e7fff0 0%, #60e99d 18%, #0a8a46 43%, #04351a 58%, #36d27d 76%, #caffdd 100%);
      color: #03160a;
      box-shadow: 0 20px 50px rgba(0,0,0,.42), 0 0 38px rgba(55,219,126,.22), inset 0 1px 0 rgba(255,255,255,.72);
    }

    #custom-popup .pxp-brand-art strong {
      color: #dfffea;
    }

    #custom-popup .pxp-photo-badge {
      border-color: rgba(114,231,162,.38);
      background: rgba(1,24,10,.68);
      color: #dfffea;
    }

    #custom-popup .pxp-section-label::after,
    #custom-popup .pxp-group-label::after {
      background: linear-gradient(90deg, rgba(65,218,130,.43), transparent);
    }

    #custom-popup .pxp-media-card {
      border-color: rgba(76,218,134,.25);
      background: linear-gradient(145deg, rgba(89,231,147,.08), rgba(255,255,255,.018));
    }

    #custom-popup .pxp-media-card:hover {
      border-color: rgba(135,244,179,.6);
      box-shadow: 0 14px 31px rgba(0,0,0,.29), 0 0 22px rgba(44,202,112,.09);
    }

    #custom-popup .pxp-media-placeholder {
      background:
        linear-gradient(115deg, transparent 21%, rgba(226,255,237,.1) 38%, transparent 53%),
        radial-gradient(circle at 50% 18%, rgba(138,246,181,.22), transparent 34%),
        linear-gradient(145deg, #031b0c, #08723a 58%, #021107);
      color: #dfffea;
    }

    #custom-popup .pxp-monogram {
      border-color: rgba(111,231,159,.43);
      background:
        radial-gradient(circle at 30% 22%, rgba(219,255,233,.3), transparent 43%),
        linear-gradient(145deg, rgba(71,221,134,.25), rgba(3,60,27,.15));
      color: #dfffea;
      box-shadow: 0 11px 28px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.13), 0 0 27px rgba(50,211,121,.09);
    }

    #custom-popup .pxp-verified {
      border-color: rgba(90,221,145,.31);
      background: rgba(49,207,118,.1);
      color: #dfffea;
    }

    #custom-popup .pxp-eyebrow,
    #custom-popup .pxp-search-secure {
      color: rgba(92,230,150,.92);
    }

    #custom-popup .pxp-title {
      background: linear-gradient(100deg, #ffffff 0%, #d7ffe6 34%, #5ee59a 64%, #eafff1 100%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
    }

    #custom-popup .pxp-google {
      border-color: rgba(196,255,219,.66);
      background: linear-gradient(125deg, #dfffea 0%, #4cde8b 20%, #0c8243 43%, #064e27 57%, #32ca74 78%, #c8ffdc 100%);
      color: #ffffff;
      box-shadow: 0 16px 36px rgba(18,153,74,.29), inset 0 1px 0 rgba(255,255,255,.68), inset 0 -1px 0 rgba(1,54,24,.25);
    }

    #custom-popup .pxp-google:hover {
      box-shadow: 0 20px 43px rgba(25,182,89,.36), inset 0 1px 0 rgba(255,255,255,.75);
    }

    #custom-popup .pxp-google-icon {
      border-color: rgba(222,255,235,.28);
      background: rgba(237,255,244,.88);
      color: #064523;
      box-shadow: 0 7px 17px rgba(0,48,21,.21), inset 0 1px 0 rgba(255,255,255,.75);
    }

    #custom-popup .pxp-google-caption {
      color: rgba(235,255,243,.72);
    }

    #custom-popup .pxp-google-keyword,
    #custom-popup .pxp-google-arrow {
      color: #ffffff;
      text-shadow: 0 2px 8px rgba(0,43,18,.34);
    }

    #custom-popup .pxp-google-arrow {
      background: rgba(0,42,18,.2);
    }

    #custom-popup .pxp-action {
      border-color: rgba(75,214,131,.24);
      background: linear-gradient(145deg, rgba(67,216,128,.09), rgba(255,255,255,.017));
    }

    #custom-popup .pxp-action::before {
      background: linear-gradient(120deg, rgba(91,229,149,.18), transparent 55%);
    }

    #custom-popup .pxp-action:hover {
      border-color: rgba(132,240,175,.65);
      background: linear-gradient(145deg, rgba(58,214,124,.16), rgba(255,255,255,.025));
      box-shadow: 0 14px 30px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.07), 0 0 22px rgba(45,204,112,.08);
    }

    #custom-popup .pxp-action-icon {
      border-color: rgba(92,223,147,.31);
      background: linear-gradient(145deg, rgba(86,227,145,.17), rgba(7,83,38,.24));
      color: #72eea7;
    }

    #custom-popup .pxp-action:hover .pxp-action-icon {
      border-color: rgba(142,244,182,.55);
      background: rgba(55,218,126,.2);
    }

    #custom-popup .pxp-trust {
      border-top-color: rgba(70,211,127,.18);
    }

    #custom-popup .pxp-trust-item svg {
      color: rgba(79,224,140,.82);
    }

    @keyframes pxpTopLight {
      0% { background-position: 220% 0; opacity: .4; }
      50% { opacity: 1; }
      100% { background-position: -220% 0; opacity: .4; }
    }

    @keyframes pxpAura {
      from { opacity: .68; transform: translate3d(0,0,0) scale(1); }
      to { opacity: 1; transform: translate3d(-34px,25px,0) scale(1.08); }
    }

    @keyframes pxpPulse {
      0% { opacity: .72; transform: scale(.58); }
      72%,100% { opacity: 0; transform: scale(1.72); }
    }

    @keyframes pxpPhotoSheen {
      0%,26% { left: -48%; opacity: 0; }
      32% { opacity: .82; }
      47% { left: 130%; opacity: 0; }
      100% { left: 130%; opacity: 0; }
    }

    @keyframes pxpMonogramSheen {
      0%,34% { left: -75%; opacity: 0; }
      42% { opacity: .82; }
      55% { left: 138%; opacity: 0; }
      100% { left: 138%; opacity: 0; }
    }

    @keyframes pxpArrow {
      0%,100% { transform: translate(0,0); }
      50% { transform: translate(2px,-2px); }
    }

    @media (max-width: 860px) {
      #custom-popup .pxp-shell {
        width: min(94vw, 500px);
        max-height: calc(100vh - 24px);
        max-height: calc(100dvh - 24px);
      }
      #custom-popup .pxp-layout { grid-template-columns: 1fr; }
      #custom-popup .pxp-visual-column { padding: 1px 12px 9px; }
      #custom-popup .pxp-content-column { padding: 9px 12px 18px; }
      #custom-popup .pxp-photo-frame,
      #custom-popup .pxp-media-section { max-width: 460px; margin-left: auto; margin-right: auto; }
    }

    @media (max-width: 520px) {
      #custom-popup {
        align-items: center;
        padding:
          max(7px, env(safe-area-inset-top))
          max(7px, env(safe-area-inset-right))
          max(7px, env(safe-area-inset-bottom))
          max(7px, env(safe-area-inset-left));
      }

      #custom-popup .pxp-shell {
        width: min(calc(100vw - 24px), 420px);
        max-height: 92vh;
        max-height: 92dvh;
        border-radius: 22px;
      }

      #custom-popup .pxp-header { min-height: 56px; padding: 8px 8px 7px 12px; }
      #custom-popup .pxp-official { max-width: calc(100vw - 160px); padding: 7px 10px; font-size: 7px; letter-spacing: 1px; }
      #custom-popup #close-popup { min-width: 101px; min-height: 42px; padding-left: 11px; gap: 7px; }
      #custom-popup .pxp-close-label { font-size: 8px; letter-spacing: 1px; }
      #custom-popup .pxp-close-icon { flex-basis: 32px; width: 32px; height: 32px; }
      #custom-popup .pxp-close-icon svg { width: 24px; height: 24px; }
      #custom-popup .pxp-visual-column { padding: 0 9px 9px; }
      #custom-popup .pxp-content-column { padding: 9px 10px 16px; }
      #custom-popup .pxp-photo-frame { border-radius: 19px; }
      #custom-popup .pxp-photo-stage { border-radius: 18px; }
      #custom-popup .pxp-photo-badge { left: 10px; bottom: 10px; padding: 6px 8px; font-size: 6px; letter-spacing: .82px; }
      #custom-popup .pxp-media-grid { gap: 6px; }
      #custom-popup .pxp-media-card { padding: 3px; border-radius: 13px; }
      #custom-popup .pxp-media-box,
      #custom-popup .pxp-media-image { border-radius: 10px; }
      #custom-popup .pxp-media-caption { left: 5px; right: 5px; bottom: 5px; min-height: 18px; padding: 3px 4px; border-radius: 6px; font-size: 5px; letter-spacing: .4px; }
      #custom-popup .pxp-brand-row { gap: 9px; margin-bottom: 13px; }
      #custom-popup .pxp-monogram { flex-basis: 46px; width: 46px; height: 46px; border-radius: 14px; font-size: 14px; }
      #custom-popup .pxp-brand-kicker { font-size: 6px; letter-spacing: 1.2px; }
      #custom-popup .pxp-brand-name { font-size: 14px; }
      #custom-popup .pxp-verified { padding: 5px 6px; font-size: 5px; letter-spacing: .4px; }
      #custom-popup .pxp-title { font-size: 20px; }
      #custom-popup .pxp-description { font-size: 10px; line-height: 1.58; }
      #custom-popup .pxp-google { min-height: 58px; padding: 8px 9px; border-radius: 16px; }
      #custom-popup .pxp-google-icon { flex-basis: 38px; width: 38px; height: 38px; border-radius: 11px; font-size: 18px; }
      #custom-popup .pxp-google-keyword { font-size: 12px; }
      #custom-popup .pxp-google-arrow { flex-basis: 30px; width: 30px; height: 30px; font-size: 15px; }
      #custom-popup .pxp-action-grid { gap: 7px; }
      #custom-popup .pxp-action { min-height: 58px; gap: 7px; padding: 7px; border-radius: 14px; }
      #custom-popup .pxp-action-icon { flex-basis: 34px; width: 34px; height: 34px; border-radius: 10px; }
      #custom-popup .pxp-action-icon svg { width: 16px; height: 16px; }
      #custom-popup .pxp-action-title { font-size: 9px; }
      #custom-popup .pxp-action-subtitle { font-size: 6px; }
      #custom-popup .pxp-trust-item { gap: 3px; font-size: 5px; letter-spacing: .3px; }
      #custom-popup .pxp-trust-item svg { flex-basis: 9px; width: 9px; height: 9px; }
    }

    @media (max-width: 350px) {
      #custom-popup .pxp-official { max-width: calc(100vw - 145px); }
      #custom-popup #close-popup { min-width: 96px; }
      #custom-popup .pxp-action-grid { grid-template-columns: 1fr; }
      #custom-popup .pxp-action { min-height: 57px; }
      #custom-popup .pxp-trust { grid-template-columns: 1fr; gap: 7px; }
      #custom-popup .pxp-verified { display: none; }
    }

    @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
      #custom-popup .pxp-shell { background: rgba(2,18,8,.98); }
      #custom-popup .pxp-header { background: rgba(2,18,8,.99); }
    }

    @media (prefers-reduced-motion: reduce) {
      #custom-popup,
      #custom-popup *,
      #custom-popup *::before,
      #custom-popup *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
      }
    }
  </style>

  <div
    id="popup-box"
    class="pxp-shell"
    role="document"
    onclick="event.stopPropagation();"
  >
    <span class="pxp-corner pxp-corner--tl"></span>
    <span class="pxp-corner pxp-corner--br"></span>

    <div class="pxp-header">
      <div class="pxp-official">
        <span class="pxp-status-dot"></span>
        Official Access Center
      </div>

      <button
        id="close-popup"
        type="button"
        aria-label="Tutup popup"
        title="Tutup popup"
        onclick="event.stopPropagation();if(window.PremiumAccessPopup){window.PremiumAccessPopup.close();}else{var p=document.getElementById('custom-popup');if(p){p.style.setProperty('display','none','important');p.hidden=true;}}"
      >
        <span class="pxp-close-label">Tutup</span>
        <span class="pxp-close-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48">
            <circle class="pxp-close-ring" cx="24" cy="24" r="18.5"></circle>
            <path class="pxp-close-accent" d="M24 5.5a18.5 18.5 0 0 1 15.8 8.9"></path>
            <path class="pxp-close-x" d="M18.5 18.5l11 11M29.5 18.5l-11 11"></path>
          </svg>
        </span>
      </button>
    </div>

    <div class="pxp-layout">
      <div class="pxp-visual-column">
        <div class="pxp-photo-frame">
          <div class="pxp-photo-stage">
            <img
              class="pxp-photo-backdrop"
              src="http://plcl.me/images/kCyjA.png"
              alt=""
              aria-hidden="true"
              decoding="async"
            >
            <div class="pxp-photo-shade"></div>
            <img
              class="pxp-main-photo"
              src="http://plcl.me/images/kCyjA.png"
              alt="Banner utama GADUNSLOT"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            >
            <div class="pxp-photo-sheen"></div>
            <div class="pxp-photo-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 3l2.6 2.1 3.3-.2.8 3.2 2.5 2.2-1.5 3 1.1 3.1-2.8 1.8-.4 3.3-3.3-.4L12 23l-2.6-2.1-3.3.4-.4-3.3-2.8-1.8 1.1-3.1-1.5-3L5 8.1l.8-3.2 3.3.2L12 3z"></path>
                <path d="M8.7 12.2l2.1 2.1 4.6-4.8"></path>
              </svg>
              GADUNSLOT
            </div>
          </div>
        </div>

        <div class="pxp-media-section">
          <div class="pxp-section-label">Featured Information</div>
          <div class="pxp-media-grid">
            <div class="pxp-media-card">
              <div class="pxp-media-box">
                <div class="pxp-media-image pxp-media-placeholder"><span>01</span><strong>PROMO</strong></div>
                <div class="pxp-media-caption">Promo Terbaru</div>
              </div>
            </div>
            <div class="pxp-media-card">
              <div class="pxp-media-box">
                <div class="pxp-media-image pxp-media-placeholder"><span>02</span><strong>BONUS</strong></div>
                <div class="pxp-media-caption">Bonus Member</div>
              </div>
            </div>
            <div class="pxp-media-card">
              <div class="pxp-media-box">
                <div class="pxp-media-image pxp-media-placeholder"><span>03</span><strong>EVENT</strong></div>
                <div class="pxp-media-caption">Event Eksklusif</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="popup-extra-box" class="pxp-content-column">
        <div class="pxp-brand-row">
          <div class="pxp-monogram">GDS</div>
          <div class="pxp-brand-copy">
            <div class="pxp-brand-kicker">INFORMASI PENTING</div>
            <div class="pxp-brand-name">GADUNSLOT</div>
          </div>
          <div class="pxp-verified">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M8.2 12.2l2.3 2.3 5.2-5.4"></path>
            </svg>
            Verified
          </div>
        </div>

       <div class="pxp-intro">
          <div class="pxp-eyebrow">TEMUKAN LINK KAMI DENGAN SANGAT MUDAH</div>
          <h2 id="pxp-popup-title" class="pxp-title">CARI GADUNSLOT DI JELAJAHYUK.ID</h2>
          <p id="pxp-popup-description" class="pxp-description">
            Buka JELAJAHYUK.ID lalu ketik "GADUNSLOT", atau pilih salah satu akses resmi yang tersedia untuk melanjutkan dengan aman dan mudah.
          </p>
        </div>

        <div class="pxp-search-label">
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5"></circle>
              <path d="M16 16l4.2 4.2"></path>
            </svg>
            Cari GADUNSLOT dengan mudah
          </span>
          <span class="pxp-search-secure">Verified Keyword</span>
        </div>

        <a class="pxp-google" href="https://jelajahyuk.id/" target="_blank" rel="noopener noreferrer">
          <span class="pxp-google-icon">G</span>
          <span class="pxp-google-copy">
            <span class="pxp-google-caption">Official Search Access</span>
            <span class="pxp-google-keyword">JELAJAHYUK.ID — GADUNSLOT</span>
          </span>
          <span class="pxp-google-arrow">↗</span>
        </a>

        <div class="pxp-group">
          <div class="pxp-group-label"><span class="pxp-group-index">01</span>&nbsp; Akses Website & RTP</div>
          <div class="popup-btn-grid pxp-action-grid">
            <a class="popup-btn pxp-action" href="https://jelajahyuk.id/" target="_blank" rel="noopener noreferrer">
              <span class="pxp-action-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M3.8 12h16.4"></path><path d="M12 3.5c2.3 2.4 3.5 5.2 3.5 8.5S14.3 18.1 12 20.5"></path><path d="M12 3.5C9.7 5.9 8.5 8.7 8.5 12s1.2 6.1 3.5 8.5"></path></svg>
              </span>
              <span class="pxp-action-copy"><span class="pxp-action-title">Cari GADUNSLOT</span><span class="pxp-action-subtitle">Akses melalui JELAJAHYUK.ID</span></span>
              <span class="pxp-action-arrow">›</span>
            </a>
            <a class="popup-btn pxp-action" href="https://linkshortener.vip/gadunslot-rtp" target="_blank" rel="noopener noreferrer">
              <span class="pxp-action-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 14.5l5-5"></path><path d="M7.2 17.8l-1.1 1.1a3.8 3.8 0 01-5.4-5.4l3.2-3.2a3.8 3.8 0 015.4 0"></path><path d="M16.8 6.2l1.1-1.1a3.8 3.8 0 015.4 5.4l-3.2 3.2a3.8 3.8 0 01-5.4 0"></path></svg>
              </span>
              <span class="pxp-action-copy"><span class="pxp-action-title">RTP GADUNSLOT</span><span class="pxp-action-subtitle">RTP Realtime 24/7</span></span>
              <span class="pxp-action-arrow">›</span>
            </a>
          </div>
        </div>

        <div class="pxp-group">
          <div class="pxp-group-label"><span class="pxp-group-index">02</span>&nbsp; Akses Aplikasi GADUNSLOT</div>
          <div class="popup-btn-grid pxp-action-grid">
            <a class="popup-btn pxp-action" href="https://linkshortener.vip/gadunslot-apk" target="_blank" rel="noopener noreferrer">
              <span class="pxp-action-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="7.5" r="3.2"></circle><path d="M3.8 19c.4-3.2 2.2-5 5.2-5s4.8 1.8 5.2 5"></path><path d="M18.2 9v6"></path><path d="M15.2 12h6"></path></svg>
              </span>
              <span class="pxp-action-copy"><span class="pxp-action-title">APK GADUNSLOT</span><span class="pxp-action-subtitle">Unduh aplikasi resmi</span></span>
              <span class="pxp-action-arrow">›</span>
            </a>
            <a class="popup-btn pxp-action" href="https://jelajahyuk.id/" target="_blank" rel="noopener noreferrer">
              <span class="pxp-action-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 5H5.8A2.8 2.8 0 003 7.8v8.4A2.8 2.8 0 005.8 19H10"></path><path d="M14.5 8l4 4-4 4"></path><path d="M18.2 12H8"></path></svg>
              </span>
              <span class="pxp-action-copy"><span class="pxp-action-title">Panduan Akses</span><span class="pxp-action-subtitle">Cari GADUNSLOT dengan mudah</span></span>
              <span class="pxp-action-arrow">›</span>
            </a>
          </div>
        </div>

        <div class="pxp-trust">
          <div class="pxp-trust-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5.4c0 4.2-2.5 7.9-7 9.6-4.5-1.7-7-5.4-7-9.6V6l7-3z"></path><path d="M8.5 12l2.2 2.2 4.8-5"></path></svg>
            Verified Access
          </div>
          <div class="pxp-trust-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"></rect><path d="M8 10V7.5a4 4 0 018 0V10"></path></svg>
            Secure Link
          </div>
          <div class="pxp-trust-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7v5l3.2 2"></path></svg>
            Official Support
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

    var popupElement = container.firstElementChild;
    if (!popupElement) return;

    document.body.appendChild(popupElement);

(function () {
      "use strict";

      var popup = document.getElementById("custom-popup");

      if (!popup) return;

      /*
       * STATUS CLOSE HANYA BERLAKU PADA HALAMAN YANG SEDANG DIBUKA.
       *
       * - Tidak memakai localStorage.
       * - Tidak memakai sessionStorage.
       * - Tidak memakai cookie.
       * - Setelah tombol TUTUP ditekan, popup tetap tertutup selama halaman
       *   tersebut belum direfresh.
       * - Setelah browser melakukan refresh/reload penuh, memori halaman
       *   direset dan popup akan muncul kembali.
       * - Popup hanya aktif pada /, /desktop/home, dan /mobile/home.
       */
      var PAGE_STATE_KEY = "__GadunslotPremiumPopupPageStateV2";
      var pageState = window[PAGE_STATE_KEY];

      if (!pageState || typeof pageState !== "object") {
        pageState = {
          dismissed: false,
          activePopup: null,
          historyPatched: false
        };
        window[PAGE_STATE_KEY] = pageState;
      }

      var SETTINGS = {
        allowedPaths: ["/", "/desktop/home", "/mobile/home"],
        openDelay: 180,
        closeOnBackdrop: true,
        closeOnEscape: true,
        lockPageScroll: true,
        previewMode: false
      };

      var closeButton = popup.querySelector("#close-popup");
      var shell = popup.querySelector("#popup-box");
      var openTimer = null;
      var hideTimer = null;
      var internalMutation = false;
      var scrollLocked = false;
      var previousBodyOverflow = "";
      var previousBodyPaddingRight = "";
      var previouslyFocusedElement = null;

      function normalizePath(pathname) {
        var value = String(pathname || "/").split("?")[0].split("#")[0];
        try { value = decodeURIComponent(value); } catch (error) {}
        value = value.replace(/\\+/g, "/").replace(/\/{2,}/g, "/");
        if (!value.startsWith("/")) value = "/" + value;
        if (value.length > 1) value = value.replace(/\/+$/, "");
        return value.toLowerCase();
      }

      function isAllowedPath() {
        if (SETTINGS.previewMode === true) return true;

        var currentPath = normalizePath(
          window.location && window.location.pathname
        );

        for (var index = 0; index < SETTINGS.allowedPaths.length; index += 1) {
          if (currentPath === normalizePath(SETTINGS.allowedPaths[index])) {
            return true;
          }
        }

        return false;
      }

      function withInternalMutation(callback) {
        internalMutation = true;
        callback();
        window.setTimeout(function () {
          internalMutation = false;
        }, 0);
      }

      function lockScroll() {
        if (!SETTINGS.lockPageScroll || scrollLocked || !document.body) return;

        scrollLocked = true;
        previousBodyOverflow = document.body.style.overflow;
        previousBodyPaddingRight = document.body.style.paddingRight;

        var scrollbarWidth = Math.max(
          0,
          window.innerWidth - document.documentElement.clientWidth
        );

        if (scrollbarWidth > 0) {
          var currentPadding =
            parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
          document.body.style.paddingRight =
            (currentPadding + scrollbarWidth) + "px";
        }

        document.body.style.overflow = "hidden";
      }

      function unlockScroll() {
        if (!scrollLocked || !document.body) return;

        document.body.style.overflow = previousBodyOverflow;
        document.body.style.paddingRight = previousBodyPaddingRight;
        scrollLocked = false;
      }

      function hardHideElement(element) {
        if (!element) return;

        element.setAttribute("aria-hidden", "true");
        element.classList.remove("pxp-is-open", "pxp-is-closing");
        element.classList.add("pxp-is-closed");
        element.hidden = true;
        element.style.setProperty("display", "none", "important");
        element.style.setProperty("visibility", "hidden", "important");
        element.style.setProperty("opacity", "0", "important");
        element.style.setProperty("pointer-events", "none", "important");
        element.dataset.pxpClosed = "true";
      }

      function enforceClosed() {
        if (internalMutation) return;

        withInternalMutation(function () {
          hardHideElement(popup);
        });

        unlockScroll();
      }

      /*
       * Jika snippet tanpa sengaja dipasang lebih dari satu kali, hanya satu
       * instance yang dipakai. Instance lain langsung disembunyikan.
       */
      if (
        pageState.activePopup &&
        pageState.activePopup !== popup &&
        pageState.activePopup.isConnected
      ) {
        hardHideElement(popup);
        return;
      }

      pageState.activePopup = popup;

      if (popup.dataset.pxpInitialized === "true") {
        if (pageState.dismissed || !isAllowedPath()) enforceClosed();
        return;
      }

      popup.dataset.pxpInitialized = "true";

      function showPopup() {
        if (!isAllowedPath() || pageState.dismissed) {
          enforceClosed();
          return false;
        }

        window.clearTimeout(openTimer);
        window.clearTimeout(hideTimer);

        if (document.activeElement && !popup.contains(document.activeElement)) {
          previouslyFocusedElement = document.activeElement;
        }

        withInternalMutation(function () {
          popup.hidden = false;
          popup.dataset.pxpClosed = "false";
          popup.setAttribute("aria-hidden", "false");
          popup.classList.remove("pxp-is-closed", "pxp-is-closing");
          popup.style.setProperty("display", "flex", "important");
          popup.style.setProperty("visibility", "visible", "important");
          popup.style.setProperty("opacity", "1", "important");
          popup.style.setProperty("pointer-events", "auto", "important");
        });

        lockScroll();

        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            if (pageState.dismissed || !isAllowedPath()) {
              enforceClosed();
              return;
            }

            popup.classList.add("pxp-is-open");

            if (closeButton && typeof closeButton.focus === "function") {
              try {
                closeButton.focus({ preventScroll: true });
              } catch (error) {
                closeButton.focus();
              }
            }
          });
        });

        return true;
      }

      function closePopup(event) {
        if (event) {
          if (typeof event.preventDefault === "function") {
            event.preventDefault();
          }
          if (typeof event.stopPropagation === "function") {
            event.stopPropagation();
          }
          if (typeof event.stopImmediatePropagation === "function") {
            event.stopImmediatePropagation();
          }
        }

        /*
         * Disimpan hanya pada object window. Object ini hilang otomatis saat
         * halaman direfresh, sehingga popup akan muncul lagi setelah reload.
         */
        pageState.dismissed = true;

        window.clearTimeout(openTimer);
        window.clearTimeout(hideTimer);

        withInternalMutation(function () {
          popup.dataset.pxpClosed = "true";
          popup.setAttribute("aria-hidden", "true");
          popup.classList.remove("pxp-is-open");
          popup.classList.add("pxp-is-closing");
          popup.style.setProperty("opacity", "0", "important");
          popup.style.setProperty("pointer-events", "none", "important");
        });

        unlockScroll();

        hideTimer = window.setTimeout(function () {
          enforceClosed();

          if (
            previouslyFocusedElement &&
            typeof previouslyFocusedElement.focus === "function"
          ) {
            try {
              previouslyFocusedElement.focus({ preventScroll: true });
            } catch (error) {
              previouslyFocusedElement.focus();
            }
          }
        }, 130);

        return true;
      }

      /* Sembunyikan semua duplikat popup yang mungkin sudah ada di DOM. */
      document.querySelectorAll("#custom-popup").forEach(function (element) {
        if (element !== popup) hardHideElement(element);
      });

      /* Tidak ada fungsi open/reset untuk client. */
      window.PremiumAccessPopup = {
        close: closePopup,
        isClosedForCurrentPage: function () {
          return pageState.dismissed === true;
        }
      };

      if (closeButton) {
        closeButton.addEventListener("pointerdown", closePopup, true);
        closeButton.addEventListener("click", closePopup, true);
        closeButton.addEventListener("touchend", closePopup, {
          capture: true,
          passive: false
        });
      }

      if (shell) {
        shell.addEventListener("click", function (event) {
          event.stopPropagation();
        });

        shell.addEventListener("pointerdown", function (event) {
          event.stopPropagation();
        });
      }

      popup.addEventListener("click", function (event) {
        if (SETTINGS.closeOnBackdrop && event.target === popup) {
          closePopup(event);
        }
      });

      document.addEventListener("keydown", function (event) {
        if (
          SETTINGS.closeOnEscape &&
          event.key === "Escape" &&
          popup.classList.contains("pxp-is-open")
        ) {
          closePopup(event);
        }
      }, true);

      /*
       * Setelah ditutup pada halaman saat ini, script lain tidak dapat
       * memunculkannya lagi sebelum refresh.
       */
      var popupObserver = new MutationObserver(function () {
        if (internalMutation) return;

        if (pageState.dismissed || !isAllowedPath()) {
          enforceClosed();
        }
      });

      popupObserver.observe(popup, {
        attributes: true,
        attributeFilter: [
          "style",
          "class",
          "hidden",
          "aria-hidden",
          "data-pxp-closed"
        ]
      });

      /*
       * Jika platform menyuntikkan ulang snippet pada halaman yang sama,
       * status close di window tetap berlaku sampai halaman direfresh.
       */
      var documentObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          mutation.addedNodes.forEach(function (node) {
            if (!node || node.nodeType !== 1) return;

            var candidates = [];

            if (node.id === "custom-popup") candidates.push(node);

            if (node.querySelectorAll) {
              node.querySelectorAll("#custom-popup").forEach(function (element) {
                candidates.push(element);
              });
            }

            candidates.forEach(function (element) {
              if (element === popup) return;

              if (
                pageState.dismissed ||
                !isAllowedPath() ||
                (pageState.activePopup && pageState.activePopup.isConnected)
              ) {
                hardHideElement(element);
              }
            });
          });
        });
      });

      documentObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
      });

      function handleLocationChange() {
        if (!isAllowedPath() || pageState.dismissed) {
          enforceClosed();
          return;
        }

        if (!popup.classList.contains("pxp-is-open")) {
          openTimer = window.setTimeout(
            showPopup,
            Math.max(0, SETTINGS.openDelay)
          );
        }
      }

      /* Mendukung perpindahan path pada website SPA. */
      if (!pageState.historyPatched && window.history) {
        ["pushState", "replaceState"].forEach(function (methodName) {
          var originalMethod = window.history[methodName];
          if (typeof originalMethod !== "function") return;

          window.history[methodName] = function () {
            var result = originalMethod.apply(this, arguments);
            window.dispatchEvent(new Event("pxp:locationchange"));
            return result;
          };
        });

        pageState.historyPatched = true;
      }

      window.addEventListener("pxp:locationchange", handleLocationChange);
      window.addEventListener("popstate", handleLocationChange);
      window.addEventListener("hashchange", handleLocationChange);

      window.addEventListener("pageshow", function () {
        if (pageState.dismissed || !isAllowedPath()) {
          enforceClosed();
        } else if (!popup.classList.contains("pxp-is-open")) {
          showPopup();
        }
      });

      if (!isAllowedPath()) {
        enforceClosed();
      } else if (pageState.dismissed) {
        enforceClosed();
      } else {
        openTimer = window.setTimeout(
          showPopup,
          Math.max(0, SETTINGS.openDelay)
        );
      }
    })();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountGadunslotPopup, { once: true });
  } else {
    mountGadunslotPopup();
  }
})();
