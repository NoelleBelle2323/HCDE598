/*
Bouncing Chicks
Assignment 6
*/


// constants to set up the environment
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const BACKGROUND_COLOR = '#C797FA';

// set constant for chick size
const SHAPE_SIZE = 50;



//arrays for making multiple chicks appear on the screen
var circleX = [];
var circleY = [];


// these arrays hold the speed at which the circle moves on the X, Y coordinates
//this allows the chicks to move around with different speeds
var circleXSpeed = [];
var circleYSpeed = [];

// this is the original speed of the chicks
var speed = 10;


// variables circle color
var circleColor = 0;


function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  // initialize circles x and y coords
  // randomly assign x and y coordinates betweeen 100 and 500
  // round makes sure the # gets rounded to closest integer, 
  // since p5js cant read if not an integer
  for (i = 0; i < 20; i = i + 1) {
    circleX[i] = round(random(100, 500));
    circleY[i] = round(random(100, 500));

    // randomly assign x and y speeds from speeds array  
    circleXSpeed[i] = round(random(0, speed));
    circleYSpeed[i] = round(random(0, speed));

  }


}

function draw() {
  background(BACKGROUND_COLOR);

  // draw and move chicks
  drawShapes();
  moveShapes();

}


// This function loops through shapes array and draws them
//at the designated x,y position on the canvas.

function drawShapes() {
  for (i = 0; i < 20; i = i + 1) {
    drawCircle(circleX[i], circleY[i], SHAPE_SIZE, circleColor);
  }
}

/*
This function loops through the shapes array and moves the shapes
accordingly.
*/

function moveShapes() {

  //  this is the parameters for the "bounce" of the chick when it hits 
  // the border of the screen. When the chick hits the border it bounces 
  // through the for loops bellow 

  for (i = 0; i < 20; i = i + 1) {
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
    // move shapes
    circleX[i] = circleX[i] + circleXSpeed[i];
    circleY[i] = circleY[i] + circleYSpeed[i];
  }

}

/*
		Function to draw a chick at cX, cY with
    size = cSize and color = cColor.
 */
function drawCircle(cX, cY, cSize, cColor) {
  // This is for making circles
  //ellipseMode(CORNER);
  //noStroke();
  // fill(cColor);
  //ellipse(cX, cY, cSize, cSize);

  // This is for creating the chick
  //color of body
  stroke('#9ee863');
  strokeWeight(5)
  fill('#9ee863');
  ellipse(cX, cY, 80, 80);

  //color of belly
  fill('#dbffbf');
  stroke('#dbffbf');
  ellipse(cX, cY + 10, 47, 50);

  fill('#65c11f');
  stroke('#65c11f');
  ellipse(cX - 36, cY + 10, 20, 30);

  //left wing
  strokeWeight(1);
  ellipse(cX - 38, cY + 11, 20, 30);

  //right wing
  strokeWeight(6);
  ellipse(cX + 37, cY + 10, 20, 30);

  //eye left
  fill('white');
  stroke('white');
  ellipse(cX - 15, cY - 12, 25, 25);

  fill('black');
  stroke('black');
  ellipse(cX - 15, cY - 12, 16, 16);

  //eye right
  fill('white');
  stroke('white');
  ellipse(cX + 15, cY - 12, 25, 25);

  fill('black');
  stroke('black');
  ellipse(cX + 15, cY - 12, 16, 16);

  //beak
  stroke('orange');
  strokeWeight(6);
  fill('orange');
  triangle(cX - 5, cY + 5, cX + 5, cY + 5, cX, cY + 12);
}