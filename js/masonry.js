function masonry(){
    function initMasonry() {
    for (var i = 0, len = $('.masonry').length; i < len; i++) {
        var $masonry = $('.masonry').eq(i);
        var masonry = new Masonry($masonry[0], {
            item: '.masonry__item',
        });
    }
}

function init() {
    //if ($('.masonry').length) {
        var imgLength = $('.masonry img').length,
        loaded = 0;

        $('.masonry img').each(function () {

            var $img = $('<img />'),
            source = $(this).attr('src');

            $img.on('load', function () {
                // image loaded correctly
                loaded++;

                if (loaded == imgLength) initMasonry();
            }).on('error', function () {
                // error loading image
                imgLength--;

                if (loaded == imgLength) initMasonry();
            }).attr('src', source);

        });
    }

    events.on('asyncFingerprint', init);
    events.on('pagingChanged', init);

    return {
        init: init
    };
}
