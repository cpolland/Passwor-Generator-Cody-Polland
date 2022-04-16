var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W','X','Y','Z',];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ["!","@","#","$","%","^","&","*","(",")"];

var generateBtn = document.querySelector('#generate');

generateBtn.addEventListener('click', writePassword);


function randomizer(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}


function createPassword() {
  var choices = passWordCriteria();
  var outcomes = [];
  var potentialCharacters = [];
  var definateCharacters = [];
  if (!choices) return null;

  if (choices.needSpecialCharacters) {
    potentialCharacters = potentialCharacters.concat(special);
    definateCharacters.push(randomizer(special));
  }if (choices.hasNumbers) {
    potentialCharacters = potentialCharacters.concat(numbers);
    definateCharacters.push(randomizer(numbers));
  }
  if (choices.needLowercaseCharacters) {
    potentialCharacters = potentialCharacters.concat(lowerCase);
    definateCharacters.push(randomizer(lowerCase));
  } if (choices.needUppercaseCharacters) {
    potentialCharacters = potentialCharacters.concat(upperCase);
    definateCharacters.push(randomizer(upperCase));
  }

  for (var i = 0; i < choices.length; i++) {
    var possibleCharacter = randomizer(potentialCharacters);

    outcomes.push(possibleCharacter);
  }

  for (var i = 0; i < definateCharacters.length; i++) {
    outcomes[i] = definateCharacters[i];
  }
  return outcomes.join('');
}

function passWordCriteria() {
  var passWordCriteriaLength = parseInt(
    prompt('How long would you like your password to be?'),
  );
  if (Number.isNaN(passWordCriteriaLength)) {
    alert('Please choose a number between 1 and 8');
    return null;
  }
  if (passWordCriteriaLength < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  var needSpecialCharacters = confirm(
    'Add special Characters?'
  );
  var hasNumbers = confirm(
    'Add Numbers.'
  );
  var needLowercaseCharacters = confirm(
    'Add lowercase Characters.'
  );
  var needUppercaseCharacters = confirm(
    'Add uppercase characters.'
  );
  if (
    needSpecialCharacters === false &&
    hasNumbers === false &&
    needLowercaseCharacters === false &&
    needUppercaseCharacters === false
  ) {
    alert('please pick on type');
    return null;
  }

 
  var passwordObject = {
    length: length,
    needSpecialCharacters: needSpecialCharacters,
    hasNumbers: hasNumbers,
    needLowercaseCharacters: needLowercaseCharacters,
    needUppercaseCharacters: needUppercaseCharacters,
  };

  return passwordObject;
}

function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}



