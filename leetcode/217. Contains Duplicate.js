// Problem #: 217
// Title: Contains Duplicate
// Difficulty: Easy
// Fast solution
var containsDuplicate = function(nums) {
    let hashMap = {}
    
    for(let i = 0; i < nums.length; i++) {
        if(hashMap[nums[i]])
            return true
        else
            hashMap[nums[i]] = true
    }
    
    return false
};

// One line solution
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
}

// Slow solution
var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums.indexOf(nums[i]) !== i) return true
    }
    return false
};