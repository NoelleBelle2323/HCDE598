const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 500;
const CIRCLE_START_WIDTH = 30; //start of each row
const CIRCLE_START_HEIGHT = 25; //start of each column
const CIRCLE_MARGIN = 15; //right and bottom margin
const CIRCLE_GAP = 50; //space between each type of circles


var s = 1; //use this variable to change the size of the circles

//draw repeated circles with nested for loops
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(220);
  //for loop to draw circles on the y axis 
  for (rowY = CIRCLE_START_HEIGHT; rowY < CANVAS_HEIGHT - CIRCLE_MARGIN * s; rowY = rowY + CIRCLE_GAP * s) {
    //for loop to draw circles on the x axis
    for (rowX = CIRCLE_START_WIDTH; rowX < CANVAS_WIDTH - CIRCLE_MARGIN * s; rowX = rowX + CIRCLE_GAP * s) {
      //Test to see if the number of circles is odd or even;   
      //Each odd number of circle has concentric circle pattern
      //Each even number of circle has asymetric pattern 
      if (isOdd((rowX - CIRCLE_START_WIDTH) / (CIRCLE_GAP * s)) == true) {
        drawEllipseType2(rowX, rowY, s, 'red', 'green');
      }
      if (isOdd((rowX - CIRCLE_START_WIDTH) / (CIRCLE_GAP * s)) == false) {
        drawEllipseType1(rowX, rowY, s, 'red', 'teal', 'orange');
      }

    }

  }
}

function draw() {

}

//function to draw concentric circles with 3 colors;
function drawEllipseType1(x, y, size, c1, c2, c3) {
  noStroke();
  fill(c1);
  ellipse(x, y, 45 * s, 45 * s);
  fill(c3);
  ellipse(x, y, 40 * s, 40 * s);
  fill(244);
  ellipse(x, y, 34 * s, 34 * s);
  fill(c2);
  ellipse(x, y, 28 * s, 28 * s);
  fill(244);
  ellipse(x, y, 13 * s, 13 * s);
  fill(c3);
  ellipse(x, y, 5 * s, 5 * s);

}

//function to draw the circles with asymetric pattern 
function drawEllipseType2(x, y, size, c1, c2) {
  noStroke();
  fill(c1);
  ellipse(x, y, 30 * s, 30 * s);
  fill(244);
  ellipse(x - 5 * s, y - 5 * s, 22 * s, 22 * s);
  fill(c2);
  ellipse(x + 2 * s, y + 2 * s, 15 * s, 15 * s);

}

//function to test whether the number of circles is odd or not
//if it's an odd number, return true
//if it's an even number, return false
function isOdd(n) {
  var remainder
  remainder = n % 2
  if (remainder == 1) {
    return true;

  } else {
    return false;
  }
}