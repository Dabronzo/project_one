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
        
        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow,
                0,//start point on x
                0,//start point on y
                32,//finish point x
                32,//finish point y
                x * 16,//positioning
                y * 16 - 16,//positioning
                64,//scale
                64//scale
            )
        }
        shadow.src = "/assets/images/shadow.png";

        const player = new Image();
        player.onload = () => {
            this.ctx.drawImage(
                player,
                0,//start point on x
                0,//start point on y
                64,//finish point x
                64,//finish point y
                x * 16,//positioning
                y * 16 - 18,//positioning
                64,//scale
                64//scale
            )
        };
        player.src = "/assets/images/skeleton_walk.png";
    }
}