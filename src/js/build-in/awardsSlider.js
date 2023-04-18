import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);


export default function awardsSlider() {
    const swiper = new Swiper('.awards__slider', {
        slidesPerView: "auto",
        breakpoints: {
            769: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 3
            }
        }
    })
}