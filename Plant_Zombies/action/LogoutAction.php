<?php
	require_once("action/CommonAction.php");

	class LogoutAction extends CommonAction{
		public $signoutVal;
		public $errorSignout = false;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {

			$data = array("key" => $_SESSION["key"]);
			$this->signoutVal = parent::callAPI("signout", $data);

			if($this->signoutVal == "SIGNED_OUT"){
				session_unset();
				session_destroy();

				header("location:login.php");
				exit;
			}
			else{
				$_SESSION["visibility"] = CommonAction::$VISIBILITY_PUBLIC;
				$this->errorSignout = true;
			}

		}
	}
