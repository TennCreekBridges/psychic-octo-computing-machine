// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add In All Password Character Options

var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", +"=", ";", ":", "'", ">", "<", "?"];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Response from clicking button

function generatePassword() {
  console.log("Let's generate a secure password!")
}

var password = "";
var passwordChar = "";

// Set password length between eight and 128

var passwordLength = 0

while (passwordLength < 8 || passwordLength > 128 ){
  passwordLength = parseInt(prompt("Your password must be between eight and 128 characters. How many characters should be in your password?"));
  if (passwordLength < 8) {
    alert("Invalid response. Your password must contain more than seven characters.")
  }
  if (passwordLength > 128) {
    alert("You're aiming high but coming up short. Your password cannot be more than 128 characters.")
  }  
}

// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
