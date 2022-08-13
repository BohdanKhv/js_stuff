// Problem #: 112
// Title: Path Sum
// Difficulty: Easy
var hasPathSum = function(root, targetSum) {
    if(!root) return false;

    let hasPath = false;

    // Using depth first search to find the path
    const dfs = (node, sum) => {
        if(hasPath) return
        // If we reach the leaf node, check if the sum is equal to the target sum
        if(!node.left && !node.right && sum === node.val) hasPath = true;
        
        // Decrement the sum by the value of the current node
        sum = sum - node.val;
        
        // Keep searching for the path
        if(node.left) dfs(node.left, sum);
        if(node.right) dfs(node.right, sum);
    }

    // Start the search from the root node
    dfs(root, targetSum);

    return hasPath;
};

// Same but shorter
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    
    let hasPath = false;
    
    const dfs = (node, sum) => {
        if(hasPath) return;
        if(!node.left && !node.right) {
            if(sum === node.val) hasPath = true;
            return;
        }
        
        sum = sum - node.val;
        
        if(node.left) dfs(node.left, sum);
        if(node.right) dfs(node.right, sum);
    }

    dfs(root, targetSum);

    return hasPath;
};

// Recursive solution (Faster)
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    if(!root.left && !root.right && targetSum === root.val) return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}