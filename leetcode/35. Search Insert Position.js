// Problem #: 35
// Title: Search Insert Position
// Difficulty: Easy
var searchInsert = (nums, target) => {
    let i = 0;
    while (i < nums.length && nums[i] < target) {
        i++;
    }
    return i;
}

// Faster solution
var searchInsert = function(nums, target) {
    const q = nums.filter(n => n < target);
    const index = nums.indexOf(q[q.length-1])
    
    return index + 1
};

// Binary Search Solution
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return left
};