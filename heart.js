class Heart{
    constructor(ctx, heartImage) {
        this.ctx = ctx
          this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.heartPosX =this.getRandomArbitrary(50, this.canvasSize.w-50)
        this.heartPosY = this.getRandomArbitrary(50, this.canvasSize.h-50)
         this.heartSizew = 20;
        this.heartSizeh = 20;
        this.imageName = heartImage;
        this.getRandomArbitrary()
        this.heartInstance = undefined        
        this.init()

              
    }
     getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
          }
        

      init(){ 
        this.heartInstance = new Image()
        this.heartInstance.src = `img/${this.imageName}`          
        }
        
         draw() {
        this.ctx.drawImage(this.heartInstance, this.heartPosX, this.heartPosY, this.heartSizew, this.heartSizeh)
  

    }
}