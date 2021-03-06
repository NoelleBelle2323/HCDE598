/*
	Lunar and Solar Eclises project.
*/

/*            Global variables            */
////////////////////////////////////////////
// Button Variables
var buttonSize = 100;//Button width
var xL1ButtonPos = 150;//2-button left X
var xR1ButtonPos = 350;//2-button right X
var xL2ButtonPos = 100;//3-button left X
var xCButtonPos = 250;//3-button center X
var xR2ButtonPos = 400;//2-button right X
var yButtonPos = 450;//All button Y
// Other Variables
var screenToShow = 0;
var txtSize = 25;
var txtColor = 255;
var txtTop = 25;
var wait = 0;
var canvasSize = 600;
////////////////////////////////////////////
/*
* Canvas Setup.
*/
function setup() {
  createCanvas(canvasSize, canvasSize);
}

/*
* Main Draw method.
*/
function draw() {
  // The screens to draw.
  drawScreen();
  
	// Screen tester with keys.
  screenTester();
  
  // Main Title.
  fill(txtColor);
  textSize(txtSize);
  textAlign(CENTER);
  text(txtTop, 0, 50, canvasSize); 
  
  // Wait to allow the buttons to load.
  wait=wait+1;
}

/*
* Draws the screen depending on the scenario(clicked buttons)
*/
function drawScreen() {
  // Followed multiple option example in https://p5js.org/examples/interaction-snake-game.html
	switch(screenToShow){
    case 0:
      drawWelcomeScreen();
      break;
    case 1:
      drawSunScreen();
      break;
    case 2:
      drawMoonScreen();
      break;
    case 3:
      drawTotalSunScreen();
      break;
    case 4:
      drawPartialSunScreen();
      break;
    case 5:
      drawAnnularSunScreen();
      break;
    case 6:
      drawTotalMoonScreen()
      break;
    case 7:
      drawPartialMoonScreen()
      break;
    case 8:
     	drawPenumbralMoonScreen()
      break;
  }
}

function mouseClicked() {
  if (wait>20) {
    wait=0;
    // Lunar or Solar Screens
    if (screenToShow>0 && screenToShow<=2) {
      screenToShow=0;
    } else if (screenToShow>2 && screenToShow<6) {//Solar Eclipse Screens
      	screenToShow=1;
    } else {//Lunar Eclipse Screens
      		screenToShow=2;
  	}
  }
}

/*
* This function shows the first screen of the story.
*	It gives the user the option to choose between Moon or Sun.
*/
function drawWelcomeScreen() {
  drawUniverseBackground();
  
  // Instructions
  txtColor = 190;
  fill(txtColor);
  txtTop = "Welcome to the Solar and Lunar Eclipses Simulator";
  textSize(20);
  text("Click the Moon or Sun to continue...", 0, 250, canvasSize);
  
  // Left Button
	drawButton(xL1ButtonPos,yButtonPos,buttonSize,"orange",100,"Solar",1);
  drawSun(xL1ButtonPos,yButtonPos,buttonSize/2,0);
  // Right Button
  drawButton(xR1ButtonPos,yButtonPos,buttonSize,"purple","lightgreen","Lunar",2);
  drawMoon(xR1ButtonPos,yButtonPos,buttonSize/2,0);
}

/*
* This function draws a blue sky with full Sun.
*/
function drawSunScreen() {
  background(color(0, 143, 179));
  // Instructions
  txtColor = 0;
  txtTop = "Click on the Eclipse type you want to see.";
  textSize(15);
  text("Click anywhere else to restart.",0,100,canvasSize)
  
  drawSun(100,75,200,0);
  // Left Button
	drawButton(xL2ButtonPos,yButtonPos,buttonSize,0,100,"Total",3);
  drawSun(xL2ButtonPos,yButtonPos,buttonSize/2,1);
  // Center Button
	drawButton(xCButtonPos,yButtonPos,buttonSize,color(0, 34, 51),100,"Partial",4);
  drawSun(xCButtonPos,yButtonPos,buttonSize/2,2);
  // Right Button
	drawButton(xR2ButtonPos,yButtonPos,buttonSize,color(26, 6, 0),100,"Annular",5);
  drawSun(xR2ButtonPos,yButtonPos,buttonSize/2,3);
}

