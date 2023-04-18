export default function payment() {
    const payments = document.querySelectorAll('.js-payment');

    payments.forEach(payment => {
        payment.addEventListener('click', () => {
            payments.forEach(paymentEl => paymentEl.classList.remove('active'))
            payment.classList.add('active');
        })
    })
}