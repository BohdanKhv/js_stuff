// Problem #: 101
// Title: Symmetric Tree
// Difficulty: Easy

// Time Complexity: O(n) - n is the number of nodes in the tree
// Space Complexity: O(n) - n is the number of nodes in the tree
var isSymmetric = function(root) {
    if((root.left && !root.right) || (!root.left && root.right)) return false
    else if(!root.left && !root.right) return true
    
    const arr1 = [];
    const arr2 = [];
    
    const traverse1 = (node) => {
        if(node?.right === null || node?.left === null) arr1.push(null);
        if(node.left) traverse1(node.left);
        arr1.push(node.val);        
        if(node.right) traverse1(node.right);
    }

    const traverse2 = (node) => {
        if(node?.right === null || node?.left === null) arr2.push(null);
        if(node.right) traverse2(node.right);
        arr2.push(node.val);
        if(node.left) traverse2(node.left);
    }

    traverse1(root.left);
    traverse2(root.right);
    return _.isEqual(arr1, arr2)
};

// Recursive solution
// Time Complexity: O(n) - n is the number of nodes in the tree
// Space Complexity: O(n) - n is the number of nodes in the tree
var isSymmetric = function(root) {
    if(!root) return true;
    return isMirror(root.left, root.right);
}

function isMirror(left, right) {
    if(!left && !right) return true;
    if(!left || !right) return false;
    return (left.val === right.val) && isMirror(left.right, right.left) && isMirror(left.left, right.right);
}