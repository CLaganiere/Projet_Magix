let lightCardSel = null;
let darlCardSel = null;
let ENNEMI_ID = 0;

window.addEventListener("load", ()=> {

	document.getElementById("endTurn").onclick = event =>{
		if(gameTurn){
			actionMade("END_TURN");
		}
	}

	document.getElementById("heroPower").onclick = event =>{
		if(gameTurn){
			actionMade("HERO_POWER");
			heroPowerUsed = true;
		}
	}

	document.getElementById("ennemi").onclick = event =>{
		if(gameTurn){
			goingToAttck(ENNEMI_ID, true);
		}
	}

});

const goingToAttck = (idCard, ennemi=false) =>{

	if (!ennemi){
		lightCardSel = idCard;
	}
	else if(ennemi && lightCardSel!=null){
		darlCardSel = idCard;
		actionMade("ATTACK", lightCardSel, darlCardSel);
		lightCardSel = null;
		darlCardSel = null;
	}
}
