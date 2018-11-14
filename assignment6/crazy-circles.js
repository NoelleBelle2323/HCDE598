//This program creates 10 circles that bounce around the canvas.
//constants to set up the canvas
const CanvasWidth = 400;
const CanvasHeight = 400;

//arrays that will hold the circles' x and y coordinates
var CurrentX = []
var CurrentY = []
//arrays that will hold the circles' speeds along the x and y axes
var SpeedX = []
var SpeedY = []
//variables that hold the maximun speed of the circles and size
var SpeedX_Max = 4
var SpeedY_Max = 5
var CircleSize = 20
var CircleX
var CircleY
var SpeedIncreaseX
var SpeedIncreaseY


//set up the inital coordinates of the circles and speeds
//each ball will start from a random x, y coordinates and speed. 
function setup() {
  createCanvas(CanvasWidth, CanvasHeight);
  CurrentX = [random(0, CanvasWidth), random(0, CanvasWidth), random(0, CanvasWidth), random(0, CanvasWidth), random(0, CanvasWidth), random(0, CanvasWidth), random(0, CanvasWidth), random(0, CanvasWidth), random(0, CanvasWidth), random(0, CanvasWidth)];
  CurrentY = [random(0, CanvasHeight), random(0, CanvasHeight), random(0, CanvasHeight), random(0, CanvasHeight), random(0, CanvasHeight), random(0, CanvasHeight), random(0, CanvasHeight), random(0, CanvasHeight), random(0, CanvasHeight), random(0, CanvasHeight)];
  SpeedX = [random(0, SpeedX_Max), random(0, SpeedX_Max), random(0, SpeedX_Max), random(0, SpeedX_Max), random(0, SpeedX_Max), random(0, SpeedX_Max), random(0, SpeedX_Max), random(0, SpeedX_Max), random(0, SpeedX_Max), random(0, SpeedX_Max)];
  SpeedY = [random(0, SpeedY_Max), random(0, SpeedY_Max), random(0, SpeedY_Max), random(0, SpeedY_Max), random(0, SpeedY_Max), random(0, SpeedY_Max), random(0, SpeedY_Max), random(0, SpeedY_Max), random(0, SpeedY_Max), random(0, SpeedY_Max)];

}

//draw circles and move them on the screen
function draw() {
  background(220);
  drawCircle(CircleX, CircleY, CircleSize);
  moveCircles(CircleX, CircleY, SpeedIncreaseX, SpeedIncreaseY);
}

//This function uses a for loop to draw 10 circles on screen according to their x and y cooridnates
function drawCircle(CircleX, CircleY, s) {

  for (i = 0; i < 11; i++) {
    CircleX = CurrentX[i];
    CircleY = CurrentY[i];
    noStroke();
    fill("red");
    ellipse(CircleX, CircleY, s, s);
  }
}

//This function "moves" the circles by changing their x and y coordinates by adding the speed; 
function moveCircles(CircleX, CircleY, SpeedIncreaseX, SpeedIncreaseY) {
  for (i = 0; i < 11; i++) {

    //Get the x and y coordinates, and the speeds from the arrays.
    CircleX = CurrentX[i];
    CircleY = CurrentY[i];
    SpeedIncreaseX = SpeedX[i];
    SpeedIncreaseY = SpeedY[i];
    //Change the x and y coornidates by adding speed to them. 
    CircleX = CircleX + SpeedIncreaseX;
    CircleY = CircleY + SpeedIncreaseY;
    //Check to see if the ball is still within the width of the canvas.
    //if not, change the direction of the ball by changing speed to -speed.
    if (CircleX >= CanvasWidth - CircleSize / 2 || CircleX <= 0 + CircleSize / 2) {
      SpeedIncreaseX = -SpeedIncreaseX;
      SpeedX[i] = SpeedIncreaseX;
      CircleX = CircleX + SpeedIncreaseX;
    }
    //Check to see if the ball is still within the height of the canvas.
    //if not, change the direction of the ball by changing speed to -speed.
    if (CircleY >= CanvasWidth - CircleSize / 2 || CircleY <= 0 + CircleSize / 2) {
      SpeedIncreaseY = -SpeedIncreaseY;
      SpeedY[i] = SpeedIncreaseY;
      CircleY = CircleY + SpeedIncreaseY;
    }

    //Update the array with the new x and y coordinates.
    CurrentX[i] = CircleX;
    CurrentY[i] = CircleY;
  }

}