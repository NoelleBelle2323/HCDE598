/*
 * Open canvas
 *
 * [Open Canvas is an interactive program which allows users to customize their own 
 * drawing by interacting with a tool bar of predefined figures, tools and backgrounds]
 *
 * INSTRUCTIONS
 *
 * # Set Background:
 * --Select the desired background from the Orange Console.
 *
 * # To add figures:
 * --Select the desired figure from the Green Console.
 * --Click ONE time on any section of the background and your figure will show up.
 * --Move the mouse until you reach your desired size.
 * --Click A SECOND time to save the position and size.
 * --You can keep repeat the process with different figures.
 *
 * # To Move figures:
 * --Select the Move Tool from the Purple Console.
 * --Notice the figures get a gray square around them, these are the figures' boundaries.
 * --Use the Mouse to Press and Drag any of those boundary boxes and the figure will start moving.
 * --Release the Mouse and the figure's new position will be saved.
 *
 * # To Erase figures:
 * --Select the Erase Tool from the Purple Console.
 * --Notice the figures get a gray square around them, these are the figures' boundaries.
 * --Click inside any of those boundaries and the figure will be removed.
 *
 * # NOTES:
 * --Every figure has a predefined animation.
 * --Clicking the background buttons clears the canvas.
 * --The order of the figures is determined by the order on which they were added to the Canvas.
 * --When using the Erase or Move tool on top of stacked figures, the Top-Most figure would be the only one to move or get erased.
 */

/*                            Global variables                            */
// Canvas variables.
var canvasSize = 800;// The size of the canvas.
var textColor = 255;// Default text color is black.

// Button Variables
var buttonSize = canvasSize/20;// Button width(buttons are squares)
var startingButtonYPosition = canvasSize-60;// Main button Y postion.

// Arrays
var figureArray = [];// Arrays of Figures
var buttonArray = [];// Arrays of Buttons

// Status Variables
var selectedButton = 0; // The selected character(figure), that gets painted with clicks.
var selectedBackground = 14; // The selected background.
var paintingFigure = false; // Is a figure being painted or not.
var movingFigure = -1; // Moving figure index, -1 means no figure is being moved.
var animationCounter = 0; // The animation counter is how many times has the draw method looped.

/*
 * Canvas Setup.
 */
function setup() {
  // Create out canvas.
  createCanvas(canvasSize, canvasSize);
  
  // Create the Buttons instances.
  createButtons();
}

/*
 * Creates the set of Buttons instances with their attributes and action, and
 * their background.
 */
function createButtons() {
  // FIGURE BUTTONS
  // Full yellow Sun
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length),startingButtonYPosition,
                              buttonSize,"orange",100,"Solar",0,buttonArray.length));
  // Total Solar Eclipse Button
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length),startingButtonYPosition,
                              buttonSize,color(10),100,"Total",0,buttonArray.length));
  // Annular Solar Eclipse Button
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length),startingButtonYPosition,
                              buttonSize,color(26, 6, 0),100,"Annular",0,buttonArray.length));
  // Full gray Moon
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length),startingButtonYPosition,
                              buttonSize,"purple","lightgreen","Lunar",0,buttonArray.length));
  // Total Lunar Eclipse Button
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length),startingButtonYPosition,
                              buttonSize,color(50),"lightgreen","Total",0,buttonArray.length));
  // Penumbral Lunar Eclipse Button
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length),startingButtonYPosition,
                              buttonSize,color(150),"lightgreen","Penumbral",0,buttonArray.length));
  // Rainbow
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length),startingButtonYPosition,
                              buttonSize,"cyan","lightgreen","Rainbow",0,buttonArray.length));
  // Bird
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length),startingButtonYPosition,
                              buttonSize,"lightblue","lightgreen","Bird",0,buttonArray.length));
  // Tree
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length),startingButtonYPosition,
                              buttonSize,color(200),"lightgreen","Tree",0,buttonArray.length));
  // Cloud with rain
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length),startingButtonYPosition,
                              buttonSize,color(200),"lightgreen","Mountain",0,buttonArray.length));
  // Flower
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length),startingButtonYPosition,
                              buttonSize,"lightblue","lightgreen","Flower",0,buttonArray.length));
  // Move tool Button
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length)+11,startingButtonYPosition,
                              buttonSize,color(150),"lightgreen","Move",0,buttonArray.length));
  // Eraser Button
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length)+11,startingButtonYPosition,
                              buttonSize,color(150),"lightgreen","Erase",0,buttonArray.length))
  
  
  // BACKGROUND BUTTONS
  // Space background Button
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length)+20,startingButtonYPosition,
                              buttonSize,color(10),"lightgreen","Stars",0,13));
  
  // Blue Sky Background Button
  buttonArray.push(new Button(getButtonXPostion(buttonArray.length)+20,startingButtonYPosition,
                              buttonSize,color(0, 34, 51),100,"Clouds",0,14));
}

/*
 * Main Draw function.
 */
function draw() {
  // Draw the selected background.
  drawScreen();
  
  // Draw the added figures using the global figureArray.
	drawFigures();
  
  // Draw the button toolbar last so that it always show on top.
  drawToolbar();
}

/*
 * Draws the button toolbar and calls show() on its Buttons to display them.
 */
function drawToolbar() {
  // Paint the Figure Buttons Console.
  push();
  fill(color(41, 163, 41));
  rect(0,startingButtonYPosition-30,canvasSize,canvasSize-(startingButtonYPosition-30));
	fill(textColor);
  textSize(15);
  text("Figures", getButtonXPostion(5),startingButtonYPosition-8);
  pop();
  
  // Paint the Tools Buttons Console.
  push();
  fill(color(187, 51, 255));
  rect(getButtonXPostion(11)+6,startingButtonYPosition-30,canvasSize-getButtonXPostion(11)-6,
       canvasSize-startingButtonYPosition+30);
	fill(textColor);
  textSize(15);
  text("Tools", getButtonXPostion(11)+35,startingButtonYPosition-8);
  pop();
  
  // Paint the Background Buttons Console.
  push();
  fill(color(153, 61, 0));
  rect(getButtonXPostion(13)+6,startingButtonYPosition-30,canvasSize-getButtonXPostion(13)-6,
       canvasSize-startingButtonYPosition+30);
	fill(textColor);
  textSize(15);
  text("Background", getButtonXPostion(13)+25,startingButtonYPosition-8);
  pop();
  

  // Display the buttons.
  for(var i=0; i<15; i++) {
    buttonArray[i].show();
  }
}

