// File: Bounce.js  
// Author: Sondra Yancey 
// Date: 11/9/18
// Class: HCDE 598  
// Email: Sondray@uw.edu 
// Description:  
// This program shows different balls bouncing


const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const CIRCLE_RADIUSMAX = 100; // largest ball size
const CIRCLE_RADMIN = 15; // smallest ball size
const INIT_VEL = 5; // inital velocity of ball
const BALL_COUNT = 100; // number of balls on screen

var X = []; // current ball x coordinates
var Y = []; // current ball y coordinates
var xVel = []; // horizontal velocity of the bouncing balls
var yVel = []; // vertical velocity of bouncing balls
var ballColor = []; //color per ball
var ballSize = []; //size per ball

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  // for all balls, set inital random xy coordinates, velocity, color and size
  for (i = 0; i < BALL_COUNT; i++) {
    X[i] = round(random(CIRCLE_RADIUSMAX, CANVAS_WIDTH - CIRCLE_RADIUSMAX));
    Y[i] = round(random(CIRCLE_RADIUSMAX, CANVAS_HEIGHT - CIRCLE_RADIUSMAX));
    xVel[i] = random(-INIT_VEL, INIT_VEL);
    yVel[i] = random(-INIT_VEL, INIT_VEL);
    ballColor[i] = randomColor();
    ballSize[i] = random(CIRCLE_RADMIN, CIRCLE_RADIUSMAX);
  }

}

function draw() {
  // DRAW balls
  background(43, 65, 94); // dark blue
  drawBalls(X, Y, ballColor, ballSize, BALL_COUNT);

  //UPDATE ball position and velocity
  updateBalls(X, Y, xVel, yVel, BALL_COUNT, CANVAS_WIDTH, CANVAS_HEIGHT);
}

//returns a new random color for each ball
function randomColor() {
  var r = random(0, 255);
  var b = random(0, 255);
  var g = random(0, 255);

  return color(r, b, g);
}

//this function draws balls at positions specified by X and Y
//ball color and size are determined by ballColor and ballSize
function drawBalls(X, Y, ballColor, ballSize, ballCount) {
  // for each ball draws with color, size and coordinates
  for (i = 0; i < ballCount; i++) {
    fill(ballColor[i]);
    ellipse(X[i], Y[i], ballSize[i]);
  }
}

//This function moves balls and bounces them off sides of canvas
function updateBalls(X, Y, xVel, yVel, ballCount, canvasW, canvasH) {
  // Update positions based on velocity
  for (i = 0; i < ballCount; i++) {
    X[i] = X[i] + xVel[i];
    Y[i] = Y[i] + yVel[i];

    //bounce when hit horizontal screen boundaries
    if (X[i] <= 0 || X[i] > canvasW) {
      xVel[i] = -xVel[i];
    }
    //bounce when hit vertical screen boundaries
    if (Y[i] <= 0 || Y[i] > canvasH) {
      yVel[i] = -yVel[i];
    }
  }
}