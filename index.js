jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop(),
            navbar = $('.fixed-top');

        if (scrollPosition > 700) {
            navbar.addClass('change-fix-top');
        } else {
            navbar.removeClass('change-fix-top');
        }
    });
});