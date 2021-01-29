
document.onmousedown = event =>{
	var posEventX = event.x-posCanevasX;
	var posEventY = event.y-posCanevasY;

	if(spriteListRouleau.length ==0 && posEventX >= 221.5 && posEventX <= 842){
		if(posEventY >= 62 && posEventY <= 120){
			createCommandoPlant(posEventX, 60, 1.5);
		}
		else if(posEventY >= 120 && posEventY <= 178){
			createCommandoPlant(posEventX, 125, 1.5);
		}
		else if(posEventY >= 178 && posEventY <= 253){
			createCommandoPlant(posEventX, 190, 1.6);
		}
		else if(posEventY >= 253 && posEventY <= 329){
			createCommandoPlant(posEventX, 270, 1.7);
		}
		else if(posEventY >= 329 && posEventY <= 408){
			createCommandoPlant(posEventX, 340, 1.9);
		}
		else if(posEventY >= 408 &&posEventY <= 488){
			createCommandoPlant(posEventX, 420, 2);
		}
	}
}
