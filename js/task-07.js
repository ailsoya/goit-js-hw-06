const putIn = document.querySelector("#font-size-control");
const putOut = document.querySelector("#text");

putIn.addEventListener("input", (event) => {
    putOut.style.fontSize = `${event.currentTarget.value}px`;
  });