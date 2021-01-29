<?php
	require_once("action/CommonAction.php");

	class AjaxAction extends CommonAction {
		public $result = "ERR_100";

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {

			$data = [];
			$data["key"] = $_SESSION["key"];

			if($_POST["type"] != NULL){
				$data["type"] = $_POST["type"];
			}

			if($_POST["uid"] != NULL){
				$data["uid"] = $_POST["uid"];
			}

			if($_POST["targetuid"] != NULL){
				$data["targetuid"] = $_POST["targetuid"];
			}


			$this->result = parent::callAPI("games/action", $data);

		}
	}
