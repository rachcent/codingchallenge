let button;
let img;

function preload(){
  //load images
  img =loadImage("bg_1.jpg");
}

function setup() {
  createCanvas(400, 400);
  createButton("click to change background");
  button.position(19,19);
  button.mousePressed(ChangeBG);
}

function changeBG(){
  let img =loadImage("bg_1.jpg")
}

function draw() {
  background(220);
}
