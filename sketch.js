var br = 10;
var len = 80;

// Player left
var rectL = {
  x: 20,
  y: 170
}

// Player right
var rectR = {
  x: 570,
  y: 170
}

// Ball
var ball = {
  x: 300,
  y: 200,
  durch: 50,
	wall: 25,
  speedX: 2,
  speedY: 3
}


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  // Playground
  fill(255);
  stroke(200);
  strokeWeight(2);
  line(width / 2, 0, width / 2, height);

  stroke(200);
  strokeWeight(2);
  ellipse(width / 2, height / 2, 100, 100);

  noFill();
  stroke(0);
  strokeWeight(4);
  rect(2, 2, 596, 396);

	// Start
  // Ball
  fill(0);
  noStroke();
  ellipse(ball.x, ball.y, ball.durch, ball.durch)

  // Player left and right
  fill(0);
  noStroke();
  rect(rectL.x, rectL.y, br, len);
  rect(rectR.x, rectR.y, br, len);

  // Movement
  // Player controlls
  if (keyIsDown(UP_ARROW)) {
    rectR.y = rectR.y - 10;
  } else if (keyIsDown(DOWN_ARROW)) {
    rectR.y = rectR.y + 10;
  }

  if (keyIsDown(87)) {
    rectL.y = rectL.y - 10;
  } else if (keyIsDown(83)) {
    rectL.y = rectL.y + 10;
  }

  // Ball
  ball.x = ball.x + ball.speedX;
  ball.y = ball. y + ball.speedY;
  
  // Borders
  // Rect borders
  if (rectR.y <= 0) {
    rectR.y = rectR.y + 10;
  } else if (rectR.y >= height - len) {
    rectR.y = rectR.y - 10;
  }

  if (rectL.y <= 0) {
    rectL.y = rectL.y + 10;
  } else if (rectL.y >= height - len) {
    rectL.y = rectL.y - 10;
  }
  
  // Ball borders
  if (ball.x >= width + ball.wall){
  	ball.x = 300;
    ball.y = 200;
  } else if (ball.x <= 0 - ball.wall) {
  	ball.x = 300;
    ball.y = 200;
  } else if (ball.y >= height - ball.wall) {
  	ball.speedY = ball.speedY * -1
  } else if(ball.y <= 0 + ball.wall) {
  	ball.speedY = ball.speedY * -1
  }
  
  // Ball collides with Player
    if (ball.x >= rectR.x - ball.wall && ball.y >= rectR.y && ball.y <= rectR.y + len){
  	ball.speedX = (ball.speedX * -1) -0.2;
  } else if (ball.x <= rectL.x + ball.wall && ball.y >= rectL.y && ball.y <= rectL.y + len) {
  	ball.speedX = (ball.speedX * -1) +0.2;
  }
}