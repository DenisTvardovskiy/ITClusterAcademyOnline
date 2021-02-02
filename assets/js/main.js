

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".navigation").addClass("scroll");
    } else {
        $(".navigation").removeClass("scroll");
    }
});