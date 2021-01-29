<?php
	require_once("action/LogoutAction.php");

	$action = new LogoutAction();
	$action->execute();
?>

<!DOCTYPE html>
<html id="pLogout" lang="fr">
    <head>
        <title>Magix - Plant vs Zombies</title>
        <link href="css/global.css" rel="stylesheet" />
        <meta charset="utf-8"/>
    </head>
    <body>
		<?php
			if ($action->signoutVal) {
			?>
				<div class="error-img"></div>
				<div class="error-div"><strong>Erreur : </strong>Déconnexion erronée</div>
				<div class="error-div"><strong>Une erreur s'est produite lors de la connexion...</div>
				<div class="form-input">
							<button type="submit">[<a href="login.php">Retour à la page d'acceuil</a>]</button>
				</div>
			<?php
			}
		?>
	</body>
</html>