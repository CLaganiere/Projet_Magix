class Tourbe {

	constructor( posX, posy, size) {
		this.x = posX;
		this.y= posy;
		this.life = 1;
		this.startX = this.x;
		this.lastCol = 0;
		this.lastRow = 0;

		if(size > 1.8){
			this.size = 2.5;
			this.maxX = this.x+445;
		}
		else if(size > 1.7){
			this.size = 2.5;
			this.maxX = this.x+435;
		}else{
			this.size = 0.1;
			this.maxX = this.x+415;
		}

		this.scale = size;
		this.state = 1
		this.image = new Image()
		this.image.src = "images/Tourbe.png";
	}

	tick() {
		if(this.x < this.maxX){
		this.x += SPEED_TOURBE;
		}

		ctx.drawImage(this.image,
			0,0, 200, 50,
			this.startX, this.y, this.x,  100 + ((this.scale*this.size) * 5));

		return this.life > 0;
	}
}