var bear1X = 100;
var bear1Y = 70;
var bear2X = 500;
var bear2Y = 70;
var bear3X = 100;
var bear3Y = 530;
var bear4X = 500;
var bear4Y = 530;

var treeX1 = 25;
var treeY1 = 75;
var treeX2 = 53;
var treeY2 = 20;
var treeX3 = 80;
var treeY3 = 75;

var trunkX = 48;
var trunkY = 95;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#F1C40F");

  //*********************************
  // Helper mouse
  //*********************************
  /*
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
  //*********************************
  // Bears behind trees
  //*********************************

  //upper left bear
  noStroke();
  fill("#784212");
  ellipse(bear1X, bear1Y, 100, 75);
  ellipse(bear1X - 30, bear1Y - 30, 25, 25);
  ellipse(bear1X + 30, bear1Y - 30, 25, 25);
  fill("#AF601A");
  ellipse(bear1X - 10, bear1Y + 10, 25, 25);
  ellipse(bear1X + 10, bear1Y + 10, 25, 25);
  fill("black");
  ellipse(bear1X, bear1Y, 15, 10);
  ellipse(bear1X - 15, bear1Y - 15, 10, 10);
  ellipse(bear1X + 15, bear1Y - 15, 10, 10);
  fill("#784212");
  ellipse(bear1X - 12, bear1Y + 6, 2, 2);
  ellipse(bear1X - 17, bear1Y + 12, 2, 2);
  ellipse(bear1X - 10, bear1Y + 14, 2, 2);
  ellipse(bear1X + 12, bear1Y + 6, 2, 2);
  ellipse(bear1X + 17, bear1Y + 12, 2, 2);
  ellipse(bear1X + 10, bear1Y + 14, 2, 2);

  //upper right bear
  noStroke();
  fill("#784212");
  ellipse(bear2X, bear2Y, 100, 75);
  ellipse(bear2X - 30, bear2Y - 30, 25, 25);
  ellipse(bear2X + 30, bear2Y - 30, 25, 25);
  fill("#AF601A");
  ellipse(bear2X - 10, bear2Y + 10, 25, 25);
  ellipse(bear2X + 10, bear2Y + 10, 25, 25);
  fill("black");
  ellipse(bear2X, bear2Y, 15, 10);
  ellipse(bear2X - 15, bear2Y - 15, 10, 10);
  ellipse(bear2X + 15, bear2Y - 15, 10, 10);
  fill("#784212");
  ellipse(bear2X - 12, bear2Y + 6, 2, 2);
  ellipse(bear2X - 17, bear2Y + 12, 2, 2);
  ellipse(bear2X - 10, bear2Y + 14, 2, 2);
  ellipse(bear2X + 12, bear2Y + 6, 2, 2);
  ellipse(bear2X + 17, bear2Y + 12, 2, 2);
  ellipse(bear2X + 10, bear2Y + 14, 2, 2);

  //lower left bear
  noStroke();
  fill("#784212");
  ellipse(bear3X, bear3Y, 100, 75);
  ellipse(bear3X - 30, bear3Y - 30, 25, 25);
  ellipse(bear3X + 30, bear3Y - 30, 25, 25);
  fill("#AF601A");
  ellipse(bear3X - 10, bear3Y + 10, 25, 25);
  ellipse(bear3X + 10, bear3Y + 10, 25, 25);
  fill("black");
  ellipse(bear3X, bear3Y, 15, 10);
  ellipse(bear3X - 15, bear3Y - 15, 10, 10);
  ellipse(bear3X + 15, bear3Y - 15, 10, 10);
  fill("#784212");
  ellipse(bear3X - 12, bear3Y + 6, 2, 2);
  ellipse(bear3X - 17, bear3Y + 12, 2, 2);
  ellipse(bear3X - 10, bear3Y + 14, 2, 2);
  ellipse(bear3X + 12, bear3Y + 6, 2, 2);
  ellipse(bear3X + 17, bear3Y + 12, 2, 2);
  ellipse(bear3X + 10, bear3Y + 14, 2, 2);

  //lower right bear
  noStroke();
  fill("#784212");
  ellipse(bear4X, bear4Y, 100, 75);
  ellipse(bear4X - 30, bear4Y - 30, 25, 25);
  ellipse(bear4X + 30, bear4Y - 30, 25, 25);
  fill("#AF601A");
  ellipse(bear4X - 10, bear4Y + 10, 25, 25);
  ellipse(bear4X + 10, bear4Y + 10, 25, 25);
  fill("black");
  ellipse(bear4X, bear4Y, 15, 10);
  ellipse(bear4X - 15, bear4Y - 15, 10, 10);
  ellipse(bear4X + 15, bear4Y - 15, 10, 10);
  fill("#784212");
  ellipse(bear4X - 12, bear4Y + 6, 2, 2);
  ellipse(bear4X - 17, bear4Y + 12, 2, 2);
  ellipse(bear4X - 10, bear4Y + 14, 2, 2);
  ellipse(bear4X + 12, bear4Y + 6, 2, 2);
  ellipse(bear4X + 17, bear4Y + 12, 2, 2);
  ellipse(bear4X + 10, bear4Y + 14, 2, 2);


  //*********************************
  // Trees
  //*********************************

  //top row
  fill("#6E2C00");
  noStroke();
  rect(trunkX, trunkY, 10, 50);

  fill("#145A32");
  triangle(treeX1, treeY1, treeX2, treeY2, treeX3, treeY3);
  triangle(treeX1 - 5, treeY1 + 20, treeX2, treeY2 + 20, treeX3 + 5, treeY3 + 20);
  triangle(treeX1 - 10, treeY1 + 40, treeX2, treeY2 + 40, treeX3 + 10, treeY3 + 40);

  fill("#6E2C00");
  noStroke();
  rect(trunkX + 100, trunkY, 10, 50);

  fill("#145A32");
  triangle(treeX1 + 100, treeY1, treeX2 + 100, treeY2, treeX3 + 100, treeY3);
  triangle(treeX1 + 95, treeY1 + 20, treeX2 + 100, treeY2 + 20, treeX3 + 105, treeY3 + 20);
  triangle(treeX1 + 90, treeY1 + 40, treeX2 + 100, treeY2 + 40, treeX3 + 110, treeY3 + 40);

  fill("#6E2C00");
  noStroke();
  rect(trunkX + 200, trunkY, 10, 50);

  fill("#145A32");
  triangle(treeX1 + 200, treeY1, treeX2 + 200, treeY2, treeX3 + 200, treeY3);
  triangle(treeX1 + 195, treeY1 + 20, treeX2 + 200, treeY2 + 20, treeX3 + 205, treeY3 + 20);
  triangle(treeX1 + 190, treeY1 + 40, treeX2 + 200, treeY2 + 40, treeX3 + 210, treeY3 + 40);

  fill("#6E2C00");
  noStroke();
  rect(trunkX + 300, trunkY, 10, 50);

  fill("#145A32");
  triangle(treeX1 + 300, treeY1, treeX2 + 300, treeY2, treeX3 + 300, treeY3);
  triangle(treeX1 + 295, treeY1 + 20, treeX2 + 300, treeY2 + 20, treeX3 + 305, treeY3 + 20);
  triangle(treeX1 + 290, treeY1 + 40, treeX2 + 300, treeY2 + 40, treeX3 + 310, treeY3 + 40);

  fill("#6E2C00");
  noStroke();
  rect(trunkX + 400, trunkY, 10, 50);

  fill("#145A32");
  triangle(treeX1 + 400, treeY1, treeX2 + 400, treeY2, treeX3 + 400, treeY3);
  triangle(treeX1 + 395, treeY1 + 20, treeX2 + 400, treeY2 + 20, treeX3 + 405, treeY3 + 20);
  triangle(treeX1 + 390, treeY1 + 40, treeX2 + 400, treeY2 + 40, treeX3 + 410, treeY3 + 40);

  fill("#6E2C00");
  noStroke();
  rect(trunkX + 500, trunkY, 10, 50);

  fill("#145A32");
  triangle(treeX1 + 500, treeY1, treeX2 + 500, treeY2, treeX3 + 500, treeY3);
  triangle(treeX1 + 495, treeY1 + 20, treeX2 + 500, treeY2 + 20, treeX3 + 505, treeY3 + 20);
  triangle(treeX1 + 490, treeY1 + 40, treeX2 + 500, treeY2 + 40, treeX3 + 510, treeY3 + 40);

  //bottom row
  fill("#6E2C00");
  noStroke();
  rect(trunkX, trunkY + 425, 10, 50);

  fill("#145A32");
  triangle(treeX1, treeY1 + 425, treeX2, treeY2 + 425, treeX3, treeY3 + 425);
  triangle(treeX1 - 5, treeY1 + 445, treeX2, treeY2 + 445, treeX3 + 5, treeY3 + 445);
  triangle(treeX1 - 10, treeY1 + 465, treeX2, treeY2 + 465, treeX3 + 10, treeY3 + 465);

  fill("#6E2C00");
  noStroke();
  rect(trunkX + 100, trunkY + 425, 10, 50);

  fill("#145A32");
  triangle(treeX1 + 100, treeY1 + 425, treeX2 + 100, treeY2 + 425, treeX3 + 100, treeY3 + 425);
  triangle(treeX1 + 95, treeY1 + 445, treeX2 + 100, treeY2 + 445, treeX3 + 105, treeY3 + 445);
  triangle(treeX1 + 90, treeY1 + 465, treeX2 + 100, treeY2 + 465, treeX3 + 110, treeY3 + 465);

  fill("#6E2C00");
  noStroke();
  rect(trunkX + 200, trunkY + 425, 10, 50);

  fill("#145A32");
  triangle(treeX1 + 200, treeY1 + 425, treeX2 + 200, treeY2 + 425, treeX3 + 200, treeY3 + 425);
  triangle(treeX1 + 195, treeY1 + 445, treeX2 + 200, treeY2 + 445, treeX3 + 205, treeY3 + 445);
  triangle(treeX1 + 190, treeY1 + 465, treeX2 + 200, treeY2 + 465, treeX3 + 210, treeY3 + 465);

  fill("#6E2C00");
  noStroke();
  rect(trunkX + 300, trunkY + 425, 10, 50);

  fill("#145A32");
  triangle(treeX1 + 300, treeY1 + 425, treeX2 + 300, treeY2 + 425, treeX3 + 300, treeY3 + 425);
  triangle(treeX1 + 295, treeY1 + 445, treeX2 + 300, treeY2 + 445, treeX3 + 305, treeY3 + 445);
  triangle(treeX1 + 290, treeY1 + 465, treeX2 + 300, treeY2 + 465, treeX3 + 310, treeY3 + 465);

  fill("#6E2C00");
  noStroke();
  rect(trunkX + 400, trunkY + 425, 10, 50);

  fill("#145A32");
  triangle(treeX1 + 400, treeY1 + 425, treeX2 + 400, treeY2 + 425, treeX3 + 400, treeY3 + 425);
  triangle(treeX1 + 395, treeY1 + 445, treeX2 + 400, treeY2 + 445, treeX3 + 405, treeY3 + 445);
  triangle(treeX1 + 390, treeY1 + 465, treeX2 + 400, treeY2 + 465, treeX3 + 410, treeY3 + 465);

  fill("#6E2C00");
  noStroke();
  rect(trunkX + 500, trunkY + 425, 10, 50);

  fill("#145A32");
  triangle(treeX1 + 500, treeY1 + 425, treeX2 + 500, treeY2 + 425, treeX3 + 500, treeY3 + 425);
  triangle(treeX1 + 495, treeY1 + 445, treeX2 + 500, treeY2 + 445, treeX3 + 505, treeY3 + 445);
  triangle(treeX1 + 490, treeY1 + 465, treeX2 + 500, treeY2 + 465, treeX3 + 510, treeY3 + 465);


  //*********************************
  // Bears in front of trees
  //*********************************
  /*
    //upper left bear
    noStroke();
    fill("#784212");
    ellipse(bear1X, bear1Y, 100, 75);
    ellipse(bear1X - 30, bear1Y - 30, 25, 25);
    ellipse(bear1X + 30, bear1Y - 30, 25, 25);
    fill("#AF601A");
    ellipse(bear1X - 10, bear1Y + 10, 25, 25);
    ellipse(bear1X + 10, bear1Y + 10, 25, 25);
    fill("black");
    ellipse(bear1X, bear1Y, 15, 10);
    ellipse(bear1X - 15, bear1Y - 15, 10, 10);
    ellipse(bear1X + 15, bear1Y - 15, 10, 10);
    fill("#784212");
    ellipse(bear1X - 12, bear1Y + 6, 2, 2);
    ellipse(bear1X - 17, bear1Y + 12, 2, 2);
    ellipse(bear1X - 10, bear1Y + 14, 2, 2);
    ellipse(bear1X + 12, bear1Y + 6, 2, 2);
    ellipse(bear1X + 17, bear1Y + 12, 2, 2);
    ellipse(bear1X + 10, bear1Y + 14, 2, 2);

    //upper right bear
    noStroke();
    fill("#784212");
    ellipse(bear2X, bear2Y, 100, 75);
    ellipse(bear2X - 30, bear2Y - 30, 25, 25);
    ellipse(bear2X + 30, bear2Y - 30, 25, 25);
    fill("#AF601A");
    ellipse(bear2X - 10, bear2Y + 10, 25, 25);
    ellipse(bear2X + 10, bear2Y + 10, 25, 25);
    fill("black");
    ellipse(bear2X, bear2Y, 15, 10);
    ellipse(bear2X - 15, bear2Y - 15, 10, 10);
    ellipse(bear2X + 15, bear2Y - 15, 10, 10);
    fill("#784212");
    ellipse(bear2X - 12, bear2Y + 6, 2, 2);
    ellipse(bear2X - 17, bear2Y + 12, 2, 2);
    ellipse(bear2X - 10, bear2Y + 14, 2, 2);
    ellipse(bear2X + 12, bear2Y + 6, 2, 2);
    ellipse(bear2X + 17, bear2Y + 12, 2, 2);
    ellipse(bear2X + 10, bear2Y + 14, 2, 2);

    //lower left bear
    noStroke();
    fill("#784212");
    ellipse(bear3X, bear3Y, 100, 75);
    ellipse(bear3X - 30, bear3Y - 30, 25, 25);
    ellipse(bear3X + 30, bear3Y - 30, 25, 25);
    fill("#AF601A");
    ellipse(bear3X - 10, bear3Y + 10, 25, 25);
    ellipse(bear3X + 10, bear3Y + 10, 25, 25);
    fill("black");
    ellipse(bear3X, bear3Y, 15, 10);
    ellipse(bear3X - 15, bear3Y - 15, 10, 10);
    ellipse(bear3X + 15, bear3Y - 15, 10, 10);
    fill("#784212");
    ellipse(bear3X - 12, bear3Y + 6, 2, 2);
    ellipse(bear3X - 17, bear3Y + 12, 2, 2);
    ellipse(bear3X - 10, bear3Y + 14, 2, 2);
    ellipse(bear3X + 12, bear3Y + 6, 2, 2);
    ellipse(bear3X + 17, bear3Y + 12, 2, 2);
    ellipse(bear3X + 10, bear3Y + 14, 2, 2);

    //lower right bear
    noStroke();
    fill("#784212");
    ellipse(bear4X, bear4Y, 100, 75);
    ellipse(bear4X - 30, bear4Y - 30, 25, 25);
    ellipse(bear4X + 30, bear4Y - 30, 25, 25);
    fill("#AF601A");
    ellipse(bear4X - 10, bear4Y + 10, 25, 25);
    ellipse(bear4X + 10, bear4Y + 10, 25, 25);
    fill("black");
    ellipse(bear4X, bear4Y, 15, 10);
    ellipse(bear4X - 15, bear4Y - 15, 10, 10);
    ellipse(bear4X + 15, bear4Y - 15, 10, 10);
    fill("#784212");
    ellipse(bear4X - 12, bear4Y + 6, 2, 2);
    ellipse(bear4X - 17, bear4Y + 12, 2, 2);
    ellipse(bear4X - 10, bear4Y + 14, 2, 2);
    ellipse(bear4X + 12, bear4Y + 6, 2, 2);
    ellipse(bear4X + 17, bear4Y + 12, 2, 2);
    ellipse(bear4X + 10, bear4Y + 14, 2, 2);
  */
  //*********************************
  // Movement
  //*********************************

  //vertical
  if (bear1X < 240) {
    bear1X = bear1X + 1;
  }
  if (bear3X < 120) {
    bear3X = bear3X + 1;
  }

  if (bear2X > 480) {
    bear2X = bear2X - 1;
  }
  if (bear4X > 360) {
    bear4X = bear4X - 1;
  }

  //horizontal
  if (bear1Y < 300) {
    bear1Y = bear1Y + 1;
  }
  if (bear2Y < 300) {
    bear2Y = bear2Y + 1;
  }
  if (bear3Y > 300) {
    bear3Y = bear3Y - 1;
  }
  if (bear4Y > 300) {
    bear4Y = bear4Y - 1;
  }
}