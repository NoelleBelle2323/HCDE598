// Steven Universe Donut Decorator
// by Kellie Dunn, for HCDE 598C, Intro to Programming
// Autumn 2018
// Final Project

// This interactive story is based on characters from the 
// cartoon show "Steven Universe".


///////////////////////////////////////
// constants to set up the environment:
///////////////////////////////////////

const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 600;
const bgColor = "#0973a9";


///////////////////////////////////////////////////
// set variables for drawing all of the graphics:
///////////////////////////////////////////////////

var donutX = 350;
var donutY = 300;

var garnetX = 620;
var garnetY = 70;

var pearlX = 600;
var pearlY = 70;

var amethystX = 610;
var amethystY = 70;

var stevenX = 80;
var stevenY = 95;


/////////////////////////////////////////////
//make functions to draw all of the graphics:
/////////////////////////////////////////////

// make a function to draw the PLAIN DONUT
function drawDonut(x, y) {
  stroke("black");
  fill("#cc9900");
  ellipse(donutX, donutY, 300, 300);
  //draw donut hole
  stroke("black");
  fill(bgColor);
  ellipse(donutX, donutY, 80, 80);
}

// make a function to draw STEVEN
function drawSteven(x, y) {
  //Steven's hair
  ellipseMode(CENTER); // Set ellipseMode to CENTER
  strokeWeight(0);
  stroke("black");
  fill("black"); // Set fill to black
  ellipse(stevenX - 53, stevenY - 1, 40, 40);
  ellipse(stevenX - 46, stevenY - 37, 44, 44);
  ellipse(stevenX - 15, stevenY - 66, 45, 45);
  ellipse(stevenX + 22, stevenY - 61, 40, 40);
  ellipse(stevenX + 29, stevenY - 28, 30, 40);
  //Steven's face
  ellipseMode(CENTER); // Set ellipseMode to CENTER
  strokeWeight(1);
  fill("#ffc8b2"); // Set fill to Steven skin tone
  ellipse(stevenX, stevenY, 90, 75);
  strokeWeight(0);
  ellipse(stevenX, stevenY - 21, 70, 80);
  //Steven's ear
  ellipseMode(CENTER); // Set ellipseMode to CENTER
  strokeWeight(0);
  fill("#ffc8b2"); // Set fill to Steven skin tone
  ellipse(stevenX - 39, stevenY - 18, 30, 20);
  //Steven's eyebrows
  stroke("black");
  strokeWeight(9);
  line(stevenX - 24, stevenY - 44, stevenX - 10, stevenY - 48);
  line(stevenX + 10, stevenY - 50, stevenX + 25, stevenY - 43);
  //Steven's eyes
  ellipseMode(CENTER);
  strokeWeight(1);
  fill("white");
  ellipse(stevenX - 14, stevenY - 18, 20, 25);
  ellipse(stevenX + 16, stevenY - 22, 20, 25);
  fill("black");
  ellipse(stevenX - 14, stevenY - 18, 8, 12);
  ellipse(stevenX + 16, stevenY - 22, 8, 12);
  //Steven's nose
  line(stevenX + 2, stevenY - 7, stevenX + 2, stevenY);
  line(stevenX + 7, stevenY - 7, stevenX + 7, stevenY);
  //Steven's mouth
  noFill();
  strokeWeight(1);
  curve(stevenX - 5, stevenY - 5, stevenX - 20, stevenY + 10, stevenX + 21, stevenY + 13, stevenX + 15, stevenY - 7);
}

