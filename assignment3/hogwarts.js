// Initialize variables for colors
var bgClr = 'pink';
var myColor = "black";

// Initialize variable for page number
var pageNum = 1;

// messages to be used in the functions drawing screens
var titlePg1 = "Welcome to Hogwarts!";
var instrPg1 = "press any key to continue"
var titlePg2 = "Would you like a wand? (y or n)"
var instrPg3 = "press any key to continue";
var titlePg4 = "Which house? \nPress h for hufflepuff, g for gryffindor, \nr for ravenclaw, or s for slytherin.";
var titlePg5 = "Cat (c) or Owl (o)?";
var instrPg6 = "Press any key to play again"

//text location
var titleX = 40
var titleY = 300

function setup() {
  createCanvas(500, 500);
  background(220)
}

function draw() {

  // "Erase" screen after each frame
  background(bgClr);

  // Draw page
  drawPage(pageNum);
  
  //Draw avatar
  drawAvatar();
}
//advances pages for p1 and p3 by pressing any key
function keyPressed() {
  if (pageNum == 1 || pageNum == 3){
    pageNum++;
    return false;
  }
  if (pageNum == 6){ //allows game to start over by pressing any key on page 6
    pageNum = 1;
    return false;
	}
}
  
 //page commands 
function keyTyped() {
  if (pageNum == 2) { // checks to see if user is on page 2
    if (key == 'y') { // if user hits the 'y' key go to page 3 - avatar with wand and instructions
      wand = true;
      pageNum = 3;
    } else if (key == 'n') { // if user hits the 'n' key go to other options page
      pageNum = 3;
      wand = false;
    }
    	return false;
  }
  
  if (pageNum == 4) { // checks to see if user is on page 4
    if (key == 'g') { // if user hits the 'g' key go to page 5, red scarf
      pageNum = 5;
      myColor = "red";
      rect(215, 215, 70, 35);
    } else if (key == 'r') { // if user hits the 'r' key go page 5, blue scarf
      pageNum = 5;
      myColor = 'blue'
      rect(215, 215, 70, 35);
    }else if (key == 'h') { // if user hits the 'r' key go page 5, yellow scarf
      pageNum = 5;
      myColor = "gold";
      rect(215, 215, 70, 35);
    }else if (key == 's') { // if user hits the 'r' key go page 5, green scarf
      pageNum = 5;
      myColor = 'green';
      rect(215, 215, 70, 35);
    }
    return false;
  }
  if (pageNum == 5) { // checks to see if user is on page 5
    if (key == 'o') { //owl or cat commands
      owl = true;
      cat = false;
      pageNum = 6
    } else if (key == 'c') { // if user hits the 'n' key go to other options page
      owl = false;
      cat = true;
      pageNum = 6
    }
    return false;
  }
}

//draw screens with text
function drawPage(pageNum) {
	fill("black");
  if (pageNum == 1) {
    myColor = "black";// re-sets scarf to black at pg 1
    // Display title
    textSize(24);
    text(titlePg1, titleX, titleY);
    // Display instructions text
    textSize(32);
    text(instrPg1, titleX, titleY + 50);

  } else if (pageNum == 2) {
    // Display title
    textSize(24);
    text(titlePg2, titleX, titleY);

  } else if (pageNum == 3) { // Display instructions text
    textSize(24);
    text(instrPg3, titleX, titleY + 80); 
  }
  else if (pageNum == 4) {
    // Display title
    textSize(20);
    text(titlePg4, titleX-30, titleY);
  } else if (pageNum == 5) {
    // Display title
    textSize(32);
    text(titlePg5, titleX, titleY);
    
  } else if (pageNum == 6) {
    // Display title
    textSize(32);
    text(instrPg6, titleX, titleY);
  }
  
  //wand follows avatar once you pass page three
  if (pageNum >= 3) { //wand follows avatar once you pass page three
  
    drawWand ();
    if (wand == false) {
    drawX ();
    } 
  }
  if (pageNum >= 6) {//animal follows avatar once you pass page 6
    if (cat == true){
      drawCat();
    } else if (owl == true){ 
      drawOwl();
    }
  }
}

//drawing items//
//wizard avatar
  function drawAvatar() {
		noStroke();
    fill(250, 227, 198);
    ellipse(250, 160, 130, 130);

    //eyes
    stroke("black");
    strokeWeight(1);
    fill("white");
    ellipse(215, 155, 20, 15);
    ellipse(280, 155, 20, 15);
    fill(77, 51, 25);
    ellipse(215, 155, 7, 12);
    ellipse(280, 155, 7, 12);
    fill("black");
    ellipse(215, 155, 3, 3);
    ellipse(280, 155, 3, 3);

    //hat
    fill('black')
    triangle(190, 130, 250, 50, 310, 130)

    //mouth
    arc(250, 190, 30, 5, 0, PI, OPEN);

    //scarf
    fill(myColor);
    rect(215, 220, 70, 30);
}

//draw wand
function drawWand() {
  fill ("black");
  line(300, 230, 330, 220);
  arc(285, 232, 40, 20, 1.5 * PI, HALF_PI);
}

//draw X
function drawX() {
  stroke("red")
  line(330, 200, 300, 250);
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

