//hcde 598
//joshua holland

//controls canvas size
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

//sets location wallet
const X_ORIGIN = 100;
const Y_ORIGIN = 50;

//lv wallet colors
const BG_COLOR = 'silver';
const LV_WALLET_COLOR1 = '#866656';
const LV_WALLET_COLOR2 = '#9D7C57';

//lv brand letters 
var LV_BRAND1 = "Louis";
var LV_BRAND2 = "Vuitton";
var LV_CITY = "Paris";

//parameters for each checker box
const BOX_SIZE = 50;
const BOX_WIDTH = 0;

//sets number of checker boxes drawn
const CHECKER_BOX_SHAPE = 7;

//section used to draw boxes on canvas
function setup() {

  //create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BG_COLOR);

  //set drawing parameters for wallet
  fill(LV_WALLET_COLOR1);
  strokeWeight(BOX_WIDTH);

  //first column of checker boxes
  for (i = 0; i < CHECKER_BOX_SHAPE; i++) {
    var yRowStart = Y_ORIGIN + i * BOX_SIZE,
      BOXSIZE;
    rect(X_ORIGIN, yRowStart, BOX_SIZE, BOX_SIZE);
    if (isOdd(i)) {
      fill(LV_WALLET_COLOR1);
    } else {
      fill(LV_WALLET_COLOR2);
    }
  }

  //second column of checker boxes
  for (i = 0; i < CHECKER_BOX_SHAPE; i++) {
    var yRow2Start = Y_ORIGIN + i * BOX_SIZE,
      BOXSIZE2;
    rect(X_ORIGIN + 50, yRow2Start, BOX_SIZE, BOX_SIZE);
    if (isOdd(i)) {
      fill(LV_WALLET_COLOR2);
    } else {
      fill(LV_WALLET_COLOR1);
    }
  }

  //third column of checker boxes
  for (i = 0; i < CHECKER_BOX_SHAPE; i++) {
    var yRow3Start = Y_ORIGIN + i * BOX_SIZE,
      BOXSIZE3;
    rect(X_ORIGIN + 100, yRow3Start, BOX_SIZE, BOX_SIZE);
    if (isOdd(i)) {
      fill(LV_WALLET_COLOR1);
    } else {
      fill(LV_WALLET_COLOR2);
    }
  }

  //fourth column of checker boxes
  for (i = 0; i < CHECKER_BOX_SHAPE; i++) {
    var yRow4Start = Y_ORIGIN + i * BOX_SIZE,
      BOXSIZE4;
    rect(X_ORIGIN + 150, yRow4Start, BOX_SIZE, BOX_SIZE);
    if (isOdd(i)) {
      fill(LV_WALLET_COLOR2);
    } else {
      fill(LV_WALLET_COLOR1);
    }
  }

  //fifth column of checker boxes
  for (i = 0; i < CHECKER_BOX_SHAPE; i++) {
    var yRow5Start = Y_ORIGIN + i * BOX_SIZE,
      BOXSIZE5;
    rect(X_ORIGIN + 200, yRow5Start, BOX_SIZE, BOX_SIZE);
    if (isOdd(i)) {
      fill(LV_WALLET_COLOR1);
    } else {
      fill(LV_WALLET_COLOR2);
    }
  }

  //sixth column of checker boxes
  for (i = 0; i < CHECKER_BOX_SHAPE; i++) {
    var yRow6Start = Y_ORIGIN + i * BOX_SIZE,
      BOXSIZE6;
    rect(X_ORIGIN + 250, yRow6Start, BOX_SIZE, BOX_SIZE);
    if (isOdd(i)) {
      fill(LV_WALLET_COLOR2);
    } else {
      fill(LV_WALLET_COLOR1);
    }
  }

  //seventh column of checker boxes
  for (i = 0; i < CHECKER_BOX_SHAPE; i++) {
    var yRow7Start = Y_ORIGIN + i * BOX_SIZE,
      BOXSIZE7;
    rect(X_ORIGIN + 300, yRow7Start, BOX_SIZE, BOX_SIZE);
    if (isOdd(i)) {
      fill(LV_WALLET_COLOR1);
    } else {
      fill(LV_WALLET_COLOR2);
    }
  }
  textSize(14);
  text(LV_BRAND1, 353, 215, LV_WALLET_COLOR1);
  text(LV_BRAND2, 353, 230, LV_WALLET_COLOR1);
  text(LV_CITY, 353, 245, LV_WALLET_COLOR1);
}

function isOdd(n) {
  // compute remainder of division by two
  remainder = n % 2;
  if (remainder == 1) {
    return true;
  } else {
    return false;
  }
}

//this section is not used for the assignment
function draw() {}