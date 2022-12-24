const palindromes = function (s) {
    s = s.toLowerCase();
    let left = 0, right = s.length - 1
    while (left < right) {
        while (!((/[a-z]/i).test(s.charAt(left))) && left < right) {
            left++;
        }
        while (!((/[a-z]/i).test(s.charAt(right))) && right > left) {
            right--;
        }
        if (s.charAt(left) !== s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
