
var getQueryParamString = function(key) {
	var queryParams = new URLSearchParams(document.location.search.substring(1));
	return queryParams.get(key);
}

var user1 = {
	firstName : getQueryParamString("firstname"),
	lastName : getQueryParamString("lastname")
}

console.log(user1);
var urlParams = getUrlParamString();
var firstName = urlParams.get("firstname");
var lastName = urlParams.get("lastname");

var user2 = {
	firstName : urlParams.get("firstname"),
	lastName : urlParams.get("lastname")
}

function getUrlParamString() {
	return new URLSearchParams(document.location.search.substring(1));
}

var firstnamePara = document.getElementsByName('firstName');

