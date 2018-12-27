/*This is not as complete as I would have liked it.
a few gliches remain. The new pumpkin button does 
create a new pumpkin. It also creates an extra new 
pumpkin until and when a new brush is pressed.
*/

const CONST_WIDTH = 500;
const CONST_HEIGHT = 400;
const paletteWidth = 50;
const X1 = 10;
const Y1 = 75;
var brushSize = 26 //helps determin areas for 
//clicks on palette buttons and standardized brush sizes 
var xClicked;
var yClicked;
var brushValue = 0;
var buttonX = 43;
var lgRoundButtonY = 145;
var RectButtonY = 103;
var triangleButtonY = 62;
var leftLineButtonY = 183;
var rightLineButtonY = 221;
var candleButtonY = 255;
var orangeTriangleButtonY = 300;
var newPumpkinButtonY = 12;
var brushSizeSet = brushSize;
var c = 0;
var candleX = []; //x coordinate for candle brush array
var candleY = []; //y coordinate for candle brush array
var b = 0;


function setup() {
  createCanvas(CONST_WIDTH, CONST_HEIGHT);
  background(200);
  //draw the pumpkins and the palette in setup
  drawPumpkin();
  triangleBrushButton();
  rectangleBrushButton();
  lgRoundBrushButton();
  leftLineBrushButton();
  rightLineBrushButton();
  candleBrushButton();
  orangeTriangleBrushButton();
  newPupmkinButton();
}
//to be done in in the draw function:
//set brush
//pick and draw with brushes

function draw() {
  frameRate(20);
  b = randomColor();//color for candle brush animation

  setBrush();
  checkPaletteButtonPressed();
  redrawCandleBrush();

  //return brushValue to check which brush is picked
  ////////////debugging//////////////////////////////////
  print(brushValue);
}

//creates the values for the array of the CandleBrush
function redrawCandleBrush() {
  for (var i = 0; i < candleX.length; i++) {
    candleBrush(candleX[i], candleY[i]);
  }
}

//uses the value set from the checkPaletteButtonPressed to run
//brush functions
//prevents drawing on the palette without changing the brush


function setBrush() {
  if (brushValue == 1 && mouseX > paletteWidth + brushSizeSet / 2) {
    triangleBrush();
  } else {
    if (brushValue == 2 && mouseX > paletteWidth + brushSizeSet / 2) {
      rectangleBrush();
    } else {
      if (brushValue == 3 && mouseX > paletteWidth + brushSizeSet / 2) {
        lgRoundBrush();
      } else {
        if (brushValue == 4 && mouseX > paletteWidth + brushSizeSet / 2) {
          leftLineBrush();
        } else {
          if (brushValue == 5 && mouseX > paletteWidth + brushSizeSet / 2) {
            rightLineBrush();
          } else {

            if (brushValue == 6 && mouseX > paletteWidth + brushSizeSet / 2) {
              if (mouseIsPressed) { //pushes values to the array
                candleX.push(mouseX);
                candleY.push(mouseY);
              }
            }
            if (brushValue == 7 && mouseX > paletteWidth + brushSizeSet / 2) {
              orangeTriangleBrush();
            }
          }
        }
      }
    }
  }
}

//copied from examples in class
function mouseClicked() { //use this to check the 
  //most recent clicked location
  xClicked = mouseX;
  yClicked = mouseY;
}

//Draw a pumpkin to design
//create slightly random shape each time new pumpkin is pressed 
//or program is run
function drawPumpkin() {
  var pumpkinX = random(CONST_WIDTH - 100, CONST_WIDTH - 250);
  var pumpkinY = random(CONST_HEIGHT - 50, CONST_HEIGHT - 150);

  //orange color variables for ellipse and stroke color
  var r = 255;
  var g = 110
  var b = 0;

  noStroke();
  fill(c);
  rect(paletteWidth, 0, CONST_WIDTH - paletteWidth, CONST_HEIGHT);
  fill(r - 150, g, b);
  rect(paletteWidth + (CONST_WIDTH - paletteWidth) / 2 - CONST_HEIGHT / 20, 5, CONST_HEIGHT / 10, CONST_HEIGHT / 2, 15);
  fill(r, g, b);
  ellipse(CONST_WIDTH / 2 + paletteWidth / 2, CONST_HEIGHT / 2, pumpkinX, pumpkinY);
}

