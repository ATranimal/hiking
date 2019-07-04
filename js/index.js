var imgs_footholds = [];
var footpath;

function preload() {
  for (var numberOfRock = 1; numberOfRock <= 4; numberOfRock++) {
    imgs_footholds.push(loadImage("images/rocks/rock" + numberOfRock + ".png"));
  }
}

function setup() {
  createCanvas(800, windowHeight);
  footpath = new Footpath();
  background("#99BF69");
}

function draw() {
  footpath.drawFootholds();

  if (mouseIsPressed) {
    footpath.moveToNextScreen();
  }
}
