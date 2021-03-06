/*
 * Lunar and Solar Eclises that can be drawn on a Star Sky or Blue Sky
 * Depending on the user's choice.
 *
 * # To draw something:
 * --Select the desired background from the purple console.
 * --Select the desired figure from the green console.
 * --Set the Scale with orange console slider.
 * --Then click on any section of the background and your figure will appear.
 * NOTE: Changing the background clears the canvas.
 */

/*            Global variables            */
////////////////////////////////////////////
// Button Variables
var bSize = 45;// Button width(buttons are squares)
var yBPos = 515;// Main button Y postion
var day = false; // Background option, [Day] or [Not Day](Night)
var selF = 0; // The selected character(figure), that gets painted with clicks.
var selB = 8; // The selected background.
// Other variables.
var txtColor = 255;// The text color.
var canvasSize = 600;// The size of the canvas.
var sSlider; // The Scale Slider.
var scale = 0; // This is our scale detemined by the slider.
////////////////////////////////////////////
/*
 * Canvas Setup.
 */
function setup() {
  // Create out canvas.
  createCanvas(canvasSize, canvasSize);
  // Draw the default background, stars.
  drawScreen();
  // Add the scale slider.
  sSlider = createSlider(4, 100, 50, 2);
}

/*
 * Main Draw function.
 */
function draw() {
  // Draw the buttons so that they always show on top.
  drawButtons();
}

/*
 * Draws the set of buttons with their attributes and action, and
 * their background.
 */
function drawButtons() {
  // The diameter of the button figure, it will be used to move the figure
  // to the center of the button.
  var d = bSize/2;
  txtColor = 0;
  // Paint the figure buttons background.
  push();
  fill(color(41, 163, 41));
  rect(0,yBPos-15,canvasSize,yBPos-15)
  pop();
  
  // Paint the buttons
  // Full yellow Sun
  drawButton(xBPos(0),yBPos,bSize,"orange",100,"Solar",0);
  drawSun(xBPos(0)+d,yBPos+d,d,0);
  // Total Solar Eclipse Button
	drawButton(xBPos(1),yBPos,bSize,0,100,"Total",1);
  drawSun(xBPos(1)+d,yBPos+d,d,1);
  // Partial Solar Eclipse Button
	drawButton(xBPos(2),yBPos,bSize,color(0, 34, 51),100,"Partial",2);
  drawSun(xBPos(2)+d,yBPos+d,d,2);
  // Annular Solar Eclipse Button
	drawButton(xBPos(3),yBPos,bSize,color(26, 6, 0),100,"Annular",3);
  drawSun(xBPos(3)+d,yBPos+d,d,3);
  // Full gray Moon
  drawButton(xBPos(4),yBPos,bSize,"purple","lightgreen","Lunar",4);
  drawMoon(xBPos(4)+d,yBPos+d,d,0);
  // Total Lunar Eclipse Button
  drawButton(xBPos(5),yBPos,bSize,color(10),"lightgreen","Total",5);
  drawMoon(xBPos(5)+d,yBPos+d,d,1);
  // Partial Lunar Eclipse Button
  drawButton(xBPos(6),yBPos,bSize,color(10),"lightgreen","Partial",6);
  drawMoon(xBPos(6)+d,yBPos+d,d,2);
  // Penumbral Lunar Eclipse Button
  drawButton(xBPos(7),yBPos,bSize,color(10),"lightgreen","Penumbral",7);
  drawMoon(xBPos(7)+d,yBPos+d,d,3);
  
  // Paint the background buttons background and text.
  push();
  fill(color(187, 51, 255));
  rect(xBPos(8)+6,yBPos-15,canvasSize-xBPos(8)-6,canvasSize-yBPos+15);
	fill(txtColor);
  textSize(15);
  text("Background", xBPos(8)+30,yBPos+4);
  pop();
  
  // Paint the buttons
  // Partial Lunar Eclipse Button
  drawButton(xBPos(8)+20,yBPos+10,bSize,color(10),"lightgreen","Stars",8);
  drawUniverseBackground(xBPos(8)+25,yBPos+15,bSize-10);
  // Penumbral Lunar Eclipse Button
  drawButton(xBPos(9)+20,yBPos+10,bSize,color(0, 34, 51),100,"Clouds",9);
  drawBlueSky(xBPos(9)+25,yBPos+15,bSize-10);
  
  // Paint the slider.
  push();
  // Slider properties
  sSlider.position(xBPos(0), yBPos+60);
  sSlider.size(xBPos(7));
  
  // Slider background
  fill(color(179, 119, 0));
  rect(0,yBPos+60,xBPos(8)+6,canvasSize-yBPos-60)
  
  // Slider text
  fill(txtColor);
  textSize(13);
  text("Scale", sSlider.x + sSlider.width+6, yBPos+76);
  text(sSlider.value(), sSlider.x -15, yBPos+76);
  pop();
}

