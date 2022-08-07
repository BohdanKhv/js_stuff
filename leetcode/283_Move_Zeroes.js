// Problem #: 283
// Title: Move Zeroes
// Difficulty: Easy
const moveZeroes = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[count] = nums[i];
            count++;
        }
    }
    for(let i = count; i < nums.length; i++) {
        nums[i] = 0;
    }
}

// Slower solution
const moveZeroes2 = function(nums) {
    const l = nums.filter(n => n === 0).length;
    for(let i = 0; i < l; i++) {
        nums.push(nums.splice(nums.indexOf(0), 1)[0])
    }
};