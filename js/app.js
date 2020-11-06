
let akaneApp = {
    ctx: undefined,
    canvasTag: undefined,
    frames: 0,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    hero:undefined,
    keys: {
        left: 'a',
        right: 'd',
        up: 'w',
        down: 's',
        space: ' ',
        enter: 'Enter',
        r:'r',
      
    },
    arrayEnemys: [],
    arrayHearts: [],
    arrayBoots: [],  
    arraySlug: [],     
    levelToDifficulty: 100,
    levelToDifficulty2: 50,
    vidas:5,
    score: 0,
    scoreHealth: 0,
    scoreEnemy1: 0,
    scoreEnemy2: 0,
    fps:60,
    speedEnemy: 1,
    inicio: true,
    reseteo:false,

    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.createHero()
        
        
        this.createHealth()
        this.createGameOver()
        this.createBackground()
        this.setEventListeners()
        this.createMenu()
    
      
    },


    start() {
        
        this.scoreScreen()
        this.Interval = setInterval(() => {
            this.song1Sound()
            this.frames > 50000 ? this.frames = 0 : this.frames++
            if (this.frames % this.levelToDifficulty2 === 0) {
            this.createEnemy2()  
            }
            if (this.frames % this.levelToDifficulty === 0) {
            this.createEnemy()  
            }
            if (this.frames % 50 === 0) {
             this.createHeart()
            }

             if (this.frames % 250 === 0) {
             this.createBoots()
            }
           
             if (this.frames % 100 === 0) {
             this.createSlug()
            }
           
            this.hero.move()                
            this.setDifficulty()
            this.collisionEnemy()
            this.collisionHeart()
            this.collisionBoots()
            this.collisionSlug()
            this.drawAll()       
            this.gameOver()
        }, 150- this.fps)
},

    setDifficulty() {
        if (this.frames % 300 === 0 && this.levelToDifficulty>20) {
            this.levelToDifficulty -= 20
        }
         if (this.frames % 302 === 0) {
            this.speedEnemy +=1
        }

    },

    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth -20,
            h: window.innerHeight -20
        }
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)

    },
    createMenu() {
        this.menu =new Menu(this.ctx, 0, 0, 'fondoInicio.jpg', this.canvasSize.w, this.canvasSize.h)
    },
    initmenu() {
        
        this.Interval = setInterval(() => {
            
            if (this.inicio === true) {
                this.menu.draw()

                this.ctx.font = '20px "Press Start 2P"';
            
        
                this.ctx.fillText(`PRESS ENTER TO START`, this.canvasSize.w / 2, this.canvasSize.h / 2 - 150)  
                this.ctx.fillStyle = '#161d0b';
                this.ctx.font = '40px "Press Start 2P"';
                this.ctx.fillText(`A K A N E`, this.canvasSize.w / 2, this.canvasSize.h / 2 ) 
                
        
       }
            }, 150 - this.fps)
         
        
    },
    createHero() {
    
        this.hero = new Hero(this.ctx, 300, 300)
      
    
    },

