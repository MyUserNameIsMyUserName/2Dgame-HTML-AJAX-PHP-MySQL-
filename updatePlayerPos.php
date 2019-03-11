<?php
$servername = "localhost";
$username = "gamephpgame";
$password = "gamephpgame";
$dbname = "gamephpgame";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}; 

$leftPOS =  $_POST['playerLeft'];
$topPOS =  $_POST['playerTop'];


$sql = "INSERT INTO playerposition (playerLeft, playerTop) VALUES ( $leftPOS, $topPOS )";

$conn->query($sql);

$conn->close();
?>