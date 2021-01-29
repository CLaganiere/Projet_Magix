//////////////////////////////////////////////
// Fonctions à modifier
//////////////////////////////////////////////
let idDarkBoard = "darkCards";
let idLightBoard = "lightCards";
let idHand = "handCards";
let gameTurn;

window.addEventListener("load", ()=> {
	state();
});

const state = () =>{

    $.ajax({
        type : "POST",
        url : "ajax.php",
        data :{
        }
    })
    .done(response => {
        response = JSON.parse(response);

        if( response != "WAITING" &&
            response != "LAST_GAME_WON" &&
            response != "LAST_GAME_LOST"&&
            response != "INVALID_KEY"){

            waitingForOppo(false);
            showGame(response);
        }
        else{
            if( response == "WAITING"){
                waitingForOppo(true);
            }else if(response == "LAST_GAME_WON"){
                winOfTheGame();
            }
            else if (response == "LAST_GAME_LOST"){
                looserOfTheGame();
            }
            else{
                window.location.href="./logout.php";
            }
        }

        setTimeout(state, 1000);
    })
    .fail(errData => {
        console.log("fail!");
    });
}

const actionMade = (action=null, idCard=null, idtTarget=null) =>{
    let error = false;

    $.ajax({
        type : "POST",
        url : "ajax-action.php",
        data :{
            type : action,
            uid : idCard,
            targetuid : idtTarget
        }
    })
    .done(response => {
        response = JSON.parse(response);

        if( response != "INVALID_KEY" &&
            response != "ACTION_IS_NOT_AN_OBJECT" &&
            response != "NOT_ENOUGH_ENERGY"&&
            response != "BOARD_IS_FULL" &&
            response != "CARD_NOT_IN_HAND" &&
            response != "CARD_IS_SLEEPING" &&
            response != "MUST_ATTACK_TAUNT_FIRST" &&
            response != "OPPONENT_CARD_NOT_FOUND" &&
            response != "CARD_NOT_FOUND" &&
            response != "ERROR_PROCESSING_ACTION" &&
            response != "INTERNAL_ACTION_ERROR" &&
            response != "HERO_POWER_ALREADY_USED"){

            showGame(response);
        }
        else{
            let message;
            switch(response){
                case "INVALID_KEY":
                    message = "Erreur de programme. Veuillez patienter quelques secondes.";
                    break;
                case "ACTION_IS_NOT_AN_OBJECT":
                    message = "L'action n'est pas un objet...Attends le consentement.";
                    break;
                case "NOT_ENOUGH_ENERGY":
                    message = "Pas assez d'énergie.";
                    break;
                case "BOARD_IS_FULL":
                    message = "Le board est plein!";
                    break;
                case "CARD_NOT_IN_HAND":
                    message = "Carte pas dans la main.";
                    break;
                case "CARD_IS_SLEEPING":
                    message = "Carte au repos! De retour au porchain tour."
                    break;
                case "MUST_ATTACK_TAUNT_FIRST":
                    message = "Attaque le TAUNT en premier!"
                    break;
                case "OPPONENT_CARD_NOT_FOUND":
                    message = "Carte de l'adversaire introuvable."
                    break;
                case "CARD_NOT_FOUND":
                    message = "Carte introuvable."
                    break;
                case "ERROR_PROCESSING_ACTION":
                    message = "Probléme de serveur. RÉessayer l'action!"
                    break;
                case "INTERNAL_ACTION_ERROR":
                    message = "Problème d'action dans le serveur. Veuillez réessayer!"
                    break;
                case "HERO_POWER_ALREADY_USED":
                    message = "Pouvoir de héro déjà utiliser";
                    break;
            }
            displayAlertUser(message);
        }
    })
    .fail(errData => {
        console.log("fail!");
    });
}

const showGame = (response) =>{

    if(heroPowerUsed && gameTurn != response.yourTurn){
        heroPowerUsed = false;
    }

    gameTurn = response.yourTurn;

    displayCards(response.opponent.board, idDarkBoard);
    displayCards(response.board, idLightBoard);
    displayCards(response.hand, idHand);

    showPlayableCards();

    displayDarkAttributes(response.opponent.hp, response.opponent.mp, response.opponent.remainingCardsCount, response.opponent.handSize);
    displayLightAttributes(response.hp, response.mp, response.remainingCardsCount);
    displayTimeLeft(response.remainingTurnTime, response.yourTurn);

    displayChat(response.welcomeText, response.opponent.welcomeText, response.opponent.username);

    displayAlertUser();
}
