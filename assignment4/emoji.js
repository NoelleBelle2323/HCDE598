//I reused an emoji shape from last assignment


/*Setting up variable
var x = 50;
var y = 50;
var shapewidth = 70;
var shapeheight = 70;
*/

function setup() {
  createCanvas(600, 600);
  background(220);
  angleMode(DEGREES);//Change angle from radian to degree
}

function draw() {}

//////////////////
///Emoji//////////
//////////////////

function drawEmoji(x,y,scale){
  
  //outter circle 
  noStroke(); 
  fill("#F48B85");
  ellipse(x, y, 1.3571*scale, 1.3571*scale);

  //inner circle
  noStroke();
  fill("#FCE284");
  ellipse(x, y, scale, scale);

  //Left eye
  noStroke();
  fill(255);
  ellipse(x-(0.2142*scale), y-(0.1428*scale), 0.2857 * scale, 0.3571 * scale);

  //eyeball left			
  noStroke();
  fill(0);
  ellipse(x-(0.1714*scale), y-(0.057*scale), 0.1428 * scale , 0.1428 * scale);

  //Right eye
  noStroke();
  fill(255);
  ellipse(x+(0.2142*scale), y-(0.1428*scale), 0.2857 * scale, 0.3571 * scale);

  //eyeball right
  noStroke();
  fill(0);
  ellipse(x+(0.2428*scale),y-(0.057*scale), 0.1428 * scale , 0.1428 * scale);

  //mouth
  fill("#DC594B");
  arc(x,y+(scale*0.28), 0.17 * scale, 0.17 * scale, 0, 225, CHORD);
    
}

//////////////////
///Draw Emoji/////
//////////////////

function mouseClicked(){
  var size = random(70,120);
  drawEmoji(mouseX,mouseY,size);
}


