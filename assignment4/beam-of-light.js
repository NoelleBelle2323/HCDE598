//variables for static background
var yAxis = 6;
var rStars;
var c1, c2;
var stars = [];



//set up the night sky canvas
function setup() {
  createCanvas(600, 600);

  c1 = color(0);
  c2 = color(15, 40, 62);

  // calls gradient
  setGradient(0, 0, 600, 600, c1, c2, yAxis);

  rStars = random(15, 35);

  //Code for stars from: https://www.openprocessing.org/sketch/537316
  for (var i = 0; i < rStars; i++) {
    stars.push(new Star());
  }
}

function draw() {
  //Code for stars from: https://www.openprocessing.org/sketch/537316
  for (var i = 0; i < stars.length; i++) {
    stars[i].display();
  }
}

//this is the function to create the beam of light
function beam(x, y, s) {

  noStroke();
  //yellow bottom
  fill(255, 245, 100, 90);
  rect(x, y, s, s);
  //orange side
  fill(255, 189, 104, 90);
  quad(x + s, y, s * 2, s - y, s * 3.2, y + s, x + s, y + s);
  //teal top
  fill(102, 255, 255, 90);
  quad(x + s, y, s * 2, s - y, s, s - y, x, y);
}

//function so the beam will appear where the mouse is pressed
function mousePressed() {
  var size = random(height / 20, width / 5);
  beam(mouseX, mouseY, size);

}


// code for gradient modified from: https://www.openprocessing.org/sketch/537316
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == yAxis) { // Top to bottom gradient
    for (var i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

//Code for star function modified from: https://www.openprocessing.org/sketch/537316
function Star() {
  this.x = random(5, width - 5);
  this.y = random(10, height - 10);
  this.r = random(2, 5);

  this.display = function() {
    stroke(33, 121, 145);
    fill(247, 255, 196);
    this.rc = constrain(this.r, 0, 9);
    ellipse(this.x, this.y, this.rc, this.rc);
  };
}