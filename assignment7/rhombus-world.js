/* Final project by: Julie Sayigh
HCDE 598, Fall 2018
*/

////////////////////////
//MAKING SHAPES/////////

//constant used to make the quads
const halfRhomSide = 25

// overall size of the rhombus used in the animations
const RhomWidth = 50
const RhomHeight = 43.3


//array for the coordinates of the shapes (not just buttons, as the name suggests)
var buttonXArray = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
var buttonYArray = [0, 43.3, 86.6, 129.9, 173.2, 216.5, 259.8, 303.1, 346.4, 389.7, 433];

//array for frame rate speeds
var speedXArray = [5, 6, 7.5, 9, 10, 11]


////////////////////////
//Making Buttons///////

// dimensions of rectangle over chevron-shaped button
var ButtonWidth = 75;
var ButtonHeight = 86.6;

//variables that save the values for where the mouse was clicked
var xClicked;
var yClicked;

///////////////////////////
//used in bee animation///
let xpos = 0;
let ypos = 0;

/////////////////////////
///Steps in the process
var step = 1


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (step == 1) {
    clickableChevron(0, 128, 255);
    //opening screen shows start button in the center and waits for it to be clicked.

  }

  if (step == 2) {
    ocean();
    //show ocean animation with a timer that triggers a background overlay after 3 sec 
		//using frame counts

  }

  if (step == 3) {
    clickableChevron(204, 0, 0);
    //draw button on the background and wait for the user to click it. 
		//when button is clicked, reset frame count to zero and reset mouse location.
		
  }

  if (step == 4) {
    fire();
    //show fire animation with a timer that triggers background overlay after 3 sec
		
  }

  if (step == 5) {
    clickableChevron(240, 100, 240);
    //draw button on the background and wait for the uer to click it.
		//when button is clicked, reset frame count to zero and reset mouse location.
		
  }

  if (step == 6) {
    bees();
    //show bees animation with a timer that triggers a background overlay after 3 sec
		
  }

  if (step == 7) {
    clickableChevron(0, 102, 51);
    //draw button on the background and wait for the uer to click it.
		//when button is clicked, reset frame count to zero and reset mouse location.
		
  }
  if (step == 8) {
		kelp();
    //show kelp animation with a timer that triggers a background overlay after 3 sec
    
  }
  if (step == 9) {
    clickableChevron(255, 128, 0);
    //draw button on the background and wait for the uer to click it.
		//when button is clicked, reset frame count to zero and reset mouse location.
		
  }
  if (step == 10) {
    //show credits screen
    credits();
  }
  if (step == 11) {
    clickableChevron(0, 128, 255);
    //draw button on the background and wait for the uer to click it.
	 //when button is clicked, reset frame count to zero, reset "step" to 1,
	//and reset mouse location.
  }


}
///////////////////////////////
//function for ocean animation
///////////////////////////////

