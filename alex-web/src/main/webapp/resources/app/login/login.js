/**
 * Created by diegosipin on 05/07/2018.
 */
var user = "diego";
var password = "12345";

function  validateForm() {
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if(username==null || username=="") {
        document.getElementById('usernameAlert').innerHTML = 'Please fill out username';
    }
    if(pass==null || pass==""){
        document.getElementById('passwordAlert').innerHTML = 'Please fill out password';
    } else if(username == user && pass == password) {
        window.alert("login success");
    } else {
        window.alert("username or password incorrect");
    }
}