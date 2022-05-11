<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE DATABASE IF NOT EXISTS db515;";
if ($conn->query($sql) === TRUE) {
  //echo "Database created successfully";
} else {
  die("Error creating database: " . $conn->error);
}

$db_selected = mysqli_select_db($conn, 'db515');

if (!$db_selected) {
  die("Error selecting database");
}

$query = "CREATE TABLE IF NOT EXISTS USERS (
  ID int(11) AUTO_INCREMENT,
  FNAME varchar(255) NOT NULL,
  LNAME varchar(255) NOT NULL,
  EMAIL varchar(255) NOT NULL,
  PASS varchar(255) NOT NULL,
  PHONENUMBER int(20) NOT NULL, #should be varchar
  GENDER varchar(255) NOT NULL,
  CITY varchar(255) NOT NULL,
  STATE varchar(255) NOT NULL,
  QUAL varchar(255) NOT NULL,
  PRIMARY KEY  (ID)
  )";
$result = $conn->query($query);

if ($result === TRUE) {
  //echo "Table created successfully";
} else {
  die("Table not created!");
}


function addUser($firstname, $lastname, $email, $password, $phonenumber, $gender, $city, $state, $qual) {
  global $conn;
  $firstname = mysqli_real_escape_string($conn, $firstname);
  $lastname = mysqli_real_escape_string($conn, $lastname);
  $email = mysqli_real_escape_string($conn, $email);
  $password = mysqli_real_escape_string($conn, $password);
  $phonenumber = mysqli_real_escape_string($conn, $phonenumber);
  $gender = mysqli_real_escape_string($conn, $gender);
  $city = mysqli_real_escape_string($conn, $city);
  $state = mysqli_real_escape_string($conn, $state);
  $qual = mysqli_real_escape_string($conn, $qual);
  $sql = "INSERT INTO USERS (FNAME, LNAME, EMAIL, PASS, PHONENUMBER, GENDER, CITY, STATE, QUAL) VALUES ('$firstname', '$lastname', '$email', '$password', '$phonenumber', '$gender', '$city', '$state', '$qual')";
  return $conn->query($sql);
}

//addUser("sgf","gsd","sd'g@gmail.com","yxYr5sc","7389423456","MALE","sjdf","fgsdf","BA");