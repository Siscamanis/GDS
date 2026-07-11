(function () {
  const LINK = "https://linkshortener.vip/gadunslot-prediksi";

  // Mobile only
  if (window.innerWidth > 768) return;

  // Inject CSS
  const style = document.createElement("style");
  style.innerHTML = `
    @media (min-width:769px){
      #aiPrediksiScoreWrap,
      #aiPrediksiPopup{
        display:none!important;
      }
    }
  `;
  document.head.appendChild(style);

  function createPopup() {
    if (document.getElementById("aiPrediksiPopup")) return;

    const popup = document.createElement("div");
    popup.id = "aiPrediksiPopup";

    popup.style.cssText = `
      display:none;
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.78);
      z-index:999999;
      align-items:flex-end;
      justify-content:center;
    `;

    popup.innerHTML = `
      <div style="
        width:100%;
        max-width:480px;
        height:92vh;
        background:#06130c;
        border-radius:24px 24px 0 0;
        overflow:hidden;
        position:relative;
        box-shadow:0 -10px 40px rgba(0,0,0,.55);
      ">
        <div style="
          height:52px;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#06130c;
          border-bottom:1px solid rgba(255,255,255,.08);
          color:#fff;
          font-size:15px;
          font-weight:900;
          font-family:Arial,sans-serif;
        ">
          🤖 Prediksi Score by AI
        </div>

        <button id="aiClose" type="button" style="
          position:absolute;
          right:10px;
          top:9px;
          width:34px;
          height:34px;
          border:0;
          border-radius:50%;
          background:rgba(255,255,255,.12);
          color:#fff;
          font-size:22px;
          cursor:pointer;
        ">×</button>

        <iframe
          id="aiFrame"
          style="
            width:100%;
            height:calc(100% - 52px);
            border:0;
            display:block;
          "
        ></iframe>
      </div>
    `;

    document.body.appendChild(popup);

    const frame = document.getElementById("aiFrame");

    function closePopup() {
      popup.style.display = "none";
      frame.src = "";
      document.body.style.overflow = "";
    }

    document.getElementById("aiClose").onclick = closePopup;

    popup.onclick = function (e) {
      if (e.target === popup) {
        closePopup();
      }
    };
  }

  function createCard() {
    if (document.getElementById("aiPrediksiScoreWrap")) return;

    const target = document.getElementById("main_menu_outer_container");
    if (!target) return;

    createPopup();

    const card = document.createElement("div");
    card.id = "aiPrediksiScoreWrap";

    card.style.cssText = `
      margin:12px;
      padding:16px;
      border-radius:18px;
      background:linear-gradient(135deg,#071811,#0b2d1e,#0b2232);
      border:1px solid rgba(0,255,180,.18);
      box-shadow:0 10px 25px rgba(0,0,0,.18);
      font-family:Arial,sans-serif;
      cursor:pointer;
      box-sizing:border-box;
    `;

    card.innerHTML = `
      <div style="
        display:flex;
        align-items:center;
        gap:14px;
      ">
        <div style="
          width:52px;
          height:52px;
          border-radius:16px;
          background:linear-gradient(135deg,#00ff99,#00b8ff);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:26px;
          flex:0 0 auto;
        ">
          🤖
        </div>

        <div style="flex:1;min-width:0;">
          <div style="
            font-size:16px;
            font-weight:900;
            color:#fff;
          ">
            Prediksi Score by AI
          </div>

          <div style="
            margin-top:4px;
            font-size:12px;
            line-height:1.5;
            color:#b7d7ca;
          ">
            Analisis pertandingan dengan AI sebelum kick-off.
          </div>
        </div>

        <div style="
          padding:8px 14px;
          border-radius:999px;
          background:#00d67b;
          color:#041407;
          font-size:12px;
          font-weight:bold;
          flex:0 0 auto;
        ">
          BUKA
        </div>
      </div>
    `;

    target.insertAdjacentElement("afterend", card);

    card.onclick = function () {
      document.getElementById("aiFrame").src = LINK;
      document.getElementById("aiPrediksiPopup").style.display = "flex";
      document.body.style.overflow = "hidden";
    };
  }

  createCard();

  const timer = setInterval(createCard, 500);

  setTimeout(function () {
    clearInterval(timer);
  }, 15000);

  new MutationObserver(createCard).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
