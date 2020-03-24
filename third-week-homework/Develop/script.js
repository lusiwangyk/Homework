// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacter = "!@#$%^&*()";
var letter = "abcdefghijklmnopqrstuvwxyz";
var capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number ="0123456789";

var passwordLength = prompt("Please choose how many characters would you like in your new password.");
var specialCharacterChoose = confirm ("Would you like any special character in your password?");
var letterChoose = confirm ("Would you like any lowercase letter in your password?");
var capitalLetterChoose = confirm ("Would you like any capital letter in your password?");
var numberChoose = confirm ("Would you like any number in your password?");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var code ="";

  for ( var i = 0 ; i <= passwordLength ; i++) {
    if  (specialCharacterChoose === true && letterChoose === true  && capitalLetterChoose === true && numberChoose === true) {
      var everything = specialCharacter.concat(letter,capitalLetter,number);
      code = code + everything.charAt(Math.floor(Math.random() * Math.floor(everything.length-1))));
    }

    /*else if (specialCharacterChoose === true && letterChoose === true  && capitalLetterChoose === true && numberChoose === false) {
      var part1 = specialCharacter.concat(letter,capitalLetter);
      alert(part1.charAt(Math.floor(Math.random() * Math.floor(part1.length -1) )));
    }*/
  }
  




}
