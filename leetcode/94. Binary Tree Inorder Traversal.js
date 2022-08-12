// Problem #: 94
// Title: Binary Tree Inorder Traversal
// Difficulty: Easy
var inorderTraversal = function(root) {
    if(root === null) return [];

    let results = [];

    // left, root, right
    // Traverse all the way down the left side of the tree
    // Add the current node to the results array
    const traverse = (node) => {
        if(node.left) traverse(node.left);

        // Add the current node to the results array
        results.push(node.val);

        // Do the same for the right side of the tree
        if(node.right) traverse(node.right);
    }

    // Start the traversal
    traverse(root);

    return results;
};

//       1
//     /   \
//    2     3
//   / \     \
//  4   5     7

// [4, 2, 5, 1, 3, 7]