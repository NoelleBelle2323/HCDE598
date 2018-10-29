// Lynn Pham Assignment 4
// Functions and Parameters


// establishing variables and fixed colors and drawing settings
var bgColor = "#AAF0D1";
var purRim = "#581845";
var magRim = "#900c3f";
var redRim = "#c70039";
var oraRim = "#ff5733";
var yelRim = "#ffc300";
var whiRim = "white";
var circleSize = "100";

// establishing the canvas and fill it with a color
function setup() {
  createCanvas(1000, 1000);
  background(bgColor);
}

// nothing will be done in the draw function. everything
// will be triggered by pressing random keys in this function
function draw(){}

// drawing a retro circle centered at (x, y)
// with a circle size of 100 
function retroBall (x, y, circleSize){
 	
  fill(oraRim); // this is outer orange rim of the circle
  ellipse(x, y, circleSize * 1.0);
 
  fill(yelRim); // this is the inner yellow rim
  ellipse(x, y, circleSize - 20 * 1.0);
  
 	fill(purRim); // this is the inner purple rim 
 	ellipse(x, y, circleSize - 40 * 1.0); 
  
	fill(magRim); // this is the inner magenta rim
	ellipse(x, y, circleSize - 60 * 1.0);
  
	fill(redRim); // this is the inner red rim
	ellipse(x, y, circleSize - 80 * 1.0);
  
	fill(whiRim); // this is the inner white rim
	ellipse(x, y, circleSize - 100 * 1.0);
}

// whenever a key is pressed on the keyboard,
// draw a retro circle centered on the current position
// of the mouse with a random size retro circle each time
function keyPressed() {
    var size = random(0, width / 5);
    retroBall(mouseX, mouseY, size);
}