function ocean() {
  background(0, 128, 255);
  frameRate(30);


  //draw ocean animation. I know this could have been done way more efficiently!
	//I was having trouble passing in color as a parameter. I figured it out for the buttons.

  drawChevronLeftColor(buttonXArray[6], buttonYArray[7]);
  drawChevronLeftColor(buttonXArray[5], buttonYArray[9]);

  drawChevronLeftColor(buttonXArray[8], buttonYArray[1]);
  drawChevronLeftColor(buttonXArray[7], buttonYArray[3]);
  drawChevronLeftColor(buttonXArray[6], buttonYArray[5]);
  drawChevronLeftColor(buttonXArray[5], buttonYArray[7]);
  drawChevronLeftColor(buttonXArray[4], buttonYArray[9]);

  drawChevronLeftColor(buttonXArray[7], buttonYArray[1]);
  drawChevronLeftColor(buttonXArray[6], buttonYArray[3]);
  drawChevronLeftColor(buttonXArray[5], buttonYArray[5]);
  drawChevronLeftColor(buttonXArray[4], buttonYArray[7]);
  drawChevronLeftColor(buttonXArray[3], buttonYArray[9]);

  drawChevronLeftColor(buttonXArray[6], buttonYArray[1]);
  drawChevronLeftColor(buttonXArray[5], buttonYArray[3]);
  drawChevronLeftColor(buttonXArray[4], buttonYArray[5]);
  drawChevronLeftColor(buttonXArray[3], buttonYArray[7]);
  drawChevronLeftColor(buttonXArray[2], buttonYArray[9]);

  drawChevronLeftColor(buttonXArray[5], buttonYArray[1]);
  drawChevronLeftColor(buttonXArray[4], buttonYArray[3]);
  drawChevronLeftColor(buttonXArray[3], buttonYArray[5]);
  drawChevronLeftColor(buttonXArray[2], buttonYArray[7]);
  drawChevronLeftColor(buttonXArray[1], buttonYArray[9]);

  drawChevronLeftColor(buttonXArray[4], buttonYArray[1]);
  drawChevronLeftColor(buttonXArray[3], buttonYArray[3]);
  drawChevronLeftColor(buttonXArray[2], buttonYArray[5]);
  drawChevronLeftColor(buttonXArray[1], buttonYArray[7]);
  drawChevronLeftColor(buttonXArray[0], buttonYArray[9]);

  drawChevronLeftColor(buttonXArray[3], buttonYArray[1]);
  drawChevronLeftColor(buttonXArray[2], buttonYArray[3]);
  drawChevronLeftColor(buttonXArray[1], buttonYArray[5]);
  drawChevronLeftColor(buttonXArray[0], buttonYArray[7]);
  drawChevronLeftColor(buttonXArray[1], buttonYArray[1]);
  drawChevronLeftColor(buttonXArray[2], buttonYArray[1]);
  drawChevronLeftColor(buttonXArray[1], buttonYArray[3]);
  drawChevronLeftColor(buttonXArray[0], buttonYArray[3]);

  //draw shadow
  drawChevronRightBlack((frameCount - 25) * speedXArray[4], buttonYArray[1]);
  drawChevronRightBlack((frameCount - 25) * speedXArray[3], buttonYArray[3]);
  drawChevronRightBlack((frameCount - 25) * speedXArray[2], buttonYArray[5]);
  drawChevronRightBlack((frameCount - 25) * speedXArray[1], buttonYArray[7]);
  drawChevronRightBlack((frameCount - 25) * speedXArray[0], buttonYArray[9]);

  //draw birds
  drawChevronRight((frameCount - 20) * speedXArray[4], buttonYArray[1]);
  drawChevronRight((frameCount - 20) * speedXArray[3], buttonYArray[3]);
  drawChevronRight((frameCount - 20) * speedXArray[2], buttonYArray[5]);
  drawChevronRight((frameCount - 20) * speedXArray[1], buttonYArray[7]);
  drawChevronRight((frameCount - 20) * speedXArray[0], buttonYArray[9]);

  //end of the animation

  if (frameCount >= (30 * 3)) {
    background(204, 0, 0, 180);
    if (frameCount == (30 * 4)) {
      step = step + 1;
    }
  }


}
////////////////////////////////
/////function for fire animation
///////////////////////////////

