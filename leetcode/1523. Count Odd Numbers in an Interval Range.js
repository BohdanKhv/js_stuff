// Problem #: 1523
// Problem Name: Count Odd Numbers in an Interval Range
// Difficulty: Easy
var countOdds = function(low, high) {
    let counter = 0;
    
    for(let i = low; i <=  high; i++) {
        if(i % 2 !== 0) counter++;
    }
        
    return counter;
};

// Faster Solution
var countOdds = function(low, high) {
    if(low % 2 === 0 &&  high % 2 === 0) {
        return (high - low) / 2;
    }
    return parseInt((high - low) / 2) + 1
};

// One loop Solution
var countOdds = function(low, high) {
    return low % 2 === 0 && high % 2 === 0 ? (high - low) / 2 : Math.floor((high - low) / 2) + 1;
};