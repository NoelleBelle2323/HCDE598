/*
Bouncing Balls
*/


// constants to set up the environment
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const BACKGROUND_COLOR = 220;

// set constant for circle and square size
const SHAPE_SIZE = 50;


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

//array to hold coordinates of circles
var circleXs = [];
var circleYs = [];

//array to hold the speeds
var circleXSpeeds = [];
var circleYSpeeds = [];


// variables circle color
var circleColor = 0;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  // initialize random colors for circles and squares
  circleColor = randomColor();


  // initialize circles x and y coords
  for (var i = 0; i < 10; i++) {
    // randomly assign x and y coordinates betweeen 100 and 500
    circleXs[i] = round(random(100, 500));
    circleYs[i] = round(random(100, 500));
    circleXSpeeds[i] = random(1, 3);
    circleYSpeeds[i] = random(1, 3);

  }

}

function draw() {
  background(BACKGROUND_COLOR);

  // draw and move circles
  drawShapes();
  moveShapes();

}


/*
    This function will loop through our shapes array
    and draw the all the shapes at the designated
    x,y position on the canvas.
 */

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
		A helpful funtion that returns a random color.
 */
function randomColor() {
  var r = random(0, 255);
  var b = random(0, 255);
  var g = random(0, 255);


  return color(r, b, g);
}

//draw circles first
function drawShapes() {

  for (var s = 0; s < circleXs.length; s++) {

    var shapeX = circleXs[s];
    var shapeY = circleYs[s];

    drawCircle(shapeX, shapeY, SHAPE_SIZE, circleColor);

  }
}

/*
    This function will loop through our shapes array
    and move the shapes accordingly.
 */
function moveShapes() {
  // loop through shapes and shapesSpeeds
  for (i = 0; i < circleXs.length; i++) {

    // get shape x and y coordinates
    
    var shapeX = circleXs[i];
    var shapeY = circleYs[i];

    // check if shape is outside canvas
    if (shapeX < 0 || shapeX > CANVAS_WIDTH - SHAPE_SIZE) {
      // change X direction
      circleXSpeeds[i] *= -1;
    } else if (shapeY < 0 || shapeY > CANVAS_HEIGHT - SHAPE_SIZE) {
      // change Y direction
      circleYSpeeds[i] *= -1;
    } else if (shapeX < 0 || shapeY < 0 || shapeX > CANVAS_WIDTH || shapeY > CANVAS_HEIGHT) {
      // if anything goes wrong just reset coords
      shapeX = CANVAS_WIDTH / 2;
      shapeY = CANVAS_HEIGHT / 2;
    }

    // move shape by updating the value of shapeX and shapeY
    circleXs[i] += circleXSpeeds[i];
    circleYs[i] += circleYSpeeds[i];

  }
}

