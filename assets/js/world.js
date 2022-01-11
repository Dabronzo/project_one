//class that holds the world properties
class World {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }
    init() {
        console.log("Hello from the world", this);
    }
}