//Scaled Skull and weird eyes, jcarr88@uw.edu

// fixed colors
  var myColor = 'black';
  var mySkull = 'white';

// Set up
function setup() {
	createCanvas(700, 500);
	background(myColor);
}
//*************
//This sketch has two options.
//with key pressing you can draw the skull
//with mouse pressing you can draw the red eye shape
//The skull has a problem with only rendering 
//on a slope, so I experimented with how to fix this 
//with the less complicated eye shape
//**************

//User instructions in the draw function:
function draw() {
	textSize(20);
	strokeWeight(0);
	fill('red');
	text("Click your mouse for 'eyes' and keyboard for 'skulls'", width / 9, height - 10);
}

//INTERACTIONS 
//Use the key board to draw the skull.
//In the random paramenters, I used a max of 
//200 so the skull rendered on the canvas
function keyPressed() {
	var size = random(0, 200);
	skull(mouseX, mouseY, size);
}
// Use the mouse to draw a weird eye.
function mouseClicked() {
	var size = random(0, width / 5);    
	drawEye(mouseX, mouseY, size);
}


// FUNCTIONS
//function for the skull being drawn.  
//all values are relative to a single value defined as skulSize

function skull(x, y, skulSize) {

	// Skull shape
	stroke(mySkull);
	fill(mySkull);
	ellipse(skulSize * 2.4, skulSize * 2, skulSize * 2.5, skulSize * 4);
	rect(skulSize * 1.7, skulSize * 3.1, skulSize * 1.5, skulSize  * 1.6);

	//eyesockets
	fill(179);
	ellipse(skulSize * 1.8, skulSize * 1.4, skulSize * 0.6, skulSize);
	ellipse(skulSize * 3, skulSize * 1.4, skulSize * 0.6, skulSize);

	//Nose 
	fill(myColor);
	strokeWeight(0);
	ellipse(skulSize * 2.4, skulSize * 2.4, skulSize * 0.2, skulSize * 0.6);

	//teeth
	fill(myColor);
	rect(skulSize * 2, skulSize * 3.6, skulSize, skulSize);
	fill(mySkull);
	strokeWeight(skulSize / 9);
	line(skulSize * 2, skulSize * 4.1, skulSize * 3, skulSize * 4.1);
	line(skulSize * 2.2, skulSize * 3.6, skulSize * 2.2, skulSize * 4.6);
	line(skulSize * 2.5, skulSize * 3.6, skulSize * 2.5, skulSize * 4.6);
	line(skulSize * 2.8, skulSize * 3.6, skulSize * 2.8, skulSize * 4.6);
}
//function for the eye being drawn.  
//all values are relative a centered point which started at 50, 50
function drawEye(x, y, scale) {

	strokeWeight(0)

	ellipseMode(RADIUS); // Set ellipseMode to RADIUS
	fill('red');
	ellipse(x, y, scale, scale * 0.5);

	ellipseMode(CENTER); //next smallest circle
	fill('orange');
	ellipse(x, y, scale, scale * 0.8);

	ellipseMode(CENTER); //next smallest circle
	fill('yellow');
	ellipse(x, y, scale * 0.8, scale * 0.7);

	ellipseMode(CENTER); //next smallest circle
	fill('blue'); 
	ellipse(x, y, scale * 0.6, scale * 0.5);

	ellipseMode(CENTER); //next smallest circle 
	fill('white'); 
	ellipse(x, y, scale * 0.3, scale * 0.2);

	ellipseMode(CENTER); //smallest circle
	fill('black');
	ellipse(x, y, scale / 9, scale / 9);
}