////////////////////////////Button selection functions///////////////////////////////
//checking to see if button is pressed 
//sets a value to each brush set
//sets area to click on each palette item

////////////////////sets brush value when ////////////////////
////////////////////mouse is clicked on brush///////////////////
function checkPaletteButtonPressed() {

  if (xClicked >= paletteWidth / 2 - brushSize / 2 &&
    xClicked <= paletteWidth / 2 + brushSize / 2 &&
    yClicked >= lgRoundButtonY - brushSize / 2 &&
    yClicked <= lgRoundButtonY + brushSize / 2) { // button is pressed
    brushValue = 3;
  } else {
    if (xClicked >= paletteWidth / 2 - brushSize / 2 &&
      xClicked <= paletteWidth / 2 + brushSize / 2 &&
      yClicked >= RectButtonY - brushSize / 2 &&
      yClicked <= RectButtonY + brushSize / 2) { // button is pressed
      brushValue = 2;
    } else {
      if (xClicked >= paletteWidth / 2 - brushSize / 2 &&
        xClicked <= paletteWidth / 2 + brushSize / 2 &&
        yClicked >= triangleButtonY - brushSize / 2 &&
        yClicked <= triangleButtonY + brushSize / 2) { // button is pressed
        brushValue = 1;
      } else {
        if (xClicked >= paletteWidth / 2 - brushSize / 2 &&
          xClicked <= paletteWidth / 2 + brushSize / 2 &&
          yClicked >= leftLineButtonY - brushSize / 2 &&
          yClicked <= leftLineButtonY + brushSize / 2) { // button is pressed
          brushValue = 4;
        } else {
          if (xClicked >= paletteWidth / 2 - brushSize / 2 &&
            xClicked <= paletteWidth / 2 + brushSize / 2 &&
            yClicked >= rightLineButtonY - brushSize / 2 &&
            yClicked <= rightLineButtonY + brushSize / 2) { // button is pressed
            brushValue = 5;
          } else {
            if (xClicked >= paletteWidth / 2 - brushSize / 2 &&
              xClicked <= paletteWidth / 2 + brushSize / 2 &&
              yClicked >= candleButtonY - brushSize / 2 &&
              yClicked <= candleButtonY + brushSize / 2) { // button is pressed
              brushValue = 6;
            } else {
              if (xClicked >= paletteWidth / 2 - brushSize / 2 &&
                xClicked <= paletteWidth / 2 + brushSize / 2 &&
                yClicked >= orangeTriangleButtonY - brushSize / 2 &&
                yClicked <= orangeTriangleButtonY + brushSize / 2) { // button is pressed
                brushValue = 7;
              } else {
                if (xClicked >= paletteWidth / 2 - brushSize / 2 &&
                  xClicked <= paletteWidth / 2 + brushSize / 2 &&
                  yClicked >= newPumpkinButtonY - brushSize / 2 &&
                  yClicked <= newPumpkinButtonY + brushSize / 2) { // button is pressed
                  //brushValue = 8;
                  newPumpkin(); //draws new pumpkin
                  candleX = []; //empties array X
                  candleY = []; //empties array Y

                }
              }
            }
          }
        }
      }
    }
  }
}

/////////color//////////
//random color function, thank you Elena
function randomColor() {
  var r = random(100, 255);
  var b = random(100, 255);
  var g = random(0, 1);

  return color(r, b, g);
}

////////////////////////PALETTE//////////////////////////////////
//palette shapes
//triangle button
function triangleBrushButton() {
  fill(c);
  noStroke();
  triangle(X1 + 5, Y1, X1 + 18, Y1 - 26, X1 + 31, Y1);
}

//Placement for rectangle brush
//size for brush
function rectangleBrushButton() {
  fill(c);
  noStroke();
  rect(X1 + 5, Y1 + 15, brushSize, brushSize);
}

