// Variables for text strings
var titlePg1 = "Do you like Taylor Swift?";
var instrPg1 = "Press any key to begin.";
var titlePg2 = "Pick one";
var instrPg2 = "y / n";
var titlePg3 = "You belong with me!";
var instrPg3 = "Click anywhere if you don't like Taylor Swift";
var titlePg4 = "Haters gonna hate, hate, hate...";
var instrPg4 = "Click anywhere if you really don't like Taylor Swift";
var titlePg5 = "I'm just gonna shake it off."

// variables for colors
var bgClr = 'white';

// variable for font style
var font = 'futura';

// variable for page number
var pageNum = 1;

function setup() {
  createCanvas(650, 500);

  // variables for page title location
  titleX = width / 2;
  titleY = height / 2;
}

function draw() {
  // "Erase" screen after each frame
  background(bgClr);

  // Draw page
  drawPage(pageNum);
}

/* 
 * function to check if any key has been pressed by the user
 * if the key is pressed, increment the page count
 */
function keyPressed() {
  if (pageNum <= 1) {
    pageNum++;
    return false;
  }
}

/*
 * function for allowing the user to choose between choices
 */
function keyTyped() {
  if (pageNum == 2) { // checks to see if user is on page 2
    if (key === 'y') { // if user hits the 'y' key go to P3
      pageNum = 3;
    } else if (key === 'n') { // if user hits the 'n' key go to P4
      pageNum = 4;
    }
    return false;
  }
}


/*
 * this function primarily checks to see if the mouse is pressed 
 * responses are displayed as a result of "n" being clicked
 */
function mousePressed() {
  if (pageNum == 3) { // case where you click "don't like TS"
    pageNum = 4;
  } else if (pageNum == 4) { // case where you click again "really don't like TS"
    pageNum = 5;
  }
}

function drawPage(pageNum) {
  if (pageNum == 1) {
    // Display title
    textFont(font);
    textSize(32);
    textAlign(CENTER);
    text(titlePg1, titleX, titleY);

    // Display instructions text
    text(titlePg1, titleX, titleY);
    textSize(18);
    text(instrPg1, titleX, titleY + 50);

  } else if (pageNum == 2) {
    // Display title
    textSize(32);
    textAlign(CENTER);
    text(titlePg1, titleX, titleY - 50);
    textSize(18);
    text(titlePg2, titleX, titleY);

    // Display instructions text
    textSize(32);
    text(instrPg2, titleX, titleY + 50);

  } else if (pageNum == 3) {
    // Display title
    textSize(32);
    text(titlePg3, titleX, titleY);

    // Display instructions text
    textSize(18);
    text(instrPg3, titleX, titleY + 50);

  } else if (pageNum == 4) {
    // Display title
    textSize(32);
    text(titlePg4, titleX, titleY);

    // Display instructions text
    textSize(18);
    text(instrPg4, titleX, titleY + 50);

  } else if (pageNum == 5) {

    // Display title
    textSize(32);
    text(titlePg5, titleX, titleY);
  }
}