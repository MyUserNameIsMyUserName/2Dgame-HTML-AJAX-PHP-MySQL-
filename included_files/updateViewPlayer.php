<?php

session_start();
include 'db_config.php';


$getc = "SELECT left_position, top_position, user_color FROM users_info WHERE username !='".$_SESSION['username']."' LIMIT 1";
$result = mysqli_query($conn,$getc);
$row = mysqli_fetch_assoc($result);
echo "{$row['left_position']}{$row['top_position']}{$row['user_color']}";





$conn->close();


?>