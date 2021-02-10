// Assignment Code
var generateBtn = document.querySelector("#generate");
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUM_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password

}
function generatePassword() {

  passLength = window.prompt("choose password length");
  if (passLength < 8 || passLength > 128) {
    return "password must be at least 8 characters and no longer than 128 characters in length"
  };

  var includeCapital = window.confirm("include capital letters?");

  var includeNumber = window.confirm("include numbers?");

  var includeSymbol = window.confirm("include symbols?");
  var charCodes = LOWERCASE_CHAR_CODES

  if (includeCapital === true) { charCodes = charCodes.concat(UPPERCASE_CHAR_CODES); }
  if (includeNumber === true) { charCodes = charCodes.concat(NUM_CHAR_CODES); }
  if (includeSymbol === true) { charCodes = charCodes.concat(SYMBOL_CHAR_CODES); }

  const chosenChars = [];
  for (let i = 0; i < passLength; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    chosenChars.push(String.fromCharCode(characterCode));
  } return chosenChars.join('');


}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



