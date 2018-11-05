const bsize = 70;

//Balloon drawn per row and column
const balloonsInARow = 5
const balloonsInAColumn = 4

const spaceX = 140;
const spaceY = 150;
const startX = 70;
const startY = 70;
      
//Color balloon 1
const circle1 = "#EB3F65"
const ellipse1 = "#7666E2"
const rectanglebase1 = "#7666E2"
const outline1 = "#97CFE9"

//Color ballon2
const circle2 = "#D5BA4E"
const ellipse2 = "#C95770"
const rectanglebase2 = "#214FEC"
const outline2 = "white"


function setup() {
    createCanvas(710, 630);
    background(51);
    for (j = 0; j < balloonsInARow; j++) {
        for (i = 0; i < balloonsInAColumn; i++) {
            //var x = j* space + startingpoint
            var x = j * spaceX + startX;
            var y = i * spaceY + startY;
            if (isOdd(j)) {
                balloon(x, y, circle1, ellipse1, rectanglebase1, outline1)
            } else {
                balloon(x, y, circle2, ellipse2, rectanglebase2, outline2)
            }
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

function balloon(centerX, centerY, bcolor, ecolor, rcolor, outline) {
    // circle
    fill(bcolor)
    stroke(outline)
    strokeWeight(4);
    ellipse(centerX, centerY, bsize);

    //Centre Ellipse
    fill(ecolor)
    stroke(outline)
    strokeWeight(4);
    ellipse(centerX, centerY, bsize / 2, bsize);

    //Line top Left to right
    strokeWeight(4);
    stroke(outline);
    var linex = centerX - bsize * 0.352
    var liney = centerY + bsize * 0.352
    var llen = bsize * 52 / 105
    line(linex, liney, linex + llen, liney + llen)

    //Line top right to left
    strokeWeight(4);
    stroke(outline);
    var linex1 = centerX + bsize * 0.352;
    var liney1 = centerY + bsize * 0.352
    line(linex1, liney1, linex1 - llen, liney1 + llen)

    //rectangle base
    stroke(outline)
    fill(rcolor)
    strokeWeight(4);
    rect(linex1 - llen, liney1 + llen, bsize * 30 / 105, bsize * 25 / 105, 7)

    //Line rectangle
    strokeWeight(8);
    stroke(outline);
    line(linex1 - bsize * 52 / 105, liney1 + bsize * 55 / 105, linex + bsize * 52 / 105, liney + bsize * 55 / 105)
}