const caesar = function(str, num) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        newStr += String.fromCharCode(str.charCodeAt(i) + num);
    }

    return newStr;
};

// Do not edit below this line
module.exports = caesar;
