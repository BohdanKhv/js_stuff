// Problem #: 2259
// Title: Remove Digit From Number to Maximize Result
// Difficulty: Easy
// Time: O(n), Space: O(1) where n is the number of digits in the number
var removeDigit = function(number, digit) {
    let max = 0;

    // Convert number to an array of digits
    // Find digit in number
    // Remove digit from number
    // Compare new number with max
    for(let i = 0; i < number.length; i++) {
        let temp = number.split('');
        if(temp[i] === digit) {
            temp.splice(i, 1);
            if(temp.join('') > max) max = temp.join('')
        }
    }

    return max
};