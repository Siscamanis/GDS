(() => {
  if (document.getElementById("gadunslot-mainmenu-css")) return;

  const style = document.createElement("style");
  style.id = "gadunslot-mainmenu-css";
  style.textContent = `
#main_menu_outer_container{
position:relative!important;
z-index:0!important;
isolation:isolate!important;
overflow:hidden!important;
border-radius:20px!important;
padding:2px!important;
background:linear-gradient(135deg,#031006 0%,#063817 45%,#010201 100%)!important;
box-shadow:0 -8px 22px rgba(0,0,0,.7),inset 0 2px 0 rgba(255,255,255,.08)!important;
}

#main_menu_outer_container:before{
content:"";
position:absolute;
inset:0;
border-radius:20px;
padding:2px;
background:linear-gradient(90deg,#ff004c,#ffcc00,#00ff73,#00d5ff,#7a00ff,#ff004c);
background-size:400% 400%;
animation:gadunBorderRGB 3s linear infinite;
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
background:radial-gradient(circle at 12% 25%,rgba(0,255,100,.22),transparent 32%),radial-gradient(circle at 80% 65%,rgba(0,170,70,.22),transparent 34%),linear-gradient(135deg,#020402 0%,#062b12 48%,#010201 100%)!important;
z-index:-1!important;
pointer-events:none;
}

#main_menu_outer_container main{
position:relative!important;
z-index:1!important;
display:flex!important;
align-items:center!important;
gap:16px!important;
padding:8px 14px!important;
min-height:62px!important;
overflow-x:auto!important;
overflow-y:visible!important;
scrollbar-width:none!important;
background:transparent!important;
border-radius:17px!important;
-webkit-overflow-scrolling:touch!important;
touch-action:pan-x!important;
scroll-behavior:smooth!important;
}

#main_menu_outer_container main::-webkit-scrollbar{
display:none!important;
}

#main_menu_outer_container main:before{
content:"";
position:absolute;
top:-25%;
left:-45%;
width:22%;
height:150%;
background:linear-gradient(110deg,transparent 0%,rgba(255,255,255,.04) 30%,rgba(255,255,255,.20) 48%,rgba(255,216,107,.12) 58%,rgba(255,255,255,.04) 70%,transparent 100%);
transform:skewX(-25deg);
z-index:-1;
pointer-events:none;
animation:gadunMirror 5s linear infinite;
}

#main_menu_outer_container main a{
position:relative!important;
z-index:1!important;
min-width:58px!important;
height:50px!important;
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
text-shadow:0 2px 6px rgba(0,0,0,.9)!important;
transition:color .18s ease,filter .18s ease!important;
overflow:visible!important;
}

#main_menu_outer_container main a img:not(.floating-icon){
width:28px!important;
height:28px!important;
object-fit:contain!important;
margin:0!important;
filter:brightness(1.15) drop-shadow(0 3px 5px rgba(0,0,0,.85))!important;
}

#main_menu_outer_container .floating-icon{
position:absolute!important;
top:-8px!important;
right:-5px!important;
width:25px!important;
height:auto!important;
z-index:2!important;
filter:drop-shadow(0 2px 5px rgba(0,0,0,.7))!important;
}

#main_menu_outer_container main a:hover,
#main_menu_outer_container main a:active{
transform:none!important;
color:#fff!important;
filter:brightness(1.12)!important;
}

#main_menu_outer_container main a[data-active="true"]{
color:#fff!important;
}

#main_menu_outer_container main a[data-active="true"]:after{
content:"";
position:absolute;
bottom:-4px;
left:12%;
right:12%;
height:4px;
border-radius:99px;
background:linear-gradient(90deg,#ff004c,#ffcc00,#00ff73,#00d5ff,#7a00ff);
background-size:300% 300%;
animation:gadunLineRGB 2s linear infinite;
box-shadow:0 0 12px rgba(0,255,120,.75);
}

#main_menu_outer_container .left_trigger,
#main_menu_outer_container .right_trigger{
position:relative!important;
z-index:1!important;
width:30px!important;
height:30px!important;
min-width:30px!important;
display:flex!important;
align-items:center!important;
justify-content:center!important;
border-radius:50%!important;
background:linear-gradient(180deg,rgba(255,216,107,.38),rgba(0,110,50,.46))!important;
border:1px solid rgba(255,216,107,.75)!important;
color:#fff7d0!important;
font-size:12px!important;
text-shadow:0 0 7px rgba(255,216,107,.8)!important;
box-shadow:0 4px 12px rgba(0,0,0,.55),0 0 10px rgba(255,216,107,.25),inset 0 1px 0 rgba(255,255,255,.16)!important;
}

@keyframes gadunBorderRGB{
0%{background-position:0% 50%}
100%{background-position:400% 50%}
}

@keyframes gadunMirror{
0%{left:-45%}
100%{left:125%}
}

@keyframes gadunLineRGB{
0%{background-position:0% 50%}
100%{background-position:300% 50%}
}
`;

  document.head.appendChild(style);
})();