function fire() {
  background(204, 0, 0);
  frameRate(20);

	//Idea to use sin() to return looping values so the fire shapes go left, then come right and vice versa
  //you actually can't see this too well in the animation.
  //Idea came from:
	//https://creative-coding.decontextualize.com/changes-over-time/
  //the sin() function takes a single parameter, and evaluates to a number from -1 to 1.
 
  //far left side moving reds
  drawChevronRightReds(buttonXArray[2] - (sin(frameCount / 20) * 30), buttonYArray[3]);
  drawChevronRightReds(buttonXArray[2] - (sin(frameCount / 20) * 40), buttonYArray[5]);
  drawChevronRightReds(buttonXArray[2] - (sin(frameCount / 20) * 20), buttonYArray[7]);

  //near left side moving reds
  drawChevronRightReds(buttonXArray[3] - (sin(frameCount / 20) * 20), buttonYArray[3]);
  drawChevronRightReds(buttonXArray[3] - (sin(frameCount / 20) * 30), buttonYArray[5]);
  drawChevronRightReds(buttonXArray[3] - (sin(frameCount / 20) * 40), buttonYArray[7]);

  //right side moving reds
  drawChevronRightReds(buttonXArray[4] + (sin(frameCount / 20) * 30), buttonYArray[3]);
  drawChevronRightReds(buttonXArray[4] + (sin(frameCount / 20) * 40), buttonYArray[5]);
  drawChevronRightReds(buttonXArray[4] + (sin(frameCount / 20) * 20), buttonYArray[7]);

  //near right side moving reds
  drawChevronRightReds(buttonXArray[3] + (sin(frameCount / 20) * 30), buttonYArray[3]);
  drawChevronRightReds(buttonXArray[3] + (sin(frameCount / 20) * 40), buttonYArray[5]);
  drawChevronRightReds(buttonXArray[3] + (sin(frameCount / 20) * 20), buttonYArray[7]);

  //rock surround
  drawChevronLeftGray(buttonXArray[2], buttonYArray[1]);
  drawChevronLeftGray(buttonXArray[1], buttonYArray[2]);
  drawChevronLeftGray(buttonXArray[1], buttonYArray[3]);
  drawChevronLeftGray(buttonXArray[1], buttonYArray[7]);
  drawChevronLeftGray(buttonXArray[1], buttonYArray[1]);
  drawChevronLeftGray(buttonXArray[1], buttonYArray[6]);
  drawChevronLeftGray(buttonXArray[1], buttonYArray[4]);
  drawChevronLeftGray(buttonXArray[1], buttonYArray[5]);
  drawChevronLeftGray(buttonXArray[1], buttonYArray[8]);
  drawChevronLeftGray(buttonXArray[1], buttonYArray[7]);
  drawChevronLeftGray(buttonXArray[1], buttonYArray[9]);
  drawChevronLeftGray(buttonXArray[2], buttonYArray[9]);
  drawChevronLeftGray(buttonXArray[3], buttonYArray[1]);
  drawChevronLeftGray(buttonXArray[5], buttonYArray[1]);
  drawChevronLeftGray(buttonXArray[5], buttonYArray[2]);

  drawChevronLeftGray(buttonXArray[4], buttonYArray[1]);
  drawChevronLeftGray(buttonXArray[5], buttonYArray[6]);
  drawChevronLeftGray(buttonXArray[5], buttonYArray[5]);
  drawChevronLeftGray(buttonXArray[4], buttonYArray[9]);
  drawChevronLeftGray(buttonXArray[3], buttonYArray[9]);
  drawChevronLeftGray(buttonXArray[5], buttonYArray[8]);
  drawChevronLeftGray(buttonXArray[5], buttonYArray[9]);
  drawChevronLeftGray(buttonXArray[5], buttonYArray[3]);
  drawChevronLeftGray(buttonXArray[5], buttonYArray[7]);
  drawChevronLeftGray(buttonXArray[5], buttonYArray[4]);

  //lava coming out

  drawChevronRightReds((frameCount + 10) * speedXArray[2], buttonYArray[3]);
  drawChevronRightReds((frameCount + 10) * speedXArray[3], buttonYArray[5]);
  drawChevronRightReds((frameCount + 10) * speedXArray[1], buttonYArray[7]);
  drawChevronRightReds((frameCount + 20) * speedXArray[2], buttonYArray[5]);

  drawChevronRightReds((40 - frameCount) * speedXArray[2], buttonYArray[3]);
  drawChevronRightReds((30 - frameCount) * speedXArray[2], buttonYArray[5]);
  drawChevronRightReds((20 - frameCount) * speedXArray[1], buttonYArray[7]);
  drawChevronRightReds((40 - frameCount) * speedXArray[1], buttonYArray[3]);
  drawChevronRightReds((50 - frameCount) * speedXArray[1], buttonYArray[7]);

  //end of the animation

  if (frameCount >= (30 * 3)) {
    background(240, 100, 240, 180);
    if (frameCount == (30 * 4)) {
      step = step + 1;
    }
  }

}

///////////////////////////////
////bees animation
//////////////////////////////

