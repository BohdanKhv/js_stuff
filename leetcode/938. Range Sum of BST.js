// Problem #: 938
// Title: Range Sum of BST
// Difficulty: Easy
var rangeSumBST = function(root, low, high) {
    if(!root) return 0
    
    // Using breadth first values
    let result = 0;
    const queue = [root];
    
    while(queue.length > 0) {
        const current = queue.shift();
        
        if(current.val >= low && current.val <= high) result += current.val;
        
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    
    return result;
};