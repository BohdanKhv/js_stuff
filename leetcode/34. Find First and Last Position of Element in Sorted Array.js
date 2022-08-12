// Problem #: 34
// Title: Find First and Last Position of Element in Sorted Array
// Difficulty: Medium
var searchRange = function(nums, target) {
    let index = [];
    let left = 0;
    let right = nums.length;

    // Binary search to find the first index of the target
    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        // If the target is found and mid - 1 is not the target, then the first index is mid
        if(nums[mid] === target && nums[mid - 1] !== target) {
            index.push(mid);
            // Exit the loop
            right = -1;
        }

        if(nums[mid] >= target) right = mid;
        else if (nums[mid] < target) left = mid + 1;
    }

    // Reset the left and right pointers
    left = 0;
    right = nums.length;

    // Binary search to find the last index of the target
    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        // If the target is found and mid + 1 is not the target, then the last index is mid
        if(nums[mid] === target && nums[mid + 1] !== target) {
            index.push(mid);
            // Exit the loop
            right = -1;
        }

        if(nums[mid] <= target) left = mid + 1;
        else if (nums[mid] > target) right = mid;
    }

    // If the target is not found, return [-1, -1]
    return index.length !== 2 ? [-1, -1] : index;
};