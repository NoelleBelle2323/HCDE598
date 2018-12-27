//File: weather-forecast.js
//Author: Jennifer Chiu
//Date: 12/7/18
//Class: HCDE 598
//Email: jschiu@uw.edu
//Description: This program draws three different screens which you view by a keyboard press.
//Each screen draws clouds in the background but with different colors. 
//The first screen is a static drawing of a pizza in sunny weather.
//The second screen draws fries that are falling down on the canvas. 
//The third screen draws a donut moving from the left to the right side of the canvas to represent a windy day. 
//Credit goes to Cloudy with a Chance of Meatballs for the idea inspiration.

//set the canvas size
const CANVAS_WIDTH = 950;
const CANVAS_HEIGHT = 700;

//set the background color
const BG_COLOR_WELCOME = 'white';
const BG_COLOR_PIZZA = '#B3DDF4'; //light blue
const BG_COLOR_DONUT = '#FAC780'; //light orange
const BG_COLOR_FRIES = 'silver';

//set screen message color and size
const MESSAGE_COLOR = "black";
var messageSize = 30;

//set screen messages
var welcomeMessage = "WEATHER FORECAST CHANNEL GUIDE: Press 1 to view the weather in Pizza Island, 2 for Friesville, 3 for Donut City";
var firstMessage = "The sun is out in Pizza Island so head there for the perfect tan!";
var secondMessage = "Good news, there's finally rain in Friesville after a long drought!";
var thirdMessage = "Hold on tight because it's pretty windy in Donut City!";

//set the uppper left corner of where the clouds will start
const X_ORIGIN = 130;
const Y_ORIGIN = 80;

//set the cloud colors
const CLOUD_COLOR_EVEN1 = 'white'; //white cloud for pizza scene
const CLOUD_COLOR_ODD1 = '#27ABF3'; //blue cloud for pizza scene
const CLOUD_COLOR_EVEN2 = 'gray'; //gray cloud for fries scene
const CLOUD_COLOR_ODD2 = '#360588'; //purple cloud for fries scene
const CLOUD_COLOR_EVEN3 = '#DB25E7'; //pink cloud for donut scene
const CLOUD_COLOR_ODD3 = '#594001'; //brown cloud for donut scene

//set the size for the clouds
const CLOUD_WIDTH = 175;
const CLOUD_HEIGHT = 90;

//set number of clouds to draw and size space between clouds
const ROW_CLOUDS = 4;
const CLOUD_SPACE = 230;

//set color for parts on the face of the junk food
const FACE_COLOR = 'black';

//Pizza in Sunny Day screen 
//set variables and colors for the pizza
var pizzaX = 470;
var pizzaY = 450;
var pizzaWidth = 100;
var pizzaHeight = 12;
const PIZZA_COLOR = '#e5b48d'; //tan
const CRUST_COLOR = '#ad6a33'; //light brown
const PEPPERONI_COLOR = 'red';

//set variables for the soda
var sodaX = 530;
var sodaY = 490;
var sodaWidth = 55;
var sodaHeight = 75;
const STRAW_COLOR = 'white';

//set variables for the sun
var sunX = 900;
var sunY = 30;
var sunWidth = 160;
var sunHeight = 140;
var sunColor = '#FEF416'; //bright yellow

//Fries in Rainy Day screen
//set variables and colors for the fries
var friesX = 430;
var friesY = 500;
var friesWidth = 80;
var friesHeight = 60;
const BOX_COLOR = '#e7290c'; //deep red
const BOXTOP_COLOR = '#fa5959'; //light red
const FRIES_COLOR = 'yellow';

//Rain
// set constant for rain size
const RAIN_SIZE = 20;

//set arrays for x and y coordinates of the raining fries and chose random numbers within the canvas
var coordinateX = [120, 175, 300, 230, 388, 250, 100, 240, 480, 520, 445, 550, 200, 550, 800, 755, 670, 345, 715, 605];
var coordinateY = [100, 125, 160, 210, 405, 360, 310, 380, 175, 300, 270, 230, 80, 223, 190, 150, 170, 215, 330, 100];

//set arrays for the direction of the raining fries and chose random numbers
var directionX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var directionY = [2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 3, 2, 3, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 3, 2, 2];

//set variables for the color of the raining fries
var rainColor = 'yellow';