/*
 * Draws the background screen depending on the selection(background buttons).
 */
function drawScreen() {
  // If the Night button is selected(selB=8), draw a night backgound,
  // otherwise(selB=9), draw a day background.
  if(selB==8) {
      drawNightScreen();
  } else {
      drawDayScreen();
  }
}

/*
 * Draws the Character(Sun or Moon) equal to the image of the currently
 * selected button, on the given position and with the given scale.
 */
function drawMyChar(x,y,scale) {
  // If the selected character is any of the Suns(button values 0-3),
  // call drawSun with the given values(x,y,scale) and the value of the
  // selection. 
  if(selF<4) {
    drawSun(x,y,scale,selF);
  // If a Moon is selected(button values 4-7), then
  // call drawMoon with the given values(x,y,scale) and the value of the
  // selection MODULO 4(to make it 0-3). 
  } else {
    drawMoon(x,y,scale,selF%4);
  }
}

/*
 * This function gets called with every mouse click.
 * it will paint our character(fugire) on the canvas when inside the drawing
 * area boundaries.
 */
function mouseClicked() {
  // If the mouse click happened on the painting area(not the button area)
  // Draw the selected figure over there.
  if(mouseY < yBPos) {
		drawMyChar(mouseX, mouseY, sSlider.value())
  }
}

/*
 * This function draws a night sky.
 */
function drawNightScreen() {
  // Draw our Night Stars
  drawUniverseBackground(0,0,600);
  
  // Instructions
  push();
  // Set color to black
  txtColor=255;
  fill(txtColor);
  
  // Now paint the instructions with size 25 and Center alignment.
  textSize(20);
  textAlign(CENTER);
  text("Select the background, figure, and scale you want to paint and then click on the canvas.", 0, 20, canvasSize);
  pop();
}

/*
 * This function draws a blue sky.
 */
function drawDayScreen() {
  // Draw blue sky.
  drawBlueSky(0,0,600);
  
  // Instructions
  push();
  // Set color to black
  txtColor=0;
  fill(txtColor);
  
  // Now paint the instructions with size 25 and Center alignment.
  textSize(20);
  textAlign(CENTER);
  text("Select the background, figure, and scale you want to paint and then click on the canvas.", 0, 20, canvasSize);
  pop();
}

/*
 * This function draws a light blue background with some circles to
 * simulate clouds.
 * x,y,w determine the position and the width.
 */
function drawBlueSky(x,y,w) {
  push();
  var cSize = w*50/600;// Cloud Size pixel minimum
  // Draw a light blue background.
  fill(color(0, 143, 179));
  rect(x,y,w,w);
  
  // Paint the "Clouds"
  fill(255,10);
  noStroke();
  randomSeed(1);
  // Draw 20 clouds.
  for (var i = 0; i < 30; i++) {
  	var x1 = random(x+cSize, x+w-cSize);
    var y1 = random(y+cSize, y+w-cSize);
    // Draw a random number of density From 10 to 990.
    var cloudDensity = random(cSize,200);
    for (var j = 0; j < cloudDensity; j++) {
    	var x2 = random(-cSize,cSize);
    	var y2 = random(-cSize,cSize);
   		ellipse(x1+x2,y1+y2,w/20);
  	}
  }
  pop();
}

/*
 * This function draws a black background with pseudo-random cicles(stars) to
 * simulate a universe.
 * x,y,w determine the position and the width.
 */
function drawUniverseBackground(x,y,w) {
  push();
  
  // Paint black background
  fill(0);
  rect(x,y,w,w);
  
  // Paint the "Stars"
  fill(255);
  noStroke();
  randomSeed(55);
	for (var i = 0; i < w*10; i++) {
  	var x1 = random(x, x+w);
    var y1 = random(y, y+w);
    // Random width from 1 to X(X is 10 when 600) with higher incidency of low numbers.
    var w1 = 1+floor((w*10/600) * (pow(random(), 50)));
  	ellipse(x1,y1,w1/2);
	}
  pop();
}

/*
 * Draws a Sun on the given x and y with the given diameter and type.
 * x,y, center of the Sun.
 * d, diameter of the Sun.
 * type, the type of the Sun, 0=full, 1=total, 2=partial, 3=annular.
 */ 
