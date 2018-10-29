//fixed color
var bgColor = 'blue';

//creates the canvas and fills it with a color
function setup() {
  createCanvas(400, 400);
  background(bgColor);
  
} 
//everything is triggered by pressing a key on the keyboard 
function draw() {}

// Draws Flounder
function drawFlounder(x,y,w){
  background(bgColor);
  fill('yellow');
  stroke('yellow');
  ellipse(x, y, w+20*1.5, w+10*1.5);//draws face
  fill(0, 191, 255);
  stroke(0, 191, 255);
  rect(x - 5, y - (50 + w)*0.5, 5,16); //draws topfin
  rect(x - (65 + w)*0.5, y, 16, 5); //fin
  rect(x + (30 + w)*0.5, y, 16, 5); //fin
  fill('black')
  ellipse(x-(w*0.3), y, w/5); //eye
  ellipse(x+(w*0.3), y, w/5); //eye
}
// whenever a key is pressed on the keyboard,
// it draws a Flounder on the current position
// of the mouse with a random size web each time
function keyPressed() {
    var size = random(25, 100);
    drawFlounder(mouseX, mouseY, size);}