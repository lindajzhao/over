
$(function () {
    // mobile nav slide out
    $(".js--hamburger").on("click", function() {
        if (window.matchMedia('(max-width: 700px)').matches) {
            $(".nav__main").toggleClass("open");
        }
    });
});