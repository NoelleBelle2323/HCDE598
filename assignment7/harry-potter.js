// File: Harry Potter Final Project
// Author: Alison Buchanan 
// Date: 12/3/18
// Class: HCDE 598 
// Email: ajb34@uw.edu
// Description: This is a harry potter game. User is asked 
// to interact with eaach screen in some way to advance the story.  

// Initialize variables for colors
var myColor = "black";

//Initialize Canvas set-up
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const BACKGROUND_COLOR = "pink";


//Declare dementor width and height 
var dementorHeight = 110;
var dementorWidth = 40;

//Declare x and y coords for feather
var xCoord = 400;
var yCoord = 250;
var xRadius = 15;
var yRadius = 55;

// Initialize variable for page number
var pageNum = 1;

// Messages to be used on drawing screens
var title = "";
var titlePg1 = "Welcome to Hogwarts!";
var instrPg1 = "press any key to continue";
var titlePg2 = "Which house? \nPress h for hufflepuff, g for gryffindor, \nr for ravenclaw, or s for slytherin.";
var titlePg3 = "press any key to continue";
var titlePg4 = "Cat (c) or Owl (o)?";
var titlePg5 = "Nice choice! Your familiar will keep you company \nfor life. Press any key to start your classes";
var titlePg6 = "Time for charms class.\nClick the feather to cast a spell";
var spellPg6 = "Wingardium Leviosa!";
var titlePg7 = "Oh no! Class has been interrupted by Dementors! \nDon't let them suck out your soul.\nClick a dementor to cast a spell!";
var spellPg8 = "Expecto Patronum!!!"; 
var titlepg8 = "Congrats! You beat the dementors and survived \nanother year at Hogwarts. \nPress any key to play again.";

//text location
var titleX = 40;
var titleY = 400;

//declare arrays that will hold dementor's x and y coordinates
var dementoryCoords = [];
var dementorxCoords = [];

//declares speed arrays for dementor's x and y directions
var speedX = [];
var speedY = [];

// boolean for dementor animation
var dementorClicked = false;

// boolean for feather animation
var featherClicked = false;

// counter for animations
var i = 1;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)

  //call on 10 dementors in array
  for (var i = 0; i <= 10; i++) {

    // randomly assign dementor x and y coordinates in array within constraints(dementorxCoords, dementoryCoords)
    dementorxCoords[i] = round(random(dementorWidth / 2, CANVAS_WIDTH - dementorWidth / 2));
    dementoryCoords[i] = round(random(dementorHeight/ 2, 385 - dementorHeight/ 2));

    // randomly assign speeds for demento x and y movements in array
    speedX[i] = round(random(1, 2));
    speedY[i] = round(random(1, 2));
  }
}

function draw() {

  // "Erase" screen after each frame
  background(BACKGROUND_COLOR);
  
  //Draw avatar
  drawAvatar();
  
  // Draw page
  drawPage(pageNum);
}

//Defines button area. Center is buttonx buttonY, width is dimX and dimY
function isWithin(buttonX, buttonY, dimX, dimY) {
  if (mouseX >= buttonX - dimX / 2 && mouseX <= buttonX + dimX / 2 &&
    mouseY >= buttonY - dimY / 2 && mouseY <= buttonY + dimY / 2) {
    return true;
  } else {
    return false;
  }
}

//Clicking the mouse on the feather button area makes feather move
function mouseClicked() {

  if (pageNum == 6) {//checks if user is on pg 6
    //checks if where you clicked is within declared parameters of feather button
    if (isWithin(xCoord, yCoord, xRadius, yRadius)) {
      print("touching shape");

      //actives featherClicked function
      featherClicked = true;   
    }
  }
  
 	else if (pageNum == 7) {//checks if user is on pg 7
    for (var i = 0; i <= 5; i++) {// checks if user is on pg 7
      //calls on button area
      if (isWithin(dementorxCoords[i], dementoryCoords[i], dementorWidth, dementorHeight)) {

        //activates dementor clicked function
        print("touching shape");
        dementorClicked = true;

        //advances page number
        pageNum = 8;
      }
    }
  }
  return false;
}

