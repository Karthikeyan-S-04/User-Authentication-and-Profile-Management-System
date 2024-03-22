<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$server = "localhost";
$username = "root";
$password = "mysql";
$dbname = "guvi_r2";

$conn = mysqli_connect($server, $username, $password, $dbname);

if ($conn->connect_error) {
    die ("Connection Failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$pswd = $_POST['password'];

$sql = "SELECT password FROM profile WHERE email=?";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $result = $stmt->get_result();
    $data = $result->fetch_assoc();
    $ret_pswd = $data['password'];

    // Use password_verify for password comparison
    if (password_verify($pswd, $ret_pswd)) {
        echo "true";
    }
} else {
    echo "Error preparing statement";
}