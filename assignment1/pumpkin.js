function setup() {
  createCanvas(750, 400);
  var night = color(5, 54, 71); // color of night
  background(night);

  // create ground
  fill(40);
  stroke(40);
  strokeWeight(1);
  rect(0, 250, 800, 550);

  // create moon outline
  var moon1 = color(247, 244, 210, 60); // RGB & transparency value for the moon outline color 
  fill(moon1);
  noStroke(); // gives a moon glow appearance
  ellipse(75, 75, 100, 100);

  // create moon
  var moon2 = color(247, 244, 210); // RGB value for the moon color
  fill(moon2);
  stroke(moon2);
  ellipse(75, 75, 85, 85);
  
  // pumpkin outline
  stroke('black');
  strokeWeight(1);

  point(300, 100); // point 1
  point(300, 300); // point 2
  point(100, 200); // point 3
  point(500, 200); // point 4
  point(200, 70); // point 5
  point(200, 330); // point 6
  point(400, 70); // point 7
  point(400, 330); // point 8

  // pumpkin shape, curveVertex() example taken from Reference 
  var orange = color(232, 114, 4); // RGB value of orange shade
  fill(orange);
  strokeWeight(3); // change line weight to cover the points
  
  beginShape();
  curveVertex(300, 100); // start of curve
  curveVertex(300, 100); // curve from point 1 to 7
  curveVertex(400, 70); // curve from point 7 to 4
  curveVertex(500, 200); // curve from point 4 to 8
  curveVertex(400, 330); // curve from point 8 to 2 
  curveVertex(300, 300); // curve from point 2 to 6
  curveVertex(200, 330); // curve from point 6 to 3
  curveVertex(100, 200); // curve from point 3 to 5
  curveVertex(200, 70); // curve from point 5 to 1
  curveVertex(300, 100); // end of curve
  endShape(CLOSE);

  // draw curves for pumpkin shading
  strokeWeight(1); // change line weight
  noFill();
  
  point(150, 200); // create point 9
  point(450, 200); // create point 10

  // curve 1
  beginShape();
  curveVertex(200, 330); // start curve at point 6
  curveVertex(200, 330); // from point 6 to 9
  curveVertex(150, 200); // from point 9 to 5
  curveVertex(200, 70);
  curveVertex(200, 70); // end curve
  endShape(); // do not want to close the curve

  // curve 2
  beginShape();
  curveVertex(400, 330); // start curve at point 8
  curveVertex(400, 330); // from point 8 to 10
  curveVertex(450, 200); // from point 10 to 7
  curveVertex(400, 70);
  curveVertex(400, 70); // end curve
  endShape(); // do not want to close the curve


  // draw pumpkin face
  fill('black');
  strokeWeight(3);
  triangle(250, 125, 225, 175, 275, 175); // eye 1
  triangle(350, 125, 325, 175, 375, 175); // eye 2
  triangle(300, 200, 285, 230, 315, 230); // nose
  arc(300, 255, 100, 60, 0, PI); // mouth

  // draw orange jack o lantern teeth
  fill(orange);
  stroke(orange); // match pumpkin color 
  strokeWeight(1);
  rect(270, 255, 20, 10); // tooth 1
  rect(315, 275, 15, 10); // tooth 2

  // draw stem with triangle
  var stem = color(68, 51, 36); // set stem color variable for specific shade of brown
  fill(stem);
  stroke('black');
  strokeWeight(2);
  triangle(300, 100, 325, 50, 275, 50); // stem triangle

  // create ghost curve
  fill('white'); // ghost color
  strokeWeight(1); // change weight of points to be easily hidden

  point(550, 200); // point a (corner of ghost)
  point(580, 175); // point b
  point(610, 200); // point c
  point(640, 175); // point d
  point(670, 200); // point e
  point(700, 175); // point f
  point(730, 200); // point g (corner of ghost)
  point(640, 30); // point h (top of ghost)

  strokeWeight(2); // outline of ghost
  beginShape();
  curveVertex(550, 200); // start curve at point a
  curveVertex(550, 200); // from point a to b
  curveVertex(580, 175); // from point b to c
  curveVertex(610, 200); // from point c to d
  curveVertex(640, 175); // from point d to e
  curveVertex(670, 200); // from point e to f
  curveVertex(700, 175); // from point f to g
  curveVertex(730, 200); // from point g to h
  curveVertex(640, 30); // from point h to a
  curveVertex(550, 200);
  curveVertex(550, 200); // end curve at a
  endShape(); // do not want to close the curve

  // ghost eyes
  fill('black');
  ellipse(630, 80, 7, 15); // eye 1
  ellipse(650, 80, 7, 15); // eye 1
}

function draw() {
}