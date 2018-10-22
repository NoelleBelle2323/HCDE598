function setup() {
  createCanvas(400, 400);
}

var blinkFrame = 0; //this variable will be used to determine whether a blinking ellipse is visible or invisible this frame

//snowballs will be placed at one of the following X coordinates
var left = 50;
var right = 350;
var center = 200;

//snowballs will have one of the following Y coordinates
var bottom = 335;
var middle = 240;
var snowmanTop = 165; //for some reason, just naming this variable "top" was causing an error. Perhaps "top" is a built-in variable already?

//snowballs will have one of the following diameters
var diameterBig = 120;
var diameterMedium = 90;
var diameterSmall = 70;

//snowballs will be one of the following colors
var color1A = 'pink';
var color1B = [150, 150, 250]; //blueish-almost-purple
var color2A = 'orange';
var color2B = [100, 250, 160]; //sea-green
var color3A = [230, 200, 100]; //goldish yellow
var color3B = [200, 180, 230]; //light purple


//variables to hold the user's selected colors, initialized with empty string values
var selectedColor1 = '';
var selectedColor2 = '';
var selectedColor3 = '';

//var to set the changing text prompts
var colorPrompt = 'pink or blue';

function draw() {
  background(190);
  stroke('grey');
  fill('black');
  strokeWeight(1); //for the text only
  textSize(20);
  text('Build a snowman!', 10, 30);
  text('Click to select ' + colorPrompt, 10, 60);
  strokeWeight(5); //for the rest of the image


  //if the first color has not been selected
  if (selectedColor1 == '') {
    blinkingCircle(30, center, bottom, diameterBig);
    snowballBig(color1A, left);
    snowballBig(color1B, right);
    if ((mouseIsPressed) && (mouseInCircle(left, bottom, diameterBig))) {
      selectedColor1 = color1A;
    } else if ((mouseIsPressed) && (mouseInCircle(right, bottom, diameterBig))) {
      selectedColor1 = color1B;
    }
  }

  //if the first color has been selected and the second color has not been selected
  else if ((selectedColor1 != '') && (selectedColor2 == '')) {
    colorPrompt = 'orange or green';
    snowballBig(selectedColor1, center);
    blinkingCircle(30, center, middle, diameterMedium);
    snowballMedium(color2A, left);
    snowballMedium(color2B, right);
    if ((mouseIsPressed) && (mouseInCircle(left, middle, diameterMedium))) {
      selectedColor2 = color2A;
    } else if ((mouseIsPressed) && (mouseInCircle(right, middle, diameterMedium))) {
      selectedColor2 = color2B;
    }
  }
  //if the second color has been selected and the third color has not been selected
  else if ((selectedColor2 != '') && (selectedColor3 == '')) {
    colorPrompt = 'yellow or purple';
    snowballBig(selectedColor1, center);
    snowballMedium(selectedColor2, center);
    blinkingCircle(30, center, snowmanTop, diameterSmall);
    snowballSmall(color3A, left);
    snowballSmall(color3B, right);
    if ((mouseIsPressed) && (mouseInCircle(left, snowmanTop, diameterSmall))) {
      selectedColor3 = color3A;
    } else if ((mouseIsPressed) && (mouseInCircle(right, snowmanTop, diameterSmall))) {
      selectedColor3 = color3B;
    }
  } else if (selectedColor3 != '') {
    snowballBig(selectedColor1, center);
    snowballMedium(selectedColor2, center);
    snowballSmall(selectedColor3, center);

    //add some finishing touches to the snowman
    stroke('black');
    point(185, 160);
    point(215, 160);
    point(center, 185);
    point(center + 10, 183);
    point(center - 10, 183);
    point(center + 20, 175);
    point(center - 20, 175);
    point(center, 225);
    point(center, 250);
    line(156, 233, 110, 213);
    line(110, 213, 107, 185);
    line(110, 213, 83, 211)
    line(244, 233, 297, 213);
    line(297, 213, 309, 184);
    line(297, 213, 327, 216);
    fill('black');
    rect(175, 90, 50, 50);
    rect(150, 135, 100, 5);
    strokeWeight(1);
    text('hello!', 280, 100);
  }

  blinkFrame++; //increment the variable that tracks whether or not the blinking circle should be visible


  //to see mouse location
  fill('white');
  text(mouseX + ',' + mouseY, 10, 15);

}

//3 functions to draw snowballs of varying sizes, at different X coordinates and with different colors
function snowballBig(colorChoice, positionX) {
  fill(colorChoice);
  ellipse(positionX, bottom, diameterBig, diameterBig);
}

function snowballMedium(colorChoice, positionX) {
  fill(colorChoice);
  ellipse(positionX, middle, diameterMedium, diameterMedium);
}

function snowballSmall(colorChoice, positionX) {
  fill(colorChoice);
  ellipse(positionX, snowmanTop, diameterSmall, diameterSmall);
}

//draw a blinking circle, used to indicate where the user's snowball will be placed
function blinkingCircle(blinkRate, positionX, positionY, diameter) {
  //make the ellipse visible for half the time, for a number of frames equal to blink rate
  if (blinkFrame < blinkRate) {
    noFill();
    ellipse(positionX, positionY, diameter, diameter)
  }
  //reset the blinkFrames after two sets of blinkRate have passed 
  else if (blinkFrame >= (2 * blinkRate)) {
    blinkFrame = 0;
  }
}
//Note: probably could have integrated the snowball functions into the blinkingCircle function (choosing which one to use based on a snowball size parameter and appropriate if statements, but I wrote this function first, and don't want to bother changing it unless I have extra time

//check if the mouse's position is inside of a designated circle based on distance from the circle's center
function mouseInCircle(circleCenterX, circleCenterY, diameter) {
  //based on Pythagorean theorem a^2 + b^2 = c^2
  var a = mouseX - circleCenterX;
  var b = mouseY - circleCenterY;
  var c = diameter / 2;
  if (Math.pow(a, 2) + Math.pow(b, 2) <= Math.pow(c, 2)) {
    return true;
  } else {
    return false;
  }
}