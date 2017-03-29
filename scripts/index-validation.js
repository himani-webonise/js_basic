
// firstName, lastName min 3 max 15

// var firstName = document.getElementsByName('firstname')
// var lastName = document.getElementsByName('lastname')

// let minName = 3;
// let maxName = 15;



/*var submit = document.querySelectorAll('input[type=submit]');
submit.addEventListener("click", nameLengthValidator(lastName, minName, maxName));

function nameLengthValidator(value, min, max) {
	var valueLength = value.length
	console.log(valueLength)
	if (valueLength <= min && valueLength >= max) {
		return //
	} else {
		var error = value + "is not valid";
		console.log(error);
		return false;		
	}
}*/
// var form = document.querySelectorAll('form');
// form.addEventListener("click", test);//nameLengthValidator(lastName, minName, maxName));
// var btn = document.getElementById('submit1');
// alert(btn)
// btn.addEventListener("click", function(){ alert("Hello World!"); });
// function test() {
// 	alert('hello');
// }

function nameLengthValidator() {

	var firstName = document.getElementsByName('firstname');
	var lastName = document.getElementsByName('lastname');
	var gender = document.getElementById('gender');
	
	let minName = 3;
	let maxName = 15;

	if (validate(firstName, minName, maxName) && validate(lastName, minName, maxName)) {
		console.log("true");
		return true;
	} else {
		var errorMsg = "Enter valid firstname and lastname";
		alert(errorMsg);
		var error = document.getElementById('error');
		error.innerHTML = errorMsg;
		reloadCurrentPage();		
	}	
}

function validate(value, min, max) {
	var valueLength = value.length
	console.log(valueLength)
	if (valueLength <= min && valueLength >= max) {
		return true;
	}
	return false;
}

function reloadCurrentPage() {
	var currentURL = window.location.href;
	window.location = currentURL;
}

var submit = document.getElementById('submit1');
submit1.addEventListener("click", nameLengthValidator, false);
