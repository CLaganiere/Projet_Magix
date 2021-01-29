<?php
	require_once("action/AjaxState.php");

	$action = new AjaxState();
	$action->execute();

	echo json_encode($action->result);