/*
 * Draws the background screen depending on the user's selection(Background Buttons).
 */
function drawScreen() {
	// Get the Sky Instance depending on the selected Background and display it.
  var sky = getFigure(canvasSize/2,canvasSize/2,canvasSize/2,selectedBackground);
  sky.show();

  // Only show the instructions if no figures have been placed.
  if (figureArray.length < 1) {
    push();
    
    // Set the text color depending on the selected Background.
    if (selectedBackground == 14) {
    	textColor=0;
    } else {
      textColor=255;
    }
    fill(textColor);

    // Now paint the instructions with size 25 and Center alignment.
    textSize(20);
    textAlign(CENTER);
    text("Select the background and figure you want to paint, " +
         "then click on the canvas to add it. Add as many figures you want!",
         0, 20, canvasSize);
    pop();
  }
  
}

/*
 * Draws and animates the figures in the figureArray.
 */
function drawFigures() {
  // True is the animationCounter Limit(5) is reached.
  var counterLimitReached = animationCounter>=5;
  
  // Traverse the figureArray and display(call show()) all the figures on it.
  for (var i = 0; i < figureArray.length; i++) {
  	figureArray[i].show();
    // Apply an animation change
    if (counterLimitReached) {
    	figureArray[i].changeAnimation();
    }
  }
  
  // Reset the animation counter if we reached the limit(5).
  // Otherwise increase the counter.
  if (counterLimitReached) {
    animationCounter=0;
  } else {
    animationCounter++;
  }
}

/*
 * This function gets called with every Mouse click.
 * The first click will add the selected Figure to the mouse coordinates and
 * add it to the figureArray.
 * The second click will set the figure's position and size.
 */
function mouseClicked() {
  // If the mouse click happened on the painting area(not the Button area).
  // Draw the selected Figure on the mouse coordinates and add it to the figureArray.
  if (mouseY < startingButtonYPosition-15) {
    // IF the Erase button is selected. Call the eraseFigure() function.
  	// 	ELSE, IF the Move Tool is not selected, initiate/finish the painting(resize) process.
    if (selectedButton == 12) {
      
      paintingFigure = false;// No Figure should be in the process of being painted(resizing).
      movingFigure = -1;// No Figure should be moving.
      eraseFigure(mouseX, mouseY);
    } else if (selectedButton != 11) {
      
      movingFigure = -1;// No Figure should be moving now.
      paintingFigure = !paintingFigure;// Toggle paiting(resize) Figure.
			
      // If we are currently painting a Figure(First Click), add a new instance of the selected
      // Figure to the figureArray.
      // Otherwise, do nothing(Second Click).
      if (paintingFigure) {     
        var figure = getFigure(mouseX,mouseY,30,selectedButton);
        figureArray.push(figure);
    	}
    }
  }
}

/*
 * This function gets called when the Mouse is pressed
 * It is used for the move tool.
 */
function mousePressed() {
  // If the Mouse Press happened on the painting area(not the Button area), and the
  // Move Tool is selected, call the setMovingFigure function with the Mouse
  // coordinates to figure out which Figure was clicked and start its moving process.
  if (mouseY < startingButtonYPosition-15 && selectedButton == 11) {
      paintingFigure = false;// No Figure should be in the process of being painted(resizing).
      setMovingFigure(mouseX,mouseY);
  }
}

/*
 * This function gets called when the Mouse is dragged.
 * It is used for the Move Tool.
 */
function mouseDragged() {
  // If we are currently moving a figure, update its position to the Mouse coordinates.
  if (movingFigure != -1 && selectedButton == 11) {
    var newX = mouseX;
    var newY = mouseY;
    
  	// The next set of conditions, won't let the Figure Center be moved outside
    // the Canvas Boundaries.
    if (mouseX < 0) {
      newX = 0;
    }
    if (mouseX > canvasSize) {
      newX = canvasSize;
    }
    if (mouseY < 0) {
       newY = 0;
    }
    if (mouseY > startingButtonYPosition-15) {
       newY = startingButtonYPosition-15;
    }
    
    // Change the position to the new Mouse Coordinates.
    figureArray[movingFigure].changePosition(newX,newY);
  }
}

/*
 * This function gets called when the Mouse is released.
 * It is used for the Move Tool.
 */
function mouseReleased() {
	 // If a Figure is moving (not -1), stop moving it by setting movingFigure to -1.
   if (movingFigure != -1) {
     movingFigure = -1;
   }
}

/*
 * This function gets called with every Mouse Move.
 * It changes the latest added Figure's size if paintingFigure is true.
 */
function mouseMoved() {
  // If the Mouse Move happened in the Canvas Area(not the Button Area),
  // and neither the Move Tool or Erase Tool are selected, change the most
  // recently added Figure's size in accordance to the current Mouse Coordinates.
  if(mouseY < startingButtonYPosition-15) {
    if (paintingFigure && selectedButton != 11 && selectedButton != 12) {
      figureArray[figureArray.length-1].changeSize(mouseX,mouseY);
    }
  }
}

/*
 * Erases the top-most Figure for which the given coordinates are inside its boundaries.
 * If the coordinates are outside of every Figures' boundaries, no Figure is removed.
 * x,y  	The position to check.
 */
function eraseFigure(x, y) {
  // Traverse the figure array backwards and delete the first Figure for which
  // the Mouse cursor is inside its boundaries.
  for (var i = figureArray.length-1; i >= 0; i--) {
  	if (figureArray[i].isInbounds(x, y)) {
      // Remove a single Array Element starting from position "i".
      // https://love2dev.com/blog/javascript-remove-from-array/
      figureArray.splice(i,1);
      break;// Stop after the first Erase.
    }
  }
}

