export default function hideAddLink() {
    const button = document.querySelector('.js-add-link');
    if (!button) return;

    const footer = document.querySelector('.footer');

    window.addEventListener('scroll', () => {
        if (footer.getBoundingClientRect().top - window.innerHeight <= 0) {
            button.classList.add('hide')
        } else {
            button.classList.remove('hide');
        }
    }, {passive: true})
}