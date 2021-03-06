function setup() {
  createCanvas(600, 600);
}

function grid() {
  stroke('yellow');
  for (var i=0; i < 60; i++) {
    line(0,i*10,600,i*10);
  }
}

function cactus() {
  translate(30,40);
  stroke('black');
  fill(141,198,63);// Green
  
  ////// Nopales START ///////
  push();
  translate(25,255);
  rotate(-PI/3);
  ellipse(285, 50, 60, 45);
  pop();
  
  push();
  translate(230,-110);
  rotate(PI/3.2);
  ellipse(150, 130, 78, 60);
  pop();
  
  push();
  translate(-10,200);
  rotate(-PI/5);
  ellipse(285, 110, 45, 35);
  pop();
  
  push();
  translate(125,-110);
  rotate(PI/5);
  ellipse(240, 140, 73, 80);
  pop();
  
	push();
  translate(210,-50);
  rotate(PI/3.2);
  ellipse(100, 180, 120, 75);
  pop();

  // Main (head)
  ellipse(187, 215, 121, 123);
  
  ////// Nopales END ///////
  
  // Pot
  push();
  fill(196,154,108);
  quad(150,285,225,285,215,340,160,340);
  fill(169,124,80);
  rect(137,270,100,20, 7);
  pop();
  
  //// Face ////
  push();
  // Eyes
  fill(0,0,0);
  ellipse(168, 200, 8, 8);
  noFill();
  arc(208, 203, 10, 10, PI+0.5, PI+2.8);
  
  // Mouth
  arc(189, 218, 15, 10, 0.4, PI-0.4);
  
  // Cheeks
  fill(238,42,123);
  noStroke();
  ellipse(165, 210, 5, 5);
  ellipse(212, 210, 5, 5);
  pop();

}

// Tunas
function tuna() {
  stroke(236,0,140);
  fill(238,42,123);
  ellipse(82, 80, 15, 15);
  ellipse(72, 88, 15, 15);
  ellipse(70, 75, 15, 15);
}

// Spines
function spine() {
  stroke(0,104,56);
	line(0, -62, 10, -72);
  line(0, -62, -10, -72);
}

function draw() {
  scale(1.4,1.4);
  background(140,207,234);
  grid();
  
  cactus();
  
  // Spines
  push();
  translate(187,215);
  rotate(-0.1);
  spine();
  rotate(0.5);
  spine();
  rotate(0.4);
  spine();
  rotate(0.5);
  spine();
  rotate(-2);
  spine();
  rotate(-0.7);
  spine();
  pop();
  
  // Tunas
  tuna();
  rotate(HALF_PI-0.5);
  translate(37,-278);
  tuna();
  rotate(HALF_PI+1.05);
  translate(-221,-232);
  tuna();
}