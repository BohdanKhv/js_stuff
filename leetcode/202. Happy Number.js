// Problem #: 202
// Title: Happy Number
// Difficulty: Easy
var isHappy = function(n) {
    let number = n;
    let hashMap = {};

    while(number > 1 ) {
        // convert number to string
        // split string into array of digits
        // Calculate the sum of the squares of the digits
        number = number.toString().split('').reduce((a,b) => a + b * b, 0);

        // if the number is in the hashMap, return false
        if(hashMap[number] === undefined)
            hashMap[number] = 1
        else
            return false;
    }

    return number === 1;
};