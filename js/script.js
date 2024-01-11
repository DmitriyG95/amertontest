function initSlider() {
    const swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 24,
        slideActiveClass: "active",
        watchSlidesProgress: true,

        navigation: {
            nextEl: ".question .swiper-button-next",
            prevEl: ".question .swiper-button-prev",
        },
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1280: {
                slidesPerView: 4,
            },
        },
    });
}
document.addEventListener("DOMContentLoaded", function () {
    console.log(1);
    initSlider();
});
