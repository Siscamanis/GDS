<script>
(function(){
"use strict";
if(window.__GDS_AURORA_LITE__||document.getElementById("gdsAuroraLite"))return;
window.__GDS_AURORA_LITE__=1;

var css="#gdsAuroraLite{position:fixed!important;inset:0!important;pointer-events:none!important;z-index:99998!important;overflow:hidden!important;background:transparent!important;contain:layout style paint!important}.gdsAuroraBlob{position:absolute!important;left:0;top:0;border-radius:50%!important;pointer-events:none!important;transform:translate3d(-9999px,-9999px,0);opacity:0;will-change:transform,opacity;mix-blend-mode:screen!important;transition:opacity .25s ease!important}.gdsAuroraBlob.b1{width:220px;height:220px;background:radial-gradient(circle,rgba(118,82,255,.8) 0%,rgba(45,255,164,.38) 42%,rgba(0,0,0,0) 72%);filter:blur(34px)}.gdsAuroraBlob.b2{width:160px;height:160px;background:radial-gradient(circle,rgba(0,255,136,.55) 0%,rgba(255,211,76,.25) 45%,rgba(0,0,0,0) 72%);filter:blur(30px)}.gdsAuroraBlob.b3{width:120px;height:120px;background:radial-gradient(circle,rgba(255,218,91,.4) 0%,rgba(124,255,190,.18) 45%,rgba(0,0,0,0) 70%);filter:blur(24px)}@media(max-width:768px){.gdsAuroraBlob.b1{width:165px;height:165px;filter:blur(30px)}.gdsAuroraBlob.b2{width:120px;height:120px;filter:blur(25px)}.gdsAuroraBlob.b3{width:90px;height:90px;filter:blur(20px)}}";

var st=document.createElement("style");
st.id="gdsAuroraLiteStyle";
st.appendChild(document.createTextNode(css));
document.head.appendChild(st);

function init(){
if(!document.body)return setTimeout(init,80);

var box=document.createElement("div");
box.id="gdsAuroraLite";
box.innerHTML='<i class="gdsAuroraBlob b1"></i><i class="gdsAuroraBlob b2"></i><i class="gdsAuroraBlob b3"></i>';
document.body.appendChild(box);

var b=box.children;
var tx=innerWidth/2,ty=innerHeight/2,x=tx,y=ty,run=0,raf=0,timer=0,last=0;

function show(){
for(var i=0;i<b.length;i++)b[i].style.opacity="1";
clearTimeout(timer);
timer=setTimeout(function(){
run=0;
for(var i=0;i<b.length;i++)b[i].style.opacity="0";
},900);
if(!raf){run=1;raf=requestAnimationFrame(loop);}
}

function move(px,py){
tx=px;ty=py;show();
}

function loop(now){
if(now-last<16){raf=requestAnimationFrame(loop);return}
last=now;
x+=(tx-x)*.18;
y+=(ty-y)*.18;
b[0].style.transform="translate3d("+(x-110)+"px,"+(y-110)+"px,0)";
b[1].style.transform="translate3d("+(x-105)+"px,"+(y-45)+"px,0)";
b[2].style.transform="translate3d("+(x+8)+"px,"+(y-95)+"px,0)";
if(run)raf=requestAnimationFrame(loop);else{cancelAnimationFrame(raf);raf=0}
}

document.addEventListener("mousemove",function(e){move(e.clientX,e.clientY)},{passive:true});
document.addEventListener("touchmove",function(e){
if(e.touches&&e.touches[0])move(e.touches[0].clientX,e.touches[0].clientY);
},{passive:true});
}

init();
})();
</script>
