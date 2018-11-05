/*
chickadel_assignment 5

I wanted to create a canvas of multi- 
coloroed dots placed randomly
with quickly adjustable parameters such as
-amount of dots
-random colors
-size and stroke weight
-canvas size

*/
//canvas width and height constants
const CONST_WIDTH = 600;
const CONST_HEIGHT = 400;
//some colors constants
const COLOR1 = 255
const COLOR2 = 255
const COLOR3 = 255

//background color constants
const BG_COLOR = 0;

//stroke color and width constant
const STROKE_COLOR = (COLOR1, COLOR2, COLOR3);

const STROKE_WEIGHT = 10;

//x and y coordinates for the ellipse
const ELLIPSE_X = 0
const ELLIPSE_Y = 0

//circle size dimensions Width (W) height (H)
const ELLIPSE_SIZE_H = 20
const ELLIPSE_SIZE_W = 20

//how many circles to draw per screen 
//changing this variable will give the appearence
//of the animation speeding up
const CIRCLES_TO_DRAW = 1


function setup() {
  //draws canvas size according to constants above
  createCanvas(CONST_WIDTH, CONST_HEIGHT);
  //draws background color according to constants above
  background(BG_COLOR);

  /*
 if the drawRandomCircle function goes @the end of setup
 then the loop would draw a static screen 
 of dots equal to the number of 
 CIRCLES_TO_DRAW
*/

  drawRandomCircle();
  
}

function draw() {
  /*   
  I've placed the drawRandomCircle function in the 
  draw function to create an ever populating 
  screen of random dots 
  */
  drawRandomCircle();

}

//made a function for the loop so I could quickly move 
//the blocks of code to test different ideas such as animating 
//the dots or only drawing a static screen of dots
function drawRandomCircle() {

  //loop that draws circles by comparing i and CIRCLES_TO_DRAW
  for (i = 0; i < CIRCLES_TO_DRAW; i++) {

    //calculates the x and y coordinates for
    //each circle drawn using constants 
    var circleX = ELLIPSE_X + random(width);
    var circleY = ELLIPSE_Y + random(height);

    //random color variables for ellipse and stroke color
    var randomColor1 = random(COLOR1);
    var randomColor2 = random(COLOR2);
    var randomColor3 = random(COLOR3);

    //stroke color and weight for circle based on constants
    stroke(randomColor2, randomColor3, randomColor1);
    strokeWeight(STROKE_WEIGHT);

    //fills circle with random color based on constants
    //changed the order from the stroke so there would be
    //different colors for each ellipse and stroke
    fill(randomColor1, randomColor2, randomColor3);

    //circle placement and size
    ellipse(circleX, circleY, ELLIPSE_SIZE_H, ELLIPSE_SIZE_W);
  }
}