//Placement for round brush
//size for brush
function lgRoundBrushButton() {
  fill(c);
  noStroke();
  ellipse(X1 + 19, Y1 + 70, brushSize, brushSize);
}

//Placement for candleBrush
//size for brush
function candleBrushButton() {
  fill(c);
  strokeWeight(2);
  rect(X1 + 10, Y1 + 180, brushSize - 16, brushSize);
  line(X1 + 15, Y1 + 175, X1 + 15, Y1 + 181);
  ellipse(X1 + 15, Y1 + 173, 5, 5);
  triangle(X1 + 12.5, Y1 + 173, X1 + 15, Y1 + 167, X1 + 17.5, Y1 + 173);
}

//Placement for linebrush1
//size for brush
function leftLineBrushButton() {
  stroke(c);
  strokeWeight(4);
  line(X1, Y1 + 95, X1 + 26, 196);
}

//Placement for linebrush2
//size for brush
function rightLineBrushButton() {
  stroke(c);
  strokeWeight(4);
  line(X1 + 26, 208, X1, 234);
}

//"eraser" brush
function orangeTriangleBrushButton() {
  var r = 255;
  var g = 110
  var b = 0;
  fill(r, g, b);
  noStroke();
  triangle(X1 + 2, Y1 + 240, X1 + 16, Y1 + 214, X1 + 30, Y1 + 240);
}

//Placement for new pumpmkin button

function newPupmkinButton() {
  var r = 255;
  var g = 110
  var b = 0;
  fill(r, g, b);
  noStroke();
  fill(r - 150, g, b);
  rect(X1 + 15, Y1 - 70, 8, 20, 3);
  fill(r, g, b);
  ellipse(X1 + 19, Y1 - 50, brushSize, brushSize);
}

/////////////////////////////////Brushes//////////////////////////////////////

//draw a new pumpkin and erase all marks 
function newPumpkin() {
  if (mouseIsPressed) {
    drawPumpkin();
  }
}

function lgRoundBrush() {
  if (mouseIsPressed) {
    noStroke();
    fill(c);
    ellipse(mouseX, mouseY, brushSize, brushSize);
  }
}

function triangleBrush() {
  if (mouseIsPressed) {
    noStroke();
    fill(c);
    triangle(mouseX - brushSize / 2, mouseY + brushSize / 2 * tan(PI / 3) / 2, mouseX, mouseY - brushSize / 2 * tan(PI / 3) / 2, mouseX + brushSize / 2, mouseY + brushSize / 2 * tan(PI / 3) / 2);
  }
}

function rectangleBrush() {
  if (mouseIsPressed) {
    noStroke();
    fill(c);
    rect(mouseX - brushSize / 2, mouseY - brushSize / 2, brushSize, brushSize);
  }
}

function candleBrush(candleBrushX, candleBrushY) {
  noStroke();
  fill(b);
  ellipse(candleBrushX, candleBrushY, brushSize - 16, brushSize - 16);
}

function leftLineBrush() {
  if (mouseIsPressed) {
    strokeWeight(4);
    stroke(c);
    line(mouseX - brushSize / 2, mouseY - brushSize / 2, mouseX + brushSize / 2, mouseY + brushSize / 2);
  }
}

function rightLineBrush() {
  if (mouseIsPressed) {
    strokeWeight(4);
    stroke(c);
    line(mouseX + brushSize / 2, mouseY - brushSize / 2, mouseX - brushSize / 2, mouseY + brushSize / 2);
  }
}

function orangeTriangleBrush() {
  if (mouseIsPressed) {
    var r = 255;
    var g = 110
    var b = 0;
    noStroke();
    fill(r, g, b);
    triangle(mouseX - brushSize / 2, mouseY + brushSize / 2 * tan(PI / 3) / 2, mouseX, mouseY - brushSize / 2 * tan(PI / 3) / 2, mouseX + brushSize / 2, mouseY + brushSize / 2 * tan(PI / 3) / 2);
  }
}