 function setup() {
   createCanvas(900, 640);
   background(224, 244, 250);
 }

 function draw() {
   //background
   fill('#9DACB2');
   noStroke();
   rect(0, 150, 100, 500);
   rect(95, 222, 50, 500);
   rect(150, 250, 200, 500);
   rect(210, 180, 50, 500);
   rect(392, 226, 100, 500);
   rect(598, 206, 50, 500);
   rect(786, 336, 100, 500);
   rect(857, 310, 100, 500);

   //clouds
   fill('#E0E0E0');
   ellipse(84, 93, 55, 55);
   ellipse(147, 84, 150, 60);
   ellipse(197, 85, 80, 70);
   ellipse(247, 93, 70, 40);
   ellipse(54, 110, 50, 30);
   ellipse(226, 115, 60, 30);
   ellipse(129, 105, 60, 30);
   ellipse(131, 53, 50, 20);
   rect(59, 104, 200, 12);

   fill('#E0E0E0');
   ellipse(440, 136, 60, 30);
   ellipse(494, 107, 70, 40);
   ellipse(558, 115, 210, 40);
   ellipse(488, 130, 140, 60);
   ellipse(541, 130, 100, 50);
   ellipse(620, 113, 50, 60);
   ellipse(620, 129, 100, 60);
   ellipse(580, 100, 100, 60);
   rect(440, 134, 200, 12);

   fill('#E0E0E0');
   ellipse(874, 60, 70, 40);
   ellipse(810, 110, 100, 30);
   ellipse(880, 100, 160, 40);
   ellipse(880, 100, 200, 60);

   //house 1
   stroke('#9AD4D6');
   strokeWeight(6);
   fill('#F2FDFF');
   rect(30, 300, 200, 300);

   //door 1
   strokeWeight(2);
   arc(70, 460, 60, 80, PI, 0);
   line(40, 460, 40, 500);
   line(100, 460, 100, 500);
   rect(40, 500, 60, 50);
   line(40, 510, 100, 510);
   line(40, 520, 100, 520);
   line(40, 530, 100, 530);
   line(40, 540, 100, 540);

   //house 1 windows and trim
   stroke('#9AD4D6');
   strokeWeight(6);
   line(110, 300, 110, 600);
   line(30, 400, 230, 400);
   stroke('#9AD4D6');
   strokeWeight(2);
   line(160, 300, 160, 600);
   line(180, 300, 180, 600);
   line(110, 500, 230, 500);
   line(30, 310, 230, 310);
   rect(50, 320, 40, 60);
   line(50, 350, 90, 350);
   rect(120, 320, 30, 60);
   line(120, 350, 150, 350);
   line(160, 320, 180, 320);
   line(160, 350, 180, 350);
   line(160, 380, 180, 380);
   rect(190, 320, 30, 60);
   line(190, 350, 220, 350);
   rect(120, 425, 30, 60);
   line(120, 455, 150, 455);
   rect(190, 425, 30, 60);
   line(190, 455, 220, 455);
   line(160, 425, 180, 425);
   line(160, 455, 180, 455);
   line(160, 485, 180, 485);

   //roof 1
   stroke('#9AD4D6');
   strokeWeight(4);
   triangle(30, 300, 130, 200, 230, 300);
   stroke('#9AD4D6');
   strokeWeight(1);
   triangle(50, 290, 130, 215, 210, 290);
   rect(105, 250, 50, 30);
   triangle(75, 280, 95, 270, 95, 280);
   triangle(165, 280, 165, 270, 185, 280);

   //house 2
   stroke('#564787');
   fill('#DBCBD8');
   strokeWeight(6);
   rect(230, 240, 200, 300);
   stroke('#564787');
   line(330, 240, 330, 540);

   //door 2
   strokeWeight(2);
   rect(250, 380, 60, 100);
   rect(260, 390, 40, 80);
   rect(250, 480, 60, 50);
   line(250, 490, 310, 490);
   line(250, 500, 310, 500);
   line(250, 510, 310, 510);
   line(250, 520, 310, 520);

   //house 2 windows and trim
   strokeWeight(6);
   stroke('#564787');
   line(230, 350, 430, 350);
   strokeWeight(2);
   stroke('#564787');
   line(230, 350, 430, 350);
   line(400, 240, 400, 540);
   line(330, 240, 330, 540);
   line(365, 240, 365, 540);
   line(400, 240, 400, 540);
   line(230, 250, 430, 250);
   rect(250, 260, 60, 80);
   line(250, 280, 310, 280);
   rect(340, 260, 15, 80);
   line(340, 300, 355, 300);
   line(366, 300, 400, 300);
   line(366, 260, 400, 260);
   line(366, 340, 400, 340);
   rect(407, 260, 14, 80);
   line(407, 300, 420, 300);
   rect(338, 375, 20, 60);
   line(340, 405, 358, 405);
   rect(370, 375, 25, 60);
   line(370, 405, 395, 405);
   rect(406, 375, 17, 60);
   line(406, 405, 421, 405);
   line(330, 470, 430, 470);

   //roof 2
   strokeWeight(4);
   fill('#DBCBD8');
   triangle(230, 240, 330, 140, 430, 240);
   strokeWeight(1);
   triangle(250, 230, 330, 155, 410, 230);
   rect(310, 190, 40, 30);
   line(310, 205, 350, 205);

   //house 3
   stroke('#F7B05B');
   fill('#F7CE5B');
   strokeWeight(6);
   stroke('#F7B05B');
   rect(430, 280, 200, 300);

   //door 3
   strokeWeight(2);
   stroke('#F7B05B');
   arc(470, 460, 60, 80, PI, 0);
   line(440, 460, 440, 510);
   line(500, 460, 500, 510);
   rect(440, 500, 60, 50);
   line(440, 510, 500, 510);
   line(440, 520, 500, 520);
   line(440, 530, 500, 530);
   line(440, 540, 500, 540);

   //house 3 windows and trim
   strokeWeight(6);
   line(510, 280, 510, 580);
   line(430, 400, 630, 400);
   strokeWeight(2);
   stroke('#F7B05B');
   line(430, 400, 630, 400);
   line(730, 240, 730, 540);
   line(510, 280, 510, 580);
   line(550, 280, 550, 580);
   line(590, 280, 590, 580);
   line(430, 300, 510, 300);
   rect(450, 315, 40, 60);
   line(450, 345, 490, 345);
   rect(520, 300, 20, 80);
   line(550, 300, 590, 300);
   line(550, 340, 590, 340);
   line(550, 380, 590, 380);
   rect(599, 300, 20, 80);
   line(520, 340, 540, 340);
   line(599, 340, 619, 340);
   rect(520, 423, 20, 60);
   line(520, 450, 540, 450);
   rect(560, 423, 20, 60);
   line(560, 450, 580, 450);
   rect(600, 423, 20, 60);
   line(600, 450, 620, 450);
   line(510, 500, 630, 500);

   //roof 3
   strokeWeight(4);
   fill('#F7CE5B');
   triangle(430, 280, 530, 180, 630, 280);
   strokeWeight(1);
   triangle(450, 270, 530, 195, 610, 270);
   rect(510, 230, 40, 30);
   line(510, 245, 550, 245);
   triangle(510, 220, 530, 208, 550, 220);

   //house 4
   stroke('#B09E99');
   strokeWeight(6);
   fill('#FEE9E1')
   rect(630, 240, 200, 300);
   line(730, 240, 730, 540);
   line(630, 350, 830, 350);

   //door 4
   strokeWeight(2);
   rect(650, 380, 60, 100);
   rect(660, 390, 40, 80);
   rect(650, 480, 60, 50);
   line(650, 490, 710, 490);
   line(650, 500, 710, 500);
   line(650, 510, 710, 510);
   line(650, 520, 710, 520);

   //house 4 windows and trim
   strokeWeight(2);
   line(760, 240, 760, 540);
   line(800, 240, 800, 540);
   line(630, 260, 830, 260);
   rect(650, 280, 60, 50);
   line(650, 300, 710, 300);
   rect(740, 270, 10, 70);
   line(740, 300, 750, 300);
   rect(770, 270, 20, 70);
   line(770, 300, 790, 300);
   rect(810, 270, 10, 70);
   line(810, 300, 820, 300);
   rect(740, 380, 12, 60);
   line(740, 410, 752, 410);
   rect(770, 380, 20, 60);
   line(770, 410, 790, 410);
   rect(808, 380, 12, 60);
   line(810, 410, 820, 410);
   line(730, 465, 830, 465);

   //roof 4
   strokeWeight(4);
   triangle(630, 240, 730, 140, 830, 240);
   strokeWeight(1);
   triangle(650, 230, 730, 155, 810, 230);
   rect(700, 190, 60, 30);
   line(700, 210, 760, 210);

   //foreground
   strokeWeight(8)
   stroke(220)
   line(0, 540, 900, 500)
   fill(137, 172, 19);
   noStroke();
   quad(0, 540, 900, 500, 900, 700, 0, 700);

   //text
   textSize(50);
   fill("white");
   textFont('Futura');
   text('SAN FRANCISCO', 260, 100);

   textSize(40);
   fill("white");
   textFont('Brush Script MT');
   text('Painted Ladies', 360, 140);
 }