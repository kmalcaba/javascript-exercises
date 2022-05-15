const caesar = function(str, num) {
    let newStr = '';

    while (num > 26)
        num -= 26;

    for (let i = 0; i < str.length; i++) {
        const c = str.charAt(i);
        const upperCase = str.charCodeAt(i) <= 90;
        if(c.match(/[a-z]/i)) {
            let charCode = str.charCodeAt(i) + num;

            // converts uppercase to uppercase only
            while(upperCase && charCode > 90) {
                charCode -= 26;
            }

            while(charCode > 122)
                charCode -= 26;

            if (charCode < 65)
                charCode += 26;

            newStr += String.fromCharCode(charCode);
        }
        else
            newStr += c;
    }  

    return newStr;
};

// Do not edit below this line
module.exports = caesar;
