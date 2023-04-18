import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function sectionAnimation() {
    const sections = document.querySelectorAll('.js-section-animate');

    sections.forEach(section => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 90%",
                onEnter: () => {
                    section.classList.add('animate-element')
                },
                onLeave: () => {
                    section.classList.add('animate-element')
                },
                onLeaveBack: () => {
                    section.classList.add('animate-element')
                },
                onEnterBack: () => {
                    section.classList.add('animate-element')
                }
            }
        })

        tl.to(section, {
            delay: section.dataset.delay ? section.dataset.delay : 0
        })

        section.addEventListener('animationend', () => {
            section.style.willChange = 'auto';
            section.style.transform = 'none';
        })

        /*tl.fromTo(section, {
            y: 30,
            opacity: 0,
            delay: section.dataset.delay ? section.dataset.delay : 0
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            willChange: 'auto',
            clearProps: 'transform'
        })*/
    })
}

window.initSectionAnimation = sectionAnimation;