// File: Final Project
// Author: Angel Vuong
// Date: 11/26/18
// Class: 598 Intro to Programming
// Email: advuong@uw.edu
// Description: 
// This program draws a house and cityscape with three different backgrounds
// Pressing 1, 2, or 3 will prompt the scenes to dynamically adjust to a foggy 
// scene, nighttime scene, or falling snow scene, resepectively. 

// functions to draw small fog shapes in Scene 1
function drawFog(x, y, opacity) {
  noStroke();
  fill(255, 255, 255, opacity);
  ellipse(x, y, 300, 100);
}

// functions to draw big fog shapes in Scene 1
function drawBigfog(x, y, opacity) {
  fill(255, 255, 255, opacity);
  ellipse(x, y, 200, 60);
}

// constants to set up the environment
const canvas_width = 400;
const canvas_height = 505;
const x_origin = 30;

// color palette 
const bg_color = (224, 244, 250);
const bldg_color = ('#9DACB2')

// parameters for each house
const door_lineX = 40;
const door_lineY = 460;
const doorend_lineX = 100;
const doorend_lineY = 500;
const housesize_X = 200;
const housesize_Y = 300;

const window_X = 160;
const window_Y = 320;
const window_width = 30;
const window_length = 60;
const windowend_X = 180;

// parameters for background buildings
const rectX = 100
const rectY = 500

var snowflakes = [];


function setup() {
  createCanvas(canvas_width, canvas_height);
  frameRate(1);
}

function draw() {
  if (key == 1) {
    drawFogDay();
  } else if (key == 2) {
    drawEvening();
  } else { // key must be 3
    drawSnow();
  }
}

/******************************************************
* The following functions draw the three different
/ scenes: foggy day, nighttime, and snowy day
/******************************************************
*/

// This function draws the first scene with a foggy day
function drawFogDay() {
  background(224, 244, 250);
  drawHouse1();

  // Draw Fog
  drawFog(0, 470, 40);
  drawFog(30, 460, 40);
  drawFog(50, 470, 40);
  drawFog(100, 460, 40);
  drawFog(300, 450, 100);
  drawFog(320, 460, 100);
  drawFog(400, 455, 100);
  drawFog(500, 460, 100);
  drawFog(550, 450, 100);
  drawFog(600, 470, 100);
  drawFog(360, 420, 100);
  drawFog(800, 470, 100);
  drawFog(460, 420, 100);

  drawBigfog(0, 440, 100);
  drawBigfog(100, 420, 75);
  drawBigfog(200, 430, 100);
  drawBigfog(500, 420, 150);
  drawBigfog(650, 425, 100);
  drawBigfog(370, 455, 100);

}

// This function draws the second scene with a nighttime background
// This sun and stars color palette was inspired by Melissa Birch's
// Assignment 3 example, Day and Night
function drawEvening() {
  background('#406389');

  //Sun
  stroke('#c4b95e');
  fill('#f2e787');
  ellipse(100, 100, 80, 80);

  //stars
  fill('#f2e787');
  ellipse(200, 80, 10, 10);
  ellipse(300, 50, 10, 10);
  ellipse(375, 100, 10, 10);

  drawHouse1();
}

