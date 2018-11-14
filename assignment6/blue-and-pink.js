//height and width of the canvas
const canvasHeight = 600
const canvasWidth = 600

//speed of the ball on X axis(array)
var speedX = [2, 3, 2, 3, 2, 4, 2, 3, 2, 4]
//speed of the ball on Y axis(array)
var speedY = [3, 2, 4, 2, 4, 2, 3, 2, 3, 2]

//Diameter of ball from 0 to 9(array)
var diameter = [60, 50, 80, 90, 50, 40, 80, 80, 60, 50]
//X coordinate of ball from 0 to 9(array)
var ballX = [90, 80, 188, 198, 26, 529, 400, 430, 530, 324]
//Y coordinate of ball from 0 to 9(array)
var ballY = [230, 120, 50, 120, 181, 522, 300, 530, 500, 298]

function draw() {
    createCanvas(canvasHeight, canvasWidth);
    background("black");

    for (i = 0; i < 10; i++) {
        if (isOdd(i)) {
            //parameter for drawing ball
            ball(ballX[i], ballY[i], "#EB3F65", diameter[i])
        } else {
            ball(ballX[i], ballY[i], "#39D7ED", diameter[i])
        }
        //speed of the ball on X and Y axis
        ballY[i] = ballY[i] + speedY[i]
        ballX[i] = ballX[i] + speedX[i]
        if (ballX[i] < diameter[i] / 2 || ballX[i] > canvasWidth - diameter[i] / 2) {
            // change X direction
            speedX[i] = speedX[i] * (-1);
        }
        if (ballY[i] < diameter[i] / 2 || ballY[i] > canvasHeight - diameter[i] / 2) {
            // change Y direction
            speedY[i] = speedY[i] * (-1);
        }
    }
}

// returns true if the number is odd, and false if the number is even
function isOdd(n) {
    //remainder of division by two
    remainder = n % 2;
    if (remainder == 1) {
        return true;
    } else {
        return false;
    }
}

//function to draw ball
//centerX: X coordinate of the center of the ball
//centerY: y coordiate of the center of the ball
//C : color of the ball
//size : diameter of the ball
function ball(centerX, centerY, c, size) {
    //ball
    fill(c)
    strokeWeight(1);
    ellipse(centerX, centerY, size);
}