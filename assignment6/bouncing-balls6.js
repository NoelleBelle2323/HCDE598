/*
Bouncing Balls
Assignment 5
Connor O'Toole
otool047@uw.edu
*/


/////////////
//VARIABLES//
/////////////

// constants to set up the environment
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const BACKGROUND_COLOR = 220;

// set constant for circle and square size
const SHAPE_SIZE = 50;

// variable to cap the maximum spped limit
var speed = 10;

// these arrays hold the x and y variables for the circle coordinates
var circleX = [];
var circleY = [];

// these arrays hold the speed at which the circle moves on the X, Y coordinates
var circleXSpeed = [];
var circleYSpeed = [];

// this array holds the circle colors
var circleColor = [];


/////////
//SETUP//
/////////

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  for (i = 0; i < 20; i++) {

    //Initialize the circles at random X and Y coordinates
    circleX[i] = round(random(100, 500));
    circleY[i] = round(random(100, 500));

    //Initialize the circles with random speeds
    circleXSpeed[i] = round(random(0, speed));
    circleYSpeed[i] = round(random(0, speed));

    //Initialize the circles with random colors
    circleColor[i] = getColor();

  }
}


////////
//DRAW//
////////

function draw() {
  background(BACKGROUND_COLOR);

  //draw and move circles
  drawCircles();
  moveCircles();
}


/////////////
//FUNCTIONS//
/////////////

/*
This function will loop through our shapes array
and draw all the circles at the designated
x,y position on the canvas.
*/

function drawCircles() {
  for (i = 0; i < 20; i++) {
    ellipseMode(CORNER);
    noStroke();
    fill(circleColor[i]);
    ellipse(circleX[i], circleY[i], SHAPE_SIZE);
  }
}


/*
This function will loop through our shapes array
and move the circles accordingly.
*/

function moveCircles() {
  for (i = 0; i < 20; i++) {

    // check if shape is outside canvas
    if (circleX[i] < 0 || circleX[i] > CANVAS_WIDTH - SHAPE_SIZE) {

      // change X direction
      circleXSpeed[i] = circleXSpeed[i] * (-1);

    } else if (circleY[i] < 0 || circleY[i] > CANVAS_HEIGHT - SHAPE_SIZE) {

      // change Y direction
      circleYSpeed[i] = circleYSpeed[i] * (-1);

    } else if (circleX[i] < 0 || circleY[i] < 0 || circleX[i] > CANVAS_WIDTH || circleY[i] > CANVAS_HEIGHT) {

      // if anything goes wrong (circle is outside canvas) just reset coords
      circleX[i] = CANVAS_WIDTH / 2;
      circleY[i] = CANVAS_HEIGHT / 2;
    }

    // move the shapes
    circleX[i] = circleX[i] + circleXSpeed[i];
    circleY[i] = circleY[i] + circleYSpeed[i];
  }
}


//A helpful funtion that returns a a color.

function getColor() {
  return color(random(255), random(255), random(255));
}