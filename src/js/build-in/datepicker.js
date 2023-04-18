import AirDatepicker from 'air-datepicker';

export default function datepicker() {
    const elementsDate = document.querySelectorAll('.js-datepicker');

    elementsDate.forEach(element => {
       const datepicker = new AirDatepicker(element, {
           dateFormat: 'd MMM',
           minDate: new Date(),
           onSelect({date, formattedDate, datepicker}) {
               const now = new Date();

               if (date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) {
                    datepicker.$el.value = `Сегодня, ${datepicker.$el.value}`;
               }
           },
           onShow(isFinished) {
               if (isFinished) return;
               rotateArrow(datepicker);
           },
           onHide(isFinished) {
               if (isFinished) return;
               rotateArrow(datepicker)
           }
       });
    });

    const elementsTime = document.querySelectorAll('.js-datepicker-time');

    elementsTime.forEach(element => {
        const datepicker = new AirDatepicker(element, {
            timepicker: true,
            onlyTimepicker: true,
            range: true,
            multipleDatesSeparator: ' - ',
            onShow(isFinished) {
                if (isFinished) return;
                rotateArrow(datepicker);
            },
            onHide(isFinished) {
                if (isFinished) return;
                rotateArrow(datepicker)
            }
        })
    })
}

function rotateArrow(datepicker) {
    const datepickerEl = datepicker.$el;
    const container = datepickerEl.closest('.js-datepicker-container');

    container.classList.toggle('active');
}
