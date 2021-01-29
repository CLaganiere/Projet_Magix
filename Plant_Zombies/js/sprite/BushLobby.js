class BushLobby {

	constructor(posX, posY, size) {
		this.x = posX;
		this.y = posY;
        this.life = 1;
        
        let columnCount = 1;
		let rowCount= 1;
		let refreshDelay = 100;
		let loopInColumns = true;
		this.scale = size; 

        this.image = "images/bushSprite.png"

		this.tiledImage = new TiledImage(this.image,
											columnCount, rowCount,
											refreshDelay, loopInColumns,
											this.scale);

		this.tiledImage.changeCol(0);
		this.tiledImage.changeRow(0);
	}
	

	tick () {

        this.tiledImage.tick(this.x, this.y, ctx);
        
        if(spriteLoginZombies.length==0 && spriteLoginPlant.length==0){
            this.life=0;
        }
        
		return this.life > 0;
	}
    
}