import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function titleAnimation() {
    const titles = document.querySelectorAll('.js-title-animate');

    titles.forEach(title => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: title,
                start: "top 90%"
            }
        })

        tl.fromTo(title, {
            y: "110%",
            duration: 0.8,
            opacity: 0,
            delay: title.dataset.delay ? title.dataset.delay : 0
        }, {
            y: 0,
            opacity: 1
        })
    })
}

window.initTitleAnimation = titleAnimation;