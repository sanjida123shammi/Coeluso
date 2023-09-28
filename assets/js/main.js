$(document).ready(function(){

    // Swiper Slide
    var swiper = new Swiper(".mySwiper", {

        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },

        effect:"coverflow",
        grabCursor:false,
        centeredSlides:true,
        slidesPerView:"auto",
        spaceBetween:0,
        loop:true,
        coverflowEffect:{
            rotate:0,
            stretch:0,
            depth:200,
            modifier:1,
            slideShadows:false,
        },
    });

    // Footer Swiper Slide
    var swiper = new Swiper(".phoneSwiper", {

        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },

        effect:"coverflow",
        grabCursor:false,
        centeredSlides:true,
        slidesPerView:3,
        spaceBetween:0,
        loop:true,
        coverflowEffect:{
            rotate:0,
            stretch:0,
            depth:300,
            modifier:1,
            slideShadows:false,
        },
    });


    // OWL Carousel Slider
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:750,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    // Materialize Carousel
    


    // WOW Animation
    new WOW().init();    

});