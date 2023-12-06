const passwordBox=document.getElementById('password');
const length=12;
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
const allChar=upperCaseLetters+lowerCaseLetters+numbers+symbols;
function generatePassword(){
    let password=''
    password+=upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
    password+=lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    while(password.length<length){
        password+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    passwordBox.value=password;
}
function copyPassword(){
    //passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    document.getElementById('copyclick').
      
}
generatePassword();