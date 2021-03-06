//define variables for messages
firstMessage = "We'll let you have a free burger first!!! Now press 2 OR 3 for a chance to win more!";
secondMessage = "You won free fries!!! Now press 4 OR 5 to try your luck at a free drink!"; 
thirdMessage = "So close but no free food this time. Press 4 OR 5 to try your luck at a free drink!"; 
fourthMessage = "Better luck next time. Press 6 OR 7 for your last chance at free food!"; 
fifthMessage = "Lucky you, free soda!!! Now press 6 OR 7 for your last chance to win free food!"; 
sixthMessage = "Congrats on the free delicious donut for dessert!!!"; 
seventhMessage =  "Aw no dessert but I still hope you have a sweet day!";
welcomeMessage = "Ready to try your luck at winning free food? Start by pressing 1 and look below for instructions!";

//define variables for graphics
var burgerX = 330;
var burgerY = 160;
var burgerWidth = 100;
var burgerHeight = 70;
var friesX = 290;
var friesY = 160;
var friesWidth = 80;
var friesHeight = 60;
var sodaX = 300;
var sodaY = 130;
var sodaWidth = 70;
var sodaHeight = 100;
var donutX = 330;
var donutY = 170;
var donutWidth = 100;
var donutHeight = 100;
var sadX = 332;
var sadY = 170;
var sadWidth = 100;
var sadHeight = 100;

function setup() {
  createCanvas(670, 350);
}

function draw() {
  background(109, 194, 220);

//key functions  
 if (key == "1") {
  firstScreen();
 } else if (key == "2") {
  secondScreen();
 } else if (key == "3") {
  thirdScreen();
 } else if (key == "4") {
  fourthScreen();
 } else if (key == "5") {  
  fifthScreen();
 } else if (key == "6") {
  sixthScreen();   
 } else if (key == "7") {
  seventhScreen();
 }  
 
//start welcome message
  fill(0);
  noStroke();
  textSize(15);
  text(welcomeMessage, 10, height - 290);
} 

//draw first screen after welcome message
function firstScreen() {
  fill(113, 55, 7);
  noStroke();
  textSize(18);
  text(firstMessage, 10, height - 50);
 
//add previous burger design from my animation code  
//burger top bun
  fill(230, 147, 34);
  arc(burgerX, burgerY, burgerWidth, burgerHeight, PI, TWO_PI);

//burger cheese
  fill(248, 226, 11);
  rect(burgerX - 50, burgerY, burgerWidth, burgerHeight - 60);
				  
//burger meat
  fill(113, 55, 7);
  rect(burgerX - 50, burgerY + 10, burgerWidth, burgerHeight - 60);
				  
//burger lettuce
  fill(9, 205, 9);
  rect(burgerX - 50, burgerY + 20, burgerWidth, burgerHeight - 60);
				  
//burger bottom bun
  fill(230, 147, 34);
  arc(burgerX, burgerY + 30, burgerWidth, burgerHeight, TWO_PI, PI);
}

//draw second screen
function secondScreen() {
  fill(231, 41, 12);
  noStroke();
  textSize(18);                            
  text(secondMessage, 10, height - 50);
                             
//add previous fries design from my animation code
//fries box
  fill(231, 41, 12); 
  rect (friesX, friesY, friesWidth, friesHeight);
				  
//fries
  stroke(248, 226, 11);
  strokeWeight(10);
  strokeCap(SQUARE);
  line (friesX, friesY - 45, friesX + 10, friesY);
  line (friesX + 23, friesY - 35, friesX + 18, friesY);
  line (friesX + 37, friesY - 30, friesX + 39, friesY);
  line (friesX + 55, friesY - 40, friesX + 60, friesY);
  line (friesX + 80, friesY - 30, friesX + 68, friesY);
				  
//fries box top part (covers the fries)
  noStroke();
  fill(250, 89, 89);
  rect(friesX, friesY-3, friesWidth, friesHeight - 50);                                                                                                           
}

