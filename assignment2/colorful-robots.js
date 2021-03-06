var x1 = 50;
var y1 = 50;
var radius1 = 50;
var x2 = 50;
var y2 = 500;
var x3 = 550
var y3 = 500
var x4 = 550
var y4 = 50
var shapeWidth = 30
var shapeHeight = 20

function setup() {
  createCanvas(600, 600);

}
	
function draw() {
	 background('#4298f4');
	
	
	//little guy upper left
		//head
	noStroke();
	fill('#2F2CDC');
	ellipse(x1,y1,radius1,radius1);
	
		//eyes
	fill("#E358E3");
	ellipse(x1 + 10, y1 - 5, radius1 - 30 ,radius1 - 30);
	fill("white");
	ellipse(x1 + 10, y1 - 5, radius1 - 45,radius1 - 45);
	
		//neck
	stroke('#0E3157');
	strokeWeight(2);
	line(x1, y1 + 25, x1, y1 + 50);
	
		//body
	noStroke();
	fill('#AF1C63');
	rect(x1 - 15, y1 + 30, shapeWidth, shapeHeight);
	fill('#E1E358');
	rect(x1 - 15, y1 + 40, shapeWidth, shapeHeight);
	
	//legs
	stroke('#0E3157');
	strokeWeight(2);
	line(x1 - 5, y1 + 70, x1 - 5, y1 + 61);
	line(x1 + 5, y1 + 70, x1 + 5, y1 + 61);
	
	
	
	
	//little guy bottom left
		//head
	noStroke();
	fill('#E1E358');
	ellipse(x2,y2,radius1,radius1);
	
		//eyes
	fill('#2F2CDC');
	ellipse(x2 - 10, y2 - 5, radius1 - 30 ,radius1 - 30);
	fill("white");
	ellipse(x2 - 10, y2 - 5, radius1 - 45,radius1 - 45);
	
		//neck
	stroke('#0E3157')
	strokeWeight(2)
	line(x2, y2 + 25, x2, y2 + 50);
	
		//body
	noStroke()
	fill("#E358E3")
	rect(x2 - 15, y2 + 30, shapeWidth, shapeHeight);
		fill('#AF1C63');
	rect(x2 - 15, y2 + 40, shapeWidth, shapeHeight);
	
	//legs
	stroke('#0E3157');
	strokeWeight(2);
	line(x2 - 5, y2 + 70, x2 - 5, y2 + 61);
	line(x2 + 5, y2 + 70, x2 + 5, y2 + 61);
	

	
	
	//little guy bottom right
		//head
	noStroke()
	fill("#E358E3")
	ellipse(x3,y3,radius1,radius1)
	
		//eyes
	fill('#AF1C63')
	ellipse(x3 + 10, y3 - 5, radius1 - 30 ,radius1 - 30);
	fill("white")
	ellipse(x3 + 10, y3 - 5, radius1 - 45 ,radius1 - 45);
	
		//neck
	stroke('#0E3157')
	strokeWeight(2)
	line(x3, y3 + 25, x3, y3 + 50)
	
		//body
		noStroke()
	fill('#E1E358')
	rect(x3 - 15, y3 + 30, shapeWidth, shapeHeight);
		fill('#2F2CDC')
	rect(x3 - 15, y3 + 40, shapeWidth, shapeHeight);
	
	//legs
	stroke('#0E3157')
	strokeWeight(2)
	line(x3 - 5, y3 + 70, x3 - 5, y3 + 61)
	line(x3 + 5, y3 + 70, x3 + 5, y3 + 61)
	
	
	
		//little guy top right
		//head
	noStroke()
	fill('#AF1C63')
	ellipse(x4,y4,radius1,radius1)
	
		//eyes
	fill('#E1E358')
	ellipse(x4 - 10, y4 - 5, radius1 - 30 ,radius1 - 30);
	fill("white")
	ellipse(x4 - 10, y4 - 5, radius1 - 45 ,radius1 - 45);
	
		//neck
	stroke('#0E3157')
	strokeWeight(2)
	line(x4, y4 + 25, x4, y4 + 50)
	
		//body
		noStroke()
	fill('#2F2CDC')
	rect(x4 - 15, y4 + 30, shapeWidth, shapeHeight);
		fill("#E358E3")
	rect(x4 - 15, y4 + 40, shapeWidth, shapeHeight);
	
	//legs
	stroke('#0E3157')
	strokeWeight(2)
	line(x4 - 5, y4 + 70, x4 - 5, y4 + 61)
	line(x4 + 5, y4 + 70, x4 + 5, y4 + 61)
	
	//movement
	if (x1 < 250 && y1 < 500) { // blue head movement
		y1++;
	} 
	if (x1 < 250 && y1 == 500) { 
		x1++;
	}
	if (x1 == 250 && y1 > 250) { 
		y1--;
	}

		if (x2 > 10 && y2 == 500) { // yellow head movement
   x2++;
		}
	 if (x2 == 450 && y2 > 250){ 
		y2--;
	 }
	 if (y2 == 250 && x2 > 150){
		x2--;
	 }
	
	  if (y3 > 50 && x3 > 350) { // pink head movement
   y3--;
		}
	if(x3 > 350 && y3 == 50) { 
		x3--;
	}
	if (x3 == 350 && y3 < 250){
		y3++;
	}
	
	 if (x4 > 150 && y4 < 51) { // red head movement
   x4--;
	 }
	if (x4 == 150 && y4 < 250)	{ 
		y4++ ;
	}
	if (y4 == 250 && x4 < 450){
		x4++;
	}
	
	
}