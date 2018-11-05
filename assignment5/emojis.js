var x = 50;
var y = 50;
var shapeheight = 70;
var shapewidth = 70;
var angle = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(20);
}

function draw() {
  background(0);
    
for (x=50; x<width; x+=100){ //for loop to run through x
  for (y = 50; y<height;y+=100){ //for loop to run through y
    emoji(x,y);
  }
}
 
}


///////////////////
////Draw emoji/////
//////////////////

function emoji(x, y) {

  push();
  translate(x, y) //Seting up new coordinates
  angle = angle + 0.1;
  rotate(angle);

  //Top left emoji
  noStroke(); //outter circle 
  fill(random(225),0,random(220));
  ellipse(0,0,95,95);

  noStroke();
  fill("#FCE284"); //inner circle
  ellipse(0,0,70,70);

  //Left eye
  noStroke();
  fill(255);
  ellipse(-15, -10, 20, 25);

  //eyeball			
  noStroke();
  fill(0);
  ellipse(-12, -4,10,10);

  //Right eye
  noStroke();
  fill(255);
  ellipse(15, -10, 20, 25);

  //eyeball
  noStroke();
  fill(0);
  ellipse(17, -4, 10, 10);

  //mouth
  fill("#DC594B");
  arc(0, 20, 12, 12, 0, 225, CHORD);
  
  pop();

}