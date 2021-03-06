// File: Repeat.js  
// Author: Sondra Yancey 
// Date: 10/30/18 
// Class: HCDE 598  
// Email: Sondray@uw.edu 
// Description:  
// This program shows bunnies of different colors   

var canvasWidth = 800
var canvasHeight = 800
var bunnySpacey = 150
var bunnySpacex = 100
var bunnySize = 0.25


//used the bunny function from other project and set up a loop that will put a bunny down
//every 150 pixels on x and  every 100 pixels on y coordinates
function setup() {
  var oddBunnycolor = color(228, 123, 225) //purple
  var evenBunnycolor = color(255, 255, 255) // white
  var bunnyCounter = 0
  createCanvas(canvasWidth, canvasHeight);
  background(105, 231, 205); //turquoise
  for (y = 10; y < canvasHeight; y = y + bunnySpacey) {
    for (x = 10; x < canvasWidth; x = x + bunnySpacex) {
      bunnyCounter = bunnyCounter + 1;

      //changes the color on the bunny based on if its "counter" is odd or even
      if (isEven(bunnyCounter)) {
        drawRabbit(x, y, bunnySize, evenBunnycolor)
      } else {
        drawRabbit(x, y, bunnySize, oddBunnycolor)
      }
    }
  }
}


function draw() {}


// I THINK the directions of the assignment was to use a function for bunny color, so I made one
function isEven(n) {
  return n % 2 === 0;
}


//rabbit function with x coordinate, y coordinate, size, color variable paramaters
function drawRabbit(x, y, size, bunnyColor) {
  noStroke();
  fill(bunnyColor);
  ellipse(x, y - 180 * size, 60 * size, 250 * size); //ears
  ellipse(x + 100 * size, y - 180 * size, 60 * size, 250 * size);
  ellipse(x + 50 * size, y + 20 * size, 300 * size, 300 * size); //head
  fill('black');
  ellipse(x, y, 50 * size, 50 * size); //eyes
  ellipse(x + 60 * size, y, 50 * size, 50 * size);
  fill('white');
  ellipse(x - 10 * size, y - 10 * size, 20 * size, 20 * size);
  ellipse(x + 50 * size, y - 10 * size, 20 * size, 20 * size);
  fill('pink');
  ellipse(x + 20 * size, y + 40 * size, 30 * size, 30 * size); //nose
  ellipse(x + 45 * size, y + 40 * size, 30 * size, 30 * size);
  stroke('black');
  line(x + 5 * size, y + 40 * size, x - 20 * size, y + 35 * size); //whiskers
  line(x + 8 * size, y + 50 * size, x - 20 * size, y + 60 * size);
  line(x + 60 * size, y + 40 * size, x + 75 * size, y + 35 * size);
  line(x + 58 * size, y + 50 * size, x + 75 * size, y + 55 * size);
}