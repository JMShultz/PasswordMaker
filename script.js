
var cUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var clower = ["abcdefghijklmnopqrstuvwxyz"];
var CNumber=[ "0123456789"];
var CSpecial=["!@,#$%&*{}[]/^)("]


var generateBtn = document.querySelector("#generate");

// Get references to the #generate element

var generatePassword= function(){

    var Cchoice=[];
    var password="";
    var TotalChoice="";
  
  
    var CLength=parseInt(prompt("Enter legnth of password (between 8-128 charchters)."));
  
  
    if (isNaN(CLength)||CLength<8 || CLength>128) {
      alert("enter correct amount!");
      return  false;
    }

}

















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
