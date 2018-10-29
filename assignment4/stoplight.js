//var start here
var backColor = '#7CCEFF'

//setup page here
function setup() {
  createCanvas(500, 500);
  background(backColor);
}

//drawings go here
function draw() {
  drawStoplight();
}

function drawStoplight(x, y, stoplightSize) {

  //light holder 
  fill("#FFD400");
  rect(x + 25, y - 20, (stoplightSize / 2) - 50, stoplightSize - 100);


  //light body
  fill("black");
  rect(x, y, stoplightSize / 2, stoplightSize);

  //light interior 
  fill("#FFD400");
  rect(x + 15, y + 20, stoplightSize / 2 - 30, stoplightSize - 30);

  //red light 
  fill("red");
  ellipse(x + 50, y + 50, stoplightSize / 4, stoplightSize / 4);

  //yellow light
  fill("yellow");
  ellipse(x + 50, y + 110, stoplightSize / 4, stoplightSize / 4);

  //green light
  fill("green");
  ellipse(x + 50, y + 170, stoplightSize / 4, stoplightSize / 4);
}

//This part helps you create multiple lights on the page 
function mouseClicked() {
  var size = random(20, 300);
  drawStoplight(mouseX, mouseY, size);
}