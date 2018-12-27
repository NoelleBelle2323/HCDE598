// FILE: ByrneEuclid.js
// AUTHOR: David Mondello
// DATE: 12/9/18
// CLASS: HCDE 598
// EMAIL: dmonde@uw.edu
// DESCRIPTION:

/*
 This program features graphics and text associated with three propositions 
 (XXV, XXVI, and XXVII) from Oliver Byrne's translation of 
 Euclid's Elements. Both hovering over and clicking images on the canvas
 trigger specific interactions. 		
*/

//KNOWN ISSUES: 
	//limited hover states on Propositions XXV, XXVI, XXVII (1-2 per proposition)


///////////
//VARIABLES
///////////

//if any of the below variables is set to true, it will display the larger images and the text associated with the selected proposition

var arcPerpDisplayed = false;
var arcCircumDisplayed = false;
var arcAbsurdDisplayed = false;

//shared values among geometric figures

//used initially in figure for prop. xxv
var arcPerpX = 400;
var arcPerpY = 275;
var arcPerpStart = 2.67;

//used initialy in prop. xxvi
var arcCenCircumX = 125;
var arcCenCircumStart = 2.51;
var arcCenCircumStop = 0.63;

//used initially in prop. xxvii
var arcAbsurdX = 675;
var arcAbsurdStart = 2.36;
var arcAbsurdStop = 1.10;
var arcYTop = 300;
var arcYBottom = 450;
var arcSmallWidthHeight = 100;
var arcLargeWidthHeight = 250;
var arcStrokeWeight = 5; 
var highStrokeWeight = 9;

//text box values
var textX = 700;
var statementY = 150
var conclusionY = 240
var textW = 270
var statementHeight = 70
var conclusionHeight = 120
var hoverY = 390

//height and width values for repeated angles
var angleWidthHeight = 35
var largeAngleWidthHeight = 45


function setup() {
	createCanvas(800, 700);

}

