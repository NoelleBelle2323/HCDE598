// assignment #4 
// anna davies
// program to create shapes using loops

// set the size of the canvas 
const canvas_width = 500;
const canvas_height = 500;

//set the upper left corner where the loop begins
const x_origin = 50;
const y_origin = 50;

//program colors
const bg_color = '#73215c';
const stroke_color = "#f3962d";
const head_color = "#26b7b3";
const body_color1 = '#f2b128';
const body_color2 = '#da4e6a'

//parameters for each robot
const shape_radius = 50;
const shape_width = 30;
const shape_height = 20;
const stroke_width = 2;

//set how many robots to draw per row and column
const shape_numberX = 8
const shape_numberY = 4

//set up how much padding between each robot on both axis
const shape_paddingX = 57
const shape_paddingY = 118

function setup() {

	// create the canvas
	createCanvas(canvas_width, canvas_height);
	background(bg_color);

	// draw the shapes in a row
	for (i = 0; i < shape_numberX; i++) {
		for (j = 0; j < shape_numberY; j++) {


			// to calculate the x and y coordinates of each shape
			var xCorner = x_origin + i * shape_paddingX;
			var yCorner = y_origin + j * shape_paddingY;

			//to call the functions to alternate robot colors
			if (isOdd(i)) {
				robot_odd();
			} else {
				robot_even();
			}
		}
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

	// function to draw odd color robot
	function robot_odd() {
		// to draw each individual robot
		//draw the head of the robot
		fill(head_color);
		noStroke();
		ellipse(xCorner, yCorner, shape_radius);

		//draw the eye of the robot
		fill(stroke_color);
		ellipse(xCorner - 10, yCorner - 5, shape_radius - 30);
		fill(bg_color);
		ellipse(xCorner - 10, yCorner - 5, shape_radius - 45);

		//draw the neck of the robot
		stroke(stroke_color);
		strokeWeight(stroke_width);
		line(xCorner, yCorner + 25, xCorner, yCorner + 50);

		//draw the body of the robot
		noStroke();
		fill(body_color1);
		rect(xCorner - 15, yCorner + 30, shape_width, shape_height);
		fill(body_color2)
		rect(xCorner - 15, yCorner + 40, shape_width, shape_height);

		//draw the legs of the robot
		stroke(stroke_color);
		strokeWeight(2);
		line(xCorner - 5, yCorner + 70, xCorner - 5, yCorner + 61);
		line(xCorner + 5, yCorner + 70, xCorner + 5, yCorner + 61);

		//draw the mouth of the robot
		stroke(body_color2);
		noFill();
		arc(xCorner + 4, yCorner + 10, 10, 10, 0, PI / 2);
	}

	// function to draw even color robot
	function robot_even() {
		// to draw each individual robot
		//draw the head of the robot
		fill(body_color2);
		noStroke();
		ellipse(xCorner, yCorner, shape_radius);

		//draw the eye of the robot
		fill(bg_color);
		ellipse(xCorner - 10, yCorner - 5, shape_radius - 30);
		fill(body_color1);
		ellipse(xCorner - 10, yCorner - 5, shape_radius - 45);

		//draw the neck of the robot
		stroke(body_color1);
		strokeWeight(stroke_width);
		line(xCorner, yCorner + 25, xCorner, yCorner + 50);

		//draw the body of the robot
		noStroke();
		fill(stroke_color);
		rect(xCorner - 15, yCorner + 30, shape_width, shape_height);
		fill(head_color)
		rect(xCorner - 15, yCorner + 40, shape_width, shape_height);

		//draw the legs of the robot
		stroke(stroke_color);
		strokeWeight(2);
		line(xCorner - 5, yCorner + 70, xCorner - 5, yCorner + 61);
		line(xCorner + 5, yCorner + 70, xCorner + 5, yCorner + 61);

		//draw the mouth of the robot
		stroke(head_color);
		noFill();
		arc(xCorner + 4, yCorner + 10, 10, 10, 0, PI / 2);
	}
}

function draw(){}