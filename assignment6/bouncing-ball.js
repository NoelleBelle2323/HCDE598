// File: bouncing shapes.js
// Author: Jessica Biondo
// Date: 11/12/18
// Class: HCDE 598
// Email: jessb35@uw.edu
// Description: This program shoul

// constants for canvas and background
const CANVAS_WIDTH = 450;
const CANVAS_HEIGHT = 450;
const BACKGROUND_COLOR = 150;

// constant for circle size
const RADIUS = 20;

//array for 10 circles
var circleX = [50, 100, 150, 200, 250, 300, 350, 400, 50, 100];
var circleY = [120, 40, 160, 80, 100, 140, 180, 60, 20, 100];

//x and y direction f0r cirlces
var directionX = [1, 2, 3, 4, 5, 4, 3, 2, 1, 2];
var directionY = [2, 3, 2, 3, 2, 3, 2, 3, 2, 3];


//circle speed
var speed = 5;

//circle color
var circleColor = 0;

var circleXspeed;
var circleYspeed;

function setup() {
  createCanvas(450, 450);
  circleXspeed = 10;
  circleYspeed = 10;

  //circle color 
  circleColor = randomColor();

}

//in draw function, call functions to draw and move  circles
function draw() {
  frameRate(5)
  background(BACKGROUND_COLOR);
  var size = 15
  for (i = 0; i < 10; i++) {
    drawMoreCircles(circleX[i], circleY[i], RADIUS)
    moveCircles(circleX[i], circleY[i], directionX, directionY)
  }

}


  /////////////////////////////////////
  /////////functions for above ///////
  ////////////////////////////////////

//draw a circle at cX, cY with size = cSize and color = circleColor.
function drawCircle(cX, cY, cSize) {
  ellipseMode(CENTER);
  fill(circleColor);
  ellipse(cX, cY, cSize);
}

//to draw more circles
function drawMoreCircles(circleX, circleY, cSize2) {
  var newcircle2 = circleX;
  var newcircle3 = circleY;
  drawCircle(newcircle2, newcircle3, cSize2)
}

//to move circles
function moveCircles() {
  for (i = 0; i < 10; i++) {
    circleX[i] = circleX[i] + circleXspeed
    circleY[i] = circleY[i] + circleYspeed

    var spotX = circleX[i]
    var spotY = circleY[i]
    if (spotX < 0 || spotX > 450) {
      circleXspeed = circleXspeed * (-1)
    }

    if (spotY < 0 || spotY > 450) {
      circleYspeed = circleYspeed * (-1)
    }
    circleX[i] = circleX[i] + circleXspeed
    circleY[i] = circleY[i] + circleYspeed
  }
}

function randomColor() {
  var r = random(0, 255);
  var b = random(0, 255);
  var g = random(0, 255);

  return color(r, b, g);
}