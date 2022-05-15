const caesar = function(str, num) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        const c = str.charAt(i);
        if(c.match(/[a-z]/i)) {
            let charCode = str.charCodeAt(i) + num;
            if ((charCode > 90 && charCode < 97) || (charCode > 122 && charCode < 97) )
                charCode -= 26;
            else if (charCode < 65)
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
