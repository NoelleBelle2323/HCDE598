//****************************
// Revenge of the Bears
//****************************
// This simple game lets you move a bear around the 
// canvas to try to capture hikers.
// File name: revengebears.js
// Author: Stephanie Blucker 
// Email: stephk99@uw.edu
// Date: 12/9/18
// Class: HCDE 598 

// constants set the size of the canvas
const CANVAS_WIDTH = 775;
const CANVAS_HEIGHT = 745;

// constants set x and y origins for the triangles in the treetop
const TREE_ORIGINX1 = 25;
const TREE_ORIGINY1 = 75;
const TREE_ORIGINX2 = 53;
const TREE_ORIGINY2 = 20;
const TREE_ORIGINX3 = 80;
const TREE_ORIGINY3 = 75;

// constants set x and y origins for the tree trunk
const TREE_TRUNKX = 48;
const TREE_TRUNKY = 95;

// constants used for all the colors in the forest background
const BG_COLOR = '#C6CFD8';
const TREE_COLOR1 = '#839a6c';
const TREE_COLOR2 = '#a9b999';
const TRUNK_COLOR = '#97908a';

// constants set how many trees to draw per line and how far apart 
// they should be on the x and y axes
const TREE_NUMBER = 10;
const TREE_GAPX = 75;
const TREE_GAPY = 200;

// variables to set the x and y starting point of the bear
var bearX = 50;
var bearY = 185;

// variables set hiker x and y starting coordinates in arrays
var hikerXs = [25, 25, 725, 725];
var hikerYs = [360, 560, 560, 360];

// variables set the speeds of the hikers in arrays
var hikerXSpeed = [1, -1, -1, 1];
var hikerYSpeed = [1, -1, 1, -1];

// variable arrays for the colors used for the hikers
var backpackColor = ['darkred', 'darkgreen', 'darkblue', 'purple'];
var shirtColor = ['green', 'lightblue', 'gray', 'pink'];
var skinColor = ['#784212', 'lightsalmon', '#f1c27d', '#784212'];
var hairColor = ['black', 'gold', '#75250a', 'black'];

// constants for the hikers' size and pant color
const HIKER_WIDTH = 15;
const HIKER_HEIGHT = 50;
const PANT_COLOR = 'black';

// constants control the position of the features on the bear's face
// and the colors of the bear, plus make the bear scalable.
// these could be variables as well if I wanted to scale the bear,
// but in this program, they'll remain constant.
const bearFace = 70;
const bearChin = bearFace / 4 * 3;
const bearColor = '#784212';
const bearMouth = '#AF601A';
const bearEyes = 'black';
const bearEar = bearFace / 3.3;
const quarterBear = bearFace / 4;
const tenBear = bearFace / 10;
const halfBear = bearFace / 50;
const sixBear = bearFace / 6.667;
const eightBear = bearFace / 8.33;
const sixteenBear = bearFace / 16.667;
const fiveBear = bearFace / 5.88;
const sevenBear = bearFace / 7.14;

// variables to control game start and end conditions
var startGame;
var winGame;

// setup creates the canvas and draws the start screen
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  startScreen();
}

// draw creates the trees and characters and initiates 
// game play when startGame is set to true
function draw() {

  if (startGame == true) {
    background(BG_COLOR);
    drawForest();
    drawTrails();
    drawBlood();
    drawHikers();
    drawBear(bearX, bearY);
    moveHikers();
    moveBear();
    hikerCollide();
    allHikers();
    gameWon();
  }
}


// Additional functions
//****************************

// draw the start screen
function startScreen() {
  // variables set up the paragraphs of instruction text
  var gameTitle = "Revenge of the Bears"
  var introText = "These hikers just won't stop running through your woods. What's a bear to do? Try to catch all four! Use the keys below to move the bear. For an extra challenge, try to stay on the trail.";
  var pressP = "Press P when you're ready to to play."
  var controlKeys = "A = Left  D = Right  W = Up  S = Down"

  // set background color and add the bear icon
  background(BG_COLOR);
  drawBear(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 6);

  // title font and style
  textSize(78);
  fill('black');
  textAlign(CENTER);
  textFont('Chiller');
  text(gameTitle, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 3);

  // instruction font and styles
  textSize(26);
  textFont('Garamond');
  text(introText, CANVAS_WIDTH / 5.25, CANVAS_HEIGHT / 2.75, 500, 500); // Text wraps within text box
  textStyle(BOLD);
  text(controlKeys, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 1.65);
  text(pressP, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 1.5); // Text wraps within text box
}

