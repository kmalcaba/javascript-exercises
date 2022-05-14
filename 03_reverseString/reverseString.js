const reverseString = function(str) {
    let newStr = '';
    for (let i = str.length-1; i >= 0; i--) {
        const c = str.charAt(i);
        newStr += c;
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