function keyPressed() { 
  //advances pages for p1, p3, and p5 by pressing any key
  if (pageNum == 1 || pageNum == 3 || pageNum == 5) {
    pageNum++;
    return false;
  }
  if (pageNum == 8) { //allows game to start over by pressing any key on page 8
    pageNum = 1;
    
    //resets i to 1
    i = 1;
    
    //resets feather x and y coords to orgional position 
   	xCoord = 400;
		yCoord = 250;
    
    //resets feather clicked to false
    featherClicked = false;
    
    return false;
  }
}

//page commands 
function keyTyped() {

  if (pageNum == 2) { // checks to see if user is on page 2
    if (key == 'g') { // if user hits the 'g' key go to page 3, red scarf
      pageNum = 3;
      myColor = "red"; 
      rect(215, 215, 70, 35);

    } else if (key == 'r') { // if user hits the 'r' key go page 3, blue scarf
      pageNum = 3;
      myColor = 'blue';
      rect(215, 215, 70, 35);

    } else if (key == 'h') { // if user hits the 'h' key go page 3, yellow scarf
      pageNum = 3;
      myColor = "gold";
      rect(215, 215, 70, 35);

    } else if (key == 's') { // if user hits the 's' key go page 3, green scarf
      pageNum = 3;
      myColor = 'green';
      rect(215, 215, 70, 35);
    }
    return false;

  } else if (pageNum == 4) {// checks to see if user is on page 4
    if (key == 'c') {// if user hits the 'c' key draw cat, don't draw owl
      cat = true;
      owl = false;
      pageNum++; //advances the page
      
    } else if (key == 'o') {// if user hits the 'o' key draw owl, don't draw cat
      owl = true;
      cat = false;
      pageNum++; //advances the page
    }
    return false;
  }
}

//draw screens with text
function drawPage() {
  fill("black");
  if (pageNum == 1) {// checks to see if user is on page 1
    myColor = "black"; // re-sets scarf to black at pg 1

    // Display title
    textSize(24);
    text(titlePg1, 40, 350);
    title = instrPg1;

  } else if (pageNum == 2) {// checks to see if user is on page 2

    // Display title text
    title = titlePg2;

  } else if (pageNum == 3) { // checks to see if user is on page 3
    
    // Display title text
    title = titlePg3;

  } else if (pageNum == 4) { // checks to see if user is on page 4
    
    // Display title text
    title = titlePg4;

  } else if (pageNum == 5) { // checks to see if user is on page 5
    
    // Display title text
    title = titlePg5;

  } else if (pageNum == 6) { // checks to see if user is on page 6

    //draw feather
    drawFeather();

    if (i <= 150 && featherClicked == true) {// checks i location and if feather has been clicked
      
      //moves feather
      xCoord += 1;
      yCoord -= 1;
      i += 1;
      
      //displays spell
      title = spellPg6;

    } else if (i > 150) {//check i location. Feather is out of the frame when i>150
      
      //advances page
      pageNum++

    } else {
      // return feather clicked to its initial value of false when animation finishes
      featherClicked = false;

      //title for page 6 displays
      title = titlePg6;
    }

  } else if (pageNum == 7) { // checks to see if user is on page 7

    // Display title for page 7 
    title = titlePg7;

    //dementor is drawn
    drawDementor();

    //dementor moves
    moveDementors();

  } else if (pageNum == 8) { // checks to see if user is on page 8

    // Display title for page 8 
    title = titlepg8;
    
    //display spell
    textSize(15);
    text(spellPg8, 310, 200);

  }

  if (pageNum >= 5) { //animal follows avatar once you pass page 5
    if (cat == true) {
      drawCat();
      
    } else if (owl == true) {
      drawOwl();
    }
  }

  fill("black");
  noStroke();

  // Display title
  textSize(20);
  text(title, 40, 400);
}

