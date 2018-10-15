  var breadX = 60; // upper bread
  var breadY = 60;

  var lettuce2X = 90; // lettuce
  var lettuce2Y = 590;

  var tomato2X = 60; // tomato
  var tomato2Y = 640;

  var bacon3X = 600 // bacon
  var bacon3Y = 130

  var bread4X = 635; //lower bread
  var bread4Y = 635;

  var shapewidth = 85;
  var shapeheight = 85;

  function setup() {
    createCanvas(700, 700);

    rectMode(CENTER);
  }

  function draw() {



    background(153,255,255);

    fill("white");
    noStroke();
    ellipse(350, 350, 200, 200);


    //I grabbed this section of code
    for (var i = 0; i < 50; i = i + 1) { // I see what they did but I never would have figured this out on my own
      push();
      fill(224, 224, 224);
      noStroke();
      translate(width / 2, height / 2);
      rotate(TWO_PI * i / 50); // is this saying "one of 50, two of 50, and so on? or is it actually multiplying ?
      rect(84, 0, 25, 5);
      pop();
    }


    fill(255, 255, 204); //upper left bread
    strokeWeight(6);
    strokeJoin(ROUND);
    stroke(204, 102, 0)
    rect(breadX, breadY, shapewidth, shapeheight);


    fill(102, 204, 0);
    strokeWeight(0)

    push();
    translate(0, 0);
    beginShape(); // lettuce
    vertex(lettuce2X, lettuce2Y);
    bezierVertex(lettuce2X + 40, lettuce2Y + 15, lettuce2X + 80, lettuce2Y + 60, lettuce2X + 30, lettuce2Y + 80);
    endShape();
    pop();

    push();
    translate(-40, -15);
    beginShape(); // lettuce top
    vertex(lettuce2X, lettuce2Y);
    bezierVertex(lettuce2X + 40, lettuce2Y + 10, lettuce2X + 80, lettuce2Y + 60, lettuce2X + 30, lettuce2Y + 80);
    endShape();
    pop();

    fill(255, 51, 51); // tomato
    ellipse(tomato2X, tomato2Y, shapewidth, shapeheight);

    strokeWeight(25); //bacon
    stroke(204, 102, 0);
    noFill();
    strokeCap(PROJECT);
    bezier(bacon3X, bacon3Y, bacon3X + 20, bacon3Y - 60, bacon3X + 60, bacon3Y - 10, bacon3X + 70, bacon3Y - 70);

    push();
    translate(-25, -30); //bacon top
    stroke(204, 102, 0);
    noFill();
    strokeCap(PROJECT);
    bezier(bacon3X, bacon3Y, bacon3X + 20, bacon3Y - 60, bacon3X + 60, bacon3Y - 10, bacon3X + 70, bacon3Y - 70);
    pop();


    fill(255, 255, 204); //lower left bread
    strokeWeight(6);
    strokeJoin(ROUND);
    stroke(204, 102, 0)
    rect(bread4X, bread4Y, shapewidth, shapeheight);


    breadX = breadX + 1;
    if (breadX > 350) { // upper bread
      breadX = 350;
    }

    lettuce2X = lettuce2X + 1;
    if (lettuce2X > 360) { // Lettuce
      lettuce2X = 360;
    }

    bacon3X = bacon3X - 1;
    if (bacon3X < 325) { // Bacon
      bacon3X = 325;
    }

    tomato2X = tomato2X + 1;
    if (tomato2X > 335) { // tomato
      tomato2X = 335;
    }

    bread4X = bread4X - 1;
    if (bread4X < 350) { // lower bread 
      bread4X = 350;
    }

    breadY = breadY + 1;
    if (breadY > 350) { // upper bread
      breadY = 350;
    }

    lettuce2Y = lettuce2Y - 1;
    if (lettuce2Y < 330) { // lettuce
      lettuce2Y = 330;
    }

    tomato2Y = tomato2Y - 1;
    if (tomato2Y < 360) { // tomato 
      tomato2Y = 360;
    }


    bacon3Y = bacon3Y + 1;
    if (bacon3Y > 390) { // bacon
      bacon3Y = 390;
    }

    bread4Y = bread4Y - 1;
    if (bread4Y < 350) { // lower bread
      bread4Y = 350;
    }



  }