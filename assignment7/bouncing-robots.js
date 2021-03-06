// HCDE 598
// anna davies
// FINAL assignment
// bouncing robots with a cupcake background

//////////// variables /////////////////
// set constants for the environment
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const BACKGROUND_COLOR = "#DDA0DD";

// set variables for the robot characteristics
var shapeWidth = 30;
var shapeHeight = 20;
var radius1 = 50;
var lineWeight = 2;

// set variable for the robot to move away if the mouse is "too close" 
var tooCloseThreshold = 30;

// set arrays for the robot movement
// array to set the x and y start points for each robot
var circleX = [];
var circleY = [];

// array to set the speed at which the robot moves on the x and y coordinates
var circleXSpeed = [];
var circleYSpeed = [];

//array to set the variable sizes of the robot
var circleScale = [];

// max speed for the robots to move
var speed = 3;

// array to hold the random color function for the robot disco ball head
var circleColor = [];


// set the upper left corner where the cupcake pattern begins
const X_ORIGIN = 35;
const Y_ORIGIN = 25;

// set variables for the cupcake visuals
// set the cupcake colors
const CHERRY_COLOR = '#d74894';
const ICING_COLOR = "#f77fbe";
const CUPCAKE_COLOR = '#fddde6';
const STICK_COLOR = 'black';
const SPRINKLES_COLOR = 'aqua';

// set the cupcake size
const SHAPE_RADIUS = 5;
const SHAPE_WIDTH = 30;
const SHAPE_HEIGHT = 20;
const STROKE_WIDTH = 2;

// set how many cupcakes to draw per row and column
const SHAPE_NUMBERX = 14;
const SHAPE_NUMBERY = 9;

// set how much padding between each cupcake on both axis
const SHAPE_PADDINGX = 105;
const SHAPE_PADDINGY = 85;

//////////// setup /////////////////
function setup() {
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

	// randomly assign x and y coordinates between 100 and 500
	for (i = 0; i < 1; i = i + 1) {
		circleX[i] = round(random(100, 500));
		circleY[i] = round(random(100, 500));
		//randomly assign x and y speeds from robot speeds array
		circleXSpeed[i] = round(random(0, speed));
		circleYSpeed[i] = round(random(0, speed));

		circleScale[i] = random(0.25, 3.0);
		// initialize random colors for robot heads
		circleColor[i] = getColor();
	}
}

//////////// draw /////////////////
function draw() {
	background(BACKGROUND_COLOR);
	// draw the cupcakes in a row
	for (i = 0; i < SHAPE_NUMBERX; i++) {
		for (j = 0; j < SHAPE_NUMBERY; j++) {

			// to calculate the x and y coordinates of each cupcake
			var xCorner = X_ORIGIN + i * SHAPE_PADDINGX;
			var yCorner = Y_ORIGIN + j * SHAPE_PADDINGY;

			//to call the functions to draw the cupcakes
				draw_cupcake(xCorner, yCorner);
		}
	}

	// call functions draw and move robots
	drawShapes();
	moveShapes();

}

//////////// functions /////////////////

// This function returns true if the mouse is hovering over
// the button with the given coordinates, and returns false otherwise.

function isWithin(buttonX, buttonY, shape_size) {
	if (mouseX >= buttonX && mouseX <= buttonX + shape_size &&
		mouseY >= buttonY && mouseY <= buttonY + shape_size) {
		return true;
	} else {
		return false;
	}
}

//add robot when mouse is clicked
function mouseClicked() {

	// add another element to the color array
	circleColor.push(getColor());

	//add another element to the size array
	circleScale.push(random(0.25, 3.0));

	//add another element to each of the arrays holding the x and y coordinates
	circleX.push(mouseX);
	circleY.push(mouseY);

	// add another element to each of the speed coordinates
	circleXSpeed.push(round(random(speed))); // I like to use round because random can return a non-integer
	circleYSpeed.push(round(random(speed)));
	
}

//function to loop through shapes array and draw the all the robots
function drawShapes() {

	for (i = 0; i < circleX.length; i++) {
		drawCircle(circleX[i], circleY[i], circleScale[i]);
	}
}

//this function will loop through our shapes array and draw all the robots
function moveShapes() {

	// check if the robot is outside canvas
	for (i = 0; i < circleX.length; i++) {
		if (circleX[i] < 50 || circleX[i] > CANVAS_WIDTH - radius1 + 20 || isTooClose(circleX[i], mouseX)){
			// change X direction
			circleXSpeed[i] = circleXSpeed[i] * (-1);
		} else if (circleY[i] < 30 || circleY[i] > CANVAS_HEIGHT - radius1 * circleScale[i] - 20 || isTooClose(circleY[i], mouseY)){
			// change Y direction
			circleYSpeed[i] = circleYSpeed[i] * (-1);
		} else if (circleX[i] < 0 || circleY[i] < 0 || circleX[i] > CANVAS_WIDTH || circleY[i] > CANVAS_HEIGHT) {
			// if a robot is outside the canvas just reset from the middle
			circleX[i] = CANVAS_WIDTH / 2;
			circleY[i] = CANVAS_HEIGHT / 2;
		}
		// to move the shapes
		circleX[i] = circleX[i] + circleXSpeed[i];
		circleY[i] = circleY[i] + circleYSpeed[i];
	}
}

