/* This program is a Starbucks drink recommender which recommends a Starbucks
drink based on the users' answers to 3 questions with a picture of the drink and description */ 


var reset = '#ED4337'; //background color stays the same throughout

//constant value for snowflakes' size
const flakeSize = 10;

//array to hold snowflake positions
var flakes = [];
//array to hold speeds of each snowflake 
var flakeSpeed = [];


//set all other pages to false and update to true to draw based on user selections//
var page1 = true;
var page2 = false;
var page3 = false;
var page4 = false;
var page5 = false;
var page6 = false;
var page7 = false;
var page8 = false;
var page9 = false;
var page10 = false;
var page11 = false;
var page12 = false;


//text position coordinates
var titleX = 400; //title page text coord
var titleY = 250;
var xCoord = 400; //recommendation text coords
var yCoord = 200;
var choiceX = 350; //choice text coords
var choiceY = 250;
var commandX = 400; //command text coords
var commandY = 300;

//title and questions
const title = "Starbucks Drink Recommender";
const start = "Start";
const q1 = "Do you need caffeine?";
const q2 = "Do you want hot or iced?";
const q3 = "Something milky?";

//some colors for drawings of the drinks
var cup_color = 'white';
var stroke_color = 'white';
var coffee_color = '#654321';
var latte_color = '#DBC4AB';
var refresher_color = 'pink';
var ice_color = 'white';
var whip_color = 'white';
var straw_color = 'green';

//recommendations
function recs() { //recommendation text settings
  fill('#fff');
  textSize(18);
}
var latte_hot = "Try a mocha, latte, macchiato, or cappuccino!"; //caffeine, hot, milky
var latte_iced = "Try an iced mocha, latte, frappucino, or macchiato."; //caffeine, iced, milky
var black_hot = "Try black coffee, Americano, or tea."; //caffeine, hot, non-milky
var black_iced = "Try iced black coffee or tea."; //caffeine, iced, non-milky
var whip_hot = "Try cremes or some hot chocolate :)"; //decaf, hot, milky
var decaf_iced = "Try any of the iced espresso drinks, but ask for decaf!"; //decaf, iced, milky
var decaf_hot = "Try decaf coffee or apple cider."; //decaf, hot, non-milky
var refresh = "Try refreshers."; //decaf, iced, non-milky

//button parameters
var buttonX = 350;
var buttonY = 650;
const buttonWidth = 100;
const buttonHeight = 50;
var xClicked;
var yClicked;

function setup() {

  createCanvas(800, 700);
  fill('#fff');
  textAlign(CENTER);


  for (var i = 0; i < 800; i++) { //draw 800 snowflakes
    if (i % 2 == 0) { //if index is even
      flakes[i] = round(random(0, 800)); //randomize x coordinates anywhere within canvas
    } else {
      flakes[i] = round(random(-1000, 800)); //randomize the y coordinates between range
    }
    flakeSpeed[i] = 10; //set speed of each snowflake, i.e update position by 10 pixels
  }

  //set all response variables to false and update accordingly as user answers questions
  var caffeine = false; 
  var hot = false;
  var milky = false;

}

