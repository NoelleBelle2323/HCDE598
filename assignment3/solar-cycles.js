var Intro = true  //for advancing through the pages
var MorningSun = false
var AfternoonSun = false
var EveningSun = false
var End = false

var Xcoord = 0

function setup() {
  createCanvas(600, 400);
}	

function draw() {

//Cycle through page order using if statements and boolean evaluations
//not able to get the message that accompanies a correct response to display
	
if (Intro){
	drawIntro();
		if (mouseIsPressed){
			Intro = false
			MorningSun = true
		}
}
else if (MorningSun) {
	drawMorning();
	if (key == "4"){
			MorningSun = false
			AfternoonSun = true
			EveningSun = false
			End = false
		}
}
else if (AfternoonSun){
		drawAfternoon();
	if (key == "2"){
			AfternoonSun = false
			EveningSun = true
			MorningSun = false
			Intro = false
			End = false
	}
}		
else if (EveningSun){
		drawEvening();
	if(key == "3"){
			EveningSun = false
			End = true
			MorningSun = false
			AfternoonSun = false
			Intro = false
	}
}
else if (End){
	drawEnd();
}
	
//FUNCTIONS for page content	
function drawIntro() {
	
	noStroke();
	fill(161, 187, 251)
	rect(0,0, width/3, height)
	fill(135, 206, 235)
	rect(width/3, 0, width/3, height)
	fill(19, 24, 98)
	rect(width/3 + width/3, 0, width/3, height)
	fill("black")
	strokeWeight(1);
	stroke("black")
	textSize(20);
	text("The Riddle of the Sphinx", 30, 340)
	textSize(12);
	text("(click the leftmost ellipse to begin)", 50, 360)
	
	//pseudo button
	push();
	ellipseMode(RADIUS);
	var a = 30;
	var b = height/2-50;
	var radius = 20
	var d = dist(mouseX, mouseY, a, b);
	if (d < radius){
		radius++;
	fill(253, 84, 19)
	}
	else{
	fill(253, 84, 19)
	}	
	strokeWeight(5);
	stroke("yellow");
	ellipse(a, b, radius, radius);
	pop();
	
	//other suns
	strokeWeight(8);
	stroke(253, 84, 19);
	fill("orange")
	ellipse(width/2, height/2 - 150, 60, 60)
	
	
	strokeWeight(5);
	stroke("red");
	fill(253, 84, 19);
	ellipse(width - 30 , height/2 - 50, 30, 30);
}

//final slide with moon
function drawEnd(){
	background(0);
	strokeWeight(5);
	stroke("yellow");
	fill(255, 200);
	ellipse(Xcoord + 30, height/2 - 50, 30, 30);
}
	
function drawMorning() {
  background(161, 187, 251)
	
	strokeWeight(5);
	stroke("yellow");
	fill(253, 84, 19);
	ellipse(Xcoord + 30, height/2 - 50, 30, 30);
	
	fill('black')
	noStroke();
	textSize(18);
	
	text("How many legs in the morning?", 15, 380)
		var Start = 1
		if(key != '4'){
			if(keyIsPressed){
				text("Try Again", width/2 - 40, height/2)
			}
		}
			if(key == '4'){
		 	text(key + "...is Correct", width/2 - 40, height/2 - 20);

		}
}

function drawAfternoon(){
	strokeWeight(8);
	stroke(253, 84, 19);
	background(135, 206, 235)
	fill("orange")	
	ellipse(width/2, height/2 - 150, 60, 60)
	
	noStroke();
	fill('black')
	textSize(18);
	text("How many legs in the afternoon?", 15, 380);  
			if(key != '2'){
				if(keyIsPressed){	
				text("Try Again", width/2 - 30, height/2);	
				}
			}
			if(key == '2'){
				text(key + "...is Correct", width/2 - 40, height/2);	
		}
	}

function drawEvening(){
	background(19, 24, 98)
	strokeWeight(5);
	stroke("red");
	fill(253, 84, 19);
	ellipse(width - 30 , height/2 - 50, 30, 30);
	fill(253, 84, 19);
	
	noStroke();
	fill("grey");
	textSize(18);
	text("How many legs in the evening?", 15, 380)	

		if(key == "3") {
			textSize(14);
			text("You have provided the correct number of legs for each part of the day", width/2 - 240, height/2)
		}
		if(key != '3'){
			if(keyIsPressed){
			text("Try Again", width/2 - 30, height/2);
		}
	}
}
}