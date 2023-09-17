const palindromes = function (str) {
    const alphaOnly = keepOnlyAlpha(str);
    const reversedAlphaOnly = reverseStr(alphaOnly);
    return alphaOnly.toLowerCase() === reversedAlphaOnly.toLowerCase();
};

function keepOnlyAlpha(str) {
    const remove = "?!., ";
    let strArr = str.split("");
    const alphaOnly = strArr.filter(char => !(remove.includes(char)));
    return alphaOnly.join("");;
}

function reverseStr(str) {
    let strArr = str.split("");
    const reversed = strArr.reverse();
    return reversed.join("");
}

// Do not edit below this line
module.exports = palindromes;
