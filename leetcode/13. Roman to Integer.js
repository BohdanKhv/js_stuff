// Problem #: 14
// Title: Longest Common Prefix
// Difficulty: Easy
var romanToInt = (roman) => {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let sum = 0;
    let prev = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const current = romanMap[roman[i]];
        sum += current < prev ? -current : current;
        prev = current;
    }

    return sum;
}

// Other solution:

var romanToInt = function(s) {
    const hashMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let sum = 0;
    
    for(let i = 0; i < s.length; i++) {
        let prev = hashMap[s[i - 1]];
        sum += hashMap[s[i]];
        
        if(prev && prev < hashMap[s[i]])
            sum -= prev * 2;
    }

    return sum;
};