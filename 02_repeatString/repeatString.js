const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let repeatedStr = "";
    for (i = 0; i < num; i++) {
        repeatedStr += string;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
