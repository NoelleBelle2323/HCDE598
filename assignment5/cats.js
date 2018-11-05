/*Mitchell Fajardo
 *HCDE 598C Intro to Programming
 *Assignment A-5
 *
 *Program description: A simple program that creates small cats in a grid
 *The color of the cats alternates in a checkerboard-like pattern
 */

function setup() {
  
  //catBodyColor will be assigned either color1 or color2 throughout the loop
	var catBodyColor;
  const color1 = 'yellow'; 
  const color2 = 'purple';

  createCanvas(400, 400);
  background(150);
  
  //the loop below creates 20 columns and 20 rows of cats
  for (i = 0; i < 20; i++) { //for each column
    for (j = 0; j < 20; j++) { //for each row
      if (i % 2 == 1) { //if the column is odd
        if (j % 2 == 1) { //and if the row is odd
          catBodyColor = color1;
        } else { //else (if the row is even)
          catBodyColor = color2;
        }
      }
      else if (i % 2 == 0) { //else if the column is even
        if (j % 2 == 0) { //and if the row is even
          catBodyColor = color1;
        } else { //else (if the row is odd)
          catBodyColor = color2;
        }
      }
      
      //in each execution of the loop, draw a cat
      drawNeko(10 + (20 * i), 10 + (20 * j), 0.08, catBodyColor);
    }
  }
}

function draw() {}

//draws a cat with the head centered at positionX, positionY
//and at a scale based on scaleCoefficient
//and with a body/shirt color based on bodyColor
function drawNeko(positionX, positionY, scaleCoefficient, bodyColor) {
  
  //tail (with its own strokeWeight)
  noFill();
  strokeWeight(10 * scaleCoefficient);
  arc(positionX - (scaleCoefficient * 100 * 3 / 4), positionY + (scaleCoefficient * 100 * 5 / 6), scaleCoefficient * 100, scaleCoefficient * 50, 0, 1.25 * PI);


  //set a strokeWeight for everything else
  strokeWeight(5 * scaleCoefficient);


  //body
  //fill('orange');
  fill(bodyColor);
  quad(positionX + (scaleCoefficient * 100 * 1 / 6), positionY + (scaleCoefficient * 100 * 1 / 6), positionX + (scaleCoefficient * 100 * 3 / 6), positionY + (scaleCoefficient * 100 * 7 / 6), positionX - (scaleCoefficient * 100 * 3 / 6), positionY + (scaleCoefficient * 100 * 7 / 6), positionX - (scaleCoefficient * 100 * 1 / 6), positionY + (scaleCoefficient * 100 * 1 / 6));

  //ears
  fill(color(200, 100, 50)); //brownish color
  triangle(positionX + (scaleCoefficient * 100 * 3 / 8), positionY - (scaleCoefficient * 100 * 1 / 8), positionX + (scaleCoefficient * 100 * 1 / 8), positionY - (scaleCoefficient * 100 * 3 / 8), positionX + (scaleCoefficient * 100 * 3 / 4), positionY - (scaleCoefficient * 100 * 3 / 4));
  triangle(positionX - (scaleCoefficient * 100 * 3 / 8), positionY - (scaleCoefficient * 100 * 1 / 8), positionX - (scaleCoefficient * 100 * 1 / 8), positionY - (scaleCoefficient * 100 * 3 / 8), positionX - (scaleCoefficient * 100 * 3 / 4), positionY - (scaleCoefficient * 100 * 3 / 4));


  //face
  fill('orange');
  ellipse(positionX, positionY, scaleCoefficient * 100, scaleCoefficient * 100);

  //eyes
  fill('white');
  ellipse(positionX - (scaleCoefficient * 100 / 6), positionY - (scaleCoefficient * 100 / 6), scaleCoefficient * 10, scaleCoefficient * 20);
  ellipse(positionX + (scaleCoefficient * 100 / 6), positionY - (scaleCoefficient * 100 / 6), scaleCoefficient * 10, scaleCoefficient * 20);

  //whiskers
  noFill();
  arc(positionX - (scaleCoefficient * 1.2 * 100 / 2), positionY, scaleCoefficient * 50, scaleCoefficient * 10, PI, 0);
  arc(positionX - (scaleCoefficient * 1.2 * 100 / 2), positionY + (scaleCoefficient * 15), scaleCoefficient * 40, scaleCoefficient * 8, PI, 0);
  arc(positionX + (scaleCoefficient * 1.2 * 100 / 2), positionY, scaleCoefficient * 50, scaleCoefficient * 10, PI, 0);
  arc(positionX + (scaleCoefficient * 1.2 * 100 / 2), positionY + (scaleCoefficient * 15), scaleCoefficient * 40, scaleCoefficient * 8, PI, 0);
}