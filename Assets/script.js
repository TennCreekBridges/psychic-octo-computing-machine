// Assignment Code
var generateBtn = document.querySelector("#generate");

// add all character options

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "~!@#$%^&*()_+=<>;}{|";
var numeric = "01234567890";

// set password length between eight and 128

var passwordLength = 0

while (passwordLength < 8 || passwordLength > 128 ){
  passwordLength = parseInt(prompt("Your password must be between eight and 128 characters. How many characters should be in your password?"));
  if (passwordLength < 8) {
    alert("Invalid response. Your password must contain more than seven characters.");
  }
  if (passwordLength > 128) {
    alert("You're aiming high but coming up short. Your password cannot be more than 128 characters.");
  }  

console.log(passwordLength);

  if (passwordLength === NaN || 0 || null) {
    alert("You must enter a numeric response.");
  }
}

// set varialbes to false for comparison

let lower = false;
let upper = false;
let special = false;
let numeric = false;

// select whether lowercase, uppercase, numbers or symbols are to be used in the password

while (((lower && upper && special && numeric) == false) || ((lower == "no") && (upper == "no") && (special == "no") && (numeric == "no"))) {
  lower = prompt("Shall we use lowercase letters in your password? Please enter 'yes' or 'no'.");
  upper = prompt("How about uppercase letters?");
  special = prompt("Special characters?");
  numeric = prompt("Throw in a few numbers for good measure?");
  console.log(lower, upper, special, numeric);
  if(((lower == "no") && (upper == "no") && (special == "no") && (numeric == "no")) == true) {
    alert("You need at least one type of character to generate your password. Please try again.");
     }
}

let passVariables = "";
let password = "";

while (password.length < passwordLength) {


const writePassword = "";

// add event listener to generate button

generateBtn.addEventListener("click", writePassword);
