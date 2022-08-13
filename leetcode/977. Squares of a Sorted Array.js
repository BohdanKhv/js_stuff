// Problem #: 977
// Title: Squares of a Sorted Array
// Difficulty: Easy
const sortedSquares = function(nums) {
    let arr = [];
    
    for(let i = 0; i < nums.length; i++) {
        arr.push(Math.pow(nums[i], 2));
    }
    
    return arr.sort((a,b) => a-b);
};

// Faster solution:
const sortedSquares2 = function(nums) {
    return nums.map(n => Math.pow(n,2)).sort((a,b) => a-b);
};

// Faster solution:
const sortedSquares3 = function(nums) {
    return nums.map(n => n*n).sort((a,b) => a-b);
}