/*
 * Finds and sets as moving, the top-most Figure for whyich the given coordinates are inside its boundaries.
 * If the coordinates are outside of every Figures' boundaries, nothing is set.
 * x,y  	The position to check.
 */
function setMovingFigure(x,y) {
  // Traverse the figure array backwards and set movingFigure as the index of the first Figure
  // for which the Mouse cursor is inside its boundaries.
  for (var i = figureArray.length-1; i >= 0; i--) {
  	if (figureArray[i].isInbounds(x, y)) {
      movingFigure = i;
      break;// Stop after the finding the first figure to ensure we only move the top-most.
    }
  }
}

/*
 * Returns an instance of a Figure of the provided class(type).
 * x,y  	Center of the Figure.
 * size	 	Size of the Figure.
 * type 	The class/type of the Figure.
 */ 
function getFigure(x,y,size,type) {
  switch (type) {
  	default:
    case 0:// Full Sun
    case 1:// Total Solar Eclipse
    case 2:// Annular Eclipse
			return new Sun(x,y,size,type);
    case 3:// Full Moon
    case 4:// Total Lunar Eclipse
    case 5:// Penumbral Lunar Eclipse
			return new Moon(x,y,size,type%3);
    case 6:// Rainbow
      return new Rainbow(x,y,size);
    case 7:// Bird
      return new Bird(x,y,size);
    case 8:// Tree
      return new Tree(x,y,size);
    case 9:// Mountain
      return new Moutain(x,y,size);
    case 10:// Flower
      return new Flower(x,y,size);
    case 11:// Move Tool
      return new MoveTool(x,y,size);
    case 12:// Eraser
      return new Eraser(x,y,size);
    case 13:// Universe
      return new Universe(x-size,y-size,size*2);
    case 14:// Blue Sky
      return new BlueSky(x-size,y-size,size*2);
  }
}

/*
 * This function determines is the given point is inside the given Rectangle (boundaries).
 * px,py 	The Point to check.
 * x,y 		The origin of the Rectangle.
 * w 			The width.
 * h			The height.
 */
function checkPoint(px,py,x,y,w,h) {
  // If px is bigger than x, px smaller than x+w, py bigger than y, and py smaller than y+h,
  // then it means the mouse is inside the rectangle, so return true.
  // Otherwise, return false.
  if (px >= x && px <= x+w && py >= y && py <= y+h) {
		return true;
  } else {
    return false;
  }
}

/*
 * Sets the Button state global variables according to the passed action.
 * action 	The position(location on the bar) of the Button starting from 0(First Button).
 */
function setStateVariables(action) {
  // If this is a non-background action(actions 0-12), set "selectedButton" which determines
  // which Figure or Tool is currently selected.
  // Otherwise, set "selectedBackground" which determines which Background is currently
  // selected and delete everything in the Canvas.
  if(action<13) {
    selectedButton = action;
  } else {
    selectedBackground = action;
    // Clear then figureArray to empty the Canvas;
    figureArray = [];
  }
}

/*
 * Calculates the X postion of a Button according to the given order.
 * Order 	The position(location on the bar) of the Button starting from 0(First Button).
 */
function getButtonXPostion(order) {
  // Mutiply the Button size determined by the Canvas size,
  // plus separation(also determined by the Canvas size) by the order.
  return (canvasSize/40) + ((canvasSize/80)+buttonSize) * order;
}

/*
 * The Sun class paints a Sun on the given x and y, with the given diameter and of the specified type.
 */ 
class Sun {
  /*
   * Creates an instance of the class.
   * x,y  	Center of the Sun.
   * d	 		Diameter of the Sun.
   * type 	The type of the Sun; 0=Full, 1=Total, 2=Annular.
   */
  constructor(x,y,d,type) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.type = type;
    this.animate = true;
  }
  
  /*
   * Paints the Sun.
	 */
  show() {
    push();
    var spikes=16;
    var rotation=PI/6;
    // Paint the Sun according to the type.
    switch (this.type) {
      default:
      case 0:// Full Sun
        fill('yellow');
        stroke(0);
        ellipse(this.x,this.y,this.d);
        break;
      case 1:// Total Solar Eclipse
        spikes = 32;
        rotation = PI/16;
        fill(255);
        stroke(0);
        ellipse(this.x,this.y,this.d);
        fill(0);
        stroke(0);
        ellipse(this.x,this.y,this.d-(this.d/30));
        fill(255);
        break;
      case 2:// Annular Solar Eclipse
        spikes = 32;
        rotation = PI/16
        fill(color(255, 153, 0));
        stroke(0);
        ellipse(this.x,this.y,this.d);
        fill(0);
        noStroke();
        ellipse(this.x,this.y,this.d-(this.d/8));
        fill(color(255, 153, 0));
        stroke(0);
        break;
    }
    
    // Rays
    push();
    translate(this.x,this.y);
    
    // Rotate the Rays a little bit so that it looks like animation.
    if (this.animate) {
      rotate(0.1);
    }
    
    // The next loop generates triagles corresponging to the number of spikes,
    // and rotates them according to the rotation index to simulate Sun Rays.
    for (var i=0; i<spikes; i++) {
      triangle(-this.d/10,-this.d/2,this.d/10,-this.d/2,0,-(this.d/2*1.5));
      rotate(rotation);
    }
    pop();
    
    // If the Erase or Move Tools are selected, and this is not a Button Figure,
    // show the Figure boundary box.
    if ((selectedButton == 12 || selectedButton == 11) && (this.y-this.d) < startingButtonYPosition-15) {
      noStroke();
      colorMode(RGB);
      fill(color(220,90));
      rect(this.x-this.d/2-this.d/4,this.y-this.d/2-this.d/4,this.d+this.d/2,this.d+this.d/2);
    }
    pop();
  }
  
  /*
   * Is the given point (x,y) inside the Figure boundaries.
   * x,y 	The point to check.
   */
  isInbounds(x, y) {
    return checkPoint(x,y,this.x-this.d/2-this.d/4,this.y-this.d/2-this.d/4,this.d+this.d/2,this.d+this.d/2);
  }
  
  /*
   * Changes the Figure size dynamically.
   * x,y 	The size limit position.
   */
  changeSize(x,y) {
    this.d=sqrt(pow(x-this.x,2)+pow(y-this.y,2))*2;
  }
  
  /*
   * Changes the Figure position dynamically.
   * x,y 	The new center position.
   */
  changePosition(x,y) {
    this.x=x;
    this.y=y;
  }
  
  /*
   * Changes the Figure animation
   */
	changeAnimation() {
    this.animate=!this.animate;
  }
}