// make a function to draw PEARL
function drawPearl(x, y) {
  strokeWeight(1);
  //Pearl's hair
  fill("#ffcc99")
  beginShape();
  vertex(pearlX - 4, pearlY - 46);
  vertex(pearlX + 32, pearlY - 39);
  vertex(pearlX + 60, pearlY - 21);
  vertex(pearlX + 81, pearlY - 8);
  vertex(pearlX + 66, pearlY - 2);
  vertex(pearlX + 76, pearlY + 3);
  vertex(pearlX + 11, pearlY + 42);
  endShape();
  //Pearl's face
  ellipseMode(CENTER); // Set ellipseMode to CENTER
  fill("#fffff2"); // Set fill to Pearl skin tone
  ellipse(pearlX, pearlY, 60, 90); // Draw ellipse using CENTER mode
  //Pearl's nose
  line(pearlX - 10, pearlY - 3, pearlX - 30, pearlY + 2);
  line(pearlX - 30, pearlY + 2, pearlX - 16, pearlY + 10);
  //Pearl's eyes
  ellipseMode(CENTER);
  fill("white");
  ellipse(pearlX - 18, pearlY - 11, 15, 20);
  fill("#ccffff");
  ellipse(pearlX - 18, pearlY - 11, 5, 10)
  fill("white");
  ellipse(pearlX + 5, pearlY - 11, 15, 20);
  fill("#ccffff");
  ellipse(pearlX + 5, pearlY - 11, 5, 10);
  //Pearl's mouth
  noFill();
  strokeWeight(1);
  curve(pearlX - 23, pearlY + 11, pearlX - 13, pearlY + 23, pearlX + 6, pearlY + 18, pearlX + 10, pearlY + 6);
  //Pearl's pearl
  ellipseMode(CENTER);
  fill("white");
  ellipse(pearlX - 4, pearlY - 34, 20, 25);
}

// make a function to draw GARNET
function drawGarnet(x, y) {
  //Garnet's hair
  rectMode(CENTER); // Set rectMode to CENTER
  fill(0); // Set fill to black
  rect(garnetX, garnetY, 135, 110, 20); // Draw gray rect using CENTER mode with rounded corners, each having a radius of 20.
  //Garnet's face
  rectMode(CENTER); // Set rectMode to CENTER
  strokeWeight(0);
  fill("#cc3399"); // Set fill to Garnet skin tone
  rect(garnetX, garnetY + 10, 45, 55, 10); // Draw rect using CENTER mode with rounded corners, each having a radius of 10.
  rect(garnetX, garnetY + 46, 20, 18);
  //Garnet's glasses
  strokeWeight(1);
  stroke(0)
  fill("#ccffff");
  beginShape();
  vertex(garnetX - 23, garnetY - 18);
  vertex(garnetX - 23, garnetY + 2);
  vertex(garnetX - 12, garnetY + 11);
  vertex(garnetX, garnetY + 2);
  vertex(garnetX + 12, garnetY + 11);
  vertex(garnetX + 23, garnetY + 2);
  vertex(garnetX + 23, garnetY - 18);
  endShape(CLOSE);
  //Garnet's mouth
  noFill();
  strokeWeight(1);
  curve(garnetX - 7, garnetY + 40, garnetX - 7, garnetY + 20, garnetX + 7, garnetY + 20, garnetX + 7, garnetY + 40);
  line(garnetX - 8, garnetY + 25, garnetX + 8, garnetY + 25);
  curve(garnetX - 7, garnetY + 13, garnetX - 7, garnetY + 30, garnetX + 7, garnetY + 30, garnetX + 7, garnetY + 3);
}

// make a function to draw AMETHYST
function drawAmethyst(x, y) {
  strokeWeight(1);
  //Amethyst's face
  ellipseMode(CENTER);
  fill("#cc99cc");
  ellipse(amethystX, amethystY, 90, 90);
  //Amethyst's eye
  ellipseMode(CENTER);
  fill("white");
  ellipse(amethystX - 19, amethystY - 5, 30, 30);
  fill("black");
  ellipse(amethystX - 19, amethystY - 5, 15, 14);
  //Amethyst's mouth
  noFill();
  strokeWeight(1);
  curve(amethystX - 14, amethystY + 35, amethystX - 12, amethystY + 23, amethystX + 7, amethystY + 23, amethystX + 9, amethystY + 35);
  line(amethystX - 16, amethystY + 28, amethystX + 11, amethystY + 28);
  curve(amethystX - 14, amethystY + 14, amethystX - 14, amethystY + 34, amethystX + 9, amethystY + 34, amethystX + 9, amethystY + 14);
  //Amethyst's hair
  fill("#dacff3")
  beginShape();
  vertex(amethystX - 18, amethystY - 28);
  vertex(amethystX + 4, amethystY - 3);
  vertex(amethystX + 27, amethystY + 76);
  vertex(amethystX + 50, amethystY + 44);
  vertex(amethystX + 77, amethystY + 35);
  vertex(amethystX + 69, amethystY - 5);
  vertex(amethystX + 22, amethystY - 53);
  vertex(amethystX - 32, amethystY - 51);
  vertex(amethystX - 65, amethystY - 14);
  vertex(amethystX - 68, amethystY + 41);
  vertex(amethystX - 53, amethystY + 56);
  vertex(amethystX - 18, amethystY - 28);
  endShape();
}

