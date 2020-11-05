class GameOver {
    constructor(ctx, gamePosX, gamePosY, gameImage, gameWidth, gameHeight) {
      
        this.ctx = ctx;
        this.positionx = gamePosX;
        this.positiony = gamePosY;
        this.gameWith = gameWidth,
        this.gameHeight =  gameHeight;
        this.imageName3 = gameImage
        this.gameInstance = undefined
        this.init()

      


    }


    init() {
        this.gameInstance = new Image()
        this.gameInstance.src = `../img/${this.imageName3}`
    }
    
    draw() {
        this.ctx.drawImage(this.gameInstance, this.positionx, this.positiony, this.gameWith, this.gameHeight)

    }
}