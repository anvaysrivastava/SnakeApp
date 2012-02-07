var canvas;
var snakeDirection = 'left';
var tempDirection = 'left';
var gameState = 'running';
var refreshScreen = false;
var verPixels,horPixels;
var foodDark = false;
var score = 0;

var snakeGrid = [];
function pixel(x, y, isActive) { this.x = x; this.y = y; this.isActive = isActive;}


function load() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    document.addEventListener("keydown", keyHandler, false);
    window.addEventListener("resize", screenRedraw, false); 
    window.addEventListener("focus", screenRedraw, false); 
    generateSnake(20);
    refreshScreen = true;
	setInterval(drawHandler, 100);
	setInterval(blinkFood,200);
    screenClear();
}


function generateSnake(snakeLength) {
    var tmp = 10;
	while(snakeGrid.length>0){
		snakeGrid.pop();
	}
    for(var i=0; i < snakeLength; i++) {
        snakeGrid.push(new pixel(tmp++, 10, true));
    }
}
