class RouleauGazon {

	constructor( posX, posy, size) {
		this.x = posX;
		this.y= posy;
		this.life = 1;
		this.startX = this.x;
		this.lastCol = 0;
		this.lastRow = 0;

		if(size > 2){
			this.maxX = this.x+450;
		}else{
			this.maxX = this.x+430;
		}

		let columnCount = 10;
		let rowCount= 3;
		let refreshDelay = 100;
		let loopInColumns = true;
		let scale = size;

		this.image = "images/Rouleau.png";

		this.tiledImage = new TiledImage(this.image,
											columnCount, rowCount,
											refreshDelay, loopInColumns,
											scale);

		this.tiledImage.changeCol(0);
		this.tiledImage.changeRow(0);

	}

	tick() {

		if(this.life >= 0){
			this.x +=SPEED_TOURBE;
			if((this.x - this.startX) % 30 == 0){
				if(this.lastCol == 9){
					this.lastCol=0;
					this.lastRow+=1;
				}
				else{
					this.lastCol++;
				}
				this.tiledImage.changeCol(this.lastCol);
				this.tiledImage.changeRow(this.lastRow);
			}

			this.tiledImage.tick(this.x, this.y, ctx);

			if(this.x >= this.maxX){
				this.life = 0;
			}
		}
		return this.life > 0;
	}
}