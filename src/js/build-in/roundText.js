import CircleType from "circletype";

export default function roundText() {
    const texts = document.querySelectorAll('.js-round-text');

    texts.forEach(text => {
        if (text.classList.contains('circled')) return;

        const circleType = new CircleType(text);

        text.classList.add('circled');
    })
}