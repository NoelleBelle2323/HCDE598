//////////////////////////////////////////////////////
//// This program displays the hatching of the three
//eggs depending on keys pressed (1, 2, or 3).
/////////////////////////////////////////////////////
var egg1X = 180;
var egg1Y = 240;
var egg3X = 130;
var egg3Y = 300;
var egg4X = 350;
var egg4Y = 300;
var chick1Y = egg3Y;
var chick2Y = egg1Y;
var chick3Y = egg4Y;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#e0f1ff');

  //egg blue
  drawBlue();
  drawYellow();
  drawPink();
  drawText();



  if (key == 1) {
    crackBlue();
  } else if (key == 2) {
    crackYellow();
  } else if (key == 3) { // key must be 3 (or no keys have been pressed yet)
    crackPink();
  }
}

//////////////////////////////////////////////////////
//// Functions to draw the three eggs
/////////////////////////////////////////////////////

function drawBlue() {
  push();

  strokeWeight(3);

  fill('#b2f2ff');
  stroke('#2cb9d6');
  strokeWeight(8);
  ellipse(egg3X, egg3Y, 90, 110);

  //circle 1
  fill('#2cb9d6');
  strokeWeight(0);
  ellipse(egg3X - 10, egg3Y - 32, 45, 45);

  //circle 2
  fill('#2cb9d6');
  strokeWeight(0);
  ellipse(egg3X + 25, egg3Y - 20, 15, 15);

  //circle 3
  fill('#2cb9d6');
  strokeWeight(0);
  ellipse(egg3X + 28, egg3Y + 20, 35, 35);

  //circle 4
  fill('#2cb9d6');
  strokeWeight(0);
  ellipse(egg3X - 20, egg3Y + 5, 8, 8);

  //circle 5
  fill('#2cb9d6');
  strokeWeight(0);
  ellipse(egg3X - 15, egg3Y + 40, 25, 25);

  pop();
}



function drawYellow() {

  push();

  fill('#fff084');
  stroke('#ffac1e');
  strokeWeight(8);
  ellipse(60 + egg1X, 60 + egg1Y, 90, 110);

  //line middle
  stroke('#ffac1e');
  strokeWeight(15);
  line(egg1X + 19, egg1Y + 60, egg1X + 100, egg1Y + 60);

  //line top
  stroke('#ffac1e');
  strokeWeight(10);
  line(egg1X + 25, egg1Y + 30, egg1X + 95, egg1Y + 30);

  //line bottom
  stroke('#ffac1e');
  strokeWeight(10);
  line(egg1X + 25, egg1Y + 90, egg1X + 95, egg1Y + 90);

  pop();
}


function drawPink() {
  push();

  fill('#ffd1ea');
  stroke('#e86aae');
  strokeWeight(8);
  ellipse(egg4X, egg4Y, 90, 110);

  //thin line top
  stroke('#e86aae');
  strokeWeight(5);
  line(egg4X - 13, egg4Y - 55, egg4X + 34, egg4Y - 32);

  //thick line top-ish
  stroke('#e86aae');
  strokeWeight(15);
  line(egg4X - 33, egg4Y - 30, egg4X + 40, egg4Y + 6);

  //thin line top-ish
  stroke('#e86aae');
  strokeWeight(5);
  line(egg4X - 29, egg4Y - 45, egg4X + 40, egg4Y - 10);

  //thin line bottom
  stroke('#e86aae');
  strokeWeight(5);
  line(egg4X - 40, egg4Y - 17, egg4X + 40, egg4Y + 23)

  //thick line bottom
  stroke('#e86aae');
  strokeWeight(15);
  line(egg4X - 40, egg4Y + 20, egg4X + 10, egg4Y + 45);

  //thin line bottom
  stroke('#e86aae');
  strokeWeight(5);
  line(egg4X - 45, egg4Y, egg4X + 30, egg4Y + 37);

  pop();

}

//////////////////////////////////////////////////////
//// Functions to crack the three eggs
//////////////////////////////////////////////////////

