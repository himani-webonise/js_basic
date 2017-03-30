var customName = document.getElementById('customName');
var storyBtn = document.getElementById('storyBtn');
var story = document.getElementById('story');
var temperature;
var oldName = customName.placeholder;

var defaultStory = 'It was 94 farenheit outside, so Willy the Goblin went for a walk.'+
		'When they got to the soup kitchen, they stared in horror for a few moments, then spontaneously' +
		'combusted. Bob saw the whole thing, but he was not surprised — Willy the' +
		'Goblin weighs 21 stone, and it was a hot day.'

storyBtn.addEventListener("click", generateStory);

function generateStory() {	

	if (customName.value) {
		defaultStory = defaultStory.replace(oldName, customName.value);
		oldName = customName.value;
	}

	getTemperature();
	story.innerHTML = defaultStory;
	return;
}

function getTemperature() {
	var radioBtn = document.querySelector('input[name="country"]:checked');
	var temperature;
	if (radioBtn && radioBtn.value == 'UK') {
		var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
		defaultStory = defaultStory.replace('94 farenheit',temperature); 
	} else {
		defaultStory = defaultStory.replace('34 centigrade', '94 farenheit'); 
	}

}