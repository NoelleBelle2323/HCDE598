var myColor = "purple";
var myLight = "lavender";
var eyeX = 50;
var eyeY = 100;
var eyeWidth = 40;
var eyeHeight = 40;
var noseX = 30;
var noseY = 140;
var mouthX = 20;
var mouthY = 180;
var RmouthX = 300;
var RmouthY = 220;


// defining these messages to be used in the functions drawing screens
var eyemessage = "Press 1 (left) or 2 (right) eyes";
var noseMessage = "Press 3 (left) or 4 (right) nose";
var mouthMessage = "Press 5 (left) or 6 (right) to choose mouth";
var continueMessage = "Choose parts of a face. Click to see eyes.";
var endMessage = "All Done";


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);


}

function draw() {
  // creates the grey rectangle in the upper left corner
  fill(200);
  noStroke();
  background(220);

  // this displays the message about how to continue in the interactive story
  textSize(20);
  fill(0);
  text(continueMessage, 10, height - 50);




  if (mouseButton) {

    Eyechoices();
    Lefteyes();
    Righteyes();


  }
  if (key == "1") {

    drawNoseScreen();
    Lefteyestocenter();
    leftNose();
    rightNose();

  } else if (key == "2") {
    drawNoseScreen();
    Righteyestocenter();
    leftNose();
    rightNose();


  }
  if (key == "3") {
    Lefteyestocenter();
    leftNosetocenter();
    drawMouthScreen();
    rightMouth();
    
  } else if (key == "4") {
    Righteyestocenter();
    rightNosetocenter();
    drawMouthScreen();
    rightMouth();
  }
  if (key == "5") {
    Lefteyestocenter();
    leftNosetocenter();
    leftMouthtocenter();

  } else if (key == "6") {
    Righteyestocenter();
    rightNosetocenter();
rightMouthtocenter();
  }
}

function Eyechoices() {
  background(100);
  textSize(20);
  fill(myLight);
  noStroke();
  text(eyemessage, 10, height - 100);
}

function LeftLabel1() {
  text("1", 30, 70, 70);
  fill("red");

}

function RightLabel2() {
  text("2", 10, 70, 300);
  fill("myLight");

}

function Lefteyes() {
  fill("red");
  ellipse(eyeX, eyeY, eyeWidth, eyeHeight - 10);
  ellipse(eyeX + eyeX + 10, eyeY, eyeWidth, eyeHeight - 10);
  fill(100);
  rect(150, 370, 400, 80);
}



function Righteyes() {
  fill("white");
  ellipse(eyeX + 250, eyeY, eyeWidth, eyeHeight + 10);
  ellipse(eyeX + eyeX + 260, eyeY, eyeWidth, eyeHeight + 10);
  fill(100);
  rect(150, 370, 400, 80);

}

function Righteyestocenter() {
  fill("white");
  ellipse(eyeX + 100, eyeY, eyeWidth, eyeHeight + 10);
  ellipse(eyeX + eyeX + 110, eyeY, eyeWidth, eyeHeight + 10);
  fill(100);
  rect(150, 370, 400, 80);
  //cover right eyes
  rect(eyeX + 250, eyeY, eyeWidth + 30, eyeHeight + 30);
  rect(eyeX + eyeX + 260, eyeY, eyeWidth + 30, eyeHeight + 30);
  //cover left eyes
  rect(eyeX, eyeY, eyeWidth, eyeHeight - 10);
  rect(eyeX + eyeX + 10, eyeY, eyeWidth, eyeHeight - 10);

}


function Lefteyestocenter() {
  fill("red");
  ellipse(eyeX + 110, eyeY, eyeWidth, eyeHeight - 10);
  ellipse(eyeX + eyeX + 120, eyeY, eyeWidth, eyeHeight - 10);
  fill(100);
  rect(150, 370, 400, 80);
  //cover right eyes
  rect(eyeX + 250, eyeY, eyeWidth + 30, eyeHeight + 30);
  rect(eyeX + eyeX + 260, eyeY, eyeWidth + 30, eyeHeight + 30);
  //cover left eyes
  rect(eyeX, eyeY, eyeWidth, eyeHeight - 10);
  rect(eyeX + eyeX + 10, eyeY, eyeWidth, eyeHeight - 10);

}


