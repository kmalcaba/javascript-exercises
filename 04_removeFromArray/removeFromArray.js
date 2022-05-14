const removeFromArray = function(arr, ...items) {
    let newArr = arr;

    for(let i of items) {
        newArr = newArr.filter(e => i !== e);
    }

    return newArr;  
};

// Do not edit below this line
module.exports = removeFromArray;
