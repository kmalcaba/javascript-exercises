const sumAll = function(num1, num2) {
    if (isNaN(num1) || isNaN(num2))
        return "ERROR";
    let sum = 0;
    for(let i = num1; i <= num2; i++)
        sum += i;
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
