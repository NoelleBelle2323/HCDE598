//initialize all variables for messages
var openmessage = "Welcome to the Color Game! press 1 to get started"
var endmessage = "You're done!"
var greenmessage = "Do you like the color green? Type y/n"
var bluemessage = "Do you like the color blue? Click anywhere if yes, press x if no"
var orangemessage = "Do you like the color orange? Press up arrow if yes, press k if no"

//initialize variable for counting
var label = 1;

//create functions to draw the messages
function drawgreenmessage() {
  textSize(25)
  textStyle(BOLD)
  fill(51, 153, 102)
  text(greenmessage, 45, 300)
}

function drawbluemessage() {
  textSize(20)
  textStyle(BOLD)
  fill(102, 204, 255)
  text(bluemessage, 45, 300)
}

function draworangemessage() {
  textSize(20)
  textStyle(BOLD)
  fill(255, 191, 128)
  text(orangemessage, 45, 300)
}

function drawendmessage() {
  textSize(25)
  textStyle(BOLD)
  fill('white')
  text(endmessage, 45, 300)
}

//setup function used to draw the canvas, background, and welcome message
function setup() {
  createCanvas(680, 600);
  background(102, 204, 255);
  textSize(25)
  textStyle(BOLD)
  fill(204, 102, 255)
  text(openmessage, 45, 300)
}

//draw function used for if statements to determine if conditions are met
function draw() {
  
//use the system variable key to determine which key is pressed 
//use label variable to track which screen the user is on 
// determine if the user presses the correct key on the correct screen and draw the next appropriate screen if yes
//add one to the tracker variable when user is jumped to a screen farther along  
  
  if ((key == 1) && (label == 1)) {
    background(102, 204, 255);
    drawgreenmessage()
    label = label + 1 
  }

  if ((key == 'y') && (label == 2)) {
    background(51, 153, 102)
    drawbluemessage()
    label = label + 1
  }
  
  if ((key == 'n') && (label == 2)) {
    background('white')
    fill('black')
    stroke(50)
    text("sad...press p", 45, 300)

  }
  if ((key == 'p') && (label == 2)) {
    background(102, 204, 255)
    drawgreenmessage()

  }
  if ((key == 'x') && (label == 3)) {
    background('white')
    fill('black')
    stroke(50)
    text("sad...press P", 45, 300)
    
  }
  if ((key == 'p') && (label == 3)) {
    background(51, 153, 102)
    drawbluemessage()
  }
  
  if ((key == 'k') && (label == 4)) {
    background('white')
    fill('black')
    stroke(50)
    text("sad...press P", 45, 300)
  }
  
  if ((key == 'p') && (label == 4)) {
    background(102, 204, 255)
    draworangemessage()
  }
}

//use the mousePressed function to determine if the mouse is pressed 
//use an if statement to determine which screen the user is on
//use functions above to draw the next appropriate screenif yes
//increase the count of the tracker variable by 1
function mousePressed() {
  if (label == 3) {
    background(102, 204, 255)
    draworangemessage()
    label = label + 1
  }
}

//use the keyPressed function and an if statement with the system variable keyCode to determine if the up arrow is pressed  
//use another if statement and the label value to determine if the user is on the right screen
//if yes, use the fucntion above to draw the end screen 
function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (label === 4) {
      background(255, 191, 128)
      drawendmessage()
    }
  }
}