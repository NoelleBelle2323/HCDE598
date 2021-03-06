//jcarr88@uw.edu  Learning interactions: Plantcare 101

// declare variables
var myColor = "black";
var liveColor = "green";
var deadColor = "brown";
var xStem = 290;
var yStem = 375;

// messages on screens
var firstMessage1 = "Plant Care 101:";
var firstMessage2 = "First, they need water. Press '2' to water...";
var firstMessage3 = "Or press the '3' ... ";
var secondMessage = "Nice! This plant looks healthy.";
var secondMessage2 = "Press '3', if you forget to water.";
var thirdMessage = "Eek! Let's fix those leaves.";
var thirdMessage2 = "Press '4'";
var fourthMessage = "Use your mouse to add new leaves!";
var flowerMessage = "Press 'f', for a bloom.";
// function variation
var addingLeavesMode = true;

function setup() {
	createCanvas(600, 500);

}

function draw() {

	//Interactions:
	if (key == "1") {
		firstScreen();
		addingLeavesMode = false;
		plantPot();
	} else if (key == "2") {
		secondScreen();
		addingLeavesMode = false;
		plantPot();
	} else if (key == "3") {
		thirdScreen();
		addingLeavesMode = false;
		plantPot();
	} else if (key == "4") {
		fourthScreen();
		addingLeavesMode = true;
		plantPot();
	} else if (key == "f") {
		addFlower();
  } else {
		background('white');
		addingLeavesMode = false;
		plantPot();
		textSize(30);
		strokeWeight(0);
		fill('red');
		text("Press 1 to begin", 195, 170);
		// moving stem
		stroke(liveColor);
		strokeWeight(10);
		line(xStem, 375, xStem, yStem - 8);
		yStem = yStem - 1;
		if (yStem < 190) {
			yStem = 190;
		}
	}

	function plantPot() {
		strokeWeight();
		fill(myColor);
		rect(260, 380, 60, 55);
		ellipse(290, 375, 80, 20);
		fill(deadColor);
		stroke(deadColor);
		ellipse(290, 375, 50, 10);
	}

	function addFlower() { 
	  fill('orange');
	  strokeWeight(0);
	  ellipse(270, 150, 60, 20);
	  ellipse(310, 150, 60, 20);
	  ellipse(290, 150, 30, 60);
	  fill('blue');
	  ellipse(290, 150, 35, 20);
	}

	function firstScreen() {
		background('white');

		//Plant and Leaves
		stroke(liveColor);
		strokeWeight(10);
		line(290, 375, 290, 190);
		fill(liveColor);
		ellipse(230, 190, 75, 10);
		ellipse(350, 190, 75, 10);
		ellipse(290, 160, 10, 20);
		ellipse(240, 270, 60, 10);
		ellipse(340, 270, 60, 10);

		//first screen text
		textSize(40);
		strokeWeight(0);
		text(firstMessage1, 10, 50);
		textSize(20);
		text(firstMessage2, 10, 75);
		fill(deadColor);
		text(firstMessage3, 10, 250);

		// Navigation screen 1
		fill(myColor);
		noStroke();
		textSize(15);
		text("Press Keys 2 or 3", 10, height - 50);

	}

	function secondScreen() {
		background('white');

		//Plant and Leaves
		stroke(liveColor);
		strokeWeight(10);
		line(290, 375, 290, 190);
		fill(liveColor);
		ellipse(230, 190, 75, 10);
		ellipse(350, 190, 75, 10);
		ellipse(290, 160, 10, 20);
		ellipse(230, 230, 80, 10);
		ellipse(350, 230, 80, 10);
		ellipse(240, 270, 60, 10);
		ellipse(340, 270, 60, 10);
		ellipse(250, 310, 40, 10);
		ellipse(330, 310, 40, 10);

		//Second screen text
		textSize(30);
		strokeWeight(0);
		text(secondMessage, 10, 50);
		textSize(20);
		fill(liveColor);
		text(flowerMessage, 10, 75);
		fill(deadColor);
		text(secondMessage2, 10, 350);


		// Navigation screen 2
		fill(myColor);
		noStroke();
		textSize(15);
		text("Press Keys 3 or f", 10, height - 50);
	}

	function thirdScreen() {
		background('white');

		//Plant and Leaves
		stroke(deadColor);
		strokeWeight(10);
		line(290, 375, 290, 190);
		fill(deadColor);
		ellipse(230, 190, 60, 10);
		ellipse(290, 160, 10, 20);
		ellipse(350, 230, 60, 10);
		ellipse(240, 270, 60, 10);
		ellipse(250, 310, 40, 5);
		ellipse(330, 310, 40, 5);

		//Third screen text
		textSize(24);
		noStroke();
		text(thirdMessage, 10, 50);
		fill(liveColor);
		textSize(24);
		text(thirdMessage2, 325, 50);

		// Navigation screen 3
		fill(myColor);
		noStroke();
		textSize(15);
		text("Press Keys 1, 2 or 4", 10, height - 50);
	}

	function fourthScreen() {
		//overlays the 3rd screen b/c there is no background for 4th.
		// Note: It will also overlay other screens after 1st play.

		//Plant Stem
		stroke(liveColor);
		strokeWeight(10);
		line(290, 375, 290, 190);

		//Fourth screen text
		noStroke(0);
		textSize(24);
		fill(liveColor);
		text(fourthMessage, 100, 100);

		// Navigation screen 4
		noStroke(0);
		textSize(20);
		text("The end", 450, height - 50);

		//White blocking overlays
		fill('white');
		rect(325, 20, 100, 50);
		rect(10, 420, 150, 50);


		//Adding leaves function TRUE
		if (mouseIsPressed) {
			fill(liveColor);
			ellipse(mouseX, mouseY, 70, 20);
		}


	}
}