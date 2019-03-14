<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include 'db_config.php';

$sql = "SELECT user_id, username, left_position, top_position, user_color, user_angle FROM users_info WHERE username !='".$_SESSION['username']."'";
$result = $conn->query($sql);


echo "[";



$numResults = $result->num_rows ;
$counter = 0;
while ($row = $result->fetch_assoc()) {
    if (++$counter == $numResults) {
        echo '{"user_id":"'  . $row["user_id"] . '",';
            echo '"username":"'  . $row["username"] . '",';
            echo '"left_position":"'  . $row["left_position"] . '",';
            echo '"top_position":"'  . $row["top_position"] . '",';
            echo '"user_color":"'  . $row["user_color"] . '",';
            echo '"user_angle":"'  . $row["user_angle"] . '"}';
    } else {
        echo '{"user_id":"'  . $row["user_id"] . '",';
            echo '"username":"'  . $row["username"] . '",';
            echo '"left_position":"'  . $row["left_position"] . '",';
            echo '"top_position":"'  . $row["top_position"] . '",';
            echo '"user_color":"'  . $row["user_color"] . '",';
            echo '"user_angle":"'  . $row["user_angle"] . '"},';
    }
}

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        

    }
} else {
    echo "0 results";
}

echo "]";

$conn->close();


?>