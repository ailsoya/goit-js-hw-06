function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector(".color");
const colorChange = document.querySelector(".change-color");
const body = document.querySelector("body");

colorChange.addEventListener("click", () => {
  let currentColor = getRandomHexColor()
  spanColor.textContent = currentColor;
  body.style.backgroundColor = currentColor;
});