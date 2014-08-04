//DrawRectangle.js
function main() {
	//retrieve <canvas> element
	var canvas = document.getElementbyId('example');
	if(!canvas) {
	console.log('Failed to retrieve the <canvas> element');
	return;
	}
	//Get the rendering context for 2DCG
	var ctx = canvas.getContext('2d');
	//Draw a blue rectangle
	ctx.fillstyle = 'rgba(0, 0, 255, 1.0)'; //set a blue color
	ctx.fillRect(120, 150, 150); // Fill a rectangle with the color
	}