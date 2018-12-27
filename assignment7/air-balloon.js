// Canvas size
const canvasWidth = 800
const canvasHeight = 600
// Initial constants for drawing and releasing a new balloon
const initCenterX = 120
const initCenterY = 360
const initStrokeThickness = 3
// to control the speed of flying in X and Y co-ordinates
const initSpeed = 0.5
const initExponent = 1.5
// to control the speed of the foreground balloon at X axis
const speedMultiplier = 10
// reduces the speed of balloon in steps
const initStartingSteps = 5
const strokecolor = "black"
// minimum and maximum size of the balloon
const minimunBalloonSize = 15
const maximumBalloonSize = 30
// foreground balloon size
const maximunBalloonSizeInForeground = 110

//Variable for the foreground balloon color
var bcolor = "#EB3F65"
var ecolor = "#7666E2"
var rcolor = "#A45A1F"
//variable for initial centerX and Y. 
var centerX = initCenterX
var centerY = initCenterY
//StrokeThickness of the foreground ballloon
var strokeThickness = initStrokeThickness
var speed = initSpeed
var exponent = initExponent
var startingSteps = initStartingSteps
var numberOfBalloons = 10

//Clouds 1, 2 and 3 starting point and size
var cloud1X = 225;
var cloud1Y = 77;
var cloud1Size = 2;

var cloud2X = 650
var cloud2Y = 85
var cloud2Size = 1.5

var cloud3X = 90
var cloud3Y = 145
var cloud3Size = 1.0

//Array for background balloons
var backgroundBalloons = []
// the initial size of foreground balloon is set maximunBalloonSizeInForeground
var balloonSize = maximunBalloonSizeInForeground
// this is set to true if the foreground balloon is flying
var isForegroundBalloonActive = false

function setup() {
    frameRate(30)
    //fly numberOfBalloons balloon in the background
    for (var i = 0; i < numberOfBalloons; i++) {
        var newBalloon = {
            //random location of the balloon but only in the sky
            x: random(0, canvasWidth),
            y: random(0, (canvasHeight - 100) / 2),
            //Random size of the balloon between min and max 
            size: random(minimunBalloonSize, maximumBalloonSize),
            //Random color for all the balloon in the background
            bcolor: color(random(255), random(255), random(255)),
            ecolor: color(random(255), random(255), random(255)),
            rcolor: color(random(255), random(255), random(255)),
            strokecolor: "black",
            strokeThickness: 1
        };
        backgroundBalloons.push(newBalloon)
    }
}

function draw() {
    // draw sky
    createCanvas(canvasWidth, canvasHeight)
    background("#86D4F0")
    // draw scene 
    scene()
    // if the foreground balloon is active then fly it
    if (isForegroundBalloonActive) {
        flyBalloon()
    } else {
        // otherwise draw a static balloon
        balloon(centerX, centerY, balloonSize, bcolor, ecolor, rcolor, strokecolor, strokeThickness)
    }
    textSize(20);
    text("Press any key to start your ride", canvasWidth * 0.05, canvasHeight * 0.9)
}

function flyBalloon() {
    // when balloon size is less than or equal to 30 then 
    // add it to the list of background balloons
    if (balloonSize <= 30) {
        var newBalloon = {
            x: centerX,
            y: centerY,
            size: balloonSize,
            bcolor: bcolor,
            ecolor: ecolor,
            rcolor: rcolor,
            strokecolor: strokecolor,
            strokeThickness: strokeThickness
        }
        backgroundBalloons.push(newBalloon)
        // increment the number of balloons
        numberOfBalloons++
        // foreground balloon is not active anymore
        isForegroundBalloonActive = false
        // reset the var used to control balloon's motion
        resetBalloon()
    } else {
        balloon(centerX, centerY, balloonSize, bcolor, ecolor, rcolor, strokecolor, strokeThickness)
        // moves the balloon in a slightly curved path
        centerX = centerX + pow(speed, exponent) * speedMultiplier
        centerY = centerY - random(speed, 3 * speed)
        // decrement the balloon size as it moves into background
        balloonSize -= 0.5
        if (strokeThickness >= 1) {
            strokeThickness -= 0.03
        }
        // As an object moves farther its perceived speed is less, hence
        // reduce the speed as the size of balloon decreases
        if ((maximunBalloonSizeInForeground - balloonSize) % startingSteps == 0) {
            exponent = exponent * 1.1
            speed = speed * 0.9
            if (startingSteps < 30) {
                startingSteps += 10
            }
        }
    }
}

function keyPressed() {
    // press any key to fly the balloon in foreground
    isForegroundBalloonActive = true;
}

// reset the variables used to fly the balloon to their original values
function resetBalloon() {
    centerX = initCenterX
    centerY = initCenterY
    strokeThickness = initStrokeThickness
    balloonSize = maximunBalloonSizeInForeground
    speed = initSpeed
    exponent = initExponent
    startingSteps = initStartingSteps
    bcolor = color(random(255), random(255), random(255))
    ecolor = color(random(255), random(255), random(255))
    rcolor = color(random(255), random(255), random(255))
}

