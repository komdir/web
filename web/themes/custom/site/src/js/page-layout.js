// |--------------------------------------------------------------------------
// | Page layout
// |--------------------------------------------------------------------------
// |
// | This jQuery script is written by
// | Morten Nissen
// |

var pageLayout = (function ($) {
    'use strict';

    var pub = {};

    /**
     * Instantiate
     */
    pub.init = function () {
        registerBootEventHandlers();
        registerEventHandlers();
    };

    /**
     * Register boot event handlers
     */
    function registerBootEventHandlers() {}

    /**
     * Register event handlers
     */
    function registerEventHandlers() {

        if ( ! Modernizr.touchevents) {

            $(window).on('load', function () {
                footerAttached();
            });

            $(window).on('resize', function () {
                footerAttached();
            });
        }

      var burgerMenu = document.querySelector('.navbar-toggle');
      var navbarCollapse = document.querySelector('.navbar-collapse');

      function toggleNavbar() {
        navbarCollapse.classList.toggle('collapse');
      }

      burgerMenu.addEventListener('click', toggleNavbar);
    }

    /**
     * Footer attached
     */
    function footerAttached() {
        if ($('body').hasClass('footer-attached')) {
            var $footer = $('.footer');
            var footerHeight = $footer.outerHeight(true);

            $('.inner-wrapper').css('padding-bottom', footerHeight);
        }
    }

    return pub;
})(jQuery);


