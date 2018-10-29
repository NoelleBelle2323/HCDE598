//use the setup function to draw the canvas 
function setup() {
  createCanvas(690, 600);
  background(44, 219, 232);
}

//create the drawMyRobot function to draw the robot
//use the parameters xcoord1, ycoord1, and size1 to designate the position and size of the head and body
function drawMyRobot(xcoord1, ycoord1, size1) {
  strokeWeight(2); //give it an outline - this will cary on throughout 
  stroke(222, 78, 222); //make the outline pink
  fill(181, 222, 78); //make the circle green
  ellipseMode(RADIUS); //use the radius method to make it easier to draw the face relative to the changing size 
  ellipse(xcoord1, ycoord1, size1); //draw the head

  //create the eyes and mouth using ellipses and circles relative to the
  //coordinates and size 
  fill(222, 78, 222); //make them pink
  ellipse(xcoord1 - (size1 / 2.5), ycoord1 - ('.2' * size1), size1 / 15);
  ellipse(xcoord1 + (size1 / 2.5), ycoord1 - ('.2' * size1), size1 / 15);
  rect(xcoord1 - (size1 / 3), ycoord1 + (size1 / 4), 15 * ('.05' * size1), 2);

  //create the rectangle body relative to the coordinates and size
  stroke(181, 222, 78); //give it a green border
  fill(222, 78, 222); //make it pink
  rect(xcoord1 - (size1 - size1 / 5.5), ycoord1 + size1, size1 * 1.75, size1 * 1.25);
}

//use the mouseClicked function with the drawMyRobot function
//to draw the robot any time the mouse is clicked
function mouseClicked() {
  //call the drawMyRobot function to draw a robot 
  //use mouseX and mouseY as the parameters to draw the robot where the mouse is clicked
  //use the random function to make the robot size random with each click
  drawMyRobot(mouseX, mouseY, random(10, 100));
  return false;
}