// File: pink circles.js
// Author: Alison Buchanan 
// Date: 11/10/18
// Class: HCDE 598 
// Email: ajb34@uw.edu
// Description: This program shows pink circles bouncing around the screen, contained by the canvas 
// the circles should not leave the screen

// constants to set up the environment
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const BACKGROUND_COLOR = "pink";

// constant for circle size
const CIRCLE_SIZE = 50;

//declare array(s) that will hold circle's x and y coordinates
var yCoords = [];
var xCoords = [];

//declares speed arrays for x and y directions
var speedX =[];
var speedY = [];

// declare and define circle color variable
var circleColor = "orange"

//set up canvas
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  fill (circleColor);
  
  //call on 10 objects in array
  for (var i = 0; i < 10; i++) {
    // randomly assign circle's x and y coordinates in array  (xCoords, yCoords)
    xCoords[i] = round(random(0, CANVAS_WIDTH));
    yCoords[i] = round(random(0, CANVAS_HEIGHT));
    
    // randomly assign speeds for circle's x and y movements in array (speedX and speedY)
  	speedX[i] = round(random(1,5));
    speedY[i] = round(random(1,5));
  }
}

function draw() {
  //draw background over and over
  background(BACKGROUND_COLOR);

  // draw and move circles
  drawCircles();
  moveCircles();
}
//function to draw circle 
function drawCircles() {
  // draw an ellipse in every iteration of the for loop based on the array values   
  for (var i = 0; i <= 10; i++) {
    var x = xCoords[i];
    var y = yCoords[i];
    
    //instructions to draw the ellipse
    noStroke();
    fill(circleColor);
    ellipse(x, y, CIRCLE_SIZE, CIRCLE_SIZE);   
  }
}

//function to  move circles 
function moveCircles() {
  
  // loop through circles and circle speeds
  for (var i = 0; i <= 10; i++) {
    
    // access array and get shape x and y coordinates and assign speed to the array. 
    xCoords[i] = xCoords[i] + speedX[i];
    yCoords[i] = yCoords[i] + speedY[i];

    // if ball hits left wall or ball hits right wall, change direction
    if (xCoords[i] < 0 || xCoords [i] > CANVAS_WIDTH - CIRCLE_SIZE) {
      // change X direction by making speed negative (goes in opposite direction)
      speedX [i] *= -1;
      
    } else if (yCoords [i]< 0 || yCoords [i] > CANVAS_HEIGHT - CIRCLE_SIZE) {
      // change Y direction by multiplying speed my negative 1
      speedY [i] *= -1;
      
    } else if (xCoords [i] < 0 || yCoords[i] < 0 || xCoords > CANVAS_WIDTH || yCoords > CANVAS_HEIGHT) {
      // if anything goes wrong,  reset coords to center point
      xCoords[i] = CANVAS_WIDTH / 2;
      yCoords [i] = CANVAS_HEIGHT / 2
    }

  }
}