function setup() {
  createCanvas(500, 500);
  frameRate(10);
}

var pea1x = 50;
var pea1y = 50;
var pea2x = 450;
var pea2y = 450;
var pea3x = 450;
var pea3y = 50;
var pea4x = 50;
var pea4y = 450;
var eyex = 7;
var eyey = 7;

var tcurvex1 = 80;
var tcurvey1 = 250;
var tcurvex2 = 120;
var tcurvey2 = 240;

var bcurvex1 = 400;
var bcurvey1 = 250;
var bcurvex2 = 360;
var bcurvey2 = 240;


var shellx = 145;
var shelly = 250;
var shellwidth = 80;
var shellheight = 70;

function draw() {
  background('green');

  //shell

  fill('red');
  stroke('red');

  ellipse(shellx, shelly, shellwidth, shellheight);
  ellipse(shellx + 60, shelly, shellwidth, shellheight);
  ellipse(shellx + 120, shelly, shellwidth, shellheight);
  ellipse(shellx + 190, shelly, shellwidth, shellheight);

  bezier(tcurvex1, tcurvey1, tcurvex1 + 10, 250, tcurvex2 - 10, 255, tcurvex2, tcurvey2);
  bezier(tcurvex1, tcurvey1, tcurvex1 + 10, 250, tcurvex2 - 10, 245, tcurvex2, tcurvey2 + 20);

  bezier(bcurvex1, bcurvey1, 390, 250, 370, 255, bcurvex2, bcurvey2);
  bezier(bcurvex1, bcurvey1, 390, 250, 370, 245, bcurvex2, bcurvey2 + 20);


  //pea1
  fill('#00e500');
  stroke('#00e500');
  ellipse(pea1x, pea1y, 50, 50);

  //pea1 eyes
  fill('black');
  ellipse(pea1x - 10, pea1y - 5, eyex, eyey);
  fill('black');
  ellipse(pea1x + 10, pea1y - 5, eyex, eyey);

  //pea1 smile
  stroke('black');
  noFill();
  arc(pea1x + 1, pea1y + 4, 32, 25, 0, PI);

  //pea2
  fill('#00e500');
  stroke('#00e500');
  ellipse(pea2x, pea2y, 50, 50);

  //pea2 eyes
  fill('black');
  ellipse(pea2x - 10, pea2y - 5, eyex, eyey);
  fill('black');
  ellipse(pea2x + 10, pea2y - 5, eyex, eyey);

  //pea2 smile
  stroke('black');
  noFill();
  arc(pea2x + 1, pea2y + 4, 32, 25, 0, PI);

  //pea3
  fill('#00e500');
  stroke('#00e500');
  ellipse(pea3x, pea3y, 50, 50);

  //pea3 eyes
  fill('black');
  ellipse(pea3x - 10, pea3y - 5, eyex, eyey);
  fill('black');
  ellipse(pea3x + 10, pea3y - 5, eyex, eyey);

  //pea3 smile
  stroke('black');
  noFill();
  arc(pea3x + 1, pea3y + 4, 32, 25, 0, PI);

  //pea4
  fill('#00e500');
  stroke('#00e500');
  ellipse(pea4x, pea4y, 50, 50);

  //pea4 eyes
  fill('black');
  ellipse(pea4x - 10, pea4y - 5, eyex, eyey);
  fill('black');
  ellipse(pea4x + 10, pea4y - 5, eyex, eyey);

  //pea4 smile
  stroke('black');
  noFill();
  arc(pea4x + 1, pea4y + 4, 32, 25, 0, PI);


  //--------------------- movements


  if (pea1x < 210) {
    pea1x = pea1x + 10;
    pea1y = 50;
  }

  if (pea1y < 250) {
    pea1y = pea1y + 10;
  }

  if (pea2y > 250) {
    pea2y = pea2y - 10;
  }
  if (pea2x > 330) {
    pea2x = pea2x - 10;
    pea2y = 250;
  }
  if (pea3x > 270) {
    pea3x = pea3x - 10;
    pea3y = 50;
  }

  if (pea3y < 250) {
    pea3y = pea3y + 10;
    pea3x = 270;
  }

  if (pea4y > 250) {
    pea4y = pea4y - 10;
    pea4x = 50;
  }

  if (pea4x < 150) {
    pea4x = pea4x + 10;
  }
}