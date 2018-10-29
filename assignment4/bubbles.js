var x = 80;
var y = 80;
var mySize = 10;
var bubbleColor = '#3F7FBF';
var bgColor = 'lightblue';

function setup() {
  createCanvas(500, 500);
  background('lightblue');
  fill('#5F3399');
  stroke('white');
  strokeWeight(3);
  ellipse(300, 250, 300, 250);
  triangle(80, 170, 230, 250, 80, 350);
  ellipse(380, 200, 30, 30);
  fill('black');
  stroke('black');
  strokeWeight(0);
  ellipse(380, 200, 20, 20);
  fill('white');
  stroke('white');
  strokeWeight(0);
  ellipse(380, 200, 10, 10);
  fill('black');
  stroke('black');
  strokeWeight(2);
  line(330, 200, 330, 280);
  line(340, 200, 340, 280);
}

// draw background image 
function draw() {}


function drawBubble(x, y, mySize) {
  fill(bubbleColor);
  ellipse(x, y, mySize, mySize);
}

function mousePressed() {
  var mySize = random(10, width / 5);
  drawBubble(mouseX, mouseY, mySize);
}