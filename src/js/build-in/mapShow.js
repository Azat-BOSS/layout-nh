export default function mapShow() {
    const buttons = document.querySelectorAll('.js-map-show');

    buttons.forEach(button => {
        const map = button.previousElementSibling;

        if (!matchMedia('(max-width: 640px)').matches) return

        if (map.classList.contains('js-none-map')) {
            map.style.height = '0';
        }

        button.addEventListener('click', () => {
            if (map.classList.contains('js-map')) {
                map.style.height = '';
                button.remove();
            }
        })
    })
}