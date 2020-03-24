// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacter = "!@#$%^&*()";
var letter = "abcdefghijklmnopqrstuvwxyz";
var capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number ="0123456789";



// Write password to the #password input
function writePassword() {
  var passwordLength1 = prompt("Please choose how many characters would you like in your new password (from 8 to 128).");
  if (passwordLength1 < 8 || passwordLength1 > 128) {
    alert("Please choose a number between 8 and 128.");
    return;
  }
  var specialCharacterChoose1 = confirm ("Would you like any special characters in your password?");
  var letterChoose1 = confirm ("Would you like any lowercase letters in your password?");
  var capitalLetterChoose1 = confirm ("Would you like any capital letters in your password?");
  var numberChoose1 = confirm ("Would you like any numbers in your password?");
  if(!specialCharacterChoose1 && !letterChoose1 && !capitalLetterChoose1 && !numberChoose1) {
    alert("You must at least choose one type!");
    return;
  }
  let password = generatePassword(passwordLength1, specialCharacterChoose1, letterChoose1, capitalLetterChoose1, numberChoose1);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword(passwordLength, specialCharacterChoose, letterChoose, capitalLetterChoose, numberChoose) {
  //var code ="";
  let password = "";
  var charList = "";
  if(specialCharacterChoose) {
    charList += specialCharacter;
    password += specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
  }
  if(letterChoose) {
    charList += letter;
    password += letter[Math.floor(Math.random() * letter.length)];
  }
  if(capitalLetterChoose) {
    charList += capitalLetter;
    password += capitalLetter[Math.floor(Math.random() * capitalLetter.length)];
  }
  if(numberChoose) {
    charList += number;
    password += number[Math.floor(Math.random() * number.length)];
  }
  for ( var i = password.length ; i < passwordLength ; i++) {
    password += charList[Math.floor(Math.random() * charList.length)];
  }
  console.log(password);
  return password;
}
