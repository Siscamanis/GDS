"use strict";

(function () {
  const BTN_ID = "partner-gold-btn";
  const VIP_ID = "gadunslot-vip-btn";
  const STYLE_ID = "partner-gold-style";

  const LINK = "https://linkshortener.vip/rajanaga99-m4xw1n";
  const LOGO_URL =
    "https://lh3.googleusercontent.com/d/1jCS32ToIndVkGBIv1ChO5djkwKUOAnOS";

  const VIP_GIF =
    "https://lh3.googleusercontent.com/d/1OCLcs12B6CjUAzUAN-K-YRqUCWBI8pXt";

  const VIP_LINK =
    "https://linkshortener.vip/gadunslot-benefit-vip";

  const RIGHT = 18;
  const BOTTOM = 100;
  const SIZE = 55;

  const VIP_SIZE = 70;
  const VIP_RIGHT = 10;

  // Jarak aman dari teks dan tombol X lama
  const VIP_BOTTOM = BOTTOM + SIZE + 72;

  const PARTNER_HIDE_TIME = 10000;
  const VIP_HIDE_TIME = 20000;
  const LOAD_DELAY = 1200;

  const PARTNER_STORAGE = "partnerBtnHideUntil";
  const VIP_STORAGE = "gadunslotVipHideUntil";

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
  let vipShowTimer = null;

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;

    style.textContent = `
#${BTN_ID},
#${VIP_ID}{
  display:none!important;
}

@media(max-width:768px){

  #${BTN_ID}{
    position:fixed!important;
    width:${SIZE}px!important;
    height:${SIZE}px!important;
    right:${RIGHT}px!important;
    bottom:${BOTTOM}px!important;
    border-radius:50%!important;
    overflow:visible!important;

    background:radial-gradient(
      circle at 30% 25%,
      rgba(255,255,255,.22) 0%,
      rgba(0,255,153,.18) 24%,
      rgba(0,95,55,.75) 58%,
      rgba(0,18,12,.92) 100%
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
      inset 0 -4px 8px rgba(0,0,0,.42),
      0 0 8px rgba(0,255,153,.42),
      0 0 14px rgba(0,255,153,.22)!important;
  }

  #${BTN_ID}:focus,
  #${BTN_ID}:active,
  #${BTN_ID}:visited{
    outline:none!important;
    text-decoration:none!important;
    -webkit-tap-highlight-color:transparent!important;
  }

  #${BTN_ID}:before{
    content:"";
    position:absolute;
    inset:-3px;
    padding:3px;
    border-radius:50%;

    background:conic-gradient(
      from 0deg,
      #00ff99,
      #ffe600,
      #ff7a00,
      #00cfff,
      #7a00ff,
      #ff00c8,
      #00ff99
    );

    animation:partnerBorderSpin 5s linear infinite;

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);

    -webkit-mask-composite:xor;
    mask-composite:exclude;

    pointer-events:none;
    z-index:2;
    will-change:transform;
  }

  #${BTN_ID}:after{
    content:"";
    position:absolute;
    inset:-5px;
    border-radius:50%;

    background:radial-gradient(
      circle,
      rgba(0,255,153,.16) 0%,
      rgba(0,255,153,.06) 48%,
      rgba(0,255,153,0) 75%
    );

    filter:blur(3px);
    z-index:1;
    pointer-events:none;
    animation:partnerGlow 4s ease-in-out infinite;
  }

  #${BTN_ID} .float-text{
    position:absolute!important;
    top:-34px!important;
    left:50%!important;
    transform:translateX(-50%)!important;

    background:linear-gradient(
      135deg,
      #fff200,
      #ffb300,
      #ff7a00
    )!important;

    color:#101800!important;
    text-shadow:0 1px 1px rgba(255,255,255,.65)!important;

    font-size:14px!important;
    font-weight:900!important;
    letter-spacing:.4px!important;
    line-height:1!important;

    padding:6px 14px!important;
    border-radius:999px!important;
    border:1px solid rgba(255,255,255,.65)!important;

    box-shadow:
      0 0 7px rgba(255,230,0,.65),
      0 0 10px rgba(0,255,153,.25)!important;

    z-index:4!important;
    white-space:nowrap!important;
    pointer-events:none!important;

    display:block!important;
    visibility:visible!important;
    opacity:1;

    animation:partnerTextBlink 2.8s ease-in-out infinite;
  }

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

    box-shadow:0 0 6px rgba(255,0,51,.65)!important;

    z-index:10!important;
    cursor:pointer!important;
    visibility:visible!important;
    opacity:1!important;
  }

  #${BTN_ID} img{
    position:relative!important;
    width:72%!important;
    height:72%!important;

    object-fit:contain!important;
    pointer-events:none!important;
    z-index:3!important;

    filter:
      drop-shadow(0 0 4px rgba(255,255,255,.7))
      drop-shadow(0 0 5px rgba(0,255,153,.45))!important;
  }

  /* BUTTON VIP */

  #${VIP_ID}{
    position:fixed!important;

    width:${VIP_SIZE}px!important;
    height:${VIP_SIZE}px!important;

    right:${VIP_RIGHT}px!important;
    bottom:${VIP_BOTTOM}px!important;

    display:block!important;
    box-sizing:border-box!important;

    border-radius:50%!important;
    z-index:1000000!important;

    -webkit-tap-highlight-color:transparent!important;
  }

  #${VIP_ID} .vip-link{
    width:100%!important;
    height:100%!important;

    display:block!important;
    overflow:hidden!important;

    border-radius:50%!important;
    text-decoration:none!important!important;
    outline:none!important;

    filter:drop-shadow(0 3px 7px rgba(0,0,0,.45));
  }

  #${VIP_ID} .vip-image{
    width:100%!important;
    height:100%!important;

    display:block!important;
    object-fit:contain!important;

    border:0!important;
    border-radius:50%!important;

    pointer-events:none!important;
  }

  #${VIP_ID} .vip-close{
    position:absolute!important;
    top:-4px!important;
    right:-4px!important;

    width:21px!important;
    height:21px!important;
    padding:0!important;

    display:flex!important;
    align-items:center!important;
    justify-content:center!important;

    border:2px solid #fff!important;
    border-radius:50%!important;

    background:#e6002d!important;
    color:#fff!important;

    font:900 13px/1 Arial,sans-serif!important;

    box-shadow:0 2px 6px rgba(0,0,0,.45)!important;

    cursor:pointer!important;
    z-index:2!important;

    -webkit-tap-highlight-color:transparent!important;
  }

  @media(prefers-reduced-motion:reduce){
    #${BTN_ID}:before,
    #${BTN_ID}:after,
    #${BTN_ID} .float-text{
      animation:none!important;
    }
  }

  @keyframes partnerBorderSpin{
    to{
      transform:rotate(360deg);
    }
  }

  @keyframes partnerTextBlink{
    0%,100%{
      opacity:.82;
    }

    50%{
      opacity:1;
    }
  }

  @keyframes partnerGlow{
    0%,100%{
      opacity:.55;
    }

    50%{
      opacity:.9;
    }
  }
}
`;

    document.head.appendChild(style);
  }

  function getHideUntil(storageKey) {
    try {
      return (
        parseInt(
          localStorage.getItem(storageKey) || "0",
          10
        ) || 0
      );
    } catch (error) {
      return 0;
    }
  }

  function setHideUntil(storageKey, duration) {
    try {
      localStorage.setItem(
        storageKey,
        String(Date.now() + duration)
      );
    } catch (error) {}
  }

  function createPartnerButton() {
    if (document.getElementById(BTN_ID)) return;

    if (
      Date.now() <
      getHideUntil(PARTNER_STORAGE)
    ) {
      return;
    }

    const btn = document.createElement("a");

    btn.id = BTN_ID;
    btn.href = LINK;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";

    btn.innerHTML =
      '<span class="float-text">' +
      TEXTS[0] +
      '</span>' +
      '<span class="close-btn">✕</span>' +
      '<img src="' +
      LOGO_URL +
      '" alt="">';

    document.body.appendChild(btn);
    startTextTimer(btn);

    const closeBtn =
      btn.querySelector(".close-btn");

    closeBtn.addEventListener(
      "click",
      function (event) {
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

  function createVipButton() {
    if (document.getElementById(VIP_ID)) return;

    if (
      Date.now() <
      getHideUntil(VIP_STORAGE)
    ) {
      scheduleVipButton();
      return;
    }

    const vip = document.createElement("div");
    vip.id = VIP_ID;

    vip.innerHTML =
      '<a class="vip-link"' +
      ' href="' +
      VIP_LINK +
      '"' +
      ' target="_blank"' +
      ' rel="noopener noreferrer"' +
      ' aria-label="VIP GADUNSLOT">' +
      '<img class="vip-image"' +
      ' src="' +
      VIP_GIF +
      '"' +
      ' alt="VIP GADUNSLOT">' +
      "</a>" +
      '<button class="vip-close"' +
      ' type="button"' +
      ' aria-label="Tutup tombol VIP">✕</button>';

    const closeVip =
      vip.querySelector(".vip-close");

    closeVip.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        vip.remove();

        setHideUntil(
          VIP_STORAGE,
          VIP_HIDE_TIME
        );

        scheduleVipButton();
      }
    );

    document.body.appendChild(vip);
  }

  function scheduleVipButton() {
    if (vipShowTimer) {
      clearTimeout(vipShowTimer);
      vipShowTimer = null;
    }

    const remaining =
      getHideUntil(VIP_STORAGE) - Date.now();

    if (remaining > 0) {
      vipShowTimer = setTimeout(
        createVipButton,
        remaining + 100
      );

      return;
    }

    createVipButton();
  }

  function startTextTimer(btn) {
    stopTextTimer();

    textTimer = setInterval(
      function () {
        if (!document.body.contains(btn)) {
          stopTextTimer();
          return;
        }

        const text =
          btn.querySelector(".float-text");

        if (!text) return;

        textIndex =
          (textIndex + 1) % TEXTS.length;

        text.textContent = TEXTS[textIndex];
      },
      2800
    );
  }

  function stopTextTimer() {
    if (!textTimer) return;

    clearInterval(textTimer);
    textTimer = null;
  }

  function init() {
    injectStyle();
    createPartnerButton();
    scheduleVipButton();
  }

  function startAfterPageLoad() {
    requestAnimationFrame(function () {
      setTimeout(init, LOAD_DELAY);
    });
  }

  if (document.readyState === "complete") {
    startAfterPageLoad();
  } else {
    window.addEventListener(
      "load",
      startAfterPageLoad,
      { once: true }
    );
  }
})();
