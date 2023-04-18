import Dropzone from "dropzone";
import modalFix from "./modalFix";

export default function fileInputs() {
    const inputs = document.querySelectorAll('.js-dropzone');
    const TOTAL_LENGTH = 4;

    inputs.forEach(input => {
        const container = input.closest('.js-dropzone-container');
        const content = container.querySelector('.js-dropzone-content');
        const progressBlock = container.querySelector('.js-dropzone-progress-block')
        const progress = container.querySelector('.js-dropzone-progress');
        const progressCount = container.querySelector('.js-dropzone-progress-count')

        const dropzone = new Dropzone(input, {
            url: 'img',
            addRemoveLinks: true,
            maxFiles: TOTAL_LENGTH,
            init() {
                const showProgress = () => {
                    if (checkFilesLength(1)) {
                        progressBlock.classList.add('show');
                    } else {
                        progressBlock.classList.remove('show');
                    }
                }

                const calculateProgress = () => {
                    const length = this.files.length;
                    const percent = (length * 100) / TOTAL_LENGTH;

                    progress.style.setProperty('--percent', percent + '%');
                    progressCount.textContent = length < 10 ? '0' + length : length;
                }

                const checkFormat = (file) => {
                    const format = file.name.slice(-3);

                    if (format === 'jpg' || format === 'png' || format === 'jpeg') {
                        return true;
                    } else {
                        return false;
                    }
                }

                const checkFilesLength = (length) => {
                    if (this.files.length >= length) {
                        return true
                    } else {
                        return false
                    }
                }

                const hideButton = () => {
                    const button = container.querySelector('.dz-message');

                    if (checkFilesLength(TOTAL_LENGTH)) {
                        button.classList.add('hide');
                    } else {
                        button.classList.remove('hide');
                    }
                }

                const hideContent = () => {
                    if (checkFilesLength(1)) {
                        content.classList.add('hide');
                    } else {
                        content.classList.remove('hide');
                    }
                }

                this.on('addedfile', (file) => {
                    if (!checkFormat(file)) {
                        this.removeFile(file);
                    }

                    hideButton();
                    hideContent();
                    calculateProgress();
                    showProgress();
                    modalFix();
                })

                this.on('removedfile', () => {
                    hideButton();
                    hideContent();
                    calculateProgress();
                    showProgress();
                    modalFix();
                })

                this.on('maxfilesexceeded', (file) => {
                    this.removeFile(file);
                })
            }
        })
    })
}