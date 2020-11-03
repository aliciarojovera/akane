class Enemys {
    constructor(ctx, speed, damage, score, enemySizew, enemySizeh , enemyImage ) {
        this.ctx = ctx  
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.score = score
        this.damage = damage
        this.caseScreen = 
            this.getRandomArbitrary(1, 4)
        
            
        this.enemyPosX = undefined
        this.enemyPosY = undefined
        this.enemysAppear()
        this.enemySizew = enemySizew;
        this.enemySizeh = enemySizeh;
        this.speed = speed;
        this.imageName = enemyImage;
        this.getRandomArbitrary()
        this.enemyInstance = undefined        
        this.init()
      
              
    }
     getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
          }
        

      init(){ 
        this.enemyInstance = new Image()
        this.enemyInstance.src = `img/${this.imageName}`          
        }
        
    draw() {
        this.move()    
        this.ctx.drawImage(this.enemyInstance, this.enemyPosX, this.enemyPosY, this.enemySizew, this.enemySizeh)
         }
    
    enemysAppear() {
    console.log(this.caseScreen)
        switch(this.caseScreen){
            case 1:
            this.enemyPosX = this.getRandomArbitrary(0, this.canvasSize.w)
            this.enemyPosY = 0
            break
            case 2:
            this.enemyPosX = this.getRandomArbitrary(0, this.canvasSize.w)
            this.enemyPosY = this.canvasSize.h
            break
            case 3:
            this.enemyPosY = this.getRandomArbitrary(0, this.canvasSize.h)
            this.enemyPosX = 0
            break
            case 4:
            this.enemyPosY = this.getRandomArbitrary(0, this.canvasSize.h)
            this.enemyPosX = this.canvasSize.w
            break
        }
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

