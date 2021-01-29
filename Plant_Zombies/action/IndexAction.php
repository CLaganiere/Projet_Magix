<?php
	require_once("action/CommonAction.php");

	class IndexAction extends CommonAction {

		public $deckIncomplete = false;
		public $gameProblem = false;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);

		}

		protected function executeAction() {

			if (isset($_GET["actiontype"])) {
				$actionType = $_GET["actiontype"];

				if($actionType == "PRATIQUE"){
					$data = [];
					$data["key"] = $_SESSION["key"];
					$data["type"] = "TRAINING";

					$resultKey = parent::callAPI("games/auto-match", $data);
				}
				else if($actionType== "ONLINE"){
					$data = [];
					$data["key"] = $_SESSION["key"];
					$data["type"] = "PVP";

					$resultKey = parent::callAPI("games/auto-match", $data);
				}
				else if($actionType== "QUITTER"){
					header("location:logout.php");
					exit;
				}

				if($actionType == "PRATIQUE" || $actionType== "ONLINE"){
					if(empty($resultKey) || $resultKey == "INVALID_KEY" || $resultKey == "INVALID_GAME_TYPE"){
						$gameProblem = true;
					}else if($resultKey == "DECK_INCOMPLETE"){
						$deckIncomplete = true;
					}else if($resultKey == "JOINED_PVP" || $resultKey == "CREATED_PVP" || $resultKey == "JOINED_TRAINING"){
						header("location:game.php");
						exit;
					}	
				}
			}
		}
	}
