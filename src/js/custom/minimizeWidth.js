export default function minimizeWidth() {
    let d = document.querySelectorAll('.js-minimize-width'),
        i, w, width, height;

    for(i = 0; i < d.length; i++) {
        width = d[i].offsetWidth;
        height = d[i].offsetHeight;

        for (w = width; w; w--) {
            d[i].style.width = w + 'px';
            if (d[i].offsetHeight !== height) break;
        }

        if (w < d[i].scrollWidth) {
            d[i].style.width = d[i].style.maxWidth = d[i].scrollWidth + 'px';
        } else {
            d[i].style.width = (w + 1) + 'px';
        }
    }
}