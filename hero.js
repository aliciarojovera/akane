class Hero {

  constructor(ctx, heroPosX, heroPosY, heroImage) {
    this.isMoving = false;
    this.direction = '';
    this.ctx = ctx;
    this.positionx = heroPosX;
    this.positiony = heroPosY;
    this.heroWith = 90;
    this.heroHeight = 90;
    this.imageName = heroImage
    this.heroInstance = undefined
    this.init()
      this.nodamage=false
    this.canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }
    this.animateArray= [this.imageName = "0.png",
     this.imageName = "1.png",
     this.imageName = "2.png",
     this.imageName = "3.png",
     this.imageName = "4.png",
     this.imageName = "5.png",
     this.imageName = "6.png",
     this.imageName = "7.png",
     this.imageName = "8.png",
     this.imageName = "9.png"]

  }


  init() {
    this.heroInstance = new Image()
    this.heroInstance.src = `img/SamuraiLight/Walk/${this.imageName}`
  }
    
  draw() {
    this.ctx.drawImage(this.heroInstance, this.positionx, this.positiony, this.heroWith, this.heroHeight)
  }
  animate() {

    setInterval(() => {
     animatedArray.forEach(elm => {
       return elm
     });
     
  
        }, startingScreen.frames)
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
    console.log('algo')
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


