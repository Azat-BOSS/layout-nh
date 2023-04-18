import loadApi from "./loadApi";

export default function contactsMap() {
    let map = document.querySelector('.js-contacts-map');
    if (!map) return;

    const urlElement = document.querySelector('.js-map-url');
    if (!urlElement) return;

    const url = `https://api-maps.yandex.ru/2.1/?apikey=${urlElement.dataset.api}&lang=ru_RU`;
    loadApi('yandex', url, () => {
        ymaps.ready(init);
    })

    function init() {
        const zoom = map.dataset.zoom;
        const coords = map.dataset.coordinates.split(',');
        const marker = map.dataset.marker;

        map = new ymaps.Map(map, {
            center: [...coords],
            zoom
        });

        map.controls.remove('geolocationControl'); // удаляем геолокацию
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип
        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove('rulerControl'); // удаляем контрол правил

        addMarker([...coords], map, marker);
    }

    function addMarker(coords, map, markerIcon) {
        const marker = new ymaps.Placemark(coords, {
            balloonContent: 'ул. Восстания 100 к5050, Казань',
        }, {
            iconLayout: 'default#image',
            iconImageHref: markerIcon,
            iconImageSize: [64, 64],
            iconImageOffset: [-32, -32]
        });

        map.geoObjects.add(marker);
    }
}