function setup() {
  createCanvas(500, 500);
  background(130, 82, 1);
}

function draw()

{
  //coffeelove
  //hcde598C
  //joshuaholland
  
  //coffeemughandle
  stroke(245, 245, 220);
  strokeWeight(10);
  fill(245, 245, 220);
  rect(400, 240, 150, 55, 15);

  //coffeemugrim
  stroke(245, 245, 220);
  strokeWeight(10);
  strokeWeight(10);
  fill('white');
  ellipse(250, 250, 350, 350);

  //coffee 
  fill(111, 55, 45);
  ellipse(250, 250, 300, 300);

  //coffeefoam
  fill(244, 241, 226);
  noStroke();

  //hearthaltleft
  beginShape();
  vertex(250, 320);
  vertex(250, 250);
  vertex(180, 250);
  endShape(CLOSE);

  //hearthalfright
  beginShape();
  vertex(250, 320);
  vertex(250, 250);
  vertex(320, 250);
  endShape(CLOSE);

  //heartcaps
  ellipse(207, 210, 95, 95);
  ellipse(293, 210, 95, 95);
  ellipse(250, 240, 50, 50);

  //coffeespoon
  fill('silver');
  noStroke();
  rect(150, 445, 300, 20);
  ellipse(130, 455, 120, 75);
}