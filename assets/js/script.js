// Assignment code here
var specialChar =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
var numericChar = "1234567890".split("");

var finalPassword = "";
var generatePassword = function() {
  
  // Prompt user for password length
  var passwordLength = window.prompt("What is your desired password length? Enter a value between 8 and 128.");
  if (passwordLength >= 8 && passwordLength <= 128) {
  
    // Prompt user for all available options and have them confirm what values they want in their password
    var confirmSpecialChar = window.confirm("Click OK to add special characters, otherwise click CANCEL.");
    var confirmUppercaseChar = window.confirm("Click OK to add uppercase characters, otherwise click CANCEL.");
    var confirmLowercaseChar = window.confirm("Click OK to add lowercase characters, otherwise click CANCEL.");
    var confirmNumericChar = window.confirm("Click OK to add numeric characters, otherwise click CANCEL.");

      // Add characters based on values user has chosen
      if (confirmSpecialChar) {
        finalPassword = finalPassword.concat(specialChar);
        console.log(finalPassword);
      } if (confirmUppercaseChar) {
        finalPassword = finalPassword.concat(uppercaseChar);
        console.log(finalPassword)
      } if (confirmLowercaseChar) {
        finalPassword = finalPassword.concat(lowercaseChar);
        console.log(finalPassword)
      } if (confirmNumericChar) {
        finalPassword = pasfinalPassword.concat(numericChar);
        console.log(finalPassword)
      } if (!confirmSpecialChar && !confirmUppercaseChar && !confirmLowercaseChar && !confirmNumericChar) {
        window.alert("Must select at least one character option")
        return writePassword();
      }
      // for (var i = 0; i < passwordLength.length; i++) {
      //   password += []
      // }
    } else { 
    window.alert("Password length must be between 8 and 128 characters.");
    return writePassword();
  }
};

var randomNumber = Math.floor(Math.random() * finalPassword.length);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);