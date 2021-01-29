

let nodeCard;
let tabImages = [];
let tabName;
let nbTurn = 0;
let countTick = 0;
let showMessage = false;
let countTickMessage=0;
let TIME_TROPHY = 10;
let COST_HERO_POWER = 2;
let heroPowerUsed = false;

window.addEventListener("load", ()=> {

	tabImages.push("./images/cards/BigPatate.png");
	tabImages.push("./images/cards/BluePlant.png");
	tabImages.push("./images/cards/BombePatate.png");
	tabImages.push("./images/cards/CommandoPlant.png");
	tabImages.push("./images/cards/FrogSheet.png");
	tabImages.push("./images/cards/GoldPlant.png");
	tabImages.push("./images/cards/GreenPotatos.png");
	tabImages.push("./images/cards/Mini_Patate.png");
	tabImages.push("./images/cards/Mini_Patate_R.png");
	tabImages.push("./images/cards/Mini_shroom.png");
	tabImages.push("./images/cards/Mushroom.png");
	tabImages.push("./images/cards/OriginalPlant.png");
	tabImages.push("./images/cards/Sunshine.png");
	tabImages.push("./images/cards/purple_plant.png");
	tabImages.push("./images/cards/war_plant.png");
	tabImages.push("./images/cards/zombie1.png");
	tabImages.push("./images/cards/zombie2.png");
	tabImages.push("./images/cards/zombie3.png");
	tabImages.push("./images/cards/zombie4.png");
	tabImages.push("./images/cards/zombie5.png");
	tabImages.push("./images/cards/zombie6.png");
	tabImages.push("./images/cards/zombie7.png");
	tabImages.push("./images/cards/zombie8.png");
	tabImages.push("./images/cards/zombie9.png");
	tabImages.push("./images/cards/zombie10.png");

	tabName = {	0:'Liam',1:'Noah',2:'Elijah',3:'Oliver',4:'Lucas',5:'Mason',6:'Ethan',7:'Logan',8:'Aiden',9:'James',10:'Sebastian',11:'Jackson',12:'Benjamin',13:'Carter',14:'Mateo',15:'Alexander',16:'Grayson',17:'Leo',18:'Michael',19:'Levi',20:'Jack',21:'Daniel',22:'Jacob',23:'Wyatt', 24:'Jayden', 25:'Owen', 26:'Julian',27:'Luke',28:'William',29:'Gabriel',30:'Henry',31:'Jaxon',32:'Muhammad',33:'David',34:'Posie',35:'Isla',36:'Olivia',37:'Aurora',38:'Maeve',39:'Cora',40:'Amara',41:'Ada',42:'Amelia',43:'Charlotte',44:'Emma',45:'Ava',45:'Olivia',46:'Isabella',47:'Amelia'}

	nodeCard = document.createElement('div');
	nodeCard.setAttribute("class", "Card");

	let nodeCost= document.createElement('div');
	nodeCost.setAttribute("class", "cost");

	let nodeImage = document.createElement('div');
	nodeImage.setAttribute("class", "imageCarac");
	nodeImage.style.backgroundImage =  "url(" + tabImages[0] + ")";

	let nodeName = document.createElement('div');
	nodeName.setAttribute("class", "name");

	let nodeType = document.createElement('div');
	nodeType.setAttribute("class", "type");

	let nodeForce = document.createElement('div');
	nodeForce.setAttribute("class", "force");

	let nodeAttack = document.createElement('div');
	nodeAttack.setAttribute("class", "attack");

	let nodeLife = document.createElement('div');
	nodeLife.setAttribute("class", "life");

	nodeForce.appendChild(nodeAttack);
	nodeForce.appendChild(nodeLife);

	nodeCard.append(nodeCost);
	nodeCard.append(nodeImage);
	nodeCard.append(nodeName);
	nodeCard.append(nodeType);
	nodeCard.append(nodeForce);

});

const displayTimeLeft = (timeLeft, turn) =>{

    let txtTimerNode = document.getElementById("textTimer");
    txtTimerNode.firstChild.nodeValue = timeLeft;

    if(turn){
        if( timeLeft <= 10){
            txtTimerNode.style.color = "red";
        }
        else{
            txtTimerNode.style.color = "black";
        }
    }
    else if(!turn){
        txtTimerNode.style.color = "orange";
    }
}