// draw the game end screen
function endScreen() {
  // variables set winner text
  var winText = "You win.";
  var playAgain = "Press P to play again.";

  // set background color and add the bear icon
  background(BG_COLOR);
  drawBear(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 6);

  // title font and style
  // all of the text on this screen is bold - that's intentional
  textSize(78);
  fill('black');
  textAlign(CENTER);
  textFont('Chiller');
  text('Rawr!', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 3);

  // instruction font and style 
  textSize(26);
  textFont('Garamond');
  text(winText, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2.45);
  text(playAgain, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2.1);
}

// tell the program to draw the endScreen when winGame is true
function gameWon() {
  if (winGame == true) {
    endScreen();
  }
}

// calls the function to reset the game anytime p is pressed
// and sets startGame to true
function keyPressed() {
  if (key === 'p') {
    resetGame();
    startGame = true;
  }
}

// function to reset all characters 
// to their starting points
function resetGame() {
  // reset the x and y starting point of the bear
  bearX = 50;
  bearY = 185;

  // reset the hiker x and y starting coordinates
  hikerXs = [25, 25, 725, 725];
  hikerYs = [360, 560, 560, 360];

  // reset hiker speeds
  hikerXSpeed = [1, -1, -1, 1];
  hikerYSpeed = [1, -1, 1, -1];
}

// original function for detecting if all hikers are stationary
// also works but is more cumbersome and repetitive
// wound up not using it - but left it here for reference 
/*function allHikers() {
  for (i = 0; i <= 3; i++) {

    if (hikerXSpeed[0] == 0 && hikerYSpeed[0] == 0 &&
      hikerXSpeed[1] == 0 && hikerYSpeed[1] == 0 &&
      hikerXSpeed[2] == 0 && hikerYSpeed[2] == 0 &&
      hikerXSpeed[3] == 0 && hikerYSpeed[3] == 0)
      winGame = true;
  }
}*/

// revised function with local variable tests if
// the x speeds of any hikers equal 1 or -1
// if any do, allPaused is false
// when allPaused is true, winGame is also set to true
function allHikers() {
  var allPaused = true;

  for (i = 0; i <= 3; i++) {

    if (hikerXSpeed[i] == 1 || hikerXSpeed[i] == -1) {
      allPaused = false;
      winGame = false;
    }
  }
  if (allPaused == true) {
    winGame = true;
  }
}

// test if any of the hikers' x and y coordinates
// touch the bear, and if they do, stops the hiker from moving. 
// catching the hikers by their backpacks won't work! this is intentional.
// going forward, it would be fun to add a message like "almost! try again,"
// but I chose not to do that here because I liked the simplicity
function hikerCollide() {
  for (i = 0; i <= 3; i++) {

    var hikerX = hikerXs[i];
    var hikerY = hikerYs[i];

    if (hikerX + HIKER_WIDTH >= bearX - bearFace / 2 && hikerX <= bearX + bearFace / 2 &&
      hikerY + HIKER_HEIGHT >= bearY - bearChin / 2 && hikerY <= bearY + bearChin / 2) {
      hikerXSpeed[i] = 0;
      hikerYSpeed[i] = 0;
    }
  }
}

// function draws a red splotch beneath the 
// hiker's head when a hiker stops moving
function drawBlood() {
  for (i = 0; i <= 3; i++) {

    var hikerX = hikerXs[i];
    var hikerY = hikerYs[i];

    if (hikerXSpeed[i] == 0 && hikerYSpeed[i] == 0) {


      fill('#b20000');
      ellipse(hikerX + 7, hikerY, HIKER_HEIGHT / 2);
    }
  }
}

// function to draw the forest background
function drawForest() {
  // draw seven trees in a line
  for (i = 0; i < TREE_NUMBER; i++) {
    for (j = 0; j < TREE_NUMBER; j++) {

      // calculate the x and y coordinates where the trees originate
      var xTreeCorner1 = TREE_ORIGINX1 + i * TREE_GAPX
      var yTreeCorner1 = TREE_ORIGINY1 + j * TREE_GAPY
      var xTreeCorner2 = TREE_ORIGINX2 + i * TREE_GAPX
      var yTreeCorner2 = TREE_ORIGINY2 + j * TREE_GAPY
      var xTreeCorner3 = TREE_ORIGINX3 + i * TREE_GAPX
      var yTreeCorner3 = TREE_ORIGINY3 + j * TREE_GAPY

      var xTrunkCorner = TREE_TRUNKX + i * TREE_GAPX
      var yTrunkCorner = TREE_TRUNKY + j * TREE_GAPY

      // draw one line
      drawTree();
    }
  }

  // function that draws the tree
  function drawTree() {
    noStroke();
    fill(TRUNK_COLOR);
    rect(xTrunkCorner, yTrunkCorner, 10, 50);

    // fill alternating columns with different colors of green
    if (i % 2 == 0) {
      fill(TREE_COLOR1);
    }
    if (i % 2 == 1) {
      fill(TREE_COLOR2);
    }

    // triangles that make up the treetops
    triangle(xTreeCorner1, yTreeCorner1, xTreeCorner2, yTreeCorner2, xTreeCorner3, yTreeCorner3);
    triangle(xTreeCorner1 - 5, yTreeCorner1 + 20, xTreeCorner2, yTreeCorner2 + 20, xTreeCorner3 + 5, yTreeCorner3 + 20);
    triangle(xTreeCorner1 - 10, yTreeCorner1 + 40, xTreeCorner2, yTreeCorner2 + 40, xTreeCorner3 + 10, yTreeCorner3 + 40);
  }
}