function draw() {
  if (page1) { //if on page1

    drawPage1();

    if (key == 'y') {
      page1 = false; //if user presses 'y', set current page to false and move onto next page
      page2 = true;
    } else if (key == 'n') { //else, return false
      return false;
    }
  } else if (page2) { //if on page2, redraw the background
    background(reset);

    drawPage2();

    if (key == 'c') { //if key pressed is 'c'for caffeine
      page2 = false; //then set current page to false
      caffeine = true; //record user response by updating variable value to true
      page3 = true; //move onto the next page
    } else if (key == 'd') { //if key pressed is 'd' for decaf
      page2 = false; //still set current page to false to move on
      caffeine = false; //record user response by
      page3 = true; //move onto the next page
    }
  } else if (page3) {
    background(reset);

    drawPage3();

    if (key == 'h') {
      page3 = false;
      hot = true;
      page4 = true;
    } else if (key == 'i') {
      page3 = false;
      hot = false;
      page4 = true;
    }
  } else if (page4) {
    background(reset);

    drawPage4();

    if (key == 'm') { //if key pressed is 'm' for milky
      if (caffeine == true) { //then check if caffeine is true
        if (hot == true) { //if both caffeine and hot are true  
          page4 = false; 
          page5 = true; //draw page 5 for recommendation
        } else if (hot == false) { //if caffeine is true and hot is false
          page4 = false;
          page7 = true; //draw page 7 for recommendation
        }
      } else if (caffeine == false) {
        if (hot == true) {
          page4 = false;
          page9 = true;
        } else if (hot == false) {
          page4 = false;
          page11 = true;
        }
      }
    } else if (key == 'n') {
      if (caffeine == true) {
        if (hot == true) {
          page4 = false;
          page6 = true;
        } else if (hot == false) {
          page4 = false;
          page8 = true;
        }
      } else if (caffeine == false) {
        if (hot == true) {
          page4 = false;
          page10 = true;
        } else if (hot == false) {
          page4 = false;
          page12 = true;
        }
      }
    }
  }

  if (page5) { // recommendation page for caffeine, hot, milky
    background(reset); //redraw background
    button(); //draw the button
    hot_drink(cup_color, latte_color, stroke_color);
    recs();
    text(latte_hot, xCoord, yCoord);
    page5 = restart(); //checks if user pressed button on page and determines whether or not to stay or exit current page
  }

  if (page6) { //recommendation page for caffeine, hot, non-milky
    background(reset);
    button();
    hot_drink(cup_color, coffee_color, stroke_color);
    recs();
    text(black_hot, xCoord, yCoord);
    page6 = restart();
  }

  if (page7) { //recommendation page for caffeine, iced, milky
    background(reset);
    button();
    cold_drink(cup_color, latte_color, stroke_color, straw_color, ice_color);
    recs();
    text(latte_iced, xCoord, yCoord);
    page7 = restart();
  }


  if (page8) { //recommendation page for caffeine, iced, non-milky
    background(reset);
    button();
    cold_drink(cup_color, coffee_color, stroke_color, straw_color, ice_color);
    recs();
    text(black_iced, xCoord, yCoord);
    page8 = restart();
  }

  if (page9) { //recommendation page for decaf, hot, milky
    background(reset);
    button();
    hot_whip();
    recs();
    text(whip_hot, xCoord, yCoord);
    page9 = restart();
  }

  if (page10) { //recommendation page for decaf, hot, non-milky
    background(reset);
    button();
    hot_drink(cup_color, coffee_color, stroke_color);
    recs();
    text(decaf_hot, xCoord, yCoord);
    page10 = restart();
  }

  if (page11) { //recommendation page for decaf, iced, milky
    background(reset);
    button();
    cold_whip();
    recs();
    text(decaf_iced, xCoord, yCoord);
    page11 = restart();
  }

  if (page12) { //recommendation page for decaf, iced, non-milky
    background(reset);
    button();
    cold_drink(cup_color, refresher_color, stroke_color);
    recs();
    text(refresh, xCoord, yCoord);
    page12 = restart();
  }
  
  drawShapes(); //draw the snowflakes at random places throughout the canvas
  moveFlakes(flakeSpeed);//move the snowflakes by updating the y coordinates of each snowflake by speed
}

/* This function draws 500 snowflakes at random places throughout the canvas */
function drawShapes() {
  for (var x = 0; x < flakes.length; x += 2) {
    push();
    var flakeX = flakes[x]; //get the X coordinate of snowflake
    var flakeY = flakes[x + 1]; //get the Y coordinate of snowflake
    translate(flakeX, flakeY); //translate by x and y coordinates
    drawFlakes(flakeSize); //draw the flakes at specified size
    pop();
  }
}

/* This function draws 100 white snowflakes of user defined size by repeatedly drawing them 6 times for each flake
and rotating them incrementally to complete a full circle */
function drawFlakes(size) {
  stroke('white');
  for (var i = 0; i < 100; i++) {
    rotate(TWO_PI / 6);
    line(0, 0, size, 0);
    line((0.3 * size), 0, (size - (0.2 * size)), (0 - (0.3 * size)));
    line((0.3 * size), 0, (size - (0.2 * size)), (0.3 * size));
  }
}

