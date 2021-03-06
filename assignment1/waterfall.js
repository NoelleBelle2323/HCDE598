function drawCloud(x, y, opacity) {
	noStroke();
	fill(255, 255, 255, opacity);
	ellipse(x, y, 100, 100);
	ellipse(x + 20, y + 20, 100, 50);
	ellipse(x - 10, y + 5, 140, 60);
}

function drawMist(x, y, opacity) {
	fill(255, 255, 255, opacity);
	ellipse(x, y, 300, 40);
}

function drawBigmist(x, y, opacity) {
	fill(255, 255, 255, opacity);
	ellipse(x, y, 200, 100);
}

function setup() {
	createCanvas(720, 480);
	background(137, 171, 169);

	//clouds
	drawCloud(100, 100, 200);
	drawCloud(400, 50);
	drawCloud(675, 60, 100);


	//trees
	noStroke();
	fill(56, 94, 57, 200);
	triangle(550, 310, 578, 255, 606, 310);
	fill(70, 107, 71, 180);
	triangle(600, 330, 610, 310, 620, 330);
	triangle(50, 200, 60, 100, 70, 201);
	triangle(320, 210, 330, 160, 330, 210);
	triangle(500, 300, 510, 250, 520, 301);
	fill(18, 69, 40, 200);
	triangle(330, 210, 330, 160, 340, 210);
	triangle(400, 210, 415, 180, 430, 210);
	triangle(75, 200, 85, 130, 95, 200);
	triangle(70, 200, 100, 130, 130, 200);

	//top mist
	drawMist(10, 145, 80);
	drawMist(250, 205, 75);
	drawMist(600, 300, 75);

	//cliffs
	noStroke();
	fill(171, 170, 169);
	beginShape();
	vertex(0, 150);
	vertex(200, 175);
	vertex(200, 480);
	vertex(0, 480);
	endShape(CLOSE);


	fill(171, 170, 169);
	beginShape();
	vertex(300, 200);
	vertex(500, 210);
	vertex(500, 480);
	vertex(300, 480);
	endShape(CLOSE);


	fill(171, 170, 169);
	beginShape();
	vertex(500, 300);
	vertex(600, 310);
	vertex(600, 480);
	vertex(500, 480);
	endShape(CLOSE);


	fill(171, 170, 169);
	beginShape();
	vertex(600, 330);
	vertex(720, 340);
	vertex(720, 480);
	vertex(600, 480);
	endShape(CLOSE);


	//waterfall
	fill(133, 200, 235);
	beginShape();
	vertex(200, 225);
	vertex(350, 235);
	vertex(350, 480);
	vertex(200, 480);
	endShape(CLOSE);


	//mist
	drawMist(0, 470, 100);
	drawMist(30, 460, 100);
	drawMist(50, 470, 100);
	drawMist(100, 460, 100);
	drawMist(300, 450, 100);
	drawMist(320, 460, 100);
	drawMist(400, 455, 100);
	drawMist(500, 460, 100);
	drawMist(550, 450, 100);
	drawMist(600, 470, 100);
	drawMist(360, 420, 100);

	drawBigmist(0, 440, 100);
	drawBigmist(100, 420, 75);
	drawBigmist(200, 430, 100);
	drawBigmist(500, 420, 150);
	drawBigmist(650, 425, 100);
	drawBigmist(370, 455, 100);

	//details
	fill(94, 94, 89);
	triangle(50, 200, 55, 300, 60, 200);
	triangle(70, 250, 75, 350, 80, 250);
	triangle(90, 220, 200, 210, 200, 230);

	triangle(350, 202, 355, 300, 360, 203);
	triangle(370, 250, 375, 400, 380, 250);
	triangle(500, 350, 400, 365, 500, 370);

	triangle(500, 310, 560, 320, 500, 320);

	//waterfall details
	fill(174, 233, 235);
	beginShape();
	vertex(210, 235);
	vertex(220, 320);
	vertex(230, 240);
	vertex(233, 260);
	vertex(240, 245);
	vertex(255, 400);
	vertex(275, 240);
	vertex(295, 330);
	vertex(305, 242);
	vertex(315, 420);
	vertex(335, 242);
	endShape();


	//close tree right
	fill(94, 76, 55);
	rect(688, 410, 24, 70);
	fill(18, 69, 40);
	triangle(615, 320, 700, 70, 700, 300);
	fill(28, 107, 62);
	triangle(700, 300, 700, 70, 785, 320);
	fill(18, 69, 40);
	triangle(580, 440, 700, 300, 700, 420);
	fill(28, 107, 62);
	triangle(700, 420, 700, 300, 820, 460);
}

function draw() {

}