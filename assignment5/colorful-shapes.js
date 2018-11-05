//define global variables and constant for the shape
var xCoord = 100
var yCoord = 150
const SEGMENT_SIZE=10

//define the canvas size and its background color, the shape and alternating colors, and it moving horozontally while changing size using a loop command
function setup() {
  createCanvas(400, 400);
  background('white');
  noFill();
  for (i=1; i < 21; i++){
    var xCorner = xCoord + i*SEGMENT_SIZE;
    var radius = i*5;
    alternateColor(i);
    ellipse(xCoord, yCoord, radius, radius);
    ellipse(xCorner, yCoord, radius, radius);
  }
}

// boolean function to determine if a number "i" is odd
// returns true if it is odd, false otherwise
function alternateColor(i) {
  var remainder = i % 2;
  
 //if i is divisible by 2 draw blue
 if (remainder == 0){
   stroke('blue');
 }
  else {
    stroke('red');
  }
  // else draw red
}

function draw() {
  
}