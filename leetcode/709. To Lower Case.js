// Problem #: 709
// Title: To Lower Case
// Difficulty: Easy
var toLowerCase = function(s) {
    // return s.toLowerCase(); => yeah yeah

    let str = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90)
            str += String.fromCharCode(s[i].charCodeAt() + 32)
        else 
            str += s[i]
    }

    return str
};