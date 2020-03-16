$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {

        if (scrollOffset >= introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth Scroll
    $("[data-scroll]").on("click", function(event){
            event.preventDefault();

            var $this = $(this),
                blockId = $this.data('scroll'),
                blockOffset = $(blockId).offset().top;


            $("html, body").animate({
                scrollTop: blockOffset
            }, 500);
    })


});
