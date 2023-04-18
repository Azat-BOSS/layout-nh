document.addEventListener('DOMContentLoaded', () => {
    // handleForm();
});

function handleForm() {
    const forms = Array.from(document.querySelectorAll('.js-handle-form'));
    forms.forEach(form => {
        const url = form.action;
        const submitBtn = form.querySelector('.js-submit-form');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitBtn.classList.add('disabled');

            const formData = new FormData(form);

            fetch(url, {
                body: formData,
                method: "POST"
            })
                .then(response => {
                    if (response.ok) {
                        window.openModal("success");
                        form.reset();
                    } else {
                        window.openModal("error");
                    }

                    return response.json();
                })
                .then(data => {
                    console.log(data);
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    submitBtn.classList.remove('disabled');
                })
        })
    })
}

const search = document.querySelector('.js-search');
const searchInput = document.querySelector('.js-search-input');
const resultContent = document.querySelector('.js-search-result');
const recommendContent = document.querySelector('.js-search-recommend');

document.addEventListener('click', checkTarget);
searchInput.addEventListener('input', toggleContents);
document.addEventListener('keydown', function (event) {
    if (event.which === 27) {
        hideSearch();
    }
});

function toggleContents() {
    if (searchInput.value.trim()) {
        resultContent.classList.add('show');
        recommendContent.classList.remove('show');
    } else {
        resultContent.classList.remove('show');
        recommendContent.classList.add('show');
    }
}

function hideContents() {
    resultContent.classList.remove('show');
    recommendContent.classList.remove('show');
}

function checkTarget(e) {
    if (e.target.classList.contains('.js-search-button') || e.target.closest('.js-search-button') || e.target.closest('.js-search')) {
        showSearch();
        toggleContents();
    } else {
        hideSearch();
        hideContents();
    }
}

function showSearch() {
    search.classList.add('show');
}

function hideSearch() {
    search.classList.remove('show');
}
