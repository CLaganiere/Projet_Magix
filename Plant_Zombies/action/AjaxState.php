<?php
	require_once("action/CommonAction.php");

	class AjaxState extends CommonAction {
		public $result = "ERR_100";

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {

			$data = [];
			$data["key"] = $_SESSION["key"];

			$this->result = parent::callAPI("games/state", $data);

		}
	}
