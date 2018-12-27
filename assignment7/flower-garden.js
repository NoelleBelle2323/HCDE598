//This project allows people to make a garden of flowers with various
//types, colors, and sizes. Click an option in each of the three groups
//on the left side and then click on the canvas. The height of the flower
//is adjusted based on the size and where the ground is. The x value of
//the flower changes depending on where you click

//Matrix for reference of [i,j] values throughout code
//[0,0] = flowerType1; [1,0] = colorOption1; [2,0] = sizeOption1
//[0,1] = flowerType2; [1,1] = colorOption2; [2,1] = sizeOption2
//[0,2] = flowerType3; [1,2] = colorOption3; [2,2] = sizeOption3

const canvasWidth = 700
const canvasHeight = 390 //divisible by 3 so y-value of button groups is a whole number

const grassColor = 'lightgreen'
const backgroundColor = 'lightcyan'
const stemColor = 'lightgreen'
const selectedBorder = 'red' //color of border on button that's selected
const unSelectedBorder = 'grey' //color of border on unselected button

//color option 1 is Deep Sky Blue with rgb(0, 191, 255)
const color1Red = 0
const color1Green = 191
const color1Blue = 255

//color option 2 is Khaki with rgb(240, 230, 140)
const color2Red = 240
const color2Green = 230
const color2Blue = 140

//color option 2 is Violet with rgb(238, 130, 238)
const color3Red = 238
const color3Green = 130
const color3Blue = 238

//these are the scale size options of the flowers
const sizeOption1 = 1
const sizeOption2 = 1.5
const sizeOption3 = 2

//other constants used throughout
const titleOriginalLeftY = 15
const titleXTopLeft = 10 //how far everything is from left side of canvas
const rectSize = 30 //width and heigth of buttons
const rectInterval = 5 //space between rectangles
const titleSize = 10
const spaceUnderTitle = 5
const grassHeight = 20

//these are the variables and arrays I'm using in my 
//group option for loops
var textArray = ['TYPE', 'COLOR', 'SIZE']
var textTitle
var groupYTop
var yCoordBox = []; //matrix array that will store top left y value of each box

//variables used in matrix
var flowerType
var colorOption
var sizeOption

//variables in draw function to determine if clicked
//x and y values are within button range
var buttonX
var buttonY

//variable used throughout stem and flower functions
var myScale

//variables used within flowerSelected function (when buttons pressed)
var clickedScale
var clickedRed
var clickedGreen
var clickedBlue

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(backgroundColor);
  theGrass();
  groupOptions(textArray, titleOriginalLeftY);
  buttonIcons()
}

function draw() {
  isWithin(buttonX, buttonY, rectSize);
  flowerSelected();
}

/*Changes the flower Type, Color, and Size depending on what is
clicked. I also put conditions in the size options to not draw
on top of the buttons. Also changes border of button if clicked
The technique of storing a value depending on the button conditions
was taught to me by Ben C in our class. This allowed the flowers to
not compile on top of each other when I changed the selection options*/

