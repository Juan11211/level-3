var ask = require("readline-sync");  
var userInputPhrase = ask.question("What phrase would you like to encrypt? ").toLowerCase();  
var userShiftInput = parseInt(ask.question("How many letters would you like to shift? "));
// console.log(`To encrypt: '${userInputPhrase}', with encryption key-value: ${userShiftInput}.`)

var encrStr = function (inpStr, encrValue) {
    var encrText = "";
    for (var i = 0; i < inpStr.length; i++) {
        var plainCharacter = inpStr.charCodeAt(i);
        if (plainCharacter >= 97 && plainCharacter <= 122) {
            encrText += String.fromCharCode((plainCharacter - 97 + encrValue) % 26 + 97);
        } else if (plainCharacter >= 65 && plainCharacter <= 90) {
            encrText += String.fromCharCode((plainCharacter - 65 + encrValue) % 26 + 65);
        } else {
            encrText += String.fromCharCode(plainCharacter);
        }
    }
    return encrText;
}

console.log(encrStr(userInputPhrase, userShiftInput));

var decrStr = function (inpDecrStr, encrValue) {
    var decrText = "";
    for (var i = 0; i < inpDecrStr.length; i++) {
        var cipherCharacter = inpDecrStr.charCodeAt(i);
        if (cipherCharacter >= 97 && cipherCharacter <= 122) {
            decrText += String.fromCharCode((cipherCharacter - 97 - encrValue + 26) % 26 + 97);
        } else if (cipherCharacter >= 65 && cipherCharacter <= 90) {
            decrText += String.fromCharCode((cipherCharacter - 65 - encrValue + 26) % 26 + 65);
        } else {
            decrText += String.fromCharCode(cipherCharacter);
        }
    }
    return decrText;
}