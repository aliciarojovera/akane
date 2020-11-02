class Hero {

  constructor(ctx, heroPosX, heroPosY, heroImage) {
      
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

      


  }


  init() {
    this.heroInstance = new Image()
    this.heroInstance.src = `img/${this.imageName}`
  }
    
  draw() {
    this.ctx.drawImage(this.heroInstance, this.positionx, this.positiony, this.heroWith, this.heroHeight)
  }
  
  move(dir) {
  
    if ((this.positionx + (this.heroWith)) <= this.canvasSize.w && this.positionx > 0) {
      dir === 'left' ? this.positionx -= 20 : null
      dir === 'right' ? this.positionx += 20 : null
    }
    
    if (this.positiony + (this.heroHeight) <= this.canvasSize.h && this.positiony > 0) {
      dir === 'up' ? this.positiony -= 20 : null
      dir === 'down' ? this.positiony += 20 : null
    }
    
    if ((this.positionx + (this.heroWith)) <= this.canvasSize.w) {
      dir === 'right' ? this.positionx += 20 : null
    }
if (this.positionx > 0) {
     dir === 'left' ? this.positionx -= 20 : null
}
    
    if (this.positiony + (this.heroHeight) <= this.canvasSize.h) {
      dir === 'down' ? this.positiony += 20 : null
     }
    if (this.positiony > 0) {
      dir === 'up' ? this.positiony -= 20 : null
    }
    
    


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


