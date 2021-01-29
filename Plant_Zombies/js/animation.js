let canvas = null;
let ctx = null;

let doge = null;
let mousePosX= 0;
let mousePosY = 0;
let spriteList = [];
let spriteListCard = []
let spriteListGazon = [];
let spriteListRouleau = [];
let spriteListPlant = [];
let spriteListZombies = [];
let spriteListBullet = [];

let CANVAS_WIDTH=0;
let CANVAS_HEIGHT=0;
let SPEED=1;
let SPEED_ENNEMI=1;
let posCanevasX;
let posCanevasY;
let createZombies = true;
let SPEED_TOURBE = 2;

window.addEventListener("load", ()=> {

	canvas = document.querySelector("canvas");
	ctx = canvas.getContext("2d");

	CANVAS_WIDTH = canvas.width;
	CANVAS_HEIGHT = canvas.height;
	let rect = canvas.getBoundingClientRect();
	posCanevasX = rect.left;
	posCanevasY = rect.top;

	doge = new Image();
	doge.onload = () =>{
		ctx.drawImage(doge, 0, 0);
	}
	doge.src = "images/Background_Zombie.png";

	spriteListGazon.push(new Tourbe(215, 60, 1.4));
	spriteListGazon.push(new Tourbe(215, 120, 1.4));
	spriteListGazon.push(new Tourbe(210, 180, 1.8));
	spriteListGazon.push(new Tourbe(210, 255, 1.8));
	spriteListGazon.push(new Tourbe(205, 330, 2.3));
	spriteListGazon.push(new Tourbe(205, 410, 2.2));

	spriteListRouleau.push(new RouleauGazon(230+195, 78, 1.5));
	spriteListRouleau.push(new RouleauGazon(228+195, 135, 1.7));
	spriteListRouleau.push(new RouleauGazon(228+195, 200, 1.9));
	spriteListRouleau.push(new RouleauGazon(228+195, 270, 2));
	spriteListRouleau.push(new RouleauGazon(229+180, 350, 2.2));
	spriteListRouleau.push(new RouleauGazon(225+180, 430, 2.2));

	ctx.fillStyle = "red";
	ctx.strokeStyle = "black";
	ctx.fillStyle = "rgb(204, 0, 0)";
	ctx.font = "bold 30px Arial";

	tick();
});


const tick = () =>{
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	if(doge.complete){
		ctx.drawImage(doge, 0, 0);
	}

	ctx.fillText("Partie en ligne", 910, 170);
	ctx.strokeText("Partie en ligne", 910, 170);
	ctx.fillText("Pratique locale", 935, 320);
	ctx.strokeText("Pratique locale", 935, 320);
	ctx.fillText("Quitter", 950, 470);
	ctx.strokeText("Quitter", 950, 470);

	for (let i = 0; i < spriteListGazon.length; i++) {
		const sprite = spriteListGazon[i];
		let alive = sprite.tick();

		if(!alive){
			spriteListGazon.splice(i,1);
			i--;
		}
	}

	for (let i = 0; i < spriteListRouleau.length; i++) {
		const sprite = spriteListRouleau[i];
		let alive = sprite.tick();

		if(!alive){
			spriteListRouleau.splice(i,1);
			i--;
		}
	}

	for (let i = 0; i < spriteListZombies.length; i++) {
		const sprite = spriteListZombies[i];
		let alive = sprite.tick();

		if(!alive){
			spriteListZombies.splice(i,1);
			i--;
		}
	}


	for (let i = 0; i < spriteListBullet.length; i++) {
		const sprite = spriteListBullet[i];
		let alive = sprite.tick();

		if(!alive){
			spriteListBullet.splice(i,1);
			i--;
		}
	}

	for (let i = 0; i < spriteListPlant.length; i++) {
		const sprite = spriteListPlant[i];
		let alive = sprite.tick();

		if(!alive){
			spriteListPlant.splice(i,1);
			i--;
		}
	}

	if(createZombies && spriteListRouleau.length == 0){
		spriteListZombies.push(new Zombie(1, 0.5, "PVP"));
		spriteListZombies.push(new Zombie(3, 0.6, "TRAINING"));
		spriteListZombies.push(new Zombie(5, 0.7, "QUIT"));

		createZombies = false;
	}

	if(!createZombies && spriteListZombies.length==0){
		createZombies = true;
	}

	window.requestAnimationFrame(tick);
}


function createCommandoPlant(posX, posY, scale) {
	let closeSprite = [];
	let canSprite = true;
	let tabPosY = [60, 125, 190, 270, 340, 420 ];
	let posTabY = 0;

	for (let i = 0; i < spriteListPlant.length; i++) {
		let posPlantX = spriteListPlant[i].getX();
		let posPlantY = spriteListPlant[i].getY();

		if(posY == posPlantY && posX >= posPlantX - 50 && posX <= posPlantX + 50){
			canSprite = false;
		}
	}

	if(canSprite){
		for (let i = 0; i < tabPosY.length; i++) {
			if(posY == tabPosY[i]){
				posTabY = i;
			}
		}
		spriteListPlant.push(new Plant(posX, posTabY, scale));
	}
}