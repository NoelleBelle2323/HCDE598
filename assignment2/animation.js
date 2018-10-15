var x = 55;
var y = 55;
var x2 = 345;
var y2 = 55;
var x3 = 345;
var y3 = 345;
var x4 = 55;
var y4 = 345;
var shapewidth = 70;
var shapeheight = 60;

function setup() {    
  createCanvas(400, 400);
}

function draw() {    
  background("black");  

     //Up left  
    
  fill("orange");    
  noStroke();    
  ellipse(x, y, shapewidth, shapeheight);
  fill("green");
  rect(x - 5, y - 40, shapewidth - 60, shapeheight - 40);
  fill("white");
  ellipse(x - 5, y - 10, 10, 10);
  ellipse(x + 5, y - 10, 10, 10);
  fill("black");
  ellipse(x - 5, y - 10, 5, 5);
  ellipse(x + 5, y - 10, 5, 5);
  stroke("black");
  strokeWeight(3);
  line(x - 10, y + 10, x + 10, y + 10);

     //Up right
    
  fill("grey");    
  noStroke();    
  ellipse(x2, y2, shapewidth, shapeheight); 
  fill("black");
  ellipse(x2, y2 - 10, shapewidth - 30, shapeheight - 40);
  fill("white");
  ellipse(x2 - 5, y - 10, 10, 10);
  ellipse(x2 + 5, y - 10, 10, 10);
  fill("black");
  ellipse(x2 - 5, y - 10, 5, 5);
  ellipse(x2 + 5, y - 10, 5, 5);
  stroke("black");
  strokeWeight(3);
  line(x2 - 10, y + 10, x2 + 10, y + 10);

     //Low right
    
  fill("white");    
  noStroke();    
  ellipse(x3, y3, shapewidth, shapeheight); 
  fill("black");
  ellipse(x3 - 5, y3 - 10, 10, 10);
  ellipse(x3 + 5, y3 - 10, 10, 10);
  fill("red");
  ellipse(x3 - 5, y3 - 10, 5, 5);
  ellipse(x3 + 5, y3 - 10, 5, 5);
  stroke("black");
  strokeWeight(3);
  line(x3 - 10, y3 + 10, x3 + 10, y3 + 10);     //Low left  
    
  fill("green");    
  noStroke();    
  ellipse(x4, y4, shapewidth, shapeheight);
  fill("grey");
  rect(x4 - 15, y4 - 25, shapewidth - 40, shapeheight - 50);
  fill("white");
  ellipse(x4 - 10, y4 - 10, 10, 10);
  ellipse(x4 + 10, y4 - 10, 10, 10);
  fill("black");
  ellipse(x4 - 5, y4 - 10, 5, 5);
  ellipse(x4 + 5, y4 - 10, 5, 5);
  stroke("black");
  strokeWeight(3);
  line(x4 - 10, y4 + 10, x4 + 10, y4 + 10);

     //vertical movements 
    
  if (x < 50) {        
    x = x + 1;  
  }  
  if (x3 > 250) {        
    x3 = x3 - 1;    
  }
    
  if (x2 > 150) {        
    x2 = x2 - 1;    
  }    
  if (x4 < 350) {        
    x4 = x4 + 1;    
  }

     //All horizontal moves
    
  if (y < 200) {      
    y = y + 1;    
  }    
  if (y2 < 200) {      
    y2 = y2 + 1;    
  }    
  if (y3 > 200) {    
    y3 = y3 - 1;    
  }    
  if (y4 > 200) {      
    y4 = y4 - 1;    
  }

}