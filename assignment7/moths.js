/////////Beverly van Daal\\\\\\\\\
/////////////HCDE 598\\\\\\\\\\\\\
///////////Final Project\\\\\\\\\\
///////////"Flying Moth"\\\\\\\\\\\

//In this code, after 1.5 seconds a moth flies into view on the canvas
//from off screen and stops when reaching the middle. Simultaneously,
//the user can control the background by moving the mouse across the canvas.
//This animation is also optimized  by flipping repeated shapes on the vertical axis
//and using for loops to generate the background.


//constants for the canvas and circle size
const CANVASW = 1000;
const CANVASH = 600;
const BGCIRCLE = 30;

//variable to start the moth off screen on the Y axis
var mothY = 800;

function setup() {
  createCanvas(CANVASW, CANVASH);

}

function draw() {
  //variables for the delayed start animation in milliseconds.
  var time1 = 1500;
  var currentTime = millis();

  //mid-brown color for the background to draw over the movement
  background(115, 99, 87);
  noStroke();

  //for loop for mouse input. This means that circles are drawn based on how far on the X axis the mouse is hovering.
  for (var bgX = 0; bgX <= mouseX; bgX = bgX + 40) {
    //this is a for loop that says to draw circles for the height of the canvas based on how far the mouse is on X axis.
    for (var bgY = 0; bgY <= height; bgY = bgY + 40) {
      //color changing depending on odd or even value of the circles X row by Y column.
      if (isOdd(bgX / 40 + bgY / 40)) {
        //fill odd circles with light brown
        fill(99, 83, 73);
      } else {
        //fill even circles with dark brown
        fill(84, 69, 58);
      }
      //draw the circles based on the parameters above
      ellipse(bgX, bgY, BGCIRCLE, BGCIRCLE);
    }

  }


  //if statement that delays the animation start by 1.5 seconds.
  if (currentTime > time1) {
    mothY -= 3;
  }
  //if statement to stop the moth from moving past the halfway point on the canvas.
  if (mothY < CANVASH / 2) {
    mothY = CANVASH / 2
  }

  //Calls the moth drawing
  drawmoth();
}

//////////////////////BEGIN FUNCTIONS TO CALL\\\\\\\\\\\\\\\\\\\

//function from class for determing odd or even
function isOdd(n) {
  remainder = n % 2;
  if (remainder == 1) {
    return true;
  } else {

    return false;
  }
}

///////////begin functions to draw the moth\\\\\\\\\\\\\\\


//This is the master function that calls all the other functions to draw the moth.
function drawmoth() {
  drawwings(); //draws all the wings
  backside(); //draws the backside of the moth
  headtorso(); //draws the torso
}

//This function draws the wings of the moth.
//This function includes code to copy the wings and flip them on the center vertical.
function drawwings() {
  upperwing();
  lowerwing();
  translate(width, 0); //move to far corner
  scale(-1.0, 1.0); //flips wing functions below on the x-axis
  upperwing();
  lowerwing();
}


//This draw the moth's lower wing base shape as well as the wing's design functions.
function lowerwing() {
  fill(240, 196, 73);
  beginShape();
  vertex(470, mothY - 10); //point
  vertex(700, mothY + 10); //point
  vertex(750, mothY); //point
  vertex(235, mothY - 10);
  vertex(225, mothY + 40);
  vertex(230, mothY + 60);
  vertex(250, mothY + 80);
  vertex(350, mothY + 90);
  vertex(450, mothY + 70); //point
  vertex(460, mothY + 20); //point
  endShape();
  lowerwingdesign(); //draws the main design for the lower wing
  lowerwingdesigndark(); //draws the dark zigzag for the lower wing
}



//This draw the moth's lower wing design.
function lowerwingdesign() {
  fill(202, 143, 63);
  beginShape();
  vertex(440, mothY + 40); //point
  vertex(420, mothY + 60);
  vertex(400, mothY + 40); //point
  vertex(370, mothY + 60);
  vertex(340, mothY + 40);
  vertex(320, mothY + 65);
  vertex(295, mothY + 40);
  vertex(275, mothY + 60);
  vertex(260, mothY + 50);
  vertex(225, mothY + 40);
  vertex(230, mothY + 60);
  vertex(250, mothY + 80);
  vertex(350, mothY + 90);
  vertex(450, mothY + 70); //point
  vertex(460, mothY + 20); //point
  endShape();
}

//This draw the moth's lower wing shaded part.
function lowerwingdesigndark() {
  fill(34, 32, 19);
  beginShape();
  vertex(470, mothY); //point
  vertex(420, mothY + 55);
  vertex(400, mothY + 35); //point
  vertex(370, mothY + 55);
  vertex(340, mothY + 35);
  vertex(320, mothY + 60);
  vertex(295, mothY + 35);
  vertex(275, mothY + 55);
  vertex(270, mothY + 50);
  vertex(260, mothY + 35);
  vertex(250, mothY + 45);
  vertex(225, mothY + 25);
  vertex(225, mothY + 45);
  vertex(225, mothY + 40);
  vertex(250, mothY + 60);
  vertex(260, mothY + 50);
  vertex(270, mothY + 65);
  vertex(275, mothY + 70);
  vertex(295, mothY + 50);
  vertex(320, mothY + 75);
  vertex(340, mothY + 50);
  vertex(370, mothY + 70);
  vertex(400, mothY + 50); //point
  vertex(420, mothY + 70);
  vertex(455, mothY + 35); //point
  endShape();
}


