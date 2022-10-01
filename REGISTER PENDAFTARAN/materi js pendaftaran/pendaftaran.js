let inputUsername = document.getElementById('inputUsername');
let inputPassword = document.getElementById('inputPassword');
let buttonLogin = document.getElementById('buttonLogin');
let buttonLogout = document.getElementById('buttonLogout');
let prof = document.getElementById('prof');
let master = document.getElementById('master');
let begginer = document.getElementById('begginer');
let hacker = document.getElementById('hacker');

prof.style.display = "none";
master.style.display ="none";
begginer.style.display ="none";
hacker.style.display = "none";


function login1(){
    localStorage.setItem("username", inputUsername.value);
    buttonLogout.style.display = "none";

    if(inputUsername.value == "repin" && inputPassword.value == "123"){
        inputUsername.style.display = "none";
        inputPassword.style.display = "none";
        buttonLogin.style.display = "none";
        localStorage.setItem("role", "profesional");
        prof.style.display = "block";
        master.style.display = "none";
        begginer.style.display = "none";
        hacker.style.display = "none";
    } else {
        inputUsername.style.display = "none";
        inputPassword.style.display = "none";
        buttonLogin.style.display = "none";
        localStorage.setItem("role", "profesional");
        prof.style.display = "none";
        master.style.display = "none";
        begginer.style.display = "none";
        hacker.style.display = "block";
    }
     
    if(inputUsername.value == "revin" && inputPassword.value == "142"){
        inputUsername.style.display = "none";
        inputPassword.style.display = "none";
        buttonLogin.style.display = "none";
        localStorage.setItem("role", "profesional");
        prof.style.display = "none";
        master.style.display = "block";
        begginer.style.display = "none";
        hacker.style.display = "none";
    } else {
        inputUsername.style.display = "none";
        inputPassword.style.display = "none";
        buttonLogin.style.display = "none";
        localStorage.setItem("role", "profesional");
        prof.style.display = "none";
        master.style.display = "none";
        begginer.style.display = "none";
        hacker.style.display = "block";
    }
}