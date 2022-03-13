// Assignment code here
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var uppercaseChar = "";
var lowercaseChar = "";
var randomNumber = function(min,max) {
var value = Math.floor(Math.random() * (max - min + 1) + min);

return value;
}


var generatePassword = function() {
  
  var passwordLength = window.prompt("What is your desired password length? Enter a value between 8 and 128.");
  if (passwordLength >= 8 && passwordLength <= 128) {
  
    var confirmSpecialChar = window.confirm("Click OK button to add special characters, otherwise click CANCEL.");
    var confirmUppercaseChar = window.confirm("Click OK button to add uppercase characters, otherwise click CANCEL.");
    var confirmLowercaseChar = window.confirm("Click OK button to add lowercase characters, otherwise click CANCEL.");
    var confirmNumericChar = window.confirm("Click OK button to add numeric characters, otherwise click CANCEL.");

    if (confirmSpecialChar) {
      console.log("special char")
    } if (confirmUppercaseChar) {
      console.log("uppercase")
    } if (confirmLowercaseChar) {
      console.log("lowercase")
    } if (confirmNumericChar) {
      console.log("numeric")
    }
  }
  else { 
    window.alert("Password length must be between 8 and 128 characters.");
    
  }
  //return generatePassword;
};

  


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