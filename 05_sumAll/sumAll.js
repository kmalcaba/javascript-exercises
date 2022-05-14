const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0)
        return "ERROR";
    let sum = 0;
    let startRange = num1 < num2 ? num1 : num2;
    let endRange = num1 > num2 ? num1 : num2;
    for(startRange; startRange <= endRange; startRange++)
        sum += startRange;
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
