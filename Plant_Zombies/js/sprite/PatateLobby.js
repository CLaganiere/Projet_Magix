class PatateLobby {

	constructor( posX, posY, size) {
		this.x = posX;
		this.y= posY;
		this.plantAlive = true;
		this.life = 10;
		this.stade = 0;
		this.countTick = 0;

		let columnCount = 10;
		let rowCount= 4;
		let refreshDelay = 100;
		let loopInColumns = true;
		this.scale = size;

		this.image = "images/Mini_Patate.png";

		this.tiledImage = new TiledImage(this.image,
											columnCount, rowCount,
											refreshDelay, loopInColumns,
											this.scale);

		this.tiledImage.changeCol(3);
		this.tiledImage.changeRow(1);
	}

	tick() {
		this.x +=SPEED_PATATE;

		if(this.countTick % 8 ==0){
			this.countTick = 0;
			
			switch(this.stade){	//Sprite Normal mouvement
				case 0:
					this.tiledImage.changeCol(3);
					this.tiledImage.changeRow(1);
					break;
					
				case 1:
					this.tiledImage.changeCol(4);
					this.tiledImage.changeRow(1);
					break;
					
				case 2:
					this.tiledImage.changeCol(5);
					this.tiledImage.changeRow(1);
					break;
				
				case 3:
					this.tiledImage.changeCol(6);
					this.tiledImage.changeRow(1);
					break;
				
				case 4:
					this.tiledImage.changeCol(7);
					this.tiledImage.changeRow(1);
					break;
				case 5:
					this.tiledImage.changeCol(8);
					this.tiledImage.changeRow(1);
					break;
				
				case 6:
					this.tiledImage.changeCol(9);
					this.tiledImage.changeRow(1);
				break;
				
				case 7:
					this.tiledImage.changeCol(0);
					this.tiledImage.changeRow(2);
				break;
			}

			if(this.stade < 6){
				this.stade++;
			}
			else{
				this.stade = 0;
			}
		}

		this.tiledImage.tick(this.x, this.y, ctx);
		
		this.countTick++;
		return this.x < POS_X_DESTROY;
	}

	getX(){
	 	return this.x;
	}

	getY(){
	 	return this.y;
	}
	
}