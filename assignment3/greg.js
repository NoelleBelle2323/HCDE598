var myColor = "White";

// defining these messages to be used in the functions drawing screens
var welcomeMessage = "Once Upon a Time...";
var secondScreenMessage = "There was a robot! ";
var thirdScreenMessage = "His name was Greg.";
var keyMessage = "Press 1, 2, 3 to continue";

var x = 100
var y = 50

function setup() {  
  createCanvas(400, 400);
}

function draw() {   // creates the grey rectangle in the upper left corner
    
  fill(200);  
  noStroke();  
  background(220);

     // sets the color of the text
    
  fill('white');
  stroke('white');  
  noStroke();

    
  fill(myColor);
  background("#4C1919")


  //drawing functions
    
  if (key == "1") {    
    drawWelcomeScreen();  
  } else if (key == "2") {    
    drawSecondScreen();  
  } else if (key == "3") {    
    drawThirdScreen();  
  }  
  //use keys to navigate
  textSize(20);
  fill("#7F3FBF");  
  text(keyMessage, 10, height - 50);  
  text(key, width - 20, height - 20);
}

//first screen
function drawWelcomeScreen() {  
  textSize(40);  
  noStroke();
  text(welcomeMessage, 10, height - 330);
}

//second screen
function drawSecondScreen() {  
  textSize(40);  
  noStroke();  
  text(secondScreenMessage, 20, height - 100);
  if (key == "2")
    fill("grey");
  rect(130, 50, 120, 50);
  rect(118, 130, 145, 90);
  rect(175, 100, 30, 30);
  rect(150, 210, 30, 30);
  rect(205, 210, 30, 30);
  fill("black");
  ellipse(180, 70, 10, 10);
  ellipse(200, 70, 10, 10);
  rect(100, 150, 30, 30);
  rect(250, 150, 30, 30);
  triangle(160, 50, 158, 20, 200, 50);
}
//third screen
function drawThirdScreen() {  
  textSize(40);  
  noStroke();  
  text(thirdScreenMessage, 15, height - 90);
  if (key == "3")
    fill("grey");
  rect(x + 30, y, x + 20, y);
  rect(x + 18, y + 80, x + 45, y + 40);
  rect(x + 75, y + 50, x - 70, y - 20);
  rect(x + 50, y + 160, x - 70, y - 20);
  rect(x + 105, y + 160, x - 70, y - 20);
  fill("black");
  ellipse(x + 80, y + 20, x - 90, y - 40);
  ellipse(x + 100, y + 20, x - 90, y - 40);
  rect(x, 150, x - 70, y - 20);
  rect(x + 150, y + 100, x - 70, y - 20);
  triangle(x + 60, y, x + 58, y - 30, x + 100, y);
}
