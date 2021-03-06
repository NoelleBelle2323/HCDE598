//setup function used to draw the canvas
function setup() {
  createCanvas(690, 600);
}

//define the variables to be used for locations
var xcoord1 = 70;
var xcoord2 = 620;
var xcoord3 = 70;
var xcoord4 = 620;
var ycoord1 = 65;
var ycoord2 = 65;
var ycoord3 = 495;
var ycoord4 = 495;

//use the draw function to create the animation
function draw() {
//draw the background within the draw fucnion to create the illusion of 
//floating
  background(43, 206, 206);
//draw a rectangle to create the outermost pink border 
  strokeWeight(30)
  stroke(222, 78, 222)//make it pink
  noFill()//do not fill the rectangle to make it look like a border 
  rect(0, 0, 690, 600)
//draw another rectangle to create the inner green border
  stroke(181, 222, 78)
  strokeWeight(15)
  noFill()// do not fill the rectangle to make it look like a border
  rect(30, 30, 630, 540)

  //slow down the frame rate to make the people move in slower
  frameRate(5)

  
//create the top left circle relative to the coordinates defined above
  strokeWeight(2)//give it an outline - this will cary on throughout 
  stroke(222, 78, 222)//make the outline pink
  fill(181, 222, 78)//make the circle green
  ellipse(xcoord1, ycoord1, 40)
  
//create the eyes and mouth using ellipses and circles relative to the
//coordinates defined above
  fill(222, 78, 222)//make them pink
  ellipse(xcoord1 - 10, ycoord1 - 5, 5)
  ellipse(xcoord1 + 10, ycoord1 - 5, 5)
  rect(xcoord1 - 7, ycoord1 + 7, 15, 2)
  
//create the rectangle body relative to the coordinates defined above
  stroke(181, 222, 78)//give it a green border
  fill(222, 78, 222)//make it pink
  rect(xcoord1 - 27, ycoord1 + 21, 55, 40)
  
  
//create the top right circle relative to the coordinates defined above
  stroke(222, 78, 222)
  fill(181, 222, 78)
  ellipse(xcoord2, ycoord2, 40)
  
//create the eyes and mouth using ellipses and circles relative to the 
//coordinates defined above. 
  fill(222, 78, 222)
  ellipse(xcoord2 - 10, ycoord2 - 5, 5, 5)
  ellipse(xcoord2 + 10, ycoord2 - 5, 5, 5)
  rect(xcoord2 - 7, ycoord2 + 7, 15, 2)
  
//create the rectangle body relative to the coordinates defined above
  stroke(181, 222, 78)//give it a green border 
  fill(222, 78, 222)//make it pink
  rect(xcoord2 - 27, ycoord2 + 21, 55, 40)
  
  
//create the bottom left circle relative to the coordinates above
  stroke(181, 222, 78)//give it a pink border
  fill(222, 78, 222)//make it green
  ellipse(xcoord3, ycoord3, 40)
  
//create the eyes and mouth using ellipses and circles relative to the 
//coordinates defined above.
  fill(181, 222, 78)
  ellipse(xcoord3 - 10, ycoord3 - 5, 5, 5)
  ellipse(xcoord3 + 10, ycoord3 - 5, 5, 5)
  rect(xcoord3 - 7, ycoord3 + 7, 15, 2)
  
//create the rectangle body relative to the coordinates defined above
  stroke(222, 78, 222)//give it a pink border
  fill(181, 222, 78)//make it green
  rect(xcoord3 - 27, ycoord3 + 21, 55, 40)
  
  
//create the bottom right circle relative to the coordinates above
  stroke(181, 222, 78)//give it a green border
  fill(222, 78, 222)//make it pink
  ellipse(xcoord4, ycoord4, 40)
  
//create the eyes and mouth using ellipses and circles relative to the 
//coordinates defined above.
  fill(181, 222, 78)
  ellipse(xcoord4 - 10, ycoord4 - 5, 5, 5)
  ellipse(xcoord4 + 10, ycoord4 - 5, 5, 5)
  rect(xcoord4 - 7, ycoord4 + 7, 15, 2)
  
//create the rectangle body relative to the coordinates defined above
  stroke(222, 78, 222)//give it a pink border
  fill(181, 222, 78)//make it green 
  rect(xcoord4 - 27, ycoord4 + 21, 55, 40)
  
  
//define how the variables will incramentally change to make the people move 
  xcoord1 = xcoord1 + 5
  ycoord1 = ycoord1 + 10
  xcoord2 = xcoord2 - 10
  ycoord2 = ycoord2 + 10
  xcoord3 = xcoord3 + 15
  ycoord3 = ycoord3 - 10
  xcoord4 = xcoord4 - 5
  ycoord4 = ycoord4 - 10

//use if statements to set boundaries so all the people stop moving and 
//line up in the middle
  if (ycoord1 > 325) {
    ycoord1 = 325
  }
  if (xcoord1 > 190) {
    xcoord1 = 190
  }
  if (ycoord2 > 325) {
    ycoord2 = 325
  }
  if (xcoord2 < 400) {
    xcoord2 = 400
  }
  if (ycoord3 < 325) {
    ycoord3 = 325
  }
  if (xcoord3 > 300) {
    xcoord3 = 300
  }
  if (ycoord4 < 325) {
    ycoord4 = 325
  }
  if (xcoord4 < 500) {
    xcoord4 = 500
  }
}