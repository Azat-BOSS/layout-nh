export default function readMoreButton() {
    const buttons = document.querySelectorAll('.js-read-button');

    if (!matchMedia('(max-width: 640px)').matches) return

    buttons.forEach(button => {
        const container = button.closest('.wide-text-container');
        if (!container) return

        const hideElements = [];

        findNestsCount(container);

        button.parentElement.tagName.toLowerCase() === "p" ? button.parentElement.remove() : button.remove();
        container.appendChild(button);

        button.addEventListener('click', () => {
            if (hideElements.find(item => item.classList.contains('hide'))) {
                button.textContent = 'Скрыть текст';
            } else {
                button.textContent = 'Читать полностью';
            }

            hideElements.forEach(el => el.classList.toggle('hide'))
        })

        function findNestsCount(wrapper) {
           let elementIndex;

            [...wrapper.children].forEach((el, index) => {
                if (el === button) {
                    elementIndex = index
                } else if (el.querySelector('.js-read-button')) {
                    elementIndex = index;
                    findNestsCount(el)
                }

                if (index > elementIndex) {
                    el.classList.add('hide');
                    hideElements.push(el);
                }
            })
        }
    })
}