function crackBlue() {
  //color of body
  stroke('#9ee863');
  strokeWeight(5)
  fill('#9ee863');
  ellipse(egg3X, chick1Y, 80, 80);

  //color of belly
  fill('#dbffbf');
  stroke('#dbffbf');
  ellipse(egg3X, chick1Y + 10, 47, 50);

  fill('#65c11f');
  stroke('#65c11f');
  ellipse(egg3X - 36, chick1Y + 10, 20, 30);

  //left wing
  strokeWeight(1);
  ellipse(egg3X - 38, chick1Y + 11, 20, 30);

  //right wing
  strokeWeight(6);
  ellipse(egg3X + 37, chick1Y + 10, 20, 30);

  //eye left
  fill('white');
  stroke('white');
  ellipse(egg3X - 15, chick1Y - 12, 25, 25);

  fill('black');
  stroke('black');
  ellipse(egg3X - 15, chick1Y - 12, 16, 16);

  //eye right
  fill('white');
  stroke('white');
  ellipse(egg3X + 15, chick1Y - 12, 25, 25);

  fill('black');
  stroke('black');
  ellipse(egg3X + 15, chick1Y - 12, 16, 16);

  //beak
  stroke('orange');
  strokeWeight(6);
  fill('orange');
  triangle(egg3X - 5, chick1Y + 5, egg3X + 5, chick1Y + 5, egg3X, chick1Y + 12);


  drawBlue();

  chick1Y = chick1Y - 3;
  if (chick1Y < 150) {
    chick1Y = 150;
  }
}


function crackYellow() {
  //color of body
  stroke('#d57aff');
  strokeWeight(5);
  fill('#d57aff');
  ellipse(egg1X + 58, chick2Y, 80, 80);

  //color of belly
  fill('#efceff');
  stroke('#efceff');
  ellipse(egg1X + 58, chick2Y + 10, 47, 50);

  //left wing
  fill('#c151f7');
  stroke('#c151f7');
  strokeWeight(6);
  ellipse(egg1X + 97, chick2Y + 11, 20, 30);

  //right wing
  fill('#c151f7');
  stroke('#c151f7');
  strokeWeight(6);
  ellipse(egg1X + 19, chick2Y + 11, 20, 30);

  //eye left

  fill('white');
  stroke('white');
  ellipse(egg1X + 43, chick2Y - 12, 25, 25);

  //eye right
  fill('white');
  stroke('white');
  ellipse(egg1X + 73, chick2Y - 12, 25, 25);

  fill('black');
  stroke('black');
  ellipse(egg1X + 73, chick2Y - 10, 16, 16);

  fill('black');
  stroke('black');
  ellipse(egg1X + 43, chick2Y - 10, 16, 16);

  //beak
  stroke('orange');
  strokeWeight(6);
  fill('orange');
  triangle(egg1X + 52, chick2Y + 5, egg1X + 62, chick2Y + 5, egg1X + 57, chick2Y + 12);


  drawYellow();

  chick2Y = chick2Y - 3;
  if (chick2Y < 150) {
    chick2Y = 150;
  }

}

function crackPink() {

  //color of body
  stroke('#ff975b');
  strokeWeight(5);
  fill('#ff975b');
  ellipse(egg4X + 1, chick3Y, 80, 80);

  //color of belly
  fill('#ffe1d1');
  stroke('#ffe1d1');
  ellipse(egg4X + 1, chick3Y + 10, 47, 50);

  //left wing
  fill('#fc7025');
  stroke('#fc7025');
  strokeWeight(6);
  ellipse(egg4X - 37, chick3Y + 11, 20, 30);

  //right wing
  fill('#fc7025');
  stroke('#fc7025');
  strokeWeight(6);
  ellipse(egg4X + 39, chick3Y + 11, 20, 30);

  //eye left

  fill('white');
  stroke('white');
  ellipse(egg4X - 15, chick3Y - 12, 25, 25);

  //eye right
  fill('white');
  stroke('white');
  ellipse(egg4X + 16, chick3Y - 12, 25, 25);

  fill('black');
  stroke('black');
  ellipse(egg4X - 15, chick3Y - 10, 16, 16);

  fill('black');
  stroke('black');
  ellipse(egg4X + 16, chick3Y - 10, 16, 16);

  //beak
  stroke('orange');
  strokeWeight(6);
  fill('orange');
  triangle(egg4X - 4, chick3Y + 5, egg4X + 6, chick3Y + 5, egg4X + 1, chick3Y + 12);

  drawPink();

  chick3Y = chick3Y - 3;
  if (chick3Y < 150) {
    chick3Y = 150;
  }
}


//////////////////////////////////////////////////////
//// Additional functions
//////////////////////////////////////////////////////


function drawText() {
  //font size weight fill etc
  push();
  textSize(30);
  fill('#005ead');
  strokeWeight(0);
  stroke('#005ead');
  text('Choose an egg (1, 2, 3)!', 75, 80);
  pop();
}