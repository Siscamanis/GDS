 <style>
    /* =========================================
       GADUNSLOT PREMIUM LUXURY BUTTON
    ========================================= */
    
    .gds-wrap,
    .gds-wrap * {
      box-sizing: border-box;
    }
    
    /* Animasi shimmer emas */
    @keyframes gdsShimmer {
      0% {
        transform: translateX(-350%) skewX(-22deg);
        opacity:0;
      }
      8% {
        opacity:1;
      }
      72% {
        opacity:1;
      }
      85% {
        transform: translateX(850%) skewX(-22deg);
        opacity:1;
      }
      100% {
        transform: translateX(850%) skewX(-22deg);
        opacity:0;
      }
    }
    
    /* Glitter */
    @keyframes gdsSparkle1 {
      0%,100% {
        opacity:.15;
        transform:scale(.6) rotate(0deg);
      }
      50% {
        opacity:1;
        transform:scale(1.25) rotate(45deg);
      }
    }
    
    @keyframes gdsSparkle2 {
      0%,100% {
        opacity:.2;
        transform:scale(.7);
      }
      50% {
        opacity:.85;
        transform:scale(1.15);
      }
    }
    
    /* Gold border pulse */
    @keyframes gdsGoldGlow {
      0%,100% {
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.20),
          inset 0 -14px 22px rgba(0,0,0,.24),
          0 5px 13px rgba(0,0,0,.22),
          0 0 4px rgba(255,207,80,.18);
      }
    
      50% {
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.26),
          inset 0 -14px 22px rgba(0,0,0,.24),
          0 7px 16px rgba(0,0,0,.28),
          0 0 11px rgba(255,207,80,.32);
      }
    }
    
    .gds-premium {
      position:relative;
      overflow:hidden;
      isolation:isolate;
    
      display:flex;
      align-items:center;
      justify-content:flex-start;
      gap:9px;
    
      min-height:66px;
      padding:9px 11px;
    
      text-decoration:none;
    
      border-radius:15px;
    
      border:1px solid rgba(255,213,96,.72);
    
      transition:
        transform .22s ease,
        filter .22s ease;
    
      animation:gdsGoldGlow 3.5s ease-in-out infinite;
    }
    
    /* Highlight kaca bagian atas */
    .gds-premium .gds-glass {
      position:absolute;
      z-index:1;
    
      top:0;
      left:2%;
      width:96%;
      height:48%;
    
      pointer-events:none;
    
      border-radius:14px 14px 60% 60%;
    
      background:
        linear-gradient(
          180deg,
          rgba(255,255,255,.15),
          rgba(255,255,255,.035),
          transparent
        );
    }
    
    /* Kilatan emas bergerak */
    .gds-premium::before {
      content:"";
    
      position:absolute;
      z-index:2;
    
      top:-55%;
      left:-30%;
    
      width:20%;
      height:210%;
    
      pointer-events:none;
    
      background:
        linear-gradient(
          90deg,
          transparent,
          rgba(255,230,135,.06),
          rgba(255,246,190,.56),
          rgba(255,255,255,.92),
          rgba(255,218,90,.38),
          transparent
        );
    
      filter:blur(1px);
    
      animation:gdsShimmer 2.2s linear infinite;
    }
    
    /* Glitter kanan atas */
    .gds-premium::after {
      content:"✦";
    
      position:absolute;
      z-index:4;
    
      top:7px;
      right:9px;
    
      pointer-events:none;
    
      font-size:9px;
    
      color:#fff1a8;
    
      text-shadow:
        0 0 3px #fff,
        0 0 6px #ffe174,
        0 0 11px #ffbd26;
    
      animation:gdsSparkle1 1.9s ease-in-out infinite;
    }
    
    .gds-premium:hover {
      transform:translateY(-2px) scale(1.01);
      filter:brightness(1.10);
    }
    
    /* Isi tombol */
    .gds-icon,
    .gds-info {
      position:relative;
      z-index:5;
    }
    
    .gds-icon {
      width:36px;
      height:36px;
      flex:0 0 36px;
    
      display:flex;
      align-items:center;
      justify-content:center;
    
      border-radius:50%;
    
      font-size:18px;
    
      border:1px solid rgba(255,224,125,.88);
    
      box-shadow:
        inset 0 1px 2px rgba(255,255,255,.20),
        inset 0 -5px 8px rgba(0,0,0,.18),
        0 3px 8px rgba(0,0,0,.28),
        0 0 7px rgba(255,203,72,.24);
    }
    
    .gds-info {
      min-width:0;
    
      display:flex;
      flex-direction:column;
      align-items:flex-start;
    
      line-height:1.05;
    }
    
    .gds-title {
      white-space:nowrap;
    
      font-size:12px;
      font-weight:900;
    
      letter-spacing:.2px;
    
      text-shadow:
        0 2px 4px rgba(0,0,0,.42);
    }
    
    .gds-subtitle {
      margin-top:5px;
    
      white-space:nowrap;
    
      font-size:7.5px;
      font-weight:800;
    
      letter-spacing:.65px;
    
      color:#f7d674;
    
      text-shadow:
        0 1px 2px rgba(0,0,0,.35);
    }
    
    /* Sparkle tambahan */
    .gds-spark {
      position:absolute;
    
      z-index:4;
    
      pointer-events:none;
    
      color:#ffe18a;
    
      text-shadow:
        0 0 4px #fff,
        0 0 8px rgba(255,194,46,.85);
    
      animation:gdsSparkle2 2.3s ease-in-out infinite;
    }
    
    .gds-spark.s1 {
      bottom:8px;
      right:31px;
      font-size:6px;
    }
    
    .gds-spark.s2 {
      top:10px;
      left:47%;
      font-size:5px;
      animation-delay:.8s;
    }
    
    
    /* =========================================
       SPORTSBOOK - EMERALD
    ========================================= */
    
    .gds-sport {
      color:#fff;
    
      background:
        radial-gradient(
          circle at 15% 0%,
          rgba(96,255,154,.30),
          transparent 31%
        ),
        radial-gradient(
          circle at 90% 110%,
          rgba(0,255,125,.13),
          transparent 38%
        ),
        linear-gradient(
          145deg,
          #09874a 0%,
          #056137 48%,
          #02331e 100%
        );
    }
    
    .gds-sport .gds-icon {
      background:
        radial-gradient(
          circle at 35% 25%,
          #1b6d40,
          #06351e 55%,
          #02170d
        );
    }
    
    
    /* =========================================
       SBOBET - ROYAL BLUE
    ========================================= */
    
    .gds-sbo {
      color:#fff;
    
      background:
        radial-gradient(
          circle at 15% 0%,
          rgba(96,178,255,.32),
          transparent 32%
        ),
        radial-gradient(
          circle at 100% 100%,
          rgba(34,118,255,.16),
          transparent 40%
        ),
        linear-gradient(
          145deg,
          #0866bd 0%,
          #064784 50%,
          #02244e 100%
        );
    }
    
    .gds-sbo .gds-icon {
      background:
        radial-gradient(
          circle at 35% 25%,
          #175b9f,
          #073566 55%,
          #02162d
        );
    }
    
    
    /* =========================================
       CLAIM BONUS - GOLD
    ========================================= */
    
    .gds-claim {
      color:#271700;
    
      background:
        radial-gradient(
          circle at 12% 0%,
          rgba(255,255,255,.56),
          transparent 29%
        ),
        radial-gradient(
          circle at 100% 100%,
          rgba(255,127,0,.17),
          transparent 40%
        ),
        linear-gradient(
          145deg,
          #ffe47a 0%,
          #f0b326 45%,
          #b46d05 100%
        );
    
      border-color:rgba(255,245,189,.95);
    }
    
    .gds-claim .gds-icon {
      background:
        radial-gradient(
          circle at 35% 25%,
          #c98715,
          #825005 58%,
          #432600
        );
    
      color:#fff;
    }
    
    .gds-claim .gds-title {
      text-shadow:
        0 1px 0 rgba(255,255,255,.30);
    }
    
    .gds-claim .gds-subtitle {
      color:#654000;
    
      text-shadow:
        0 1px rgba(255,255,255,.20);
    }
    
    
    /* =========================================
       LIVE CHAT - RUBY
    ========================================= */
    
    .gds-chat {
      color:#fff;
    
      background:
        radial-gradient(
          circle at 15% 0%,
          rgba(255,105,115,.30),
          transparent 32%
        ),
        radial-gradient(
          circle at 100% 100%,
          rgba(255,25,57,.12),
          transparent 42%
        ),
        linear-gradient(
          145deg,
          #c61532 0%,
          #8e0a20 50%,
          #47030d 100%
        );
    }
    
    .gds-chat .gds-icon {
      background:
        radial-gradient(
          circle at 35% 25%,
          #a92137,
          #65101e 55%,
          #2e0208
        );
    }
    
    
    /* =========================================
       MAIN SBOBET X GADUNSLOT
    ========================================= */
    
    .gds-main {
      grid-column:1/-1;
    
      justify-content:center;
    
      min-height:60px;
    
      color:#fff7dc;
    
      background:
        radial-gradient(
          ellipse at 50% -35%,
          rgba(255,116,79,.45),
          transparent 52%
        ),
        radial-gradient(
          circle at 100% 100%,
          rgba(255,27,27,.14),
          transparent 36%
        ),
        linear-gradient(
          180deg,
          #c91818 0%,
          #930808 55%,
          #520202 100%
        );
    
      border-color:rgba(255,211,102,.88);
    }
    
    .gds-main-title {
      position:relative;
      z-index:5;
    
      font-size:14px;
      font-weight:950;
    
      letter-spacing:.9px;
    
      color:#fff4cf;
    
      text-shadow:
        0 2px 5px rgba(0,0,0,.55),
        0 0 8px rgba(255,198,61,.20);
    }
    
    .gds-main-title b {
      color:#f3cc61;
    
      text-shadow:
        0 0 7px rgba(255,193,44,.40);
    }
    
    
    /* Mobile kecil */
    @media(max-width:360px) {
    
      .gds-premium {
        min-height:62px;
        padding:8px 8px;
        gap:7px;
      }
    
      .gds-icon {
        width:31px;
        height:31px;
        flex-basis:31px;
        font-size:16px;
      }
    
      .gds-title {
        font-size:10.5px;
      }
    
      .gds-subtitle {
        font-size:6.7px;
        letter-spacing:.3px;
      }
    }
    </style>
    
    
    <div class="gds-wrap"
    style="
      max-width:420px;
      width:100%;
      margin:0 auto;
      font-family:'Segoe UI',Arial,sans-serif;
      box-sizing:border-box;
      background:transparent;
    ">
    
      <!-- =========================
           BANNER
      ========================== -->
      <a href="../mobile"
         style="
           display:block;
           text-decoration:none;
           margin-bottom:12px;
         ">
    
        <img
          src="https://lh3.googleusercontent.com/d/1_ytjY0VlPGlxdC-lPYNH52EJSjK0wHR5"
          alt="GADUNSLOT"
          style="
            display:block;
            width:100%;
            height:auto;
    
            border-radius:16px;
    
            box-shadow:
              0 14px 30px rgba(0,0,0,.28),
              0 0 12px rgba(255,202,58,.08);
          "
        >
    
      </a>
    
    
      <!-- =========================
           BUTTON GRID
      ========================== -->
      <div style="
        display:grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:10px;
      ">
    
    
        <!-- SPORTSBOOK -->
        <a
          href="../mobile/sport"
          class="gds-premium gds-sport"
        >
    
          <span class="gds-glass"></span>
    
          <span class="gds-spark s1">✦</span>
          <span class="gds-spark s2">•</span>
    
          <span class="gds-icon">
            ⚽
          </span>
    
          <span class="gds-info">
    
            <span class="gds-title">
              SPORTSBOOK
            </span>
    
            <span class="gds-subtitle">
              MAIN SEKARANG
            </span>
    
          </span>
    
        </a>
    
    
        <!-- SBOBET WAP -->
        <a
          href="../dispatch/game/SBO/Mobile"
          class="gds-premium gds-sbo"
        >
    
          <span class="gds-glass"></span>
    
          <span class="gds-spark s1">✦</span>
          <span class="gds-spark s2">•</span>
    
          <span class="gds-icon">
            🏆
          </span>
    
          <span class="gds-info">
    
            <span class="gds-title">
              SBOBET WAP
            </span>
    
            <span class="gds-subtitle">
              MASUK GAME
            </span>
    
          </span>
    
        </a>
    
    
        <!-- CLAIM BONUS -->
        <a
          href="https://linkshortener.vip/gadunslot-livechat"
          class="gds-premium gds-claim"
        >
    
          <span class="gds-glass"></span>
    
          <span class="gds-spark s1">✦</span>
          <span class="gds-spark s2">•</span>
    
          <span class="gds-icon">
            🎁
          </span>
    
          <span class="gds-info">
    
            <span class="gds-title">
              CLAIM BONUS
            </span>
    
            <span class="gds-subtitle">
              AMBIL BONUS
            </span>
    
          </span>
    
        </a>
    
    
        <!-- LIVE CHAT -->
        <a
          href="https://linkshortener.vip/gadunslot-livechat"
          class="gds-premium gds-chat"
        >
    
          <span class="gds-glass"></span>
    
          <span class="gds-spark s1">✦</span>
          <span class="gds-spark s2">•</span>
    
          <span class="gds-icon">
            💬
          </span>
    
          <span class="gds-info">
    
            <span class="gds-title">
              LIVE CHAT
            </span>
    
            <span class="gds-subtitle">
              HUBUNGI CS
            </span>
    
          </span>
    
        </a>
    
    
        <!-- =========================
             SBOBET X GADUNSLOT
        ========================== -->
        <a
          href="../mobile/sport"
          class="gds-premium gds-main"
        >
    
          <span class="gds-glass"></span>
    
          <span class="gds-spark s1">✦</span>
          <span class="gds-spark s2">✦</span>
    
          <span class="gds-main-title">
            SBOBET
            <b>✦</b>
            GADUNSLOT
          </span>
    
        </a>
    
      </div>
    
    </div>
