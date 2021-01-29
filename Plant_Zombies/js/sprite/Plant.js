class Plant {

	constructor( posX, posY, size) {
		this.x = posX;
		this.tabPosY = [60, 125, 190, 270, 340, 420 ];
		this.posTabY = posY;
		this.y= this.tabPosY[posY];
		this.plantAlive = true;
		this.life = 10;
		this.stade = 0;
		this.countTick = 0;
		this.tickShoot = 0;
		this.shooting = false;

		let columnCount = 10;
		let rowCount= 2;
		let refreshDelay = 100;
		let loopInColumns = true;
		this.scale = size;
		this.lastCol=null;
		this.lastRow=null;

		this.image = "images/CommandoPlant.png";

		this.tiledImage = new TiledImage(this.image,
											columnCount, rowCount,
											refreshDelay, loopInColumns,
											this.scale);

		this.tiledImage.changeCol(0);
		this.tiledImage.changeRow(0);
	}

	tick() {

		if(this.plantAlive && this.countTick % 10 ==0){
			this.countTick = 0;

			if(!this.shooting){

				for (let i = 0; i < spriteListZombies.length; i++) {
					let posZombieX = spriteListZombies[i].getX();
					let posZombieY = spriteListZombies[i].getPosTabY();

					if(posZombieY == this.posTabY &&  posZombieX <= 900 && posZombieX >= this.x+35){
						this.tickShoot++;
						if(this.tickShoot % 3 == 0){
							this.tickShoot = 0;
							this.shooting = true;
						}
					}
				}

				switch(this.stade){	//Sprite Normal mouvement
					case 0:
						this.tiledImage.changeCol(0);
						this.tiledImage.changeRow(0);
						break;

					case 1:
						this.tiledImage.changeCol(1);
						this.tiledImage.changeRow(0);
						break;

					case 2:
						this.tiledImage.changeCol(2);
						this.tiledImage.changeRow(0);
						break;

					case 3:
						this.tiledImage.changeCol(3);
						this.tiledImage.changeRow(0);
						break;

					case 4:
						this.tiledImage.changeCol(4);
						this.tiledImage.changeRow(0);
						break;

					case 5:
						this.tiledImage.changeCol(5);
						this.tiledImage.changeRow(0);
						break;
				}

				if(!this.shooting && this.stade < 5){
					this.stade++;
				}
				else{	//More than 5 and is shooting
					this.stade = 0;
				}
			}
			else{ //Is shooting

				switch(this.stade){	//Sprite shooting mouvement
					case 0:
						this.tiledImage.changeCol(8);
						this.tiledImage.changeRow(0);
						break;

					case 1:
						this.tiledImage.changeCol(9);
						this.tiledImage.changeRow(0);
						break;

					case 2:
						this.tiledImage.changeCol(0);
						this.tiledImage.changeRow(1);
						break;

					case 3:
						this.tiledImage.changeCol(2);
						this.tiledImage.changeRow(0);
						spriteListBullet.push(new Bullet(this.x , this.posTabY, this.scale, 2));
						break;
					case 4:
						this.tiledImage.changeCol(0);
						this.tiledImage.changeRow(0);
						break;
				}

				if(this.stade < 4 && this.shooting){
					this.stade++;
				}
				else{
					this.stade = 0;
					this.shooting = false;
				}
			}
		}

		this.tiledImage.tick(this.x, this.y, ctx);

		this.countTick++;
		return this.plantAlive;
	}

	getX(){
	 	return this.x;
	}

	getY(){
	 	return this.y;
	}

}