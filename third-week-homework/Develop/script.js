// Assignment Code

var arrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayCapitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arraySpecial = [];

confirm("Need a new password? Click the button to generate a new one.");
confirm("Please select which criteria to include in the password");

var passwordLength = prompt("Please choose a length of at least 8 characters and no more than 128 characters");

confirm("Please select character types (At lease select one type).");
var number = prompt("How many numbers would you like in your password?");
var letter = prompt("How many lowercase letters would you like in your password?");
var capitalLetter = prompt("How many capital letters would you like in your passoword?");
var speicalCha = prompt("How many special characters would you like in your password?");

alert("Please click button below to generate your new password!");

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
