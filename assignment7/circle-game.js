const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 500;
const BACKGROUND_COLOR = 220;

let timer = 10;

// set constant for circle and square size
var shapeSize = 100;

//variables for circle and red circles x and y coordinates

var circleXs = [];
var circleYs = [];
var redCircleXs = [];
var redCircleYs = [];

var circleXSpeeds = [];
var circleYSpeeds = [];

var redCircleXSpeeds = [];
var redCircleYSpeeds = [];


var circleSize = [];
var redCircleSize = [];

// variables circle color
var circleColor = [];
const redCircleColor = "red";

//variable for scores
var score = 0;
// Initialize variable for page number
var pageNum = 1;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  score = 0;
  // Initialize variables for page title location
  titleX = width / 2;
  titleY = height / 2;
  // initialize circles x and y coords
  for (var i = 0; i < 10; i++) {
    // randomly assign x and y coordinates betweeen 100 and 500
    circleXs[i] = round(random(100, 500));
    circleYs[i] = round(random(100, 500));
    redCircleXs[i] = round(random(100, 500));
    redCircleYs[i] = round(random(100, 500));

    circleXSpeeds[i] = round(random(1, 3));
    circleYSpeeds[i] = round(random(1, 3));

    redCircleXSpeeds[i] = round(random(1, 3));
    redCircleYSpeeds[i] = round(random(1, 3));

    //initialize colors for circles and size
    circleSize[i] = shapeSize;
    redCircleSize[i] = shapeSize;
    circleColor[i] = randomColor();

  }

}

function draw() {
  background(BACKGROUND_COLOR);

  drawPage(pageNum);
  if (score == 10) {
    background(BACKGROUND_COLOR);
    // Display message

    textSize(38);
    textFont('chalkboard');
    stroke(100);
    fill(255, 215, 20);
    text("Your Score is " + score, titleX, titleY + 50);
    text("You win!", titleX, titleY);
  } else if (timer == 0) {
    background(BACKGROUND_COLOR);
    // Display message
    fill("Black");
    textSize(38);
    textFont('chalkboard');
    text("Your Score is " + score, titleX, titleY + 50);
    text("Game Over!", titleX, titleY);
  }


}


/*
    This function will loop through our shapes array
    and draw the all the circles at the designated
    x,y position on the canvas.
 */
function drawShapes() {
  for (var i = 0; i < 5; i++) {
    drawCircle(circleXs[i], circleYs[i], circleSize[i], circleColor[i]);
  }
}

function drawShapes2() {
  for (var i = 0; i < 10; i++) {
    drawRedCircle(redCircleXs[i], redCircleYs[i], redCircleSize[i], redCircleColor);
  }
}
/*
    This function will loop through our shapes array
    and move the cirlces accordingly.
 */
function moveCircles() {
  // loop through shapes and shapesSpeeds
  for (i = 0; i < 5; i++) {

    // get shape x and y coordinates
    var shapeX = circleXs[i];
    var shapeY = circleYs[i];


    // check if shape is outside canvas
    if (shapeX < 0 || shapeX > CANVAS_WIDTH - circleSize[i]) {
      // change X direction
      circleXSpeeds[i] *= -1;
    } else if (shapeY < 0 || shapeY > CANVAS_HEIGHT - circleSize[i]) {
      // change Y direction
      circleYSpeeds[i] *= -1;
    } else if (shapeX < 0 || shapeY < 0 || shapeX > CANVAS_WIDTH || shapeY > CANVAS_HEIGHT) {
      // if anything goes wrong just reset coords
      shapeX = CANVAS_WIDTH / 2;
      shapeY = CANVAS_HEIGHT / 2;
    }

    // move shape
    shapeX += circleXSpeeds[i];
    shapeY += circleYSpeeds[i];

    // update arrays
    circleXs[i] = shapeX;
    circleYs[i] = shapeY;

  }
}

