function setup() {
    createCanvas(600, 600);
     angleMode(DEGREES);
}

//S1 triangle(30, 75, 60, 20, 160, 75)
var myredxCoord1 = 30
var myredxCoord2 = 60
var myredxCoord3 = 160
var myredyCoord1 = 75
var myredyCoord2 = 20
var myredyCoord3 = 75

//S2 triangle(515, 20, 570, 60, 515, 150)
var mybluexCoord1 = 515
var mybluexCoord2 = 570
var mybluexCoord3 = 515
var myblueyCoord1 = 20
var myblueyCoord2 = 60
var myblueyCoord3 = 150

//S3 triangle(85, 580, 30, 540, 85, 450)
var mygrenxCoord1 = 85
var mygrenxCoord2 = 30
var mygrenxCoord3 = 85
var mygrenyCoord1 = 580
var mygrenyCoord2 = 540
var mygrenyCoord3 = 450

//S4 triangle(440, 525, 540, 580, 570, 525)
var myyeloxCoord1 = 570
var myyeloxCoord2 = 540
var myyeloxCoord3 = 440
var myyeloyCoord1 = 525
var myyeloyCoord2 = 580
var myyeloyCoord3 = 525

let angle = 0


function draw() {
    background(204, 238, 255);
    
    
    //Beach
    noStroke();
    fill(217, 179, 140);
    quad(0, 600, 600, 600, 600, 430, 0, 430);
    
    //Windmill Body
    fill(64, 64, 64);
    quad(230, 480, 370, 480, 330, 270, 270, 270);
    

    //S1 - Red
    fill(204, 51, 0);
    noStroke();
    triangle(myredxCoord1, myredyCoord1, myredxCoord2, myredyCoord2, myredxCoord3, myredyCoord3);

    myredxCoord1 = myredxCoord1 + 1
    myredxCoord2 = myredxCoord2 + 1
    myredxCoord3 = myredxCoord3 + 1
    myredyCoord1 = myredyCoord1 + 1.6
    myredyCoord2 = myredyCoord2 + 1.6
    myredyCoord3 = myredyCoord3 + 1.6

    //S1 Limit
    if (myredxCoord3 > 300) {
        myredxCoord1 = 170
        myredxCoord2 = 200
        myredxCoord3 = 300
        myredyCoord1 = 300
        myredyCoord2 = 245
        myredyCoord3 = 300
    }


    //S2 - Blue
    fill(51, 102, 204);
    noStroke();
    triangle(mybluexCoord1, myblueyCoord1, mybluexCoord2, myblueyCoord2, mybluexCoord3, myblueyCoord3);

    mybluexCoord1 = mybluexCoord1 - 1.44
    mybluexCoord2 = mybluexCoord2 - 1.44
    mybluexCoord3 = mybluexCoord3 - 1.44
    myblueyCoord1 = myblueyCoord1 + 1
    myblueyCoord2 = myblueyCoord2 + 1
    myblueyCoord3 = myblueyCoord3 + 1

    //S2 Limit
    if (mybluexCoord3 < 300) {
        mybluexCoord1 = 300
        mybluexCoord2 = 355
        mybluexCoord3 = 300
        myblueyCoord1 = 170
        myblueyCoord2 = 210
        myblueyCoord3 = 300
    }


    //S3 - Green
    fill(51, 153, 51);
    noStroke();
    triangle(mygrenxCoord1, mygrenyCoord1, mygrenxCoord2, mygrenyCoord2, mygrenxCoord3, mygrenyCoord3);

    mygrenxCoord1 = mygrenxCoord1 + 1.45
    mygrenxCoord2 = mygrenxCoord2 + 1.45
    mygrenxCoord3 = mygrenxCoord3 + 1.45
    mygrenyCoord1 = mygrenyCoord1 - 1
    mygrenyCoord2 = mygrenyCoord2 - 1
    mygrenyCoord3 = mygrenyCoord3 - 1

    //S1 Limit 
    if (mygrenxCoord3 > 300) {
        mygrenxCoord1 = 300
        mygrenxCoord2 = 245
        mygrenxCoord3 = 300
        mygrenyCoord1 = 430
        mygrenyCoord2 = 390
        mygrenyCoord3 = 300
    }

    //S4 - Yellow
    fill(255, 204, 0);
    noStroke();
    triangle(myyeloxCoord1, myyeloyCoord1, myyeloxCoord2, myyeloyCoord2, myyeloxCoord3, myyeloyCoord3);

    myyeloxCoord1 = myyeloxCoord1 - 1
    myyeloxCoord2 = myyeloxCoord2 - 1
    myyeloxCoord3 = myyeloxCoord3 - 1
    myyeloyCoord1 = myyeloyCoord1 - 1.6
    myyeloyCoord2 = myyeloyCoord2 - 1.6
    myyeloyCoord3 = myyeloyCoord3 - 1.6

    //S1 Limit (570, 525, 540, 580, 440, 525)
    if (myyeloxCoord3 < 300) {
        myyeloxCoord1 = 430
        myyeloxCoord2 = 400
        myyeloxCoord3 = 300
        myyeloyCoord1 = 300
        myyeloyCoord2 = 355
        myyeloyCoord3 = 300
    }

    //Windmill Front w/ Rotate
    push();
    translate (300,300);
    rotate (angle);
    angle = angle -1
    fill(255);
    quad(0, 20, 20, 0, -20, 0, 0, -20);

    pop();



    //Show Coordinates
    fill('grey');
    stroke('grey');
    rect(0, 0, 100, 20);

    // sets the color of the text
    fill('black')
    stroke('black');
    strokeWeight(1);

    // writes the text of the current coordinates in the corner
    text("x: " + mouseX + " y: " + mouseY, 10, 15);
}