//Donut in Windy Day screen
//set variables and colors for the donut
var donutX = 100;
var donutY = 510;
var donutSize = 100;
const DONUT_COLOR = '#ef85c3'; //pink
const DONUT_SPRINKLE1 = '#0da3f9'; //bright blue
const DONUT_SPRINKLE2 = 'red'; //red
const DONUT_SPRINKLE3 = '#f8f804'; //warm yellow   
const DONUT_SPRINKLE4 = 'white';
const DONUT_SPRINKLE5 = '#9004f8'; //bright purple
const DONUT_SPRINKLE6 = '#36e506'; //bright green

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  background(BG_COLOR_WELCOME);
  noStroke();

  //key functions  
  if (key == "1") { //if I press 1 on the keyboard, then the pizza scene appears
    firstScreen();
  } else if (key == "2") { //if I press 2 on the keyboard, then the fries scene appears
    secondScreen();
  } else if (key == "3") { //if I press 3 on the keyboard, then the donut scene appears
    thirdScreen();
  }

  //start welcome message
  fill(MESSAGE_COLOR);
  noStroke();
  textSize(17);
  text(welcomeMessage, CANVAS_WIDTH - 925, CANVAS_HEIGHT - 30);
}

//draw first screen after welcome message
function firstScreen() {
  background(BG_COLOR_PIZZA);
  fill(MESSAGE_COLOR);
  textSize(messageSize);
  text(firstMessage, CANVAS_WIDTH - 890, CANVAS_HEIGHT - 500); //write first screen message
  ellipseMode(CENTER);

  //draw sun 
  fill(sunColor);
  ellipse(sunX, sunY, sunWidth, sunHeight); //draw sun circle base
  stroke(sunColor);
  strokeWeight(7);
  line(sunX - 88, sunY - 23, sunWidth + 572, sunHeight - 123); //draw sun rays starting from most left, going counter clockwise
  line(sunX - 95, sunY, sunWidth + 606, sunHeight - 94);
  line(sunX - 85, sunY + 30, sunWidth + 605, sunHeight - 25);
  line(sunX - 57, sunY + 59, sunWidth + 665, sunHeight + 7);
  line(sunX - 21, sunY + 81, sunWidth + 718, sunHeight);
  line(sunX + 21, sunY + 79, sunWidth + 771, sunHeight + 30);

  //draw pizza base
  noStroke();
  fill(PIZZA_COLOR);
  triangle(pizzaX, pizzaY, pizzaX + 50, pizzaY + 100, pizzaX - 50, pizzaY + 100);

  //draw pizza crust
  fill(CRUST_COLOR);
  rect(pizzaX - 50, pizzaY + 100, pizzaWidth, pizzaHeight);

  //draw pizza pepperoni
  fill(PEPPERONI_COLOR);
  ellipse(pizzaX - 25, pizzaY + 76, pizzaWidth - 82, pizzaHeight + 8); //draw left pepperoni
  ellipse(pizzaX + 10, pizzaY + 70, pizzaWidth - 82, pizzaHeight + 8); //draw center pepperoni
  ellipse(pizzaX + 31, pizzaY + 85, pizzaWidth - 82, pizzaHeight + 8); //draw left pepperoni

  //draw sunglasses on pizza
  fill(FACE_COLOR);
  ellipse(pizzaX - 13, pizzaY + 30, pizzaWidth - 72, pizzaHeight + 15); //draw pizza sunglasses lens- left side 
  ellipse(pizzaX + 13, pizzaY + 30, pizzaWidth - 72, pizzaHeight + 15); //draw pizza sunglasses lens - right side

  //draw pizza mouth and body parts
  strokeWeight(2);
  fill(FACE_COLOR);
  arc(pizzaX, pizzaY + 50, pizzaWidth - 80, pizzaHeight + 6, TWO_PI, PI); //draw pizza mouth
  strokeWeight(5);
  stroke(FACE_COLOR);
  line(pizzaX - 15, pizzaY + 110, pizzaWidth + 325, pizzaHeight + 569); //draw pizza's leg - left side of canvas
  line(pizzaX + 13, pizzaY + 110, pizzaWidth + 355, pizzaHeight + 571); //draw pizza's leg - right side of canvas
  line(pizzaX - 28, pizzaY + 56, pizzaWidth + 329, pizzaHeight + 473); //draw pizza's arm - left side of canvas
  line(pizzaX - 41, pizzaY + 35, pizzaWidth + 354, pizzaHeight + 468); //draw other part of arm
  line(pizzaX + 26, pizzaY + 55, pizzaWidth + 411, pizzaHeight + 473); //draw pizza's arm - right side of canvas
  line(pizzaX + 39, pizzaY + 35, pizzaWidth + 388, pizzaHeight + 468); //draw other part of arm

  //draw soda straw
  strokeWeight(8);
  stroke(STRAW_COLOR);
  line(sodaX + 20, sodaY - 40, sodaX + 40, sodaY + 40);

  //draw soda can
  noStroke();
  fill(PEPPERONI_COLOR);
  rect(sodaX, sodaY, sodaWidth, sodaHeight);

  //draw required number of clouds in a row
  for (i = 0; i < ROW_CLOUDS - 1; i++) {

    //sets the color of the cloud depending on if the index number i is an odd or even number
    if (isOdd(i)) {
      fill(CLOUD_COLOR_ODD1); //if index number i is an odd number, fill the cloud with blue
    } else {
      fill(CLOUD_COLOR_EVEN1); //if index number i is an even number, fill the cloud with white
    }

    //calculate the x and y coordinates of where the cloud starts
    var X_CORNER = X_ORIGIN + i * CLOUD_SPACE

    //draw one row of clouds
    ellipseMode(CENTER);
    ellipse(X_CORNER, Y_ORIGIN, CLOUD_WIDTH, CLOUD_HEIGHT);
    ellipse(X_CORNER - 7, Y_ORIGIN, CLOUD_WIDTH - 35, CLOUD_HEIGHT + 20);
    ellipse(X_CORNER - 5, Y_ORIGIN, CLOUD_WIDTH, CLOUD_HEIGHT);
  }

}
//draw second screen
function secondScreen() {
  background(BG_COLOR_FRIES);
  textSize(messageSize);
  fill(MESSAGE_COLOR);
  text(secondMessage, CANVAS_WIDTH - 890, CANVAS_HEIGHT - 500); //write second screen message
  ellipseMode(CENTER);

  //draw fries box
  fill(BOX_COLOR);
  rect(friesX, friesY, friesWidth, friesHeight);

  //draw fries
  strokeWeight(10);
  strokeCap(SQUARE);
  stroke(FRIES_COLOR);
  line(friesX, friesY - 45, friesX + 10, friesY);
  line(friesX + 23, friesY - 35, friesX + 18, friesY);
  line(friesX + 37, friesY - 30, friesX + 39, friesY);
  line(friesX + 55, friesY - 40, friesX + 60, friesY);
  line(friesX + 80, friesY - 30, friesX + 68, friesY);

  //draw fries box top part (covers the fries)
  noStroke();
  fill(BOXTOP_COLOR);
  rect(friesX, friesY - 3, friesWidth, friesHeight - 50);

  //draw fries face and body parts
  strokeWeight(8);
  stroke(FACE_COLOR);
  beginShape(POINTS);
  vertex(friesX + 27, friesY + 5); //draw right eye
  vertex(friesX + 48, friesY + 5); //draw left eye
  endShape();
  strokeWeight(4);
  fill(BOX_COLOR);
  arc(friesX + 38, friesY + 18, friesWidth - 60, friesHeight - 42, TWO_PI, PI); //draw fries mouth
  strokeWeight(5);
  line(friesX + 2, friesY + 30, friesWidth + 322, friesHeight + 433); //draw fries arm - left side of canvas 
  line(friesX + 77, friesY + 30, friesWidth + 400, friesHeight + 433); //draw fries arm - right side of canvas
  line(friesX + 16, friesY + 57, friesWidth + 388, friesHeight + 535); //donut leg - left side of canvas
  line(friesX + 52, friesY + 57, friesWidth + 422, friesHeight + 534); //donut - right side of canvas

  //draw and move the rain
  drawRain(coordinateX, coordinateY);
  moveRain(coordinateX, coordinateY, directionX, directionY);
}

