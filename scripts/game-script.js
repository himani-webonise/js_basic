var randomNumber = Math.floor(Math.random()*100 + 1);
var guessCount = 0;
var submit = document.getElementById('submit');
var guess = document.getElementById('guess');
var result = document.getElementById('result');
var newGame = document.getElementById('button');

submit.addEventListener("click", function(e) {

	var guess = document.getElementById('guess');

	if (checkGuess(guess)) {

	}

	e.preventDefault();
});
console.log(randomNumber);


function checkGuess(guess) {
	guessCount++;
	//TODO: change by args
	console.log(randomNumber);
		
	var userGuessNumber = guess;
	var result = document.getElementById('result');
	result.innerHTML = '';
	debugger;

	if (guessCount == 4) {
		setGameOver();
	} else if (userGuessNumber.value == randomNumber) {
		var success = "Your guess is correct";
		alert(success);
		result.innerHTML = success;
	 	// congrats
	 	// stop
	} else if (userGuessNumber.value > randomNumber) {
		var failure = "Your guess is too high";
		alert(failure);
		result.innerHTML = failure;
	 	// high
	} else if (userGuessNumber.value < randomNumber) {
		// low
		var failure = "Your guess is too low";
		alert(failure);
		result.innerHTML = failure;	 	
	}	
}

function setGameOver() {
	result.value = '';
	guess.disabled = true;
	submit.disabled = true;
	resetButton = document.createElement('button');
  	resetButton.textContent = 'Start new game';
  	resetButton.className = 'resetGame';
  	document.body.appendChild(resetButton);
  	resetButton.addEventListener('click', resetGame);
}

function resetGame() {	
	randomNumber = Math.floor(Math.random()*100 + 1);
	guessCount = 0;	guess.textContent = '';
	guess.textContent = '';
	var resetButton = document.getElementsByClassName('resetGame');
	guess.disabled = false;
	submit.disabled = false;
}