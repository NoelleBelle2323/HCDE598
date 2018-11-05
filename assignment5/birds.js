function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(225);

  for (i = 40; i < 400; i = i + 40) {
    for (j = 40; j < 400; j = j + 40) {
      bird(i, j)
    }
  }
}


function bird(x, y) {
  push();
  
  
  translate(x, y);
  scale(0.8);
  fill(0,0,0,100);
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
