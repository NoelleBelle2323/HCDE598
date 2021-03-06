/*
The goal of this project is to:
1. Create Santa image in the middle
2. Use objects to create snow balls
3. Use arrays to pass colors into snowballs upon clicking a mouse
4. Upon pressing the up arrow, the speed of the snowball increases

I watched a few videos on The Coding Train YouTube channel
to learn how to create objects
*/

var balls = []; //Set up variable balls with an empty array
var ballcolor = ["white", "red", "yellow", "blue", "black"] //set up color array
var colorindex = 0; //set initial color index

function setup() {
  createCanvas(700, 500);
  angleMode(DEGREES);

  /*
  Specify number of ball to appear on the screen
  - set i = number of balls
  - call the constructor Ball
  */

  for (var i = 0; i < 200; i++) { //Function to create 200 snow balls using objects Ball()
    balls[i] = new Ball();
  }
}

function draw() {
  background("#8D5B5C");

	/*
  Let b equals all the number of balls called previously, for each ball,
  assign function display, move, and bounce
  */
  for (let b of balls) {
    b.display();
    b.move();
    b.bounce();
  }

  drawSanta(); //draw Santa on top of the canvas, above the snowballs

}

////////////////////////////////////////
/////Change ball color/////////////////
//////////////////////////////////////

/*
Use remainder as a way to pass value through an array.
For example, when the color index = 2
The result is 0 with 2 as a remainder
The array will return 2 as a result
When it hits 6, 6/6 = 1, the remainder is 0
Then loop back to the beginning of the colorindex = 0 
*/

function changeColor() {

  colorindex = (colorindex + 1) % ballcolor.length;
  return ballcolor[colorindex];
}

////////////////////////////////////////
/////Set up mouseClicked function///////
////////////////////////////////////////

function mouseClicked() {
  changeColor();
}

////////////////////////////////////////
/////Set up keyPressed function/////////
////////////////////////////////////////

/*
When the upper arrow key is pressed, increase the speed of the snowballs
*/

function keyPressed() {
  for (let b of balls) {
    if (keyCode == UP_ARROW) {
      b.xVelocity += 5;
      b.yVelocity += 5;
    }
  }
}


////////////////////////////////////////
/////Setting up Snow ball as an object/
//////////////////////////////////////
function Ball() {

  //Position & size of the snowball
  this.x = random(0, width);
  this.y = random(0, height);
  this.R = random(10); //random size for ellipse
  this.d = this.R * 2; //the diameter of an ellipse


  //Speed & Direction
  this.xVelocity = random(0, -2); //random direction/speed that xCoor will move
  this.yVelocity = random(-2, 5); //random direction/speed that yCoor will move

  //Function to display the snowball
  this.display = function() {
    noStroke();
    fill(ballcolor[colorindex]); //pass the color array here
    ellipse(this.x, this.y, this.d, this.d);
  }

  //Function to make snowballs move
  this.move = function() {
    this.x += this.xVelocity;
    this.y -= this.yVelocity;
  }

  //Function to make snowball bounce back when it hits the edges of canvas
  this.bounce = function() {

    //if xCoor moves out of canvas width, bounce back
    if (this.x - this.R < 0 || this.x + this.R > width) {
      this.xVelocity *= -1;
    }

    //if yCoor moves out of canvas height, bounce back
    if (this.y - this.R < 0 || this.y + this.R > height) {
      this.yVelocity *= -1;
    }
  }

}

////////////////////////////////////////
/////Draw Santa////////////////////////
//////////////////////////////////////  
function drawSanta() {

  translate(100, 100);

  noStroke(); //hat
  fill("#E64801");
  arc(312, 34, (312 - 250) * 2, (85 - 34) * 2, 0, 180); //red part

  fill("white"); //hat tail
  arc(393, 34, (393 - 374) * 2, (34 - 15) * 2, 90, 270);
  arc(393, 15, (410 - 393) * 2, (34 - 15) * 2, 0, 90);
  arc(393, 53, (410 - 393) * 2, (53 - 34) * 2, 270, 360);


  fill("#F1E6D9");
  arc(250, 157, (157 - 34) * 2, 246, 180, 0, OPEN); //outer head 1

  fill("#F2C2A0");
  arc(250, 157, 172, 170, 180, 270); //left face

  fill("#F5D2B9");
  arc(250, 157, 172, 170, 270, 0); //right face

  fill("#0072CA");
  ellipse(221, 133, 18, 18); //left eye

  fill("#0072CA");
  ellipse(279, 133, 18, 18); //right eye  

  fill("#F49699");
  ellipse(165, 157, 50, 45); //left cheek

  fill("#F49699");
  ellipse(335, 157, 50, 45); //right cheek

  noFill();
  stroke("#F1E6D9");
  strokeWeight(37);
  arc(250, 157, 209, 209, 180, 0); //outter head 2

  noStroke();
  fill("white");
  arc(250, 157, 246, 246, 0, 180); //bottom face

  noStroke(); //left beard
  fill("#F1E6D9");
  arc(206, 202, (206 - 161) * 2, (202 - 157) * 2, 180, 270);
  arc(206, 157, (206 - 161) * 2, (202 - 157) * 2, 0, 90);

  noStroke(); //right beard
  fill("#F1E6D9");
  arc(294, 157, (206 - 161) * 2, (202 - 157) * 2, 90, 180);
  arc(294, 202, (206 - 161) * 2, (202 - 157) * 2, 270, 360);

  noStroke(); //nose
  fill("#F49699");
  ellipse(250, 157, (250 - 240) * 2, (157 - 147) * 2);

}