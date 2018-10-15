//Animation of characters from the show Daria
var positionX = 30;
var positionY = 30;
var position2X = 700;
var position2Y = 30;
var position3X = 30;
var position3Y = 400;
var position4X = 500;
var position4Y = 400;
var shapewidth = 65;
var shapeheight = 150;
var padding = 200; //distance from edges of canvas

function setup() {
  createCanvas(800, 700);
}

function draw() {
  background(22, 103, 178);

  //Upper left Jane
  fill("black");
  noStroke();
  rect(positionX, positionY, shapewidth, shapeheight);
  fill(254, 199, 157); //peach
  rect(positionX, positionY + 60, shapewidth, shapeheight);
  fill(106, 0, 7); //crimson
  rect(positionX, positionY + 100, shapewidth, shapeheight);
  fill("black");
  rect(positionX, positionY + 250, shapewidth, 110);


  //Upper right Daria
  noStroke();
  fill(101, 31, 18); //brown
  rect(position2X, position2Y + 10, shapewidth, shapeheight);
  fill(253, 227, 182); //ivory
  rect(position2X, position2Y + 80, shapewidth, shapeheight);
  fill(17, 90, 50); //green
  rect(position2X, position2Y + 100, shapewidth, shapeheight);
  fill("black");
  rect(position2X, position2Y + 220, shapewidth, 40);
  fill(253, 227, 182) //ivory
  rect(position2X, position2Y + 260, shapewidth, 40);
  fill("black");
  rect(position2X, position2Y + 280, shapewidth, 80);



  //Bottom left Trent
  noStroke();
  fill("black");
  rect(position3X, position3Y, shapewidth, shapeheight);
  fill(254, 199, 157); //peach
  rect(position3X, position3Y + 12, shapewidth, shapeheight);
  fill(172, 175, 106); //light green
  rect(position3X, position3Y + 70, shapewidth, shapeheight);
  fill(83, 86, 99); //grey
  rect(position3X, position3Y + 200, shapewidth, shapeheight);
  fill("black");
  rect(position3X, position3Y + 340, shapewidth, 20);

  //Bottom right Quinn 
  noStroke();
  fill(251, 85, 8); //orange
  rect(position4X, position4Y + 10, shapewidth, shapeheight);
  fill(254, 219, 173); //ivory
  rect(position4X, position4Y + 85, shapewidth, shapeheight);
  fill(245, 177, 194) //pink
  rect(position4X, position4Y + 100, shapewidth, shapeheight);
  fill("yellow"); //yellow dot
  ellipse(position4X + shapewidth / 2, position4Y + 130, 20, 20);
  fill(254, 219, 173); //ivory
  rect(position4X, position4Y + 155, shapewidth, shapeheight);
  fill(8, 77, 192); //denim blue
  rect(position4X, position4Y + 180, shapewidth, shapeheight);
  fill(163, 96, 40); //light brown
  rect(position4X, position4Y + 330, shapewidth, 30);

  // these tell you where your shape ends, final position 
  /////////////////////////////////////////////////////////
  
  //All vertical moves
  if (positionX < 315) {
    positionX = positionX + 1;
  }
  if (position2X > 425) {
    position2X = position2X - 1;
  }
  if (position3X < width - padding - shapewidth) {
    position3X = position3X + 2;
  }
  if (position4X > padding) {
    position4X = position4X - 1;
  }

  //All horizontal moves
  if (positionY < 250) {
    positionY = positionY + 1;
  }
  if (position2Y < 250) {
    position2Y = position2Y + 1;
  }
  if (position3Y > 250) {
    position3Y = position3Y - 1;
  }
  if (position4Y > 250) {
    position4Y = position4Y - 1;
  }
}