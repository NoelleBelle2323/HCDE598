// File: HungryShapes.js
// Author: Lin Pang 
// Date: 12/7/18
// Class: HCDE 598 
// Email: linpang@uw.edu

// Description: 
// This program displays colorful shapes with various behaviors:
// 1.Shapes spin around it's own center point; the closer two shapes
// are to each other, the faster they spin; 
// 2. Shapes move randomly within the canvas; 
// 3. When a piece of food is placed on the screen (red or blue), shapes move towards
// the food with the same speed; (User hold down either "r" or "b" and click their mouse 
// on the canveas to place the food.)
// 4. Shapes move away from mouse hover, unless there is a piece of food nearby;
// 5. Clicking on a shape creates a new olive colored shape, which appears at 
// a random location around the center portion of the canvas. 
// 6. Clicking on a shape will change its color to yellow, and the shape dashes away at a randomly increased speed. 
// 7. When shapes are close to each other, they will move away from each other. 

// constants to set up the environment
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const BACKGROUND_COLOR = 160;

// circle and square sizes
var squareSize = 20;
var circleSize = 1.875 * squareSize;

// set up size of the food and the range within which it 
// will be "picked up" by a shape
var foodSize = 15;
var shapefoodRange = 35;

// set up how far between a shape and the mouse when 
// the mouse starts to "repel" the shape
var mouseRange = 100;


// set up arrays to keep track of the behaviors of the shapes, such as:
// spinning speed
// x and y coordinates
// linear movement speed
// color
var angle = [];
var shapeX = [];
var shapeY = [];
var shapeCurrentX = [];
var shapeCurrentY = [];
var speedX = [];
var speedY = [];
var shapeColor = [];

// set up variables to keep track of the location of the food; 
// and the distance between a piece of food and the shapes;
var distance;
var blueFoodX;
var blueFoodY;
var redFoodX;
var redFoodY;

// set up variables to keep track of whether the food has been placed on screen
// or been "eaten" by a shape; 
var redFoodIsPlaced = false;
var blueFoodIsPlaced = false;
var foodIsPlaced = false;

// set up a time variable to control how long the intruction is displayed
var time = 0;


function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  // initialize shapes x and y coords, their speed, color and spinning speed;
  angleMode(DEGREES);
  for (i = 0; i < 20; i++) {
    speedX[i] = 0.8;
    speedY[i] = 1.2;
    shapeX[i] = (random(10, CANVAS_WIDTH));
    shapeY[i] = (random(10, CANVAS_HEIGHT));
    shapeColor[i] = color(255, 230, 0);
    angle[i] = 0.2;

  }

}


function draw() {
  background(BACKGROUND_COLOR);

  // display instructions
  displayInstruction();

  // draw and make shapes spin
  spinShapes();

  // make shapes move around on canvas
  linearMove();

  // make shapes move away from each other when too close to each other
  bounceBall();

  // make shapes bounce back from the edge of the canvas;
  bounchBack();

  // check if "b" key is pressed
  // indicating user is about to place a blue piece of food
  BlueKeyTyped();

  // draw a blue piece of food
  drawBlueFood();

  // check if "r" key is pressed
  // indicating user is about to place a red piece of food
  RedKeyTyped();

  // draw a red piece of food
  drawRedFood();

  // make shapes move towards food
  moveTowardsRedFood();
  moveTowardsBlueFood();

  // make shapes move away from the mouse hover
  moveAwayfromMouse();

  // make a new shape when user clicks on an existing shape 
  makeNewShape();

}



// withinLeftRight(x) checks whether an object is within the width of the canvas 
// Input: x coordinate
// Output: true or false
function withinLeftRight(x) {

  // if x coordinate is smaller than canvas width minus radius of the circle
  // or x coordinate is larger than radius of the circle 
  // then shape is within the width of the canvas, function returns true 
  // otherwise function returns false
  if (x <= CANVAS_WIDTH - 1 / 2 * circleSize && x >= 1 / 2 * circleSize) {
    return true;


  } else {
    return false;
  }

}

// withinTopBottom(y) checks whether an object is within the height of the canvas 
// Input: y coordinate
// Output: true or false
function withinTopBottom(y) {

  // if y coordinate is smaller than canvas height minus radius of the circle
  // or y coordinate is larger than radius of the circle 
  // then shape is within the height of the canvas, function returns true 
  // otherwise function returns false
  if (y <= CANVAS_HEIGHT - 1 / 2 * circleSize && y >= 1 / 2 * circleSize) {
    return true;
  } else {
    return false;
  }

}


