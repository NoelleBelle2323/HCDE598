/*
Final Project
Connor O'Toole
otool047@uw.edu
HCDE 598
*/


/////////////
//VARIABLES//
/////////////

//Variable to keep track of the screen
var screen = 0;

//Canvas constants
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const BACKGROUND_COLOR = 0;
const MAX_SPEED = 5;
const BUFFER = 3;

//Arrays to keep track of projectiles
var projectiles1X = [];
var projectiles1Y = [];
var projectiles1Size = [];
var projectiles1XSpeed = [];
var projectiles1YSpeed = [];
var projectiles1Color = ['red', 'blue', 'yellow', 'purple', 'green'];

//Arrays to keep track of background stars
var starX = [];
var starY = [];

//Star background variables
const STAR_DISTANCE = 75;
const STAR_SIZE = 5;

//Game piece variables
const GAME_PIECE_X_RESET = 50;
const GAME_PIECE_Y_RESET = 225;
const GAME_PIECE_SIZE = 25;
const GAME_PIECE_SPEED = 3;

var gamePieceX;
var gamePieceY;

//Intro screen variables
var startButtonX = 175;
var startButtonY = 250;
var startButtonW = 150;
var startButtonH = 75;

//Score variables
var score;
var highScore = 0;
const SCORE_RESET = 0;



/////////
//SETUP//
/////////

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  //Initialize the projectiles for the intro screen.
  for (i = 0; i < 5; i++) {
    projectiles1Size[i] = int(random(30, 70));
    projectiles1X[i] = CANVAS_WIDTH - projectiles1Size[i];
    projectiles1Y[i] = int(random(100, 400));

    projectiles1XSpeed[i] = int(random(1, MAX_SPEED));
    projectiles1YSpeed[i] = int(random(1, MAX_SPEED));
  }

}


////////
//DRAW//
////////

function draw() {
  background(BACKGROUND_COLOR);

  if (screen == 0) {
    introScreen();
  } else if (screen == 1) {
    gameBoardReset();
  } else if (screen == 2) {
    gameScreen();
  } else if (screen == 3) {
    endScreen();
  }

}


/////////////
//FUNCTIONS//
/////////////

/*
This function handles everything for
the intro screen including the background,
title text, and start button.
*/

function introScreen() {
  createStarBackground();
  createProjectiles1();
  moveProjectiles1();

  //Title text
  textSize(64);
  fill('white');
  text('Super Slider', 75, 150);

  //Start button
  rect(startButtonX, startButtonY, startButtonW, startButtonH);

  textSize(46);
  fill('black');
  text('Start', startButtonX + 25, startButtonY + 50);

  //Clicking the start button
  if (mouseX >= startButtonX && mouseX <= startButtonX + startButtonW) {
    if (mouseY >= startButtonY && mouseY <= startButtonY + startButtonH) {
      if (mouseIsPressed) {
        screen = 1;
      }
    }
  }

}


/*
This function calls all the functions
associated with actually playing the game.
This includes creating the game piece, 
and the projectiles. It also shows the
score in the bottom-right corner.
*/

function gameScreen() {
  createStarBackground();
  createGamePiece();
  gameControls();

  createProjectiles1();
  moveProjectiles1();

  collisionDetection();

  //Increase the score the longer you're on this screen
  score++;

  //Show the score in the bottom-right corner
  textSize(20);
  fill('white');
  text('Score =', 350, 450);
  text(score, 425, 450);
}


/*
This function creates and places all the 
elements associated with the end screen.
This includes showing the end text and 
generating the Try Again button.
*/

function endScreen() {

  //Lose text
  textSize(64);
  fill('white');
  text('You Lose!', 115, 150);

  //Evaluate if score should become new high score
  if (score >= highScore) {
    highScore = score;
  }

  //Show the score and high score
  textSize(32);
  fill('white');

  text('Score =', 170, 375);
  text(score, 295, 375);

  text('High Score =', 95, 425);
  text(highScore, 290, 425);

  //Replay button
  rect(startButtonX, startButtonY, startButtonW, startButtonH);

  textSize(32);
  fill('black');
  text('Replay', startButtonX + 25, startButtonY + 50);

  //Clicking the replay button
  if (mouseX >= startButtonX && mouseX <= startButtonX + startButtonW) {
    if (mouseY >= startButtonY && mouseY <= startButtonY + startButtonH) {
      if (mouseIsPressed) {
        screen = 1;
      }
    }
  }

}


/*
This function creates the first set of 
projectiles.
*/

function createProjectiles1() {
  for (i = 0; i < 5; i++) {
    noStroke();
    fill(projectiles1Color[i]);
    ellipse(projectiles1X[i], projectiles1Y[i], projectiles1Size[i]);
  }

}


/*
This function moves the projectiles and
will reverse their direction whenever they
reach an edge on the screen.
*/

