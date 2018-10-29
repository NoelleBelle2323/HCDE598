//scaled drawing showing Mt.Saint Helen's recovering after 1980 eruption
//two-tone grey background suggests mountain covered with grey ash falout
//little green plants start from the bottom left corner of the mountain 
// and gradually spread randomly with keyPress growing larger, more opaque 
// until vegatation on mountain is restored

function setup() {
  createCanvas(400, 400);
  background('grey');
  fill(200, 200, 200);
  stroke(200, 200, 200);
  triangle(100, 0, 0, 200, 0, 400);
  triangle(150, 0, 0, 400, 100, 400);
  triangle(250, 0, 400, 400, 300, 400);
  triangle(200, 0, 100, 400, 300, 400);
  triangle(300, 0, 400, 200, 400, 400);
}

function draw() {
  strokeWeight(2);
  stroke(100, 240, 100);
  fill(80, 200, 80);
  ellipse(5, 395, 10);
}

drawPlant()

function drawPlant() {
  var webSize = 100;
  ellipse(x, y, webSize * 1.0);
  ellipse(x, y, webSize * 1.5);
  ellipse(x, y, webSize * 2.0);
}


// whenever a key is pressed on the keyboard,
// draw a plant that is slightly larger than the last one
// with a random placement on side of the mountain 
// until the mountainside is completely covered with plants
function keyPressed() {
  drawPlant(mouseX, mouseY, size);