/*
* This function draws total solar eclipse.
*/
function drawTotalSunScreen() {
  drawUniverseBackground();
  background(color(255, 30));
  // Instructions
  txtColor = 200;
  txtTop = "This is a TOTAL SOLAR ECLIPSE";
  textSize(15);
  text("Click anywhere to go back",0,100,canvasSize);
  
  drawSun(100,75,200,1);
}

/*
* This function draws partial solar eclipse.
*/
function drawPartialSunScreen() {
  background(color(0, 34, 51));
  // Instructions
  txtColor = 255;
  txtTop = "This is a PARTIAL SOLAR ECLIPSE";
  textSize(15);
  text("Click anywhere to go back",0,100,canvasSize);
  
  drawSun(100,75,200,2);
}

/*
* This function draws annular solar eclipse.
*/
function drawAnnularSunScreen() {
  drawUniverseBackground();
  background(color(255, 102, 0, 40));
  // Instructions
  txtColor = 255;
  txtTop = "This is a ANNULAR SOLAR ECLIPSE";
  textSize(15);
  text("Click anywhere to go back",0,100,canvasSize);
  
  drawSun(100,75,200,3);
}

/*
* This function draws a blue sky.
*/
function drawMoonScreen() {
  drawUniverseBackground();
  // Instructions
  txtColor = 255;
  txtTop = "Click on the Eclipse type you want to see.";
  textSize(15);
  text("Click anywhere else to restart.",0,100,canvasSize)
  
  drawMoon(100,75,200,0);
  // Left Button
  drawButton(xL2ButtonPos,yButtonPos,buttonSize,color(10),"lightgreen","Total",6);
  drawMoon(xL2ButtonPos,yButtonPos,buttonSize/2,1);
  // Center Button
  drawButton(xCButtonPos,yButtonPos,buttonSize,color(10),"lightgreen","Partial",7);
  drawMoon(xCButtonPos,yButtonPos,buttonSize/2,2);
  // Right Button
  drawButton(xR2ButtonPos,yButtonPos,buttonSize,color(10),"lightgreen","Penumbral",8);
  drawMoon(xR2ButtonPos,yButtonPos,buttonSize/2,3);
}

/*
* This function draws total solar eclipse.
*/
function drawTotalMoonScreen() {
  drawUniverseBackground();
  // Instructions
  txtColor = 255;
  txtTop = "This is a TOTAL LUNAR ECLIPSE";
  textSize(15);
  text("Click anywhere to go back",0,100,canvasSize);
  
  drawMoon(100,75,200,1);
}

/*
* This function draws partial solar eclipse.
*/
function drawPartialMoonScreen() {
  drawUniverseBackground();
  // Instructions
  txtColor = 255;
  txtTop = "This is a PARTIAL LUNAR ECLIPSE";
  textSize(15);
  text("Click anywhere to go back",0,100,canvasSize);
  
  drawMoon(100,75,200,2);
}

/*
* This function draws annular solar eclipse.
*/
function drawPenumbralMoonScreen() {
  drawUniverseBackground();
  // Instructions
  txtColor = 255;
  txtTop = "This is a PENUMBRAL LUNAR ECLIPSE";
  textSize(15);
  text("Click anywhere to go back",0,100,canvasSize);
  
  drawMoon(100,75,200,3);
}

/*
* This function draws a black background with pseudo-random cicles to
*	simulate a universe.
*/
function drawUniverseBackground() {
  background(0);
  fill(255);
  noStroke();
  randomSeed(55);
	for (var i = 0; i < 5000; i++) {
  	var x = random(0, 600);
    var y = random(0, 600);
    // Random width from 1 to 10 with higher incidency of low numbers.
    var w = 1+floor(10 * (pow(random(), 50)));
  	ellipse(x,y,w/2);
	}
}

