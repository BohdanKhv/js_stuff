// Problem #: 409
// Title: Longest Palindrome
// Difficulty: Easy
var longestPalindrome = function(s) {
    let hash = {};
    let counter = 0;
    let leftover = 0;

    for(let i = 0; i < s.length; i++) {
        if(hash[s[i]] === undefined)
            hash[s[i]] = 1;
        else {
            hash[s[i]] = hash[s[i]] + 1;
        }
    }

    for (var l in hash) {
        if (hash[l] > 1) {
            if(hash[l] % 2 === 0)
                counter += hash[l];
            else {
                leftover = 1;
                counter += hash[l] - 1;
            }
        } else {
            leftover = 1;
        }
    }
    
    return counter % 2 === 0 ? counter + leftover : counter
};