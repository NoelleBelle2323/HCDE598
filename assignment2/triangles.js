function setup() {
  createCanvas(400, 400);
}


var tlx1 = 20;
var tly1 = 20;
var tlx2 = 120;
var tly2 = 20;
var tlx3 = 20;
var tly3 = 120;


var trx1 = 280;
var try1 = 20;
var trx2 = 380;
var try2 = 20;
var trx3 = 380;
var try3 = 120;

var blx1 = 20;
var bly1 = 280;
var blx2 = 20;
var bly2 = 380;
var blx3 = 120;
var bly3 = 380;


var brx1 = 380;
var bry1 = 280;
var brx2 = 380;
var bry2 = 380;
var brx3 = 280;
var bry3 = 380;


function draw() {
  background(220);

  noStroke();
  triangle(tlx1, tly1, tlx2, tly2, tlx3, tly3);

  if (tlx1 < 100) {
    tlx1++
  }
  if (tly1 < 150) {
    tly1++
  }
  if (tlx2 < 200) {
    tlx2++
  }
  if (tly2 < 150) {
    tly2++
  }
  if (tlx3 < 100) {
    tlx3++
  }
  if (tly3 < 250) {
    tly3++
  }


  noStroke();
  triangle(trx1, try1, trx2, try2, trx3, try3);

  if (trx1 > 200) {
    trx1--
  }
  if (try1 < 150) {
    try1++
  }
  if (trx2 > 300) {
    trx2--
  }
  if (try2 < 150) {
    try2++
  }
  if (trx3 > 300) {
    trx3--
  }
  if (try3 < 250) {
    try3++
  }
  
  
  noStroke();
  triangle(brx1, bry1, brx2, bry2, brx3, bry3);

  if (brx1 > 200) {
    brx1--
  }
  if (bry1 > 150) {
    bry1--
  }
  if (brx2 > 200) {
    brx2--
  }
  if (bry2 > 250) {
    bry2--
  }
  if (brx3 > 100) {
    brx3--
  }
  if (bry3 > 250) {
    bry3--
  }
  
  
  noStroke();
  triangle(blx1, bly1, blx2, bly2, blx3, bly3);

  if (blx1 < 200) {
    blx1++
  }
  if (bly1 > 150) {
    bly1--
  }
  if (blx2 < 200) {
    blx2++
  }
  if (bly2 > 250) {
    bly2--
  }
  if (blx3 < 300) {
    blx3++
  }
  if (bly3 > 250) {
    bly3--
  }







}