createGameOver() {
    this.gameover = new GameOver(this.ctx, 0, 0, 'negro.jpg', this.canvasSize.w, this.canvasSize.h)
    this.heroemuerto = new GameOver(this.ctx,this.canvasSize.w / 2-350, this.canvasSize.h / 2-140, 'ninjamuerto.png', 200, 200)
    },

    createBackground() {
        this.background = new Background(this.ctx, 0, 0,'background.jpeg', this.canvasSize.w, this.canvasSize.h)
    },

    createHealth() {
        this.health1 = new Health(this.ctx, 20, 20, 'vida.png')
        this.health2 = new Health(this.ctx, 45, 20, 'vida.png')
        this.health3 = new Health(this.ctx, 70, 20, 'vida.png')
        this.health4 = new Health(this.ctx, 95, 20, 'vida.png')
        this.health5 = new Health(this.ctx, 120, 20, 'vida.png')
        this.health6 = new Health(this.ctx, 145, 20, 'vida.png')
        this.health7 = new Health(this.ctx, 170, 20, 'vida.png')
        this.health8 = new Health(this.ctx, 195, 20, 'vida.png')
        this.health9 = new Health(this.ctx, 220, 20, 'vida.png')
        this.health10 = new Health(this.ctx, 245, 20, 'vida.png')
        this.nohealth1 = new Health(this.ctx, 20, 20, 'sinvida.png')
        this.nohealth2 = new Health(this.ctx, 45, 20, 'sinvida.png')
        this.nohealth3 = new Health(this.ctx, 70, 20, 'sinvida.png')
        this.nohealth4 = new Health(this.ctx, 95, 20, 'sinvida.png')
        this.nohealth5 = new Health(this.ctx, 120, 20, 'sinvida.png')
        this.nohealth6 = new Health(this.ctx, 145, 20, 'sinvida.png')
        this.nohealth7 = new Health(this.ctx, 170, 20, 'sinvida.png')
        this.nohealth8 = new Health(this.ctx, 195, 20, 'sinvida.png')
        this.nohealth9 = new Health(this.ctx, 220, 20, 'sinvida.png')
        this.nohealth10 = new Health(this.ctx, 245, 20, 'sinvida.png')
    },


    createEnemy() {  
        
        //       if (this.frames % 340 === 0 && this.levelToDifficulty >= 1001) {

        //     this.levelToDifficulty -= 1000
        // }
            

    this.arrayEnemys.push(new Enemys(this.ctx, 3, 1, 100, 80, 80, 'zombiecorre.png', 10, 'zombieataca.png',8,'zombiecorreizq.png',10,'zombieatacaizq.png',8 ));

     
    },


    createEnemy2() {
        this.arrayEnemys.push(new Enemy2(this.ctx, this.speedEnemy, 2, 200, 130, 130, 'robotcorre.png', 8, 'robotataca.png', 8,'robotcorreizq.png', 8, 'robotatacaizq.png', 8));
    },



 createHeart() {    

            this.arrayHearts.push(new Heart(this.ctx, 'corazon.png',20,20));
    },
 
 createBoots() {    

            this.arrayBoots.push(new Boots(this.ctx, 'botas.png',50,50));
    },
 
 createSlug() {    

            this.arraySlug.push(new Slug(this.ctx,'babosa.png' ,50,50));
    },
 
    scoreScreen() {
        this.ctx.font = '20px "Press Start 2P"';
        this.ctx.fillStyle = "#331536"
        this.ctx.fillText(`SCORE: ${this.score}`, this.canvasSize.w-250, 40)
},



