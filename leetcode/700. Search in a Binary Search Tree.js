// Problem #: 700
// Title: Search in a Binary Search Tree
// Difficulty: Easy
var searchBST = function(root, val) {
    if(!root) return null

    // Using breadth first values
    const queue = [root];

    while(queue.length > 0) {
        const current = queue.shift();
        
        if(current.val === val) return current;
        
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    
    return null
};