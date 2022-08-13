// Problem #: 557
// Title: Reverse Words in a String III
// Difficulty: Easy
var reverseWords = function(s) {
    let words = s.split(' ');
    let newArr = [];

    for(let i = 0; i < words.length; i++) {
        newArr.push(words[i].split('').reverse().join(''))
    }
    return newArr.join(' ')
};

// Faster solution
var reverseWords = function(s) {
    let words = s.split(' ');

    for(let i = 0; i < words.length; i++) {
        words.unshift(words.pop().split('').reverse().join(''))
    }
    return words.join(' ')
};

// One line solution
var reverseWords = function(s) {
    return s.split(' ').map(w => w.split('').reverse().join('')).join(' ')
}