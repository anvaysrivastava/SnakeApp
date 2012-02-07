var foodPosition = new pixel(5,7,true);

function generateFoodPosition()
{
	while( checkConflict(foodPosition,false)){
		foodPosition.x = Math.floor(Math.random(Math.random())*horPixels);
		foodPosition.y = Math.floor(Math.random()*verPixels);
	}
}