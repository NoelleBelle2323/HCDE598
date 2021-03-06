//creates the canvas
function setup() {
  createCanvas(600, 600);
  background('black');

}

//sets a variable for all X coordinates of the house
var houseX = -250

function draw() {

  //*********************************
  // Helper mouse
  //*********************************
  /*
    // creates the grey rectangle in the upper left corner
    fill('grey');
    stroke('grey');
    rect(0, 0, 100, 20);

    // sets the color of the text
    fill('black')
    stroke('black');
    strokeWeight(1);

    // writes the text of the current coordinates in the corner
    textFont('arial');
    textSize(12);
    text("x: " + mouseX + " y: " + mouseY, 10, 15);
  */

  //*********************************
  // Story setup and scene
  //*********************************

  //moon
  fill('white');
  ellipse(500, 75, 100, 100);
  fill('black');
  ellipse(475, 75, 100, 100);

  //intro text
  if (houseX < -100) {
    drawChillerbox();
    text("Time for a scary story...", 25, 25, 375, 300);
  }

  //walk up to mansion text
  if (houseX > -100) {
    drawChillerbox();
    text("You're walking home when you come upon a decrepit old mansion. As you get closer, you hear what sounds like a puppy crying inside. Press E to enter, or W to keep walking.", 25, 25, 375, 300);
  }

  //draws the house and ground
  drawHouse();

  //moves the house
  if (houseX < 100) {
    houseX = houseX + 1;
  }

  //*********************************
  // Choose-your-own-adventure options --
  // Note: The only challenge with these options is that you can press any of these keys at any time, not necessarily the order in which they're laid out in the story. If I were to code this again, I think I'd use Y/N options, set variables for each page, and use "if" to validate the page the user is on - like the example posted to Slack.
  //*********************************

  //user options to enter the house or not
  if (key == "e") {
    drawYestoEnter();
  } else if (key == "w") {
    drawNotoEnter();
  }

  //user options to go upstairs or not
  if (key == "u") {
    drawYestoStairs();
  } else if (key == "x") {
    drawNotoStairs();
  }

  //user options to cuddle the cat or not
  if (key == "c") {
    drawYestoCat();
  } else if (key == "i") {
    drawNotoCat();
  }

  //user option to start story again
  if (key == "s") {
    drawHouse();
  }
}

//*********************************
// Additional functions
//*********************************

//function to draw house and ground
function drawHouse() {
  //background('black');
  fill('gray');
  stroke('black');
  strokeWeight(2);
  rect(houseX - 35, 350, 200, 200);
  rect(houseX - 35, 350, 200, 200);
  rect(houseX - 85, 450, 100, 100);
  rect(houseX + 115, 450, 100, 100);
  fill('#9C640C');
  quad(houseX - 50, 350, houseX + 180, 350, houseX + 135, 250, houseX - 15, 250);
  triangle(houseX - 85, 450, houseX + 15, 450, houseX - 35, 400);
  triangle(houseX + 115, 450, houseX + 218, 450, houseX + 165, 400);
  fill('#6E2C00');
  rect(houseX + 45, 485, 45, 65);
  fill('black');
  rect(houseX, 360, 25, 50);
  rect(houseX + 50, 360, 25, 50);
  rect(houseX + 100, 360, 25, 50);
  rect(houseX - 50, 475, 25, 50);
  rect(houseX + 155, 475, 25, 50);
  // rect(houseX + 45, 485, 45, 65);
  ellipse(houseX + 68, 450, 30, 30);

  //ground
  fill('green');
  rect(0, 550, 800, 50);
}

//function for black box with Chiller text and text size
function drawChillerbox() {
  fill('black');
  rect(0, 0, 430, 250);
  textSize(32);
  fill('white');
  textFont('Chiller');
}

//function for when user presses E to enter house
function drawYestoEnter() {
  drawChillerbox();
  text("You push the door open, and realize that the puppy's cries sound like they're coming from upstairs. Press U to go upstairs, or X to exit.", 25, 25, 400, 300);
}

//function for when user presses W to keep walking
function drawNotoEnter() {
  drawChillerbox();
  text("You keep walking, and a black cat crosses your path. Press C to pick it up and cuddle it, or I to ignore it.", 25, 25, 400, 300);
}

//function for when user presses U to go upstairs
function drawYestoStairs() {
  drawChillerbox();
  text("You find a fluffy wuffy puppy in the closet upstairs. You take it home and make it your new best friend. Press S to start again.", 25, 25, 400, 300);
}

//function for when user presses X to not go upstairs
function drawNotoStairs() {
  drawChillerbox();
  text("But what about the puppy? Press S to start again.", 25, 25, 400, 300);
}

//function for when user presses C cuddle cat
function drawYestoCat() {
  drawChillerbox();
  text("Aw, sweet kitty. You take it home and make it your new best friend. Press S to start again.", 25, 25, 400, 300);
}

//function for when user presses I to ignore cat
function drawNotoCat() {
  drawChillerbox();
  text("You arrive safely at your boring house. Press S to start again.", 25, 25, 400, 300);
}