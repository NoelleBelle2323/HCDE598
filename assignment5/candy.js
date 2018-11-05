// File: Candy.js
// Author: Angel Vuong
// Date: 11/4/18
// Class: HCDE 596 Intro to Programming
// Email: advuong@uw.edu
// Description: This program draws a pattern of ellipse candies
// inspired by the Dylan's Candy Bar logo

// constants that set the size of the canvas 
const canvas_width = 1000;
const canvas_height = 750;

//upper left corner where loop starts
const x_origin = 50;
const y_origin = 50;

//color palette
const background_color = '#119b9e'; // turquoise
const inner_color = "pink";
const outer_color = "red";
const center_color = 'yellow';
const outer_color2 = '#1f60ad' // blue

//parameters for each candy
const candy_radius = 80

//candy per row x and column y
const number_X = 10
const number_Y = 6

//spacing between candy
const padding_X = 100
const padding_Y = 130

function setup() {
  // create the canvas
  createCanvas(canvas_width, canvas_height);
  background(background_color);

  // draw the shapes in a row
  for (i = 0; i < number_X; i++) {
    for (j = 0; j < number_Y; j++) {

      // to calculate the x and y coordinates of each shape
      var xCorner = x_origin + i * padding_X;
      var yCorner = y_origin + j * padding_Y;

      //alternates candy colors
      if (isOdd(i)) {
        blue_candy();
      } else {
        red_candy();
      }
    }
  }

  // returns true if the number is odd, and false if the number is even
  function isOdd(n) {
    // compute remainder of division by two
    remainder = n % 2;
    if (remainder == 1) {
      return true;
    } else {
      return false;
    }
  }

  // function to draw odd (blue shell) color candy
  function blue_candy() {
    // draw each individual blue candy
    fill(outer_color);
    noStroke();
    ellipse(xCorner, yCorner, candy_radius);

    //draw the yellow center of the candy
    fill(inner_color);
    ellipse(xCorner, yCorner, candy_radius - 20);
    fill(background_color);
    ellipse(xCorner, yCorner, candy_radius - 40);
  }

  // function to draw even (red shell) color candy
  function red_candy() {
    // draw each individual red candy
    fill(outer_color2);
    noStroke();
    ellipse(xCorner, yCorner, candy_radius);

    //draw the background colored center of the candy
    fill(background_color);
    ellipse(xCorner, yCorner, candy_radius - 20);
    fill(center_color);
    ellipse(xCorner, yCorner, candy_radius - 40); 
  }
}

//this code is static and will not have animation
//draw function is not used
function draw() {}