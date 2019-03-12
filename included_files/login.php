<?php
session_start();

include 'db_config.php';


$username = $_POST['username'];

$_SESSION['username'] = $username;

$usercolor = $_POST['usercolor'];

$_SESSION['usercolor'] = $usercolor;

$sql = "INSERT INTO users_info (username, left_position, top_position, user_color) VALUES ('$username', 000, 000, '$usercolor')";

if ($conn->query($sql) === TRUE) {
    echo "1";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>