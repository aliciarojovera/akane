
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
        space: ' '
    },
    arrayEnemys: [],
    arrayHearts: [],
    movx : 300,
    movy: 300,
    levelToDifficulty: 100,
    levelToDifficulty2: 50,
    vidas:5,
    score: 0,
    scoreHealth: 0,
    scoreenemy1:0,
    scoreenemy2: 0,
    fps:60,
    speedEnemy: 1,


    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.createHero()
        this.createHeart()
        this.createHealth()
        this.createGameOver()
        this.createBackground()
        this.setEventListeners()
        this.scoreScreen()
        this.start()
        
    },

    start() {
        this.Interval = setInterval(() => {

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
           
            this.hero.move()                
            this.setDifficulty()
            this.collisionEnemy()
            this.collisionHeart()
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

    createHero() {
    
        this.hero = new Hero(this.ctx, 300, 300)
      
    
    },

createGameOver() {
        this.gameover = new GameOver(this.ctx, 0, 0,'Game-Over.jpg')
    },

    createBackground() {
        this.background = new Background(this.ctx, 0, 0,'background.jpeg')
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
            

    this.arrayEnemys.push(new Enemys(this.ctx, 3, 1, 100, 80, 80, 'zombiecorre.png', 10, 'zombieataca.png',8 ));

     
    },


    createEnemy2() {
        this.arrayEnemys.push(new Enemy2(this.ctx, this.speedEnemy, 2, 200, 130, 130, 'robotcorre.png', 8, 'robotataca.png', 8));
    },



 createHeart() {    

            this.arrayHearts.push(new Heart(this.ctx, 'corazon.png'));
    },
    scoreScreen() {
        this.ctx.font = '30px serif';
        this.ctx.fillText(`SCORE: ${this.score}`, this.canvasSize.w-250, 40)
},



setEventListeners() {
        document.onkeydown = e => {
            e.key === this.keys.left ? this.hero.changeDirection('left') : null          
            e.key === this.keys.right ? this.hero.changeDirection('right') : null            
            e.key === this.keys.up ? this.hero.changeDirection('up') : null     
            e.key === this.keys.down ? this.hero.changeDirection('down') : null
            e.key === this.keys.space ?this.hero.hit() : null
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
                 if (this.vidas <= 9){
                     this.vidas += 1
                     this.score += 50
                     this.scoreHealth +=50
                 }
               this.arrayHearts.splice(i, 1)
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
                     this.hero.invulnerability()                   
                 }
                 if (this.vidas > 0 && (this.hero.isAttacking === true)) {
                    
                     this.arrayEnemys.splice(i, 1)
                     this.score += this.arrayEnemys[i].score
                     if (this.arrayEnemys[i].score === 200) {
                         this.scoreenemy2 +=200
                     }
                     if (this.arrayEnemys[i].score === 100) {
                         this.scoreenemy1 +=100
                     }
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
            clearInterval(this.Interval)  
        }
          
        },


    
    
    drawAll() {
        
        this.clearScreen()
        this.drawBackground()        
        for (i = 0; i < this.arrayEnemys.length; i++){
            this.arrayEnemys[i].drawAll()
        }
        for (i = 0; i < this.arrayHearts.length; i++) {
            this.arrayHearts[i].draw() 
        }
        this.hero.drawAllHero()
        
        this.drawHealth()
        
        this.scoreScreen()
    
    },
 clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

}

window.onload = () => {
    let button = document.querySelector('button')
    document.querySelector('.start-button').onclick = () => {
        button.classList.add('button')
        button.classList.remove('start-button')
        akaneApp.init('myCanvas');
    };

}