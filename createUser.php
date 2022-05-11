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

function validate(){
    global $firstname, $lastname, $email, $password, $phonenumber, $gender, $city, $state, $qual;
    $validated = true;
    $validated = $validated and checkFirstName();
    $validated = $validated and checkLastName();
    $validated = $validated and checkEmail();
    $validated = $validated and checkPassword();
    $validated = $validated and checkMobile();
    $validated = $validated and checkGender();
    $validated = $validated and checkCity();
    $validated = $validated and checkState();

    if ($validated == true) {
        $success = addUser($firstname, $lastname, $email, $password, $phonenumber, $gender, $city, $state, $qual);
        if ($success === TRUE) {
            die("User Successfully Added");
        } else {
            die("User was not added!");
        }
    }
}

//TODO: add validation here!
function checkFirstName(){
    global $firstname;
    $pattern = "/^[a-zA-Z'.\-\s]{1,30}$/";
    if (!preg_match($pattern, $firstname)){
        return false;
    }
    else{
        return true;
    }
}

function checkLastName(){
    global $lastname;
    $pattern = "/^[a-zA-Z'.\-\s]{1,30}$/";
    if (!preg_match($pattern, $lastname)){
        return false;
    }
    else{
        return true;
    }
}

function checkEmail(){
    global $email;
    $pattern = "/^[a-z0-9\-_\.']+@[a-z0-9]+(\.[a-z0-9]+){0,2}$/";
    if (!preg_match($pattern, $email)){
        return false;
    }
    else{
        return true;
    }
}

function checkPassword(){
    global $password;
    $pattern = "/^(?=.{3,10}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/";
    if (!preg_match($pattern, $password)){
        return false;
    }
    else{
        return true;
    }
}

function checkMobile(){
    global $phonenumber;
    if (strlen($phonenumber) != 0){
        return true;
    }
    else {
        return false;
    }
}

function checkGender(){
    global $gender;
    if (strlen($gender) != 0){
        return true;
    }
    else{
        return false;
    }
}

function checkCity(){
    global $city;
    if (strlen($city) != 0){
        return true;
    }
    else{
        return false;
    }
}

function checkState(){
    global $state;
    if (strlen($state) != 0){
        return true;
    }
    else{
        return false;
    }
}

function checkQual(){
    global $qual;
    if (strlen($qual) != 0){
        return true;
    }
    else{
        return false;
    }
}

validate();

?>