// Problem #: 724
// Problem Name: Find Pivot Index
// Difficulty: Easy
const pivotIndex = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        const left = nums.slice(0, i).reduce((a,b) => a+b, 0);
        const right = nums.slice(i + 1).reduce((a,b) => a+b, 0);
        
        if(left === right) {
            return i
        }
    } 
    
    return -1
}

// Faster Solution:
const pivotIndex2 = function(nums) {
    const sum = nums.reduce((a,b) => a + b, 0);
    let leftSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(leftSum === sum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    
    return -1;
}