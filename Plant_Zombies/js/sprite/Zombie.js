class Zombie {

	constructor(posY, size, action) {
		this.x = CANVAS_WIDTH;
		this.tabPosY = [75, 140, 205, 280, 355, 430 ];
		this.posTabY = posY;
		this.y = this.tabPosY[posY];
		this.life = 3;
		this.action = action;
		this.countTick=0;

		let columnCount = 10;
		let rowCount= 1;
		let refreshDelay = 100;
		let loopInColumns = true;
		let scale = size;
		this.lastCol=null;
		this.lastRow=null;

		this.image = "images/zombie42.png";

		this.tiledImage = new TiledImage(this.image,
											columnCount, rowCount,
											refreshDelay, loopInColumns,
											scale);

		this.tiledImage.changeCol(0);
		this.tiledImage.changeRow(0);
	}
	

	tick () {
		this.countTick++;
		this.x-=SPEED_ENNEMI;

		this.tiledImage.tick(this.x, this.y, ctx);
		if(this.countTick % 10 == 0){
			this.countTick = 0;
			
			switch(this.stade){	//Sprite Normal mouvement
				case 0:
					this.tiledImage.changeCol(5);
					this.tiledImage.changeRow(0);
					break;
					
				case 1:
					this.tiledImage.changeCol(4);
					this.tiledImage.changeRow(0);
					break;
					
				case 2:
					this.tiledImage.changeCol(3);
					this.tiledImage.changeRow(0);
					break;
				
				case 3:
					this.tiledImage.changeCol(2);
					this.tiledImage.changeRow(0);
					break;
				
				case 4:
					this.tiledImage.changeCol(1);
					this.tiledImage.changeRow(0);
					break;
				case 5:
					this.tiledImage.changeCol(0);
					this.tiledImage.changeRow(0);
					break;
				
			}

			if(this.stade  < 5){
				this.stade++;
			}
			else{
				this.stade = 0;
			}
		}

		if( this.x <= 240){
			this.life = 0
		}

		if(!this.life && this.x > 240){
			if(this.action == "QUIT"){
				document.getElementById("form-Quit").submit();
			}
			else if(this.action == "TRAINING"){
				document.getElementById("form-Training").submit();
			}
			else if(this.action == "PVP"){
				document.getElementById("form-Pvp").submit();
			}
		}

		return this.life > 0;
	}

	getX(){
		return this.x;
	}

	getPosTabY(){
		return this.posTabY;
	}

	decreaseLife(hit){
		this.life -= hit;
	}
}