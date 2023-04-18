import 'parsleyjs';
import $ from "jquery";

export default function validateOrder() {
    const orderButton = document.querySelector('.order__button');

    if (orderButton) {
        orderButton.addEventListener('click', e => {
            validateForm(document.querySelector('.order__client-form'));
        })
    }
}

function validateForm(form) {
    $(form).parsley().validate();

    return $(form).parsley().isValid()
}

window.initValidateForm = validateForm;