function bees() {
  background(240, 100, 240);
  frameRate(30);

  //beehive
  drawChevronLeftBrown(buttonXArray[3], buttonYArray[1]);
  drawChevronLeftBrown(buttonXArray[2], buttonYArray[6]);
  drawChevronLeftBrown(buttonXArray[5], buttonYArray[3]);
  drawChevronLeftBrown(buttonXArray[4], buttonYArray[5]);
  drawChevronLeftBrown(buttonXArray[3], buttonYArray[7]);
  drawChevronLeftBrown(buttonXArray[2], buttonYArray[7]);

  drawChevronLeftBrown(buttonXArray[5], buttonYArray[1]);
  drawChevronLeftBrown(buttonXArray[4], buttonYArray[3]);
  drawChevronLeftBrown(buttonXArray[3], buttonYArray[5]);
  drawChevronLeftBrown(buttonXArray[4], buttonYArray[1]);
  drawChevronLeftBrown(buttonXArray[0], buttonYArray[1]);

  drawChevronLeftBrown(buttonXArray[1], buttonYArray[2]);
  drawChevronLeftBrown(buttonXArray[3], buttonYArray[3]);
  drawChevronLeftBrown(buttonXArray[2], buttonYArray[5]);
  drawChevronLeftBrown(buttonXArray[1], buttonYArray[4]);
  drawChevronLeftBrown(buttonXArray[2], buttonYArray[1]);

  drawChevronLeftBrown(buttonXArray[1], buttonYArray[3]);
  drawChevronLeftBrown(buttonXArray[2], buttonYArray[3]);
  drawChevronLeftBrown(buttonXArray[1], buttonYArray[5]);
  drawChevronLeftBrown(buttonXArray[1], buttonYArray[1]);

  ///bee motion adapted from 
  //https://creative-coding.decontextualize.com/changes-over-time/
  //same idea as above using sin() to return looping values. This time the shapes go
  //in an elliptical orbit because we are multiplying sin() by a number that varies
  
  //draw bees and shadows

  xpos += 0.05;
  ypos += 0.04;

  drawChevronRightBlack(100 + (sin(frameCount / 10) * 50), 210 + sin(ypos) * 150);
  drawChevronRightYellows(100 + (sin(frameCount / 10) * 50), 200 + sin(ypos) * 150);

  drawChevronRightBlack(240 + sin(xpos) * 100, 170 + sin(ypos) * 150);
  drawChevronRightYellows(250 + sin(xpos) * 100, 160 + sin(ypos) * 150);

  drawChevronRightBlack(40 - sin(xpos) * 50, 110 - sin(ypos) * 100);
  drawChevronRightYellows(50 - sin(xpos) * 50, 100 - sin(ypos) * 100);

  drawChevronRightBlack(1 - sin(xpos) * 100, 210 - sin(ypos) * 200);
  drawChevronRightYellows(10 - sin(xpos) * 100, 200 - sin(ypos) * 200);

  drawChevronRightBlack(290 - sin(xpos) * 100, 90 - sin(ypos) * 100);
  drawChevronRightYellows(300 - sin(xpos) * 100, 100 - sin(ypos) * 100);

  drawChevronRightBlack(10 - sin(xpos) * 50, 20 - sin(ypos) * 50);
  drawChevronRightYellows(20 - sin(xpos) * 50, 30 - sin(ypos) * 50);

  drawChevronRightBlack(130 + (sin(frameCount / 20) * 60), 60 + sin(ypos) * 80);
  drawChevronRightYellows(140 + (sin(frameCount / 20) * 60), 50 + sin(ypos) * 80);

  drawChevronRightBlack(290 + sin(xpos) * 100, 330 + sin(ypos) * 80);
  drawChevronRightYellows(300 + sin(xpos) * 100, 320 + sin(ypos) * 80);


  //draw fast bees shadows
  drawChevronRightBlack((frameCount - 25) * speedXArray[4], buttonYArray[1]);
  drawChevronRightBlack((frameCount - 25) * speedXArray[2], buttonYArray[5]);
  drawChevronRightBlack((frameCount - 25) * speedXArray[0], buttonYArray[9]);

  //draw fast bees
  drawChevronRightYellows((frameCount - 20) * speedXArray[4], buttonYArray[1]);
  drawChevronRightYellows((frameCount - 20) * speedXArray[2], buttonYArray[5]);
  drawChevronRightYellows((frameCount - 20) * speedXArray[0], buttonYArray[9]);

  //end of the animation

  if (frameCount >= (30 * 4)) {
    background(0, 102, 51, 180);
    if (frameCount == (30 * 5)) {
      step = step + 1;
    }
  }

}

///////////////////////
//kelp animation
//////////////////////

