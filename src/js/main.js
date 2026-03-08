(function () {
    "use strict";

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.tienda-nav__toggle');

    function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
    }

    if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }

    document.querySelectorAll('#tienda-nav a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
            if (document.querySelector('.mobile-nav-active')) {
                mobileNavToogle();
            }
        });
    });


    /**
     * Escalar página al tamaño de pantalla (referencia 2200px)
     */
    function fitPageToScreen() {
        const html = document.documentElement;

        if (window.innerWidth < 768) {
            html.style.zoom = '';
            html.style.overflowX = '';
            return;
        }

        const scale = window.innerWidth / 2200;
        html.style.zoom = scale;
        html.style.overflowX = 'hidden';
    }

    window.addEventListener('load', fitPageToScreen);

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(fitPageToScreen, 100);
    });

})();
