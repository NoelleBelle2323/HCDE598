//File: Final Project HHW
//Author: Holly Howson-Watt
//Date: 12/3/18
//Class: HCDE 598
//Email: hollyhw8@uw.edu
//Description: Interactive story walking through a Halloween house 

// constants to set up the environment throughout story 
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const BACKGROUND_COLOR = 220;

//global variables for first screens
var myColor = "black";

//variables for pumpkin animation 
var x = 55;
var y = 55;
var x2 = 445;
var y2 = 55;
var x3 = 445;
var y3 = 445;
var x4 = 55;
var y4 = 445;
var shapewidth = 70;
var shapeheight = 60;

//variables for candy corn candies 
var mySize = 10;
var candyColor1 = ('orange');
var candyColor2 = ('yellow');
var candyColor3 = ('white');
var candyColor4 = ('orange');
var candyColor5 = ('yellow');
var candyColor6 = ('darkorange');
var bgColor = 'grey';
var candySize = '100';

//bouncing spiders function
//set variables for circle shape and size
var shapeSize = 100;
var circleSize = [];

//variables for circle arrays (size and speed) 
var circleXs = [];
var circleYs = [];

var circleXSpeeds = [];
var circleYSpeeds = [];

// variable for circle color 
var circleColor = [];

//first screen - doors - message  
var staticMessage = "Welcome";
var instructionMessage = "Press 1, 2, or 3 to select a door...";

//First door message 
var witchMessage1 = "The wicked witch!";
var witchMessage2 = "Quick, click the screen to throw candies and make her disappear!";

//Second door message 
var pumpkinMessage = "Time to do the monster mash!";

//Third door message 
var spiderMessage = 'Click the spiders to make them shrink';

//Setup the canvas
function setup() {
  createCanvas(500, 500);

  //initialize circles x and y coords
  for (var i = 0; i < 10; i++) {
    // randomly assign x and y coordinates between 100 and 500
    circleXs[i] = round(random(100, 500));
    circleYs[i] = round(random(100, 500));

    circleXSpeeds[i] = round(random(1, 3));
    circleYSpeeds[i] = round(random(1, 3));
    // initialize black color for circles 
    circleColor[i] = ('black');
    circleSize[i] = shapeSize;
  }
  //Items Redrawn each time prorgam runs 
  background('white');
  fill('black')
  stroke('black');
  noStroke();
  fill(myColor);

  //sets the color of the text
  fill('black')
  stroke('black');
  strokeWeight(1);
}

function draw() {
  //drawScreenStart();

  //set parameters for screen changes 
  if (key == "0") {
    drawScreenStart();

    //if 2 pressed call pumpkin screen 
  } else if (key == "2") {
    drawScreenPumpkin();
    ////if 3 pressed call spider screen
  } else if (key == "3") {
    drawScreenSpider();
  }
}

function keyTyped() {
  print("key " + key);
  //set parameters for screen changes
  if (key == "0") {
    drawScreenStart();
    //mask

    //if 1 pressed call witch screen + candy on that screen only
  } else if (key == "1") {
    drawScreenWitch();
  } else if (key == "1") {
    drawCandy();
  }
}

//draw home screen 
function drawScreenStart() {
  //set background color and draw three doors
  background(bgColor);
  noStroke();
  fill('black');
  rect(50, 150, 100, 200);
  rect(200, 150, 100, 200);
  rect(350, 150, 100, 200);
  //write numbers on doors and set color for message on screen
  fill('white');
  textSize(60);
  text("1", 112, 200);
  text("2", 255, 200);
  text("3", 410, 200);
  //color for door outlines
  stroke('orange');
  strokeWeight(3);
  //draw verticle lines 
  line(50, 150, 50, 350)
  line(150, 150, 150, 350)
  line(200, 150, 200, 350)
  line(300, 150, 300, 350)
  line(350, 150, 350, 350)
  line(450, 150, 450, 350)
  //draw horizontal lines
  line(50, 150, 150, 150)
  line(50, 350, 150, 350)
  line(200, 150, 300, 150)
  line(200, 350, 300, 350)
  line(350, 150, 450, 150)
  line(350, 350, 450, 350)
  stroke('white');
  strokeWeight(0);
  textSize(30);
  text(instructionMessage, 20, height - 30);
  //print screen to follow when being drawn 
  print("drawStartScreen");
}