function draw() {
	background(190, 220, 172);


	makeTitleBar(); //displays the title of the project at the top of the page

	//strucutre for displaying full size illustrations once an icon has been selected	
	if (arcPerpDisplayed) { //mouse pressed within specified bounding box for prop xxv
		arcPerpendicularCenterText(-220, 145, 1); //prop. xxv text boxes appear in lower 2/3 of canvas
		blueSegment(500, 357, 0.2); //geometry in text box
		yellowSegmentStraight(580, 365, 0.25); //geometry in text box
		redSegmentStraight(455, 385, 0.25); //geometry in text box
		arcCenterCircumference(70, -60, 0.5, false); //prop xxvi blue circle icon default state
		cenCircumTwo(145, -135, 0.5, false); //prop xxvi red cricle icon default state
		arcAbsurd(265, -60, 0.5, false); //prop xxvii red cricle icon default state
		arcAbsurdTwo(340, -135, 0.5, false); //prop xxvii blue cricle icon default state
		if (mouseX > 75 && mouseX < 170 && mouseY > 300 && mouseY < 410) {
			blueYellowPerp(470, 445, 0.5); //displayed if mouse hovers over the blue or yellow segment of the larger image
		}

	} else if (arcCircumDisplayed) { //mouse pressed within specified bounding box for prop xxvi
		arcCenterCircumferenceText(25, -140, 1.5, false); //text and image associated with prop xxvi appears in the loew 2/3 of the canvas
		cenCircumTwo(25, -150, 1.5, false) //second image of prop xxvi appears in lower 2/3 of canvs
		cenCircumCircleRed(645, 190, 0.25); //geometry in text box
		cenCircumCircleBlue(579, 190, 0.25); //geometry in text box
		cenCircumArc(525, 201, 0.25); //geometry in text box
		cenCircumArc(565, 201, 0.25); //geometry in text box
		arcPerpendicularCenter(200, 0, 0.5, false) //prop xxv icon default state
		arcAbsurd(265, -60, 0.5, false); //prop xxvii red cricle icon default state
		arcAbsurdTwo(340, -135, 0.5, false); //prop xxvii blue cricle icon default state
		if ((mouseX > 201 && mouseX < 227 && mouseY > 320 && mouseY < 335) ||
			(mouseX > 201 && mouseX < 227 && mouseY > 530 && mouseY < 550)) {
			centerAnglesEqual(300, -200, 2.0); //display the relationship between the angle at the ceter of the larger images if mouse hovers over specified area

		}
		if ((mouseX > 220 && mouseX < 240 && mouseY > 250 && mouseY < 270) ||
			(mouseX > 190 && mouseX < 209 && mouseY > 460 && mouseY < 485)) {
			circumAnglesEqual(300, -150, 2.0); //display the relationship between the angle at the circumference of the larger images if mouse hovers over specified area
		}


	} else if (arcAbsurdDisplayed) { //mouse pressed within specified bounding box for prop xxvii
		arcAbsurdText(25, -150, 1.5) //display prop xxvii text and enlarged images in the bottom 2/3 of the canvas
		cenCircumCircleRed(575, 178, 0.25); //geometry in text box
		cenCircumCircleBlue(640, 178, 0.25); //geometry in text box
		absurdAngles(437, -35, 1); //geometry in text box
		arcAbsurd(-840, -140, 1.5); //geometry in text box
		arcAbsurdTwo(-840, -150, 1.5) //geometry in text box
		arcCenterCircumference(70, -60, 0.5, false); //prop xxvi blue circle icon default state
		cenCircumTwo(145, -135, 0.5, false); //prop xxvi red cricle icon default state
		arcPerpendicularCenter(200, 0, 0.5, false); //prop xxv icon default state
		if ((mouseX > 151 && mouseX < 210 && mouseY > 305 && mouseY < 350) ||
			(mouseX > 151 && mouseX < 195 && mouseY > 520 && mouseY < 560)) {
		absurdCenterAngles(-800, -175, 2.0);//display absurd relationship among angles
	}
	}
	//icons display as white with larger strokeWeight 

	//when mouse hovers over bounded areas, display highlighted icon 
	if ((mouseX > 325 && mouseX < 500 && mouseY > 32 && mouseY < 230) || (arcPerpDisplayed)) {
		arcPerpendicularCenter(200, 0, 0.5, true); //prop xxv with header text, white stroke and heavier stroke
	} else {
		arcPerpendicularCenter(200, 0, 0.5, false)
	}
	
	if ((mouseX > 125 && mouseX < 260 && mouseY > 60 && mouseY < 175) || (arcCircumDisplayed)) {
		arcCenterCircumference(70, -60, 0.5, true); //prop xxvi blue circle with header text, white stroke and heavier stroke
		cenCircumTwo(145, -135, 0.5, true) //prop xxvi red circle
	} else {
		arcCenterCircumference(70, -60, 0.5, false); //prop xxvi blue circle icon default state
		cenCircumTwo(145, -135, 0.5, false); //prop xxvi red cricle icon default state
	}
	if ((mouseX > 585 && mouseX < 760 && mouseY > 60 && mouseY < 205) || (arcAbsurdDisplayed)) {
		arcAbsurd(265, -60, 0.5, true); //prop xxvi red circle with header text, white stroke and heavier stroke
		arcAbsurdTwo(340, -135, 0.5, true); //prop xxvi blue circle 
	} else {
		arcAbsurd(265, -60, 0.5, false); //prop xxvii red cricle icon default state
		arcAbsurdTwo(340, -135, 0.5, false); //prop xxvii blue cricle icon default state
	}

}

////////
//TITLE
///////

function makeTitleBar() { //makes the black-ish rectangles and text within the title bar at the top of the canvas  

	strokeWeight(7)
	noStroke("black");
	for (var i = 40; i < 790; i += 20) {
		if (i % 5 == 0) {
			fill(20, 20, 20)
			rect(i - 25, 10, 30, 40, 2)
		}
	}

	fill("orange")
	noStroke();
	textSize(30)
	textStyle(BOLD)
	textFont("minion")
	text("BYRNE'S EUCLID", 50, 39)
	textSize(20)
	textStyle(NORMAL)
	text("PROPOSITIONS XXV-XXVII", 500, 37)

}

///////////////////////////////////
//PROPOSITION XXV-RELATED FUNCTIONS
///////////////////////////////////