function kelp() {
  background(0, 102, 51);
  frameRate(30);

  //draw last clown shadows
  drawChevronRightBlack((frameCount - 22) * speedXArray[1], buttonYArray[1]);
  drawChevronRightBlack((frameCount - 22) * speedXArray[1], buttonYArray[6]);
  drawChevronRightBlack((frameCount - 22) * speedXArray[0], buttonYArray[9]);

  //draw last clowns
  drawChevronRightOrange((frameCount - 20) * speedXArray[1], buttonYArray[5]);
  drawChevronRightOrange((frameCount - 20) * speedXArray[0], buttonYArray[3]);
  drawChevronRightOrange((frameCount - 20) * speedXArray[0], buttonYArray[7]);

  //draw fastest clown shadows
  drawChevronRightBlack((frameCount - 22) * speedXArray[4], buttonYArray[4]);
  drawChevronRightBlack((frameCount - 22) * speedXArray[4], buttonYArray[8]);
  drawChevronRightBlack((frameCount - 22) * speedXArray[5], buttonYArray[6]);

  //draw fastest clown
  drawChevronRightOrange((frameCount - 20) * speedXArray[3], buttonYArray[6]);
  drawChevronRightOrange((frameCount - 20) * speedXArray[4], buttonYArray[8]);
  drawChevronRightOrange((frameCount - 20) * speedXArray[5], buttonYArray[6]);

  //draw faster clown shadows
  drawChevronRightBlack((frameCount - 35) * speedXArray[1], buttonYArray[2]);
  drawChevronRightBlack((frameCount - 35) * speedXArray[3], buttonYArray[7]);
  drawChevronRightBlack((frameCount - 35) * speedXArray[2], buttonYArray[4]);

  //draw faster clown
  drawChevronRightOrange((frameCount - 30) * speedXArray[2], buttonYArray[7]);
  drawChevronRightOrange((frameCount - 30) * speedXArray[3], buttonYArray[8]);
  drawChevronRightOrange((frameCount - 30) * speedXArray[0], buttonYArray[2]);

  //draw faster clown shadows
  drawChevronRightBlack((frameCount - 35) * speedXArray[2], buttonYArray[4]);
  drawChevronRightBlack((frameCount - 35) * speedXArray[1], buttonYArray[5]);
  drawChevronRightBlack((frameCount - 35) * speedXArray[2], buttonYArray[6]);

  //draw faster clown
  drawChevronRightOrange((frameCount - 45) * speedXArray[1], buttonYArray[4]);
  drawChevronRightOrange((frameCount - 45) * speedXArray[0], buttonYArray[3]);
  drawChevronRightOrange((frameCount - 45) * speedXArray[2], buttonYArray[7]);

  //seaweed
  ///seaweed motion adapted from 
  //https://creative-coding.decontextualize.com/changes-over-time/
  //This is what I should have used to draw many of my animations -- a loop that creates
  //multiple shapes. These also move back and forth using sin() 
  
  for (let i = 0; i < 5; i++) {
    fill(frameCount % 255);
    drawChevronLeftGreen
      (buttonXArray[0] + (sin(frameCount / (i + 6)) * (i + 8)), buttonYArray[1] + (i * (2 * RhomHeight)));

    drawChevronLeftGreen
      (buttonXArray[2] + (sin(frameCount / (i + 10)) * (i + 5)), buttonYArray[1] + (i * (2 * RhomHeight)));

    drawChevronLeftGreen
      (buttonXArray[4] + (sin(frameCount / (i + 5)) * (i + 9)), buttonYArray[1] + (i * (2 * RhomHeight)));

    drawChevronLeftGreen
      (buttonXArray[6] + (sin(frameCount / (i + 9)) * (i + 4)), buttonYArray[1] + (i * (2 * RhomHeight)));

  }

  //end of the animation

  if (frameCount >= (30 * 4)) {
    background(0, 102, 51, 180);
    if (frameCount == (30 * 5)) {
      step = step + 1;
    }
  }

}

function credits() {
  background(255, 128, 0);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(153, 0, 76);
  text("Rhombus World", width / 2, height * 0.3);
  textSize(20);
  text("by Julie Sayigh, Fall 2018", width / 2, height * 0.4);
  text("Thank you to the teaching team: ", width / 2, height * 0.6);
  text("Elena, Melissa, and Noelle", width / 2, height * 0.66);
  text("and for:", width / 2, height * 0.74);
  text("inspiration by Daphne", width / 2, height * 0.8);
  text("moral support by Allen", width / 2, height * 0.86);
  text("and special thanks to Ed Paradis", width / 2, height * 0.92);


  if (frameCount >= (30 * 4)) {
    background(0, 102, 51, 180);
    if (frameCount == (30 * 5)) {
      step = step + 1;
    }
  }
}

//////////////////////////////////////
///function for a button in the center
/////////////////////////////////////

