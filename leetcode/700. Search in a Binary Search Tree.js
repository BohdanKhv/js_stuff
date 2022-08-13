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


// Traverse solutions
var searchBST = function(root, val) {
    if(!root) return null

    let result = null;

    // => Left | => Middle | => Right
    const traverse = (node) => {
        if(node.left) traverse(node.left);

        if(node.val === val) result = node;
        
        if(node.right) traverse(node.right);
    }

    traverse(root);

    return result;
};

// Recursive solution
var searchBST = function(root, val) {
    if(!root) return null;
    if(root.val === val) return root;
    return searchBST(root.right, val) || searchBST(root.left, val);
};