// This function draws the last scene with a snowy day
// This code snow uses an array of objects. 
// It is adapted from Aatish Bhatia's contribution to p5.js examples
function drawSnow() {
  background('lavender');
  drawHouse1();
  let t = frameCount / 60; // update time

  // creates a random number of snowflakes each frame
  for (var i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // add snowflakes
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// function for snowflakes
// snowflakes begin at the top of page (x = 0) and random y between 0-50
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(0, 50);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 1; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

/******************************************************
* The following function draws the house, background 
/ buildings, and text. It is written in a separate
/ function because it remains constant throughout.
/ The house is adapted from my project for Assignment 1
/******************************************************
*/

// function to draw house and its elements
function drawHouse1() {
  // background buildings
  fill(bldg_color);
  noStroke();
  rect(0, 150, rectX, rectY)
  rect(55, 180, 70, rectY);
  rect(150, 250, rectX * 2, rectY);
  rect(210, 180, rectX * 2, rectY);
  rect(392, 226, rectX * 3, rectY);
  rect(598, 206, rectX * 2, rectY);
  rect(786, 336, rectX, rectY);
  rect(857, 310, rectX, rectY);

  // house roof
  stroke('#9AD4D6');
  fill('#F2FDFF');
  strokeWeight(4);
  triangle(x_origin, housesize_Y, 130, 200, 230, housesize_Y);
  stroke('#9AD4D6');
  strokeWeight(1);
  triangle(50, housesize_Y - 10, 130, 215, 210, housesize_Y - 10);
  rect(105, 250, 50, 30);
  triangle(window_X - 85, housesize_Y - 20, window_X - 65, housesize_Y - 30, window_X - 65, housesize_Y - 20);
  triangle(window_X + 5, housesize_Y - 20, window_X + 5, housesize_Y - 30, windowend_X + 5, housesize_Y - 20);

  // house body
  stroke('#9AD4D6');
  strokeWeight(6);
  fill('#F2FDFF');
  rect(x_origin, 300, housesize_X, housesize_Y);

  // doorway 
  strokeWeight(2);
  arc(70, 460, 60, 80, PI, 0);
  line(door_lineX, door_lineY, door_lineX, door_lineY + door_lineX);
  line(doorend_lineX, door_lineY, doorend_lineX, door_lineY + door_lineX);

  // stairs
  rect(door_lineX, doorend_lineY, 60, 50);
  line(door_lineX, doorend_lineY + 10, doorend_lineX, doorend_lineY + 10);
  line(door_lineX, doorend_lineY + 20, doorend_lineX, doorend_lineY + 20);
  line(door_lineX, doorend_lineY + 30, doorend_lineX, doorend_lineY + 30);
  line(door_lineX, doorend_lineY + 40, doorend_lineX, doorend_lineY + 40);

  // house trim outline 
  stroke('#9AD4D6');
  strokeWeight(6);
  line(doorend_lineX + 10, 300, doorend_lineX + 10, doorend_lineY + 100);
  line(30, 400, 230, 400);

  // house trim delicate outline
  strokeWeight(2);
  line(30, 310, 230, 310);
  line(window_X, window_Y - 20, window_X, doorend_lineY + 100);
  line(windowend_X, window_Y - 20, windowend_X, doorend_lineY + 100);
  line(doorend_lineX + 10, doorend_lineY, 230, doorend_lineY);
  line(window_X, window_Y, windowend_X, window_Y);
  line(window_X, window_Y + 30, windowend_X, window_Y + 30);
  line(window_X, window_Y + 60, windowend_X, window_Y + 60);
  line(window_X, window_Y + doorend_lineX, windowend_X, window_Y + doorend_lineX);
  line(window_X, window_Y + 135, windowend_X, window_Y + 135);
  line(window_X, window_Y + 165, windowend_X, window_Y + 165);

  // windows
  rect(door_lineX + 10, window_Y, door_lineX, window_length); // window above door
  line(door_lineX + 10, window_Y + 30, window_length + 30, window_Y + 30);
  rect(doorend_lineX + 20, window_Y, window_width, window_length); // top left window
  line(doorend_lineX + 20, window_Y + 30, window_X - 10, window_Y + 30);
  rect(windowend_X + 10, window_Y, window_width, window_length); // top right window
  line(windowend_X + 10, window_Y + 30, housesize_X + 20, window_Y + 30);
  rect(window_X - door_lineX, door_lineY - 35, window_width, window_length); // bottom left window
  line(window_X - door_lineX, door_lineY - 5, window_X - 10, door_lineY - 5);
  rect(windowend_X + 10, door_lineY - 35, window_width, window_length); // bottom right window
  line(windowend_X + 10, door_lineY - 5, housesize_X + 20, door_lineY - 5);

  // text
  textSize(30);
  noStroke();
  textAlign(CENTER);
  fill("white");
  textFont('Futura');
  text('Adjust the scenery', canvas_width / 2, 100);

  textSize(25);
  noStroke();
  textAlign(CENTER);
  fill("white");
  textFont('Futura');
  text('Press 1, 2, or 3', canvas_width / 2, 140);
}