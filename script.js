// Assignment Code
var characterLength = 8;
var decsion = [];

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",];
var numbers = ["1","2","3","4","5","6","7","8","9",];
var symbols = ["!","@","#","$","%","&","*","?",]




var generateBtn = document.querySelector("#generate");


var length = prompt("How many characters would you like you password to be? must be greater than 8 characters")

if (isNaN(length)) || length < 8 || length > 128){
  alert("must be greater than 8 character and no longer than 128.");
  
  if (confirm("Upper Case characters?")){
    decsion = decsion.concat(uppercase)
  }

  if (confirm("Lower case characters?")){
    decsion = decsion.concat(lowercase)
  }
  
  if (confirm("Any numbers?")){
    decsion = decsion.concat(numbers)
  }
  if (confirm("Any symbols?")){
    decsion = decsion.concat(symbols)
  }
}



function generatePassword() {
  var password = "password";
  var length = prompt("How many characters would you like you password to be? must be greater than 8 characters")


  
  // TODO: add code to generate the password here

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  if (password) {
    var radomPassword = generatePassword();
    passwordText.value = randomPassword;}

  else {
    passwordNew.value = '';
  }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
