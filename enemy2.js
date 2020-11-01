class Enemy2 {
    constructor(ctx,speed , enemyImage ) {
        this.ctx = ctx  
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.enemy2PosX = this.getRandomArbitrary(0, this.canvasSize.h)
        this.enemy2PosY =0
        this.enemy2Sizew = 130;
        this.enemy2Sizeh = 130;
        this.speed2 = speed;
        this.imageName2 = enemyImage;
        this.getRandomArbitrary()
        this.enemyInstance2 = undefined        
        this.init2()

              
    }
     getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
          }
        

      init2(){ 
        this.enemyInstance2 = new Image()
        this.enemyInstance2.src = `img/${this.imageName2}`          
        }
        
    draw() {
        this.move()    
        this.ctx.drawImage(this.enemyInstance2, this.enemy2PosX, this.enemy2PosY, this.enemy2Sizew, this.enemy2Sizeh)
         }
    
    
    
    move() {
        if  (this.enemy2PosX < akaneApp.movx){
            this.enemy2PosX += this.speed2;
        }
        if  (this.enemy2PosX > akaneApp.movx){
            this.enemy2PosX -= this.speed2;
        }
        if (this.enemy2PosY < akaneApp.movy) {
            this.enemy2PosY += this.speed2;
        }
         if (this.enemy2PosY > akaneApp.movy) {
            this.enemy2PosY -= this.speed2;
         }
        
    }
    
}
