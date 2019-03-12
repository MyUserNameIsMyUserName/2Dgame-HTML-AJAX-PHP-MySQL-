<?php
session_start();

include 'db_config.php';

$username = $_SESSION['username'];

// sql to delete a record
$sql = "DELETE FROM users_info WHERE username='$username'";

if (mysqli_query($conn, $sql)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}

mysqli_close($conn);
?>