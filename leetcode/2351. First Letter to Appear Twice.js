// Problem #: 2351
// Title: First Letter to Appear Twice
// Difficulty: Easy
// Time: O(n) where n is the length of the string
var repeatedCharacter = function(s) {
    let hashMap = {};
    
    for(let i = 0; i < s.length; i++) {
        if (hashMap[s[i]] === undefined) hashMap[s[i]] = 1;
        else return s[i]
    }
};