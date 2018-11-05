// the size of the overall canvas
const CANVAS_WIDTH = 630;
const CANVAS_HEIGHT = 500;

// the uppper left corner of the triangle
const X_ORIGIN = 0;
const Y_ORIGIN = 100;
const Y2 = 50


// parameters for each triangle
const SEGMENT_SIZE = 50;


// how many triangles to draw in a row
const SEGMENTS = 12;


function setup() {

  // create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(255, 215, 0, 100);

  // set drawing paraemeters for the triangles in each row
  fill(255, 0, 0, 70);
  noStroke();

  // draw the required number of trianle
  for (i = 0; i < SEGMENTS; i++) {


    // first calculate the x coordinate of this triangle
    var xCorner = X_ORIGIN + i * SEGMENT_SIZE;
    var x2 = xCorner + 40;
    var x3 = x2 + 40;
    // then draw one triangle, in 7 rows
    triangle(xCorner, Y_ORIGIN, x2, Y2, x3, Y_ORIGIN);
    triangle(xCorner, Y_ORIGIN + 50, x2, Y2 + 50, x3, Y_ORIGIN + 50);
    triangle(xCorner, Y_ORIGIN + 100, x2, Y2 + 100, x3, Y_ORIGIN + 100);
    triangle(xCorner, Y_ORIGIN + 150, x2, Y2 + 150, x3, Y_ORIGIN + 150);
    triangle(xCorner, Y_ORIGIN + 200, x2, Y2 + 200, x3, Y_ORIGIN + 200);
    triangle(xCorner, Y_ORIGIN + 250, x2, Y2 + 250, x3, Y_ORIGIN + 250);
    triangle(xCorner, Y_ORIGIN + 300, x2, Y2 + 300, x3, Y_ORIGIN + 300);

    // if the index i is odd, the color is red,else it is blue
    if (isOdd(i)) {
      fill(255, 0, 0, 70);//red
    } else {
      fill(0,191,255, 70);//blue
    }
  }

}

function isOdd(n) {
  // compute remainder of division by two
  remainder = n % 2;
  if (remainder == 1) {
    return true;
  } else {
    return false;
  }
}

function draw() {}