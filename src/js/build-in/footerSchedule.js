export default function footerSchedule() {
    const weekDays = document.querySelectorAll('.footer__menu-schedule-term');

    weekDays.forEach(day => {
        if (!matchMedia('(max-width: 640px)').matches) return

        const shortDay = day.textContent.split(' ').map(word => {
            if (word !== '-') {
                switch (word.toLowerCase()) {
                    case 'понедельник':
                        word = 'Пн'
                        break;
                    case 'вторник':
                        word = 'Вт'
                        break;
                    case 'среда':
                        word = 'Ср'
                        break;
                    case 'четверг':
                        word = 'Чт'
                        break;
                    case 'пятница':
                        word = 'Пт'
                        break;
                    case 'суббота':
                        word = 'Сб'
                        break;
                    case 'воскресение':
                        word = 'Вс'
                        break;
                }
            }
            return word
        }).join(' ');

        day.textContent = shortDay;
    })
}