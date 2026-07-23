(function () {
  const css = `
.site-header{
    background:url("http://plcl.me/images/ysWgh.jpg") center/cover no-repeat!important;
    position:relative!important;
    z-index:50!important;
}

@media (max-width:768px){
    .site-header{
        background-image:url("http://plcl.me/images/qjb7U.jpeg")!important;
        background-position:left center!important;
    }
}
`;

  const style = document.createElement("style");
  style.id = "gadunslot-header-bg";
  style.textContent = css;
  document.head.appendChild(style);
})();
