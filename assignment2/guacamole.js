//jcarr88@uw.edu Simple but festive animation

function setup() {
	createCanvas(500, 500);
	background('white');
	stroke('black');
	strokeWeight(2);
	limeColor = color (0, 250, 1);

}

//var declarations:


//Avocado variables
var AVOColor1 = ('green');
var AVOColor2 = ('brown');
var AVOColor3 = ('black');
var xAVO = 20;
var yAVO = 30;

//Onion variables
var onionColor = ('yellow');
var xonion = 95;
var yonion = 500;
var onionRadius = 60;

//Lime variables
var xlime = 500;
var ylime = 460;
var limeRadius = 40;

//Salt variables
var saltColor = ('white');
var xsalt = 400;
var ysalt = 1;

//Spoon variables
var SpoonColor = ('silver');
var xSpoon = 530;
var ySpoon = 200;


function draw() {

	background('white');

	//Avocado
	fill(AVOColor3);
	ellipse(xAVO + 2, yAVO + 5, 50, 80);
	fill(AVOColor1);
	ellipse(xAVO, yAVO, 50, 80);
	fill(AVOColor2);
	ellipse(xAVO - 5, yAVO, 18, 35);

	//Avocado Movement
	xAVO = xAVO + 1;
	yAVO = yAVO + 1;

	if (yAVO > width / 2) {
		yAVO = width / 2;
		xAVO = 230;
	}


	//Onion
	fill(onionColor);
	ellipse(xonion, yonion, 60);
	ellipse(xonion - 2, yonion - 3, onionRadius - 5);
	ellipse(xonion - 2, yonion - 2, onionRadius / 2);
	ellipse(xonion - 5, yonion - 5, onionRadius / 3);
	ellipse(xonion - 8, yonion - 10, onionRadius / 6);

	//Onion Movement
	xonion = xonion + 1;
	yonion = yonion - 1;

	if (yonion < width / 2) {
		yonion = width / 2;
		xonion = 345;
	}


	//Lime 
	fill(limeColor);
	ellipse(xlime, ylime, limeRadius);
	ellipse(xlime + 10, ylime, limeRadius / 5);

	//Lime Movement
	xlime = xlime - 1;
	ylime = ylime - 1;

	if (ylime < width / 2) {
		ylime = width / 2;
		xlime = 285;
	}


	//Salt
	fill(saltColor);
	rect(xsalt - 15, ysalt + 5, 30, 60);
	fill('silver');
	ellipse(xsalt, ysalt, 40, 20);
	fill('black');
	ellipse(xsalt - 4, ysalt - 3, 2);
	ellipse(xsalt + 4, ysalt - 3, 2);
	ellipse(xsalt, ysalt + 3, 2);
	ellipse(xsalt + 8, ysalt + 3, 2);
	ellipse(xsalt - 8, ysalt + 3, 2);

	//Salt Movement
	xsalt = xsalt - 1
	ysalt = ysalt + 1

	if (xsalt < 175) {
		ysalt = 225;
		xsalt = 175;
	}

	//Spoon
	fill(SpoonColor);
	rect(xSpoon, ySpoon, 10, 100); 
	ellipse(xSpoon + 5, ySpoon, 30, 50);

	//Spoon Movement
	xSpoon = xSpoon - 1;

	if (xSpoon < 120) {
		xSpoon = 120;
		//Text
		textSize(42);
		fill(AVOColor3);
		text('Guacamole', 200, 200);
	}



}