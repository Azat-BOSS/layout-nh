export default function modalFix() {
    const container = document.querySelector('.modal.active .modal__container');
    if (!container) return;

    if (container.clientHeight >= document.documentElement.clientHeight) {
        container.style.top = 0 + 'px';
        container.style.transform = 'none';
    } else {
        container.style.top = '';
        container.style.transform = '';
    }
}

window.initModalFix = modalFix;