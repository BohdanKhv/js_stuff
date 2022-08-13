// Problem #: 1480
// Problem Name: Running Sum of 1d Array
// Difficulty: Easy
var runningSum = function(nums) {
    let arr = [];
    
    for(let i = 0; i < nums.length; i++) {
        const num = nums.slice(0, i+1).reduce((a,b) => a + b, 0);
        arr.push(num);
    }
    
    return arr;
};