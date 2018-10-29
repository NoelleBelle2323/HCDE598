function setup() {
  createCanvas(480, 480);
  background(204);
  noStroke();

}

function draw() {}

// creating the bird

function bird(x, y) {
  push();
  
  
  translate(x, y);
  scale(random(1, 4));
  beginShape();
  vertex(-21, 1.5);
  vertex(-9, -4.5);
  vertex(0, -1.75);
  vertex(9, -4.5);
  vertex(21, 1.5);
  vertex(9, -2.3);
  vertex(2.5, 0);
  vertex(4, 1.5);
  vertex(-4, 1.5);
  vertex(-2.5, 0);
  vertex(-9, -2.3);
  vertex(-21, 1.5);
  endShape();
  pop();
}

// the following function  
// was taken from the example 
// shared on slack.


function mouseClicked() {
  bird(mouseX, mouseY);
}
  