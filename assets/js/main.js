const buttons = document.querySelectorAll(".button");
const displayBox = document.querySelector("#display-box");
let clear = false;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (clear) {
            displayBox.value = "";
        }

        if (button.value === "=") {
            displayBox.value += "=" + eval(displayBox.value);
            clear = true;
        } else if (button.value === "CE") {
            displayBox.value = "";
            clear = false;
        } else if (button.value === "≺") {
            displayBox.value = displayBox.value.slice(0, -1);
        } else {
            displayBox.value += button.value;
            clear = false;
        }
    });
});