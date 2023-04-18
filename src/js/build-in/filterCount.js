export default function filterCount() {
    const form = document.querySelector('.modal-filter__form');
    if (!form) return;

    const counterEl = document.querySelector('.catalog-filter__open-button');
    if (!counterEl) return;

    const formInputs = [...form.elements];
    const defaultValues = saveDefaultValues();
    const priceRange = window.priceRanges[1];

    formInputs.forEach(el => {
        el.addEventListener('change', changeFilterCount)
    });

    priceRange.on('change', changeFilterCount);

    form.addEventListener('reset', () => {
        setTimeout(changeFilterCount)
    })


    function saveDefaultValues() {
        const obj = {};

        [...form.elements].forEach(el => {
            if (el.type === 'checkbox') {
                obj[el.name] = el.checked;
            } else {
                obj[el.name] = el.value;
            }
        });

        return obj;
    }

    function changeFilterCount() {
        let count = 0;

        formInputs.forEach(el => {
            if (el.type === 'checkbox') {
                if (el.checked !== defaultValues[el.name]) {
                    count++
                }
            } else {
                if (el.value !== defaultValues[el.name]) {
                    count++
                }
            }
        })

        if (count > 0) {
            counterEl.classList.add('catalog-filter__open-button--show-count')
        } else {
            counterEl.classList.remove('catalog-filter__open-button--show-count')
        }

        counterEl.style.setProperty('--filter-count', count)
    }
}