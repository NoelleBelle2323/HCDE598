//////////////////////////
////Repeating Cicrles////
////////////////////////

//File:Assignment A-5 (final).js
//Author:Rachel Binnicker
//Date:10/30/18
//Class: HCDE 598
//email: rbinnick@UW.edu 
//description:
//This program draws 40 circles in a grid on the screen and draws 
//them in a green/blue pattern


//drawCircle draws circles of variable sizes, locations, and colors 
//Input: xcoord1, the x coordinate of the location; ycoord1, the y 
//coordinate of the location; size, the size of the radius; and color, 
//the color of the circle
//Output: a circle drawn at a specified location with a specified size 
//and color. 
function drawCircle(xcoord1, ycoord1, size, color) {
  fill(color);
  ellipseMode(RADIUS);
  ellipse(xcoord1, ycoord1, size);
}

//declare constants
const size1 = 70; //size multiplier of the circle
const sizeY1 = 75; //Y distance between rows
const circleSize = 30; //radius of circle


//use the setup function to draw the image 
function setup() {
  createCanvas(420, 380); //make the canvas a specific size
  background(163, 105, 239); //make the canvas purple

  //draw a circle at every x and y for 5 x's and 4 y's
  for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 4; j++) {

      //use mod to pick every other circle going left to right
      remainder1 = i % 2;
      //use mod to pick every other circle going top to bottom
      remainder2 = j % 2;

      // change the color of every other circle

      //if even numbered column 
      if (remainder1 == 0) {
        //and if even numbered row
        if (remainder2 == 0) {
          //circle is blue
          circleColor = color(64, 180, 247);
          //if even numbered column and odd numbered row 
        } else {
          //circle is green
          circleColor = color(52, 216, 101);
        }
        //if even numbered row and not accounted for above
      } else if (remainder2 == 0) {
        //circle is green                            
        circleColor = color(52, 216, 101);
        //everything else not acounted for above
      } else {
        //circle is blue
        circleColor = color(64, 180, 247);
      }

      //call the drawCircle function with the variables and constants 
      //from above to draw the circles in a grid with a specific size
      //use the size multiplier to space the circles apart
      drawCircle((i * size1), (j * sizeY1), circleSize, circleColor);
    }
  }
}