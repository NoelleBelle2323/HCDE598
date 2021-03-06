function setup() {
  createCanvas(500, 500);
  background(255, 200, 200);
  strokeWeight(1);
  strokeCap(ROUND)
  //ears//
  fill(250, 227, 198)
  ellipse(170, 160, 20, 35);
  ellipse(330, 160, 20, 35);
  //neck//
  rect(225, 250, 45, 45);
  //face//
  rect(175, 80, 150, 175, 50, 50, 65, 65)
  //hair//
  fill(136, 89, 43)
  noStroke()
  rect(170, 120, 20, 70, 75, 75, 75, 75)
  rect(310, 120, 20, 70, 75, 75, 75, 75)
  noFill()
  stroke(136, 89, 43)
  strokeWeight(10)
  arc(245, 110, 50, 50, .7 * PI, 1.5 * PI);
  arc(255, 110, 50, 50, 1.4 * PI, .3 * PI);
  strokeWeight(15);
  arc(230, 110, 50, 50, .7 * PI, 1.5 * PI);
  arc(215, 110, 50, 50, .7 * PI, 1.5 * PI);
  arc(200, 110, 50, 50, .7 * PI, 1.5 * PI);
  strokeWeight(15);
  arc(270, 110, 50, 50, 1.4 * PI, .3 * PI);
  arc(285, 110, 50, 50, 1.4 * PI, .3 * PI);
  arc(300, 110, 50, 50, 1.4 * PI, .3 * PI);
  //glasses//
  stroke("gold");
  strokeWeight(5);
  fill(250, 227, 198);
  rect(190, 135, 50, 40, 10, 10, 20, 20);
  rect(260, 135, 50, 40, 10, 10, 20, 20);
  line(240, 140, 260, 140);
  line(245, 150, 255, 150);
  line(170, 140, 190, 140);
  line(310, 140, 330, 140);
  //eyes//
  stroke("black");
  strokeWeight(1);
  fill("white");
  ellipse(215, 155, 20, 15);
  ellipse(280, 155, 20, 15);
  fill(77, 51, 25);
  ellipse(215, 155, 7, 12);
  ellipse(280, 155, 7, 12);
  fill("black");
  ellipse(215, 155, 3, 3);
  ellipse(280, 155, 3, 3);
  //nose//
  fill(250, 227, 198)
  arc(240, 180, 5, 10, 0, PI, OPEN);
  arc(250, 180, 15, 15, 0, PI, OPEN);
  arc(260, 180, 5, 10, 0, PI, OPEN);
  //mouth//
  arc(250, 220, 30, 10, PI, 0, PIE);
  line(237, 218, 262, 218);
  //chin//
  arc(250, 240, 30, 5, PI, 0, OPEN);
  //cheeks//
  line(210, 180, 200, 190);
  line(290, 180, 300, 190);
  //body//
  fill("#61401f")
  rect(160, 270, 180, 250, 10, 10, 10, 10);
  //arms//
  rect(135, 270, 60, 250, 30, 30, 30, 30);
  rect(305, 270, 60, 250, 30, 30, 30, 30);
  //shirt//
  fill("#ffe066")
  rect(200, 270, 100, 250);
  //tie//
  fill("#8c8c8c")
  rect(232, 300, 30, 150, 30, 30, 5, 5);
  rect(232, 270, 30, 35, 30, 30, 30, 30);
  //collar//
  fill("#ffe066");
  triangle(190, 270, 210, 310, 250, 270)
  triangle(310, 270, 280, 310, 250, 270)
  //desk//
  fill(217, 217, 217)
  rect(10, 450, 480, 100)






}

function draw() {;
}