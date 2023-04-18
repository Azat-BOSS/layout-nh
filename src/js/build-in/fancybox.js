import { Fancybox } from '@fancyapps/ui';
import { disableBodyScroll as lockScroll, clearAllBodyScrollLocks as unlockScroll } from 'body-scroll-lock';

export default function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        Image: {
            zoom: false
        },
        on: {
            init() {
                let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
                const fixBlocks = document.querySelectorAll(".fix-blocks");
                fixBlocks.forEach((el) => {
                    el.style.paddingRight = paddingOffset;
                });

                lockScroll(this, {
                    reserveScrollBarGap: true,
                });
            },
            destroy() {
                unlockScroll(this);

                const fixBlocks = document.querySelectorAll(".fix-blocks");
                fixBlocks.forEach((el) => {
                    el.style.paddingRight = '0px';
                });
            }
        }
    })
}