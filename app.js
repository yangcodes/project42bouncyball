const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

const FPS = 60;
let radius = 50;
let xP, yP;
let xV, yV;

xP = canvasEl.width / 2;
yP = canvasEl.height / 2;
//pixels per frame
xV = Math.floor(Math.random() * 201 + 99) / FPS;
yV = Math.floor(Math.random() * 201 + 99) / FPS;

//coin toss situation
if (Math.floor(Math.random() * 2) === 0) {
  xV = -xV;
}

if (Math.floor(Math.random() * 2) === 0) {
  yV = -yV;
}

//the game loop
function runGame() {
  //moving the ball from the current position
  xP += xV;
  yP += yV;
  //clearing the canvas
  canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);
  //drawing the ball
  canvasContext.beginPath();
  canvasContext.fillStyle = "orange";
  canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasContext.fill();
}

setInterval(runGame, 1000 / FPS);
