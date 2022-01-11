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
            idleUp: [
                [0,0]
            ]
        }
        //to catch the current animation and setting one as default
        //The default is just a key to the value [0,0]
        this.curremtAnimation = config.curremtAnimation || "idleUp";
        //to know which frame is being showing
        this.currentAnimationFrame = 0;

        //Ref to the gameObject
        this.gameObject = config.gameObject;
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

        this.isLoaded && ctx.drawImage(this.image,
            0, 0, //Start cutting
            64, 64,//Stop cutting
            x, y, // position
            64, 64// scale
        )
    }
}