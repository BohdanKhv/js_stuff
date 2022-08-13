// Problem #: 344
// Title: Reverse String
// Difficulty: Easy
var reverseString = function(s) {
    return s.reverse();
}

var reverseString = function(s) {
    const q = s.map( (c,i) => s[s.length-1 - i])
    s.map((c,i) => s[i] = q[i])
};