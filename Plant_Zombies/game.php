<?php
	require_once("action/GameAction.php");

	$action = new GameAction();
	$action->execute();

?>

<!DOCTYPE html>
<html id="pGame" lang="fr">
    <head>
        <title>Magix - Plant vs Zombies</title>
        <link href="css/global.css" rel="stylesheet" />
        <script src="js/game-state.js"></script>
        <script src="js/game-action.js"></script>
        <script src="js/game-shower.js"></script>
        <script src="js/jquery.min.js"></script>
        <meta charset="utf-8"/>
    </head>
    <body>
        <div id="darkSide">
            <div class="attributs">
                <div class="box">
                    <div class="cardLeft">
                        <p>Left</p>
                    </div>
                </div>
                <div class="box">
                    <div class="lifePlayer">
                        <p>Life</p>
                    </div>
                </div>
                <div class="box">
                    <div id="ennemi">
                        <p class="name">Tobby-AI</p>
                    </div>
                </div>
                <div class="box">
                    <div class="manaPlayer">
                        <p>Mana</p>
                    </div>
                </div>
                <div class="box">
                    <div class="cardHand">
                        <p>Hand</p>
                    </div>
                </div>
            </div>
        </div>

        <div id="board">
            <div id="darkCards">

            </div>
            <div id="lightCards">

            </div>
        </div>

        <div class="alertUser">
            <div id="messageUser"></div>
        </div>

        <div id="lightSide">
            <div class="attributs">
            <div class="onTheSide">
                    <div class="lifePlayer">
                        <p>Life</p>
                    </div>
                    <div class="manaPlayer">
                        <p>Mana</p>
                    </div>
                    <div class="cardLeftPlayer">
                        <p>Cards</p>
                    </div>
                </div>
                <div id="handCards">
                </div>
                <div class="onTheSide">
                    <div id="endTurn"><button>Terminer</button></div>
                    <div id="timer">
                        <img src="images/timer.png" alt="timer"/>
                        <p id="textTimer">Time</p>
                    </div>
                    <div id="heroPower"><button>HeroPower</button></div>
                </div>
            </div>
            <div id="chat">
                    <div id="darkMessage"></div>
                    <div id="lightMessage">You:</div>
            </div>
        </div>
        <div id="waiting"><p> En attente d'un adversaire...</p></div>
        <div id="loose"><p>How do you feel right now?</p></div>
        <div id="win"><p>You are a winner!</p></div>
    </body>
</html>