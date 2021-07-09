$( document ).ready(function() {
    console.log( "ready!" );

    $('.slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
});