var positionX = 55;
var positionY = 45;
var position2X = 55;
var position2Y = 355;
var position3X = 480;
var position3Y = 45;
var position4X = 480;
var position4Y = 355;
var diameter = 70;

function setup () {
  createCanvas(535,400);
  
}

function draw () {
  background("#f9f4f4");
  stroke("white");
  strokeWeight("2");
  
// light green circle
  fill("#dcedc1");
  ellipse(positionX, positionY, diameter, diameter);
  
// maroon circle
  fill("#851e3e");
  ellipse(position2X, position2Y, diameter, diameter);
  
// teal circle
  fill("#54b2a9");
  ellipse(position3X, position3Y, diameter, diameter);
  
// coral circle
  fill("#fe8a71");
  ellipse(position4X, position4Y, diameter, diameter);
  
// light green circle will move right until it reaches x = 200
  if (positionX < 200) {
   positionX = positionX + 1;  
	}

// teal circle will move left until it reaches x = 300
  if (position3X > 300) {
   position3X = position3X - 1;  
	}
  
// maroon circle will move right until it reaches x = 100
  if (position2X < 100) {
   position2X = position2X + 1;  
	}
  
// coral circle will move left until x = 400
 if (position4X > 400) {
   position4X = position4X - 1;  
	}
   
  
// light green circle will move down and stop when it reaches y = 200  
	if (positionY < 200) { 
  	positionY = positionY + 1;
	}
  
// teal circle will move down and stop when it reaches y = 200
	if (position3Y < 200) {
  	position3Y = position3Y + 1;
  }
  
// maroon circle will move up and stop when it reaches y = 200
	if (position2Y > 200) {
  	position2Y = position2Y - 1;
  }  

// coral circle will move up and stop until it reaches y = 200
	if (position4Y > 200) {
  	position4Y = position4Y - 1;
  }
  
}
