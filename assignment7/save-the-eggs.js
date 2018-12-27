// Final Assignment: Save the Eggs Game!

// In this game I use functions, for loops and arrays to allow the main
//character, Chick, to save all the eggs by catching them. If Chick misses more
//than 7 eggs the game ends and player can click start to begin a new game

//Extra Features: If during the game someone clicks on the canvas the game will pause
//game can be resumed by clicking again

//to draw eggs and chick
var chicks3X;
var chicks3Y;
var eggs1X;
var eggs1Y;

//to count
var caught;
var missed;


var startGame;
var buttonX;
var buttonY;
var xClicked = -1;
var yClicked = -1;

//variable for making multiple eggs appear on the screen
var eggsX = [];
var eggsY = [];

//variables for 5 eggs moving down
var eggsYSpeeds = [];

function setup() {
  createCanvas(600, 400);

  //this is the placement of the original chick and egg
  chicks3X = 300;
  chicks3Y = 300;
  eggs1X = 180;
  eggs1Y = -55;

  //egg counter start
  caught = 0;
  missed = 0;


  startGame = false;
  buttonX = 240;
  buttonY = 100;

  //to make multiple eggs (5) 
  for (i = 0; i < 5; i = i + 1) {
    eggsX[i] = round(random(0, 600));
    //how to put multiple eggs(5) in same Y location
    eggsY[i] = -55;
    //to make 5 eggs fall down with different speeds
    eggsYSpeeds[i] = round(random(1, 4));
  }
}

//in this function I draw the characters and the background
function draw() {
  background('#C6F6FF');

  //cloud right
  //left fluff
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(344, 170, 25, 25);

  //upper left fluff
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(371, 150, 50, 50);

  //lower left fluff
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(375, 172, 40, 40);

  //middle fluff
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(405, 160, 40, 40);

  //right fluff
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(430, 160, 30, 25);

  //grass 
  //fill
  strokeWeight(0);
  fill('#B6EA90');
  rect(0, 312, 600, 400);

  //top
  strokeWeight(0);
  fill('#95D865');
  rect(0, 308, 600, 6);

  //grass blades left
  //left
  strokeWeight(7);
  stroke('#95D865');
  line(10, 349, 19, 357);
  //middle
  line(23, 340, 22, 357);
  //right
  line(33, 346, 26, 357);

  //grass blades middle
  strokeWeight(7);
  stroke('#95D865');
  //left
  line(225, 371, 234, 381);
  //middle
  line(236, 360, 234, 382);
  //right
  line(244, 366, 237, 382);


  //grass blades right
  strokeWeight(7);
  stroke('#95D865');
  //left
  line(562, 344, 572, 353);
  //middle
  line(578, 330, 577, 354);
  //right
  line(580, 353, 588, 338);


  // fence 
  //lower beam 
  strokeWeight(0);
  fill('#A37237');
  rect(0, 288, 600, 10);

  //upper beam
  strokeWeight(0);
  fill('#A37237');
  rect(0, 266, 600, 10);

  //sun
  //circle
  strokeWeight(7);
  stroke('#f7db3b');
  fill('#fae885');
  ellipse(566, 37, 120, 120);

  //rays
  strokeWeight(10);
  line(389, 0, 490, 17);

  strokeWeight(10);
  stroke('#f7db3b');
  line(418, 141, 496, 71);

  strokeWeight(10);
  stroke('#f7db3b');
  line(544, 197, 559, 112);

  //cloud left
  //left fluff
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(16, 81, 45, 40);

  //big lower fluff
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(60, 84, 61, 61);

  //big upper fluff
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(53, 60, 50, 50);

  //middle fluff
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(94, 73, 50, 55);

  //right fluff
  strokeWeight(0);
  stroke('white');
  fill('white');
  ellipse(125, 77, 30, 30);
  drawFence();
  greenChick(chicks3X, chicks3Y);

  // start game button
  startGame = checkButtonPressed();


  if (startGame == false) {

    //button and button text

    push();
    strokeWeight(2);
    stroke('#afaeae');
    fill('#d1d1d1');
    rect(buttonX, buttonY, 120, 80);
    pop();

    push();
    fill('#4c4b4b');
    textSize(40);
    text('Start', 257, 155)
    pop();

    push();
    fill('#006bb3');
    textSize(20);
    text('To Play Use Left & Right', 190, 49)
    text('Arrow Keys', 248, 74)
    pop();
  } else {
    drawMulteggs();
    moveYEggs();
    catchEggs();
    moveChick();
  }

  drawText();

}

//to count missed eggs
function drawText() {
  //missed and caught egg counter
  push();
  textSize(25);
  fill('black');
  strokeWeight(1);
  stroke('black');
  text(caught, 40, 50);
  stroke('red');
  fill('red')
  text(missed, 40, 80);
  pop();
}

