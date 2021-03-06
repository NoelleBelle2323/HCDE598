function setup() {
  createCanvas(400, 400);
  background("#87cefa");
   
  
// antennas
	stroke('black');
  fill("black");
  strokeWeight(3);
  line(200, 200, 120, 60);
  ellipse(120, 60, 15, 15);
  line(265, 55, 190, 255);
  ellipse(264, 60, 15, 15);  
  
// upper left wing        
	push();
  fill("white"); 
  translate(width / 6, height / 7);
	rotate(PI / 6.5);
  ellipse(105, 100, 140, 80);
  pop();  
  
  
// bottom right wing        
	push();
  fill("white"); 
  translate(width / 3, height / 7);
	rotate(PI / 5.0);
  ellipse(240, 110, 140, 80);
  pop();   
  
  
// upper right wing        
	push();
  fill("white"); 
  translate(width / 7, height / 9);
	rotate(PI / -11.0);
  ellipse(190, 220, 140, 80);
  pop(); 

  
// bottom left wing        
	push();
  fill("white"); 
  translate(width / 9, height / 4);
	rotate(PI / -18.0);
  ellipse(50, 195, 140, 80);
  pop();    
  
// bee body
  fill("yellow");
  ellipse(200, 225, 140, 200);
  stroke("black");
  strokeWeight("3");  
  fill("black");
  
// bee stripes
  rect(142, 165, 115, 10, 3); //stripe 1
  rect(130, 209, 138, 30, 7); //stripe 2
  rect(143, 275, 113, 10, 3); //stripe 3
  

// text  
	fill(0);
	noStroke();
	textStyle(BOLD);
	textSize(40);
	textFont('Honeybee');
	text('Honeybee', 120, 370);

}