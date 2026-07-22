(function () {
  const css = `
.site-header{
    background:url("https://i.postimg.cc/PxQccMsQ/GDS062-1920x80.jpg") center/cover no-repeat!important;
    position:relative!important;
    z-index:50!important;
}

@media (max-width:768px){
    .site-header{
        background-image:url("https://i.postimg.cc/JhVRCKv7/GDS062-485x80.jpg")!important;
        background-position:left center!important;
    }
}
`;

  const style = document.createElement("style");
  style.id = "gadunslot-header-bg";
  style.textContent = css;
  document.head.appendChild(style);
})();
