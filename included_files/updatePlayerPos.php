<?php
session_start();

include 'db_config.php';

$leftPOS =  $_POST['playerLeft'];
$topPOS =  $_POST['playerTop'];
$username = $_SESSION['username'];


$sql = "UPDATE users_info SET left_position='$leftPOS', top_position='$topPOS' WHERE username='$username'";

$conn->query($sql);

$conn->close();

?>