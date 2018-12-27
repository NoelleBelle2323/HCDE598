//jcarr88@uw.edu  
//Final Story
//This is a 5-screen weird little story.
//It aspires to use all the things we learned in class
//User interactions are confined to navigating from screens 1--> 5

//-------------------VARIABLES------------------

// Commonly used colors 
var blkColor = 'black';
var whtColor = 'white';
var grnColor = 'green';
var pnkColor = 'pink';
var redColor = 'red';
var yellColor = 'yellow';
var gryColor = 'grey';

//Variables for Bee array (start locations, speed and direction)
//var radius for bee is included in the function
//Only the speed of X varies so they only move horitontally
var xBee = [5, 120, 450, 375, 250];
var yBee = [10, 100, 20, 100, 50];
var speedxBee = [5, 3, 5, 4, 4];
var speedyBee = [1, 1, 1, 1, 1];
var directionxBee = [1, 1, 1, 1, 1];
var directionyBee = [1, 1, 1, 1, 1];

//Variables for small pink flower array
var bx = [170, 200, 225, 250, 275, 300, 325, 350, 375, 400, 450, 475];
var by = [375, 390, 375, 390, 375, 390, 375, 390, 375, 390, 375, 390];

//Variables for crazy eyeball array for (start locations, speed and direction),
//var radius = 40 is included within the function
var coordX = [184, 319];
var coordY = [150, 150];
var speedX = [2, 5];
var speedY = [4, 3];
var directionX = [1, 1];
var directionY = [1, 1];

//Variables used to animate/move various shapes
var yskulleyes = 500
var xPot = 1
var yflowerEye = 130
var yStorm = 1

//	Variable for background eyeball pattern
var patternSize = 40

//-------------------SET UP------------------

function setup() {
	createCanvas(500, 500);
}

//-------------------DRAW---------------------

function draw() {

	//Screen navigation
	if (key == "1") {
		firstScreen(); //Purple flower and bees

	} else if (key == "2") {
		secondScreen(); //Red/pink flowers added

	} else if (key == "3") {
		thirdScreen(); //animationed flower pot and weather change

	} else if (key == "4") {
		fourthScreen(); //crazy eyeballs spring out of the flower

	} else if (key == "5") {
		//background(blkColor);
		fifthScreen(); //Final image is displayed

	} else {
		//Start screen- intro text and curtain
		background(whtColor);
		drawCurtain();
		textSize(30);
		strokeWeight(0);
		fill(blkColor);
		text("This is short story that", 100, 150);
		text("requires a little imagination", 80, 200);
		fill(redColor);
		text("Press '1' to begin", 150, 300);
	}

} // ends draw function


//----------------FUNCTIONS--------------------

//------------SCREEN BY SCREEN and what functions they display

function firstScreen() {
	background(300, 300, 300, 170); //tiny bit of transparency to get the bees vibrating
	drawPurpleflower();
	drawNav();
	drawGrass();
	moveBee();
}

function secondScreen() {
	background(300, 300, 300, 170);
	drawPurpleflower();
	drawNav();
	drawGrass();
	moveBee();
	drawRedflower();
	placeBud();
	//coordTracker();// used to line things up

}

function thirdScreen() {
	background(whtColor);
	drawStorm();
	drawPurpleflower();
	drawNav();
	drawGrass();
	drawRedflower();
	placeBud();
	drawSkullflower();
	drawPot();

}

function fourthScreen() {
	moveEye();
	drawNavwhite();

}

function fifthScreen() {
	background(blkColor);
	drawBackground(); //loop pattern over bkgd
	newSkull(250, 200, 85);
	drawPurpleflower();
	drawRedflower();
	drawHeadflower();

}

//--------- INDIVIDUAL FUNCTIONS--------------

//draws the curtain on opening screen
function drawCurtain() {
	fill(redColor);
	stroke(gryColor);
	strokeWeight(5);
	rect(0, 10, 20, 500);
	rect(480, 10, 20, 500);
	for (var Xtrim = 0; Xtrim < width + 60; Xtrim += 50) {
		ellipse(Xtrim, 5, 50, 50);
	}
}

