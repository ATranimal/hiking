var imgs_footholds = [];
var imgs_earl_idle = [];
var footpath;

function preload() {
  for (var numberOfRock = 1; numberOfRock <= 4; numberOfRock++) {
    imgs_footholds.push(loadImage("images/rocks/rock" + numberOfRock + ".png"));
  }

  imgs_earl_idle.push(loadImage("images/player/idle1.png"));
  imgs_earl_idle.push(loadImage("images/player/idle2.png"));
}

function setup() {
  createCanvas(800, windowHeight);
  footpath = new Footpath(imgs_footholds);
  early = new Player(imgs_earl_idle);
}

function draw() {
  background("#99BF69");
  footpath.drawFootholds();
  early.draw();

  if (mouseIsPressed) {
    footpath.moveToNextScreen();
  }
}
