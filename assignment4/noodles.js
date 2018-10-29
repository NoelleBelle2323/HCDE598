function setup() {
	createCanvas(800, 600);


	background(75, 83, 32);

	////////////////////////////////////////////////////////////
	////STATIC BACKGROUND IMAGE (Plate, fork, and instructions)
	///////////////////////////////////////////////////////////

	//outer rim of plate
	push();
	ellipseMode(RADIUS);
	noStroke();
	fill(255);
	ellipse(400, 350, 425, 315);
	pop();

	//plate
	push();
	ellipseMode(RADIUS);
	noStroke(196, 199, 206)
	strokeWeight(1);
	fill(135, 195, 220);
	ellipse(400, 350, 400, 295);
	pop();

	//center depression of plate
	push();
	ellipseMode(CENTER);
	noStroke();
	fill(80, 160, 255);
	ellipse(410, 360, 345, 265);
	pop();


	//fork stem
	push();
	stroke("gray")
	strokeWeight(40)
	line(400, 0, 400, 60)
	pop();

	push();
	stroke(199, 196, 206)
	strokeWeight(30)
	line(400, 0, 400, 60)
	pop();

	//fork nub
	push();
	fill(199, 196, 206);
	stroke("gray");
	strokeWeight(5)
	rect(360, 47, 80, 40, 2)

	//fork prongs
	push();
	fill(199, 196, 206)
	stroke("gray");
	strokeWeight(3);
	for (var i = 365; i < 440; i += 20) {
		triangle(i, 87, i + 10, 87, i + 5, 200);
	}

	//words of encouragement
	push()
	fill("black");
	noStroke();
	textSize(36);
	text("MANGIA!", 20, 40);
	push();
	textSize(10);
	text("(direct your mouse to a point on the screen, then press any key to fill your plate)", 440, 20);
	pop(); 
}

function draw() {}


///////////////////
//SPAGHETTI NOODLE
//////////////////

function drawNoodle(x, y, noodleSize) {


	//Marinara sauce outline of noodle
	noFill();
	stroke(245, 50, 41);
	strokeWeight(30);
	bezier(x, y, x + noodleSize * 0.4, y - 0.16, x + noodleSize * 0.577, y + noodleSize * 0.16, x + noodleSize, y - noodleSize * 0.04);


	//pasta noodle
	noFill();
	stroke(245, 215, 0);
	strokeWeight(20);
	bezier(x, y, x + noodleSize * 0.4, y - 0.16, x + noodleSize * 0.577, y + noodleSize * 0.16, x + noodleSize, y - noodleSize * 0.04);


	//meat Sauce chunks	
	fill("brown");
	stroke(245, 50, 41)
	strokeWeight(10)
	var meatSauce = 4;
	for (var i = 0; i <= meatSauce; i++) {
		var t = i / meatSauce;
		var meatX = bezierPoint(x + noodleSize * 0.12, x + noodleSize * 0.28, x + noodleSize * 0.76, x + noodleSize * 0.88, t);
		var meatY = bezierPoint(y, y - noodleSize * 0.1, y + noodleSize * 0.2, y - noodleSize * 0.04, t);
		ellipse(meatX, meatY, noodleSize * 0.08, noodleSize * 0.08);
	}
}

//whenever a key is pressed on the keyboard, draw a noodle of a random size wherever the mouse is located on the canvas
function keyPressed() {
	var size = random(0, width * 0.8);
	drawNoodle(mouseX, mouseY, size);
} 