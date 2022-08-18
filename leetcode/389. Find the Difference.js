// Problem #: 389
// Title: Find the Difference
// Difficulty: Easy
var findTheDifference = function(s, t) {
    let str = t;

    for(let i = 0; i < s.length; i++) {
        str = str.replace(s[i], '');
    }

    return str;
};