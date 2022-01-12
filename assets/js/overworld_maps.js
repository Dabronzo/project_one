class OverworldMap {
    constructor(config) {

        //Holds the gameObject to draw player and npc's on the screen.
        this.gameObject = config.gameObject;

        //Two layers (Images) will be created
        //lower layer will be the floor, tiles
        //Upper will be roofs and top of things
        this.lowerImage = new Image();

        this.lowerImage.src = config.lowerSrc;

        this.upperImgae =  new Image();
        this.upperImage.src = config.upperSrc;
    }

    //Methods to draw the images(maps)
    //Lower
    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImgae, 0, 0);
    }
}