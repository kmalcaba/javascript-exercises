const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z0-9]/g, "")
    let end = str.length - 1;
    for (let start = 0; start <= end; start++, end--) {
        if(str.charAt(start) !== str.charAt(end))
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