// make a function to draw the PEARL POINTS
function drawPearlPoint(x, y, pearlPointSize) {
  strokeWeight(1);
  //Pearl's hair
  fill("#ffcc99")
  beginShape();
  vertex(x - 4, y - 46);
  vertex(x + 32, y - 39);
  vertex(x + 60, y - 21);
  vertex(x + 81, y - 8);
  vertex(x + 66, y - 2);
  vertex(x + 76, y + 3);
  vertex(x + 11, y + 42);
  endShape();
  //Pearl's face
  ellipseMode(CENTER); // Set ellipseMode to CENTER
  fill("#fffff2"); // Set fill to Pearl skin tone
  ellipse(x, y, 60, 90); // Draw ellipse using CENTER mode
  //Pearl's nose
  line(x - 10, y - 3, x - 30, y + 2);
  line(x - 30, y + 2, x - 16, y + 10);
  //Pearl's eyes
  ellipseMode(CENTER);
  fill("white");
  ellipse(x - 18, y - 11, 15, 20);
  fill("#ccffff");
  ellipse(x - 18, y - 11, 5, 10)
  fill("white");
  ellipse(x + 5, y - 11, 15, 20);
  fill("#ccffff");
  ellipse(x + 5, y - 11, 5, 10);
  //Pearl's mouth
  noFill();
  strokeWeight(1);
  curve(x - 23, y + 11, x - 13, y + 23, x + 6, y + 18, x + 10, y + 6);
  //Pearl's pearl
  ellipseMode(CENTER);
  fill("white");
  ellipse(x - 4, y - 34, 20, 25);
}

// mouse click Pearl Point generator variables
function mouseClicked() {
  //  print(mouseX, mouseY);
  mousePearlX = mouseX
  mousePearlY = mouseY
}

// make a function to draw Garnet's FUTURE DONUT BITE
function drawDonutBite() {
  noStroke();
  fill(bgColor);
  ellipse(260, 200, 90);
  ellipse(230, 240, 40);
  ellipse(268, 235, 40);
  ellipse(295, 215, 40);
  ellipse(292, 180, 40);
}

// make a function to draw STEVEN'S PINK BUBBLE
function drawBubble() {
  strokeWeight(4);
  stroke(255, 204, 255);
  fill(255, 204, 255, 150);
  ellipse(donutX, donutY, 350, 350);
}

// make a function that draws FROSTING on the donut
function drawDonutFrosting(x, y) {
  noStroke();
  // make white frosting ellipse
  fill("#ffffff");
  ellipse(x, y, 270, 270);
  // show inner donut color
  fill("#cc9900");
  ellipse(x, y, 120, 120);
  // redraw donut hole
  stroke("black");
  fill(bgColor);
  ellipse(x, y, 80, 80);
}

// make a function that draws STATIC SPRINKLES on the donut
function drawStaticSprinkles() {
  noStroke();
  fill("red");
  ellipse(268, 232, 10, 10);
  ellipse(340, 204, 10, 10);
  ellipse(373, 227, 10, 10);
  ellipse(267, 375, 10, 10);
  ellipse(446, 354, 10, 10);
  fill("purple");
  ellipse(330, 417, 10, 10);
  ellipse(440, 246, 10, 10);
  ellipse(231, 274, 10, 10);
  ellipse(439, 229, 10, 10);
  fill("green");
  ellipse(419, 403, 10, 10);
  ellipse(384, 372, 10, 10);
  ellipse(467, 326, 10, 10);
  ellipse(417, 285, 10, 10);
  fill("blue");
  ellipse(270, 338, 10, 10);
  ellipse(303, 190, 10, 10);
  ellipse(393, 196, 10, 10);
  fill("orange");
  ellipse(310, 375, 10, 10);
  ellipse(409, 373, 10, 10);
  ellipse(272, 256, 10, 10);
}