function drawSun(x,y,d,type) {
  var spikes=16;
  var rotation=PI/6;
  push();
  // Paint the Sun according to the type.
  switch (type) {
    default:
    case 0://Full
      fill('yellow');
  		stroke(0);
  		ellipse(x,y,d);
      break;
    case 1://Total
      spikes = 32;
      rotation = PI/16
      fill(255);
      stroke(0);
  		ellipse(x,y,d);
      fill(0);
      stroke(0);
  		ellipse(x,y,d-(d/30));
      fill(255);
      break;
    case 2://Partial
      spikes = 5;
      fill(color(255, 153, 0));
      stroke(0);
  		ellipse(x,y,d);
      fill(color(0, 34, 51));
      noStroke();
  		ellipse(x-(d/3),y+(d/5),d*(1.3));
      fill(color(255, 153, 0));
      stroke(0);
      break;
    case 3://Annular
      spikes = 32;
      rotation = PI/16
      fill(color(255, 153, 0));
      stroke(0);
  		ellipse(x,y,d);
      fill(0);
      noStroke();
  		ellipse(x,y,d-(d/8));
      fill(color(255, 153, 0));
      stroke(0);
      break;
  }
  
  // Spikes
  translate(x,y);
  for (i=0; i<spikes; i++) {
    triangle(-d/10,-d/2,d/10,-d/2,0,-(d/2*1.5));
    rotate(rotation);
  }
  pop();
}

/*
 * Draws a Moon on the given x and y with the given diameter and type.
 * x,y, center of the Moon.
 * d, diameter of the Moon.
 * type, the type of the Moon, 0=full, 1=total, 2=partial, 3=penumbral.
 */ 
function drawMoon(x,y,d,type) {
  var partial = false;
  push();
  // Paint the Moon according to the type.
  switch (type) {
    default:
    case 0://Full
      fill('grey');
  		stroke(0);
  		ellipse(x,y,d);
      break;
    case 1://Total
      fill(100, 15, 0);
      stroke(0);
  		ellipse(x,y,d);
      break;
    case 2://Partial
      fill('grey');
      stroke(0);
  		ellipse(x,y,d);
      partial=true;
      break;
    case 3://Penumbral
      fill(50);
  		stroke(0);
  		ellipse(x,y,d);
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
    ellipse(x+craterX,y+craterY,craterDiameter);
  }
  if(partial) {
    fill(10);
    noStroke();
  	ellipse(x-(d/3),y+(d/5),d*(1.3));
  }
  pop();
}

/*
 * Creates a new square button with the given position,
 * backgrounds, text, actions and type.
 * x,y, set the postion in the canvas.
 * wh, sets the width and height of the button.
 * bColor, is the background color of the button.
 * hBColor, is the hover color of the button.
 * txt, is the label of the button.
 * action, is the value that gets set to the global variable that tracks the action.
 * isFig, boolean to determine if this is a figure button or a background button(f).
 */
function drawButton(x,y,wh,bColor,hColor,txt,action){
  push();
  // Draw the text and try to center it(25 would be the size of a 100 wh button).
  var txtSize = wh*25/100;
  fill(txtColor);
  textSize(txtSize);
  textAlign(CENTER);
  text(txt, x, y+wh+txtSize,wh);
  
  // If the mouse is over the button, change the background to the hover color.
  // and check if it is pressed to sets the action.
  // otherwise, the mouse is outside the button boundaries, so
  // return the background color to its original color.
  if (checkMouse(x,y,wh,wh)) {
    // set Hover color
    fill(hColor);
  	rect(x,y,wh,wh);
    
    // If the mouse is pressed, set the action depending on isFig.
		if(mouseIsPressed) {
      // If this is a figure button(actions 0-7), set "selF" which determines
      // which figure is currently selected.
      // Otherwise, set "selB" which determines which background is currently
      // selected.
      if(action<8) {
    		selF = action;
      } else {
        selB = action;
        // Draw the canvas background;
        drawScreen();
      }
    }
  } else {
    // Return the background to its original color.
  	fill(bColor);
    rect(x,y,wh,wh);
  }
  
  // If this button is selected([selF or selB] are equal to the [action])
  // then paint a selection square on top of the button.
  if (selF == action || selB == action) {
    // Paint the Selection Square
    fill(color(230, 230, 230, 100));
    noStroke();
  	rect(x-5,y-5,wh+10,wh+10);
  }
  pop();
}

/*
 * This function determines is the cursor position is inside the given rectangle.
 * return true if the cursor is within the boundaries.
 * x,y, the origin of the rectangle.
 * w,h, the width and height.
 */
function checkMouse(x,y,w,h){
  // If the mouseX is bigger than x, smaller than x+w, mouseY bigger than
  // y, and mouseY smaller than y+h, then it means the mouse is inside the
  // rectangle, so return true.
  // otherwise, return false.
  if (mouseX >= x && mouseX <= x+w && mouseY >= y && mouseY <= y+h) {
		return true;
  } else {
    return false;
  }
}

/*
 * Calculates the x postion of a button according to the order and its type.
 * "order" is the position of the button starting from 0(first button).
 */
function xBPos(order) {
  // Mutiply the button size plus separation(10) by the order.
  return 20 + ((10+bSize) * order);
}