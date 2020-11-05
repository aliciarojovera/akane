class Hero {

  constructor(ctx, heroPosX, heroPosY) {
    this.speed = 7;
    this.isMoving = false;
    this.isAttacking = false;
    this.direction = 'right';
    this.ctx = ctx;
    this.positionx = heroPosX;
    this.positiony = heroPosY;
    this.heroWith = 90;
    this.heroHeight = 90;
    // this.InitialPosition =  "../img/ninjacorre.png";
    this.imageStand = new Image();
    this.imageStand.src = "./img/ninjaquieto.png";
    this.imageStand.frames = 10;
    this.imageStand.framesIndex = 0;

    this.imageStandL = new Image();
    this.imageStandL.src = "./img/ninjaquietoizq.png";
    this.imageStandL.frames = 10;
    this.imageStandL.framesIndex = 0;


    this.imageMove = new Image();
    this.imageMove.src = "./img/ninjacorre.png";
    this.imageMove.frames = 10;
    this.imageMove.framesIndex = 0;


    this.imageMoveL = new Image();
    this.imageMoveL.src = "./img/ninjacorreizq.png";
    this.imageMoveL.frames = 10;
    this.imageMoveL.framesIndex = 0;



    this.imageAttack = new Image();
    this.imageAttack.src = "./img/ninjaAtaca.png";
    this.imageAttack.frames = 9;
    this.imageAttack.framesIndex = 0;


    this.imageAttackL = new Image();
    this.imageAttackL.src = "./img/ninjaatacaizq.png";
    this.imageAttackL.frames = 9;
    this.imageAttackL.framesIndex = 0;



    this.heroInstance = undefined
    this.nodamage=false
    this.canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }


  }
// animate que se pare con el numero de frames max 
  drawAllHero() {
    
    
    if (this.isAttacking === false) {

      if (this.isMoving === false &&(this.direction === 'right' || this.direction === 'up'|| this.direction === 'down')) {
        this.drawStand(akaneApp.frames)
        
      } else if (this.isMoving === false && this.direction === 'left') {
        this.drawStandL(akaneApp.frames)
      } else {
        if (this.direction === 'right' || this.direction === 'up'  ) {
          this.drawMove(akaneApp.frames)
        } else if (this.direction === 'left' || this.direction === 'down') {
           this.drawMoveL(akaneApp.frames)
          }
      }
    }
    if (this.isAttacking ===true && (this.direction === 'right' || this.direction === 'up' || this.direction === 'down')){
       this.drawAttack(akaneApp.frames)
    } else if (this.isAttacking === true && this.direction === 'left') {
      this.drawAttackL(akaneApp.frames)
    }
  }
  drawStand(frames) {

    this.ctx.drawImage(
      this.imageStand,
      this.imageStand.framesIndex * Math.floor(this.imageStand.width / this.imageStand.frames),
      0,
      Math.floor(this.imageStand.width / this.imageStand.frames),

      this.imageStand.height,
      this.positionx,
      this.positiony,
      this.heroWith =45,
      this.heroHeight= 90)
    this.animateStand(frames)

  }

animateStand(frames) {

    if (frames % 0.5 == 0) {
      this.imageStand.framesIndex++;
    }
    if (this.imageStand.framesIndex > this.imageStand.frames - 1) {
      this.imageStand.framesIndex = 0;
    }
}
    drawStandL(frames) {

    this.ctx.drawImage(
      this.imageStandL,
      this.imageStandL.framesIndex * Math.floor(this.imageStandL.width / this.imageStandL.frames),
      0,
      Math.floor(this.imageStandL.width / this.imageStandL.frames),

      this.imageStandL.height,
      this.positionx,
      this.positiony,
      this.heroWith =45,
      this.heroHeight= 90)
    this.animateStandL(frames)

  }

