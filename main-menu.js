(() => {
if (document.getElementById("gadunslot-mainmenu-css")) return;

const style = document.createElement("style");
style.id = "gadunslot-mainmenu-css";

style.textContent = `
/* Tempel SEMUA isi CSS kamu di sini */
/* Jangan pakai tag <style> dan </style> */

#main_menu_outer_container{
position:relative!important;
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
z-index:1;
pointer-events:none;
-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
-webkit-mask-composite:xor;
mask-composite:exclude;
}

/* lanjutkan sampai CSS terakhir */

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

#main_menu_outer_container main{
-webkit-overflow-scrolling:touch!important;
touch-action:pan-x!important;
scroll-behavior:smooth!important;
}

#main_menu_outer_container main a{
flex:0 0 auto!important;
}
`;

document.head.appendChild(style);
})();
