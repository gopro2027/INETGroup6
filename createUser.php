<?php

require 'databaseUtil.php';
$firstname = $_POST['fname'];
$lastname = $_POST['lname'];
$email = $_POST['email'];
$password = $_POST['pwd'];
$phonenumber = $_POST['mobile'];
$gender = $_POST['gender'];
$city = $_POST['city'];
$state = $_POST['state'];
$qual = $_POST['qualify'];

//TODO: add validation here!

$success = addUser($firstname, $lastname, $email, $password, $phonenumber, $gender, $city, $state, $qual);
if ($success === TRUE) {
    die("User Successfully Added");
} else {
    die("User was not added!");
}

?>