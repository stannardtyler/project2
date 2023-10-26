//like the mouse, keyboards can also be a form of interaction

let x;
let col; 

let vert;
let hori;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('game');
  x = 0;
  col = 255;
  vert = 200;
  hori = 200;
}

function draw() {
  background(220);
  fill(0);
  rectMode(CENTER);
  rect(hori, vert, 50);

  fill(col);
  if (keyIsPressed) {
    ellipse(width / 2, height / 2, 100);
    x++;
  }

  console.log(x);
  
  
  //keyCode helps for game-like inputs since it only records when the keyIsDown()
   if (keyIsDown(UP_ARROW)) {
    vert--;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    vert++;
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    hori++;
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    hori--;
  }
}

function keyPressed() {
  x++;
}

function keyPressed() {
  //keyCodes are another great way to create interaction depending on specific key input. Once in the keyPressed() it only runs once. Can be used in the draw loop
  if (keyCode === UP_ARROW) {
    col = 0;
  }

  if (keyCode === DOWN_ARROW) {
    col = 100;
  }

  if (keyCode === LEFT_ARROW) {
    col = 200; 
  }

  if (keyCode === RIGHT_ARROW) {
    col = 255;
  }
}
