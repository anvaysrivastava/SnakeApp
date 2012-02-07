var keyHandler = function(event) {
    
    if (event.keyCode == 37 && snakeDirection != 'right') {
        tempDirection = 'left';
        
    } else if (event.keyCode == 38 && snakeDirection != 'down') {
        tempDirection = 'up';
        
    } else if (event.keyCode == 39 && snakeDirection != 'left') {
        tempDirection = 'right';
        
    } else if (event.keyCode == 40 && snakeDirection != 'up') {
        tempDirection = 'down';
        
    }

    if (event.keyCode == 32 && gameState == 'running') {
        gameState = 'pause';
    } else if (event.keyCode == 32 && gameState == 'pause') {
        gameState = 'running';
	} else if (event.keyCode == 32 && gameState == 'gameOver') {
		generateSnake(20);
		screenClear();
		snakeDirection='left';
		tempDirection='left';
		refreshScreen=true;
		gameState = 'running';
		
	}

}
