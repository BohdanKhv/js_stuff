// Problem #: 144
// Title: Binary Tree Preorder Traversal
// Difficulty: Easy
var preorderTraversal = function(root) {
    if(!root) return [];

    const result = [];

    const traverse = (node) => {
        result.push(node.val);
        
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }

    traverse(root);

    return result;
};