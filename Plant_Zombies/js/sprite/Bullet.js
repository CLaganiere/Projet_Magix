class Bullet {

	constructor( posX, posY, size, speed) {
        this.x = posX + 15;
        this.tabPosY = [35, 100, 165, 242, 310, 388 ];
		this.posTabY = posY;
		this.y= this.tabPosY[posY];
		this.bulletAlive = true;
		this.life = 2;
		this.stade = 0;
        this.countTick = 0;
        this.speed = speed;

		let columnCount = 10;
		let rowCount= 2;
		let refreshDelay = 100;
		let loopInColumns = true;
		let scale = size;
		this.lastCol=null;
		this.lastRow=null;

		this.image = "images/CommandoPlant.png";

		this.tiledImage = new TiledImage(this.image,
											columnCount, rowCount,
											refreshDelay, loopInColumns,
											scale);

		this.tiledImage.changeCol(1);
		this.tiledImage.changeRow(1);
	}

	tick() {
    
        this.x += this.speed;

		if(this.bulletAlive){

			for (let i = 0; i < spriteListZombies.length; i++) {
                let posZombieX = spriteListZombies[i].getX();
                let posZombieY = spriteListZombies[i].getPosTabY();
        
                if(posZombieY == this.posTabY &&  this.x >= posZombieX - 15 && this.x <= posZombieX + 15){
                    spriteListZombies[i].decreaseLife(1);
                    this.tiledImage.changeCol(2);
                    this.tiledImage.changeRow(1);
                    this.life--;
                }
            }
            
            if( this.life == 1 ){
                this.tiledImage.changeCol(3);
                this.tiledImage.changeRow(1);
                this.bulletAlive = false;
            }
        }
        
		this.tiledImage.tick(this.x, this.y, ctx);
		
        if(this.x > 900){
            this.bulletAlive = false;
        }

		return this.bulletAlive;
	}

	getX(){
	 	return this.x;
	}

	getY(){
	 	return this.y;
	}
	
}