var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function passwordPrompt() {
  var passwordLength = parseInt(
    prompt("How long would you like you password to be?"),
    10
  );
  if (Number.isNaN(passwordLength)) {
    alert("Password must be a number.");
    return null;
  }
  if (passwordLength < 10) {
    alert("Password must be at least 10 characters long.");
    return null;
  }

  if (passwordLength > 128) {
    alert("Password must not exceed more than 128 characters.");
    return null;
  }
  var specialLetters = confirm(
    "Press ok to include special characters in your password."
  );

  var lowercaseLetters = confirm(
    "Press ok to nclude lowerase letters in your password."
  );

  var uppercaseLetters = confirm(
    "Press ok to include uppercase letters in your password."
  );

  var numberCharacters = confirm(
    "Press Ok to include numbers in you password."
  );

  if (
    specialLetters === false &&
    lowercaseLetters === false &&
    uppercaseLetters === false &&
    numberCharacters === false
  ) {
    alert("Please select at least one character type for your password.");
    return null;
  }
  //Object to store user input
  var passwordChoices = {
    passwordLength: passwordLength,
    specialLetters: specialLetters,
    lowercaseLetters: lowercaseLetters,
    uppercaseLetters: uppercaseLetters,
    numberCharacters: numberCharacters,
  };

  return passwordChoices;
}

// Gets the random element from array.
function randomCharacter(arr) {
  var randomArraySpot = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomArraySpot];

  return randomElement;
}

// Generates password depending on the users input.

function generatePassword() {
  var password = passwordPrompt();
  var result = [];
  var potentialCharacters = [];
  var absoluteCharacters = [];

  if (!password) return null;

  if (password.specialLetters) {
    potentialCharacters = potentialCharacters.concat(special);
    absoluteCharacters.push(randomCharacter(special));
  }

  if (password.lowercaseLetters) {
    potentialCharacters = potentialCharacters.concat(lowerCase);
    absoluteCharacters.push(randomCharacter(lowerCase));
  }

  if (password.uppercaseLetters) {
    potentialCharacters = potentialCharacters.concat(upperCase);
    absoluteCharacters.push(randomCharacter(upperCase));
  }

  if (password.numberCharacters) {
    potentialCharacters = potentialCharacters.concat(numbers);
    absoluteCharacters.push(randomCharacter(numbers));
  }

  // for loop to loop through the characters
  for (let index = 0; index < password.length; index++) {
    var potentialCharacter = randomCharacter(potentialCharacters);

    result.push(potentialCharacter);
  }

  for (let index = 0; index < absoluteCharacters.length; index++) {
    result[index] = absoluteCharacters[index];
  }
  return result.join("");
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
