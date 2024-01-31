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
		guess = count.toString();
		if (guess.length < code.length) {
			let difference = code.length - guess.length;
			console.log(difference);
			let zeros = "";
			for (let i = 0; i < difference; i++) {
				zeros += "0";
			}
			console.log(zeros);
			guess = `${zeros}${guess.toString()}`;
			console.log(guess);
		}
		count++;
	}
	input.value = "";
	return guess;
}
