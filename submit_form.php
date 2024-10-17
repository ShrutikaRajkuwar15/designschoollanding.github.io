<?php
// Database connection settings
$servername = "localhost";  // Replace with your server name
$username = "root";         // Replace with your database username
$password = "";             // Replace with your database password
$dbname = "designformdb";     // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO users (name, phone, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $phone, $email);

    // Execute the statement
    if ($stmt->execute()) {
        echo "New record created successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>