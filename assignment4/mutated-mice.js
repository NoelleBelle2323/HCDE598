var bgColor = 'white';
var face = 'grey';
var feature = 'black';
var ears = 'pink'
var weight = 2;


//establish the canvas and fill it with a color
function setup() {
  createCanvas(450, 450);
  background(bgColor);
}


// in this program, nothing is done in the draw function;
// everything is triggered by pressing a key on the keyboard
function draw() {}


// draws a simple spider web centered at (x, y)
// with a size of mouseSize pixels, which is the radius of the face.
function drawMouse(x, y, mouseSize) {

  //draw face
  stroke(face);
  fill(face);
  ellipse(x, y, x + mouseSize, y + mouseSize);


  //draw eye shape
  stroke(feature);
  noFill();
  ellipse((x - (mouseSize * 0.2)), (y - (mouseSize * 0.2)), mouseSize / 6, mouseSize / 8);
  ellipse((x + (mouseSize * 0.2)), (y - (mouseSize * 0.2)), mouseSize / 6, mouseSize / 8);

  //draw eyes
  stroke(feature);
  fill(feature);
  ellipse((x - (mouseSize * 0.18)), (y - (mouseSize * 0.2)), mouseSize / 16, mouseSize / 16);
  ellipse((x + (mouseSize * 0.18)), (y - (mouseSize * 0.2)), mouseSize / 16, mouseSize / 16);


  //draw nose
  stroke(feature);
  fill(feature);
  triangle((x - (mouseSize * 0.1)), y, x, (y - (mouseSize * 0.2)), (x + (mouseSize * 0.1)), y);

  //draw left-side of whiskers
  stroke(feature);
  noFill();
  line((x - (mouseSize * 0.4)), (y - (mouseSize * 0.1)), (x - (mouseSize * 0.1)), y);
  line((x - (mouseSize * 0.4)), y, (x - (mouseSize * 0.1)), y);
  line((x - (mouseSize * 0.4)), (y + (mouseSize * 0.1)), (x - (mouseSize * 0.1)), y);

  //draw right-side of whiskers
  stroke(feature);
  noFill();
  line((x + (mouseSize * 0.4)), (y - (mouseSize * 0.1)), (x + (mouseSize * 0.1)), y);
  line((x + (mouseSize * 0.4)), y, (x + (mouseSize * 0.1)), y);
  line((x + (mouseSize * 0.4)), (y + (mouseSize * 0.1)), (x + (mouseSize * 0.1)), y);


  //draw smile
  stroke(feature);
  noFill();
  arc(x, (y + (mouseSize * 0.4)), mouseSize * 0.4, mouseSize * 0.3, 0, PI);


  //draw ears
  stroke(face);
  strokeWeight(weight);
  fill(ears);
  ellipse((x + (mouseSize * 2)), (y - (mouseSize * 2)), mouseSize + 60, mouseSize + 50);
  ellipse((x - (mouseSize * 2)), (y - (mouseSize * 2)), mouseSize + 60, mouseSize + 50);

}

// whenever a mouse is pressed on the keyboard,
// draw a mouse centered on the current position
// with a random sized mouse each time
function mousePressed() {
  var size = random(60, 80); //choose random number between 60 and 80
  drawMouse(mouseX, mouseY, size);
}