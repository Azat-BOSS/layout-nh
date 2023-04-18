import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function pressFilter() {
    const swiper = new Swiper('.press-filter__container', {
        slidesPerView: 'auto'
    })

    swiper.slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            const activeSlideDistanceFromRight = slide.clientWidth + slide.offsetLeft;
            const activeSlideDistanceFromLeft = [...swiper.slides].reduce((sum, item, i) => i < index ? sum : sum + item.clientWidth, 0);
            const windowWidth = document.documentElement.clientWidth;
            const containerPadding = swiper.$el[0].getBoundingClientRect().left;

            if ((activeSlideDistanceFromRight >= windowWidth - containerPadding) || (activeSlideDistanceFromLeft >= windowWidth - containerPadding)) {
                swiper.slideTo(index);
            }
        })
    })
}