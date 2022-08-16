// Problem #: 1816
// Title: Truncate Sentence
// Difficulty: Easy
var truncateSentence = function(s, k) {
    return s.split(' ').slice(0, k).join(' ');
};