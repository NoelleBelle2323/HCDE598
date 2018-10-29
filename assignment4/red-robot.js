//to set the line weight 
var lineWeight = 2

//to set up the canvas
function setup() {
	createCanvas(500, 500);
	background('#0C1713');
}

//set up the radius and shape dimensions for the robot
radius1 = 50
var shapeWidth = 30
var shapeHeight = 20

// function to draw the robot
function drawBot2(x1, y1, scale) {

	//draw the head
	noStroke();
	strokeWeight(lineWeight * scale);
	fill('#AB4967');
	ellipse(x1, y1, radius1 * scale);

	//draw the eyes
	fill('#B5C9C3');
	ellipse(x1 - 10 * scale, y1 - 5 * scale, (radius1 - 30) * scale);
	fill("#0C1713")
	ellipse(x1 - 10 * scale, y1 - 5 * scale, (radius1 - 45) * scale);

	//draw the neck
	stroke('#B5C9C3');
	strokeWeight(2 * scale);
	line(x1, y1 + 25 * scale, x1, y1 + 50 * scale);

	//draw the body
	noStroke();
	fill('#BC8DA0');
	rect(x1 - 15 * scale, y1 + 30 * scale, shapeWidth * scale, shapeHeight * scale);
	fill("#A04668")
	rect(x1 - 15 * scale, y1 + 40 * scale, shapeWidth * scale, shapeHeight * scale);

	//draw the legs
	stroke('#B5C9C3');
	strokeWeight(2 * scale);
	line(x1 - 5 * scale, y1 + 70 * scale, x1 - 5 * scale, y1 + 61 * scale);
	line(x1 + 5 * scale, y1 + 70 * scale, x1 + 5 * scale, y1 + 61 * scale);

	//draw the mouth
	arc(x1 + 4 * scale, y1 + 10 * scale, 10 * scale, 10 * scale, 0, PI / 2);
}
//function to draw the robot at different sizes when canvas is clicked
function mousePressed() {
	drawBot2(mouseX, mouseY, random(0.25, 3.0));
}