// function to draw the trails
function drawTrails() {
  fill(TRUNK_COLOR);
  rect(0, 145, CANVAS_WIDTH, 75, 20);
  rect(0, 345, CANVAS_WIDTH, 75, 20);
  rect(0, 545, CANVAS_WIDTH, 75, 20);
  rect(540, 150, 75, 450, 20);
  rect(165, 350, 75, 450, 20);
}

// function that draws the bear
function drawBear(x, y) {
  noStroke();
  fill(bearColor);
  ellipse(x, y, bearFace, bearChin); //face
  ellipse(x - bearEar, y - bearEar, quarterBear); //L ear
  ellipse(x + bearEar, y - bearEar, quarterBear); //R ear
  fill(bearMouth);
  ellipse(x - tenBear, y + tenBear, quarterBear); //L mouth
  ellipse(x + tenBear, y + tenBear, quarterBear); //R mouth
  fill(bearEyes);
  ellipse(x, y, sixBear, tenBear); //nose
  ellipse(x - sixBear, y - sixBear, tenBear); //L eye
  ellipse(x + sixBear, y - sixBear, tenBear); //R eye
  fill(bearColor);
  ellipse(x - eightBear, y + sixteenBear, halfBear); //top L freckle
  ellipse(x - fiveBear, y + eightBear, halfBear); //lower L freckle
  ellipse(x - tenBear, y + sevenBear, halfBear); //lower L inner freckle
  ellipse(x + eightBear, y + sixteenBear, halfBear); //top R freckle
  ellipse(x + fiveBear, y + eightBear, halfBear); //lower R freckle
  ellipse(x + tenBear, y + sevenBear, halfBear); //lower R inner freckle
}

// function that sets up which keys the user presses to move the bear
function moveBear() {
  if (key == 'w') {
    bearY--;
  } else if (key == 'a') {
    bearX--;
  } else if (key == 's') {
    bearY++;
  } else if (key == 'd') {
    bearX++;
  }
}

// function to draw each hiker
function drawHiker(x, y) {
  fill(backpackColor[i]); // backpack
  rect(x - 10, y + 10, HIKER_WIDTH, HIKER_HEIGHT / 2);
  fill(skinColor[i]); // skin
  rect(x, y, HIKER_WIDTH, HIKER_HEIGHT);
  fill(shirtColor[i]); // shirt
  rect(x, y + 12, HIKER_WIDTH, HIKER_HEIGHT - 15);
  fill(PANT_COLOR); // pants
  rect(x, y + 25, HIKER_WIDTH, HIKER_HEIGHT / 2);
  fill(hairColor[i]); // hair
  rect(x, y - 5, HIKER_WIDTH, HIKER_HEIGHT / 10);

  // adds long hair for every other hiker
  if (i % 2 == 1) {
    rect(x, y - 5, 5, 25);
  }
}

// function that draws four hikers at the x and y coordinates in the array
function drawHikers() {
  for (i = 0; i <= 3; i++) {

    var hikerX = hikerXs[i];
    var hikerY = hikerYs[i];

    // call the function that draws a hiker
    drawHiker(hikerX, hikerY);
  }
}

// function that makes the hikers run around the woods
function moveHikers() {

  for (i = 0; i <= 3; i++) {
    // get hiker x and y coordinates
    var hikerX = hikerXs[i];
    var hikerY = hikerYs[i];

    // change x direction when a hiker gets to x max
    if (hikerX > CANVAS_WIDTH - 15) {
      hikerXSpeed[i] *= (-[1]);
    }

    // change y direction when a hiker gets to y max
    if (hikerY > CANVAS_HEIGHT - 50) {
      hikerYSpeed[i] *= (-[1]);
    }

    // change x direction when a hiker gets to x = 0
    if (hikerX < 10) {
      hikerXSpeed[i] *= (-[1]);
    }

    // change y direction when a hiker gets to y = 0
    if (hikerY < 5) {
      hikerYSpeed[i] *= (-[1]);
    }

    // update the x and y coordinates
    hikerXs[i] = hikerX + hikerXSpeed[i];
    hikerYs[i] = hikerY + hikerYSpeed[i];
  }
}