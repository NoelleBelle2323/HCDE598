/////////////
//VARIABLES//
/////////////

var storage = 0; //used to move between screens

//Intro screen variables
var startButtonX;
var startButtonY;
var startButtonW;
var startButtonH;

var introTextSize1;
var introTextSize2;
var introFill;

//Info screen variables
var infoTextSize;
var infoFill;

var okayButtonX;
var okayButtonY;
var okayButtonW;
var okayButtonH;

var cancelButtonX;
var cancelButtonY;
var cancelButtonW;
var cancelButtonH;
var infoButtonTextSize;

//Gamescreen variables
var gamePieceX = 40;
var gamePieceY = 240;
var gamePieceW = 20;
var gamePieceH = 20;

var startLineX = 0;
var startLineY = 200;
var startLineW = 100;
var startLineH = 100;

var finishLine1X = 470;
var finishLine1Y = 500;
var finishLine1W = 30;
var finishLine1H = 30;

//Winner screen variables
var winnerTextR = 0;
var winnerTextG = 0;
var winnerTextB = 0;


function setup() {
  createCanvas(500, 500);
}


function draw() {
  background(220);

  //This is what allows you to move through the different screens
  if (storage == 0) {
    startScreen();
  } else if (storage == 1) {
    instructionScreen();
  } else if (storage == 2) {
    gameScreen();
  } else if (storage == 3) {
    winnerScreen();
  } else if (storage == 4) {
    loserScreen();
  }
}

/////////////
//FUNCTIONS//
/////////////

function startScreen() {
  //Setting initial variable values
  introScreenVariables();

  //Create the title text
  fill('black');
  textSize(introTextSize1);
  text("Super Slider", 100, 200);

  //Start button
  fill(introFill);
  textSize(introTextSize2);
  rect(startButtonX, startButtonY, startButtonW, startButtonH);
  fill('black');
  text("Start", 220, 282);

  //Clicking the Start button
  if (mouseX > startButtonX && mouseX < startButtonX + startButtonW && mouseY > startButtonY && mouseY < startButtonY + startButtonH && mouseIsPressed) {
    startButtonX = 0;
    startButtonY = 0;
    startButtonW = 0;
    startButtonH = 0;
    introTextSize1 = 0;
    introTextSize2 = 0;
    storage = 1;
  } else {
    introFill = 'white';
  }
}


function instructionScreen() {
  //Setting initial variable values
  infoScreenVariables();

  //Information text
  fill(infoFill);
  textSize(infoTextSize);
  text("W = Move Up", 50, 100);
  text("A = Move Left", 50, 150);
  text("S = Move Down", 50, 200);
  text("D = Move Right", 50, 250);

  //Okay button
  fill('white');
  textSize(infoButtonTextSize);
  rect(okayButtonX, okayButtonY, okayButtonW, okayButtonH);
  fill('black');
  text('Okay', 77, 380);

  //Cancel button
  fill('white');
  textSize(infoButtonTextSize);
  rect(cancelButtonX, cancelButtonY, cancelButtonW, cancelButtonH);
  fill('black');
  text('Cancel', 220, 380);

  //Clicking Okay button
  if (mouseX > okayButtonX && mouseX < okayButtonX + okayButtonW && mouseY > okayButtonY && mouseY < okayButtonY + okayButtonH && mouseIsPressed) {
    okayButtonX = 0;
    okayButtonY = 0;
    okayButtonW = 0;
    okayButtonH = 0;
    infoTextSize = 0;
    storage = 2;
  }

  //Clicking Cancel button
  if (mouseX > cancelButtonX && mouseX < cancelButtonX + cancelButtonW && mouseY > cancelButtonY && mouseY < cancelButtonY + cancelButtonH && mouseIsPressed) {
    cancelButtonX = 0;
    cancelButtonY = 0;
    cancelButtonW = 0;
    cancelButtonH = 0;
    infoTextSize = 0;
    storage = 0;
  }
}


