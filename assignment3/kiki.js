// Initializing variables for title pages
	var titlePage = "Kiki, do you love me?";
	var instructPage = "Press Y/M/N";
	var titlePage2 = "I love you too!";
	var titlePage3 = "Say you'll never ever leave from beside me" 
	var titlePage4 = "You got me in my feelings..."; 

// Initialzing background color
	var bgColor = '#B8D8D8';

// Initalizing variable for page numbers
	var pageNum = 1; 

function setup() {
  createCanvas(500, 400);
 
// variables for text location
  titleX = width / 2;
  titleY = height / 2;
}

function draw() {
  background(bgColor);
  
  drawPage(pageNum);  
}


function keyTyped() {
  if (pageNum == 1) {
    if (key === 'y') { // I love you too! 
      pageNum = 2;
    } else if (key === 'm') { // say you'll never ever leave from beside me
      pageNum = 3;  
    } else if (key === 'n') { // You got me in my feelings page
      pageNum = 4;
    }
    return false;
  }
}

function mousePressed() {
  if (pageNum == 1) {
    pageNum = 1;
  } else if (pageNum == 1) {
    pageNum = 1;
  }
}
  
function drawPage(pageNum) {
  if (pageNum == 1) {
    
// Drake cartoon
    noStroke();
    fill('#5C4033'); // Drake's head 
    rect(230, 40, 40, 150);
    fill('#8B0000'); // red jacket
    rect(230, 80, 40, 50);
    fill('white'); // white shirt
    rect(245, 80, 10, 50);
    fill('#01579B'); // blue jeans
    rect(230, 130, 40, 60);
    
    
// Display title Kiki do you love me?
    fill('black');
    textFont('Arial');
    textSize(40);
    textAlign(CENTER);
    text(titlePage, titleX, titleY + 50)
   
// Display instructions text - Press Y/M/N
    textSize(28);
    text(instructPage, titleX, titleY + 100);

  } else if (pageNum == 2) { // I love you too, happy face, Display Title 
    noStroke();
    fill('#5C4033');
    rect(210, 80, 80, 80); // Drake's face
    fill('white'); // eyes
    ellipse(235, 110, 10); // eyes
    ellipse(265, 110, 10); // eyes
    rect(220, 130, 60, 4); // smiling mouth
    rect(220, 120, 4, 10); // mouth
    rect(276, 120, 4, 10); // mouth
   	fill('black'); // display title 
    textSize(40);
    text(titlePage2, titleX, titleY + 50);
    
	} else if (pageNum == 3) { // say you'll never ever leave 
   	noStroke();
    fill('#5C4033');
    rect(210, 80, 80, 80); // Drake's face
    fill('white'); // eyes
    ellipse(235, 110, 10); // eyes
    ellipse(265, 110, 10); // eyes
    rect(220, 130, 60, 4); // flatline mouth
   	fill('black'); // display title
    textSize(24);
    text(titlePage3, titleX, titleY + 50);
             
  } else if (pageNum == 4) { // you got me in my feelings
    noStroke();
    fill('#5C4033');
    rect(210, 80, 80, 80); // Drake's face
    fill('white'); // eyes
    ellipse(235, 110, 10); // eyes
    ellipse(265, 110, 10); // eyes
    rect(220, 130, 60, 4); // sad mouth
    rect(220, 134, 4, 10); // mouth
    rect(276, 134, 4, 10); // mouth
   	fill('black'); // display title
    textSize(35);
    text(titlePage4, titleX, titleY + 50);
  
  }
}