function moveProjectiles1() {
  for (i = 0; i < 5; i++) {

    // check if projectile is outside canvas
    if (projectiles1X[i] - (projectiles1Size[i] / 2) < BUFFER ||
      projectiles1X[i] + (projectiles1Size[i] / 2) > CANVAS_WIDTH - BUFFER) {

      // change X direction
      projectiles1XSpeed[i] = projectiles1XSpeed[i] * (-1);

    } else if (projectiles1Y[i] - (projectiles1Size[i] / 2) < BUFFER ||
      projectiles1Y[i] + (projectiles1Size[i] / 2) > CANVAS_HEIGHT - BUFFER) {

      // change Y direction
      projectiles1YSpeed[i] = projectiles1YSpeed[i] * (-1);

    }

    // move the projectiles
    projectiles1X[i] = projectiles1X[i] - projectiles1XSpeed[i];
    projectiles1Y[i] = projectiles1Y[i] - projectiles1YSpeed[i];
  }

}


/*
This function creates the game piece.
The game controls for the game piece are
also called within this function.
*/

function createGamePiece() {

  //draw the piece at the starting position
  fill('white');
  rect(gamePieceX, gamePieceY, GAME_PIECE_SIZE, GAME_PIECE_SIZE);

}


/*
This function allows you move the game
piece using the arrow keys.
*/

function gameControls() {

  if (keyIsDown(UP_ARROW) && gamePieceY >= 0) {
    gamePieceY -= GAME_PIECE_SPEED;
  } else if (keyIsDown(LEFT_ARROW) && gamePieceX >= 0) {
    gamePieceX -= GAME_PIECE_SPEED;
  } else if (keyIsDown(DOWN_ARROW) && gamePieceY + GAME_PIECE_SIZE <= height) {
    gamePieceY += GAME_PIECE_SPEED;
  } else if (keyIsDown(RIGHT_ARROW) && gamePieceX + GAME_PIECE_SIZE <= width) {
    gamePieceX += GAME_PIECE_SPEED;
  }

}


/*
This function creates the static star
background.
*/

function createStarBackground() {
  for (i = 0; i < CANVAS_WIDTH; i = i + STAR_DISTANCE) {
    for (j = 0; j <= CANVAS_HEIGHT; j = j + STAR_DISTANCE) {
      fill('silver');
      ellipse(i, j, STAR_SIZE);
    }
  }

}


/*
This functions evaluates all the corners
of the game piece to check if they're 
within the bounds of any of the projectiles.
If they are then it will move to the end screen.
*/

function collisionDetection() {
  for (i = 0; i < 5; i++) {

    //Evaluates left side of game piece
    if (gamePieceX <= projectiles1X[i] + (projectiles1Size[i] / 2) &&
      gamePieceX >= projectiles1X[i] - (projectiles1Size[i] / 2)) {

      //Evaluates top-left corner of game piece
      if (gamePieceY <= projectiles1Y[i] + (projectiles1Size[i] / 2) &&
        gamePieceY >= projectiles1Y[i] - (projectiles1Size[i] / 2)) {

        screen = 3;
      }

      //Evaluates bottom-left corner of game piece
      else if (gamePieceY + GAME_PIECE_SIZE <= projectiles1Y[i] + (projectiles1Size[i] / 2) &&
        gamePieceY + GAME_PIECE_SIZE >= projectiles1Y[i] - (projectiles1Size[i] / 2)) {

        screen = 3;
      }
    }

    //Evaluates right side of game piece
    else if (gamePieceX + GAME_PIECE_SIZE <= projectiles1X[i] + (projectiles1Size[i] / 2) &&
      gamePieceX + GAME_PIECE_SIZE >= projectiles1X[i] - (projectiles1Size[i] / 2)) {

      //Evaluates top-right corner of game piece
      if (gamePieceY <= projectiles1Y[i] + (projectiles1Size[i] / 2) &&
        gamePieceY >= projectiles1Y[i] - (projectiles1Size[i] / 2)) {

        screen = 3;
      }

      //Evaluates bottom-right corner of game piece
      else if (gamePieceY + GAME_PIECE_SIZE <= projectiles1Y[i] + (projectiles1Size[i] / 2) &&
        gamePieceY + GAME_PIECE_SIZE >= projectiles1Y[i] - (projectiles1Size[i] / 2)) {

        screen = 3;
      }
    }
  }

}


/*
This function will reset everything
associated with the game screen. This
includes the game piece coordinates, 
the projectiles, and the score. It then
immediately moves to the game screen.
*/

function gameBoardReset() {
  gamePieceX = GAME_PIECE_X_RESET;
  gamePieceY = GAME_PIECE_Y_RESET;

  score = SCORE_RESET;

  //Re-initialize the projectiles
  for (i = 0; i < 5; i++) {
    projectiles1Size[i] = int(random(30, 70));
    projectiles1X[i] = CANVAS_WIDTH - projectiles1Size[i];
    projectiles1Y[i] = int(random(100, 400));

    projectiles1XSpeed[i] = int(random(1, MAX_SPEED));
    projectiles1YSpeed[i] = int(random(1, MAX_SPEED));
  }

  //immediately move to the game screen after resetting variables
  screen = 2;

}