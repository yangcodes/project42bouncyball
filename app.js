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
