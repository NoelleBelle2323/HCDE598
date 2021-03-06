//Kim Wickens
//HCDE 598
//A3 Interactive story (called that is 24 hours of my life I'll never get back)
/////////////////

//variables to set page number for advancing pages
/*var pageNum = 1;*/
var onPage1 = true;
var onPage2 = false;
var onPage3 = false;
var onPage4 = false;
var onPage5 = false;

//text color variables
var titleColor = "purple";

// message variables used in draw page functions
var page1Title1 = "Welcome to the escape room!";
var page1Title2 = "Do you want to play?";
var page1Title3 = "Type Y for yes. Type N for no.";
var page2Title = "Enter the combination number to unlock the door.";
var page3Title = "If you change your mind, type X.";
var page4Title1 = "Congratulations!";
var page4Title2 = "You escaped!";
var page4Title3 = "Press 1 to play again.";
var titleLeading = 60 //line spacing between lines of text

//door variables
var doorWidth = 160;
var doorHeight = 280;

//combination lock variables
var rectColor = "black";
var comboLockX = (100);
var comboLockY = (200);
var comboLockWidth = (80);
var comboLockHeight = (30);
var comboLockTextColor = ('white');

function setup() {
	createCanvas(600, 500);
	//variable for message coordinates
	titleX = width / 2;
	titleY = height - 450;
	msgX = width / 2;
	msgY = height - 150;
}

function draw() {
	//draw background	
	if (onPage1) {
		background(220);

		drawPage1();

		//when Y key pressed go to page 2
		//when N key pressed go to page 3
		if (key == "Y" || key == "y") {
			onPage1 = false; // done with page 1
			onPage2 = true; // if Y is chosen, go to page 2
		}
		if (key == "N" || key == "n") {
			onPage1 = false; // done with page 1
			onPage3 = true; // if N is chosen, go to page 3
		}
	}
	if (onPage2) {
		background(220);
		drawPage2();

	}
	if (onPage3) {
		background(220);
		drawPage3();
	}

	//On page 2 (door), advance to page 4 if correct combination (8) entered
	if (onPage2) {
		background(220);
		drawPage2();
		if (key == "8") {
			onPage2 = false;
			onPage3 = false;
			onPage4 = true;
		}
	}
	if (onPage4) {
		background(220);
		drawPage4();
	}

	//On page 3, return to page 1 if Y entered
	if (key == "X" || key == "x") {
		onPage1 = true;
		onPage2 = false;
		onPage3 = false;
		onPage4 = false;
	}

	//draw page 4 if correct combination entered on page 2 (door)
	if (onPage4) {
		background(220);
		drawPage4();
	}

	//If 1 typed on final page to play again, return to page 1.
	if (key == "1") {
		onPage1 = true;
		onPage2 = false;
		onPage3 = false;
		onPage4 = false;
	}
}

//draw the start screen
function drawPage1() {
	textSize(40);
	fill(titleColor);
	noStroke();
	textAlign(CENTER);
	text(page1Title1, titleX, titleY);
	text(page1Title2, titleX, titleY + titleLeading);
	text(page1Title3, titleX, titleY + 2 * titleLeading);
}

//draw page 2
function drawPage2() {
	textSize(25);
	fill(titleColor)
	noStroke();
	textAlign(CENTER);//center text
	text(page2Title, titleX, titleY);//first row of title message
	//draw door
	fill(153, 102, 51); //door color
	rect(width / 2 - 80, height / 3, doorWidth, doorHeight); //door size
	//draw door handle
	fill(255, 204, 102);
	noStroke();
	ellipse(width / 2 + 65, height / 3 + 140, 20);
	//draw combination lock
	fill('black'); //combo lock color
	stroke('white');
	strokeWeight(3)
	rect(width / 2 - comboLockWidth / 2, height / 3 + doorHeight / 4, comboLockWidth, comboLockHeight); //combo lock size
	stroke('white')//color for vertical lines on lock
	strokeWeight(3)
	line(width / 2 - comboLockWidth / 5, height / 3 + doorHeight / 4, width / 2 - comboLockWidth / 5, height / 3 + doorHeight / 4 + comboLockHeight);
	line(width / 2 + comboLockWidth / 5, height / 3 + doorHeight / 4, width / 2 + comboLockWidth / 5, height / 3 + doorHeight / 4 + comboLockHeight);
	//door text
	textSize(20);
	fill(comboLockTextColor)
	noStroke();
	textAlign(CENTER);
	text("HCDE", width / 2, height / 3 + doorHeight / 4 - 10);
	//combo lock text
	textAlign(CENTER);//center combination text
	text("5", width / 2 - comboLockWidth / 3, height / 3 + doorHeight / 4 + 20);//first combination number
	text("9", width / 2, height / 3 + doorHeight / 4 + 20);//second combination number
}

//draw page 3. User sees this page if answers N to page 1.
function drawPage3() {
	textSize(40);
	fill(titleColor)
	noStroke();
	text(page3Title, titleX, titleY);
}

//draw page 4. User sees this page if answers 8 to page 2.
function drawPage4() {
	textSize(50);
	fill(titleColor)
	noStroke();
	textAlign(CENTER);
	text(page4Title1, titleX, titleY);
	text(page4Title2, titleX, height / 2);
	text(page4Title3, titleX, height / 2 + titleLeading);

}