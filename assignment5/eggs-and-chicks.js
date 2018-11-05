//This is Assignment 4, I used the chick and easter egg motif for this assignment as well
// This code will show how I first make the chick and egg repeat and then how they resize at random sizes
var isEgg = true;

//this is to create the canvas, choose the color of the background and
//the starting points of the chick and egg
function setup() {
  createCanvas(500, 500);
  background('#ad6ddb');

  yellowEgg(10, 50);
  greenChick(10, 50);
}

//This function writes the text on the screen asking people to press keys
//1 or 2
function drawText() {
  //font size weight fill etc
  push();
  textSize(30);
  fill('black');
  strokeWeight(1);
  stroke('black');
  text('Choose a key (1 or 2)', 100, 60);
  pop();
}

// this function will draw the egg
function yellowEgg(x, y, size) {
  //Yellow Egg
  fill('#fff084');
  stroke('#ffac1e');
  strokeWeight(8);
  // size*1.3 because I was trying to figure out the egg 
  // shape so that it looks like an egg 
  ellipse(x, y, size, size * 1.3);

  //line middle
  stroke('#ffac1e');
  strokeWeight(10);
  line(x - (size / 2), y, x + (size / 2), y);

  //line middle top
  stroke('#ffac1e');
  strokeWeight(8);
  line(x + (.46 * size), y - (size / 4), x - (.46 * size), y - (size / 4));

  //line top
  stroke('#ffac1e');
  strokeWeight(8);
  line(x + (.46 * size), y - (size / 4), x - (.46 * size), y - (size / 4));


  //line top 2
  stroke('#ffac1e');
  strokeWeight(8);
  line(x + (.47 * size), y - (size / 6), x - (.47 * size), y - (size / 6));

  //line middle bottom
  stroke('#ffac1e');
  strokeWeight(8);
  line(x + (.46 * size), y + (size / 4), x - (.46 * size), y + (size / 4));

  //line middle bottom
  stroke('#ffac1e');
  strokeWeight(8);
  line(x + (.46 * size), y + (size / 6), x - (.46 * size), y + (size / 6));
}


//function that draws and resizes the green chick
function greenChick(x, y, size) {
  //Green Chick
  //color of body
  stroke('#9ee863');
  strokeWeight(5)
  fill('#9ee863');
  // I found that if you miltiply size by the shape measurements it would
  //scale nicely. This was first done with substituting randSize with 2 and when 
  //that worked nicely I changed it back to randSize
  ellipse(x, y, (80 * size), (80 * size));

  //color of belly
  fill('#dbffbf');
  stroke('#dbffbf');
  ellipse(x, y + (10 * size), (47 * size), (50 * size));

  fill('#65c11f');
  stroke('#65c11f');
  ellipse(x - (36 * size), y + (10 * size), (20 * size), (30 * size));

  //left wing
  strokeWeight(1);
  ellipse(x - (38 * size), y + (11 * size), (20 * size), (30 * size));

  //right wing
  strokeWeight(6);
  ellipse(x + (37 * size), y + (10 * size), (20 * size), (30 * size));

  //eye left
  fill('white');
  stroke('white');
  ellipse(x - (15 * size), y - (12 * size), (25 * size), (25 * size));

  fill('black');
  stroke('black');
  ellipse(x - (15 * size), y - (12 * size), (16 * size), (16 * size));

  //eye right
  fill('white');
  stroke('white');
  ellipse(x + (15 * size), y - (12 * size), (25 * size), (25 * size));

  fill('black');
  stroke('black');
  ellipse(x + (15 * size), y - (12 * size), (16 * size), (16 * size));

  //beak
  stroke('orange');
  strokeWeight(6);
  fill('orange');
  triangle(x - (5 * size), y + (5 * size), x + (5 * size), y + (5 * size), x, y + (12 * size));
}

//this function makes the chick or egg appear when key 1 or 2 is pressed
function keyPressed() {

  if (key == 1) {
    var randX = random(0, 500);
    var randY = random(500, 0);
    var randSize = random(200);
    yellowEgg(randX, randY, randSize);
  }

  if (key == 2) {
    var randX2 = random(0, 500);
    var randY2 = random(500, 0);
    var randSize2 = random(5);
    greenChick(randX2, randY2, randSize2);
  }
}

// this function allows the text to be drawn at the top of the canvas
function draw() {
  drawText();
}