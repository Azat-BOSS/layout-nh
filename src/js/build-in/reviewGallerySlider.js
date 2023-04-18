import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs]);

export default function reviewGallerySlider() {

    const swiperThumb = new Swiper('.modal-review__gallery', {
        slidesPerView: "auto",
        on: {
            touchEnd: function(s,e) {
                let range = 5;
                let diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY
                    - s.touches.startY;
                if (diff < range || diff > -range) s.allowClick = true;
            },
        }
    })

    const swiper = new Swiper('.modal-review__slider', {
        slidesPerView: 1,
        speed: 1500,
        effect: "fade",
        thumbs: {
            swiper: swiperThumb
        },
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.js-next-slide',
            prevEl: '.js-prev-slide',
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