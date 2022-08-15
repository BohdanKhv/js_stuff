// Problem #: 589
// Title: N-ary Tree Preorder Traversal
// Difficulty: Easy
// O(n) time, O(n) space (n is the number of nodes in the tree)
var preorder = function(root) {
    // Base case
    if(!root) return [];

    const result = [];

    const traverse = (node) => {
        // Add the current node to the result array
        result.push(node.val);

        // Recurse on the children of the current node
        if(node.children) {
            for(let i = 0; i < node.children.length; i++) {
                traverse(node.children[i]);
            }
        }
    }

    traverse(root);

    return result;
};