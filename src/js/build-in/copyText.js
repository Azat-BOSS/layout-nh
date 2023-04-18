export default function copyText() {
    const copyText = document.querySelector(".js-copy-text");
    if (!copyText) return

    const copyButton = document.querySelector('.js-copy-button');
    const copyTextTooltip = document.querySelector('.js-copy-tooltip')

    copyButton.addEventListener('click', copyingText)

    function copyingText() {
        copyText.select();
        document.execCommand("copy");

        copyTextTooltip.style.opacity = "1";
        copyTextTooltip.style.visibility = "visible";

        setTimeout(function(){
            copyTextTooltip.style.opacity = "0";
            copyTextTooltip.style.visibility = "hidden";
        }, 1500)
    }
}