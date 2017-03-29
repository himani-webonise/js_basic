let BASE_HOSTNAME = window.location.host;
let PATH = window.location.pathname;

function nameLengthValidator() {

	var firstName = document.getElementsByName('firstname');
	var lastName = document.getElementsByName('lastname');
		
	let minName = 3;
	let maxName = 15;
			 
	debugger;

	if (validate(firstName, minName, maxName) && validate(lastName, minName, maxName) && validateGender()) {

		// var url = BASE_HOSTNAME + PATH
		// url = url + "html/succes.html";

		var url = "file:///home/webonise/projects/app-2017/js_basic/html/succes.html"
		reloadCurrentPage(url);
		return true;
	} else {		
		var errorMsg = "Enter valid input";		
		document.getElementById('error').innerHTML = errorMsg;
		return true;		
	}	
}

function validate(value, min, max) {
	var valueLength = value[0].value.length
	if (valueLength >= min && valueLength <= max) {
		return true;
	}
	return false;
}

function validateGender() {
	var checkBox = document.querySelectorAll('input[name=gender]:checked');
	return !(checkBox.length == 2 || checkBox.length == 0);
}

function reloadCurrentPage(url) {	
	window.location = url;
}

var submit = document.getElementById('submit1');
submit1.addEventListener("click", nameLengthValidator);
