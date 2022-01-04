// Assignment Code
var generateBtn = document.querySelector("#generate");

// add all character options


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

var lowerY = false;
var upperY = false;
var specialY = false;
var numericY = false;

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

const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const special  = ["~","!","@","#","$","%","^","&","*","(",")","_","+","=","<",">",";","}","{","|",";"];
const numeric = ["0","1","2","3","4","5","6","7","8","9","0"];

// select password variables based on yes/no above and concatinate to passVariables

var passVariables = "";

if (lowerY == 'yes') {
   (passVariables = (passVariables + lower));
}

if (upperY == 'yes') {
  (passVariables = (passVariables + upper));
}

if (specialY == 'yes') {
  (passVariables = (passVariables + special));
}

if (numericY == 'yes') {
  (passVariables = (passVariables + numeric));
}



var password = "";

console.log(passVariables);

// while (password.length < passwordLength) {

// for (var i = 0; i < passwordLength; i++ ) {
//   var rand = Math.round(Math.random() * passVariables.length);
//   var password += passVariables.charAt(rand);
// }


// if (lower == yes) {
  

const writePassword = "";

// add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// const lower = "abcdefghijklmnopqrstuvwxyz";
// const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const special  = "~!@#$%^&*()_+=<>;}{|";
// const numeric = "01234567890";
