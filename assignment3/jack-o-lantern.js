//declare variables
var pageNum = 1;
var font = "arial";

//copy
var title1 = "Carve a jack o'lantern."
var instruction1 = "Press any key to begin"
var title2 = "Pick a square or triangle face!"
var instruction2 = "Press s for square or press t for triangle."
var title3 = "Now let's light your jack o'lantern."
var instruction3 = "Press l to continue."
var title4 = "Happy Halloween!"


function setup() {
  createCanvas(400, 400);
  textFont(font);

  textAlign(CENTER);
  fill(255)

  //title location
  titleX = width / 2
  titleY = height / 4;
}

function draw() {
  background(50, 100, 165);
  drawPage(pageNum);
}

function keyPressed() {
  if (pageNum <= 1) {
    pageNum++;
    return false;
  }
}

function keyTyped() {
  if (pageNum == 2) { // open "Choose" message
  if (key == 's') { // if user hits 's', squares open
pageNum == 2
    } else if (key === 't') { // if user hits 't', triangles open
      pageNum = 3;
    }
    return false;
  }

 if (pageNum == 4) {
    if (key === 'l') { // opens yellow jack o'lanterns with happy halloween
      pageNum = 5;
    }
    return false;
  }
  if (pageNum == 3) {
    if (key === 'l') { // opens yellow jack o'lanterns with happy halloween
      pageNum = 6;
    }
    return false;
  }
}

function drawPage(pageNum) {
  if (pageNum == 1) {
    //title text
    textSize(30);

    text(title1, titleX, titleY);

    //instructions text
    textFont(font);
    textAlign(CENTER);
    fill(255)
    textSize(20);
    text(instruction1, titleX, titleY + 60);

  } else if (pageNum == 2) {
    // title
    fill(255)
    textSize(24);
    text(title2, titleX, titleY);

    //  instructions 
    textFont(font);
    textAlign(CENTER);
    textSize(14);
    text(instruction2, titleX, titleY + 200);

    //pumpkin 
    fill(255, 140, 0);
    ellipse(200, 200, 175, 100);
    //stem
    noStroke();
    fill(100);
    rect(190, 130, 10, 20, 20);


  } else if (pageNum == 3) {
    // title
    fill(255)
    textSize(24);
    text(title3, titleX, titleY);
    //instructions text
    fill(255)
    textSize(24);
    text(instruction3, titleX, titleY + 200);
    //pumpkin 
    fill(255, 140, 0);
    ellipse(200, 200, 175, 100);
    //stem
    fill(100);
    rect(190, 130, 10, 20, 20);
    //eye left
    fill(100);
    triangle(175, 190, 200, 175, 150, 175);
    // eye right
    fill(100);
    triangle(250, 190, 250, 175, 200, 175);
    //nose
    fill(100);
    triangle(250, 210, 185, 200, 200, 175);


  } else if (pageNum == 4) {
    //title
    textSize(28);
    text(title3, titleX, titleY);
    //pumpkin 
    fill(255, 140, 0);
    ellipse(200, 200, 175, 100);
    //stem
    fill(100);
    rect(190, 130, 10, 20, 20);
    //eye left
    fill(100);
    rect(165, 175, 20, 20);
    // eye right
    fill(100);
    rect(225, 175, 20, 20);
    //nose
    fill(100);
    rect(195, 195, 20, 20);

  } else if (pageNum == 5) {
    //title
    textSize(28);
    text(title4, titleX, titleY);
    //pumpkin 
    fill(255, 140, 0);
    ellipse(200, 200, 175, 100);
    //stem
    fill(100);
    rect(190, 130, 10, 20, 20);
    //eye left
    fill(255, 255, 0);
    rect(165, 175, 20, 20);
    // eye right
    fill(255, 255, 0);
    rect(225, 175, 20, 20);
    //nose
    fill(255, 255, 0);
    rect(195, 195, 20, 20);

  } else if (pageNum == 6) {
    //title
    textSize(28);
    text(title4, titleX, titleY);
    //pumpkin 
    fill(255, 140, 0);
    ellipse(200, 200, 175, 100);
    //stem
    fill(100);
    rect(190, 130, 10, 20, 20);
    //eye left
    fill(255, 255, 0);
    triangle(175, 190, 200, 175, 150, 175);
    // eye right
    fill(255, 255, 0);
    triangle(250, 190, 250, 175, 200, 175);
    //nose
    fill(255, 255, 0);
    triangle(250, 210, 185, 200, 200, 175);
  }
}