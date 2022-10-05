let passwordLengt = document.getElementById('passwordLengt');
let password = document.getElementById('password');
let saveButton = document.getElementById('saveButton');

const generatePassword = (len) => {
    const lowerAlpabhet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlpabhet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberic = "0123456789";
    const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`";

    const data = lowerAlpabhet + upperAlpabhet + numberic + symbol
    let generator = '';
    for (let index = 0; index < len; index++){
        generator += data[~~(Math.random() * data.length)]
    }
    return generator
}
 const getPassword = () =>{
    const newPassword =  generatePassword(passwordLengt.value);
    password.value = newPassword
    setTimeout(() => {
        alert('login')
    }, 1000)
}

const savePassword = () =>{
    document.title = password.value;
saveButton.setAttribute('href' , 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
saveButton.setAttribute('download', 'MyPasswordGerateLOG.txt')
}