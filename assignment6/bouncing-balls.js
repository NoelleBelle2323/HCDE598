// HCDE 598
// anna davies
// assignment #6
// bouncing balls

//////////// variables /////////////////
// constants to set up the environment
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const BACKGROUND_COLOR = "black";

// set constant for circle size
const SHAPE_SIZE = 40;

// array to set the x and y start points for each shape
var circleX = [];
var circleY = [];

// array to set the speed at which the circle moves on the X, Y coordinates
var circleXSpeed = [];
var circleYSpeed = [];

// max speed for the shapes to move
var speed = 5;

//////////// setup /////////////////
function setup() {
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

	// call function to randomize colors for circles 
	circleColor = getColor();

	// randomly assign x and y coordinates betweeen 100 and 500
	for (i = 0; i < 20; i = i + 1) {
		circleX[i] = round(random(100, 500));
		circleY[i] = round(random(100, 500));
	//randomly assign x and y speeds from speeds array
		circleXSpeed[i] = round(random(0, speed));
		circleYSpeed[i] = round(random(0, speed));
	}
}

//////////// draw /////////////////
function draw() {
	background(BACKGROUND_COLOR);

	// call functions draw and move circles
	drawShapes();
	moveShapes();
}

//////////// functions /////////////////
//this function will loop through our shapes array and draw the all the shapes at the designated x,y position on the canvas.
function drawShapes() {
	for (i = 0; i < 20; i++) {
		drawCircle(circleX[i], circleY[i], SHAPE_SIZE, circleColor);
	}
}

//this function will loop through our shapes array and move the shapes 
function moveShapes() {
	// check if shape is outside canvas
	for (i = 0; i < 20; i++) {
		if (circleX[i] < 0 || circleX[i] > CANVAS_WIDTH - SHAPE_SIZE) {
			// change X direction
			circleXSpeed[i] = circleXSpeed[i] * (-1);
		} else if (circleY[i] < 0 || circleY[i] > CANVAS_HEIGHT - SHAPE_SIZE) {
			// change Y direction
			circleYSpeed[i] = circleYSpeed[i] * (-1);
		} else if (circleX[i] < 0 || circleY[i] < 0 || circleX[i] > CANVAS_WIDTH || circleY[i] > CANVAS_HEIGHT) {
			// if anything goes wrong (circle is outside canvas) just reset coords
			circleX[i] = CANVAS_WIDTH / 2;
			circleY[i] = CANVAS_HEIGHT / 2;
		}
		// to move the shapes
		circleX[i] = circleX[i] + circleXSpeed[i];
		circleY[i] = circleY[i] + circleYSpeed[i];
	}
}

//function to draw a circle at cX, cY with size = cSize and color = cColor.
function drawCircle(cX, cY, cSize, cColor) {
	ellipseMode(CORNER);
	noStroke();
	fill(cColor);
	ellipse(cX, cY, cSize, cSize);
}

//function to randomize shape color
function getColor() {
	// generate random colors through random r, g, b values 
	var R = (int)(Math.random() * 256);
	var G = (int)(Math.random() * 256);
	var B = (int)(Math.random() * 256);
	return color(R, G, B);
}