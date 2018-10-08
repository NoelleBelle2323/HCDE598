function setup() {
  createCanvas(700, 500);
  //color picker website: https://htmlcolorcodes.com/color-picker/
  
  //sky
  background(217, 242, 249);
  fill(126, 211, 243);
  noStroke();
  rect(0, 0, 700, 250);
  fill(169, 223, 243);
  rect(0, 250, 700, 155);
  
  //left line of bridge stand
  stroke(214, 43, 12);
  strokeWeight(20);
  strokeCap(SQUARE);
  line(150, 57, 150, 500); 
 
  //right line of bridge stand
  line(240, 57, 240, 500); 
  
  //left triangle on top of bridge stand
  fill(214, 43, 12);
  strokeWeight(4);
  triangle(142, 35, 152, 55, 142, 55); 
  
  //right triangle on top of bridge stand
  triangle(248, 35, 248, 55, 238, 55); 
  
  //center lines of bridge stand from top to bottom
  strokeWeight(28);
  line(150, 70, 240, 70);
  line(150, 160, 240, 160);
  line(150, 250, 240, 250);
  line(150, 360, 240, 360);

  //long horizontal bridge base
  strokeWeight(36);
  line(0, 470, 700, 440);
  
  //diagonal line from top left of bridge going towards right
  strokeWeight(6);
  line(141, 38, 700, 380);

  //diagonal line from top right of bridge going towards right
  line(247, 38, 700, 320); 

  //vertical lines right of bridge stand
  strokeWeight(3);
  line(280, 60, 280, 450); 
  line(320, 85, 320, 450); 
  line(360, 110, 360, 450); 
  line(400, 135, 400, 450); 
  line(440, 160, 440, 450); 
  line(480, 185, 480, 450); 
  line(520, 210, 520, 450); 
  line(560, 235, 560, 450);
  line(600, 260, 600, 450);
  line(640, 285, 640, 450);
  line(680, 310, 680, 450);
  
  //diagonal line from top left of bridge going towards left
  strokeWeight(6);
  line(141, 38, 0, 128);
  
  //diagonal line from top right of bridge going towards left
  line(247, 38, 0, 193); 
  
  //vertical lines left of bridge stand 
  strokeWeight(3);
  line(110, 60, 110, 450); 
  line(70, 85, 70, 450); 
  line(30, 110, 30, 450); 
  
  //sun
  fill(255, 253, 147);
  stroke(255, 235, 86);
  strokeWeight(6);
  ellipse(420, 60, 70, 70);
  
  //sun eyes
  stroke(1);
  beginShape(POINTS);
  vertex(410, 52);
  vertex(429, 52);
  endShape();
  
  //sun mouth
  strokeWeight(3);
  arc(419, 67, 20, 18, TWO_PI, PI);
  
  //sun rays
  fill(254, 124, 16);
  stroke(255, 235, 86);
  strokeWeight(4);
  beginShape(TRIANGLES); 
  vertex(411, 25);
  vertex(420, 8);
  vertex(433, 28);
  vertex(433, 28)
  vertex(456, 18);
  vertex(448, 34);
  vertex(448, 34);
  vertex(486, 31);
  vertex(457, 52);
  vertex(457, 52);
  vertex(480, 63);
  vertex(455, 65);
  vertex(455, 65);
  vertex(469, 88);
  vertex(447, 88);
  vertex(447, 88);
  vertex(446, 111);
  vertex(428, 95);
  vertex(428, 95);
  vertex(420, 119);
  vertex(405, 94);
  vertex(405, 94);
  vertex(384, 101);
  vertex(390, 82);
  vertex(390, 82);
  vertex(357, 69);
  vertex(381, 55);
  vertex(381, 55);
  vertex(371, 41);
  vertex(387, 40);
  vertex(387, 40);
  vertex(386, 12);
  vertex(411, 25);
  endShape();

  //left cloud
  fill(255);
  noStroke();
  ellipse(515, 110, 60, 56);
  ellipse(540, 110, 80, 80);
  ellipse (580, 110, 60, 63);
  
  //right cloud
  ellipse(600, 40, 76, 55);
  ellipse(628, 41, 67, 75);
  ellipse(640, 42, 80, 58);  
}

function draw() {
}