//Navigation screen 1-4
function drawNav() {
	fill(blkColor)
	noStroke();
	textSize(15);
	text("Press Keys--> 2, --> 3, --> 4", 10, height - 30);
}

//Navigation screen 4
function drawNavwhite() {
	textSize(18);
	strokeWeight(0);
	fill(whtColor);
	text("Press '5' when the screen is mostly black", 120, 460);
}

//Draws grass
function drawGrass() {
	stroke(grnColor);
	strokeWeight(4);
	for (var g = 1; g < 500; g += 5) {
		line(g, 450, g, 375);
	}
}


//Draws Purple flower  
function drawPurpleflower() {
	//Stem
	strokeWeight(10);
	stroke(grnColor);
	line(421, 167, 421, 430);
	//green leaves
	fill(0, 150, 0, 260); //trans green
	strokeWeight(0);
	triangle(480, 15, 455, 80, 400, 60);
	triangle(390, 60, 440, 105, 365, 145);
	triangle(360, 20, 390, 80, 460, 60);
	triangle(475, 140, 450, 50, 400, 100);
	//Purple flower  petal
	fill(100, 0, 256, 230); //trans purple color	
	ellipse(380, 80, 80, 50);
	ellipse(458, 80, 80, 50);
	ellipse(420, 40, 50, 80);
	ellipse(420, 125, 50, 80);
	//center of purple flower
	fill(blkColor);
	stroke(pnkColor);
	strokeWeight(5);
	ellipse(420, 80, 15, 15);
}

//function to draw Bee body/wings 
function drawBee(xBee, yBee, size) {
	var radius = 10;
	stroke(blkColor);
	strokeWeight(1);
	ellipseMode(RADIUS);
	fill(yellColor);
	ellipse(xBee, yBee, radius, radius * 0.5);

	ellipseMode(CENTER);
	fill(blkColor);
	ellipse(xBee, yBee - 4, radius * 0.3, radius);

	ellipseMode(CENTER);
	fill(blkColor);
	ellipse(xBee, yBee + 4, radius * 0.3, radius);

	ellipseMode(CENTER);
	fill(blkColor);
	ellipse(xBee + 8, yBee - 2, radius / 2, radius / 2);
}

//function to make bees fly around
function moveBee() {
	// for loop to access all 6 arrays
	for (var b = 0; b < 6; b++) {

		// Draws several bees at start coordinates from x/y arrays
		drawBee(xBee[b], yBee[b], 20);
		var radius = 10;

		// Moves bees with speed array and gets them to reverse with 
		//conditional statement and direction array
		xBee[b] += speedxBee[b] * directionxBee[b]; //increases value of x
		if ((xBee[b] > width - radius) || (xBee[b] < radius)) {
			directionxBee[b] = -directionxBee[b]; // flips direction
		}
		yBee[b] += speedyBee[b] * directionyBee[b]; //increases value of y
		if ((yBee[b] > height - 250) || (yBee[b] < radius)) {
			directionyBee[b] = -directionyBee[b]; // flips direction 
		}
	}
}

//draws pink flower 
function drawBud(bx, by, scale) {
	strokeWeight(0);
	fill(pnkColor);
	ellipse(bx + 5, by - 8, scale, scale);
	ellipse(bx - 5, by - 8, scale, scale);
	ellipse(bx + 5, by + 8, scale, scale);
	ellipse(bx - 5, by + 8, scale, scale);
	ellipse(bx + 8, by, scale, scale);
	ellipse(bx - 8, by, scale, scale);
	fill(redColor);
	ellipse(bx, by, scale - 1, scale - 1);
}

//adds multiple pink flowers to the sceen
function placeBud() {
	for (f = 0; f < 12; f++) {
		drawBud(bx[f], by[f], 10);
	}
}

