const input = document.querySelector("input");
const button = document.querySelector("button");
const found = document.querySelector(".found");

let guess = "";
let code = "";
let count = 0;
let startTime;

input.addEventListener("input", e => {
	code = e.target.value;
});

button.addEventListener("click", e => {
	count = 0;
	guess = "";
	startTime = Date.now();
	let foundPassword = findPassword(code);
	let timeElapsed = Date.now() - startTime;
	found.textContent = `Found the code: ${foundPassword} in ${
		timeElapsed / 1000
	} seconds`;
});

function findPassword(code) {
	while (guess.toString() !== code) {
		https: guess = count.toString();
		if (guess.length < code.length) {
			guess = `0${guess.toString()}`;
		}
		count++;
	}
	input.value = "";
	return guess;
}