animateStandL(frames) {

    if (frames % 0.5 == 0) {
      this.imageStandL.framesIndex++;
    }
    if (this.imageStandL.framesIndex > this.imageStandL.frames - 1) {
      this.imageStandL.framesIndex = 0;
    }
  }



 
  drawMove(frames) {
   

      this.ctx.drawImage(
        this.imageMove,
        this.imageMove.framesIndex * Math.floor(this.imageMove.width / this.imageMove.frames),
        0,
        Math.floor(this.imageMove.width / this.imageMove.frames),
        this.imageMove.height,
        this.positionx,
        this.positiony,
        this.heroWith = 70,
        this.heroHeight)
  
  

    this.animateMove(frames)
    this.move()
  }
  animateMove(frames) {

    if (frames % 0.5 == 0) {
      this.imageMove.framesIndex++;
    }
    if (this.imageMove.framesIndex > this.imageMove.frames - 1) {
      this.imageMove.framesIndex = 0;
    }
  }

  
  drawMoveL(frames) {
    


      this.ctx.drawImage(
        this.imageMoveL,
        this.imageMoveL.framesIndex * Math.floor(this.imageMoveL.width / this.imageMoveL.frames),
        0,
        Math.floor(this.imageMoveL.width / this.imageMoveL.frames),
        this.imageMoveL.height,
        this.positionx,
        this.positiony,
        this.heroWith = 70,
        this.heroHeight)
 

    this.animateMoveL(frames)
    this.move()
  }
  animateMoveL(frames) {

    if (frames % 0.5 == 0) {
      this.imageMoveL.framesIndex++;
    }
    if (this.imageMoveL.framesIndex > this.imageMoveL.frames - 1) {
      this.imageMoveL.framesIndex = 0;
    }
  }




 drawAttack(frames) {


    this.ctx.drawImage(
      this.imageAttack,
      this.imageAttack.framesIndex * Math.floor(this.imageAttack.width / this.imageAttack.frames),
      0,
      Math.floor(this.imageAttack.width / this.imageAttack.frames),

      this.imageAttack.height,
      this.positionx,
      this.positiony,
      this.heroWith=100,
      this.heroHeight=100 )
    this.animateAttack(frames)
   }
  animateAttack(frames) {

    if (frames % 0.5 == 0) {
      this.imageAttack.framesIndex++;
    }
    if (this.imageAttack.framesIndex > this.imageAttack.frames - 1) {
      this.imageAttack.framesIndex = 0;
    }
  }


   drawAttackL(frames) {


    this.ctx.drawImage(
      this.imageAttackL,
      this.imageAttackL.framesIndex * Math.floor(this.imageAttackL.width / this.imageAttackL.frames),
      0,
      Math.floor(this.imageAttackL.width / this.imageAttackL.frames),

      this.imageAttackL.height,
      this.positionx,
      this.positiony,
      this.heroWith=100,
      this.heroHeight=100 )
    this.animateAttackL(frames)
   }
  animateAttackL(frames) {

    if (frames % 0.5 == 0) {
      this.imageAttackL.framesIndex++;
    }
    if (this.imageAttackL.framesIndex > this.imageAttackL.frames - 1) {
      this.imageAttackL.framesIndex = 0;
    }
  }


  move() {
    if (this.isMoving === true) {
      if ((this.positionx + (this.heroWith)) <= this.canvasSize.w && this.positionx > 0) {
        this.direction === 'left' ? this.positionx -=  this.speed: null
        this.direction === 'right' ? this.positionx +=  this.speed: null
      }

      if (this.positiony + (this.heroHeight) <= this.canvasSize.h && this.positiony > 0) {
        this.direction === 'up' ? this.positiony -=  this.speed: null
        this.direction === 'down' ? this.positiony +=  this.speed: null
      }

      if ((this.positionx + (this.heroWith)) <= this.canvasSize.w) {
        this.direction === 'right' ? this.positionx +=  this.speed: null
      }
      if (this.positionx > 0) {
        this.direction === 'left' ? this.positionx -=  this.speed: null
      }

      if (this.positiony + (this.heroHeight) <= this.canvasSize.h) {
        this.direction === 'down' ? this.positiony +=  this.speed: null
      }
      if (this.positiony > 0) {
        this.direction === 'up' ? this.positiony -=  this.speed : null
      }

    }
  }

  stop() {
    this.isMoving = false;
  }

  changeDirection(direction) {
  this.isMoving = true;
  this.direction = direction;
}


  invulnerability() {

     this.nodamage = true
    function invul(bar) {
      bar.nodamage=false
    }

    let var2 = setTimeout(invul, 1000, this)


}

  boots() {


    function sizeDown(popino) {
      popino.speed = 7
    }
    this.speed = 15
    let myvar = setTimeout(sizeDown,5000,this);

    myvar

  }



  slug() {


    function sizeDown(popino) {
      popino.speed = 7
    }
    this.speed = 2
    let myvar = setTimeout(sizeDown,5000,this);

    myvar

  }



  hit() {


    function sizeDown(popino) {
      popino.isAttacking = false
    }
    this.isAttacking = true
    let myvar = setTimeout(sizeDown,500,this);

    myvar

  }




}