function arcPerpendicularCenter(x, y, s, isHighlighted) { //default version of icon for prop xxv; stroke color and weight change under certain conditions
	push();
	translate(x, y);
	scale(s);

	if (isHighlighted == true){

	noStroke();
	fill("orange")
	rect(230, 390, 320, 60, 2)


	fill("black");
	noStroke();
	textSize(30);
	textStyle(BOLD);
	textFont('minion');
	text("PROPOSITION XXV", 250, 430);
		
	strokeWeight(highStrokeWeight)
	stroke("#fffdd0")
	
}else{
			strokeWeight(arcStrokeWeight)
			stroke("blue")
		}

	noFill();
	arc(arcPerpX, arcPerpY, arcLargeWidthHeight, arcLargeWidthHeight, arcPerpStart, QUARTER_PI, OPEN);
	strokeWeight(arcStrokeWeight)
	stroke("blue")
	line(280, 257, 430, 158)
	stroke("black")
	line(432, 160, 508, 328)
	stroke("orange")
	line(355, 214, 400, 275)
	stroke("red")
	line(465, 246, 400, 275)
	pop();
}

function blueSegment(x, y, s) { //used in the text box associated with proposition xxvv
	push();
	translate(x, y);
	scale(s);
	noFill();
	strokeWeight(8)
	stroke("blue")
	line(280, 257, 430, 158)
	pop();
}


function blueYellowPerp(x, y, s) { //used in the hover box associated with proposition xxv
	push();
	translate(x, y);
	scale(s);
	noFill();
	strokeWeight(8)
	stroke("blue")
	line(100, 257, 250, 257)

	stroke("black");
	line(300, 227, 300, 257);
	line(280, 257, 320, 257);

	noFill();
	stroke("orange")
	line(350, 257, 500, 257)
	pop();
}

function yellowSegmentStraight(x, y, s) { //used in the text box associated with proposition xxv
	push();
	translate(x, y);
	scale(s);
	noFill();
	strokeWeight(8)
	stroke("orange")
	line(355, 214, 500, 214)
	pop();
}

function redSegmentStraight(x, y, s) { //used in the text box associated with proposition xxv
	push();
	translate(x, y);
	scale(s);
	noFill();
	strokeWeight(8)
	stroke("red")
	line(375, 275, 500, 275)
	pop();
}

function arcPerpendicularCenterText(x, y, s) { //displayed on bottom 2/3 of canvas when prop xxv icon selected
	push();
	translate(x, y);
	scale(s);

	//arcs and lines
	noFill();
	strokeWeight(arcStrokeWeight)
	stroke("blue")
	arc(arcPerpX, arcPerpY, arcLargeWidthHeight, arcLargeWidthHeight, arcPerpStart, QUARTER_PI, OPEN);
	line(280, 257, 430, 158)
	stroke("black")
	line(432, 160, 508, 328)
	stroke("orange")
	line(355, 214, 400, 275)
	stroke("red")
	line(465, 246, 400, 275)

	//propostion statement
	//text box
	noStroke();
	fill("#fffdd0")
	rect(textX, statementY, textW, statementHeight, 2)
	//words
	fill("black")
	textStyle(ITALIC);
	textFont("minion")
	textSize(14)
	text("A SEGMENT of a circle being given,\n to describe the circle of which it is\n the segment.", 725, 170)


	//conslusion
	//text box
	noStroke();
	fill("#fffdd0")
	rect(textX, conclusionY, textW, conclusionHeight, 2)
	//words
	fill("black")
	textStyle(NORMAL);
	textFont("minion")
	textSize(14)
	text("Because              terminated in the circle\nis bisected perpendicularly by               ,\nit passes through the center (Book 3. pr. I),\nlikewise             passes through the center,\ntherfore the center is in the intersection\nof these perpendiculars", 715, 260)


	//hover over
	noStroke();
	fill("#fffdd0")
	rect(textX, hoverY, textW, statementHeight, 2)
	pop();

}


////////////////////////////////////
//PROPOSITION XXVI-RELATED FUNCTIONS
////////////////////////////////////


function cenCircumCircleBlue(x, y, s, isHighlighted) { //draws default version of the graphic in the blue circle
	push();
	translate(x, y);
	scale(s);
	
	noFill();
	strokeWeight(8);
	stroke("blue");
	ellipse(arcCenCircumX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight)
	pop();
}

