//class that holds the world properties
class World {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }
    init() {
        const map = new Image();
        map.onload = () => {
            this.ctx.drawImage(map, 0, 0)
        };
        map.src = "/assets/images/demo_lower.png";

        //position of the player
        const x = 0;
        const y = 4;

        //Game Objects
        const player = new GameObject({
            x: 0,
            y: 4,
            src: "assets/images/walk_skeleton.png"
        })

        setTimeout(() => {
            player.sprite.draw(this.ctx);
        }, 200)
        
    }
}