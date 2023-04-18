export default function categories() {
    const categoriesSection = document.querySelectorAll('.js-categories');

    categoriesSection.forEach(categories => {
        const selects = categories.querySelectorAll('.js-categories-select');
        const title = document.querySelector('.catalog__title');
        const desc = document.querySelector('.catalog__desc p');

        selects.forEach(select => {
            const selectHeader = select.querySelector('.js-categories-select-header');

            selectHeader.addEventListener('click', () => {
                select.classList.toggle('active');
            });

            document.addEventListener('click', e => {
                const targetSelect = e.target.closest('.js-categories-select');
                if (!targetSelect || targetSelect !== select) select.classList.remove('active')
            })


            const selectCloseButton = select.querySelector('.js-categories-select-close');
            if (!selectCloseButton) return;

            selectCloseButton.addEventListener('click', () => {
                select.classList.remove('active');
            })
        })

        const list = categories.querySelector('.js-categories-list');
        const items = categories.querySelectorAll('.js-categories-item');

        items.forEach(item => {
            item.addEventListener('change', () => {
                if (item.checked) {
                    const clonedItem = list.querySelector('.catalog__categories-item--cloned');
                    if (clonedItem) clonedItem.remove();

                    title.textContent = item.nextElementSibling.querySelector('span').textContent;
                    desc.textContent = item.dataset.desc;

                    if (item.closest('.js-categories-select') && !item.classList.contains('js-categories-item-mobile')) {
                        const select = item.closest('.js-categories-select');
                        const container = item.closest('.catalog__categories-more-button-item');
                        const itemSvg = container.querySelector('use').href;
                        const itemText = container.querySelector('span').textContent;

                        const category = document.createElement('li');
                        category.className = 'catalog__categories-item catalog__categories-item--cloned tag';
                        category.innerHTML = `
                            <svg>
                                <use xlink:href="${itemSvg.baseVal}"></use>
                            </svg>
                            <span>${itemText}</span>
                        `

                        list.insertBefore(category, select);
                    }
                }
            })
        })
    })
}