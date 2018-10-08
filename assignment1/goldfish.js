// By Kellie Dunn, HCDE 598C, Fall 2018
// Assignment A1 - Digital Portrait
// This is a portrait of my pet goldfish, Mr Splashy Pants. 
// To make the fish shape, I overlapped a lot of ellipses, 
// quadrilaterals, triangles, and curveVertex shapes.


function setup() {
  createCanvas(600, 600);

  background("#138ab5");

  //draw bubbles
  strokeWeight(1);
  stroke("white");
  noFill("");
  ellipse(492, 204, 80, 80);
  ellipse(480, 234, 40, 40);
  ellipse(436, 127, 60, 60);
  ellipse(483, 70, 70, 70);
  ellipse(521, 292, 50, 50);
  ellipse(516, 12, 86, 86);
  ellipse(406, 510, 62, 62);
  ellipse(332, 539, 90, 90);
  ellipse(379, 593, 69, 69);

  //draw a tail fins shape
  beginShape();
  strokeWeight(2);
  stroke("orange");
  fill("white");
  curveVertex(166, 202);
  curveVertex(140, 180);
  curveVertex(70, 115);
  curveVertex(20, 50);
  curveVertex(29, 111);
  curveVertex(50, 165);
  curveVertex(90, 260);
  curveVertex(60, 325);
  curveVertex(40, 380);
  curveVertex(25, 440);
  curveVertex(22, 510);
  curveVertex(82, 407);
  curveVertex(140, 329);
  endShape(CLOSE);

  //draw a dorsal fin shape
  beginShape();
  strokeWeight(3);
  stroke("orange");
  fill("white");
  curveVertex(210, 225);
  curveVertex(212, 205);
  curveVertex(231, 165);
  curveVertex(375, 147);
  curveVertex(378, 116);
  curveVertex(347, 98);
  curveVertex(361, 175);
  curveVertex(352, 196);
  endShape(CLOSE);

  //draw an anal fin shape
  beginShape();
  strokeWeight(2);
  stroke("orange");
  fill("white");
  curveVertex(215, 270);
  curveVertex(190, 275);
  curveVertex(186, 330);
  curveVertex(219, 386);
  curveVertex(234, 314);
  endShape(CLOSE);

  //draw a ventral fin shape
  beginShape();
  strokeWeight(2);
  stroke("orange");
  fill("white");
  curveVertex(300, 318);
  curveVertex(271, 340);
  curveVertex(241, 406);
  curveVertex(217, 448);
  curveVertex(262, 431);
  curveVertex(295, 397);
  endShape(CLOSE);

  //draw a quadrilateral to connect the tail fins to the body
  strokeWeight(0);
  stroke("orange");
  fill("white");
  quad(189, 202, 139, 180, 129, 350, 189, 300);

  //draw an ellipse with color fill - body shape
  strokeWeight(0);
  stroke("orange");
  fill("white");
  ellipse(200, 250, 80, 100);

  //draw an ellipse with color fill - body shape
  strokeWeight(0);
  stroke("orange");
  fill("white");
  ellipse(245, 260, 80, 130);

  //draw an ellipse with color fill - body shape
  strokeWeight(0);
  stroke("orange");
  fill("white");
  ellipse(275, 270, 100, 160);

  //draw an ellipse with color fill - body shape
  strokeWeight(0);
  stroke("orange");
  fill("white");
  ellipse(350, 300, 200, 250);

  //draw an ellipse with color fill - body shape
  strokeWeight(0);
  stroke("orange");
  fill("white");
  ellipse(390, 330, 220, 220);

  //draw an ellipse with color fill - body shape
  strokeWeight(0);
  stroke("orange");
  fill("white");
  ellipse(430, 380, 190, 170);

  //draw a left eyeball ellipse
  strokeWeight(1);
  stroke("orange");
  fill("white");
  ellipse(500, 365, 80, 80);

  //draw an ellipse with color fill - body shape
  strokeWeight(0);
  stroke("orange");
  fill("white");
  ellipse(460, 410, 150, 150);

  //draw an ellipse with color fill - body shape
  strokeWeight(0);
  stroke("orange");
  fill("white");
  ellipse(480, 430, 120, 120);

  //draw an ellipse with color fill - mouth shape outside
  strokeWeight(3);
  stroke("orange");
  fill("grey");
  ellipse(505, 465, 50, 40);

  //draw an ellipse with color fill - mouth shape inside
  strokeWeight(2);
  stroke("white");
  fill("white");
  ellipse(505, 471, 45, 30);

  //draw a right eyeball ellipse
  strokeWeight(1);
  stroke("grey");
  fill("orange");
  ellipse(400, 365, 80, 80);

  //draw a right eyeball inside ellipse
  strokeWeight(3);
  stroke("grey");
  fill("white");
  ellipse(402, 367, 67, 67);

  //draw a right eyeball dark part
  strokeWeight(2);
  stroke("orange");
  fill("black");
  ellipse(398, 370, 50, 50);

  //draw a right eyeball inside dark part
  strokeWeight(2);
  stroke("white");
  fill("black");
  ellipse(398, 370, 40, 40);

  //draw a right pectoral fin shape
  beginShape();
  strokeWeight(1);
  stroke("white");
  fill("orange");
  curveVertex(360, 400);
  curveVertex(356, 406);
  curveVertex(329, 442);
  curveVertex(316, 493);
  curveVertex(352, 501);
  curveVertex(378, 462);
  curveVertex(360, 400);
  endShape(CLOSE);

  //draw the orange markings shape
  beginShape();
  strokeWeight(1);
  stroke("white");
  fill("orange");
  curveVertex(102, 193);
  curveVertex(154, 205);
  curveVertex(199, 200);
  curveVertex(275, 190);
  curveVertex(380, 176);
  curveVertex(478, 260);
  curveVertex(514, 349);
  curveVertex(488, 382);
  curveVertex(428, 334);
  curveVertex(340, 276);
  curveVertex(236, 259);
  curveVertex(119, 316);
  curveVertex(122, 255);
  curveVertex(102, 193);
  endShape(CLOSE);

  //layer white spots on top of the orange marking shape
  strokeWeight(0);
  stroke("orange");
  fill("white");
  ellipse(336, 276, 80, 60);
  ellipse(248, 257, 30, 45);
  ellipse(179, 280, 50, 50);

  //layer orange spots on top of the white spots on the markings 
  strokeWeight(0);
  stroke("white");
  fill("orange");
  ellipse(386, 289, 30, 20);
  ellipse(281, 260, 39, 20);
  ellipse(214, 262, 37, 24);

  //draw triangle shapes on the tail fins to add interest
  strokeWeight(0);
  stroke("white");
  fill("orange");
  triangle(125, 199, 68, 135, 118, 207);
  triangle(115, 199, 56, 135, 110, 207);
  triangle(118, 222, 79, 181, 121, 238);
  triangle(117, 290, 69, 347, 120, 310);
  triangle(112, 310, 60, 386, 122, 314);
  triangle(122, 307, 90, 369, 139, 306);

  //draw triangle shapes on the dorsal fin to add interest
  strokeWeight(0);
  stroke("white");
  fill("orange");
  triangle(219, 205, 226, 179, 228, 202);
  triangle(237, 202, 238, 175, 245, 202);
  triangle(254, 197, 259, 170, 263, 196);

  //draw triangle shapes on the anal fin to add interest
  strokeWeight(0);
  stroke("white");
  fill("orange");
  triangle(192, 306, 197, 335, 198, 309);
  triangle(206, 313, 209, 349, 212, 316);
  triangle(220, 318, 219, 361, 227, 322);

  //draw triangle shapes on the ventral fin to add interest
  strokeWeight(0);
  stroke("white");
  fill("orange");
  triangle(266, 369, 253, 396, 269, 373);
  triangle(274, 379, 247, 419, 278, 387);
  triangle(283, 393, 265, 413, 288, 398);

  //draw triangle shapes on the pectoral fin to add interest
  strokeWeight(0);
  stroke("white");
  fill("white");
  triangle(357, 397, 335, 450, 369, 404);
  triangle(364, 410, 340, 469, 371, 412);
  triangle(368, 418, 363, 466, 375, 418);


}

function draw() {
  // creates the grey rectangle in the upper left corner
  fill('grey');
  stroke('grey');
  // rect(0, 0, 100, 20);

  // sets the color of the text
  fill('black')
  stroke('black');
  strokeWeight(1);

  // writes the text of the current coordinates in the corner
  // text("x: " + mouseX + " y: " + mouseY, 10, 15);

}