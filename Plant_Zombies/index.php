<?php
	require_once("action/IndexAction.php");

	$action = new IndexAction();
	$action->execute();
?>
<!DOCTYPE html>
<html id="pIndex" lang="fr">
    <head>
        <title>Magix - Plant vs Zombies</title>
        <link href="css/global.css" rel="stylesheet" />
		<script src="js/animation.js"></script>
		<script src="js/action.js"></script>
		<script src="js/sprite/Plant.js"></script>
		<script src="js/sprite/Bullet.js"></script>
		<script src="js/sprite/Zombie.js"></script>
		<script src="js/sprite/RouleauGazon.js"></script>
		<script src="js/sprite/Tourbe.js"></script>
		<script src="js/TiledImage.js"></script>
        <meta charset="utf-8"/>
    </head>
	<body>
		<div class="illustration">
			<canvas id="canvas" width="1200" height="550">
				Not gonna happen...
			</canvas>
		</div>

		<div class="instruction">
			<p>Faite votre choix en plantant des plantes afin de tuer le zombie!!</p>
		</div>

		<div class="form-input">
			<form id="form-Training" action="index.php"  method="Get">
				<input type="hidden" name="actiontype" value="PRATIQUE">
			</form>
			<form id="form-Pvp" action="index.php"  method="Get">
				<input type="hidden" name="actiontype" value="ONLINE">
			</form>
			<form id="form-Quit" action="logout.php"  method="Post">
				<input type="hidden" name="actiontype" value="QUITTER">
			</form>
		</div>

		<?php
			if($action->deckIncomplete){
			?>
				<div class="error">Votre deck est incomplet! Aller le finaliser avant de lancer une partie.</div>
			<?php
			}else if($action->gameProblem){
			?>
			<div class="error">Erreur de connection à une partie... Réessaye plus tard</div>
			<?php
			}
		?>
    </body>
</html>