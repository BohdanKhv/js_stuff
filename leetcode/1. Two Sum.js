// Problem #: 1
// Title: Two Sum
// Difficulty: Easy
var twoSum = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hash[complement] !== undefined) {
            return [hash[complement], i];
        }
        hash[nums[i]] = i;
    }
    return [];
}

// Shorter solution:
var twoSum = function(nums, target) {
    let hash = {}
    
    for(let i = 0; i < nums.length; i++) {
        let left = target - nums[i];
        if(hash[left] !== undefined) return [hash[left], i]
        hash[nums[i]] = i;
    }
};

// Slow solution:
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i !== j && nums[i] + nums[j] === target) return [i, j]
        }
    }
};