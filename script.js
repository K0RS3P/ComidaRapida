// Incluir comillas para los valores de nextEl y prevEl en la configuración de la navegación
var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next", // Cambiado a ".swiper-button-next"
        prevEl: ".swiper-button-prev", // Cambiado a ".swiper-button-prev"
    }
});

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next", // Cambiado a ".swiper-button-next"
        prevEl: ".swiper-button-prev", // Cambiado a ".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }
});

let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function (input) {
    input.addEventListener('change', function () {
        let id = input.ariaValueMax; // Corregido a "input.getAttribute('aria-valuemax')"
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update(); // Corregido a "thisSwiper.swiper.update()"
    })
});