// spinShapes() creates shapes and makes the square spin around its center;
function spinShapes() {

  // this function controls the shapes' coordinates using translate() 
  // beacause rotate() makes shapes rotate around their origin (0,0) by default
  // I learned to do this from watching tutorial video online: 
  // https://www.youtube.com/watch?v=o9sgjuh-CBM
  for (i = 0; i < shapeX.length; i++) {
    push();
    translate(shapeX[i], shapeY[i]);
    angle[i] += 0.2;
    rotate(angle[i]);
    stroke('white');
    ellipseMode(CENTER);
    noFill();
    ellipse(0, 0, circleSize, circleSize);
    fill(shapeColor[i]);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, squareSize, squareSize);
    pop();
  }
}


// linearMove() function will loop through the shapes array
// and move the shapes accordingly.
function linearMove() {
  for (i = 0; i < shapeX.length; i++) {
    shapeX[i] = shapeX[i] + speedX[i];
    shapeY[i] = shapeY[i] + speedY[i];

  }


}


// bounchBack() makes the shapes bounce back if they hit the edge of the canvas
function bounchBack() {

  // using funtions that were created earlier:withinLeftRight(); withinTopBottom();
  // this loop checks each shape in the array
  for (i = 0; i < shapeX.length; i++) {

    // if shapes are at the left or right edge, change the direction of their x speed;
    if (withinLeftRight(shapeX[i])) {
      speedX[i] = speedX[i];
    } else {
      speedX[i] = -1 * speedX[i];

    }

    // if shapes are at the top or bottom edge, change the direction of their y speed;
    if (withinTopBottom(shapeY[i])) {
      speedY[i] = speedY[i];
    } else {
      speedY[i] = -1 * speedY[i];

    }

    // if shapes are at or about to go outside of the left or right edge, 
    // move them back to within the edge
    if (shapeX[i] <= 1 / 2 * circleSize) {
      shapeX[i] = 1 / 2 * circleSize + 1;
    }
    if (shapeX[i] >= CANVAS_WIDTH - 1 / 2 * circleSize) {
      shapeX[i] = CANVAS_WIDTH - 1 / 2 * circleSize - 1;
    }

    // if shapes are at or about to go outside of the top or bottom edge, 
    // move them back to within the edge
    if (shapeY[i] <= 1 / 2 * circleSize) {
      shapeY[i] = 1 / 2 * circleSize + 1;
    }
    if (shapeY[i] >= CANVAS_HEIGHT - 1 / 2 * circleSize) {
      shapeY[i] = CANVAS_HEIGHT - 1 / 2 * circleSize - 1;
    }
  }
}


// bounceBall() makes the shapes move away from each other 
// when they get too close to each other;
function bounceBall() {

  // this loop goes through the array and checks each shape against another shape 
  // in the array; j = i + 1 is to prevent checking the same shape against itself
  for (i = 0; i < shapeX.length; i++) {
    for (var j = i + 1; j < shapeX.length + 1; j++) {

      // calculate the distance between any two shapes in the array
      distance = dist(shapeX[i], shapeY[i], shapeX[j], shapeY[j]);

      // if the shapes are too close to each other 
      // change the direction of their speeds so they move away from each other
      if (distance < circleSize) {
        speedY[i] = -1 * speedY[i];
        speedX[i] = -1 * speedX[i];

      }

      // ADDED EFFECT: if shapes get too close to each other
      // make them spin faster, as if they are both excited and overwhelemed 
      // to be with each other...
      if (distance <= circleSize * 2) {

        angle[i] += 2;
        angle[j] += 2;


      } else {
        angle[i] += 0.2;
        angle[j] += 0.2;
      }

    }

  }
}


// BlueKeyTyped() checks if user clicks the mouse with the "b" key down
function BlueKeyTyped() {

  // if the conditions are met, return true, and store the location of the 
  // mouse click; assign the location of the blue food to the mouse's location where it was clicked;
  if (key === 'b' && mouseIsPressed && keyIsPressed === true) {
    blueFoodIsPlaced = true;
    foodIsPlaced = true;
    blueFoodX = pmouseX;
    blueFoodY = pmouseY;

    // Also at the same time, store the location of all the shapes
    for (i = 0; i < shapeX.length; i++) {
      shapeCurrentX[i] = shapeX[i];
      shapeCurrentY[i] = shapeY[i];

    }
  }
}

