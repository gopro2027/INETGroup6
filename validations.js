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
    submitForm();
}

//rick worked on validation!

function checkFirstName() {
    var pattern = /^[a-zA-Z'.\-\s]{1,30}$/;
    val = document.getElementById('fname').value;
    elem = document.getElementById("fNameVal");
    setElementErrorOrCorrect(elem,pattern.test(val));
}

function checkLastName() {
    var pattern = /^[a-zA-Z'.\-\s]{1,30}$/;
    val = document.getElementById('lname').value;
    elem = document.getElementById("lNameVal");
    setElementErrorOrCorrect(elem,pattern.test(val));
}

function checkEmail() {
    var pattern = /^[a-z0-9\-_\.']+@[a-z0-9]+\.[a-z0-9]+$/
    val = document.getElementById('email').value;
    elem = document.getElementById("emailVal");
    setElementErrorOrCorrect(elem,pattern.test(val));
}

function checkPassword() {
    var pattern = /^(?=.{3,10}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/
    val = document.getElementById('pwd').value;
    elem = document.getElementById("passVal");
    setElementErrorOrCorrect(elem,pattern.test(val));
}

function checkMobile() {
    val = document.getElementById("mobile").value;
    elem = document.getElementById("mobileVal");
    setElementErrorOrCorrect(elem,val.length != 0);
}

function checkGender() {
    val = document.querySelector("input[name = 'gender']:checked");
    elem = document.getElementById("genderVal");
    setElementErrorOrCorrect(elem,val != null);
}

function checkCity() {
    val = document.getElementById("city").value;
    elem = document.getElementById("cityVal");
    setElementErrorOrCorrect(elem, val.length != 0);
}

function checkState() {
    val = document.getElementById("state").value;
    elem = document.getElementById("stateVal");
    setElementErrorOrCorrect(elem, val.length != 0);
}

function checkQual() {
    val = document.getElementById("qualify").value;
    elem = document.getElementById("qualifyVal");
    setElementErrorOrCorrect(elem,val);
}

function setElementErrorOrCorrect(elem, valid) {
    if (valid) {
        elem.innerHTML = "<span style='color:green'>Correct</span>";
    } else {
        elem.innerHTML = "<span style='color:red'>Error</span>";
        notReady = true;
    }
}

//Change this when ready
function submitForm() {
    if (notReady) {
        alert("Not ready!");
    } else {
        var form = $('#userForm');
        var actionUrl = form.attr('action');

        $.ajax({
            type: "POST",
            url: actionUrl,
            data: form.serialize(),
            success: function(data)
            {
                alert(data);
            }
        });
    }
}