function cenCircumCircleRed(x, y, s) { //draws default version of the graphic in the red circle
	push();
	translate(x, y);
	scale(s);

	noFill();
	strokeWeight(8);
	stroke("red");
	ellipse(arcCenCircumX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight)
	pop();
}

function cenCircumArc(x, y, s) { //black arc on the bottom of the red and blue circles
	push();
	translate(x, y);
	scale(s);

	strokeWeight(8)
	stroke("black")
	noFill();
	arc(arcCenCircumX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, arcCenCircumStop, arcCenCircumStart, OPEN)
	pop();
}

function arcCenterCircumference(x, y, s, isHighlighted) { //contains first image of prop xxvi; stroke weight and color change when mouse hovers specified area
	push();
	translate(x, y);
	scale(s);

	if (isHighlighted == true){

	noStroke();
	fill("orange")
	rect(45, 390, 320, 60, 2)



	fill("black");
	noStroke();
	textSize(30);
	textStyle(BOLD);
	textFont('minion');
	text("PROPOSITION XXVI", 57, 430)
		
	strokeWeight(highStrokeWeight)
	stroke("#fffdd0")
	
}else{
			strokeWeight(arcStrokeWeight)
			stroke("blue")
		}
	
	//3-26 figure 1
	noFill();
	ellipse(arcCenCircumX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight)
	//arc(arcCenCircumX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, arcCenCircumStart, arcCenCircumStop, OPEN)
	stroke("black")
	strokeWeight(arcStrokeWeight)
	arc(arcCenCircumX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, arcCenCircumStop, arcCenCircumStart, OPEN)

	//red arc inside tall triangle
	fill("red")
	noStroke();
	arc(140, 257, angleWidthHeight, angleWidthHeight, radians(70), radians(130))

	noFill();
	stroke("black")
	//tall triangle
	strokeWeight(3)
	triangle(86, 327, 163, 327, 140, 257)

	//yellow arc bottom
	fill("orange")
	stroke("black")
	arc(arcCenCircumX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, arcCenCircumStop, arcCenCircumStart, OPEN)

	//yellow arc inside triangle
	fill("orange")
	noStroke();
	arc(arcCenCircumX, arcYTop, angleWidthHeight, angleWidthHeight, radians(40), radians(140))

	//short triangle
	strokeWeight(3)
	stroke("blue")
	line(86, 327, arcCenCircumX, arcYTop)
	stroke("red")
	line(163, 327, arcCenCircumX, arcYTop)
	pop();
}

function centerAnglesEqual(x, y, s) { //image that is revealed within the hover box when mouse hovers over angles at the center of the two images in prop xxvi
	push();
	translate(x, y);
	scale(s);
	//yellow arc inside triangle
	fill("orange")
	noStroke();
	arc(arcCenCircumX, arcYTop, angleWidthHeight, angleWidthHeight, radians(40), radians(140))

	//equals sign
	fill("black");
	noStroke();
	textSize(30);
	textStyle(BOLD);
	textFont('minion');
	text("=", arcCenCircumX + 22.5, arcYTop + 20);

	//black arc inside triangle
	fill("black")
	noStroke();
	arc(arcCenCircumX + 60, arcYTop, 35, 35, radians(40), radians(140))
	pop();
}

function circumAnglesEqual(x, y, s) { //image that is revealed within the hover box when mouse hovers over angles at the circumference of the two images in prop xxvi
	push();
	translate(x, y);
	scale(s);

	fill("red")
	noStroke();
	arc(185, 300, angleWidthHeight, angleWidthHeight, radians(70), radians(130))


	fill("black");
	noStroke();
	textSize(30);
	textStyle(BOLD);
	textFont('minion');
	text("=", arcCenCircumX + 22.5, arcYTop + 20);

	fill("blue")
	noStroke();
	arc(130, 300, angleWidthHeight, angleWidthHeight, radians(70), radians(130))
	pop();
}

