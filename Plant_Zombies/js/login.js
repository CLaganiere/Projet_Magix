let canvas = null;
let ctx = null;

let CANVAS_WIDTH;
let CANVAS_HEIGHT;
let y = 0;
let speedY = 5;
let stateRed = true;
let count = 0;
let button;
let wrongWord = false;
let delay=0;
let opacityLogin = 0;
let opacityLabel = 0;
let spriteLoginZombies = []
let spriteLoginPlant = []
let spriteLoginBush = []
let SPEED_ENNEMI = 3.5;
let SPEED_PATATE = 3;
let POS_X_DESTROY;

window.addEventListener("load", ()=> {

    canvas = document.querySelector("canvas");
	ctx = canvas.getContext("2d");

	CANVAS_WIDTH = canvas.width;
    CANVAS_HEIGHT = canvas.height;
    POS_X_DESTROY = CANVAS_WIDTH + 100;

    spriteLoginBush.push(new BushLobby(20, 50, 0.10));
    spriteLoginBush.push(new BushLobby(1675, 50, 0.10));

    spriteLoginZombies.push(new ZombieLobby(1400, -10, 2));
    spriteLoginZombies.push(new ZombieLobby(1470, -10, 2));
    spriteLoginZombies.push(new ZombieLobby(1500, -10, 2));
    spriteLoginZombies.push(new ZombieLobby(1570, -10, 2));
    spriteLoginZombies.push(new ZombieLobby(1610, -10, 2));

    tick();
});

const tick = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    count++;

    if(opacityLogin <= 1 ){
        opacityLogin +=0.01
        document.querySelector(".login-form-frame").style.opacity = opacityLogin;
    }

    if(opacityLabel <= 1 && count % 2 == 0){
        opacityLabel +=0.01
        document.querySelectorAll("label")[0].style.opacity = opacityLabel;
        document.querySelectorAll("label")[1].style.opacity = opacityLabel;
    }

    if(delay > 175){
        incorrect();
        delay = 0;
    }

    if(wrongWord){
        delay++;
    }


    for (let i = 0; i < spriteLoginZombies.length; i++) {
		const sprite = spriteLoginZombies[i];
		let alive = sprite.tick();

		if(!alive){
			spriteLoginZombies.splice(i,1);
			i--;
		}
	}

    for (let i = 0; i < spriteLoginPlant.length; i++) {
		const sprite = spriteLoginPlant[i];
		let alive = sprite.tick();

		if(!alive){
			spriteLoginPlant.splice(i,1);
            i--;
		}
    }
    createPatate();

    for (let i = 0; i < spriteLoginBush.length; i++) {
		const sprite = spriteLoginBush[i];
		let alive = sprite.tick();

		if(!alive){
			spriteLoginBush.splice(i,1);
            i--;
		}
    }

    spam();
    window.requestAnimationFrame(tick);
}

const spam = () =>{
    let nodeFail = document.getElementById("fail");

    if(wrongWord){

        y += speedY;
        nodeFail.style.top = y + "px";

        if (stateRed) {
            document.querySelectorAll("label")[0].style.color = "yellow";
            document.querySelectorAll("label")[1].style.color = "yellow";
        }
        else {
            document.querySelectorAll("label")[0].style.color = "red";
            document.querySelectorAll("label")[1].style.color = "red";
        }

        if (count % 10 == 0) stateRed = !stateRed;
    }
}

const incorrect = () =>{
    if(!wrongWord){
        wrongWord = true;
    }
    else{
        wrongWord = false;
        document.querySelectorAll("label")[0].style.color = "white";
        document.querySelectorAll("label")[1].style.color = "white";
        let nodeFail = document.getElementById("fail");
        nodeFail.style.top = "-600px";
        y=0;
    }
}

function createPatate (){
    if(spriteLoginPlant.length == 0){
        for (let i = 0; i < spriteLoginZombies.length; i++) {
            posXZombie = spriteLoginZombies[i].getX();

            if(spriteLoginPlant.length == 0 && posXZombie > 900){
                spriteLoginPlant.push(new PatateLobby(200, 20, 2));
                spriteLoginPlant.push(new PatateLobby(100, 20, 2));
                spriteLoginPlant.push(new PatateLobby(0, 20, 2));
                spriteLoginPlant.push(new PatateLobby(-100, 20, 2));
                spriteLoginPlant.push(new PatateLobby(-200, 20, 2));
            }
        }
    }

}