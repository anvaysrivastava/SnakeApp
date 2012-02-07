function blinkFood()
{
	if(foodDark){
		updatePixel(foodPosition.x,foodPosition.y,foodDark);
		foodDark = false;
	} else { 
		updatePixel(foodPosition.x,foodPosition.y,foodDark);
		foodDark = true;
	}
}

function drawHandler() {
    if (gameState == 'running') {
        snakeDirection = tempDirection;
        var changedPixels = moveSnake();
        if(refreshScreen){
			screenRedraw();
			refreshScreen=false;
		}
        while(changedPixels.length != 0) {
            var tmp = changedPixels.pop();
            updatePixel(tmp.x, tmp.y, tmp.isActive);
        }
		drawSnake();					//Param: I have added it becuse update pixel creates gap when head passes next to the tail.
		checkSelfEating();
		checkFoodEating(foodPosition);
    }
}

function drawFood()
{
	while( foodPosition.x < 0){
		foodPosition.x = foodPosition.x + horPixels;
	}
	while( foodPosition.x >= horPixels) {
		foodPosition.x = foodPosition.x - horPixels;
	}
	while( foodPosition.y < 0){
		foodPosition.y = foodPosition.y + verPixels;
	}
	while( foodPosition.y >= verPixels) {
		foodPosition.y = foodPosition.y - verPixels;
	}
}

function screenRedraw() {
    screenClear();drawSnake();
}


function screenClear() {
    height = canvas.height = window.innerHeight - 30 - window.innerHeight%10;
    verPixels = canvas.height / 10;
    width = canvas.width = window.innerWidth - 20 - window.innerWidth%10;
    horPixels = canvas.width / 10;
    
    ctx.fillStyle = '#D0D0D0';
    for (var i = 0; i < verPixels; i++) {
        for (var j = 0; j < horPixels; j++) {
            ctx.fillRect(j * 10, i * 10, 8, 8);
        }
    }
}

function drawSnake() {
    for (i = 0; i < snakeGrid.length; i++) {
        updatePixel(snakeGrid[i].x,snakeGrid[i].y, true);
    }
}

function updatePixel(x, y, isActive) {
    if(isActive) {
        ctx.fillStyle = '#444444';
    } else {
        ctx.fillStyle = '#D0D0D0';
    }
    ctx.fillRect(x * 10, y * 10, 8, 8);
}

function moveSnake() {
    
    var changedPixels = new Array(); //First two are x/y of deleted and next two are x/y of new
    
    changedPixels.push(new pixel(snakeGrid[snakeGrid.length - 1].x, snakeGrid[snakeGrid.length - 1].y, false));
    
    for (var i = snakeGrid.length - 1; i>0; i--) {
        snakeGrid[i].x = snakeGrid[i-1].x;
        snakeGrid[i].y = snakeGrid[i-1].y;
    }
                          
    if (snakeDirection == 'left') {
        snakeGrid[0].x = snakeGrid[0].x - 1;
        while (snakeGrid[0].x < 0) {
            snakeGrid[0].x = snakeGrid[0].x + horPixels;
        }
    }
                          
    if (snakeDirection == 'right') {
        snakeGrid[0].x = snakeGrid[0].x + 1;
        while (snakeGrid[0].x >= horPixels) {
            snakeGrid[0].x = snakeGrid[0].x - horPixels;
        }

    }
                          
    if (snakeDirection == 'up') {
        snakeGrid[0].y = snakeGrid[0].y - 1;
        while (snakeGrid[0].y < 0) {
            snakeGrid[0].y = snakeGrid[0].y + verPixels;
        }
    }
                          
    if (snakeDirection == 'down') {
        snakeGrid[0].y = snakeGrid[0].y + 1;
        while (snakeGrid[0].y >= verPixels) {
            snakeGrid[0].y = snakeGrid[0].y - verPixels;
        }
    }
    
    changedPixels.push(new pixel(snakeGrid[0].x, snakeGrid[0].y, true));
    
    return changedPixels;
}