//this one accepts color values
function clickableChevron(r, g, b) {
  background(r, g, b);
  drawChevronRightBlack(160, 200);
  var buttonIsPressed = checkButtonPressed(140, 160);



  // pass in x and y of whatever button I want to check
  // a local variable called buttonIsPressed that saves the value returned 
  //by the function checkButton


  if (buttonIsPressed == true) {
    frameCount = 0;
    step = step + 1;
    
  //if we reach 12 steps, go back to step = 1, and always reset the mouse location

    if (step == 12) {
      step = 1;
    }
    resetMouseLocation();

  }

}


//////////////////////////////////////////////////////
/// functions for chevrons used in animations
//////////////////////////////////////////////////////


function drawChevronLeft(x, y, MyColor) {
  strokeWeight(0);
  //top side
  fill(random(1, 50), random(50, 150), random(250, 255));
  quad(x + halfRhomSide, y - halfRhomSide * sqrt(3), x + halfRhomSide +
    2 * halfRhomSide, y - halfRhomSide * sqrt(3), x + 2 * halfRhomSide, y, x, y);
  //bottom side
  fill(random(1, 50), random(100, 150), random(250, 255));
  quad(x, y, x + (2 * halfRhomSide), y, x + ((2 * halfRhomSide) + halfRhomSide),
    y + (halfRhomSide * sqrt(3)), x + halfRhomSide, y + (halfRhomSide * sqrt(3)));
}

function drawChevronLeftColor(x, y, Color2) {
  strokeWeight(0);
  //top side
  fill(51, 120, 255);
  quad(x + halfRhomSide, y - halfRhomSide * sqrt(3), x + halfRhomSide +
    2 * halfRhomSide, y - halfRhomSide * sqrt(3), x + 2 * halfRhomSide, y, x, y);
  //bottom side
  fill(51, 130, 255);
  quad(x, y, x + (2 * halfRhomSide), y, x + ((2 * halfRhomSide) + halfRhomSide),
    y + (halfRhomSide * sqrt(3)), x + halfRhomSide, y + (halfRhomSide * sqrt(3)));
}

function drawChevronRight(x, y, MyColor) {
  strokeWeight(0);
  // bottom side
  fill(random(1, 255), random(1, 255), random(1, 255));
  quad(x + halfRhomSide, y, x + (2 * halfRhomSide + halfRhomSide), y, x + (2 * halfRhomSide),
    y + (halfRhomSide * sqrt(3)), x, y + (halfRhomSide * sqrt(3)));
  // top side
  fill(random(1, 255), random(1, 255), random(1, 255));
  quad(x, y - halfRhomSide * sqrt(3), x + 2 * halfRhomSide, y - halfRhomSide * sqrt(3),
    x + (2 * halfRhomSide + halfRhomSide), y, x + halfRhomSide, y);
}

function drawChevronRightBlack(x, y, MyColor) {
  strokeWeight(0);
  // bottom side
  fill(0, 0, 0, 50);
  quad(x + halfRhomSide, y, x + (2 * halfRhomSide + halfRhomSide), y, x + (2 * halfRhomSide),
    y + (halfRhomSide * sqrt(3)), x, y + (halfRhomSide * sqrt(3)));
  // top side
  fill(0, 0, 0, 50);
  quad(x, y - halfRhomSide * sqrt(3), x + 2 * halfRhomSide, y - halfRhomSide * sqrt(3),
    x + (2 * halfRhomSide + halfRhomSide), y, x + halfRhomSide, y);
}

function drawChevronLeftGray(x, y, Color2) {
  strokeWeight(0);
  //top side
  fill(64, 64, 64);
  quad(x + halfRhomSide, y - halfRhomSide * sqrt(3), x + halfRhomSide +
    2 * halfRhomSide, y - halfRhomSide * sqrt(3), x + 2 * halfRhomSide, y, x, y);
  //bottom side
  fill(96, 96, 96);
  quad(x, y, x + (2 * halfRhomSide), y, x + ((2 * halfRhomSide) + halfRhomSide),
    y + (halfRhomSide * sqrt(3)), x + halfRhomSide, y + (halfRhomSide * sqrt(3)));
}

