// File: shades-of-blue.js
// Author: Jennifer Chiu
// Date: 11/3/18
// Class: HCDE 598
// Email: jschiu@uw.edu
// Description: This program draws circles alternating in light blue and dark blue.

//set the canvas size
const CANVAS_WIDTH = 650;
const CANVAS_HEIGHT = 500;

//set the uppper left corner of where the circles will start
const X_ORIGIN = 60;
const Y_ORIGIN = 70;

//set the background color
const BG_COLOR = '#7AC7F9';

//set the circle colors, border color, and border thickness
const CIRCLE_COLOR_EVEN = '#A9DDFF'; //light blue
const CIRCLE_COLOR_ODD = '#0D9FFF'; //dark blue
const STROKE_COLOR = 'black';
const STROKE_WEIGHT = 5;

//set the size for circles
const CIRCLE_SIZE = 75

//set number of circles to draw and size space between circles
const CIRCLES_DRAW_X = 7 //number of circles to draw in a row
const CIRCLES_DRAW_Y = 5 //number of circles to draw in a column
const CIRCLE_SPACE = 90


function setup() {
  //create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BG_COLOR);

  //set drawing parameters for circles
  fill(CIRCLE_COLOR_EVEN);
  stroke(STROKE_COLOR);
  strokeWeight(STROKE_WEIGHT);

  //draws required number of circles in a row and in a column
  for (i = 0; i < CIRCLES_DRAW_X; i++) {
  for (j = 0; j < CIRCLES_DRAW_Y; j++) {

     //sets the color of the circle depending on if the index number i is an odd or even number
      if (isOdd(i)) {
        fill(CIRCLE_COLOR_ODD); //if index number i is an odd number, fill the circle with dark blue
      } else {
        fill(CIRCLE_COLOR_EVEN); //if index number i is an even number, fill the circle with light blue
      }

      //calculate the x and y coordinates of where circle starts
      var X_CORNER = X_ORIGIN + i * CIRCLE_SPACE
      var Y_CORNER = Y_ORIGIN + j * CIRCLE_SPACE

      //draw one line of circles
      ellipse(X_CORNER, Y_CORNER, CIRCLE_SIZE);
    }
  }
}

//returns true if the number is odd and false if the number is even
function isOdd(n) {
  remainder = n % 2;
  if (remainder == 1) {
    return true;
  } else {
    return false;
  }
}

//not animating my circles so nothing was placed in the draw function
function draw() {}