//function to initialize witch screen behind door one 
function drawScreenWitch() {
  background('white');

  //background image 
  fill('lightgrey');
  stroke('grey');
  strokeWeight(3);
  ellipse(250, 300, 300, 300);
  fill('black');
  triangle(120, 200, 380, 200, 250, 20);
  rect(100, 180, 300, 25);
  fill('white');
  stroke('black');
  ellipse(300, 260, 40, 40);
  ellipse(200, 260, 40, 40);
  fill('black');
  ellipse(200, 260, 20, 20);
  ellipse(300, 260, 20, 20);
  ellipse(250, 400, 50, 70);
  //text on screen 
  stroke('black');
  strokeWeight(0);
  textSize(15);
  text(witchMessage1, 30, height - 430);
  text(witchMessage2, 30, height - 20);
}

//function to draw candy that appears when clicked 
function drawCandy(x, y, candySize) {
  print("drawCandy " + key);

  //draw circle 6 (outer)
  fill(candyColor1);
  ellipse(x, y, candySize * 1.0);

  //draw circle 5 (outer) 
  fill(candyColor2);
  ellipse(x, y, candySize - 20 * 1.0);

  //draw circle 4 (outer) 
  fill(candyColor3);
  ellipse(x, y, candySize - 40 * 1.0);

  //draw circle 3 (inner)
  fill(candyColor4);
  ellipse(x, y, candySize - 60 * 1.0);

  //draw circle 2 (inner) 
  fill(candyColor5);
  ellipse(x, y, candySize - 80 * 1.0);

  //draw circle 1 (inner)
  fill(candyColor6);
  ellipse(x, y, candySize - 100 * 1.0);

  //size + parameters for text on screen 
  noStroke();
  fill(222, 171, 95);
  strokeWeight(20);
  textSize(20);
}

//draw candy whenever the mouse is pressed
//draw candy at location mouse is pressed 
function mousePressed() {
  if (key == "1") {
    var mySize = random(10, width / 3);
    drawCandy(mouseX, mouseY, mySize);
  }
}

//function to initialize animated pumpkin screen  
function drawScreenPumpkin() {
  background("black");

  //Draw in upper left corner of canvas 

  fill("orange");
  noStroke();
  ellipse(x, y, shapewidth, shapeheight);
  fill("green");
  rect(x - 5, y - 40, shapewidth - 60, shapeheight - 40);
  fill("white");
  ellipse(x - 5, y - 10, 10, 10);
  ellipse(x + 5, y - 10, 10, 10);
  fill("black");
  ellipse(x - 5, y - 10, 5, 5);
  ellipse(x + 5, y - 10, 5, 5);
  stroke("black");
  strokeWeight(3);
  line(x - 10, y + 10, x + 10, y + 10);

  //Draw in upper right corner of canvas 

  fill("grey");
  noStroke();
  ellipse(x2, y2, shapewidth, shapeheight);
  fill("black");
  ellipse(x2, y2 - 10, shapewidth - 30, shapeheight - 40);
  fill("white");
  ellipse(x2 - 5, y - 10, 10, 10);
  ellipse(x2 + 5, y - 10, 10, 10);
  fill("black");
  ellipse(x2 - 5, y - 10, 5, 5);
  ellipse(x2 + 5, y - 10, 5, 5);
  stroke("black");
  strokeWeight(3);
  line(x2 - 10, y + 10, x2 + 10, y + 10);

  //Draw in lower right corner of canvas 

  fill("white");
  noStroke();
  ellipse(x3, y3, shapewidth, shapeheight);
  fill("black");
  ellipse(x3 - 5, y3 - 10, 10, 10);
  ellipse(x3 + 5, y3 - 10, 10, 10);
  fill("red");
  ellipse(x3 - 5, y3 - 10, 5, 5);
  ellipse(x3 + 5, y3 - 10, 5, 5);
  stroke("black");
  strokeWeight(3);
  line(x3 - 10, y3 + 10, x3 + 10, y3 + 10);

  //Draw in lower left corner of canvas

  fill("green");
  noStroke();
  ellipse(x4, y4, shapewidth, shapeheight);
  fill("grey");
  rect(x4 - 15, y4 - 25, shapewidth - 40, shapeheight - 50);
  fill("white");
  ellipse(x4 - 10, y4 - 10, 10, 10);
  ellipse(x4 + 10, y4 - 10, 10, 10);
  fill("black");
  ellipse(x4 - 5, y4 - 10, 5, 5);
  ellipse(x4 + 5, y4 - 10, 5, 5);
  stroke("black");
  strokeWeight(3);
  line(x4 - 10, y4 + 10, x4 + 10, y4 + 10);

     //call vertical movements 
    
  if (x < 100) {        
    x = x + 1;  
  }  
  if (x3 > 300) {        
    x3 = x3 - 1;    
  }  
  if (x2 > 200) {        
    x2 = x2 - 1;    
  }    
  if (x4 < 400) {        
    x4 = x4 + 1;    
  }

     //call horizontal movements
    
  if (y < 250) {      
    y = y + 1;    
  }    
  if (y2 < 250) {      
    y2 = y2 + 1;    
  }    
  if (y3 > 250) {    
    y3 = y3 - 1;    
  }    
  if (y4 > 250) {      
    y4 = y4 - 1;    
  }
  //set text for message on screen 
  fill('white');
  stroke('white');
  strokeWeight(0);
  textSize(15);
  text(pumpkinMessage, 150, height - 30);
}

