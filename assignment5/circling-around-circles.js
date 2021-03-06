//DAWN FERGUSON HCDE 598 Intro to Programming
// November 1 2018
// dawnferg@uw.edu
// Assignment 5 Loops

// set the size of the canvas
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

// set the upper left corner where the circle starts
const X_ORIGIN = 50;
const Y_ORIGIN = 50;

// all the colors used in the sketch
const BG_COLOR = 'yellow';
const CIRCLE_COLOR1 = 'green';
const CIRCLE_COLOR2 = 'red';

// set the size and stroke for each circle
const CIRCLE_SIZE = 60;
const STROKE_WEIGHT = 2;

// set how many circles to draw per line and their distance appart
const CIRCLE_NUMBER = 5;
const CIRCLE_GAP = 75;

function setup() {

  // create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BG_COLOR);

  // call parameter for the weight of stroke
  strokeWeight(STROKE_WEIGHT);

  // draws five circles in a row and five coluumns,
  //fills each with red for odd
  // and green for even
  for (i = 0; i < CIRCLE_NUMBER; i++)
  for (j = 0; j < CIRCLE_NUMBER; j++) {

      // set the fill for odd vs even circles based on i
      if (isOdd(i)) {
        fill(CIRCLE_COLOR1);
      } else {
        fill(CIRCLE_COLOR2);
      }

      // first calculate the x and y coordinate of this segment
      var xCorner = X_ORIGIN + i * CIRCLE_GAP;
      var yCorner = Y_ORIGIN + j * CIRCLE_GAP;

      // start one line
      ellipse(xCorner, yCorner, CIRCLE_SIZE);

    }
}
// returns true if the number is odd, and false if the number is even
function isOdd(n) {
  // compute remainder of division by two
  remainder = n % 2;
  if (remainder == 1) {
    return true;
  } else {
    return false;
  }
}

// not used in this sketch
function draw() {}