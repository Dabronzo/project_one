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
                [0,0]
            ]
        }
        //to catch the current animation and setting one as default
        //The default is just a key to the value [0,0]
        this.curremtAnimation = config.curremtAnimation || "idle-down";
        //to know which frame is being showing
        this.currentAnimationFrame = 0;
        

        //Ref to the gameObject
        this.gameObject = config.gameObject;
    }
    //Get method to get the coordinandes to be used on the drawl
    //Gets the key of the animation and the values of them and return


    //Draw method
    draw(ctx){
        const x = this.gameObject.x * 16 + 8;
        const y = this.gameObject.y * 16 - 18;

        this.isShadowLoaded && ctx.drawImage(this.shadow,
            0, 0,
            32, 32,
            x, y,
            32, 32
            )

        this.isLoaded && ctx.drawImage(this.image,
            0, 0, //Start cutting
            32, 32,//Stop cutting
            x, y, // position
            32, 32// scale
        )

    }
}