function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 100, 230);

  //pokeball
  strokeWeight(3);
  fill('white'); //bottom half
  arc(200, 200, 100, 100, 0, PI);
  fill('red'); //top half
  arc(200, 200, 100, 100, PI, 0);
  fill('white'); //center button
  line(150, 200, 250, 200);
  ellipse(200, 200, 30, 30); //dividing line

  //pikachu, limbs
  fill(240, 240, 20);
  triangle(65, 165, 30, 145, 65, 200); //left arm
  triangle(135, 165, 170, 145, 135, 200); //right arm
  triangle(75, 215, 90, 240, 60, 260); //left leg
  triangle(125, 215, 110, 240, 140, 260); //right leg

  //pikachu, tail
  beginShape();
  vertex(100, 230);
  vertex(80, 270);
  vertex(90, 300);
  vertex(65, 330);
  vertex(106, 400);
  vertex(150, 335);
  vertex(110, 320);
  vertex(125, 290);
  vertex(100, 270);
  vertex(100, 230);
  endShape();

  //pikachu, ears
  fill('black'); //ear backs
  ellipse(130, 90, 30, 140);
  ellipse(70, 90, 30, 140);
  fill(240, 240, 20); //ear fronts
  ellipse(130, 90, 30, 110);
  ellipse(70, 90, 30, 110);

  //pikachu, body
  ellipse(100, 175, 80, 150);

  //pikachu, head
  ellipse(100, 115, 100, 100); //head

  //pikachu, cheeks
  fill('red');
  ellipse(70, 130, 30, 30); //left cheek
  ellipse(130, 130, 30, 30); //right cheek

  //pikachu, eyes & nose
  fill('black');
  ellipse(85, 100, 10, 30); //left eye
  ellipse(115, 100, 10, 30); //right eye
  triangle(100, 130, 95, 120, 105, 120); //nose

  //lightning bolt
  fill('yellow');
  beginShape();
  vertex(325, 30);
  vertex(275, 90);
  vertex(305, 120);
  vertex(275, 150);
  vertex(305, 180);
  vertex(285, 240);
  vertex(335, 160);
  vertex(315, 150);
  vertex(350, 100);
  vertex(310, 80);
  endShape(CLOSE);

  //extra lightning bolts, see function definition below
  lightning(50, 95);
  lightning(-30, 150);

  /*code below is commented out for submission, but can be added back if desired
  //mouse coordinates
  fill('white');
  text(mouseX + ',' + mouseY, 10, 15);
  */
}

//lightning function below recreates the lightning bolt that I created in the draw() function, but adjusts the x and y values by a specified amount.
//(It would have been more efficient to create a function that creates a lightning bolt relative to a specified initial vertex, but this was the easiest way to do it after making the first one.)
function lightning(x, y) {
  beginShape();
  vertex(325 + x, 30 + y);
  vertex(275 + x, 90 + y);
  vertex(305 + x, 120 + y);
  vertex(275 + x, 150 + y);
  vertex(305 + x, 180 + y);
  vertex(285 + x, 240 + y);
  vertex(335 + x, 160 + y);
  vertex(315 + x, 150 + y);
  vertex(350 + x, 100 + y);
  vertex(310 + x, 80 + y);
  endShape(CLOSE);
}