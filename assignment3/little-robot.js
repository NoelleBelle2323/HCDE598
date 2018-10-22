var x1 = 250
var y1 = 200
radius1 = 50
var shapeWidth = 30
var shapeHeight = 20
var messageScreen1 = "Do you want to play with little robot? \n y/n"
var messageScreen2 = "You made little robot sad. \n To make him happy, press y"
var messageScreen3 = "Yay! You made little robot very happy. \n Hold and click to go play."

function setup() {
	createCanvas(500, 500);
}

function draw() {
	drawScreen1();

	if (key == "n") {
		drawScreen2();
	} else if (key == 'y') {
		drawScreen3();
	}

	if (mouseIsPressed) {
		drawScreen4();
	}

	// use this function to draw the first screen
	function drawScreen1() {

		background('#fce176');
		noStroke();
		textAlign(CENTER)
		text(messageScreen1, 250, 350);

		//head
		noStroke();
		fill('#AF1C63');
		ellipse(x1, y1, radius1, radius1);

		//eyes
		fill('#E1E358');
		ellipse(x1 - 10, y1 - 5, radius1 - 30, radius1 - 30);
		fill("white")
		ellipse(x1 - 10, y1 - 5, radius1 - 45, radius1 - 45);

		//neck
		stroke('#0E3157');
		strokeWeight(2);
		line(x1, y1 + 25, x1, y1 + 50);

		//body
		noStroke();
		fill('#2F2CDC');
		rect(x1 - 15, y1 + 30, shapeWidth, shapeHeight);
		fill("#E358E3")
		rect(x1 - 15, y1 + 40, shapeWidth, shapeHeight);

		//legs
		stroke('#0E3157');
		strokeWeight(2);
		line(x1 - 5, y1 + 70, x1 - 5, y1 + 61);
		line(x1 + 5, y1 + 70, x1 + 5, y1 + 61);


	}

	// use this function to draw the second screen
	function drawScreen2() {
		background('#fce176');
		noStroke();
		textAlign(CENTER)
		text(messageScreen2, 250, 350);

		//head
		noStroke();
		fill('#AF1C63');
		ellipse(x1, y1, radius1, radius1);

		//eyes
		fill('#E1E358');
		ellipse(x1 - 10, y1 - 5, radius1 - 30, radius1 - 30);
		fill("white")
		ellipse(x1 - 10, y1 - 5, radius1 - 45, radius1 - 45);

		//neck
		stroke('#0E3157');
		strokeWeight(2);
		line(x1, y1 + 25, x1, y1 + 50);

		//body
		noStroke();
		fill('#2F2CDC');
		rect(x1 - 15, y1 + 30, shapeWidth, shapeHeight);
		fill("#E358E3")
		rect(x1 - 15, y1 + 40, shapeWidth, shapeHeight);

		//legs
		stroke('#0E3157');
		strokeWeight(2);
		line(x1 - 5, y1 + 70, x1 - 5, y1 + 61);
		line(x1 + 5, y1 + 70, x1 + 5, y1 + 61);

		//mouth
		stroke("white");
		noFill();
		arc(x1, y1 + 18, 10, 10, PI, 0);
	}

	// use this function to draw the third screen
	function drawScreen3() {
		background('#fce176');
		noStroke();
		textAlign(CENTER)
		text(messageScreen3, 250, 350);

		//head
		noStroke();
		fill('#AF1C63');
		ellipse(x1, y1, radius1, radius1);

		//eyes
		fill('#E1E358');
		ellipse(x1 - 10, y1 - 5, radius1 - 30, radius1 - 30);
		fill("white")
		ellipse(x1 - 10, y1 - 5, radius1 - 45, radius1 - 45);

		//neck
		stroke('#0E3157');
		strokeWeight(2);
		line(x1, y1 + 25, x1, y1 + 50);

		//body
		noStroke();
		fill('#2F2CDC');
		rect(x1 - 15, y1 + 30, shapeWidth, shapeHeight);
		fill("#E358E3")
		rect(x1 - 15, y1 + 40, shapeWidth, shapeHeight);

		//legs
		stroke('#0E3157');
		strokeWeight(2);
		line(x1 - 5, y1 + 70, x1 - 5, y1 + 61);
		line(x1 + 5, y1 + 70, x1 + 5, y1 + 61);
	}

	// use this function to draw the fourth screen
	function drawScreen4() {
		background('#fce176');
		noStroke();


		//head
		noStroke();
		fill('#AF1C63');
		ellipse(x1, y1, radius1, radius1);

		//eyes
		fill('#E1E358');
		ellipse(x1 - 10, y1 - 5, radius1 - 30, radius1 - 30);
		fill("white")
		ellipse(x1 - 10, y1 - 5, radius1 - 45, radius1 - 45);

		//neck
		stroke('#0E3157');
		strokeWeight(2);
		line(x1, y1 + 25, x1, y1 + 50);

		//body
		noStroke();
		fill('#2F2CDC');
		rect(x1 - 15, y1 + 30, shapeWidth, shapeHeight);
		fill("#E358E3")
		rect(x1 - 15, y1 + 40, shapeWidth, shapeHeight);

		//legs
		stroke('#0E3157');
		strokeWeight(2);
		line(x1 - 5, y1 + 70, x1 - 5, y1 + 61);
		line(x1 + 5, y1 + 70, x1 + 5, y1 + 61);

		//arms
		line(x1 - 15, y1 + 40, x1 - 30, y1 + 25);
		line(x1 + 15, y1 + 40, x1 + 30, y1 + 25);
	}
}