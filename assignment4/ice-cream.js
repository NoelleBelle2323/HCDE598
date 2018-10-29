// establish the canvas and fill it with a color
function setup() {
    createCanvas(1000, 1000);
    background(153, 153, 102);
}

function draw() {}


// draws an icecream centered at (x, y) 
function drawIcecream(x, y, scale) {

    //Icecream - ball
    noStroke();
    fill('yellow')
    ellipse(x + scale, y - (scale * 0.25), scale * 2, scale * 2)

    //Icecream Cone - Layer 1
    noStroke();
    fill(218, 179, 139);
    triangle(x, y, x + scale, y + scale * 3, x + scale * 2, y);

    //Icecream Cone texture
    //going right
    stroke (color (255))
    strokeWeight (scale/10);
    line (x + scale*0.4,y + scale*0.1,x + scale*1.1, y+scale*2.1)
    line (x + scale*0.8,y + scale*0.1,x + scale*1.3, y+scale*1.6)
    line (x + scale*1.2,y + scale*0.1,x + scale*1.5, y+scale*1.0)
    line (x + scale*1.6,y + scale*0.1,x + scale*1.7, y+scale*0.4)
    //going left
    line (x + scale*0.4,y + scale*0.1,x + scale*0.25, y+scale*0.4)
    line (x + scale*0.8,y + scale*0.1,x + scale*0.4, y+scale*1.0)
    line (x + scale*1.2,y + scale*0.1,x + scale*0.6, y+scale*1.6)
    line (x + scale*1.6,y + scale*0.1,x + scale*0.8, y+scale*2.1)
    
    //Chocolate stick on the Icecream
    noStroke ();
    fill (78, 51, 24)
    rect(x + scale*0.3, y - scale*1.8, scale*0.2, scale*1.2);
    
    //Smile on the icecream ball 
    stroke ('black')
    strokeWeight(scale/5)
    point (x + scale, y - scale*0.7)
    point (x + scale*1.6, y - scale*0.7)
    
    noFill()
    stroke ('black')
    strokeWeight(scale/8)
    bezier(x + scale, y - scale*0.3, x + scale*1.2, y - scale*0.1, x + scale*1.4, y - scale*0.1, x + scale*1.6, y - scale*0.3)

}

// whenever a key is pressed on the keyboard,
// draw an icecream centered on the current position
// of the mouse with a random size icecream each time
function mouseClicked() {
    var size = random(0, width / 10);
    drawIcecream(mouseX, mouseY, size);
}