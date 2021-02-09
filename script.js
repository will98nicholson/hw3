// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var generatePassword = function () {
  var passLength = window.prompt("choose password length");
  if (passLength < 8) {
    return "password must be at least 8 characters of length"
  };
  if (passLength > 128) {
    return "password cannot be longer than 128 characters in length"
  };
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



