// Problem #: 39
// Title: Combination Sum
// Difficulty: Medium
var combinationSum = function(candidates, target) {
    // Global state
    const result = [];

    // Sort the array
    candidates.sort();

    // dfs helper
    // We need target so we don't have to use reduce
    const dfs = (i, candidates, target, slate) => {
        // Backtracking
        if(target < 0) return

        // Base case
        if(target === 0) {
            result.push([...slate]);
            return
        }
        
        // dfs recursive case
        for(let j = i; j < candidates.length; j++) {
            // If the current candidate is the same as the previous one, skip it
            // This is to avoid duplicates
            if(i !== j && candidates[j] === candidates[j - 1]) continue

            // Add the current candidate to the slate
            slate.push(candidates[j]);

            // Recurse with the new slate and target
            dfs(j, candidates, target - candidates[j], slate);

            // Clean slate
            slate.pop()
        }
    }
    
    dfs(0, candidates, target, []);
    
    return result;
};