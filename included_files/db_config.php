<?php

$servername = "localhost";
$username = "novitestingyes";
$password = "novitestingyes";
$dbname = "novitestingyes";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}; 
?>