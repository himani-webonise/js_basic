var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
	if (btn.textContent == "Start machine") {
		var stopMsg = "Stop machine"
		btn.textContent = stopMsg
		txt.textContent = stopMsg
	} else {
		var startMsg = "Start machine"
		btn.textContent	= startMsg
		txt.textContent = startMsg
	}
}