// the size of the overall canvas
const canvas_width = 650;
const canvas_height = 525;

// the starting x and y coordinates for circles and squares 
const x_coord = 75;
const y_coord = 75;
const rect_xcoord = 50;
const rect_ycoord = 50;

// bg color
const bg_color = 'gold';


// parameters for each shape 
const dia = 50;
const rect_size = 50;
const border_width = 2;

// how many shapes to draw
const shape = 11;

function setup() {

  // create canvas
  createCanvas(canvas_width, canvas_height);
  background(bg_color);
}

// returns true if the number is odd, false if even
function isOdd(n) {
  //compute remainder of divison by two
  remainder = n % 2;
  if (remainder == 1) {
    return true;
  } else {
    return false;
  }
}

// returns true if the number is even, and false if the number is odd
function isEven(n) {
  // compute remainder of division by two
  remainder = n % 2;
  if (remainder == 0) {
    return true;
  } else {
    return false;
  }
}

function draw() {

  //draw number of shapes
  for (i = 0; i < shape; i++) {
    for (j = 0; j < shape; j++) {
      // draw shape and fill with color every time we iterate through the for loop
      // the fill is set to different colors if the index i is an odd number or not

      if ((isEven(i)) && (isEven(j))) { //if both col & row index are even
        ellipse(x_center, y_center, dia, dia);
        fill('red');
      } else if ((isEven(i)) && (isOdd(j))) { //if col is even & row is odd
        ellipse(x_center, y_center, dia, dia);
        fill('gold');
      } else if ((isOdd(i)) && (isOdd(j))) { //if both col & row index are odd
        rect(rect_x, rect_y, rect_size, rect_size);
        fill('green');
      } else if ((isOdd(i)) && (isEven(j))) { //if col is odd & row is even
        rect(rect_x, rect_y, rect_size, rect_size);
        fill('white');
      }

      var x_center = x_coord + (i * dia); //calculate x coord of center
      var y_center = y_coord + (j * dia); //calculate y coord of center
      var rect_x = rect_xcoord + (i * rect_size); //calculate x coord of left edge
      var rect_y = rect_ycoord + (j * rect_size); //calculate y coord of top edge
    }

  }
}