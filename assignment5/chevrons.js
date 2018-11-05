// File: Chevrons.js
// Author: Julie Sayigh
// Date: 11/4/18
// Description: 
// This program will show a chevron pattern in alternating colors.
// I will use a for loop to draw a horizontal line of alternating red and green quads that tilt to the right
// Then do a second row below that with shapes that tilt to the left 
// Then repeat that pattern 4 more times. 
//I didn't use nested loops but I see with all the repeated code, they would have simplified things!

// The size of the canvas
const CANVAS_WIDTH = 400
const CANVAS_HEIGHT = 343.3

// This constant is based upon the short side of a 30/60/90 triangle. 
// I am using it to create two Rhombus shapes that will repeat across the page
// Using the short side of the 30/60/90 triangle as the variable allows me to calculate 
// both the length of the sides of the rhombus (the hypoteneuse of a triangle with short side x)
// and the height of the rhombus (the long side of the triangle, x * the square root of 3).
// I should now be able to calculate all coordinates using the above equations plus the origin.
const halfRhomSide = 25

//these variables are used to make the shapes
var x = 10
var y = 43.3

//color of the shapes
const BackgrndColor = ("white")
var RhomColor1 = ("red")
var RhomColor2 = ("purple")

// how many times to repeat the rhombus in a line
const RHOM2RIGHT_LINE = 7
const RHOM2LEFT_LINE = 7

// overall size of the Rhombus
const RhomWidth = 50
const RhomHeight = 43.3

///////// 

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BackgrndColor);

  // draw the required number of right quads with the alternating colors. 
  for (i = 0; i < RHOM2RIGHT_LINE; i++) {
    x = i * RhomWidth + 10; // horizontal offset of each shape and starting x coord
    y = RhomHeight; //vertical offset
    if (isOdd(i)) { // isOdd is the function Elena wrote, I used it to alternate the colors
      fill(RhomColor1);
      drawRhombusToRight(x, y, RhomColor2); // then draw one red right rhombus
    } else {
      fill(RhomColor2);
      drawRhombusToRight(x, y, RhomColor1); // then draw one green right rhombus
    }

    // draw the required number of left quads with the alternating colors. 
    for (n = 0; n < RHOM2LEFT_LINE; n++) {
      x = n * RhomWidth + 10; // horizontal offset of each shape and starting x coord
      y = RhomHeight; //vertical offset
      if (isOdd(n)) { // isOdd is the function Elena wrote, I used it to alternate the colors
        fill(RhomColor1);
        drawRhombusToLeft(x, y, RhomColor2); // then draw one red right rhombus
      } else {
        fill(RhomColor2);
        drawRhombusToLeft(x, y, RhomColor1); // then draw one green right rhombus
      }
    }

    // draw the required number of right quads with the alternating colors. 
    for (s = 0; s < RHOM2RIGHT_LINE; s++) {
      x = s * RhomWidth + 10; // horizontal offset of each shape and starting x coord
      y = 3 * RhomHeight; //vertical offset 
      if (isOdd(s)) { // isOdd is the function Elena wrote, I used it to alternate the colors
        fill(RhomColor1);
        drawRhombusToRight(x, y, RhomColor1); // then draw one red right rhombus
      } else {
        fill(RhomColor2);
        drawRhombusToRight(x, y, RhomColor2); // then draw one green right rhombus
      }
    }

    // draw the required number of left quads with the alternating colors. 
    for (z = 0; z < RHOM2LEFT_LINE; z++) {
      x = z * RhomWidth + 10; // horizontal offset of each shape and starting x coord
      y = 3 * RhomHeight; //vertical offset
      if (isOdd(z)) { // isOdd is the function Elena wrote, I used it to alternate the colors
        fill(RhomColor1);
        drawRhombusToLeft(x, y, RhomColor1); // then draw one red right rhombus
      } else {
        fill(RhomColor2);
        drawRhombusToLeft(x, y, RhomColor2); // then draw one green right rhombus
      }
    }

    // draw the required number of right quads with the alternating colors. 
    for (f = 0; f < RHOM2RIGHT_LINE; f++) {
      x = f * RhomWidth + 10; // horizontal offset of each shape and starting x coord
      y = 5 * RhomHeight; //vertical offset 
      if (isOdd(f)) { // isOdd is the function Elena wrote, I used it to alternate the colors
        fill(RhomColor1);
        drawRhombusToRight(x, y, RhomColor2); // then draw one red right rhombus
      } else {
        fill(RhomColor2);
        drawRhombusToRight(x, y, RhomColor1); // then draw one green right rhombus
      }
    }

    // draw the required number of left quads with the alternating colors. 
    for (v = 0; v < RHOM2LEFT_LINE; v++) {
      x = v * RhomWidth + 10; // horizontal offset of each shape and starting x coord
      y = 5 * RhomHeight; //vertical offset
      if (isOdd(v)) { // isOdd is the function Elena wrote, I used it to alternate the colors
        fill(RhomColor1);
        drawRhombusToLeft(x, y, RhomColor2); // then draw one red right rhombus
      } else {
        fill(RhomColor2);
        drawRhombusToLeft(x, y, RhomColor1); // then draw one green right rhombus
      }
    }

    // draw the required number of right quads with the alternating colors. 
    for (g = 0; g < RHOM2RIGHT_LINE; g++) {
      x = g * RhomWidth + 10; // horizontal offset of each shape and starting x coord
      y = 7 * RhomHeight; //vertical offset 
      if (isOdd(g)) { // isOdd is the function Elena wrote, I used it to alternate the colors
        fill(RhomColor1);
        drawRhombusToRight(x, y, RhomColor1); // then draw one red right rhombus
      } else {
        fill(RhomColor2);
        drawRhombusToRight(x, y, RhomColor2); // then draw one green right rhombus
      }
    }
    // draw the required number of left quads with the alternating colors. 
    for (v = 0; v < RHOM2LEFT_LINE; v++) {
      x = v * RhomWidth + 10; // horizontal offset of each shape and starting x coord
      y = 7 * RhomHeight; //vertical offset
      if (isOdd(v)) { // isOdd is the function Elena wrote, I used it to alternate the colors
        fill(RhomColor1);
        drawRhombusToLeft(x, y, RhomColor1); // then draw one red right rhombus
      } else {
        fill(RhomColor2);
        drawRhombusToLeft(x, y, RhomColor2); // then draw one green right rhombus
      }
    }


  }

  function draw() {}


  //////////////////////
  //defining functions//
  //////////////////////

  //function that draws a rhombus leaning right
  function drawRhombusToRight(x, y, MyColor) {
    strokeWeight(0);
    fill(MyColor);
    quad(x + halfRhomSide, y - halfRhomSide * sqrt(3), x + halfRhomSide + 2 * halfRhomSide, y - halfRhomSide * sqrt(3), x + 2 * halfRhomSide, y, x, y);

  }

  //function that draws a rhombus leaning left
  function drawRhombusToLeft(x, y, MyColor) {
    strokeWeight(0);
    fill(MyColor);
    quad(x, y, x + (2 * halfRhomSide), y, x + ((2 * halfRhomSide) + halfRhomSide), y + (halfRhomSide * sqrt(3)), x + halfRhomSide, y + (halfRhomSide * sqrt(3)));
  }

  //function that returns true if the number is odd, and false if the number is even, taken from Elena's code in class
  function isOdd(n) {
    // compute remainder of division by two
    remainder = n % 2;
    if (remainder == 1) {
      return true;
    } else {
      return false;
    }
  }
}