
/*
OVERVIEW
--This code produces circles that bounce off the sides of the canvas. 
--If the circles hit the limits of the x axis, the stroke weight increases and the stroke color changes from blue to yellow 
--If the circles hit the limits of the y axis, the stroke weight increases and the stroke color changes from blue to red 
--This codes
*/




////////////
//CONSTANTS
///////////

// constants to set up the environment
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

// set constants for circle sizes and color
const SHAPE_SIZE = 40;
const SHAPE_STROKE_OFFSET = 52;
const CIRCLE_COLOR = "black";

////////////
//VARIABLES
///////////

// arrays for the x and y coordinates of the circles
var circleXs = [];
var circleYs = [];

// these arrays hold the speeds at which the circles moves along the X, Y coordinates
var circleXSpeed = [];
var circleYSpeed = [];


function setup() {
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

	// this for loop randomly assign x and y coordinates betweeen 50 and 550
	// seven circles get plotted on the canvas 
	for (var i = 0; i < 7; i++) {
		 
		circleXs[i] = round(random(50, 550));
		circleYs[i] = round(random(50, 550));

	//randomly assigns speeds at which the circles travel
	//X coordiantes have a larger range
		circleXSpeed[i] = round(random(0, 15));
		circleYSpeed[i] = round(random(0, 9));
		//print(circleXSpeed + " " + circleYSpeed);
	}

}

function draw() {
	background(190, 83, 28);
	frameRate(15);

	// draw and move circles
	drawShapes(circleXs, circleYs);
	moveShapes(circleXs, circleYs, circleXSpeed, circleYSpeed);

	// for debugging
	print("X: " + circleXs + " Y: " + circleYs);
	print("speed " + circleXSpeed + " " + circleYSpeed);
}

////////////
//FUNCTIONS
///////////
/*
    This function will loop through the circles array
    and draw all the circles at the designated (randomized)
    x,y positions on the canvas.
 */
function drawShapes(shapeXs, shapeYs) {

	for (var s = 0; s < shapeXs.length; s++) {

		var shapeX = shapeXs[s];
		var shapeY = shapeYs[s];

		drawCircle(shapeX, shapeY, SHAPE_SIZE, CIRCLE_COLOR);

	}
}


/*
This function will loop through the circles array
and move the circles accordingly.
*/
function moveShapes(shapeXs, shapeYs, shapeXSpeeds, shapeYSpeeds) {
	// loop through shapes and shapesSpeeds
	
	for (i = 0; i < circleXs.length; i++) {

		var shapeX = shapeXs[i];
		var shapeY = shapeYs[i];

		var shapeXSpeed = shapeXSpeeds[i];
		var shapeYSpeed = shapeYSpeeds[i];


		// check if shape is outside canvas
		if (shapeX < 0 || shapeX > CANVAS_WIDTH - SHAPE_STROKE_OFFSET) {
			drawYellowStroke(shapeX, shapeY, SHAPE_SIZE, CIRCLE_COLOR); 
			// change X direction
			shapeXSpeed *= -1;
		} else if (shapeY < 0 || shapeY > CANVAS_HEIGHT - SHAPE_STROKE_OFFSET) {
			// change Y direction
			drawRedStroke(shapeX, shapeY, SHAPE_SIZE, CIRCLE_COLOR);
			shapeYSpeed *= -1;
		} else if (shapeX < 0 || shapeY < 0 || shapeX > CANVAS_WIDTH || shapeY > CANVAS_HEIGHT) {
			// if anything goes wrong just reset coords
			shapeX = CANVAS_WIDTH / 2;
			shapeY = CANVAS_HEIGHT / 2;
		}

		// move shape by updating the value of shapeX and shapeY
		shapeX = shapeX + shapeXSpeed
		shapeY = shapeY + shapeYSpeed

		// update arrays
		circleXs[i] = shapeX
		circleYs[i] = shapeY

		circleXSpeed[i] = shapeXSpeed
		circleYSpeed[i] = shapeYSpeed
	}
}
/*
		Function to draw a circle at cX, cY with
    size = cSize and color = cColor.
 */
function drawCircle(cX, cY, cSize, cColor) {
	ellipseMode(CORNER);
	strokeWeight(6);
	stroke(135, 206, 250);
	fill(cColor);
	ellipse(cX, cY, cSize, cSize);
}
/*	
Functions for alternate stroke weights an colors  
*/
function drawYellowStroke(cX, cY, cSize, cColor) {
	ellipseMode(CORNER);
	strokeWeight(12);
	stroke(252, 209, 42);
	fill(cColor);
	ellipse(cX, cY, cSize, cSize);
}

function drawRedStroke(cX, cY, cSize, cColor) {
	ellipseMode(CORNER);
	strokeWeight(12);
	stroke(178, 34, 34);
	fill(cColor);
	ellipse(cX, cY, cSize, cSize);
}
