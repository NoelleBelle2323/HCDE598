//Jane Winn Repeated Shapes Assignment 4 November 2018
//the for loop creates the appearance of a basket weave by constraining the vertical lines
//by an amount equal to the height of the canvas

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(127);
  noStroke();
  for (var i = 0; i < height; i += 30) {
    fill(129, 206, 15);
    rect(10, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
}