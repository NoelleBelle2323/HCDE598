  var Rotation = 0;
  var plankton0_X = 0;
  var plankton0_Y = 0;
  var movement = 1;
  var step = 0.003
  var pct1 = 0;
  var pct2 = 0;
  var pct3 = 0;
  var pct4 = 0;




  function setup() {
    createCanvas(800, 800);

  }

  function draw() {
    background(53, 69, 65);


    // Plankton 1 design for a simple flower taken from p5js example code
    push();
    fill(135, 235, 18, 25);
    //modify x and y coordinate of whole plankton
    //used tweening code from chapter 8
    translate(800 + ((700 - 800) * pct1), 800 + ((400 - 800) * pct1));
    if (pct1 < 1.0) {
      pct1 += step;
    }
    //add variable to store the rotation and add to its previous position
    Rotation = Rotation + 0.025;
    rotate(Rotation);
    noStroke();
    for (var i = 0; i < 10; i++) {
      ellipse(0, 30, 20, 80);
      rotate(PI / 5);
    }
    pop();


    //plankton 0 adapted from student work "pumpkin"
    push();
    //rotated whole image from original image, just floating around
    translate(plankton0_X, plankton0_Y);
    if (plankton0_X > 800) {
      movement = -1
    }
    if (plankton0_X <= 0) {
      movement = 1
    }

    if (plankton0_Y > 800) {
      movement = -2
    }
    if (plankton0_Y <= 0) {
      movement = 2
    }
    plankton0_X = plankton0_X + movement;
    plankton0_Y = plankton0_Y + movement;

    rotate(PI / 3);
    //eyes?
    ellipse(-20, 55, 25, 25);
    ellipse(10, 70, 10, 10);
    stroke(24, 235, 158);
    strokeWeight(5);
    line(-100, 175, -200, 330);
    line(80, 175, 155, 350);
    fill(13, 235, 213, 40);

    beginShape();
    curveVertex(-100, 175);
    curveVertex(-100, 175);
    curveVertex(-70, 150);
    curveVertex(-40, 175);
    curveVertex(-10, 150);
    curveVertex(20, 175);
    curveVertex(50, 150);
    curveVertex(80, 175);
    curveVertex(-10, 5);
    curveVertex(-100, 175);
    curveVertex(-100, 175);
    endShape();
    pop();

    //Plankton 2 robot head from p5js draw example
    push();
    translate(0 + ((550 - 0) * pct2), 800 + ((400 - 800) * pct2));
    if (pct2 < 1.0) {
      pct2 += step;
    }
    noStroke();
    fill(117, 57, 171, 100);
    ellipse(0, 0, 45, 45); // Head, adjusting each x and y to get correct origin. I originally placed the opbject randomly on the canvas and subsequently had to adjust for this
    fill(255);
    ellipse(12, -5, 14, 14); // Large eye
    fill(0);
    ellipse(12, -5, 3, 3); // Pupil
    fill(153);
    ellipse(-13, -7, 5, 5); // Small eye 1
    ellipse(20, -25, 4, 4); // Small eye 2
    ellipse(29, 7, 3, 3); // Small eye 3
    // Antennae
    stroke(164, 171, 22);
    line(0, 0, -30, -43); // Small
    line(0, 0, 30, -99); // Tall
    line(0, 0, 66, 15); // Medium
    pop();

    //plankton 3 adapted from https://p5js.org/learn/curves.html
    push();
    translate(800 + ((100 - 800) * pct3), 0 + ((400 - 0) * pct3));
    if (pct3 < 1.0) {
      pct3 += step;
    }
    noFill();
    stroke(171, 109, 37);
    strokeWeight(2);
    line(0, 0, 20, 55);
    line(0, 0, 10, 55);
    beginShape();
    curveVertex(-10, -105);
    curveVertex(-10, -105);
    curveVertex(30, -85);
    curveVertex(50, -45);
    curveVertex(10, -25);
    curveVertex(0, 5);
    curveVertex(0, 105);
    endShape();
    noStroke();
    fill(235, 153, 32, 70);
    rect(8, -103, 12, 15);
    rect(25, -90, 12, 15);
    rect(-10, -110, 12, 15);
    rect(-8, 0, 12, 15);
    rect(30, -45, 12, 15);
    rect(-1, -30, 12, 15);
    rect(40, -65, 12, 15);
    pop();

    //plankton 4
    push();
    translate(0 + ((350 - 0) * pct4), 0 + ((400 - 0) * pct4));
    if (pct4 < 1.0) {
      pct4 += step;
    }
    rotate(Rotation / 10);
    stroke(122, 145, 235);
    fill(122, 145, 235, 50);
    ellipse(0, 0, 140, 140);
    ellipse(20, 0, 20, 20);
    //flagella, each one is rotated and printed to screen in a different place
    push();
    rotate(PI / 3);
    translate(70, 0);
    line(0, 0, 75, 0);
    pop();

    push();
    rotate(PI / 2);
    translate(70, 0);
    line(0, 0, 75, 0);
    pop();

    push();
    rotate(PI / 4);
    translate(70, 0);
    line(0, 0, 30, 0);
    pop();

    push();
    rotate(PI);
    translate(70, 0);
    line(0, 0, 55, 0);
    pop();

    push();
    rotate(1.75 * PI);
    translate(70, 0);
    line(0, 0, 50, 0);
    pop();
    pop();

  }