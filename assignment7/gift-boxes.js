// File: catch gift boxes
// Author: Jessica Biondo
// Date: 12/9/18
// Class: HCDE 598
// Email: jessb35@uw.edu
/* Description: when mouse is clicked on a box, 
drag to place in gift bag
*/

// constants to set up the environment
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const BACKGROUND_COLOR = 255;

// var for game instructions
var words = 'Help Mr. Bluelight add these gift boxes by catching (clicking on) and dropping (dragging) into the Santa bag';

// variable for box size
var boxSize = 20

// variable for box size
var giftSize = [];

//var boxes = [];
var lockedgifts;

// var hold x and y coordinates of gift boxes
var giftX = [];
var giftY = [];

// var hold the speed for gift boxes' along X and Y coord
var giftXSpeed = [];
var giftYSpeed = [];

// var gift box color
var giftColor = [];

// var for dragging box
var overbox = false
var locked = false;
var xOffset = 0.0;
var yOffset = 0.0;

// var for character color
var body = ("#87CEFA")
var eyeswhite = ("FFFFFF")
var eyesblack = ("#000000")
var eyesblue = ("#0000FF")

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  rectMode(RADIUS);
  // strokeWeight(2);
  for (var i = 0; i < 20; i++) {
    // randomly assign x and y betweeen 100 and 350
    giftX[i] = round(random(100, 350));
    giftY[i] = round(random(100, 350));
  }
  // initialize random speed and colors for boxes
  for (i = 0; i < giftX.length; i++) {
    giftXSpeed[i] = (random(1, 2));
    giftYSpeed[i] = (random(1, 2));
    giftColor[i] = randomColor();
    giftSize[i] = boxSize;
  }
}

function draw() {
  background(BACKGROUND_COLOR);
  textSize(18);
  text(words, 25, 20, 350)
  drawbag();
  drawbluelight();
  drawGifts();
  moveGifts();
  for (var i = 0; i < giftX.length; i++) {
    // test if mouse is over box
    if (mouseX > giftX[i] - giftSize[i] && mouseX < giftX[i] + giftSize[i] &&
      mouseY > giftY[i] - giftSize[i] && mouseY < giftY[i] + giftSize[i]) {
      overBox = true;
      if (!locked) {
        stroke(255);
        fill(244, 122, 158);
        lockedgifts = i;
        mousePressed()


      }
    } else {

      stroke('gray');
      fill(244, 122, 158);
      overBox = false;
    }
  }
}

function drawGifts() {
  for (var i = 0; i < giftX.length; i++) {
    drawGiftbox(giftX[i], giftY[i], giftSize[i], giftColor[i]);
  }
}
// function to draw the box
function drawGiftbox(bX, bY, bSize, bColor) {
  strokeWeight(1);
  stroke(220, 240, 230);
  fill(bColor);
  rect(bX, bY, bSize, bSize);

}
// loop through boxes and speeds
function moveGifts() {
  for (i = 0; i < giftX.length; i++) {


    // check if shape is outside canvas
    if (giftX[i] < 0 || giftX[i] > CANVAS_WIDTH - giftSize[i]) {
      // change X direction
      giftXSpeed[i] *= -1;
    } else if (giftY[i] < 0 || giftY[i] > CANVAS_HEIGHT - giftSize[i]) {
      // change Y direction
      giftYSpeed[i] *= -1;
    } else if (giftX[i] < 0 || giftY[i] < 0 || giftX[i] > CANVAS_WIDTH || giftY[i] > CANVAS_HEIGHT) {
      // reset coords
      giftX[i] = CANVAS_WIDTH / 2;
      giftY[i] = CANVAS_HEIGHT / 2;
    }

    // move box
    giftX[i] += giftXSpeed[i];
    giftY[i] += giftYSpeed[i];

  }
}


// functions to hold and move boxes
function mousePressed() {
  if (overBox) {
    locked = true;
    fill(255, 255, 255);

  } else {
    locked = false;
  }
  xOffset = mouseX - giftX[lockedgifts];
  yOffset = mouseY - giftY[lockedgifts];

}

function mouseDragged() {
  if (locked) {

    giftX[lockedgifts] = mouseX - xOffset;
    giftY[lockedgifts] = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
  giftSize[lockedgifts] = 0
}


// function to randomize color
function randomColor() {
  var r = random(0, 255);
  var b = random(0, 255);
  var g = random(0, 255);


  return color(r, b, g);
}

//red Santa bag 
function drawbag() {
  fill('#CC0000')
  noStroke()
  rect(350, 430, 55, 55);
  arc(350, 475, 175, 175, 150, PI + QUARTER_PI, PIE);
}

// portrait of retired mr bluelight
function drawbluelight() {
  // body
  fill(body) //lt blue
  ellipse(200, 375, 120, 120);

  //neck
  fill(body) //lt blue
  rect(200, 430, 20, 20);

  // eyes
  fill("white") // eyes white outside
  ellipse(180, 355, 15, 40);
  ellipse(210, 355, 15, 40);
  fill(eyesblue) // eyes blue 
  ellipse(180, 355, 10, 35);
  ellipse(210, 355, 10, 35);
  fill(eyesblack) // eyes black
  ellipse(180, 355, 8, 25);
  ellipse(210, 355, 8, 25);
  fill(eyeswhite) // eyes white inside
  stroke(1)
  ellipse(180, 362, 5, 10);
  ellipse(210, 362, 5, 10);

  // eyebrows
  line(170, 330, 190, 310);
  line(200, 310, 220, 330);

  // mouth
  noFill(); //remove color once mouth is correct
  arc(200, 385, 60, 60, 0, PI, PI + QUARTER_PI);

  // body
  strokeWeight(2)
  stroke(eyesblack);
  line(170, 475, 225, 475);
  line(170, 470, 225, 470);
  line(170, 455, 225, 455);
  line(170, 460, 225, 460);
  line(170, 465, 225, 465);

  // legs
  line(180, 475, 180, 525);
  line(215, 475, 215, 525);

}