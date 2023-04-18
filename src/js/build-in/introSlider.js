import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function introSlider() {
    const intro = document.querySelector('.intro');
    if (!intro) return;

    const swiper = new Swiper('.intro__slider', {
        slidesPerView: 1,
        speed: 1500,
        effect: "fade",
        autoHeight: true,
        rewind: true,
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: intro.querySelector('.js-next-slide'),
            prevEl: intro.querySelector('.js-prev-slide'),
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
        }
    })
}

window.initIntroSlider = introSlider;