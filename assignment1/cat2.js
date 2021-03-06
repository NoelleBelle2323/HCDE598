function setup() {
  createCanvas(600, 800);




}

function draw() {
  background(255, 0, 127);

  strokeWeight(50);
  stroke(255, 128, 0, 200)
  line(50, 0, 50, 800); // grid
  line(100, 0, 100, 800);
  stroke(255, 255, 0, 200)
  line(150, 0, 150, 800);
  line(0, 50, 600, 50);
  stroke(0, 204, 204, 180)
  line(0, 100, 600, 100);
  line(0, 150, 600, 150);

  strokeWeight(0)

  fill(96, 96, 96);
  quad(200, 150, 400, 150, 500, 600, 100, 600); //body underlay


  ellipse(150, 540, 120, 220); //forelegs
  ellipse(450, 540, 120, 220);
  quad(400, 550, 455, 650, 350, 680, 300, 600); //right
  quad(301, 600, 351, 680, 280, 650, 230, 500);

  quad(122, 638, 200, 600, 300, 600, 220, 700); //left
  ellipse(266, 680, 100, 100);
  strokeWeight(4);
  stroke(0);
  line(223, 705, 122, 638); //define left foreleg outside
  arc(150, 540, 120, 220, radians(106), radians(260));

  noFill();
  stroke(64, 64, 64);
  strokeWeight(60);
  beginShape(); //tail
  vertex(300, 150);
  bezierVertex(280, 170, 400, 10, 110, 70);


  endShape();

  fill(96, 96, 96);
  stroke(0);
  strokeWeight(4);
  beginShape(); //body outline
  vertex(322, 665);
  bezierVertex(350, 700, 400, 665, 476, 642);
  bezierVertex(495, 600, 550, 540, 470, 435);
  bezierVertex(490, 300, 470, 270, 460, 240);
  bezierVertex(510, 150, 420, 120, 380, 130);
  bezierVertex(320, 110, 270, 110, 210, 130);
  bezierVertex(160, 120, 90, 170, 130, 240);
  bezierVertex(110, 300, 110, 350, 130, 437);

  endShape();






  strokeWeight(0);
  fill(96, 96, 96);
  arc(300, 470, 250, 400, 320, 210); //neck and head

  ellipse(300, 400, 180, 100);

  fill(255, 255, 255); //face
  rect(162, 381, 260, 180);
  fill(64, 64, 64);
  rect(297, 381, 130, 180);

  strokeJoin(ROUND);
  triangle(210, 260, 242, 400, 159, 400); //left ear left
  triangle(210, 260, 275, 380, 240, 401); //left ear right
  bezier(210, 260, 180, 300, 160, 380, 160, 400);

  fill(255, 255, 255);
  triangle(370, 260, 360, 400, 310, 380); //right ear left

  triangle(370, 260, 430, 400, 359, 400); //right ear right
  bezier(370, 260, 410, 300, 430, 380, 429, 400);
  fill(160, 160, 160)

  bezier(370, 260, 390, 300, 390, 380, 310, 380); //r ear color


  arc(297, 540, 90, 90, radians(300), radians(240));

  fill(255, 255, 255);
  strokeWeight(0)
  bezier(162, 400, 140, 460, 140, 500, 162, 560); //face L side

  fill(64, 64, 64);
  bezier(425, 400, 450, 460, 450, 500, 425, 560); //face R side

  fill(255, 255, 255);
  strokeWeight(4)
  bezier(200, 450, 215, 420, 245, 420, 260, 450); //left eye top
  bezier(200, 450, 215, 480, 245, 480, 260, 450); //left eye bottom
  bezier(330, 450, 345, 420, 375, 420, 390, 450); //right eye top
  bezier(330, 450, 345, 480, 375, 480, 390, 450); //right eye bottom
  noFill();
  bezier(330, 450, 320, 480, 320, 480, 315, 515); //right nose
  bezier(260, 450, 270, 480, 270, 480, 280, 515); //left nose
  line(297, 520, 297, 570);
  arc(297, 530, 80, 80, radians(60), radians(120));

  bezier(410, 600, 350, 605, 330, 630, 322, 665); // define arms right
  arc(266, 680, 100, 100, radians(270), radians(150)); //define left paw
  bezier(285, 660, 300, 670, 310, 680, 312, 694);
  bezier(280, 680, 300, 690, 310, 715, 305, 710);
  bezier(275, 700, 300, 710, 285, 730, 298, 718);
  line(264, 631, 195, 589); //define left foreleg inside

  strokeJoin(ROUND);
  fill(0)
  triangle(280, 515, 315, 515, 297, 540); //nose
  line(100, 500, 270, 520); // left whiskers T,B,M
  line(100, 570, 270, 550);
  line(100, 530, 270, 535);
  line(490, 500, 320, 520, ); // r whiskers T,B,M
  line(490, 570, 320, 550, );
  line(490, 530, 320, 535, );


  ellipse(223, 450, 38) //left eyeball
  ellipse(353, 450, 38) //right eyeball








}