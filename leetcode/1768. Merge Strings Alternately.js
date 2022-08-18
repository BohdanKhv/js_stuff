// Problem #: 1768
// Title: Merge Strings Alternately
// Difficulty: Easy
var mergeAlternately = function(word1, word2) {
    let str = '';
    let count1 = 0;
    let count2 = 0;
    
    for(let i = 0; i < word1.length + word2.length; i++) {
        if((i % 2 === 0 && count1 < word1.length) || count2 === word2.length) {
            str = str + word1[count1];
            count1++;
        } else if (count2 < word2.length) {
            str = str + word2[count2];
            count2++;
        }
    }
    
    return str;
};