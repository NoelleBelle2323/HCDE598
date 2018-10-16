var x1 = 105,
 x2 = 5,
 x3 = 200,
 x4 = 50;

var xa = 110,
 xb = 10,
 xc = 205,
 xd = 55;

var s1 = 705,
 s2 = 605,
 s3 = 800,
 s4 = 650;

var sa = 710,
 sb = 610,
 sc = 805,
 sd = 655;

var y1 = 45,
 y2 = 20,
 y3 = 200,
 y4 = 135;
	
var ya = 50,
 yb = 25,
 yc = 205,
 yd = 140;

var n1 = 445,
 n2 = 420,
 n3 = 600,
 n4 = 535;

var na = 450,
 nb = 425,
 nc = 605,
 nd = 540;

function setup() {
  createCanvas(800, 600);
	}
	
function draw() {
  background(226, 114, 91);
	
	//HEAD
  //strokeWeight(2);
	//noFill();
	//ellipse(400, 300, 600, 550);

	//coordinate code
	fill('grey');
  stroke('grey');
  rect(0, 0, 100, 25);

  // sets the color of the text
  fill('black');
  stroke('black');
  strokeWeight(1);
	

  // writes the text of the current coordinates in the corner
  text("x: " + mouseX + " y: " + mouseY, 10, 15);


	
//SNAKE Coordinates

//SNAKE 1 (Black)
strokeWeight(10);
noFill();
bezier(x4, y4, x3, y3, x2, y2, x1, y1);

fill("black");
ellipse(x1+2, y1-2.5, 30, 10);

noStroke();	
fill(226, 114, 91);	
ellipse(x1 - 5, y1 - 5, 5, 5);

strokeWeight(2);	
stroke(226, 114, 91);
line(x1+5, y1, x1 + 20, y1);	


//SNAKE 2	(White)
stroke("white");
noFill();
strokeWeight(10);	
bezier(xa, na, xb, nb, xc, nc, xd, nd);
	
stroke("black");
fill("black");
ellipse(xa+2, na-2.5, 30, 10);

noStroke();	
fill(226, 114, 91);	
ellipse(xa - 5, na - 5, 5, 5);

strokeWeight(2);	
stroke(226, 114, 91);
line(xa+5, na, xa + 20, na);

//SNAKE 3 (Amber)
stroke("black");
strokeWeight(10);
bezier(s1, n1, s2, n2, s3, n3, s4, n4);

stroke(255,194,0); //amber
ellipse(s1+2, n1-2.5, 30, 10);

noStroke();	
fill(226, 114, 91);	
ellipse(s1 - 5, n1 - 5, 5, 5);

strokeWeight(2);	
stroke(226, 114, 91);
line(s1+5, n1, s1 + 20, n1);	

//SNAKE 4 (Green)
stroke("green")
strokeWeight(10);
bezier(sa, ya, sb, yb, sc, yc, sd, yd);
	
fill("green");
ellipse(sa+2, ya-2.5, 30, 10);

noStroke();	
fill(226, 114, 91);	
ellipse(sa - 5, ya - 5, 5, 5);

strokeWeight(2);	
stroke(226, 114, 91);
line(sa+5, ya, sa + 20, ya);
	
//ABSCISSA
if (x1 < 250) { // black snake head, move to x = 250
    x1 = x1 + 1;
	}	
if (x4 < 80) { // black snake tail, move to x = 80
    x4 = x4 + 1;
	}
if (xa < 350) { // white snake head x = 350
    xa = xa + 1;
	}
if (xd < 260) {// white snake tail x = 260
    xd = xd + 1;
}
	if (s1 > 550) { // amber snake head move to x = 550
    s1 = s1 - 1;
	}
if (s4 < 720) { // amber snake tail move to x = 720
    s4 = s4 + 1;
}
if (sa > 450) { // green snake head move to x = 450
    sa = sa - 1;
	}
if (sd > 400) { // green snake tail move to x = 400
    sd = sd - 1;
}
//ORDINATE
	
	if (y1 < 300) { // black snake head to y = 300
    y1 = y1 + 1;
	}
	if (y4 < 350) { // black snake tail to y = 350
    y4 = y4 + 1;
	}
	if (n1 > 300) { // amber snake head to y = 300
    n1 = n1 - 1;
	}
	if (n4 > 190) { // amber snake tail to y = 190
    n4 = n4 - 1;
	}
	if (ya < 300) { // green snake head to y = 300
    ya = ya + 1;
	}
	if (yd > 70) { // green snake tail to y = 70
    yd = yd - 1;
	}
	if (na > 300) { // white snake head to y = 300
    na = na - 1;
	}
	if (nd > 434) { // white tail head to y = 434
    nd = nd - 1;
	}
	
}