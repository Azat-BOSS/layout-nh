import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function initSliders() {
    const sliders = Array.from(document.querySelectorAll('.js-init-slider'));
    sliders.forEach((slider, i) => {
        if (slider.classList.contains('js-init-slider-mobile') && matchMedia('(max-width: 640px)').matches) return;
        if (slider.classList.contains('js-init-slider-small-tablet') && matchMedia('(max-width: 768px)').matches) return;

        const fadeEffect = slider.dataset.fade ? {effect: 'fade', fadeEffect: {crossFade: true}} : {};
        const autoplay = slider.dataset.delay ? {
            autoplay: {
                delay: Number(slider.dataset.delay),
                disableOnInteraction: true
            }
        } : {};
        const slidesPerView = slider.dataset.slides ? Number(slider.dataset.slides) || 'auto' : 1;
        const spaceBetween = slider.dataset.space ? Number(slider.dataset.space) : 0;
        const loop = !!slider.dataset.loop;
        const hashNavigation = !!slider.dataset.hash;
        const allowTouchMove = !slider.dataset.noTouch;
        const slidesPerColumn = Number(slider.dataset.column);
        const reverseDirection = !!slider.dataset.reverse;
        const autoHeight = !!slider.dataset.autoHeight;
        let freeMode = slider.dataset.freeMode;

        let gridColumn;

        if (slidesPerColumn) {
            gridColumn = {
                rows: slidesPerColumn,
                fill: "row"
            }
        }

        let navigation = slider.querySelector('.js-slider-navigation');
        if (navigation) {
            navigation = {
                navigation: {
                    nextEl: navigation.querySelector('.js-next-slide'),
                    prevEl: navigation.querySelector('.js-prev-slide'),
                }
            }
        } else {
            const navigationContainer = slider.closest('.js-init-slider-container');
            if (navigationContainer) {
                navigation = {
                    navigation: {
                        nextEl: navigationContainer.querySelector('.js-next-slide'),
                        prevEl: navigationContainer.querySelector('.js-prev-slide'),
                    }
                }
            }
        }

        if(freeMode) {
            freeMode = {
                enabled: true,
                sticky: false,
            }
        }

        let breakpointsSpacebetween = slider.dataset.spaces;
        let breakpointsPerview = slider.dataset.slidesBreakpoints;
        const breakpoints = { breakpoints: {} };

        if (breakpointsSpacebetween || breakpointsPerview) {
            if (breakpointsSpacebetween) {
                const widths = breakpointsSpacebetween.match(/[0-9]{3,4}:/g).map(i => i.slice(0, -1));
                const spaces = breakpointsSpacebetween.match(/:[0-9]{1,3}/g).map(i => i.slice(1));

                for (let i = 0; i < widths.length; i++) {
                    const width = Number(widths[i])
                    const space = Number(spaces[i])

                    if (breakpoints.breakpoints[width]) {
                        breakpoints.breakpoints[width].spaceBetween = space;
                    } else {
                        breakpoints.breakpoints[width] = {
                            spaceBetween: space,
                        };
                    }
                }
            }

            if (breakpointsPerview) {
                const widthsPreview = breakpointsPerview.match(/[0-9]{3,4}:/g).map(i => i.slice(0, -1));
                const slides = breakpointsPerview.match(/:[0-9\.]{1,3}/g).map(i => i.slice(1));

                for (let i = 0; i < widthsPreview.length; i++) {
                    const widthPreview = Number(widthsPreview[i])
                    const slide = Number(slides[i])

                    if (breakpoints.breakpoints[widthPreview]) {
                        breakpoints.breakpoints[widthPreview].slidesPerView = slide;
                    } else {
                        breakpoints.breakpoints[widthPreview] = {
                            slidesPerView: slide,
                        };
                    }
                }
            }
        }

        const swiper = new Swiper(slider, {
            slidesPerView,
            autoHeight,
            grid: gridColumn,
            spaceBetween,
            freeMode,
            ...navigation,
            hashNavigation,
            allowTouchMove,
            disableOnInteraction: true,
            ...autoplay,
            loop,
            ...fadeEffect,
            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                type: "fraction",
                clickable: true,
                bulletElement: 'button',
            },
            ...breakpoints
        })

        swiper.init()
    })

}