const reverseString = function(str) {
    let strArray = str.split("");
    let reversedStr = strArray.reverse().join("");
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
