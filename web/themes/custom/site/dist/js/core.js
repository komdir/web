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

// Document ready
(function ($) {
    'use strict';

    // Enable page layout
    pageLayout.init();

    var $search_link = $('.navbar').find('.navbar-nav').find('a[href="/search/node"]'),
        $search_wrapper = $search_link.parents('li'),
        $search_icon = $('<span />').addClass('icon fa fa-search').on('click', function() {
            $('.search-inline').find('.search-inline-inner').toggleClass('visible');
        });

    $search_link.remove();
    $search_wrapper.append($search_icon);

})(jQuery);

//# sourceMappingURL=core.js.map