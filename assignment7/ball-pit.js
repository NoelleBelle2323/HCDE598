/*
Rachel Kangas
HCDE 598C
Final Project
rachelk3@uw.edu

This program draws 1000 balls of randomly chosen positions and colors. When the user presses the mouse
on the canvas, the balls that are within a specified distance of the mouse (x, y) coordinates move away 
from the mouse, pause, and then return to their original spots. 

*/

// define necessary global arrays and variables
var bg_color = 'black';
const shape_size = 25; // set constant for size of bouncing balls
const radius = 50; // set constant for desired area in which to check for shapes

var xShapes = []; // create array for x-coordinate of shapes
var yShapes = []; // create array for y-coordinate of shapes
var xShapesNew = []; // create array for changing x-coordinate of shapes
var yShapesNew = []; // create array for changing y-coordinate of shapes

var colors = []; // array to keep track of color of each ball

var xClicked; // declare variable to store the x-coordinate of the mouse
var yClicked; // declare variable to store the y-coordinate of the mouse

var ShapesAreNear = []; // create array to store true/false values when checking for position of shapes

var timer = 0; //create a variable to roughly keep track of the time

var countMousePress = 0; // create an array to keep track of the mouse in relation to time


// function to initialize the position and color of each ball (1000 total)

function initialize() {
  for (i = 0; i < 1000; i = i + 1) {
    var color = ['blue', 'green', 'yellow', 'pink', 'purple', 'orange']; // create array for shape color options
    print(color); // debugging to make sure color array is recognized
    colors[i] = random(color); // keeps track of which color is assigned to which ball
    xShapes[i] = random(0 + shape_size, width - shape_size); // start each ball at a random x position
    yShapes[i] = random(0 + shape_size, height - shape_size); // start each ball at a random y position

  }
}

// function to draw 1000 balls of random colors that start at different locations on the canvas

function drawShapes(xShapes, yShapes) {

  for (i = 0; i < 1000; i = i + 1) {

    noStroke();
    fill(colors[i]);
    ellipse(xShapes[i], yShapes[i], shape_size, shape_size);

  }
}

// function to specify what happens when the mouse is pressed
function mousePressed() {

  xClicked = mouseX; // xClicked becomes the x coordinate of the mouse
  yClicked = mouseY; // yClicked becomes the y coordinate of the mouse

  // when the mouse is pressed, check for shapes within the specified radius from the mouse
  // and keep track of when the mouse was clicked
  checkForShapes();
  countMousePress = timer; // when the mouse is pressed, store the time of the press

}

// function to specify what happens when the mouse is dragged
function mouseDragged() {

  xClicked = mouseX; // xClicked becomes the x coordinate of the mouse
  yClicked = mouseY; // yClicked becomes the y coordinate of the mouse

  // when the mouse is dragged, check for shapes within the specified radius from the mouse
  // and keep track of when the mouse was dragged
  checkForShapes();
  countMousePress = timer; // when the mouse is dragged, store the time of the drag
}

// this function checks to see which shapes are within a specified distance from the mouse (x,y) when it is pressed on the canvas.
function checkForShapes() {
  for (i = 0; i < 1000; i = i + 1) {
    if (xShapes[i] <= xClicked + radius &&
      xShapes[i] >= xClicked - radius &&
      yShapes[i] <= yClicked + radius &&
      yShapes[i] >= yClicked - radius) {

      ShapesAreNear[i] = true; // assign true to the array if the shapes are within the radius

    } else {
      ShapesAreNear[i] = false; // otherwise, assign false to the array
    }
  }
}

// this function moves the shapes if function checkForShapes is true
function ShapesScatter() {

  for (var z = 0; z < xShapes.length; z++) {
    if (ShapesAreNear[z] == true) {

      // variables deltay and deltax keep track of the change in the x and y values when they are scaled
      // the x and y values of the balls are scaled when they are within the specified radius from the mouse and are moved
      // delta = the difference between the last ball position and the coordinate of the mouse click
      var deltay = yShapes[z] - yClicked;
      var deltax = xShapes[z] - xClicked;

      var slope = deltay / deltax; // slope is the variable that relates the x and y values, derived from the differential equation change in y/change in x = dy/dx

      var x_scaled = sqrt(1 + slope); // the next x coordinate (scaled) is derived from the slope and the pythagorean theorem

      // if the original x-coordinate of the ball is to the left of the mouse click, move in the negative x direction
      if (xShapes[z] <= xClicked) {
        x_scaled *= -1;
      } else {}

      var y_scaled = slope * x_scaled; // the next y coordinate (scaled) is derived from the differential equation change in y/change in x = dy/dx

      const speed = 10; // arbitrarily chosen scaling speed constant

      const time1 = 15; // arbitrarily chosen time constant
      const time2 = 2 * time1; // second time marker to signal the shapes to pause
      const time3 = 3 * time1; // third time marker to signal the shapes to return to their original positions

      // if the time since the click is less than or equal to 15, the shapes should move away at the specified speed
      // if the time since the click is less than or equal to 30, the shapes should pause
      // if the time since the click is less than or equal to 45, the shapes should move back to their original positions at the specified speed
      // otherwise, the shapes should stop moving
      if (timer - countMousePress <= time1) {
        xShapes[z] = (x_scaled * speed) + xShapes[z];
        yShapes[z] = (y_scaled * speed) + yShapes[z];
      } else if (timer - countMousePress <= time2) {} else if (timer - countMousePress <= time3) {
        xShapes[z] = -(x_scaled * speed) + xShapes[z];
        yShapes[z] = -(y_scaled * speed) + yShapes[z];
      } else {
        ShapesAreNear[z] = false;
      }

    } else {

    }
  }

  /*//debugging
  print(ShapesAreNear);
  print(xClicked);
  print(yClicked);
  print(xShapes[1]);
  print(yShapes[1])*/
}


function setup() {
  createCanvas(600, 600);
  initialize(); // initialize the position and color of each ball once in setup
}

function draw() {
  background(bg_color); // redraw background each time
  timer += 1; // time variable increases every time the draw function is run

  // debugging
  print(timer);
  print(countMousePress);

  // run functions to continually draw initial shapes and scatter them if clicked
  drawShapes(xShapes, yShapes);
  ShapesScatter();
}