//write function to loop through shape arrays and draw all the rain according to their designated coordinates
function drawRain(rainXs, rainYs) {
  for (var s = 0; s < coordinateX.length; s++) {
    var rainX = rainXs[s];
    var rainY = rainYs[s];
    drawRaindrop(rainX, rainY, RAIN_SIZE, rainColor);
  }
}

//write function to loop through shape arrays and move the rain
function moveRain() {
  for (i = 0; i < coordinateX.length; i++) {
    var rainX = coordinateX[i];
    var rainY = coordinateY[i];

    //update arrays
    coordinateX[i] += directionX[i];
    coordinateY[i] += directionY[i];
  }

}
//write a function to draw the rain at rX, rY with size= rSize and color= rColor
function drawRaindrop(rX, rY, rSize, rColor) {
  ellipseMode(CORNER);
  noStroke();
  fill(rColor);
  rect(rX, rY, rSize / 2, rSize * 2.5);

  //draws required number of clouds in a row
  for (i = 0; i < ROW_CLOUDS; i++) {

    //sets the color of the cloud depending on if the index number i is an odd or even number
    if (isOdd(i)) {
      fill(CLOUD_COLOR_ODD2); //if index number i is an odd number, fill the cloud with purple
    } else {
      fill(CLOUD_COLOR_EVEN2); //if index number i is an even number, fill the cloud with gray
    }

    //calculate the x and y coordinates of where the cloud starts
    var X_CORNER = X_ORIGIN + i * CLOUD_SPACE

    //draw one row of clouds
    ellipseMode(CENTER);
    ellipse(X_CORNER, Y_ORIGIN, CLOUD_WIDTH, CLOUD_HEIGHT);
    ellipse(X_CORNER - 7, Y_ORIGIN, CLOUD_WIDTH - 35, CLOUD_HEIGHT + 20);
    ellipse(X_CORNER - 5, Y_ORIGIN, CLOUD_WIDTH, CLOUD_HEIGHT);
  }
}

