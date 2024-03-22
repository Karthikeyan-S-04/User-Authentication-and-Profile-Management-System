<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json'); // Set response content type to JSON
// Sample user data
$userData = array(
    'name' => 'John Doe',
    'email' => 'john.doe@example.com',
    'phone' => '123-456-7890',
    'gender' => 'Male',
    'dob' => '1990-01-01'
);

// Convert user data to JSON format
$jsonData = json_encode($userData);

// Set response content type to JSON
header('Content-Type: application/json');

// Output JSON data
echo $jsonData;
