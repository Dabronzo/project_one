
var character = document.querySelector(".character");
var spritesheet = document.querySelector(".spritesheet");

var x = 90;
var y = 34;
var direction = [];
var speed = 1;

const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right"
}

const actions ={
    attack: "attack"
}

const keys = {
    87: directions.up,
    83: directions.down,
    65: directions.left,
    68: directions.right,
    32: actions.attack
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

const attack_movement = () => {
    var sprite = document.getElementById("sprite");
    
    sprite.style.background = "url('assets/images/bow_attack.png') no-repeat no-repeat";


}


const caracter_movement = () => {

    var held_direction = direction[0]
    if(held_direction){
        if(held_direction === actions.attack) {attack_movement()}
        if(held_direction === directions.right) {x += speed;}
        if(held_direction === directions.left) {x -= speed;}
        if(held_direction === directions.up) {y -= speed;}
        if(held_direction === directions.down) {y += speed;}
        character.setAttribute("facing", held_direction)
        

        character.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
    character.setAttribute("walking", held_direction ? "true" : "false");
}

const step = () => {
    caracter_movement();
    window.requestAnimationFrame(() => {
       step();
    })
 }
 step(); //kick off the first step!
