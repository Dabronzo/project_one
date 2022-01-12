class OverworldMap {
    constructor(config) {

        //Holds the gameObject to draw player and npc's on the screen.
        this.gameObjects = config.gameObjects;

        //Two layers (Images) will be created
        //lower layer will be the floor, tiles
        //Upper will be roofs and top of things
        this.lowerImage = new Image();

        this.lowerImage.src = config.lowerSrc;

        this.upperImage =  new Image();
        this.upperImage.src = config.upperSrc;
    }

    //Methods to draw the images(maps)
    //Lower
    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0);
    }
}

//Instantiating some maps here for now
//Object to hold all the maps of the game
window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "assets/images/demo_lower.png",
        upperSrc: "assets/images/demo_upper.png",
        gameObjects: {
            player: new GameObject({
                x: 0,
                y: 4,
                src: "assets/images/walk_skeleton.png"
            })
        }

    }
}