function flowerSelected() {
  var clickedRed
  var clickedGreen
  var clickedBlue

  //Refer to mouseClicked function below where when the icon within
  //the correct space is selected then it returns the size (scale) option
  //I don't want to draw on top of the buttons, so I added the condition
  //that the x value of the mouse has to be twice as far as the button
  //width (rectSize constant) from the left of the canvas.
  if (sizeOption == 1 && mouseX > rectSize * 2) {
    var clickedScale = sizeOption1

    selectedRectangle(yCoordBox[2][0]); // red border size option 1
    notSelectedRectangle(yCoordBox[2][1]); // grey border size option 2
    notSelectedRectangle(yCoordBox[2][2]); // grey border size option 3

  } else if (sizeOption == 2 && mouseX > rectSize * 2) {
    var clickedScale = sizeOption2

    notSelectedRectangle(yCoordBox[2][0]); // black border size option 1
    selectedRectangle(yCoordBox[2][1]); // red border size option 2
    notSelectedRectangle(yCoordBox[2][2]); // black border size option 1

  } else if (sizeOption == 3 && mouseX > rectSize * 2) {
    var clickedScale = sizeOption3

    notSelectedRectangle(yCoordBox[2][0]); // black border size option 1
    notSelectedRectangle(yCoordBox[2][1]); // black border size option 1
    selectedRectangle(yCoordBox[2][2]); // red border size option 1

  }

  //Refer to mouseClicked function below where when the icon within
  //the correct space is selected then it returns the color option
  //value. Flower functions have a parameter for each RGB value in their fill
  if (colorOption == 1) {
    var clickedRed = color1Red
    var clickedGreen = color1Green
    var clickedBlue = color1Blue

    selectedRectangle(yCoordBox[1][0]); // red border color option 1
    notSelectedRectangle(yCoordBox[1][1]); // grey border color option 2
    notSelectedRectangle(yCoordBox[1][2]); // grey border color option 3

  } else if (colorOption == 2) {
    var clickedRed = color2Red
    var clickedGreen = color2Green
    var clickedBlue = color2Blue

    notSelectedRectangle(yCoordBox[1][0]); // grey border color option 1
    selectedRectangle(yCoordBox[1][1]); // red border color option 2
    notSelectedRectangle(yCoordBox[1][2]); // grey border color option 3

  } else if (colorOption == 3) {
    var clickedRed = color3Red
    var clickedGreen = color3Green
    var clickedBlue = color3Blue

    notSelectedRectangle(yCoordBox[1][0]); // grey border color option 1
    notSelectedRectangle(yCoordBox[1][1]); // grey border color option 2
    selectedRectangle(yCoordBox[1][2]); // red border color option 3
  }

  //Refer to mouseClicked function below where when the icon within
  //the correct space is selected then it returns the flower type
  //value. For reference, flower functions have the following parameters
  //(redVar, greenVar, blueVar, myScale) where redVar, greenVar, and 
  //blueVar are the RGB variables in the fill of the flower head
  if (flowerType == 1) {
    flowerOne(clickedRed, clickedGreen, clickedBlue, clickedScale);

    selectedRectangle(yCoordBox[0][0]); // red border flower type 1
    notSelectedRectangle(yCoordBox[0][1]); // grey border flower type 2
    notSelectedRectangle(yCoordBox[0][2]); // grey border flower type 3

  } else if (flowerType == 2) {
    flowerTwo(clickedRed, clickedGreen, clickedBlue, clickedScale);

    notSelectedRectangle(yCoordBox[0][0]); // grey border flower type 1
    selectedRectangle(yCoordBox[0][1]); // red border flower type 2
    notSelectedRectangle(yCoordBox[0][2]); // grey border flower type 3

  } else if (flowerType == 3) {
    flowerThree(clickedRed, clickedGreen, clickedBlue, clickedScale);

    notSelectedRectangle(yCoordBox[0][0]); // grey border flower type 1
    notSelectedRectangle(yCoordBox[0][1]); // grey border flower type 2
    selectedRectangle(yCoordBox[0][2]); // red border flower type 3

  }
}

//if the button is clicked, make the selected border change color
//since all buttons have constant x value, only parameter is 
//yValue... the top of the box
function selectedRectangle(yValue) {
  noFill();
  strokeWeight(1);
  stroke(selectedBorder);
  rect(titleXTopLeft, yValue, rectSize, rectSize);
}

//if a different button in the group is clicked, change the
//border color back to the original color. Only parameter
//is the yValue = top of box
function notSelectedRectangle(yValue) {
  noFill();
  strokeWeight(1);
  stroke(unSelectedBorder);
  rect(titleXTopLeft, yValue, rectSize, rectSize);
}


//I want groups of selection options to run down the 
//left side of the canvas. Each group has a title taken
//from the textArray and three rectangles underneathe it
function groupOptions(textArray, titleYTopLeft) {
  const groupSize = height / 3 //how large the whole group is
  var titleText = textArray
  var groupYTopLeft = titleYTopLeft

  //Loop the group options 3 times to make 3 different 
  //selection groups while calling items from the text
  //array to change the title
  for (i = 0; i < 3; i++) {
    groupYTopLeft = titleYTopLeft + i * groupSize
    noStroke();
    fill('black');
    textSize(titleSize);
    text(textArray[i], titleXTopLeft, groupYTopLeft);

    //Store the i values that will be used later when we store
    //the j values (see yCoordBox[i][j] below)
    yCoordBox[i] = [];

    //Create three squares under the text title
    for (j = 0; j < 3; j++) {
      stroke(unSelectedBorder);
      strokeWeight(1)
      fill('white');
      rect(titleXTopLeft, //x value of top left of title
        groupYTopLeft + spaceUnderTitle + j * rectInterval + j * rectSize, //top left y value of each box
        rectSize,
        rectSize)

      //Store the top left y values of each box into a matrix
      yCoordBox[i][j] = groupYTopLeft + spaceUnderTitle + j * rectInterval + j * rectSize

    }
  }
}

