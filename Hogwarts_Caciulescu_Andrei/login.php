<?php 
session_start(); 
$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "test";

$conn = mysqli_connect($server_name, $username, $password, $database_name);

if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}


if (isset($_POST['uname']) && isset($_POST['password'])) {

	function validate($data){
       $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}

	$uname = validate($_POST['uname']);
	$pass = validate($_POST['password']);

	if (empty($uname)) {
		header("Location: login.html?error=User Name is required");
	    exit();
	}else if(empty($pass)){
        header("Location: login.html?error=Password is required");
	    exit();
	}else{
		$sql = "SELECT * FROM test_signup WHERE username='$uname' AND password='$pass'";

		$result = mysqli_query($conn, $sql);

		if (mysqli_num_rows($result) === 1) {
			$row = mysqli_fetch_assoc($result);
            if ($row['username'] === $uname && $row['password'] === $pass) {
            	$_SESSION['username'] = $row['username'];
            	$_SESSION['email'] = $row['email'];
            	$_SESSION['id'] = $row['id'];
            	header("Location: index.html");
		        exit();
            }else{
				header("Location: login.html?error=Incorect User name or password");
		        exit();
			}
		}else{
			header("Location: login.html?error=Incorect User name or password");
	        exit();
		}
	}
	
}else{
	header("Location: login.hmtl");
	exit();
}