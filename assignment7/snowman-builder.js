//snowman-builder
//by joshua holland
//hcde 598 
//this winter themed appiication builds a snowman
//to interact with each screen you use the number pad and mouse at the end

//controls canvas size
const CANVAS_WIDTH = 780;
const CANVAS_HEIGHT = 600;

//sets background used in sketch
const BACKGROUND_COLOR = "#8CA5B9";

//snowman parts
const BODY = 200;
const WAIST = 150;
const HEAD = 100;
const SW = 5; //short for stroke weight

//colors for LV scarf
const LV_SCARF_COLOR1 = '#866656';
const LV_SCARF_COLOR2 = '#9D7C57';

//parameters for each checker box on scarf
const BOX_SIZE = 35;
const BOX_WIDTH = 0;

//checker shape of scarf
const CHECKER_BOX_SHAPE = 4;

//used to determine starting point of scarf checkers
const X_ORIGIN = 100;
const Y_ORIGIN = 50;

//variable set controls snow fall
var flurrySize = 500;
var xPositionOfFlake = [];
var yPositionOfFlake = [];
var flakeSize = [];
var directionOfFlakes = [];
var minFlakeSize = 1;
var maxFlakeSize = 5;
var snowFlakeColor = 255;


//constant sets text of sign
var signText = "#DBB779";

//displays instructions for user on the sign to progress in the story
//instructions 
var instruction1 = "Do you want to";
var instruction1_2 = "build a snowman?";
var instruction1_3 = "Press 1";

//second set of instructions for user
var instruction2 = "Now add a middle";
var instruction2_1 = "section.";
var instruction2_2 = "Press 2";

//third set of instructions for user 
var instruction3 = "Finish the body.";
var instruction3_1 = "Add the head.";
var instruction3_2 = "Press 3";

//fourth set of instructions for user
var instruction4 = "Now add the eyes.";
var instruciton4_1 = "Press 4";

//fifth set of instructions 
var instruction5 = "Give him a nose";
var instruction5_1 = "Press 5";

//fifth set of instructions for user
var instruction6 = "Next up are arms";
var instruction6_1 = "Press 6";

//sixth set of instructions for user 
var instruction7 = "Give him buttons";
var instruction7_1 = "Press 7";

//eighth set of instructions for user
var instruction8 = "Dress him up.";
var instruction8_1 = "Add a hat";
var instruction8_2 = "Press 8";

//nineth set of instructions for user
var instruction9 = "Keep him warm.";
var instruction9_1 = "Add a scarf";
var instruction9_2 = "Press 9";

//tenth set of instrucitons for user 
var instruction10 = "Click & move";
var instruction10_1 = "right for";
var instruction10_2 = "a special message";

//special messages that display to the sign's left and right
var instructions11 = "Happy Holidays";
var instructions12 = "Enjoy Winter break!";


//sets up the page
function setup() 
	{
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  frameRate(30);
  noStroke();
  
//this area creates the snow throughout the application
  for (var i = 0; i < flurrySize; i++) {
    flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
    xPositionOfFlake[i] = random(0, width);
    yPositionOfFlake[i] = random(0, height);
    directionOfFlakes[i] = round(random(0, 1));
  }
}

//draws elements of the story one screen at a time
function draw() 
{
  //contorls items drawn with each frame
  background(BACKGROUND_COLOR);
  if (key == "") {
    screen01();
  } else if (key == "0") {
    screen01();
  } else if (key == "1") {
    screen1();
  } else if (key == "2") {
    screenv2();
  } else if (key == "3") {
    screenv3();
  } else if (key == "4") {
    screenv4();
  } else if (key == "5") {
    screenv5();
  } else if (key == "6") {
    screenv6();
  } else if (key == "7") {
    screenv7();
  } else if (key == "8") {
    screenv8();
  } else if (key == "9") {
    screenv9();
  }
}

function screen01() {
  snowGround();
  instructionsign();
  instructions1();
  tree();
  drawSnow();
}

//function screen0 ()
//{
//}

function screen1() {
    snowGround();
  	snowmanBase();
  instructionsign();
  instructions2();
  tree();
  drawSnow();
}

function screenv2() {
  snowmanBase();
  snowmanMiddle();
  snowGround();
  instructionsign();
  instructions3();
  tree();
  drawSnow();
}

function screenv3() {
  snowmanBase();
  snowmanMiddle();
  snowmanHead();
  snowGround();
  instructionsign();
  instructions4();
  tree();
  drawSnow();
}

function screenv4() {
  snowmanBase();
  snowmanMiddle();
  snowmanHead();
  snowmanEyes();
  snowGround();
  instructionsign();
  instructions5();
  tree();
  drawSnow();
}

