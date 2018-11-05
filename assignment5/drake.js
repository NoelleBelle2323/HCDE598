// Lynn Pham
// HCDE 598 - A5: Repeat Shapes
// This code repeats Drake in different color jackets.

// set the size of the canvas
const canvasWidth = 500;
const canvasHeight = 500;

// setting up the upper left corner where the loop starts
const xOrigin = 50;
const yOrigin = 50;

// setting up Drake's outfit colors
const bgColor = '#B8D8D8'; // pastel blue background
const drakeHead = '#5C4033'; // Drake's head
const drakeShirt = 'white'; // white shirt
const jacketOne = '#8B0000'; // red jacket
const jacketTwo = '#228B22'; // green jacket
const drakePants = '#01579B'; // blue jeans

// parameters for every Drake's figure
const shapeWidth = 20;
const shapeLength = 20;

// parameters for Drake's pants
const pantOriginX = 50;
const pantOriginY = 100;
const pantWidth = 20;
const pantLength = 30;

// sets how many Drake figures to draw per row and column
const drakeNumberX = 9;
const drakeNumberY = 4;

//set up how much padding between each Drake on both axis
const drakePaddingX = 50;
const drakePaddingY = 100;

// to calculate the x and y coordinates of Drake figures
var xCorner;
var yCorner;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  // draw the Drake figures in a row
  for (i = 0; i < drakeNumberX; i++) {
    for (j = 0; j < drakeNumberY; j++) {

      // to calculate the x and y coordinates of Drake figures
      xCorner = xOrigin + i * drakePaddingX;
      yCorner = yOrigin + j * drakePaddingY;

      // to call the functions to alternate Drake's jackets
      if ((i % 2) == 0) {
        drakeOdd();
      } else {
        drakeEven();
      }
    }
  }
}

// this function will draw an odd Drake with a red jacket
function drakeOdd() {

  // drawing Drake's head
  noStroke();
  fill(drakeHead); // Drake's head 
  rect(xCorner, yCorner, shapeWidth, shapeLength);

  // drawing Drake's odd red jacket
  fill(jacketOne); // red jacket
  rect(xCorner, yCorner + 20, shapeWidth, shapeLength + 10);

  // drawing Drake's white shirt
  fill(drakeShirt); // Drake's shirt
  rect(xCorner + 8, yCorner + 20, shapeWidth - 16, shapeLength + 10);

  // drawing Drake's pants
  fill(drakePants); // blue pants
  rect(xCorner, yCorner + 40, shapeWidth, shapeLength + 10);
}

// this function will draw even Drake in a green jacket
function drakeEven() {

  // drawing Drake's head
  noStroke();
  fill(drakeHead); // Drake's head 
  rect(xCorner, yCorner, shapeWidth, shapeLength);

  // drawing Drake's even green jacket
  fill(jacketTwo); // green jacket
  rect(xCorner, yCorner + 20, shapeWidth, shapeLength + 10);

  // drawing Drake's white shirt
  fill(drakeShirt); // Drake's shirt
  rect(xCorner + 8, yCorner + 20, shapeWidth - 16, shapeLength + 10);

  // drawing Drake's pants
  fill(drakePants); // blue pants
  rect(xCorner, yCorner + 40, shapeWidth, shapeLength + 10);
}