// variables
var CUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var Clower = ["abcdefghijklmnopqrstuvwxyz"];
var CNumber=[ "0123456789"];
var CSpecial=["!@,#$%&*{}[]/^)("]

// query selector generate
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
// generate password function.
var generatePassword= function(){
// variables
    var Cchoice=[];
    var password="";
    var TotalChoice="";
  
  // this will promt the user for legnth of password.
    var CLength=parseInt(prompt("Enter legnth of password (between 8-128 charchters)."));
  
  // checking if a number is entered and legnth of number.
    if (isNaN(CLength)||CLength<8 || CLength>128) {
      alert("enter numbers only!");
      return  false;
    }

    // asking user if they want upper case characters.
    var uppercasechoice =window.confirm("would you like uppercase in your password?");
// if true, cupper will be added to cchoice
if (uppercasechoice){

  Cchoice+=CUpper;
  window.alert("you will have uppercase characters in your password.")
}else{

  window.alert("you will not  have uppercase characters in your password.")
}


// asking user if they want lower case characters.
var lowercasechoice=window.confirm("would you like lower case in your password?");
// if true, clower will be added to cchoice
if (lowercasechoice){

  Cchoice+=Clower;

  window.alert("you will have lowercase characters in your password.")
}else{

  window.alert("you wont have lowercase characters in your password.")
}


// asking user if they want numbers in the password.
var numericChoice=window.confirm("would you like Numbers in your password?");
// if true, cnumber will be added to cchoice
if (numericChoice){

  Cchoice+=CNumber;

  window.alert("you will have numbers in your password.")
}else{
  window.alert("you chose not to have numbers.")
}


// asking user if they want special charcters in the password.
var specialCharcters=window.confirm("would you like special characters in your password?");
// if true, cspecial will be added to cchoice
if (specialCharcters){

  Cchoice+=CSpecial;
  window.alert("you will have special characters in your password.")
}else{

  window.alert("you chose not to have special characters.")
}

// using for loop to loop through and add all chosen requests in array.
for(var i=0;i<CLength;i++){
  TotalChoice= Cchoice[Math.floor(Math.random() * Cchoice.length)];
   password=password+TotalChoice;
}
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
