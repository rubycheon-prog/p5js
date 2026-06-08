function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(248, 245, 235);

  push();
  translate(166, 0);
  scale(0.67);

  noStroke();

  fill(173, 216, 230);
  rect(100, 420, 200, 180);
  stroke(150);
  noFill();
  arc(200, 420, 100, 40, 0, PI);
  noStroke();
  fill(230);
  ellipse(200, 440, 10, 10);

  let skinColor = color(249, 228, 211); 
  let hairColor = color(0);
  fill(60, 40, 30);
  ellipse(120, 350, 90, 90);
  fill(skinColor);
  rect(185, 360, 30, 70);
  arc(200, 420, 80, 25, 0, PI);
  fill(skinColor);
  ellipse(200, 270, 210, 240);
  fill(hairColor);
  arc(200, 265, 220, 240, PI, TWO_PI);
  fill(skinColor);
  triangle(155, 320, 195, 240, 205, 300);
  triangle(210, 300, 230, 240, 250, 300);
  noStroke();
  fill(skinColor);
  push();
  translate(95, 290);  
  rotate(-0.15);      
  ellipse(0, 0, 30, 40);
  pop();
  push();
  translate(305, 290);  
  rotate(0.15);       
  ellipse(0, 0, 30, 40);
  pop();
  noStroke();
  fill(255);
  ellipse(160, 295, 36, 32);
  noFill();
  stroke(80, 50, 30);
  strokeWeight(1);
  arc(160, 285, 40, 18, PI, TWO_PI);
  strokeWeight(2);
  arc(160, 292, 40, 25, PI, TWO_PI);
  strokeWeight(1);
  arc(160, 302, 33, 18, 0, PI);
  noStroke();
  fill(0);
  ellipse(165, 295, 24, 29);
  fill(255);
  ellipse(160, 290, 5, 5);
  ellipse(170, 300, 2.5, 2.5);
  noStroke();
  fill(255);
  ellipse(250, 295, 36, 32);
  noFill();
  stroke(80, 50, 30);
  strokeWeight(1);
  arc(250, 285, 40, 18, PI, TWO_PI);
  strokeWeight(2);
  arc(250, 292, 40, 25, PI, TWO_PI);
  strokeWeight(1);
  arc(250, 302, 33, 18, 0, PI);
  noStroke();
  fill(0);
  ellipse(245, 295, 24, 29); 
  fill(255);
  ellipse(240, 290, 5, 5);
  ellipse(250, 300, 2.5, 2.5);
  stroke(150, 120, 100);
  strokeWeight(1.5);
  noFill();
  line(205, 302, 200, 320);
  line(200, 320, 210, 324);
  noStroke();
  fill(180, 100, 100);
  arc(205, 340, 80, 40, 0, PI);
  fill(255);
  rect(162, 340, 85, 7, 5); 

  stroke(160); // ===== 교정기 =====
  strokeWeight(1.5);
  line(162, 343, 247, 344); 
  line(170, 340, 170, 346);
  line(185, 340, 185, 346);
  line(200, 340, 200, 346);
  line(215, 340, 215, 346);
  line(230, 340, 230, 346);

  pop();
}