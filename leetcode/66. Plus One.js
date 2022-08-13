// Problem #: 66
// Title: Plus One
// Difficulty: Easy
const plusOne = function(digits) {
    let leftover = 1;
    let curr = digits.length-1;
    
    while ( leftover > 0 && curr >= 0 ) {
        const num = digits[curr] + leftover;
        digits[curr] = num % 10;
        leftover = Math.floor(num / 10);
        curr--;
    }
    
    if(leftover > 0) digits.unshift(leftover);
    
    return digits;
};