//gold egg movement variables
var egg1x = 0;
var egg1y = 0;

//pink egg movement variables
var egg2x = 0;
var egg2y = 0;

//blue egg movement variables
var egg3x = 0;
var egg3y = 0;

//gray egg movement variables
var egg4x = 0;
var egg4y = 0;


function setup() {
  createCanvas(600, 600);
}

//gold egg moves diagonally 
function draw() {

  if (egg1x <= 140) {

    background(240, 245, 225);
    fill("white");
    noStroke();
    ellipse(200, 300, 60, 70);
    ellipse(270, 300, 60, 70);
    ellipse(340, 300, 60, 70);
    ellipse(410, 300, 60, 70);

    fill("gold")
    noStroke();
    ellipse(60 + egg1x, 60 + egg1y, 60, 70);
    ellipseMode(CORNER);
    fill("white");
    ellipse(37 + egg1x, 40 + egg1y, 20, 20);
    fill("black")
    ellipse(38 + egg1x, 41 + egg1y, 15, 15);
    fill("white")
    ellipse(38 + egg1x, 42 + egg1y, 10, 10);
    ellipse(62 + egg1x, 40 + egg1y, 20, 20);
    fill("black")
    ellipse(63 + egg1x, 41 + egg1y, 15, 15);
    fill("white")
    ellipse(63 + egg1x, 42 + egg1y, 10, 10);
    strokeWeight(2);
    stroke(1);
    line(55 + egg1x, 80 + egg1y, 65 + egg1x, 80 + egg1y);
    egg1x = egg1x + 1;
    egg1y = egg1y + 12 / 7;
  }

  //pink egg moves horizontally first and then vertically 
  if (egg2x <= 130) {
    ellipseMode(CENTER);
    fill("pink")
    noStroke();
    ellipse(540 - egg2x, 60, 60, 70);
    fill("white");
    ellipse(527 - egg2x, 50, 20, 20);
    fill("black")
    ellipse(528 - egg2x, 52, 15, 15);
    fill("white")
    ellipse(528 - egg2x, 55, 10, 10);
    ellipse(552 - egg2x, 50, 20, 20);
    fill("black")
    ellipse(553 - egg2x, 52, 15, 15);
    fill("white")
    ellipse(553 - egg2x, 55, 10, 10);
    noFill();
    strokeWeight(2);
    stroke(1);
    arc(540 - egg2x, 72, 20, 20, 0, PI);
    egg2x = egg2x + 370 / 142;
  }
  if (egg2x > 130 && egg2y <= 240) {
    ellipseMode(CENTER);
    fill("pink")
    noStroke();
    ellipse(540 - egg2x, 60 + egg2y, 60, 70);
    fill("white");
    ellipse(527 - egg2x, 50 + egg2y, 20, 20);
    fill("black")
    ellipse(528 - egg2x, 52 + egg2y, 15, 15);
    fill("white")
    ellipse(528 - egg2x, 55 + egg2y, 10, 10);
    ellipse(552 - egg2x, 50 + egg2y, 20, 20);
    fill("black")
    ellipse(553 - egg2x, 52 + egg2y, 15, 15);
    fill("white")
    ellipse(553 - egg2x, 55 + egg2y, 10, 10);
    noFill();
    strokeWeight(2);
    stroke(1);
    arc(540 - egg2x, 72 + egg2y, 20, 20, 0, PI);
    egg2y = egg2y + 370 / 142
  }

  //gray egg moves vertically first and then horizontally
  if (egg4y <= 240) {
    ellipseMode(CENTER);
    fill(201, 201, 201)
    noStroke();
    ellipse(540, 540 - egg4y, 60, 70);
    //ellipseMode(CORNER);
    fill("white");
    ellipse(527, 530 - egg4y, 20, 20);
    fill("black")
    ellipse(528, 530 - egg4y, 15, 15);
    fill("white")
    ellipse(534, 530 - egg4y, 5, 5);
    ellipse(552, 530 - egg4y, 20, 20);
    fill("black")
    ellipse(553, 530 - egg4y, 15, 15);
    fill("white")
    ellipse(558, 530 - egg4y, 5, 5);
    noFill();
    strokeWeight(2);
    stroke(1);
    line(530, 560 - egg4y, 540, 550 - egg4y);
    line(540, 550 - egg4y, 550, 560 - egg4y);
    egg4y = egg4y + 440 / 141;
  }
  if (egg4x <= 200 && egg4y > 240) {
    ellipseMode(CENTER);
    fill(201, 201, 201)
    noStroke();
    ellipse(540 - egg4x, 540 - egg4y, 60, 70);
    //ellipseMode(CORNER);
    fill("white");
    ellipse(527 - egg4x, 530 - egg4y, 20, 20);
    fill("black")
    ellipse(528 - egg4x, 530 - egg4y, 15, 15);
    fill("white")
    ellipse(534 - egg4x, 530 - egg4y, 5, 5);
    ellipse(552 - egg4x, 530 - egg4y, 20, 20);
    fill("black")
    ellipse(553 - egg4x, 530 - egg4y, 15, 15);
    fill("white")
    ellipse(558 - egg4x, 530 - egg4y, 5, 5);
    noFill();
    strokeWeight(2);
    stroke(1);
    line(530 - egg4x, 560 - egg4y, 540 - egg4x, 550 - egg4y);
    line(540 - egg4x, 550 - egg4y, 550 - egg4x, 560 - egg4y);
    egg4x = egg4x + 440 / 141

  }


  //blue egg moves diagonally 
  if (egg3x <= 210) {

    ellipseMode(CENTER);
    fill(200, 230, 250)
    noStroke();
    ellipse(60 + egg3x, 540 - egg3y, 60, 70);
    fill("white");
    fill("black")
    stroke(1);
    ellipse(50 + egg3x, 530 - egg3y, 5, 5);
    ellipse(75 + egg3x, 530 - egg3y, 5, 5);
    line(65 + egg3x, 527.5 - egg3y, 80 + egg3x, 527.5 - egg3y);
    line(40 + egg3x, 527.5 - egg3y, 55 + egg3x, 527.5 - egg3y);
    noFill();
    strokeWeight(2);
    stroke(1);
    arc(60 + egg3x, 550 - egg3y, 20, 20, 0, PI);
    egg3x = egg3x + 3 / 2;
    egg3y = egg3y + 12 / 7;

    //gray egg was not careful while walking around, and broke its shell...
    if (egg3x > 210) {
      ellipseMode(CENTER);
      fill(201, 201, 201)
      noStroke();
      ellipse(340, 300, 60, 70);
      stroke("black")
      strokeWeight(0.5)
      line(530 - egg4x, 517 - egg4y, 540 - egg4x, 507 - egg4y);
      line(530 - egg4x, 517 - egg4y, 545 - egg4x, 522 - egg4y);
      line(545 - egg4x, 522 - egg4y, 538 - egg4x, 542 - egg4y);
      line(538 - egg4x, 542 - egg4y, 558 - egg4x, 552 - egg4y);
      line(558 - egg4x, 552 - egg4y, 563 - egg4x, 564 - egg4y);
      strokeWeight(2)
      line(320, 285, 335, 295)
      line(335, 285, 320, 295)
      line(345, 285, 360, 295)
      line(360, 285, 345, 295)
      line(330, 310, 355, 310)
      arc(348, 312, 10, 18, 0, PI);
      line(348, 310, 348, 316)

    }

  }

}