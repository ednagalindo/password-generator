function generatePassword() {
  
  var passwordCharacters = [];
  var specialCharacters = "!@#$%^&*~_{}=:;/()";
  var containLowercase = false;
  var containUppercase = false;
  var containNumbers = false;
  var containSpecial = false;
  var passwordLength = false;
  while (!Number.isInteger(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    
  passwordLength = prompt("MUST type digit between 8 and 128!");
  passwordLength = (passwordLength === null) ? null : Number(passwordLength);
  }
  console.log(passwordLength);
  
  if (!containLowercase && !containUppercase && !containNumbers && !containSpecial) {
    containLowercase = confirm("Would you like your password to contain lowercase letters?");
    containUppercase = confirm("Would you like your password to contain uppercase letters?");
    containNumbers = confirm("Would you like your password to contain numbers?");
    containSpecial = confirm("Would you like your password to contain special characters?");
  }

  if (containLowercase) {
    for (var i = 97; i <= 122; i++) {
      passwordCharacters.push(String.fromCharCode(i));
    }
  }

  if (containUppercase) {
    for (var i = 65; i <= 90; i++) {
      passwordCharacters.push(String.fromCharCode(i));
    }
  }

  if (containNumbers) {
    for (var i = 0; i <= 9; i++) {
      passwordCharacters.push(i.toString());
    }
  }

  if (containSpecial) {
    var specialCharactersArray = specialCharacters.split("");
    passwordCharacters = passwordCharacters.concat(specialCharactersArray);
  }

  console.log(passwordCharacters);
  var finalpassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    finalpassword += passwordCharacters[randomIndex];
  }
  return finalpassword;
}
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

