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

function formVal(){
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();
    checkMobile();
    checkGender();
    checkCity();
    checkState();

    addUser();
}

//TODO: add validation here!
function checkFirstName(){
    $pattern = "/^[a-zA-Z'.\-\s]{1,30}$/";
    if (!preg_match($pattern, $firstname)){
        return false;
    }
    else{
        return true;
    }
}

function checkLastName(){
    $pattern = "/^[a-zA-Z'.\-\s]{1,30}$/";
    if (!preg_match($pattern, $lastname)){
        return false;
    }
    else{
        return true;
    }
}

function checkEmail(){
    $pattern = "/^[a-z0-9\-_\.']+@[a-z0-9]+\.[a-z0-9]+$/";
    if (!preg_match($pattern, $email)){
        return false;
    }
    else{
        return true;
    }
}

function checkPassword(){
    $pattern = "/^(?=.{3,10}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/";
    if (!preg_match($pattern, $password)){
        return false;
    }
    else{
        return true;
    }
}

function checkMobile(){
    if ($phonenumber.length != 0){
        return true;
    }
    else {
        return false;
    }
}

function checkGender(){
    if ($gender != null){
        return true;
    }
    else{
        return false;
    }
}

function checkCity(){
    if ($city.length != 0){
        return true;
    }
    else{
        return false;
    }
}

function checkState(){
    if ($state.length != 0){
        return true;
    }
    else{
        return false;
    }
}

function checkQual(){
    if ($qual.value){
        return true;
    }
    else{
        return false;
    }
}

$success = addUser($firstname, $lastname, $email, $password, $phonenumber, $gender, $city, $state, $qual);
if ($success === TRUE) {
    die("User Successfully Added");
} else {
    die("User was not added!");
}

?>