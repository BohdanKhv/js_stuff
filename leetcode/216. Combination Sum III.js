// Problem #: 216
// Title: Combination Sum III
// Difficulty: Medium
var combinationSum3 = function(k, n) {
    // Global result
    const result = [];
    
    const nums = [];
    for(let i = 1; i < 10; i++) nums.push(i);
    
    const dfs = (i, nums, k, n, slate) => {
        // Backtracking case
        if(n < 0) return
        
        // Base case
        if(slate.length === k) {
            if(n === 0)
                result.push(slate.slice())
            return
        }
        
        //dfs recursive case
        for(let j = i; j < nums.length; j++) {
            slate.push(nums[j]);
            dfs(j + 1, nums, k, n - nums[j], slate);
            slate.pop();
        }
    }
    
    dfs(0, nums, k, n, []);
    
    return result;
};