//Variables to help draw the triagular pattern.
var x = -80;
y = 580;
z = 10;

function setup() {
  createCanvas(400, 600);
  //This portion sets up the background color and subtle patterns with curves.
  background(20, 200, 0);
  fill(200, 200, 200, 60);
  noStroke();
  arc(0, 0, 800, 1200, 0, PI / 2, PIE);
  arc(0, 0, 800, 1000, 0, PI / 2, PIE);
  arc(0, 0, 800, 800, 0, PI / 2, PIE);
  arc(400, 0, 800, 1200, -1.5 * PI, -PI, PIE);
  arc(400, 0, 800, 1000, -1.5 * PI, -PI, PIE);
  arc(400, 0, 800, 800, -1.5 * PI, -PI, PIE);
  arc(0, 0, 800, 400, 0, PI / 2, PIE);
  arc(400, 0, 800, 400, -3 * PI / 2, -PI, PIE);

}

//This portion below draws the triangular pattern and applies a gradian to it. It draws rows of layered triangles from left to right and bottom to top.
function draw() {

  if (x < 440) {
    x = x + 80;
    z = z + 4;
    noStroke()
    fill(183 + z, 182 + z, 38 + z, 80)
    triangle(x, y, x + 80, y, x + 40, y + 40 * sqrt(3))
    fill(206 + z, 205 + z, 19 + z, 150)
    triangle(x + 15, y + 40 * sqrt(1 / 3) - 25 * sqrt(1 / 3), x + 65, y + 40 * sqrt(1 / 3) - 25 * sqrt(1 / 3), x + 40, y + 40 * sqrt(1 / 3) + 50 * sqrt(1 / 3))
    fill(229 + z, 228 + z, 0 + z, 1000)
    triangle(x + 25, y + 40 * sqrt(1 / 3) - sqrt(75), x + 55, y + 40 * sqrt(1 / 3) - sqrt(75), x + 40, 40 * sqrt(1 / 3) + y + 2 * sqrt(75))

  }

  if (x >= 400) {
    y = y - 70;
    x = -80;
  }

  //This portion below draws the 3 pink highlight triangles.
  fill(255, 255, 255, 0)
  triangle(240, 440, 320, 440, 280, 440 + 40 * sqrt(3))
  fill(255, 20, 147, 400)
  triangle(255, 440 + 40 * sqrt(1 / 3) - 25 * sqrt(1 / 3), 305, 440 + 40 * sqrt(1 / 3) - 25 * sqrt(1 / 3), 280, 440 + 40 * sqrt(1 / 3) + 50 * sqrt(1 / 3))
  fill(255, 255, 0, 400)
  triangle(265, 440 + 40 * sqrt(1 / 3) - sqrt(75), 295, 440 + 40 * sqrt(1 / 3) - sqrt(75), 280, 40 * sqrt(1 / 3) + 440 + 2 * sqrt(75))

  fill(130, 0, 130, 500)
  triangle(240, 370, 320, 370, 280, 370 + 40 * sqrt(3))
  fill(255, 20, 147, 400)
  triangle(255, 370 + 40 * sqrt(1 / 3) - 25 * sqrt(1 / 3), 305, 370 + 40 * sqrt(1 / 3) - 25 * sqrt(1 / 3), 280, 370 + 40 * sqrt(1 / 3) + 50 * sqrt(1 / 3))
  fill(255, 255, 0, 400)
  triangle(265, 370 + 40 * sqrt(1 / 3) - sqrt(75), 295, 370 + 40 * sqrt(1 / 3) - sqrt(75), 280, 40 * sqrt(1 / 3) + 370 + 2 * sqrt(75))

  fill(255, 255, 255, 0)
  triangle(240, 300, 320, 300, 280, 300 + 40 * sqrt(3))
  fill(255, 20, 147, 400)
  triangle(255, 300 + 40 * sqrt(1 / 3) - 25 * sqrt(1 / 3), 305, 300 + 40 * sqrt(1 / 3) - 25 * sqrt(1 / 3), 280, 300 + 40 * sqrt(1 / 3) + 50 * sqrt(1 / 3))
  fill(255, 255, 0, 400)
  triangle(265, 300 + 40 * sqrt(1 / 3) - sqrt(75), 295, 300 + 40 * sqrt(1 / 3) - sqrt(75), 280, 40 * sqrt(1 / 3) + 300 + 2 * sqrt(75))

}