// Draws red flower
function drawRedflower() {
	//Stem
	strokeWeight(15);
	stroke(grnColor);
	line(76, 400, 76, 430);
	//Red flower outer petals
	strokeWeight(10);
	stroke(100, 0, 256, 140); //trans purple color
	fill(redColor);
	ellipse(35, 290, 50, 50);
	ellipse(116, 290, 50, 50);
	ellipse(35, 365, 50, 50);
	ellipse(116, 365, 50, 50);
	//Next layer
	strokeWeight(0);
	fill(100, 0, 256, 170); //trans purple color
	ellipse(100, 325, 100, 80);
	ellipse(50, 325, 100, 80);
	ellipse(75, 300, 80, 100);
	ellipse(75, 350, 80, 100);
	//Red flower  inner petals
	fill(255, 0, 0, 220); //trans red color
	ellipse(100, 325, 80, 60);
	ellipse(50, 325, 80, 60);
	ellipse(75, 300, 60, 80);
	ellipse(75, 350, 60, 80);
	//grey petals highlights
	fill(0, 0, 0, 150); //trans grey color
	ellipse(100, 325, 50, 15);
	ellipse(50, 325, 50, 15);
	ellipse(75, 300, 15, 50);
	ellipse(75, 350, 15, 50);
	//center
	fill(blkColor);
	stroke(pnkColor);
	strokeWeight(5);
	ellipse(75, 325, 10, 10);
}

//draw and move the "skull flower" 
function drawSkullflower() {
	noStroke();
	//left eye decor
	fill(grnColor);
	ellipse(183, yskulleyes - 55, 40, 40);
	ellipse(155, yskulleyes - 30, 40, 40);
	ellipse(150, yskulleyes + 10, 40, 40);
	ellipse(166, yskulleyes + 46, 40, 40);
	ellipse(215, yskulleyes - 30, 40, 40);
	ellipse(218, yskulleyes + 9, 40, 40);
	ellipse(205, yskulleyes + 45, 40, 40);
	//right eye decor
	fill(grnColor);
	ellipse(317, yskulleyes - 55, 40, 40);
	ellipse(290, yskulleyes - 30, 40, 40);
	ellipse(285, yskulleyes + 10, 40, 40);
	ellipse(302, yskulleyes + 46, 40, 40);
	ellipse(345, yskulleyes - 35, 40, 40);
	ellipse(353, yskulleyes + 8, 40, 40);
	ellipse(340, yskulleyes + 45, 40, 40);
	//eyesockets
	fill(pnkColor);
	ellipse(185, yskulleyes, 80, 120);
	ellipse(320, yskulleyes, 80, 120);

	//adds little version of skull inside flower
	newSkull(185, yskulleyes - 5, 15);
	newSkull(320, yskulleyes - 5, 15);

	//Move skulleyes
	yskulleyes = yskulleyes - 1;

	if (yskulleyes < 150) {
		yskulleyes = 150;
		strokeWeight(6);
		stroke(grnColor);
		line(185, 210, 245, 350);
		line(270, 350, 320, 210);
	}
}

// Draws and moves flower pot
function drawPot() {
	//flower pot
	strokeWeight(0);
	fill(grnColor);
	rect(xPot - 10, 350, 120, 30);
	rect(xPot, 350, 100, 80);

	//Move pot
	xPot = xPot + 1;

	if (xPot > 210) {
		xPot = 210;
	}
}

// Draws and moves storm
function drawStorm() {

	strokeWeight(0);
	fill(170);
	rect(0, 1, 500, yStorm);
	fill(whtColor);
	ellipse(100, 95, 50, 50);
	ellipse(110, 125, 50, 50);
	ellipse(80, 115, 50, 50);
	ellipse(125, 105, 50, 50);

	//Move storm
	yStorm = yStorm + 1;

	if (yStorm >= 450) {
		yStorm = 450;
	}
}

