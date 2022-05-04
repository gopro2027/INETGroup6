var regName = /^[a-zA-Z'.\-\s]{1,30}$/;
var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
if(!regName.test(fname)){
    alert('Invalid First name')
}
if(!regName.test(lname)){
    alert('Invalid Last name')
}
else{
    alert('Valid name given')
}