/*
 * The Moon class paints a Moon on the given x and y, with the given diameter and of the specified type.
 */ 
class Moon {
  /*
   * Creates an instance of the class.
   * x,y 		Center of the Moon.
   * d 			Diameter of the Moon.
   * type 	The type of the Moon; 0=Full, 1=Total, 2=Penumbral.
   */
  constructor(x,y,d,type) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.type = type;
    this.animate = true;
  }
  
  /*
   * Paints the Moon.
	 */
  show() {
    push();
    // Paint the Moon according to the type.
    switch (this.type) {
      default:
      case 0:// Full Moon
        fill('grey');
        stroke(0);
        ellipse(this.x,this.y,this.d);
        break;
      case 1:// Total Lunar Eclipse
        fill(100, 15, 0);
        stroke(0);
        ellipse(this.x,this.y,this.d);
        break;
      case 2:// Penumbral Lunar Eclipse
        fill(50);
        stroke(0);
        ellipse(this.x,this.y,this.d);
        break;
    }
  
    // Craters
    // Set the random seed to simulate rotation.
    if(this.animate) {
    	randomSeed(2);
    }
    
    // The next loop paints pseudo-randomly generated Circles inside the main Moon
    // area to simulate craters.
    for (var i=0; i<25; i++) {
      var theta = random(0,2*PI);
      var craterX = sqrt(random(pow(this.d/2,2)))*cos(theta);// sqrt(r^2)*cos(theta)
      var craterY = sqrt(random(pow(this.d/2,2)))*sin(theta);// sqrt(r^2)*sin(theta)
      // Random width from 1 to 10 with higher incidency of low numbers.
      var craterDiameter = 1+floor(this.d/10 * (pow(random(), 5)));
      ellipse(this.x+craterX,this.y+craterY,craterDiameter);
    }
    
    // If the Erase or Move Tools are selected, and this is not a Button Figure,
    // show the Figure boundary box.
    if ((selectedButton == 12 || selectedButton == 11) && (this.y-this.d) < startingButtonYPosition-15) {
      noStroke();
      colorMode(RGB);
      fill(color(220,90));
      rect(this.x-this.d/2,this.y-this.d/2,this.d,this.d);
    }
    pop();
  }
  
  /*
   * Is the given point (x,y) inside the Figure bounds.
   * x,y 	The point to check.
   */
  isInbounds(x, y) {
    return checkPoint(x,y,this.x-this.d/2,this.y-this.d/2,this.d,this.d);
  }
  
  /*
   * Changes the Figure size dynamically.
   * x,y 	The size limit position.
   */
  changeSize(x,y) {
    this.d=sqrt(pow(x-this.x,2)+pow(y-this.y,2))*2;
  }
  
  /*
   * Changes the Figure position dynamically.
   * x,y 	The new center position.
   */
  changePosition(x,y) {
    this.x=x;
    this.y=y;
  }
  
	/*
   * Changes the Figure animation
   */
	changeAnimation() {
    this.animate=!this.animate;
  }
}

/*
 * The Rainbow class paints a Rainbow on the given x and y, and with the given radius.
 */ 
class Rainbow {
  /*
   * Creates an instance of the class.
   * x,y 		Center of the Rainbow.
   * r 			Radius of the Rainbow Arc.
   */
  constructor(x,y,r) {
    this.x = x;
    this.y = y+r/3;
    this.r = r;
    this.animate=true;
  }
  
  /*
   * Paints the Rainbow.
	 */
  show() {
    push();
    var lineWidth = 1;
    strokeWeight(lineWidth);
    noFill();
    
    var bars = this.r/2;// Number of Rainbow color bars that should be painted.
    var dynamicRadius = this.r*1.8;// The decresing radius of the color bars (Arcs).
    
    // Using HSB is better because makes the task of paiting the natural (for Humans) transition of colors, easier.
    colorMode(HSB);
    
    // This loops sets the color of each of the Rainbow Bar transitioning naturally using the HSB Hue.
		for(var i = 0; i < bars; i++) {
      var saturation;
      
      // Change the HSB saturation to animate the Rainbow.
      if (this.animate) {
        saturation = 94.74; 
      } else {
        saturation = 70;
      }
      // Set color using HSB.
      stroke((i / bars * 300),saturation,95);
      // Rainbows are half Circle (when Full).
  		arc(this.x, this.y, dynamicRadius, dynamicRadius, PI, 2*PI);
      // Reduce the radius for the next Arc.
      dynamicRadius -= lineWidth; 
		}
    
    // If the Erase or Move Tools are selected, and this is not a Button Figure,
    // show the Figure boundary box.
    if ((selectedButton == 12 || selectedButton == 11) && (this.y-this.r) < startingButtonYPosition-15) {
      noStroke();
      colorMode(RGB);
      fill(color(220,90));
      rect(this.x-this.r/2*1.8,this.y-this.r/2*1.8,this.r/2*1.8*2,this.r/2*1.8);
    }
    pop();
  }
  
  /*
   * Is the given point (x,y) inside the Figure bounds.
   * x,y 	The point to check.
   */
  isInbounds(x, y) {
    return checkPoint(x,y,this.x-this.r/2*1.8,this.y-this.r/2*1.8,this.r/2*1.8*2,this.r/2*1.8);
  }
  
  /*
   * Changes the Figure size dynamically.
   * x,y 	The size limit position.
   */
  changeSize(x,y) {
    this.r=sqrt(pow(x-this.x,2)+pow(y-this.y,2))*2;
  }
  
  /*
   * Changes the Figure position dynamically.
   * x,y 	The new center position.
   */
  changePosition(x,y) {
    this.x=x;
    this.y=y;
  }
  
	/*
   * Changes the Figure animation
   */
	changeAnimation() {
    this.animate=!this.animate;
  }
}

