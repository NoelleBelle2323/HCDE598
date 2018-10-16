function setup() {
  createCanvas(600, 600);
  //background(95, 158, 180);
}
xCoord = 60 //flounder
yCoord = 76
xCoord1 = 450 //ursula
yCoord1 = 76
xCoord2 = 60 //Sebastian
yCoord2 = 450
xCoord3 = 450 //little Mermaid
yCoord3 = 450
myRadius = 10

function draw() {
  background(95, 158, 180);
  // creates the grey rectangle in the upper left corner
  fill('grey');
  stroke('grey');
  rect(0, 0, 100, 20);

  // sets the color of the text
  fill('black')
  stroke('black');
  strokeWeight(1);

  // writes the text of the current coordinates in the corner
  text("x: " + mouseX + " y: " + mouseY, 10, 15);

  //Flouder
  fill('yellow');
  stroke('yellow');
  ellipse(xCoord, yCoord, 85, 75);
  fill(0, 191, 255);
  stroke(0, 191, 255);
  rect(xCoord - 5, yCoord - 50, 5, 16); //topfin
  rect(xCoord - 60, yCoord - 5, 16, 5); //fin
  rect(xCoord + 43, yCoord, 16, 5); //fin
  fill('black')
  ellipse(xCoord + 18, yCoord, myRadius); //eye
  ellipse(xCoord - 18, yCoord, myRadius); //eye
  xCoord++;
  yCoord++;
  if (yCoord > 200) { //set 
    yCoord = 200;
  }
  if (xCoord > 200) { //set 
    xCoord = 200;
  }

  //Ursula
  fill('white');
  noStroke();
  ellipse(xCoord1,yCoord1-20,85,75);//hair
  
  fill(147,112,219);
  noStroke();
  ellipse(xCoord1, yCoord1, 80, 75);//face
  
  noFill();
  stroke('black');
  strokeWeight(5);
  line(xCoord1+15, yCoord1-25, xCoord1+5, yCoord1-15);//eyebrow
  line(xCoord1-20, yCoord1-25, xCoord1-10, yCoord1-15);//eyebrow
  fill('white');
  noStroke();
  triangle(xCoord1-15, yCoord1-50, xCoord1, yCoord1-20, xCoord1+15, yCoord1-50);//hair
  
  fill('black');
  strokeWeight();
  stroke('green');
  
  ellipse(xCoord1 + 13, yCoord1, 11, 8); //eye
  ellipse(xCoord1 - 13, yCoord1, 11, 8); //eye

  xCoord1++;
  yCoord1++;
  if (yCoord1 > 200) { //set 
    yCoord1 = 200;
  }
  if (xCoord1 > 340) { //set 
    xCoord1 = 340;
  }
  
  //Sebastian
  fill(220,20,60);
  stroke(220,20,60);
  ellipse(xCoord2, yCoord2, 80, 75);
  fill('black');
  stroke('black');
  ellipse(xCoord2 + 13, yCoord2, myRadius); //eye
  ellipse(xCoord2 - 13, yCoord2, myRadius); //eye
fill(220,20,60);
  arc(xCoord2-50, yCoord2-10, 20, 20, 0, PI + QUARTER_PI);
  arc(xCoord2+55, yCoord2-10, 20, 20, 0, PI + QUARTER_PI);
  strokeWeight(5);
  stroke(220,20,60);
  line(xCoord2-50, yCoord2, xCoord2+8, yCoord2+30);//arm
  line(xCoord2, yCoord2+30, xCoord2+50, yCoord2);//arm
  
  
  xCoord2++;
  yCoord2--;
  if (yCoord2 < 200) { //set 
    yCoord2 = 200;
  }
  if (xCoord2 > 65) { //set 
    xCoord2 = 65;
  }

  //Little mermaid
  
  
  stroke('red');
  fill('red');
  
beginShape();//hair
curveVertex(xCoord3+70, yCoord3+40);
curveVertex(xCoord3+70, yCoord3+40);
curveVertex(xCoord3+35, yCoord3-25);
curveVertex(xCoord3-30, yCoord3-25);
curveVertex(xCoord3-62, yCoord3+40);
curveVertex(xCoord3-62, yCoord3+40);
endShape();

  
  
  fill(255,222,173);
  noStroke();
  ellipse(xCoord3, yCoord3, 80, 75);//face
  fill('black');
  strokeWeight();
  stroke('black');
  ellipse(xCoord3 + 13, yCoord3, myRadius); //eye
  ellipse(xCoord3 - 13, yCoord3, myRadius); //eye
  fill('red');
  arc(xCoord3+3, yCoord3-10, 100, 100, -PI, 0);
  xCoord3--;
  yCoord3--;
  if (yCoord3 < 200) { //set 
    yCoord3 = 200;
  }
  if (xCoord3 < 480) { //set 
    xCoord3 = 480;
  }

}