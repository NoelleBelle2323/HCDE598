  var positionX = 100;
  var positionY = 100;
  var position2X = 500;
  var position2Y = 100;
  var position3X = 100;
  var position3Y = 400;
  var position4X = 500;
  var position4Y = 400;
  var shapewidth = 150;
  var shapeheight = 150;

  function setup() {
    createCanvas(600, 500);
     background(100);
  
  }

  function draw() {
    background(100);
    stroke("#c68c53");
    strokeWeight(10)
    fill("#ffe699");

    //upper left slice//
    arc(positionX, positionY, shapewidth, shapeheight, PI, 1.5 * PI);
    //upper right slice//
    arc(position2X, position2Y, shapewidth, shapeheight, 1.5 * PI, 0);
    //lower left slice//
    arc(position3X, position3Y, shapewidth, shapeheight, .5 * PI, PI);
    //lower right slice//
    arc(position4X, position4Y, shapewidth, shapeheight, 0, HALF_PI);

    //upperleft pepperoni//
    noStroke();
    fill("#b32400");
    ellipse(positionX - 20, positionY - 20, 10, 10);
    ellipse(positionX - 30, positionY - 40, 10, 10);
    ellipse(positionX - 40, positionY - 20, 10, 10);
    
    //upper right pepperoni//
    ellipse(position2X + 20, position2Y - 20, 10, 10);
    ellipse(position2X + 30, position2Y - 40, 10, 10);
    ellipse(position2X + 40, position2Y - 20, 10, 10);
    
    //lower left pepperoni//
    ellipse(position3X - 20, position3Y + 20, 10, 10);
    ellipse(position3X - 30, position3Y + 40, 10, 10);
    ellipse(position3X - 40, position3Y + 20, 10, 10);
    
    //lower right pepperoni//
    ellipse(position4X + 20, position4Y + 20, 10, 10);
    ellipse(position4X + 30, position4Y + 40, 10, 10);
    ellipse(position4X + 40, position4Y + 20, 10, 10);

    //vertical moves//
    //upper left//
    if (positionX < 300) {
      positionX = positionX + 1;
    }
    
// upper right//
    if (position2X > 300) {
      position2X = position2X - 1;
    }
    
    //lower left//
    if (position3X < 300) {
      position3X = position3X + 1;
    }
    
//lower right//
    if (position4X > 300) {
      position4X = position4X - 1;
    }
    

    //horizontal moves//
    //uper left//
    if (positionY < 250) {
      positionY = positionY + 1;
    }
    
    //upper right//
    if (position2Y < 250){
      position2Y = position2Y + 1;
  }
  
		//lower left//
		if (position3Y > 250) {
    position3Y = position3Y - 1;
  }
    
		//lower right//
  	if (position4Y > 250) {
    position4Y = position4Y - 1;
  }
  }
  