/*
 * The Bird class paints a Bird on the given x and y, and with the given width.
 */ 
class Bird {
  /*
   * Creates an instance of the class.
   * x,y 		Center of the Bird.
   * w 			Width of the Bird.
   */
  constructor(x,y,w) {
    this.x = x;
    this.y = y+w/8;
    this.w = w*0.9;
    this.animate=true;
  }
  
  /*
   * Paints the Bird.
	 */
  show() {
    // Array of points for when the wings are up.
    this.wing1=[this.x-this.w/10,this.y,
         this.x-this.w*0.7,this.y-this.w*0.9,
         this.x-this.w*0.85,this.y-this.w*0.9,
         this.x-this.w/2,this.y];
    // Array of points for when the wings are down.
    this.wing2=[this.x-this.w/10,this.y,
         this.x+this.w*0.15,this.y+this.w*0.9,
         this.x,this.y+this.w*0.9,
         this.x-this.w/2,this.y];
    
    push();
    
    // Paing the Bird outline. This needs to be painted first so that the Bird looks like a single Shape
    // instead of a set of Shapes.
    stroke(0);
    noFill();
    // Beak
    triangle(this.x+this.w*0.7,this.y+this.w/10,
             this.x+this.w*0.9,this.y,
             this.x+this.w+this.w/10,this.y+this.w/10);
    
    // Head
    triangle(this.x+this.w*0.5,this.y+this.w/10,
             this.x+this.w*0.75,this.y-this.w/15,
             this.x+this.w,this.y+this.w/10);
    
    // Neck
    quad(this.x,this.y+this.w/20,
         this.x+this.w*0.7,this.y,
         this.x+this.w*0.7,this.y+this.w/10,
         this.x,this.y+this.w/10+this.w/20);
    
    // Body (Core)
    ellipse(this.x-this.w/3,this.y+this.w/10,
            this.w,this.w/2);
    
    // Tail
    triangle(this.x-this.w*0.8,this.y,
             this.x-this.w,this.y+this.w/15,
             this.x-this.w*0.8,this.y+this.w/7.5);
    triangle(this.x-this.w*0.8,this.y+this.w/15,
             this.x-this.w,this.y+this.w/10,
             this.x-this.w*0.8,this.y+this.w/7.5);
    triangle(this.x-this.w*0.8,this.y+this.w/10,
             this.x-this.w,this.y+this.w/7.5,
             this.x-this.w*0.8,this.y+this.w/5);
    
    // Wings
    if (this.animate) {
    // Up
    quad(this.wing1[0],this.wing1[1],
         this.wing1[2],this.wing1[3],
         this.wing1[4],this.wing1[5],
         this.wing1[6],this.wing1[7]);
    } else {
    // Down
    quad(this.wing2[0],this.wing2[1],
         this.wing2[2],this.wing2[3],
         this.wing2[4],this.wing2[5],
         this.wing2[6],this.wing2[7]);
    }
    
    // Fill the inside of the Bird now, to cover the Bird's inner strokes.
    noStroke();
    fill(255);
    // Beak
    triangle(this.x+this.w*0.7,this.y+this.w/10,
             this.x+this.w*0.9,this.y,
             this.x+this.w+this.w/10,this.y+this.w/10);
    
    // Head
    triangle(this.x+this.w*0.5,this.y+this.w/10,
             this.x+this.w*0.75,this.y-this.w/15,
             this.x+this.w,this.y+this.w/10);
    
    // Neck
    quad(this.x,this.y+this.w/20,
         this.x+this.w*0.7,this.y,
         this.x+this.w*0.7,this.y+this.w/10,
         this.x,this.y+this.w/10+this.w/20);
    
    // Body (Core)
    ellipse(this.x-this.w/3,this.y+this.w/10,
            this.w,this.w/2);
    
    // Tail
    triangle(this.x-this.w*0.8,this.y,
             this.x-this.w,this.y+this.w/15,
             this.x-this.w*0.8,this.y+this.w/7.5);
    triangle(this.x-this.w*0.8,this.y+this.w/15,
             this.x-this.w,this.y+this.w/10,
             this.x-this.w*0.8,this.y+this.w/7.5);
    triangle(this.x-this.w*0.8,this.y+this.w/10,
             this.x-this.w,this.y+this.w/7.5,
             this.x-this.w*0.8,this.y+this.w/5);
    
    // Wings
    if (this.animate) {
    // Up
    quad(this.wing1[0],this.wing1[1],
         this.wing1[2],this.wing1[3],
         this.wing1[4],this.wing1[5],
         this.wing1[6],this.wing1[7]);
    } else {
    // Down
    quad(this.wing2[0],this.wing2[1],
         this.wing2[2],this.wing2[3],
         this.wing2[4],this.wing2[5],
         this.wing2[6],this.wing2[7]);
    }
    
    // Paint the Eye at last so that is gets painted on top of everything with both Stroke and Fill.
    stroke(0);
    ellipse(this.x+this.w*0.75,this.y-this.w*0.01,
            this.w/20,this.w/20);
    
    // If the Erase or Move Tools are selected, and this is not a Button Figure,
    // show the Figure boundary box.
    if ((selectedButton == 12 || selectedButton == 11) && (this.y-this.w) < startingButtonYPosition-15) {
      noStroke();
      colorMode(RGB);
      fill(color(220,90));
      rect(this.x-this.w,this.y-this.w,this.w*2.1,this.w*1.4);
    }
    
    pop();
  }
  
  /*
   * Is the given point (x,y) inside the Figure bounds.
   * x,y 	The point to check.
   */
  isInbounds(x, y) {
    return checkPoint(x,y,this.x-this.w,this.y-this.w,this.w*2.1,this.w*1.4);
  }
  
  /*
   * Changes the Figure size dynamically.
   * x,y 	The size limit position.
   */
  changeSize(x,y) {
    this.w=sqrt(pow(x-this.x,2)+pow(y-this.y,2))*2;
  }
  
  /*
   * Changes the Figure position dynamically.
   * x,y 	The new center position.
   */
  changePosition(x,y) {
    this.x=x;
    this.y=y;
  }
  
