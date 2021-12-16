<?php include 'config.php';

	$json = file_get_contents('php://input'); 	
	$obj = json_decode($json,true);

	$costomer_email = $obj['costomer_email'];
	
	$costomer_password = $obj['costomer_password'];
	
	if($obj['costomer_email']!=""){	
	
	$result= $mysqli->query("SELECT * FROM users where costomer_email='$costomer_email' and costomer_password='$costomer_password'");
	
		if($result->num_rows==0){
			echo json_encode('Wrong Details');				
		}
		else{		
		echo json_encode('ok');				
		}
	}	
	else{
	  echo json_encode('try again');
	}

?>

