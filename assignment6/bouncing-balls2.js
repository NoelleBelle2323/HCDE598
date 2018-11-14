/*File: sketch.js (sketch name: a6 bouncing balls)
 *Author: Mitchell Fajardo
 *Date: Nov 12, 2018
 *Class: HCDE 598C - Intro to Programming
 *Email: mrf707@uw.edu
 *Assignment: A6 - Bouncing Shapes
 *
 *Description:
 *This program is an exercise in using arrays.
 *A number of balls will be drawn.
 *(The number starts at 5 and increments by 5 with each mouse click.)
 *These balls will move across the canvas and bounce whenever they hit a wall.
 */

//set constants for canvas size
const canvasWidth = 450;
const canvasHeight = 450;

//set a constant for the radius of all balls
const ballRadius = 10;

//set a constant for the maximum speed (in units per frame) of any ball
const ballMaxSpeed = 10;

//a variable to store the number of balls that will be drawn
const initialBallCount = 5;

//declare empty arrays for bouncing balls
var ballXs = []; //holds each ball's x position
var ballYs = []; //holds each ball's y position
var ballMoveXs = []; //holds the values by which each ball's x position will change
var ballMoveYs = []; //holds the values by which each ball's y positions will change
var ballColors = []; //holds the fill color for each ball


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  
  //for each ball that will be drawn (based on initialBallCount)
  for (var i = 0; i < initialBallCount; i++) {
    initializeBall(i); //add an entry to each bouncing ball array
  }
}

function draw() {
  background(220);
  
  //for each ball that exists (as indicated by the length of the arrays)
  for (var i = 0; i < ballXs.length; i++) {
		drawBall(i); //draw the ball at its current position
    moveBall(i); //update the ball's position for the next frame
    checkDirection(i); //check if the ball is hitting a wall and needs to bounce
  }
  
  //displays instructions and ball count
  fill('black');
  textSize(16);
  text('Click the mouse to add 5 bouncing balls!', 10, 20);
  text('Current balls: ' + ballXs.length, 10, 40);
}

//initializeBall() takes an array index number (for a ball) as a parameter
//and randomly sets the (initial) position, movement, and color
function initializeBall(indexNumber) {
  //set the initial position to a random spot on the canvas
  ballXs[indexNumber] = round(random(0 + ballRadius, canvasWidth - ballRadius));
  ballYs[indexNumber] = round(random(0 + ballRadius, canvasHeight - ballRadius));
  
  //set the x and y movement rates (with a random value based on ballMaxSpeed)
  ballMoveXs[indexNumber] = round(random(ballMaxSpeed * -1, ballMaxSpeed));
  ballMoveYs[indexNumber] = round(random(ballMaxSpeed * -1, ballMaxSpeed));
  
  //set its fill color (with a random grayscale value)
  ballColors[indexNumber] = round(random(0,256));
}

//drawBall() references the arrays for the ball's current position and draws it
function drawBall(indexNumber) {
  fill(ballColors[indexNumber]);
  ellipse(ballXs[indexNumber], ballYs[indexNumber], ballRadius * 2, ballRadius * 2);
}

//moveBall() references the arrays to adjust the ball's position
//based on its x and y movement values
//the ball will be drawn at the updated values in the following frame
function moveBall(indexNumber) {
  //change the x and y values based on movement values
  ballXs[indexNumber] = ballXs[indexNumber] + ballMoveXs[indexNumber];
  ballYs[indexNumber] = ballYs[indexNumber] + ballMoveYs[indexNumber];
}

//checks a ball's updated positions and determines if the direction needs to change
function checkDirection(indexNumber) {
  //if the ball would hit a left or right wall
  if ((ballXs[indexNumber] <= (0 + ballRadius)) || (ballXs[indexNumber] >= (canvasWidth - ballRadius))) {
    ballMoveXs[indexNumber] = ballMoveXs[indexNumber] * -1; //flip its horizontal direction
  }
  //if the ball would hit a top or bottom wall
  if ((ballYs[indexNumber] <= (0 + ballRadius)) || (ballYs[indexNumber] >= (canvasHeight - ballRadius))) {
		ballMoveYs[indexNumber] = ballMoveYs[indexNumber] * -1; //flip its vertical direction
  }
}

//when the mouse is clicked, add 5 new balls
function mouseClicked() {
  for (var i = 0; i < 5; i++) {
  	initializeBall(ballXs.length);
  }
}