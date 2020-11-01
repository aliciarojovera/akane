class Enemys {
    constructor(ctx,speed , enemyImage ) {
        this.ctx = ctx  
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.enemyPosX = this.getRandomArbitrary(0, this.canvasSize.h)
        this.enemyPosY =0
        this.enemySizew = 70;
        this.enemySizeh = 70;
        this.speed = speed;
        this.imageName = enemyImage;
        this.getRandomArbitrary()
        this.enemyInstance = undefined        
        this.init()

              
    }
     getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
          }
        

      init(){ 
        this.enemyInstance = new Image()
        this.enemyInstance.src = `img/${this.imageName}`          
        }
        
    draw() {
        this.move()    
        this.ctx.drawImage(this.enemyInstance, this.enemyPosX, this.enemyPosY, this.enemySizew, this.enemySizeh)
         }
    
    
    
    move() {
        if  (this.enemyPosX < akaneApp.movx){
            this.enemyPosX += this.speed;
        }
        if  (this.enemyPosX > akaneApp.movx){
            this.enemyPosX -= this.speed;
        }
        if (this.enemyPosY < akaneApp.movy) {
            this.enemyPosY += this.speed;
        }
         if (this.enemyPosY > akaneApp.movy) {
            this.enemyPosY -= this.speed;
         }
        
    }
    
}

