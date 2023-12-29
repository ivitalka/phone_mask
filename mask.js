document.addEventListener("DOMContentLoaded", () => {
	const phoneInput = document.querySelector('.phone-input');

	const getNumbers = (input) => input.value.replace(/\D/g, '');

	const onPhoneInput = (e) => {
		const input = e.target;
		let numbersValue = getNumbers(input);
		let formattedValue = "";
		const selectionStart = input.selectionStart;

		if (!numbersValue) return input.value = "";

		if (input.value.length != selectionStart) {
			if (e.data && /\D/g.test(e.data)) {
				input.value = numbersValue;
			}
			return;
		}

		if (["7", "8", "9"].includes(numbersValue[0])) {
			const firstSymbols = "+7";
			if (numbersValue[0] == "9") numbersValue = "7" + numbersValue;
			formattedValue = input.value = firstSymbols + " ";
			if (numbersValue.length > 1) {
				formattedValue += '(' + numbersValue.substring(1, 4);
			}
			if (numbersValue.length >= 5) {
				formattedValue += ') ' + numbersValue.substring(4, 7);
			}
			if (numbersValue.length >= 8) {
				formattedValue += '-' + numbersValue.substring(7, 9);
			}
			if (numbersValue.length >= 10) {
				formattedValue += '-' + numbersValue.substring(9, 11);
			}
		} else {
			formattedValue = '+' + numbersValue.substring(0, 16);
		}
		input.value = formattedValue;
	}
	const onPhoneKeyDown = (e) => {
		const inputValue = e.target.value.replace(/\D/g, '');
		if (e.keyCode == 8 && inputValue.length == 1) {
			e.target.value = "";
		}
	}
	phoneInput.addEventListener('keydown', onPhoneKeyDown);
	phoneInput.addEventListener('input', onPhoneInput, false);

})