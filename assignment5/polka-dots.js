// File: polkadots.js
// Author: Jessica Biondo
// Date: 11/4/18
// Class: HCDE 598
// Email: jessb35@uw.edu
// Description: This program shows navy and orange polka dots in a loop.


// canvas size
const canvas_w = 450;
const canvas_h = 450;

//loop begins in top left corner near (0,0)
const x_origin = 45;
const y_origin = 45;

// colors
const bkgrnd = 'magenta';
const stroke_color = "white";
const color1 = 'orange';
const color2 = 'navy';

//parameters for each circle
const radius = 20;
const stroke_w = 2.5;

//number of polka dots on canvas
const number_x = 13
const number_y = 13

//space between each polka dot
const space_x = 30
const space_y = 30

function setup() {

  // create canvas
  createCanvas(canvas_w, canvas_h);
  background(bkgrnd);

  // draw polka dots
   for (x = 0; x < number_x; x++) {
    for (y = 0; y < number_y; y++) {
      //calculates coordinates of each polka dot
      var xCorner = x_origin + x * space_x;
      var yCorner = y_origin + y * space_y;

      //calls odd and even functions
      if (isOdd(x)) {
        polkadot_odd();
      } else {
        polkadot_even();
      }
    }
  }

  
  /////////////////////////////////////
  //////functions for above loop///////
  ////////////////////////////////////
  
  // returns true if odd, false if even
  function isOdd(n) {
    // compute remainder of division by two
    remainder = n % 2;
    if (remainder == 1) {
      return true;
    } else {
      return false;
    }
  }
  
  // function for even polka dot
  function polkadot_odd() {
    fill(color1);
    stroke(stroke_color);
    strokeWeight(stroke_w);
    ellipse(xCorner, yCorner, radius);

  }

  // function for odd polka dot
  function polkadot_even() {
    fill(color2);
    stroke(stroke_color);
    strokeWeight(stroke_w);
    ellipse(xCorner, yCorner, radius);

  }
}

function draw() {}