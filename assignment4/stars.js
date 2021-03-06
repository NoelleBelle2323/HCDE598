function setup() {
  createCanvas(500, 400);
  background(255);
  myText();
}

function draw() {
  frameRate(20); //adjust to speed up or slow down stars

  /*I put these inside the draw function because I wanted
    the stars to continue to pop up after the key was pressed*/

  if (key == '1') {
    myArc(160, 180, 255, 0, 0); // Red rgb(255, 0, 0)
  } else if (key == '2') {
    myArc(140, 160, 255, 128, 0); // Orange rgb(255, 128, 0)
  } else if (key == '3') {
    myArc(120, 140, 255, 255, 0); // Yellow rgb(255, 255, 0)
  } else if (key == '4') {
    myArc(100, 120, 0, 255, 0); // Green rgb(0, 255, 0)
  } else if (key == '5') {
    myArc(80, 100, 0, 0, 255); // Blue rgb(0, 0, 255)
  } else if (key == '6') {
    myArc(60, 80, 127, 0, 255); // Purple rgb(127, 0, 255)
  }

}

function myText() {
  fill(160, 215, 255);
  noStroke();
  textAlign(CENTER);
  textFont('Georgia');
  textSize(16);
  text('Click on keys 1 through 6.', width / 2, height - 50);
  text('Click 0 to stop.', width / 2, height - 30);
}

function drawStar(x, y, myScale) {
  noStroke();
  beginShape();
  vertex(x - 11 * myScale, y - 3 * myScale); //starts at top left pt clockwise
  vertex(x - 4 * myScale, y - 4 * myScale);
  vertex(x, y - 10 * myScale);
  vertex(x + 4 * myScale, y - 4 * myScale);
  vertex(x + 11 * myScale, y - 3 * myScale);
  vertex(x + 6 * myScale, y + 2 * myScale);
  vertex(x + 7 * myScale, y + 9 * myScale);
  vertex(x, y + 6 * myScale);
  vertex(x - 7 * myScale, y + 9 * myScale);
  vertex(x - 6 * myScale, y + 2 * myScale);
  endShape();
}

function myArc(innerRadius, outerRadius, myRed, myGreen, myBlue) {
  var myRadius = random(innerRadius, outerRadius); // to make the arc width larger 
  var myAngle = random(PI, 0); // to make a half arc
  var innerRadiusX = myRadius * cos(myAngle) // x coordinate based on radius size
  var innerRadiusY = myRadius * sin(myAngle) // y coordinate based on radius size
  var myScale = random(0.5, 1.25); // to make stars different sizes
  fill(myRed, myGreen, myBlue, 75);
  drawStar(width / 2 - innerRadiusX, height / 2 - innerRadiusY + 80, myScale);
}