/*
* Draws a Sun.
* Expects position x, y, diameter(d) and type of Sun(0-3).
*/ 
function drawSun(x,y,d,type) {
  var spikes=16;
  var rotation=PI/6;
  push();
  // Followed multiple option example in https://p5js.org/examples/interaction-snake-game.html
  switch (type) {
    case 0://Normal
      fill('yellow');
  		stroke(0);
  		ellipse(x+d,y+d,d);
      break;
    case 1://Total
      spikes = 32;
      rotation = PI/16
      fill(255);
      stroke(0);
  		ellipse(x+d,y+d,d);
      fill(0);
      stroke(0);
  		ellipse(x+d,y+d,d-(d/30));
      fill(255);
      break;
    case 2://Partial
      spikes = 5;
      fill(color(255, 153, 0));
      stroke(0);
  		ellipse(x+d,y+d,d);
      fill(color(0, 34, 51));
      noStroke();
  		ellipse(x+d-(d/3),y+d+(d/5),d*(1.3));
      fill(color(255, 153, 0));
      stroke(0);
      break;
    case 3://Annular
      spikes = 32;
      rotation = PI/16
      fill(color(255, 153, 0));
      stroke(0);
  		ellipse(x+d,y+d,d);
      fill(0);
      noStroke();
  		ellipse(x+d,y+d,d-(d/8));
      fill(color(255, 153, 0));
      stroke(0);
      break;
  }
  
  // Spikes
  translate(x+d,y+d);
  for (i=0; i<spikes; i++) {
    triangle(-d/10,-d/2,d/10,-d/2,0,-(d/2*1.5));
    rotate(rotation);
  }
  pop();
}

/*
*	Draws a Moon.
* Expects position x, y, diameter(d) and type of Moon(0-3).
*/
function drawMoon(x,y,d,type) {
  var partial = false;
  push();
  // Followed multiple option example in https://p5js.org/examples/interaction-snake-game.html
  switch (type) {
    case 0://Normal
      fill('grey');
  		stroke(0);
  		ellipse(x+d,y+d,d);
      break;
    case 1://Total
      fill(100, 15, 0);
      stroke(0);
  		ellipse(x+d,y+d,d);
      break;
    case 2://Partial
      fill('grey');
      stroke(0);
  		ellipse(x+d,y+d,d);
      partial=true;
      break;
    case 3://Penumbral
      fill(50);
  		stroke(0);
  		ellipse(x+d,y+d,d);
      break;
  }
  
  // Craters
  randomSeed(2);
  for (i=0; i<25; i++) {
    var theta = random(0,2*PI);
    var craterX = sqrt(random(pow(d/2,2)))*cos(theta);// sqrt(r^2)*cos(theta)
    var craterY = sqrt(random(pow(d/2,2)))*sin(theta);// sqrt(r^2)*sin(theta)
    // Random width from 1 to 10 with higher incidency of low numbers.
    var craterDiameter = 1+floor(d/10 * (pow(random(), 5)));
    ellipse(x+d+craterX,y+d+craterY,craterDiameter);
  }
  if(partial) {
    fill(10);
    noStroke();
  	ellipse(x+d-(d/3),y+d+(d/5),d*(1.3));
  }
  pop();
}

/*
* Creates a new square button with the given position and backgrounds.
*/
function drawButton(x,y,wh,backgroundColor,clickBackgroundColor,txt,action){
  push();
  textSize(txtSize);
  textAlign(CENTER);
  text(txt, x, y+wh+txtSize,wh);
  // Mouse Hover
  if (checkMouse(x,y)) {
    // Mouse Click
  	if (wait>20) {
      if(mouseIsPressed) {
      	wait=0;
    		screenToShow = action;
      }
  	}
    fill(clickBackgroundColor);
  	rect(x,y,wh,wh);
  } else {
  	fill(backgroundColor);
    rect(x,y,wh,wh);
  }
  pop();
}

/*
* Sun class.
* Expect position x and y.
*	Followed example in https://p5js.org/examples/objects-multiple-objects.html
*/
function checkMouse(x,y){
  if (mouseX >= x && mouseX <= x+buttonSize && mouseY >= y && mouseY <= y+buttonSize) {
		return true;
  } else {
    return false;
  }
}

/*
* This is a shotcut to test the screens
*/
function screenTester() {
  if(key == "0") {
    drawWelcomeScreen();
  } else if (key == "1") {
    drawSunScreen();
  } else if (key == "2") {
    drawMoonScreen();
  } else if (key == "3") {
    drawTotalSunScreen();
  } else if (key == "4") {
    drawPartialSunScreen();
  } else if (key == "5") {
    drawAnnularSunScreen();
  } else if (key == "6") {
    drawTotalMoonScreen();
  } else if (key == "7") {
    drawPartialMoonScreen();
  } else if (key == "8") {
    drawPenumbralMoonScreen();
  }
}