//Recognizes if mouse is within the button options
function isWithin(buttonX, buttonY, rectSize) {
  if (mouseX >= buttonX && mouseX <= buttonX + rectSize &&
    mouseY >= buttonY && mouseY <= buttonY + rectSize) {
    return true;
  } else {
    return false;
  }
}

//Uses isWithin function to select a box if the mouse is 
//clicked within the specified x and y constraints. The x conditions
//are constant for all buttons, but the y conditions depend on the i
//and j values for each button (see function groupOptions). i is the
//group Type, Color, or Size and j is the 3 rectangles in each group
function mouseClicked() {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (isWithin(titleXTopLeft, yCoordBox[i][j], rectSize)) {
        print("Clicked button [" + i + "," + j + "]; " + "Top of box y = " + yCoordBox[i][j]);

        //for reference of [i,j] values
        //[0,0] = flowerType1; [1,0] = colorOption1; [2,0] = sizeOption1
        //[0,1] = flowerType2; [1,1] = colorOption2; [2,1] = sizeOption2
        //[0,2] = flowerType3; [1,2] = colorOption3; [2,2] = sizeOption3
        if (i == 0 && j == 0) {
          flowerType = 1
        } else if (i == 0 && j == 1) {
          flowerType = 2
        } else if (i == 0 && j == 2) {
          flowerType = 3
        } else if (i == 1 && j == 0) {
          colorOption = 1
        } else if (i == 1 && j == 1) {
          colorOption = 2
        } else if (i == 1 && j == 2) {
          colorOption = 3
        } else if (i == 2 && j == 0) {
          sizeOption = 1
        } else if (i == 2 && j == 1) {
          sizeOption = 2
        } else if (i == 2 && j == 2) {
          sizeOption = 3
        }
      }
    }
  }
}

//Use the yCoordBox matrix to draw the icons on the buttons.
//titleXTopLeft is the left side of box so need to add box size / 2 to center
//yCoordBox[i][j] is top of box so need to add box size / 2 to center
//all flower head functions have the parameters (x, y, myScale) where 
//x and y are where the top of the stem should be. Had to adjust flower 2 a
//bit to make it centered
function buttonIcons() {
  var iconScale = 0.6
  var circleRadius = 20
  var iconColor = 'black'
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (i == 0 && j == 0) { //draw flower head one
        fill(iconColor);
        flowerOneHead(titleXTopLeft + rectSize / 2, yCoordBox[i][j] + rectSize / 2, iconScale);
      } else if (i == 0 && j == 1) { //draw flower head two
        fill(iconColor);
        flowerTwoHead(titleXTopLeft + rectSize / 2, yCoordBox[i][j] + rectSize / 3, iconScale);
      } else if (i == 0 && j == 2) { //draw flower head three
        fill(iconColor);
        flowerThreeHead(titleXTopLeft + rectSize / 2, yCoordBox[i][j] + rectSize / 2, iconScale);
      } else if (i == 1 && j == 0) { //draw ellipse with color one
        fill(color1Red, color1Green, color1Blue);
        ellipse(titleXTopLeft + rectSize / 2, yCoordBox[i][j] + rectSize / 2, circleRadius, circleRadius);
      } else if (i == 1 && j == 1) { //draw ellipse with color two
        fill(color2Red, color2Green, color2Blue);
        ellipse(titleXTopLeft + rectSize / 2, yCoordBox[i][j] + rectSize / 2, circleRadius, circleRadius);
      } else if (i == 1 && j == 2) { //draw ellipse with color three
        fill(color3Red, color3Green, color3Blue);
        ellipse(titleXTopLeft + rectSize / 2, yCoordBox[i][j] + rectSize / 2, circleRadius, circleRadius);
      } else if (i == 2 && j == 0) { //draw small flower
        fill(iconColor);
        flowerThreeHead(titleXTopLeft + rectSize / 2, yCoordBox[i][j] + rectSize / 2, iconScale * 0.6);
      } else if (i == 2 && j == 1) { //draw medium flower
        fill(iconColor);
        flowerThreeHead(titleXTopLeft + rectSize / 2, yCoordBox[i][j] + rectSize / 2, iconScale * 0.9);
      } else if (i == 2 && j == 2) { //draw large flower
        fill(iconColor);
        flowerThreeHead(titleXTopLeft + rectSize / 2, yCoordBox[i][j] + rectSize / 2, iconScale * 1.2);

      }
    }
  }
}