//function to start the game
function checkButtonPressed() {
  if (xClicked >= buttonX &&
    xClicked <= buttonX + 120 &&
    yClicked >= buttonY &&
    yClicked <= buttonY + 80) {

    return true;
  } else {
    return false;
  }
}

function mouseClicked() {
  xClicked = mouseX;
  yClicked = mouseY;
}

//multiple fence boards
function drawFence() {
  for (i = 0; i < 17; i += 1) {
    //rectangle
    strokeWeight(0);
    fill('#cc9e66');
    rect(i * 38, 255, 23, 53);

    //triangle
    strokeWeight(0);
    fill('#cc9e66');
    triangle(i * 38 + 11, 244, i * 38 + 23, 255, i * 38, 255);
  }
}


//function for speeds
function moveYEggs() {
  for (i = 0; i < eggsY.length; i++) {

    // get shape x and y coordinates
    var eggY = eggsY[i];
    var eggSpeed = eggsYSpeeds[i]

    eggY = eggY + eggSpeed

    //incrementing missed
    if (eggY > 600) {
      eggY = -55;
      missed += 1;

      //if missed greater than 3 stop game
      if (missed > 7) {
        //decided to hard code the clicked x & y variables so the program believes that
        //the game is reset and so the score is reset
        startGame = false;
        xClicked = 0;
        yClicked = 0;
        missed = 0;
        caught = 0;
        //to ensure that we stop looping when limit is at the end and to
        //make sure that no score is added when game resets
        i = 5;
      }
    }
    eggsY[i] = eggY
  }


}

//to catch eggs
function catchEggs() {
  for (i = 0; i < 5; i = i + 1) {
    var eggY = eggsY[i];
    var eggX = eggsX[i];
    if (eggY + 60 > chicks3Y - 40 && eggY + 60 < chicks3Y + 40) {
      if (eggX + 60 > chicks3X - 40 && eggX + 60 < chicks3X + 40) {
        eggY = -55;
        caught = caught + 1;
      }
    }
    eggsY[i] = eggY;
  }
}


//draw multiple eggs(5)
function drawMulteggs() {
  for (i = 0; i < 5; i = i + 1) {
    if (i % 2 == 0) { //eveb
      makeEgg(eggsX[i], eggsY[i], '#ffd1ea', '#e86aae');
    } else { //odd
      makeEgg(eggsX[i], eggsY[i], '#fff084', '#ffac1e');
    }
  }
}

// in this function I create the eggs that will fall
function makeEgg(egg1X, egg1Y, eggColor, eggBorderColor) {

  push();
  fill(eggColor);
  stroke(eggBorderColor);
  strokeWeight(6);
  ellipse(60 + egg1X, 60 + egg1Y, 50, 60);

  //line middle
  stroke(eggBorderColor);
  strokeWeight(6);
  line(egg1X + 40, egg1Y + 60, egg1X + 80, egg1Y + 60);

  //line top
  stroke(eggBorderColor);
  strokeWeight(5);
  line(egg1X + 45, egg1Y + 40, egg1X + 76, egg1Y + 40);

  //line bottom
  stroke(eggBorderColor);
  strokeWeight(5);
  line(egg1X + 45, egg1Y + 80, egg1X + 76, egg1Y + 80);
  pop();

}



//in this function I created the green chick
function greenChick(chick3X, chick3Y) {
  push();
  //color of body
  stroke('#80bfff');
  strokeWeight(5)
  fill('#80bfff');
  ellipse(chick3X, chick3Y, 80, 80);

  //color of belly
  fill('#cce6ff');
  stroke('#cce6ff');
  ellipse(chick3X, chick3Y + 10, 47, 50);

  fill('#339cff');
  stroke('#339cff');
  ellipse(chick3X - 36, chick3Y + 10, 20, 30);

  //left wing
  strokeWeight(1);
  ellipse(chick3X - 38, chick3Y + 11, 20, 30);

  //right wing
  strokeWeight(6);
  ellipse(chick3X + 37, chick3Y + 10, 20, 30);

  //eye left
  fill('white');
  stroke('white');
  ellipse(chick3X - 15, chick3Y - 12, 25, 25);

  fill('black');
  stroke('black');
  ellipse(chick3X - 15, chick3Y - 12, 16, 16);

  //eye right
  fill('white');
  stroke('white');
  ellipse(chick3X + 15, chick3Y - 12, 25, 25);

  fill('black');
  stroke('black');
  ellipse(chick3X + 15, chick3Y - 12, 16, 16);

  //beak
  stroke('orange');
  strokeWeight(6);
  fill('orange');
  triangle(chick3X - 5, chick3Y + 5, chick3X + 5, chick3Y + 5, chick3X, chick3Y + 12);
  pop();
}


// in this function I allow the green chick to move left and right by each key press
function moveChick() {

  if (keyIsDown(RIGHT_ARROW) && chicks3X < 550) {
    chicks3X = chicks3X + 5;
  }

  if (keyIsDown(LEFT_ARROW) && chicks3X > 50) {
    chicks3X = chicks3X - 5;
  }


}