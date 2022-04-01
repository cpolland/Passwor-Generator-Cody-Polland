// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = prompt("How many characters would you like you password to be? must be greater than 8 characters")
{
    length <= 8;
}


function generatePassword() {
  var password = "password";
  
  // TODO: add code to generate the password here

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