const displayCards = (place, id) =>{

	let placeNode = document.getElementById(id);
  	while (placeNode.firstChild) {
    	placeNode.removeChild(placeNode.firstChild);
 	}

	for(let i = 0; i < place.length; i++){

		let newCard = nodeCard.cloneNode(true);
		let childCard = newCard.childNodes;

		childCard[0].textContent = place[i].cost;
		childCard[2].textContent = tabName[place[i].id];

		let indexImg = place[i].id;

		if(indexImg >= 26){
			indexImg = parseInt(indexImg-25);

		}else{
			indexImg-=1;
		}

		childCard[1].style.backgroundImage = "url(" +tabImages[indexImg] +")";

		let uIdCard = place[i].uid;
		newCard.onclick = () => {
			if(gameTurn){
				if(id == idDarkBoard){	//Attack une carte adverse
					goingToAttck(uIdCard, true);
				}
				else if(id == idLightBoard){	//Selectionne la carte sur le board
					goingToAttck(uIdCard, false);
				}
				else if (id == idHand){	//Mets la carte sur le board
					actionMade("PLAY", uIdCard);
				}
			}
		}
		if(place[i].mechanics.length == 0){
			childCard[3].textContent = "";
		}
		else{
			if(place[i].mechanics.length == 1){
				childCard[3].style.fontSize = "12px";
			}
			else{
				childCard[3].style.fontSize = "10px";
			}

			for(let j=0; j <place[i].mechanics.length; j++){
				if(place[i].mechanics[j] == "Taunt"){
					childCard[2].style.color = "Orange";
					childCard[3].style.color="Orange";
				}
				childCard[3].textContent = place[i].mechanics[j];
			}
		}
		childCard[4].childNodes[0].textContent = place[i].atk;
		childCard[4].childNodes[1].textContent = place[i].hp;

		if(id == idLightBoard && gameTurn){
			if(place[i].state =="IDLE"){
				newCard.style.border = "medium solid #33cc33";
			}
			else{
				newCard.style.border = "0px";
			}
		}

		placeNode.append(newCard);
	}
}

const  displayDarkAttributes = (life, mana, cardLeft, cardHand) => {

    let lifeNode = document.querySelector("#darkSide .lifePlayer p");
    lifeNode.firstChild.nodeValue = life;

    let manaNode = document.querySelector("#darkSide .manaPlayer p");
	manaNode.firstChild.nodeValue = mana;

	let cardLeftNode = document.querySelector("#darkSide .cardLeft p");
    cardLeftNode.firstChild.nodeValue = cardLeft;

    let handCardNode = document.querySelector("#darkSide .cardHand p");
	handCardNode.firstChild.nodeValue = cardHand;
}

const  displayLightAttributes = (life, mana, cardLeft) => {

    let lifeNode = document.querySelector("#lightSide .lifePlayer p");
    lifeNode.firstChild.nodeValue = life;

    let manaNode = document.querySelector("#lightSide .manaPlayer p");
	manaNode.firstChild.nodeValue = mana;

	let cardLeftNode = document.querySelector("#lightSide .cardLeftPlayer p");
    cardLeftNode.firstChild.nodeValue = cardLeft;
}

const showPlayableCards = () =>{

	let handNode = document.getElementById(idHand);
	let mana = document.querySelector("#lightSide .manaPlayer p").firstChild.nodeValue;

	for(let i = 0; i < handNode.childNodes.length; i++){

		let cardNode = handNode.childNodes[i];
		let nodeCost = parseInt(cardNode.childNodes[0].textContent);
		if( nodeCost <= mana && gameTurn){
			cardNode.style.border = "medium solid #33cc33";
		}
		else{
			cardNode.style.borderWidth = "0px";
		}
	}

	let nodeHeroPower = document.querySelector("#heroPower button");
	if( COST_HERO_POWER <= mana && gameTurn && !heroPowerUsed){
		nodeHeroPower.style.borderColor = "#33cc33";
	}
	else{
		nodeHeroPower.style.borderColor = "#000000";
	}
}

const displayChat = ( lightAns, darkAns, darkUser) =>{

	let darkNode = document.getElementById("darkMessage");
	let lightNode = document.getElementById("lightMessage");
	let ennemiNode = document.querySelector("#ennemi p.name");

	let time = document.getElementById("textTimer").firstChild.nodeValue;

	ennemiNode.textContent = darkUser;
	darkNode.textContent = darkUser +" : " + darkAns;
	lightNode.textContent = "You : "+ lightAns;

	if(time >= 40 && nbTurn ==0){
		let chatNode = document.getElementById("chat");
		chatNode.style.backgroundColor = "orange";
	}
	else{
		nbTurn =1;
	}
}

const waitingForOppo = (show) =>{

	let waitNode = document.getElementById("waiting");
	if(show) {
		waitNode.style.display = "block";
	}
	else{
		waitNode.style.display = "none";
	}
}

const displayAlertUser = (message=null) =>{

	if(message != null){
		let messageNode = document.querySelector("#messageUser");
		messageNode.textContent = message;
		messageNode.style.opacity = "1";
		showMessage = true;
		countTickMessage = 0;
	}
	else if(countTickMessage >=3){
		let messageNode = document.querySelector("#messageUser");
		messageNode.textContent = "";
		messageNode.style.opacity = "0";
		countTickMessage=0;
		showMessage = false;
	}
	else if(showMessage){
		countTickMessage++;
	}
}

const looserOfTheGame = () =>{

	let looseNode = document.getElementById("loose");
	looseNode.style.display = "block";
	countTick++;

	if(countTick >= TIME_TROPHY){
		window.location.href="./index.php";
	}
}

const winOfTheGame = () => {

	let winNode = document.getElementById("win");
	winNode.style.display = "block";
	countTick++;

	if(countTick >= TIME_TROPHY){
		window.location.href="./index.php";
	}
}