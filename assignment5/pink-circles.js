// canvas size
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

// first ellipse location - uppper left corner
const X_ORIGIN = 30;
const Y_ORIGIN = 30;

// colors
const BG_COLOR = 'gray';
const COLOR_1 = 'pink';
const COLOR_2 = 'gold';

// parameters for ellipse 
const ELLIPSE_RADIUS = 60;
const BORDER_WIDTH = 5;

function setup() {

  // create the canvas (size and color)
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BG_COLOR);

  // drawing parameters for ellipse
  strokeWeight(BORDER_WIDTH);

  //loops cause ellipse to repete
  for (i = 0; i < CANVAS_WIDTH/ELLIPSE_RADIUS; i++) {
    for (j = 0; j < CANVAS_HEIGHT/ELLIPSE_RADIUS; j++) {

      // calculate the x and y coodinates
      var xCoord = X_ORIGIN + i * ELLIPSE_RADIUS
      var yCoord = Y_ORIGIN + j * ELLIPSE_RADIUS
      
      //if ellipse is in even row & even collumn OR in odd row & odd collumn,invert color scheme
      if ((!isOdd(i) && !isOdd(j)) || (isOdd(j)) && (isOdd(i))) {
        fill(COLOR_1);
        stroke(COLOR_2);
        
        //return to orgional color scheme if the above conditions aren't met
      } else {
        fill(COLOR_2);
        stroke(COLOR_1);
      }
      
			//draws ellipse after all of the above conditions are defined
      ellipse(xCoord, yCoord, ELLIPSE_RADIUS);
    }
  }
}

function isOdd(n) {
  var remainder = n % 2;
  //if i is divisible by 2 print false
  if (remainder == 0) {
    return false;
  } else { //else if the number is not divisible by two, print true 
    return true;
  }
}

//don't need the draw function
function draw() {}