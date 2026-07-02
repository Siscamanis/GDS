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
let textTimer=null;

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
background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.22) 0%,rgba(0,255,153,.18) 24%,rgba(0,95,55,.75) 58%,rgba(0,18,12,.92) 100%)!important;
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
box-shadow:inset 0 2px 4px rgba(255,255,255,.20),inset 0 -4px 8px rgba(0,0,0,.42),0 0 8px rgba(0,255,153,.42),0 0 14px rgba(0,255,153,.22)!important;
contain:layout paint!important;
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
animation:partnerBorderSpin 5s linear infinite;
-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
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
background:radial-gradient(circle,rgba(0,255,153,.16) 0%,rgba(0,255,153,.06) 48%,rgba(0,255,153,0) 75%);
filter:blur(3px);
z-index:1;
pointer-events:none;
animation:partnerGlow 4s ease-in-out infinite;
}

#${BTN_ID} .float-text{
position:absolute;
top:-34px;
left:50%;
transform:translateX(-50%);
background:linear-gradient(135deg,#fff200,#ffb300,#ff7a00);
color:#101800;
text-shadow:0 1px 1px rgba(255,255,255,.65);
font-size:14px;
font-weight:900;
letter-spacing:.4px;
padding:6px 14px;
border-radius:999px;
border:1px solid rgba(255,255,255,.65);
box-shadow:0 0 7px rgba(255,230,0,.65),0 0 10px rgba(0,255,153,.25);
z-index:4;
white-space:nowrap;
animation:partnerTextBlink 2.8s ease-in-out infinite;
pointer-events:none;
line-height:1;
}

#${BTN_ID} .close-btn{
position:absolute;
top:-48px;
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
box-shadow:0 0 6px rgba(255,0,51,.65);
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
filter:drop-shadow(0 0 4px rgba(255,255,255,.7)) drop-shadow(0 0 5px rgba(0,255,153,.45));
}

@media (prefers-reduced-motion: reduce){
#${BTN_ID}:before,
#${BTN_ID}:after,
#${BTN_ID} .float-text{
animation:none!important;
}
}

@keyframes partnerBorderSpin{
to{transform:rotate(360deg)}
}

@keyframes partnerTextBlink{
0%,100%{opacity:.82}
50%{opacity:1}
}

@keyframes partnerGlow{
0%,100%{opacity:.55}
50%{opacity:.9}
}
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

textTimer=setInterval(function(){
if(!document.body.contains(btn)){
clearInterval(textTimer);
textTimer=null;
return;
}

const text=btn.querySelector(".float-text");
if(!text)return;

textIndex=(textIndex+1)%TEXTS.length;
text.textContent=TEXTS[textIndex];
},2800);

btn.querySelector(".close-btn").addEventListener("click",function(e){
e.preventDefault();
e.stopPropagation();

if(textTimer){
clearInterval(textTimer);
textTimer=null;
}

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
requestAnimationFrame(function(){
setTimeout(init,1200);
});
},{once:true});

})();
