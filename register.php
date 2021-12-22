<?php include 'config.php';

    $CN=mysqli_connect ("localhost","root","");
    $DB=mysqli_select_db ($CN,"mmuken_app");

    $EncodedData = file_get_contents('php://input');
    $DecodedData = json_decode($EncodedData,true);
	 
	$costomer_name = $DecodedData['costomer_name'];
	$costomer_email = $DecodedData['costomer_email'];
	$costomer_password = $DecodedData['costomer_password'];
	$costomer_mobile = $DecodedData['costomer_mobile'];
	
	if($DecodedData['costomer_email']!="")
	{
	$result= $mysqli->query("SELECT * FROM users where costomer_email='$costomer_email'");
		if($result->num_rows>0) {
			echo json_encode('email already exist');  // alert msg in react native 		
		} 
		else 
		{		 
		   $add = $mysqli->query("insert into users (costomer_name,costomer_email,costomer_password,costomer_mobile) values('$costomer_name','$costomer_email','$costomer_password','$costomer_mobile')"); 
			 
			if($add){ 
				echo  json_encode('User Registered Successfully'); // alert msg in react native 
			}else{ 
			   echo json_encode('check internet connection'); // our query fail 
			}	
		}
	}else{  
	 echo json_encode('try again'); 
	} 
?>


