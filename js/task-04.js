const spanVal = document.querySelector("#value");
const butPlus = document.querySelector("button[data-action=increment]");
const butMinus = document.querySelector("button[data-action=decrement]");
let counterValue = 0;

butPlus.addEventListener("click", () => {
    counterValue += 1;
    spanVal.textContent = counterValue;
})

butMinus.addEventListener("click", () => {
    counterValue -= 1;
    spanVal.textContent = counterValue;
})