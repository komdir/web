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

  var burgerMenu = document.querySelector('.navbar-toggle');
  var navbarCollapse = document.querySelector('.navbar-collapse');


  function toggleNavbar() {
    navbarCollapse.classList.toggle('collapse');
  }

  burgerMenu.addEventListener('click', toggleNavbar);
  burgerMenu.addEventListener('touchstart', toggleNavbar);


})(jQuery);

