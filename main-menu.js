(() => {
  if (document.getElementById("gadunslot-mainmenu-performance")) return;

  const style = document.createElement("style");
  style.id = "gadunslot-mainmenu-performance";
  style.textContent = `
#main_menu_outer_container{
position:relative!important;
z-index:0!important;
isolation:isolate!important;
overflow:hidden!important;
border-radius:20px!important;
padding:2px!important;
height:72px!important;
max-height:72px!important;
background:linear-gradient(135deg,#031006 0%,#063817 45%,#010201 100%)!important;
box-shadow:0 -6px 16px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.08)!important;
touch-action:pan-x!important;
contain:layout paint!important;
}

#main_menu_outer_container:before{
content:"";
position:absolute;
inset:0;
border-radius:20px;
padding:2px;
background:linear-gradient(90deg,#ff004c,#ffcc00,#00ff73,#00d5ff,#7a00ff,#ff004c);
background-size:260% 260%;
animation:gadunBorderRGB 8s linear infinite;
z-index:-2!important;
pointer-events:none;
-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
-webkit-mask-composite:xor;
mask-composite:exclude;
}

#main_menu_outer_container:after{
content:"";
position:absolute;
inset:2px;
border-radius:18px;
background:radial-gradient(circle at 12% 25%,rgba(0,255,100,.18),transparent 32%),radial-gradient(circle at 80% 65%,rgba(0,170,70,.18),transparent 34%),linear-gradient(135deg,#020402 0%,#062b12 48%,#010201 100%)!important;
z-index:-1!important;
pointer-events:none;
}

#main_menu_outer_container main{
position:relative!important;
z-index:1!important;
display:flex!important;
align-items:center!important;
gap:14px!important;
padding:8px 46px!important;

height:68px!important;
min-height:68px!important;
max-height:68px!important;

overflow-x:auto!important;
overflow-y:hidden!important;

scrollbar-width:none!important;
background:transparent!important;
border-radius:17px!important;

-webkit-overflow-scrolling:touch!important;
touch-action:pan-x!important;
overscroll-behavior-x:contain!important;
overscroll-behavior-y:none!important;
scroll-behavior:smooth!important;

transform:none!important;
will-change:scroll-position!important;
}

#main_menu_outer_container main::-webkit-scrollbar{
display:none!important;
}

#main_menu_outer_container main:before{
content:"";
position:absolute;
top:-25%;
left:-45%;
width:18%;
height:150%;
background:linear-gradient(110deg,transparent 0%,rgba(255,255,255,.03) 30%,rgba(255,255,255,.14) 48%,rgba(255,216,107,.08) 58%,rgba(255,255,255,.03) 70%,transparent 100%);
transform:skewX(-25deg);
z-index:-1;
pointer-events:none;
animation:gadunMirror 12s linear infinite;
}

#main_menu_outer_container main a{
position:relative!important;
z-index:1!important;
width:62px!important;
min-width:62px!important;
height:52px!important;
padding:4px 2px!important;

background:transparent!important;
border:none!important;
box-shadow:none!important;

display:flex!important;
flex:0 0 auto!important;
flex-direction:column!important;
align-items:center!important;
justify-content:center!important;
gap:3px!important;

color:#eaffef!important;
font-size:9px!important;
line-height:1.05!important;
font-weight:800!important;
text-align:center!important;
text-transform:uppercase!important;
white-space:nowrap!important;
text-shadow:0 2px 5px rgba(0,0,0,.75)!important;

transition:color .18s ease,filter .18s ease!important;
transform:none!important;
overflow:hidden!important;
}

#main_menu_outer_container main a img:not(.floating-icon){
width:28px!important;
height:28px!important;
object-fit:contain!important;
margin:0!important;
filter:brightness(1.08) drop-shadow(0 2px 3px rgba(0,0,0,.65))!important;
}

#main_menu_outer_container .floating-icon{
position:absolute!important;
top:1px!important;
right:1px!important;
width:18px!important;
height:auto!important;
z-index:2!important;
pointer-events:none!important;
filter:drop-shadow(0 1px 3px rgba(0,0,0,.55))!important;
}

#main_menu_outer_container main a:hover,
#main_menu_outer_container main a:active{
transform:none!important;
color:#fff!important;
filter:brightness(1.08)!important;
}

#main_menu_outer_container main a[data-active="true"]{
color:#fff!important;
}

#main_menu_outer_container main a[data-active="true"]:after{
content:"";
position:absolute;
bottom:0;
left:14%;
right:14%;
height:3px;
border-radius:99px;
background:linear-gradient(90deg,#ff004c,#ffcc00,#00ff73,#00d5ff,#7a00ff);
background-size:220% 220%;
animation:gadunLineRGB 5s linear infinite;
box-shadow:0 0 8px rgba(0,255,120,.55);
}

#main_menu_outer_container .left_trigger,
#main_menu_outer_container .right_trigger{
position:absolute!important;
top:50%!important;
transform:translateY(-50%)!important;
z-index:99!important;

width:32px!important;
height:32px!important;
min-width:32px!important;

display:flex!important;
align-items:center!important;
justify-content:center!important;

border-radius:50%!important;
background:linear-gradient(180deg,rgba(255,216,107,.3),rgba(0,110,50,.42))!important;
border:1px solid rgba(255,216,107,.6)!important;
color:#fff7d0!important;
font-size:12px!important;
text-shadow:0 0 5px rgba(255,216,107,.65)!important;
box-shadow:0 3px 8px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.14)!important;
}

#main_menu_outer_container .left_trigger{
left:8px!important;
}

#main_menu_outer_container .right_trigger{
right:8px!important;
}

@media (prefers-reduced-motion: reduce){
#main_menu_outer_container:before,
#main_menu_outer_container main:before,
#main_menu_outer_container main a[data-active="true"]:after{
animation:none!important;
}
}

@keyframes gadunBorderRGB{
0%{background-position:0% 50%}
100%{background-position:260% 50%}
}

@keyframes gadunMirror{
0%{left:-45%}
100%{left:125%}
}

@keyframes gadunLineRGB{
0%{background-position:0% 50%}
100%{background-position:220% 50%}
}
`;

  document.head.appendChild(style);

  const box = document.querySelector("#main_menu_outer_container");
  const menu = box?.querySelector("main");
  const leftBtn = box?.querySelector(".left_trigger");
  const rightBtn = box?.querySelector(".right_trigger");

  if (!box || !menu) return;

  let startX = 0;
  let startY = 0;
  let scrollLeft = 0;
  let isDragging = false;

  menu.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
    scrollLeft = menu.scrollLeft;
    isDragging = true;
  }, { passive: true });

  menu.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const t = e.touches[0];
    const diffX = t.clientX - startX;
    const diffY = t.clientY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      e.preventDefault();
      menu.scrollLeft = scrollLeft - diffX;
    }
  }, { passive: false });

  menu.addEventListener("touchend", () => {
    isDragging = false;
    menu.style.transform = "none";
    menu.scrollTop = 0;
  }, { passive: true });

  menu.addEventListener("scroll", () => {
    menu.style.transform = "none";
    menu.scrollTop = 0;
  }, { passive: true });

  if (leftBtn) {
    leftBtn.addEventListener("click", () => {
      menu.scrollBy({ left: -180, behavior: "smooth" });
    });
  }

  if (rightBtn) {
    rightBtn.addEventListener("click", () => {
      menu.scrollBy({ left: 180, behavior: "smooth" });
    });
  }
})();