//This draw the moth's larger body section along with its design details.
function backside() {
  beginShape(); //Moth's backside
  noStroke();
  fill(146, 94, 36);
  vertex(515, mothY - 25);
  vertex(530, mothY - 10);
  vertex(540, mothY + 20);
  vertex(550, mothY + 70);
  vertex(540, mothY + 160);
  vertex(530, mothY + 190);
  vertex(505, mothY + 220);
  vertex(495, mothY + 220);
  vertex(470, mothY + 190);
  vertex(460, mothY + 160);
  vertex(450, mothY + 70);
  vertex(460, mothY + 20);
  vertex(470, mothY - 10);
  vertex(485, mothY - 25);
  endShape();
  bluestripe(); //draws the large blue stripe
  bodystripes(); //draws the body stripes
}

//This draw the moth's blue strip on the bodice
function bluestripe() {
  beginShape(); //Moth's blue stripe
  fill(95, 127, 152);
  vertex(515, mothY - 25);
  vertex(500, mothY - 10);
  vertex(520, mothY + 20);
  vertex(530, mothY + 70);
  vertex(520, mothY + 160);
  vertex(515, mothY + 190);
  vertex(505, mothY + 220);
  vertex(495, mothY + 220);
  vertex(485, mothY + 190);
  vertex(480, mothY + 160);
  vertex(470, mothY + 70);
  vertex(480, mothY + 20);
  vertex(500, mothY - 10);
  vertex(485, mothY - 25);
  endShape();
}

//This draw the moth's dark rings on the bodice
function bodystripes() {
  strokeWeight("15"); //Moth dark stripes
  stroke(25, 29, 37);
  noFill();
  arc(500, mothY + 195, 41, 10, PI, TWO_PI);
  arc(500, mothY + 155, 71, 22, PI, TWO_PI);
  arc(500, mothY + 115, 81, 32, PI, TWO_PI);
  arc(500, mothY + 75, 89, 40, PI, TWO_PI);
  arc(500, mothY + 35, 78, 40, PI, TWO_PI);
}

//This draw the moth's flashing head and torso with design
function headtorso() {
  noStroke(); //Moth head and torso
  beginShape();
  fill(random(50), random(80), random(120));
  vertex(490, mothY - 110);
  vertex(510, mothY - 120);
  vertex(525, mothY - 100);
  vertex(530, mothY - 85);
  vertex(540, mothY - 70);
  vertex(550, mothY - 35);
  vertex(540, mothY - 5);
  vertex(510, mothY + 20);
  vertex(490, mothY + 20);
  vertex(460, mothY - 5);
  vertex(450, mothY - 35);
  vertex(460, mothY - 70);
  vertex(470, mothY - 85);
  vertex(475, mothY - 100);
  vertex(490, mothY - 120);
  vertex(510, mothY - 110);
  endShape();
  deathhead(); //draws the skull
}

//This draw the moth's skull design
function deathhead() {
  beginShape(); //moth skull
  fill(199, 201, 211);
  vertex(510, mothY - 65);
  vertex(525, mothY - 55);
  vertex(530, mothY - 45);
  vertex(525, mothY - 25);
  vertex(515, mothY - 10);
  vertex(505, mothY - 25);
  vertex(495, mothY - 25);
  vertex(485, mothY - 10);
  vertex(475, mothY - 25);
  vertex(470, mothY - 45);
  vertex(475, mothY - 55);
  vertex(490, mothY - 65);
  endShape();
  fill(25, 29, 37);
  ellipse(485, mothY - 40, 18, 14);
  ellipse(515, mothY - 40, 18, 14);
}


//This draw the moth's upper wing
function upperwing() {
  beginShape();
  fill(34, 37, 41);
  vertex(460, mothY - 70); //point
  vertex(350, mothY - 120);
  vertex(220, mothY - 150);
  vertex(170, mothY - 160);
  vertex(150, mothY - 150);
  vertex(140, mothY - 130);
  vertex(160, mothY - 90);
  vertex(180, mothY - 50);
  vertex(250, mothY);
  vertex(300, mothY + 10);
  vertex(400, mothY + 5);
  vertex(460, mothY - 5); //point
  vertex(450, mothY - 35); //point
  endShape();
  upperwingdesign(); //calls the upper wing design function
  upperwingdesignlight(); //calls the light wing design function
}



//This draw the moth's upper wing design
function upperwingdesign() {
  beginShape();
  fill(36, 17, 13);
  vertex(460, mothY - 70); //point
  vertex(360, mothY - 100);
  vertex(230, mothY - 125);
  vertex(340, mothY - 90);
  vertex(420, mothY - 65);
  vertex(310, mothY - 80);
  vertex(210, mothY - 70);
  vertex(330, mothY - 60);
  vertex(440, mothY - 45);
  vertex(330, mothY - 40);
  vertex(210, mothY - 45);
  vertex(320, mothY - 20);
  vertex(445, mothY - 20);
  vertex(410, mothY - 10);
  vertex(320, mothY);
  vertex(250, mothY);
  vertex(300, mothY + 10);
  vertex(400, mothY + 5);
  vertex(460, mothY - 5); //point
  vertex(450, mothY - 35); //point
  endShape();
}


//This draw the moth's upper wing's white design
function upperwingdesignlight() {
  beginShape();
  fill(199, 201, 211);
  vertex(220, mothY - 110); //point
  vertex(185, mothY - 125);
  vertex(210, mothY - 130);
  vertex(190, mothY - 140);
  vertex(180, mothY - 140);
  vertex(170, mothY - 130);
  vertex(165, mothY - 120);
  vertex(170, mothY - 90);
  vertex(200, mothY - 60);
  vertex(250, mothY - 50);
  vertex(200, mothY - 80);
  vertex(240, mothY - 85);
  vertex(190, mothY - 95);
  endShape();
}

