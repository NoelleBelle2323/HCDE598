var startGame = 0;
var time = 0;
var level1Done = 0;
var level1End = 0;
var level2Start = 0;
var level2Done = 0;
var level2End = 0;
var level3Start = 0;
var level3Done = 0;
var level3End = 0;
var mouseClickX = 0;
var mouseClickY = 0;
var level2Done = 0;

function setup() {
  createCanvas(400, 400);
}

//User presses Y key to start the game. There are 3 levels and it gets harder as the level goes up.
function draw() {

  if (startGame == 0) {
    background(220);
    fill(0);
    textAlign(CENTER);
    textSize(24);
    textStyle(BOLD);
    text('Memory Game Level 1', 200, 190);
    textStyle(NORMAL);
    text('Press Y to start', 200, 230);
    textStyle(BOLD);
    fill(190, 0, 255);
    text('Y', 194, 230);
    textStyle(NORMAL);
    textSize(12);
    textAlign(LEFT);
  }

  //Show the dots for a short period of time and then they disappear.

  if (startGame == 1 && time < 60) {
    background(220);
    noStroke();
    fill(244);
    ellipse(100, 100, 80, 80);
    ellipse(300, 100, 80, 80);
    ellipse(300, 300, 80, 80);
    fill(0, 200, 200);
    ellipse(100, 300, 80, 80);
    stroke(244);
    strokeWeight(2);
    line(200, 0, 200, 400);
    line(0, 200, 400, 200);
    time = time + 1;
  }

  //Display instruction for people to click the squaure where the blue dot was.
  if (startGame == 1 && time == 60) {
    background(220);
    stroke(244);
    strokeWeight(2);
    line(200, 0, 200, 400);
    line(0, 200, 400, 200);
    fill(255);
    rect(80, 180, 240, 40);
    fill(0);
    text('Click the square where the blue dot was.', 92, 205);

  }

  //Evaluate where user clicks to see whether that falls within the boundary of the square where the blue dot was.
  if (mouseIsPressed == true && time == 60) {
    mouseClickX = mouseX;
    mouseClickY = mouseY;
  }
  if (mouseClickX <= 200 & mouseClickY >= 200) {
    if (time == 60 && level1Done == 0) {
      level1Done = 1;
      time = 61;
    }
  }
  if (mouseClickX >= 200 && mouseClickY >= 200) {
    if (time == 60) {
      background(220);
      stroke(244);
      strokeWeight(2);
      line(200, 0, 200, 400);
      line(0, 200, 400, 200);
      fill(255);
      rect(80, 180, 240, 40);
      fill(0);
      text('Nope. Try again!', 150, 205);
    }
  }
  if (mouseClickY <= 200 && mouseClickY > 0) {
    if (time == 60) {
      background(220);
      stroke(244);
      strokeWeight(2);
      line(200, 0, 200, 400);
      line(0, 200, 400, 200);
      fill(255);
      rect(80, 180, 240, 40);
      fill(0);
      text('Nope. Try again!', 150, 205);
    }
  }
  if (level1Done == 1 && time < 180) {
    background(220);
    stroke(244);
    strokeWeight(2);
    line(200, 0, 200, 400);
    line(0, 200, 400, 200);
    fill(255);
    rect(80, 180, 240, 40);
    fill(0);
    text('Congrats! You found it!', 140, 205);
    fill(0, 200, 200);
    noStroke();
    ellipse(100, 300, 80, 80);
    level1End = 1;
    time = time + 1;
  }

  //If user finds the blue dot, the game automatically moves on to level 2.
  if (level1End == 1 && time == 180) {
    background(220);
    fill(0);
    textAlign(CENTER);
    textSize(24);
    textStyle(BOLD);
    text('Memory Game Level 2', 200, 190);
    textStyle(NORMAL);
    text('Press Y to start', 200, 230);
    textStyle(BOLD);
    fill(190, 0, 255);
    text('Y', 194, 230);
    textStyle(NORMAL);
    textSize(12);
    textAlign(LEFT);
  }

  if (level2Start == 1 && time < 190) {
    background(220);
    noStroke();

    fill(230, 180, 180);
    ellipse(66.665, 66.665, 80, 80);
    fill(244)
    ellipse(199.995, 66.665, 80, 80);
    ellipse(333.325, 66.665, 80, 80);
    ellipse(66.665, 199.995, 80, 80);
    ellipse(199.995, 199.995, 80, 80);
    fill(150, 220, 150);
    ellipse(333.325, 199.995, 80, 80);
    fill(244)
    ellipse(66.665, 333.325, 80, 80);

    ellipse(333.325, 333.325, 80, 80);
    fill(230, 230, 110)
    ellipse(199.995, 333.325, 80, 80);
    fill(0, 200, 200);
    stroke(244);
    strokeWeight(2);
    line(133.33, 0, 133.33, 400);
    line(266.66, 0, 266.66, 400);
    line(0, 133.33, 400, 133.33);
    line(0, 266.66, 400, 266.66);
    time = time + 1;

  }

  //Display instruction for level 2 (same as level 1).
  if (level2Start == 1 && time == 190) {
    background(220);
    stroke(244);
    strokeWeight(2);
    line(133.33, 0, 133.33, 400);
    line(266.66, 0, 266.66, 400);
    line(0, 133.33, 400, 133.33);
    line(0, 266.66, 400, 266.66);
    fill(255);
    rect(80, 120, 240, 40);
    fill(0);
    text('Click the square where the yellow dot was.', 87, 145);

  }

  //Evaluate where user clicks to see whether that falls within the boundary of the square where the yellow dot was.
  if (mouseIsPressed == true && time == 190) {
    mouseClickX = mouseX;
    mouseClickY = mouseY;
    level2Start = 2;

  }

  if (mouseClickX > 266.66 || mouseClickX < 133.33) {
    if (level2Start == 2 && time == 190) {
      background(220);
      stroke(244);
      strokeWeight(2);
      line(133.33, 0, 133.33, 400);
      line(266.66, 0, 266.66, 400);
      line(0, 133.33, 400, 133.33);
      line(0, 266.66, 400, 266.66);
      fill(255);
      rect(80, 120, 240, 40);
      fill(0);
      text('Nope. Try again!', 150, 145);
    }
  }
  if (mouseClickY < 266.66 && level2Start == 2) {
    if (time == 190) {
      background(220);
      stroke(244);
      strokeWeight(2);
      line(133.33, 0, 133.33, 400);
      line(266.66, 0, 266.66, 400);
      line(0, 133.33, 400, 133.33);
      line(0, 266.66, 400, 266.66);
      fill(255);
      rect(80, 120, 240, 40);
      fill(0);
      text('Nope. Try again!', 150, 145);
    }
  }
  if (mouseClickX < 266.66 && mouseClickX > 133.33) {
    if (mouseClickY >= 266.66) {
      if (time == 190 && level2Start == 2) {
        level2Done = 1;
        time = 191;

      }
    }
  }
  if (level2Done == 1 && time < 310) {

    background(220);
    stroke(244);
    strokeWeight(2);
    line(133.33, 0, 133.33, 400);
    line(266.66, 0, 266.66, 400);
    line(0, 133.33, 400, 133.33);
    line(0, 266.66, 400, 266.66);
    fill(255);
    rect(80, 120, 240, 40);
    fill(0);
    text('Congrats! You found it!', 140, 145);
    fill(230, 230, 110)
    noStroke();
    ellipse(199.995, 333.325, 80, 80);
    level2End = 1;
    time = time + 1;

  }

  //If user finds the yellow dot, the game automatically moves on to level 3. 
  if (level2End == 1 && time == 310) {
    background(220);
    fill(0);
    textAlign(CENTER);
    textSize(24);
    textStyle(BOLD);
    text('Memory Game Level 3', 200, 190);
    textStyle(NORMAL);
    text('Press Y to start', 200, 230);
    textStyle(BOLD);
    fill(190, 0, 255);
    text('Y', 194, 230);
    textStyle(NORMAL);
    textSize(12);
    textAlign(LEFT);

  }


  if (level3Start == 1 && time < 320) {
    background(220);
    noStroke();
    ellipse(50, 50, 80, 80);
    fill(244)
    ellipse(150, 50, 80, 80);
    ellipse(250, 50, 80, 80);
    ellipse(350, 50, 80, 80);
    ellipse(50, 150, 80, 80);
    ellipse(150, 150, 80, 80);
    fill(200, 180, 200);
    ellipse(250, 150, 80, 80);
    fill(244)
    ellipse(350, 150, 80, 80);
    fill(150, 220, 150);
    ellipse(50, 250, 80, 80);
    fill(244)
    ellipse(150, 250, 80, 80);
    fill(200, 160, 160);
    ellipse(250, 250, 80, 80);
    fill(244)
    ellipse(350, 250, 80, 80);
    ellipse(50, 350, 80, 80);
    ellipse(150, 350, 80, 80);
    ellipse(250, 350, 80, 80);
    fill(230, 230, 110)
    ellipse(350, 350, 80, 80);
    fill(0, 200, 200);
    stroke(244);
    strokeWeight(2);
    line(100, 0, 100, 400);
    line(200, 0, 200, 400);
    line(300, 0, 300, 400);
    line(0, 100, 400, 100);
    line(0, 200, 400, 200);
    line(0, 300, 400, 300);
    time = time + 1;

  }
  //Display instruction for level 3. 
  if (level3Start == 1 && time == 320) {
    background(220);
    line(100, 0, 100, 400);
    line(200, 0, 200, 400);
    line(300, 0, 300, 400);
    line(0, 100, 400, 100);
    line(0, 200, 400, 200);
    line(0, 300, 400, 300);
    fill(255);
    rect(80, 80, 240, 30);
    fill(0);
    text('Click the square where the purple dot was.', 85, 100);
  }

  //Evaluate where user clicks to see whether that falls within the boundary of the square where the purple dot was.
  if (mouseIsPressed == true && time == 320) {
    mouseClickX = mouseX;
    mouseClickY = mouseY;
    level3Start = 2;
  }

  if (mouseClickY < 100 || mouseClickY > 200) {
    if (level3Start == 2 && time == 320) {
      line(100, 0, 100, 400);
      line(200, 0, 200, 400);
      line(300, 0, 300, 400);
      line(0, 100, 400, 100);
      line(0, 200, 400, 200);
      line(0, 300, 400, 300);
      fill(255);
      rect(80, 80, 240, 30);
      fill(0);
      text('Nope. Try again!', 150, 100);

    }
  }

  if (mouseClickX < 200 || mouseClickX > 300) {
    if (level3Start == 2 && time == 320) {
      line(100, 0, 100, 400);
      line(200, 0, 200, 400);
      line(300, 0, 300, 400);
      line(0, 100, 400, 100);
      line(0, 200, 400, 200);
      line(0, 300, 400, 300);
      fill(255);
      rect(80, 80, 240, 30);
      fill(0);
      text('Nope. Try again!', 150, 100);

    }
  }
  if (mouseClickX < 300 && mouseClickX > 200) {
    if (mouseClickY > 100 && mouseClickY < 200) {
      if (time == 320 && level3Start == 2) {
        level3Done = 1;
        time = 321;

      }
    }
  }

  if (level3Done == 1 && time < 420) {

    background(220);
    stroke(244);
    strokeWeight(2);
    line(100, 0, 100, 400);
    line(200, 0, 200, 400);
    line(300, 0, 300, 400);
    line(0, 100, 400, 100);
    line(0, 200, 400, 200);
    line(0, 300, 400, 300);
    fill(255);
    rect(80, 80, 240, 30);
    fill(0);
    text('Congrats! You found it!', 140, 100);
    fill(200, 180, 200);
    noStroke();
    ellipse(250, 150, 80, 80);
    level3End = 1;
    time = time + 1;

  }

  //When user finds the purple dot, display message that they won!
  if (level3End == 1 && time == 420) {
    background(220);
    fill(0);
    textAlign(CENTER);
    textSize(24);
    textStyle(BOLD);
    fill(190, 0, 255);
    text('Congrats! You won!', 200, 200);
  }


}

//At the beginning of each level, user presses Y to start. 
function keyTyped() {

  if (key === 'y') {
    if (level1Done == 0) {
      startGame = 1
    }
    if (level1End == 1 && level2Start == 0) {
      level2Start = 1
    }
    if (level2End == 1 && level3Start == 0) {
      level3Start = 1
    }

  }


}