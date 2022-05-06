var notReady = false;

function formVal() {
    notReady = false;
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();
    checkMobile();
    checkGender();
    checkCity();
    checkState();
    checkQual();

    //Fee free to rename this
    phpTime();
}

function checkFirstName() {
    var pattern = /^[a-zA-Z'.\-\s]{1,30}$/;
    if (pattern.test(document.getElementById('fname').value)) {
        document.getElementById("fNameVal").innerHTML = "<span style='color:green'>Correct</span>";
    } else {
        document.getElementById("fNameVal").innerHTML = "<span style='color:red'>Error</span>";
        notReady = true;
    }
}

function checkLastName() {
    var pattern = /^[a-zA-Z'.\-\s]{1,30}$/;
    if (pattern.test(document.getElementById('lname').value)) {
        document.getElementById("lNameVal").innerHTML = "<span style='color:green'>Correct</span>";
    } else {
        document.getElementById("lNameVal").innerHTML = "<span style='color:red'>Error</span>";
        notReady = true;
    }
}

function checkEmail() {
    var pattern = /^[a-z0-9\-_\.']+@[a-z0-9]+\.[a-z0-9]+$/
    if (pattern.test(document.getElementById('email').value)) {
        document.getElementById("emailVal").innerHTML = "<span style='color:green'>Correct</span>";
    } else {
        document.getElementById("emailVal").innerHTML = "<span style='color:red'>Error</span>";
        notReady = true;
    }
}

function checkPassword() {
    var pattern = /^(?=.{3,10}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/
    if (pattern.test(document.getElementById('pwd').value)) {
        document.getElementById("passVal").innerHTML = "<span style='color:green'>Correct</span>";
    } else {
        document.getElementById("passVal").innerHTML = "<span style='color:red'>Error</span>";
        notReady = true;
    }
}

function checkMobile() {
    if (document.getElementById("mobile").value.length == 0) {
        document.getElementById("mobileVal").innerHTML = "<span style='color:red'>Error</span>";
        notReady = true;
    } else {
        document.getElementById("mobileVal").innerHTML = "<span style='color:green'>Correct</span>";
    }
}

function checkGender() {
    if (document.querySelector("input[name = 'gender']:checked") != null) {
        document.getElementById("genderVal").innerHTML = "<span style='color:green'>Correct</span>";
    } else {
        document.getElementById("genderVal").innerHTML = "<span style='color:red'>Error</span>";
        notReady = true;
    }
}

function checkCity() {
    if (document.getElementById("city").value.length == 0) {
        document.getElementById("cityVal").innerHTML = "<span style='color:red'>Error</span>";
        notReady = true;
    } else {
        document.getElementById("cityVal").innerHTML = "<span style='color:green'>Correct</span>";
    }
}

function checkState() {
    if (document.getElementById("state").value.length == 0) {
        document.getElementById("stateVal").innerHTML = "<span style='color:red'>Error</span>";
        notReady = true;
    } else {
        document.getElementById("stateVal").innerHTML = "<span style='color:green'>Correct</span>";
    }
}

function checkQual() {
    if (document.getElementById("qualify").value) {
        document.getElementById("qualifyVal").innerHTML = "<span style='color:green'>Correct</span>";
    } else {
        document.getElementById("qualifyVal").innerHTML = "<span style='color:red'>Error</span>";
        notReady = true;
    }
}

//Change this when ready
function phpTime() {
    if (notReady) {
        alert("'NONE SHALL PASS' -BlackKnight")
    } else {
        alert("Ready to go, captain")
    }
}