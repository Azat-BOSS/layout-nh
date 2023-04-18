/**
 * Назначает всем элементам одинаковую высоту, равную максимальной одного из элементов
 * Короче, выравнивает высоту элементов
 * Следует применять после события 'load', т.к. необходимо загрузить стили
 * @param {String} parentSelector - селектор общего контейнера
 * @param {String} elementSelector - селектор элементов, которые нужно выровнять
 */
function alignWidths(parentSelector, elementSelector) {
    const container = document.querySelector(parentSelector);
    if (!container) return;

    const elements = container.querySelectorAll(elementSelector);

    if (elements.length === 0) return;

    const setMaxHeight = () => {
        let width = 0;

        //Определяем максимальную высоту блока
        for(let i = 0; i < elements.length; i++ ){
            // Обнуляем height, иначе при ресайзе будет баг
            elements[i].style.width = 'auto';

            let currentWidth = elements[i].clientWidth;
            if(currentWidth > width) {
                width = currentWidth;
            }
        }
        //Задаем максимальную высоту блока всем элементам
        for( let i = 0; i < elements.length; i++ ){
            elements[i].style.width = width + 1 + 'px';
        }
    }

    setMaxHeight();

    window.addEventListener('resize', setMaxHeight);
}

export default alignWidths;