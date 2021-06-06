;(function ($) {
    "use strict";

    $(document).ready(function () {
        // Custom Cursor
        var data = dlucc_data;
        
        function customCursor() {
            $('body').append('<div class="dl-cursor"></div><div class="dl-fill"></div>').css('cursor', 'none');
            var cursor = $('.dl-cursor'),
                cursorFill = $('.dl-fill'),
                linksCursor = $(data.selectors);

            $(window).on('mousemove', function (e) {
                cursor.css({ 'transform': 'translate(' + (e.clientX - 3) + 'px,' + (e.clientY - 3) + 'px)', 'visibility': 'inherit' });
                cursorFill.css({ 'transform': 'translate(' + (e.clientX - 19) + 'px,' + (e.clientY - 19) + 'px)', 'visibility': 'inherit' });
            });

            $(window).on('mouseout', function () {
                cursor.css('visibility', 'hidden');
                cursorFill.css('visibility', 'hidden');
            });

            cursorFill.addClass('cursor-grow');

            linksCursor.each(function () {
                $(this).on('mouseleave', function () {
                    cursor.removeClass('full-grow');
                    cursorFill.removeClass('full-grow');
                    cursorFill.addClass('cursor-grow');
                });
                $(this).on('mouseover', function () {
                    cursorFill.removeClass('cursor-grow');
                    cursorFill.addClass('full-grow');
                    cursor.addClass('full-grow');
                });
            });
        }

        if ('enable' === data.status) {
            if ($(window).width() < 768) {
                if ('enable' === data.mobile_status) {
                    customCursor();
                }
            } else {
                customCursor();
            }
        }

    });

})(jQuery);