//draw third screen
function thirdScreen() {
  fill(231, 41, 12);
  noStroke();
  textSize(18);                            
  text(thirdMessage, 10, height - 50);
  
//draw sad face
  fill(248, 226, 11); 
  ellipse(sadX, sadY, sadWidth, sadHeight); 
//sad face eyes
  strokeWeight(7);
  stroke(0);
	beginShape(POINTS);
  vertex(sadX - 10, sadY - 6);
  vertex(sadX + 14, sadY - 6);
	endShape();
//sad face mouth
	stroke(0);
  strokeWeight(3);
  fill(248, 226, 11);
	arc(sadX + 2, sadY + 24, sadX - 300, sadY - 158, PI, TWO_PI);  
}

//draw fourth screen
function fourthScreen() {
  fill(2, 107, 213);
  noStroke();
  textSize(18);                            
  text(fourthMessage, 10, height - 50);
  
//draw sad face
  fill(248, 226, 11); 
  ellipse(sadX, sadY, sadWidth, sadHeight); 
//sad face eyes
	strokeWeight(7);
  stroke(0);
	beginShape(POINTS);
  vertex(sadX - 10, sadY - 6);
  vertex(sadX + 14, sadY - 6);
	endShape();
//sad face mouth
  stroke(0);
  strokeWeight(3);
  fill(248, 226, 11);
	arc(sadX + 2, sadY + 24, sadX - 300, sadY - 158, PI, TWO_PI);
}
                             
//draw fifth screen
function fifthScreen() {
  fill(2, 107, 213);
  noStroke();
  textSize(18);
  text(fifthMessage, 10, height - 50);
  
//draw soda
  stroke(255);
  strokeWeight(8);
  line (sodaX + 20, sodaY - 40, sodaX + 40, sodaY + 80);
  noStroke();
  fill (2, 107, 213);  
  rect(sodaX, sodaY, sodaWidth, sodaHeight);
}

//draw sixth screen
function sixthScreen() {
  fill(144, 4, 248);
  noStroke();
  textSize(18);
  text(sixthMessage, 10, height - 50);
 
//add previous donut design from my animation code
//donut circle
  fill(239, 133, 195);
  noStroke();
  ellipse(donutX, donutY, donutWidth, donutHeight); 
				  
//donut hole
  fill(109, 194, 220);
  ellipse(donutX + 2, donutY + 3, donutWidth - 60, donutHeight - 60);
				  
//donut sprinkles
  fill(13, 163, 249);
  rect(donutX - 25, donutY - 35, donutWidth - 90, donutWidth - 95);  
  fill(248, 248, 4);
  rect(donutX + 25, donutY - 15, donutWidth - 90, donutWidth - 95);
  fill(144, 4, 248);
  rect(donutX - 5, donutY + 30, donutWidth - 90, donutWidth - 95);
  fill(54, 229, 6);
  rect(donutX - 42, donutY + 3, donutWidth - 90, donutWidth - 95);
  fill(229, 6, 43);
  rect (donutX + 11, donutY - 43, donutWidth - 90, donutWidth - 95);
  fill (255, 255, 255);
  rect (donutX + 33, donutY + 15, donutWidth - 90, donutWidth - 95);  
}  
  
//draw seventh screen  
function seventhScreen() {
  fill(144, 4, 248);
  noStroke();
  textSize(18);                           
  text(seventhMessage, 10, height - 50);
  
//start sad face
  fill(248, 226, 11); 
  ellipse(sadX, sadY, sadWidth, sadHeight); 
//sad face eyes
	strokeWeight(7);
  stroke(0);
	beginShape(POINTS);
  vertex(sadX - 10, sadY - 6);
  vertex(sadX + 14, sadY - 6);
	endShape();
//sad face mouth
	stroke(0);
  strokeWeight(3);
  fill(248, 226, 11);
	arc(sadX + 2, sadY + 24, sadX - 300, sadY - 158, PI, TWO_PI);  
}    