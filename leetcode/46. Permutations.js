// Problem #: 46
// Title: Permutations
// Difficulty: Medium
var permute = function(nums) {
    // Global result
    const result = [];

    // DSF recursive helper
    const dfs = (i, nums) => {
        // Base Case
        if(i === nums.length) {
            result.push(nums.slice());
        }

        // DFS recursive case
        for(let j = i; j < nums.length; j++) {
            // Swap
            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    dfs(0, nums);

    return result;
};