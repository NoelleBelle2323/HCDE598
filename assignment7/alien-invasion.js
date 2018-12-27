//Alien Invasion
//Dawn Ferguson 
//11/20/18
//HCDE598
//dawnferg@uw.edu
//This is the final project that combines several assignments
//and uses multiple commands. This is a simplified version of the movie Alien

//setting up constants for the canvas size 
//and # of baby zenomprphs to draw 
const CONST_WIDTH = 600
const CONST_HEIGHT = 600
const XBABY_TO_DRAW = 20

var xCoord2 = 500;
var yCoord2 = 50;
var xCoord3 = 75;
var yCoord3 = 550;

//var x = 180
//var y = 360
var w = 20;

//canvas setup
function setup() {
  createCanvas(CONST_WIDTH, CONST_HEIGHT);
  angleMode(DEGREES);
}

//Night sky with twinkle stars
//setting up background and twinkle stars
function draw() {
  background(0, 0, 0);
  frameRate(50);
  fill(0, 25);
  rect(0, 0, width, height);
  fill(255);
  ellipse(random(width), random(height), 10, 10);

  //calling zenomorph function and movement
  drawXenoMorph()
  if (xCoord2 > 250) {
    xCoord2 = xCoord2 - 1;
  }
  if (yCoord2 < 240) {
    yCoord2 = yCoord2 + 1;
  }
  //calling Riley function and movement
  drawRiley()
  if (xCoord3 < 125) {
    xCoord3 = xCoord3 + 1;
  }
  if (yCoord3 > 300) {
    yCoord3 = yCoord3 - 1;
  }

  //calling baby zenomorph function to appear once both
  //Zenomorph and Riley meet
  if ((xCoord2 < 251) && (yCoord2 > 239) && (xCoord3 > 124) && (yCoord3 < 301)) {
    scale(.5);
    for (i = 0; i < XBABY_TO_DRAW; i = i + 1) {
      frameRate(10)
      drawBabyzenomorph(round(random(CONST_WIDTH * 2, 0)), round(random(0, CONST_HEIGHT * 2)))
    }

  }
  //baby Zenomporph
  //creating the function to draw the baby zenomorph
  function drawBabyzenomorph(x, y) {
    fill('grey')
    stroke('grey')
    strokeWeight(5)
    ellipse(x, y, w)
    ellipse(x, y - 20, w + 5, 25)

    beginShape(LINES);
    vertex(x, y);
    vertex(x - 25, y - 25);
    vertex(x - 25, y - 25);
    vertex(x - 20, y - 35)
    endShape();

    beginShape(LINES);
    vertex(x, y);
    vertex(x + 25, y - 25);
    vertex(x + 25, y - 25);
    vertex(x + 20, y - 35);
    endShape();

    beginShape(LINES);
    vertex(x, y);
    vertex(x + 30, y - 15);
    vertex(x + 30, y - 15);
    vertex(x + 40, y);
    endShape();

    beginShape(LINES);
    vertex(x, y);
    vertex(x - 30, y - 15);
    vertex(x - 30, y - 15);
    vertex(x - 40, y);
    endShape();

    beginShape(LINES);
    vertex(x, y);
    vertex(x - 35, y + 5);
    vertex(x - 35, y + 5);
    vertex(x - 40, y + 20);
    endShape();

    beginShape(LINES);
    vertex(x, y);
    vertex(x + 35, y + 5);
    vertex(x + 35, y + 5);
    vertex(x + 40, y + 20);
    endShape();

    beginShape(LINES);
    vertex(x, y);
    vertex(x - 10, y - 50);
    vertex(x - 10, y - 50);
    vertex(x - 25, y - 60);
    endShape();

    beginShape(LINES);
    vertex(x, y);
    vertex(x + 10, y - 50);
    vertex(x + 10, y - 50);
    vertex(x + 25, y - 60);
    endShape();

    beginShape(TRIANGLES)
    vertex(x - 10, y);
    vertex(x + 10, y);
    vertex(x, y + 50);
    vertex(x - 5, y + 40);
    vertex(x + 5, y + 40);
    vertex(x, y + 75);
    endShape();
  }
}

