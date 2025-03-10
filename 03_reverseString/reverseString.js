const reverseString = function(str) {
    let lengthOfString = str.length;
    let emptyString = "";

    for (i=0;i<lengthOfString;i++){
         emptyString += str[str.length-1];
         str = str.slice(0,-1);

    }
    return emptyString;

};
console.log(reverseString('hello'))
// Do not edit below this line
module.exports = reverseString;
