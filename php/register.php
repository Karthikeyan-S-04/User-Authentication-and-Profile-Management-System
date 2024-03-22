<?php
header("Access-Control-Allow-Origin: *");
// Allow the following methods
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
// Allow the following headers
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// Debugging: Output POST data to check if it's being received
print_r($_POST);

// Validate and sanitize form data
$name = $_POST['name'];
$gender = $_POST['gender'];
$dob = $_POST['dob']; // No need for sanitization as it's a date field
$phone = $_POST['phone'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password for security

// Debugging: Output sanitized data to check if it's correct
echo "Sanitized Name: " . $name . "<br>";
echo "Sanitized Gender: " . $gender . "<br>";
echo "Date of Birth: " . $dob . "<br>";
echo "Sanitized Phone: " . $phone . "<br>";
echo "Sanitized Email: " . $email . "<br>";

// Database connection configuration
$servername = "localhost";
$username = "root";
$dbpassword = "mysql"; // Default password for MySQL is empty
$dbname = "guvi_r2";

// Create connection
$conn = mysqli_connect($servername, $username, $dbpassword, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL prepared statement to insert data into the profile table
$stmt = $conn->prepare("INSERT INTO profile (name, gender, dob, phone, email, password) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $name, $gender, $dob, $phone, $email, $password);

// Execute the prepared statement
if ($stmt->execute()) {
    echo "Registration successful";
} else {
    echo "Error: " . $stmt->error;
}

// Close statement and connection
$stmt->close();
$conn->close();