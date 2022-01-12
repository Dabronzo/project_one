//class that holds the world properties
class World {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        //empty map to be defined later
        this.map = null;
    }

    //Game Loop function
    //function that fire every single frame
    startGameLoop() {
        const step = () => {

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            //using the map created to draw
            //upper layer:
            this.map.drawLowerImage(this.ctx);

            //Place the characters
            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx);
            })

            //lower layer:
            this.map.drawUpperImage(this.ctx);

            requestAnimationFrame(() => {
                step();
            })

        }
        step();
    }

    init() {
        //Instantiate a new class OverworldMap with the window method
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);

        this.startGameLoop();
        
    }
}