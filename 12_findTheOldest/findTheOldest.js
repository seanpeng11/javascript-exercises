const findTheOldest = function(arr) {
    return arr.reduce(function(a, b) {
        let aAge = ("yearOfDeath" in a ? a.yearOfDeath : new Date().getFullYear()) - a.yearOfBirth;
        let bAge = ("yearOfDeath" in b ? b.yearOfDeath : new Date().getFullYear()) - b.yearOfBirth;
        return aAge > bAge ? a : b;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
