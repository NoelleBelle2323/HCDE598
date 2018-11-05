/*
 * Spiral of Moons and Suns that can be drawn on a Star Sky or Cloud Sky
 * depending on the user's choice.
 *
 * # To draw something:
 * --Select the desired background from the purple console.
 * --Select the desired figure from the green console.
 * --Set the Scale with orange console slider.
 * --Set the Spiral type you want to draw with the Combo Boxes.
 * --Then click on any section of the background and your Spiral will appear.
 * NOTE: Changing the background clears the canvas.
 */

/*            Global variables            */
// Button Variables
var buttonSize = 45;// Button width(buttons are squares)
var startingButtonYPosition = 515;// Main button Y postion
var selectedFigure = 0; // The selected character(figure), that gets painted with clicks.
var selectedBackground = 9; // The selected background.
// Other variables.
var txtColor = 255;// The text color.
var canvasSize = 600;// The size of the canvas.
var scaleSlider; // The Scale Slider.
var spiralRadio; // The Spiral option Radio buttons.

/*
 * Canvas Setup.
 */
function setup() {
  // Create out canvas.
  createCanvas(canvasSize, canvasSize);
  // Draw the default background, stars.
  drawScreen();
  // Add the scale slider.
  scaleSlider = createSlider(4, 40, 10, 2);
  // Spiral options
  spiralRadio = createRadio();
  spiralRadio.option('Normal', '0');
  spiralRadio.option('Flower', '1');
  spiralRadio.option('Star', '2');
  spiralRadio.selected('0');
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
  var d = buttonSize/2;
  txtColor = 0;
  // Paint the figure buttons background.
  push();
  fill(color(41, 163, 41));
  rect(0,startingButtonYPosition-15,canvasSize,startingButtonYPosition-15)
  pop();
  
  // Paint the buttons
  // Sun
  drawButton(getButtonXPostion(3),startingButtonYPosition,buttonSize,"orange",100,"Solar",0);
  drawSun(getButtonXPostion(3)+d,startingButtonYPosition+d,d,0);
  
  // Moon
  drawButton(getButtonXPostion(4),startingButtonYPosition,buttonSize,"purple","lightgreen","Lunar",3);
  drawMoon(getButtonXPostion(4)+d,startingButtonYPosition+d,d,0);
  
  // Paint the background button's background and text.
  push();
  fill(color(187, 51, 255));
  rect(getButtonXPostion(8)+6,startingButtonYPosition-15,canvasSize-getButtonXPostion(8)-6,canvasSize-startingButtonYPosition+15);
	fill(txtColor);
  textSize(15);
  text("Background", getButtonXPostion(8)+30,startingButtonYPosition+4);
  pop();
  
  // Paint the background buttons
  // Partial Lunar Eclipse Button
  drawButton(getButtonXPostion(8)+20,startingButtonYPosition+10,buttonSize,color(10),"lightgreen","Stars",8);
  drawUniverseBackground(getButtonXPostion(8)+25,startingButtonYPosition+15,buttonSize-10);
  
  // Penumbral Lunar Eclipse Button
  drawButton(getButtonXPostion(9)+20,startingButtonYPosition+10,buttonSize,color(0, 34, 51),100,"Clouds",9);
  drawBlueSky(getButtonXPostion(9)+25,startingButtonYPosition+15,buttonSize-10);
  
  // Paint the slider and redio buttons.
  push();
  // Slider properties
  scaleSlider.position(getButtonXPostion(0), startingButtonYPosition+60);
  scaleSlider.size(getButtonXPostion(7));
  
  // Slider background
  fill(color(179, 119, 0));
  rect(0,startingButtonYPosition+60,getButtonXPostion(8)+6,canvasSize-startingButtonYPosition-60)
  
  // Slider text
  fill(txtColor);
  textSize(13);
  text("Scale", scaleSlider.x + scaleSlider.width+6, startingButtonYPosition+76);
  text(scaleSlider.value(), scaleSlider.x -15, startingButtonYPosition+76);
  
  // Radio properties
  spiralRadio.position(getButtonXPostion(6), startingButtonYPosition);
  spiralRadio.size(80);
  // Radio text
  text("Spiral Type", getButtonXPostion(6) , startingButtonYPosition)
  pop();
}

/*
 * Draws the background screen depending on the selection(background buttons).
 */
function drawScreen() {
  // If the Night button is selected(selectedBackground=8), draw a night backgound,
  // otherwise(selectedBackground=9), draw a day background.
  if(selectedBackground==8) {
      drawNightScreen();
  } else {
      drawDayScreen();
  }
}

