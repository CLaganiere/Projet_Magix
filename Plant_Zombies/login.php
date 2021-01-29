<?php
	require_once("action/LoginAction.php");

	$action = new LoginAction();
	$action->execute();
?>
<!DOCTYPE html>
<html id="pLogin" lang="fr">
    <head>
        <title>Magix - Plant vs Zombies</title>
        <link href="css/global.css" rel="stylesheet"/>
		<script src="./js/login.js"></script>
		<script src="./js/sprite/PatateLobby.js"></script>
		<script src="./js/sprite/ZombieLobby.js"></script>
		<script src="./js/sprite/BushLobby.js"></script>
		<script src="./js/TiledImage.js"></script>
        <meta charset="utf-8"/>
    </head>
    <body>
		<div id="frame">
			<div class="login-form-frame">
				<form action="login.php" method="post">
					
					<?php
						if ($action->wrongLogin) {
							?>
								<script type="text/javascript">
									incorrect();
								</script>
							<?php
						}
					?>

					<div class="form-label">
						<label for="username">Nom d'usager : </label>
					</div>
					<div class="form-input">
						<input type="text" name="username" id="username" />
					</div>
					<div class="form-separator"></div>

					<div class="form-label">
						<label for="password">Mot de passe : </label>
					</div>
					<div class="form-input">
						<input type="password" name="pwd" id="password" />
					</div>
					<div class="form-separator"></div>

					<div class="form-label">
				
					</div>
					<div class="form-input">
						<button type="submit">Connexion</button>
					</div>
					<div class="form-separator"></div>
				</form>
				<div id="fail"></div>
			</div>
		</div>

		<div id="illustration">
			<canvas id="canvas" width="1700" height="100">
				Not gonna happen...
			</canvas>
		</div>

    </body>
</html>