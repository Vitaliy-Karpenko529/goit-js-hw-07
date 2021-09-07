const valInput = document.querySelector(`#validation-input`);

valInput.addEventListener(`blur`, inputCheck);

function inputCheck(event){ 
    const lengthValue = this.dataset.length;
    if(event.currentTarget.value.length === Number(lengthValue)){
		valInput.classList = 'valid';
	} else {
		valInput.classList = 'invalid';
	}
}