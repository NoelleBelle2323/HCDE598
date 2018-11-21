var birdX = [];
var birdY = [];
var birdXSpeed = [];
var birdYSpeed = [];
var shapeWidth = 42;
var shapeHeight = 3;
var speed = 2;


function setup() {
  createCanvas(480, 480);
  for (i = 0; i < 10; i++) {
    birdX[i] = round(random(100, 300));
    birdY[i] = round(random(100, 300));
    birdXSpeed[i] = speed;
    birdYSpeed[i] = speed;
  }
  noStroke();

}

function draw() {

  background(204);

  drawShape(birdX, birdY);
  moveShape(birdX, birdY, birdXSpeed, birdYSpeed);

}

function drawShape(shapeXs, shapeYs) {
  var shapeX = shapeXs;
  var shapeY = shapeYs;
  drawBird(shapeX, shapeY);
}

function moveShape(shapeXs, shapeYs, shapeXspeeds, shapeYspeeds) {
  for (i = 0; i < birdX.length; i++) {

    var shapeX = shapeXs[i];
    var shapeY = shapeYs[i];
    var shapeXspeed = shapeXspeeds[i];
    var shapeYspeed = shapeYspeeds[i];

    if ((shapeX - shapeWidth) < 0 || shapeX > (width - shapeWidth)) {
      shapeXspeed *= -1;
    } else if ((shapeY - shapeHeight) < 0 || shapeY > (height - (shapeHeight))) {
      shapeYspeed *= -1;
    } else if (shapeX < 0 || shapeY < 0 || shapeX > width || shapeY > height){
      shapeX = width/2;
      shapeY = height/2;
    }

    shapeX = shapeX + shapeXspeed;
    shapeY = shapeY + shapeYspeed;

    birdX[i] = shapeX;
    birdY[i] = shapeY;
    birdXSpeed[i] = shapeXspeed;
    birdYSpeed[i] = shapeYspeed;

  }
}

// creating the bird

function drawBird(x, y) {

  translate(x, y);
  fill(204);
  scale(2);
  rect(-21, -4.5, shapeWidth, shapeHeight)
  fill(0, 0, 0, 100);
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
}