function screenv5() {
  snowmanBase();
  snowmanMiddle();
  snowmanHead();
  snowmanEyes();
  snowmanNose();
  snowGround();
  instructionsign();
  instructions6();
  tree();
  drawSnow();
}

function screenv6() {
  snowmanHands()
  snowmanBase();
  snowmanMiddle();
  snowmanHead();
  snowmanEyes();
  snowmanNose();
  snowGround();
  instructionsign();
  instructions7();
  tree();
  drawSnow();
}


function screenv7() {
  snowmanHands()
  snowmanBase();
  snowmanMiddle();
  snowmanHead();
  snowmanEyes();
  snowmanNose();
  snowmanButtons();
  snowGround();
  instructionsign();
  instructions8();
  tree();
  drawSnow();
}

function screenv8() {
  snowmanHands()
  snowmanBase();
  snowmanMiddle();
  snowmanHead();
  snowmanEyes();
  snowmanNose();
  snowmanButtons();
  snowmanHatTop();
  snowmanHatrim();
  snowGround();
  instructionsign();
  instructions9();
  tree();
  drawSnow();
}

function screenv9() {
  snowmanHands()
  snowmanBase();
  snowmanMiddle();
  snowmanHead();
  snowmanEyes();
  snowmanNose();
  snowmanButtons();
  snowmanHatTop();
  snowmanHatrim();
  lvScarf();
  lvScarfTop();
  snowGround();
  instructionsign();
  instructions10();
  tree();
  drawSnow();
  holidayBoxTheme();
  happyHolidays();
  enjoyBreak();
}


function snowmanBase() {
  ellipseMode(CENTER);
  noStroke();
  fill(245);
  ellipse(mouseX + 200, height - 200, BODY);
}

function snowmanMiddle() {
  fill(250);
  noStroke();
  ellipse(mouseX + 200, height - 350, WAIST);
}

function snowmanHead() {
  fill(250);
  noStroke();
  ellipse(mouseX + 200, height - 450, HEAD);
}

function snowmanEyes() {
  fill(0);
  ellipse(mouseX + 180, height - 460, 10);
  ellipse(mouseX + 210, height - 460, 12);
}

function snowmanNose() { //noStroke();
  fill(239, 165, 78);
  triangle(mouseX + 200, height - 430, mouseX + 205, height - 450, mouseX + 100, height - 450);
}

function snowmanHands() {
  stroke(70, 56, 40);
  strokeWeight(SW);
  line(mouseX - BODY / 1.4 + 200, height - 500, mouseX - BODY / 3.2 + 300, height - 190);
  line(mouseX + BODY / 1.4 + 200, height - 500, mouseX + BODY / 3.2 + 100, height - 190)
}

function snowGround() {
  rectMode(CORNER);
  fill(240);
  noStroke();
  rect(0, height - 100, width, 100);
}

function snowmanHatrim() {
  fill(0);
  rect(mouseX + 135, height - 490, width / 6, 10);
}

function snowmanHatTop() {
  fill(0);
  rect(mouseX + 160, height - 560, width / 10, 75);
}

//snowmanbuttons

function snowmanButtons() {
  fill(0);
  ellipse(mouseX + 200, height - 380, 10);
  ellipse(mouseX + 200, height - 350, 12);
  ellipse(mouseX + 200, height - 320, 12);
}

function lvScarfTop() {
  {
    //first column of checker boxes
    for (i = 0; i < CHECKER_BOX_SHAPE; i++) {
      var xRowStart = Y_ORIGIN + i * BOX_SIZE;
      rect(mouseX + xRowStart + 80, height - 430, BOX_SIZE, BOX_SIZE);
      //(xRowStart+100, mouseX, BOX_SIZE, BOX_SIZE);
      if (isOdd(i)) {
        fill(LV_SCARF_COLOR1);
      } else {
        fill(LV_SCARF_COLOR2);
      }

    }
  }
  ///funcation ends

  function isOdd(n) {
    // compute remainder of division by two
    remainder = n % 2;
    if (remainder == 1) {
      return true;
    } else {
      return false;
    }
  }
}

///function starts
function lvScarf() {
  //first column of checker boxes
  for (i = 0; i < CHECKER_BOX_SHAPE; i++) {
    var yRowStart = Y_ORIGIN + i * BOX_SIZE;
    rect(mouseX + 140, yRowStart + 120, BOX_SIZE, BOX_SIZE);
    if (isOdd(i)) {
      fill(LV_SCARF_COLOR1);
    } else {
      fill(LV_SCARF_COLOR2);
    }

  }
  ///funcation ends
  function isOdd(n) {
    // compute remainder of division by two
    remainder = n % 2;
    if (remainder == 1) {
      return true;
    } else {
      return false;
    }
  }
}

