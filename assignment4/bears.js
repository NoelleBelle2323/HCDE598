//**********************************************
// Bears on demand
//**********************************************
// This program draws bears of varying sizes and colors
// wherever the mouse pointer is on the canvas when the
// mouse is clicked or a key is pressed.

// creates the canvas and sets the yellow background
function setup() {
  createCanvas(600, 600);
  background("#F1C40F");
}

// nothing to see in the draw function this time!
function draw() {}


//**********************************************
// All the cool stuff - additional functions
//**********************************************

// this function draws a bear at x and y coordinates 
// with bearFace radius. everything is proportional 
// to bearFace, including the x and y offsets, 
// so that the bear scales properly. The parameters bearColor 
// and bearMouth set the colors for the bear's fur.
function drawBrownBear(x, y, bearFace, bearColor, bearMouth) {
  var bearEar = bearFace / 3.3;
  var quarterBear = bearFace / 4;
  var tenBear = bearFace / 10;
  var halfBear = bearFace / 50;
  var sixBear = bearFace / 6.667;
  var eightBear = bearFace / 8.33;
  var sixteenBear = bearFace / 16.667;
  var fiveBear = bearFace / 5.88;
  var sevenBear = bearFace / 7.14;
  var bearEyes = 'black';

  noStroke();
  fill(bearColor);
  ellipse(x, y, bearFace, bearFace / 4 * 3); //face
  ellipse(x - bearEar, y - bearEar, quarterBear); //L ear
  ellipse(x + bearEar, y - bearEar, quarterBear); //R ear
  fill(bearMouth);
  ellipse(x - tenBear, y + tenBear, quarterBear); //L mouth
  ellipse(x + tenBear, y + tenBear, quarterBear); //R mouth
  fill(bearEyes);
  ellipse(x, y, sixBear, tenBear); //nose
  ellipse(x - sixBear, y - sixBear, tenBear); //L eye
  ellipse(x + sixBear, y - sixBear, tenBear); //R eye
  fill(bearColor);
  ellipse(x - eightBear, y + sixteenBear, halfBear); //top L freckle
  ellipse(x - fiveBear, y + eightBear, halfBear); //lower L freckle
  ellipse(x - tenBear, y + sevenBear, halfBear); //lower L inner freckle
  ellipse(x + eightBear, y + sixteenBear, halfBear); //top R freckle
  ellipse(x + fiveBear, y + eightBear, halfBear); //lower R freckle
  ellipse(x + tenBear, y + sevenBear, halfBear); //lower R inner freckle
}

// this function draws a brown bear at varying sizes
// at the mouse's x-y coordinates when the mouse is clicked.
function mousePressed() {
  var size = random(0, width / 3);
  bearColor = '#784212';
  bearMouth = '#AF601A';
  drawBrownBear(mouseX, mouseY, size, bearColor, bearMouth);
}

// this function draws a polar bear at varying sizes
// at the mouse's x-y coordinates when a key is pressed.
function keyPressed() {
  var size = random(0, width / 5);
  bearColor = 'white';
  bearMouth = 'gray';
  drawBrownBear(mouseX, mouseY, size, bearColor, bearMouth);
}