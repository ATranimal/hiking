class Player {
    constructor(imgs_earl_idle) {
        this.imgs_earl_idle = imgs_earl_idle;
    }

    draw () {
        image(this.imgs_earl_idle[0], 50, 50);
    }
}