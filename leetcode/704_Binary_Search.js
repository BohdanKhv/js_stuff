// Problem #: 704
// Title: Binary Search
// Difficulty: Easy
var search = (nums, target) => {
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
var search = function(nums, target) {
    return nums.indexOf(target)
};

// Best Solution:
var search = function(nums, target) {
    let left = 0;
    let right = nums.length;

    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target) return mid;
        if(nums[mid] > target) right = mid;
        if(nums[mid] < target) left = mid + 1;
    }
    
    return -1;
};