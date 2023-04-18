export default function aboutMoreButton() {
    const textContainer = document.querySelector('.about-section__text');
    if (!textContainer) return;

    const firstParagraph = textContainer.querySelector('p:first-child');
    const moreButton = document.querySelector('.about-section__more-button');

    if (textContainer.querySelectorAll('p').length <= 1) {
        moreButton.classList.add('visually-hidden');
        textContainer.classList.add('active');
        return;
    }

    moreButton.addEventListener('click', () => {
        if (textContainer.classList.contains('active')) {
            moreButton.textContent = 'Читать полностью';
        } else {
            moreButton.textContent = 'Скрыть текст';
        }
        textContainer.classList.toggle('active');
    })
}