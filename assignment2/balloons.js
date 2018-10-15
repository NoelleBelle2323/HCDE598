function setup() {
  frameRate(30);
}

function drawPoints() {
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
}


var topleftX = 120;
var topleftY = 100;
var toprightX = 680;
var toprightY = 100;
var bottomleftX = 120;
var bottomleftY = 400
var bottomrightX = 680
var bottomrightY = 400



function draw() {
  createCanvas(800, 600);
  background(26, 34, 28);
  drawPoints();
  //top left balloon starts here
  balloon(topleftX, topleftY, "#EB3F65", "#7666E2", "#EB3F3F");
	
   //top right balloon starts here
  balloon(toprightX, toprightY, "#B572A1", "#39D7ED", "#EC7F21");
  
  
   //bottom left balloon starts here
  balloon(bottomleftX, bottomleftY, "#D5BA4E", "#C95770","#214FEC");
  
   //bottom right balloon starts here
  balloon(bottomrightX, bottomrightY, "#7d8cc4", "#f99d7f", "#79CA88");
 
   //All vertical moves
  
  
  if (topleftY < 260) {
    topleftX = topleftX + 2.3
    topleftY = topleftY + 2
  }
  
  if(toprightY < 260){
    toprightX = toprightX - 2.3;
    toprightY = toprightY + 2;
  }  
  
  if (bottomleftY > 260) {
      bottomleftX = bottomleftX + 8;
      bottomleftY = bottomleftY - 2; 
  }
  
  if (bottomrightY > 260) {
  	bottomrightX = bottomrightX - 8
 	 	bottomrightY = bottomrightY - 2
  }
}
// 
function balloon(centerX, centerY, bcolor, ecolor , rcolor) {
  // circle
  fill(bcolor)
  stroke("#97CFE9")
  strokeWeight(4);
  ellipse(centerX, centerY, 105);

  //Centre Ellipse
  fill(ecolor)
  stroke("#97CFE9")
  strokeWeight(4);
  ellipse(centerX, centerY,55,105);

   //Line top Left to right
  strokeWeight(4);
  stroke("#97CFE9");
  //line(83, 137, 137, 193)
  var linex = centerX-37;
  var liney = centerY+37;
  line(linex, liney, linex+55, liney+55)


//Line top right to left
  strokeWeight(4);
  stroke("#97CFE9");
 // line(155, 137, 101, 193);
  var linex1 = centerX+37;
  var liney1 = centerY+37
  line(linex1, liney1, linex1-55, liney1+55)
  

  //rectangle base
  stroke("#97CFE9")
   fill(rcolor)
  strokeWeight(4);
  //rect(100, 190, 40, 30, 7);
  rect(linex1-55, liney1+55, 35,25,7)
  
  
  //Line rectangle
  strokeWeight(12);
  stroke("#97CFE9");
 //line(104, 196, 135, 196);
 line(linex1-52, liney1+55, linex+52, liney+55)
}