function theGrass() {
  noStroke();
  fill(grassColor);
  rect(0, height - grassHeight, width, height);
}

////////////////////////////////////////////////////////
//////////////// FULL FLOWER FUNCTIONS /////////////////
////////////////////////////////////////////////////////

//With all of the full flower functions, I had to make the
//parameters of RGB colors separately, because the clicked
//flower couldn't recognize a parameter like 'purple' for 
//some reason

//FLOWER ONE has flower 1 head and single leaf stem
//reference parameters: stemSingleLeaf(x, stemLength, myScale)
//reference parameters: flowerOneHead(x, y, myScale) where 
//x and y are the center of the flower
function flowerOne(redVar, greenVar, blueVar, myScale) {
  if (mouseIsPressed) {
    var stemLengthFlowerOne = 120 * myScale
    var topOfStem = height - grassHeight - stemLengthFlowerOne

    stemSingleLeaf(mouseX, stemLengthFlowerOne, myScale);

    fill(redVar, greenVar, blueVar);
    flowerOneHead(mouseX, topOfStem, myScale);
  }

}

//FLOWER TWO has flower three head and stem six leaves
//reference parameters: stemTwoLeaves(x, stemLength, myScale)
//reference parameters: flowerTwoHead(x, y, myScale) where 
//x and y are where the top of the stem should be
function flowerTwo(redVar, greenVar, blueVar, myScale) {
  if (mouseIsPressed) {
    var stemLengthFlowerTwo = 130 * myScale
    var topOfStem = height - grassHeight - stemLengthFlowerTwo

    stemTwoLeaves(mouseX, stemLengthFlowerTwo, myScale);

    fill(redVar, greenVar, blueVar);
    flowerTwoHead(mouseX, topOfStem, myScale);
  }

}

//FLOWER THREE has flower three head and stem six leaves
//reference parameters: stemSixLeaves(x, stemLength, myScale)
//reference parameters: flowerThreeHead(x, y, myScale) where 
//x and y are the center of the flower
function flowerThree(redVar, greenVar, blueVar, myScale) {
  if (mouseIsPressed) {
    var stemLengthFlowerThree = 140 * myScale
    var topOfStem = height - grassHeight - stemLengthFlowerThree
    stemSixLeaves(mouseX, stemLengthFlowerThree, myScale);

    fill(redVar, greenVar, blueVar);
    flowerThreeHead(mouseX, topOfStem, myScale);
  }
}

////////////////////////////////////////////////////////
//////////////////// STEM FUNCTIONS ////////////////////
////////////////////////////////////////////////////////

//I want a stem that curves to the left with a leaf on one side
function stemSingleLeaf(x, stemLength, myScale) {
  var topOfStem = height - grassHeight - stemLength
  var bottomOfStem = height - grassHeight
  noFill();
  stroke(stemColor);

  //this is the curved stem that goes to the left
  strokeWeight(2 * myScale);
  curve(x + 100 * myScale, bottomOfStem,
    x, bottomOfStem,
    x, topOfStem,
    x + 100 * myScale, topOfStem);

  //this is the single leaf
  //reference parameters: leftLeaf(leafBottomX, leafBottomY, leafScale)
  //I adjusted the numbers here until the leaf looked like it rested on the
  //stem where I wanted it to
  leftLeaf(x - 9 * myScale, bottomOfStem - 20 * myScale, 0.75 * myScale)
}