	/*
   * Changes the Figure animation
   */
  changeAnimation() {
    this.animate=!this.animate;
  }
}

/*
 * The Tree class paints a Tree on the given x and y, and with the given diameter.
 */ 
class Tree {
  /*
   * Creates an instance of the class.
   * x,y 		Center of the Tree (section between the Branches and Trunk).
   * d 			Diameter of the Brances Circle.
   */
  constructor(x,y,d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.animate = true;
  }
  
  /*
   * Paints the Tree.
	 */
  show() {
    push();
    
    // Tree Branches radius
    var treeSize = this.d/2;
    
    // Trunk
    stroke(0);
    fill(51, 26, 0);
    rect(this.x-this.d/4,this.y,this.d/2,this.d);
    
    // Set the random seed to simulate the Leaf movement animation.
    if (this.animate) {
    	randomSeed(2);
    }
    // Generate a random number for the desity with a minimum of Tree Size to 500.
    var treeDensity = random(treeSize,500);
    // The next loop uses the Tree density to generate random
    // x's and y's, to position multiple random Circles within the
    // Tree size, to emulate Banches.
    for (var i = 0; i < treeDensity; i++) {
      var theta = random(0,2*PI);
      var x1 = sqrt(random(pow(treeSize,2)))*cos(theta);// sqrt(r^2)*cos(theta)
      var y1 = sqrt(random(pow(treeSize,2)))*sin(theta);// sqrt(r^2)*sin(theta)
      fill(89, 179, 0);
      ellipse(this.x+x1,this.y+y1,this.d/7);
    }
    // Same as the previous loop but with no strokes and different fill.
    for (var j = 0; j < treeDensity/2; j++) {
      var theta2 = random(0,2*PI);
      var x2 = sqrt(random(pow(treeSize,2)))*cos(theta2);// sqrt(r^2)*cos(theta)
      var y2 = sqrt(random(pow(treeSize,2)))*sin(theta2);// sqrt(r^2)*sin(theta)
    	fill(0,102,34);
      ellipse(this.x+x2,this.y+y2,this.d/7);
    }
    
    // If the Erase or Move Tools are selected, and this is not a Button Figure,
    // show the Figure boundary box.
    if ((selectedButton == 12 || selectedButton == 11) && (this.y-this.d) < startingButtonYPosition-15) {
      noStroke();
      colorMode(RGB);
      fill(color(220,90));
      rect(this.x-this.d/1.8,this.y-this.d/1.8,this.d*1.1,this.d*1.6);
    }
    
    pop();
  }
  
  /*
   * Is the given point (x,y) inside the Figure bounds.
   * x,y 	The point to check.
   */
  isInbounds(x, y) {
    return checkPoint(x,y,this.x-this.d/1.8,this.y-this.d/1.8,this.d*1.1,this.d*1.6);
  }
  
  /*
   * Changes the Figure size dynamically.
   * x,y 	The size limit position.
   */
  changeSize(x,y) {
    this.d=sqrt(pow(x-this.x,2)+pow(y-this.y,2))*2;
  }
  
  /*
   * Changes the Figure position dynamically.
   * x,y 	The new center position.
   */
  changePosition(x,y) {
    this.x=x;
    this.y=y;
  }
  
	/*
   * Changes the Figure animation
   */
  changeAnimation() {
    this.animate=!this.animate;
  }
}

/*
 * The Moutain class paints a Moutain on the given x and y, and with the given height.
 */ 
class Moutain {
  /*
   * Creates an instance of the class.
   * x,y 		Center of the Moutain.
   * h 			Height of the Moutain.
   */
  constructor(x,y,h) {
    this.x = x;
    this.y = y;
    this.h = h*0.9;
  }
  
  /*
   * Paints the Moutain.
	 */
  show() {
    push();
    
    // Paint the Moustain inline first.
    noFill();
    stroke(0);
    triangle(this.x-this.h,this.y+this.h/2,
             this.x,this.y-this.h/2,
             this.x+this.h,this.y+this.h/2);
    
    // Paint the color gradient.
    noStroke();
    
    // HSB makes the natural(for Humans) color transition easier.
    colorMode(HSB);
    
    // The next loop will paint a bunch of triagles with different fill colors (variating on Brightness),
    // to make the linear gradient effect.
    for (var i=this.h,j=0; i>=0; i--,j++) {
    	fill(30,66.67,0+(i/10));
    	triangle(this.x-this.h,this.y+this.h/2,
             	 this.x,this.y-this.h/2+j,
               this.x+this.h,this.y+this.h/2);
    }
    
    // If the Erase or Move Tools are selected, and this is not a Button Figure,
    // show the Figure boundary box.
    if ((selectedButton == 12 || selectedButton == 11) && (this.y-this.h) < startingButtonYPosition-15) {
      noStroke();
      colorMode(RGB);
      fill(color(220,90));
      rect(this.x-this.h,this.y-this.h/2,this.h*2,this.h);
    }
    
    pop();
  }
  
  /*
   * Is the given point(x,y) inside the Figure bounds.
   * x,y 	The point to check.
   */
  isInbounds(x, y) {
    return checkPoint(x,y,this.x-this.h,this.y-this.h/2,this.h*2,this.h);
  }
  
  /*
   * Changes the Figure size dynamically.
   * x,y 	The size limit position.
   */
  changeSize(x,y) {
    this.h=sqrt(pow(x-this.x,2)+pow(y-this.y,2))*2;
  }
  
  /*
   * Changes the Figure position dynamically.
   * x,y 	The new center position.
   */
  changePosition(x,y) {
    this.x=x;
    this.y=y;
  }
  
	/*
   * Changes the Figure animation
   */
  changeAnimation() {
    // no animation for now.
  }
}

/*
 * The Flower class paints a Moutain on the given x and y, and with the given diameter.
 */ 
class Flower {
  /*
   * Creates an instance of the class.
   * x,y 		Center of the Flower.
   * d 			Diameter of the Flower.
   */
  constructor(x,y,d) {
    this.x = x;
    this.y = y+d/2;
    this.d = d;
    this.animate=true;
  }
  
