// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var generatePassword = function () {
  window.prompt("choose password length");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



