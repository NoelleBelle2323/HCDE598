/*I created these shooting stars using 5 arrays, 3 functions,
and 1 for loop. I also put a transparent background in the
drawFunction to make the stars appear to have a "tail".

Arrays (5):
	starXArray: makes the initial x position vary
	starYArray: makes the initial y position vary
  speedXArray: makes the x speed vary
	speedYArray: makes the y speed vary
  colorArray: makes each star a different color

Functions (3):
	drawStar: draws a single star
	drawManyStars: pulls the x and y initial position 
		arrays, the color array, and the drawStar function to 
		initally put the stars on the canvas
	moveStar: pulls from x and y position arrays and speed
  	arrays to write equations that allow stars to move
    and bounce off walls when inside the for loop

For Loop (1):
	Inside the drawFunction. Uses drawManyStars and moveStar 
  functions to loop through the arrays.
*/

//I want to keep the size of the star constant throughout
//the program. This is based on the drawStar function
const myScale = 2

//Specifying where the edges of the star are located
//so it will bounce off the edge of the screen.
//These values are based on the drawStar function where
//the star was drawn from the center point (x, y)
const starMinX = 11 * myScale; //Left side of star is x - 11
const starMaxX = 11 * myScale; //Right side of star x + 11
const starMinY = 10 * myScale; //Top of star is y - 10
const starMaxY = 9 * myScale; //Bottom of star is y + 9

//Total number of stars
const starTotal = 10

//Set up x and y locations. Just picked random numbers
var starXArray = [220, 230, 350, 370, 130, 225, 132, 410, 170, 260];
var starYArray = [420, 280, 360, 150, 225, 310, 180, 220, 320, 360];

//Random x and y speeds between -5 and 5
var speedXArray = [-2, 2, 3, 4, -4, -1, 1, 2, -5, 5]
var speedYArray = [-2, 4, 4, -5, -3, 2, 3, -3, -4, 1]

//Different colors of each star
var colorArray = ['#00ffff', //cyan
                  '#77ffd4', //aquamarine
  								'#0000ff', //blue
  								'#8470ff', //slateblue
  								'#6a5acd', //darkslateblue
  								'#00ced1', //darkturquoise
  								'#8a2be2', //blueviolet
  								'#40e0d0', //turquoise
  								'#9400d3', //darkviolet
                  '#0000cd'  //mediumblue
]

function setup() {
  createCanvas(500, 500);
}

function draw() {

  //for each star drawn, a "tail" will show because the
  //background has a transparency of 30
  background(0, 0, 0, 30);

  //draw the stars by pulling data from the arrays. The
  //drawManyStars puts stars on the canvas and the moveStar
  //makes them move and bounce off the walls
  for (i = 0; i < starTotal; i++) {
    drawManyStars(i, i, i); //(x location, y location, color fill)
    moveStar(i, i, i, i); //(x location, y location, x speed, y speed)
  }
}

//pull from the drawStar function and the arrays to 
//be able to draw multiple stars initially
function drawManyStars(xArray, yArray, starColor) {
  
  //redefine variables to pull data from arrays
  var starX = starXArray[xArray]; 
  var starY = starYArray[yArray]; 
  var fillColor = colorArray[starColor];

	fill(fillColor);
  drawStar(starX, starY, myScale);

}

//function instructs stars to move and to bounce off
//the walls
function moveStar(xArray, yArray, xSpeed, ySpeed) {
  
  //redefine variables to pull from arrays
  var starX = starXArray[xArray];
  var starY = starYArray[yArray];
  var moveXSpeed = speedXArray[xSpeed];
  var moveYSpeed = speedYArray[ySpeed];

  //changes the x and y values based on the speed
  starX = starX + moveXSpeed;
  starY = starY + moveYSpeed;

  //when looping through the arrays, I want to store the 
  //updated location value
  starXArray[xArray] = starX
  starYArray[yArray] = starY

  //if the left edge of the star reaches the left edge of the
  //screen OR if the right edge of the star reaches the right
  //edge of the screen, then have the speed change directions
  if (starX < starMinX || starX > width - starMaxX) {
    moveXSpeed = moveXSpeed * (-1);

    //if the top edge of the star reaches the top edge of the
    //screen OR if the bottom edge of the star reaches the bottom
    //edge of the screen, then have the speed change directions
  } else if (starY < starMinY || starY > height - starMaxY) {
    moveYSpeed = moveYSpeed * (-1);
  }

  //when looping through the arrays, I want to store the 
  //updated speed value
  speedXArray[xSpeed] = moveXSpeed
  speedYArray[ySpeed] = moveYSpeed

}


/*Copied this star from one of my previous projects.
I drew out the star on grided paper where (x, y)
is the center of the star*/

function drawStar(x, y, myScale) {
  noStroke();
  beginShape();
  vertex(x - 11 * myScale, y - 3 * myScale); //starts at top left pt clockwise
  vertex(x - 4 * myScale, y - 4 * myScale);
  vertex(x, y - 10 * myScale);
  vertex(x + 4 * myScale, y - 4 * myScale);
  vertex(x + 11 * myScale, y - 3 * myScale);
  vertex(x + 6 * myScale, y + 2 * myScale);
  vertex(x + 7 * myScale, y + 9 * myScale);
  vertex(x, y + 6 * myScale);
  vertex(x - 7 * myScale, y + 9 * myScale);
  vertex(x - 6 * myScale, y + 2 * myScale);
  endShape();
}