  /*
   * Paints the Flower.
	 */
  show() {
    push();
    
      // The Flower Stem
      noFill();
      stroke(0);
      strokeWeight(this.d/40);
      arc(this.x-this.d,this.y-this.d/4, this.d*2, this.d*4, -0.1, 0.6);
    
      // Green Leafs
      push();
      strokeWeight(1);
      fill(144,190,72);
      translate(this.x-this.d/40,this.y+this.d/5);
      rotate(1.2);
      bezier(0,0,-this.d/10,-this.d/15,-this.d/10,-this.d/4,0,-this.d/2);
      bezier(0,0,this.d/10,-this.d/15,this.d/10,-this.d/4,0,-this.d/2);
      rotate(PI+0.8);
      bezier(0,0,-this.d/10,-this.d/15,-this.d/10,-this.d/4,0,-this.d/2);
      bezier(0,0,this.d/10,-this.d/15,this.d/10,-this.d/4,0,-this.d/2);
      pop();
    
      // Petals
      push();
        strokeWeight(1);

        // HSB makes the natural(for Humans) color transition easier.
        colorMode(HSB);

        // Apply a translation so that we can rotate the Petals easily.
        translate(this.x,this.y-this.d/2);

        // Rotate the Perals a little more to animate the Flower.
        if (this.animate) {
          rotate(0.4);
        }

        // The next loop paints 8 Petals with the 8 level HSB spectrum.
        for (var i=0; i<8; i++) {
          fill((i * 300 / 8),94.74,95);
          rotate(i*PI/4);
          bezier(0,0+this.d/2.2,
                 -this.d/7,-this.d/15+this.d/2.2,
                 -this.d/7,-this.d/4+this.d/2.2,
                 0,-this.d/2+this.d/2.2);
          bezier(0,0+this.d/2.2,
                 this.d/7,-this.d/15+this.d/2.2,
                 this.d/7,-this.d/4+this.d/2.2,
                 0,-this.d/2+this.d/2.2);
        }
      pop();
    
      // Center (Stamen/Anther/Filament)
      strokeWeight(1);
      fill(255, 184, 77);
      ellipse(this.x,this.y-this.d/2,this.d/3,this.d/3);

      // If the Erase or Move Tools are selected, and this is not a Button Figure,
      // show the Figure boundary box.
      if ((selectedButton == 12 || selectedButton == 11) && (this.y-this.d) < startingButtonYPosition-15) {
        noStroke();
        colorMode(RGB);
        fill(color(220,90));
        rect(this.x-this.d/2,this.y-this.d,this.d,this.d*1.4);
      }
    
    pop();
  }
  
  /*
   * Is the given point(x,y)inside the Figure bounds.
   * x,y 	The point to check.
   */
  isInbounds(x, y) {
    return checkPoint(x,y,this.x-this.d/2,this.y-this.d,this.d,this.d*1.4);
  }
  
  /*
   * Changes the Figure size dynamically.
   * x,y 	The size limit position.
   */
  changeSize(x,y) {
    this.d=sqrt(pow(x-this.x,2)+pow(y-this.y,2))*2;
  }
  
  /*
   * Changes the Figure position dynamically.
   * x,y 	The new center position.
   */
  changePosition(x,y) {
    this.x=x;
    this.y=y;
  }
  
	/*
   * Changes the Figure animation
   */
  changeAnimation() {
    this.animate=!this.animate;
  }
}

/*
 * The Button class paints a Button on the given x and y, with the given width/height, text and colors.
 */
class Button {
  /*
   * Creates an instance of the class.
   * x,y 			Sets the position in the canvas.
   * wh 			Sets the width and height of the Button.
   * bColor 	The background color of the Button.
   * hBColor	The hover color of the Button.
   * txt			The label of the Button.
   * txtColor The label text color.
   * action 	The value that gets set to the global variable that tracks the action.
   */
  constructor(x,y,wh,bColor,hColor,txt,txtColor,action) {
    this.x = x;
    this.y = y;
    this.wh = wh;
    this.bColor = bColor;
    this.hColor = hColor;
    this.txt = txt;
    this.txtColor = txtColor;
    this.action = action;
    // Add the Action Figure at the center of the Button.
    this.figure = getFigure(this.x+this.wh/2,this.y+this.wh/2,this.wh/2,this.action);
  }
  
  /*
   * Paints the Button.
	 */
  show() {
    push();
    // Draw the text and try to center it (25 would be the size of a 100 width/height Button).
    fill(this.txtColor);
    textAlign(CENTER);
    var txtSize = this.wh*25/100;
    textSize(txtSize);
    text(this.txt,this.x,this.y+this.wh+txtSize,this.wh);

    // If the Mouse is over the Button, change the background to the hover color,
    // then check if it is pressed to sets the action (update the state variables).
    // Otherwise, the Mouse is outside the Button boundaries, so return the
    // background color to its original color.
    if (checkPoint(mouseX,mouseY,this.x,this.y,this.wh,this.wh)) {
      // Set Hover color
      fill(this.hColor);
      rect(this.x,this.y,this.wh,this.wh);

      // If the Mouse is Pressed and we are not currently moving a Figure,
      // set the action to selectedFigure buy calling setStateVariables().
      if (mouseIsPressed && movingFigure == -1) {
				setStateVariables(this.action);
      }
    } else {
      // Return the background to its original color.
      fill(this.bColor);
      rect(this.x,this.y,this.wh,this.wh);
    }

    // If this Button is selected ("selectedFigure" or "selectedBackground" are equal to the Button "action")
    // then paint a selection Square Gray transparent Square) on top of the Button.
    if (selectedButton == this.action || selectedBackground == this.action) {
      // Paint the Selection Square.
      fill(color(230, 230, 230, 100));
      noStroke();
      rect(this.x-5,this.y-5,this.wh+10,this.wh+10);
    }
    
    // Show the Figure of this Button
  	this.figure.show();
    pop();
  }
}

/*
 * The BlueSky class paints a Blue Sky Square on the given x and y, with the given width/height.
 */
class BlueSky {
  /*
   * Creates an instance of the class.
   * x,y 		Center of the Blue Sky.
   * wh 		Width/Height of the Blue Sky Square.
   */
  constructor(x,y,wh) {
    this.x = x;
    this.y = y;
    this.wh = wh;
  }
  
