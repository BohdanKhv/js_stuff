// Problem #: 387
// Title: First Unique Character in a String
// Difficulty: Easy
// Time: O(2*n) where n is the length of the string
var firstUniqChar = function(s) {
    const hashMap = {};

    for(let i = 0; i < s.length; i++) {
        if(hashMap[s[i]] === undefined) hashMap[s[i]] = 1;
        else hashMap[s[i]]++
    }

    for(let i = 0; i < s.length; i++) {
        if(hashMap[s[i]] === 1) return i;
    }

    return -1;
};

// Time: O(n) where n is the length of the string
var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
    }

    return -1;
};