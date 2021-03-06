// JKW HCDE 598 Assignment 6
// Jane Winn
// 12 November 2018
// HCDE 598 C
// jkwinn1@uw.edu
// Assignment 6-Bouncing-Shapes
// I relied heavily on Elena's guidance during office hours and
// the skeleton code.  I modified the size/color/transparency/design of the circles

// constants to set up the environment
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const BACKGROUND_COLOR = 0;


// these variables hold the x and y coordinates of the circles that will be drawn from arrays
var circleX = [];
var circleY = [];


// these variables hold the speed drawn from arrays that will set the circle's speed along X and Y coordinates
var circleXSpeed = [];
var circleYSpeed = [];

// this variable sets the maximum speed
var max_speed = 3;

// these variables hold the color and size of the circles that will be drawn from arrays
var circleColor = [];
var circleSize = [];


function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

//the for-loop sets up the variable i that will be used to count the number of times the loop will run
//the x and y coordinates are randomly assigned integers between 100 and 500
//the circle speed is a randomly assigned value between 0 and 3 (max_speed)
//the circle size is a randomly assigned value between 10 and 120 pixels
//the circle color is a randomly assigned color value returned by a function defined below

  for (i = 0; i < 20; i = i + 1) {
    circleX[i] = round(random(100, 500));
    circleY[i] = round(random(100, 500));
    circleXSpeed[i] = round(random(0, max_speed));
    circleYSpeed[i] = round(random(0, max_speed));
    circleSize[i] = random(10, 120)
    circleColor[i] = randomColor();

  }
//the results of drawing the x and y coordinates from the array will be printed in the consol
  print(circleX);
  print(circleY);

}

function draw() {
  background(BACKGROUND_COLOR);

  // draw and move circles
  drawCircles();
  moveCircles();

  // for debugging
  // print("X: " + circleX + " Y: " + circleY);
  // print("speed " + circleXSpeed + " " + circleYSpeed);
}


//this function draws the circles within the parameters set in the for-loop

function drawCircles() {
  for (i = 0; i < 20; i = i + 1) {
    drawCircle(circleX[i], circleY[i], circleSize[i], circleColor[i]);
  }

}

//this function moves the circles within the parameters set in the for-loop

function moveCircles() {

  for (i = 0; i < 20; i = i + 1) {
    circleX[i] = circleX[i] + circleXSpeed[i];
    circleY[i] = circleY[i] + circleYSpeed[i];


    // check if shape is outside canvas, if so, then change x, y direction
    if (circleX[i] < 0 || circleX[i] > CANVAS_WIDTH - circleSize[i]) {
      circleXSpeed[i] = circleXSpeed[i] * (-1);
    } else if (circleY[i] < 0 || circleY[i] > CANVAS_HEIGHT - circleSize[i]) {
      circleYSpeed[i] = circleYSpeed[i] * (-1);
    } else if (circleX[i] < 0 || circleY[i] < 0 || circleX > CANVAS_WIDTH || circleY > CANVAS_HEIGHT) {
      // if anything goes wrong (circle is outside canvas) just reset coords
      circleX[i] = CANVAS_WIDTH / 2;
      circleY[i] = CANVAS_HEIGHT / 2;
    }

  }
}

//draw a circle at cX, cY, cSize and randomColor 

function drawCircle(cX, cY, cSize, cColor) {
  strokeWeight(1);
  stroke(220, 240, 230);
  fill(cColor);
  ellipse(cX, cY, cSize, cSize);
  ellipse(cX, cY, cSize / 1.2, cSize / 1.2);
  ellipse(cX, cY, cSize / 1.5, cSize / 1.5);
  ellipse(cX, cY, cSize / 2, cSize / 2);
  ellipse(cX, cY, cSize / 2.9, cSize / 2.9);
  ellipse(cX, cY, cSize / 4.4, cSize / 4.4);
  ellipse(cX, cY, cSize / 9, cSize / 9);
}

function randomColor() {
  var r = random(0, 255)
  var g = random(0, 255)
  var b = random(0, 255)


  return color(r / 2.5, g, b / 1.5, 100)
}