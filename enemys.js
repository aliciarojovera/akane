class Enemys {
    constructor(ctx, speed, damage, score, enemySizew, enemySizeh , enemyImage ) {
        this.ctx = ctx  
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.score = score
        this.damage = damage
        this.enemyPosX = this.getRandomArbitrary(0, this.canvasSize.h)
        this.enemyPosY =0
        this.enemySizew = enemySizew;
        this.enemySizeh = enemySizeh;
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
        if  (this.enemyPosX < akaneApp.hero.positionx){
            this.enemyPosX += this.speed;
        }
        if  (this.enemyPosX > akaneApp.hero.positionx){
            this.enemyPosX -= this.speed;
        }
        if (this.enemyPosY < akaneApp.hero.positiony) {
            this.enemyPosY += this.speed;
        }
         if (this.enemyPosY > akaneApp.hero.positiony) {
            this.enemyPosY -= this.speed;
         }
        
    }
    
}


