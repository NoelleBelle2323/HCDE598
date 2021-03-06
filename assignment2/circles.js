function setup() {
  createCanvas(500, 500);
  background('black');
}

var xRedExpand = 250;
var yRedExpand = 250;
var radRedExpand = 0;

var xRed = 250;
var yRed = 25;
var radRed = 0;

var xBlueExpand = 250;
var yBlueExpand = 250;
var radBlueExpand = 0;

var xBlue = 25;
var yBlue = 475;
var radBlue = 0;

var xYellowExpand = 250;
var yYellowExpand = 250;
var radYellowExpand = 0;

var xYellow = 475;
var yYellow = 475;
var radYellow = 0;

var xPurpleExpand = 250;
var yPurpleExpand = 250;
var radPurpleExpand = 0;

var xGreenExpand = 250;
var yGreenExpand = 250;
var radGreenExpand = 0;

var xOrangeExpand = 250;
var yOrangeExpand = 250;
var radOrangeExpand = 0;


function draw() {
  //Red expand circle
  fill(230, 200, 200);
  strokeWeight(5);
  stroke('red');
  ellipse(xRedExpand, yRedExpand, radRedExpand);
  radRedExpand = radRedExpand + 5;


  //Blue expand circle
  if (yRed >= height / 2 - 30) {
    fill(230, 200, 230);
    strokeWeight(5);
    stroke('blue');
    ellipse(xBlueExpand, yBlueExpand, radBlueExpand);
    radBlueExpand = radBlueExpand + 5;
  }

  //Yellow expand circle
  if (xBlue >= width / 2 - 25) {
    fill(230, 230, 230);
    strokeWeight(5);
    stroke('yellow');
    ellipse(xYellowExpand, yYellowExpand, radYellowExpand);
    radYellowExpand = radYellowExpand + 5;
  }

  //Orange expand circle
  if (xYellow <= width / 2 + 25) {
    //fill(230, 190, 135);
    strokeWeight(5);
    stroke('orange');
    ellipse(xOrangeExpand, yOrangeExpand, radOrangeExpand);
    radOrangeExpand = radOrangeExpand + 5;
  }

  if (radOrangeExpand >= 495) {
   radOrangeExpand = 495; 
  }

  //Purple expand circle
  if (radOrangeExpand >= 495) {
    //fill(235, 135, 235);
    strokeWeight(5);
    stroke('purple');
    ellipse(xPurpleExpand, yPurpleExpand, radPurpleExpand);
    radPurpleExpand = radPurpleExpand + 5;
  }
  
  if (radPurpleExpand >= 395) {
   radPurpleExpand = 395; 
  }

  //Green expand circle
  if (radPurpleExpand >= 395) {
    //fill(135, 235, 135);
    strokeWeight(5);
    stroke('green');
    ellipse(xGreenExpand, yGreenExpand, radGreenExpand);
    radGreenExpand = radGreenExpand + 5;
  }
  
  if (radGreenExpand >= 295) {
   radGreenExpand = 295; 
  }

  //Red circle
  noStroke();
  if (radRedExpand >= 700) {
    fill('red')
    ellipse(xRed, yRed, radRed);
    radRed = radRed + 1;
  }
  if (radRed >= 50) {
    radRed = 50;
  }

  //Move red circle
  if (radRed >= 50) {
    yRed = yRed + 1;
  }

  //Stop red circle
  if (yRed >= height / 2 - 30) {
    yRed = height / 2 - 30;
  }

  //Blue circle
  if (radBlueExpand >= 700) {
    fill('blue');
    ellipse(xBlue, yBlue, radBlue);
    radBlue = radBlue + 1;
  }
  if (radBlue >= 50) {
    radBlue = 50;
  }

  //Move blue circle
  if (radBlue >= 50) {
    xBlue = xBlue + 1;
    yBlue = yBlue - 1;
  }

  //Stop blue circle
  if (xBlue >= width / 2 - 25) {
    xBlue = width / 2 - 25;
    yBlue = height / 2 + 25;
  }

  //Yellow circle
  if (radYellowExpand >= 700) {
    fill('yellow');
    ellipse(xYellow, yYellow, radYellow);
    radYellow = radYellow + 1;
  }
  if (radYellow >= 50) {
    radYellow = 50;
  }

  //Move yellow circle
  if (radYellow >= 50) {
    xYellow = xYellow - 1;
    yYellow = yYellow - 1;
  }

  //Stop yellow circle
  if (xYellow <= width / 2 + 25) {
    xYellow = width / 2 + 25;
    yYellow = height / 2 + 25;
  }

  //center triangle
  fill('black');
  triangle(250, 245, 243, 257, 257, 257);
}