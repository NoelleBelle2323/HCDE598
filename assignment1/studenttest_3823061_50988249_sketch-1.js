var gold;
var purple;
var blues;
var pink;
var white;
var grey;

function setup() {
  gold = color(226, 212, 9);
	purple = color(193, 121, 247);
	blues = color(152, 211, 255);
	pink = color(255, 152, 246);
	white = color(255, 255, 255);
	grey = color(201, 210, 218);
	
	createCanvas(600, 600);
	background(blues);	
}

function draw() {
	body();
	topOfCup();
	bottomOfCup();
	face();
}

function topOfCup() {
	fill(gold);
	ellipse(300, 170, 200, 50);
	fill(grey);
	ellipse(300, 170, 190, 40);
	triangle(240, 180, 270, 180, 255, 210);
	
}

function bottomOfCup() {
	fill(gold);
	ellipse(300, 390, 150, 20);
	
	fill(purple);
	quad(340, 350, 260, 350, 240, 390, 360, 390);
	
	var isPink = true;
	var xStart = 260;
	for(i = 0; i < 4; i++){
		if(isPink) {
			fill(pink);
			triangle(xStart, 350, xStart + 20, 350, xStart + 10, 390);
		}
		else{
			fill(blues);
			triangle(xStart, 350, xStart + 20, 350, xStart + 10, 370);
		}
		xStart += 20;
		isPink = !isPink;
	}
	
	fill(gold);
	ellipse(300, 350, 115, 10);
	
}

function body() {
	noStroke();
	fill(white);
	quad(210, 160, 390, 160, 350, 350, 250, 350); 
	
}

function face() {
	eyes(268, 240);
	eyes(328, 240);
	
	strokeWeight(1);
	line(268, 300, 280, 320);
	line(280, 320, 315, 320);
	line(315, 320, 328, 300);
	
	noStroke();
	fill(gold);
	ellipse(300, 280, 30, 40);
	fill(white);
	ellipse(300, 280, 20, 30);
	rect(280, 260, 15, 40);
}

function eyes(xStart, yStart) {
	stroke('black');
	strokeWeight(3);
	fill(white);
	ellipse(xStart, yStart, 30, 50);
	
	fill('black');
	ellipse(xStart, yStart, 10, 30);
	
}