let fontSizeRef = document.getElementById9("font-size");

const createFontSize = () => {
    for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
}}

fontSizeRef.value = 3;

module.exports = {createFontSize};