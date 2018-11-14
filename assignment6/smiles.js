/* Kim Wickens
HCDE 598C - AUT18
Assignment 6
11/12/18
This code draws a specified number of shapes.
The shapes are animated by traversing through an array
that defines the starting Y and Y positions for each shape and
incrementing the positions by one to move shapes. When one of
the shapes reaches the right or bottom edge of the canvas the
direction of travel is reversed by changing the speed to a
negative value. Each time the smileys reach the left or top 
canvas edge, the speed is reversed again by changing the
speed back to a positive value. The animation loops through
this motion infinitely.
*/

//global variables
const CANVASX = 500; //canvas width
const CANVASY = 500; //canvas height
const BGCOLOR = 'pink'; //background color
var radius = 25; //radius of the characters; recommended range 20-60, but larger is possible; when radius is changed, everything scales to the change

//variable for number of shapes to draw
var smileyQuantity = 10;

//smiley variables
var smileyFill = 'yellow'; //default face color 
var smileyOutlineWeight = 3; //default outline thickness
var smileyOutlineColor = 'black'; //default outline color
var smileyX = [80, 125, 200, 350, 225, 325, 150, 350, 400, 150]; //x-position of smiley
var smileyY = [100, 250, 300, 365, 100, 125, 90, 100, 420, 200]; //y-position of smiley
var smileFactor = 90; //controls amount of smile on smiley


function setup() {
	createCanvas(CANVASX, CANVASY); //draw canvas based on variables
	smileyXspeed = 10; //define speed in X direction
	smileyYspeed = 10; //define speed in Y direction
}
//in the draw function, call the functions to draw and move the smileys
function draw() {
	frameRate(5); //define frame rate
	background('pink'); //draw background color defined in variable

	for (i = 0; i < smileyQuantity; i = i + 1) {
		drawSmiley(smileyX[i], smileyY[i], radius);
		moveSmiley(smileyX[i], smileyY[i], smileyXspeed, smileyYspeed);
	}
}
//function to draw smiley
function drawSmiley(smileyX, smileyY, radius) {
	strokeWeight(smileyOutlineWeight); //smiley outline thickness
	stroke(smileyOutlineColor); //outline color
	fill(smileyFill); //fill color
	ellipseMode(RADIUS); //use radians for ellipse values
	ellipse(smileyX, smileyY, radius); //draw smiley face in start location
	fill('black'); //eye color
	ellipse(smileyX - radius / 5, smileyY - radius / 3, radius / 12, radius / 4); //left eye; scales with radius change
	ellipse(smileyX + radius / 5, smileyY - radius / 3, radius / 12, radius / 4); //right eye; scales with radius change
	angleMode(DEGREES); //draw smiley mouth
	noFill(); //fill not needed for mouth
	arc(smileyX, smileyY + 3, radius / 2 + 5, radius / 2, 270 + smileFactor, 270 - smileFactor, OPEN); //smile
}

//function to move smileys
function moveSmiley() {
	smileyX[i] = smileyX[i] + smileyXspeed; //define X position of smileys by traversing array and adding speed defined in variable
	smileyY[i] = smileyY[i] + smileyYspeed; //define Y position of smileys by traversing array and adding speed defined in variable
	var newX = smileyX[i]; //create variable for X direction
	var newY = smileyY[i]; //create variable for Y direction

	//Test if smileys move to canvas edges; when smileys get to canvas edge, reverse direction
	if (newX < 0 + radius + 2 * smileyOutlineWeight || newX > CANVASX - radius + 2 * smileyOutlineWeight) {
		smileyXspeed = smileyXspeed * (-1);
	} else if (newY < 0 + radius + 2 * smileyOutlineWeight || newY > CANVASY - radius + 2 * smileyOutlineWeight) {
		smileyYspeed = smileyYspeed * (-1);
	} else {
		newY = CANVASY / 2;
		newX = CANVASX / 2;
	}

	//increment X and Y directions by the speed defined in variable
	smileyX[i] = smileyX[i] + smileyXspeed;
	smileyY[i] = smileyY[i] + smileyYspeed;

	//print to console for testing
	print("newX" + "=" + newX + " " + "smileyX[i]" + "=" + smileyX[i] + " " + "newX" + "=" + newY)
	print("smileyXspeed" + "=" + smileyXspeed + " " + "smileyYspeed" + "=" + smileyYspeed + " " + "i" + "=" + i)
}