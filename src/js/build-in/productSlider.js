import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function productSlider() {
    const productCard = document.querySelector('.product-card');
    if (!productCard) return;

    const swiper = new Swiper('.product-card__img-slider', {
        slidesPerView: 1,
        speed: 1500,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: productCard.querySelector('.js-next-slide'),
            prevEl: productCard.querySelector('.js-prev-slide'),
        },
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
            formatFractionCurrent: function (number) {
                return String(number).length > 1 ? number : '0' + number;
            },
            formatFractionTotal: function (number) {
                return String(number).length > 1 ? number : '0' + number;
            }
        },
    })
}