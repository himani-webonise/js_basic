
var urlParams = getUrlParamString();

var firstName = urlParams.get("firstname");
var lastName = urlParams.get("lastname");

var user = {
	firstName : urlParams.get("firstname"),
	lastName : urlParams.get("lastname")
}

function getUrlParamString() {
	return new URLSearchParams(document.location.search.substring(1));
}