var X1 = 30;
var Y1 = 30;
var X2 = 300;
var Y2 = 30;
var X3 = 30;
var Y3 = 300;
var X4 = 300;
var Y4 = 300;
var W = 40;
var H = 40;

function setup() {
  createCanvas(400, 450);
}

function draw() {
  background("pink");
  //top left 
  noStroke();
  fill("green");
  rect(X1, Y1 , W + 20, H);
  fill("#e6ffe6");
  rect(X1, Y1 + 15, W + 20, H);
  fill("#4dd2ff");
  fill("#28EEE7");
  rect(X1, Y1 + 30, W + 20, H);
  fill("#4dd2ff");
  rect(X1, Y1 + 55, W + 20, H);
  fill("#cc0099");
  rect(X1, Y1 + 65, W + 20, H);


  //top right
 	noStroke();
  fill("#bee7e8");
  rect(X2, Y2, W, H);
  fill("#CCFFFF")
  rect(X2, Y2 + 10, W, H);
  fill("#bee7e8");
  rect(X2, Y2 + 20, W, H);
  fill("#bee7e8");
  rect(X2, Y2 + 40, W, H);
  fill("#ffffb3")
  rect(X2, Y2 + 60, W, H);
  fill("#bee7e8");
  rect(X2, Y2 + 65, W, H);
  fill("#bee7e8")


  //bottom left 
  noStroke();
  fill("#ffffff");
  rect(X3, Y3, W, H);
  fill("#a0d2db");
  rect(X3, Y3 + 65, W, H);  
  fill("#FF66B2");
	rect(X3, Y3 + 40, W, H);
	
  

  //bottom right 
  noStroke();
  fill("#FF9999");
  rect(X4, Y4, W + 25, H);
  fill("#CCFFE5");
  rect(X4, Y4 + 20, W + 25, H);
  fill("#FF9933");
  rect(X4, Y4 + 40, W + 25, H);
  fill("#CCFFE5");
  rect(X4, Y4 + 65, W + 25, H);

  //horizontal 
  if (X1 < 60) {
    X1 = X1 + 1;
  }
  if (X2 > 130) {
    X2 = X2 - 2;

  }
  if (X3 < 255) {
    X3 = X3 + 4;

  }
  if (X4 > 180) {
    X4 = X4 - 2;
  }

  //vertical
  if (Y1 < 125) {
    Y1 = Y1 + 1;
  }
  if (Y2 < 125) {
    Y2 = Y2 + 1;
  }
  if (Y3 > 125) {
    Y3 = Y3 - 2;
  }
  if (Y4 > 125) {
    Y4 = Y4 - 2;
  }
}