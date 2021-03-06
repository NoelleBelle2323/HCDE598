/* 
Kellie Dunn
HCDE 598C Aut18
A-4 Scaled Drawing
    
It is a drawing of a tree that grows random sized oranges 
when you click on it with the mouse.
*/

// fixed colors and drawing settings
var bgColor = '#0875a0';
var lineColor = 'brown';


// establish the canvas and background
function setup() {
  createCanvas(700, 700);
  background(bgColor);

  // make the tree as a background picture
  // tree trunk quad
  strokeWeight(0);
  fill('#a07208');
  quad(320, 400, 320, 700, 380, 750, 380, 400);
  // tree top ellipse
  fill('#1bbc10');
  ellipse(350, 250, 400);

}

// in this program, nothing is done in the draw function;
// everything is triggered by clicking the mouse button
function draw() {}


// draws an orange centered at (x, y)
// with a size of orangeSize pixels. the orangeSize is
// the radius of the orange.

function drawOrange(x, y, orangeSize) {
  ellipseMode(RADIUS);

  //draw the stem
  strokeWeight(2);
  stroke('brown');
  line(x, y - orangeSize, x, y - orangeSize * 1.5);

  // draw the orange
  strokeWeight(1);
  stroke('brown');
  fill('orange');
  ellipse(x, y, orangeSize);

  // draw the dots on the orange
  stroke('brown');
  strokeWeight(2);
  point(x - orangeSize * 0.5, y - orangeSize * 0.5);
  point(x - orangeSize * 0.2, y - orangeSize * 0.2);
  point(x + orangeSize * 0.3, y + orangeSize * 0.3);
  point(x + orangeSize * 0.1, y - orangeSize * 0.1);
  point(x + orangeSize * 0.35, y - orangeSize * 0.35);
  point(x - orangeSize * 0.55, y + orangeSize * 0.45);
  point(x - orangeSize * 0.25, y + orangeSize * 0.25);
  point(x, y - orangeSize * 0.5);
  point(x, y + orangeSize * 0.6);
  point(x - orangeSize * 0.4, y);
  point(x + orangeSize * 0.65, y);

  // draw the leaves
  strokeWeight(1);
  stroke('brown');
  fill('green');

  // left leaf
  quad(x, y - orangeSize, x - orangeSize * 0.5, y - orangeSize * 1.5, x - orangeSize, y - orangeSize * 1.5, x - orangeSize * 0.5, y - orangeSize, );

  // right leaf
  quad(x, y - orangeSize, x + orangeSize * 0.5, y - orangeSize * 1.5, x + orangeSize, y - orangeSize * 1.5, x + orangeSize * 0.5, y - orangeSize, );

}

/* 
whenever the mouse is clicked,
draw an orange centered on the current position
of the mouse with a random size orange each time
*/
function mouseClicked() {
  var size = random(10, width / 20);
  drawOrange(mouseX, mouseY, size);
}