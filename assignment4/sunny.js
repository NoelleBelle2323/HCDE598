//fixed colors and line settings
var bgColor = "DeepSkyBlue"//background color
var myColor = "yellow" //sun color
var beamWeight = 10 //sunbeam thickness

//function to draw sun and background
function setup() {
  createCanvas(400, 400);
  background(bgColor);
  //draw sun
  drawSun();
}

//don't need draw function
function draw() {}

//draw sun commands - used to draw the sun and all of its parts. Calls on x,y, and sunSize
function drawSun(x, y, sunSize) {
  //sun center
  fill (myColor);
  stroke(myColor);
  strokeWeight(beamWeight);
  strokeCap(SQUARE);
  ellipse(x, y, sunSize*1);
  //sun beams
  line(x, y, x + 80, y);
  line(x, y, x + sunSize, y + sunSize);
  line(x, y, x - sunSize, y - sunSize);
  line(x, y, x - sunSize, y - sunSize);
  line(x, y, x - sunSize, y);
  line(x, y, x + sunSize, y - sunSize);
  line(x, y, x, y - sunSize);
  line(x, y, x - sunSize, y - sunSize);
}

//when key is pressed, suns are drawn
function keyPressed() {
  //specify x y location fo sun called upon in dawrSun fucntion
  //Random command specifies random location for sun within the 350 pixel frame
  var x = random (350);
  var y = random (350);
	//speficy size constraints of sun
  var size = random(0,width/3);//Random command for random size selection Sun must can be no larger than 1/3 background width
  drawSun(x,y,size);
}