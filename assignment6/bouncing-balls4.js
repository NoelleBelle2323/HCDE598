/*
Rachel Kangas
HCDE 598C
A6: Bouncing Shapes
rachelk3@uw.edu

This program uses functions and arrays to create randomly colored balls that bounce around the
canvas.

*/

// define necessary global arrays and variables
var bg_color = 'white';
const shape_size = 50; // set constant for size of bouncing balls

var xShapes = []; // create array for x-coordinate of shapes
var yShapes = []; // create array for y-coordinate of shapes

var xSpeed = [4, 5, 6, 7, 8, 9, 10, 3, 2, 1]; // create and initialize array to keep track of x direction/speed
var ySpeed = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]; // create and initialize array to keep track of y direction/speed

var colors = []; // array to keep track of color of each ball


// function to initialize the position and color of each ball (10 total)

function initialize() {
  for (i = 0; i < 10; i = i + 1) {
    var color = ['blue', 'green', 'yellow', 'pink', 'purple', 'orange']; // create array for shape color options
    print(color); // debugging to make sure color array is recognized
    colors[i] = random(color); // keeps track of which color is assigned to which ball
    xShapes[i] = random(0 + shape_size, width - shape_size); // start each ball at a random x position
    yShapes[i] = random(0 + shape_size, height - shape_size); // start each ball at a random y position
  }
}

// function to draw 10 balls of random colors that start at different locations on the canvas

function drawShapes(xShapes, yShapes) {

  for (i = 0; i < 10; i = i + 1) {

    noStroke();
    fill(colors[i]);
    ellipse(xShapes[i], yShapes[i], shape_size, shape_size);

  }
}

// function to move balls independently around the canvas, using 4 array parameters as inputs.
// Given input arrays for changing position and speed, the speed and position are updated with a for loop to move the balls. 

function moveShapes(x_movingA, y_movingA, xSpeed, ySpeed) {

  for (var z = 0; z < x_movingA.length; z++) {

    var x_moving = x_movingA[z]; // new x position for each ball
    var y_moving = y_movingA[z]; // new y position for each ball

    // declare conditionals using width and height of canvas so that ball bounces back
    if (x_moving > width - shape_size || x_moving < 0 + shape_size) {
      xSpeed[z] *= -1; // change speed direction in x
    } else if (y_moving < 0 + shape_size || y_moving > height - shape_size) {
      ySpeed[z] *= -1; // change speed direction in y
    }

    x_moving += xSpeed[z]; // combines the last x position with the new speed to calculate the next x position
    y_moving += ySpeed[z]; // combines the last y position with the new speed to calculate the next y position

    x_movingA[z] = x_moving; // saving new position to update the changing x positon array
    y_movingA[z] = y_moving; // saving new position to update the changing y positon array
  }

}


function setup() {
  createCanvas(600, 600);
  initialize(); // initialize the position and color of each ball once in setup
}



function draw() {
  background(bg_color); // redraw background each time
  drawShapes(xShapes, yShapes);
  moveShapes(xShapes, yShapes, xSpeed, ySpeed);
}