function scene() {
    // draw landscape
    landscape();
    // draw the clouds in the sky
    cloud(cloud1X, cloud1Y, cloud1Size);
    cloud(cloud2X, cloud2Y, cloud2Size);
    cloud(cloud3X, cloud3Y, cloud3Size);
    //animate clouds 1
    cloud1X += 0.3;
    cloud1Y += random(-0.3, 0.3);
    //animate clouds 2
    cloud2X += 0.3;
    cloud2Y += random(-0.3, 0.3);
    //animate clouds 3
    cloud3X += 0.3;
    cloud3Y += random(-0.3, 0.3);
    // if the X axis of clouds becomes more than canvas width then reset it to zero
    // this would make them appear from the other size of the screen
    if (cloud1X >= canvasWidth) {
        cloud1X = 0;
    }
    if (cloud2X >= canvasWidth) {
        cloud2X = 0;
    }
    if (cloud3X >= canvasWidth) {
        cloud3X = 0;
    }
    // animate the balloons created in setup() method
    flyingBalloonsInBackground()
}

function landscape() {
    //back grass
    fill("#AACF0B")
    stroke("#AACF0B")
    ellipse(129, 529, 500, 200);

    //middle grass 
    fill("#73A805")
    stroke("#73A805")
    ellipse(571, 511, 800, 200);

    // front grass
    fill("#8DBC0F")
    stroke("#8DBC0F")
    ellipse(334, 600, 1200, 300);

}

// function to draw a cloud
// x: x axis of the cloud
// y: y axis of the cloud
// size: size of the cloud
function cloud(x, y, size) {
    fill("#EEFEFF")
    stroke("#EEFEFF")
    // there are total 4 arches in the cloud
    // first arch
    arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
    // second elongated arch
    arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
    // third flat arch
    arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
    // fourth flat arch
    arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
}

// this function animates the balloon in background
function flyingBalloonsInBackground() {
    // loop over total number of balloons
    for (var i = 0; i < numberOfBalloons; i++) {
        balloon(backgroundBalloons[i].x, backgroundBalloons[i].y, backgroundBalloons[i].size, backgroundBalloons[i].bcolor, backgroundBalloons[i].ecolor, backgroundBalloons[i].rcolor, backgroundBalloons[i].strokecolor, backgroundBalloons[i].strokeThickness);
        // move the balloon in X axis by a random value between 0 and 0.5
        backgroundBalloons[i].x += random(0, 0.5);
        // move the balloon in Y axis by a random value between -0.3 and 0.3
        backgroundBalloons[i].y += random(-0.3, 0.3);
        // if the balloons X axis is more than cavas width, then set it to zero. 
        // this makes them re-appear from other side of the screen
        if (backgroundBalloons[i].x >= canvasWidth) {
            backgroundBalloons[i].x = 0;
        }
    }
}
//function to create a balloon
//parameters - centerX - X coordinate of center of balloon
//centerY - Y coordinate of center of balloon
//bcolor - fill of the outer ellipse
//ecolor - fill of the center ellipse
//rcolor - fill of the rectangle base
//outline - stroke color for the outline of all shapes

function balloon(centerX, centerY, size, bcolor, ecolor, rcolor, strokecolor, strokeThickness) {
    // circle
    fill(bcolor)
    stroke(strokecolor)
    strokeWeight(strokeThickness);
    ellipse(centerX, centerY, size * 0.9, size);

    //Centre Ellipse
    fill(ecolor)
    stroke(strokecolor)
    strokeWeight(strokeThickness);
    ellipse(centerX, centerY, size / 2, size);

    //Line on left of balloon
    strokeWeight(strokeThickness);
    stroke(strokecolor);
    var linex = centerX - size * 0.33;
    var liney = centerY + size * 0.35;
    var llenx = size / 6.875
    var lleny = size / 2;
    line(linex, liney, linex + llenx, liney + lleny)

    //Line on right of balloon
    strokeWeight(strokeThickness);
    stroke(strokecolor);
    var linex1 = centerX + size * 0.33;
    var liney1 = centerY + size * 0.35
    line(linex1, liney1, linex1 - llenx, liney1 + lleny)

    //t-shirt
    fill("yellow")
    stroke("yellow")
    rect(centerX - size * 0.1, centerY + size * 0.75, size * 0.09, size * 0.11, size * 0.45)

    //rectangle base
    stroke(strokecolor)
    fill(rcolor)
    strokeWeight(strokeThickness);
    rect(linex + llenx, liney + lleny, size / 2.7, size / 3.5, 3)

    //Line rectangle
    strokeWeight(strokeThickness * 1.3);
    stroke(strokecolor);
    line(linex + llenx * 0.85, liney + lleny, linex1 - llenx * 0.8, liney1 + lleny)

    // Face
    fill("#FFE3CA")
    stroke("#FFE3CA")
    ellipse(centerX - size * 0.055, centerY + size * 0.65, size * 0.13, size * 0.16)

    // Eyes left
    stroke("black")
    strokeWeight(strokeThickness * 0.1);
    ellipse(centerX - size * 0.1, centerY + size * 0.67, 1, 1)
    // eyes right
    ellipse(centerX, centerY + size * 0.67, 1, 1)

    strokeWeight(strokeThickness * 1.3)
    // Cap base
    fill("black")
    stroke("black")
    rect(centerX - size * 0.12, centerY + size * 0.54, size * 0.14, size * 0.02, 2)

    // Cap line
    fill("black")
    stroke("black")
    rect(centerX - size * 0.15, centerY + size * 0.58, size * 0.2, size * 0.03, 2)
    // smile
    noFill()
    strokeWeight(1)
    stroke("red")
    bezier(centerX - size * 0.082, centerY + size * 0.71, centerX - size * 0.063, centerY + size * 0.72, centerX - size * 0.045, centerY + size * 0.72, centerX - size * 0.027, centerY + size * 0.71)
}