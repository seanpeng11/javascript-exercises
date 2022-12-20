const sumAll = function(start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        return "ERROR";
    }
    if (start < 0 || end < 0) {
        return "ERROR";
    }
    if (start > end) {
        return sumAll(end, start);
    }
    return (start + end) * (end - start + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