//I want a stem that curves to the right with two leaves on either side
function stemTwoLeaves(x, stemLength, myScale) {
  var topOfStem = height - grassHeight - stemLength
  var bottomOfStem = height - grassHeight
  noFill();
  stroke(stemColor);

  //this is the curved stem that goes to the right
  //copied this from stemSingleLeaf but changed the - to +
  //to make it curve the opposite way
  strokeWeight(2 * myScale);
  curve(x - 100 * myScale, bottomOfStem,
    x, bottomOfStem,
    x, topOfStem,
    x - 100 * myScale, topOfStem);

  //this is the left leaf
  //reference parameters: leftLeaf(leafBottomX, leafBottomY, leafScale)
  //I adjusted the numbers here until the leaf looked like it rested on the
  //stem where I wanted it to
  leftLeaf(x + 11 * myScale, bottomOfStem - 50 * myScale, 0.5 * myScale);

  //this is the right leaf
  //reference parameters: rightLeaf(leafBottomX, leafBottomY, leafScale)
  //I adjusted the numbers here until the leaf looked like it rested on the
  //stem where I wanted it to
  rightLeaf(x + 13 * myScale, bottomOfStem - 45 * myScale, 0.5 * myScale);
}

//I want to have the 3 left leaves that get smaller as they are closer
//to the flower head and 3 right leaves that do the same
function stemSixLeaves(x, stemLength, myScale) {
  var topOfStem = height - grassHeight - stemLength
  var bottomOfStem = height - grassHeight
  var leafInterval = 25
  var leftLeafStart = 25
  var rightLeafStart = 35

  //this is the stem
  noFill();
  stroke(stemColor);
  strokeWeight(2 * myScale);
  line(x, topOfStem, x, bottomOfStem);

  //these are the leaves. I want them to get smaller as each interval goes up
  //this is why the constant in from of the scale decreases from 0.4 to 0.3 to 0.2
  //reference parameters: leftLeaf(leafBottomX, leafBottomY, leafScale)
  //reference parameters: rightLeaf(leafBottomX, leafBottomY, leafScale)
  leftLeaf(x, bottomOfStem - leftLeafStart * myScale, 0.4 * myScale)
  leftLeaf(x, bottomOfStem - (leftLeafStart + leafInterval) * myScale, 0.3 * myScale)
  leftLeaf(x, bottomOfStem - (leftLeafStart + leafInterval * 2) * myScale, 0.2 * myScale)
  rightLeaf(x, bottomOfStem - rightLeafStart * myScale, 0.4 * myScale)
  rightLeaf(x, bottomOfStem - (rightLeafStart + leafInterval) * myScale, 0.3 * myScale)
  rightLeaf(x, bottomOfStem - (rightLeafStart + leafInterval * 2) * myScale, 0.2 * myScale)
}

//This is the leaf leaning to the left. The bottom position of the
//leaf and it's size can be specified in the parameters
function leftLeaf(leafBottomX, leafBottomY, leafScale) {
  fill(stemColor);
  curve(leafBottomX + 30 * leafScale, leafBottomY - 20 * leafScale,
    leafBottomX, leafBottomY,
    leafBottomX - 20 * leafScale, leafBottomY - 50 * leafScale,
    leafBottomX + 10 * leafScale, leafBottomY - 70 * leafScale);
  curve(leafBottomX - 30 * leafScale, leafBottomY + 20 * leafScale,
    leafBottomX, leafBottomY,
    leafBottomX - 20 * leafScale, leafBottomY - 50 * leafScale,
    leafBottomX - 50 * leafScale, leafBottomY - 30 * leafScale);
}

//This is the leaf leaning to the right. The bottom position of the
//leaf and it's size can be specified in the parameters
function rightLeaf(leafBottomX, leafBottomY, leafScale) {
  fill(stemColor);
  curve(leafBottomX - 30 * leafScale, leafBottomY - 20 * leafScale,
    leafBottomX, leafBottomY,
    leafBottomX + 20 * leafScale, leafBottomY - 50 * leafScale,
    leafBottomX - 10 * leafScale, leafBottomY - 70 * leafScale);
  curve(leafBottomX + 30 * leafScale, leafBottomY + 20 * leafScale,
    leafBottomX, leafBottomY,
    leafBottomX + 20 * leafScale, leafBottomY - 50 * leafScale,
    leafBottomX + 50 * leafScale, leafBottomY - 30 * leafScale);
}

