/* Kim Wickens
HCDE 598C - AUT18
Assignment 2
*/

function setup() {
	createCanvas(600, 400);

}

//global variables
var radius = 40 //radius of the characters; recommended range 20-60, but larger is possible; when radius is changed, everything scales to the change
var space = 20 //spacing between characters at final position

//smiley variables
var smileyFill = 'yellow'; //default face color 
var smileyOutlineWeight = 3; //default outline thickness
var smileyOutlineColor = 'black'; //default outline color
var upperLeftX = radius + smileyOutlineWeight; //starting x-position of upper left smiley
var upperLeftY = radius + smileyOutlineWeight; //starting y-position of upper left smiley
var lowerLeftX = radius + smileyOutlineWeight; //starting x-position of lower left smiley
var lowerLeftY = 400 - radius - smileyOutlineWeight; //starting y-position of lower left smiley
var smileFactor1 = 90 //controls amount of smile on smiley 1; choose starting value between 90 and 170
var smileFactor2 = 170 //controls amount of smile on smiley 1; choose starting value between 90 and 170

//peace sign variables
var peaceFill = 'purple'; //default body color
var peaceOutlineWeight = 3; //default outline thickness
var peaceOutlineColor = 'red'; //default outline color
var upperRightX = 500 - radius - peaceOutlineWeight; //starting x-position of upper right peace sign
var upperRightY = radius + peaceOutlineWeight; //starting y-position of upper right peace sign
var lowerRightX = 500 - radius - peaceOutlineWeight; //starting x-position of lower right peace sign
var lowerRightY = 400 - radius - peaceOutlineWeight; //starting y-position of lower right peace sign

function draw() {
	background(240, 255, 255); //background color
	ellipseMode(RADIUS); //use radians for ellipse values

	//draw smiley 1 at starting x and y
	strokeWeight(smileyOutlineWeight); //smiley outline thickness
	stroke(smileyOutlineColor); //outline color
	fill(smileyFill); //face color
	ellipse(upperLeftX, upperLeftY, radius); //draw smiley face in start location
	fill('black'); //eye color
	ellipse(upperLeftX - radius / 5, upperLeftY - radius / 3, radius / 12, radius / 4); //left eye; scales with radius change
	ellipse(upperLeftX + radius / 5, upperLeftY - radius / 3, radius / 12, radius / 4); //right eye; scales with radius change
	angleMode(DEGREES); //draw mouth
	noFill(); //mouth arc does not need fill
	arc(upperLeftX, upperLeftY + 3, radius / 2 + 5, radius / 2, 270 + smileFactor1, 270 - smileFactor1, OPEN); //smile; changes with smile factor and scales with radius change

	//draw peace sign 1 at starting x and y
	stroke(peaceOutlineColor); //outline color
	strokeWeight(peaceOutlineWeight) //circle outline thickness
	fill(peaceFill); //circle fill color
	ellipse(upperRightX, upperRightY, radius); //draw circle in start location
	strokeWeight(5); //inner lines thickness
	stroke('white'); //inner lines colors
	line(upperRightX, upperRightY - radius + peaceOutlineWeight, upperRightX, upperRightY + radius - peaceOutlineWeight); //vertical line; scales with radius
	line(upperRightX, upperRightY + radius / 6, upperRightX + (2 * radius / PI), upperRightY + (2 * radius / PI)); //right leg, scales with radius
	line(upperRightX, upperRightY + radius / 6, upperRightX - (2 * radius / PI), upperRightY + (2 * radius / PI)); //left leg, scales with radius

	//draw smiley2 at starting x and y
	strokeWeight(smileyOutlineWeight); //smiley outline thickness
	stroke(smileyOutlineColor); //outline color
	fill(153, 255, 153); //face color
	ellipse(lowerLeftX, lowerLeftY, radius); //draw smiley face in start location
	fill('black'); //eye color
	ellipse(lowerLeftX - radius / 5, lowerLeftY - radius / 3, radius / 12, radius / 4); //left eye; scales with radius change
	ellipse(lowerLeftX + radius / 5, lowerLeftY - radius / 3, radius / 12, radius / 4); //right eye; scales with radius change
	angleMode(DEGREES); //draw smiley mouth
	noFill(); //fill not needed for moutn
	arc(lowerLeftX, lowerLeftY + 3, radius / 2 + 5, radius / 2, 270 + smileFactor2, 270 - smileFactor2, OPEN); //smile; changes with smile factor and scales with radius change

	//draw peace sign 2 at starting x and y
	stroke(peaceOutlineColor); //outline color
	strokeWeight(peaceOutlineWeight) //outline thickness
	fill(peaceFill); //body color
	ellipse(lowerRightX, lowerRightY, radius); //draw circle in start location
	strokeWeight(5); //inner lines thickness
	stroke('blue'); //inner lines color
	line(lowerRightX, lowerRightY - (radius - peaceOutlineWeight), lowerRightX, lowerRightY + radius - peaceOutlineWeight); //vertical line; scales with radius
	line(lowerRightX, lowerRightY + radius / 6, lowerRightX + (2 * radius / PI), lowerRightY + (2 * radius / PI)); //right leg, scales with radius
	line(lowerRightX, lowerRightY + radius / 6, lowerRightX - (2 * radius / PI), lowerRightY + (2 * radius / PI)); //left leg, scales with radius

	//move smiley face 1 from upper left
	upperLeftX = upperLeftX + 1; //moves object to right
	upperLeftY = upperLeftY + 1; //moves object down
	if (upperLeftX > width / 2 - (3 * radius) - space) {
		upperLeftX = width / 2 - (3 * radius) - space; //object stops in x position
	}
	if (upperLeftY > height / 2) {
		upperLeftY = height / 2; //object stops at vertical middle of canvas
	}
	//move peace sign 1 from upper right
	upperRightX = upperRightX - 1; //moves object to left
	upperRightY = upperRightY + 1; //moves object down
	if (upperRightX < width / 2 + radius + space / 2) {
		upperRightX = (width / 2 + radius + space / 2); //object stops in calculated x position
	}
	if (upperRightY > height / 2) {
		upperRightY = (height / 2); //object stops at vertical middle of canvas
	}
	//move smiley face 2 from lower left
	lowerLeftX = lowerLeftX + 1; //moves object to right
	lowerLeftY = lowerLeftY - 1; //moves object up
	if (lowerLeftX > width / 2 - radius - space / 2) {
		lowerLeftX = (width / 2 - radius - space / 2); //object stops in calculated x position
	}
	if (lowerLeftY < height / 2) {
		lowerLeftY = height / 2; //object stops at vertical middle of canvas
	}
	if (smileFactor2 > 90) { //this makes the smile increase
		(smileFactor2 = smileFactor2 - 1)
	}
	//move peace sign 2 from lower right
	lowerRightX = lowerRightX - 1; //moves object to left
	lowerRightY = lowerRightY - 1; //moves object up
	if (lowerRightX < width / 2 + (3 * radius) + space) {
		lowerRightX = (width / 2 + (3 * radius) + space); //object stops in calculated x position
	}
	if (lowerRightY < height / 2) {
		lowerRightY = (height / 2); //object stops at vertical middle of canvas
	}
}