function thirdScreen() {
  background(BG_COLOR_DONUT);
  noStroke();
  fill(MESSAGE_COLOR);
  textSize(messageSize);
  text(thirdMessage, CANVAS_WIDTH - 815, CANVAS_HEIGHT - 500); //write third screen message
  ellipseMode(CENTER);

  //draw donut base
  fill(DONUT_COLOR);
  ellipse(donutX, donutY, donutSize);
  fill(BG_COLOR_DONUT);
  ellipse(donutX + 2, donutY + 3, donutSize - 60, donutSize - 60); //draw donut hole

  //draw donut sprinkles
  fill(DONUT_SPRINKLE1);
  rect(donutX - 25, donutY - 35, donutSize - 90, donutSize - 95); //draw blue sprinkle
  fill(DONUT_SPRINKLE2);
  rect(donutX + 11, donutY - 43, donutSize - 90, donutSize - 95); //draw red sprinkle
  fill(DONUT_SPRINKLE3);
  rect(donutX + 25, donutY - 15, donutSize - 90, donutSize - 95); //draw yellow sprinkle
  fill(DONUT_SPRINKLE4);
  rect(donutX + 33, donutY + 15, donutSize - 90, donutSize - 95); //draw white sprinkle
  fill(DONUT_SPRINKLE5);
  rect(donutX - 5, donutY + 30, donutSize - 90, donutSize - 95); //draw purple sprinkle
  fill(DONUT_SPRINKLE6); //green
  rect(donutX - 42, donutY + 3, donutSize - 90, donutSize - 95); //draw green sprinkle

  //draw donut face and body parts
  strokeWeight(8);
  stroke(FACE_COLOR);
  beginShape(POINTS);
  vertex(donutX - 8, donutY - 31); //draw donut left eye
  vertex(donutX + 12, donutY - 31); //draw donut right eye
  endShape();
  strokeWeight(5);
  line(donutX - 45, donutY - 10, donutX - 64, donutY - 41); //draw arm - left side of canvas
  line(donutX + 44, donutY - 10, donutX + 62, donutY - 41); //draw arm - right side of canvas
  line(donutX - 20, donutY + 46, donutX - 54, donutY + 69); //draw leg - left side of canvas
  line(donutX + 10, donutY + 46, donutX - 21, donutY + 72); //draw leg - right side of canvas 

  //start donut movement 
  if (donutX < 1100) { //move right until x=1100
    donutX = donutX + 3;
  }
  if (donutY < 500) { //move down until y=500
    donutY = donutY + 3;
  }

  //draws required number of clouds in a row
  for (i = 0; i < ROW_CLOUDS; i++) {

    //sets the color of the cloud depending on if the index number i is an odd or even number
    noStroke();
    if (isOdd(i)) {
      fill(CLOUD_COLOR_ODD3); //if index number i is an odd number, fill the cloud with pink
    } else {
      fill(CLOUD_COLOR_EVEN3); //if index number i is an even number, fill the cloud with brown
    }

    //calculate the x and y coordinates of where the cloud starts
    var X_CORNER = X_ORIGIN + i * CLOUD_SPACE

    //draw one row of clouds
    ellipse(X_CORNER, Y_ORIGIN, CLOUD_WIDTH, CLOUD_HEIGHT);
    ellipse(X_CORNER - 7, Y_ORIGIN, CLOUD_WIDTH - 35, CLOUD_HEIGHT + 20);
    ellipse(X_CORNER - 5, Y_ORIGIN, CLOUD_WIDTH, CLOUD_HEIGHT);
  }
}

//returns true if the number is odd and false if the number is even
function isOdd(n) {
  remainder = n % 2;
  if (remainder == 1) {
    return true;
  } else {
    return false;
  }
}