function drawNoseScreen() {
  textSize(20);
  noStroke();
  // cover text
  fill(100);
  rect(150, height - 100, 400, 80);

  fill("myLight")
  text(noseMessage, 10, height - 100);

  fill(100);
  rect(150, 370, 400, 80);

}

function leftNose() {
  fill(100);
  stroke("myLight");
  strokeWeight(4);
  bezier(noseX, noseY, noseX + 20, noseY + 40, noseX + 40, noseY + 20, noseX + 50, noseY);
  fill(100);
  strokeWeight(0);
  rect(150, 370, 400, 80);
}

function rightNose() {
  fill(100);
  stroke("myLight");
  strokeWeight(4);

  bezier(noseX + 280, noseY, noseX + 300, noseY + 70, noseX + 320, noseY + 35, noseX + 330, noseY);
  bezier(noseX + 260, noseY, noseX + 265, noseY + 10, noseX + 275, noseY + 5, noseX + 280, noseY);
  bezier(noseX + 330, noseY, noseX + 335, noseY + 10, noseX + 345, noseY + 5, noseX + 350, noseY);
  fill(100);
  strokeWeight(0);
  rect(150, 370, 400, 80);
}

function leftNosetocenter() {
  fill(100);
  stroke("myLight");
  strokeWeight(4);
  bezier(noseX + 130, noseY, noseX + 150, noseY + 40, noseX + 170, noseY + 20, noseX + 180, noseY);
  fill(100);
  strokeWeight(0);

  rect(noseX, noseY, 110, 50);
  rect(noseX + 300, noseY, 150, 100);
  rect(150, height - 100, 400, 80);
  fill("myLight")
  text(mouthMessage, 10, height - 100);
  leftMouth();

  //cover other noses
}

function rightNosetocenter() {
  fill(100);
  stroke("myLight");
  strokeWeight(4);

  bezier(noseX + 125, noseY, noseX + 145, noseY + 70, noseX + 165, noseY + 35, noseX + 175, noseY);
  bezier(noseX + 105, noseY, noseX + 115, noseY + 10, noseX + 120, noseY + 5, noseX + 125, noseY);
  bezier(noseX + 175, noseY, noseX + 180, noseY + 10, noseX + 190, noseY + 5, noseX + 195, noseY);
  fill(100);
  strokeWeight(0);

  rect(noseX + 300, noseY, 150, 100);
  rect(noseX, noseY, 110, 50);
  rect(150, height - 100, 400, 80);
  fill("myLight")
  text(mouthMessage, 10, height - 100);
  leftMouth();
  //cover other noses
}

function drawMouthScreen() {
  textSize(20);
  noStroke();
  fill(100);

}
function leftMouth(){
  bezier(mouthX, mouthY, mouthX+30, mouthY + 30, mouthX + 50, mouthY + 30, mouthX +80, mouthY);

}
function leftMouthtocenter(){
  bezier(mouthX+125, mouthY, mouthX+145, mouthY + 30, mouthX + 185, mouthY + 30, mouthX +205, mouthY);
fill(100);
  rect(mouthX+10, mouthY, 200, 100);
}

function rightMouth(){
    fill("myLight");
  bezier(RmouthX, RmouthY, RmouthX+30, RmouthY - 30, RmouthX + 50, RmouthY - 30, RmouthX +80, RmouthY);

}

function rightMouthtocenter(){
    fill("myLight");
  bezier(RmouthX-160, RmouthY, RmouthX-140, RmouthY - 30, RmouthX-100, RmouthY - 30, RmouthX-80, RmouthY);
  fill(100);
   rect(mouthX+10, mouthY, 200, 100);
}

function drawFinalScreen() {
  textSize(20);
  noStroke();
  fill("myLight");
  text(endMessage, 10, height - 100);
}