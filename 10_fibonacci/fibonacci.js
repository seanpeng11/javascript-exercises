const fibonacci = function(n) {
    n = parseInt(n);
    if (n <= 0) {
        return "OOPS";
    }
    if (n < 3) {
        return 1;
    }
    let cur = 1, prev = 1, tmp = 0;
    for (let i = 3; i <= n; i++) {
        tmp = cur
        cur += prev;
        prev = tmp;
    }
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;
