function setup() {
  createCanvas(800, 800);
  background(220);
  rectMode(CENTER);


}

function draw() {
//Prompt
  textSize(24);
text('press any key to draw a beetle', 400, 30);
fill(0, 102, 153);

}


//defining function and four parameters for drawing a beetle
function drawBeetle(x, y, size, bodyColor) {


  //shapes for antenna and legs

  strokeWeight(2 * size / 2);
  noFill();

  // right antenna
  beginShape();
  vertex((x + 10) * size, (y - 60) * size);
  vertex((x + 50) * size, (y - 110) * size);
  endShape();

  // left antenna
  beginShape();
  vertex((x - 10) * size, (y - 60) * size);
  vertex((x - 50) * size, (y - 110) * size);
  endShape();

  strokeWeight(5 * size / 2);
  noFill();

  // legs - lower left
  beginShape();
  vertex(x * size, y * size);
  vertex((x - 50) * size, (y + 40) * size);
  vertex((x - 50) * size, (y + 80) * size);
  endShape();

  // legs - lower right
  beginShape();
  vertex(x * size, y * size);
  vertex((x + 50) * size, (y + 40) * size);
  vertex((x + 50) * size, (y + 80) * size);
  endShape();

  // legs - top left
  beginShape();
  vertex(x * size, y * size);
  vertex((x - 50) * size, (y - 40) * size);
  vertex((x - 50) * size, (y - 80) * size);
  endShape();

  // legs - top right
  beginShape();
  vertex(x * size, y * size);
  vertex((x + 50) * size, (y - 40) * size);
  vertex((x + 50) * size, (y - 80) * size);
  endShape();

  // legs - middle left
  beginShape();
  vertex(x * size, y * size);
  vertex((x - 60) * size, (y + 10) * size);
  vertex((x - 70) * size, (y + 50) * size);
  endShape();

  // legs - middle right
  beginShape();
  vertex(x * size, y * size);
  vertex((x + 60) * size, (y + 10) * size);
  vertex((x + 70) * size, (y + 50) * size);
  endShape();

  //shapes that make up the body, with a fill color I defined to change randomly
  fill(bodyColor);
  strokeWeight(0);
  rect(x * size, y * size, 50 * size, 61 * size);
  quad((x - 25) * size, (y + 30) * size, (x + 25) * size, (y + 30) * size, x * size, (y + 60) * size, x * size, (y + 60) * size);
  quad((x - 15) * size, (y - 60) * size, (x + 15) * size, (y - 60) * size, (x + 25) * size, (y - 30) * size, (x - 25) * size, (y - 30) * size);
  arc((x - 15) * size, (y - 60) * size, 15 * size, 15 * size, 0, PI, CHORD);
  arc((x + 15) * size, (y - 60) * size, 15 * size, 15 * size, 0, PI, CHORD);

  // spots on the body, with a fill that stays the same.
  strokeWeight(0);
  fill("yellow");
  ellipse((x - 10) * size, y * size, 15 * size);

  strokeWeight(0);
  fill("yellow");
  ellipse((x + 10) * size, (y + 10) * size, 15 * size);

  strokeWeight(0);
  fill("yellow");
  ellipse((x + 8) * size, (y - 10) * size, 10 * size);
}
//function to draw a beetle when a key is pressed, and give it a random color. 
//Scale up or down from the origin point of 200, 200
function keyPressed() {
  var size = random(0, 5);
  var bodyColor = color(random(1, 255), random(1, 255), random(1, 255));
  drawBeetle(200, 200, size, bodyColor);
}