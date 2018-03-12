
$(function () {
    // mobile nav slide out
    $(".js--hamburger").on("click", function() {
        if (window.matchMedia('(max-width: 700px)').matches) {
            $(".nav__main").toggleClass("open");
        }
    });

    //flickity
    $('.hero-carousel').flickity({
        cellAlign: 'center',
        autoPlay: 2000,
        prevNextButtons: false,

    });
});