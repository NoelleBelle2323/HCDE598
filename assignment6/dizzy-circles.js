/*
Lynn Pham
HCDE 598
Bouncing Balls
Assignment 5, starting code
*/

// constants to set up the environment
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const BACKGROUND_COLOR = "#800000";

// set constant for circle and square size
const SHAPE_SIZE = 20;

/*
        Array(s) that will hold our shapes x and y coordinates. Can be done with
    one or two arrays. 
    
    With one array...
    shapes[0] is the x coordinate for the first shape and
    shapes[1] is the y coordinate for the first shape and so on...
    
    so in more mathy notation...
    shapes = [x1, y1, x2, y2, x3, y3...xN, yN]
    where x1, y1...xN, yN are real numbers that represent
    x and y coordinates on the canvas.
    
    With two arrays...
    shapeXs = [x1, x2, x3, x4, x5...xN];
    shapeYs = [y1, y2, y3, y4, y5...yN];
    
 */

//var circles = [];
var circleX = [];
var circleY = [];

/* 
        Array(s) that will hold the direction and distance of movement 
    for each shape in our shapes arrays. These are the values that will be
    added to the shapes coordinates each time the shapes are moved.
    If it is a positive value the x or y coordinate will be increased
    so the shape will move right/down. If it is a negative value adding
    it to the x and y coordinate will cause the x or y to be decreased
    so the shape will move left/up.
    
    Similarly to the arrays for x and y coordinates this can be done with
    one or two arrays...
    
    With one array...
    shapeSpeeds[0] is the x speed for the first shape and
    shapeSpeeds[1] is the y speed for the first shape and so on...
    
    shapeSpeeds = [x1Speed, y1Speed, x2Speed, y2Speed...xNSpeed, yNSpeed]
    
    
    With two arrays...
    shapeXSpeed[0] is the x speed for the first shape and
    shapeYSpeed[0] is the y speed for the first shape
    
    shapeXSpeed = [x1Speed, x2Speed...xNSpeed]
    shapeYSpeed = [y1Speed, y2Speed...yNSpeed]
    
 */

// these variables hold the speed at which the circle moves on the X, Y coordinates
var circleXSpeed = [];
var circleYSpeed = [];

// for now we set this to a single variable
// but you can extend the array to hold possible shape speeds
var speed = 10;

// variables circle color
var circleColor = [];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  // initialize circles x and y coords
  // randomly assign x and y coordinates betweeen 100 and 500
  // round will make sure the number gets rounded to closest integer, 
  // if the number in not an integer p5js won't know where to place the X Y coordinates
  for (i = 0; i < 200; i = i + 1) {
    circleX[i] = round(random(100, 500));
    circleY[i] = round(random(100, 500));
    circleXSpeed[i] = round(random(0, speed));
    circleYSpeed[i] = round(random(0, speed));
    circleColor[i] = getColor();
  }
  // randomly assign x and y speeds from speeds array  
  // round will make sure the number gets rounded to closest integer, 
  // if the number in not an integer p5js won't know where to place the X Y coordinates
  print(circleXSpeed + " " + circleYSpeed);
}

function draw() {
  background(BACKGROUND_COLOR);
  
  // draw and move circles
  drawShapes();
  moveShapes();
  
  // for debugging
  // print("X: " + circleX + " Y: " + circleY);
  // print("speed " + circleXSpeed + " " + circleYSpeed);
}

/*
    This function will loop through our shapes array
    and draw the all the shapes at the designated
    x,y position on the canvas.
 */

function drawShapes() {
  for (i = 0; i < 200; i++) {
    drawCircle(circleX[i], circleY[i], SHAPE_SIZE, circleColor[i]);
  }
}

/*
This function will loop through our shapes array
and move the shapes accordingly.

For now, this function only uses the coordinates for one circle and no loop
*/

function moveShapes() {
  
  // this is where you will want to loop through shapes and shapesSpeeds
  // for each circle you will want to get the X, Y coordinate and the speed on the X and Y axis
  //  print(shapeX + " " + shapeY + " " + shapeXSpeed + " " + shapeYSpeed);
  // check if shape is outside canvas
  
  for (i = 0; i < 200; i = i + 1) {
    if (circleX[i] < 0 || circleX[i] > CANVAS_WIDTH - SHAPE_SIZE) {
      // change X direction
      circleXSpeed[i] = circleXSpeed[i] * (-1);
    } else if (circleY[i] < 0 || circleY[i] > CANVAS_HEIGHT - SHAPE_SIZE) {
      // change Y direction
      circleYSpeed[i] = circleYSpeed[i] * (-1);
    } else if (circleX[i] < 0 || circleY[i] < 0 || circleX[i] > CANVAS_WIDTH || circleY[i] > CANVAS_HEIGHT) {
      // if anything goes wrong (circle is outside canvas) just reset coords
      crcleX[i] = CANVAS_WIDTH / 2;
      circleY[i] = CANVAS_HEIGHT / 2;
    }
    
    // move shape
    circleX[i] = circleX[i] + circleXSpeed[i];
    circleY[i] = circleY[i] + circleYSpeed[i];
  }
}

/*
        Function to draw a circle at cX, cY with
    size = cSize and color = cColor.
 */

function drawCircle(cX, cY, cSize, cColor) {
  ellipseMode(CORNER);
  noStroke();
  fill(cColor);
  ellipse(cX, cY, cSize, cSize);
}

/*
        A helpful funtion that returns a a color.
 */

function getColor() {
  // here you could generate random values for thr r, g, b values and generate random colors
  
  var r = random(0, 255);
  var b = random(0, 255);
  var g = random(0, 255);

  return color(r, b, g);
}