function isTooClose(position1, position2)
{
    return (abs(position1 - position2) < tooCloseThreshold);
}

function drawCircle(x1, y1, scale) {
//draw the robot
	//draw the robot head
	noStroke();
	strokeWeight(lineWeight * scale);
	fill(getColor());
	ellipse(x1, y1, radius1 * scale);

	//draw the robot eyes
	fill('#FFDDF4');
	ellipse(x1 - 10 * scale, y1 - 5 * scale, (radius1 - 30) * scale);
	fill("#893843")
	ellipse(x1 - 10 * scale, y1 - 5 * scale, (radius1 - 45) * scale);

	//draw the robot neck
	stroke('#f1ddcf');
	strokeWeight(2 * scale);
	line(x1, y1 + 25 * scale, x1, y1 + 50 * scale);

	//draw the robot body
	noStroke();
	fill('#FFDDF4');
	rect(x1 - 15 * scale, y1 + 30 * scale, shapeWidth * scale, shapeHeight * scale);
	fill("#d74894")
	rect(x1 - 15 * scale, y1 + 40 * scale, shapeWidth * scale, shapeHeight * scale);

	//draw the robot legs
	stroke('#f1ddcf');
	strokeWeight(2 * scale);
	line(x1 - 5 * scale, y1 + 70 * scale, x1 - 5 * scale, y1 + 61 * scale);
	line(x1 + 5 * scale, y1 + 70 * scale, x1 + 5 * scale, y1 + 61 * scale);

	//draw the robot mouth
	stroke('#f1ddcf');
	noFill();
	arc(x1 + 4 * scale, y1 + 10 * scale, 10 * scale, 10 * scale, 0, PI / 2);
}


// function to randomize robot head color
function getColor() {
	// generate random colors through random r, g, b values 
	var R = (int)(Math.random() * 256);
	var G = (int)(Math.random() * 256);
	var B = (int)(Math.random() * 256);
	return color(R, G, B);
}

// returns true if the number is odd, and false if the number is even
function isOdd(n) {
	// compute remainder of division by two
	remainder = n % 2;
	if (remainder == 1) {
		return true;
	} else {
		return false;
	}
}
// function to draw cupcake
function draw_cupcake(xCorner, yCorner) {
	// to draw each individual cupcake
	//draw the cupcake bottom
	fill(CUPCAKE_COLOR);
	noStroke();
	quad(xCorner - 20, yCorner + 20, xCorner + 20, yCorner + 25, xCorner + 15, yCorner + 40, xCorner - 15, yCorner + 40);

	//draw the cupcake icing
	fill(ICING_COLOR)
	noStroke();
	ellipse(xCorner - 20, yCorner + 20, SHAPE_RADIUS * 2.5);
	ellipse(xCorner - 12.5, yCorner + 22.5, SHAPE_RADIUS * 2.5);
	ellipse(xCorner - 5, yCorner + 20, SHAPE_RADIUS * 2.5);
	ellipse(xCorner + 2.5, yCorner + 22.5, SHAPE_RADIUS * 2.5);
	ellipse(xCorner + 10, yCorner + 20, SHAPE_RADIUS * 2.5);
	ellipse(xCorner + 17.5, yCorner + 22.5, SHAPE_RADIUS * 2.5);

	arc(xCorner, yCorner + 17.5, 40, 27.5, PI, 0);

	ellipse(xCorner, yCorner + 5, SHAPE_RADIUS * 2.5);

	//draw the cupcake cherry
	fill(CHERRY_COLOR);
	noStroke();
	ellipse(xCorner, yCorner, SHAPE_RADIUS * 2);

	//draw the cupcake cherry stick
	noFill();
	stroke(STICK_COLOR);
	strokeWeight(1);
	arc(xCorner + 1.5, yCorner - 8, 5, 10, 0, PI / 2);

	//draw the cupcake sprinkles
	fill(SPRINKLES_COLOR);
	noStroke();
	ellipse(xCorner - 20, yCorner + 20, SHAPE_RADIUS / 2);
	ellipse(xCorner - 10, yCorner + 10, SHAPE_RADIUS / 2);
	ellipse(xCorner - 5, yCorner + 15, SHAPE_RADIUS / 2);
	ellipse(xCorner +5, yCorner + 20, SHAPE_RADIUS / 2);
	ellipse(xCorner +3, yCorner + 10, SHAPE_RADIUS / 2);
	ellipse(xCorner +13, yCorner + 13, SHAPE_RADIUS / 2);
	ellipse(xCorner +18, yCorner + 19, SHAPE_RADIUS / 2);
}