/* This function moves each flake by updating the y coordinates of each flake in the flakes array */
function moveFlakes(flakeSpeeds) {
  for (var x = 0; x < flakes.length; x += 2) {

    var flakeY = flakes[x + 1];//get the y coordinate of flake from 'flakes' array
    var speed = flakeSpeed[x]; //get the speed of flake and store it in speed

    //move flake in Y direction by adding the speed value to y coordinate
    flakeY += speed;
    flakes[x + 1] = flakeY; 
  }
}
/* This function draws the drink for hot black and tea */
function hot_drink(cup_color, liquid_color, stroke_color) { 
  strokeWeight(1);
  fill(cup_color);
  quad(325, 400, 350, 550, 450, 550, 475, 400);
  arc(400, 550, 100, 40, 0, PI);

  fill(liquid_color);
  stroke(stroke_color);
  ellipse(400, 400, 150, 50);
}

/* This function draws the drink for cold black and tea */
function cold_drink(cup_color, liquid_color, stroke_color) {
  hot_drink(cup_color, liquid_color, stroke_color);
  stroke(straw_color);
  strokeWeight(8);
  line(310, 300, 345, 400);

  fill(ice_color);
  stroke(ice_color);
  strokeWeight(1);
  rect(395, 400, 20, 20);
  rect(370, 390, 20, 20);
  rect(420, 380, 20, 20);
}

/* This function draws the drink for hot drinks with milk and whip */
function hot_whip() {
  hot_drink(cup_color, latte_color, stroke_color);
  fill('whip_color');
  ellipse(400, 390, 120, 30);
  ellipse(400, 380, 100, 20);
  ellipse(400, 370, 60, 10);
  ellipse(400, 365, 25, 10);
}

/* This function draws the drink for cold drinks with milk and whip */
function cold_whip() { 
  cold_drink(cup_color, latte_color, stroke_color);
  fill('whip_color');
  ellipse(400, 390, 120, 30);
  ellipse(400, 380, 100, 20);
  ellipse(400, 370, 60, 10);
  ellipse(400, 365, 25, 10);
  
}

/* This function draws the restart button at each recommendation page */
function button() {
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  textSize(20);
  fill('green')
  stroke(stroke_color);
  text('Restart', 400, 680);
}

/* This function returns true if the button was pressed within the defined bounds and false if not */
function checkButtonPressed() {
  if (xClicked <= buttonX + buttonWidth &&
    xClicked >= buttonX &&
    yClicked >= buttonY &&
    yClicked <= buttonY + buttonHeight) {
    return true;
  } else {
    return false;
  }
}

/* This function stores the X and Y coordinates of the mouse click when the user clicks on the restart button */
function mouseClicked() {
  xClicked = mouseX;
  yClicked = mouseY;
}

/* This function draws the first page, resets information for all button variables for subsequent runs, and sets whichever
recommendation page user is on to false if restart button is clicked. Else, it stays on the recommendation page by returning true. */
function restart() {
  
  var buttonIsPressed = checkButtonPressed();
  if (buttonIsPressed == true) {
  page1 = true;
  buttonIsPressed = false;
  xClicked = 0;
  yClicked = 0;
  return false;
} else { 
  return true;
}
  
}

/* This function draws the title page of the program */
function drawPage1() {
  background(reset);

  textSize(24);
  stroke('black');
  text(title, titleX, titleY);
  text("Press 'y' to begin.", titleX, titleY + 50);
}

/* This function draws the page for the first question of the program, which asks
if the user wants a drink with or without caffeine */
function drawPage2() {
  textSize(24);
  text(q1, xCoord, yCoord);

  textSize(18);
  stroke('white');
  text("Caffeinated", choiceX, choiceY);
  text("Decaf", choiceX + 100, choiceY);
  text("Press 'c' for caffeine or 'd' for decaf", commandX, commandY);
}

/* This function draws the page for the first question of the program, which asks
if the user wants a hot or cold drink */
function drawPage3() {
  //print the question
  textSize(24);
  text(q2, xCoord, yCoord);

  //create text 
  textSize(18);
  stroke('white');
  text("Hot", choiceX, choiceY);
  text("Iced", choiceX + 100, choiceY);
  text("Press 'h' for hot or 'i' for iced", commandX, commandY);
}

/* This function draws the page for the first question of the program, which asks
if the user wants a drink with or without milk */
function drawPage4() {
  //print the question
  textSize(24);
  text(q3, xCoord, yCoord);

  //create text 
  textSize(18);
  text('white');
  text("milky", choiceX, choiceY);
  text("non-milky", choiceX + 100, choiceY);
  text("Press 'm'for milky or 'n' for non-milky", commandX, commandY);
}