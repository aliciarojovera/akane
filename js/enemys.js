class Enemys {
    constructor(ctx, speed, damage, score, enemySizew, enemySizeh, enemyImage, frames, imageAttack, framesAttack) {
        this.ctx = ctx  
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.score = score
        this.damage = damage
        this.caseScreen = 
            this.getRandomArbitrary(1, 4)
        this.isAttacking=false
            
        this.enemyPosX = undefined
        this.enemyPosY = undefined
        this.enemysAppear()
        this.enemySizew = enemySizew;
        this.enemySizeh = enemySizeh;
        this.speed = speed;
        this.imageName = enemyImage;
        this.getRandomArbitrary()      
        
        this.imageMove = new Image()
        this.imageMove.src = `../img/${this.imageName}`  
        this.imageMove.frames = frames;
        this.imageMove.framesIndex = 0;

        this.imageName2 = imageAttack;
        this.imageAttack = new Image()
        this.imageAttack.src = `../img/${this.imageName2}`  
        this.imageAttack.frames = framesAttack;
        this.imageAttack.framesIndex = 0;
    }
    

    drawAll() {
        if (this.isAttacking===true ){
              this.drawAttack(akaneApp.frames)

        }
        else {
              this.drawMove(akaneApp.frames)

            
        }
}


        drawMove(frames) {
            
            
            this.ctx.drawImage(
            this.imageMove,
            this.imageMove.framesIndex * Math.floor(this.imageMove.width / this.imageMove.frames),
            0,
            Math.floor(this.imageMove.width / this.imageMove.frames),
            
            this.imageMove.height,
            this.enemyPosX, 
            this.enemyPosY,
            this.enemySizew,
            this.enemySizeh)
            this.animateMove(frames)
            this.move()
        } animateMove(frames) {

            if (frames % 0.5 == 0) {
            this.imageMove.framesIndex++;
            }
            if (this.imageMove.framesIndex > this.imageMove.frames - 1) {
            this.imageMove.framesIndex = 0;
            }
        }
       
    
    drawAttack(frames) {
                 
            this.ctx.drawImage(
            this.imageAttack,
            this.imageAttack.framesIndex * Math.floor(this.imageAttack.width / this.imageAttack.frames),
            0,
            Math.floor(this.imageAttack.width / this.imageAttack.frames),
            
            this.imageAttack.height,
            this.enemyPosX, 
            this.enemyPosY,
            this.enemySizew,
            this.enemySizeh)
            this.animateAttack(frames)
            this.move()
    }
      
     animateAttack(frames) {

            if (frames % 0.5 == 0) {
            this.imageAttack.framesIndex++;
            }
            if (this.imageAttack.framesIndex > this.imageAttack.frames - 1) {
            this.imageAttack.framesIndex = 0;
            }
        }



     getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
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
    hit() {


    function sizeDown(popino) {
      popino.isAttacking = false
    }
    console.log('algo')
    this.isAttacking = true
    let myvar = setTimeout(sizeDown,500,this); 
    
    myvar
    
  }
    
}

