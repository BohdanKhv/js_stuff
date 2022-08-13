// Problem #: 2236
// Title: Root Equals Sum of Children
// Difficulty: Easy
var checkTree = function(root) {
    // Guard against empty tree
    if(!root || (root && (!root.left || !root.right))) return false
    return root.val === (root.left.val + root.right.val)
};