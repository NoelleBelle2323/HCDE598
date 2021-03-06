function setup() {
  createCanvas(600, 600);
  background('#c6e2ff');
}

function draw() {

  //****************************************
  // Tulips
  //****************************************

  //tulip bases L to R
  fill(255, 102, 102, 255);
  noStroke();
  arc(100, 400, 80, 80, 0, PI + QUARTER_PI);
  arc(185, 475, 50, 50, 0, PI + QUARTER_PI);
  arc(225, 350, 75, 75, 0, PI + QUARTER_PI);
  arc(300, 450, 80, 80, 0, PI + QUARTER_PI);
  arc(350, 350, 80, 80, 0, PI + QUARTER_PI);
  arc(400, 450, 50, 50, 0, PI + QUARTER_PI);
  arc(500, 400, 80, 80, 0, PI + QUARTER_PI);

  //tulip centers L to R
  fill(255, 153, 153, 155)
  noStroke();
  arc(102, 395, 70, 70, 0, PI + QUARTER_PI);
  arc(187, 473, 45, 45, 0, PI + QUARTER_PI);
  arc(227, 348, 65, 65, 0, PI + QUARTER_PI);
  arc(302, 448, 70, 70, 0, PI + QUARTER_PI);
  arc(351, 348, 70, 70, 0, PI + QUARTER_PI);
  arc(401, 448, 45, 45, 0, PI + QUARTER_PI);
  arc(502, 397, 70, 70, 0, PI + QUARTER_PI);

  //****************************************
  // Greenery
  //****************************************

  //flower stems L to R
  stroke('#86b300');
  strokeWeight(4);
  line(100, 440, 100, 600);
  line(185, 500, 185, 600);
  line(225, 388, 225, 600);
  line(300, 490, 300, 600);
  line(350, 390, 350, 600);
  line(400, 475, 400, 600);
  line(500, 440, 500, 600);

  //ground
  fill('#86b300');
  rect(0, 570, 600, 30);

  //leaves L to R
  fill('#86b300');
  ellipse(100, 500, 40, 10);
  ellipse(185, 525, 25, 5);
  ellipse(225, 420, 30, 8);
  ellipse(300, 525, 40, 10);
  ellipse(350, 420, 30, 8);
  ellipse(400, 500, 25, 5);
  ellipse(500, 475, 40, 10);

  //****************************************
  // Sky
  //****************************************

  //sun
  fill('#FFC300');
  stroke('#FFC300');
  strokeWeight(7);
  ellipse(500, 100, 100, 100);
  line(430, 100, 570, 100);
  line(550, 50, 450, 150);
  line(500, 30, 500, 170);
  line(450, 50, 550, 150);

  //cloud
  fill('#F8F9F9');
  noStroke();
  ellipse(225, 50, 200, 40);

  fill('#F2F3F4');
  noStroke();
  ellipse(150, 65, 200, 40);

  fill('#F8F9F9');
  noStroke();
  ellipse(250, 75, 250, 40);

  fill('#F2F3F4');
  noStroke();
  ellipse(150, 100, 300, 45);

  fill('#F8F9F9');
  noStroke();
  ellipse(250, 125, 450, 40);

  //****************************************
  // Little bird
  //****************************************

  //body
  fill('#a6a6a6');
  ellipse(80, 208, 30, 20);

  //head
  fill('#333333');
  ellipse(93, 198, 15, 15);

  //beak
  fill('#ff9900');
  triangle(108, 194, 99, 194, 101, 198);

  //tail
  fill('#a6a6a6');
  quad(66, 204, 37, 197, 40, 206, 69, 208);

  //eye
  fill('#ffffff');
  ellipse(95, 195, 2, 2);

  //wing
  fill('#333333');
  bezier(80, 208, 90, 175, 50, 210, 50, 190);

  //foot - created but commented out because I didn't like the look :)
  //stroke('#ff9900');
  //fill('#ff9900');
  //strokeWeight(1);
  //curve(100, 220, 88, 215, 80, 220, 87, 225);

}