// File: Dots.js
// Author: Christina Zheng
// Date: 11/4/18
// Class: HCDE 598
// Email: kexinz@wisc.edu
// Description:
// This program shows colorful dots lined up as 
// a grid in the middle of the canvas

// size of the canvas
const x = 800;
const y = 800;

// color of the canvas
const bgdcolor = 'salmon';

// diameter & color for the bigger circle 
const ellipse1x = 35;
const ellipse1y = 35;

// diameter for the smaller circle 
const ellipse2x = 15;
const ellipse2y = 15;

// some colors
const ellipse1color = 'white';
const ellipse2color = 'grey'


function setup() {

    // create the canvas
    createCanvas(x, y);
    background(bgdcolor);

    // draws the circles using for loops & nested loops
    // cx/cy = the x/y coordinate of the circle
    for (var cx = 200; cx <= 600; cx = cx + 50) {
        for (var cy = 200; cy <= 600; cy = cy + 50) {

            //draw bigger circles
            noStroke();
            // if the remainder of the index number divided by
            // 3 is 0, use the color white.
            // otherwise, use grey.
            if (cx % 3 == 0) {
                fill(ellipse1color);
            } else {
                fill(ellipse2color);
            }

            ellipse(cx, cy, ellipse1x, ellipse1y);

            // draw smaller circles
            noStroke();
            // if the remainder of the index number divided by
            // 3 is 0, use the color grey.
            // otherwise, use white.
            if (cx % 3 == 0) {
                fill(ellipse2color);
            } else {
                fill(ellipse1color);
            }
            ellipse(cx, cy, ellipse2x, ellipse2y);
        }
    }

}

function draw() {}