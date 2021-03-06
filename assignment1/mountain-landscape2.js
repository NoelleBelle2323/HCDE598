//PNW-ben chickadel 2018
function setup() {
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

  //cloud 
  //no sure I like this but left it in for reference
  /*
  fill(200, 140);
 	ellipse(200, 90, 200, 60);
  ellipse(130, 80, 150, 40);
*/
  //tentacle
  /* still working on this part.
  seems like it could be easier and it would
  be fun to make the tentacle move.
  I was trying to experiment with bezier curves
  and verticies.
  beginShape();
  fill(255, 0, 255);
  stroke(230, 0, 230);
  strokeWeight(3);
  vertex(70, 350);
  bezierVertex(40, 300, 190, 160, 170, 130);
  bezierVertex(215, 170, 70, 270, 120, 355);
  bezierVertex(100, 363, 85, 358, 70, 350);
  endShape(CLOSE);

  //suckers
  fill(240, 100, 240);
  stroke(100, 0, 100);
  strokeWeight(5)
  ellipse(96, 295, 17, 20);
  strokeWeight(4.5)
  ellipse(109, 265, 15, 18);
  strokeWeight(4);
  ellipse(123, 240, 11, 14);
  strokeWeight(3.5);
  ellipse(136, 220, 8, 10);
  strokeWeight(2.5);
  ellipse(144, 205, 6, 7);
  strokeWeight(2);
  ellipse(150, 192, 5, 7);
  strokeWeight(1.5);
  ellipse(156, 182, 3, 5);
  strokeWeight(1);
  ellipse(160, 175, 3, 5);
  ellipse(160, 175, 3, 4);
	ellipse(163, 168, 3, 4);
  ellipse(166, 162, 3, 4);
 */


}