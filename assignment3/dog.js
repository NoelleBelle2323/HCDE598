////variables\\\\
//start training variables
var Press = "Press";
var Calldog = "to call your dog over";


//command list variables
var commandsit = "Sit";
var commanddown = "Down";
var commandlook = "Look";

//image variables
var imgCall;
var imgSit;
var imgDown;
var imgLook;
var y = 200


function setup() {
  createCanvas(600, 400);
  
//image not rendering solution from https://github.com/processing/p5.js/issues/561

  imgCall = createImg("https://i.imgur.com/4ZMgEcn.png");
  imgCall.hide();
    imgSit = createImg("https://i.imgur.com/bsJY1ce.png");
  imgSit.hide();
    imgDown = createImg("https://i.imgur.com/uSDpOBh.png");
  imgDown.hide();
    imgLook = createImg("https://i.imgur.com/vwSdMfq.png");
  imgLook.hide();
}

function draw() {

  //intro screen
  snowyhills();
  fill(72,99,110);
  textSize(30);
  text(Press, 100, height - 180);
    text(Calldog, 220, height - 180);
  fill(121,0,0);
    text("C", 187, height - 180);

  if (key == "c") {
    huskycall();
  } else if (key == "s") {
    huskysit();
  } else if (key == "d") {
    huskydown();
  } else if (key == "l") {
    huskylook();
  }

}


/////// FUNCIONS TO CALL \\\\\\\
//display commands
function commands() {
  //commandbuttons
  fill(121,0,0);
  rect(15, y - 60, 55, 55, 10);
  rect(15, y + 28, 55, 55, 10);
  rect(15, y + 115, 55, 55, 10);
  //text for commands
  fill("black");
  textSize(20);
  text(commandsit, 30, y + 15);
  text(commanddown, 20, y + 102);
  text(commandlook, 22, y + 190);
  //text for buttons
  fill("white");
  textSize(40);
  text("S", 30, y - 18);
  text("D", 30, y + 70);
  text("L", 30, y + 155);
}

//snowy hills background
function snowyhills() {
  background(182, 224, 241);
  fill("white");
  strokeWeight(5);
  stroke(180, 203, 212);
  ellipse(150, 300, 600, 400);
  ellipse(400, 350, 900, 500);
  noStroke();

}

//code to make the husky appear
function huskycall() {
  snowyhills();
  commands();
  image(imgCall, 200, 50, imgCall.elt.width, imgCall.elt.height); //image not rendering solution from https://github.com/processing/p5.js/issues/561

}

//husky sitting
function huskysit() {
  snowyhills();
  commands();
  image(imgSit, 200, 50, imgSit.elt.width, imgSit.elt.height); //image not rendering solution from https://github.com/processing/p5.js/issues/561

}

//husky laying down
function huskydown() {
  snowyhills();
  commands();
  image(imgDown, 200, 100, imgDown.elt.width, imgDown.elt.height); //image not rendering solution from https://github.com/processing/p5.js/issues/561

}

//husky sitting
function huskylook() {
  snowyhills();
  commands();
  image(imgLook, 200, 50, imgLook.elt.width, imgLook.elt.height); //image not rendering solution from https://github.com/processing/p5.js/issues/561



}