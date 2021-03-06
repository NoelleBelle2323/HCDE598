//Emoji

//Setting up variable
var x1 = 50;
var y1 = 50;
var x2 = 550;
var y2 = 50;
var x3 = 50;
var y3 = 450;
var x4 = 550;
var y4 = 450;
var shapewidth = 70;
var shapeheight = 70;

function setup() {
  createCanvas(600, 500);

}

function draw() {
//background
    background(220);

//Top left emoji
  noStroke(); //outter circle 
  fill("#F48B85");
  ellipse(x1,y1,shapewidth+25,shapeheight+25);
  
  	noStroke();
  	fill("#FCE284"); //inner circle
  	ellipse(x1,y1,shapewidth,shapeheight);
  
  		//Left eye
  		noStroke();
  		fill(255);
  		ellipse(x1-15,y1-10,shapewidth-50,shapeheight-45);
  
  			//eyeball			
  			noStroke();
  			fill(0);
  			ellipse(x1-12,y1-4,shapewidth-60,shapeheight-60);
  
  		//Right eye
  		noStroke();
  		fill(255);
  		ellipse(x1+15,y1-10,shapewidth-50,shapeheight-45);  
  
 				//eyeball
  			noStroke();
  			fill(0);
  			ellipse(x1+17,y1-4,shapewidth-60,shapeheight-60);
  
  		//mouth
			fill("#DC594B");
 			arc(x1,y1+20,12,12,0,PI + QUARTER_PI,CHORD);
  
  
//Top right emoji
  noStroke(); //outter circle 
  fill("#80CCB7");
  ellipse(x2,y2,shapewidth+25,shapeheight+25);
  
  noStroke();
  fill("#FCE284"); //inner circle
  ellipse(x2,y2,shapewidth,shapeheight);
  
  //Left eye
  noStroke();
  fill(255);
  ellipse(x2-15,y2-10,shapewidth-50,shapeheight-45);
  
  noStroke();//eyeball
  fill(0);
  ellipse(x2-17,y2-4,shapewidth-60,shapeheight-60);
  
  //Right eye
  noStroke();
  fill(255);
  ellipse(x2+15,y2-10,shapewidth-50,shapeheight-45);  
  
  noStroke(); //eyeball
  fill(0);
  ellipse(x2+13,y2-4,shapewidth-60,shapeheight-60); 
    
   //mouth
	fill("#DC594B");
  arc(x2,y2+20,12,12,0,PI + QUARTER_PI,CHORD);

//Bottom left emoji
  noStroke(); //outter circle 
  fill("#85B6CE");
  ellipse(x3,y3,shapewidth+25,shapeheight+25);
  
  noStroke();
  fill("#FCE284"); //inner circle
  ellipse(x3,y3,shapewidth,shapeheight);
  
  //Left eye
  noStroke();
  fill(255);
  ellipse(x3-15,y3-10,shapewidth-50,shapeheight-45);
  
  noStroke();//eyeball
  fill(0);
  ellipse(x3-12,y3-15,shapewidth-60,shapeheight-60);
  
  //Right eye
  noStroke();
  fill(255);
  ellipse(x3+15,y3-10,shapewidth-50,shapeheight-45);  
  
  noStroke(); //eyeball
  fill(0);
  ellipse(x3+17,y3-15,shapewidth-60,shapeheight-60);
  
  //mouth
	fill("#DC594B");
  arc(x3,y3+20,12,12,0,PI + QUARTER_PI,CHORD);
  
//Bottom right emoji
  noStroke(); //outter circle 
  fill("#DBAA05");
  ellipse(x4,y4,shapewidth+25,shapeheight+25);
  
  noStroke();
  fill("#FCE284"); //inner circle
  ellipse(x4,y4,shapewidth,shapeheight);
  
  //Left eye
  noStroke();
  fill(255);
  ellipse(x4-15,y4-10,shapewidth-50,shapeheight-45);
  
  noStroke();//eyeball
  fill(0);
  ellipse(x4-18,y4-15,shapewidth-60,shapeheight-60);
  
  //Right eye
  noStroke();
  fill(255);
  ellipse(x4+15,y4-10,shapewidth-50,shapeheight-45);  
  
  noStroke(); //eyeball
  fill(0);
  ellipse(x4+12,y4-15,shapewidth-60,shapeheight-60);
  
  //mouth
	fill("#DC594B");
  arc(x4,y4+20,12,12,0,PI + QUARTER_PI,CHORD);

  
//Movement - top left emoji
  
  if (x1<150){
  	x1 = x1+2;  
  }
  
  	else{
    	y1 = y1+ 2;
  }
  
  if(y1>250){
    y1=250;
  }
  
//Movement - top right emoji
  
  if(x2>350){
    x2 = x2-2;
  }
  
  else{
  	y2 = y2+2;
  }
  
  if(y2>250){
    y2 = 250;
  }

//Movement - bottom left emoji
  if(x3<250){
    x3 = x3+2;
  }
  
  else{
    y3 = y3-2;
  }
  
  if(y3<250){
    y3 = 250;
  }
  
//Movement - bottom right emoji
  if(x4>450){
    x4=x4-2;
  }
  else
    y4= y4-2
  
  if(y4<250){
    y4=250;
  }

  
}
