class ZombieLobby {

	constructor(posX, posY, size) {
		this.x = posX;
		this.y = posY;
        this.life = 1;
        this.stade = 0;
        this.reverse = false;
        this.firstReverse = true;
        this.countTick = 0;

		let columnCount = 10;
		let rowCount= 1;
		let refreshDelay = 100;
		let loopInColumns = true;
		this.scale = size- 0.6; 

		this.image = ["images/zombie12.png", "images/zombie1.png"];

		this.tiledImage = new TiledImage(this.image[0],
											columnCount, rowCount,
											refreshDelay, loopInColumns,
											this.scale);

		this.tiledImage.changeCol(5);
		this.tiledImage.changeRow(0);
	}
	

	tick () {

        if(!this.reverse){

            this.x-=SPEED_ENNEMI;

            if(this.countTick % 8 == 0){
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
            this.tiledImage.tick(this.x, this.y, ctx);
            
            if(this.x <= 900){
                this.reverse = true;
            }
        }
        else{   //Marche dans l'autre sens

            if(this.firstReverse){ 
                this.firstReverse = false;
                let columnCount = 10;
                let rowCount= 1;
                let refreshDelay = 100;
                let loopInColumns = true;

                this.tiledImage = new TiledImage(this.image[1],
                                                    columnCount, rowCount,
                                                    refreshDelay, loopInColumns,
                                                    this.scale);
            } 
            this.x+=SPEED_ENNEMI;

            if(this.countTick % 8 ==0){
                this.countTick = 0;
                
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
               
                if(this.stade < 5){
                    this.stade++;
                }
                else{
                    this.stade = 0;
                }
            }

            this.tiledImage.tick(this.x, this.y, ctx);
            
            if(this.x > POS_X_DESTROY){
                this.life = 0
            }
        }
        this.countTick++
		return this.life > 0;
	}

	getX(){
		return this.x;
	}

	getY(){
		return this.posY;
	}

	decreaseLife(hit){
		this.life -= hit;
    }
    
}