/*
 * Draws an Archimedean Spiral http://mathworld.wolfram.com/ArchimedesSpiral.html
 * More information about spirals http://www.mathematische-basteleien.de/spiral.htm
 * x,y  	Center of the spiral.
 * scale	Size of the spiral figures.
 * type 	The type of the spiral. Normal(0), Flower(1), Star(2).
 */
function drawSpiral(x,y,scale,type) {
  var a;// An arbitrary constant that helps determine the separation of the spiral lines
  var r;// Basically the size of the spiral
  var spiralLimit;// The amount of figures to paint.
  
  // Select between 3 type of spirals
  switch (type) {
    default:
    // Normal Spiral
    case '0':
    	a = 1;
    	r = 2;
    	spiralLimit = 1000;
      break;
    // Flower type
    case '1':
    	a = 0.5;
    	r = 5;
    	spiralLimit = 500;
      break;
    // Star type
    case '2':
    	a = 0.25;
    	r = 10;
    	spiralLimit = 300;
      break;
  }
 	// The spiral equation is "r=aθ"; to convert polar coordinates we use
  // "x=rcosθ" and "y=rsinθ" therefore, the cartesian equations for the
  // spiral are: "x=aθcosθ",  "y=aθsinθ"
  for(var i=0; i<spiralLimit; i=i+5) {
    var theta = radians(i*r);
    var x1 = x + a * theta * r * cos(theta);//x1=x+aθcosθ
    var y1 = y + a * theta * r * sin(theta);//y1=y+aθsinθ
    
    // Figures have 3 styles(0-2) this is why I use the remainder of the
    // division by 3 to alternate between those.
    // I also sum i to help with the alternation.
    var styleToDraw = (selectedFigure+i)%3;
    
    // If the selected character is any of the Suns(button values 0-2),
  	// call drawSun.
  	if(selectedFigure==0) {
      // https://www.w3schools.com/jsref/met_win_settimeout.asp
      // Learned this from https://www.youtube.com/watch?v=nGfTjA8qNDA
      setTimeout(drawSun, i+200,x1,y1,scale,styleToDraw);
  	// If a Moon is selected(button values 3-5), then
  	// call drawMoon.
  	} else {//3
      // https://www.w3schools.com/jsref/met_win_settimeout.asp
      // Learned this from https://www.youtube.com/watch?v=nGfTjA8qNDA
      setTimeout(drawMoon, i+200,x1,y1,scale,styleToDraw);
  	}
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
  if(mouseY < startingButtonYPosition) {
		drawSpiral(mouseX, mouseY, scaleSlider.value(), spiralRadio.value())
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
 * x,y,w Determine the position and the width.
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
 * x,y,w Determine the position and the width.
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
 * x,y  	Center of the Sun.
 * d	 		Diameter of the Sun.
 * type 	The type of the Sun, 0=full, 1=total, 2=partial.
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
    case 2://Annular
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
 * x,y 		Center of the Moon.
 * d 			Diameter of the Moon.
 * type 	The type of the Moon, 0=full, 1=total, 2=partial.
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
    case 2://Penumbral
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
 * x,y 			Sets the position in the canvas.
 * wh 			Sets the width and height of the button.
 * bColor 	The background color of the button.
 * hBColor	The hover color of the button.
 * txt			The label of the button.
 * action 	The value that gets set to the global variable that tracks the action.
 * isFig	 	Determines if this is a figure button or a background button(f).
 */
function drawButton(x,y,wh,bColor,hColor,txt,action){
  push();
  // Draw the text and try to center it(25 would be the size of a 100 wh button).
  fill(txtColor);
  var txtSize = wh*25/100;
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
    
    // If the mouse is pressed, set the action to selectedFigure.
		if(mouseIsPressed) {
      // If this is a figure button(actions 0-7), set "selectedFigure" which determines
      // which figure is currently selected.
      // Otherwise, set "selectedBackground" which determines which background is currently
      // selected.
      if(action<8) {
    		selectedFigure = action;
      } else {
        selectedBackground = action;
        // Draw the canvas background;
        drawScreen();
      }
    }
  } else {
    // Return the background to its original color.
  	fill(bColor);
    rect(x,y,wh,wh);
  }
  
  // If this button is selected([selectedFigure or selectedBackground] are equal to the [action])
  // then paint a selection square on top of the button.
  if (selectedFigure == action || selectedBackground == action) {
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
 * x,y 	The origin of the rectangle.
 * w 		The width.
 * h		The height.
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
 * Order 	The position(location on the bar) of the button starting from 0(first button).
 */
function getButtonXPostion(order) {
  // Mutiply the button size plus separation(10) by the order.
  return 20 + ((10+buttonSize) * order);
}