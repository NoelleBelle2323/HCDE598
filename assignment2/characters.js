// I've been working on this for at least 6 hours in total
// in Seattle, at LAX airport and on the flight to China
// I spent a long time unsuccessfully trying to get variables to work
// I tried looking up everything I could think of in the textbook,
// in p5js.org/reference and in the PPT for the class
// but I could not figure out what I was doing wrong
// so I decided to postpone variables and simply create the 4 characters
// using tools we learned in Assignment 1
// but I'm really stuck, all I've done is review Assignment 1
// I'm afraid I'll have to start over from the beginning to be able do Assignment 2
// I would like permission to turn this assignment in late and schedule
// a skype call to figure out what I'm doing wrong so I can finish the assignment

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(250, 250, 200);

  //green character
  stroke(32, 133, 0);
  fill(11, 195, 11);
  strokeWeight(5);
  line(60, 130, 90, 150); //left arm
  line(140, 130, 110, 150); //right arm
  line(90, 175, 90, 200); //left leg
  line(110, 175, 110, 200); //right leg
  triangle(100, 100, 65, 175, 135, 175);
  point(95, 135); //left eye
  point(105, 135); //right eye
  noFill();
  arc(100, 120, 60, 60, 1.35, 1.85); // mouth

  //red character
  stroke(128, 21, 21);
  fill(255, 0, 0);
  strokeWeight(5);
  line(60, 355, 90, 375); //left arm
  line(140, 355, 110, 375); //right arm
  line(90, 400, 90, 425); //left leg
  line(110, 400, 110, 425); //right leg
  triangle(100, 325, 65, 400, 135, 400);
  point(95, 360); //left eye
  point(105, 360); //right eye
  noFill();
  arc(100, 345, 60, 60, 1.35, 1.85); // mouth

  //blue character
  stroke(30, 25, 89);
  fill(94, 74, 246);
  strokeWeight(5);
  line(540, 130, 510, 150); //left arm
  line(460, 130, 490, 150); //right arm
  line(510, 175, 510, 200); //left leg
  line(490, 175, 490, 200); //right leg
  triangle(500, 100, 535, 175, 465, 175);
  point(495, 135); //left eye
  point(505, 135); //right eye
  noFill();
  arc(500, 120, 60, 60, 1.35, 1.85); // mouth

  //purple character
  stroke(135, 70, 139);
  fill(243, 162, 249);
  strokeWeight(5);
  line(540, 355, 510, 375); //left arm
  line(460, 355, 490, 375); //right arm
  line(510, 400, 510, 425); //left leg
  line(490, 400, 490, 425); //right leg
  triangle(500, 325, 535, 400, 465, 400);
  point(495, 360); //left eye
  point(505, 360); //right eye
  // line(490,377, 510, 377); //mouth
  noFill();
  arc(500, 345, 60, 60, 1.35, 1.85); // mouth

}