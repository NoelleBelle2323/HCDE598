function setup() {

	createCanvas(500, 500);
	background('yellow');

	//Ancestor-self portrait, jcarr88@uw.edu

	// Skull shape
	stroke('white');
	strokeWeight(0);
	fill('white');
	ellipse(250, 200, 300, 400);
	rect(190, 350, 135, 120);

	//left eye decor
	fill('green');
	ellipse(183, 95, 40, 40);
	ellipse(155, 120, 40, 40);
	ellipse(150, 160, 40, 40);
	ellipse(166, 196, 40, 40);

	ellipse(215, 120, 40, 40);
	ellipse(218, 159, 40, 40);
	ellipse(205, 195, 40, 40);

	//right eye decor
	fill('green');
	ellipse(317, 95, 40, 40);
	ellipse(290, 120, 40, 40);
	ellipse(285, 160, 40, 40);
	ellipse(302, 196, 40, 40);

	ellipse(345, 115, 40, 40);
	ellipse(353, 158, 40, 40);
	ellipse(340, 195, 40, 40);

	//eyesockets
	fill(179);
	ellipse(185, 150, 80, 120);
	ellipse(320, 150, 80, 120);

	fill('black');
	arc(185, 150, 80, 120, 180, PI);
	arc(320, 150, 80, 120, 180, PI);
	//Question? Whats the logical way to think 
	//about these arc numbers??

	//Nose and freckles
	fill('black');
	strokeWeight(0);
	triangle(260, 200, 240, 280, 280, 280);
	ellipse(260, 276, 40, 40);

	ellipse(255, 95, 15, 15);
	ellipse(330, 300, 15, 15);

	//teeth
	strokeWeight(0);
	fill('black');
	rect(210, 350, 20, 80);
	rect(235, 350, 20, 80);
	rect(260, 350, 20, 80);
	rect(285, 350, 20, 80);

	fill('white');
	rect(210, 385, 95, 10);


	//Red flower outer petals
	strokeWeight(10);
	stroke(100, 0, 256, 140); //trans purple color
	fill('red');
	ellipse(35, 290, 50, 50);
	ellipse(116, 290, 50, 50);
	ellipse(35, 365, 50, 50);
	ellipse(116, 365, 50, 50);

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

	//Red flower  center grey highlights
	fill(0, 0, 0, 150); //trans grey color
	ellipse(100, 325, 50, 15);
	ellipse(50, 325, 50, 15);
	ellipse(75, 300, 15, 50);
	ellipse(75, 350, 15, 50);

	fill('black');
	stroke('pink');
	strokeWeight(5);
	ellipse(75, 325, 20, 20);
	point(75, 325);

	//Purple flower  leaf
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

	fill('white');
	stroke('pink');
	strokeWeight(8);
	ellipse(420, 80, 40, 40);
	fill('black');
	point(420, 80);

	//Orange flower  
	fill('orange');
	strokeWeight(0);
	ellipse(220, 23, 60, 30);
	ellipse(280, 23, 60, 30);
	ellipse(250, 30, 30, 60);
	fill('blue');
	ellipse(250, 10, 40, 20);

	//Text
	textSize(18);
	fill('blue');
	text('JC', 465, 485);
	strokeWeight(5);
	stroke('pink');
	line(465, 460, 485, 460);


}