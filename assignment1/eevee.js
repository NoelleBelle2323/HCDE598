function setup() {
  createCanvas(600, 600);
  background(240);

  //background lines
  strokeWeight(50);
  stroke(220);
  line(0, 25, 600, 25);
  line(0, 125, 600, 125);
  line(0, 225, 600, 225);
  line(0, 325, 600, 325);
  line(0, 425, 600, 425);
  line(0, 525, 600, 525);
  noStroke();


  fill('black');
  triangle(100, 100, 500, 100, 300, 500);

  //triangle lines
  strokeWeight(10);

  stroke('green');
  line(100, 100, 500, 100);

  stroke('purple');
  line(500, 100, 300, 500);

  stroke('orange');
  line(100, 100, 300, 500);

  noStroke();

  //jolteon circle
  fill('#FFD91C');
  ellipse(100, 100, 75);

  //vaporeon circle
  fill('#33BBFF');
  ellipse(500, 100, 75);

  //flareon circle
  fill('#F0500C');
  ellipse(300, 500, 75);

  //eevee
  fill('#FFC46B') //upper part of body
  rect(265, 260, 70, 70, 20);
  fill('#DB8B3B') //lower part of body
  rect(265, 305, 70, 25);
  fill('#FFC46B'); //giving the mane some fluff
  triangle(280, 305, 290, 305, 285, 310);
  triangle(295, 305, 305, 305, 300, 310);
  triangle(310, 305, 320, 305, 315, 310);

  fill('#DB8B3B'); //front feet
  rect(277, 315, 20, 20, 5);
  rect(303, 315, 20, 20, 5);
  fill('#8C5926'); //bottom of feet
  rect(277, 330, 20, 5, 5);
  rect(303, 330, 20, 5, 5);

  fill('#DB8B3B'); //back feet
  ellipse(270, 315, 20, 36);
  ellipse(330, 315, 20, 36);
  fill('#8C5926'); //foot pads
  ellipse(270, 315, 10, 18);
  ellipse(330, 315, 10, 18);

  fill('#DB8B3B'); //head
  ellipse(300, 250, 75);

  ellipse(265, 210, 25, 60); //ears
  ellipse(335, 210, 25, 60);

  fill('#8C5926'); //inner ears
  ellipse(265, 210, 13, 30);
  ellipse(335, 210, 13, 30);

  fill('black'); //eyes and nose
  rect(275, 250, 12, 12, 5);
  rect(315, 250, 12, 12, 5);
  rect(297, 260, 6, 6);

  fill('white'); //pupils
  rect(275, 250, 6, 6, 5)
  rect(315, 250, 6, 6, 5)

  //detailing
  fill('black') //space in-between the legs
  rect(297, 320, 6, 20)


}

function draw() {

}