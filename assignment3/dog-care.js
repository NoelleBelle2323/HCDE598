var onPage1 = true; // We always start on this page

// The different pages/scenes will be set to true when
// when the appropriate choices are made to land us
// on each page. Only one of these onPage# variables
// will ever be true at a time.

var onPage2 = false;
var onPage3 = false;
var onPage4 = false;
var onPage5 = false;
// var onPage#.... (as many as you need)

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(20);
}

function draw() {


  if (onPage1) {
    background(220);

    drawPage1(); // call the function that draws page 1 here (text, shapes, etc.)

    if (key == "D" || key == "d") {
      onPage1 = false; // we're done with page 1
      onPage2 = true; // if D is chosen, we'll go to page 2
    } else if (key == "C" || key == "c") {
      onPage1 = false; // we're done with page 1
      onPage3 = true; // if C is chosen, we'll go to page 3
    }

  } else if (onPage2) {
    background(220);

    drawPage2();

    if (key == "F" || key == "f") {
      onPage2 = false;
      onPage4 = true; // go on to next page after R is chosen
    } else if (key == "L" || key == "l") {
      onPage2 = false;
      onPage5 = true; // go on to next page after L is chosen
    }

  } else if (onPage3) {
    background(220);

    drawPage3();

    if (key == "F" || key == "f") {
      onPage3 = false;
      onPage4 = true; // go on to next page after R is chosen
    } else if (key == "L" || key == "l") {
      onPage3 = false;
      onPage5 = true; // go on to next page after L is chosen
    }

  } else if (onPage4) {
    drawPage4(); // end here

  } else if (onPage5) {
    drawPage5(); // end here
  }

}

/////////////////////////////////////////
//// Functions are defined below
////////////////////////////////////////

// intro: Adopt A Pet Today!
function drawPage1() {
  push();
  fill(0);
  text("Adopt A Pet Today!", 200, 150);
  text("Press D for Dog", 200, 250);
  text("Press C for Cat", 200, 300);
  pop();
}

// Dog - if D is chosen from intro
function drawPage2() {
  push();
  fill('brown');
  ellipse(200, 50, 40, 40);
  ellipse(180, 35, 25, 15);
  ellipse(220, 35, 25, 15);
  fill('white')
  ellipse(190, 50, 8, 8)
   ellipse(210, 50, 8, 8)
  fill('black')
  triangle(200, 56, 197, 60, 203, 60);
  fill(0);
  text("Okay, here's a dog.", 200, 150);
  text("Do you want to give it food or love?", 200, 175);
  text("Press F for food", 200, 250);
  text("Press L for love", 200, 300);
  pop();
}

// Cat - if C is chosen from intro
function drawPage3() {
  push();
  fill('orange');
  triangle(185, 20, 180, 50, 195, 40);
  triangle(215, 20, 220, 50, 205, 40);
  ellipse(200, 50, 40, 40);
  fill('white')
  ellipse(190, 50, 8, 8)
   ellipse(210, 50, 8, 8)
  fill('black')
  triangle(200, 56, 197, 60, 203, 60);
  fill(0);
  text("Okay, here's a cat.", 200, 150);
  text("Do you want to give it food or love?", 200, 175);
  text("Press F for food", 200, 250);
  text("Press L for love", 200, 300);
  pop();
}


// Food - if F is chosen from page 2 or 3
function drawPage4() {
  push();

  fill('red');
  ellipse(150, 50, 20, 20);
  
  fill('blue');
 quad(140, 50, 160, 50, 160, 60, 140, 60);
  stroke(220);
fill(220);
  rect(0, 100, 400, 400); // cover up previous text
  fill(0);
  text("Your pet is happy!", 200, 200);
  pop();
  }


// Love - if L is chosen from page 2 or 3
function drawPage5() {
  push();
 fill('red');
  strokeWeight(0);
  ellipse(250, 50, 20, 20);
  ellipse(270, 50, 20, 20);
  triangle(239, 53, 281, 53, 260, 70);
  stroke(220);
  fill(220);
  rect(0, 100, 400, 400); // cover up previous text
  fill(0);
  text("Your pet is happy!", 200, 200);
  pop();


}