export default function multiselects() {
    const selects = document.querySelectorAll('.js-multi-select');

    selects.forEach(select => {
        const header = select.querySelector('.js-multi-select-header');
        const checkboxes = select.querySelectorAll('.checkbox');
        const countBlock = select.querySelector('.js-multi-select-count-block');
        const count = select.querySelector('.js-multi-select-count');

        header.addEventListener('click', () => {
            select.classList.toggle('active');
        })

        document.addEventListener('click', e => {
            const targetSelect = e.target.closest('.js-multi-select');
            if (!targetSelect || targetSelect !== select) select.classList.remove('active')
        })

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const checkboxesCheckedCount = [...checkboxes].filter(chb => chb.checked).length;

                if (checkboxesCheckedCount > 0) {
                    countBlock.classList.add('active');
                    header.classList.add('active');
                    count.innerHTML = checkboxesCheckedCount;
                } else {
                    countBlock.classList.remove('active');
                    header.classList.remove('active');
                }
            })
        })
    })
}