//position1 universal
var positionx1 = 75;
var positiony1 = 100;

//position2 universal
var positionx2 = 75;
var positiony2 = 425;

//position3 universal
var positionx3 = 500;
var positiony3 = 100;

//position4 universal
var positionx4 = 500;
var positiony4 = 425;

//stem1 moves
var stemx1 = 65;
var stemy1 = 25;

//stem2 moves
var stemx2 = 65;
var stemy2 = 350;

//stem3 moves
var stemx3 = 490;
var stemy3 = 25;

//stem4 moves
var stemx4 = 490;
var stemy4 = 350;

//draw for canvas starts here
function setup() {
  createCanvas(600, 500);
}

//drawing of pumpkins and stems starts here
function draw() {
  background("#000");

  //top left pumpkin parts
  fill("#A03722");
  noStroke();
  ellipse(positionx1, positiony1, 100, 100);
  fill('yellow');
  ellipse(positionx1 - 20, positiony1, 10, 30);
  ellipse(positionx1 - 20, positiony1, 30, 10);
  ellipse(positionx1 + 20, positiony1, 10, 30);
  ellipse(positionx1 + 20, positiony1, 30, 10);
  ellipse(positionx1, positiony1 + 30, 10, 30);
  fill(125, 125, 48);
  rect(stemx1, stemy1, 20, 30);


  //bottom left pumpkin parts 
  noStroke();
  fill("orange");
  ellipse(positionx2, positiony2, 100, 100);
  fill('yellow');
  ellipse(positionx2 - 20, positiony2, 10, 30);
  ellipse(positionx2 + 20, positiony2, 10, 30);
  ellipse(positionx2, positiony2 + 30, 30, 30);
  fill(125, 125, 48);
  rect(stemx2, stemy2, 20, 30);

  //top right pumpkin parts 
  fill("#B55A2D");
  ellipse(positionx3, positiony3, 100, 100);
  fill('yellow');
  ellipse(positionx3 - 20, positiony3 - 5, 30, 30);
  ellipse(positionx3 + 20, positiony3 - 5, 30, 30);
  ellipse(positionx3, positiony3 + 30, 10, 30);
  ellipse(positionx3 - 15, positiony3 + 30, 10, 30);
  ellipse(positionx3 + 15, positiony3 + 30, 10, 30);
  fill(125, 125, 48);
  rect(stemx3, stemy3, 20, 30);

  //bottom right pumpkin parts
  noStroke();
  fill("#742617");
  ellipse(positionx4, positiony4, 100, 100);
  fill('yellow');
  ellipse(positionx4 - 20, positiony4, 10, 30);
  ellipse(positionx4 - 20, positiony4, 30, 20);
  ellipse(positionx4 + 20, positiony4, 10, 30);
  ellipse(positionx4 + 20, positiony4, 30, 20);
  ellipse(positionx4, positiony4 + 30, 10, 30);
  ellipse(positionx4, positiony4 + 30, 40, 30);
  fill(125, 125, 48)
  rect(stemx4, stemy4, 20, 30)


  //horizonal moves for top left pumpkin
  if (positionx1 < 200) {
    positionx1 = positionx1 + 1;
  }
  if (stemx1 < 190) {
    stemx1 = stemx1 + 1;
  }

  //vertcal moves for top left pumpkin
  if (positiony1 < 250) {
    positiony1 = positiony1 + 1;
  }
  if (stemy1 < 175) {
    stemy1 = stemy1 + 1;
  }
  //horizontal moves for bottom left pumpkin
  if (positionx2 < 80) {
    positionx2 = positionx2 + 1;
  }
  if (stemx2 < 70) {
    stemx2 = stemx2 + 1;
  }

  //vertcal moves for bottom left pumpkin
  if (positiony2 > 250) {
    positiony2 = positiony2 - 1;
  }
  if (stemy2 > 175) {
    stemy2 = stemy2 - 1;
  }

  //horizontal moves for top right pumpkin
  if (positionx3 > 475) {
    positionx3 = positionx3 - 1;
  }
  if (stemx3 > 465) {
    stemx3 = stemx3 - 1;
  }

  //vertical moves for top right pumpkin
  if (positiony3 < 250) {
    positiony3 = positiony3 + 1;
  }
  if (stemy3 < 175) {
    stemy3 = stemy3 + 1;
  }

  //vertical moves for bottom right pumpkin
  if (positionx4 > 350) {
    positionx4 = positionx4 - 1;
  }
  if (stemx4 > 340) {
    stemx4 = stemx4 - 1;
  }

  //horizontal moves for top right pumpkin
  if (positiony4 > 250) {
    positiony4 = positiony4 - 1;
  }
  if (stemy4 > 175) {
    stemy4 = stemy4 - 1;
  }
}