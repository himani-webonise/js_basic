var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var updateBtn = document.getElementById('update');
var WIDTH = document.documentElement.clientWidth;
var HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

updateBtn.onclick = function() {
	ctx.clearRect(0,0,WIDTH,HEIGHT);
	for (var i = 0; i < 100; i++) {
	  ctx.beginPath();
	  ctx.fillStyle = 'rgba(255,0,0,0.5)';
	  ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
	  ctx.fill();
	  // ctx.fillRect(random(WIDTH), random(HEIGHT), random(50), 2 * Math.PI);
	}	
}


    function random(number) {
      return Math.floor(Math.random()*number);
    }