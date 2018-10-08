function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("white");
	
	
	//coordinate code
	fill('grey');
  stroke('grey');
  rect(0, 0, 100, 25);

  // sets the color of the text
  fill('black');
  stroke('black');
  strokeWeight(1);

  // writes the text of the current coordinates in the corner
  text("x: " + mouseX + " y: " + mouseY, 10, 15);

	
	
	//crest(rectangle, line, triangle) 
	//rectangle
	noStroke();
	fill(56, 0, 0);
	rect(200, 100, 400, 500);
	
	//line
	strokeWeight(70)
	stroke(56, 0, 0);
	strokeCap(ROUND);
	line(235, 600, 565, 600);
	
	//triangle, bottom
	noStroke();
	fill(56, 0, 0);
	triangle(375, 635, 400, 665, 425, 635);

	

	//three thighs (via star/rotate example in p5.js documentation)
	function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
	}
	 
	push();
	fill(168, 66, 17)
  translate(width*0.5, height*0.45);
  rotate(radians(30));
	scale(3)
  star(0, 0, 10, 60, 3); 
  pop();
	
	
	
	//three calves
	noStroke();
	fill(208, 111, 56);
	triangle(400, 180, 393, 225, 300, 260);
	
	noStroke();
	fill(208, 111, 56);
	triangle(245, 450, 285, 434, 370, 490);
	
	noStroke();
	fill(208, 111, 56);
	triangle(555, 449, 520, 421, 530, 315);
	
	
	
	//three feet
	noStroke();
	fill(253, 196, 79);
	triangle(300, 260, 250, 260, 300, 280);
	
	noStroke();
	fill(253, 196, 79);
	triangle(370, 490, 370, 540, 390, 490);
	
	noStroke();
	fill(253, 196, 79);
	triangle(530, 315, 520, 300, 575, 300);
	
	
	//head
	strokeWeight(10)
	stroke(0, 103, 20, 200)
	fill(217, 118, 176);
	ellipse(400, 365, 100, 130)
	
	
	
	//transparent boughs
	strokeWeight(10)
	stroke(0, 103, 20, 200)
	line(365, 315, 275, 350)
	line(435, 315, 500, 250)
	line(400, 430, 480, 480)

	fill(0, 103, 20, 200)
	rect(265, 335, 20, 30)
	rect(490, 235, 20, 30)
	rect(470, 465, 20, 30)
}