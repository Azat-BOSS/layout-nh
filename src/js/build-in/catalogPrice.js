import nouislider from "nouislider";

export default function catalogPrice() {
    const ranges = document.querySelectorAll('.js-price-range');

    ranges.forEach((range, index) => {
        const nous = nouislider.create(range, {
            start: range.dataset.startValue.split(','),
            connect: true,
            step: 1,
            range: {
                'min': [range.dataset.min * 1],
                'max': [range.dataset.max * 1]
            }
        });
        window.priceRanges[index] = nous;

        const priceContainer = range.closest('.js-price-container');
        const price0 = priceContainer.querySelector('.price-0');
        const price1 = priceContainer.querySelector('.price-1');
        const prices = [price0, price1];

        nous.on('update', (values, handle) => {
            prices[handle].value = Math.round(values[handle]);
        });

        nous.on('change', (values, handle) => {
            if (window.catalogResetButtons[index].classList.contains('visually-hidden')) {
                window.catalogResetButtons[index].classList.remove('visually-hidden');
            }
        })

        prices.forEach((el, index) => {
            el.addEventListener('change', e => {
                const arr = [];
                arr[index] = e.currentTarget.value;

                nous.set(arr);
            })
        })
    })
}