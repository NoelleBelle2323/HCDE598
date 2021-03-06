	// The following was adjusted from the Linear Gradient 
	// in the Reference Guide
	// https://p5js.org/examples/color-linear-gradient.html
	// More notes about it are written below

	var Y_AXIS = 1;
	var X_AXIS = 2;
	var b1, b2;

	function setup() {
	  createCanvas(500, 500);

	  // The following continues what was adjusted from
    // the Linear Gradient section of the Reference Guide.
    // I adjusted to not include the c1 and c2 colors
    // and changed the b1 and b2 colors.

	  b1 = color(0, 250, 250);
	  b2 = color('pink');

    // The default had the following:
    // setGradient(0, 0, width/2, height, b1, b2, X_AXIS) and
    // setGradient(width/2, 0, width, height, b2, b1, X_AXIS)
    // I adjusted to include one function that expanded the full
    // length and width of the background. I also wanted a
    // vertical gradient so I changed it from X_AXIS to Y_AXIS
    
	  setGradient(0, 0, width, height, b2, b1, Y_AXIS);

	}

	// The following was also copied from Linear Gradient in the guide
	// I'm confused about how most of the following section works
	// although I assume I need to define the setGradient function
	// to be able to use it. If I adjusted or deleted any other
	// part of the next section then I noticed the gradient would
	// not work.

	function setGradient(x, y, w, h, b1, b2, axis) {

	  noFill();

	  if (axis == Y_AXIS) { // Top to bottom gradient
	    for (var i = y; i <= y + h; i++) {
	      var inter = map(i, y, y + h, 0, 1);
	      var c = lerpColor(b1, b2, inter);
	      stroke(c);
	      line(x, i, x + w, i);
	    }
	  }
	}

	function draw() {

	  //I realized later that I could have done 
	  //TAKE more easily with beginshape() and 
	  //endshape() but had already completed it

	  //TAKE Shadow (x+5, y+5) to TAKE on top
	  noStroke();
	  fill(0);

	  //T Shadow
	  quad(95, 140, 165, 120, 165, 145, 95, 165);
	  quad(120, 155, 145, 135, 150, 225, 125, 225);

	  //A Shadow
	  quad(185, 115, 210, 115, 205, 225, 185, 225);
	  quad(200, 115, 225, 105, 255, 225, 235, 225);
	  quad(185, 115, 225, 105, 225, 125, 195, 125);
	  quad(195, 185, 235, 185, 235, 205, 195, 205);

	  //K Shadow
	  quad(275, 105, 305, 112, 285, 225, 265, 225);
	  quad(330, 120, 355, 128, 305, 205, 290, 190);
	  quad(290, 185, 340, 225, 315, 225, 275, 200);

	  //E Shadow
	  quad(385, 135, 425, 150, 420, 170, 385, 165);
	  quad(377, 175, 417, 180, 412, 200, 377, 195);
	  quad(377, 205, 410, 210, 405, 225, 377, 225);
	  quad(375, 132, 395, 139, 377, 225, 355, 225);

	  //TAKE on top
	  noStroke();
	  fill(b1);

	  //T in TAKE
	  quad(90, 135, 160, 115, 160, 140, 90, 160);
	  quad(115, 150, 140, 130, 145, 220, 120, 220);

	  //A in TAKE
	  quad(180, 110, 205, 110, 200, 220, 180, 220);
	  quad(195, 110, 220, 100, 250, 220, 230, 220);
	  quad(180, 110, 220, 100, 220, 120, 190, 120);
	  quad(190, 180, 230, 180, 230, 200, 190, 200);

	  //K in TAKE
	  quad(270, 100, 300, 108, 280, 220, 260, 220);
	  quad(325, 115, 350, 123, 300, 200, 285, 185);
	  quad(285, 180, 335, 220, 310, 220, 270, 195);

	  //E in TAKE
	  quad(380, 130, 420, 145, 415, 165, 380, 160);
	  quad(372, 170, 412, 175, 407, 195, 372, 190);
	  quad(372, 200, 405, 205, 400, 220, 372, 220);
	  quad(370, 127, 390, 134, 372, 220, 350, 220);

	  //RISKS accent color (x+3, y+3) from TOP
	  stroke(b2); // I changed this to b2 since the color was defined earlier
	  strokeWeight(4);
	  noFill();

	  //R accent
	  bezier(103, 263, 53, 293, 43, 233, 83, 223);
	  bezier(103, 263, 73, 263, 63, 243, 83, 223);
	  bezier(83, 223, 103, 213, 153, 213, 173, 203);
	  bezier(173, 203, 103, 213, 113, 353, 73, 333); //reference for K
	  bezier(173, 203, 123, 233, 133, 373, 73, 333);
	  bezier(153, 223, 158, 213, 183, 208, 193, 213);
	  bezier(193, 213, 213, 223, 163, 293, 131, 293);
	  bezier(193, 213, 233, 243, 173, 313, 131, 293);
	  bezier(131, 293, 183, 303, 163, 353, 233, 373); //lowest pt of R
	  bezier(131, 293, 173, 333, 163, 383, 233, 373);

	  //I accent
	  ellipse(233, 218, 20, 20); //leave radii
	  bezier(243, 238, 238, 233, 228, 238, 223, 243);
	  bezier(223, 243, 223, 263, 203, 283, 203, 303);
	  bezier(203, 303, 203, 323, 223, 333, 250, 283); //beginning of S
	  bezier(243, 238, 243, 258, 193, 333, 228, 313);

	  //S accent - first
	  bezier(263, 253, 253, 273, 303, 333, 263, 333);
	  bezier(263, 253, 223, 253, 283, 333, 263, 333);
	  bezier(263, 333, 253, 333, 233, 323, 258, 303);

	  //K in RISKS
	  bezier(343, 193, 283, 203, 313, 373, 253, 373);
	  bezier(348, 193, 303, 193, 338, 373, 253, 373);
	  bezier(318, 273, 373, 203, 383, 283, 318, 273);
	  bezier(318, 273, 353, 223, 363, 283, 318, 273);
	  bezier(313, 273, 333, 333, 363, 333, 385, 283);
	  bezier(318, 273, 323, 303, 373, 323, 385, 283);

	  //S in RISKS - second one (x + 135, y)
	  bezier(398, 253, 388, 273, 438, 333, 398, 333);
	  bezier(398, 253, 358, 253, 418, 333, 398, 333);
	  bezier(398, 333, 388, 333, 368, 323, 393, 303);

	  //RISKS black lines on TOP
	  stroke(0);
	  strokeWeight(4);
	  noFill();

	  //R in RISKS
	  bezier(100, 260, 50, 290, 40, 230, 80, 220);
	  bezier(100, 260, 70, 260, 60, 240, 80, 220);
	  bezier(80, 220, 100, 210, 150, 210, 170, 200);
	  bezier(170, 200, 100, 210, 110, 350, 70, 330);
	  bezier(170, 200, 120, 230, 130, 370, 70, 330);
	  bezier(150, 220, 155, 215, 180, 205, 190, 210);
	  bezier(190, 210, 210, 220, 160, 290, 128, 290);
	  bezier(190, 210, 230, 240, 170, 310, 128, 290);
	  bezier(128, 290, 180, 300, 160, 350, 230, 370); //lowest pt of R
	  bezier(128, 290, 170, 330, 160, 380, 230, 370);

	  //I in RISKS
	  ellipse(230, 215, 20, 20);
	  bezier(240, 235, 235, 230, 225, 235, 220, 240);
	  bezier(220, 240, 220, 260, 200, 280, 200, 300);
	  bezier(200, 300, 200, 320, 220, 330, 247, 280); //beginning of S
	  bezier(240, 235, 240, 255, 190, 330, 225, 310);

	  //S in RISKS - first
	  bezier(260, 250, 250, 270, 300, 330, 260, 330);
	  bezier(260, 250, 220, 250, 280, 330, 260, 330);
	  bezier(260, 330, 250, 330, 230, 320, 255, 300);

	  //K in RISKS
	  bezier(340, 190, 280, 200, 310, 370, 250, 370);
	  bezier(345, 190, 300, 190, 335, 370, 250, 370);
	  bezier(315, 270, 370, 200, 380, 280, 315, 270);
	  bezier(315, 270, 350, 220, 360, 280, 315, 270);
	  bezier(315, 270, 330, 330, 360, 330, 382, 280);
	  bezier(315, 270, 320, 300, 370, 320, 382, 280);

	  //S in RISKS - second one (x + 135, y) from first one
	  bezier(395, 250, 385, 270, 435, 330, 395, 330);
	  bezier(395, 250, 355, 250, 415, 330, 395, 330);
	  bezier(395, 330, 385, 330, 365, 320, 390, 300);

	  //Top seagull
	  bezier(250, 110, 245, 100, 245, 95, 230, 90);
	  bezier(250, 110, 255, 100, 255, 95, 270, 90);

	  //Seagull under R
	  bezier(130, 330, 130, 335, 125, 345, 110, 350);
	  bezier(130, 330, 130, 335, 145, 355, 155, 365);

	  //seagull under k
	  bezier(320, 330, 320, 335, 311, 360, 310, 360);
	  bezier(320, 330, 330, 340, 340, 345, 355, 335);

	}