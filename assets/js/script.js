
var character = document.querySelector(".character");

var x = 0;
var y = 0;
var direction = [];

const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right"
}

const keys = {
    87: directions.up,
    83: directions.down,
    65: directions.left,
    68: directions.right
}

document.addEventListener("keydown", (e) => {
    var dir = keys[e.which]
    if (dir && direction.indexOf(dir) === -1){
        direction.unshift(dir)
        
    }
})

document.addEventListener("keyup", (e) => {
    var dir = keys[e.which];
    var index = direction.indexOf(dir);
    if(index > -1){
        direction.splice(index, 1);
    }
})