//scalable skull
function newSkull(x, y, skulSize) {
	//skull shape
	fill(whtColor);
	noStroke();
	ellipse(x, y, skulSize * 3.5, skulSize * 4);
	ellipse(x, y + skulSize * 2, skulSize * 2, skulSize * 2);
	//eyes
	noStroke();
	fill(gryColor);
	ellipse(x - (skulSize / 2), y, skulSize / 2, skulSize);
	ellipse(x + (skulSize / 2), y, skulSize / 2, skulSize);
	//teeth
	fill(blkColor);
	rect(x - skulSize * 0.75, y + skulSize * 2, skulSize * 1.5, skulSize / 3);
	stroke('white');
	strokeWeight(skulSize / 8);
	line(x, y + skulSize * 2, x, y + skulSize * 2.5);
	line(x - skulSize / 2, y + skulSize, x - skulSize / 2, y + skulSize * 2.5);
	line(x + skulSize / 2, y + skulSize, x + skulSize / 2, y + skulSize * 2.5);
	//nose
	noStroke();
	fill(blkColor);
	ellipse(x, y + skulSize, skulSize / 4, skulSize / 2);
}


// Draws flower on final skull and moves 1 eyeball to final spot
function drawHeadflower() {
	fill(pnkColor);
	strokeWeight(0);
	ellipse(220, 43, 80, 30);
	ellipse(280, 43, 80, 30);
	ellipse(250, 50, 40, 80);
	fill(grnColor);
	ellipse(250, 30, 50, 20);

	//move 1 eye to become the eye of the flower
	drawEye(250, yflowerEye + 20, size);
	yflowerEye = yflowerEye - 1;

	if (yflowerEye < 20) {
		yflowerEye = 20;
	}
}

// Draws repeating background pattern
function drawBackground() {
	for (var x = patternSize; x <= width; x += patternSize + 45) {
		for (var y = patternSize; y <= height - 10; y += patternSize) {
			var scale = width / 20;
			fill(gryColor);
			ellipse(x, y, scale * 2, scale);
			fill(blkColor);
			ellipse(x, y, scale - 2, scale - 2);
		}
	}
}
//funtction used for showing x/y coordinates
function coordTracker() {
	fill('grey');
	stroke('grey');
	rect(0, 0, 100, 20);
	//sets the color of the text
	fill(blkColor);
	stroke(blkColor);
	strokeWeight(1);
	//writes the text of the current coordinates in the corner
	text("x: " + mouseX + " y: " + mouseY, 10, 15);
}


//function to draw eyeballs that will bounce
function drawEye(coordX, coordY, size) {
	var radius = 40; // eye radius 
	stroke(blkColor);
	ellipseMode(RADIUS);
	fill(blkColor);
	ellipse(coordX, coordY, radius, radius * 0.5);

	ellipseMode(CENTER);
	fill(whtColor);
	ellipse(coordX, coordY, radius, radius * 0.6);

	ellipseMode(CENTER);
	fill(grnColor);
	ellipse(coordX, coordY, radius * 0.6, radius * 0.6);

	ellipseMode(CENTER);
	fill(blkColor);
	ellipse(coordX, coordY, radius / 5, radius / 5);
}

//function to make eyeballs bouce around
function moveEye() {
	// for loop to access all 6 arrays
	for (var i = 0; i < 2; i++) {
		var radius = 40; // eye radius 
		// Draws two eyes at start coordinates from x/y arrays
		drawEye(coordX[i], coordY[i], radius);

		// Moves eyes with speed array and gets them to reverse with 
		//conditional statement and direction array

		coordX[i] += speedX[i] * directionX[i]; //increases value of x

		if ((coordX[i] > width - radius) || (coordX[i] < radius)) {
			directionX[i] = -directionX[i]; // flips direction
		}

		coordY[i] += speedY[i] * directionY[i]; //increases value of y

		if ((coordY[i] > height - radius) || (coordY[i] < radius)) {
			directionY[i] = -directionY[i]; // flips direction 
		}
	}
}