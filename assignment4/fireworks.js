//*******************************
//Fireworks Show
//*******************************

//This program will draw different sized fireworks and people depending on where
//you click in the canvas.

function setup() {
  createCanvas(700, 700);
  background(0);

  //draw the grass field
  fill(67, 81, 72);
  rect(0, 450, 700, 350);
}

function draw() {

}

//Creating the function that allows you to click the mouse to make things happen
function mouseClicked() {
  if (mouseY >= 450) {
    makePeople(mouseX, mouseY);
  } else if (mouseY < 450) {
    makeFireworks(mouseX, mouseY);
  }
}

//////////
//PEOPLE//
//////////

//This is the function that will be used to create all the people
function makePeople(x, y, size) {

  //giving all the people a random size
  size = random(15, 25);

  stroke('black');

  ////////
  //HEAD//
  ////////
  var headColor = random(0, 550); //giving the head a random color

  fill(headColor);
  ellipse(x, y, size, size)

  ////////
  //BODY//
  ////////
  var bodyR = random(20, 220); //giving the body and arms random colors
  var bodyG = random(20, 220);
  var bodyB = random(20, 220);
  var bodyX = x - (size / 2); //setting the x value to the left size of the head
  var bodyY = y + (size / 2); //setting the y value to the bottom of the head

  fill(bodyR, bodyG, bodyB);
  rect(bodyX, bodyY, size, size) //this uses the same width and height as the head

  ////////
  //ARMS//
  ////////
  var leftArmX = bodyX - (size / 3); //setting the x value just outside the bodyX
  var rightArmX = bodyX + size;
  var armW = size / 3; //setting the arm width to be 1/3 the width of the head
  var armH = size / 1.5; //setting the height to be 1.5x the height of the head

  fill(bodyR, bodyG, bodyB);
  rect(rightArmX, bodyY, armW, armH);
  rect(leftArmX, bodyY, armW, armH);

  ////////
  //LEGS//
  ////////
  var legY = bodyY + size;
  var legH = size / 1.5;

  fill(14, 68, 107);
  rect(bodyX, legY, size, legH);
  line(bodyX + (size / 2), legY + (legH / 3), bodyX + (size / 2), legY + legH) //creates the
  //that distinguishes two legs
}

/////////////
//FIREWORKS//
/////////////

//This fuction is used to create and change the size of the fireworks
function makeFireworks(centerX, centerY, size2) {

  //Creating variables to give the fireworks random colors
  var c1 = random(66, 244);
  var c2 = random(66, 244);
  var c3 = random(66, 244);

  //Giving the fireworks a random color
  stroke(c1, c2, c3);

  //Changing the fireworks size
  size2 = random(10, 50); //gives the fireworks a random size if no key is pressed


  //Creating the lines for the fireworks
  line(centerX, centerY - 10, centerX, centerY - size2); //north line
  line(centerX + 10, centerY - 10, centerX + size2, centerY - size2); //northeast line
  line(centerX + 10, centerY, centerX + size2, centerY); //east line
  line(centerX + 10, centerY + 10, centerX + size2, centerY + size2); //southeast line
  line(centerX, centerY + 10, centerX, centerY + size2); //south line
  line(centerX - 10, centerY + 10, centerX - size2, centerY + size2); //southwest line
  line(centerX - 10, centerY, centerX - size2, centerY); //west line
  line(centerX - 10, centerY - 10, centerX - size2, centerY - size2); //northwest line
}