// make a function that returns a random color for Amethyst's SPRINKLES
function getColor() {
  // generate random values for the r, g, b values
  return color(random(0, 255), random(0, 255), random(0, 255));
}

// set constants and variables for Amethyst's SPRINKLES:
const sprinkleSize = 10;
var sprinkleX = []; // make an array for sprinkle x variables
var sprinkleY = []; // make an array for sprinkle y variables
var sprinkleXSpeed = []; // make an array for sprinkle x speed variable
var sprinkleYSpeed = []; // make an array for sprinkle y speed variable
var sprinkleSpeed = 10; // This variable is the maximum sprinkle speed
var sprinkleColor = []; // make an array to randomize each sprinkle color


///////////////////////////////
// make variables for each page
///////////////////////////////

// The different pages/scenes will be set to true when
// when the appropriate choices are made to land us
// on each page. Only one of these onPage# variables
// will ever be true at a time.
var onPage1 = true; // Intro Page (we always start on this page) 
var onPage2 = false; // Plain Donut Page
var onPage3 = false; // Pearl Page
var onPage4 = false; // Garnet Page
var onPage5 = false; // Amethyst Page
var onPage6 = false; // Steven Bubble Page


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function setup() {

  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(bgColor);

  // initialize Amethyst's sprinkles:
  // initialize colors for sprinkles 
  // initialize sprinkles x and y coords
  // randomly assign x and y coordinates betweeen 100 and 500
  // round will make sure the number gets rounded to closest integer
  for (i = 0; i < 100; i = i + 1) {

    sprinkleColor[i] = getColor();

    sprinkleX[i] = round(random(100, 500));
    sprinkleY[i] = round(random(100, 500));

    // randomly assign x and y speeds from speeds array  
    // round will make sure the number gets rounded to closest integer
    sprinkleXSpeed[i] = round(random(0, sprinkleSpeed));
    sprinkleYSpeed[i] = round(random(0, sprinkleSpeed));
    //  print(sprinkleXSpeed[i] + " " + sprinkleYSpeed[i]);
  }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function draw() {

  ////////////////////////////////////////////////////////////////
  // Create the structure that allows us to navigate between pages 
  ////////////////////////////////////////////////////////////////

  if (onPage1) {
    background(bgColor);
    drawPage1(); // call the function that draws page 1 Intro here
    if (key == "D" || key == "d") {
      onPage1 = false; // we're done with page 1
      onPage2 = true; // if D is chosen, we'll go to page 2 Donut
    }

  } else if (onPage2) {
    background(bgColor);
    drawPage2(); // call the function that draws page 2 Donut here
    if (key == "P" || key == "p") {
      onPage2 = false; // we're done with page 2
      onPage3 = true; // if P is chosen, we'll go to page 3 Pearl
    } else if (key == "G" || key == "g") {
      onPage2 = false; // we're done with page 2
      onPage4 = true; // if G is chosen we'll go to page 4 Garnet
    } else if (key == "A" || key == "a") {
      onPage2 = false; // we're done with page 2
      onPage5 = true; // if A is chosen we'll go to page 5 Amethyst
    }

  } else if (onPage3) {
    background(bgColor);
    drawPage3(); // call the function that draws page 3 Pearl here
    if (key == "D" || key == "d") {
      onPage3 = false; // we're done with page 3
      onPage2 = true; // if D is chosen, we'll go to page 2 Donut
    } else if (key == "G" || key == "g") {
      onPage3 = false; // we're done with page 3
      onPage4 = true; // if G is chosen we'll go to page 4 Garnet
    } else if (key == "A" || key == "a") {
      onPage3 = false; // we're done with page 3
      onPage5 = true; // if A is chosen we'll go to page 5 Amethyst
    }

  } else if (onPage4) {
    background(bgColor);
    drawPage4(); // call the function that draws page 4 Garnet here
    if (key == "D" || key == "d") {
      onPage4 = false; // we're done with page 4
      onPage2 = true; // if D is chosen, we'll go to page 2 Donut
    } else if (key == "P" || key == "p") {
      onPage4 = false; // we're done with page 4
      onPage3 = true; // if P is chosen, we'll go to page 3 Pearl
    } else if (key == "A" || key == "a") {
      onPage4 = false; // we're done with page 4
      onPage5 = true; // if A is chosen we'll go to page 5 Amethyst
    }

  } else if (onPage5) {
    background(bgColor);
    drawPage5(); // call the function that draws page 5 Amethyst here
    if (key == "D" || key == "d") {
      onPage5 = false; // we're done with page 5
      onPage2 = true; // if D is chosen, we'll go to page 2 Donut
    } else if (key == "P" || key == "p") {
      onPage5 = false; // we're done with page 5
      onPage3 = true; // if P is chosen, we'll go to page 3 Pearl
    } else if (key == "G" || key == "g") {
      onPage5 = false; // we're done with page 5
      onPage4 = true; // if G is chosen we'll go to page 4 Garnet
    } else if (key == "S" || key == "s") {
      onPage5 = false; // we're done with page 5
      onPage6 = true; // if S is chosen we'll go to page 6 Steven Bubble
    }

  } else if (onPage6) {
    background(bgColor);
    drawPage6(); // call the function that draws page 6 Steven Bubble here
    if (key == "D" || key == "d") {
      onPage6 = false; // we're done with page 6
      onPage2 = true; // if D is chosen, we'll go to page 2 Donut
    }
  }
}

/////////////////////////////////////////
//// Page functions are defined below
////////////////////////////////////////

// Page 1: Steven Universe Donut Decorator Intro Page 
// start here, never see again
function drawPage1() {
  push();

  //title of story: Steven Universe Donut Decorator!
  textAlign(CENTER);
  textSize(36);
  fill("#ffff66");
  stroke("black");
  text("Steven Universe", 475, 100);
  textSize(48);
  text("Donut Decorator!", 475, 150);

  // draw line to Steven's speech
  stroke("white");
  strokeWeight(2);
  line(250, 240, 350, 300);

  // write Steven's speech "I want a fancy donut!"
  textAlign(LEFT);
  stroke("black");
  fill("white");
  textSize(24);
  text("I want a fancy donut!", 360, 310);

  // write instructions to press D for a new donut
  textAlign(CENTER);
  textSize(36);
  fill("#ffff66");
  stroke("black");
  text("press D to get a new donut!", 350, 550);

  //draw a big STEVEN
  scale(2); //draw Steven double size on this page
  drawSteven(stevenX, stevenY);

  pop();
}

// Page 2: Plain Donut Page - if D is chosen from intro
// this page resets a new plain donut when you return to it
function drawPage2() {
  push();

  // draw base donut
  drawDonut(donutX, donutY);

  // draw line to Steven's speech
  stroke("white");
  strokeWeight(2);
  line(140, 105, 215, 60);

  // write Steven's speech "Aww, this donut is too plain! Maybe the Crystal Gems can help!"
  textAlign(LEFT);
  stroke("black");
  fill("white");
  textSize(24);
  text("Aww, this donut is too plain!", 220, 65);
  text("Maybe the Crystal Gems can help!", 220, 90);

  // characters menu
  // write instructions to ask the Gems for help

  // write "Press P to ask Pearl"
  textAlign(CENTER);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press P", 160, 550);
  text("to ask Pearl", 160, 575);

  // write "Press G to ask Garnet"
  textAlign(CENTER);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press G", 350, 550);
  text("to ask Garnet", 350, 575);

  //write "Press A to ask Amethyst"
  textAlign(CENTER);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press A", 540, 550);
  text("to ask Amethyst", 540, 575);


  //draw STEVEN
  drawSteven(stevenX, stevenY);

  pop();
}

// Page 3: Pearl Page - if P is chosen
// Pearl gives the donut a Pearl Point when you click on it
function drawPage3() {
  push();

  // draw base donut
  drawDonut(donutX, donutY);

  // mouse click Pearl Point generator 
  push()
  var pearlPointSize = scale(0.5);
  drawPearlPoint(mousePearlX * 2, mousePearlY * 2, pearlPointSize);
  pop()

  // draw line to Pearl's speech
  stroke("white");
  strokeWeight(2);
  line(480, 70, 560, 90);

  // write Pearl's speech "I'll give it a Pearl Point! Try clicking on the donut!"
  textAlign(RIGHT);
  stroke("black");
  fill("white");
  textSize(24);
  text("I'll give it a Pearl Point!", 470, 65);
  text("Try clicking on the donut!", 470, 90);

  // draw line to Steven's speech
  stroke("white");
  strokeWeight(2);
  line(135, 115, 190, 127);

  // write Steven's speech "Hmm, not quite what I had in mind..."
  textAlign(LEFT);
  stroke("black");
  fill("white");
  textSize(24);
  text("Hmm, not quite what I had in mind...", 200, 135);

  // characters menu
  // write instructions to ask the Gems for help

  // write "Press D to get a new donut"
  textAlign(LEFT);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press D", 10, 390);
  text("to get a", 10, 415);
  text("new donut", 10, 440)

  // write "Press G to ask Garnet"
  textAlign(CENTER);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press G", 350, 550);
  text("to ask Garnet", 350, 575);

  //write "Press A to ask Amethyst"
  textAlign(CENTER);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press A", 540, 550);
  text("to ask Amethyst", 540, 575);

  // draw PEARL
  drawPearl(pearlX, pearlY);

  //draw STEVEN
  drawSteven(stevenX, stevenY);

  pop();
}


// Page 4: Garnet Page - if G is chosen
// Garnet uses her future vision to show a bite taken out of the donut
function drawPage4() {
  push();

  // draw base donut
  drawDonut(donutX, donutY);

  // Future Vision donut bite generator
  // F key controls Garnet's Future Vision
  if (key == "F" || key == "f") {
    drawDonutBite(); // call the function that draws donut bite; // 
  }

  // draw line to Garnet's speech
  stroke("white");
  strokeWeight(2);
  line(480, 70, 540, 90);

  // write Garnet's speech "I'll use my future vision. Try pressing F."
  textAlign(RIGHT);
  stroke("black");
  fill("white");
  textSize(24);
  text("I'll use my future vision.", 470, 65);
  text("Try pressing F.", 470, 90);

  // draw line to Steven's speech
  stroke("white");
  strokeWeight(2);
  line(135, 115, 190, 127);

  // write Steven's speech "I'm looking forward to this part!"
  textAlign(LEFT);
  stroke("black");
  fill("white");
  textSize(24);
  text("I'm looking forward to this part!", 200, 135);

  // characters menu
  // write instructions to ask the Gems for help

  // write "Press D to get a new donut"
  textAlign(LEFT);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press D", 10, 390);
  text("to get a", 10, 415);
  text("new donut", 10, 440)

  // write "Press P to ask Pearl"
  textAlign(CENTER);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press P", 160, 550);
  text("to ask Pearl", 160, 575);

  //write "Press A to ask Amethyst"
  textAlign(CENTER);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press A", 540, 550);
  text("to ask Amethyst", 540, 575);


  // draw GARNET
  drawGarnet(garnetX, garnetY);

  //draw STEVEN
  drawSteven(stevenX, stevenY);

  pop();
}


// Page 5: Amethyst Page- if A is chosen
// Amethyst causes a party of bouncing sprinkles to appear
function drawPage5() {
  push();

  // draw base donut as background
  drawDonut(donutX, donutY);

  // draw frosting on donut
  drawDonutFrosting(donutX, donutY);

  // draw and move sprinkles
  drawSprinkles();
  moveSprinkles();

  // This function will loop through our shapes array
  // and draw the all the shapes at the designated x,y position on the canvas.
  function drawSprinkles() {
    for (i = 0; i < 100; i = i + 1) {
      drawSprinkle(sprinkleX[i], sprinkleY[i], sprinkleSize, sprinkleColor[i]);
    }
  }

  // This function will loop through our shapes array and move the shapes accordingly.
  function moveSprinkles() {
    // this is where you will want to loop through shapes and shapesSpeeds
    // for each circle you will want to get the X, Y coordinate and the speed on the X and Y axis
    // check if shape is outside canvas
    for (i = 0; i < 100; i = i + 1) {
      if (sprinkleX[i] < 0 || sprinkleX[i] > CANVAS_WIDTH - sprinkleSize) {
        // change X direction
        sprinkleXSpeed[i] = sprinkleXSpeed[i] * (-1);
      } else if (sprinkleY[i] < 0 || sprinkleY[i] > CANVAS_HEIGHT - sprinkleSize) {
        // change Y direction
        sprinkleYSpeed[i] = sprinkleYSpeed[i] * (-1);
      } else if (sprinkleX[i] < 0 || sprinkleY[i] < 0 || sprinkleX[i] > CANVAS_WIDTH || sprinkleY[i] > CANVAS_HEIGHT) {
        // if anything goes wrong (sprinkle is outside canvas) just reset coords
        sprinkleX[i] = CANVAS_WIDTH / 2;
        sprinkleY[i] = CANVAS_HEIGHT / 2;
      }
      // move shape
      sprinkleX[i] = sprinkleX[i] + sprinkleXSpeed[i];
      sprinkleY[i] = sprinkleY[i] + sprinkleYSpeed[i];
    }
  }

  // Function to draw a sprinkle at sX, sY with size = sSize and color = sColor
  function drawSprinkle(sX, sY, sSize, sColor) {
    ellipseMode(CORNER);
    noStroke();
    fill(sColor);
    ellipse(sX, sY, sSize, sSize);
  }

  // Function that returns a random color for the sprinkles.
  function getColor() {
    // generate random values for the r, g, b values
    return color(random(0, 255), random(0, 255), random(0, 255));
  }

  // draw line to Amethyst's speech
  stroke("white");
  strokeWeight(2);
  line(480, 70, 535, 90);

  // write Amethyst's speech "FROSTING AND SPRINKLES!"
  textAlign(RIGHT);
  stroke("black");
  fill("white");
  textSize(24);
  text("FROSTING AND SPRINKLES!", 470, 65);

  // draw line to Steven's speech
  stroke("white");
  strokeWeight(2);
  line(135, 115, 190, 127);

  // write Steven's speech "YES!!!"
  textAlign(LEFT);
  stroke("black");
  fill("white");
  textSize(24);
  text("YES!!!", 200, 135);

  // characters menu
  // write instructions to ask the Gems for help

  // write "Press S for Steven to bubble the donut"
  textAlign(LEFT);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press S", 10, 180);
  text("for Steven", 10, 205);
  text("to bubble", 10, 230)
  text("the donut", 10, 255)

  // write "Press D to get a new donut"
  textAlign(LEFT);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press D", 10, 390);
  text("to get a", 10, 415);
  text("new donut", 10, 440)

  // write "Press P to ask Pearl"
  textAlign(CENTER);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press P", 160, 550);
  text("to ask Pearl", 160, 575);

  // write "Press G to ask Garnet"
  textAlign(CENTER);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press G", 350, 550);
  text("to ask Garnet", 350, 575);

  // draw AMETHYST
  drawAmethyst(amethystX, amethystY);

  //draw STEVEN
  drawSteven(stevenX, stevenY);

  pop();
}


// Page 6: Steven Bubble Page- if S is chosen
// Steven captures the donut inside a pink bubble
function drawPage6() {
  push();

  // draw base donut as background
  drawDonut(donutX, donutY);

  // draw donut frosting
  drawDonutFrosting(donutX, donutY)

  // draw static sprinkles on donut
  drawStaticSprinkles();

  //draw Steven's Bubble
  drawBubble();

  // draw line to Steven's speech
  stroke("white");
  strokeWeight(2);
  line(140, 105, 215, 60);

  // write Steven's speech "Yum! I better save this for later!"
  textAlign(LEFT);
  stroke("black");
  fill("white");
  textSize(24);
  text("Yum!", 220, 65);
  text("I better save this for later!", 220, 90);

  // menu
  // write instructions to start over

  // write "Press D to get a new donut"
  textAlign(LEFT);
  textSize(24);
  fill("#ffff66");
  stroke("black");
  text("press D", 10, 390);
  text("to get a", 10, 415);
  text("new donut", 10, 440)

  //draw STEVEN
  drawSteven(stevenX, stevenY);


  pop();
}