//function to initialize drawing spiders bouncing around screen + shrink when clicked 
function drawScreenSpider() {
  background(BACKGROUND_COLOR);

  // draw and move circles
  drawShapes();
  moveShapes();

}

/*
    cc: class code description 
    //This function will loop through our shapes array
    and draw the all the shapes at the designated
    x,y position on the canvas.
 */
function drawShapes() {
  for (var i = 0; i < circleXs.length; i++) {
    drawCircle(circleXs[i], circleYs[i], circleSize[i], circleColor[i]);
  }
}

//Function loops through shape array and moves shapes
function moveShapes() {
  // loop through shapes and shapesSpeeds
  for (i = 0; i < circleXs.length; i++) {

    // get shape x and y coordinates
    var shapeX = circleXs[i];
    var shapeY = circleYs[i];


    // check if shape is outside canvas
    if (shapeX < 0 || shapeX > CANVAS_WIDTH - circleSize[i]) {
      // change X direction
      circleXSpeeds[i] *= -1;
    } else if (shapeY < 0 || shapeY > CANVAS_HEIGHT - circleSize[i]) {
      // change Y direction
      circleYSpeeds[i] *= -1;
    } else if (shapeX < 0 || shapeY < 0 || shapeX > CANVAS_WIDTH || shapeY > CANVAS_HEIGHT) {
      // if anything goes wrong just reset coords
      shapeX = CANVAS_WIDTH / 2;
      shapeY = CANVAS_HEIGHT / 2;
    }

    // move shape
    shapeX += circleXSpeeds[i];
    shapeY += circleYSpeeds[i];

    // update arrays
    circleXs[i] = shapeX;
    circleYs[i] = shapeY;

    //set text for message on screen 
    fill('red');
    stroke('red');
    strokeWeight(0);
    textSize(15);
    text(spiderMessage, 150, height - 30);
  }
}

//Function to draw a circle at cX, cY with size = cSize
function drawCircle(cX, cY, cSize, cColor) {
  noStroke();
  fill(cColor);
  ellipse(cX, cY, cSize, cSize);
}

//This function returns true if the mouse is hovering over
//the ball with the given coordinates, and returns false otherwise.
function isWithin(buttonX, buttonY, circleSize) {
  if (mouseX >= buttonX && mouseX <= buttonX + shapeSize &&
    mouseY >= buttonY && mouseY <= buttonY + shapeSize) {
    return true;
  } else {
    return false;
  }
}

//Shrink bouncing spiders when mouse is clicked 
function mouseClicked() {
  for (i = 0; i < circleXs.length; i = i + 1) {
    if (isWithin(circleXs[i], circleYs[i], circleSize[i])) {
      circleSize[i] = circleSize[i] - 10;
      circleXSpeeds[i] = circleXSpeeds[i];
      circleYSpeeds[i] = circleYSpeeds[i];
    }
  }
}