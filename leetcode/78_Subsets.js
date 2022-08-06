// Problem #: 78
// Title: Subsets
// Difficulty: Medium
const subsets = function(nums) {
    const result = [];
    const helper = function(nums, result, temp) {
        result.push(temp);
        for (let i = 0; i < nums.length; i++) {
            helper(nums.slice(i + 1), result, temp.concat(nums[i]));
        }
    }
    helper(nums, result, []);
    return result;
}