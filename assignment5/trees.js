//****************************
// Gray Seattle day
//****************************
// This program uses for loops, constants, variables,
// and parameters to display a tree pattern on the canvas.
// File name: grayseattleday.js
// Author: Stephanie Blucker 
// Email: stephk99@uw.edu
// Date: 11/4/18
// Class: HCDE 598 

// set the size of the canvas
const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 760;

// set x and y origins for the triangles in the tree
const TREE_ORIGINX1 = 25;
const TREE_ORIGINY1 = 75;
const TREE_ORIGINX2 = 53;
const TREE_ORIGINY2 = 20;
const TREE_ORIGINX3 = 80;
const TREE_ORIGINY3 = 75;

// set x and y origins for the trunk
const TREE_TRUNKX = 48;
const TREE_TRUNKY = 95;

// all the colors used in the sketch
const BG_COLOR = '#C6CFD8';
const TREE_COLOR1 = '#839a6c';
const TREE_COLOR2 = '#a9b999';
const TRUNK_COLOR = '#97908a';

// set how many trees to draw per line and how far apart 
// they should be on the x and y axes
const TREE_NUMBER = 7;
const TREE_GAPX = 100;
const TREE_GAPY = 150;

function setup() {

  // create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BG_COLOR);

  // draw seven trees in a line
  for (i = 0; i < TREE_NUMBER; i++) {
    for (j = 0; j < TREE_NUMBER; j++) {

      // calculate the x and y coordinates where the trees originate
      var xTreeCorner1 = TREE_ORIGINX1 + i * TREE_GAPX
      var yTreeCorner1 = TREE_ORIGINY1 + j * TREE_GAPY
      var xTreeCorner2 = TREE_ORIGINX2 + i * TREE_GAPX
      var yTreeCorner2 = TREE_ORIGINY2 + j * TREE_GAPY
      var xTreeCorner3 = TREE_ORIGINX3 + i * TREE_GAPX
      var yTreeCorner3 = TREE_ORIGINY3 + j * TREE_GAPY

      var xTrunkCorner = TREE_TRUNKX + i * TREE_GAPX
      var yTrunkCorner = TREE_TRUNKY + j * TREE_GAPY

      // draw one line
      drawTree();
    }
  }

  // function to draw the tree
  function drawTree() {
    noStroke();
    fill(TRUNK_COLOR);
    rect(xTrunkCorner, yTrunkCorner, 10, 50);

    // fill alternating columns with different colors of green
    if (i % 2 == 0) {
      fill(TREE_COLOR1);
    }
    if (i % 2 == 1) {
      fill(TREE_COLOR2);
    }

    // triangles that make up the treetops
    triangle(xTreeCorner1, yTreeCorner1, xTreeCorner2, yTreeCorner2, xTreeCorner3, yTreeCorner3);
    triangle(xTreeCorner1 - 5, yTreeCorner1 + 20, xTreeCorner2, yTreeCorner2 + 20, xTreeCorner3 + 5, yTreeCorner3 + 20);
    triangle(xTreeCorner1 - 10, yTreeCorner1 + 40, xTreeCorner2, yTreeCorner2 + 40, xTreeCorner3 + 10, yTreeCorner3 + 40);
  }
}

// nothing to see here!
function draw() {}