// Problem #: 704
// Title: Binary Search
// Difficulty: Easy
const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Faster Solution:
const search2 = function(nums, target) {
    return nums.indexOf(target)
};