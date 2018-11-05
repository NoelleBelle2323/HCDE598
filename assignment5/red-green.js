//Kim Wickens
//A5-Repeated Shapes
//HCDE 598
//This script creates multiple rows of shapes that alternate colors.
//Alternating colors are determined by testing whether an incrementing number is odd or even.
//The canvas size adjusts to the size and quantity of shapes drawn.

//define number of shapes to draw
var shapeQuantity = 5;

//define sizes for shapes
var shapeWidth = 60; //width of shapes
var shapeHeight = 50; //height of shapes
var rowSpacing = shapeHeight; //spacing between rows

// define color variables
var bgColor = 'purple'; //background color

//set canvas size
var padDistance = 50 //distance between shapes and canvas edge
const canvasX = shapeWidth * shapeQuantity + 2 * padDistance; //width of canvas based on number of shapes and shape width
const canvasY = shapeHeight * 2 * shapeQuantity + 2 * padDistance; //height of canvas based on number of shapes and shape height

// define positioning points for drawing shapes
var originX = padDistance; //sets horizontal start point for odd rows
var originY = padDistance; //sets vertical start point for odd rows

function setup() {
	createCanvas(canvasX, canvasY); //draws canvas size
	background(bgColor); //draws canvas color

	// use a for loop to test if i is smaller than the quantity of shapes to draw
	// on the x axis. As long as i is less than the quantity of shapes to draw,
	// i gets incremented by 1 to draw the desired quantity of shapes and to use to
	// test whether i is odd or even.
	for (i = 0; i < shapeQuantity; i = i + 1) {

		// use a for loop to test if j is smaller than the quantity of shapes to draw
		// on the y axis. As long as j is less than the quantity of shapes to draw,
		// j gets incremented by 1 to draw the desired quantity of shapes.
		for (j = 0; j < shapeQuantity; j = j + 1) {

			//calculate x coordinate for odd rows
			var rowOddOriginX = originX + i * shapeWidth
			//calculate y coordinate for odd rows
			var rowOddOriginY = originY + j * 2 * shapeHeight
			//calculate x coordinate for even rows
			var rowEvenOriginX = originX + i * shapeWidth
			//calculate y coordinate for even rows
			var rowEvenOriginY = originY + j * 2 * shapeHeight + rowSpacing

			//draw shapes that alternate color
			//alternating colors are determined by testing i for odd or even values
			//if i is odd, change fill color to red

			if (isOdd(i) == true) {
				shapeColor = 'red';
				fill(shapeColor); //shape color is red if i is odd
				rect((rowOddOriginX), (rowOddOriginY), shapeWidth, shapeHeight); //draws red rectangle shapes
				ellipseMode(CORNER) //sets ellipse starting point to upper left corner to match rectangle starting point
				// ellipses are drawn on even rows
				ellipse((rowEvenOriginX), (rowEvenOriginY), shapeWidth, shapeHeight); //draws red ellipse shapes
			}
			//if i is even, change fill color is green
			if (isOdd(i) == false) {
				shapeColor = 'green'; //shape color is green if i is odd
				fill(shapeColor);
				//rectangles are drawn on odd rows
				rect(rowOddOriginX, rowOddOriginY, shapeWidth, shapeHeight); //draws green rectangle shapes 
				// ellipses are drawn on even rows
				ellipseMode(CORNER) //sets ellipse starting point to upper left corner to match rectangle starting point
				ellipse((rowEvenOriginX), (rowEvenOriginY), shapeWidth, shapeHeight); //draws green ellipse shapes 
			}
		}
	}
}

function draw() {}

//this code to determine if number is odd or even was developed by Elena Agape
// boolean function to determine if a number "n" is odd
// returns true if it is odd, false otherwise
function isOdd(n) {
	// determine whether an integer is odd or even
	// by examining the remainder when dividing by 2. Odd numbers
	// will have a remainder equal to 1, even numbers will have a
	// remainder equal to 0.
	var remainder;
	// the "modulus" operator returns the remainder of dividing
	// the first number by the second one
	remainder = n % 2;
	// return the correct boolean value determined by the calculated remainder
	if (remainder == 1) {
		return true; //indicates the number is odd
	} else {
		return false; //indicates the number is even
	}
}