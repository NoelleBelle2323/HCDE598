function setup() {
	createCanvas(600, 600);
	background(204, 255, 255);


	//yellow circle
	fill(255, 207, 60);
	stroke(255, 207, 60)
	ellipse(300, 300, 545, 545);

	//Owl wings right
	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(415, 375, 185, 282);

	//Owl wings right texture
	stroke(2, 110, 182);
	c = color(2, 110, 182);
	fill(c);
	ellipse(415, 375, 145, 240);



	//Owl wings left
	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(235, 375, 185, 282);

	//Owl wings left texture
	stroke(2, 110, 182);
	c = color(2, 110, 182);
	fill(c);
	ellipse(235, 375, 140, 230);



	//Owlbody
	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(325, 350, 270, 400);




	//owlbody front
	stroke(146, 238, 250);
	c = color(2, 110, 182);
	fill(c);
	ellipse(325, 350, 240, 350);


	//owl body texture1starts here
	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(260, 350, 25, 25);

	//owl body texture1bottom
	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(300, 350, 25, 25);

	//owl body texture1bottom
	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(340, 350, 25, 25);

	//owl body texture1bottom
	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(380, 350, 25, 25);



	//owl body texture1bottom cover
	stroke(2, 110, 182);
	c = color(2, 110, 182);
	fill(c);
	ellipse(260, 345, 25, 25);

	//owl body texture1bottom cover
	stroke(2, 110, 182);
	c = color(2, 110, 182);
	fill(c);
	ellipse(300, 345, 25, 25);

	//owl body texture1bottom cover
	stroke(12, 110, 182);
	c = color(2, 110, 182);
	fill(c);
	ellipse(340, 345, 25, 25);

	//owl body texture1bottom cover end here
	stroke(2, 110, 182);
	c = color(2, 110, 182);
	fill(c);
	ellipse(380, 345, 25, 25);



	//owl body texture2starts here
	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(290, 395, 25, 25);

	//owl body texture2bottom
	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(330, 395, 25, 25);

	//owl body texture2bottom
	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(370, 395, 25, 25);



	//owl body texture2bottom cover
	stroke(2, 110, 182);
	c = color(2, 110, 182);
	fill(c);
	ellipse(290, 390, 25, 25);

	//owl body texture2bottom cover
	stroke(2, 110, 182);
	c = color(2, 110, 182);
	fill(c);
	ellipse(330, 390, 25, 25);

	//owl body texture2 ends here bottom cover
	stroke(12, 110, 182);
	c = color(2, 110, 182);
	fill(c);
	ellipse(370, 390, 25, 25);




	//owl body texture3top starts here
	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(310, 440, 25, 25);

	//owl body texture3top
	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(350, 440, 25, 25);

	//owl body texture 3 topcover
	stroke(2, 110, 182);
	c = color(2, 110, 182);
	fill(c);
	ellipse(310, 435, 25, 25);

	//owl body texture3topcover
	stroke(2, 110, 182);
	c = color(2, 110, 182);
	fill(c);
	ellipse(350, 435, 25, 25);


	//owl leg right
	stroke(255, 158, 0);
	c = color(255, 158, 0);
	fill(c);
	ellipse(300, 552, 15, 25);

	//owl leg right
	stroke(255, 158, 0);
	c = color(255, 158, 0);
	fill(c);
	ellipse(310, 552, 15, 25);

	//owl leg right
	stroke(255, 158, 0);
	c = color(255, 158, 0);
	fill(c);
	ellipse(320, 552, 15, 25);



	//owl leg left
	stroke(255, 158, 0);
	c = color(255, 158, 0);
	fill(c);
	ellipse(340, 552, 15, 25);

	//owl leg left
	stroke(255, 158, 0);
	c = color(255, 158, 0);
	fill(c);
	ellipse(350, 552, 15, 25);

	//owl leg left
	stroke(255, 158, 0);
	c = color(255, 158, 0);
	fill(c);
	ellipse(360, 552, 15, 25);

	angleMode(DEGREES)
	rotate(-6);



	// Ear right
	stroke(50, 217, 255);
	c = color(50, 217, 255);
	fill(c);
	triangle(340, 100, 400, 120, 380, 70);


	// Ear right
	stroke(50, 217, 255);
	c = color(50, 217, 255);
	fill(c);
	triangle(185, 120, 252, 100, 215, 65);



	// Ear right texture
	stroke(50, 217, 255);
	c = color(2, 110, 182);
	fill(c);
	triangle(340, 110, 390, 120, 377, 80);


	// Ear right texture
	stroke(50, 217, 255);
	c = color(2, 110, 182);
	fill(c);
	triangle(187, 130, 240, 100, 216, 75);

	//owlface left
	stroke(102, 204, 255);
	c = color(50, 217, 255);
	fill(c);
	ellipse(240, 200, 180, 200);

	//owl face right
	c = color(50, 217, 255);
	fill(c);
	ellipse(350, 200, 180, 200);

	stroke(146, 238, 250);
	c = color(146, 238, 250);
	fill(c);
	ellipse(240, 200, 150, 180);

	c = color(146, 238, 250);
	fill(c);
	ellipse(350, 200, 150, 180);


	//owl eyes left
	stroke(102, 204, 255);
	c = color(253, 253, 253);
	fill(c);
	ellipse(230, 180, 100, 100);

	//owl eyes right
	stroke(102, 204, 255);
	c = color(253, 253, 253);
	fill(c);
	ellipse(360, 180, 100, 100);

	//owl eyes left black
	stroke(102, 204, 255);
	c = color(0, 0, 0);
	fill(c);
	ellipse(240, 180, 60, 60);

	//owl eyes right black
	stroke(102, 204, 255);
	c = color(0, 0, 0);
	fill(c);
	ellipse(350, 180, 60, 60);

	//owl eyes left black
	stroke(102, 204, 255);
	c = color(255, 255, 255);
	fill(c);
	ellipse(230, 170, 15, 15);

	//owl eyes right black
	stroke(102, 204, 255);
	c = color(255, 255, 255);
	fill(c);
	ellipse(340, 170, 15, 15);


	//owl nose triangle

	stroke(255, 158, 0);
	c = color(255, 158, 0);
	fill(c);
	ellipse(300, 250, 70, 30);

	c = color(255, 158, 0);
	fill(c)
	triangle(265, 250, 335, 250, 300, 300);

	strokeWeight(3);
	stroke(238, 128, 62);

	line(300, 290, 275, 250);


}




function draw() {

}