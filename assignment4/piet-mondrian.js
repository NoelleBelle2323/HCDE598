//598 Angel Vuong
//Create your own Piet Mondrian-inspired piece.

//set up a blank canvas
function setup() {
  createCanvas(1000, 1000);
  background('white');
}

var mondrianStroke = ('black');
var mondrianBlock = ('red');
var mondrianBlock2 = ('blue');
var mondrianBlock3 = ('gold');
var mondrianBlock4 = ('white');
var mondrianstrokeWeight = (10);

//*****************************************************
// in this program, nothing is done in the draw function
function draw() {}
//*****************************************************

//the following functions draw Mondrian color blocks
//this draws red blocks
function drawMondrianred(x, y, scale) {
  strokeWeight(mondrianstrokeWeight);
  stroke(mondrianStroke);
  fill(mondrianBlock);
  rect(x, y, scale * 8, scale * 8);
}

//this draws blue blocks 
function drawMondrianblue(x, y, scale) {
  strokeWeight(mondrianstrokeWeight);
  stroke(mondrianStroke);
  fill(mondrianBlock2);
  rect(x, y, scale * 10, scale * 10);
}

//this draws gold blocks
function drawMondriangold(x, y, scale) {
  strokeWeight(mondrianstrokeWeight);
  stroke(mondrianStroke);
  fill(mondrianBlock3);
  rect(x, y, scale * 10, scale * 10);
}

//this draws white blocks (rectangles)
function drawMondrianwhite(x, y, scale) {
  strokeWeight(mondrianstrokeWeight);
  stroke(mondrianStroke);
  fill(mondrianBlock4);
  rect(x, y, scale * 6, scale * 2);
}

//*****************************************************
//this function draws a color block at various sizes
//at any point on the canvas where the mouse is clicked 
//or located in the case of key pressed
//*****************************************************

//press keys r, g, or w to draw red, gold, or white blocks
function keyPressed() {
  if (key === 'r') {
    var size = random(10, 60);
    drawMondrianred(mouseX, mouseY, size);
  } else if (key === 'g') {
    var size = random(10, 40);
    drawMondriangold(mouseX, mouseY, size);
  } else if (key === 'w') {
    var size = random(10, 100);
    drawMondrianwhite(mouseX, mouseY, size);
  }
}
//click mouse to draw blue blocks
function mouseClicked() {
  var size = random(10, 40);
  drawMondrianblue(mouseX, mouseY, size);
}