///////////////////////////////////////////////////////////
////////////////// FLOWER HEAD FUNCTIONS //////////////////
///////////////////////////////////////////////////////////

//I want a flower that has a large circle in the center with
//two rows of 8 petals around the outside (see petalsFlowerOne function)
//x and y are the center of the flower. The scaled numbers were played
//with until the flower looked how I wanted it to
function flowerOneHead(x, y, myScale) {
  noStroke();
  ellipse(x, y, 15 * myScale, 15 * myScale)

  //inner layer of petals
  //reference: petalsFlowerOne(x, y, petalDistance, petalSize)
  petalsFlowerOne(x, y, 13 * myScale, 7 * myScale);

  //outer layer of petals
  //reference: petalsFlowerOne(x, y, petalDistance, petalSize)
  petalsFlowerOne(x, y, 20 * myScale, 4 * myScale);
}

//This creates 8 petals around the outside of flower one
//parameter petalDistance is distance from the center of the flower head
//parameter petalSize is how large the petals are
function petalsFlowerOne(x, y, petalDistance, petalSize) {

  //x and y are the center locations of the head of the flower
  //petals on left, right, top, bottom
  ellipse(x - petalDistance, y, petalSize, petalSize);
  ellipse(x + petalDistance, y, petalSize, petalSize);
  ellipse(x, y - petalDistance, petalSize, petalSize);
  ellipse(x, y + petalDistance, petalSize, petalSize);

  //petals in diagonal positions starting top left clockwise
  ellipse(x - petalDistance * sin(PI / 4), y - petalDistance * cos(PI / 4), petalSize, petalSize);
  ellipse(x + petalDistance * sin(PI / 4), y - petalDistance * cos(PI / 4), petalSize, petalSize);
  ellipse(x + petalDistance * sin(PI / 4), y + petalDistance * cos(PI / 4), petalSize, petalSize);
  ellipse(x - petalDistance * sin(PI / 4), y + petalDistance * cos(PI / 4), petalSize, petalSize);
}

//The central point of this flower head where (x, y) is should
//be the top of the stem. The rest of the petals are based on 
//that point.
function flowerTwoHead(x, y, myScale) {
  noStroke();
  ellipse(x - 3 * myScale, y - 3 * myScale, 4 * myScale, 4 * myScale); //top petal
  ellipse(x + 4 * myScale, y - 2 * myScale, 5 * myScale, 5 * myScale); //right petal 1
  ellipse(x - 3 * myScale, y + 3 * myScale, 5 * myScale, 5 * myScale); //left petal 1
  ellipse(x + 8.5 * myScale, y + 3.5 * myScale, 6 * myScale, 6 * myScale); //right petal 2
  ellipse(x - 1 * myScale, y + 9 * myScale, 6 * myScale, 6 * myScale); //left petal 2
  ellipse(x + 12 * myScale, y + 11 * myScale, 7 * myScale, 7 * myScale); //right petal 3
  ellipse(x + 1 * myScale, y + 16 * myScale, 7 * myScale, 7 * myScale); //left petal 3
  ellipse(x + 15 * myScale, y + 20 * myScale, 8 * myScale, 8 * myScale); //right petal 4
  ellipse(x + 3 * myScale, y + 24 * myScale, 8 * myScale, 8 * myScale); //left petal 4

}

//FLOWER HEAD THREE - I wanted to repeat the petal shapes using
//a for loop. Since there are 6 ellipses, which go through the 
//flower center to create two petals opposite of each other, 
//then there will be 12 petals, and I should rotate to spread them
//evenly though a half circle. This is why the angle is PI / 6.
function flowerThreeHead(x, y, myScale) {
  noStroke();
  translate(x, y);
  for (l = 0; l < 6; l++) { //changed to l because of other loops
    ellipse(0, 0, 5 * myScale, 40 * myScale);
    rotate(PI / 6);
  }
  //The prior loop causes everything after it to center around 
  //whereever the center of this 3rd flower is, and to rotate
  //by PI (180 degrees). So I have to make it center back to the
  //top left of the canvas by resetting the translate and the 
  //rotate functions
  translate(x, y)
  rotate(PI)

}