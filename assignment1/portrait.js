function setup() {
	createCanvas(400, 600);
	background(220)

	//draw hands
	fill('beige')
	noStroke()
	ellipse(330, 390, 30, 40);
		ellipse(69, 390, 30, 40);
	fill(220)
	ellipse(73, 402, 10, 20);
	ellipse(326, 402, 10, 20);

	
	//draw mumu
	noStroke()
	fill('yellow');
	//main
	quad(150, 245, 250, 245, 300, 520, 100, 520);
	//left sleeve
	quad(150, 245, 150, 300, 100, 400, 50, 370);
	//right sleeve
	quad(250, 245, 250, 300, 300, 400, 350, 370);

		//polkadots
	fill('red');
	noStroke()
	ellipse(170, 290, 40);
	ellipse(240, 270, 40);
	ellipse(220, 335, 40);
	ellipse(95, 350, 40);
	ellipse(290, 330, 40);
	ellipse(160, 370, 40);
	ellipse(210, 420, 40);
	ellipse(140, 460, 40);
	ellipse(250, 480, 40);
	angleMode(DEGREES);
	arc(115, 300, 40, 40, 289, 151, OPEN);
	
	//collar
	fill('orange')
	triangle(200, 210, 170, 255, 150, 245);
	fill('green')
	triangle(200, 210, 190, 260, 170, 255);
	//center collar
	fill('orange')
	triangle(200, 210, 210, 260, 190, 260);
	fill('green')
	triangle(200, 210, 230, 255, 210, 260);
	fill('orange')
	triangle(200, 210, 250, 245, 230, 255);

	//draw hair
	strokeWeight(1);
	stroke('black')
	noFill();
	beginShape();
	curveVertex(200, 136);
	curveVertex(200, 136);
	curveVertex(200, 120);
	curveVertex(190, 90);
	curveVertex(185, 80);
	curveVertex(185, 80);
	endShape();
	beginShape();
	curveVertex(200, 136);
	curveVertex(200, 136);
	curveVertex(205, 125);
	curveVertex(210, 100);
	curveVertex(225, 80);
	curveVertex(225, 80);
	endShape();

	//draw ears
	fill('beige');
	stroke('beige');
	ellipse(233, 184, 8, 18);
	ellipse(167, 184, 8, 18);

	//draw head
	fill('beige');
	stroke('beige');
	ellipse(200, 190, 60, 80);
	ellipse(200, 175, 50, 80);
	ellipse(200, 200, 70, 60);
	ellipse(200, 215, 40);

	//draw eyes
	//left
	fill('white');
	stroke('gray')
	strokeWeight(0.5)
	ellipse(188, 180, 15, 8);
	fill('black');
	ellipse(188, 180, 5, 5);
	//right
	fill('white');
	stroke('gray')
	strokeWeight(0.5)
	ellipse(212, 180, 15, 8);
	fill('black');
	ellipse(212, 180, 5, 5);

	//draw mouth
	strokeWeight(1);
	stroke('black')
	noFill();
	beginShape();
	curveVertex(188, 210);
	curveVertex(188, 210);
	curveVertex(199, 212);
	curveVertex(203, 212);
	curveVertex(214, 210);
	curveVertex(214, 210);
	endShape();
	strokeWeight(1.5);
	stroke('gray')
	noFill();
	beginShape();
	curveVertex(196, 214);
	curveVertex(196, 214);
	curveVertex(199, 215);
	curveVertex(201, 215);
	curveVertex(204, 214);
	curveVertex(204, 214);
	endShape();

	//draw stubble
	fill('black');
	noStroke();
	ellipse(212, 228, 1);
	ellipse(190, 226, 1);
	ellipse(197, 227, 1);
	ellipse(202, 223, 1);
	ellipse(210, 224, 1);
	ellipse(196, 222, 1);
	ellipse(199, 230, 1);
	ellipse(204, 228, 1);

	//draw nose
	fill('gray');
	noStroke();
	ellipse(196, 200, 6, 3);
	ellipse(204, 200, 6, 3);
	angleMode(DEGREES);
	//nostrils
	noFill()
	strokeWeight(0.75)
	stroke('gray')
	arc(195, 198, 8, 6, 130, 240, OPEN);
	arc(205, 198, 8, 6, 300, 60, OPEN);

	//draw bow
	fill('red');
	noStroke()
	quad(160, 145, 245, 125, 245, 145, 160, 125);
	ellipse(160, 135, 30, 20);
	ellipse(245, 135, 30, 20);
	fill(220);
	noStroke()
	ellipse(160, 135, 20, 10);
	triangle(160, 130, 181, 135, 160, 140);
	ellipse(245, 135, 20, 10);
	triangle(224, 135, 245, 130, 245, 140);

	//draw legs
	fill('beige');
	stroke('beige');
	quad(150, 520, 180, 520, 170, 560, 140, 560);
	quad(220, 520, 250, 520, 260, 560, 230, 560);

	//draw feet
	fill('white');
	stroke('white');
	ellipse(145, 560, 60, 30);
	ellipse(255, 560, 60, 30);

}

function draw() {

}