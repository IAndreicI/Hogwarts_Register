<?php
session_start(); // Add session_start() at the beginning of your code

$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "test";

$conn = mysqli_connect($server_name, $username, $password, $database_name);

if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}



//SignUp

if (isset($_POST['save'])) {
    $usr = $_POST['usr'];
    $pwd = $_POST['pwd'];
    
    $email = $_POST['email'];
    

    $sql_query = "INSERT INTO test_signup (username,password,email)
	 VALUES ('$usr','$pwd','$email')";

    if (mysqli_query($conn, $sql_query)) {
        $_SESSION['registration_success'] = true; // Store flag in session
        header("Location: startpage.html"); // Redirect to the current page
        exit(); // Stop further execution
    } else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

// Move the success message display code to the appropriate location in your HTML/PHP code
if (isset($_SESSION['registration_success']) && $_SESSION['registration_success']) {
    echo "New Details Entry inserted successfully !";
    $_SESSION['registration_success'] = false; // Reset the flag
}
?>
