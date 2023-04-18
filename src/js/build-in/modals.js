/* ######

Как пользоваться:

Пример:

###### */

import { disableBodyScroll as lockScroll, clearAllBodyScrollLocks as unlockScroll } from 'body-scroll-lock';

export default function modals() {
    window.activeModal = null;

    function openModal(id, event) {

        const modal = document.querySelector(`.js-modal-${id}`);
        if (!modal) {
            // console.error(`Modal with ID: ${id} not found`);
            return;
        }

        if (window.onOpenModal) {
            window.onOpenModal(modal, event);
        }

        if (typeof window.closeMenu === 'function') {
            window.closeMenu();
        }

        if (event) {
            event.preventDefault();
        }

        const openHandler = () => {
            let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
            const fixBlocks = document.querySelectorAll(".fix-blocks");
            fixBlocks.forEach((el) => {
                el.style.paddingRight = paddingOffset;
            });

            lockScroll(modal, {
                reserveScrollBarGap: true,
            });

            modal.classList.add('active');
            document.body.classList.add('modal-open');
            window.activeModal = modal;

            const repeatButton = modal.querySelector('.js-repeat-button');
            if (repeatButton) {
                repeatButton.href = '#' + window.prevActiveModal.className.match(/js-modal-(\w+)/i)[1]
            }

            window.initModalFix();

            const openModalEvent = new CustomEvent('openmodal');
            document.dispatchEvent(openModalEvent);
        };
        if (window.activeModal) {
            window.prevActiveModal = window.activeModal;
            closeModal(window.activeModal);

            setTimeout(() => {
                openHandler();
            }, 400);
        } else {
            openHandler();
        }
    }

    function closeModal(modal) {
        
        if (window.onCloseModal) {
            window.onCloseModal(modal);
        }
        
        const container = modal.querySelector('.modal__container');

        document.body.classList.remove('modal-open');
        unlockScroll();

        const fixBlocks = document.querySelectorAll(".fix-blocks");
        fixBlocks.forEach((el) => {
            el.style.paddingRight = '0px';
        });

        modal.classList.remove('active');

        window.activeModal = null;

        const closeModalEvent = new CustomEvent('closemodal');
        document.dispatchEvent(closeModalEvent);
    }

    window.openModal = openModal;

    window.closeModal = closeModal;

    document.addEventListener('click', (event) => {
        if (event.target.matches('a') || event.target.closest('a')) {
            const link = event.target.matches('a') ? event.target : event.target.closest('a');
            const hash = link.hash.slice(1);
            if (!hash) return;
            openModal(hash, event);
        } else if (event.target.matches('.js-close-modal') || event.target.closest('.js-close-modal')) {
            event.preventDefault();
            const modalToClose = event.target.closest('.js-modal');
            closeModal(modalToClose);
        } else if (event.target.matches('.js-modal')) {
            event.preventDefault();
            const modalToClose = event.target;
            closeModal(modalToClose);
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.which === 27 && window.activeModal) {
            closeModal(window.activeModal);
        }
    });
}
