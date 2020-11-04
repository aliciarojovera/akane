class Hero {

  constructor(ctx, heroPosX, heroPosY) {
    this.isMoving = false;
    this.isAttacking = false;
    this.direction = '';
    this.ctx = ctx;
    this.positionx = heroPosX;
    this.positiony = heroPosY;
    this.heroWith = 90;
    this.heroHeight = 90;

    this.imageStand = new Image();
    this.imageStand.src = "../img/ninjaquieto.png";
    this.imageStand.frames = 10;
    this.imageStand.framesIndex = 0;

    this.imageMove = new Image();
    this.imageMove.src = "../img/ninjacorre.png";
    this.imageMove.frames = 10;
    this.imageMove.framesIndex = 0;

    this.imageAttack = new Image();
    this.imageAttack.src = "../img/ninjaAtaca.png";
    this.imageAttack.frames = 9;
    this.imageAttack.framesIndex = 0;



    this.heroInstance = undefined
    this.nodamage=false
    this.canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }


  }

  drawAllHero() {
    if (this.isAttacking === false) {

      if (this.isMoving === false) {
        this.drawStand(akaneApp.frames)
        
      } else {
        this.drawMove(akaneApp.frames)
      }
    }
    if (this.isAttacking ===true){
      console.log('Esty atacando')
      this.drawAttack(akaneApp.frames)
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



  drawMove(frames) {

    // if (this.direction === 'left') {    
    //   ctx.translate(this.canvasSize.w,0);
    //   this.ctx.scale(-1, 1);
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
      // this.ctx.scale(-1, 1);
    // } else {
    //   this.ctx.drawImage(
    //     this.imageMove,
    //     this.imageMove.framesIndex * Math.floor(this.imageMove.width / this.imageMove.frames),
    //     0,
    //     Math.floor(this.imageMove.width / this.imageMove.frames),
    //     this.imageMove.height,
    //     this.positionx,
    //     this.positiony,
    //     this.heroWith = 70,
    //     this.heroHeight)
    // }
  

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



  move() {
    if (this.isMoving === true) {
      if ((this.positionx + (this.heroWith)) <= this.canvasSize.w && this.positionx > 0) {
        this.direction === 'left' ? this.positionx -= 10: null
        this.direction === 'right' ? this.positionx += 10: null
      }

      if (this.positiony + (this.heroHeight) <= this.canvasSize.h && this.positiony > 0) {
        this.direction === 'up' ? this.positiony -= 10: null
        this.direction === 'down' ? this.positiony += 10: null
      }

      if ((this.positionx + (this.heroWith)) <= this.canvasSize.w) {
        this.direction === 'right' ? this.positionx += 10: null
      }
      if (this.positionx > 0) {
        this.direction === 'left' ? this.positionx -= 10: null
      }

      if (this.positiony + (this.heroHeight) <= this.canvasSize.h) {
        this.direction === 'down' ? this.positiony += 10: null
      }
      if (this.positiony > 0) {
        this.direction === 'up' ? this.positiony -= 10 : null
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
    console.log(this.nodamage)
     this.nodamage = true
    function invul(bar) {
      bar.nodamage=false
    }

    let var2 = setTimeout(invul, 1000, this)

    //     function sizeDown(popino) {


    // popino.heroWith = 90;
    // popino.heroHeight = 90;
    //     }
    // var2
    // this.heroWith =200;
    // this.heroHeight = 200;
    // let myvar = setTimeout(sizeDown,1000,this);

    // myvar

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


