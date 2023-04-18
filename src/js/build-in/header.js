import { disableBodyScroll as lockScroll, clearAllBodyScrollLocks as unlockScroll } from 'body-scroll-lock';

export default function header() {
    const header = document.querySelector('.header');
    const headerBurger = document.querySelector('.header__burger-nav');
    const burgerOpenButton = document.querySelector('.header__burger');
    const burgerCloseButton = document.querySelector('.header__burger-close');

    burgerOpenButton.addEventListener('click', () => {
        lockScroll(headerBurger, {
            reserveScrollBarGap: true,
        });
        header.classList.add('active')
    });
    burgerCloseButton.addEventListener('click', () => {
        unlockScroll();
        header.classList.remove('active')
    });

    document.documentElement.style.setProperty('--header-height', header.clientHeight + 'px');
    document.body.style.setProperty('--header-height', header.clientHeight + 'px');

    window.addEventListener('scroll', () => {
        if (header.getBoundingClientRect().top > document.documentElement.getBoundingClientRect().top) {
            if (header.classList.contains('header--fixed')) return;
            header.classList.add('header--fixed');
        } else {
            header.classList.remove('header--fixed');
        }
    }, {passive: true});
}