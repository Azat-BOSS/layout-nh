import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);


export default function featuresSlider() {
    /*const swiper = new Swiper('.features__slider', {
        slidesPerView: "auto",
        loop: true,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
            delay: 0
        }
    })*/

    const slider = document.querySelector('.features .swiper');
    if (!slider) return;

    const wrapper = slider.querySelector('.swiper-wrapper');
    const slidesWidth = [...wrapper.querySelectorAll('.swiper-slide')].reduce((sum, slide) => sum + slide.clientWidth, 0);

    if (slidesWidth <= slider.clientWidth) return;

    let slideIndex = 0;
    let distance = -500;

    moveWrapper();
    addSlide();
    setInterval(moveWrapper, 8000);
    setInterval(addSlide, 5000)

    function moveWrapper() {
        wrapper.style.transform = `translateX(${distance}px)`;
        distance = distance - 500;
    }

    function addSlide() {
        const slides = wrapper.querySelectorAll('.swiper-slide');
        const clone = slides[slideIndex].cloneNode(true);
        wrapper.appendChild(clone);

        slideIndex++
    }
}