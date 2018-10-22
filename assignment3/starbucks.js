var reset = 'white';
var xCoord = 200;
var yCoord = 200
var buttonY = 250;

var page1 = true;
var page2 = false;
var page3 = false;
var page4 = false;
var page5 = false;
var page6 = false;
var page7 = false;
var page8 = false;
var page9 = false;
var page10 = false;
var page11 = false;
var page12 = false;

var title = "Starbucks Drink Recommender";
var start = "Start";
var q1 = "Do you need caffeine?";
var q2 = "Do you want hot or iced?";
var q3 = "Something milky?";


var caffeine = false;
var hot = false;
var milky = false;

var rec1 = "Try a mocha, latte, macchiato, or cappucino!"; //caffeine, hot, milky
var rec2 = "Try black coffee, Americano, or tea."; //caffeine, hot, non-milky
var rec3 = "Try an iced mocha, latte, frappucino, or macchiato."; //caffeine, iced, milky
var rec4 = "Try iced black coffee or tea."; //caffeine, iced, non-milky

var rec5 = "Try cremes or some hot chocolate :)"; //decaf, hot, milky
var rec6 = "Try decaf coffee or apple cider."; //decaf, hot, non-milky
var rec7 = "Try any of the iced espresso drinks, but ask for decaf!"; //decaf, iced, milky
var rec8 = "Try refreshers."; //decaf, iced, non-milky

var yes = "Yes";
var no = "No";



function setup() {
  createCanvas(400, 400);
  color('#eeeeee');
  textAlign(CENTER);
}



function draw() {

  if (page1) {

    drawPage1();

    if (key == 'y') {
      page1 = false;
      page2 = true;
    } else if (key == 'n') {
      return false;
    }
  } else if (page2) {
    background(reset);

    drawPage2();

    if (key == 'c') {
      page2 = false;
      caffeine = true;
      page3 = true;
    } else if (key == 'd') {
      page2 = false;
      caffeine = false;
      page3 = true;
    }
  } else if (page3) {
    background(reset);

    drawPage3();

    if (key == 'h') {
      page3 = false;
      hot = true;
      page4 = true;
    } else if (key == 'i') {
      page3 = false;
      hot = false;
      page4 = true;
    }
  } else if (page4) {
    background(reset);

    drawPage4();

    if (key == 'm') {
      if (caffeine == true) {
        if (hot == true) {
          page4 = false;
          page5 = true;
        } else if (hot == false) {
          page4 = false;
          page7 = true;
        }
      } else if (caffeine == false) {
        if (hot == true) {
          page4 = false;
          page9 = true;
        } else if (hot == false) {
          page4 = false;
          page11 = true;
        }
      }
    } else if (key == 'n') {
      if (caffeine == true) {
        if (hot == true) {
          page4 = false;
          page6 = true;
        } else if (hot == false) {
          page4 = false;
          page8 = true;
        }
      } else if (caffeine == false) {
        if (hot == true) {
          page4 = false;
          page10 = true;
        } else if (hot == false) {
          page4 = false;
          page12 = true;
        }
      }
    }
  }

  if (page5) {
    background(reset);
    textSize(18);
    text(rec1, xCoord, yCoord);
  }

  if (page6) {
    background(reset);
    textSize(18);
    text(rec2, xCoord, yCoord);
  }

  if (page7) {
    background(reset);
    textSize(14);
    text(rec3, xCoord, yCoord);
  }

  if (page8) {
    background(reset);
    textSize(18);
    text(rec4, xCoord, yCoord);
  }

  if (page9) {
    background(reset);
    textSize(18);
    text(rec5, xCoord, yCoord);
  }

  if (page10) {
    background(reset);
    textSize(18);
    text(rec6, xCoord, yCoord);
  }

  if (page11) {
    background(reset);
    textSize(14);
    text(rec7, xCoord, yCoord);
  }

  if (page12) {
    background(reset);
    textSize(18);
    text(rec8, xCoord, yCoord);
  }

}

function drawPage1() {
  background(reset);

  textSize(24);
  stroke('black');
  text(title, xCoord, yCoord - 50);
  text("Press 'y' to begin.", xCoord, yCoord + 50);

}

function drawPage2() {
  textSize(24);
  text(q1, xCoord, yCoord);

  textSize(18);
  stroke('white');
  text("Caffeinated", xCoord - 50, buttonY);
  text("Decaf", xCoord + 50, buttonY);
  text("Press 'c' for caffeine or 'd' for decaf", xCoord, buttonY + 100);
}

function drawPage3() {
  //print the question
  textSize(24);
  text(q2, xCoord, yCoord);

  //create text 
  textSize(18);
  stroke('white');
  text("Hot", xCoord - 50, buttonY);
  text("Iced", xCoord + 50, buttonY);
  text("Press 'h' for hot or 'i' for iced", xCoord, buttonY + 100);
}

function drawPage4() {
  //print the question
  textSize(24);
  text(q3, xCoord, yCoord);

  //create text 
  textSize(18);
  stroke('white');
  text("milky", xCoord - 50, buttonY);
  text("non-milky", xCoord + 50, buttonY);
  text("Press 'm'for milky or 'n' for non-milky", xCoord, buttonY + 100);
}