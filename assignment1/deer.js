function setup() {
  createCanvas(600, 600);
  background("#fff2d6");

  //grass
  stroke("#065620");
  fill("#065620");
  rect(50, 290, 500, 10);

  // small mountain
  stroke("#5defb9");
  fill("#5defb9");
  triangle(380, 140, 550, 290, 220, 290);

  // small mountain snow (left)
  stroke("#b0e1fc")
  fill("#b0e1fc")
  triangle(380, 140, 403, 160, 337, 180)

  // small mountain snow (right)
  stroke("#e2f4ff")
  fill("#e2f4ff")
  triangle(380, 140, 420, 175, 390, 175)

  // small mountain snow (middle)
  stroke("#ceeeff")
  fill("#ceeeff")
  triangle(380, 140, 390, 175, 370, 185)

  //small tree in front of small mountain (left)
  stroke("#b4fc7e")
  fill("#b4fc7e")
  triangle(460, 200, 460, 290, 430, 290)


  //small tree in front of small mountain (right)
  stroke("#90e84e")
  fill("#90e84e")
  triangle(460, 200, 490, 290, 460, 290)

  //big tree in front of small mountain (left)
  stroke("#77ef75")
  fill("#77ef75")
  triangle(510, 170, 510, 290, 470, 290)

  //big tree in front of small mountain (right)
  stroke("#53ba51")
  fill("#53ba51")
  triangle(510, 170, 550, 290, 510, 290)

  //mountain
  stroke("#00c47c");
  fill("#00c47c");
  triangle(210, 90, 450, 290, 50, 290);

  //ice on mountain left
  stroke("#82e5e5");
  fill("#82e5e5");
  triangle(210, 90, 200, 140, 153, 160);

  //ice on mountain middle
  stroke("#c3f7f7");
  fill("#c3f7f7")
  quad(210, 90, 260, 170, 230, 210, 200, 140)

  //mountain ice right
  stroke("#e8ffff")
  fill("#e8ffff")
  triangle(210, 90, 282, 150, 273, 190)

  //big left tree (left side)
  stroke("#97d149");
  fill("#97d149")
  triangle(105, 150, 115, 290, 75, 290)

  //big left tree (right side)
  stroke("#bdf274");
  fill("#bdf274")
  triangle(105, 150, 135, 290, 105, 290)

  //small left tree (left side)
  stroke("#96e281");
  fill("#96e281")
  triangle(80, 210, 80, 290, 60, 290)

  //small left tree (right side)
  stroke("#c0ffaf");
  fill("#c0ffaf")
  triangle(80, 210, 100, 290, 80, 290)


  //deer 

  //deer head 1
  stroke("#bc9262");
  fill("#bc9262")
  triangle(240, 190, 240, 210, 220, 210)

  //deer head 2
  stroke("#a07849");
  fill("#a07849")
  triangle(240, 190, 250, 190, 240, 210)

  //ears
  stroke("#aa9663");
  fill("#aa9663")
  triangle(250, 180, 250, 190, 240, 190)

  //bottom leg right behind
  stroke("#f9cc98");
  fill("#f9cc98")
  triangle(270, 240, 280, 290, 285, 255)

  //deer neck left
  stroke("#d6974d");
  fill("#d6974d")
  triangle(250, 190, 250, 225, 240, 210)

  //deer neck right
  stroke("#eab77c");
  fill("#eab77c")
  triangle(250, 190, 260, 210, 250, 225)

  //lower deer neck
  stroke("#825727");
  fill("#825727")
  triangle(260, 210, 250, 225, 260, 240)

  //top leg right
  stroke("#ad7d47");
  fill("#ad7d47")
  quad(260, 210, 290, 240, 275, 255, 261, 241)

  //bottom leg right front
  stroke("#e2a968");
  fill("#e2a968")
  triangle(290, 240, 290, 290, 275, 255)

  //top back
  stroke("#d8984e");
  fill("#d8984e")
  triangle(260, 210, 320, 210, 290, 240)

  //lower stomach
  stroke("#eab577");
  fill("#eab577")
  triangle(305, 224, 320, 240, 290, 240)

  //back low leg 2
  stroke("#775121");
  fill("#775121")
  triangle(305, 240, 320, 240, 315, 290)

  //thigh
  stroke("#9b6d37");
  fill("#9b6d37")
  quad(320, 210, 330, 240, 315, 240, 305, 224)

  //butt
  stroke("#c6a47b");
  fill("#c6a47b")
  triangle(320, 210, 340, 215, 330, 240)

  //back low leg 1
  stroke("#c49152");
  fill("#c49152")
  triangle(315, 240, 330, 240, 325, 290)

  //sun
  stroke("#ffc13d");
  fill("#ffc13d")
  ellipse(430, 60, 40, 40)

  //water
  stroke("#b8cbf2");
  fill("#b8cbf2");
  rect(125, 290, 130, 5);

  //left middle boulder
  stroke("#5b380e")
  fill("#5b380e")
  triangle(50, 300, 470, 300, 250, 440)

  //left boulder
  stroke("#b7854b")
  fill("#b7854b")
  quad(50, 300, 220, 300, 150, 400, 80, 360)

  //right middle boulder
  stroke("#825725")
  fill("#825725")
  triangle(170, 300, 545, 300, 370, 470)

  //right boulder
  stroke("#c4863c")
  fill("#c4863c")
  quad(350, 300, 550, 300, 500, 380, 415, 400)


}