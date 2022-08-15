// Problem #: 98
// Title: Validate Binary Search Tree
// Difficulty: Medium
var isValidBST = function(root) {
    if(!root) return false;

    let prev = -Infinity;
    let valid = true;

    // Use inorder traversal to check if BST is valid
    // Left | Current | Right
    const traverse = (node) => {
        // Base case
        if(!valid) return

        if(node.left) {
            traverse(node.left);
        };

        // Check if current node is less than previous node
        // If not, set valid to false
        if(node.val > prev)
            prev = node.val;
        else
            valid = false;

        if(node.right) {
            traverse(node.right);
        };
    }

    // Traverse the tree
    traverse(root);

    return valid;
};