function drawChevronRightReds(x, y, MyColor) {
  strokeWeight(0);
  // bottom side
  fill(random(150, 255), random(0, 50), random(0, 50));
  quad(x + halfRhomSide, y, x + (2 * halfRhomSide + halfRhomSide), y, x + (2 * halfRhomSide),
    y + (halfRhomSide * sqrt(3)), x, y + (halfRhomSide * sqrt(3)));
  // top side
  fill(random(150, 255), random(0, 50), random(0, 50));
  quad(x, y - halfRhomSide * sqrt(3), x + 2 * halfRhomSide, y - halfRhomSide * sqrt(3),
    x + (2 * halfRhomSide + halfRhomSide), y, x + halfRhomSide, y);
}

function drawChevronLeftBrown(x, y, Color2) {
  strokeWeight(0);
  //top side
  fill(153, 76, 0);
  quad(x + halfRhomSide, y - halfRhomSide * sqrt(3), x + halfRhomSide +
    2 * halfRhomSide, y - halfRhomSide * sqrt(3), x + 2 * halfRhomSide, y, x, y);
  //bottom side
  fill(102, 51, 0);
  quad(x, y, x + (2 * halfRhomSide), y, x + ((2 * halfRhomSide) + halfRhomSide),
    y + (halfRhomSide * sqrt(3)), x + halfRhomSide, y + (halfRhomSide * sqrt(3)));
}


function drawChevronRightYellows(x, y, MyColor) {
  strokeWeight(0);
  // bottom side
  fill(random(200, 255), random(200, 255), random(0, 100));
  quad(x + halfRhomSide, y, x + (2 * halfRhomSide + halfRhomSide), y, x + (2 * halfRhomSide),
    y + (halfRhomSide * sqrt(3)), x, y + (halfRhomSide * sqrt(3)));
  // top side
  fill(random(90, 110), random(90, 110), random(90, 110));
  quad(x, y - halfRhomSide * sqrt(3), x + 2 * halfRhomSide, y - halfRhomSide * sqrt(3),
    x + (2 * halfRhomSide + halfRhomSide), y, x + halfRhomSide, y);
}

function drawChevronLeftGreen(x, y, Color2) {
  strokeWeight(0);
  //top side
  fill(0, 204, 0);
  quad(x + halfRhomSide, y - halfRhomSide * sqrt(3), x + halfRhomSide +
    2 * halfRhomSide, y - halfRhomSide * sqrt(3), x + 2 * halfRhomSide, y, x, y);
  //bottom side
  fill(0, 255, 0);
  quad(x, y, x + (2 * halfRhomSide), y, x + ((2 * halfRhomSide) + halfRhomSide),
    y + (halfRhomSide * sqrt(3)), x + halfRhomSide, y + (halfRhomSide * sqrt(3)));
}

function drawChevronRightOrange(x, y, MyColor) {
  strokeWeight(0);
  // bottom side
  fill(random(250, 255), random(150, 200), random(0, 50));
  quad(x + halfRhomSide, y, x + (2 * halfRhomSide + halfRhomSide), y, x + (2 * halfRhomSide),
    y + (halfRhomSide * sqrt(3)), x, y + (halfRhomSide * sqrt(3)));
  // top side
  fill(255, 255, 255);
  quad(x, y - halfRhomSide * sqrt(3), x + 2 * halfRhomSide, y - halfRhomSide * sqrt(3),
    x + (2 * halfRhomSide + halfRhomSide), y, x + halfRhomSide, y);
}

////////////////////
//button functions
///////////////////

function checkButtonPressed(x, y) {
  //function checkButtonPressed with parameters for x and y so we can make
  //multiple button locations by passing in different values for x, y.
  //if statement that checkes where the mouse is. 
  if (xClicked >= x &&
    xClicked <= x + ButtonWidth &&
    yClicked >= y &&
    yClicked <= y + ButtonHeight) { 
    
    //we replaced mouseX and mouseY with these stored values xClicked and yClicked
    return true;
  } else {
    return false;
  }
}

// we need the operation to stay on the screen after we click and move away, so:
function mouseClicked() {
  //standard function for whatever we want to happen when a mouse is clicked
  xClicked = mouseX;
  yClicked = mouseY;
  //this stores mouseX and Y values in these variables. When you click the mouse, it stores these
  //values as xClicked and yClicked. We use them above as replacements for mouseX and mouseY.
}
//resets the mouse location to a value off the canvas so that it can be re-clicked later
function resetMouseLocation() {
  xClicked = -1;
  yClicked = -1;

}