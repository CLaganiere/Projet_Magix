<?php
	require_once("action/CommonAction.php");

	class LoginAction extends CommonAction{
		public $wrongLogin = false;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {

			if (isset($_POST["username"]) && isset($_POST["pwd"])) {
				$data = [];
				$data["username"] = $_POST["username"];
				$data["password"] =  $_POST["pwd"];

				$resultKey = parent::callAPI("signin", $data);
				
				if(empty($resultKey) || $resultKey == "INVALID_USERNAME_PASSWORD"){
					$this->wrongLogin = true;
				}
				else {
					$_SESSION["key"] = $resultKey->key;
					$_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
					header("location:index.php");
					exit;
				}
			}
		}
	}
