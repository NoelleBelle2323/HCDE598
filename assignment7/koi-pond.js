// File: fishFinal.js  
// Author: Sondra Yancey 
// Date: 11/15/18
// Class: HCDE 598  
// Email: Sondray@uw.edu 
// Description:  
// This program shows different fish swimming (used code from bouncing ball assignment)


const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const CIRCLE_RADIUSMAX = 100; // largest fish size
const CIRCLE_RADMIN = 15; // smallest fish size
const INIT_VEL = 1; // inital velocity of fish
const FISH_COUNT = 15; // number of fish on screen
const FISHFOODSIZE = 15;
const FISHSLOWDOWN = 150;

var X = []; // current fish x coordinates
var Y = []; // current fish y coordinates
var xVel = []; // horizontal velocity of the bouncing fish
var yVel = []; // vertical velocity of bouncing fish
var fishColor = []; //color per fish
var fishSize = []; //size per fish
var fishFoodx = 20; //position of fish food
var fishFoody = 20;


function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  // for all fish, set inital random xy coordinates, velocity, color and size
  for (i = 0; i < FISH_COUNT; i++) {
    X[i] = round(random(CIRCLE_RADIUSMAX, CANVAS_WIDTH - CIRCLE_RADIUSMAX));
    Y[i] = round(random(CIRCLE_RADIUSMAX, CANVAS_HEIGHT - CIRCLE_RADIUSMAX));
    xVel[i] = random(-INIT_VEL, INIT_VEL);
    yVel[i] = random(-INIT_VEL, INIT_VEL);
    fishColor[i] = randomColor();
    fishSize[i] = random(CIRCLE_RADMIN, CIRCLE_RADIUSMAX);
  }

}

function draw() {
  background(117, 172, 235); // light blue

  //fish food position when mouse clicked
  fill(235, 143, 92);
  ellipse(fishFoodx, fishFoody, FISHFOODSIZE);

  // DRAW fish
  drawFish(X, Y, fishColor, fishSize, FISH_COUNT);

  //UPDATE fish position and velocity
  updateFish(X, Y, xVel, yVel, FISH_COUNT, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function mouseClicked() {
  fishFoodx = mouseX;
  fishFoody = mouseY;

  //updates fish position to go towards food (divided by 100 to slow them down)
  for (i = 0; i < FISH_COUNT; i++) {
    xVel[i] = (fishFoodx - X[i]) / FISHSLOWDOWN;
    yVel[i] = (fishFoody - Y[i]) / FISHSLOWDOWN;
  }
}

//returns a new random color for each fish
function randomColor() {
  var r = random(0, 255);
  var b = random(0, 255);
  var g = random(0, 255);

  return color(r, b, g);
}


//this function draws fish at positions specified by X and Y
//fish color and size are determined by fishColor and fishSize
function drawFish(X, Y, fishColor, fishSize, fishCount) {
  // for each fish draws with color, size and coordinates
  for (i = 0; i < fishCount; i++) {
    push();
    translate(1*X[i]+8, 1.0625*Y[i]+5); //moves shadow
    scale(fishSize[i]); //allows eyes and tail of fish shadow to be scaled to fish size
    if (xVel[i]<0)// changes shadow x direction when right to left
    {
    	scale(-1);
    }
    noStroke();
    //fish shadow
    fill(0,0,0,64);
		ellipse(0, 0, 1.0, 0.5); //body
    ellipse(0.35, 0.2, 0.3, 0.20); //eyes
    ellipse(0.35, -0.2, 0.3, 0.20);
    triangle(-0.5, 0, -0.75, 0.25, -0.75, -0.25); //tail
    pop();
    
    //fish
    push();
    translate(X[i], Y[i]); //moves 0,0 to fish position 
    scale(fishSize[i]); //allows eyes and tail of fish to be scaled to fish size
		if (xVel[i]<0) // changes fish x direction when right to left
    {
    	scale(-1);
    }
    stroke(0,0,0); //black
    strokeWeight(1 / fishSize[i]);
    fill(fishColor[i]);
    ellipse(0, 0, 1.0, 0.5); //body
    ellipse(0.35, 0.2, 0.3, 0.20); //eyes
    ellipse(0.35, -0.2, 0.3, 0.20);
    triangle(-0.5, 0, -0.75, 0.25, -0.75, -0.25); //tail
    pop();
  }
}

//This function moves fish and bounces them off sides of canvas
function updateFish(X, Y, xVel, yVel, fishCount, canvasW, canvasH) {
  // Update positions based on velocity
  for (i = 0; i < fishCount; i++) {
    X[i] = X[i] + xVel[i];
    Y[i] = Y[i] + yVel[i];

    //bounce when hit horizontal screen boundaries
    if (X[i] <= 0 || X[i] > canvasW) {
      xVel[i] = -xVel[i];
    }
    //bounce when hit vertical screen boundaries
    if (Y[i] <= 0 || Y[i] > canvasH) {
      yVel[i] = -yVel[i];
    }
  }
}