function tree() {
  fill("#B46E00")
  rect(mouseX - 450, 350, 50, 150);
  fill("#4cfe00")
  triangle(mouseX - 600, height - 200, mouseX - 430, height - 500, mouseX - 250, height - 200);

  //right tree
  fill("#B46E00")
  rect(mouseX + 930, 350, 50, 150);
  fill("#4cfe00")
  triangle(mouseX + 800, height - 200, mouseX + 950, height - 500, mouseX + 1100, height - 200);
}

function instructionsign() {
  fill("#AC8B89");
  rect(mouseX + 400, 350, 50, 150);
  rect(mouseX + 650, 350, 50, 150);
  rect(mouseX + 400, 200, 300, 200);
}

function instructions1() {
  fill(signText);
  textSize(25);
  text(instruction1, mouseX + 450, height - 350);
  text(instruction1_2, mouseX + 454, height - 300);
  text(instruction1_3, mouseX + 454, height - 250);
}

function instructions2() {
  fill(signText);
  textSize(25);
  text(instruction2, mouseX + 450, height - 350);
  text(instruction2_1, mouseX + 454, height - 300);
  text(instruction2_2, mouseX + 454, height - 250);
}

function instructions2() {
  fill(signText);
  textSize(25);
  text(instruction2, mouseX + 450, height - 350);
  text(instruction2_1, mouseX + 454, height - 300);
  text(instruction2_2, mouseX + 454, height - 250);
}


function instructions3() {
  fill(signText);
  textSize(25);
  text(instruction3, mouseX + 450, height - 350);
  text(instruction3_1, mouseX + 454, height - 300);
  text(instruction3_2, mouseX + 454, height - 250);
}

function instructions4() {
  fill(signText);
  textSize(25);
  text(instruction4, mouseX + 450, height - 350);
  text(instruciton4_1, mouseX + 454, height - 300);
  //text(instruction4_2, mouseX+454, height - 250);
}

function instructions5() {
  fill(signText);
  textSize(25);
  text(instruction5, mouseX + 450, height - 350);
  text(instruction5_1, mouseX + 454, height - 300);
  //text(instruction4_2, mouseX+454, height - 250);
}


function instructions6() {
  fill(signText);
  textSize(25);
  text(instruction6, mouseX + 450, height - 350);
  text(instruction6_1, mouseX + 454, height - 300);
  //text(instruction4_2, mouseX+454, height - 250);
}

function instructions7() {
  fill(signText);
  textSize(25);
  text(instruction7, mouseX + 450, height - 350);
  text(instruction7_1, mouseX + 454, height - 300);
  //text(instruction4_2, mouseX+454, height - 250);
}

function instructions8() {
  fill(signText);
  textSize(25);
  text(instruction8, mouseX + 450, height - 350);
  text(instruction8_1, mouseX + 454, height - 300);
  text(instruction8_2, mouseX + 454, height - 250);

}

function instructions9() {
  fill(signText);
  textSize(25);
  text(instruction9, mouseX + 450, height - 350);
  text(instruction9_1, mouseX + 454, height - 300);
  text(instruction9_2, mouseX + 454, height - 250);
}

function instructions10() {
  fill(signText);
  textSize(25);
  text(instruction10, mouseX + 450, height - 350);
  text(instruction10_1, mouseX + 454, height - 300);
  text(instruction10_2, mouseX + 454, height - 250);
}

function drawSnow() {
  fill(snowFlakeColor);
  for (var i = 0; i < xPositionOfFlake.length; i++) {
    ellipse(xPositionOfFlake[i], yPositionOfFlake[i], flakeSize[i], flakeSize[i]);
    if (directionOfFlakes[i] == 0) {
      xPositionOfFlake[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, 0.1, 0.5);
    } else {
      xPositionOfFlake[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, 0.1, 0.5);
    }
    yPositionOfFlake[i] += flakeSize[i] + directionOfFlakes[i];
    if (xPositionOfFlake[i] > width + flakeSize[i] || xPositionOfFlake[i] < -flakeSize[i] || yPositionOfFlake[i] > height + flakeSize[i]) {
      xPositionOfFlake[i] = random(0, width);
      yPositionOfFlake[i] = -flakeSize[i];
    }
  }
}

function holidayBoxTheme() {
  fill("#AC2622");
  rect(mouseX - 1110, height - 450, 560, 150);
  rect(mouseX - 1110, height - 290, 670, 150);
}

function happyHolidays() {
  fill("white");
  textSize(75);
  text(instructions11, mouseX - 1100, height - 350);
}

function enjoyBreak() {
  text(instructions12, mouseX - 1100, height - 200);
}