function arcCenterCircumferenceText(x, y, s) { //the first circle and all text that take up the bottom 2/3 of the canvas when the prop xxvi icon is selected
	push();
	translate(x, y);
	scale(s);

	//3-26 figure 1
	noFill();
	strokeWeight(arcStrokeWeight);
	stroke("blue");
	ellipse(arcCenCircumX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight)
	//arc(arcCenCircumX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, arcCenCircumStart, arcCenCircumStop, OPEN)
	stroke("black")
	arc(arcCenCircumX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, arcCenCircumStop, arcCenCircumStart, OPEN)

	//red arc inside tall triangle
	fill("red")
	noStroke();
	arc(140, 257, angleWidthHeight, angleWidthHeight, radians(70), radians(130))

	noFill();
	stroke("black")
	//tall triangle
	strokeWeight(3)
	triangle(86, 327, 163, 327, 140, 257)

	//yellow arc bottom
	fill("orange")
	stroke("black")
	arc(arcCenCircumX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, arcCenCircumStop, arcCenCircumStart, OPEN)

	//yellow arc inside triangle
	fill("orange")
	noStroke();
	arc(arcCenCircumX, arcYTop, angleWidthHeight, angleWidthHeight, radians(40), radians(140))

	//short triangle
	strokeWeight(3)
	stroke("blue")
	line(86, 327, arcCenCircumX, arcYTop)
	stroke("red")
	line(163, 327, arcCenCircumX, arcYTop)

	//box
	noStroke();
	fill("#fffdd0")
	rect(305, 255, 165, 65, 2)
	//words
	fill("black")
	textStyle(ITALIC);
	textFont("minion")
	textSize(9)
	text("ON equal circles             and            , \nthe arcs          ,            on which stand\nequal angles, whether at the center or\ncircumferences, are equal", 315, 274)


	//conslusion
	noStroke();
	fill("#fffdd0")
	rect(305, 340, 165, 160, 2)

	pop();

}

function cenCircumTwo(x, y, s, isHighlighted) { //the second circle of prop xxvii; stroke weight and color change when mouse hovers specified area
	push();
	translate(x, y);
	scale(s);

	if (isHighlighted == true){
		
	strokeWeight(highStrokeWeight)
	stroke("#fffdd0")
	
}else{
			strokeWeight(arcStrokeWeight)
			stroke("red")
		}

	//3-26 figure 2
	noFill();
	ellipse(arcCenCircumX, arcYBottom, arcSmallWidthHeight, arcSmallWidthHeight)
	stroke("black")
	strokeWeight(arcStrokeWeight)
	
	
	//blue arc inside tall triangle
	fill("blue")
	noStroke();
	arc(115, 406, angleWidthHeight, angleWidthHeight, radians(60), radians(115))

	//tall triangle
	noFill();
	stroke("black")
	arc(arcCenCircumX, arcYBottom, arcSmallWidthHeight, arcSmallWidthHeight, arcCenCircumStop, arcCenCircumStart, OPEN)
	strokeWeight(3)
	triangle(86, 477, 163, 477, 115, 406)

	//yellow arc bottom
	fill("orange")
	stroke("black")
	arc(arcCenCircumX, arcYBottom, arcSmallWidthHeight, arcSmallWidthHeight, arcCenCircumStop, arcCenCircumStart, OPEN)

	//black arc inside triangle
	fill("black")
	noStroke();
	arc(arcCenCircumX, arcYBottom, angleWidthHeight, angleWidthHeight, radians(40), radians(140))

	//short triangle
	strokeWeight(3)
	stroke("blue")
	line(86, 477, arcCenCircumX, arcYBottom)
	stroke("red")
	line(163, 477, arcCenCircumX, arcYBottom)

	//dashed line effects
	for (var i = 86, j = 477; i < 125; i += 7.5, j -= 5) {
		fill("#fffdd0")
		noStroke();
		ellipse(i, j, 4, 4)
	}
	for (var k = 125, l = 450; k < 163; k += 7.5, l += 5.25) {
		fill("#fffdd0")
		noStroke();
		ellipse(k, l, 4, 4)
	}
	for (var m = 86; m < 163; m += 7.5) {
		fill("#fffdd0")
		noStroke();
		ellipse(m, 477, 4, 4)
	}
	pop();
}


/////////////////////////////////////
//PROPOSITION XXVII-RELATED FUNCTIONS
/////////////////////////////////////