// RedKeyTyped() checks if user clicks the mouse with the "r" key down
function RedKeyTyped() {

  // if the conditions are met, return true, and store the location of the 
  // mouse click; assign the location of the red food to the mouse's location where it was clicked;
  if (key === 'r' && mouseIsPressed && keyIsPressed === true) {
    redFoodIsPlaced = true;
    foodIsPlaced = true;
    redFoodX = pmouseX;
    redFoodY = pmouseY;

    // Also at the same time, store the location of all the shapes
    for (i = 0; i < shapeX.length; i++) {
      shapeCurrentX[i] = shapeX[i];
      shapeCurrentY[i] = shapeY[i];

    }

  }
}


// drawBlueFood() draws a piece of blue food on canvas and removes it when it's been "eaten" by a shape;
function drawBlueFood() {
  noStroke();
  fill(102, 204, 255);
  rect(blueFoodX, blueFoodY, foodSize, foodSize);

  // this loop checks the distance between a shape and the food
  // if the shape is within the shapefoodRange to "grab" the food, then draw the food outside the canvas 
  // to make it look like it disappeared because it's been "eaten"
  // also change the color of the shape that "ate" the food to blue
  for (i = 0; i < shapeX.length; i++) {
    if (dist(shapeX[i], shapeY[i], blueFoodX, blueFoodY) <= shapefoodRange) {
      shapeColor[i] = color(102, 204, 255);
      blueFoodX = -100;
      blueFoodY = -100;
      blueFoodIsPlaced = false;
      foodIsPlaced = false;

    }


  }
}

// drawRedFood() draws a piece of red food on canvas and removes it when it's been "eaten" by a shape;
function drawRedFood() {
  noStroke();
  fill(255, 153, 153);
  rect(redFoodX, redFoodY, foodSize, foodSize);

  // this loop checks the distance between a shape and the food
  // if the shape is within the shapefoodRange to "grab" the food, then draw the food outside the canvas 
  // to make it look like it's been "eaten"
  // also change the color of the shape that "ate" the food to red
  for (i = 0; i < shapeX.length; i++) {
    if (dist(shapeX[i], shapeY[i], redFoodX, redFoodY) <= shapefoodRange) {
      shapeColor[i] = color(255, 153, 153);
      redFoodX = -100;
      redFoodY = -100;
      redFoodIsPlaced = false;
      foodIsPlaced = false;

    }
  }

}

// moveTowardsRedFoodshapes() makes shapes move towards the red food with the same speed
function moveTowardsRedFood() {

  for (i = 0; i < shapeX.length; i++) {

    for (j = i + 1; j < shapeX.length + 1; j++) {

      distance = dist(shapeX[i], shapeY[i], shapeX[j], shapeY[j]);

      // if a red piece of food is placed on canvas, and the shapes aren't too close to each other
      // give the shapes the same speed moving towards the food
      if (redFoodIsPlaced == true && distance > circleSize + 5 && i != j) {
        speedX[i] = -1.5 * (shapeCurrentX[i] - redFoodX) / dist(shapeCurrentX[i], shapeCurrentY[i], redFoodX, redFoodY);
        speedX[j] = -1.5 * (shapeCurrentX[j] - redFoodX) / dist(shapeCurrentX[j], shapeCurrentY[j], redFoodX, redFoodY);
        speedY[j] = -2 * (shapeCurrentY[j] - redFoodY) / dist(shapeCurrentX[j], shapeCurrentY[j], redFoodX, redFoodY);
        speedY[i] = -2 * (shapeCurrentY[i] - redFoodY) / dist(shapeCurrentX[i], shapeCurrentY[i], redFoodX, redFoodY);
      }
    }
  }
}

