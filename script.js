var dim = document.getElementById("cabin");
var ctx = dim.getContext("2d");
dim.width = 881;
dim.height = 639;

//Global Variables
let cloud1X = 150;
let sun1Y = 62.03;
let cloud2X = 320;
let name1X = 5;
let doorKnob1X = 386;
let moon1Y = -75;
let name1Y = 15;
sun1Yspeed = 0.2;

// Colour of the sky setting
let skyR = 173;
let skyG = 216;
let skyB = 230;
moon2Yspeed = 0.2;
// Trigger animation
let frame = 0;
requestAnimationFrame(draw);

// Windows
let windowR = 173;
let windowG = 216;
let windowB = 230;

function draw() {
  frame++;

  //sky
  ctx.fillStyle = `rgb(${skyR}, ${skyG}, ${skyB})`;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 315);
  ctx.lineTo(289.02, 310.02);
  ctx.lineTo(421, 227);
  ctx.lineTo(881, 303);
  ctx.lineTo(881, 0);
  ctx.fill();

  //sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(566, sun1Y, 31.02, 0, 2 * Math.PI);
  ctx.fill();

  //moutain#1
  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.moveTo(0, 315);
  ctx.lineTo(135, 40);
  ctx.lineTo(274, 310.27);
  ctx.lineTo(0, 315);
  ctx.fill();

  //moutain#2
  ctx.beginPath();
  ctx.moveTo(191, 150.01);
  ctx.lineTo(281, 13.04);
  ctx.lineTo(404, 227);
  ctx.lineTo(274, 310.27);
  ctx.lineTo(191, 150.01);
  ctx.fill();

  //mountain#3
  ctx.beginPath();
  ctx.moveTo(350, 134);
  ctx.lineTo(454, 17.03);
  ctx.lineTo(567, 166.01);
  ctx.lineTo(701, 24);
  ctx.lineTo(881, 303);
  ctx.lineTo(404, 227);
  ctx.lineTo(350, 134);
  ctx.fill();

  //snow#1
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(105, 100);
  ctx.lineTo(135, 40);
  ctx.lineTo(167, 99);
  ctx.lineTo(105, 100);
  ctx.fill();

  //snow#2
  ctx.beginPath();
  ctx.moveTo(239, 77.01);
  ctx.lineTo(280, 13);
  ctx.lineTo(320, 79);
  ctx.lineTo(246, 77.01);
  ctx.fill();

  //snow#3
  ctx.beginPath();
  ctx.moveTo(454, 17.03);
  ctx.lineTo(492, 68.03);
  ctx.lineTo(412, 64);
  ctx.lineTo(454, 17.03);
  ctx.fill();

  //snow#4
  ctx.beginPath();
  ctx.moveTo(653, 75.01);
  ctx.lineTo(701, 24);
  ctx.lineTo(737, 80);
  ctx.lineTo(653, 75.01);
  ctx.fill();

  //roof
  ctx.fillStyle = "rgb(101, 67, 33)";
  ctx.beginPath();
  ctx.moveTo(259, 417);
  ctx.lineTo(411, 242);
  ctx.lineTo(564, 419);
  ctx.lineTo(259, 417);
  ctx.fill();

  //house
  ctx.fillStyle = "rgb(43, 29, 14)";
  ctx.beginPath();
  ctx.moveTo(259, 639);
  ctx.lineTo(259, 417);
  ctx.lineTo(564, 419);
  ctx.lineTo(556, 639);
  ctx.lineTo(259, 639);
  ctx.fill();

  //door
  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.moveTo(371, 639);
  ctx.lineTo(371, 534.08);
  ctx.lineTo(445, 534.08);
  ctx.lineTo(446, 639);
  ctx.lineTo(371, 639);
  ctx.fill();

  //window#1
  ctx.fillStyle = `rgb(${windowR}, ${windowG}, ${windowB})`;
  ctx.beginPath();
  ctx.moveTo(276, 536);
  ctx.lineTo(277, 454);
  ctx.lineTo(358, 456.01);
  ctx.lineTo(360, 538);
  ctx.lineTo(276, 536);
  ctx.fill();

  //window#2
  ctx.beginPath();
  ctx.moveTo(458, 536);
  ctx.lineTo(460, 454);
  ctx.lineTo(536, 456.01);
  ctx.lineTo(538, 536);
  ctx.lineTo(458, 536);
  ctx.fill();

  //grass 1/2 #1
  ctx.fillStyle = "darkgreen";
  ctx.beginPath();
  ctx.moveTo(0, 639);
  ctx.lineTo(0, 315);
  ctx.lineTo(274, 310.27);
  ctx.lineTo(404, 227);
  ctx.lineTo(411, 242);
  ctx.lineTo(259, 417);
  ctx.lineTo(259, 639);
  ctx.lineTo(0, 639);
  ctx.fill();

  //grass 1/2 #2
  ctx.beginPath();
  ctx.moveTo(404, 227);
  ctx.lineTo(881, 303);
  ctx.lineTo(881, 639);
  ctx.lineTo(556, 639);
  ctx.lineTo(564, 419);
  ctx.lineTo(411, 242);
  ctx.lineTo(404, 227);
  ctx.fill();

  //door knob
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(doorKnob1X, 591.01, 11, 0, 2 * Math.PI);
  ctx.fill();

  //window#1 detail 1/2 #1
  ctx.beginPath();
  ctx.lineTo(275, 496);
  ctx.lineTo(363, 496);
  ctx.stroke();

  //window#1 detail 1/2 #2
  ctx.beginPath();
  ctx.lineTo(318, 538);
  ctx.lineTo(318, 454);
  ctx.stroke();

  //window#2 detail 1/2 #1
  ctx.beginPath();
  ctx.lineTo(460, 497);
  ctx.lineTo(542, 497);
  ctx.stroke();

  //window#2 detail 1/2 #2
  ctx.beginPath();
  ctx.lineTo(500, 540);
  ctx.lineTo(500, 453);
  ctx.stroke();

  //Image
  var cloudImg = document.getElementById("cloud");
  ctx.drawImage(cloudImg, cloud1X, 0, 90, 90);
  ctx.drawImage(cloudImg, cloud2X, 20, 90, 90);
  //Text
  ctx.font = "15px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Art by a.quan1", name1X, name1Y);

  //ANIMATIONS

  cloud1X = cloud1X + 1;
  requestAnimationFrame(draw);
  sun1Y = sun1Y + 0.2;
  cloud2X = cloud2X - 1;
  name1X = name1X + 1;

  //Loop back to 0
  if (cloud1X >= 881) {
    cloud1X = -75;
  }
  if (cloud2X <= -75) {
    cloud2X = 885;
  }
  if (name1X >= 770) {
    name1X = 770;
    name1Y += 1;
  }
  if (name1Y >= 625) {
    name1Y = 625;
    name1X -= 2;
  }

  if (name1X <= 9 && name1Y == 625) {
    name1X = 9;
  }

  // Sky becomes dark

  if (skyR > 0 && skyG > 0 && skyB > 0) {
    skyR -= 0.2;
    skyG -= 0.2;
    skyB -= 0.2;
  }
  if (frame > 600) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(350, moon1Y, 31.02, 0, 2 * Math.PI);
    ctx.fill();
    //Moon animaiton
    moon1Y += 0.2;
    moon1Y = moon1Y + moon2Yspeed;
  }

  //window animation
  if (windowR > 0 && windowG > 0 && windowB > 0) {
    windowR += 0.2;
    windowG += 0.2;
    windowB -= 0.2;
  }
  //sun rising

  if (moon1Y >= 50) {
    moon2Yspeed -= 0.2;
  }

  sun1Y = sun1Y + sun1Yspeed;
  if (sun1Y >= 600) {
    sun1Yspeed = -0.2;
    sun1Y = 62.03;
  }

  if (sun1Y == 62.03) {
    skyR = 0;
    skyG += 0.2;
    skyB += 0.2;
  }

  if (sun1Y == 62.03) {
    windowR = 173;
    windowG = 216;
    windowB = 230;
  }
}
