function setup() {
  createCanvas(1000, 800); // create empty canvas
  frameRate(50); // set frame rate

}

// set global variables

// shaggy starting position
var xStart1 = 50;
var yStart1 = 50;

// scooby starting position
var xStart2 = 900;
var yStart2 = 50;

// velma starting position
var xStart3 = 50;
var yStart3 = 575;

// daphne starting positon
var xStart4 = 900;
var yStart4 = 575;


function draw() {
  // set mystery machine color palette background
  var xback = 200; // set starting point for multiple background colors
  var yback = 800; // span entire background height
  var mysterymachine = color(0, 207, 212);
  background(mysterymachine);
  noStroke();
  var green = color(0, 227, 4); // mystery machine green
  var orange = color(255, 141, 0); // mystery machine orange
  fill(green);
  rect(xback, 0, xback, yback);
  fill(orange);
  rect(xback + 200, 0, xback, yback);
  fill(green);
  rect(xback + 400, 0, xback, yback);

  // draw scooby doo lego characters

  // shaggy
  var shaghair = color(233, 175, 16); // shaggy's hair color
  var shagface = color(254, 211, 140); // shaggy's skin color
  var shagshirt = color(184, 190, 25); // shaggy's shirt color
  var shagpants = color(164, 65, 56); // shaggy's pants color
  var shagshoes = color(65, 82, 92); // shaggy's shoe color

  noStroke();
  fill(shaghair);
  rect(xStart1, yStart1, 50, 20); // shaggy's hair
  fill(shagface);
  rect(xStart1, yStart1 + 20, 50, 30); // shaggy's face
  fill(shagshirt);
  rect(xStart1, yStart1 + 50, 50, 50); // shaggy's shirt
  fill(shagpants);
  rect(xStart1, yStart1 + 100, 50, 63); // shaggy's pants
  fill(shagshoes);
  rect(xStart1, yStart1 + 163, 50, 12); // shaggy's pants

  if (xStart1 < 425) {
    xStart1 = xStart1 + 1;
  } // keep shaggy x-coord toward middle

  if (yStart1 < 400) {
    yStart1 = yStart1 + 1;
  } // keep shaggy y-coord toward middle

  // scooby
  var scoobfur = color(176, 110, 14); // scooby's fur color
  var scoobspots = color(2, 3, 7); // scooby's spot color
  var scoobcollar = color(23, 189, 185); // scooby's collar color
  var scoobtag = color(249, 224, 20); // scooby's tag color

  if (xStart2 > 525) {
    xStart2 = xStart2 - 1;
  } // keep scooby x-coord toward middle

  if (yStart2 < 400) {
    yStart2 = yStart2 + 1;
  } // keep scooby y-coord toward middle

  noStroke();
  fill(scoobfur);
  rect(xStart2, yStart2, 50, 70); // scooby's fur
  fill(scoobspots);
  rect(xStart2, yStart2 + 70, 50, 12); // scooby's spots
  fill(scoobcollar);
  rect(xStart2, yStart2 + 82, 50, 8); // scooby's collar
  fill(scoobtag);
  rect(xStart2, yStart2 + 90, 50, 5); // scooby's tag
  fill(scoobfur);
  rect(xStart2, yStart2 + 95, 50, 80); // scooby's paws

  // velma
  var velhair = color(164, 65, 56); // velma's hair color
  var velglasses = color(172, 224, 238); // velma's glasses color
  var velshirt = color(248, 153, 29); // velma's shirt color
  var velskirt = color(199, 12, 71); // velma's skirt color

  noStroke();
  fill(velhair);
  rect(xStart3, yStart3, 50, 20); // velma's hair
  fill(velglasses);
  rect(xStart3, yStart3 + 20, 50, 12); // velma's glasses
  fill(velshirt);
  rect(xStart3, yStart3 + 32, 50, 60); // velma's shirt
  fill(velskirt);
  rect(xStart3, yStart3 + 92, 50, 45); // velma's skirt
  fill(velshirt);
  rect(xStart3, yStart3 + 137, 50, 30); // velma's socks
  fill(velskirt);
  rect(xStart3, yStart3 + 167, 50, 8); // velma's shoes

  if (xStart3 < 325) {
    xStart3 = xStart3 + 1;
  } // keep velma x-coord toward middle

  if (yStart3 > 400) {
    yStart3 = yStart3 - 1;
  } // keep velma y-coord toward middle

  // daphne
  var daphhair = color(247, 146, 30); // daphne's hair color
  var daphdress1 = color(99, 82, 163); // daphne's main dress color
  var daphdress2 = color(160, 145, 198); // daphne's dress outline color
  var daphascot = color(208, 214, 27); // daphne's ascot color
  var daphtights = color(251, 205, 198); // daphne's tights color


  noStroke();
  fill(daphhair);
  rect(xStart4, yStart4, 50, 20); // daphne's hair
  fill(daphascot);
  rect(xStart4, yStart4 + 20, 50, 12); // daphne's ascot
  fill(daphdress1);
  rect(xStart4, yStart4 + 32, 50, 60); // daphne's dress
  fill(daphdress2);
  rect(xStart4, yStart4 + 92, 50, 6); // daphne's dress details
  fill(daphdress1);
  rect(xStart4, yStart4 + 98, 50, 35); // dapne's dress
  fill(daphdress2);
  rect(xStart4, yStart4 + 133, 50, 6); // daphne's dress details
  fill(daphtights);
  rect(xStart4, yStart4 + 139, 50, 40); // daphne's tights
  fill(daphdress2);
  rect(xStart4, yStart4 + 179, 50, 6); // daphne's shoes


  if (xStart4 > 625) {
    xStart4 = xStart4 - 1;
  } // keep daphne x-coord toward middle

  if (yStart4 < 400) {
    yStart4 = yStart4 - 1;
  } // keep daphne y-coord toward middle

  yStart4 = 400; // correct daphne end y-coord, since it reaches x=625 first

}