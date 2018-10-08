//Tyler La
//Recreating Keith Haring's painting
//I used the Reference page from p5.js website for new commands & Sketch to help with the coordinates

function setup() {
  createCanvas(500, 340);
  background(254,254,43,255);
  
	//Top left disc 
  strokeWeight(10);
  fill(39,140,68,255);
  ellipse(60,56,113,100);
  
  strokeWeight(7);
  fill(255);
  ellipse(57,50,30,25);
  
  strokeWeight(10);
  point(58,50);
  
  //The DJ (without right arm)
  fill(222,2,2);
  strokeWeight(10);
  beginShape();
  vertex(167.39,56.3); //1
  vertex(167.39,56.3);
  vertex(200,56.3);
  vertex(200,34.4);
  vertex(229.8,45.32);
  vertex(343.04,18.44);
  vertex(358.61,37.37);
  vertex(255.64,74.03);
  vertex(358.61,80.83);
  vertex(363.85,100); //10
  vertex(274.72,118.02);
  vertex(278.96,126);
  vertex(374.50,152.95);
  vertex(347.15,179.43);
  vertex(294.57,166.78);
  vertex(285.22,166.78);
  vertex(290.88,255.96);
  vertex(300,340);
  vertex(236.65,340);
  vertex(236.65,325.4);
  vertex(216.6,325.4);
  vertex(216.6,340);
  vertex(167.39,340);
  vertex(172.48,241.08);
  vertex(180.23,170);
  vertex(131.53,180.49);
  vertex(105.79,188.91);
  vertex(57.32,138.08);
  vertex(26.90,105.57);
  vertex(33.42,83.36);
  vertex(46.86,80.83);
  vertex(57.32,91.7);
  vertex(53.55,102.55);
  vertex(77.65,120.92);
  vertex(101,143.61);
  vertex(117.13,161.39);
  vertex(141.58,150);
  vertex(190.85,133.41);
  vertex(200,113.29);
  vertex(200,100);
  vertex(167.39,56.3);
  endShape();
  
  //The table
	fill(8,95,245);
  strokeWeight(10);
  beginShape();
  vertex(6.38,340);
  vertex(9.01,290.14);
  vertex(29.76,286.26);
  vertex(266.08,290.14);
  vertex(458.94,286.26);
  vertex(484.41,286.26);
  vertex(493.03,297.34);
  vertex(493.03,340);
  vertex(456.42,340);
  vertex(450,327.48);
  vertex(380,323.37);
  vertex(300,323.37);
  vertex(200,323.37);
  vertex(166.45,325.69);
  vertex(35.64,323.37);
  vertex(33.06,340);
  vertex(6.38,340);
  endShape();
  
  //Disc holder - left
  fill(223,36,80);
  strokeWeight(10);
  beginShape();
  vertex(61.38,302.66);
  vertex(56.47,288);
  vertex(61.38,263.93);
  vertex(231.42,272.51);
  vertex(232.46,305.66);
  vertex(186.54,308.58);
  vertex(142.36,308.58);
  vertex(61.38,302.66);
  endShape();
  
  //Disc holder - right
  fill(223,36,80);
  strokeWeight(10);
  beginShape();
  vertex(279.27,292.43);
  vertex(279.27,258.58);
  vertex(450,260.33);
  vertex(455.52,294.35);
  vertex(369.92,300);
  vertex(332.19,300);
  vertex(296.65,303);
  vertex(279.27,292.43);
  endShape();
  
  //Dis - left
  strokeWeight(10);
  fill(39,140,68,255);
  ellipse(150,263,125,40);
  
  strokeWeight(6);
  fill(255);
  ellipse(150,259,43,15);
  
	strokeWeight(7);
  point(150,259);  

  //Dis - right
  strokeWeight(10);
  fill(39,140,68,255);
  ellipse(360,260,114,39);
  
  strokeWeight(7);
  fill(255);
  ellipse(360,260,37,15);
  
  strokeWeight(6);
  point(360,260); 
  
  //DJ's right arm
 	fill(222,2,2);
  strokeWeight(10);
  beginShape();
  vertex(377,153);
  vertex(347.15,179.43);
	vertex(349.04,195.16);
  vertex(355.48,229.77);
  vertex(366.99,246.9);
  vertex(371.01,250);
  vertex(373.34,255.39);
  vertex(387.07,255.39);
  vertex(392.95,238.4);
  vertex(384.91,217.02);
  vertex(379.53,153.27);
  endShape();
  
  //Arm cover
  noStroke();
  fill(222,2,2);
  beginShape();
  vertex(352.83,181.85);
  vertex(343.86,174.44);
  vertex(354.42,153.97);
  vertex(376,157);
  vertex(375.45,160.8);
  vertex(352.83,186.85);
  endShape();
  
  //Talking movement
  stroke(0);
  strokeWeight(8);
  line(376.47,46.7,396.07,33.87);
  line(383.59,56.06,416,46.68);
  line(384.88,67.64,405.69,70.62);
  line(387.26,79.72,413.94,92.41);
  
  //Disc movement
  curve(94.47,102.35,114.12,96.09,124.45,82.32,130.4,68.8);
  curve(95.68,109.48,120.98,110.48,135.28,90.56,142.5,74.12);
  
  //Side movement
  noFill();
  curve(120.86,170.28,43,170,39.99,229.02,100,204); //left
  curve(120.06,190.06,23.52,164.01,26.72,250,120,250.26); //left
  
  curve(345,160,414.88,132.84,423.47,175.63,363,160); //right
  curve(335,150,434.8,117.6,434.8,194.61,334,180);
  
  //Disc movement - left
  curve(80,270,68.92,240.31,90.77,226.16,100,250);
  curve(80,252,85.25,242.9,95,238,100,245);
  
  curve(208,248,212,231,228,243,212,250);
  curve(218,243,225,224,240,238,220,243);
  
  //Disc movement - right
  curve(319.98,236.82,306.51,227.47,323.49,221.39,323.49,233.26);
  curve(318.18,213.27,309.11,213.64,320.49,209.33,322.72,216.98);
  
  curve(411.78,244.28,425.25,231,433.29,244.28,413,247);
  curve(425,240,438.52,223.35,450,242.45,425.23,242.45);
  
  
  
  
}

function draw() {
 
}