
const refs = {
    fieldInp: document.querySelector(`#name-input`),
    fieldOup: document.querySelector(`#name-output`)
}

refs.fieldInp.addEventListener(`input`, changeInp);

function changeInp(event) {
    if (event.currentTarget.value !== ""){
        refs.fieldOup.textContent = event.currentTarget.value;
    } else {
        refs.fieldOup.textContent = "незнакомец"
    }
    
}