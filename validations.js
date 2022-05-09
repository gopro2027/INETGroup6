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
    setElementErrorOrCorrect(document.getElementById("fNameVal"),pattern.test(document.getElementById('fname').value));
}

function checkLastName() {
    var pattern = /^[a-zA-Z'.\-\s]{1,30}$/;
    setElementErrorOrCorrect(document.getElementById("lNameVal"),pattern.test(document.getElementById('lname').value));
}

function checkEmail() {
    var pattern = /^[a-z0-9\-_\.']+@[a-z0-9]+\.[a-z0-9]+$/
    setElementErrorOrCorrect(document.getElementById("emailVal"),pattern.test(document.getElementById('email').value));
}

function checkPassword() {
    var pattern = /^(?=.{3,10}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/
    setElementErrorOrCorrect(document.getElementById("passVal"),pattern.test(document.getElementById('pwd').value));
}

function checkMobile() {
    setElementErrorOrCorrect(document.getElementById("mobileVal"),document.getElementById("mobile").value.length != 0);
}

function checkGender() {
    setElementErrorOrCorrect(document.getElementById("genderVal"),document.querySelector("input[name = 'gender']:checked") != null);
}

function checkCity() {
    setElementErrorOrCorrect(document.getElementById("cityVal"), document.getElementById("city").value.length != 0);
}

function checkState() {
    setElementErrorOrCorrect(document.getElementById("stateVal"), document.getElementById("state").value.length != 0);
}

function checkQual() {
    setElementErrorOrCorrect(document.getElementById("qualifyVal"),document.getElementById("qualify").value);
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