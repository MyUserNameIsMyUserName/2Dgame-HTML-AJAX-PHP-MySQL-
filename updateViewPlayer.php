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


$sql = "SELECT playerLeft, playerTop, moveTime FROM playerposition ORDER BY moveTime DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo $row["playerLeft"];
        echo $row["playerTop"];

    }
} else {
    echo "0 results";
}
$conn->close();
?>