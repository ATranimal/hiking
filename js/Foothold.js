class Foothold {
    constructor(image, x, y) {
      this.image = image;
      this.x = x;
      this.y = y;
    }  
  
    draw() {
      image(this.image, this.x, this.y);
    }
  
    moveToNewPosition() {
      // LERP
    }
}