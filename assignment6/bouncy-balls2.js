var balls = []; //Set up variable balls with an empty array

function setup(){
	createCanvas(700,500);
  
  /*
  Specify number of ball to appear on the screen
  - set i = number of balls
  - call the constructor Ball
  */
  
  for (var i = 0; i < 100; i++) { //
  balls[i] = new Ball();
  }
}

function draw() { 
	background(0);
  
  /*
  To make display, move and bounce balls:
  - set i = number of balls on the screen
  - looping each i value for each ball
  */
  
  for (var i = 0; i < balls.length; i++) {
  balls[i].display();
  balls[i].move();
  balls[i].bounce();
  }
}

////////////////////////////////////////
/////Setting up a Constructor Ball/////
//////////////////////////////////////
function Ball() {
  
  //Set random rbg values from 180 - 250
  this.r = random(180,255);
  this.g = random(180,255);
  this.b = random(0,255);
  
  //Position & size of ellipse
	this.x = random(0,width);
  this.y = random(0,height);
  this.R = random(20); //random size for ellipse
  this.d = this.R*2; //the diameter of an ellipse
  
  //Speed & Direction
  this.xVelocity = random(-4,0); //random direction/speed that xCoor will move
  this.yVelocity = random(0,5); //random direction/speed that yCoor will move
  
  this.display = function() { //Function to display ellipse
		stroke(this.r, this.b, this.g); //random color for ellipse
  	noFill();
    ellipse(this.x, this.y, this.d, this.d);
  }
  
  this.move = function() { //function to move
  	this.x += this.xVelocity;
    this.y += this.yVelocity;
  }
  
  this.bounce = function() { //function to bounce
    
    //if xCoor moves out of canvas, bounce back
    if (this.x - this.R < 0 || this.x + this.R > width) {
    	this.xVelocity *= -1;
    }
    
    //if yCoor moves out of canvas, bounce back
    if (this.y - this.R < 0 || this.y + this.R > height) { 
    	this.yVelocity *= -1;
    }
  }
  
}
  
