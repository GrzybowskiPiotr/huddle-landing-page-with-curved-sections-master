const input = document.querySelector("#email");
const button = document.querySelector("#subscribe");
const form = document.querySelector("form");
const msg = document.querySelector(".error_msg");
const validRegex = new RegExp(
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

function emailCheck(e) {
	e.preventDefault();
	if (validRegex.test(input.value)) {
		if (input.classList.contains("input_error")) {
			input.classList.remove("input_error");
			msg.classList.add("hide");
		}
		form.submit();
	} else {
		input.classList.add("input_error");
		msg.classList.remove("hide");
	}
}

button.addEventListener("click", emailCheck);
