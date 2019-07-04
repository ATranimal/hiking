function preload() {
  // specify width and height of each frame and number of frames
  sprite_sheet = loadSpriteSheet('images/rocks.png', 32, 32, 4);
  explode_animation = loadAnimation(sprite_sheet);

  // load the full sprite sheet for example reference only
  sprite_sheet_image = loadImage('images/rocks.png');
}

function setup() {
  createCanvas(800, 225);
}

function draw() {
  clear();

  // animate the sprite sheet
  animation(explode_animation, 100, 130);

  // show full sheet for example reference
  image(sprite_sheet_image, 250, 40, 256, 64);
}