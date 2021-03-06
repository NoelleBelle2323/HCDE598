//Kim Wickens
//A4-Scaled Drawing
//HCDE 598
//This drawing incorporates six different primitive elements that scale to size.
//When the mouse is clicked anywhere on the canvas, a random-sized image will be drawn.

//color variables
var signalLightColor = "green"; //background color of signal light
var signalLightArrowColor = "black"; //arrow color of signal light
var stopSignColor = "red"; //background color of stop sign
var stopSignOutline = "white"; //outline color of stop sign
var backgroundColor = "yellow"; //canvas color

//size variables
var signalLightRadius = 300; //size of signal light
var visorWeight = signalLightRadius / 25; //stroke thickness of visor that scales with size of signal light
var stopSignWeight = signalLightRadius / 40; //stroke thickness of stop sign outline that scales with size of signal light
var signalLightWeight = signalLightRadius / 50; //stroke thickness of signal light outline that scales with size of signal light

//variables for signal light visor sizes
var visorStartAngle = 220; //left start location of visor; constant value that automatically scales
var visorEndAngle = 320; //right end location of visor; constant value that automatically scales

//draws canvas
function setup() {
	createCanvas(600, 600); //draws canvas
	background(backgroundColor);
}

function draw() {}

function drawAbstract(x, y, signalLightRadius) {

	//variables for arrow sizes
	var arrowRectLength = signalLightRadius / 2; //length of arrow shaft
	var arrowRectWidth = signalLightRadius / 7; //width of arrow shaft
	var arrowHeadWidth = arrowRectWidth + signalLightRadius / 40; //distance that arrowhead protrudes vertically past shaft
	var arrowHeadPoint = arrowRectWidth + signalLightRadius / 40; //distance that arrowhead protrudes horizontally past shaft

	//draw signal light
	fill(signalLightColor); //background color of signal light
	stroke(signalLightArrowColor); //outline color matches arrow color
	strokeWeight(signalLightWeight)
	ellipse(x, y, signalLightRadius); //draws circle for signal light

	//draw signal light arrow
	fill(signalLightArrowColor); //signal light color for shaft and arrowhead
	noStroke(); //no outline drawn
	rect((x - arrowRectLength / 2), y - arrowRectWidth / 2, arrowRectLength - arrowHeadPoint, arrowRectWidth); //draws arrow shaft
	triangle(x + arrowRectLength / 2 - arrowHeadPoint, y - arrowHeadWidth, x + arrowRectLength / 2 - arrowHeadPoint, y + arrowHeadWidth, x + arrowRectLength / 2, y); //draws arrowhead

	//draw signal light visor
	stroke(signalLightArrowColor); //color of visor is same as arrow color
	strokeWeight(visorWeight); //thickness of visor that scales to drawing size
	angleMode(DEGREES); //change arc to degrees
	noFill(); //no fill needed in arc area
	arc(x, y, signalLightRadius - visorWeight, signalLightRadius - visorWeight, visorStartAngle, visorEndAngle, OPEN); //draws visor between specified start and stop points

	//draw partial stop sign
	fill(stopSignColor); //background for stop sign
	stroke(stopSignOutline); //outline for stop sign
	strokeWeight(stopSignWeight); //thickness of outline that scales to drawing size
	quad(x - signalLightRadius / 2, y + signalLightRadius / 4, x + signalLightRadius / 2, y + signalLightRadius / 4, x + signalLightRadius / 2 - signalLightRadius / 4, y + signalLightRadius / 2, x - signalLightRadius / 2 + signalLightRadius / 4, y + signalLightRadius / 2, x - signalLightRadius / 2, y + signalLightRadius / 4); //draws bottom portion of a stop sign based on size of signal light
}
//draws a random sized image at location mouse is pressed
function mousePressed() {
	var size = random(50, 500);
	drawAbstract(mouseX, mouseY, size)
}