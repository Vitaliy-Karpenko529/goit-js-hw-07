const controlEvent = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

const handleInput = (event) => {
  textSize.style.fontSize = event.currentTarget.value + `px`;
};

controlEvent.addEventListener("input", handleInput);