function absurdAngles(x, y, s) { //prop xxvii angles used in text box
	push();
	translate(x, y);
	scale(s);

	fill("red")
	noStroke();
	arc(190, 300, angleWidthHeight, angleWidthHeight, radians(70), radians(130))


	fill("orange")
	noStroke();
	arc(130, 300, angleWidthHeight, angleWidthHeight, radians(70), radians(130))
	pop();
}

function arcAbsurdText(x, y, s) { //prop xxvii large red circle, angles, traingles, and text that appear on bottom 2/3 of canvas when prop xxvii icon is selected
	push();
	translate(x, y);
	scale(s);


	noFill();
	strokeWeight(arcStrokeWeight);
	stroke("red");
	arc(arcAbsurdX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, arcAbsurdStart, arcAbsurdStop, OPEN)

	for (var j = 0.63; j <= 1.10; j += 0.15) {
		noFill();
		stroke("#fffdd0");
		strokeWeight(5)
		arc(arcAbsurdX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, j - 0.005, j)
	}

	//black arc
	strokeWeight(5)
	stroke("black")
	arc(arcAbsurdX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, arcAbsurdStop, arcAbsurdStart, OPEN)

	//yellow arc bottom
	fill("orange");
	noStroke();
	arc(arcAbsurdX, arcYTop, largeAngleWidthHeight, largeAngleWidthHeight, radians(60), radians(135))

	//yellow arc top
	arc(686, 254, 50, 50, radians(80), radians(120))

	//blue arc top
	fill("blue")
	arc(686, 254, 50, 50, radians(70), radians(80))

	//blue arc bottom
	arc(arcAbsurdX, arcYTop, largeAngleWidthHeight, largeAngleWidthHeight, radians(35), radians(60))

	//triangles
	stroke("black")
	noFill();
	strokeWeight(3)
	line(686, 254, 639, 332)
	line(686, 254, 697, 343)
	line(686, 254, 714, 326)
	line(639, 332, arcAbsurdX, arcYTop)
	line(697, 343, arcAbsurdX, arcYTop)
	line(714, 326, arcAbsurdX, arcYTop)

	//box
	noStroke();
	fill("#fffdd0")
	rect(305, 255, 165, 65, 2)
	//words
	fill("black")
	textStyle(ITALIC);
	textFont("minion")
	textSize(9)
	text("ON equal circles             and            , \nthe angles          and             which stand\nupon equal arches are equal, whether they\nbe at the centers or at the circumferences", 312.5, 274)


	//conslusion
	noStroke();
	fill("#fffdd0")
	rect(305, 340, 165, 160, 2)

	pop();
}

function arcAbsurd(x, y, s, isHighlighted) { //red circle, angles, triangles associated with prop xxvii; stroke weight and color change when mouse hovers specified area
	push();
	translate(x, y);
	scale(s);

	if (isHighlighted == true){
	noStroke();
	fill("orange")
	rect(595, 390, 320, 60, 2)


	fill("black");
	noStroke();
	textSize(30);
	textStyle(BOLD);
	textFont('minion');
	text("PROPOSITION XXVII", 602.5, 430)
		
	strokeWeight(highStrokeWeight)
	stroke("#fffdd0")
	
}else{
			strokeWeight(arcStrokeWeight)
			stroke("red")
		}
	
	noFill();

	arc(arcAbsurdX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, arcAbsurdStart, arcAbsurdStop, OPEN)
	strokeWeight(arcStrokeWeight)
	stroke("red")
	arc(arcAbsurdX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, 0.63, 1.10)
	
	for (var j = 0.63; j <= 1.10; j += 0.15) {
		noFill();
		stroke("#fffdd0")
		arc(arcAbsurdX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, j - 0.005, j)
	}

	//black arc
	strokeWeight(5)
	stroke("black")
	arc(arcAbsurdX, arcYTop, arcSmallWidthHeight, arcSmallWidthHeight, arcAbsurdStop, arcAbsurdStart, OPEN)

	//yellow arc bottom
	fill("orange");
	noStroke();
	arc(arcAbsurdX, arcYTop, 45, 45, radians(60), radians(135))

	//yellow arc top
	arc(686, 254, 50, 50, radians(80), radians(120))

	//blue arc top
	fill("blue")
	arc(686, 254, 50, 50, radians(70), radians(80))

	//blue arc bottom
	arc(arcAbsurdX, arcYTop, 45, 45, radians(35), radians(60))

	//triangles
	stroke("black")
	noFill();
	strokeWeight(3)
	line(686, 254, 639, 332)
	line(686, 254, 697, 343)
	line(686, 254, 714, 326)
	line(639, 332, arcAbsurdX, arcYTop)
	line(697, 343, arcAbsurdX, arcYTop)
	line(714, 326, arcAbsurdX, arcYTop)
	pop();
}

