export default function showResetButton() {
    const filterForms = document.querySelectorAll('.js-filter-form');

    filterForms.forEach((filterForm, index) => {
        const resetButton = filterForm.querySelector('.js-filter-reset');
        window.catalogResetButtons[index] = resetButton;

        [...filterForm.elements].forEach(el => {
            el.addEventListener('change', () => {
                if (resetButton.classList.contains('visually-hidden')) {
                    resetButton.classList.remove('visually-hidden');
                }
            })
        })

        resetButton.addEventListener('click', () => {
            resetButton.classList.add('visually-hidden');

            const selects = filterForm.querySelectorAll('.js-multi-select');

            selects.forEach(select => {
                const header = select.querySelector('.js-multi-select-header');
                const countBlock = select.querySelector('.js-multi-select-count-block');

                header.classList.remove('active')
                countBlock.classList.remove('active')
            })

            const arr = [...filterForm.elements]
                .filter(input => input.classList.contains('js-filter-price'))
                .map(input => input.dataset.startValue);

            window.priceRanges[index].set(arr)
        });
    })
}