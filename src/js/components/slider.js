document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper(".promo-slider-swiper", {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});