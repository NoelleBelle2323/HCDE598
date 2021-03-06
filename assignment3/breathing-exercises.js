// Initialize variables for text strings
var titlePg1 = "Breathe";
var instrPg1 = "Press any key to check in.";

var titlePg2 = "How are you feeling?";
var instrPg2 = "a) Great      b) Stressed";
var titlePg3 = "Want to improve your focus?";
var instrPg3 = "Click to start deep breathing exercise";
var titlePg4 = "You Have the Power. ";
var instrPg4 = "Click to start deep breathing exercise";
var titlePg5 = "1-minute breathing exercise";
var titlePg6 = "Breathe to Calm the Brain";
var myColor = 0;
var myRadius = 100;
var minSize = 100;
var maxSize = 250;
var speed = 1;
// Initialize variables for colors
//var bgClr = "blue";

// Initialize variable for font style
var font = 'chalkboard';

// Initialize variable for page number
var pageNum = 1;

function setup() {
  createCanvas(500, 500);
  // Initialize variables for page title location

  titleX = width / 2;
  titleY = height / 2;
}

function draw() {


  // "Erase" screen after each frame
  background(135, 206, 235);

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
 * function for allowing the user to choose between the options
 */
function keyTyped() {
  if (pageNum == 2) { // checks to see if user is on page 2
    if (key === 'a') { // if user hits the 'y' key go to 'great' options page
      pageNum = 3;
    } else if (key === 'b') { // if user hits the 'b' key go to other options page
      pageNum = 4;
    }
    return false;
  }
}

function mousePressed() {
  if (pageNum == 3) { // case where you want a second vegetarian selection
    pageNum = 5;
  } else if (pageNum == 4) { // case where you want a second non-vegetarian selection
    pageNum = 6;
  }
}
//set up background to gradient
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") { // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == "X") { // Left to right gradient
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y + h);
    }
  }
}

function drawPage(pageNum) {
  if (pageNum == 1) {
    // Display background
    var color1 = color(0, 191, 255);
    var color2 = color(250, 235, 215);
    setGradient(0, 0, 500, 500, color1, color2, "Y");
    //Display title
    fill('black');
    textFont(font);
    textSize(62);
    textAlign(CENTER);
    text(titlePg1, titleX, titleY);

    // Display instructions text
    textSize(24);
    text(instrPg1, titleX, titleY + 50);

  } else if (pageNum == 2) {

    colorMode(RGB, 255, 255, 255, 1);
    background(255, 127, 80);
    // Display title

    textSize(24);
    text(titlePg2, titleX, titleY);
    fill(255, 255, 224);
    noStroke();
    ellipse(250, 150, 95, 95);
    noFill();
    stroke('black');
    strokeWeight(3);
    curve(200, 100, 215, 140, 235, 140, 255, 100);
    curve(240, 100, 265, 140, 285, 140, 295, 100);
    curve(220, 150, 240, 190, 260, 190, 290, 150);

    // Display instructions text
    fill('white');
    textSize(32);
    text(instrPg2, titleX, titleY + 50);

  } else if (pageNum == 3) {
    // Display title
    textSize(38);
    text(titlePg3, titleX, titleY);

    // Display instructions text
    textSize(24);
    text(instrPg3, titleX, titleY + 80);

  } else if (pageNum == 4) {
    // Display title
    textSize(48);
    text(titlePg4, titleX, titleY);

    // Display instructions text

    textSize(24);
    text(instrPg4, titleX, titleY + 90);

  } else if (pageNum == 5) {

    // Display title
    fill('black');
    textSize(32);
    text(titlePg5, titleX, titleY - 200);
    frameRate(3);
    fill(myColor);
    noStroke();
    ellipse(256, 246, myRadius);
    myColor = myColor + 20
    if (myColor > 255) { //reset the color to 0 when it gets to 255
      myColor = 0;
    }

    if (myRadius > 250) {
      myRadius = 100
    };
    myRadius = myRadius + 10;

    /* if(myRadius < minSize || myRadius > maxSize) {
    speed *= -10;
    }
    myRadius += speed;
    */
  } else if (pageNum == 6) {
    // Display title
    textSize(32);
    text(titlePg6, titleX, titleY - 200);
    noStroke();
    frameRate(3);
    ellipse(256, 246, myRadius);
    myColor = myColor + 20
    if (myColor > 255) { //reset the color to 0 when it gets to 255
      myColor = 0;
    }

    if (myRadius > 250) {
      myRadius = 100
    };
    myRadius = myRadius + 10;
  }
}