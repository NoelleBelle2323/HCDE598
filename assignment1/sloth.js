function setup() {
  createCanvas(800, 700);

  background(255, 255, 255);

  //Body
  noStroke();
  fill(210, 166, 121);
  ellipse(465, 440, 200, 96);

  //Neck
  noFill();
  stroke(210, 166, 121);
  strokeWeight(50);
  bezier(400, 430, 450, 490, 550, 460, 615, 430);

  //Face
  ellipseMode(RADIUS); // Set ellipseMode to RADIUS
  fill(210, 166, 121); // Set fill to white
  noStroke();
  ellipse(600, 400, 55, 55); // Draw white ellipse using RADIUS mode

  ellipseMode(CENTER); // Set ellipseMode to CENTER
  fill(236, 217, 198); // Set fill to gray
  noStroke()
  ellipse(590, 400, 80, 75); // Draw gray ellipse using CENTER mode

  //Mouth
  noFill();
  stroke(0);
  strokeWeight(3);
  bezier(583, 420, 587, 425, 590, 425, 593, 420);

  //Eyes left
  noFill();
  stroke(210, 166, 121);
  strokeWeight(22);
  line(558, 410, 570, 400);

  //Eye Center Left
  fill(0, 0, 0);
  noStroke();
  ellipse(569, 400, 15, 15);

  fill(255, 255, 255);
  noStroke();
  ellipse(568, 400, 3, 3)

  //Eyes right
  noFill();
  stroke(210, 166, 121);
  strokeWeight(22);
  line(607, 400, 643, 410);

  //Eye Center Right
  fill(0, 0, 0);
  noStroke();
  ellipse(607, 400, 15, 15);

  fill(255, 255, 255);
  noStroke();
  ellipse(606, 399, 3, 3);

  //Nose
  fill(0, 0, 0);
  noStroke();
  triangle(578, 405, 588, 415, 597, 405);

  //Body - Arm 1 - Back
  fill(198, 140, 83);
  noStroke();
  triangle(430, 360, 485, 200, 555, 430);
  
  //Body - Arm 2 - Back
  fill(198, 140, 83);
  noStroke();
  triangle(335, 370, 390, 235, 400, 440);

  //The Branch
  noFill();
  stroke(102, 51, 0);
  strokeWeight(50);
  bezier(0, 300, 300, 190, 600, 250, 800, 200);

  //The Branch 1
  noFill();
  stroke(102, 51, 0);
  strokeWeight(20);
  bezier(100, 260, 160, 260, 260, 300, 350, 130);

  //The Branch 2
  noFill();
  stroke(102, 51, 0);
  strokeWeight(20);
  bezier(550, 220, 600, 180, 780, 300, 800, 250);
  
  //Body - Belly
  noStroke();
  fill(236, 217, 198);
  ellipse(460, 410, 100, 30);

  //Body - Arm 1
  fill(210, 166, 121);
  noStroke();
  triangle(430, 360, 445, 200, 557, 440);

  //Body - Arm 2
  fill(210, 166, 121);
  noStroke();
  triangle(335, 370, 420, 235, 400, 440);
  
  //Nails 1
  stroke(0, 0, 0);
  strokeWeight(5);
  line(440, 200, 440, 220);
  
  stroke(0, 0, 0);
  strokeWeight(5);
  line(448, 195, 448, 220);
  
  stroke(0, 0, 0);
  strokeWeight(5);
  line(456, 200, 456, 220);
  
  //Nails 2
  stroke(0, 0, 0);
  strokeWeight(5);
  line(420, 223, 410, 243);
  
  stroke(0, 0, 0);
  strokeWeight(5);
  line(428, 220, 418, 240);
  
  stroke(0, 0, 0);
  strokeWeight(5);
  line(434, 224, 424, 244);
  
  //Leaves
  fill(64, 128, 0);
  noStroke();
  quad(300, 100, 325, 100, 335, 143, 305, 136);
  
  fill(32, 96, 32);
  noStroke();
  quad(360, 90, 350, 105, 325, 143, 380, 136);
  
  fill(121, 210, 121);
  noStroke();
  quad(340, 65, 335, 90, 330, 130, 350, 100);
  
  //Text
  fill(204, 153, 0);
  textSize(32);
  textFont('Helvetica');
	text('"HE..L..LO...!"', 100, 600);



  // Grayscale integer value
  strokeWeight(50);
  stroke(50);
  noFill();
  rect(0, 0, 800, 700);




}

function draw() {

}