// Problem #: 1022
// Title: Sum of Root To Leaf Binary Numbers
// Difficulty: Easy

// Time: O(n), Space: O(n)
var sumRootToLeaf = function(root) {

    let sum = 0;

    // Depth first search
    // Go through each path and add the value of the path to the sum
    const dsf = (node, str) => {
        // If we reach a leaf, add the value of the path to the sum
        // The value has to be converted from binary to decimal
        if(!node.left && !node.right) sum += parseInt((str + node.val), 2)

        // Add the current node value to the string
        str = str + node.val;

        // If there is a left child, go through the left child
        if(node.left) dsf(node.left, str);
        // If there is a right child, go through the right child
        if(node.right) dsf(node.right, str);
    }

    // Start the dsf at the root
    dsf(root, '');

    return sum
};