//Global Variables
var myColor = "black";

//for doors
var doorX = 60;
var doorY = 200;

//door handle
var knobX = 140;
var knobY = 300;

//welcome message
var staticMsg = "Welcome";
var instructionMsg = "Pick door 1, 2, or 3?";

//room 1 outcome messages
var msg2 = "Door 1: You ran into Jason";
var msgP3 = "Quick, press 0 to escape or 5 to hang out";
var msgGameOver = "GAME OVER";
var magGameOver2 = "You pressed 5";
//room 2 outcome messages
var msgP2 = "Door 2: You won 10 gold";
var msgPP2 = "Press 0 to explore more or 6 to count gold";
var msgCongrats = "Congrats";

//room3 outcome messages
var msg3 = "Door 3: You won a treat";
var msgPP3 = "Press 0 to leave or 4 to open it";
var msg4 = "Happy Halloween";
var msgPP4 = "You pressed 4. Enjoy your candy";

//gold
var goldCoinX = 60;
var goldCoinY = 100;
var goldCoinS1 = 60;
var goldCoinS2 = 60;

//jason parts
var positionx3 = 250;
var positiony3 = 250;

//Setup the canvas
function setup() {
  createCanvas(500, 500);

}

function draw() {
  //Items Redrawn with each time  
  background(220);
  fill('black')
  stroke('black');
  noStroke();
  fill(myColor);

  /* For planning purposes only
  // creates the grey rectangle in the upper left corner
   fill('grey');
   stroke('grey');
   rect(0, 0, 100, 20);

   // sets the color of the text
   fill('black')
   stroke('black');
   strokeWeight(1);

   // writes the text of the current coordinates in the corner
   text("x: " + mouseX + " y: " + mouseY, 10, 15);
  */

  if (key == "") {
    drawScreen0();
    //mask

  } else if (key == "0") {
    drawScreen01();
  } else if (key == "1") {
    drawScreen1();
  } else if (key == "2") {
    drawScreen3();
  } else if (key == "3") {
    drawScreen4();
  } else if (key == "4") {
    drawScreen5();
  } else if (key == "5") {
    drawScreenOver();
  } else if (key == "6") {
    drawScreenGold();
  }

  //fxn 1

  function drawScreen0() {
    //doors
    noStroke();
    rect(40, 100, 400, 300);
    fill("red")
    rect(doorX, doorY, 100, 200);
    fill("red")
    rect(doorX + 130, doorY, 100, 200);
    rect(doorX + 255, doorY, 100, 200);

    //door numbers
    fill("yellow")
    text("1", 100, 250);
    text("2", 230, 250);
    text("3", 360, 250);

    //door knobs  
    fill("yellow");
    ellipse(knobX, knobY, 30, 30);
    ellipse(knobX + 130, knobY, 30, 30);
    ellipse(knobX + 255, knobY, 30, 30);
    fill("red");

    //room roof
    triangle(40, 100, 438, 100, 240, -10);

    //Instructions
    textSize(50);
    text(staticMsg, 10, height - 50);
    textSize(30);
    text(instructionMsg, 10, height - 10);
  }
  //fxn 2
  function drawScreen01() {
    //doors
    noStroke();
    rect(40, 100, 400, 300);
    fill("red")
    rect(doorX, doorY, 100, 200);
    fill("red")
    rect(doorX + 130, doorY, 100, 200);
    rect(doorX + 255, doorY, 100, 200);

    //door numbers
    fill("yellow")
    text("1", 100, 250);
    text("2", 230, 250);
    text("3", 360, 250);

    //door knobs  
    fill("yellow");
    ellipse(knobX, knobY, 30, 30);
    ellipse(knobX + 130, knobY, 30, 30);
    ellipse(knobX + 255, knobY, 30, 30);
    fill("red");

    //room roof
    triangle(40, 100, 438, 100, 240, -10);

    //Instructions
    textSize(30);
    text("You choose 0. Welcome back", 10, height - 50);
    textSize(30);
    text("Pick a new door", 10, height - 10);
  }

  //fxn 3

  function drawScreen1() {
    background("black");
    noStroke();

    //jason's mask
    fill("#B55A2D");
    fill("white")
    ellipse(positionx3, positiony3, 100, 100);
    fill('black');
    ellipse(positionx3 - 20, positiony3 - 5, 30, 30);
    ellipse(positionx3 + 20, positiony3 - 5, 30, 30);
    ellipse(positionx3, positiony3 + 30, 10, 30);
    ellipse(positionx3 - 15, positiony3 + 30, 10, 30);
    ellipse(positionx3 + 15, positiony3 + 30, 10, 30);

    //room main message
    fill("red");
    textSize(30);
    text(msg2, 20, 400);

    //room sub message
    textSize(25);
    text(msgP3, 15, 450);
  }

  //fxn 4
  function drawScreen3() {
    //room main message
    textSize(30);
    text(msgP2, 10, 100);

    //room sub meessage 
    textSize(20);
    text(msgPP2, 10, 130);

    //money bag
    noStroke();
    fill(222, 171, 95);
    strokeWeight(20);
    quad(100, 150, 400, 150, 315, 240, 180, 240)
    ellipse(250, 350, 250, 270);
    textSize(20);

    //dollar sign
    fill("yellow")
    textSize(200);
    text("$", 200, 400);
  }
  //fx 5
  function drawScreen4() {
    //main room message
    textSize(40);
    text(msg3, 10, height - 100);

    //aub room message
    textSize(30);
    text(msgPP3, 10, height - 50);

    //tootsie roll wrapper
    noStroke();
    fill("#431208");
    rect(100, 200, 300, 100);
    fill("white");
    textSize(40);

    //name of candy
    text("Tootsie", 180, 265);

    //white handles 
    rect(60, 200, 50, 100);
    rect(400, 200, 50, 100);

    //red stripes
    fill("red");
    rect(70, 200, 25, 100);
    rect(410, 200, 25, 100);
  }
  //fx 6
  function drawScreen5() {
    //candy 
    fill("#7A513F");
    rect(120, 150, 250, 100);

    //victory message
    textSize(40);
    fill("orange");
    text(msg4, 10, height - 100);

    //sub victory message 
    fill("black");
    textSize(30);
    text(msgPP4, 10, height - 50);

  }
  //fx 7
  function drawScreenOver() {
    //room background
    background("black");
    noStroke();

    //room main message
    fill("red");
    textSize(70);
    text(msgGameOver, 30, 270);
    textSize(50);
    text(magGameOver2, 100, 340);
  }
  //fx 8
  function drawScreenGold() {
    textSize(70);
    text(msgCongrats, 60, 270);
    textSize(40);
    text("You pressed 6", 60, 320);


    //first half of gold
    fill("yellow");
    ellipse(goldCoinX, goldCoinY, goldCoinS1, goldCoinS2);
    ellipse(goldCoinX + 80, goldCoinY, goldCoinS1, goldCoinS2);
    ellipse(goldCoinX + 160, goldCoinY, goldCoinS1, goldCoinS2);
    ellipse(goldCoinX + 240, goldCoinY, goldCoinS1, goldCoinS2);
    ellipse(goldCoinX + 320, goldCoinY, goldCoinS1, goldCoinS2);

    //second half of gold 
    ellipse(goldCoinX, goldCoinY + 300, goldCoinS1, goldCoinS2);
    ellipse(goldCoinX + 80, goldCoinY + 300, goldCoinS1, goldCoinS2);
    ellipse(goldCoinX + 160, goldCoinY + 300, goldCoinS1, goldCoinS2);
    ellipse(goldCoinX + 240, goldCoinY + 300, goldCoinS1, goldCoinS2);
    ellipse(goldCoinX + 320, goldCoinY + 300, goldCoinS1, goldCoinS2);

  }

}