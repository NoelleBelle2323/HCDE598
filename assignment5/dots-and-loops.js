//Dots and loops with Red & Pink Dots
//jcarr88@uw.edu 

//Overview:
//1st loop: draw the Dot (drawDot) starting at x,y coordinates of (50, 50)
//The loop logic tests if x is less than or equal to the 
//width of the canvas (500), then add another 51 to the x value,
//to make x an odd #, such that it can be used by (isOdd(x)) to 
//create 2 states true & false to assign different color schemes.
//I made the 2nd loop to increase the y value, replacing 
//this manual solution: 
//drawDot(x, y*2, size);
//drawDot(x, y*3, size);
//The 2nd loop works like the first but when both loops run  
//it changed the order that the dots were made. Changing the 
//creation from left to right (with only 1 loop) to creating 
//dots column by column.
//Dot color is determined by x value odd(pink) or even(red).
//Every dot has a white dot inside it-- just becuase.
//I referenced createCanvas parameters with width and height
//Using height- (dotSize/2) got rid of the half at the bottom

function setup() {
	createCanvas(500, 300);
	noStroke(0);
	const dotSize = 50
	const oddColor = ('pink');
	const evenColor = ('red');
	const backDrop = ('white');
	background(backDrop);


	for (var x = dotSize; x <= width; x += dotSize + 1) {
		for (var y = dotSize; y <= height - (dotSize/2); y += dotSize) {
			var size = width / 10;
			if (isOdd(x)) {
				fill(oddColor);
			} else {
				fill(evenColor);
			}
			drawDot(x, y, size);
			//Commenting out print function, but this was super helpful!			
			//print("x:" + x +": odd = "+ isOdd(x) +" y:" + y);
		}
	}

	// Draws a dot at varying x, y defined sizes/locations. 
	function drawDot(x, y, scale) {
		ellipse(x, y, scale, scale);
		fill(backDrop);
		ellipse(x, y, scale / 3, scale / 3);
	}

	// function to determine if x is odd/true or even/false.
	function isOdd(x) {
		var remainder = x % 2;
		if (remainder == 1) {
			return true;
		} else {
			return false;
		}
	}
	//empty draw function- just b/c it is expected in the code.
	function draw() {}
}