//function to  move dementors 
function moveDementors() {

  // loop through dementors and speeds
  for (var i = 0; i <= 10; i++) {

    // access array and get shape x and y coordinates and assign speed to the array. 
    dementorxCoords[i] = dementorxCoords[i] + speedX[i];
    dementoryCoords[i] = dementoryCoords[i] + speedY[i];

    // if dementor hits left or right wall, change direction
    if (dementorxCoords[i] < (dementorWidth/2) || dementorxCoords[i] > CANVAS_WIDTH - (dementorWidth/2)) {
      // change X direction by making speed negative (goes in opposite direction)
      speedX[i] *= -1;
      
    // if dementor hits top of page or where instructions are located, change direction
    } else if ((dementoryCoords[i] < dementorHeight / 2 && speedY[i] < 0) || (dementoryCoords[i] > 385 - (dementorHeight/2)) && speedY[i] > 0) {
      // change Y direction by multiplying speed by negative 1
      speedY[i] *= -1;

    } else if (dementorxCoords[i] < 0 || dementoryCoords[i] < 0 || dementorxCoords > CANVAS_WIDTH || dementoryCoords > 350) {
      // if anything goes wrong, reset coords to center point
      dementorxCoords[i] = CANVAS_WIDTH / 2;
      dementoryCoords[i] = CANVAS_HEIGHT / 2;
    }
  }
}

//function to draw dementor
function drawDementor() {

  //assign demetor drawing to the array
  for (var i = 0; i <= 10; i++) {
    var xCoord = dementorxCoords[i];
    var yCoord = dementoryCoords[i];

    //dementor body 
    fill("black");
    rect(xCoord - 20, yCoord - 20, 40, 75, 20, 20, 10, 10);

    //dementor hood
    ellipse(xCoord, yCoord - 35, 35, 40);

    //dementor face
    fill("gray");
    ellipse(xCoord, yCoord - 35, 25, 30);

    //dementor mouth
    fill("black");
    ellipse(xCoord, yCoord - 30, 10, 5);

  }
}
//function to draw feather
function drawFeather() {
  noFill();
  line(xCoord, yCoord + 45, xCoord, yCoord - 25);
  ellipse(xCoord, yCoord, xRadius, yRadius);

  //right lines of feather
  line(xCoord, yCoord, xCoord + 5, yCoord - 15);
  line(xCoord, yCoord + 15, xCoord + 5, yCoord - 5);
  line(xCoord, yCoord + 30, xCoord + 5, yCoord + 5);

  //left lines of feather
  line(xCoord, yCoord, xCoord - 5, yCoord - 15);
  line(xCoord, yCoord + 15, xCoord - 5, yCoord - 5);
  line(xCoord, yCoord + 30, xCoord - 5, yCoord + 5);
}

//wizard avatar
function drawAvatar() {
  noStroke();
  fill(238, 206, 179);
  ellipse(250, 160, 120, 130);

  //nose//
  strokeWeight(1);
  stroke("black");
  arc(240, 170, 5, 5, 0, PI, OPEN);
  arc(250, 170, 15, 10, 0, PI, OPEN);
  arc(260, 170, 5, 5, 0, PI, OPEN);

  //eyes
  fill("white");
  ellipse(220, 155, 20, 15);
  ellipse(280, 155, 20, 15);
  fill(77, 51, 25);
  ellipse(220, 155, 7, 12);
  ellipse(280, 155, 7, 12);

  //hat
  fill('black');
  triangle(190, 130, 250, 50, 310, 130);

  //mouth
  arc(250, 195, 30, 8, 0, PI, OPEN);

  //scarf
  fill(myColor);
  rect(220, 220, 60, 20);

  //robe
  fill("black");
  rect(220, 230, 60, 50);

  //hand and wand
  line(300, 250, 330, 220);
  arc(280, 250, 40, 20, 1.5 * PI, HALF_PI);
}

//draw owl
function drawOwl() {
  noStroke();
  fill("white");
  ellipse(100, 200, 30, 30);
  ellipse(100, 230, 40, 50);
  fill("yellow");
  triangle(95, 200, 105, 200, 100, 210);
  stroke("black");
  strokeWeight(3);
  point(95, 195);
  point(105, 195);
}

//draw cat
function drawCat() {
  noStroke();
  fill("black");
  ellipse(100, 200, 30, 30);
  ellipse(100, 230, 40, 50);
  triangle(87, 192, 90, 180, 95, 190);
  triangle(113, 192, 110, 180, 100, 190);
  stroke("green");
  strokeWeight(3);
  point(95, 195);
  point(105, 195);
}