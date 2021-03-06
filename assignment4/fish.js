function setup() {
  //calls the background to be drawn
  drawMountains();
  //calls the draw fish function
  drawFish();


}


function draw() {}



//function to draw the mountains and water from my first assignment
function drawMountains() {
  createCanvas(400, 400);
  background('darkblue');

  //forewater
  noStroke();
  fill('blue');
  ellipse(0, 310, 100, 100);
  ellipse(100, 310, 100, 100);
  ellipse(200, 310, 100, 100);
  ellipse(300, 310, 100, 100);
  ellipse(400, 310, 100, 100);
  rect(0, 260, 400, 50);

  //midwater
  noStroke();
  fill(200, 255, 255);
  ellipse(0, 265, 75, 75);
  ellipse(75, 265, 75, 75);
  ellipse(150, 265, 75, 75);
  ellipse(225, 265, 75, 75);
  ellipse(300, 265, 75, 75);
  ellipse(375, 265, 75, 75);
  ellipse(450, 265, 75, 75);
  rect(0, 222, 405, 45);

  //backwater
  noStroke();
  fill('lightblue');
  ellipse(0, 230, 50, 50);
  ellipse(50, 230, 50, 50);
  ellipse(100, 230, 50, 50);
  ellipse(150, 230, 50, 50);
  ellipse(200, 230, 50, 50);
  ellipse(250, 230, 50, 50);
  ellipse(300, 230, 50, 50);
  ellipse(350, 230, 50, 50);
  ellipse(400, 230, 50, 50);
  rect(0, 0, 400, 230);

  //sky
  fill(210, 150, 210);
  rect(0, 0, 400, 220);

  //sun
  noStroke();
  fill(200, 100, 0);
  ellipse(400, -130, 700, 700);
  fill(200, 120, 0);
  ellipse(400, -130, 650, 650);
  fill(200, 140, 0);
  ellipse(400, -130, 600, 600);
  fill(200, 160, 0);
  ellipse(400, -130, 550, 550);
  fill(200, 180, 0);
  ellipse(400, -130, 500, 500);
  fill(200, 200, 0);
  ellipse(400, -130, 450, 450);
  fill(200, 220, 0);
  ellipse(400, -130, 400, 400);
  fill(200, 240, 0);
  ellipse(400, -130, 350, 350);
  fill(200, 260, 0);
  ellipse(400, -130, 300, 300);

  //big mountain-snowcap
  noStroke();
  fill(210, 220, 210);
  quad(-50, 220, 120, 50, 200, 75, 463, 220)

  //midmountains
  noStroke();
  fill(40, 40, 80);
  triangle(190, 220, 320, 140, 500, 220);
  triangle(-50, 220, 40, 130, 175, 220);
  fill(45, 45, 80);
  triangle(100, 220, 190, 120, 350, 220);
  triangle(190, 220, 370, 140, 500, 220);
  triangle(0, 220, 120, 130, 199, 220);

  //foremountains
  noStroke();
  fill(170, 170, 130);
  triangle(190, 220, 370, 170, 500, 220);
  triangle(-50, 220, 70, 175, 175, 220);
  fill(100, 100, 90);
  triangle(100, 220, 190, 165, 350, 220);
}
//draws a fish allowing for changes in position 
//and slight variation in size
function drawFish(xFish, yFish, fishSize) {
  fill(20, 170, 70);
  noStroke();
  //draws the fins
  beginShape();
  vertex(xFish + 5, yFish - 8);
  vertex(xFish - 5, yFish - 15);
  vertex(xFish + 5, yFish - 15);
  vertex(xFish - 10, yFish - 15);
  vertex(xFish, yFish);
  vertex(xFish - 30, yFish - 10);
  vertex(xFish - 25, yFish);
  vertex(xFish - 30, yFish + 10);
  endShape(CLOSE);
  //draws the body, eye and mouth
  //fish body
  fill(20, 255, 150);
  ellipse(xFish, yFish, fishSize + 40, fishSize + 20);
  //fish eye white
  fill(255);
  ellipse(xFish + 8, yFish - 3, fishSize + 4, fishSize + 4);
  //fish pupil
  fill(0);
  ellipse(xFish + 9, yFish - 3, fishSize, fishSize + 3);
  //draw mouth
  stroke(0);
  strokeWeight(1);
  line(xFish + 21, yFish + 1, xFish + 16, yFish);

}

//draws the fish where the mouse is clicked and changes the size 
//of the body and eye slightly
function mouseClicked() {
  var xFish = (mouseX);
  var yFish = (mouseY);
  var size = random(0, 6);
  drawFish(xFish, yFish, size);


}