setEventListeners() {
        document.onkeydown = e => {
            e.key === this.keys.left ? this.hero.changeDirection('left') : null          
            e.key === this.keys.right ? this.hero.changeDirection('right') : null            
            e.key === this.keys.up ? this.hero.changeDirection('up') : null     
            e.key === this.keys.down ? this.hero.changeDirection('down') : null
            e.key === this.keys.space ? this.hero.hit() : null
           
           
           if (e.key === this.keys.r && this.vidas<= 0) {
            this.reseteo= true
            this.reset()
          
    }
        
           if (e.key === this.keys.enter) {
               this.inicio = false;
               this.start()
 
          
    }
        }
    
     document.onkeyup = e => {
            e.key === this.keys.left ? this.hero.stop() : null          
            e.key === this.keys.right ? this.hero.stop() : null            
            e.key === this.keys.up ? this.hero.stop() : null     
            e.key === this.keys.down ? this.hero.stop() : null
            
        }    
    },


    collisionHeart() {
 for (i = 0; i < this.arrayHearts.length; i++){

           if (this.hero.positionx < this.arrayHearts[i].heartPosX + this.arrayHearts[i].heartSizew &&
           this.hero.positionx + this.hero.heroWith > this.arrayHearts[i].heartPosX &&
           this.hero.positiony< this.arrayHearts[i].heartPosY + this.arrayHearts[i].heartSizeh &&
           this.hero.heroHeight + this.hero.positiony > this.arrayHearts[i].heartPosY) {
               if (this.vidas <= 9) {
                     this.healthSound()
                     this.vidas += 1
                     this.score += 50
                     this.scoreHealth +=50
                 }
               this.arrayHearts.splice(i, 1)
             }
                }
    },


    collisionBoots() {
    
 for (i = 0; i < this.arrayBoots.length; i++){

           if (this.hero.positionx < this.arrayBoots[i].heartPosX + this.arrayBoots[i].heartSizew &&
           this.hero.positionx + this.hero.heroWith > this.arrayBoots[i].heartPosX &&
           this.hero.positiony< this.arrayBoots[i].heartPosY + this.arrayBoots[i].heartSizeh &&
           this.hero.heroHeight + this.hero.positiony > this.arrayBoots[i].heartPosY) {
              
            this.ninjarunnigSound()
             this.hero.boots()
                          
            this.arrayBoots.splice(i, 1)
             }
                }
    },


    collisionSlug() {
    
 for (i = 0; i < this.arraySlug.length; i++){

           if (this.hero.positionx < this.arraySlug[i].heartPosX + this.arraySlug[i].heartSizew &&
           this.hero.positionx + this.hero.heroWith > this.arraySlug[i].heartPosX &&
           this.hero.positiony< this.arraySlug[i].heartPosY + this.arraySlug[i].heartSizeh &&
           this.hero.heroHeight + this.hero.positiony > this.arraySlug[i].heartPosY) {
              
            this.slugSound()
            this.hero.slug()
                        
            this.arraySlug.splice(i, 1)
             }
                }
    },


    collisionEnemy() {

    for (i = 0; i < this.arrayEnemys.length; i++){

             if (this.hero.positionx < this.arrayEnemys[i].enemyPosX + this.arrayEnemys[i].enemySizew &&
           this.hero.positionx+ this.hero.heroWith > this.arrayEnemys[i].enemyPosX &&
           this.hero.positiony< this.arrayEnemys[i].enemyPosY + this.arrayEnemys[i].enemySizeh &&
           this.hero.heroHeight + this.hero.positiony > this.arrayEnemys[i].enemyPosY) {
                 if (this.vidas >0 && this.hero.nodamage ===false && this.hero.isAttacking === false){
                    this.arrayEnemys[i].hit()
                     this.vidas -= this.arrayEnemys[i].damage
                     if (this.arrayEnemys[i].damage === 2) {
                         this.robotAttackSound()
                     }
                     if (this.arrayEnemys[i].damage === 1) {
                         this.zombieAttackSound()
                     }
                     this.hero.invulnerability()                   
                 }
                 if (this.vidas > 0 && (this.hero.isAttacking === true)) {
                     if (this.arrayEnemys[i].score === 200) {
                         this.scoreEnemy2 += 200
                         this.score += this.arrayEnemys[i].score
                     }
                     if (this.arrayEnemys[i].score === 100) {
                         this.scoreEnemy1 += 100
                         this.score += this.arrayEnemys[i].score
                          
                    
                    

                     } 
                     this.arrayEnemys.splice(i, 1)
                      this.heroAttackSound()
                     

                 }
             }
                }                  
    },
    destroyEnemy() { 
            this.arrayEnemys.pop()
     },
              
    drawHealth(){
        switch (this.vidas) {
            case 1:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.nohealth7.draw()
                this.nohealth6.draw()
                this.nohealth5.draw()
                this.nohealth4.draw()
                this.nohealth3.draw()
                this.nohealth2.draw()
                this.health1.draw()
            break
            case 2:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.nohealth7.draw()
                this.nohealth6.draw()
                this.nohealth5.draw()
                this.nohealth4.draw()
                this.nohealth3.draw()
                this.health2.draw()
                this.health1.draw()
            break
            case 3:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.nohealth7.draw()
                this.nohealth6.draw()
                this.nohealth5.draw()
                this.nohealth4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
            break
            case 4:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.nohealth7.draw()
                this.nohealth6.draw()
                this.nohealth5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
            break
            case 5:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.nohealth7.draw()
                this.nohealth6.draw()
                this.health5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
            break
            case 6:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.nohealth7.draw()
                this.health6.draw()
                this.health5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
            break
            case 7:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.nohealth8.draw()
                this.health7.draw()
                this.health6.draw()
                this.health5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
            break
            case 8:
                this.nohealth10.draw()
                this.nohealth9.draw()
                this.health8.draw()
                this.health7.draw()
                this.health6.draw()
                this.health5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
            break
            case 9:
                this.nohealth10.draw()
                this.health9.draw()
                this.health8.draw()
                this.health7.draw()
                this.health6.draw()
                this.health5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
            break
            case 10:
                this.health10.draw()
                this.health9.draw()
                this.health8.draw()
                this.health7.draw()
                this.health6.draw()
                this.health5.draw()
                this.health4.draw()
                this.health3.draw()
                this.health2.draw()
                this.health1.draw()
            break

        }
    },

    drawBackground() {
        this.background.draw()

},            




    gameOver() {
        if (this.vidas <= 0) {
            this.clearScreen()
            this.gameover.draw()
            this.heroemuerto.draw()
            this.ctx.font = '50px "Press Start 2P"';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillText('GAME OVER', this.canvasSize.w / 2 - 240, this.canvasSize.h / 2 - 300);
            this.ctx.font =  '20px "Press Start 2P"';
            this.ctx.fillText(` TAKING HEALTH SCORE: ${this.scoreHealth}`, this.canvasSize.w / 2-240, this.canvasSize.h / 2-150)
            this.ctx.fillText(` KILLING ZOMBIE SCORE: ${this.scoreEnemy1}`, this.canvasSize.w / 2-240, this.canvasSize.h / 2-100)
            this.ctx.fillText(` KILLING ROBOT SCORE: ${this.scoreEnemy2}`, this.canvasSize.w / 2-240,this.canvasSize.h / 2-50)
            this.ctx.font =  '50px "Press Start 2P"';
            this.ctx.fillText(` TOTAL SCORE: ${this.score}`, this.canvasSize.w / 2-400, this.canvasSize.h / 2+100)
        this.ctx.font =  '30px "Press Start 2P"';
             this.ctx.fillText(`PRESS 'R' TO RESTART`, this.canvasSize.w / 2-300, this.canvasSize.h / 2+200)
            
            clearInterval(this.Interval)
            
          

        }

          
        },


    reset() {
        
        if (this.reseteo === true) {
            this.vidas = 5
            this.arrayEnemys = []
            this.arrayHearts = []
            this.arraySlug = []
            this.arrayBoots = []
            this.score = 0       
            this.scoreEnemy1=0
            this.scoreEnemy2=0
            this.scoreHealth=0       
            this.levelToDifficulty= 100,
                this.levelToDifficulty2 = 50,
                    this.speedEnemy= 1,
            this.reseteo = false
            this.start()
        }
    },
    
    drawAll() {
        
        this.clearScreen()
        this.drawBackground()        
       
        for (i = 0; i < this.arrayHearts.length; i++) {
            this.arrayHearts[i].draw() 
        }
        for (i = 0; i < this.arrayBoots.length; i++) {
            this.arrayBoots[i].draw() 
        }

        for (i = 0; i < this.arraySlug.length; i++) {
            this.arraySlug[i].draw() 
        }
        for (i = 0; i < this.arrayEnemys.length; i++){
            this.arrayEnemys[i].drawAll()
        }

        this.hero.drawAllHero()
        
        this.drawHealth()
        
        
        this.scoreScreen()
    
    },
 clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    heroAttackSound() {
    let heroAttack = document.querySelector('#heroAttack')
    heroAttack.play()
},

healthSound(){
    
    let getHeart = document.querySelector('#getHeart')
    getHeart.play()
    },


song1Sound(){
    
    let song1 = document.querySelector('#song1')
    song1.play()
    },

// song2Sound(){
    
//     let song2 = document.querySelector('#song2')
//     song2.play()
//     },

robotAttackSound(){
    
    let robotAttack = document.querySelector('#robotAttack')
    robotAttack.play()
    },

zombieAttackSound(){

let zombieAttack = document.querySelector('#zombieAttack')
zombieAttack.play()
},


slugSound(){

let slug = document.querySelector('#slug')
slug.play()
    },


ninjarunnigSound(){

let ninjarunnig = document.querySelector('#ninjarunnig')
ninjarunnig.play()
},


}

window.onload = () => {
   
    akaneApp.initmenu();
   
  
    akaneApp.init('myCanvas');




}
