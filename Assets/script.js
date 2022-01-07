// Assignment Code
let generateBtn = document.querySelector("#generate");

// set password length between eight and 128

let passwordLength = 0

while (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength)) {
  passwordLength = parseInt(prompt("Your password must be between 8 and 128 characters. How many characters should be in your password?"));
  if (passwordLength < 8) {
    alert("Invalid response. Your password must contain more than seven characters.");
  }
  if (passwordLength > 128) {
    alert("You're aiming high but coming up short. Your password cannot be more than 128 characters.");
  }  
  if (Number.isNaN(passwordLength)) {
    alert("You must enter a numeric response.");
  }
  console.log(passwordLength);

 

  // if (isNaN(passwordLength)) {
  //   alert("You must enter a numeric response.");
  // }
}

// set varialbes to false for comparison

let lowerY = false;
let upperY = false;
let specialY = false;
let numericY = false;

// select whether lowercase, uppercase, numbers or symbols are to be used in the password

while (((lowerY && upperY && specialY && numericY) == false) || ((lowerY == "no") && (upperY == "no") && (specialY == "no") && (numericY == "no"))) {
  lowerY = prompt("Shall we use lowercase letters in your password? Please enter 'yes' or 'no'.");
  upperY = prompt("How about uppercase letters?");
  specialY = prompt("Special characters?");
  numericY = prompt("Throw in a few numbers for good measure?");
  console.log(lowerY, upperY, specialY, numericY);
  if(((lowerY == "no") && (upperY == "no") && (specialY == "no") && (numericY == "no")) == true) {
    alert("You need at least one type of character to generate your password. Please try again.");
     }

}

// set constant values for lower, upper, special and numeric arrays

const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
const special  = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "<", ">", ";", "}", "{", "|", ";"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// initialize empty array 

let passVariables = [];

// select password variables based on yes/no above and concatinate to passVariables

if (lowerY == 'yes') {
  passVariables = passVariables.concat(lower);
}

if (upperY == 'yes') {
  passVariables = passVariables.concat(upper);
}

if (specialY == 'yes') {
  passVariables = passVariables.concat(special);
}

if (numericY == 'yes') {
  passVariables = passVariables.concat(numeric);
}

console.log(passVariables);
console.log(passVariables.length);

// create empty array for 'password'

let password = [];

// add a random character from passVariables until password length = correct

for (let i=0; i < passwordLength; i++) {
   password += passVariables[Math.floor(Math.random() * passVariables.length)];
}

// write password to #password input

let password2 = ""

function writePassword() {
  password2 = document.querySelector("#password");
  password2.value = password;
}

generateBtn.addEventListener("click", writePassword);
