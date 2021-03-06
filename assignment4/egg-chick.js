var isEgg = true;

function setup() {
  createCanvas(500, 500);
  background('#ad6ddb');

  yellowEgg(10, 50);
  greenChick(10, 50);
}

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

function greenChick(x, y) {
  //Green Chick
  //color of body
  stroke('#9ee863');
  strokeWeight(5)
  fill('#9ee863');
  ellipse(x, y, 80, 80);

  //color of belly
  fill('#dbffbf');
  stroke('#dbffbf');
  ellipse(x, y + 10, 47, 50);

  fill('#65c11f');
  stroke('#65c11f');
  ellipse(x - 36, y + 10, 20, 30);

  //left wing
  strokeWeight(1);
  ellipse(x - 38, y + 11, 20, 30);

  //right wing
  strokeWeight(6);
  ellipse(x + 37, y + 10, 20, 30);

  //eye left
  fill('white');
  stroke('white');
  ellipse(x - 15, y - 12, 25, 25);

  fill('black');
  stroke('black');
  ellipse(x - 15, y - 12, 16, 16);

  //eye right
  fill('white');
  stroke('white');
  ellipse(x + 15, y - 12, 25, 25);

  fill('black');
  stroke('black');
  ellipse(x + 15, y - 12, 16, 16);

  //beak
  stroke('orange');
  strokeWeight(6);
  fill('orange');
  triangle(x - 5, y + 5, x + 5, y + 5, x, y + 12);
}

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
    var randSize2 = random(200);
    greenChick(randX2, randY2, randSize2);
  }
}


function draw() {
  drawText();
}