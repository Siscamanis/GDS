"use strict";

(function(){
const BTN_ID="partner-gold-btn";
const STYLE_ID="partner-gold-style";
const LINK="https://go.garagarakopi.com/m4xw1n";
const LOGO_URL="https://lh3.googleusercontent.com/d/1DBlznOtA8A6MVz2xuOA23BTcdSadOvrq";
const RIGHT=18;
const BOTTOM=100;
const SIZE=55;
const HIDE_TIME=10000;

const TEXTS=["SEKTE💲","SLOT🎰","NAGA🔥","SKATER📈","KONEK🤑","DEPO5RB💸","MAXWIN🀄","JPTERUS🔥","WDCAIR💰","SCATTER🀄","GACOR✅️","CUAN🚬"];

let textIndex=0;

function injectStyle(){
if(document.getElementById(STYLE_ID))return;

const style=document.createElement("style");
style.id=STYLE_ID;
style.textContent=`
#${BTN_ID}{display:none!important}

@media(max-width:768px){
#${BTN_ID}{
position:fixed!important;
width:${SIZE}px!important;
height:${SIZE}px!important;
right:${RIGHT}px!important;
bottom:${BOTTOM}px!important;
border-radius:50%!important;
overflow:visible!important;
background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.28) 0%,rgba(0,255,153,.22) 22%,rgba(0,95,55,.78) 55%,rgba(0,18,12,.92) 100%)!important;
border:none!important;
outline:none!important;
-webkit-tap-highlight-color:transparent!important;
box-sizing:border-box!important;
z-index:999999!important;
cursor:pointer!important;
display:flex!important;
align-items:center!important;
justify-content:center!important;
text-decoration:none!important;
box-shadow:inset 0 2px 5px rgba(255,255,255,.25),inset 0 -5px 10px rgba(0,0,0,.45),0 0 10px rgba(0,255,153,.55),0 0 24px rgba(0,255,153,.35)!important;
}

#${BTN_ID}:focus,
#${BTN_ID}:active,
#${BTN_ID}:visited{
outline:none!important;
-webkit-tap-highlight-color:transparent!important;
text-decoration:none!important;
}

#${BTN_ID}:before{
content:"";
position:absolute;
inset:-3px;
border-radius:50%;
padding:3px;
background:conic-gradient(from 0deg,#00ff99,#ffe600,#ff7a00,#00cfff,#7a00ff,#ff00c8,#00ff99);
animation:partnerBorderSpin .45s linear infinite;
-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
-webkit-mask-composite:xor;
mask-composite:exclude;
pointer-events:none;
z-index:2;
}

#${BTN_ID}:after{
content:"";
position:absolute;
inset:-7px;
border-radius:50%;
background:radial-gradient(circle,rgba(0,255,153,.20) 0%,rgba(0,255,153,.08) 45%,rgba(0,255,153,0) 75%);
filter:blur(7px);
z-index:1;
pointer-events:none;
animation:partnerGlow 1.2s ease-in-out infinite;
}

#${BTN_ID} .float-text{
position:absolute;
top:-36px;
left:50%;
transform:translateX(-50%);
background:linear-gradient(135deg,#fff200,#ffb300,#ff7a00);
color:#101800;
text-shadow:0 1px 1px rgba(255,255,255,.75);
font-size:15px;
font-weight:900;
letter-spacing:.6px;
padding:7px 16px;
border-radius:999px;
border:1px solid rgba(255,255,255,.75);
box-shadow:0 0 10px rgba(255,230,0,.9),0 0 18px rgba(0,255,153,.4);
z-index:4;
white-space:nowrap;
animation:partnerTextBlink .9s ease-in-out infinite;
pointer-events:none;
line-height:1;
}

#${BTN_ID} .close-btn{
position:absolute;
top:-50px;
right:-6px;
width:22px;
height:22px;
border-radius:50%;
background:#ff0033;
color:#fff;
font-size:14px;
font-weight:900;
display:flex;
align-items:center;
justify-content:center;
z-index:10;
box-shadow:0 0 8px rgba(255,0,51,.8);
border:2px solid #fff;
cursor:pointer;
font-family:Arial,sans-serif;
}

#${BTN_ID} img{
width:72%;
height:72%;
object-fit:contain;
position:relative;
z-index:3;
pointer-events:none;
filter:drop-shadow(0 0 6px rgba(255,255,255,.85)) drop-shadow(0 0 8px rgba(0,255,153,.65));
}

@keyframes partnerBorderSpin{to{transform:rotate(360deg)}}
@keyframes partnerTextBlink{0%,100%{opacity:.78}50%{opacity:1}}
@keyframes partnerGlow{0%,100%{opacity:.6}50%{opacity:1}}
}
`;

document.head.appendChild(style);
}

function createButton(){
if(document.getElementById(BTN_ID))return;

let hideUntil=0;
try{
hideUntil=parseInt(localStorage.getItem("partnerBtnHideUntil")||"0",10);
}catch(e){}

if(hideUntil && Date.now()<hideUntil)return;

const btn=document.createElement("a");
btn.id=BTN_ID;
btn.href=LINK;
btn.target="_blank";
btn.rel="noopener noreferrer";
btn.innerHTML='<span class="float-text">'+TEXTS[0]+'</span><span class="close-btn">✕</span><img src="'+LOGO_URL+'" alt="">';

document.body.appendChild(btn);

setInterval(function(){
const text=btn.querySelector(".float-text");
if(!text)return;
textIndex=(textIndex+1)%TEXTS.length;
text.textContent=TEXTS[textIndex];
},1600);

btn.querySelector(".close-btn").addEventListener("click",function(e){
e.preventDefault();
e.stopPropagation();

btn.remove();

try{
localStorage.setItem("partnerBtnHideUntil",Date.now()+HIDE_TIME);
}catch(err){}
});
}

function init(){
injectStyle();
createButton();
}

window.addEventListener("load",function(){
setTimeout(init,800);
});
})();
