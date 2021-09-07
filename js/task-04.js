const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
const spVal = document.querySelector('#value');
let countValue = 0;
const decrement = () => (spVal.textContent = countValue -= 1);
const increment = () => (spVal.textContent = countValue += 1);

buttonDec.addEventListener("click", decrement);
buttonInc.addEventListener("click", increment);