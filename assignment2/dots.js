function setup() {
  createCanvas(400, 400);
  

  background(220);
}

//dot one: start top left
var dotOneColor = 'blue';
var dotOneOriginX = 30; //the x value for the character's position, initialized at 30
var dotOneOriginY = 30; //the y value for the character's position, initialized at 30
var dotOneTouchedCenter = false; //a marker variable to be reassigned when the dot touches the center and needs to change behavior

//dot two: start top right
var dotTwoColor = 'red';
var dotTwoOriginX = 400-30;
var dotTwoOriginY = 30;
var dotTwoTouchedCenter = false;

//dot three: start bottom right
var dotThreeColor = 'yellow';
var dotThreeOriginX = 400-30;
var dotThreeOriginY = 400-30;
var dotThreeTouchedCenter = false;

//dot four: start bottom left
var dotFourColor = 'green';
var dotFourOriginX = 30;
var dotFourOriginY = 400-30;
var dotFourTouchedCenter = false;

function draw() {
  background(220);
  
  strokeWeight(30);
  
  //dotOne: blue
  drawDot(dotOneColor,dotOneOriginX, dotOneOriginY);
  if ((dotOneOriginX < width/2) && (dotOneOriginY < height/2)) {
  	dotOneOriginX++;
    dotOneOriginY++;
  }
  else if (dotOneTouchedCenter == true) {
    if (dotOneOriginX > width/5) {
      dotOneOriginX = dotOneOriginX - 2; //half pixels don't exist, but it should accomplish approximately the intended effect of making this dot move a bit faster than the red one
    }
  }
  else {
    dotOneTouchedCenter = true;
  }
  
  //dotTwo: red
  drawDot(dotTwoColor,dotTwoOriginX, dotTwoOriginY);
  if ((dotTwoOriginX > width/2) && (dotTwoOriginY < height/2)) {
  	dotTwoOriginX--;
    dotTwoOriginY++;
  }
  else if (dotTwoTouchedCenter == true) {
    if (dotTwoOriginX > (2*width)/5) {
      dotTwoOriginX--;
    }
  }
  else {
    dotTwoTouchedCenter = true;
  }
  
  //dotThree: yellow
  drawDot(dotThreeColor,dotThreeOriginX, dotThreeOriginY);
  if ((dotThreeOriginX > width/2) && (dotThreeOriginY > height/2)) {
  	dotThreeOriginX--;
    dotThreeOriginY--;
  }
  else if (dotThreeTouchedCenter == true) {
    if (dotThreeOriginX < (3*width)/5) {
      dotThreeOriginX++;
    }
  }
  else {
    dotThreeTouchedCenter = true;
  }
  
  //dotFour: green
  drawDot(dotFourColor,dotFourOriginX, dotFourOriginY);
  if ((dotFourOriginX < width/2) && (dotFourOriginY > height/2)) {
  	dotFourOriginX++;
    dotFourOriginY--;
  }
  else if (dotFourTouchedCenter == true) {
    if (dotFourOriginX < (4*width)/5) {
      dotFourOriginX = dotFourOriginX + 2;
    }
  }
  else {
    dotFourTouchedCenter = true;
  }
}

/*
Note to self: In another iteration, make a repeating pattern after dots line up:
-dots return to center
-dots return to corners
-dots rotate clockwise
-dots repeat the pattern in new configuration (i.e. It would take 4 iterations before the overall pattern repeats)
In order to make this work, I will need the movement patterns to be executed relative to the *corner position* of the dots, not the color/identity of the dots
So I will need to make a new variable (e.g. dotCorner or something), which will be reassigned as the dots move corners
*/

//simple function below draws a dot of a specified color at a specified position
function drawDot(dotColorParameter, originXParameter, originYParameter) {
  stroke(color(dotColorParameter));
  point(originXParameter, originYParameter);
}