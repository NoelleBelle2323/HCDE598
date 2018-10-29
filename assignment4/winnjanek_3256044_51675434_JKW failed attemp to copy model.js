// fixed colors and drawing settings
var lineColor = 'grey';
var spokeWeight = 5;

function setup() {
  createCanvas(1000, 1000);
  background('orange');
}

function draw() {}

function drawWeb(x, y, webSize) {
  var webSize = 100;

  stroke(lineColor);
  strokeWeight(spokeWeight);
  line(x, y, x + webSize, y);
  line(x, y, x - webSize, y);
  line(x, y, x, y + webSize);
  line(x, y, x, y - webSize);
  line(x, y, x + webSize * 0.7, y + webSize * 0.7);
  line(x, y, x + webSize * 0.7, y - webSize * 0.7);
  line(x, y, x - webSize * 0.7, y + webSize * 0.7);
  line(x, y, x - webSize * 0.7, y - webSize * 0.7);

  // then draw the rings at various sizes within the
  // boundaries of the entre web
  // strokeWeight(ringWeight);
  // noFill();
  // ellipse(x, y, webSize * 1.0);
  // ellipse(x, y, webSize * 1.5);
  // ellipse(x, y, webSize * 2.0);

}

// whenever a key is pressed on the keyboard,
// draw a spider web centered on the current position
// of the mouse with a random size web each time
function keyPressed() {
  var size = random(0, width / 5);
  drawWeb(mouseX, mouseY, size);
}