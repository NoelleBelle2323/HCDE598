var xE1 = 200
var yE1 = 200
var R1 = 175
var G1 = 175
var B1 = 175
var bG = 220

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220);

  //starts the function start
  bgBallChanger();
  fill(0);
  text('use arrow keys to move ball', 125, 100);
  text('move ball to the edges to change backgroud', 85, 115);
  text("use r, g, b with or without SHIFT to change the ball's color", 50, 300);
  text('move ball to the edges to change backgroud', 90, 315);
}
//changes the background when ball touches the sides
//user can also change the color of the ball using 
//r or R, g or G, b or B
function bgBallChanger() {
  background(bG);
  if (keyIsPressed) {
    //moves ellipse up and down
    if (keyCode == LEFT_ARROW) {
      xE1 -= 5;
    } else if (keyCode == RIGHT_ARROW) {
      xE1 += 5;
    }
    if (keyCode == DOWN_ARROW) {
      yE1 += 5;
    } else if (keyCode == UP_ARROW) {
      yE1 -= 5;
    }
    //changes color of ellipse
    if (keyIsPressed) {
      if (key == 'R') {
        R1 = 240;

      } else if (key == 'r') {
        R1 = 20;
      }
    }
    if (keyIsPressed) {
      if (key == 'G') {
        G1 = 220;

      } else if (key == 'g') {
        G1 = 10;
      }
    }
    if (keyIsPressed) {
      if (key == 'B') {
        B1 = 200;

      } else if (key == 'b') {
        B1 = 30;
      }
    }
    if (xE1 < 50) {
      bG = 'red';
    } else if (xE1 > 350) {
      bG = 'blue'
    }
    if (yE1 < 50) {
      bG = 'orange';
    } else if (yE1 > 350) {
      bG = 'green'
    }
  }
  noStroke();
  fill(R1, G1, B1);
  ellipse(xE1, yE1, 30, 30);


}