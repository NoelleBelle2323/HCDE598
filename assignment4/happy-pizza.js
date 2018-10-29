//set variables
var bgColor = 'pink';
var baseColor = 'tan';
var crustColor = 'brown';
var pepperoniColor = 'red';
var faceColor = 'black';
var pizzaX = 210;
var pizzaY = 50;
var eyeWeight = 5;
var mouthWeight = 3;

function setup() {
  createCanvas(700, 500);
  background(bgColor);
}

function draw() {}

function drawPizza(x, y, pizzaSize) {
  //set x= 210, y= 50, pizzaSize= 100
  //set base point (x, y) as the tip of the triangle
  //hard coordinates of shapes are in comments for my reference

  //draw pizza triangle base
  fill(baseColor);
  triangle(x, y, x + pizzaSize * 0.5, y + pizzaSize, x - pizzaSize * 0.5, y + pizzaSize);
  //triangle(210, 50, 260, 150, 160, 150);

  //draw pizza crust
  fill(crustColor);
  rect(x - pizzaSize * 0.5, y + pizzaSize, pizzaSize, pizzaSize * 0.12);
  //rect(160, 150, 100, 12);

  //draw pizza pepperoni  
  fill(pepperoniColor);
  ellipse(x, y + pizzaSize * 0.3, pizzaSize / 5.5, pizzaSize / 5);
  //ellipse(210, 80, 18, 20);
  ellipse(x - pizzaSize * 0.2, y + pizzaSize * 0.75, pizzaSize / 5.5, pizzaSize / 5);
  //ellipse(190, 125, 18, 20);
  ellipse(x + pizzaSize * 0.05, y + pizzaSize * 0.87, pizzaSize / 5.5, pizzaSize / 5);
  //ellipse(215, 137, 18, 20);  
  ellipse(x + pizzaSize * 0.25, y + pizzaSize * 0.7, pizzaSize / 5.5, pizzaSize / 5);
  //ellipse(235, 120, 18, 20);

  //draw pizza eyes
  stroke(faceColor);
  strokeWeight(eyeWeight);
  beginShape(POINTS);
  vertex(x - pizzaSize * 0.1, y + pizzaSize * 0.5);
  //vertex(200, 100);
  vertex(x + pizzaSize * 0.1, y + pizzaSize * 0.5);
  //vertex(220, 100)
  endShape();

  //draw pizza mouth
  strokeWeight(mouthWeight);
  fill(baseColor);
  arc(x, y + pizzaSize * 0.6, pizzaSize / 5, pizzaSize / 5.5, TWO_PI, PI);
  //arc(210, 110, 20, 18, TWO_PI, PI);

  //draw pizza's right leg
  line(x - pizzaSize * 0.1, y + pizzaSize * 1.13, x - pizzaSize * 0.1, y + pizzaSize * 1.4);
  //line(200, 163, 200, 190);
  line(x - pizzaSize * 0.1, y + pizzaSize * 1.4, x - pizzaSize * 0.2, y + pizzaSize * 1.4);
  //line(200, 190, 190, 190);

  //draw pizza's left leg
  line(x + pizzaSize * 0.1, y + pizzaSize * 1.13, x + pizzaSize * 0.1, y + pizzaSize * 1.4);
  //line(220, 163, 220, 190);
  line(x + pizzaSize * 0.1, y + pizzaSize * 1.4, x + pizzaSize * 0.2, y + pizzaSize * 1.4);
  //line(220, 190, 230, 190);

}

//pizza will draw wherever you click your mouse
function mouseClicked() {
  var size = random(50, 350);
  drawPizza(mouseX, mouseY, size);
}