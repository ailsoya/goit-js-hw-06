const putIn = document.querySelector("#name-input");
const putOut = document.querySelector("#name-output");

putIn.addEventListener("input", (event) => {
    putOut.textContent = event.currentTarget.value;
  });