function arcAbsurdTwo(x, y, s, isHighlighted) { //blue circle, angles, and, triangles associted with prop xxvii; stroke weight and color change when mouse hovers specified area 
	push();
	translate(x, y);
	scale(s);

	
	if (isHighlighted == true){
		
	strokeWeight(highStrokeWeight)
	stroke("#fffdd0")
	
}else{
			strokeWeight(arcStrokeWeight)
			stroke("blue")
		}
	
	//blue circle
	noFill();
	ellipse(arcAbsurdX, arcYBottom, arcSmallWidthHeight, arcSmallWidthHeight)
	
	//black arc
	stroke("black")
	strokeWeight(arcStrokeWeight)
	arc(arcAbsurdX, arcYBottom, arcSmallWidthHeight, arcSmallWidthHeight, arcAbsurdStop, arcAbsurdStart, OPEN)

	//red arc top
	fill("red");
	noStroke();
	arc(686, 404, 50, 50, radians(80), radians(120))

	//red arc bottom
	arc(arcAbsurdX, arcYBottom, 45, 45, radians(60), radians(135))

	//triangles
	noFill();
	stroke("black")
	strokeWeight(3)
	line(686, 404, 639, 482)
	line(686, 404, 697, 493)
	line(639, 482, arcAbsurdX, arcYBottom)
	line(697, 493, arcAbsurdX, arcYBottom)

	for (var i = 1.10; i <= 2.44; i += 0.2) {
		noFill();
		strokeWeight(5)
		stroke("#fffdd0");
		arc(arcAbsurdX, arcYBottom, arcSmallWidthHeight, arcSmallWidthHeight, i - 0.005, i)
	}
	pop();
}

function absurdCenterAngles (x, y, s){
	push();
	translate(x, y);
	scale(s);
	
	//yellow arc bottom
	fill("orange");
	noStroke();
	arc(arcAbsurdX, arcYTop, 45, 45, radians(60), radians(135))
	
	//blue arc bottom
	fill("blue")
	arc(arcAbsurdX, arcYTop, 45, 45, radians(35), radians(60))
	
	fill("black");
	noStroke();
	textSize(30);
	textStyle(BOLD);
	textFont('minion');
	text("=", arcAbsurdX + 22.5, arcYTop + 20);
	
	stroke("black")
	strokeWeight(2)
	strokeCap(SQUARE)
	line(arcAbsurdX + 40, arcYTop + 20, arcAbsurdX + 20, arcYTop - 1)
	
	//red arc bottom
	noStroke();
	fill("red")
	arc(arcAbsurdX + 60, arcYTop, 45, 45, radians(60), radians(135))
	
	pop();
}

function mousePressed() { //adapted from monuments of india project (2017)
	// detect if prop xxv icon is clicked
	if (mouseX > 325 && mouseX < 500 && mouseY > 50 && mouseY < 230) {
		// 1) change propostions button boolean to the opposite (so that it's displayed)
		arcPerpDisplayed = !arcPerpDisplayed;
		// 2) make sure the other propositions aren't displayed
		arcCircumDisplayed = false;
		arcAbsurdDisplayed = false;
	} else if (mouseX > 50 && mouseX < 240 && mouseY > 60 && mouseY < 205) {
		arcCircumDisplayed = !arcCircumDisplayed;
		arcPerpDisplayed = false;
		arcAbsurdDisplayed = false;
	} else if (mouseX > 585 && mouseX < 760 && mouseY > 60 && mouseY < 205) {
		arcAbsurdDisplayed = !arcAbsurdDisplayed
		arcPerpDisplayed = false;
		arcCircumDisplayed = false;
	}
}