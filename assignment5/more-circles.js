/* 
Kellie Dunn
HCDE 598C
Assignment A5 - Repeated Shapes
Draw alternating color circles with a for loop and parameters
*/

// the size of the overall canvas
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 40;

// starting point at center of the top left circle
const X_ORIGIN = 20;
const Y_ORIGIN = 20;

// color scheme
const BG_COLOR = 'black';
const CIRCLE_COLOR = '#e600e6';
const CIRCLE_COLOR_ODD = '#008ae6';
const STROKE_COLOR = 'white';

// parameters for each circle in the row
const CIRCLE_SIZE = 40
const STROKE_WIDTH = 2;

// how many circles to draw in the row
 const ROW_CIRCLES = 60;


function setup() {

  // create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BG_COLOR);

  // set drawing paraemeters for the bar segments
  fill(CIRCLE_COLOR);
  stroke(STROKE_COLOR);
  strokeWeight(STROKE_WIDTH);

  // draw the required number of bar segments
  for (i = 0; i < ROW_CIRCLES; i++) {
    // set the fill of the shape every time we iterate through the for loop
    // the fill is set to different colors if the index i is an odd number or not
    if(isOdd(i)){
      fill(CIRCLE_COLOR_ODD);
    } else {
    	fill(CIRCLE_COLOR);
  }
    
    // first calculate the x coordinate of the row
    var xCorner = X_ORIGIN + i * CIRCLE_SIZE
    
    // then draw one circle
    ellipse(xCorner, Y_ORIGIN, CIRCLE_SIZE);


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