// moveTowardsBlueFood() makes shapes move towards the blue food with the same speed
function moveTowardsBlueFood() {
  for (i = 0; i < shapeX.length; i++) {
    for (j = i + 1; j < shapeX.length + 1; j++) {

      distance = dist(shapeX[i], shapeY[i], shapeX[j], shapeY[j]);

      // if a blue piece of food is placed on canvas, and the shapes aren't too close to each other
      // give the shapes the same speed moving towards the food
      if (blueFoodIsPlaced == true && distance > circleSize + 5 && i != j) {
        speedX[i] = -1.5 * (shapeCurrentX[i] - blueFoodX) / dist(shapeCurrentX[i], shapeCurrentY[i], blueFoodX, blueFoodY);
        speedX[j] = -1.5 * (shapeCurrentX[j] - blueFoodX) / dist(shapeCurrentX[j], shapeCurrentY[j], blueFoodX, blueFoodY);
        speedY[i] = -2 * (shapeCurrentY[i] - blueFoodY) / dist(shapeCurrentX[i], shapeCurrentY[i], blueFoodX, blueFoodY);
        speedY[j] = -2 * (shapeCurrentY[j] - blueFoodY) / dist(shapeCurrentX[j], shapeCurrentY[j], blueFoodX, blueFoodY);
      }
    }

  }
}


// moveAwayfromMouse() makes the shapes move away from the mouse hover
function moveAwayfromMouse() {
  for (i = 0; i < shapeX.length; i++) {

    // if the shapes move to within certain range to the mouse, and there is no food placed on canvas
    // plus the shapes are within the edges
    // change the speed of the shapes to move away from the mouse;
    if (dist(shapeX[i], shapeY[i], mouseX, mouseY) < mouseRange && foodIsPlaced == false && withinLeftRight(shapeX[i]) && withinTopBottom(shapeY[i])) {
      shapeCurrentX[i] = shapeX[i];
      shapeCurrentY[i] = shapeY[i];
      speedX[i] = 1.5 * (shapeCurrentX[i] - mouseX) / dist(shapeCurrentX[i], shapeCurrentY[i], mouseX, mouseY);
      speedY[i] = 2 * (shapeCurrentY[i] - mouseY) / dist(shapeCurrentX[i], shapeCurrentY[i], mouseX, mouseY);
    }

  }

}

// makeNewShape() adds a new shape to the array when user clicks on an existing shape;
// the shape that is clicked on also changes color to yellow, and speeds up as if it's 
// desperately trying to run away
function makeNewShape() {


  for (i = 0; i < shapeX.length; i++) {

    // this checks that if user clicks within the area of a shape, then add a new shape to
    // the arrays that keep track of the attributes of the shapes; 
    if (mouseIsPressed) {
      if (mouseX < shapeX[i] + 1 / 2 * circleSize && mouseX > shapeX[i] - 1 / 2 * circleSize) {
        if (mouseY < shapeY[i] + 1 / 2 * circleSize && mouseY > shapeY[i] - 1 / 2 * circleSize) {

          // change the color of the shape that was clicked on to yellow
          shapeColor[i] = color(255, 230, 0);

          // increase the speed of the shape that was clicked on
          speedX[i] += random(-60, 60);
          speedY[i] += random(-60, 60);

          // add a new shape at a random location within the center area of the canvas
          shapeX.push(random(200, 600));
          shapeY.push(random(150, 450));
          angle.push(0.2);
          shapeColor.push('olive');
          speedX.push(0.8);
          speedY.push(1.2);
          shapeCurrentX.push(400);
          shapeCurrentY.push(300);

        }
      }

    }

  }

}

// displayInstruction() displays the instruction for users when the game begins
// and gradually fades away the instruction.
function displayInstruction() {


  // text instruction will be displayed for 10s;
  if (time < 600) {
    instruction(190, 140);
    time++;

  }

  // text fade out 1: after 10s fade the color of the text and the background
  // this stays on screen for about 3s.
  if (time >= 600 && time < 800) {
    instruction(180, 145);
    time++;

  }

  // text fade out 2: after 13s fade the color of the text and the background a bit more
  // this stays on screen for about another 3s. 
  // Then the instruction disappears.
  if (time >= 800 && time < 1000) {
    instruction(170, 150);
    time++;

  }

}

// instruction(boxColor,textColor) displays instruction text with specific background box color and text color;
function instruction(boxColor, textColor) {
  textFont('Helvetica');
  fill(boxColor);
  rect(150, 350, 650, 160);
  fill(textColor);
  textSize(20);
  text("1. Press down 'r' or 'b' and click anywhere on the screen to ", 200, 400);
  text("place a piece of red or blue food.", 222, 430);
  text("2. Click on an existing shape to create a new shape.", 200, 470);

}