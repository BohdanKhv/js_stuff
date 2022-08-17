// Problem #: 804
// Title: Unique Morse Code Words
// Difficulty: Easy
var uniqueMorseRepresentations = function(words) {
    const table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const hash = {};

    for(let i = 0; i < words.length; i++) {
        let wordCode = '';

        for(let j = 0; j < words[i].length; j++) {
            const charCode = table[words[i][j].toUpperCase().charCodeAt(0) - 65];
            wordCode = wordCode + charCode;
        }

        if(hash[wordCode] === undefined) hash[wordCode] = 1
    }

    return Object.keys(hash).length;
};