  /*
   * Paints the Blue Sky Square.
	 */
  show() {
    push();
    // Cloud Size pixel minimum(50 for a 600 width space)
    var cloudSize = this.wh*50/600;
    
    // Draw a Light Blue Background.
    fill(color(0, 143, 179));
    rect(this.x,this.y,this.wh,this.wh);

    // Paint the Clouds
    fill(255,10);
    noStroke();
    
    // Make the Clouds Pseudo-Random for consistency.
    randomSeed(1);
    
    // Draw 30 Clouds.
    // The next loop will generate 2 random numbers (x1,y2) which define
    // the center of the Clouds within the canvas.
    for (var i = 0; i < 30; i++) {
      var x1 = random(this.x+cloudSize, this.x+this.wh-cloudSize);
      var y1 = random(this.y+cloudSize, this.y+this.wh-cloudSize);

      // Generate a pseudo-random number for the desity with a minimum of cloudSize to 200.
      var cloudDensity = random(cloudSize,200);

      // The next loop uses the Cloud density to generate random x's and y's,
      // to position multiple random Circles within the Cloud size, to emulate a Cloud.
      for (var j = 0; j < cloudDensity; j++) {
        var x2 = random(-cloudSize,cloudSize);
        var y2 = random(-cloudSize,cloudSize);
        ellipse(x1+x2,y1+y2,this.wh/20);
      }
    }
    pop();
  }
}

/*
 * The Universe class paints a Dark Universe Sky Square on the given x and y, with the given width/height.
 */
class Universe {
  /*
   * Creates an instance of the class.
   * x,y 		Center of the Universe Sky.
   * w 			Width/Height of the Universe Sky Square.
   */
  constructor(x,y,wh) {
    this.x = x;
    this.y = y;
    this.wh = wh;
  }
  
  /*
   * Paints the Universe.
	 */
  show() {
    push();

    // Paint Black Background.
    fill(0);
    rect(this.x,this.y,this.wh,this.wh);

    // Paint the "Stars"
    fill(255);
    noStroke();
    
    // Make the Star Pseudo-Random for consistency.
    randomSeed(55);

    // The next loop generates 2 random postion numbers (x1,y1) that are
    // within the Black Background area, to place Circles with a random size
    // which will look like a Stars.
    for (var i = 0; i < this.wh*10; i++) {
      var x1 = random(this.x, this.x+this.wh);
      var y1 = random(this.y, this.y+this.wh);
      // Random width from 1 to X (X is 10 when 600) with higher incidence of low numbers.
      var wh1 = 1+floor((this.wh*10/600) * (pow(random(), 50)));
      ellipse(x1,y1,wh1/2);
    }
    pop();
  }
}

/*
 * The Eraser class paints a Eraser on the given x and y, with the given width/height.
 */ 
class Eraser {
  /*
   * Creates an instance of the class.
   * x,y 		Center of the Eraser.
   * wh 		Width/Height of the Eraser.
   */
  constructor(x,y,wh) {
    this.x = x;
    this.y = y-(wh*4/20);
    this.wh = wh-(wh*4/20);
  }
  
  /*
   * Paints the Eraser.
	 */
  show() {
    push();
    
    // The first Pink Eraser Section.
    stroke(0);
    strokeWeight(this.wh*4/100);
    fill(color(255, 179, 179));
		rect(this.x-this.wh,this.y+this.wh/2,this.wh,this.wh/2);
    
    // The White Eraser Section.
    fill(255);
    quad(this.x-this.wh,this.y+this.wh/2,
         this.x,this.y+this.wh/2,
         this.x+this.wh/3,this.y+this.wh/4,
         this.x-this.wh/1.5,this.y+this.wh/4);
    quad(this.x,this.y+2*this.wh/2,
         this.x+this.wh/3,this.y+this.wh*0.75,
         this.x+this.wh/3,this.y+this.wh/4,
         this.x,this.y+this.wh/2);
    
    // The second Pink Eraser Section.
  	fill(color(255, 179, 179));
    quad(this.x+this.wh/3,this.y+this.wh/4,
         this.x-this.wh/1.5,this.y+this.wh/4,
         this.x+this.wh/16,this.y-this.wh/4,
         this.x+this.wh,this.y-this.wh/4);
    quad(this.x+this.wh/3,this.y+this.wh/4,
         this.x+this.wh/3,this.y+this.wh*0.75,
         this.x+this.wh,this.y+this.wh/4,
         this.x+this.wh,this.y-this.wh/4);
    pop();
  }
}

/*
 * The Move Tool class paints a Move Tool on the given x and y, with the given width/height.
 */ 
class MoveTool {
  /*
   * Creates an instance of the class.
   * x,y 		Center of the Move Tool Arrows.
   * wh 		Width/Height of the Move Tool Arrows.
   */
  constructor(x,y,wh) {
    this.x = x;
    this.y = y;
    this.wh = wh;
  }
  
  /*
   * Paints the Move Tool.
	 */
  show() {
    push();
    
    // The Cross.
    stroke(0);
    strokeWeight(this.wh*6/100);
    fill(color(0));
		line(this.x,this.y-this.wh/2,this.x,this.y+this.wh/2);
    line(this.x-this.wh/2,this.y,this.x+this.wh/2,this.y);
    
    // Up Arrow.
    triangle(this.x-this.wh/8,this.y-this.wh/2,
             this.x,this.y-this.wh/1.5,
             this.x+this.wh/8,this.y-this.wh/2);
    
    // Down Arrow.
    triangle(this.x-this.wh/8,this.y+this.wh/2,
             this.x,this.y+this.wh/1.5,
             this.x+this.wh/8,this.y+this.wh/2);
    
    // Left Arrow
    triangle(this.x-this.wh/2,this.y-this.wh/8,
             this.x-this.wh/1.5,this.y,
             this.x-this.wh/2,this.y+this.wh/8);
    
    // Right Arrow
    triangle(this.x+this.wh/2,this.y-this.wh/8,
             this.x+this.wh/1.5,this.y,
             this.x+this.wh/2,this.y+this.wh/8);
    pop();
  }
}