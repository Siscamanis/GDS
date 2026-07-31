(function() {
    const css = `
      
        .site-header {
            background-image: url("https://lh3.googleusercontent.com/d/18lZ8xpyb-L9-Qd8Iiznj26Pp-Jtzo2Cp") !important;
            background-size: cover !important;
            background-position: center center !important;
            background-repeat: no-repeat !important;
            background-attachment: scroll !important;
            position: relative !important;
            z-index: 50 !important;
        }

        
        @media (max-width: 768px) {
            .site-header {
                background-image: url("https://lh3.googleusercontent.com/d/1o6RU59Zbw7ajGxxW1GyhXFhzf5oXuOgx") !important;
                background-size: cover !important;
                background-position: left center !important; 
                background-repeat: no-repeat !important;
            }
        }
    `;

    const styleTag = document.createElement("style");
    styleTag.innerHTML = css;
    document.head.appendChild(styleTag);
})();
