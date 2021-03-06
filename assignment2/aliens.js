var xCoord = 75
var yCoord = 50
var xCoord2 = 500
var yCoord2 = 50
var xCoord3 = 75
var yCoord3 = 550
var xCoord4 = 500
var yCoord4 = 550

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 0);

  
  
  //green alien
  noStroke();
  fill("green");
  ellipseMode(CENTER);
  ellipse(xCoord, yCoord, 75, 85);

  noStroke();
  fill("green");
  ellipseMode(CENTER);
  ellipse(xCoord, yCoord + 40, 40, 40);

  fill(0, 0, 0);
  ellipseMode(CENTER);
  ellipse(xCoord - 18, yCoord, 30, 20);
  ellipse(xCoord + 18, yCoord, 30, 20);


  fill(0, 0, 0);
  ellipseMode(CENTER);
  ellipse(xCoord - 5, yCoord + 20, 8, 5);
  ellipse(xCoord + 5, yCoord + 20, 8, 5);

  stroke(0, 0, 0);
  strokeWeight(5);
  line(xCoord - 6, yCoord + 45, xCoord + 5, yCoord + 45);

  noStroke();
  fill("green");
  ellipseMode(CENTER);
  ellipse(xCoord, yCoord + 73, 10, 25);

  stroke("green");
  strokeWeight(3);
  line(xCoord - 3, yCoord + 84, xCoord - 8, yCoord + 90);
  line(xCoord + 2, yCoord + 84, xCoord + 5, yCoord + 90);
  line(xCoord - 2, yCoord + 65, xCoord - 11, yCoord + 75);
  line(xCoord + 2, yCoord + 65, xCoord + 9, yCoord + 75);


  if (xCoord < 200) {
    xCoord = xCoord + 1;
  }
  if (yCoord < 250) {
    yCoord = yCoord + 1;
  }
  //xenomorph body
  noStroke();
  fill('grey');
  ellipse(xCoord2 - 25, yCoord2, 75, 40);
  triangle(xCoord2 - 1, yCoord2 - 16, xCoord2, yCoord2 + 16, xCoord2 + 50, yCoord2);
  ellipse(xCoord2 - 25, yCoord2 + 40, 15, 45);
  triangle(xCoord2 - 25, yCoord2 + 60, xCoord2, yCoord2 + 50, xCoord2 + 30, yCoord2 + 15);

  //xenomorph arms and legs
  strokeWeight(3);
  stroke('grey');
  line(xCoord2 - 22, yCoord2 + 50, xCoord2 - 18, yCoord2 + 75);
  line(xCoord2 - 30, yCoord2 + 50, xCoord2 - 34, yCoord2 + 75);
  line(xCoord2 - 45, yCoord2 + 30, xCoord2 - 30, yCoord2 + 30);
  line(xCoord2 - 45, yCoord2 + 35, xCoord2 - 32, yCoord2 + 35);


  //eyes and teeth
  strokeWeight(3);
  stroke("black");
  line(xCoord2 - 18, yCoord2, xCoord2 - 63, yCoord2 - 2);

  fill("black");
  triangle(xCoord2 - 20, yCoord2 + 6, xCoord2 - 25, yCoord2, xCoord2 - 15, yCoord2);
  triangle(xCoord2 - 30, yCoord2 + 6, xCoord2 - 35, yCoord2, xCoord2 - 25, yCoord2);
  triangle(xCoord2 - 40, yCoord2 + 6, xCoord2 - 45, yCoord2, xCoord2 - 35, yCoord2);
  triangle(xCoord2 - 50, yCoord2 + 6, xCoord2 - 55, yCoord2, xCoord2 - 45, yCoord2);
  ellipse(xCoord2 - 12, yCoord2 - 8, 5, 5);

  //taken from your example
  if (xCoord2 > 440) {
    xCoord2 = xCoord2 - 1;
  }
  if (yCoord2 < 250) {
    yCoord2 = yCoord2 + 1;
  }

  //ET body
  fill("brown");
  ellipse(xCoord3, yCoord3, 70, 75);
  ellipse(xCoord3, yCoord3 - 75, 55, 40);


  strokeWeight(15);
  stroke("brown");
  line(xCoord3, yCoord3 - 20, xCoord3, yCoord3 - 70);


  //et heart
  noStroke();
  fill("red");
  ellipse(xCoord3 + 5, yCoord3 - 5, 10, 10);
  ellipse(xCoord3 + 15, yCoord3 - 5, 10, 10);
  triangle(xCoord3 + 20, yCoord3 - 5, xCoord3 + 10, yCoord3 + 10, xCoord3, yCoord3 - 5);

  //et eyes
  noStroke();
  fill("white");
  ellipse(xCoord3 - 15, yCoord3 - 75, 15, 10);
  ellipse(xCoord3 + 15, yCoord3 - 75, 15, 10);

  noStroke();
  fill("blue");
  ellipse(xCoord3 - 15, yCoord3 - 75, 10, 10);
  ellipse(xCoord3 + 15, yCoord3 - 75, 10, 10);

  //et nostrils
  noStroke ();
  fill("black");
  ellipse(xCoord3 - 4, yCoord3 - 70, 5, 5);
  ellipse(xCoord3 + 4, yCoord3 - 70, 5, 5);

  //et mouth
  stroke("black");
  strokeWeight(1);
  line(xCoord3 - 6, yCoord3 - 78, xCoord3 - 10, yCoord3 - 65);
  line(xCoord3 + 6, yCoord3 - 78, xCoord3 + 10, yCoord3 - 65);
  line(xCoord3 - 8, yCoord3 - 62, xCoord3 + 10, yCoord3 - 62);

  if (xCoord3 < 100) {
    xCoord3 = xCoord3 + 1;
  }
  if (yCoord3 > 300) {
    yCoord3 = yCoord3 - 1;
  }
  
	if(xCoord4>340) {
    xCoord4=xCoord4-1;
  }
     if(yCoord4>315) {
        yCoord4=yCoord4-1;
    }

  //doctor who head
  noStroke();
  fill("yellow");
  ellipse(xCoord4 - 25, yCoord4 - 70, 50, 50);

  //docotr who face. skin tone found https://codepen.io/jgog/pen/ammXQL
  noStroke();
  fill('#ffcb9a');
  ellipse(xCoord4 - 25, yCoord4 - 67, 30, 40);

  stroke('#ffcb9a');
  strokeWeight(7);
  line(xCoord4 - 24, yCoord4 - 40, xCoord4 - 25, yCoord4 - 48);
  line(xCoord4 - 36, yCoord4 - 33, xCoord4 - 45, yCoord4 - 20);
  line(xCoord4 - 13, yCoord4 - 33, xCoord4 - 3, yCoord4 - 20);

  //body
  stroke('white');
  fill('white');
  rect(xCoord4 - 33, yCoord4 - 36, 18, 35, 20);

  noStroke();
  fill('blue');
  rect(xCoord4 - 36, yCoord4 - 10, 25, 15);

  stroke('blue');
  strokeWeight(12);
  line(xCoord4 - 30, yCoord4, xCoord4 - 33, yCoord4 + 17);
  line(xCoord4 - 16, yCoord4, xCoord4 - 12, yCoord4 + 17);

  //doctor who eyes
  noStroke();
  fill("white");
  ellipse(xCoord4 - 17, yCoord4 - 73, 12, 8);
  ellipse(xCoord4 - 35, yCoord4 - 73, 12, 8);

  noStroke();
  fill("blue");
  ellipse(xCoord4 - 17, yCoord4 - 73, 7, 8);
  ellipse(xCoord4 - 35, yCoord4 - 73, 7, 8);

  stroke('red');
  strokeWeight(2);
  line(xCoord4 - 35, yCoord4 - 30, xCoord4 - 12, yCoord4 - 30);

  stroke('orange');
  strokeWeight(2);
  line(xCoord4 - 35, yCoord4 - 28, xCoord4 - 12, yCoord4 - 28);

  stroke('green');
  strokeWeight(2);
  line(xCoord4 - 35, yCoord4 - 26, xCoord4 - 12, yCoord4 - 26);

  stroke('blue');
  strokeWeight(2);
  line(xCoord4 - 35, yCoord4 - 24, xCoord4 - 12, yCoord4 - 24);

  stroke('red');
  noFill();
  arc(xCoord4 - 28, yCoord4 - 65, 10, 10, 10, 120);

  stroke('black');
  strokeWeight(4);
  line(xCoord4 - 32, yCoord4 - 36, xCoord4 - 32, yCoord4 - 10);
  line(xCoord4 - 17, yCoord4 - 36, xCoord4 - 17, yCoord4 - 10);
 
    
 }