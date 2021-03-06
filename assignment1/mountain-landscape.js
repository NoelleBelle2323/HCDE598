//start by creating the canvas and make it the sky color using RGB format
function setup() {
  createCanvas(680, 500);
  background(200, 300, 400);
//create a background rectangle that will become the lake
  noStroke()//no outline for these elements 
  fill(39, 201, 209) //aqua color for water
  rect(0,200, 700, 600)
//make the mountians using triangles and a grey color using RGB format
  fill(187, 199, 199)
  triangle(450, 0, 200, 150, 600, 200)
  triangle(400, 200, 17, 175, 250, 0)
//add some snowcaps using white trianges
  fill('white')
  triangle(250, 0, 150, 75, 350, 75)
//create the other mountians in a darker grey color using triangles again
  fill('grey') //string color format
  stroke(15) // include an outline on these to show depth
  triangle(300, 0, 150, 200, 500, 200)
  triangle(250, 200, 0, 225, 0, 0)
  triangle(500, 200, 700, 200, 650, 0)
  triangle(300, 200, 650, 200, 550, 0)
//create the rest of the snowcaps using the same method as before  
  fill('white') //string color format
  noStroke()
  triangle(0, 0, 0, 55, 35, 28)
  triangle(300, 0, 267, 45, 345, 45)
  triangle(450, 0, 367, 50, 487, 50)
  triangle(550, 0, 507, 35, 567, 35)
  triangle(650, 0, 609, 55, 664, 55)
//create the dirt uring a curve and rectanges to fill in the area
  fill(182, 152, 123)
  noStroke()
  bezier(0, 450, 265, 350, 380, 400, 900, 400)
  fill(182, 152, 123) //RGB color format
  noStroke()
  rect(0, 449, 700, 125)
  fill(182, 152, 123) // RGB color format
  rect(125, 410, 555, 75)
  fill(182, 152, 123) //RGB color format
  rect(20, 442, 125, 25)
//create the trees using trianges and make them green (RGB format)
  fill(111, 160, 59)
  triangle(25, 445, 55, 10, 125, 415)
  triangle(475, 300, 500, 400, 435, 400)
  triangle(510, 425, 600, 425, 550, 50)
//create a sun in the background using an ellipse 
  fill(250, 248, 116) //RGB format
  ellipse(95, 33, 55, 60);
}
