/////This program displays the making of 3 types of pizza

function setup() {
    createCanvas(800, 900);
     angleMode(DEGREES);
}

//Hawaiianpizza - Ham (270, 275, 30, 40)
var hamx = 270
var hamy = 275

//Pepperonipizza - Pepperoni
var pppx = 400
var pppy = 400


function draw() {
    background (200)
    
    //Text
    textSize (35)
    fill (255)
    text ("Pick your Pizza! Press # key for:",50, 780)
    
    textSize (25)
    text ("1 - Hawaiian Pizza", 50, 850)
    text ("2 -  Cheese Pizza", 300, 850)
    text ("3 -  Pepperoni Pizza", 550, 850)
    
    //Dough
    stroke(255, 204, 102);
    strokeWeight(50);
    fill(255, 230, 179);
    ellipse(400, 400, 500, 500);

    //TomatoSauce
    noStroke();
    fill(255, 83, 26);
    ellipse(400, 400, 400, 400)


    if (key == 1) {
        Hawaiianpizza();
    } else if (key == 2) {
        Cheesepizza();
    } else if (key == 3) {
        Pepperonipizza();
    }
}



//////Functions to draw the pizza

function Hawaiianpizza() {
    //Ham 
    fill(255, 204, 204)
    rect(hamx, hamy, 30, 40);
    rect(hamx+70, hamy+50, 30, 40);
    rect(hamx+140, hamy+25, 30, 40);
    rect(hamx+200, hamy+70, 30, 40);
    rect(hamx+240, hamy+170, 30, 40);
    rect(hamx+170, hamy+130, 30, 40);
    rect(hamx+135, hamy+200, 30, 40);
    rect(hamx+70, hamy+240, 30, 40);
    rect(hamx+30, hamy+120, 30, 40);
    rect(hamx+10, hamy+190, 30, 40);
    
    //Pinapple
    push ();
    translate (400, 400);
    rotate (30);
    fill (255, 255, 77);
    rect (-170,-100,20, 35);
    rotate (20);
    rect (-100,-80,20, 35);
    rect (-40,-60,20, 35);
    rotate (-15)
    rect (-10, -20, 20,15);
    rotate (90);
    rect (140, 20, 20,45);
    rect (-170,-100,20, 35);
    rotate (-30)
    rect (-100,-80,20, 35);
    rect (-40,-60,20, 35);
    rotate (90);
    rect (-10, -20, 20,15);
    rect (140, 20, 20,45);
    rotate (180)
    rect (-30, -20, 20,15);
    rect (180, 20, 20,45);
    rect (10, 90, 20,35);
    rect (40, 120, 20, 45)
    rect (-110, 0, 20, 15)
    pop ()
    fill (255, 255, 77)
    rect (520, 500, 20, 35)
}

function Cheesepizza() {
    //Cheese
    fill (255, 255, 230, 180);
    ellipse (400, 400, 400, 400);
}

function Pepperonipizza () {
    //Pepperoni
    fill (153, 38, 0)
	ellipse (pppx, pppy,45, 45)
    ellipse (pppx+90, pppy+90,45, 45)
    ellipse (pppx-90, pppy-90,45, 45)
    ellipse (pppx+90, pppy-90,45, 45)
    ellipse (pppx-90, pppy+90,45, 45)
    ellipse (pppx-120, pppy,45, 45)
    ellipse (pppx+120, pppy,45, 45)
    ellipse (pppx, pppy+120,45, 45)
    ellipse (pppx, pppy-120,45, 45)
}
