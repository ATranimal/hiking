class Footpath {
    constructor(imgs_foothold) {
      this.imgs_footholds = imgs_footholds;
      this.footholds = [];
      this.screenCounter = 1;
  
      this.generateInitialFootpath();
    }
  
    generateInitialFootpath() {
      const horizontalDistanceFromCenter = 50;
      const verticalDistanceBetweenFootholds = 90;
      const numberOfFootholdsToGenerate = 8;
  
      for(var indexOfFoothold = 0; indexOfFoothold < numberOfFootholdsToGenerate; indexOfFoothold++) {
        const randomIndexForImage = int(random(1, imgs_footholds.length));
  
        const footHoldX = indexOfFoothold % 2 
          ? width/2 - horizontalDistanceFromCenter
          : width/2 + horizontalDistanceFromCenter;
        const footHoldY = (numberOfFootholdsToGenerate - 1 - indexOfFoothold) * verticalDistanceBetweenFootholds;
  
        const tempFoothold = new Foothold(
          this.imgs_footholds[randomIndexForImage],
          footHoldX,
          footHoldY
        );
  
        this.footholds.push(tempFoothold);
      }
    }
  
    drawFootholds() {
      this.footholds.forEach(foothold => {
        foothold.draw();
      });
    }
  
    moveToNextScreen() {
      clear();

      this.footholds.splice(0, this.footholds.length - 2);

      this.screenCounter += 1;
    }
  }
  
  