//Assignment 6; bouncing balls
//dawn ferguson 
//November 10,2018
//HCDE 598- Introduction to programming
//dawnferg@uw.edu
//I created multiple transparent balls that bounce and move.
// I found multiple examples for this sketch on github, codepen, and opensource , 
// I deconstructed the examples I found and used some from each as framework
// to get started. 
//I also used coding train video on bouncing balls and 
//referenced the book and p5.js site for understanding "this"
//and developing the right colors and transparency


//setting up array
var ball1 = [];

// setting up canvas at 600x600 and creating a loop for the index of the array
//initializing array for less than 20 bouncing balls
function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 20; i++) {
    ball1[i] = new Ball();
  }
}
// creating background in draw so it stays behind bouncing balls
// using array to call the ball position and movement
function draw() {
  background(200, 150, 150);
  for (var i = 0; i < ball1.length; i++) {
    ball1[i].cir();
    ball1[i].move();
  }

}

//setting up function for Ball using "this" to assign a property to the 
//variable object. Referenced page 157 in Make:Gettnig started with p5.js
function Ball() {
  this.c = (255, 255, 255) //creating white stroke for circles
  this.r = (15); //setting the radius to 15
  this.x = random(this.r * 2, width - this.r * 2); // random adds variety of location along x axis      
  this.y = (this.r * 2, height - this.r * 2); //defining y
  this.speedx = (-5, 2);
  this.speedy = random(-5, 15); //randomized y for variety of speed for some

  //creating function to move balls and call speed as a method of the object 
  this.move = function() {
    this.x += this.speedx;
    this.y += this.speedy;

    //setting up for the balls to change direction when they get to edge of canvas
    // got the -1 suggestion from coding train youtube video on bouncing ball
    if (this.x > width - this.r * 2 || this.x < this.r * 2) {
      this.speedx *= -1;
    }

    if (this.y > height - this.r * 2 || this.y < this.r * 2) {
      this.speedy *= -1;
    }
  }

  //defining the circle with variables and setting the size of the circles
  this.cir = function() {
    stroke(this.c); //calling white 
    fill(204, 101, 192, 127); //color with transparency found here: https://p5js.org/examples/hello-p5-simple-shapes.html
    ellipse(this.x, this.y, this.r * 3, this.r * 3);
  }
}