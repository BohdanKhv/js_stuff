// Problem #231
// Title: Power of Two
// Difficulty: Easy
var isPowerOfTwo = function(n) {
    if(n === 1) return true
    else if ( n > 1 && n % 2 === 0 ) return isPowerOfTwo(n / 2)
    else return false
};