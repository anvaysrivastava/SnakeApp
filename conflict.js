function checkConflict( position, isCheckWithoutHead)
{

	if(!isCheckWithoutHead) {
		if(position.x == snakeGrid[0].x && position.y == snakeGrid[0].y ) {
			return true;
		}
	}
	for(i=1;i<snakeGrid.length;i++){
		if(position.x == snakeGrid[i].x && position.y == snakeGrid[i].y ) {
			return true;
		}
	}
	return false;
}

function checkSelfEating()
{
	if(checkConflict(snakeGrid[0], true)){
		gameState="gameOver";
		alert("Game Over \n Your Score : " + score);
		sdocument.getElementById('score').innerHTML = score;
		score = 0;
		return true;
	}
	return false;
}

function checkFoodEating(foodPosition)
{
	if( checkConflict(foodPosition, true)){
		snakeGrid.push(new pixel(snakeGrid[1].x,snakeGrid[1].y,true));
		generateFoodPosition();
		score = score + 1;
		document.getElementById('score').innerHTML = score;
		drawFood();
		return true;
	}
	drawFood();
	return false;
}