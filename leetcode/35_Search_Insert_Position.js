// Problem #: 35
// Title: Search Insert Position
// Difficulty: Easy
const searchInsert = (nums, target) => {
    let i = 0;
    while (i < nums.length && nums[i] < target) {
        i++;
    }
    return i;
}

// Faster solution
var searchInsert2 = function(nums, target) {
    const q = nums.filter(n => n < target);
    const index = nums.indexOf(q[q.length-1])
    
    return index + 1
};