//creating function for xenomorph
function drawXenoMorph() {
  //xenomorph body
  noStroke();
  fill('grey');
  ellipse(xCoord2 - 25, yCoord2, 75, 40);
  triangle(xCoord2 - 1, yCoord2 - 16, xCoord2, yCoord2 + 16, xCoord2 + 50, yCoord2);
  ellipse(xCoord2 - 25, yCoord2 + 40, 15, 45);
  triangle(xCoord2 - 25, yCoord2 + 60, xCoord2, yCoord2 + 50, xCoord2 + 30, yCoord2 + 15);

  //xenomorph arms and legs
  strokeWeight(3);
  stroke('grey');
  line(xCoord2 - 22, yCoord2 + 50, xCoord2 - 18, yCoord2 + 75);
  line(xCoord2 - 30, yCoord2 + 50, xCoord2 - 34, yCoord2 + 75);
  line(xCoord2 - 45, yCoord2 + 30, xCoord2 - 30, yCoord2 + 30);
  line(xCoord2 - 45, yCoord2 + 35, xCoord2 - 32, yCoord2 + 35);

  //eyes and teeth
  strokeWeight(3);
  stroke("black");
  line(xCoord2 - 18, yCoord2, xCoord2 - 63, yCoord2 - 2);

  fill("black");
  triangle(xCoord2 - 20, yCoord2 + 6, xCoord2 - 25, yCoord2, xCoord2 - 15, yCoord2);
  triangle(xCoord2 - 30, yCoord2 + 6, xCoord2 - 35, yCoord2, xCoord2 - 25, yCoord2);
  triangle(xCoord2 - 40, yCoord2 + 6, xCoord2 - 45, yCoord2, xCoord2 - 35, yCoord2);
  triangle(xCoord2 - 50, yCoord2 + 6, xCoord2 - 55, yCoord2, xCoord2 - 45, yCoord2);
  ellipse(xCoord2 - 12, yCoord2 - 8, 5, 5);

}
//creating the fucntion for Riley
function drawRiley() {
  //Riley's head
  push();
  noStroke();
  fill("brown");
  ellipse(xCoord3 + 10, yCoord3 - 70, 50, 50);

  //Riley's face. skin tone found https://codepen.io/jgog/pen/ammXQL
  noStroke();
  fill('#ffcb9a');
  ellipse(xCoord3 + 10, yCoord3 - 70, 30, 40);

  stroke('#ffcb9a');
  strokeWeight(7);
  line(xCoord3 + 10, yCoord3 - 55, xCoord3 + 10, yCoord3 - 40);

  stroke('blue');
  strokeWeight(7);
  line(xCoord3, yCoord3 - 25, xCoord3 - 20, yCoord3 - 40);
  line(xCoord3 + 40, yCoord3 - 40, xCoord3 + 10, yCoord3 - 20);

  //body
  stroke('blue');
  fill('blue');
  rect(xCoord3, yCoord3 - 36, 18, 35, 20);

  noStroke();
  fill('blue');
  rect(xCoord3 - 3, yCoord3 - 10, 25, 15);

  stroke('blue');
  strokeWeight(12);
  line(xCoord3, yCoord3, xCoord3 - 10, yCoord3 + 20);
  line(xCoord3 + 20, yCoord3, xCoord3 + 30, yCoord3 + 20);

  //Riley's eyes
  noStroke();
  fill("white");
  ellipse(xCoord3, yCoord3 - 73, 12, 8);
  ellipse(xCoord3 + 20, yCoord3 - 73, 12, 8);

  noStroke();
  fill("brown");
  ellipse(xCoord3, yCoord3 - 73, 7, 8);
  ellipse(xCoord3 + 20, yCoord3 - 73, 7, 8);

  //Riley's Mouth
  stroke('red');
  strokeWeight(4);
  line(xCoord3 + 5, yCoord3 - 60, xCoord3 + 15, yCoord3 - 60);
  pop();

}