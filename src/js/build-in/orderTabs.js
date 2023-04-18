export default function orderTabs() {
    const tabsContainer = document.querySelector('.js-order-tabs');
    const tabs = document.querySelectorAll('.js-order-tab');
    const contents = document.querySelectorAll('.js-order-tab-content')

    if (!tabsContainer) return;

    tabsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('js-order-tab')) {
            tabActivate(e.target.dataset.href);
        } else if (e.target.closest('.js-order-tab')) {
            tabActivate(e.target.closest('.js-order-tab').dataset.href);
        }
    })

    function tabActivate(id) {
        tabs.forEach((tab) => {
            if (tab.dataset.href === id) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        const content = document.querySelector(`.js-order-tab-content[data-id="${id}"]`);

        contents.forEach(tabContent => {
            if (tabContent === content) {
                tabContent.classList.add('active')
            } else {
                tabContent.classList.remove('active')
            }
        })
    }
}