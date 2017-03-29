//get a handle to my form
var myform = document.getElementById("form1");

//listen for submit
myform.addEventListener("submit", function(e) {
    console.log("submit");

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errors = '';

    if(username == '') errors += 'Please specify a username.\n';
    if(password == '') errors += 'Please specify a password.\n';

    console.log(errors);
    if(errors != '') {
        var error = document.getElementById("error");
        error.innerHTML = errors;
        e.preventDefault();
    }

});

var validator = {

    username : function() {
        
    },

    password : function() {

    }
}