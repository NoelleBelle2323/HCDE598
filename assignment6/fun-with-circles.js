// constants to set up the environment
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const BACKGROUND_COLOR = "black";
const radius = 30;

// set constant for circle size
const SHAPE_SIZE = 50;

var xCoords = [];
var yCoords = [];
var xSpeeds = [];
var ySpeeds = [];

// variables circle color
var circleColor = 0;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  // initialize circles x and y coords
  for (var i = 0; i < 10; i++) {
    // randomly assign x and y coordinates for xCoords, yCoords,
    //xSpeeds and ySpeeds
    xCoords[i] = round(random(100, 400));
    yCoords[i] = round(random(100, 400));
    xSpeeds[i] = round(random(1, 4));
    ySpeeds[i] = round(random(1, 4));

  }

}

function draw() {
  background(BACKGROUND_COLOR);

  // draw and move circles

  drawCircles();

  moveCircles();


}


/*
    This function will loop through our shapes array
    and draw the all the shapes at the designated
    x,y position on the canvas.
 */
function drawCircles() {

  for (var i = 0; i < 10; i++) {
    //fill circles with random colors
    circleColor = color(random(255), random(255), random(255));
    // drawCircle in every iteration of the for loop based on the array values of shapeXs and shapeYs 
    var x = xCoords[i];
    var y = yCoords[i];
    fill(circleColor);
    ellipse(x, y, radius);


  }
}

/*
    This function will loop through our shapes array
    and move the shapes accordingly.
  */
function moveCircles() {

  // loop through shapes and shapesSpeeds
  for (var i = 0; i < 10; i++) {

    // get shape x and y coordinates from shapeXs and shapeYs
    var x = xCoords[i];
    var y = yCoords[i];
    var shapeXSpeed = xSpeeds[i];
    var shapeYSpeed = ySpeeds[i];

    if (x+ radius/2  > CANVAS_WIDTH || x < 0) {
      shapeXSpeed *= -1;
    } else if (y + radius > CANVAS_HEIGHT || y < 1) {

      shapeYSpeed *= -1;
    }

    x+= shapeXSpeed;
    y += shapeYSpeed;
    
    // update arrays and variables for xCoords, yCoords, shapeXSpeed, shapeYSpeed
    xCoords[i] = x;
    yCoords[i] = y;

    xSpeeds[i] = shapeXSpeed;
    ySpeeds[i] = shapeYSpeed;

  }
}
