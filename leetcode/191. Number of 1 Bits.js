// Problem #: 191
// Title: Number of 1 Bits
// Difficulty: Easy
var hammingWeight = function(n) {
    return n.toString(2).replaceAll('0', '').length
};