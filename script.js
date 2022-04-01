// Assignment Code
var characterLength = 8;
var decsion = [];

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",];
var numbers = ["1","2","3","4","5","6","7","8","9",];
var symbols = ["!","@","#","$","%","&","*","?",]




var generateBtn = document.querySelector("#generate");

function getPrompt(){
var length = prompt("How many characters would you like you password to be? must be greater than 8 characters")
  decsion = [];

if (isNaN(length) || length < 8 || length > 128){
  alert("must be greater than 8 character and no longer than 128.");
  return false;
}
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
  return true;
}




function generatePassword() {
  var password = "";
  for(var i = 0; i < length; i++){
    var randomPassword = math.floor(math.random() * decsion.length);
    password = password + decsion[randomPassword];
  }


  
  // TODO: add code to generate the password here

return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 
  if (password) {
    var randomPassword = generatePassword();
    passwordText.value = randomPassword;}

  else {
    passwordText.value = '';
  }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
