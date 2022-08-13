// Problem #: 268
// Problem name: Missing Number
// Problem description:
const missingNumber = function(nums) {
    for(let i = 0; i <= nums.length; i++) {
        if(!nums.includes(i)) return i
    }
}

// Faster solution:
const missingNumber2 = function(nums) {
    let sum = 0;
    // sum of all numbers from 1 to n
    let expectedSum = (nums.length * (nums.length + 1)) / 2;
    // sum of all numbers in array
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    // return the difference between the two sums
    return expectedSum - sum;
};