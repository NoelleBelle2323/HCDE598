//Holly Howson-Watt
//Assignment #5 - Bouncing Balls
//Using arrays to move 20 shapes on canvas at set speed, random directions

// constraints to set up the environment
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const BACKGROUND_COLOR = 'lavender';

// set constant for circle and square size
const SHAPE_SIZE = 50;


//declare circle arrays
var circleX = [];
var circleY = [];


//diclare speed arrays
var circleXSpeed = [];
var circleYSpeed = [];

//upper bound for speed
var speed = 10;

// variables circle color
var circleColor = 'white';

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  // initialize circles x and y coords
  for (i = 0; i < 20; i++) {
    circleX[i] = round(random(100, 500));
    circleY[i] = round(random(100, 500));

    // randomly assign x and y speeds from speeds array
    circleXSpeed[i] = round(random(0, speed));
    circleYSpeed[i] = round(random(0, speed));
    print(circleXSpeed[i] + " " + circleYSpeed[i]);
  }
}

function draw() {
  background(BACKGROUND_COLOR);

  // draw and move circles
  //set up functions
  drawShapes();
  moveShapes();
}

//set up function to draw multiple shapes
//use designated x,y points on canvas
function drawShapes() {
  for (i = 0; i < 20; i++) {
    drawCircle(circleX[i], circleY[i], SHAPE_SIZE, circleColor);
  }
}

//move shapes through array
function moveShapes() {
  //set x and y coordinates and establish speed at which balls move along x and y axis
  //set speed that ball will change direction
  for (i = 0; i < 20; i++) {
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
    // move shape through array
    circleX[i] = circleX[i] + circleXSpeed[i];
    circleY[i] = circleY[i] + circleYSpeed[i];
  }
}

function drawCircle(cX, cY, cSize, cColor) {
  ellipseMode(CORNER);
  noStroke();
  fill(cColor);
  ellipse(cX, cY, cSize, cSize);
}