function gameScreen() {
  //setting game piece controls
  gamePieceControls();

  //creating the game board
  fill('black');
  rect(gamePieceX, gamePieceY, gamePieceW, gamePieceH);
  fill('green');
  rect(finishLine1X, finishLine1Y, finishLine1W, finishLine1H);

  //all the lava
  createLava(0, 0, 30, 300);
  createLava(0, 0, 470, 50);
  createLava(450, 0, 20, 370);
  createLava(450, 400, 20, 100);
  createLava(100, 200, 250, 100);
  createLava(250, 350, 200, 20);
  createLava(0, 300, 200, 200);
  createLava(200, 470, 250, 30);


  //moving the finishline
  if (finishLine1Y <= -30) {
    finishLine1StartingPosition();
  } else {
    finishLine1Y--;
  }

  //Winning
  if (gamePieceX + 20 >= finishLine1X && gamePieceX + 20 <= width && gamePieceY >= finishLine1Y && gamePieceY <= finishLine1Y + 30) {
    startLineW = 0;
    startLineH = 0;
    gamePieceW = 0;
    gamePieceH = 0;
    finishLine1W = 0;
    finishLine1H = 0;
    storage = 3;
  } else {
    startLineW = 100;
    startLineH = 100;
    gamePieceW = 20;
    gamePieceH = 20;
    finishLine1W = 30;
    finishLine1H = 30;
  }
}


function winnerScreen() {
  fill(winnerTextR, winnerTextG, winnerTextB);
  textSize(50);
  text('YOU WIN!', 120, 250);

  winnerTextR++
  if (winnerTextR >= 255) {
    winnerTextR = 255;
    winnerTextB = 0;
    winnerTextG++
  }
  if (winnerTextG >= 255) {
    winnerTextG = 255;
    winnerTextR = 0;
    winnerTextB++
  }
  if (winnerTextB >= 255) {
    winnerTextB = 255;
    winnerTextG = 0;
    winnerTextR++;
  }
  if (winnerTextR >= 255 && winnerTextG >= 255 && winnerTextB >= 255) {
    winnerTextR = 0;
    winnerTextG = 0;
    winnerTextB = 0
  }
}


function introScreenVariables() {
  introTextSize1 = 50;
  introTextSize2 = 20;
  introFill = 'white';
  startButtonX = 165;
  startButtonY = 250;
  startButtonW = 150;
  startButtonH = 50;
}


function infoScreenVariables() {
  infoTextSize = 30;
  infoFill = 'black';

  okayButtonX = 50;
  okayButtonY = 350;
  okayButtonW = 100;
  okayButtonH = 50

  cancelButtonX = 200;
  cancelButtonY = 350;
  cancelButtonW = 100;
  cancelButtonH = 50;
  infoButtonTextSize = 20;
}


function gamePieceControls() {
  if (key == 'w') {
    gamePieceY--
  } else if (key == 'a') {
    gamePieceX--
  } else if (key == 's') {
    gamePieceY++
  } else if (key == 'd') {
    gamePieceX++
  }
}


function finishLine1StartingPosition() {
  finishLine1X = 470;
  finishLine1Y = 500;
  finishLine1W = 30;
  finishLine1H = 30;
}

function createLava(x, y, w, h) {
  noStroke();
  fill('red');
  rect(x, y, w, h);

  if (gamePieceX >= x && gamePieceX <= x + w && gamePieceY >= y && gamePieceY <= y + h) {
    storage = 4;
  } else if (gamePieceX + 20 >= x && gamePieceX + 20 <= x + w && gamePieceY >= y && gamePieceY <= y + h) {
    storage = 4;
  } else if (gamePieceX >= x && gamePieceX <= x + w && gamePieceY + 20 >= y && gamePieceY + 20 <= y + h) {
    storage = 4;
  } else if (gamePieceX + 20 >= x && gamePieceX + 20 <= x + w && gamePieceY + 20 >= y && gamePieceY + 20 <= y + h) {
    storage = 4;
  }
}

function loserScreen() {
  fill('black');
  textSize(50);
  text('YOU LOSE', 120, 250);
}