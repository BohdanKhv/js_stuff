// Problem #: 392
// Title: Is Subsequence
// Difficulty: Easy
var isSubsequence = function(s, t) {
    let j = 0;

    for (let i = 0; i < t.length; i++) {
        if(t[i] === s[j]) j++;
    }
    
    return j === s.length
};