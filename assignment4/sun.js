// A4 Assignment: Scaled Sun
// Rachel Kangas, HCDE 598C
// rachelk3@uw.edu

// This program creates a function that draws a sun with variable input paramters.
// The size of the sun is determined by user input. When the mouse is clicked, a sun is drawn at center location (x coordinate of house, y coordinate of mouse),
// with size between 75 and height/4, determined by the random function
// The sun will be drawn and scaled to random sizes depending on where on the canvas the user clicks

// establish set variables
var backcolor = 'lightblue'; // canvas color
var suncolor = 'yellow'; // sun face and rays fill color
var sunface = 'black'; // sun eyes, mouth color
var outline = 2; // stroke weight of sun outlines

// set up canvas for drawing
function setup() {
  createCanvas(800, 800);
  background(backcolor);
}

// create function that draws the sun based on adjustable parameters: (x,y) center and sun size
// sunSize represents the radius of the sun
function drawSun(x, y, sunSize) {

  // create sun rays
  stroke(suncolor); // set sun rays color
  strokeWeight(outline); // establish weight of sun rays

  // draw 8 radial lines that will be sun rays
  line(x, y, x + sunSize, y);
  line(x, y, x - sunSize, y);
  line(x, y, x, y + sunSize);
  line(x, y, x, y - sunSize);
  line(x, y, x + sunSize * 0.8, y + sunSize * 0.8);
  line(x, y, x + sunSize * 0.8, y - sunSize * 0.8);
  line(x, y, x - sunSize * 0.8, y + sunSize * 0.8);
  line(x, y, x - sunSize * 0.8, y - sunSize * 0.8);

  // draw sun body
  stroke(suncolor); // set sun body outline color
  strokeWeight(outline); // establish weight of sun body outline
  fill(suncolor); // sun body fill is yellow
  ellipse(x, y, sunSize);

  // draw sun eyes
  stroke(sunface); // eye outline color
  strokeWeight(outline); // weight of eye outline
  fill(sunface); // eye fill color
  ellipse(x + 15, y - 15, 5, 5); // right eye
  ellipse(x - 15, y - 15, 5, 5); // left eye

  // draw sun mouth
  stroke(sunface); // mouth outline color
  strokeWeight(outline); // weight of mouth outline
  noFill(); // want arc for mouth with no fill color
  arc(x, y + 15, 30, 15, 0, PI); // mouth 

}

// write a function that calls drawSun and can adjust the scale
// variable sun adjusts the scale randomly when the mouse is clicked
function mouseClicked() {
  var sun = random(75, height / 4); // variable size, but keeps the sun's face in the middle of the body
  drawSun(mouseX, mouseY, sun); // call drawSun function with variable input parameters based on user input

}

// the draw function is not used in this program
// every function is triggered with a mouse click
function draw() {}