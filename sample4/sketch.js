let start;

function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
  start = random(100);
}

function draw() {
  background(224, 212, 186);

  let t = frameCount * 0.03 + start;

  // 움직임
  let swing1 = sin(t) * 8;          // 도형1 좌우
  let updown2 = sin(t + 1.2) * 6;   // 도형2 위아래
  let swing3 = sin(t + 2.1) * 5;    // 도형3 좌우
  let updown4 = cos(t + 0.5) * 7;   // 도형4 위아래

  // 바깥 두 개는 커지고, 안쪽 두 개는 작아지게
  let outerScale = 1 + sin(t * 0.8) * 0.06;
  let innerScale = 1 - sin(t * 0.8) * 0.06;

  // 색 변화
  let amt = (sin(t * 0.6) + 1) / 2;
  let leftColor = lerpColor(color(42, 40, 158), color(10, 18, 110), amt);
  let rightColor = lerpColor(color(252, 176, 190), color(215, 75, 125), amt);

  // 벽 색 변화: 베이지 -> 회색
  let ceilingColor = lerpColor(color(235, 209, 170), color(185, 185, 180), amt);
  let floorColor = lerpColor(color(210, 176, 126), color(170, 170, 165), amt);
  let leftWallColor = lerpColor(color(230, 197, 145), color(180, 180, 175), amt);
  let rightWallColor = lerpColor(color(221, 184, 133), color(165, 165, 160), amt);
  let backWallColor = lerpColor(color(238, 203, 148), color(190, 190, 185), amt);

  noStroke();

  // 천장, 바닥, 벽
  fill(ceilingColor);
  quad(0, 0, 600, 0, 462, 96, 138, 96);

  fill(floorColor);
  quad(138, 274, 462, 274, 600, 400, 0, 400);

  fill(leftWallColor);
  quad(0, 0, 138, 96, 138, 274, 0, 400);

  fill(rightWallColor);
  quad(600, 0, 462, 96, 462, 274, 600, 400);

  fill(backWallColor);
  rect(138, 96, 324, 178);

  // 방 선
  stroke(90, 55, 28);
  strokeWeight(3);
  line(2, 2, 138, 96);
  line(598, 2, 462, 96);
  line(2, 398, 138, 274);
  line(598, 398, 462, 274);
  line(138, 96, 462, 96);
  line(138, 274, 462, 274);
  line(138, 96, 138, 274);
  line(462, 96, 462, 274);
  line(2, 2, 2, 398);
  line(598, 2, 598, 398);

  // 그림자
  noStroke();
  fill(118, 91, 61, 50);
  ellipse(148 + swing1 * 0.6, 306, 92 * outerScale, 50);
  ellipse(270, 286 + updown2 * 0.3, 74 * innerScale, 34);
  quad(
    355 + swing3 * 0.5, 302,
    384 + swing3 * 0.5, 319,
    355 + swing3 * 0.5, 338,
    326 + swing3 * 0.5, 320
  );
  ellipse(472, 301 + updown4 * 0.3, 104 * outerScale, 52);

  // 모빌 줄
  stroke(25);
  strokeWeight(4);
  line(165, 52, 165 + swing1, 205);
  line(282, 76, 282, 115 + updown2);
  line(355, 92, 355 + swing3, 270);
  line(480, 62, 480, 188 + updown4);

  // 도형1: 좌우로 흔들림
  push();
  translate(165 + swing1, 205);
  scale(outerScale);
  noStroke();
  fill(leftColor);
  circle(0, 0, 106);

  fill(80, 73, 214);
  quad(0, -52, 39, 0, 0, 52, -39, 0);

  fill(108, 101, 232);
  quad(0, -36, 26, 0, 0, 36, -26, 0);

  stroke(216, 221, 250, 170);
  strokeWeight(2);
  line(0, -52, 0, 52);
  line(-39, 0, 39, 0);

  noStroke();
  fill(232, 223, 172);
  circle(0, 0, 10);
  pop();

  // 도형2: 위아래로 움직임
  push();
  translate(282, 148 + updown2);
  scale(innerScale);
  noFill();
  strokeWeight(4);

  stroke(10, 126, 245);
  ellipse(0, 0, 82, 64);
  ellipse(0, 0, 70, 54);
  ellipse(0, 0, 58, 44);

  stroke(150, 45, 180);
  ellipse(0, 0, 64, 50);
  ellipse(0, 0, 48, 36);
  ellipse(0, 0, 34, 24);

  stroke(250, 124, 55);
  ellipse(0, 0, 20, 14);
  pop();

  // 도형3: 좌우로 흔들림
  push();
  translate(355 + swing3, 270);
  scale(innerScale);
  noStroke();

  fill(128, 42, 162);
  quad(0, -30, 34, 0, 0, 29, -34, 0);

  fill(168, 84, 200);
  triangle(0, -30, 0, 29, 26, 0);

  fill(97, 31, 132);
  triangle(0, -30, 0, 29, -26, 0);

  fill(241, 224, 188);
  circle(0, 0, 5);
  pop();

  // 도형4: 위아래로 움직임
  push();
  translate(480, 188 + updown4);
  scale(outerScale);
  noStroke();

  fill(rightColor);
  ellipse(0, 0, 142, 60);

  noFill();
  stroke(0, 205, 96);
  strokeWeight(4);
  ellipse(0, 4, 114, 35);
  ellipse(0, 4, 82, 22);
  pop();
}

function keyPressed() {
  if (key === 's') {
    saveGif('mobile_room_animation', 5);
  }
}