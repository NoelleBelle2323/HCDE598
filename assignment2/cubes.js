//color cube number variables
var blueX = 30
var blueY = 30
var redX = 30
var redY = 30
var purpX = 30
var purpY = 30
var greenY = 20;
var yelX = 30;
var yelY = 30;
var orangeX = 30;
var orangeY = 20;

//seconds
var time1 = 1500;
var time2 = 3100;


//variables for yellow cube motion coordinates
var beginX = 420.0; // Initial x-coordinate
var beginY = 50.0; // Initial y-coordinate
var endX = 262.0; // Final x-coordinate
var endY = 379.0; // Final y-coordinate
var distX; // X-axis distance to move
var distY; // Y-axis distance to move
var exponent = 4; // Determines the curve
var step = 0.01; // Size of each step along the path
var pct = 0.0; // Percentage traveled (0.0 to 1.0)

//variables for yellow cube motion coordinates
var beginyellowX = 20.0; // Initial x-coordinate
var beginyellowY = -60.0; // Initial y-coordinate
var endyellowX = 191.0; // Final x-coordinate
var endyellowY = 395.0; // Final y-coordinate
var distyellowX; // X-axis distance to move
var distyellowY; // Y-axis distance to move
var exponentyellow = 7; // Determines the curve
var stepyellow = 0.01; // Size of each step along the path
var pctyellow = 0.0; // Percentage traveled (0.0 to 1.0)



function setup() {
  createCanvas(600, 600);

  frameRate(20);

  distX = endX - beginX; //code snippet from curved motion from p5js site
  distY = endY - beginY;

  distyellowX = endyellowX - beginyellowX; //code snippet from curved motion from p5js site
  distyellowY = endyellowY - beginyellowY;
}

function draw() {
  background(220);


  //Blue cube
  noStroke();
  fill(145, 205, 210);
  rect(blueX, blueY, 55, 55);
  fill(107, 181, 188);
  quad(blueX + 55, blueY, blueX + 70, blueY - 10, blueX + 70, blueY + 40, blueX + 55, blueY + 55);
  fill(191, 230, 234);
  quad(blueX + 55, blueY, blueX + 70, blueY - 15, blueX + 15, blueY - 10, blueX, blueY);


  //Red cube
  noStroke();
  fill(242, 141, 167)
  rect(redX + 470, redY, 55, 55);
  fill(240, 110, 144)
  quad(redX + 525, redY, redX + 540, redY - 10, redX + 540, redY + 40, redX + 525, redY + 55);
  fill(240, 193, 205)
  quad(redX + 525, redY, redX + 540, redY - 10, redX + 485, redY - 10, redX + 470, redY);


  //Green cube
  noStroke();
  fill(140, 199, 132);
  rect(225, greenY, 55, 55);
  fill(109, 182, 99);
  quad(280, greenY, 295, greenY - 10, 295, greenY + 40, 280, greenY + 55);
  fill(163, 211, 156);
  quad(280, greenY, 295, greenY - 10, 240, greenY - 10, 225, greenY);



  //Purple cube
  noStroke();
  fill(188, 165, 212)
  rect(purpX, purpY, 55, 55);
  fill(161, 134, 190);
  quad(purpX + 55, purpY - 15, purpX + 70, purpY - 15, purpX + 70, purpY + 40, purpX + 55, purpY + 55);
  fill(210, 192, 230);
  quad(purpX + 55, purpY, purpX + 70, purpY - 15, purpX + 15, purpY - 15, purpX, purpY);


  //Yellow cube
  noStroke();
  fill(255, 240, 53)
  rect(yelX, yelY, 55, 55);
  fill(204, 192, 43);
  quad(yelX + 55, yelY - 15, yelX + 70, yelY - 15, yelX + 70, yelY + 40, yelX + 55, yelY + 55);
  fill(255, 247, 153);
  quad(yelX + 55, yelY, yelX + 70, yelY - 15, yelX + 15, yelY - 15, yelX, yelY);


  //orange cube
  noStroke();
  fill(255, 175, 80);
  rect(225, orangeY, 55, 55);
  fill(255, 152, 30);
  quad(280, orangeY, 295, orangeY - 10, 295, orangeY + 40, 280, orangeY + 55);
  fill(255, 200, 133);
  quad(280, orangeY, 295, orangeY - 10, 240, orangeY - 10, 225, orangeY);



  //Start blue cube movement
  blueX = blueX + 5; //blue diagonal move
  blueY = blueY + 5;
  if (blueX > 150) { //blue moving vertical down
    blueX = 150;
  }
  if (blueY > 420) { //blue stop
    blueY = 420;
  }

  //Start red movement
  redY = redY + 5; //red moving down

  if (redY > 420) {
    redY = 420;
  } else if (redY > 220) {
    redX = redX - 5;
  }

  //Start green movement
  var currentTime = millis(); //delayed start
  if (currentTime > time1) {
    greenY += 6;
  }
  if (greenY > 420) {
    greenY = 420
  }

  //Start orange movement

  if (currentTime > time2) {
    orangeY += 3;
  }
  if (orangeY > 310) {
    orangeY = 311
  }


  //Start purple movement

  pct += step; //curved movement code from p5js example
  if (pct < 1) {
    purpX = beginX + pct * distX;
    purpY = beginY + pow(pct, exponent) * distY;
  }

  //start yellow movement
  pctyellow += stepyellow; //curved movement code from p5js example
  if (pctyellow < 1) {
    yelX = beginyellowX + pctyellow * distyellowX;
    yelY = beginyellowY + pow(pctyellow, exponentyellow) * distyellowY;
  }


}