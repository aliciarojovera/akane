class Hero {

  constructor(ctx, heroPosX, heroPosY) {
    this.isMoving = false;
    this.direction = '';
    this.ctx = ctx;
    this.positionx = heroPosX;
    this.positiony = heroPosY;
    this.heroWith = 100;
    this.heroHeight = 100;

    this.image = new Image();
    this.image.src = "./img/papacamina.png";
    this.image.frames = 13;
    this.image.framesIndex = 0;
    
    

    this.heroInstance = undefined

      this.nodamage=false
    this.canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }
 

  }


  
  draw(frames) {
    this.ctx.drawImage(
      this.image,
      this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
      0,
      Math.floor(this.image.width / this.image.frames),
      
      this.image.height,
      this.positionx,
      this.positiony,
      this.heroWith,
      this.heroHeight)
    this.animate(frames)
    this.move()
  }
  animate(frames) {

    if (frames % 0.5 == 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex > this.image.frames - 1) {
      this.image.framesIndex = 0;
    }
  }


  move() {
    if (this.isMoving === true) {
      if ((this.positionx + (this.heroWith)) <= this.canvasSize.w && this.positionx > 0) {
        this.direction === 'left' ? this.positionx -= 20 : null
        this.direction === 'right' ? this.positionx += 20 : null
      }
    
      if (this.positiony + (this.heroHeight) <= this.canvasSize.h && this.positiony > 0) {
        this.direction === 'up' ? this.positiony -= 20 : null
        this.direction === 'down' ? this.positiony += 20 : null
      }
    
      if ((this.positionx + (this.heroWith)) <= this.canvasSize.w) {
        this.direction === 'right' ? this.positionx += 20 : null
      }
      if (this.positionx > 0) {
        this.direction === 'left' ? this.positionx -= 20 : null
      }
    
      if (this.positiony + (this.heroHeight) <= this.canvasSize.h) {
        this.direction === 'down' ? this.positiony += 20 : null
      }
      if (this.positiony > 0) {
        this.direction === 'up' ? this.positiony -= 20 : null
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
    
        function sizeDown(popino) {
  

    popino.heroWith = 90;
    popino.heroHeight = 90;
        }
    var2 
    this.heroWith =200;
    this.heroHeight = 200;
    let myvar = setTimeout(sizeDown,1000,this); 
    
    myvar
    
}


  hit() {


    function sizeDown(popino) {
  

    popino.heroWith = 90;
    popino.heroHeight = 90;
    }
    console.log('algo')
    this.heroWith = 100;
    this.heroHeight = 100;
    let myvar = setTimeout(sizeDown,500,this); 
    
    myvar
    
  }




}