function moveRedCircles() {
  // loop through shapes and shapesSpeeds
  for (i = 0; i < 10; i++) {

    // get shape x and y coordinates
    var redShapeX = redCircleXs[i];
    var redShapeY = redCircleYs[i];


    // check if shape is outside canvas
    if (redShapeX < 0 || redShapeX > CANVAS_WIDTH - redCircleSize[i]) {
      // change X direction
      redCircleXSpeeds[i] *= -1;
    } else if (redShapeY < 0 || redShapeY > CANVAS_HEIGHT - redCircleSize[i]) {
      // change Y direction
      redCircleYSpeeds[i] *= -1;
    } else if (redShapeX < 0 || redShapeY < 0 || redShapeX > CANVAS_WIDTH || redShapeY > CANVAS_HEIGHT) {
      // if anything goes wrong just reset coords
      redShapeX = CANVAS_WIDTH / 2;
      redShapeY = CANVAS_HEIGHT / 2;
    }

    // move shape
    redShapeX += redCircleXSpeeds[i];
    redShapeY += redCircleYSpeeds[i];

    // update arrays
    redCircleXs[i] = redShapeX;
    redCircleYs[i] = redShapeY;

  }
}
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

function drawRedCircle(sX, sY, sSize, sColor) {
  noStroke();
  fill(sColor);
  ellipse(sX, sY, sSize, sSize);
}
// This function returns true if the mouse is hovering over
// the button with the given coordinates, and returns false otherwise.

function isWithin(buttonX, buttonY, shapeSize) {
  if (mouseX >= buttonX && mouseX <= buttonX + shapeSize &&
    mouseY >= buttonY && mouseY <= buttonY + shapeSize) {
    return true;
  } else {
    return false;
  }
}


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
	Function for when the mouse is clicked the circles disappear and add score
*/
function mouseClicked() {
  for (i = 0; i < 10; i = i + 1) {
    if (isWithin(redCircleXs[i], redCircleYs[i], redCircleSize[i])) {
      shapeSize = 0;
      redCircleSize[i] = 0;
      score = score + 1;
    }
  }
}


/*
		funtion that returns a random color.
 */
function randomColor() {
  var r = random(0, 255);
  var b = random(100, 255);
  var g = random(0, 255);


  return color(r, b, g);
}
/*
 * function for if the key is pressed, increment the page count
 */
function keyPressed() {
  if (pageNum <= 1) {
    pageNum++;
    return false;
  }
}

function drawPage(pageNum) {
  if (pageNum == 1) {
    //Display background
    background(color(100, 149, 237, 190));

    //display circles
    fill(255, 127, 80, 200);
    noStroke();
    ellipse(30, 50, 120);
    fill(100, 227, 80, 200);
    noStroke();
    ellipse(130, 150, 100);
    fill(200, 127, 280, 500);
    noStroke();
    ellipse(230, 350, 120);
    fill(100, 200, 780, 300);
    noStroke();
    ellipse(430, 50, 100);
    fill(190, 10, 10, 500);
    noStroke();
    ellipse(530, 250, 140);

    //Display title
    textFont('chalkboard');
    fill(0, 0, 139);
    textStyle(BOLD);
    stroke(100);
    textSize(100);
    textAlign(CENTER);
    text("Color Game", titleX, titleY - 100);
    textSize(25);
    fill("red")
    noStroke();
    text("How to play: click on the red circles", titleX, titleY + 30);
    fill('black');
    textSize(30);
    textAlign(CENTER);
    text("Press any key to start", titleX, titleY + 90);

  } else if (pageNum == 2) {

    // Display background
    background(BACKGROUND_COLOR);

    // draw and move circles
    drawShapes2();
    drawShapes();
    moveCircles();
    moveRedCircles();

    // display score
    fill(199, 21, 133);
    noStroke();
    textSize(24);
    text("Score: " + score, 60, 50);
    // Display game instruction
    textSize(20);
    textAlign(CENTER);

    fill("Black")
    text("Time left: " + timer, titleX + 180, titleY - 190);
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }

  }
}