function setup() {
  createCanvas(800, 800);
  background(114, 211, 235); // light blue background
  
  //carrot background- for fun
  noStroke();
  fill(235, 136, 55); //orange
  triangle(79, 248, 297, 105, 555, 670); //carrot body
  fill(40, 94, 27); //green
  beginShape(); //carrot top
  vertex(79, 248);
  vertex(0, 207);
  vertex(84, 197);
  vertex(0, 72);
  vertex(115, 155);
  vertex(76, 0);
  vertex(178, 91);
  vertex(233, 0);
  vertex(297, 105);
  endShape();
}

function draw() {
  /* creates the grey rectangle in the upper left corner
  fill('grey');
  stroke('grey');
  rect(0, 0, 100, 20);

  // sets the color of the text
  fill('black')
  stroke('black');
  strokeWeight(1);

  // writes the text of the current coordinates in the corner
  text("x: " + mouseX + " y: " + mouseY, 10, 15);
  */


  // drawRabbit(100, 200, 1); some test rabbits
  //  drawRabbit(500, 400, 0.2);
}



//rabbit function with x,y, size variable paramaters
function drawRabbit(x, y, size) {
  noStroke();
  fill('white');
  ellipse(x, y - 180 * size, 60 * size, 250 * size); //ears
  ellipse(x + 100 * size, y - 180 * size, 60 * size, 250 * size);
  ellipse(x + 50 * size, y + 20 * size, 300 * size, 300 * size); //head
  fill('black');
  ellipse(x, y, 50 * size, 50 * size); //eyes
  ellipse(x + 60 * size, y, 50 * size, 50 * size);
  fill('white');
  ellipse(x - 10 * size, y - 10 * size, 20 * size, 20 * size);
  ellipse(x + 50 * size, y - 10 * size, 20 * size, 20 * size);
  fill('pink');
  ellipse(x + 20 * size, y + 40 * size, 30 * size, 30 * size); //nose
  ellipse(x + 45 * size, y + 40 * size, 30 * size, 30 * size);
  stroke('black');
  line(x + 5 * size, y + 40 * size, x - 20 * size, y + 35 * size); //whiskers
  line(x + 8 * size, y + 50 * size, x - 20 * size, y + 60 * size);
  line(x + 60 * size, y + 40 * size, x + 75 * size, y + 35 * size);
  line(x + 58 * size, y + 50 * size, x + 75 * size, y + 55 * size);
}

function keyPressed() {
  var size = random(0, 3); //didn't want the rabbit to be too big, easily obscures screen
  var x = random(0, 700); //any key input will choose a random size and location of rabbit
  var y = random(0, 700);
  drawRabbit(x, y, size);
}