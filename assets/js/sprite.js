class Sprite {
    constructor(config){

        //Set up the Image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () =>{
            //flag used to dont start to draw before is loaded
            this.isLoaded = true;
        }

        //Shadow
        this.shadow = new Image();
        this.useShadow = true; // config.useShadow || "false"
        if (this.useShadow){
            this.shadow.src = "assets/images/shadow.png";
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;

        }

        // Config Animations and start position
        this.animations = config.animations || {
            "idle-down": [
                [0,2]
            ],
            "walk-down": [
                [1,2], [2,2], [3,2], [4,2], [5,2], [6,2], [7,2], [8,2], [0,2]
            ]
        }
        //to catch the current animation and setting one as default
        //The default is just a key to the value [0,0]
        this.curremtAnimation = "walk-down";//config.curremtAnimation || "idle-down";
        //to know which frame is being showing
        this.currentAnimationFrame = 0;


        //Frame animation

        //will be the amount of frames until the next cicle, how bigger is this number more slow
        //the animation will look like
        this.animationFramelimit = config.animationFramelimit || 16;
        this.animationFrameProgress = this.animationFramelimit;

        

        //Ref to the gameObject
        this.gameObject = config.gameObject;
    }
    //Get method to get the coordinandes to be used on the drawl
    //Gets the key of the animation and the values of them and return
    get frame() {
        return this.animations[this.curremtAnimation][this.currentAnimationFrame]
    }

    //Method to check the frame on counter and reset the counter
    updateAnimationProgress(){
        //Downtick frame progress
        if(this.animationFrameProgress > 0){
            this.animationFrameProgress -= 1;
            return;
        }

        //Reset the counter
        this.animationFrameProgress = this.animationFramelimit;
        this.currentAnimationFrame += 1;

        if (this.frame === undefined){
            this.curremtAnimationFrame = 0;
        }
    }

    //Draw method
    draw(ctx){
        const x = this.gameObject.x * 16;
        const y = this.gameObject.y * 16 - 18;

        this.isShadowLoaded && ctx.drawImage(this.shadow,
            0, 0,
            32, 32,
            x, y,
            64, 64
            )
        const [framex, framey] = this.frame;

        this.isLoaded && ctx.drawImage(this.image,
            framex * 64, framey * 64, //Start cutting
            64, 64,//Stop cutting
            x, y, // position
            64, 64// scale
        )

        this.updateAnimationProgress();
    }
}