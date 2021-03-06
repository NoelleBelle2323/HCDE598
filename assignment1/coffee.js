function setup() {
  //create a pink canvas
  createCanvas(850, 600);
  background('pink');
 

  //shadow
  c = color('rgba(26, 26, 26, 0.5)');
  fill(c);
  strokeWeight(0);
  ellipse(400, 450, 400, 50);

  //cup
  strokeWeight(0);
  fill('#fff1d0');
  beginShape();
  vertex(250, 250);
  bezierVertex(290, 500, 510, 500, 550, 250);
  endShape();

  //cup rim
  noFill();
  stroke('#fff1d0');
  strokeWeight(8);
  ellipse(400, 250, 280, 60);

  //coffee
  fill('#6F4E37');
  ellipse(400, 250, 300, 70);

  //cup handle
  strokeWeight(7);
  noFill();
  beginShape();
  vertex(545, 290);
  bezierVertex(650, 280, 550, 400, 512, 370);
  endShape();

  //steam
  stroke('#F5F5F5');
  strokeWeight(6);
  bezier(390, 180, 420, 160, 370, 150, 400, 120);


  stroke('#F5F5F5');
  strokeWeight(6);
  bezier(340, 190, 370, 170, 320, 160, 350, 130);


  stroke('#F5F5F5');
  strokeWeight(6);
  bezier(440, 190, 470, 170, 420, 160, 450, 130);


  //spoon in the cup
  fill('#a9a9a9');
  stroke('#a9a9a9');
  strokeWeight(1);
  
  beginShape();
  curveVertex(497, 238);
  curveVertex(497, 238);
  curveVertex(583, 109);
  curveVertex(610, 120);
  curveVertex(517, 238);
  curveVertex(517, 238);
  endShape();

}