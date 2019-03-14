<?php
session_start();

include 'db_config.php';

$leftPOS =  $_POST['playerLeft'];
$topPOS =  $_POST['playerTop'];
$username = $_SESSION['username'];
$angle = $_POST['playerAngle'];


$sql = "UPDATE users_info SET left_position='$leftPOS', top_position='$topPOS', user_angle='$angle' WHERE username='$username'";

$conn->query($sql);

$conn->close();

?>