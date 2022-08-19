// Problem #: 520
// Title: Detect Capital
// Difficulty: Easy
var detectCapitalUse = function(word) {
    if(word.length < 2) return true;

    let first = word.charCodeAt(0) < 91;
    let second = word.charCodeAt(1) < 91;

    for(let i = 2; i < word.length; i++) {
        let temp = word.charCodeAt(i) < 91;
        if(second !== temp) return false
    }

    return !first && second ? false : true;
};

// Faster solution
var detectCapitalUse = function(word) {
    let bool = false;
    if(word.toUpperCase() === word) bool = true;
    if(word.toLowerCase() === word) bool = true;
    if(word[0].toUpperCase() === word[0] && (word.slice(1).toUpperCase() === word.slice(1) || word.slice(1).toLowerCase() === word.slice(1))) bool = true;

    return bool;
};