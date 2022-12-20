const removeFromArray = function(arr, ...args) {
    let idx;
    for (const arg of args) {
        idx = arr.indexOf(arg);
        if (idx === -1) continue;
        arr.splice(idx, 1)
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
