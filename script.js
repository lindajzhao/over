
$(function () {
    // mobile nav slide out
    $(".js--hamburger").on("click", function() {
        if (window.matchMedia('(max-width: 700px)').matches) {
            $(".nav__main").toggleClass("open");
        }
    });

    // $(".js--hamburger").on("click", function () {
    //     // if (window.matchMedia('(max-width: 700px)').matches) {
    //         $(".nav__main").toggleClass("open");
    //     // }
    // });
    // if (window.matchMedia('(min-width: 699px)').matches) {
    //     $(".nav__main").removeClass("open");
    //     console.log("remove open");
    // }

});