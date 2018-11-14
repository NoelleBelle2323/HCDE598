// File: Moving Dots.js
// Author: Christina Zheng
// Date: 11/12/18
// Class: HCDE 598
// Email: kexinz@uw.edu
// Description:
// This program shows 10 dots bouncing round campus randomly&induvisualy 

// size&color of the canvas
const CanvasX = 800;
const CanvasY = 800;
const CanvasBack = "salmon";

// dot size & color
const dotRadius = 25;
var dotColor = "white";

// x and y corrdinates of the dots
var dotX = [120, 100, 150, 200, 250, 280, 340, 470, 300, 550];
var dotY = [300, 150, 20, 270, 490, 360, 350, 410, 560, 150];

// speed that the dot moves around the x&y coordinates
var dotXspeed = 1.5;
var dotYspeed = 1.5;

//set up individual direction variation of the movement
var xdirection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ydirection = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


function setup() {
    createCanvas(CanvasX, CanvasY);
    frameRate(40);
    ellipseMode(RADIUS);

}


function draw() {
    background(CanvasBack);

    //Draw and move dots 
    drawDots();
    moveDots();
}

function drawDots() {
    
    // draw 10 circles using loop function
    for (var i = 0; i < 10; i++) {
        noStroke();
        fill(dotColor);
        ellipse(dotX[i], dotY[i], dotRadius, dotRadius);
    }
}


function moveDots() {

    //loop through dots and dot speeds
    for (var i = 0; i < 10; i++) {
        dotX[i] = dotX[i] + dotXspeed * xdirection[i];
        dotY[i] = dotY[i] + dotYspeed * ydirection[i];

        var spotX = dotX[i]
        var spotY = dotY[i]

        // check if shape is outside canvas
        //change x direction
        if (spotX > CanvasX - dotRadius || spotX < dotRadius) {
            xdirection[i] = xdirection [i] * (-1);
        }
        //change y direction
        if (spotY > CanvasY - dotRadius || spotY < dotRadius) {
            ydirection[i] = ydirection[i] * (-1);
        }
    }

}