// File: tennis-balls.js
// Author: Jennifer Chiu
// Date: 11/11/18
// Class: HCDE 598
// Email: jschiu@uw.edu
// Description: This program draws green balls bouncing around the canvas at different speeds.

//set constants for canvas size and color
const BACKGROUND_WIDTH = 700;
const BACKGROUND_HEIGHT = 500;
const BACKGROUND_COLOR = "silver";

// set constant for circle size
const CIRCLE_SIZE = 45;

//set arrays for x and y coordinates of the circles and chose random numbers within the canvas
var coordinateX = [120, 175, 200, 230, 350, 400, 480, 520, 550, 600];
var coordinateY = [100, 125, 160, 210, 260, 310, 330, 375, 400, 430];

//set arrays for the direction of the circles and chose random numbers
var directionX = [1, 2, -1, 5, -2, 3, 4, 1, 4, 2];
var directionY = [-1, 1, 5, -2, 4, -4, -1, 1, 3, 4];

//set variables for the color of the circles
var circleColor = "#C5FF00";

function setup() {
  createCanvas(BACKGROUND_WIDTH, BACKGROUND_HEIGHT);
}

function draw() {
  background(BACKGROUND_COLOR);

  //draw and move the circles
  drawCircles(coordinateX, coordinateY);
  moveCircles(coordinateX, coordinateY, directionX, directionY);
}

//write function to loop through shape arrays and draw all the circles
function drawCircles(circleXs, circleYs) {
  for (var s = 0; s < coordinateX.length; s++) {
    var circleX = circleXs[s];
    var circleY = circleYs[s];
    drawCircle(circleX, circleY, CIRCLE_SIZE, circleColor);
  }
}

//write function to loop through shape arrays and move the circles
function moveCircles() {
  for (i = 0; i < coordinateX.length; i++) {
    var circleX = coordinateX[i];
    var circleY = coordinateY[i];
    var circleXspeed = directionX;
    var circleYspeed = directionY;

    //if the circle is outside canvas, change the direction
    if (circleX < 0 || circleX > BACKGROUND_WIDTH - CIRCLE_SIZE) {
      //change the X direction of circle
      circleXspeed[i] *= -1;
    } else if (circleY < 0 || circleY > BACKGROUND_HEIGHT - CIRCLE_SIZE) {
      //change the Y direction of circle
      circleYspeed[i] *= -1;
    } else if (circleX < 0 || circleY < 0 || circleX > BACKGROUND_WIDTH || circleY > BACKGROUND_HEIGHT) {
      // if circle is outside canvas, reset the coordinates as follows
      circleX = BACKGROUND_WIDTH / 2;
      circleY = BACKGROUND_HEIGHT / 2;
    }

    //update values of circleX and circleY to move the circle
    circleX = coordinateX[i];
    circleY = coordinateY[i];

    //update arrays
    coordinateX[i] += directionX[i];
    coordinateY[i] += directionY[i];
    circleXspeed = directionX[i];
    circleYspeed = directionY[i];
  }

}
//write a function to draw the circle
function drawCircle(cX, cY, cSize, cColor) {
  ellipseMode(CORNER);
  noStroke();
  fill(cColor);
  ellipse(cX, cY, cSize, cSize);
}