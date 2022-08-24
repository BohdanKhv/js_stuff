// Problem #326
// Title: Power of Three
// Difficulty: Easy
var isPowerOfThree = function(n) {
    if(n === 1) return true
    else if (n > 1 && n % 3 === 0) return isPowerOfThree(n/3)
    else return false
};